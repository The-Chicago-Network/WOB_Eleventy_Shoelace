"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    create: ()=>create,
    insert: ()=>insert,
    insertWithHooks: ()=>insertWithHooks,
    insertBatch: ()=>insertBatch,
    remove: ()=>remove,
    search: ()=>search,
    save: ()=>save,
    load: ()=>load,
    requireLyra: ()=>requireLyra
});
let _esmCreate;
let _esmInsert;
let _esmInsertWithHooks;
let _esmInsertBatch;
let _esmRemove;
let _esmSearch;
let _esmSave;
let _esmLoad;
async function create(...args) {
    if (!_esmCreate) {
        const imported = await import("../methods/create.js");
        _esmCreate = imported.create;
    }
    return _esmCreate(...args);
}
async function insert(...args) {
    if (!_esmInsert) {
        const imported = await import("../methods/insert.js");
        _esmInsert = imported.insert;
    }
    return _esmInsert(...args);
}
async function insertWithHooks(...args) {
    if (!_esmInsertWithHooks) {
        const imported = await import("../methods/insert.js");
        _esmInsertWithHooks = imported.insertWithHooks;
    }
    return _esmInsertWithHooks(...args);
}
async function insertBatch(...args) {
    if (!_esmInsertBatch) {
        const imported = await import("../methods/insert.js");
        _esmInsertBatch = imported.insertBatch;
    }
    return _esmInsertBatch(...args);
}
async function remove(...args) {
    if (!_esmRemove) {
        const imported = await import("../methods/remove.js");
        _esmRemove = imported.remove;
    }
    return _esmRemove(...args);
}
async function search(...args) {
    if (!_esmSearch) {
        const imported = await import("../methods/search.js");
        _esmSearch = imported.search;
    }
    return _esmSearch(...args);
}
async function save(...args) {
    if (!_esmSave) {
        const imported = await import("../methods/save.js");
        _esmSave = imported.save;
    }
    return _esmSave(...args);
}
async function load(...args) {
    if (!_esmLoad) {
        const imported = await import("../methods/load.js");
        _esmLoad = imported.load;
    }
    return _esmLoad(...args);
}
function requireLyra(callback) {
    import("../index.js").then((loaded)=>setTimeout(()=>callback(undefined, loaded), 1)).catch((error)=>setTimeout(()=>callback(error), 1));
}

//# sourceMappingURL=index.js.map