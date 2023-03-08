import type { create as esmCreate } from "../methods/create.js";
import type { insert as esmInsert, insertBatch as esmInsertBatch, insertWithHooks as esmInsertWithHooks } from "../methods/insert.js";
import type { load as esmLoad } from "../methods/load.js";
import type { remove as esmRemove } from "../methods/remove.js";
import type { save as esmSave } from "../methods/save.js";
import type { search as esmSearch } from "../methods/search.js";
export interface LyraExport {
    create: typeof esmCreate;
    insert: typeof esmInsert;
    insertWithHooks: typeof esmInsertWithHooks;
    insertBatch: typeof esmInsertBatch;
    remove: typeof esmRemove;
    search: typeof esmSearch;
    save: typeof esmSave;
    load: typeof esmLoad;
}
export type RequireCallback = (err: Error | undefined, lyra?: LyraExport) => void;
export declare function create(...args: Parameters<typeof esmCreate>): ReturnType<typeof esmCreate>;
export declare function insert(...args: Parameters<typeof esmInsert>): ReturnType<typeof esmInsert>;
export declare function insertWithHooks(...args: Parameters<typeof esmInsertWithHooks>): ReturnType<typeof esmInsertWithHooks>;
export declare function insertBatch(...args: Parameters<typeof esmInsertBatch>): ReturnType<typeof esmInsertBatch>;
export declare function remove(...args: Parameters<typeof esmRemove>): ReturnType<typeof esmRemove>;
export declare function search(...args: Parameters<typeof esmSearch>): ReturnType<typeof esmSearch>;
export declare function save(...args: Parameters<typeof esmSave>): ReturnType<typeof esmSave>;
export declare function load(...args: Parameters<typeof esmLoad>): ReturnType<typeof esmLoad>;
export declare function requireLyra(callback: RequireCallback): void;
