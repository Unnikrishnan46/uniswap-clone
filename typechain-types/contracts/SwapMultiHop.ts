/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SwapMultiHopInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DAI"
      | "USDC"
      | "WETH9"
      | "poolFee"
      | "swapExactInputMultihop"
      | "swapExactOutputMultihop"
      | "swapRouter"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "DAI", values?: undefined): string;
  encodeFunctionData(functionFragment: "USDC", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "poolFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swapExactInputMultihop",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactOutputMultihop",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "DAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "USDC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactInputMultihop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactOutputMultihop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
}

export interface SwapMultiHop extends BaseContract {
  connect(runner?: ContractRunner | null): SwapMultiHop;
  waitForDeployment(): Promise<this>;

  interface: SwapMultiHopInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DAI: TypedContractMethod<[], [string], "view">;

  USDC: TypedContractMethod<[], [string], "view">;

  WETH9: TypedContractMethod<[], [string], "view">;

  poolFee: TypedContractMethod<[], [bigint], "view">;

  swapExactInputMultihop: TypedContractMethod<
    [amountIn: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  swapExactOutputMultihop: TypedContractMethod<
    [amountOut: BigNumberish, amountInMaximum: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  swapRouter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DAI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "USDC"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WETH9"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poolFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swapExactInputMultihop"
  ): TypedContractMethod<[amountIn: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "swapExactOutputMultihop"
  ): TypedContractMethod<
    [amountOut: BigNumberish, amountInMaximum: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapRouter"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
