import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type Participant = {
    $$type: 'Participant';
    addr: Address;
    tokenBought: bigint;
}

export function storeParticipant(src: Participant) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.addr);
        b_0.storeUint(src.tokenBought, 64);
    };
}

export function loadParticipant(slice: Slice) {
    let sc_0 = slice;
    let _addr = sc_0.loadAddress();
    let _tokenBought = sc_0.loadUintBig(64);
    return { $$type: 'Participant' as const, addr: _addr, tokenBought: _tokenBought };
}

function loadTupleParticipant(source: TupleReader) {
    let _addr = source.readAddress();
    let _tokenBought = source.readBigNumber();
    return { $$type: 'Participant' as const, addr: _addr, tokenBought: _tokenBought };
}

function storeTupleParticipant(source: Participant) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.addr);
    builder.writeNumber(source.tokenBought);
    return builder.build();
}

function dictValueParserParticipant(): DictionaryValue<Participant> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeParticipant(src)).endCell());
        },
        parse: (src) => {
            return loadParticipant(src.loadRef().beginParse());
        }
    }
}

export type TokenPayout = {
    $$type: 'TokenPayout';
    value: bigint;
}

export function storeTokenPayout(src: TokenPayout) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(359506082, 32);
        b_0.storeCoins(src.value);
    };
}

export function loadTokenPayout(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 359506082) { throw Error('Invalid prefix'); }
    let _value = sc_0.loadCoins();
    return { $$type: 'TokenPayout' as const, value: _value };
}

function loadTupleTokenPayout(source: TupleReader) {
    let _value = source.readBigNumber();
    return { $$type: 'TokenPayout' as const, value: _value };
}

function storeTupleTokenPayout(source: TokenPayout) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.value);
    return builder.build();
}

function dictValueParserTokenPayout(): DictionaryValue<TokenPayout> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenPayout(src)).endCell());
        },
        parse: (src) => {
            return loadTokenPayout(src.loadRef().beginParse());
        }
    }
}

export type TokenPayoutResponse = {
    $$type: 'TokenPayoutResponse';
    token: string;
}

export function storeTokenPayoutResponse(src: TokenPayoutResponse) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.token);
    };
}

export function loadTokenPayoutResponse(slice: Slice) {
    let sc_0 = slice;
    let _token = sc_0.loadStringRefTail();
    return { $$type: 'TokenPayoutResponse' as const, token: _token };
}

function loadTupleTokenPayoutResponse(source: TupleReader) {
    let _token = source.readString();
    return { $$type: 'TokenPayoutResponse' as const, token: _token };
}

function storeTupleTokenPayoutResponse(source: TokenPayoutResponse) {
    let builder = new TupleBuilder();
    builder.writeString(source.token);
    return builder.build();
}

function dictValueParserTokenPayoutResponse(): DictionaryValue<TokenPayoutResponse> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTokenPayoutResponse(src)).endCell());
        },
        parse: (src) => {
            return loadTokenPayoutResponse(src.loadRef().beginParse());
        }
    }
}

export type Winner = {
    $$type: 'Winner';
    value: bigint;
    token: bigint;
    address: Address;
}

export function storeWinner(src: Winner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeCoins(src.value);
        b_0.storeInt(src.token, 257);
        b_0.storeAddress(src.address);
    };
}

export function loadWinner(slice: Slice) {
    let sc_0 = slice;
    let _value = sc_0.loadCoins();
    let _token = sc_0.loadIntBig(257);
    let _address = sc_0.loadAddress();
    return { $$type: 'Winner' as const, value: _value, token: _token, address: _address };
}

function loadTupleWinner(source: TupleReader) {
    let _value = source.readBigNumber();
    let _token = source.readBigNumber();
    let _address = source.readAddress();
    return { $$type: 'Winner' as const, value: _value, token: _token, address: _address };
}

function storeTupleWinner(source: Winner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.value);
    builder.writeNumber(source.token);
    builder.writeAddress(source.address);
    return builder.build();
}

function dictValueParserWinner(): DictionaryValue<Winner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWinner(src)).endCell());
        },
        parse: (src) => {
            return loadWinner(src.loadRef().beginParse());
        }
    }
}

 type LotteryPool_init_args = {
    $$type: 'LotteryPool_init_args';
}

function initLotteryPool_init_args(src: LotteryPool_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function LotteryPool_init() {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initLotteryPool_init_args({ $$type: 'LotteryPool_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const LotteryPool_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    5352: { message: `winner not found` },
    10913: { message: `Maximum token supply reached!` },
    21842: { message: `Owner only access to run the game!` },
    57066: { message: `Each token price is 1 ton` },
}

const LotteryPool_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Participant","header":null,"fields":[{"name":"addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"tokenBought","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"TokenPayout","header":359506082,"fields":[{"name":"value","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"TokenPayoutResponse","header":null,"fields":[{"name":"token","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"Winner","header":null,"fields":[{"name":"value","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"token","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"address","type":{"kind":"simple","type":"address","optional":false}}]},
]

const LotteryPool_getters: ABIGetter[] = [
    {"name":"totalBalance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"totalTokens","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getUserTokens","arguments":[],"returnType":{"kind":"dict","key":"address","value":"TokenPayoutResponse","valueFormat":"ref"}},
    {"name":"getLastwinner","arguments":[],"returnType":{"kind":"simple","type":"Winner","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const LotteryPool_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"TokenPayout"}},
    {"receiver":"internal","message":{"kind":"text","text":"run game"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class LotteryPool implements Contract {
    
    static async init() {
        return await LotteryPool_init();
    }
    
    static async fromInit() {
        const init = await LotteryPool_init();
        const address = contractAddress(0, init);
        return new LotteryPool(address, init);
    }
    
    static fromAddress(address: Address) {
        return new LotteryPool(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  LotteryPool_types,
        getters: LotteryPool_getters,
        receivers: LotteryPool_receivers,
        errors: LotteryPool_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenPayout | 'run game' | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenPayout') {
            body = beginCell().store(storeTokenPayout(message)).endCell();
        }
        if (message === 'run game') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getTotalBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('totalBalance', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getTotalTokens(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('totalTokens', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetUserTokens(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getUserTokens', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.Address(), dictValueParserTokenPayoutResponse(), source.readCellOpt());
        return result;
    }
    
    async getGetLastwinner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getLastwinner', builder.build())).stack;
        const result = loadTupleWinner(source);
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}