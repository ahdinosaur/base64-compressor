/**
 * Base64 URL: Base64 encoding with URL-safe character set
 *
 * - Replace `+` with `-`
 * - Replace `/` with `_`
 * - Remove `=` padding
 */
export declare function encodeBase64Url(arraybuffer: ArrayBuffer): string;
export declare function decodeBase64Url(base64: string): ArrayBuffer;
//# sourceMappingURL=base64url.d.ts.map