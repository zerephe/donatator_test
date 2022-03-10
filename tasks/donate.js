require('dotenv').config();

const Donation = require('../artifacts/contracts/Donatator.sol/MakeDonation.json');

task("donate", "Donate!")
  .addParam("donationAmount", "Amount of tokens")
  .setAction(async (taskArgs) => {
    const [signer] = await hre.ethers.getSigners()
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const donationInstance = new hre.ethers.Contract(
      contractAddress,
      Donation.abi,
      signer
    );

    const result = await donationInstance.donate(taskArgs.donationAmount, {value: taskArgs.donationAmount });
    
    console.log(result);
  });
