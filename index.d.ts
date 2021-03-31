declare module 'base45' {
    export function b45encode(buffer: ArrayBuffer): string;
    export function b45decode(str: string): ArrayBuffer;
}
