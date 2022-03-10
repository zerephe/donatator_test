require('dotenv').config();


const Donation = require('../artifacts/contracts/Donatator.sol/MakeDonation.json');

task("withdraw", "Withdraw to specific address.")
  .addParam("recipientAddress", "Address of recipient")
  .addParam("withdrawAmount", "Amount of withdrawal tokens")
  .setAction(async (taskArgs) => {
    const [signer] = await hre.ethers.getSigners();
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const donationInstance = new hre.ethers.Contract(
      contractAddress,
      Donation.abi,
      signer
    );
    const result = await donationInstance.withdraw(taskArgs.recipientAddress, taskArgs.withdrawAmount);
    
    console.log(result);
  });

