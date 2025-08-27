# PancakeSwap Fork Deployment

This repository contains a cleaned-up version of the PancakeSwap v2 smart contracts for easy deployment to any EVM-compatible blockchain.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) (Optional, for containerized deployment)
- A wallet with funds on the target network to pay for gas fees.

## Deployment Guide

### 1. Clone the Repository

git clone <your-repo-url>
cd pancake-smart-contracts 2. Configure Environment Variables
Create a .env file in the root of the project
Now, edit the .env file with your specific details:

RPC_URL: The RPC endpoint for the blockchain you are deploying to (like from Alchemy or Infura).

PRIVATE_KEY: The private key of the wallet you will use for deployment. IMPORTANT: This key controls your funds. Do not share it or commit it to Git.

WETH_ADDRESS: The contract address of the wrapped native token like WETH, WBNB, WMATIC on the target chain.

3. Deploy
   You can deploy using either a local Node.js environment or Docker.

Option A: Deploy with Node.js
Run the deployment script, which will install dependencies, compile contracts, and deploy them to the network specified in your .env file;
chmod +x deploy.sh
./deploy.sh

Option B: Deploy with Docker
Build the Docker image and run the container. The container will execute the deploy.sh script using the environment variables from your local .env file.

# Build the Docker image

docker build -t pancakeswap-deployer .

# Run the deployment from the container

docker run --rm --env-file .env pancakeswap-deployer
Upon successful execution, the script will print the deployed contract addresses for the Factory and Router to the console.
