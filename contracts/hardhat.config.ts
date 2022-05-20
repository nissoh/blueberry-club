
import { HardhatUserConfig, task } from "hardhat/config"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"

import dotenv from "dotenv"
import { CHAIN, NETWORK_METADATA } from '@gambitdao/gmx-middleware'
dotenv.config({ path: '../.env' })

const key = process.env.ACCOUNT
const accounts = key ? [key] : []


const config: HardhatUserConfig = {
  networks: {
    arbitrumTestnet: {
      chainId: CHAIN.ARBITRUM_RINKBY,
      url: NETWORK_METADATA[CHAIN.ARBITRUM_RINKBY].rpcUrls[0],
      accounts
    },
    ropsten: {
      chainId: CHAIN.ETH_ROPSTEN,
      url: NETWORK_METADATA[CHAIN.ETH_ROPSTEN].rpcUrls[0],
      accounts
    },
    arbitrum: {
      chainId: CHAIN.ARBITRUM,
      url: NETWORK_METADATA[CHAIN.ARBITRUM].rpcUrls[0],
      accounts
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  etherscan: {
    apiKey: process.env.ARBISCAN
  }
}

export default config
