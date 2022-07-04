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

interface TokenManagerInterface extends ethers.utils.Interface {
  functions: {
    "actionsNonce()": FunctionFragment;
    "admin()": FunctionFragment;
    "approve(address,address,uint256,uint256)": FunctionFragment;
    "approveNFT(address,address,uint256,uint256)": FunctionFragment;
    "approveNFTs(address,address,uint256[],uint256)": FunctionFragment;
    "initialize(address[])": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "isSigner(address)": FunctionFragment;
    "minAuthorizations()": FunctionFragment;
    "pendingActions(bytes32)": FunctionFragment;
    "receiveNFTs(address,address,uint256[])": FunctionFragment;
    "setAdmin(address,address,uint256)": FunctionFragment;
    "setGov(address,address,address,uint256)": FunctionFragment;
    "signApprove(address,address,uint256,uint256)": FunctionFragment;
    "signApproveNFT(address,address,uint256,uint256)": FunctionFragment;
    "signApproveNFTs(address,address,uint256[],uint256)": FunctionFragment;
    "signSetAdmin(address,address,uint256)": FunctionFragment;
    "signSetGov(address,address,address,uint256)": FunctionFragment;
    "signalApprove(address,address,uint256)": FunctionFragment;
    "signalApproveNFT(address,address,uint256)": FunctionFragment;
    "signalApproveNFTs(address,address,uint256[])": FunctionFragment;
    "signalSetAdmin(address,address)": FunctionFragment;
    "signalSetGov(address,address,address)": FunctionFragment;
    "signedActions(address,bytes32)": FunctionFragment;
    "signers(uint256)": FunctionFragment;
    "signersLength()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "actionsNonce",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveNFT",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveNFTs",
    values: [string, string, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isSigner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "minAuthorizations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingActions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNFTs",
    values: [string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signApprove",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signApproveNFT",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signApproveNFTs",
    values: [string, string, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signSetAdmin",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signSetGov",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalApprove",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalApproveNFT",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalApproveNFTs",
    values: [string, string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetAdmin",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetGov",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "signedActions",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signersLength",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "actionsNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approveNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minAuthorizations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signApproveNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signApproveNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signSetAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signSetGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signalApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalApproveNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalApproveNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signedActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signersLength",
    data: BytesLike
  ): Result;

  events: {
    "ClearAction(bytes32,uint256)": EventFragment;
    "SignAction(bytes32,uint256)": EventFragment;
    "SignalApprove(address,address,uint256,bytes32,uint256)": EventFragment;
    "SignalApproveNFT(address,address,uint256,bytes32,uint256)": EventFragment;
    "SignalApproveNFTs(address,address,uint256[],bytes32,uint256)": EventFragment;
    "SignalPendingAction(bytes32,uint256)": EventFragment;
    "SignalSetAdmin(address,address,bytes32,uint256)": EventFragment;
    "SignalSetGov(address,address,address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClearAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalApprove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalApproveNFT"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalApproveNFTs"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalPendingAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalSetAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalSetGov"): EventFragment;
}

export type ClearActionEvent = TypedEvent<
  [string, BigNumber] & { action: string; nonce: BigNumber }
>;

export type SignActionEvent = TypedEvent<
  [string, BigNumber] & { action: string; nonce: BigNumber }
>;

export type SignalApproveEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber] & {
    token: string;
    spender: string;
    amount: BigNumber;
    action: string;
    nonce: BigNumber;
  }
>;

export type SignalApproveNFTEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber] & {
    token: string;
    spender: string;
    tokenId: BigNumber;
    action: string;
    nonce: BigNumber;
  }
>;

export type SignalApproveNFTsEvent = TypedEvent<
  [string, string, BigNumber[], string, BigNumber] & {
    token: string;
    spender: string;
    tokenIds: BigNumber[];
    action: string;
    nonce: BigNumber;
  }
>;

export type SignalPendingActionEvent = TypedEvent<
  [string, BigNumber] & { action: string; nonce: BigNumber }
>;

export type SignalSetAdminEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    target: string;
    admin: string;
    action: string;
    nonce: BigNumber;
  }
>;

export type SignalSetGovEvent = TypedEvent<
  [string, string, string, string, BigNumber] & {
    timelock: string;
    target: string;
    gov: string;
    action: string;
    nonce: BigNumber;
  }
>;

export class TokenManager extends BaseContract {
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

  interface: TokenManagerInterface;

