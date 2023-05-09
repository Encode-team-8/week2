# Report Weekend Project -- Week 2

```powershell
yarn install
```

```powershell
yarn hardhat compile
```

To complete this assignment you will need at least two seed phrases from two test wallets and these wallets will need Sepolia ETH from Alchemy faucet.

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

- **scripts/CastVote.ts** - if sepolia address user has voting right he will be able to vote

```powershell
yarn run ts-node --files ./scripts/CastVotes.ts numberOfProposal(start at 0)
```

- **scripts/QueryResult.ts** - showing the proposals with most vote

```powershell
yarn run ts-node --files ./scripts/QueryResult.ts
```

Report:

Deploy:
https://sepolia.etherscan.io/address/0x9B41bc4De53eC3E7ac104015D25e4cA61256D864

### Status: `Success`

Grant Voting Rights:
https://sepolia.etherscan.io/tx/0x076eb6fbc82a5407cfc23f08c15c1a18e1189118df2a92c60cf1703b27d2583d

### Status: `Success`

Delegate Votes:
https://sepolia.etherscan.io/tx/0x027dc535735704065cd1576cac1133041cd1bcd446a9223d8ef485485775311d

### Status: `Success`

Vote:
https://sepolia.etherscan.io/tx/0xfe14c17b0224340fa3fea53ccf9574e1994cd8d73091e58ca521ba18b612026c

### Status: `Success.` -- recently working
