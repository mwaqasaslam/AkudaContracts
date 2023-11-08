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
import type { YieldToken, YieldTokenInterface } from "../YieldToken";

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
    name: "inWhitelistMode",
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
        internalType: "bool",
        name: "_inWhitelistMode",
        type: "bool",
      },
    ],
    name: "setInWhitelistMode",
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
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isWhitelisted",
        type: "bool",
      },
    ],
    name: "setWhitelistedHandler",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedHandlers",
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
  "0x60806040523480156200001157600080fd5b50604051620021a7380380620021a7833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040526020908101518551909350620001b992506000918601906200044a565b508151620001cf9060019060208501906200044a565b50600480546001600160a01b031916339081179091556000818152600960205260409020805460ff191660011790556200020a908262000213565b505050620004e6565b6001600160a01b0382166200025a5760405162461bcd60e51b8152600401808060200182810382526024815260200180620021836024913960400191505060405180910390fd5b620002658262000349565b6200028181600254620003e860201b620011d41790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620002b6918390620011d4620003e8821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff161562000304576200030081600354620003e860201b620011d41790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b600754811015620003e4576000600782815481106200036757fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620003bd57600080fd5b505af1158015620003d2573d6000803e3d6000fd5b5050600190930192506200034c915050565b5050565b60008282018381101562000443576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200048d57805160ff1916838001178555620004bd565b82800160010185558215620004bd579182015b82811115620004bd578251825591602001919060010190620004a0565b50620004cb929150620004cf565b5090565b5b80821115620004cb5760008155600101620004d0565b611c8d80620004f66000396000f3fe608060405234801561001057600080fd5b50600436106101805760003560e01c806301e336671461018557806306fdde03146101bd578063095ea7b31461023a57806312d43a511461027a5780631785f53c1461029e57806318160ddd146102c45780631e83409a146102de57806323b872dd14610304578063276eab4e1461033a57806327e235e3146103db578063293d698714610401578063313ce567146104095780633630005114610427578063429b62e51461044d5780634cb5bbe31461047357806352cd38d91461049257806355b6ed5c146104af57806360217267146104dd5780636228907714610503578063704802751461052957806370a082311461054f578063817b1cd2146105755780639554381a1461057d57806395d89b41146105a3578063996f11ee146105ab578063a9059cbb146105d9578063a923fc4014610605578063c93be6361461072e578063cfad57a214610736578063d92fc87e1461075c578063dd62ed3e1461078a578063fb30d916146107b8575b600080fd5b6101bb6004803603606081101561019b57600080fd5b506001600160a01b038135811691602081013590911690604001356107de565b005b6101c5610844565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ff5781810151838201526020016101e7565b50505050905090810190601f16801561022c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102666004803603604081101561025057600080fd5b506001600160a01b0381351690602001356108d2565b604080519115158252519081900360200190f35b6102826108e8565b604080516001600160a01b039092168252519081900360200190f35b6101bb600480360360208110156102b457600080fd5b50356001600160a01b03166108f7565b6102cc610965565b60408051918252519081900360200190f35b6101bb600480360360208110156102f457600080fd5b50356001600160a01b031661096b565b6102666004803603606081101561031a57600080fd5b506001600160a01b03813581169160208101359091169060400135610a22565b6101bb6004803603602081101561035057600080fd5b810190602081018135600160201b81111561036a57600080fd5b82018360208201111561037c57600080fd5b803590602001918460208302840111600160201b8311171561039d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a92945050505050565b6102cc600480360360208110156103f157600080fd5b50356001600160a01b0316610af2565b610266610b04565b610411610b0d565b6040805160ff9092168252519081900360200190f35b6102666004803603602081101561043d57600080fd5b50356001600160a01b0316610b12565b6102666004803603602081101561046357600080fd5b50356001600160a01b0316610b27565b6101bb6004803603602081101561048957600080fd5b50351515610b3c565b610282600480360360208110156104a857600080fd5b5035610b9c565b6102cc600480360360408110156104c557600080fd5b506001600160a01b0381358116916020013516610bc3565b6102cc600480360360208110156104f357600080fd5b50356001600160a01b0316610be0565b6101bb6004803603602081101561051957600080fd5b50356001600160a01b0316610c29565b6101bb6004803603602081101561053f57600080fd5b50356001600160a01b0316610d1c565b6102cc6004803603602081101561056557600080fd5b50356001600160a01b0316610d8d565b6102cc610da8565b6102666004803603602081101561059357600080fd5b50356001600160a01b0316610dc6565b6101c5610ddb565b6101bb600480360360408110156105c157600080fd5b506001600160a01b0381358116916020013516610e35565b610266600480360360408110156105ef57600080fd5b506001600160a01b038135169060200135610f3c565b6101bb6004803603604081101561061b57600080fd5b810190602081018135600160201b81111561063557600080fd5b82018360208201111561064757600080fd5b803590602001918460018302840111600160201b8311171561066857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106ba57600080fd5b8201836020820111156106cc57600080fd5b803590602001918460018302840111600160201b831117156106ed57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f49945050505050565b6102cc610fbd565b6101bb6004803603602081101561074c57600080fd5b50356001600160a01b0316610fc3565b6101bb6004803603604081101561077257600080fd5b506001600160a01b0381351690602001351515611032565b6102cc600480360360408110156107a057600080fd5b506001600160a01b03813581169160200135166110aa565b6101bb600480360360208110156107ce57600080fd5b50356001600160a01b03166110d5565b6004546001600160a01b0316331461082b576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b61083f6001600160a01b038416838361122c565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108ca5780601f1061089f576101008083540402835291602001916108ca565b820191906000526020600020905b8154815290600101906020018083116108ad57829003601f168201915b505050505081565b60006108df33848461127e565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610944576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610a1e5760006007828154811061098757fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b1580156109e957600080fd5b505af11580156109fd573d6000803e3d6000fd5b505050506040513d6020811015610a1357600080fd5b50505060010161096e565b5050565b600080610a6d836040518060600160405280602d8152602001611bba602d91396001600160a01b0388166000908152600660209081526040808320338452909152902054919061136a565b9050610a7a85338361127e565b610a85858585611401565b60019150505b9392505050565b6004546001600160a01b03163314610adf576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b8051610a1e906007906020840190611991565b60056020526000908152604090205481565b600a5460ff1681565b601281565b600b6020526000908152604090205460ff1681565b60096020526000908152604090205460ff1681565b6004546001600160a01b03163314610b89576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b60078181548110610ba957fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6001600160a01b03811660009081526008602052604081205460ff1615610c0957506000610c24565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610c7b576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610cd35760405162461bcd60e51b8152600401808060200182810382526023815260200180611aa56023913960400191505060405180910390fd5b610cdc81611629565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610d16916111d4565b60035550565b6004546001600160a01b03163314610d69576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b6000610dc16003546002546116bf90919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108ca5780601f1061089f576101008083540402835291602001916108ca565b3360009081526009602052604090205460ff16610e87576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b60005b60075481101561083f57600060078281548110610ea357fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610f0757600080fd5b505af1158015610f1b573d6000803e3d6000fd5b505050506040513d6020811015610f3157600080fd5b505050600101610e8a565b60006108df338484611401565b6004546001600160a01b03163314610f96576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b8151610fa99060009060208501906119f6565b50805161083f9060019060208401906119f6565b60035481565b6004546001600160a01b03163314611010576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b0316331461107f576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3360009081526009602052604090205460ff16611127576040805162461bcd60e51b81526020600482015260156024820152600080516020611c0d833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff16611194576040805162461bcd60e51b815260206004820152601f60248201527f5969656c64546f6b656e3a205f6163636f756e74206e6f74206d61726b656400604482015290519081900360640190fd5b61119d81611629565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610d16916116bf565b600082820183811015610a8b576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261083f908490611701565b6001600160a01b0383166112c35760405162461bcd60e51b8152600401808060200182810382526029815260200180611b916029913960400191505060405180910390fd5b6001600160a01b0382166113085760405162461bcd60e51b8152600401808060200182810382526027815260200180611b406027913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600081848411156113f95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156113be5781810151838201526020016113a6565b50505050905090810190601f1680156113eb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0383166114465760405162461bcd60e51b815260040180806020018281038252602a815260200180611af0602a913960400191505060405180910390fd5b6001600160a01b03821661148b5760405162461bcd60e51b8152600401808060200182810382526028815260200180611ac86028913960400191505060405180910390fd5b600a5460ff16156114e457336000908152600b602052604090205460ff166114e45760405162461bcd60e51b8152600401808060200182810382526026815260200180611be76026913960400191505060405180910390fd5b6114ed83611629565b6114f682611629565b611533816040518060600160405280602b8152602001611c2d602b91396001600160a01b038616600090815260056020526040902054919061136a565b6001600160a01b03808516600090815260056020526040808220939093559084168152205461156290826111d4565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff16156115a7576003546115a390826116bf565b6003555b6001600160a01b03821660009081526008602052604090205460ff16156115d9576003546115d590826111d4565b6003555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60005b600754811015610a1e5760006007828154811061164557fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b15801561169a57600080fd5b505af11580156116ae573d6000803e3d6000fd5b50506001909301925061162c915050565b6000610a8b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061136a565b6060611756826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117b29092919063ffffffff16565b80519091501561083f5780806020019051602081101561177557600080fd5b505161083f5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b67602a913960400191505060405180910390fd5b60606117c184846000856117c9565b949350505050565b60608247101561180a5760405162461bcd60e51b8152600401808060200182810382526026815260200180611b1a6026913960400191505060405180910390fd5b61181385611925565b611864576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106118a35780518252601f199092019160209182019101611884565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611905576040519150601f19603f3d011682016040523d82523d6000602084013e61190a565b606091505b509150915061191a82828661192b565b979650505050505050565b3b151590565b6060831561193a575081610a8b565b82511561194a5782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156113be5781810151838201526020016113a6565b8280548282559060005260206000209081019282156119e6579160200282015b828111156119e657825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906119b1565b506119f2929150611a70565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a3757805160ff1916838001178555611a64565b82800160010185558215611a64579182015b82811115611a64578251825591602001919060010190611a49565b506119f2929150611a8f565b5b808211156119f25780546001600160a01b0319168155600101611a71565b5b808211156119f25760008155600101611a9056fe5969656c64546f6b656e3a205f6163636f756e7420616c7265616479206d61726b65645969656c64546f6b656e3a207472616e7366657220746f20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e736665722066726f6d20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5969656c64546f6b656e3a20617070726f766520746f20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645969656c64546f6b656e3a20617070726f76652066726f6d20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655969656c64546f6b656e3a206d73672e73656e646572206e6f742077686974656c69737465645969656c64546f6b656e3a20666f7262696464656e00000000000000000000005969656c64546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a2646970667358221220fb5a8471f12a9b0b21343d9afc38ccbd3c8147c8713331f3768c603ebb39787864736f6c634300060c00335969656c64546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class YieldToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldToken> {
    return super.deploy(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    ) as Promise<YieldToken>;
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
  attach(address: string): YieldToken {
    return super.attach(address) as YieldToken;
  }
  connect(signer: Signer): YieldToken__factory {
    return super.connect(signer) as YieldToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldTokenInterface {
    return new utils.Interface(_abi) as YieldTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldToken {
    return new Contract(address, _abi, signerOrProvider) as YieldToken;
  }
}
