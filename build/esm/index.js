import{encodeBase64Url as e,decodeBase64Url as s}from"./base64url.js";import{compress as n,decompressAsString as t,decompressAsArrayBuffer as i}from"./compress.js";async function c(r,o){return e(await n(JSON.stringify(r),o))}async function f(r,o){return JSON.parse(await t(s(r),o))}async function y(r,o){return e(await n(r,o))}async function d(r,o){return await i(s(r),o)}export{f as decode,d as decodeBinary,c as encode,y as encodeBinary};
//# sourceMappingURL=index.js.map
