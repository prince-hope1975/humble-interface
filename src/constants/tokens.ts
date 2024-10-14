export const TOKEN_VOI = 0;
export const TOKEN_VIA = 6779767;
// TESTNET
//export const TOKEN_WVOI1 = 24590664;
//export const TOKEN_WVOI1 = 34099056;
// MAINNET
export const TOKEN_WVOI1 = 390001;
export const TOKEN_AUSDC = 395614;
export const TOKEN_AALGO = 413153;

export const NETWORK_TOKEN = {
  VOI: {
    tokenId: 0,
    name: "Voi",
    symbol: "VOI",
    decimals: 6,
    totalSupply: BigInt(10_000_000_000 * 1e6),
  },
};

// TODO launchToken

export const CONNECTOR_ALGO_ARC200 = {
  ABI: {
    impure: [
      `_reachp_0((uint64,address,address,(uint64,byte[32],byte[8],uint256)))void`,
      `_reachp_2((uint64,(byte,byte[152])))void`,
      `arc200_approve(address,uint256)byte`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `createAllowanceBox(address,address)byte`,
      `createBalanceBox(address)byte`,
      `deregister()byte`,
      `grant(address)void`,
      `nop()void`,
      `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`,
      `touch()uint64`,
    ],
    pure: [
      `arc200_allowance(address,address)uint256`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `constructor()address`,
      `hasBox((byte,byte[64]))byte`,
      `manager()address`,
      `state()(address,byte,(byte,byte[152]))`,
      `supportsInterface(byte[4])byte`,
      `zeroAddress()address`,
    ],
    sigs: [
      `_reachp_0((uint64,address,address,(uint64,byte[32],byte[8],uint256)))void`,
      `_reachp_2((uint64,(byte,byte[152])))void`,
      `arc200_allowance(address,address)uint256`,
      `arc200_approve(address,uint256)byte`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `constructor()address`,
      `createAllowanceBox(address,address)byte`,
      `createBalanceBox(address)byte`,
      `deregister()byte`,
      `grant(address)void`,
      `hasBox((byte,byte[64]))byte`,
      `manager()address`,
      `nop()void`,
      `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)byte`,
      `state()(address,byte,(byte,byte[152]))`,
      `supportsInterface(byte[4])byte`,
      `touch()uint64`,
      `zeroAddress()address`,
    ],
  },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `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`,
  appClear: `CQ==`,
  appClearMap: {},
  companionInfo: null,
  extraPages: 1,
  stateKeys: 5,
  stateSize: 531,
  unsupported: [],
  version: 13,
};

export const CONNECTOR_ALGO_SWAP200 = {
  ABI: {
    impure: [
      `Protocol_delete()void`,
      `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`,
      `Provider_deposit(byte,(uint256,uint256),uint256)uint256`,
      `Provider_withdraw(byte,uint256,(uint256,uint256))(uint256,uint256)`,
      `Trader_exactSwapAForB(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_exactSwapBForA(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_swapAForB(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_swapBForA(byte,uint256,uint256)(uint256,uint256)`,
      `_reachp_0((uint64,((byte[32],byte[8]),(uint64,uint64,uint64),address)))void`,
      `_reachp_2((uint64,()))void`,
      `_reachp_3((uint64,(byte,byte[161])))void`,
      `arc200_approve(address,uint256)byte`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `createAllowanceBox(address,address)void`,
      `createBalanceBox(address)void`,
    ],
    pure: [
      `Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`,
      `arc200_allowance(address,address)uint256`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `hasBox((byte,byte[64]))byte`,
      `supportsInterface(byte[4])byte`,
    ],
    sigs: [
      `Info()((uint256,uint256),(uint256,uint256),(uint256,uint256,uint256,address,byte),(uint256,uint256),uint64,uint64)`,
      `Protocol_delete()void`,
      `Protocol_harvest(address,(uint256,uint256,uint256,address,byte))((uint256,uint256),uint64)`,
      `Provider_deposit(byte,(uint256,uint256),uint256)uint256`,
      `Provider_withdraw(byte,uint256,(uint256,uint256))(uint256,uint256)`,
      `Trader_exactSwapAForB(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_exactSwapBForA(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_swapAForB(byte,uint256,uint256)(uint256,uint256)`,
      `Trader_swapBForA(byte,uint256,uint256)(uint256,uint256)`,
      `_reachp_0((uint64,((byte[32],byte[8]),(uint64,uint64,uint64),address)))void`,
      `_reachp_2((uint64,()))void`,
      `_reachp_3((uint64,(byte,byte[161])))void`,
      `arc200_allowance(address,address)uint256`,
      `arc200_approve(address,uint256)byte`,
      `arc200_balanceOf(address)uint256`,
      `arc200_decimals()uint64`,
      `arc200_name()byte[32]`,
      `arc200_symbol()byte[8]`,
      `arc200_totalSupply()uint256`,
      `arc200_transfer(address,uint256)byte`,
      `arc200_transferFrom(address,address,uint256)byte`,
      `createAllowanceBox(address,address)void`,
      `createBalanceBox(address)void`,
      `hasBox((byte,byte[64]))byte`,
      `supportsInterface(byte[4])byte`,
    ],
  },
  GlobalNumByteSlice: 7,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `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`,
  appClear: `CQ==`,
  extraPages: 3,
  stateKeys: 6,
  stateSize: 706,
  unsupported: [],
  version: 13,
};
