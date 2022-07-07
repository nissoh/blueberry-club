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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IGlpManagerInterface extends ethers.utils.Interface {
  functions: {
    "addLiquidity(address,uint256,uint256,uint256)": FunctionFragment;
    "addLiquidityForAccount(address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "cooldownDuration()": FunctionFragment;
    "lastAddedAt(address)": FunctionFragment;
    "removeLiquidity(address,uint256,uint256,address)": FunctionFragment;
    "removeLiquidityForAccount(address,address,uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityForAccount",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cooldownDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastAddedAt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityForAccount",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityForAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cooldownDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastAddedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityForAccount",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGlpManager extends BaseContract {
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

  interface: IGlpManagerInterface;

  functions: {
    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cooldownDuration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastAddedAt(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityForAccount(
    _fundingAccount: string,
    _account: string,
    _token: string,
    _amount: BigNumberish,
    _minUsdg: BigNumberish,
    _minGlp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cooldownDuration(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastAddedAt(
    _account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityForAccount(
    _account: string,
    _tokenOut: string,
    _glpAmount: BigNumberish,
    _minOut: BigNumberish,
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cooldownDuration(overrides?: CallOverrides): Promise<BigNumber>;

    lastAddedAt(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cooldownDuration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastAddedAt(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityForAccount(
      _fundingAccount: string,
      _account: string,
      _token: string,
      _amount: BigNumberish,
      _minUsdg: BigNumberish,
      _minGlp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cooldownDuration(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastAddedAt(
      _account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityForAccount(
      _account: string,
      _tokenOut: string,
      _glpAmount: BigNumberish,
      _minOut: BigNumberish,
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