  functions: {
    actionsNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _signers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    isSigner(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    minAuthorizations(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveNFTs(
      _token: string,
      _sender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signSetAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetAdmin(
      _target: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signedActions(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    signersLength(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  actionsNonce(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  approve(
    _token: string,
    _spender: string,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveNFT(
    _token: string,
    _spender: string,
    _tokenId: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveNFTs(
    _token: string,
    _spender: string,
    _tokenIds: BigNumberish[],
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _signers: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  isSigner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  minAuthorizations(overrides?: CallOverrides): Promise<BigNumber>;

  pendingActions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  receiveNFTs(
    _token: string,
    _sender: string,
    _tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    _target: string,
    _admin: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _timelock: string,
    _target: string,
    _gov: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signApprove(
    _token: string,
    _spender: string,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signApproveNFT(
    _token: string,
    _spender: string,
    _tokenId: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signApproveNFTs(
    _token: string,
    _spender: string,
    _tokenIds: BigNumberish[],
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signSetAdmin(
    _target: string,
    _admin: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signSetGov(
    _timelock: string,
    _target: string,
    _gov: string,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalApprove(
    _token: string,
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalApproveNFT(
    _token: string,
    _spender: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalApproveNFTs(
    _token: string,
    _spender: string,
    _tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetAdmin(
    _target: string,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetGov(
    _timelock: string,
    _target: string,
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signedActions(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  signersLength(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    actionsNonce(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(_signers: string[], overrides?: CallOverrides): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    isSigner(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    minAuthorizations(overrides?: CallOverrides): Promise<BigNumber>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveNFTs(
      _token: string,
      _sender: string,
      _tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signSetAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetAdmin(
      _target: string,
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      overrides?: CallOverrides
    ): Promise<void>;

    signedActions(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ClearAction(bytes32,uint256)"(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    ClearAction(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    "SignAction(bytes32,uint256)"(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    SignAction(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    "SignalApprove(address,address,uint256,bytes32,uint256)"(
      token?: null,
      spender?: null,
      amount?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, BigNumber],
      {
        token: string;
        spender: string;
        amount: BigNumber;
        action: string;
        nonce: BigNumber;
      }
    >;

    SignalApprove(
      token?: null,
      spender?: null,
      amount?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, BigNumber],
      {
        token: string;
        spender: string;
        amount: BigNumber;
        action: string;
        nonce: BigNumber;
      }
    >;

    "SignalApproveNFT(address,address,uint256,bytes32,uint256)"(
      token?: null,
      spender?: null,
      tokenId?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, BigNumber],
      {
        token: string;
        spender: string;
        tokenId: BigNumber;
        action: string;
        nonce: BigNumber;
      }
    >;

    SignalApproveNFT(
      token?: null,
      spender?: null,
      tokenId?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string, BigNumber],
      {
        token: string;
        spender: string;
        tokenId: BigNumber;
        action: string;
        nonce: BigNumber;
      }
    >;

    "SignalApproveNFTs(address,address,uint256[],bytes32,uint256)"(
      token?: null,
      spender?: null,
      tokenIds?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber[], string, BigNumber],
      {
        token: string;
        spender: string;
        tokenIds: BigNumber[];
        action: string;
        nonce: BigNumber;
      }
    >;

    SignalApproveNFTs(
      token?: null,
      spender?: null,
      tokenIds?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, BigNumber[], string, BigNumber],
      {
        token: string;
        spender: string;
        tokenIds: BigNumber[];
        action: string;
        nonce: BigNumber;
      }
    >;

    "SignalPendingAction(bytes32,uint256)"(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    SignalPendingAction(
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { action: string; nonce: BigNumber }
    >;

    "SignalSetAdmin(address,address,bytes32,uint256)"(
      target?: null,
      admin?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { target: string; admin: string; action: string; nonce: BigNumber }
    >;

    SignalSetAdmin(
      target?: null,
      admin?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { target: string; admin: string; action: string; nonce: BigNumber }
    >;

    "SignalSetGov(address,address,address,bytes32,uint256)"(
      timelock?: null,
      target?: null,
      gov?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        timelock: string;
        target: string;
        gov: string;
        action: string;
        nonce: BigNumber;
      }
    >;

    SignalSetGov(
      timelock?: null,
      target?: null,
      gov?: null,
      action?: null,
      nonce?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber],
      {
        timelock: string;
        target: string;
        gov: string;
        action: string;
        nonce: BigNumber;
      }
    >;
  };

  estimateGas: {
    actionsNonce(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _signers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    isSigner(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    minAuthorizations(overrides?: CallOverrides): Promise<BigNumber>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveNFTs(
      _token: string,
      _sender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signSetAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetAdmin(
      _target: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signedActions(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    signersLength(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    actionsNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _signers: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSigner(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minAuthorizations(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveNFTs(
      _token: string,
      _sender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signSetAdmin(
      _target: string,
      _admin: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalApprove(
      _token: string,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalApproveNFT(
      _token: string,
      _spender: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalApproveNFTs(
      _token: string,
      _spender: string,
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetAdmin(
      _target: string,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetGov(
      _timelock: string,
      _target: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signedActions(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signersLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
