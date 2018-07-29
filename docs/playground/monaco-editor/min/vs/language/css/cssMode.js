/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 2.1.1(a021ab7a38731f54509ae2a95507f8165728cd2f)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/css/workerManager", ["require", "exports"], function(e, t) {
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
                moduleId: "vs/language/css/cssWorker",
                label: this._defaults.languageId,
                createData: {
                  languageSettings: this._defaults.diagnosticsOptions,
                  languageId: this._defaults.languageId
                }
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
        return P.defined(t) && P.number(t.line) && P.number(t.character);
      }),
      ((i = r = t.Range || (t.Range = {})).create = function(e, t, n, r) {
        if (P.number(e) && P.number(t) && P.number(n) && P.number(r))
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
        return P.defined(t) && a.is(t.start) && a.is(t.end);
      }),
      ((o = t.Location || (t.Location = {})).create = function(e, t) {
        return { uri: e, range: t };
      }),
      (o.is = function(e) {
        var t = e;
        return (
          P.defined(t) &&
          r.is(t.range) &&
          (P.string(t.uri) || P.undefined(t.uri))
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
          P.defined(n) && (o.severity = n),
          P.defined(r) && (o.code = r),
          P.defined(i) && (o.source = i),
          o
        );
      }),
      (c.is = function(e) {
        var t = e;
        return (
          P.defined(t) &&
          r.is(t.range) &&
          P.string(t.message) &&
          (P.number(t.severity) || P.undefined(t.severity)) &&
          (P.number(t.code) || P.string(t.code) || P.undefined(t.code)) &&
          (P.string(t.source) || P.undefined(t.source))
        );
      }),
      ((l = d = t.Command || (t.Command = {})).create = function(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = { title: e, command: t };
        return P.defined(n) && 0 < n.length && (i.arguments = n), i;
      }),
      (l.is = function(e) {
        var t = e;
        return P.defined(t) && P.string(t.title) && P.string(t.title);
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
        return P.defined(t) && p.is(t.textDocument) && Array.isArray(t.edits);
      });
    var h,
      p,
      v,
      y,
      b,
      _,
      C,
      x,
      k,
      w,
      I,
      S,
      D = (function() {
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
                    var t = new D(e.edits);
                    r._textEditChanges[e.textDocument.uri] = t;
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function(e) {
                    var t = new D(n.changes[e]);
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
                  (r = new D(i)),
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
                (r = new D(i)),
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
        return P.defined(t) && P.string(t.uri);
      }),
      ((v = p =
        t.VersionedTextDocumentIdentifier ||
        (t.VersionedTextDocumentIdentifier = {})).create = function(e, t) {
        return { uri: e, version: t };
      }),
      (v.is = function(e) {
        var t = e;
        return P.defined(t) && P.string(t.uri) && P.number(t.version);
      }),
      ((y = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function(
        e,
        t,
        n,
        r
      ) {
        return { uri: e, languageId: t, version: n, text: r };
      }),
      (y.is = function(e) {
        var t = e;
        return (
          P.defined(t) &&
          P.string(t.uri) &&
          P.string(t.languageId) &&
          P.number(t.version) &&
          P.string(t.text)
        );
      }),
      ((b = t.MarkupKind || (t.MarkupKind = {})).PlainText = "plaintext"),
      (b.Markdown = "markdown"),
      ((_ = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (_.Method = 2),
      (_.Function = 3),
      (_.Constructor = 4),
      (_.Field = 5),
      (_.Variable = 6),
      (_.Class = 7),
      (_.Interface = 8),
      (_.Module = 9),
      (_.Property = 10),
      (_.Unit = 11),
      (_.Value = 12),
      (_.Enum = 13),
      (_.Keyword = 14),
      (_.Snippet = 15),
      (_.Color = 16),
      (_.File = 17),
      (_.Reference = 18),
      (_.Folder = 19),
      (_.EnumMember = 20),
      (_.Constant = 21),
      (_.Struct = 22),
      (_.Event = 23),
      (_.Operator = 24),
      (_.TypeParameter = 25),
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
          P.defined(t) && (i.documentation = t),
          P.defined(n) ? (i.parameters = n) : (i.parameters = []),
          i
        );
      }),
      ((x =
        t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (x.Read = 2),
      (x.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function(
        e,
        t
      ) {
        var n = { range: e };
        return P.number(t) && (n.kind = t), n;
      }),
      ((k = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (k.Module = 2),
      (k.Namespace = 3),
      (k.Package = 4),
      (k.Class = 5),
      (k.Method = 6),
      (k.Property = 7),
      (k.Field = 8),
      (k.Constructor = 9),
      (k.Enum = 10),
      (k.Interface = 11),
      (k.Function = 12),
      (k.Variable = 13),
      (k.Constant = 14),
      (k.String = 15),
      (k.Number = 16),
      (k.Boolean = 17),
      (k.Array = 18),
      (k.Object = 19),
      (k.Key = 20),
      (k.Null = 21),
      (k.EnumMember = 22),
      (k.Struct = 23),
      (k.Event = 24),
      (k.Operator = 25),
      (k.TypeParameter = 26),
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
      ((w =
        t.CodeActionContext || (t.CodeActionContext = {})).create = function(
        e
      ) {
        return { diagnostics: e };
      }),
      (w.is = function(e) {
        var t = e;
        return P.defined(t) && P.typedArray(t.diagnostics, s.is);
      }),
      ((I = t.CodeLens || (t.CodeLens = {})).create = function(e, t) {
        var n = { range: e };
        return P.defined(t) && (n.data = t), n;
      }),
      (I.is = function(e) {
        var t = e;
        return (
          P.defined(t) &&
          r.is(t.range) &&
          (P.undefined(t.command) || d.is(t.command))
        );
      }),
      ((S =
        t.FormattingOptions || (t.FormattingOptions = {})).create = function(
        e,
        t
      ) {
        return { tabSize: e, insertSpaces: t };
      }),
      (S.is = function(e) {
        var t = e;
        return P.defined(t) && P.number(t.tabSize) && P.boolean(t.insertSpaces);
      });
    var E,
      K,
      M,
      A = function() {};
    (t.DocumentLink = A),
      ((E = A = t.DocumentLink || (t.DocumentLink = {})).create = function(
        e,
        t
      ) {
        return { range: e, target: t };
      }),
      (E.is = function(e) {
        var t = e;
        return (
          P.defined(t) &&
          r.is(t.range) &&
          (P.undefined(t.target) || P.string(t.target))
        );
      }),
      (t.DocumentLink = A),
      (t.EOL = ["\n", "\r\n", "\r"]),
      ((K = t.TextDocument || (t.TextDocument = {})).create = function(
        e,
        t,
        n,
        r
      ) {
        return new H(e, t, n, r);
      }),
      (K.is = function(e) {
        var t = e;
        return !!(
          P.defined(t) &&
          P.string(t.uri) &&
          (P.undefined(t.languageId) || P.string(t.languageId)) &&
          P.number(t.lineCount) &&
          P.func(t.getText) &&
          P.func(t.positionAt) &&
          P.func(t.offsetAt)
        );
      }),
      (K.applyEdits = function(e, t) {
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
      ((M =
        t.TextDocumentSaveReason ||
        (t.TextDocumentSaveReason = {})).Manual = 1),
      (M.AfterDelay = 2),
      (M.FocusOut = 3);
    var P,
      O,
      F,
      H = (function() {
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
    (O = P || (P = {})),
      (F = Object.prototype.toString),
      (O.defined = function(e) {
        return void 0 !== e;
      }),
      (O.undefined = function(e) {
        return void 0 === e;
      }),
      (O.boolean = function(e) {
        return !0 === e || !1 === e;
      }),
      (O.string = function(e) {
        return "[object String]" === F.call(e);
      }),
      (O.number = function(e) {
        return "[object Number]" === F.call(e);
      }),
      (O.func = function(e) {
        return "[object Function]" === F.call(e);
      }),
      (O.typedArray = function(e, t) {
        return Array.isArray(e) && e.every(t);
      });
  }),
  define("vscode-languageserver-types", [
    "vscode-languageserver-types/main"
  ], function(e) {
    return e;
  }),
  define("vs/language/css/languageFeatures", [
    "require",
    "exports",
    "vscode-languageserver-types"
  ], function(e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = monaco.Uri,
      n = (function() {
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
            this._disposables.push(monaco.editor.onWillDisposeModel(o)),
            this._disposables.push(
              monaco.editor.onDidChangeModelLanguage(function(e) {
                o(e.model), i(e.model);
              })
            ),
            n.onDidChange(function(e) {
              monaco.editor.getModels().forEach(function(e) {
                e.getModeId() === r._languageId && (o(e), i(e));
              });
            }),
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
          (e.prototype._doValidate = function(r, i) {
            this._worker(r)
              .then(function(e) {
                return e.doValidation(r.toString());
              })
              .then(function(e) {
                var t = e.map(function(e) {
                    return (
                      (n =
                        "number" == typeof (t = e).code
                          ? String(t.code)
                          : t.code),
                      {
                        severity: (function(e) {
                          switch (e) {
                            case o.DiagnosticSeverity.Error:
                              return monaco.MarkerSeverity.Error;
                            case o.DiagnosticSeverity.Warning:
                              return monaco.MarkerSeverity.Warning;
                            case o.DiagnosticSeverity.Information:
                              return monaco.MarkerSeverity.Info;
                            case o.DiagnosticSeverity.Hint:
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
                  }),
                  n = monaco.editor.getModel(r);
                n.getModeId() === i && monaco.editor.setModelMarkers(n, i, t);
              })
              .done(void 0, function(e) {
                console.error(e);
              });
          }),
          e
        );
      })();
    function a(e) {
      if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
    }
    function s(e) {
      if (e)
        return new monaco.Range(
          e.start.line + 1,
          e.start.character + 1,
          e.end.line + 1,
          e.end.character + 1
        );
    }
    function i(e) {
      if (e) return { range: s(e.range), text: e.newText };
    }
    t.DiagnosticsAdapter = n;
    var r = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        Object.defineProperty(e.prototype, "triggerCharacters", {
          get: function() {
            return [" ", ":"];
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.provideCompletionItems = function(e, t, n) {
          e.getWordUntilPosition(t);
          var r = e.uri;
          return y(
            n,
            this._worker(r)
              .then(function(e) {
                return e.doComplete(r.toString(), a(t));
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
                      kind: (function(e) {
                        var t = monaco.languages.CompletionItemKind;
                        switch (e) {
                          case o.CompletionItemKind.Text:
                            return t.Text;
                          case o.CompletionItemKind.Method:
                            return t.Method;
                          case o.CompletionItemKind.Function:
                            return t.Function;
                          case o.CompletionItemKind.Constructor:
                            return t.Constructor;
                          case o.CompletionItemKind.Field:
                            return t.Field;
                          case o.CompletionItemKind.Variable:
                            return t.Variable;
                          case o.CompletionItemKind.Class:
                            return t.Class;
                          case o.CompletionItemKind.Interface:
                            return t.Interface;
                          case o.CompletionItemKind.Module:
                            return t.Module;
                          case o.CompletionItemKind.Property:
                            return t.Property;
                          case o.CompletionItemKind.Unit:
                            return t.Unit;
                          case o.CompletionItemKind.Value:
                            return t.Value;
                          case o.CompletionItemKind.Enum:
                            return t.Enum;
                          case o.CompletionItemKind.Keyword:
                            return t.Keyword;
                          case o.CompletionItemKind.Snippet:
                            return t.Snippet;
                          case o.CompletionItemKind.Color:
                            return t.Color;
                          case o.CompletionItemKind.File:
                            return t.File;
                          case o.CompletionItemKind.Reference:
                            return t.Reference;
                        }
                        return t.Property;
                      })(e.kind)
                    };
                    return (
                      e.textEdit &&
                        ((t.range = s(e.textEdit.range)),
                        (t.insertText = e.textEdit.newText)),
                      e.additionalTextEdits &&
                        (t.additionalTextEdits = e.additionalTextEdits.map(i)),
                      e.insertTextFormat === o.InsertTextFormat.Snippet &&
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
    function c(e) {
      return "string" == typeof e
        ? { value: e }
        : (t = e) && "object" == typeof t && "string" == typeof t.kind
          ? "plaintext" === e.kind
            ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
            : { value: e.value }
          : { value: "```" + e.language + "\n" + e.value + "\n```\n" };
      var t;
    }
    t.CompletionAdapter = r;
    var d = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideHover = function(e, t, n) {
          var r = e.uri;
          return y(
            n,
            this._worker(r)
              .then(function(e) {
                return e.doHover(r.toString(), a(t));
              })
              .then(function(e) {
                if (e)
                  return {
                    range: s(e.range),
                    contents: (function(e) {
                      if (e) return Array.isArray(e) ? e.map(c) : [c(e)];
                    })(e.contents)
                  };
              })
          );
        }),
        e
      );
    })();
    t.HoverAdapter = d;
    var l = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentHighlights = function(e, t, n) {
          var r = e.uri;
          return y(
            n,
            this._worker(r)
              .then(function(e) {
                return e.findDocumentHighlights(r.toString(), a(t));
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      range: s(e.range),
                      kind: (function(e) {
                        switch (e) {
                          case o.DocumentHighlightKind.Read:
                            return monaco.languages.DocumentHighlightKind.Read;
                          case o.DocumentHighlightKind.Write:
                            return monaco.languages.DocumentHighlightKind.Write;
                          case o.DocumentHighlightKind.Text:
                            return monaco.languages.DocumentHighlightKind.Text;
                        }
                        return monaco.languages.DocumentHighlightKind.Text;
                      })(e.kind)
                    };
                  });
              })
          );
        }),
        e
      );
    })();
    function f(e) {
      return { uri: u.parse(e.uri), range: s(e.range) };
    }
    t.DocumentHighlightAdapter = l;
    var g = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDefinition = function(e, t, n) {
          var r = e.uri;
          return y(
            n,
            this._worker(r)
              .then(function(e) {
                return e.findDefinition(r.toString(), a(t));
              })
              .then(function(e) {
                if (e) return [f(e)];
              })
          );
        }),
        e
      );
    })();
    t.DefinitionAdapter = g;
    var m = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideReferences = function(e, t, n, r) {
          var i = e.uri;
          return y(
            r,
            this._worker(i)
              .then(function(e) {
                return e.findReferences(i.toString(), a(t));
              })
              .then(function(e) {
                if (e) return e.map(f);
              })
          );
        }),
        e
      );
    })();
    t.ReferenceAdapter = m;
    var h = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideRenameEdits = function(e, t, n, r) {
          var i = e.uri;
          return y(
            r,
            this._worker(i)
              .then(function(e) {
                return e.doRename(i.toString(), a(t), n);
              })
              .then(function(e) {
                return (function(e) {
                  if (e && e.changes) {
                    var t = [];
                    for (var n in e.changes) {
                      for (
                        var r = [], i = 0, o = e.changes[n];
                        i < o.length;
                        i++
                      ) {
                        var a = o[i];
                        r.push({ range: s(a.range), text: a.newText });
                      }
                      t.push({ resource: u.parse(n), edits: r });
                    }
                    return { edits: t };
                  }
                })(e);
              })
          );
        }),
        e
      );
    })();
    t.RenameAdapter = h;
    var p = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentSymbols = function(e, t) {
          var n = e.uri;
          return y(
            t,
            this._worker(n)
              .then(function(e) {
                return e.findDocumentSymbols(n.toString());
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return {
                      name: e.name,
                      containerName: e.containerName,
                      kind: (function(e) {
                        var t = monaco.languages.SymbolKind;
                        switch (e) {
                          case o.SymbolKind.File:
                            return t.Array;
                          case o.SymbolKind.Module:
                            return t.Module;
                          case o.SymbolKind.Namespace:
                            return t.Namespace;
                          case o.SymbolKind.Package:
                            return t.Package;
                          case o.SymbolKind.Class:
                            return t.Class;
                          case o.SymbolKind.Method:
                            return t.Method;
                          case o.SymbolKind.Property:
                            return t.Property;
                          case o.SymbolKind.Field:
                            return t.Field;
                          case o.SymbolKind.Constructor:
                            return t.Constructor;
                          case o.SymbolKind.Enum:
                            return t.Enum;
                          case o.SymbolKind.Interface:
                            return t.Interface;
                          case o.SymbolKind.Function:
                            return t.Function;
                          case o.SymbolKind.Variable:
                            return t.Variable;
                          case o.SymbolKind.Constant:
                            return t.Constant;
                          case o.SymbolKind.String:
                            return t.String;
                          case o.SymbolKind.Number:
                            return t.Number;
                          case o.SymbolKind.Boolean:
                            return t.Boolean;
                          case o.SymbolKind.Array:
                            return t.Array;
                        }
                        return t.Function;
                      })(e.kind),
                      location: f(e.location)
                    };
                  });
              })
          );
        }),
        e
      );
    })();
    t.DocumentSymbolAdapter = p;
    var v = (function() {
      function e(e) {
        this._worker = e;
      }
      return (
        (e.prototype.provideDocumentColors = function(e, t) {
          var n = e.uri;
          return y(
            t,
            this._worker(n)
              .then(function(e) {
                return e.findDocumentColors(n.toString());
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    return { color: e.color, range: s(e.range) };
                  });
              })
          );
        }),
        (e.prototype.provideColorPresentations = function(e, t, n) {
          var r = e.uri;
          return y(
            n,
            this._worker(r)
              .then(function(e) {
                return e.getColorPresentations(
                  r.toString(),
                  t.color,
                  (function(e) {
                    if (e)
                      return {
                        start: {
                          line: e.startLineNumber - 1,
                          character: e.startColumn - 1
                        },
                        end: {
                          line: e.endLineNumber - 1,
                          character: e.endColumn - 1
                        }
                      };
                  })(t.range)
                );
              })
              .then(function(e) {
                if (e)
                  return e.map(function(e) {
                    var t = { label: e.label };
                    return (
                      e.textEdit && (t.textEdit = i(e.textEdit)),
                      e.additionalTextEdits &&
                        (t.additionalTextEdits = e.additionalTextEdits.map(i)),
                      t
                    );
                  });
              })
          );
        }),
        e
      );
    })();
    function y(e, t) {
      return (
        e.onCancellationRequested(function() {
          return t.cancel();
        }),
        t
      );
    }
    t.DocumentColorAdapter = v;
  }),
  define("vs/language/css/cssMode", [
    "require",
    "exports",
    "./workerManager",
    "./languageFeatures"
  ], function(e, t, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.setupMode = function(e) {
        var r = new i.WorkerManager(e),
          t = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            return r.getLanguageServiceWorker.apply(r, [e].concat(t));
          },
          n = e.languageId;
        monaco.languages.registerCompletionItemProvider(
          n,
          new o.CompletionAdapter(t)
        ),
          monaco.languages.registerHoverProvider(n, new o.HoverAdapter(t)),
          monaco.languages.registerDocumentHighlightProvider(
            n,
            new o.DocumentHighlightAdapter(t)
          ),
          monaco.languages.registerDefinitionProvider(
            n,
            new o.DefinitionAdapter(t)
          ),
          monaco.languages.registerReferenceProvider(
            n,
            new o.ReferenceAdapter(t)
          ),
          monaco.languages.registerDocumentSymbolProvider(
            n,
            new o.DocumentSymbolAdapter(t)
          ),
          monaco.languages.registerRenameProvider(n, new o.RenameAdapter(t)),
          monaco.languages.registerColorProvider(
            n,
            new o.DocumentColorAdapter(t)
          ),
          new o.DiagnosticsAdapter(n, t, e);
      });
  });
