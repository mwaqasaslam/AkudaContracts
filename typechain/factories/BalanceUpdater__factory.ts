/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalanceUpdater,
  BalanceUpdaterInterface,
} from "../BalanceUpdater";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdg",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_usdgAmount",
        type: "uint256",
      },
    ],
    name: "updateBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610503806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806343aaa69014610030575b600080fd5b61006c6004803603608081101561004657600080fd5b506001600160a01b0381358116916020810135821691604082013516906060013561006e565b005b600084905060008490506000826001600160a01b03166352f55eed876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156100c757600080fd5b505afa1580156100db573d6000803e3d6000fd5b505050506040513d60208110156100f157600080fd5b505160408051631ce9cb8f60e01b81526001600160a01b038981166004830152915192935060009291861691631ce9cb8f91602480820192602092909190829003018186803b15801561014357600080fd5b505afa158015610157573d6000803e3d6000fd5b505050506040513d602081101561016d57600080fd5b5051604080516370a0823160e01b81526001600160a01b038b811660048301529151929350600092918616916370a0823191602480820192602092909190829003018186803b1580156101bf57600080fd5b505afa1580156101d3573d6000803e3d6000fd5b505050506040513d60208110156101e957600080fd5b505190506000610203826101fd868661039a565b906103f9565b604080516323b872dd60e01b81523360048201526001600160a01b038d81166024830152604482018490529151929350908716916323b872dd916064808201926020929091908290030181600087803b15801561025f57600080fd5b505af1158015610273573d6000803e3d6000fd5b505050506040513d602081101561028957600080fd5b5050604080516323b872dd60e01b81523360048201526001600160a01b038c81166024830152604482018a90529151918a16916323b872dd916064808201926020929091908290030181600087803b1580156102e457600080fd5b505af11580156102f8573d6000803e3d6000fd5b505050506040513d602081101561030e57600080fd5b505060408051630711e61960e41b81526001600160a01b038b8116600483015233602483015291519188169163711e6190916044808201926020929091908290030181600087803b15801561036257600080fd5b505af1158015610376573d6000803e3d6000fd5b505050506040513d602081101561038c57600080fd5b505050505050505050505050565b6000828201838110156103f2576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b60006103f283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250600081848411156104c55760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561048a578181015183820152602001610472565b50505050905090810190601f1680156104b75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fea264697066735822122097060544c642a7be92b4b156f428efcf77bfa7ab4e9b054ce67aea2d0ff7d79a64736f6c634300060c0033";

export class BalanceUpdater__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BalanceUpdater> {
    return super.deploy(overrides || {}) as Promise<BalanceUpdater>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalanceUpdater {
    return super.attach(address) as BalanceUpdater;
  }
  connect(signer: Signer): BalanceUpdater__factory {
    return super.connect(signer) as BalanceUpdater__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalanceUpdaterInterface {
    return new utils.Interface(_abi) as BalanceUpdaterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceUpdater {
    return new Contract(address, _abi, signerOrProvider) as BalanceUpdater;
  }
}
