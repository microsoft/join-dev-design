/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-html version: 2.1.1(f878fb07da50bca46d9e65888f2633d6b0338cee)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-html/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/html/workerManager", ["require", "exports"], function(
  e,
  t
) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var s = monaco.Promise,
    n = (function() {
      function e(e) {
        var t = this;
        (this._defaults = e),
          (this._worker = null),
          (this._idleCheckInterval = setInterval(function() {
            return t._checkIfIdle();
          }, 3e4)),
          (this._lastUsedTime = 0),
          (this._configChangeListener = this._defaults.onDidChange(function() {
            return t._stopWorker();
          }));
      }
      return (
        (e.prototype._stopWorker = function() {
          this._worker && (this._worker.dispose(), (this._worker = null)),
            (this._client = null);
        }),
        (e.prototype.dispose = function() {
          clearInterval(this._idleCheckInterval),
            this._configChangeListener.dispose(),
            this._stopWorker();
        }),
        (e.prototype._checkIfIdle = function() {
          this._worker &&
            (12e4 < Date.now() - this._lastUsedTime && this._stopWorker());
        }),
        (e.prototype._getClient = function() {
          return (
            (this._lastUsedTime = Date.now()),
            this._client ||
              ((this._worker = monaco.editor.createWebWorker({
                moduleId: "vs/language/html/htmlWorker",
                createData: {
                  languageSettings: this._defaults.options,
                  languageId: this._defaults.languageId
                },
                label: this._defaults.languageId
              })),
              (this._client = this._worker.getProxy())),
            this._client
          );
        }),
        (e.prototype.getLanguageServiceWorker = function() {
          for (
            var t, e, n, r, i, o = this, a = [], u = 0;
            u < arguments.length;
            u++
          )
            a[u] = arguments[u];
          return (
            (e = this._getClient()
              .then(function(e) {
                t = e;
              })
              .then(function(e) {
                return o._worker.withSyncedResources(a);
              })
              .then(function(e) {
                return t;
              })),
            (i = new s(
              function(e, t) {
                (n = e), (r = t);
              },
              function() {}
            )),
            e.then(n, r),
            i
          );
        }),
        e
      );
    })();
  t.WorkerManager = n;
}),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-languageserver-types/main", ["require", "exports"], e);
  })(function(e, t) {
    "use strict";
    var a, n, r, i, o, u, s, c, d, l, f, g, m;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((n = a = t.Position || (t.Position = {})).create = function(e, t) {
        return { line: e, character: t };
      }),
      (n.is = function(e) {
        var t = e;
        return O.defined(t) && O.number(t.line) && O.number(t.character);
      }),
      ((i = r = t.Range || (t.Range = {})).create = function(e, t, n, r) {
        if (O.number(e) && O.number(t) && O.number(n) && O.number(r))
          return { start: a.create(e, t), end: a.create(n, r) };
        if (a.is(e) && a.is(t)) return { start: e, end: t };
        throw new Error(
          "Range#create called with invalid arguments[" +
            e +
            ", " +
            t +
            ", " +
            n +
            ", " +
            r +
            "]"
        );
      }),
      (i.is = function(e) {
        var t = e;
        return O.defined(t) && a.is(t.start) && a.is(t.end);
      }),
      ((o = t.Location || (t.Location = {})).create = function(e, t) {
        return { uri: e, range: t };
      }),
      (o.is = function(e) {
        var t = e;
        return (
          O.defined(t) &&
          r.is(t.range) &&
          (O.string(t.uri) || O.undefined(t.uri))
        );
      }),
      ((u = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
      (u.Warning = 2),
      (u.Information = 3),
      (u.Hint = 4),
      ((c = s = t.Diagnostic || (t.Diagnostic = {})).create = function(
        e,
        t,
        n,
        r,
        i
      ) {
        var o = { range: e, message: t };
        return (
          O.defined(n) && (o.severity = n),
          O.defined(r) && (o.code = r),
          O.defined(i) && (o.source = i),
          o
        );
      }),
      (c.is = function(e) {
        var t = e;
        return (
          O.defined(t) &&
          r.is(t.range) &&
          O.string(t.message) &&
          (O.number(t.severity) || O.undefined(t.severity)) &&
          (O.number(t.code) || O.string(t.code) || O.undefined(t.code)) &&
          (O.string(t.source) || O.undefined(t.source))
        );
      }),
      ((l = d = t.Command || (t.Command = {})).create = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = { title: e, command: t };
        return O.defined(n) && 0 < n.length && (i.arguments = n), i;
      }),
      (l.is = function(e) {
        var t = e;
        return O.defined(t) && O.string(t.title) && O.string(t.title);
      }),
      ((g = f = t.TextEdit || (t.TextEdit = {})).replace = function(e, t) {
        return { range: e, newText: t };
      }),
      (g.insert = function(e, t) {
        return { range: { start: e, end: e }, newText: t };
      }),
      (g.del = function(e) {
        return { range: e, newText: "" };
      }),
      ((m = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create = function(
        e,
        t
      ) {
        return { textDocument: e, edits: t };
      }),
      (m.is = function(e) {
        var t = e;
        return O.defined(t) && p.is(t.textDocument) && Array.isArray(t.edits);
      });
    var h,
      p,
      v,
      _,
      y,
      b,
      C,
      k,
      x,
      I,
      w,
      D,
      E = (function() {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function(e, t) {
            this.edits.push(f.insert(e, t));
          }),
          (e.prototype.replace = function(e, t) {
            this.edits.push(f.replace(e, t));
          }),
          (e.prototype.delete = function(e) {
            this.edits.push(f.del(e));
          }),
          (e.prototype.add = function(e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function() {
            return this.edits;
          }),
          (e.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          }),
          e
        );
      })(),
      T = (function() {
        function e(n) {
          var r = this;
          (this._textEditChanges = Object.create(null)),
            n &&
              ((this._workspaceEdit = n).documentChanges
                ? n.documentChanges.forEach(function(e) {
                    var t = new E(e.edits);
                    r._textEditChanges[e.textDocument.uri] = t;
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function(e) {
                    var t = new E(n.changes[e]);
                    r._textEditChanges[e] = t;
                  }));
        }
        return (
          Object.defineProperty(e.prototype, "edit", {
            get: function() {
              return this._workspaceEdit;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getTextEditChange = function(e) {
            if (p.is(e)) {
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = { documentChanges: [] }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  "Workspace edit is not configured for versioned document changes."
                );
              var t = e;
              if (!(r = this._textEditChanges[t.uri])) {
                var n = { textDocument: t, edits: (i = []) };
                this._workspaceEdit.documentChanges.push(n),
                  (r = new E(i)),
                  (this._textEditChanges[t.uri] = r);
              }
              return r;
            }
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = { changes: Object.create(null) }),
              !this._workspaceEdit.changes)
            )
              throw new Error(
                "Workspace edit is not configured for normal text edit changes."
              );
            var r;
            if (!(r = this._textEditChanges[e])) {
              var i = [];
              (this._workspaceEdit.changes[e] = i),
                (r = new E(i)),
                (this._textEditChanges[e] = r);
            }
            return r;
          }),
          e
        );
      })();
    (t.WorkspaceChange = T),
      ((h =
        t.TextDocumentIdentifier ||
        (t.TextDocumentIdentifier = {})).create = function(e) {
        return { uri: e };
      }),
      (h.is = function(e) {
        var t = e;
        return O.defined(t) && O.string(t.uri);
      }),
      ((v = p =
        t.VersionedTextDocumentIdentifier ||
        (t.VersionedTextDocumentIdentifier = {})).create = function(e, t) {
        return { uri: e, version: t };
      }),
      (v.is = function(e) {
        var t = e;
        return O.defined(t) && O.string(t.uri) && O.number(t.version);
      }),
      ((_ = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function(
        e,
        t,
        n,
        r
      ) {
        return { uri: e, languageId: t, version: n, text: r };
      }),
      (_.is = function(e) {
        var t = e;
        return (
          O.defined(t) &&
          O.string(t.uri) &&
          O.string(t.languageId) &&
          O.number(t.version) &&
          O.string(t.text)
        );
      }),
      ((y = t.MarkupKind || (t.MarkupKind = {})).PlainText = "plaintext"),
      (y.Markdown = "markdown"),
      ((b = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (b.Method = 2),
      (b.Function = 3),
      (b.Constructor = 4),
      (b.Field = 5),
      (b.Variable = 6),
      (b.Class = 7),
      (b.Interface = 8),
      (b.Module = 9),
      (b.Property = 10),
      (b.Unit = 11),
      (b.Value = 12),
      (b.Enum = 13),
      (b.Keyword = 14),
      (b.Snippet = 15),
      (b.Color = 16),
      (b.File = 17),
      (b.Reference = 18),
      (b.Folder = 19),
      (b.EnumMember = 20),
      (b.Constant = 21),
      (b.Struct = 22),
      (b.Event = 23),
      (b.Operator = 24),
      (b.TypeParameter = 25),
      ((C = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
      (C.Snippet = 2),
      ((t.CompletionItem || (t.CompletionItem = {})).create = function(e) {
        return { label: e };
      }),
      ((t.CompletionList || (t.CompletionList = {})).create = function(e, t) {
        return { items: e || [], isIncomplete: !!t };
      }),
      ((t.MarkedString || (t.MarkedString = {})).fromPlainText = function(e) {
        return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }),
      ((
        t.ParameterInformation || (t.ParameterInformation = {})
      ).create = function(e, t) {
        return t ? { label: e, documentation: t } : { label: e };
      }),
      ((
        t.SignatureInformation || (t.SignatureInformation = {})
      ).create = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = { label: e };
        return (
          O.defined(t) && (i.documentation = t),
          O.defined(n) ? (i.parameters = n) : (i.parameters = []),
          i
        );
      }),
      ((k =
        t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (k.Read = 2),
      (k.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function(
        e,
        t
      ) {
        var n = { range: e };
        return O.number(t) && (n.kind = t), n;
      }),
      ((x = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (x.Module = 2),
      (x.Namespace = 3),
      (x.Package = 4),
      (x.Class = 5),
      (x.Method = 6),
      (x.Property = 7),
      (x.Field = 8),
      (x.Constructor = 9),
      (x.Enum = 10),
      (x.Interface = 11),
      (x.Function = 12),
      (x.Variable = 13),
      (x.Constant = 14),
      (x.String = 15),
      (x.Number = 16),
      (x.Boolean = 17),
      (x.Array = 18),
      (x.Object = 19),
      (x.Key = 20),
      (x.Null = 21),
      (x.EnumMember = 22),
      (x.Struct = 23),
      (x.Event = 24),
      (x.Operator = 25),
      (x.TypeParameter = 26),
      ((t.SymbolInformation || (t.SymbolInformation = {})).create = function(
        e,
        t,
        n,
        r,
        i
      ) {
        var o = { name: e, kind: t, location: { uri: r, range: n } };
        return i && (o.containerName = i), o;
      }),
      ((I =
        t.CodeActionContext || (t.CodeActionContext = {})).create = function(
        e
      ) {
        return { diagnostics: e };
      }),
      (I.is = function(e) {
        var t = e;
        return O.defined(t) && O.typedArray(t.diagnostics, s.is);
      }),
      ((w = t.CodeLens || (t.CodeLens = {})).create = function(e, t) {
        var n = { range: e };
        return O.defined(t) && (n.data = t), n;
      }),
      (w.is = function(e) {
        var t = e;
        return (
          O.defined(t) &&
          r.is(t.range) &&
          (O.undefined(t.command) || d.is(t.command))
        );
      }),
      ((D =
        t.FormattingOptions || (t.FormattingOptions = {})).create = function(
        e,
        t
      ) {
        return { tabSize: e, insertSpaces: t };
      }),
      (D.is = function(e) {
        var t = e;
        return O.defined(t) && O.number(t.tabSize) && O.boolean(t.insertSpaces);
      });
    var S,
      M,
      P,
      K = function() {};
    (t.DocumentLink = K),
      ((S = K = t.DocumentLink || (t.DocumentLink = {})).create = function(
        e,
        t
      ) {
        return { range: e, target: t };
      }),
      (S.is = function(e) {
        var t = e;
        return (
          O.defined(t) &&
          r.is(t.range) &&
          (O.undefined(t.target) || O.string(t.target))
        );
      }),
      (t.DocumentLink = K),
      (t.EOL = ["\n", "\r\n", "\r"]),
      ((M = t.TextDocument || (t.TextDocument = {})).create = function(
        e,
        t,
        n,
        r
      ) {
        return new L(e, t, n, r);
      }),
      (M.is = function(e) {
        var t = e;
        return !!(
          O.defined(t) &&
          O.string(t.uri) &&
          (O.undefined(t.languageId) || O.string(t.languageId)) &&
          O.number(t.lineCount) &&
          O.func(t.getText) &&
          O.func(t.positionAt) &&
          O.func(t.offsetAt)
        );
      }),
      (M.applyEdits = function(e, t) {
        for (
          var n = e.getText(),
            r = (function e(t, n) {
              if (t.length <= 1) return t;
              var r = (t.length / 2) | 0,
                i = t.slice(0, r),
                o = t.slice(r);
              e(i, n), e(o, n);
              for (var a = 0, u = 0, s = 0; a < i.length && u < o.length; ) {
                var c = n(i[a], o[u]);
                t[s++] = c <= 0 ? i[a++] : o[u++];
              }
              for (; a < i.length; ) t[s++] = i[a++];
              for (; u < o.length; ) t[s++] = o[u++];
              return t;
            })(t, function(e, t) {
              return 0 == e.range.start.line - t.range.start.line
                ? e.range.start.character - t.range.start.character
                : 0;
            }),
            i = n.length,
            o = r.length - 1;
          0 <= o;
          o--
        ) {
          var a = r[o],
            u = e.offsetAt(a.range.start),
            s = e.offsetAt(a.range.end);
          if (!(s <= i)) throw new Error("Ovelapping edit");
          (n = n.substring(0, u) + a.newText + n.substring(s, n.length)),
            (i = u);
        }
        return n;
      }),
      ((P =
        t.TextDocumentSaveReason ||
        (t.TextDocumentSaveReason = {})).Manual = 1),
      (P.AfterDelay = 2),
      (P.FocusOut = 3);
    var O,
      F,
      A,
      L = (function() {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = null);
        }
        return (
          Object.defineProperty(e.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getText = function(e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function(e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = null);
          }),
          (e.prototype.getLineOffsets = function() {
            if (null === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = "\r" === i || "\n" === i),
                  "\r" === i &&
                    r + 1 < t.length &&
                    "\n" === t.charAt(r + 1) &&
                    r++;
              }
              n && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return a.create(0, e);
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var o = n - 1;
            return a.create(o, e - t[o]);
          }),
          (e.prototype.offsetAt = function(e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })();
    (F = O || (O = {})),
      (A = Object.prototype.toString),
      (F.defined = function(e) {
        return void 0 !== e;
      }),
      (F.undefined = function(e) {
        return void 0 === e;
      }),
      (F.boolean = function(e) {
        return !0 === e || !1 === e;
      }),
      (F.string = function(e) {
        return "[object String]" === A.call(e);
      }),
      (F.number = function(e) {
        return "[object Number]" === A.call(e);
      }),
      (F.func = function(e) {
        return "[object Function]" === A.call(e);
      }),
      (F.typedArray = function(e, t) {
        return Array.isArray(e) && e.every(t);
      });
  }),
  define("vscode-languageserver-types", [
    "vscode-languageserver-types/main"
  ], function(e) {
    return e;
  }),
  define("vs/language/html/languageFeatures", [
    "require",
    "exports",
    "vscode-languageserver-types"
  ], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    monaco.Uri;
    var n = monaco.Range,
      r = (function() {
        function e(e, t, n) {
          var r = this;
          (this._languageId = e),
            (this._worker = t),
            (this._disposables = []),
            (this._listener = Object.create(null));
          var i = function(e) {
              var t,
                n = e.getModeId();
              n === r._languageId &&
                ((r._listener[e.uri.toString()] = e.onDidChangeContent(
                  function() {
                    clearTimeout(t),
                      (t = setTimeout(function() {
                        return r._doValidate(e.uri, n);
                      }, 500));
                  }
                )),
                r._doValidate(e.uri, n));
            },
            o = function(e) {
              monaco.editor.setModelMarkers(e, r._languageId, []);
              var t = e.uri.toString(),
                n = r._listener[t];
              n && (n.dispose(), delete r._listener[t]);
            };
          this._disposables.push(monaco.editor.onDidCreateModel(i)),
            this._disposables.push(
              monaco.editor.onWillDisposeModel(function(e) {
                o(e);
              })
            ),
            this._disposables.push(
              monaco.editor.onDidChangeModelLanguage(function(e) {
                o(e.model), i(e.model);
              })
            ),
            this._disposables.push(
              n.onDidChange(function(e) {
                monaco.editor.getModels().forEach(function(e) {
                  e.getModeId() === r._languageId && (o(e), i(e));
                });
              })
            ),
            this._disposables.push({
              dispose: function() {
                for (var e in r._listener) r._listener[e].dispose();
              }
            }),
            monaco.editor.getModels().forEach(i);
        }
        return (
          (e.prototype.dispose = function() {
            this._disposables.forEach(function(e) {
              return e && e.dispose();
            }),
              (this._disposables = []);
          }),
          (e.prototype._doValidate = function(n, r) {
            this._worker(n)
              .then(function(e) {
                return e.doValidation(n.toString()).then(function(e) {
                  var t = e.map(function(e) {
                    return (
                      (n =
                        "number" == typeof (t = e).code
                          ? String(t.code)
                          : t.code),
                      {
                        severity: (function(e) {
                          switch (e) {
                            case i.DiagnosticSeverity.Error:
                              return monaco.MarkerSeverity.Error;
                            case i.DiagnosticSeverity.Warning:
                              return monaco.MarkerSeverity.Warning;
                            case i.DiagnosticSeverity.Information:
                              return monaco.MarkerSeverity.Info;
                            case i.DiagnosticSeverity.Hint:
                              return monaco.MarkerSeverity.Hint;
                            default:
                              return monaco.MarkerSeverity.Info;
                          }
                        })(t.severity),
                        startLineNumber: t.range.start.line + 1,
                        startColumn: t.range.start.character + 1,
                        endLineNumber: t.range.end.line + 1,
                        endColumn: t.range.end.character + 1,
                        message: t.message,
                        code: n,
                        source: t.source
                      }
                    );
                    var t, n;
                  });
                  monaco.editor.setModelMarkers(
                    monaco.editor.getModel(n),
                    r,
                    t
                  );
                });
              })
              .then(void 0, function(e) {
                console.error(e);
              });
          }),
          e
        );
      })();
    function o(e) {
      if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
    }
    function a(e) {
      if (e)
        return { start: o(e.getStartPosition()), end: o(e.getEndPosition()) };
    }
    function u(e) {
      if (e)
        return new n(
          e.start.line + 1,
          e.start.character + 1,
          e.end.line + 1,
          e.end.character + 1
        );
    }
    function s(e) {
      var t = monaco.languages.CompletionItemKind;
      switch (e) {
        case i.CompletionItemKind.Text:
          return t.Text;
        case i.CompletionItemKind.Method:
          return t.Method;
        case i.CompletionItemKind.Function:
          return t.Function;
        case i.CompletionItemKind.Constructor:
          return t.Constructor;
        case i.CompletionItemKind.Field:
          return t.Field;
        case i.CompletionItemKind.Variable:
          return t.Variable;
        case i.CompletionItemKind.Class:
          return t.Class;
        case i.CompletionItemKind.Interface:
          return t.Interface;
        case i.CompletionItemKind.Module:
          return t.Module;
        case i.CompletionItemKind.Property:
          return t.Property;
        case i.CompletionItemKind.Unit:
          return t.Unit;
        case i.CompletionItemKind.Value:
          return t.Value;
        case i.CompletionItemKind.Enum:
          return t.Enum;
        case i.CompletionItemKind.Keyword:
          return t.Keyword;
        case i.CompletionItemKind.Snippet:
          return t.Snippet;
        case i.CompletionItemKind.Color:
          return t.Color;
        case i.CompletionItemKind.File:
          return t.File;
        case i.CompletionItemKind.Reference:
          return t.Reference;
      }
      return t.Property;
    }
    function c(e) {
      if (e) return { range: u(e.range), text: e.newText };
    }
    t.DiagnosticsAdapter = r;
    var d = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        Object.defineProperty(e.prototype, "triggerCharacters", {
          get: function() {
            return [".", ":", "<", '"', "=", "/"];
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.provideCompletionItems = function(e, t, n) {
          e.getWordUntilPosition(t);
          var r = e.uri;
          return p(
            n,
            this._worker(r)
              .then(function(e) {
                return e.doComplete(r.toString(), o(t));
              })
              .then(function(e) {
                if (e) {
                  var t = e.items.map(function(e) {
                    var t = {
                      label: e.label,
                      insertText: e.insertText,
                      sortText: e.sortText,
                      filterText: e.filterText,
                      documentation: e.documentation,
                      detail: e.detail,
                      kind: s(e.kind)
                    };
                    return (
                      e.textEdit &&
                        ((t.range = u(e.textEdit.range)),
                        (t.insertText = e.textEdit.newText)),
                      e.insertTextFormat === i.InsertTextFormat.Snippet &&
                        (t.insertText = { value: t.insertText }),
                      t
                    );
                  });
                  return { isIncomplete: e.isIncomplete, items: t };
                }
              })
          );
        }),
        e
      );
    })();
    t.CompletionAdapter = d;
    var l = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentHighlights = function(e, t, n) {
          var r = e.uri;
          return p(
            n,
            this._worker(r)
              .then(function(e) {
                return e.findDocumentHighlights(r.toString(), o(t));
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      range: u(e.range),
                      kind: (function(e) {
                        var t = monaco.languages.DocumentHighlightKind;
                        switch (e) {
                          case i.DocumentHighlightKind.Read:
                            return t.Read;
                          case i.DocumentHighlightKind.Write:
                            return t.Write;
                          case i.DocumentHighlightKind.Text:
                            return t.Text;
                        }
                        return t.Text;
                      })(e.kind)
                    };
                  });
              })
          );
        }),
        e
      );
    })();
    t.DocumentHighlightAdapter = l;
    var f = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideLinks = function(e, t) {
          var n = e.uri;
          return p(
            t,
            this._worker(n)
              .then(function(e) {
                return e.findDocumentLinks(n.toString());
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return { range: u(e.range), url: e.target };
                  });
              })
          );
        }),
        e
      );
    })();
    function g(e) {
      return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
    }
    t.DocumentLinkAdapter = f;
    var m = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentFormattingEdits = function(e, t, n) {
          var r = e.uri;
          return p(
            n,
            this._worker(r).then(function(e) {
              return e.format(r.toString(), null, g(t)).then(function(e) {
                if (e && 0 !== e.length) return e.map(c);
              });
            })
          );
        }),
        e
      );
    })();
    t.DocumentFormattingEditProvider = m;
    var h = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentRangeFormattingEdits = function(
          e,
          t,
          n,
          r
        ) {
          var i = e.uri;
          return p(
            r,
            this._worker(i).then(function(e) {
              return e.format(i.toString(), a(t), g(n)).then(function(e) {
                if (e && 0 !== e.length) return e.map(c);
              });
            })
          );
        }),
        e
      );
    })();
    function p(e, t) {
      return (
        t.cancel &&
          e.onCancellationRequested(function() {
            return t.cancel();
          }),
        t
      );
    }
    t.DocumentRangeFormattingEditProvider = h;
  }),
  define("vs/language/html/htmlMode", [
    "require",
    "exports",
    "./workerManager",
    "./languageFeatures"
  ], function(e, t, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupMode = function(e) {
        var n = new i.WorkerManager(e),
          t = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return n.getLanguageServiceWorker.apply(n, e);
          },
          r = e.languageId;
        monaco.languages.registerCompletionItemProvider(
          r,
          new o.CompletionAdapter(t)
        ),
          monaco.languages.registerDocumentHighlightProvider(
            r,
            new o.DocumentHighlightAdapter(t)
          ),
          monaco.languages.registerLinkProvider(
            r,
            new o.DocumentLinkAdapter(t)
          ),
          "html" === r &&
            (monaco.languages.registerDocumentFormattingEditProvider(
              r,
              new o.DocumentFormattingEditProvider(t)
            ),
            monaco.languages.registerDocumentRangeFormattingEditProvider(
              r,
              new o.DocumentRangeFormattingEditProvider(t)
            ),
            new o.DiagnosticsAdapter(r, t, e));
      });
  });
