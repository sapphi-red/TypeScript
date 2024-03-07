/// <reference path='fourslash.ts' />

// Should give completions for modules referenced via baseUrl and paths compiler options with explicit name mappings

// @Filename: tsconfig.json
//// {
////     "compilerOptions": {
////        "paths": {
////            "@*": ["./path/*"]
////        },
////     }
//// }

// @Filename: test0.ts
//// import * as foo1 from "@/*first*/

// @Filename: path/whatever.ts
//// export {}

verify.completions({ marker: ["first"], exact: ["@whatever"], isNewIdentifierLocation: true });
