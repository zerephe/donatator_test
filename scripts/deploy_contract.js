const hre = require("hardhat");
const ethers = hre.ethers


async function main() {
  const [signer] = await ethers.getSigners()
  const Donatator = await hre.ethers.getContractFactory("MakeDonation", signer);
  const donatator = await Donatator.deploy();

  await donatator.deployed();

  console.log("Contract deployed address: ", donatator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
