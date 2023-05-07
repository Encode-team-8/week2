import { ethers } from "hardhat";
import { Ballot, Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv"; 
dotenv.config();

async function main() {
    const args = process.argv.slice(2)
    const addressToGiveVote = args[0]
    const contractAddress = args[1]
    const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
    console.log(`Using wallet address ${wallet.address}`)

	const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);
    const lastBlock = await provider.getBlock("latest")
    console.log(`The last block is ${lastBlock.number}`)

    const signer = wallet.connect(provider)
    const balance = await signer.getBalance()
    console.log(`Balance is ${balance} WEI`)
    const ballotFactory = new Ballot__factory(signer)
    const ballotContract = await ballotFactory.attach(contractAddress) 
    
    console.log(`Giving voting rights to ${addressToGiveVote}`)
    const tx = await ballotContract.connect(signer).giveRightToVote(addressToGiveVote)
    await tx.wait()
    console.log(`Voting rights given to ${addressToGiveVote} at transaction ${tx.hash}`)
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})