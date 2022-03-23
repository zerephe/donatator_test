# Test Donation Smart Contract
Test application. Donation, withdraw. Qualifying task.

## Installation 

**Before compiling, install required plugins and framework in project folder:**

Run:
```shell
npm install
```

## Usage Donatator.sol

**Deploy**

On testnet Rinkeby:
```shell
npx hardhat run scripts/deploy_contract.js --network rinkeby
```
Change `rinkeby` to `localhost` in order to deploy on local host.


Without network:
```shell
npx hardhat run scripts/deploy_contract.js
```

## Tasks

To get tasks list, run this in terminal:
```shell
npx hardhat 
```
Donate:
```shell
npx hardhat donate --donation-amount 'amount in uint' --network rinkeby
```

Withdraw:
```shell
npx hardhat withdraw --recipient-address 'recipient address' --withdraw-amount 'amount in uint' --network rinkeby
```

Get list of all donor:
```shell
npx hardhat get_donators_list --network rinkeby
```

Get amount of donation that was made by specific address:
```shell
npx hardhat get_donation_amount --donator-address 'donor address' --network rinkeby
```


Use without `--network rinkeby` in order to run task locally.

**Some functions not included in tasks.**

You can get onwer address with:
```shell
function owner() public view returns(address) {
    return contractOwner;
}

```
To get balance of an account:
```shell
function getBalance() public view returns(uint){
    return address(this).balance;
}
```

## Licence
MIT
