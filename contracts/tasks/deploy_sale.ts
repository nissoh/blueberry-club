import {task} from 'hardhat/config';

import {deploy} from '../utils/sales/deploy';
import {BigNumber, ethers} from 'ethers';

task('deploy-sale', 'Deploy a sale for Blueberry Club items')
  .addParam('implementation', `The type of sale to deploy "holder", "merkle" or "classic" (ex: "classic")`)
  .addParam('price', `The price to mint 1 item in ETH (ex: "0.01")`)
  .addParam('supply', `The maximum amount mintable (ex: "1000")`)
  .addParam('wallet', `The maximum amount mintable for 1 user (ex: "100")`)
  .addParam('transaction', `The maximum amount mintable in same call (ex: "10")`)
  .addParam('start', `The timestamp (in seconds) when the sale start (ex: "0")`)
  .addParam('end', `The timestamp (in seconds) when the sale end (ex: "9999999999999999999999")`)
  .addParam('tokenId', `The item to mint (ex: "1000")`)
  .addParam(
    'currency',
    `The ERC20 token you want use for sale and 0 for ETH (ex: "0x0000000000000000000000000000000000000000")`
  )
  .addOptionalParam(
    'collection',
    `Only if implementation is "holder" the address of NFTs you want user to hold (ex: "0x17f4baa9d35ee54ffbcb2608e20786473c7aa49f")`
  )
  .addOptionalParam(
    'root',
    `The merkle root for the sale (ex: "0x0000000000000000000000000000000000000000000000000000000000000000")`
  )
  .setAction(
    async (
      taskArgs: {
        implementation: string;
        price: string;
        supply: string;
        wallet: string;
        transaction: string;
        start: string;
        end: string;
        tokenId: string;
        currency: string;
        collection?: string;
        root?: string;
      },
      hre
    ) => {
      if (
        taskArgs.implementation != 'classic' &&
        taskArgs.implementation != 'merkle' &&
        taskArgs.implementation != 'holder'
      ) {
        throw new Error('Unknown implementation');
      }

      if (taskArgs.implementation == 'classic') {
        console.log(`Deploying...`);
        const clone = await deploy(hre).classic(
          ethers.utils.parseEther(taskArgs.price),
          BigNumber.from(taskArgs.supply),
          BigNumber.from(taskArgs.wallet),
          BigNumber.from(taskArgs.transaction),
          BigNumber.from(taskArgs.start),
          BigNumber.from(taskArgs.end),
          BigNumber.from(taskArgs.tokenId),
          taskArgs.currency
        );

        if (clone) {
          console.log(`Deployed !`);
          console.log(`ClassicSale: ${clone.address}`);
        } else {
          console.log(`Failed !`);
        }
      }

      if (taskArgs.implementation == 'merkle') {
        if (!taskArgs.root) {
          throw new Error('Missing root for MerkleSale');
        }

        console.log(`Deploying...`);
        const clone = await deploy(hre).merkle(
          ethers.utils.parseEther(taskArgs.price),
          BigNumber.from(taskArgs.supply),
          BigNumber.from(taskArgs.wallet),
          BigNumber.from(taskArgs.transaction),
          BigNumber.from(taskArgs.start),
          BigNumber.from(taskArgs.end),
          BigNumber.from(taskArgs.tokenId),
          taskArgs.currency,
          taskArgs.root
        );

        if (clone) {
          console.log(`Deployed !`);
          console.log(`MerkleSale: ${clone.address}`);
        } else {
          console.log(`Failed !`);
        }
      }

      if (taskArgs.implementation == 'holder') {
        if (!taskArgs.collection) {
          throw new Error('Missing collection for HolderSale');
        }

        console.log(`Deploying...`);
        const clone = await deploy(hre).holder(
          ethers.utils.parseEther(taskArgs.price),
          BigNumber.from(taskArgs.supply),
          BigNumber.from(taskArgs.wallet),
          BigNumber.from(taskArgs.transaction),
          BigNumber.from(taskArgs.start),
          BigNumber.from(taskArgs.end),
          BigNumber.from(taskArgs.tokenId),
          taskArgs.currency,
          taskArgs.collection
        );

        if (clone) {
          console.log(`Deployed !`);
          console.log(`HolderSale: ${clone.address}`);
        } else {
          console.log(`Failed !`);
        }
      }
    }
  );
