import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/config';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-deploy-tenderly';
import './tasks';
import {node_url, accounts, addForkConfiguration, etherscan} from './utils/network';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    alice: 1,
    bob: 2,
    mark: 3,
  },
  networks: addForkConfiguration({
    hardhat: {
      initialBaseFeePerGas: 0,
    },
    localhost: {
      url: node_url('localhost'),
      accounts: accounts(),
    },
    arbitrum_rinkeby: {
      url: node_url('arbitrum_rinkeby'),
      accounts: accounts('arbitrum_rinkeby'),
      verify: etherscan('arbitrum_rinkeby'),
    },
    arbitrum: {
      url: node_url('arbitrum'),
      accounts: accounts('arbitrum'),
      verify: etherscan('arbitrum'),
    },
  }),
  paths: {
    sources: 'src',
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: 'EUR',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    gasPrice: 100,
    token: 'ETH',
    gasPriceApi: 'https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice',
    onlyCalledMethods: false,
    showTimeSpent: true,
    src: 'src',
    showMethodSig: true,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 0,
  },
  external: process.env.HARDHAT_FORK
    ? {
        deployments: {
          hardhat: ['deployments/' + process.env.HARDHAT_FORK],
          localhost: ['deployments/' + process.env.HARDHAT_FORK],
        },
      }
    : undefined,
};

export default config;
