/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SnapshotToken, SnapshotTokenInterface } from "../SnapshotToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addAdmin",
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
    name: "addNonStakingAccount",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "balanceOf",
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
    name: "balances",
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
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "inPrivateTransferMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "isHandler",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "nonStakingAccounts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonStakingSupply",
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
    name: "recoverClaim",
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
    name: "removeAdmin",
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
    name: "removeNonStakingAccount",
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
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_inPrivateTransferMode",
        type: "bool",
      },
    ],
    name: "setInPrivateTransferMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_yieldTrackers",
        type: "address[]",
      },
    ],
    name: "setYieldTrackers",
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
    name: "stakedBalance",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
    name: "totalSupply",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "yieldTrackers",
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
  "0x60806040523480156200001157600080fd5b506040516200285538038062002855833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491849184918491620001c59160009186019062000443565b508151620001db90600190602085019062000443565b50600480546001600160a01b03191633908117909155620001fd90826200020c565b505050505050505050620004df565b6001600160a01b038216620002535760405162461bcd60e51b8152600401808060200182810382526023815260200180620028326023913960400191505060405180910390fd5b6200025e8262000342565b6200027a81600254620003e160201b620015eb1790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620002af918390620015eb620003e1821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615620002fd57620002f981600354620003e160201b620015eb1790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b600754811015620003dd576000600782815481106200036057fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620003b657600080fd5b505af1158015620003cb573d6000803e3d6000fd5b50506001909301925062000345915050565b5050565b6000828201838110156200043c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200048657805160ff1916838001178555620004b6565b82800160010185558215620004b6579182015b82811115620004b657825182559160200191906001019062000499565b50620004c4929150620004c8565b5090565b5b80821115620004c45760008155600101620004c9565b61234380620004ef6000396000f3fe608060405234801561001057600080fd5b50600436106101b75760003560e01c806301e33667146101bc57806306fdde03146101f4578063095ea7b31461027157806312d43a51146102b15780631785f53c146102d557806318160ddd146102fb5780631e83409a1461031557806323b872dd1461033b578063276eab4e1461037157806327e235e314610412578063313ce5671461043857806340c10f1914610456578063429b62e51461048257806346ea87af146104a857806352cd38d9146104ce57806355b6ed5c146104eb5780635a47a1a7146105195780636021726714610538578063622890771461055e578063685731071461058457806370480275146106a757806370a08231146106cd578063817b1cd2146106f35780639554381a146106fb57806395d89b4114610721578063996f11ee146107295780639cb7de4b146107575780639dc29fac14610785578063a9059cbb146107b1578063a923fc40146107dd578063aa271e1a14610906578063c93be6361461092c578063cf456ae714610934578063cfad57a214610962578063dd62ed3e14610988578063dfbaefb1146109b6578063fb30d916146109be575b600080fd5b6101f2600480360360608110156101d257600080fd5b506001600160a01b038135811691602081013590911690604001356109e4565b005b6101fc610a4a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023657818101518382015260200161021e565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029d6004803603604081101561028757600080fd5b506001600160a01b038135169060200135610ad8565b604080519115158252519081900360200190f35b6102b9610aee565b604080516001600160a01b039092168252519081900360200190f35b6101f2600480360360208110156102eb57600080fd5b50356001600160a01b0316610afd565b610303610b6b565b60408051918252519081900360200190f35b6101f26004803603602081101561032b57600080fd5b50356001600160a01b0316610b71565b61029d6004803603606081101561035157600080fd5b506001600160a01b03813581169160208101359091169060400135610c28565b6101f26004803603602081101561038757600080fd5b810190602081018135600160201b8111156103a157600080fd5b8201836020820111156103b357600080fd5b803590602001918460208302840111600160201b831117156103d457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610cc2945050505050565b6103036004803603602081101561042857600080fd5b50356001600160a01b0316610d22565b610440610d34565b6040805160ff9092168252519081900360200190f35b6101f26004803603604081101561046c57600080fd5b506001600160a01b038135169060200135610d39565b61029d6004803603602081101561049857600080fd5b50356001600160a01b0316610d95565b61029d600480360360208110156104be57600080fd5b50356001600160a01b0316610daa565b6102b9600480360360208110156104e457600080fd5b5035610dbf565b6103036004803603604081101561050157600080fd5b506001600160a01b0381358116916020013516610de6565b6101f26004803603602081101561052f57600080fd5b50351515610e03565b6103036004803603602081101561054e57600080fd5b50356001600160a01b0316610e63565b6101f26004803603602081101561057457600080fd5b50356001600160a01b0316610eac565b6101f26004803603604081101561059a57600080fd5b810190602081018135600160201b8111156105b457600080fd5b8201836020820111156105c657600080fd5b803590602001918460208302840111600160201b831117156105e757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561063657600080fd5b82018360208201111561064857600080fd5b803590602001918460208302840111600160201b8311171561066957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610f9f945050505050565b6101f2600480360360208110156106bd57600080fd5b50356001600160a01b0316611041565b610303600480360360208110156106e357600080fd5b50356001600160a01b03166110b2565b6103036110cd565b61029d6004803603602081101561071157600080fd5b50356001600160a01b03166110eb565b6101fc611100565b6101f26004803603604081101561073f57600080fd5b506001600160a01b038135811691602001351661115a565b6101f26004803603604081101561076d57600080fd5b506001600160a01b0381351690602001351515611261565b6101f26004803603604081101561079b57600080fd5b506001600160a01b0381351690602001356112d9565b61029d600480360360408110156107c757600080fd5b506001600160a01b038135169060200135611335565b6101f2600480360360408110156107f357600080fd5b810190602081018135600160201b81111561080d57600080fd5b82018360208201111561081f57600080fd5b803590602001918460018302840111600160201b8311171561084057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561089257600080fd5b8201836020820111156108a457600080fd5b803590602001918460018302840111600160201b831117156108c557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611342945050505050565b61029d6004803603602081101561091c57600080fd5b50356001600160a01b03166113b6565b6103036113cb565b6101f26004803603604081101561094a57600080fd5b506001600160a01b03813516906020013515156113d1565b6101f26004803603602081101561097857600080fd5b50356001600160a01b0316611449565b6103036004803603604081101561099e57600080fd5b506001600160a01b03813581169160200135166114b8565b61029d6114e3565b6101f2600480360360208110156109d457600080fd5b50356001600160a01b03166114ec565b6004546001600160a01b03163314610a31576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b610a456001600160a01b0384168383611643565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ad05780601f10610aa557610100808354040283529160200191610ad0565b820191906000526020600020905b815481529060010190602001808311610ab357829003601f168201915b505050505081565b6000610ae5338484611695565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610b4a576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610c2457600060078281548110610b8d57fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610bef57600080fd5b505af1158015610c03573d6000803e3d6000fd5b505050506040513d6020811015610c1957600080fd5b505050600101610b74565b5050565b336000908152600b602052604081205460ff1615610c5357610c4b848484611781565b506001610cbb565b6000610c9d836040518060600160405280602c815260200161214a602c91396001600160a01b03881660009081526006602090815260408083203384529091529020549190611997565b9050610caa853383611695565b610cb5858585611781565b60019150505b9392505050565b6004546001600160a01b03163314610d0f576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b8051610c24906007906020840190611fa1565b60056020526000908152604090205481565b601281565b336000908152600c602052604090205460ff16610d8b576040805162461bcd60e51b815260206004820152601c6024820152600080516020612176833981519152604482015290519081900360640190fd5b610c248282611a2e565b60096020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b60078181548110610dcc57fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6004546001600160a01b03163314610e50576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b6001600160a01b03811660009081526008602052604081205460ff1615610e8c57506000610ea7565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610efe576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610f565760405162461bcd60e51b815260040180806020018281038252602281526020018061224e6022913960400191505060405180910390fd5b610f5f81611b20565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610f99916115eb565b60035550565b336000908152600c602052604090205460ff16610ff1576040805162461bcd60e51b815260206004820152601c6024820152600080516020612176833981519152604482015290519081900360640190fd5b60005b8251811015610a4557600083828151811061100b57fe5b60200260200101519050600083838151811061102357fe5b602002602001015190506110378282611a2e565b5050600101610ff4565b6004546001600160a01b0316331461108e576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b60006110e6600354600254611bb690919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610ad05780601f10610aa557610100808354040283529160200191610ad0565b3360009081526009602052604090205460ff166111ac576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b60005b600754811015610a45576000600782815481106111c857fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b15801561122c57600080fd5b505af1158015611240573d6000803e3d6000fd5b505050506040513d602081101561125657600080fd5b5050506001016111af565b6004546001600160a01b031633146112ae576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff1661132b576040805162461bcd60e51b815260206004820152601c6024820152600080516020612176833981519152604482015290519081900360640190fd5b610c248282611bf8565b6000610ae5338484611781565b6004546001600160a01b0316331461138f576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b81516113a2906000906020850190612006565b508051610a45906001906020840190612006565b600c6020526000908152604090205460ff1681565b60035481565b6004546001600160a01b0316331461141e576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b6004546001600160a01b03163314611496576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b600a5460ff1681565b3360009081526009602052604090205460ff1661153e576040805162461bcd60e51b815260206004820152601460248201526000805160206121bc833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff166115ab576040805162461bcd60e51b815260206004820152601e60248201527f42617365546f6b656e3a205f6163636f756e74206e6f74206d61726b65640000604482015290519081900360640190fd5b6115b481611b20565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610f9991611bb6565b600082820183811015610cbb576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610a45908490611d11565b6001600160a01b0383166116da5760405162461bcd60e51b81526004018080602001828103825260288152602001806121dc6028913960400191505060405180910390fd5b6001600160a01b03821661171f5760405162461bcd60e51b81526004018080602001828103825260268152602001806121246026913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166117c65760405162461bcd60e51b81526004018080602001828103825260298152602001806122e56029913960400191505060405180910390fd5b6001600160a01b03821661180b5760405162461bcd60e51b81526004018080602001828103825260278152602001806120da6027913960400191505060405180910390fd5b600a5460ff161561186457336000908152600b602052604090205460ff166118645760405162461bcd60e51b81526004018080602001828103825260258152602001806120b56025913960400191505060405180910390fd5b61186d83611b20565b61187682611b20565b6118b3816040518060600160405280602a8152602001612204602a91396001600160a01b0386166000908152600560205260409020549190611997565b6001600160a01b0380851660009081526005602052604080822093909355908416815220546118e290826115eb565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff1615611927576003546119239082611bb6565b6003555b6001600160a01b03821660009081526008602052604090205460ff16156119595760035461195590826115eb565b6003555b816001600160a01b0316836001600160a01b031660008051602061222e833981519152836040518082815260200191505060405180910390a3505050565b60008184841115611a265760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156119eb5781810151838201526020016119d3565b50505050905090810190601f168015611a185780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038216611a735760405162461bcd60e51b81526004018080602001828103825260238152602001806121016023913960400191505060405180910390fd5b611a7c82611b20565b600254611a8990826115eb565b6002556001600160a01b038216600090815260056020526040902054611aaf90826115eb565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615611aed57600354611ae990826115eb565b6003555b6040805182815290516001600160a01b0384169160009160008051602061222e8339815191529181900360200190a35050565b60005b600754811015610c2457600060078281548110611b3c57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015611b9157600080fd5b505af1158015611ba5573d6000803e3d6000fd5b505060019093019250611b23915050565b6000610cbb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611997565b6001600160a01b038216611c3d5760405162461bcd60e51b81526004018080602001828103825260258152602001806122c06025913960400191505060405180910390fd5b611c4682611b20565b611c8381604051806060016040528060268152602001612270602691396001600160a01b0385166000908152600560205260409020549190611997565b6001600160a01b038316600090815260056020526040902055600254611ca99082611bb6565b6002556001600160a01b03821660009081526008602052604090205460ff1615611cde57600354611cda9082611bb6565b6003555b6040805182815290516000916001600160a01b0385169160008051602061222e8339815191529181900360200190a35050565b6060611d66826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611dc29092919063ffffffff16565b805190915015610a4557808060200190516020811015611d8557600080fd5b5051610a455760405162461bcd60e51b815260040180806020018281038252602a815260200180612296602a913960400191505060405180910390fd5b6060611dd18484600085611dd9565b949350505050565b606082471015611e1a5760405162461bcd60e51b81526004018080602001828103825260268152602001806121966026913960400191505060405180910390fd5b611e2385611f35565b611e74576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611eb35780518252601f199092019160209182019101611e94565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611f15576040519150601f19603f3d011682016040523d82523d6000602084013e611f1a565b606091505b5091509150611f2a828286611f3b565b979650505050505050565b3b151590565b60608315611f4a575081610cbb565b825115611f5a5782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156119eb5781810151838201526020016119d3565b828054828255906000526020600020908101928215611ff6579160200282015b82811115611ff657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611fc1565b50612002929150612080565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061204757805160ff1916838001178555612074565b82800160010185558215612074579182015b82811115612074578251825591602001919060010190612059565b5061200292915061209f565b5b808211156120025780546001600160a01b0319168155600101612081565b5b8082111561200257600081556001016120a056fe42617365546f6b656e3a206d73672e73656e646572206e6f742077686974656c697374656442617365546f6b656e3a207472616e7366657220746f20746865207a65726f206164647265737342617365546f6b656e3a206d696e7420746f20746865207a65726f206164647265737342617365546f6b656e3a20617070726f766520746f20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654d696e7461626c6542617365546f6b656e3a20666f7262696464656e00000000416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c42617365546f6b656e3a20666f7262696464656e00000000000000000000000042617365546f6b656e3a20617070726f76652066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42617365546f6b656e3a205f6163636f756e7420616c7265616479206d61726b656442617365546f6b656e3a206275726e20616d6f756e7420657863656564732062616c616e63655361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656442617365546f6b656e3a206275726e2066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e736665722066726f6d20746865207a65726f2061646472657373a2646970667358221220c05ba4a4d0c6c5ff250c157d1e1fc0bd3b75be1541befa8d35c8df40f0ba1f5564736f6c634300060c003342617365546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class SnapshotToken__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SnapshotToken> {
    return super.deploy(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    ) as Promise<SnapshotToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    );
  }
  attach(address: string): SnapshotToken {
    return super.attach(address) as SnapshotToken;
  }
  connect(signer: Signer): SnapshotToken__factory {
    return super.connect(signer) as SnapshotToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnapshotTokenInterface {
    return new utils.Interface(_abi) as SnapshotTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SnapshotToken {
    return new Contract(address, _abi, signerOrProvider) as SnapshotToken;
  }
}
