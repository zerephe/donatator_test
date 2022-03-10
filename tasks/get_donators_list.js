require('dotenv').config();


const Donation = require('../artifacts/contracts/Donatator.sol/MakeDonation.json');

task("get_donators_list", "Get all donors address list.")
  .setAction(async (taskArgs) => {
    const [signer] = await hre.ethers.getSigners();
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const donationInstance = new hre.ethers.Contract(
      contractAddress,
      Donation.abi,
      signer
    );

    let addresses = await donationInstance.getDonatorAddresses();
    
    for(address of addresses){
      console.log(address);
    }
  });

