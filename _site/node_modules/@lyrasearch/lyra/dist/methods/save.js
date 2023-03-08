export async function save(lyra) {
    return {
        index: lyra.index,
        docs: lyra.docs,
        schema: lyra.schema,
        frequencies: lyra.frequencies,
        tokenOccurrencies: lyra.tokenOccurrencies,
        defaultLanguage: lyra.defaultLanguage,
        avgFieldLength: lyra.avgFieldLength,
        fieldLengths: lyra.fieldLengths
    };
}

//# sourceMappingURL=save.js.map