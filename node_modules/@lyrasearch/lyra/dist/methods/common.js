import * as ERRORS from "../errors.js";
export function assertDocSchema(doc, lyraSchema) {
    if (!recursiveCheckDocSchema(doc, lyraSchema)) {
        throw new Error(ERRORS.INVALID_DOC_SCHEMA(lyraSchema, doc));
    }
}
export function recursiveCheckDocSchema(newDoc, schema) {
    for(const key in newDoc){
        if (!(key in schema)) {
            continue;
        }
        const propType = typeof newDoc[key];
        if (propType === "object") {
            recursiveCheckDocSchema(newDoc[key], schema);
        } else if (typeof newDoc[key] !== schema[key]) {
            return false;
        }
    }
    return true;
}
export function getIndices(lyra, indices) {
    const knownIndices = Object.keys(lyra.index);
    if (!indices) {
        return knownIndices;
    }
    if (typeof indices === "string") {
        if (indices !== "*") {
            throw new Error(ERRORS.INVALID_PROPERTY(indices, knownIndices));
        }
        return knownIndices;
    }
    for (const index of indices){
        if (!knownIndices.includes(index)) {
            throw new Error(ERRORS.INVALID_PROPERTY(index, knownIndices));
        }
    }
    return indices;
}

//# sourceMappingURL=common.js.map