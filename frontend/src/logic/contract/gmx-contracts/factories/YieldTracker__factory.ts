/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YieldTracker, YieldTrackerInterface } from "../YieldTracker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_yieldToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "claimable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimableReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cumulativeRewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distributor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokensPerInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "previousCumulatedRewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_distributor",
        type: "address",
      },
    ],
    name: "setDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "updateRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516111473803806111478339818101604052602081101561003357600080fd5b50516001600081905580546001600160a01b03199081163317909155600280546001600160a01b03909316929091169190911790556110d0806100776000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806301e33667146100bf57806312d43a51146100f757806321c0b3421461011b5780632459f51d1461015b578063402914f51461016357806344a08411146101895780635fd61965146101af57806375619ab5146101d557806376d5de85146101fb578063aaf5eb6814610203578063bfe109281461020b578063cfad57a214610213578063e950342514610239578063f5fc50761461025f575b600080fd5b6100f5600480360360608110156100d557600080fd5b506001600160a01b03813581169160208101359091169060400135610267565b005b6100ff6102cd565b604080516001600160a01b039092168252519081900360200190f35b6101496004803603604081101561013157600080fd5b506001600160a01b03813581169160200135166102dc565b60408051918252519081900360200190f35b610149610423565b6101496004803603602081101561017957600080fd5b50356001600160a01b031661049e565b6101496004803603602081101561019f57600080fd5b50356001600160a01b03166106e3565b6100f5600480360360208110156101c557600080fd5b50356001600160a01b03166106f5565b6100f5600480360360208110156101eb57600080fd5b50356001600160a01b03166109ce565b6100ff610a3d565b610149610a4c565b6100ff610a5c565b6100f56004803603602081101561022957600080fd5b50356001600160a01b0316610a6b565b6101496004803603602081101561024f57600080fd5b50356001600160a01b0316610ada565b610149610aec565b6001546001600160a01b031633146102b4576040805162461bcd60e51b81526020600482015260176024820152600080516020611051833981519152604482015290519081900360640190fd5b6102c86001600160a01b0384168383610af2565b505050565b6001546001600160a01b031681565b6002546000906001600160a01b0316331461032c576040805162461bcd60e51b81526020600482015260176024820152600080516020611051833981519152604482015290519081900360640190fd5b610335836106f5565b6001600160a01b0380841660009081526005602090815260408083208054908490556003548251633b83c43960e11b815230600482015292519195169263770788729260248082019391829003018186803b15801561039357600080fd5b505afa1580156103a7573d6000803e3d6000fd5b505050506040513d60208110156103bd57600080fd5b505190506103d56001600160a01b0382168584610af2565b604080516001600160a01b03871681526020810184905281517f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4929181900390910190a15090505b92915050565b60035460408051629c368960e61b815230600482015290516000926001600160a01b03169163270da240916024808301926020929190829003018186803b15801561046d57600080fd5b505afa158015610481573d6000803e3d6000fd5b505050506040513d602081101561049757600080fd5b5051905090565b60025460408051636021726760e01b81526001600160a01b0384811660048301529151600093849316916360217267916024808301926020929190829003018186803b1580156104ed57600080fd5b505afa158015610501573d6000803e3d6000fd5b505050506040513d602081101561051757600080fd5b50519050806105405750506001600160a01b0381166000908152600560205260409020546106de565b60035460408051635bfdd4fb60e11b815230600482015290516000926105d29268327cb2734119d3b7a9601e1b926001600160a01b039092169163b7fba9f691602480820192602092909190829003018186803b1580156105a057600080fd5b505afa1580156105b4573d6000803e3d6000fd5b505050506040513d60208110156105ca57600080fd5b505190610b44565b90506000600260009054906101000a90046001600160a01b03166001600160a01b031663817b1cd26040518163ffffffff1660e01b815260040160206040518083038186803b15801561062457600080fd5b505afa158015610638573d6000803e3d6000fd5b505050506040513d602081101561064e57600080fd5b50519050600061066a6106618484610ba4565b60045490610be3565b6001600160a01b0387166000908152600660205260409020549091506106d7906106b89068327cb2734119d3b7a9601e1b906106b2906106ab908690610c3b565b8890610b44565b90610ba4565b6001600160a01b03881660009081526005602052604090205490610be3565b9450505050505b919050565b60066020526000908152604090205481565b6002600054141561074d576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260009081556003546001600160a01b0316156107e457600360009054906101000a90046001600160a01b03166001600160a01b031663e4fc6b6d6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156107b557600080fd5b505af11580156107c9573d6000803e3d6000fd5b505050506040513d60208110156107df57600080fd5b505190505b60048054600254604080516340bd8e6960e11b8152905192936000936001600160a01b039093169263817b1cd2928083019260209291829003018186803b15801561082e57600080fd5b505afa158015610842573d6000803e3d6000fd5b505050506040513d602081101561085857600080fd5b50519050801580159061086b5750600083115b1561089c5761089461088d826106b28668327cb2734119d3b7a9601e1b610b44565b8390610be3565b600481905591505b816108a9575050506109c6565b6001600160a01b038416156109c25760025460408051636021726760e01b81526001600160a01b03878116600483015291516000939290921691636021726791602480820192602092909190829003018186803b15801561090957600080fd5b505afa15801561091d573d6000803e3d6000fd5b505050506040513d602081101561093357600080fd5b50516001600160a01b03861660009081526006602052604081205491925061099761097868327cb2734119d3b7a9601e1b6106b26109718987610c3b565b8790610b44565b6001600160a01b03891660009081526005602052604090205490610be3565b6001600160a01b03881660009081526005602090815260408083209390935560069052208590555050505b5050505b506001600055565b6001546001600160a01b03163314610a1b576040805162461bcd60e51b81526020600482015260176024820152600080516020611051833981519152604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b68327cb2734119d3b7a9601e1b81565b6003546001600160a01b031681565b6001546001600160a01b03163314610ab8576040805162461bcd60e51b81526020600482015260176024820152600080516020611051833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60056020526000908152604090205481565b60045481565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526102c8908490610c7d565b600082610b535750600061041d565b82820282848281610b6057fe5b0414610b9d5760405162461bcd60e51b81526004018080602001828103825260218152602001806110306021913960400191505060405180910390fd5b9392505050565b6000610b9d83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610d2e565b600082820183811015610b9d576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b6000610b9d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610dd0565b6060610cd2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e2a9092919063ffffffff16565b8051909150156102c857808060200190516020811015610cf157600080fd5b50516102c85760405162461bcd60e51b815260040180806020018281038252602a815260200180611071602a913960400191505060405180910390fd5b60008183610dba5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d7f578181015183820152602001610d67565b50505050905090810190601f168015610dac5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610dc657fe5b0495945050505050565b60008184841115610e225760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610d7f578181015183820152602001610d67565b505050900390565b6060610e398484600085610e41565b949350505050565b606082471015610e825760405162461bcd60e51b815260040180806020018281038252602681526020018061100a6026913960400191505060405180910390fd5b610e8b85610f9d565b610edc576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310610f1b5780518252601f199092019160209182019101610efc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610f7d576040519150601f19603f3d011682016040523d82523d6000602084013e610f82565b606091505b5091509150610f92828286610fa3565b979650505050505050565b3b151590565b60608315610fb2575081610b9d565b825115610fc25782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315610d7f578181015183820152602001610d6756fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775969656c64547261636b65723a20666f7262696464656e0000000000000000005361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220d187ed8cb8c110a5bee5513d05eb9fafb7b34555701dbf5b4dcb4027db5d333064736f6c634300060c0033";

export class YieldTracker__factory extends ContractFactory {
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
    _yieldToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldTracker> {
    return super.deploy(_yieldToken, overrides || {}) as Promise<YieldTracker>;
  }
  getDeployTransaction(
    _yieldToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldToken, overrides || {});
  }
  attach(address: string): YieldTracker {
    return super.attach(address) as YieldTracker;
  }
  connect(signer: Signer): YieldTracker__factory {
    return super.connect(signer) as YieldTracker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldTrackerInterface {
    return new utils.Interface(_abi) as YieldTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldTracker {
    return new Contract(address, _abi, signerOrProvider) as YieldTracker;
  }
}
