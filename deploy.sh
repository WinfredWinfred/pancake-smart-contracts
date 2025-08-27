set -e

echo "➡️ Loading environment variables from .env file..."

if [ -f .env ]; then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  echo "⚠️ .env file not found. Please create one with RPC_URL and PRIVATE_KEY."
  exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "⚙️ Compiling smart contracts..."

npx hardhat compile

echo "🚀 Deploying smart contracts..."
npx hardhat run scripts/deploy.ts --network target_network

echo "✅ Deployment finished successfully!"