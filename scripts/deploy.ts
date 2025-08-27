import { ethers } from "hardhat";

async function main() {
  const wethAddress = process.env.WETH_ADDRESS;

  if (!wethAddress) {
    throw new Error("Please set your WETH_ADDRESS in a .env file");
  }

  console.log("Deploying contracts with the account:", (await ethers.getSigners())[0].address);

  // 1. Deploy the Factory contract
  const PancakeFactory = await ethers.getContractFactory("PancakeFactory");
  // The factory needs the address of the account that can set the fee.
  
  const deployerAddress = (await ethers.getSigners())[0].address;
  const factory = await PancakeFactory.deploy(deployerAddress);
  await factory.deployed();

  console.log(`✅ PancakeFactory deployed to: ${factory.address}`);

  // 2. Deploy the Router contract
  const PancakeRouter = await ethers.getContractFactory("PancakeRouter");
  // The router needs the factory address and the wrapped native token address.
  const router = await PancakeRouter.deploy(factory.address, wethAddress);
  await router.deployed();

  console.log(`✅ PancakeRouter deployed to: ${router.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});