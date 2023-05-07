# Report week end project week 2

```powershell
yarn install
```

```powershell
yarn hardhat compile
```

## Scripts:


```powershell
yarn run ts-node --files ./scripts/CastVote.ts numberOfProposal(start at 0)
```
* **scripts/CastVote.ts** - if sepolia adress user has voting right he will be able to vote
```powershell
yarn run ts-node --files ./scripts/DelegateVotes.ts SepoliaAdressToDelegate
```
* **scripts/DelegateVote.ts** - Delegate vote to another sepolia adress user
```powershell
yarn run ts-node --files ./scripts/Deployment.ts
```
	do not forget to copy paste the contract address in Query, Delegate and Cast
* **scripts/Deployment.ts** - Deploy contract with an array of proposals
```powershell
yarn run ts-node --files ./scripts/VoteRights.ts ContractAdress SepoliaAddress
```
* **scripts/VoteRights.ts** - Granting vote rights to sepolia adress user
```powershell
yarn run ts-node --files ./scripts/QueryResult.ts
```
* **scripts/QueryResult.ts** - showing the proposals with most vote
