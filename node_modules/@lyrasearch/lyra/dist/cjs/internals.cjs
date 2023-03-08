"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "requireLyraInternals", {
    enumerable: true,
    get: ()=>requireLyraInternals
});
function requireLyraInternals(callback) {
    import("../internals.js").then((loaded)=>setTimeout(()=>callback(undefined, loaded), 1)).catch((error)=>setTimeout(()=>callback(error), 1));
}

//# sourceMappingURL=internals.js.map