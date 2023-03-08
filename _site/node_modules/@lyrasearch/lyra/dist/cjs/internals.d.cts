import type { BoundedMetric } from "../levenshtein.js";
export interface LyraInternals {
    boundedLevenshtein(a: string, b: string, tolerance: number): BoundedMetric;
    formatNanoseconds(value: number | bigint): string;
    getNanosecondsTime(): bigint;
}
export type RequireCallback = (err: Error | undefined, lyra?: LyraInternals) => void;
export declare function requireLyraInternals(callback: RequireCallback): void;
