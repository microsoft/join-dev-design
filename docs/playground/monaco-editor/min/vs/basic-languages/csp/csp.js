/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 1.3.1(1119ababe841a89731059c9bd9522fc59d70f6cb)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/csp/csp", ["require", "exports"], function(t, e) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.conf = { brackets: [], autoClosingPairs: [], surroundingPairs: [] }),
    (e.language = {
      keywords: [],
      typeKeywords: [],
      tokenPostfix: ".csp",
      operators: [],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      tokenizer: {
        root: [
          [/child-src/, "string.quote"],
          [/connect-src/, "string.quote"],
          [/default-src/, "string.quote"],
          [/font-src/, "string.quote"],
          [/frame-src/, "string.quote"],
          [/img-src/, "string.quote"],
          [/manifest-src/, "string.quote"],
          [/media-src/, "string.quote"],
          [/object-src/, "string.quote"],
          [/script-src/, "string.quote"],
          [/style-src/, "string.quote"],
          [/worker-src/, "string.quote"],
          [/base-uri/, "string.quote"],
          [/plugin-types/, "string.quote"],
          [/sandbox/, "string.quote"],
          [/disown-opener/, "string.quote"],
          [/form-action/, "string.quote"],
          [/frame-ancestors/, "string.quote"],
          [/report-uri/, "string.quote"],
          [/report-to/, "string.quote"],
          [/upgrade-insecure-requests/, "string.quote"],
          [/block-all-mixed-content/, "string.quote"],
          [/require-sri-for/, "string.quote"],
          [/reflected-xss/, "string.quote"],
          [/referrer/, "string.quote"],
          [/policy-uri/, "string.quote"],
          [/'self'/, "string.quote"],
          [/'unsafe-inline'/, "string.quote"],
          [/'unsafe-eval'/, "string.quote"],
          [/'strict-dynamic'/, "string.quote"],
          [/'unsafe-hashed-attributes'/, "string.quote"]
        ]
      }
    });
});
