import { getNested } from "./utils.js";
export function getFacets(schema, docs, results, facetsConfig) {
    const facets = {};
    const allIDs = results.map(([id])=>id);
    const allDocs = allIDs.map((id)=>docs[id]);
    const facetKeys = Object.keys(facetsConfig);
    for (const facet of facetKeys){
        const facetType = getFacetType(schema, facet);
        let values = {};
        // Hack to guarantee the same order of ranges as specified by the user
        if (facetType === "number") {
            const { ranges  } = facetsConfig[facet];
            const tmp = [];
            for (const range of ranges){
                tmp.push([
                    `${range.from}-${range.to}`,
                    0
                ]);
            }
            values = Object.fromEntries(tmp);
        }
        facets[facet] = {
            count: 0,
            values
        };
    }
    const allDocsLength = allDocs.length;
    for(let i = 0; i < allDocsLength; i++){
        const doc = allDocs[i];
        for (const facet of facetKeys){
            const facetValue = facet.includes('.') ? getNested(doc, facet) : doc[facet];
            // String based facets
            if (typeof facetValue === "string") {
                if (facets[facet].values[facetValue] === undefined) {
                    facets[facet].values[facetValue] = 1;
                } else {
                    facets[facet].values[facetValue]++;
                }
            // Boolean facets
            } else if (typeof facetValue === "boolean") {
                if (facets[facet].values[facetValue.toString()] === undefined) {
                    facets[facet].values[facetValue.toString()] = 1;
                } else {
                    facets[facet].values[facetValue.toString()]++;
                }
            } else if (typeof facetValue === "number") {
                for (const range of facetsConfig[facet].ranges){
                    if (facetValue >= range.from && facetValue <= range.to) {
                        if (facets[facet].values[`${range.from}-${range.to}`] === undefined) {
                            facets[facet].values[`${range.from}-${range.to}`] = 1;
                        } else {
                            facets[facet].values[`${range.from}-${range.to}`]++;
                        }
                    }
                }
            }
        }
    }
    for (const facet of facetKeys){
        const facetType = getFacetType(schema, facet);
        // Count the number of values for each facet
        facets[facet].count = Object.keys(facets[facet].values).length;
        // Sort only string-based facets
        if (facetType === "string") {
            facets[facet].values = Object.fromEntries(Object.entries(facets[facet].values).sort((a, b)=>sortingPredicate(facetsConfig[facet].sort, a, b)).slice(facetsConfig[facet].offset ?? 0, facetsConfig[facet].limit ?? 10));
        }
    }
    return facets;
}
const facetTypeCache = new Map();
function getFacetType(schema, facet) {
    if (facetTypeCache.has(facet)) {
        return facetTypeCache.get(facet);
    }
    const facetType = getNested(schema, facet);
    facetTypeCache.set(facet, facetType);
    return facetType;
}
function sortingPredicate(order = "desc", a, b) {
    if (order.toLowerCase() === "asc") {
        return a[1] - b[1];
    } else {
        return b[1] - a[1];
    }
}

//# sourceMappingURL=facets.js.map