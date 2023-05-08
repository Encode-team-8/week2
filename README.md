# Report week end project week 2

```powershell
yarn install
```

```powershell
yarn hardhat compile
```

## Scripts:

- **scripts/Deployment.ts** - Deploy contract with an array of proposals

```powershell
yarn run ts-node --files ./scripts/Deployment.ts
```

do not forget to copy paste the contract address in Query, Delegate and Cast

- **scripts/VoteRights.ts** - Granting vote rights to sepolia adress user

```powershell
yarn run ts-node --files ./scripts/VoteRights.ts SepoliaAddress
```

- **scripts/DelegateVote.ts** - Delegate vote to another sepolia adress user

```powershell
yarn run ts-node --files ./scripts/DelegateVotes.ts SepoliaAdressToDelegate
```

- **scripts/CastVote.ts** - if sepolia adress user has voting right he will be able to vote

```powershell
yarn run ts-node --files ./scripts/CastVote.ts numberOfProposal(start at 0)
```

- **scripts/QueryResult.ts** - showing the proposals with most vote

```powershell
yarn run ts-node --files ./scripts/QueryResult.ts
```

Report:

Deploy:
https://sepolia.etherscan.io/address/0x9B41bc4De53eC3E7ac104015D25e4cA61256D864

Grant Voting Rights:
https://sepolia.etherscan.io/tx/0x076eb6fbc82a5407cfc23f08c15c1a18e1189118df2a92c60cf1703b27d2583d

Delegate Votes:
https://sepolia.etherscan.io/tx/0x027dc535735704065cd1576cac1133041cd1bcd446a9223d8ef485485775311d

Vote:
https://sepolia.etherscan.io/tx/0x9306d36b60e233555ec4b1cd1a61e19366af8921ff15164e00e85eadf4ba09d0
