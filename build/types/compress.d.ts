export type CompressionFormat = 'gzip' | 'deflate' | 'deflate-raw';
export declare function compress(data: string | ArrayBuffer, compressionFormat?: CompressionFormat): Promise<ArrayBuffer>;
export declare function decompressAsArrayBuffer(bytes: ArrayBuffer, compressionFormat?: CompressionFormat): Promise<ArrayBuffer>;
export declare function decompressAsString(bytes: ArrayBuffer, compressionFormat?: CompressionFormat): Promise<string>;
export { decompressAsArrayBuffer as decompress };
//# sourceMappingURL=compress.d.ts.map