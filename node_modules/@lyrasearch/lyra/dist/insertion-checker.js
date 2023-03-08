var _globalThis_process;
const kInsertions = Symbol("lyra.insertions");
// Web platforms don't have process. React-Native doesn't have process.emitWarning.
const warn = ((_globalThis_process = globalThis.process) === null || _globalThis_process === void 0 ? void 0 : _globalThis_process.emitWarning) ?? function emitWarning(message, options) {
    console.warn(`[WARNING] [${options.code}] ${message}`);
};
export function trackInsertion(_lyra) {
    const lyra = _lyra;
    if (typeof lyra[kInsertions] !== "number") {
        queueMicrotask(()=>{
            lyra[kInsertions] = undefined;
        });
        lyra[kInsertions] = 0;
    }
    if (lyra[kInsertions] > 1000) {
        warn("Lyra's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread.", {
            code: "LYRA0001"
        });
        lyra[kInsertions] = -1;
    } else if (lyra[kInsertions] >= 0) {
        lyra[kInsertions]++;
    }
}

//# sourceMappingURL=insertion-checker.js.map