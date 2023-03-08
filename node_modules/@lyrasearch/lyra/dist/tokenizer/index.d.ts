import { Language } from "./languages.js";
export * from "./languages.js";
export type Stemmer = (word: string) => string;
export type TokenizerConfig = {
    enableStemming?: boolean;
    enableStopWords?: boolean;
    customStopWords?: ((stopWords: string[]) => string[]) | string[];
    stemmingFn?: Stemmer;
    tokenizerFn?: Tokenizer;
    assertSupportedLanguage?: (language: string) => void;
};
export type TokenizerConfigExec = {
    enableStemming: boolean;
    enableStopWords: boolean;
    customStopWords: string[];
    stemmingFn?: Stemmer;
    tokenizerFn: Tokenizer;
    assertSupportedLanguage: (language: string) => void;
};
export type Tokenizer = (text: string, language: Language, allowDuplicates: boolean, tokenizerConfig: TokenizerConfig, frequency?: boolean) => string[];
export declare const normalizationCache: Map<any, any>;
export declare function tokenize(input: string, language?: Language, allowDuplicates?: boolean, tokenizerConfig?: TokenizerConfig): string[];
export declare function defaultTokenizerConfig(language: Language, tokenizerConfig?: TokenizerConfig): TokenizerConfigExec;
