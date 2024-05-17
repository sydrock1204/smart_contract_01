const hre = require("hardhat");

async function main() {
  // deploy contract
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  console.log("Counter contract deployed to: ", counter.address);

  // get transaction receipt
  const receipt = await counter.deployTransaction.wait();
  console.log("Deployed by address: ", receipt.from);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
