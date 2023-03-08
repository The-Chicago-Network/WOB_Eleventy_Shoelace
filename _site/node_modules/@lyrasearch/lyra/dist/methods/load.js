import * as ERRORS from "../errors.js";
export async function load(lyra, { index , docs , schema , frequencies , tokenOccurrencies , defaultLanguage , fieldLengths , avgFieldLength  }) {
    if (!lyra.edge) {
        throw new Error(ERRORS.GETTER_SETTER_WORKS_ON_EDGE_ONLY("load"));
    }
    lyra.index = index;
    lyra.docs = docs;
    lyra.docsCount = Object.keys(docs).length;
    lyra.schema = schema;
    lyra.frequencies = frequencies;
    lyra.tokenOccurrencies = tokenOccurrencies;
    lyra.defaultLanguage = defaultLanguage;
    lyra.fieldLengths = fieldLengths;
    lyra.avgFieldLength = avgFieldLength;
}

//# sourceMappingURL=load.js.map