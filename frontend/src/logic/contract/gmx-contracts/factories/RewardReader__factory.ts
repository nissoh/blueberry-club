/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardReader, RewardReaderInterface } from "../RewardReader";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_depositTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_rewardTrackers",
        type: "address[]",
      },
    ],
    name: "getDepositBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_rewardTrackers",
        type: "address[]",
      },
    ],
    name: "getStakingInfo",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_vesters",
        type: "address[]",
      },
    ],
    name: "getVestingInfoV2",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611004806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063575157e414610046578063937a0be8146101c9578063e1fc2a381461027a575b600080fd5b6101796004803603606081101561005c57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561008657600080fd5b82018360208201111561009857600080fd5b803590602001918460208302840111600160201b831117156100b957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561010857600080fd5b82018360208201111561011a57600080fd5b803590602001918460208302840111600160201b8311171561013b57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061032b945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101b557818101518382015260200161019d565b505050509050019250505060405180910390f35b610179600480360360408110156101df57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561020957600080fd5b82018360208201111561021b57600080fd5b803590602001918460208302840111600160201b8311171561023c57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061045e945050505050565b6101796004803603604081101561029057600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156102ba57600080fd5b8201836020820111156102cc57600080fd5b803590602001918460208302840111600160201b831117156102ed57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506107ba945050505050565b60608082516001600160401b038111801561034557600080fd5b5060405190808252806020026020018201604052801561036f578160200160208202803683370190505b50905060005b835181101561045557600084828151811061038c57fe5b60200260200101519050806001600160a01b031663f5d9d63e888885815181106103b257fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561040757600080fd5b505afa15801561041b573d6000803e3d6000fd5b505050506040513d602081101561043157600080fd5b5051835184908490811061044157fe5b602090810291909101015250600101610375565b50949350505050565b60606000600590506060818451026001600160401b038111801561048157600080fd5b506040519080825280602002602001820160405280156104ab578160200160208202803683370190505b50905060005b84518110156104555760008582815181106104c857fe5b60200260200101519050806001600160a01b031663402914f5886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561051f57600080fd5b505afa158015610533573d6000803e3d6000fd5b505050506040513d602081101561054957600080fd5b50518351849084870290811061055b57fe5b602002602001018181525050806001600160a01b031663a8d936276040518163ffffffff1660e01b815260040160206040518083038186803b1580156105a057600080fd5b505afa1580156105b4573d6000803e3d6000fd5b505050506040513d60208110156105ca57600080fd5b5051835184906001858802019081106105df57fe5b602002602001018181525050806001600160a01b031663a3180217886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561063857600080fd5b505afa15801561064c573d6000803e3d6000fd5b505050506040513d602081101561066257600080fd5b50518351849060028588020190811061067757fe5b602002602001018181525050806001600160a01b0316633792def3886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156106d057600080fd5b505afa1580156106e4573d6000803e3d6000fd5b505050506040513d60208110156106fa57600080fd5b50518351849060038588020190811061070f57fe5b60200260200101818152505085828151811061072757fe5b60200260200101516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561076757600080fd5b505afa15801561077b573d6000803e3d6000fd5b505050506040513d602081101561079157600080fd5b5051835184906004858802019081106107a657fe5b6020908102919091010152506001016104b1565b60606000600c90506060818451026001600160401b03811180156107dd57600080fd5b50604051908082528060200260200182016040528015610807578160200160208202803683370190505b50905060005b845181101561045557600085828151811061082457fe5b602002602001015190506000816001600160a01b0316636bcb411a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561086957600080fd5b505afa15801561087d573d6000803e3d6000fd5b505050506040513d602081101561089357600080fd5b505160408051635d50e72960e01b81526001600160a01b038b81166004830152915192935090841691635d50e72991602480820192602092909190829003018186803b1580156108e257600080fd5b505afa1580156108f6573d6000803e3d6000fd5b505050506040513d602081101561090c57600080fd5b50518451859085880290811061091e57fe5b602002602001018181525050816001600160a01b031663d5a73fdd896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561097757600080fd5b505afa15801561098b573d6000803e3d6000fd5b505050506040513d60208110156109a157600080fd5b5051845185906001868902019081106109b657fe5b6020026020010181815250508683815181106109ce57fe5b60200260200101516001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a2257600080fd5b505afa158015610a36573d6000803e3d6000fd5b505050506040513d6020811015610a4c57600080fd5b505184518590600286890201908110610a6157fe5b602002602001018181525050816001600160a01b03166371417b32896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610aba57600080fd5b505afa158015610ace573d6000803e3d6000fd5b505050506040513d6020811015610ae457600080fd5b505184518590600386890201908110610af957fe5b602002602001018181525050816001600160a01b031663402914f5896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610b5257600080fd5b505afa158015610b66573d6000803e3d6000fd5b505050506040513d6020811015610b7c57600080fd5b505184518590600486890201908110610b9157fe5b602002602001018181525050816001600160a01b03166308f26c76896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610bea57600080fd5b505afa158015610bfe573d6000803e3d6000fd5b505050506040513d6020811015610c1457600080fd5b505184518590600586890201908110610c2957fe5b602002602001018181525050816001600160a01b03166345f01ee6896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610c8257600080fd5b505afa158015610c96573d6000803e3d6000fd5b505050506040513d6020811015610cac57600080fd5b505184518590600686890201908110610cc157fe5b602002602001018181525050806001600160a01b0316633792def3896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d1a57600080fd5b505afa158015610d2e573d6000803e3d6000fd5b505050506040513d6020811015610d4457600080fd5b505184518590600786890201908110610d5957fe5b602002602001018181525050816001600160a01b031663b71bce2a896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610db257600080fd5b505afa158015610dc6573d6000803e3d6000fd5b505050506040513d6020811015610ddc57600080fd5b505184518590600886890201908110610df157fe5b602002602001018181525050816001600160a01b031663a2545fa5896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610e4a57600080fd5b505afa158015610e5e573d6000803e3d6000fd5b505050506040513d6020811015610e7457600080fd5b505184518590600986890201908110610e8957fe5b602002602001018181525050806001600160a01b031663a3180217896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ee257600080fd5b505afa158015610ef6573d6000803e3d6000fd5b505050506040513d6020811015610f0c57600080fd5b505184518590600a86890201908110610f2157fe5b602002602001018181525050816001600160a01b0316637337035c896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610f7a57600080fd5b505afa158015610f8e573d6000803e3d6000fd5b505050506040513d6020811015610fa457600080fd5b505184518590600b86890201908110610fb957fe5b6020908102919091010152505060010161080d56fea26469706673582212209ec3089e6705cb0b87a9a6fb78263d37506dd58770b9ad90ca48d1a1e8468e2764736f6c634300060c0033";

export class RewardReader__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardReader> {
    return super.deploy(overrides || {}) as Promise<RewardReader>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewardReader {
    return super.attach(address) as RewardReader;
  }
  connect(signer: Signer): RewardReader__factory {
    return super.connect(signer) as RewardReader__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardReaderInterface {
    return new utils.Interface(_abi) as RewardReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardReader {
    return new Contract(address, _abi, signerOrProvider) as RewardReader;
  }
}
