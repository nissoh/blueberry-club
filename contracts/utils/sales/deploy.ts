import {HardhatRuntimeEnvironment} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import {BigNumberish, ethers} from 'ethers';

import {Log} from '@ethersproject/abstract-provider';

import {SaleFactory, ClassicSale, HolderSale, MerkleSale} from '../../typechain';

export const getDeployedAddress = (logs: Log[]) => {
  let result: string | undefined;
  logs.forEach((log) => {
    const topics = log.topics;
    const eventSignature = topics[0];

    console.log(`Event Signature: ${eventSignature}`);

    if (eventSignature == '0x83f35c3d500677e8300bf0bbf471882d821904d2b410c5df88c5ca5d3ec0907a') {
      result = ethers.utils.defaultAbiCoder.decode(['address'], topics[2])[0];
    }
  });

  return result;
};

const get = async (hre: HardhatRuntimeEnvironment, sale: string) => {
  const factory_deployment = await hre.deployments.get('SaleFactory');
  const factory = await hre.ethers.getContractAt<SaleFactory>(factory_deployment.abi, factory_deployment.address);
  const implementation_deployement = await hre.deployments.get(sale);

  return {
    factory,
    implementation_abi: implementation_deployement.abi,
    implementation_address: implementation_deployement.address,
  };
};

export const deploy = (hre: HardhatRuntimeEnvironment) => {
  const classic = async (
    price: BigNumberish,
    supply: BigNumberish,
    wallet: BigNumberish,
    transaction: BigNumberish,
    start: BigNumberish,
    end: BigNumberish,
    tokenId: BigNumberish,
    currency: string
  ) => {
    const {factory, implementation_abi, implementation_address} = await get(hre, 'ClassicSale');
    const data = hre.ethers.utils.solidityPack(
      ['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'address'],
      [price, supply, wallet, transaction, start, end, tokenId, currency]
    );

    const tx = await factory.deploy(implementation_address, data);
    const receipt = await tx.wait();

    const clone = getDeployedAddress(receipt.logs);

    if (clone) {
      return await hre.ethers.getContractAt<ClassicSale>(implementation_abi, clone);
    }
  };

  const holder = async (
    price: BigNumberish,
    supply: BigNumberish,
    wallet: BigNumberish,
    transaction: BigNumberish,
    start: BigNumberish,
    end: BigNumberish,
    tokenId: BigNumberish,
    currency: string,
    collection: string
  ) => {
    const {factory, implementation_abi, implementation_address} = await get(hre, 'HolderSale');
    const data = hre.ethers.utils.solidityPack(
      ['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address'],
      [price, supply, wallet, transaction, start, end, tokenId, currency, collection]
    );

    const tx = await factory.deploy(implementation_address, data);
    const receipt = await tx.wait();

    const clone = getDeployedAddress(receipt.logs);

    if (clone) {
      return await hre.ethers.getContractAt<HolderSale>(implementation_abi, clone);
    }
  };

  const merkle = async (
    price: BigNumberish,
    supply: BigNumberish,
    wallet: BigNumberish,
    transaction: BigNumberish,
    start: BigNumberish,
    end: BigNumberish,
    tokenId: BigNumberish,
    currency: string,
    root: string
  ) => {
    const {factory, implementation_abi, implementation_address} = await get(hre, 'MerkleSale');
    const data = hre.ethers.utils.solidityPack(
      ['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'string'],
      [price, supply, wallet, transaction, start, end, tokenId, currency, root]
    );

    const tx = await factory.deploy(implementation_address, data);
    const receipt = await tx.wait();

    const clone = getDeployedAddress(receipt.logs);

    if (clone) {
      return await hre.ethers.getContractAt<MerkleSale>(implementation_abi, clone);
    }
  };

  return {classic, holder, merkle};
};
