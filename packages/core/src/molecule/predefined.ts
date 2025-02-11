import { bytesFrom, BytesLike, Bytes as _Bytes } from "../bytes/index";
import { byteVec, Codec, option, uint, uintNumber, vector } from "./codec";

export const Uint8 = uintNumber(1, true);
export const Uint8Opt = option(Uint8);
export const Uint8Vec = vector(Uint8);

export const Uint16 = uintNumber(2, true);
export const Uint16Opt = option(Uint16);
export const Uint16Vec = vector(Uint16);

export const Uint32 = uintNumber(4, true);
export const Uint32Opt = option(Uint32);
export const Uint32Vec = vector(Uint32);

export const Uint64 = uint(8, true);
export const Uint64Opt = option(Uint64);
export const Uint64Vec = vector(Uint64);

export const Uint128 = uint(16, true);
export const Uint128Opt = option(Uint128);
export const Uint128Vec = vector(Uint128);

export const Uint256 = uint(32, true);
export const Uint256Opt = option(Uint256);
export const Uint256Vec = vector(Uint256);

export const Uint512 = uint(64, true);
export const Uint512Opt = option(Uint512);
export const Uint512Vec = vector(Uint512);

export const Bytes: Codec<BytesLike, _Bytes> = byteVec({
  encode: (value) => bytesFrom(value),
  decode: (buffer) => bytesFrom(buffer),
});
export const BytesOpt = option(Bytes);
export const BytesVec = vector(Bytes);

export const Bool: Codec<boolean> = Codec.from({
  byteLength: 1,
  encode: (value) =>
    bytesFrom(value ? new Uint8Array([1]) : new Uint8Array([0])),
  decode: (buffer) => new Uint8Array(buffer)[0] !== 0,
});
export const BoolOpt = option(Bool);
export const BoolVec = vector(Bool);

export const Byte4: Codec<BytesLike, _Bytes> = Codec.from({
  byteLength: 4,
  encode: bytesFrom,
  decode: bytesFrom,
});
export const Byte4Opt = option(Byte4);
export const Byte4Vec = vector(Byte4);

export const Byte8: Codec<BytesLike, _Bytes> = Codec.from({
  byteLength: 8,
  encode: bytesFrom,
  decode: bytesFrom,
});
export const Byte8Opt = option(Byte8);
export const Byte8Vec = vector(Byte8);

export const Byte16: Codec<BytesLike, _Bytes> = Codec.from({
  byteLength: 16,
  encode: bytesFrom,
  decode: bytesFrom,
});
export const Byte16Opt = option(Byte16);
export const Byte16Vec = vector(Byte16);

export const Byte32: Codec<BytesLike, _Bytes> = Codec.from({
  byteLength: 32,
  encode: bytesFrom,
  decode: bytesFrom,
});
export const Byte32Opt = option(Byte32);
export const Byte32Vec = vector(Byte32);

export const String = byteVec({
  encode: (value: string) => {
    return new TextEncoder().encode(value);
  },
  decode: (buffer) => new TextDecoder().decode(buffer),
});
export const StringVec = vector(String);
export const StringOpt = option(String);
