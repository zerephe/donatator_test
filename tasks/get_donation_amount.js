require('dotenv').config();


const Donation = require('../artifacts/contracts/Donatator.sol/MakeDonation.json');

task("get_donation_amount", "Get amount of donation made by specific address.")
  .addParam("donatorAddress", "Address of donor that made donation")
  .setAction(async (taskArgs) => {
    const [signer] = await hre.ethers.getSigners();
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const donationInstance = new hre.ethers.Contract(
      contractAddress,
      Donation.abi,
      signer
    );

    //Retriving amount of donation made by specific address
    let donationAmount = await donationInstance.getDonationAmount(taskArgs.donatorAddress);

    console.log(donationAmount);
  });

