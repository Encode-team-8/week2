import { ethers } from "hardhat";
import { Ballot__factory } from "../typechain-types";
require('dotenv').config();

const CONTRACT_ADDRESS = "0x3897B3488e778c2AE7063fC1780137Dc90a7A45a"

async function main() {
    const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_API_KEY);

    const account = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
    const wallet = new ethers.Wallet(account);
    console.log(`Connected to the wallet address ${wallet.address}`);

    const signer = wallet.connect(provider);
    const balance = await signer.getBalance();
    console.log(`Wallet balance: ${balance} Wei`);

    // 1: Attach Contract
    const ballotCF = new Ballot__factory(signer);
    console.log("Attaching to contract ...");
    const ballotC = ballotCF.attach(CONTRACT_ADDRESS);
    console.log(`Attached to Ballot contract at ${ballotC.address}`);

     // 2: Query winning proposal
    let winningName = await ballotC.winnerName();
    console.log(`winning proposal is ${ethers.utils.parseBytes32String(winningName)}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});