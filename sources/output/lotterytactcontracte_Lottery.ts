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

 type Lottery_init_args = {
    $$type: 'Lottery_init_args';
}

function initLottery_init_args(src: Lottery_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Lottery_init() {
    const __code = Cell.fromBase64('te6ccgECJAEABnYAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVGds88uCCIAQFAgEgERID4O2i7fsBkjB/4HAh10nCH5UwINcLH94gghAVbaCiuo6VMNMfAYIQFW2gorry4IH6AAEx2zx/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAAkTDjDXAGDAcA4sj4QwHMfwHKAFWQEDpJh1r6AhKBAQHPAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQAyDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgHIy/8Sy/8V9AAT9AD0AIEBAc8AyQHMye1UBOT4QW8kECNfA4IA3upRJ74S8vSCAbIHgggPQj/4RG6X+CX4FX/4ZN4hofgRoMhvAAFvjG1vjCHbPCeBAQslWfQLb6GSMG3fIG6SMG2X0NQB0DFvAeJus46C2zzjDYEBCwFvIgHJkyFus5YBbyJZzMnoMdALCggJAU75AYLwYgUzlO2oOhWr903j7Sb27o/LHsfb3aUh/MHIf8lkEM+64wIPA1wngQELJVn0C2+hkjBt3yBukjBtl9DUAdAxbwHiIG7y0IBvIVnbPIsSyNs8Ads8CgoKAt7IAcgBzxbJAczJIxA4ASBulTBZ9FkwlEEz9BPiBIEBAVNiIG6VMFn0WjCUQTP0FOICpIEBAVQUAFRlgCFulVtZ9FowmMgBzwBBM/RC4vhBbyQTXwMYoAXbPMgByAHPFskBzMkQVxBFECQQI39t2zwLDAC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydABOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8DQHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAOAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAfg3Nzf4QW8kECNfAySBVVICxwXy9HAl+ERul/gl+BV/+GTeIaH4EaCBFOiBAQFUWABSQEEz9AxvoZQB1wAwkltt4m6z8vSBAQFTB1AzQTP0DG+hlAHXADCSW23iIG7y0IAngQEBIln0DG+hkjBt3yBu8tCAJFlJh9s8f9sxEAAYEEVfBW1tbXBSBVUwAgEgExQCASAXGAIRuyVNs82zxsoYIBUCEbhR3bPNs8bKGCAWAAIjAAImAgHnGRoCASAcHQC4q9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcJ2XTlqzTstzOg6WbZRm6KSCcEDOdWnnFfnSULAdYW4mR7ICEKgN2zzbPGyjIBsABlR5hwIBIB4fAhG1Lntnm2eNlDAgIQARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1WRVNSRXVnTnd5cHFnUDdnV1Q1MXFGd2N5aXF4aXNaNE16SFlybjI3Y1J2VYIAH27UTQ1AH4Y9IAAY5i+gCBAQHXAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhDMAP6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdQB0NP/0//0BPQE9ASBAQHXADAQahBnbBrgMPgo1wsKgwm68uCJIgACJQEE2zwjAGpwghA7msoAbW1tVHREjQhgBB7+qpcxuU2jl+XmRiL15jNIuBKsW0djqT8N0gHQeY1E+EJVUw==');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initLottery_init_args({ $$type: 'Lottery_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Lottery_errors: { [key: number]: { message: string } } = {
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
    21842: { message: `Owner only access to run the game!` },
    57066: { message: `Each token price is 1 ton` },
}

const Lottery_types: ABIType[] = [
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

const Lottery_getters: ABIGetter[] = [
    {"name":"totalBalance","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getUserTokens","arguments":[],"returnType":{"kind":"dict","key":"address","value":"TokenPayoutResponse","valueFormat":"ref"}},
    {"name":"getLastwinner","arguments":[],"returnType":{"kind":"simple","type":"Winner","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const Lottery_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"TokenPayout"}},
    {"receiver":"internal","message":{"kind":"text","text":"run game"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Lottery implements Contract {
    
    static async init() {
        return await Lottery_init();
    }
    
    static async fromInit() {
        const init = await Lottery_init();
        const address = contractAddress(0, init);
        return new Lottery(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Lottery(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Lottery_types,
        getters: Lottery_getters,
        receivers: Lottery_receivers,
        errors: Lottery_errors,
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