# Report week end project week 2

```powershell
yarn install
```

```powershell
yarn hardhat compile
```

## Scripts:


* **scripts/Deployment.ts** - Deploy contract with an array of proposals
```powershell
yarn run ts-node --files ./scripts/Deployment.ts
```
do not forget to copy paste the contract address in Query, Delegate and Cast
* **scripts/VoteRights.ts** - Granting vote rights to sepolia adress user
```powershell
yarn run ts-node --files ./scripts/VoteRights.ts ContractAdress SepoliaAddress
```
* **scripts/DelegateVote.ts** - Delegate vote to another sepolia adress user
```powershell
yarn run ts-node --files ./scripts/DelegateVotes.ts SepoliaAdressToDelegate
```
* **scripts/CastVote.ts** - if sepolia adress user has voting right he will be able to vote
```powershell
yarn run ts-node --files ./scripts/CastVote.ts numberOfProposal(start at 0)
```
* **scripts/QueryResult.ts** - showing the proposals with most vote
```powershell
yarn run ts-node --files ./scripts/QueryResult.ts
```
