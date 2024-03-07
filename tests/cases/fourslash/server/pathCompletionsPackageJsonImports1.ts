/// <reference path="../fourslash.ts" />

// @Filename: /lib/index.d.ts
//// export function fooFromIndex(): void;

// @Filename: /lib/lol.d.ts
//// export function fooFromLol(): void;

// @Filename: /package.json
//// {
////     "type": "module",
////     "imports": {
////         "#": {
////             "types": "./lib/index.d.ts"
////         },
////         "#/lol": {
////             "types": "./lib/lol.d.ts"
////         },
////         "#/dir/*": "./lib/*"
////     }
//// }

// @Filename: /tsconfig.json
//// { "compilerOptions": { "module": "nodenext" }, "files": ["./src/foo.ts"] }

// @Filename: /src/foo.ts
//// import { fooFromIndex } from "/**/";

verify.baselineCompletions();
edit.insert("#/");
verify.completions({ exact: ["#/lol", "#/dir"], isNewIdentifierLocation: true });
edit.insert("l");
verify.completions({ exact: ["#/lol"], isNewIdentifierLocation: true });
