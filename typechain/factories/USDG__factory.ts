/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDG, USDGInterface } from "../USDG";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
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
        name: "_vault",
        type: "address",
      },
    ],
    name: "addVault",
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
        name: "_vault",
        type: "address",
      },
    ],
    name: "removeVault",
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
    name: "vaults",
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
  "0x60806040523480156200001157600080fd5b50604051620025d9380380620025d9833981810160405260208110156200003757600080fd5b5051604080518082018252600a8152691554d10811d85b589a5d60b21b6020828101918252835180850190945260048452635553444760e01b9084015281519192916000916200008a918391906200033d565b508151620000a09060019060208501906200033d565b50600480546001600160a01b031916339081179091556000818152600960205260409020805460ff19166001179055620000db908262000106565b5050506001600160a01b03166000908152600c60205260409020805460ff19166001179055620003d9565b6001600160a01b0382166200014d5760405162461bcd60e51b8152600401808060200182810382526024815260200180620025b56024913960400191505060405180910390fd5b62000158826200023c565b6200017481600254620002db60201b620014891790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620001a991839062001489620002db821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615620001f757620001f381600354620002db60201b620014891790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b600754811015620002d7576000600782815481106200025a57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620002b057600080fd5b505af1158015620002c5573d6000803e3d6000fd5b5050600190930192506200023f915050565b5050565b60008282018381101562000336576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200038057805160ff1916838001178555620003b0565b82800160010185558215620003b0579182015b82811115620003b057825182559160200191906001019062000393565b50620003be929150620003c2565b5090565b5b80821115620003be5760008155600101620003c3565b6121cc80620003e96000396000f3fe608060405234801561001057600080fd5b50600436106101b75760003560e01c806301e33667146101bc57806306fdde03146101f4578063095ea7b31461027157806312d43a51146102b15780631785f53c146102d557806318160ddd146102fb5780631e83409a1461031557806323b872dd1461033b578063256b5a0214610371578063276eab4e1461039757806327e235e314610438578063293d69871461045e578063313ce56714610466578063363000511461048457806340c10f19146104aa578063429b62e5146104d65780634cb5bbe3146104fc57806352cd38d91461051b57806355b6ed5c146105385780636021726714610566578063622890771461058c57806370480275146105b257806370a08231146105d8578063817b1cd2146105fe5780639554381a1461060657806395d89b411461062c578063996f11ee146106345780639dc29fac14610662578063a622ee7c1461068e578063a9059cbb146106b4578063a923fc40146106e0578063c93be63614610809578063ceb68c2314610811578063cfad57a214610837578063d92fc87e1461085d578063dd62ed3e1461088b578063fb30d916146108b9575b600080fd5b6101f2600480360360608110156101d257600080fd5b506001600160a01b038135811691602081013590911690604001356108df565b005b6101fc610945565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023657818101518382015260200161021e565b50505050905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029d6004803603604081101561028757600080fd5b506001600160a01b0381351690602001356109d3565b604080519115158252519081900360200190f35b6102b96109e9565b604080516001600160a01b039092168252519081900360200190f35b6101f2600480360360208110156102eb57600080fd5b50356001600160a01b03166109f8565b610303610a66565b60408051918252519081900360200190f35b6101f26004803603602081101561032b57600080fd5b50356001600160a01b0316610a6c565b61029d6004803603606081101561035157600080fd5b506001600160a01b03813581169160208101359091169060400135610b23565b6101f26004803603602081101561038757600080fd5b50356001600160a01b0316610b93565b6101f2600480360360208110156103ad57600080fd5b810190602081018135600160201b8111156103c757600080fd5b8201836020820111156103d957600080fd5b803590602001918460208302840111600160201b831117156103fa57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c04945050505050565b6103036004803603602081101561044e57600080fd5b50356001600160a01b0316610c64565b61029d610c76565b61046e610c7f565b6040805160ff9092168252519081900360200190f35b61029d6004803603602081101561049a57600080fd5b50356001600160a01b0316610c84565b6101f2600480360360408110156104c057600080fd5b506001600160a01b038135169060200135610c99565b61029d600480360360208110156104ec57600080fd5b50356001600160a01b0316610cf9565b6101f26004803603602081101561051257600080fd5b50351515610d0e565b6102b96004803603602081101561053157600080fd5b5035610d6e565b6103036004803603604081101561054e57600080fd5b506001600160a01b0381358116916020013516610d95565b6103036004803603602081101561057c57600080fd5b50356001600160a01b0316610db2565b6101f2600480360360208110156105a257600080fd5b50356001600160a01b0316610dfb565b6101f2600480360360208110156105c857600080fd5b50356001600160a01b0316610eee565b610303600480360360208110156105ee57600080fd5b50356001600160a01b0316610f5f565b610303610f7a565b61029d6004803603602081101561061c57600080fd5b50356001600160a01b0316610f98565b6101fc610fad565b6101f26004803603604081101561064a57600080fd5b506001600160a01b0381358116916020013516611007565b6101f26004803603604081101561067857600080fd5b506001600160a01b03813516906020013561110e565b61029d600480360360208110156106a457600080fd5b50356001600160a01b031661116e565b61029d600480360360408110156106ca57600080fd5b506001600160a01b038135169060200135611183565b6101f2600480360360408110156106f657600080fd5b810190602081018135600160201b81111561071057600080fd5b82018360208201111561072257600080fd5b803590602001918460018302840111600160201b8311171561074357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561079557600080fd5b8201836020820111156107a757600080fd5b803590602001918460018302840111600160201b831117156107c857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611190945050505050565b610303611204565b6101f26004803603602081101561082757600080fd5b50356001600160a01b031661120a565b6101f26004803603602081101561084d57600080fd5b50356001600160a01b0316611278565b6101f26004803603604081101561087357600080fd5b506001600160a01b03813516906020013515156112e7565b610303600480360360408110156108a157600080fd5b506001600160a01b038135811691602001351661135f565b6101f2600480360360208110156108cf57600080fd5b50356001600160a01b031661138a565b6004546001600160a01b0316331461092c576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6109406001600160a01b03841683836114e1565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109cb5780601f106109a0576101008083540402835291602001916109cb565b820191906000526020600020905b8154815290600101906020018083116109ae57829003601f168201915b505050505081565b60006109e0338484611533565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610a45576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610b1f57600060078281548110610a8857fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610aea57600080fd5b505af1158015610afe573d6000803e3d6000fd5b505050506040513d6020811015610b1457600080fd5b505050600101610a6f565b5050565b600080610b6e836040518060600160405280602d81526020016120f9602d91396001600160a01b0388166000908152600660209081526040808320338452909152902054919061161f565b9050610b7b853383611533565b610b868585856116b6565b60019150505b9392505050565b6004546001600160a01b03163314610be0576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600c60205260409020805460ff19166001179055565b6004546001600160a01b03163314610c51576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b8051610b1f906007906020840190611e3f565b60056020526000908152604090205481565b600a5460ff1681565b601281565b600b6020526000908152604090205460ff1681565b336000908152600c602052604090205460ff16610cef576040805162461bcd60e51b815260206004820152600f60248201526e2aa9a2239d103337b93134b23232b760891b604482015290519081900360640190fd5b610b1f82826118cc565b60096020526000908152604090205460ff1681565b6004546001600160a01b03163314610d5b576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b60078181548110610d7b57fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6001600160a01b03811660009081526008602052604081205460ff1615610ddb57506000610df6565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610e4d576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610ea55760405162461bcd60e51b8152600401808060200182810382526023815260200180611f536023913960400191505060405180910390fd5b610eae816119be565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610ee891611489565b60035550565b6004546001600160a01b03163314610f3b576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b6000610f93600354600254611a5490919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109cb5780601f106109a0576101008083540402835291602001916109cb565b3360009081526009602052604090205460ff16611059576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b60005b6007548110156109405760006007828154811061107557fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b1580156110d957600080fd5b505af11580156110ed573d6000803e3d6000fd5b505050506040513d602081101561110357600080fd5b50505060010161105c565b336000908152600c602052604090205460ff16611164576040805162461bcd60e51b815260206004820152600f60248201526e2aa9a2239d103337b93134b23232b760891b604482015290519081900360640190fd5b610b1f8282611a96565b600c6020526000908152604090205460ff1681565b60006109e03384846116b6565b6004546001600160a01b031633146111dd576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b81516111f0906000906020850190611ea4565b508051610940906001906020840190611ea4565b60035481565b6004546001600160a01b03163314611257576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600c60205260409020805460ff19169055565b6004546001600160a01b031633146112c5576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b03163314611334576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3360009081526009602052604090205460ff166113dc576040805162461bcd60e51b8152602060048201526015602482015260008051602061214c833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff16611449576040805162461bcd60e51b815260206004820152601f60248201527f5969656c64546f6b656e3a205f6163636f756e74206e6f74206d61726b656400604482015290519081900360640190fd5b611452816119be565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610ee891611a54565b600082820183811015610b8c576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610940908490611baf565b6001600160a01b0383166115785760405162461bcd60e51b81526004018080602001828103825260298152602001806120d06029913960400191505060405180910390fd5b6001600160a01b0382166115bd5760405162461bcd60e51b81526004018080602001828103825260278152602001806120146027913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600081848411156116ae5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561167357818101518382015260200161165b565b50505050905090810190601f1680156116a05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0383166116fb5760405162461bcd60e51b815260040180806020018281038252602a815260200180611f9e602a913960400191505060405180910390fd5b6001600160a01b0382166117405760405162461bcd60e51b8152600401808060200182810382526028815260200180611f766028913960400191505060405180910390fd5b600a5460ff161561179957336000908152600b602052604090205460ff166117995760405162461bcd60e51b81526004018080602001828103825260268152602001806121266026913960400191505060405180910390fd5b6117a2836119be565b6117ab826119be565b6117e8816040518060600160405280602b815260200161216c602b91396001600160a01b038616600090815260056020526040902054919061161f565b6001600160a01b0380851660009081526005602052604080822093909355908416815220546118179082611489565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff161561185c576003546118589082611a54565b6003555b6001600160a01b03821660009081526008602052604090205460ff161561188e5760035461188a9082611489565b6003555b816001600160a01b0316836001600160a01b0316600080516020612086833981519152836040518082815260200191505060405180910390a3505050565b6001600160a01b0382166119115760405162461bcd60e51b81526004018080602001828103825260248152602001806120626024913960400191505060405180910390fd5b61191a826119be565b6002546119279082611489565b6002556001600160a01b03821660009081526005602052604090205461194d9082611489565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff161561198b576003546119879082611489565b6003555b6040805182815290516001600160a01b038416916000916000805160206120868339815191529181900360200190a35050565b60005b600754811015610b1f576000600782815481106119da57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015611a2f57600080fd5b505af1158015611a43573d6000803e3d6000fd5b5050600190930192506119c1915050565b6000610b8c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061161f565b6001600160a01b038216611adb5760405162461bcd60e51b8152600401808060200182810382526026815260200180611fc86026913960400191505060405180910390fd5b611ae4826119be565b611b218160405180606001604052806027815260200161203b602791396001600160a01b038516600090815260056020526040902054919061161f565b6001600160a01b038316600090815260056020526040902055600254611b479082611a54565b6002556001600160a01b03821660009081526008602052604090205460ff1615611b7c57600354611b789082611a54565b6003555b6040805182815290516000916001600160a01b038516916000805160206120868339815191529181900360200190a35050565b6060611c04826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c609092919063ffffffff16565b80519091501561094057808060200190516020811015611c2357600080fd5b50516109405760405162461bcd60e51b815260040180806020018281038252602a8152602001806120a6602a913960400191505060405180910390fd5b6060611c6f8484600085611c77565b949350505050565b606082471015611cb85760405162461bcd60e51b8152600401808060200182810382526026815260200180611fee6026913960400191505060405180910390fd5b611cc185611dd3565b611d12576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611d515780518252601f199092019160209182019101611d32565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611db3576040519150601f19603f3d011682016040523d82523d6000602084013e611db8565b606091505b5091509150611dc8828286611dd9565b979650505050505050565b3b151590565b60608315611de8575081610b8c565b825115611df85782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561167357818101518382015260200161165b565b828054828255906000526020600020908101928215611e94579160200282015b82811115611e9457825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611e5f565b50611ea0929150611f1e565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ee557805160ff1916838001178555611f12565b82800160010185558215611f12579182015b82811115611f12578251825591602001919060010190611ef7565b50611ea0929150611f3d565b5b80821115611ea05780546001600160a01b0319168155600101611f1f565b5b80821115611ea05760008155600101611f3e56fe5969656c64546f6b656e3a205f6163636f756e7420616c7265616479206d61726b65645969656c64546f6b656e3a207472616e7366657220746f20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e736665722066726f6d20746865207a65726f20616464726573735969656c64546f6b656e3a206275726e2066726f6d20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5969656c64546f6b656e3a20617070726f766520746f20746865207a65726f20616464726573735969656c64546f6b656e3a206275726e20616d6f756e7420657863656564732062616c616e63655969656c64546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645969656c64546f6b656e3a20617070726f76652066726f6d20746865207a65726f20616464726573735969656c64546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655969656c64546f6b656e3a206d73672e73656e646572206e6f742077686974656c69737465645969656c64546f6b656e3a20666f7262696464656e00000000000000000000005969656c64546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365a2646970667358221220a0e9ac58f889356b904bddbd0fab9737ba7b1079b362eee79ba9d4b7ac432aad64736f6c634300060c00335969656c64546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class USDG__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDG> {
    return super.deploy(_vault, overrides || {}) as Promise<USDG>;
  }
  getDeployTransaction(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  attach(address: string): USDG {
    return super.attach(address) as USDG;
  }
  connect(signer: Signer): USDG__factory {
    return super.connect(signer) as USDG__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDGInterface {
    return new utils.Interface(_abi) as USDGInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDG {
    return new Contract(address, _abi, signerOrProvider) as USDG;
  }
}
