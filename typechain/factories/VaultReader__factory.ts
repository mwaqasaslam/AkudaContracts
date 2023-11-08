/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VaultReader, VaultReaderInterface } from "../VaultReader";

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
        name: "_positionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_usdgAmount",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "getVaultTokenInfoV3",
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
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_positionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_usdgAmount",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "getVaultTokenInfoV4",
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
  "0x608060405234801561001057600080fd5b506115c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063d3f3265c1461003b578063f75e810114610154575b600080fd5b610104600480360360a081101561005157600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561009357600080fd5b8201836020820111156100a557600080fd5b803590602001918460208302840111600160201b831117156100c657600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061021d945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610140578181015183820152602001610128565b505050509050019250505060405180910390f35b610104600480360360a081101561016a57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156101ac57600080fd5b8201836020820111156101be57600080fd5b803590602001918460208302840111600160201b831117156101df57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610c27945050505050565b60606000600f905060008790506000816001600160a01b031663741bef1a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561026557600080fd5b505afa158015610279573d6000803e3d6000fd5b505050506040513d602081101561028f57600080fd5b50518551909150889060609085026001600160401b03811180156102b257600080fd5b506040519080825280602002602001820160405280156102dc578160200160208202803683370190505b50905060005b8751811015610c185760008882815181106102f957fe5b6020026020010151905060006001600160a01b0316816001600160a01b031614156103215750895b856001600160a01b03166352f55eed826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561036e57600080fd5b505afa158015610382573d6000803e3d6000fd5b505050506040513d602081101561039857600080fd5b505183518490848a029081106103aa57fe5b602002602001018181525050856001600160a01b031663c3c7b9e9826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561040357600080fd5b505afa158015610417573d6000803e3d6000fd5b505050506040513d602081101561042d57600080fd5b5051835184906001858b020190811061044257fe5b602002602001018181525050856001600160a01b0316631aa4ace5826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561049b57600080fd5b505afa1580156104af573d6000803e3d6000fd5b505050506040513d60208110156104c557600080fd5b5051835184906002858b02019081106104da57fe5b602002602001018181525050856001600160a01b0316632c668ec1828c6040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b15801561053b57600080fd5b505afa15801561054f573d6000803e3d6000fd5b505050506040513d602081101561056557600080fd5b5051835184906003858b020190811061057a57fe5b602002602001018181525050856001600160a01b031663ab2f3ad4826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156105d357600080fd5b505afa1580156105e7573d6000803e3d6000fd5b505050506040513d60208110156105fd57600080fd5b5051835184906004858b020190811061061257fe5b602002602001018181525050856001600160a01b0316634a993ee9826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561066b57600080fd5b505afa15801561067f573d6000803e3d6000fd5b505050506040513d602081101561069557600080fd5b5051835184906005858b02019081106106aa57fe5b602002602001018181525050856001600160a01b031663ad1e4f8d826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561070357600080fd5b505afa158015610717573d6000803e3d6000fd5b505050506040513d602081101561072d57600080fd5b5051835184906006858b020190811061074257fe5b602002602001018181525050856001600160a01b0316638a78daa8826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561079b57600080fd5b505afa1580156107af573d6000803e3d6000fd5b505050506040513d60208110156107c557600080fd5b5051835184906007858b02019081106107da57fe5b602002602001018181525050836001600160a01b0316639698d25a826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561083357600080fd5b505afa158015610847573d6000803e3d6000fd5b505050506040513d602081101561085d57600080fd5b5051835184906008858b020190811061087257fe5b602002602001018181525050836001600160a01b0316631045c74e826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156108cb57600080fd5b505afa1580156108df573d6000803e3d6000fd5b505050506040513d60208110156108f557600080fd5b5051835184906009858b020190811061090a57fe5b602002602001018181525050856001600160a01b03166381a612d6826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561096357600080fd5b505afa158015610977573d6000803e3d6000fd5b505050506040513d602081101561098d57600080fd5b505183518490600a858b02019081106109a257fe5b602002602001018181525050856001600160a01b031663e124e6d2826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156109fb57600080fd5b505afa158015610a0f573d6000803e3d6000fd5b505050506040513d6020811015610a2557600080fd5b505183518490600b858b0201908110610a3a57fe5b602002602001018181525050856001600160a01b031663f07456ce826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a9357600080fd5b505afa158015610aa7573d6000803e3d6000fd5b505050506040513d6020811015610abd57600080fd5b505183518490600c858b0201908110610ad257fe5b602090810291909101810191909152604080516356c8c2c160e01b81526001600160a01b038481166004830152600060248301529151918816926356c8c2c192604480840193829003018186803b158015610b2c57600080fd5b505afa158015610b40573d6000803e3d6000fd5b505050506040513d6020811015610b5657600080fd5b505183518490600d858b0201908110610b6b57fe5b602090810291909101810191909152604080516356c8c2c160e01b81526001600160a01b038481166004830152600160248301529151918816926356c8c2c192604480840193829003018186803b158015610bc557600080fd5b505afa158015610bd9573d6000803e3d6000fd5b505050506040513d6020811015610bef57600080fd5b505183518490600e858b0201908110610c0457fe5b6020908102919091010152506001016102e2565b509a9950505050505050505050565b60606000600e905060008790506000816001600160a01b031663741bef1a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c6f57600080fd5b505afa158015610c83573d6000803e3d6000fd5b505050506040513d6020811015610c9957600080fd5b50518551909150889060609085026001600160401b0381118015610cbc57600080fd5b50604051908082528060200260200182016040528015610ce6578160200160208202803683370190505b50905060005b8751811015610c18576000888281518110610d0357fe5b6020026020010151905060006001600160a01b0316816001600160a01b03161415610d2b5750895b856001600160a01b03166352f55eed826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610d7857600080fd5b505afa158015610d8c573d6000803e3d6000fd5b505050506040513d6020811015610da257600080fd5b505183518490848a02908110610db457fe5b602002602001018181525050856001600160a01b031663c3c7b9e9826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610e0d57600080fd5b505afa158015610e21573d6000803e3d6000fd5b505050506040513d6020811015610e3757600080fd5b5051835184906001858b0201908110610e4c57fe5b602002602001018181525050856001600160a01b0316631aa4ace5826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ea557600080fd5b505afa158015610eb9573d6000803e3d6000fd5b505050506040513d6020811015610ecf57600080fd5b5051835184906002858b0201908110610ee457fe5b602002602001018181525050856001600160a01b0316632c668ec1828c6040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b158015610f4557600080fd5b505afa158015610f59573d6000803e3d6000fd5b505050506040513d6020811015610f6f57600080fd5b5051835184906003858b0201908110610f8457fe5b602002602001018181525050856001600160a01b031663ab2f3ad4826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610fdd57600080fd5b505afa158015610ff1573d6000803e3d6000fd5b505050506040513d602081101561100757600080fd5b5051835184906004858b020190811061101c57fe5b602002602001018181525050856001600160a01b0316634a993ee9826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561107557600080fd5b505afa158015611089573d6000803e3d6000fd5b505050506040513d602081101561109f57600080fd5b5051835184906005858b02019081106110b457fe5b602002602001018181525050856001600160a01b031663ad1e4f8d826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561110d57600080fd5b505afa158015611121573d6000803e3d6000fd5b505050506040513d602081101561113757600080fd5b5051835184906006858b020190811061114c57fe5b602002602001018181525050856001600160a01b0316638a78daa8826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156111a557600080fd5b505afa1580156111b9573d6000803e3d6000fd5b505050506040513d60208110156111cf57600080fd5b5051835184906007858b02019081106111e457fe5b602002602001018181525050836001600160a01b0316639698d25a826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561123d57600080fd5b505afa158015611251573d6000803e3d6000fd5b505050506040513d602081101561126757600080fd5b5051835184906008858b020190811061127c57fe5b602002602001018181525050856001600160a01b03166381a612d6826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156112d557600080fd5b505afa1580156112e9573d6000803e3d6000fd5b505050506040513d60208110156112ff57600080fd5b5051835184906009858b020190811061131457fe5b602002602001018181525050856001600160a01b031663e124e6d2826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561136d57600080fd5b505afa158015611381573d6000803e3d6000fd5b505050506040513d602081101561139757600080fd5b505183518490600a858b02019081106113ac57fe5b602002602001018181525050856001600160a01b031663f07456ce826040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561140557600080fd5b505afa158015611419573d6000803e3d6000fd5b505050506040513d602081101561142f57600080fd5b505183518490600b858b020190811061144457fe5b602090810291909101810191909152604080516356c8c2c160e01b81526001600160a01b038481166004830152600060248301529151918816926356c8c2c192604480840193829003018186803b15801561149e57600080fd5b505afa1580156114b2573d6000803e3d6000fd5b505050506040513d60208110156114c857600080fd5b505183518490600c858b02019081106114dd57fe5b602090810291909101810191909152604080516356c8c2c160e01b81526001600160a01b038481166004830152600160248301529151918816926356c8c2c192604480840193829003018186803b15801561153757600080fd5b505afa15801561154b573d6000803e3d6000fd5b505050506040513d602081101561156157600080fd5b505183518490600d858b020190811061157657fe5b602090810291909101015250600101610cec56fea2646970667358221220a86445fc7755d9b8ce0ee38b840b02c8fd603125e3e57d939420526c26c1269564736f6c634300060c0033";

export class VaultReader__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultReader> {
    return super.deploy(overrides || {}) as Promise<VaultReader>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VaultReader {
    return super.attach(address) as VaultReader;
  }
  connect(signer: Signer): VaultReader__factory {
    return super.connect(signer) as VaultReader__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultReaderInterface {
    return new utils.Interface(_abi) as VaultReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultReader {
    return new Contract(address, _abi, signerOrProvider) as VaultReader;
  }
}
