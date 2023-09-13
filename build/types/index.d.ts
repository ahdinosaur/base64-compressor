import { CompressionFormat } from './compress.js';
export type { CompressionFormat };
export declare function encode(value: any, compressionFormat?: CompressionFormat): Promise<string>;
export declare function decode(text: string, compressionFormat?: CompressionFormat): Promise<any>;
export declare function encodeBinary(value: ArrayBuffer, compressionFormat?: CompressionFormat): Promise<string>;
export declare function decodeBinary(text: string, compressionFormat?: CompressionFormat): Promise<ArrayBuffer>;
//# sourceMappingURL=index.d.ts.map