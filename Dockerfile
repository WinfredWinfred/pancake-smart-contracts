FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx hardhat compile --force


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/artifacts ./artifacts
COPY --from=builder /app/cache ./cache

COPY package*.json ./
COPY hardhat.config.ts ./
COPY scripts/ ./scripts
COPY deploy.sh ./

ENTRYPOINT ["/bin/sh", "deploy.sh"]