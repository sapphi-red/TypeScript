/// <reference path="../fourslash.ts" />

// @Filename: /lib/index.d.ts
//// export function fooFromIndex(): void;

// @Filename: /lib/lol.d.ts
//// export function fooFromLol(): void;

// @Filename: /package.json
//// {
////     "type": "module",
////     "imports": {
////         "#*": "./lib/*"
////     }
//// }

// @Filename: /tsconfig.json
//// { "compilerOptions": { "module": "nodenext" }, "files": ["./src/foo.ts"] }

// @Filename: /src/foo.ts
//// import { fooFromIndex } from "/**/";

verify.baselineCompletions();
edit.insert("#i");
verify.completions({ exact: ["#index.js", "#lol.js"], isNewIdentifierLocation: true });
edit.backspace(1);
edit.insert("l");
verify.completions({ exact: ["#index.js", "#lol.js"], isNewIdentifierLocation: true });
