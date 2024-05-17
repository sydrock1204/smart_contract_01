const hre = require("hardhat");

async function main() {
  // deploy contract
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  console.log("Counter contract deployed to: ", counter.address);

  // get transaction receipt
  const receipt = await counter.deployTransaction.wait(6);
  console.log("Deployed by address: ", receipt.from);
  // verify contract code in etherscan
  if ((hre.network.name = "sepolia")) {
    await hre.run("verify:verify", {
      address: counter.address,
      constructorArguments: [],
    });
    console.log("contract verified");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
