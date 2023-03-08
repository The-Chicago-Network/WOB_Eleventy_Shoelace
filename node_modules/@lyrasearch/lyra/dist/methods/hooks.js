import * as ERRORS from "../errors.js";
const SUPPORTED_HOOKS = [
    "afterInsert"
];
export function validateHooks(hooks) {
    if (hooks) {
        if (typeof hooks !== "object") {
            throw new Error(ERRORS.INVALID_HOOKS_OBJECT());
        }
        const invalidHooks = Object.keys(hooks).filter((hook)=>!SUPPORTED_HOOKS.includes(hook));
        if (invalidHooks.length) {
            throw new Error(ERRORS.NON_SUPPORTED_HOOKS(invalidHooks));
        }
    }
}
export async function hookRunner(// eslint-disable-next-line @typescript-eslint/ban-types
funcs, ...args) {
    const hooks = Array.isArray(funcs) ? funcs : [
        funcs
    ];
    for(let i = 0; i < hooks.length; i++){
        await hooks[i].apply(this, args);
    }
}

//# sourceMappingURL=hooks.js.map