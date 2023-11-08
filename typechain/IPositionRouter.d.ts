/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPositionRouterInterface extends ethers.utils.Interface {
  functions: {
    "decreasePositionRequestKeys(uint256)": FunctionFragment;
    "decreasePositionRequestKeysStart()": FunctionFragment;
    "executeDecreasePositions(uint256,address)": FunctionFragment;
    "executeIncreasePositions(uint256,address)": FunctionFragment;
    "getDecreasePositionRequestPath(bytes32)": FunctionFragment;
    "getIncreasePositionRequestPath(bytes32)": FunctionFragment;
    "getRequestQueueLengths()": FunctionFragment;
    "increasePositionRequestKeys(uint256)": FunctionFragment;
    "increasePositionRequestKeysStart()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decreasePositionRequestKeys",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreasePositionRequestKeysStart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeDecreasePositions",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreasePositions",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDecreasePositionRequestPath",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncreasePositionRequestPath",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestQueueLengths",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increasePositionRequestKeys",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increasePositionRequestKeysStart",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "decreasePositionRequestKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreasePositionRequestKeysStart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDecreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreasePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDecreasePositionRequestPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncreasePositionRequestPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestQueueLengths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePositionRequestKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increasePositionRequestKeysStart",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPositionRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPositionRouterInterface;

  functions: {
    decreasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    decreasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    executeDecreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeIncreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDecreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getIncreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getRequestQueueLengths(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    increasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    increasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  decreasePositionRequestKeys(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  decreasePositionRequestKeysStart(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  executeDecreasePositions(
    _count: BigNumberish,
    _executionFeeReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeIncreasePositions(
    _count: BigNumberish,
    _executionFeeReceiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDecreasePositionRequestPath(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getIncreasePositionRequestPath(
    _key: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getRequestQueueLengths(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  increasePositionRequestKeys(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  increasePositionRequestKeysStart(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    decreasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    decreasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeDecreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    executeIncreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getDecreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getIncreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getRequestQueueLengths(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    increasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    increasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    decreasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeDecreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeIncreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDecreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIncreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequestQueueLengths(overrides?: CallOverrides): Promise<BigNumber>;

    increasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decreasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeDecreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeIncreasePositions(
      _count: BigNumberish,
      _executionFeeReceiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDecreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIncreasePositionRequestPath(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequestQueueLengths(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increasePositionRequestKeys(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increasePositionRequestKeysStart(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
