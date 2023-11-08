/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReferralStorage,
  ReferralStorageInterface,
} from "../ReferralStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAccount",
        type: "address",
      },
    ],
    name: "GovSetCodeOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "RegisterCode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "SetCodeOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "SetHandler",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "discountShare",
        type: "uint256",
      },
    ],
    name: "SetReferrerDiscountShare",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tierId",
        type: "uint256",
      },
    ],
    name: "SetReferrerTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tierId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRebate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "discountShare",
        type: "uint256",
      },
    ],
    name: "SetTier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "SetTraderReferralCode",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "codeOwners",
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
        name: "_account",
        type: "address",
      },
    ],
    name: "getTraderReferralInfo",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newAccount",
        type: "address",
      },
    ],
    name: "govSetCodeOwner",
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
    name: "referrerDiscountShares",
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
    name: "referrerTiers",
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
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "registerCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newAccount",
        type: "address",
      },
    ],
    name: "setCodeOwner",
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
        internalType: "uint256",
        name: "_discountShare",
        type: "uint256",
      },
    ],
    name: "setReferrerDiscountShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tierId",
        type: "uint256",
      },
    ],
    name: "setReferrerTier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tierId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalRebate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountShare",
        type: "uint256",
      },
    ],
    name: "setTier",
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
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "setTraderReferralCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_code",
        type: "bytes32",
      },
    ],
    name: "setTraderReferralCodeByUser",
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
    name: "tiers",
    outputs: [
      {
        internalType: "uint256",
        name: "totalRebate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "discountShare",
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
    name: "traderReferralCodes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610d59806100326000396000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c8063039af9eb146100f657806312d43a511461012c5780631582a0181461015057806336def2c8146101885780633fb8b323146101a757806346ea87af146101d3578063534ef8831461020d57806356b4b2ad1461025457806371a6a79014610280578063836a0187146102a657806385725b58146102cf5780639c8e2de9146102f55780639cb7de4b14610312578063c8b3c46014610340578063cfad57a21461035d578063dfcfa25014610383578063e1e01bf3146103af578063e1f1c4a7146103cc578063ed843134146103d4575b600080fd5b6101136004803603602081101561010c57600080fd5b5035610400565b6040805192835260208301919091528051918290030190f35b610134610419565b604080516001600160a01b039092168252519081900360200190f35b6101766004803603602081101561016657600080fd5b50356001600160a01b0316610428565b60408051918252519081900360200190f35b6101a56004803603602081101561019e57600080fd5b503561043a565b005b6101a5600480360360408110156101bd57600080fd5b506001600160a01b03813516906020013561052e565b6101f9600480360360208110156101e957600080fd5b50356001600160a01b03166105d4565b604080519115158252519081900360200190f35b6102336004803603602081101561022357600080fd5b50356001600160a01b03166105e9565b604080519283526001600160a01b0390911660208301528051918290030190f35b6101a56004803603604081101561026a57600080fd5b506001600160a01b03813516906020013561062f565b6101766004803603602081101561029657600080fd5b50356001600160a01b031661069e565b6101a5600480360360608110156102bc57600080fd5b50803590602081013590604001356106b0565b610176600480360360208110156102e557600080fd5b50356001600160a01b0316610805565b6101a56004803603602081101561030b57600080fd5b5035610817565b6101a56004803603604081101561032857600080fd5b506001600160a01b03813516906020013515156108a7565b6101346004803603602081101561035657600080fd5b5035610958565b6101a56004803603602081101561037357600080fd5b50356001600160a01b0316610973565b6101a56004803603604081101561039957600080fd5b50803590602001356001600160a01b03166109e2565b6101a5600480360360208110156103c557600080fd5b5035610ad7565b610176610ae4565b6101a5600480360360408110156103ea57600080fd5b50803590602001356001600160a01b0316610aea565b6003602052600090815260409020805460019091015482565b6000546001600160a01b031681565b60026020526000908152604090205481565b8061047a576040805162461bcd60e51b815260206004820152601e6024820152600080516020610cba833981519152604482015290519081900360640190fd5b6000818152600560205260409020546001600160a01b0316156104ce5760405162461bcd60e51b8152600401808060200182810382526024815260200180610cda6024913960400191505060405180910390fd5b60008181526005602090815260409182902080546001600160a01b03191633908117909155825190815290810183905281517f04f82286a2a3b2ee5c8555de8304dfe2ea70991613213184b73a9e408d2d8029929181900390910190a150565b6000546001600160a01b0316331461057b576040805162461bcd60e51b81526020600482015260156024820152600080516020610c76833981519152604482015290519081900360640190fd5b6001600160a01b0382166000818152600260209081526040918290208490558151928352820183905280517f7696855cdbb94bb5a44cb0a95caff6f29173aa1cbfba193834b12b90827ce2bc9281900390910190a15050565b60046020526000908152604090205460ff1681565b6001600160a01b038116600090815260066020526040812054819081811561062557506000818152600560205260409020546001600160a01b03165b9092509050915091565b3360009081526004602052604090205460ff16610690576040805162461bcd60e51b815260206004820152601a6024820152792932b332b93930b629ba37b930b3b29d103337b93134b23232b760311b604482015290519081900360640190fd5b61069a8282610c02565b5050565b60016020526000908152604090205481565b6000546001600160a01b031633146106fd576040805162461bcd60e51b81526020600482015260156024820152600080516020610c76833981519152604482015290519081900360640190fd5b61271082111561073e5760405162461bcd60e51b8152600401808060200182810382526024815260200180610c966024913960400191505060405180910390fd5b61271081111561077f5760405162461bcd60e51b8152600401808060200182810382526026815260200180610cfe6026913960400191505060405180910390fd5b610787610c5b565b50600083815260036020818152604080842081518083018352878152808401878152958990529383528351815593516001909401939093558251868152908101859052808301849052915190917f4ebd23a492b2bd79586cb57cae40d7793408265f20320f68b478b971e696f4c7919081900360600190a150505050565b60066020526000908152604090205481565b6127108111156108585760405162461bcd60e51b8152600401808060200182810382526026815260200180610cfe6026913960400191505060405180910390fd5b336000818152600160209081526040918290208490558151928352820183905280517fbd224f3917462b0fa80805fe3ec29be3a37f664955aad6224e5ece036224c4299281900390910190a150565b6000546001600160a01b031633146108f4576040805162461bcd60e51b81526020600482015260156024820152600080516020610c76833981519152604482015290519081900360640190fd5b6001600160a01b038216600081815260046020908152604091829020805460ff191685151590811790915582519384529083015280517fd373464a39404e5f98fdb4b152b8ba9a094561e97e5c4b4ea11eb18cd9e6695e9281900390910190a15050565b6005602052600090815260409020546001600160a01b031681565b6000546001600160a01b031633146109c0576040805162461bcd60e51b81526020600482015260156024820152600080516020610c76833981519152604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610a2f576040805162461bcd60e51b81526020600482015260156024820152600080516020610c76833981519152604482015290519081900360640190fd5b81610a6f576040805162461bcd60e51b815260206004820152601e6024820152600080516020610cba833981519152604482015290519081900360640190fd5b60008281526005602090815260409182902080546001600160a01b0319166001600160a01b03851690811790915582518581529182015281517f6431f88c655dd0e2b8d09b6405c007c515c66d67f2998e69c902873a8c8f3e97929181900390910190a15050565b610ae13382610c02565b50565b61271081565b81610b2a576040805162461bcd60e51b815260206004820152601e6024820152600080516020610cba833981519152604482015290519081900360640190fd5b6000828152600560205260409020546001600160a01b0316338114610b93576040805162461bcd60e51b815260206004820152601a6024820152792932b332b93930b629ba37b930b3b29d103337b93134b23232b760311b604482015290519081900360640190fd5b60008381526005602090815260409182902080546001600160a01b0386166001600160a01b0319909116811790915582513381529182015280820185905290517f5640856798d41ce9ca0a109b54c20a06eb99ba9c36ab4547115dafb8473cf3979181900360600190a1505050565b6001600160a01b0382166000818152600660209081526040918290208490558151928352820183905280517f43825f14567dda057e821be2e51a5aa79aa51f3907a647e3ed2bd486a01050f19281900390910190a15050565b60405180604001604052806000815260200160008152509056fe476f7665726e61626c653a20666f7262696464656e0000000000000000000000526566657272616c53746f726167653a20696e76616c696420746f74616c526562617465526566657272616c53746f726167653a20696e76616c6964205f636f64650000526566657272616c53746f726167653a20636f646520616c726561647920657869737473526566657272616c53746f726167653a20696e76616c696420646973636f756e745368617265a26469706673582212204bf225fefe74f8c6b803ae63568ecc1ec9cea9e3d691602057f8e4a9f11af62864736f6c634300060c0033";

export class ReferralStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReferralStorage> {
    return super.deploy(overrides || {}) as Promise<ReferralStorage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReferralStorage {
    return super.attach(address) as ReferralStorage;
  }
  connect(signer: Signer): ReferralStorage__factory {
    return super.connect(signer) as ReferralStorage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralStorageInterface {
    return new utils.Interface(_abi) as ReferralStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReferralStorage {
    return new Contract(address, _abi, signerOrProvider) as ReferralStorage;
  }
}
