import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const { RPC_URL, PRIVATE_KEY } = process.env;

if (!PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.20", 
  networks: {
    target_network: {
      url: RPC_URL || "",
      accounts: [PRIVATE_KEY],
    },
  },

};

export default config;