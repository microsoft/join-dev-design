/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 2.1.1(0e6ea95f4f4e093db9201c502e8d401391803233)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!(function(e) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    "function" == typeof define &&
      define.amd &&
      define("vscode-languageserver-types/main", ["require", "exports"], e);
})(function(e, t) {
  "use strict";
  var a, r, n, o, i, s, u, c, f, l, p, h, d;
  Object.defineProperty(t, "__esModule", { value: !0 }),
    ((r = a = t.Position || (t.Position = {})).create = function(e, t) {
      return { line: e, character: t };
    }),
    (r.is = function(e) {
      var t = e;
      return N.defined(t) && N.number(t.line) && N.number(t.character);
    }),
    ((o = n = t.Range || (t.Range = {})).create = function(e, t, r, n) {
      if (N.number(e) && N.number(t) && N.number(r) && N.number(n))
        return { start: a.create(e, t), end: a.create(r, n) };
      if (a.is(e) && a.is(t)) return { start: e, end: t };
      throw new Error(
        "Range#create called with invalid arguments[" +
          e +
          ", " +
          t +
          ", " +
          r +
          ", " +
          n +
          "]"
      );
    }),
    (o.is = function(e) {
      var t = e;
      return N.defined(t) && a.is(t.start) && a.is(t.end);
    }),
    ((i = t.Location || (t.Location = {})).create = function(e, t) {
      return { uri: e, range: t };
    }),
    (i.is = function(e) {
      var t = e;
      return (
        N.defined(t) && n.is(t.range) && (N.string(t.uri) || N.undefined(t.uri))
      );
    }),
    ((s = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
    (s.Warning = 2),
    (s.Information = 3),
    (s.Hint = 4),
    ((c = u = t.Diagnostic || (t.Diagnostic = {})).create = function(
      e,
      t,
      r,
      n,
      o
    ) {
      var i = { range: e, message: t };
      return (
        N.defined(r) && (i.severity = r),
        N.defined(n) && (i.code = n),
        N.defined(o) && (i.source = o),
        i
      );
    }),
    (c.is = function(e) {
      var t = e;
      return (
        N.defined(t) &&
        n.is(t.range) &&
        N.string(t.message) &&
        (N.number(t.severity) || N.undefined(t.severity)) &&
        (N.number(t.code) || N.string(t.code) || N.undefined(t.code)) &&
        (N.string(t.source) || N.undefined(t.source))
      );
    }),
    ((l = f = t.Command || (t.Command = {})).create = function(e, t) {
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      var o = { title: e, command: t };
      return N.defined(r) && 0 < r.length && (o.arguments = r), o;
    }),
    (l.is = function(e) {
      var t = e;
      return N.defined(t) && N.string(t.title) && N.string(t.title);
    }),
    ((h = p = t.TextEdit || (t.TextEdit = {})).replace = function(e, t) {
      return { range: e, newText: t };
    }),
    (h.insert = function(e, t) {
      return { range: { start: e, end: e }, newText: t };
    }),
    (h.del = function(e) {
      return { range: e, newText: "" };
    }),
    ((d = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create = function(
      e,
      t
    ) {
      return { textDocument: e, edits: t };
    }),
    (d.is = function(e) {
      var t = e;
      return N.defined(t) && g.is(t.textDocument) && Array.isArray(t.edits);
    });
  var m,
    g,
    v,
    y,
    b,
    x,
    S,
    j,
    O,
    T,
    C,
    A,
    k = (function() {
      function e(e) {
        this.edits = e;
      }
      return (
        (e.prototype.insert = function(e, t) {
          this.edits.push(p.insert(e, t));
        }),
        (e.prototype.replace = function(e, t) {
          this.edits.push(p.replace(e, t));
        }),
        (e.prototype.delete = function(e) {
          this.edits.push(p.del(e));
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
    I = (function() {
      function e(r) {
        var n = this;
        (this._textEditChanges = Object.create(null)),
          r &&
            ((this._workspaceEdit = r).documentChanges
              ? r.documentChanges.forEach(function(e) {
                  var t = new k(e.edits);
                  n._textEditChanges[e.textDocument.uri] = t;
                })
              : r.changes &&
                Object.keys(r.changes).forEach(function(e) {
                  var t = new k(r.changes[e]);
                  n._textEditChanges[e] = t;
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
          if (g.is(e)) {
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = { documentChanges: [] }),
              !this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for versioned document changes."
              );
            var t = e;
            if (!(n = this._textEditChanges[t.uri])) {
              var r = { textDocument: t, edits: (o = []) };
              this._workspaceEdit.documentChanges.push(r),
                (n = new k(o)),
                (this._textEditChanges[t.uri] = n);
            }
            return n;
          }
          if (
            (this._workspaceEdit ||
              (this._workspaceEdit = { changes: Object.create(null) }),
            !this._workspaceEdit.changes)
          )
            throw new Error(
              "Workspace edit is not configured for normal text edit changes."
            );
          var n;
          if (!(n = this._textEditChanges[e])) {
            var o = [];
            (this._workspaceEdit.changes[e] = o),
              (n = new k(o)),
              (this._textEditChanges[e] = n);
          }
          return n;
        }),
        e
      );
    })();
  (t.WorkspaceChange = I),
    ((m =
      t.TextDocumentIdentifier ||
      (t.TextDocumentIdentifier = {})).create = function(e) {
      return { uri: e };
    }),
    (m.is = function(e) {
      var t = e;
      return N.defined(t) && N.string(t.uri);
    }),
    ((v = g =
      t.VersionedTextDocumentIdentifier ||
      (t.VersionedTextDocumentIdentifier = {})).create = function(e, t) {
      return { uri: e, version: t };
    }),
    (v.is = function(e) {
      var t = e;
      return N.defined(t) && N.string(t.uri) && N.number(t.version);
    }),
    ((y = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function(
      e,
      t,
      r,
      n
    ) {
      return { uri: e, languageId: t, version: r, text: n };
    }),
    (y.is = function(e) {
      var t = e;
      return (
        N.defined(t) &&
        N.string(t.uri) &&
        N.string(t.languageId) &&
        N.number(t.version) &&
        N.string(t.text)
      );
    }),
    ((b = t.MarkupKind || (t.MarkupKind = {})).PlainText = "plaintext"),
    (b.Markdown = "markdown"),
    ((x = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
    (x.Method = 2),
    (x.Function = 3),
    (x.Constructor = 4),
    (x.Field = 5),
    (x.Variable = 6),
    (x.Class = 7),
    (x.Interface = 8),
    (x.Module = 9),
    (x.Property = 10),
    (x.Unit = 11),
    (x.Value = 12),
    (x.Enum = 13),
    (x.Keyword = 14),
    (x.Snippet = 15),
    (x.Color = 16),
    (x.File = 17),
    (x.Reference = 18),
    (x.Folder = 19),
    (x.EnumMember = 20),
    (x.Constant = 21),
    (x.Struct = 22),
    (x.Event = 23),
    (x.Operator = 24),
    (x.TypeParameter = 25),
    ((S = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
    (S.Snippet = 2),
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
      for (var r = [], n = 2; n < arguments.length; n++)
        r[n - 2] = arguments[n];
      var o = { label: e };
      return (
        N.defined(t) && (o.documentation = t),
        N.defined(r) ? (o.parameters = r) : (o.parameters = []),
        o
      );
    }),
    ((j = t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
    (j.Read = 2),
    (j.Write = 3),
    ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function(
      e,
      t
    ) {
      var r = { range: e };
      return N.number(t) && (r.kind = t), r;
    }),
    ((O = t.SymbolKind || (t.SymbolKind = {})).File = 1),
    (O.Module = 2),
    (O.Namespace = 3),
    (O.Package = 4),
    (O.Class = 5),
    (O.Method = 6),
    (O.Property = 7),
    (O.Field = 8),
    (O.Constructor = 9),
    (O.Enum = 10),
    (O.Interface = 11),
    (O.Function = 12),
    (O.Variable = 13),
    (O.Constant = 14),
    (O.String = 15),
    (O.Number = 16),
    (O.Boolean = 17),
    (O.Array = 18),
    (O.Object = 19),
    (O.Key = 20),
    (O.Null = 21),
    (O.EnumMember = 22),
    (O.Struct = 23),
    (O.Event = 24),
    (O.Operator = 25),
    (O.TypeParameter = 26),
    ((t.SymbolInformation || (t.SymbolInformation = {})).create = function(
      e,
      t,
      r,
      n,
      o
    ) {
      var i = { name: e, kind: t, location: { uri: n, range: r } };
      return o && (i.containerName = o), i;
    }),
    ((T = t.CodeActionContext || (t.CodeActionContext = {})).create = function(
      e
    ) {
      return { diagnostics: e };
    }),
    (T.is = function(e) {
      var t = e;
      return N.defined(t) && N.typedArray(t.diagnostics, u.is);
    }),
    ((C = t.CodeLens || (t.CodeLens = {})).create = function(e, t) {
      var r = { range: e };
      return N.defined(t) && (r.data = t), r;
    }),
    (C.is = function(e) {
      var t = e;
      return (
        N.defined(t) &&
        n.is(t.range) &&
        (N.undefined(t.command) || f.is(t.command))
      );
    }),
    ((A = t.FormattingOptions || (t.FormattingOptions = {})).create = function(
      e,
      t
    ) {
      return { tabSize: e, insertSpaces: t };
    }),
    (A.is = function(e) {
      var t = e;
      return N.defined(t) && N.number(t.tabSize) && N.boolean(t.insertSpaces);
    });
  var P,
    E,
    _,
    w = function() {};
  (t.DocumentLink = w),
    ((P = w = t.DocumentLink || (t.DocumentLink = {})).create = function(e, t) {
      return { range: e, target: t };
    }),
    (P.is = function(e) {
      var t = e;
      return (
        N.defined(t) &&
        n.is(t.range) &&
        (N.undefined(t.target) || N.string(t.target))
      );
    }),
    (t.DocumentLink = w),
    (t.EOL = ["\n", "\r\n", "\r"]),
    ((E = t.TextDocument || (t.TextDocument = {})).create = function(
      e,
      t,
      r,
      n
    ) {
      return new F(e, t, r, n);
    }),
    (E.is = function(e) {
      var t = e;
      return !!(
        N.defined(t) &&
        N.string(t.uri) &&
        (N.undefined(t.languageId) || N.string(t.languageId)) &&
        N.number(t.lineCount) &&
        N.func(t.getText) &&
        N.func(t.positionAt) &&
        N.func(t.offsetAt)
      );
    }),
    (E.applyEdits = function(e, t) {
      for (
        var r = e.getText(),
          n = (function e(t, r) {
            if (t.length <= 1) return t;
            var n = (t.length / 2) | 0,
              o = t.slice(0, n),
              i = t.slice(n);
            e(o, r), e(i, r);
            for (var a = 0, s = 0, u = 0; a < o.length && s < i.length; ) {
              var c = r(o[a], i[s]);
              t[u++] = c <= 0 ? o[a++] : i[s++];
            }
            for (; a < o.length; ) t[u++] = o[a++];
            for (; s < i.length; ) t[u++] = i[s++];
            return t;
          })(t, function(e, t) {
            return 0 == e.range.start.line - t.range.start.line
              ? e.range.start.character - t.range.start.character
              : 0;
          }),
          o = r.length,
          i = n.length - 1;
        0 <= i;
        i--
      ) {
        var a = n[i],
          s = e.offsetAt(a.range.start),
          u = e.offsetAt(a.range.end);
        if (!(u <= o)) throw new Error("Ovelapping edit");
        (r = r.substring(0, s) + a.newText + r.substring(u, r.length)), (o = s);
      }
      return r;
    }),
    ((_ =
      t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {})).Manual = 1),
    (_.AfterDelay = 2),
    (_.FocusOut = 3);
  var N,
    V,
    M,
    F = (function() {
      function e(e, t, r, n) {
        (this._uri = e),
          (this._languageId = t),
          (this._version = r),
          (this._content = n),
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
              r = this.offsetAt(e.end);
            return this._content.substring(t, r);
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
              var e = [], t = this._content, r = !0, n = 0;
              n < t.length;
              n++
            ) {
              r && (e.push(n), (r = !1));
              var o = t.charAt(n);
              (r = "\r" === o || "\n" === o),
                "\r" === o &&
                  n + 1 < t.length &&
                  "\n" === t.charAt(n + 1) &&
                  n++;
            }
            r && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
          }
          return this._lineOffsets;
        }),
        (e.prototype.positionAt = function(e) {
          e = Math.max(Math.min(e, this._content.length), 0);
          var t = this.getLineOffsets(),
            r = 0,
            n = t.length;
          if (0 === n) return a.create(0, e);
          for (; r < n; ) {
            var o = Math.floor((r + n) / 2);
            t[o] > e ? (n = o) : (r = o + 1);
          }
          var i = r - 1;
          return a.create(i, e - t[i]);
        }),
        (e.prototype.offsetAt = function(e) {
          var t = this.getLineOffsets();
          if (e.line >= t.length) return this._content.length;
          if (e.line < 0) return 0;
          var r = t[e.line],
            n = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
          return Math.max(Math.min(r + e.character, n), r);
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
  (V = N || (N = {})),
    (M = Object.prototype.toString),
    (V.defined = function(e) {
      return void 0 !== e;
    }),
    (V.undefined = function(e) {
      return void 0 === e;
    }),
    (V.boolean = function(e) {
      return !0 === e || !1 === e;
    }),
    (V.string = function(e) {
      return "[object String]" === M.call(e);
    }),
    (V.number = function(e) {
      return "[object Number]" === M.call(e);
    }),
    (V.func = function(e) {
      return "[object Function]" === M.call(e);
    }),
    (V.typedArray = function(e, t) {
      return Array.isArray(e) && e.every(t);
    });
}),
  define("vscode-languageserver-types", [
    "vscode-languageserver-types/main"
  ], function(e) {
    return e;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/impl/scanner", ["require", "exports"], e);
  })(function(e, t) {
    "use strict";
    function p(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (8192 <= e && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function h(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function d(e) {
      return 48 <= e && e <= 57;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createScanner = function(i, e) {
        void 0 === e && (e = !1);
        var a = 0,
          o = i.length,
          n = "",
          s = 0,
          u = 16,
          c = 0;
        function f(e, t) {
          for (var r = 0, n = 0; r < e || !t; ) {
            var o = i.charCodeAt(a);
            if (48 <= o && o <= 57) n = 16 * n + o - 48;
            else if (65 <= o && o <= 70) n = 16 * n + o - 65 + 10;
            else {
              if (!(97 <= o && o <= 102)) break;
              n = 16 * n + o - 97 + 10;
            }
            a++, r++;
          }
          return r < e && (n = -1), n;
        }
        function t() {
          if (((n = ""), (c = 0), o <= (s = a))) return (s = o), (u = 17);
          var e = i.charCodeAt(a);
          if (p(e)) {
            for (
              ;
              a++, (n += String.fromCharCode(e)), p((e = i.charCodeAt(a)));

            );
            return (u = 15);
          }
          if (h(e))
            return (
              a++,
              (n += String.fromCharCode(e)),
              13 === e && 10 === i.charCodeAt(a) && (a++, (n += "\n")),
              (u = 14)
            );
          switch (e) {
            case 123:
              return a++, (u = 1);
            case 125:
              return a++, (u = 2);
            case 91:
              return a++, (u = 3);
            case 93:
              return a++, (u = 4);
            case 58:
              return a++, (u = 6);
            case 44:
              return a++, (u = 5);
            case 34:
              return (
                a++,
                (n = (function() {
                  for (var e = "", t = a; ; ) {
                    if (o <= a) {
                      (e += i.substring(t, a)), (c = 2);
                      break;
                    }
                    var r = i.charCodeAt(a);
                    if (34 === r) {
                      (e += i.substring(t, a)), a++;
                      break;
                    }
                    if (92 !== r) {
                      if (0 <= r && r <= 31) {
                        if (h(r)) {
                          (e += i.substring(t, a)), (c = 2);
                          break;
                        }
                        c = 6;
                      }
                      a++;
                    } else {
                      if (((e += i.substring(t, a)), o <= ++a)) {
                        c = 2;
                        break;
                      }
                      switch ((r = i.charCodeAt(a++))) {
                        case 34:
                          e += '"';
                          break;
                        case 92:
                          e += "\\";
                          break;
                        case 47:
                          e += "/";
                          break;
                        case 98:
                          e += "\b";
                          break;
                        case 102:
                          e += "\f";
                          break;
                        case 110:
                          e += "\n";
                          break;
                        case 114:
                          e += "\r";
                          break;
                        case 116:
                          e += "\t";
                          break;
                        case 117:
                          var n = f(4, !0);
                          0 <= n ? (e += String.fromCharCode(n)) : (c = 4);
                          break;
                        default:
                          c = 5;
                      }
                      t = a;
                    }
                  }
                  return e;
                })()),
                (u = 10)
              );
            case 47:
              var t = a - 1;
              if (47 === i.charCodeAt(a + 1)) {
                for (a += 2; a < o && !h(i.charCodeAt(a)); ) a++;
                return (n = i.substring(t, a)), (u = 12);
              }
              if (42 === i.charCodeAt(a + 1)) {
                a += 2;
                for (var r = !1; a < o; ) {
                  if (
                    42 === i.charCodeAt(a) &&
                    a + 1 < o &&
                    47 === i.charCodeAt(a + 1)
                  ) {
                    (a += 2), (r = !0);
                    break;
                  }
                  a++;
                }
                return r || (a++, (c = 1)), (n = i.substring(t, a)), (u = 13);
              }
              return (n += String.fromCharCode(e)), a++, (u = 16);
            case 45:
              if (
                ((n += String.fromCharCode(e)),
                ++a === o || !d(i.charCodeAt(a)))
              )
                return (u = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (
                (n += (function() {
                  var e = a;
                  if (48 === i.charCodeAt(a)) a++;
                  else for (a++; a < i.length && d(i.charCodeAt(a)); ) a++;
                  if (a < i.length && 46 === i.charCodeAt(a)) {
                    if (!(++a < i.length && d(i.charCodeAt(a))))
                      return (c = 3), i.substring(e, a);
                    for (a++; a < i.length && d(i.charCodeAt(a)); ) a++;
                  }
                  var t = a;
                  if (
                    a < i.length &&
                    (69 === i.charCodeAt(a) || 101 === i.charCodeAt(a))
                  )
                    if (
                      (((++a < i.length && 43 === i.charCodeAt(a)) ||
                        45 === i.charCodeAt(a)) &&
                        a++,
                      a < i.length && d(i.charCodeAt(a)))
                    ) {
                      for (a++; a < i.length && d(i.charCodeAt(a)); ) a++;
                      t = a;
                    } else c = 3;
                  return i.substring(e, t);
                })()),
                (u = 11)
              );
            default:
              for (; a < o && l(e); ) a++, (e = i.charCodeAt(a));
              if (s !== a) {
                switch ((n = i.substring(s, a))) {
                  case "true":
                    return (u = 8);
                  case "false":
                    return (u = 9);
                  case "null":
                    return (u = 7);
                }
                return (u = 16);
              }
              return (n += String.fromCharCode(e)), a++, (u = 16);
          }
        }
        function l(e) {
          if (p(e) || h(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
              return !1;
          }
          return !0;
        }
        return {
          setPosition: function(e) {
            (a = e), (n = ""), (u = 16), (c = s = 0);
          },
          getPosition: function() {
            return a;
          },
          scan: e
            ? function() {
                for (var e; 12 <= (e = t()) && e <= 15; );
                return e;
              }
            : t,
          getToken: function() {
            return u;
          },
          getTokenValue: function() {
            return n;
          },
          getTokenOffset: function() {
            return s;
          },
          getTokenLength: function() {
            return a - s;
          },
          getTokenError: function() {
            return c;
          }
        };
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/impl/format", [
          "require",
          "exports",
          "./scanner"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var T = e("./scanner");
    function C(e, t) {
      for (var r = "", n = 0; n < t; n++) r += e;
      return r;
    }
    function A(e, t) {
      return -1 !== "\r\n".indexOf(e.charAt(t));
    }
    (t.format = function(n, e, t) {
      var r, o, i, a, s;
      if (e) {
        for (a = e.offset, s = a + e.length, i = a; 0 < i && !A(n, i - 1); )
          i--;
        for (var u = s; u < n.length && !A(n, u); ) u++;
        (o = n.substring(i, u)),
          (r = (function(e, t, r) {
            for (var n = 0, o = 0, i = r.tabSize || 4; n < e.length; ) {
              var a = e.charAt(n);
              if (" " === a) o++;
              else {
                if ("\t" !== a) break;
                o += i;
              }
              n++;
            }
            return Math.floor(o / i);
          })(o, 0, t));
      } else (a = i = r = 0), (s = (o = n).length);
      var c,
        f = (function(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t.charAt(r);
            if ("\r" === n)
              return r + 1 < t.length && "\n" === t.charAt(r + 1)
                ? "\r\n"
                : "\r";
            if ("\n" === n) return "\n";
          }
          return (e && e.eol) || "\n";
        })(t, n),
        l = !1,
        p = 0;
      c = t.insertSpaces ? C(" ", t.tabSize || 4) : "\t";
      var h = T.createScanner(o, !1),
        d = !1;
      function m() {
        return f + C(c, r + p);
      }
      function g() {
        var e = h.scan();
        for (l = !1; 15 === e || 14 === e; )
          (l = l || 14 === e), (e = h.scan());
        return (d = 16 === e || 0 !== h.getTokenError()), e;
      }
      var v = [];
      function y(e, t, r) {
        !d &&
          t < s &&
          a < r &&
          n.substring(t, r) !== e &&
          v.push({ offset: t, length: r - t, content: e });
      }
      var b = g();
      if (17 !== b) {
        var x = h.getTokenOffset() + i;
        y(C(c, r), i, x);
      }
      for (; 17 !== b; ) {
        for (
          var S = h.getTokenOffset() + h.getTokenLength() + i, j = g(), O = "";
          !l && (12 === j || 13 === j);

        )
          y(" ", S, h.getTokenOffset() + i),
            (S = h.getTokenOffset() + h.getTokenLength() + i),
            (O = 12 === j ? m() : ""),
            (j = g());
        if (2 === j) 1 !== b && (p--, (O = m()));
        else if (4 === j) 3 !== b && (p--, (O = m()));
        else {
          switch (b) {
            case 3:
            case 1:
              p++, (O = m());
              break;
            case 5:
            case 12:
              O = m();
              break;
            case 13:
              O = l ? m() : " ";
              break;
            case 6:
              O = " ";
              break;
            case 10:
              if (6 === j) {
                O = "";
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === j || 13 === j
                ? (O = " ")
                : 5 !== j && 17 !== j && (d = !0);
              break;
            case 16:
              d = !0;
          }
          !l || (12 !== j && 13 !== j) || (O = m());
        }
        y(O, S, h.getTokenOffset() + i), (b = j);
      }
      return v;
    }),
      (t.isEOL = A);
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/impl/parser", [
          "require",
          "exports",
          "./scanner"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var S = e("./scanner");
    function f(e, t, r) {
      var o = S.createScanner(e, !1);
      function n(e) {
        return e
          ? function() {
              return e(o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      function i(t) {
        return t
          ? function(e) {
              return t(e, o.getTokenOffset(), o.getTokenLength());
            }
          : function() {
              return !0;
            };
      }
      var a = n(t.onObjectBegin),
        s = i(t.onObjectProperty),
        u = n(t.onObjectEnd),
        c = n(t.onArrayBegin),
        f = n(t.onArrayEnd),
        l = i(t.onLiteralValue),
        p = i(t.onSeparator),
        h = n(t.onComment),
        d = i(t.onError),
        m = r && r.disallowComments,
        g = r && r.allowTrailingComma;
      function v() {
        for (;;) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              y(14);
              break;
            case 5:
              y(15);
              break;
            case 3:
              y(13);
              break;
            case 1:
              m || y(11);
              break;
            case 2:
              y(12);
              break;
            case 6:
              y(16);
          }
          switch (e) {
            case 12:
            case 13:
              m ? y(10) : h();
              break;
            case 16:
              y(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function y(e, t, r) {
        if (
          (void 0 === t && (t = []),
          void 0 === r && (r = []),
          d(e),
          0 < t.length + r.length)
        )
          for (var n = o.getToken(); 17 !== n; ) {
            if (-1 !== t.indexOf(n)) {
              v();
              break;
            }
            if (-1 !== r.indexOf(n)) break;
            n = v();
          }
      }
      function b(e) {
        var t = o.getTokenValue();
        return e ? l(t) : s(t), v(), !0;
      }
      function x() {
        switch (o.getToken()) {
          case 3:
            return (function() {
              c(), v();
              for (var e = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), p(","), v(), 4 === o.getToken() && g))
                    break;
                } else e && y(6, [], []);
                x() || y(4, [], [4, 5]), (e = !0);
              }
              return f(), 4 !== o.getToken() ? y(8, [4], []) : v(), !0;
            })();
          case 1:
            return (function() {
              a(), v();
              for (var e = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || y(4, [], []), p(","), v(), 2 === o.getToken() && g))
                    break;
                } else e && y(6, [], []);
                (10 !== o.getToken()
                  ? (y(3, [], [2, 5]), 0)
                  : (b(!1),
                    6 === o.getToken()
                      ? (p(":"), v(), x() || y(4, [], [2, 5]))
                      : y(5, [], [2, 5]),
                    1)) || y(4, [], [2, 5]),
                  (e = !0);
              }
              return u(), 2 !== o.getToken() ? y(7, [2], []) : v(), !0;
            })();
          case 10:
            return b(!0);
          default:
            return (function() {
              switch (o.getToken()) {
                case 11:
                  var e = 0;
                  try {
                    "number" != typeof (e = JSON.parse(o.getTokenValue())) &&
                      (y(2), (e = 0));
                  } catch (e) {
                    y(2);
                  }
                  l(e);
                  break;
                case 7:
                  l(null);
                  break;
                case 8:
                  l(!0);
                  break;
                case 9:
                  l(!1);
                  break;
                default:
                  return !1;
              }
              return v(), !0;
            })();
        }
      }
      return (
        v(),
        17 === o.getToken() ||
          (x() ? (17 !== o.getToken() && y(9, [], []), !0) : (y(4, [], []), !1))
      );
    }
    function l(e) {
      switch (typeof e) {
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        default:
          return "null";
      }
    }
    (t.getLocation = function(e, o) {
      var i = [],
        a = new Object(),
        s = void 0,
        u = { value: {}, offset: 0, length: 0, type: "object" },
        c = !1;
      function n(e, t, r, n) {
        (u.value = e),
          (u.offset = t),
          (u.length = r),
          (u.type = n),
          (u.columnOffset = void 0),
          (s = u);
      }
      try {
        f(e, {
          onObjectBegin: function(e, t) {
            if (o <= e) throw a;
            (s = void 0), (c = e < o), i.push("");
          },
          onObjectProperty: function(e, t, r) {
            if (o < t) throw a;
            if ((n(e, t, r, "property"), (i[i.length - 1] = e), o <= t + r))
              throw a;
          },
          onObjectEnd: function(e, t) {
            if (o <= e) throw a;
            (s = void 0), i.pop();
          },
          onArrayBegin: function(e, t) {
            if (o <= e) throw a;
            (s = void 0), i.push(0);
          },
          onArrayEnd: function(e, t) {
            if (o <= e) throw a;
            (s = void 0), i.pop();
          },
          onLiteralValue: function(e, t, r) {
            if (o < t) throw a;
            if ((n(e, t, r, l(e)), o <= t + r)) throw a;
          },
          onSeparator: function(e, t, r) {
            if (o <= t) throw a;
            if (":" === e && s && "property" === s.type)
              (s.columnOffset = t), (c = !1), (s = void 0);
            else if ("," === e) {
              var n = i[i.length - 1];
              "number" == typeof n
                ? (i[i.length - 1] = n + 1)
                : ((c = !0), (i[i.length - 1] = "")),
                (s = void 0);
            }
          }
        });
      } catch (e) {
        if (e !== a) throw e;
      }
      return {
        path: i,
        previousNode: s,
        isAtPropertyKey: c,
        matches: function(e) {
          for (var t = 0, r = 0; t < e.length && r < i.length; r++)
            if (e[t] === i[r] || "*" === e[t]) t++;
            else if ("**" !== e[t]) return !1;
          return t === e.length;
        }
      };
    }),
      (t.parse = function(e, n, t) {
        void 0 === n && (n = []);
        var r = null,
          o = [],
          i = [];
        function a(e) {
          Array.isArray(o) ? o.push(e) : r && (o[r] = e);
        }
        return (
          f(
            e,
            {
              onObjectBegin: function() {
                var e = {};
                a(e), i.push(o), (o = e), (r = null);
              },
              onObjectProperty: function(e) {
                r = e;
              },
              onObjectEnd: function() {
                o = i.pop();
              },
              onArrayBegin: function() {
                var e = [];
                a(e), i.push(o), (o = e), (r = null);
              },
              onArrayEnd: function() {
                o = i.pop();
              },
              onLiteralValue: a,
              onError: function(e, t, r) {
                n.push({ error: e, offset: t, length: r });
              }
            },
            t
          ),
          o[0]
        );
      }),
      (t.parseTree = function(e, n, t) {
        void 0 === n && (n = []);
        var o = { type: "array", offset: -1, length: -1, children: [] };
        function i(e) {
          "property" === o.type && ((o.length = e - o.offset), (o = o.parent));
        }
        function a(e) {
          return o.children.push(e), e;
        }
        f(
          e,
          {
            onObjectBegin: function(e) {
              o = a({
                type: "object",
                offset: e,
                length: -1,
                parent: o,
                children: []
              });
            },
            onObjectProperty: function(e, t, r) {
              (o = a({
                type: "property",
                offset: t,
                length: -1,
                parent: o,
                children: []
              })).children.push({
                type: "string",
                value: e,
                offset: t,
                length: r,
                parent: o
              });
            },
            onObjectEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onArrayBegin: function(e, t) {
              o = a({
                type: "array",
                offset: e,
                length: -1,
                parent: o,
                children: []
              });
            },
            onArrayEnd: function(e, t) {
              (o.length = e + t - o.offset), (o = o.parent), i(e + t);
            },
            onLiteralValue: function(e, t, r) {
              a({ type: l(e), offset: t, length: r, parent: o, value: e }),
                i(t + r);
            },
            onSeparator: function(e, t, r) {
              "property" === o.type &&
                (":" === e ? (o.columnOffset = t) : "," === e && i(t));
            },
            onError: function(e, t, r) {
              n.push({ error: e, offset: t, length: r });
            }
          },
          t
        );
        var r = o.children[0];
        return r && delete r.parent, r;
      }),
      (t.findNodeAtLocation = function(e, t) {
        if (e) {
          for (var r = e, n = 0, o = t; n < o.length; n++) {
            var i = o[n];
            if ("string" == typeof i) {
              if ("object" !== r.type || !Array.isArray(r.children)) return;
              for (var a = !1, s = 0, u = r.children; s < u.length; s++) {
                var c = u[s];
                if (Array.isArray(c.children) && c.children[0].value === i) {
                  (r = c.children[1]), (a = !0);
                  break;
                }
              }
              if (!a) return;
            } else {
              var f = i;
              if (
                "array" !== r.type ||
                f < 0 ||
                !Array.isArray(r.children) ||
                f >= r.children.length
              )
                return;
              r = r.children[f];
            }
          }
          return r;
        }
      }),
      (t.getNodeValue = function e(t) {
        if ("array" === t.type) return t.children.map(e);
        if ("object" === t.type) {
          for (
            var r = Object.create(null), n = 0, o = t.children;
            n < o.length;
            n++
          ) {
            var i = o[n];
            r[i.children[0].value] = e(i.children[1]);
          }
          return r;
        }
        return t.value;
      }),
      (t.visit = f),
      (t.stripComments = function(e, t) {
        var r,
          n,
          o = S.createScanner(e),
          i = [],
          a = 0;
        do {
          switch (((n = o.getPosition()), (r = o.scan()))) {
            case 12:
            case 13:
            case 17:
              a !== n && i.push(e.substring(a, n)),
                void 0 !== t &&
                  i.push(o.getTokenValue().replace(/[^\r\n]/g, t)),
                (a = o.getPosition());
          }
        } while (17 !== r);
        return i.join("");
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/impl/edit", [
          "require",
          "exports",
          "./format",
          "./parser"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var c = e("./format"),
      x = e("./parser");
    function n(e, t, r, n, o) {
      for (
        var i, a = x.parseTree(e, []), s = void 0, u = void 0;
        0 < t.length &&
        ((u = t.pop()),
        void 0 === (s = x.findNodeAtLocation(a, t)) && void 0 !== r);

      )
        "string" == typeof u ? (((i = {})[u] = r), (r = i)) : (r = [r]);
      if (s) {
        if (
          "object" === s.type &&
          "string" == typeof u &&
          Array.isArray(s.children)
        ) {
          var c = x.findNodeAtLocation(s, [u]);
          if (void 0 !== c) {
            if (void 0 === r) {
              if (!c.parent) throw new Error("Malformed AST");
              var f = s.children.indexOf(c.parent),
                l = void 0,
                p = c.parent.offset + c.parent.length;
              if (0 < f) l = (y = s.children[f - 1]).offset + y.length;
              else if (((l = s.offset + 1), 1 < s.children.length))
                p = s.children[1].offset;
              return S(e, { offset: l, length: p - l, content: "" }, n);
            }
            return S(
              e,
              {
                offset: c.offset,
                length: c.length,
                content: JSON.stringify(r)
              },
              n
            );
          }
          if (void 0 === r) return [];
          var h = JSON.stringify(u) + ": " + JSON.stringify(r),
            d = o
              ? o(
                  s.children.map(function(e) {
                    return e.children[0].value;
                  })
                )
              : s.children.length,
            m = void 0;
          return S(
            e,
            (m =
              0 < d
                ? {
                    offset: (y = s.children[d - 1]).offset + y.length,
                    length: 0,
                    content: "," + h
                  }
                : 0 === s.children.length
                  ? { offset: s.offset + 1, length: 0, content: h }
                  : { offset: s.offset + 1, length: 0, content: h + "," }),
            n
          );
        }
        if (
          "array" === s.type &&
          "number" == typeof u &&
          Array.isArray(s.children)
        ) {
          if (-1 === u) {
            (h = "" + JSON.stringify(r)), (m = void 0);
            if (0 === s.children.length)
              m = { offset: s.offset + 1, length: 0, content: h };
            else
              m = {
                offset:
                  (y = s.children[s.children.length - 1]).offset + y.length,
                length: 0,
                content: "," + h
              };
            return S(e, m, n);
          }
          if (void 0 === r && 0 <= s.children.length) {
            var g = u,
              v = s.children[g];
            m = void 0;
            if (1 === s.children.length)
              m = { offset: s.offset + 1, length: s.length - 2, content: "" };
            else if (s.children.length - 1 === g) {
              var y,
                b = (y = s.children[g - 1]).offset + y.length;
              m = {
                offset: b,
                length: s.offset + s.length - 2 - b,
                content: ""
              };
            } else
              m = {
                offset: v.offset,
                length: s.children[g + 1].offset - v.offset,
                content: ""
              };
            return S(e, m, n);
          }
          throw new Error("Array modification not supported yet");
        }
        throw new Error(
          "Can not add " +
            ("number" != typeof u ? "index" : "property") +
            " to parent of type " +
            s.type
        );
      }
      if (void 0 === r) throw new Error("Can not delete in empty document");
      return S(
        e,
        {
          offset: a ? a.offset : 0,
          length: a ? a.length : 0,
          content: JSON.stringify(r)
        },
        n
      );
    }
    function S(e, t, r) {
      var n = f(e, t),
        o = t.offset,
        i = t.offset + t.content.length;
      if (0 === t.length || 0 === t.content.length) {
        for (; 0 < o && !c.isEOL(n, o - 1); ) o--;
        for (; i < n.length && !c.isEOL(n, i); ) i++;
      }
      for (
        var a = c.format(n, { offset: o, length: i - o }, r), s = a.length - 1;
        0 <= s;
        s--
      ) {
        var u = a[s];
        (n = f(n, u)),
          (o = Math.min(o, u.offset)),
          (i = Math.max(i, u.offset + u.length)),
          (i += u.content.length - u.length);
      }
      return [
        {
          offset: o,
          length: e.length - (n.length - i) - o,
          content: n.substring(o, i)
        }
      ];
    }
    function f(e, t) {
      return (
        e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length)
      );
    }
    (t.removeProperty = function(e, t, r) {
      return n(e, t, void 0, r);
    }),
      (t.setProperty = n),
      (t.applyEdit = f),
      (t.isWS = function(e, t) {
        return -1 !== "\r\n \t".indexOf(e.charAt(t));
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/main", [
          "require",
          "exports",
          "./impl/format",
          "./impl/edit",
          "./impl/scanner",
          "./impl/parser"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = e("./impl/format"),
      o = e("./impl/edit"),
      r = e("./impl/scanner"),
      i = e("./impl/parser");
    (t.createScanner = r.createScanner),
      (t.getLocation = i.getLocation),
      (t.parse = i.parse),
      (t.parseTree = i.parseTree),
      (t.findNodeAtLocation = i.findNodeAtLocation),
      (t.getNodeValue = i.getNodeValue),
      (t.visit = i.visit),
      (t.stripComments = i.stripComments),
      (t.format = function(e, t, r) {
        return n.format(e, t, r);
      }),
      (t.modify = function(e, t, r, n) {
        return o.setProperty(e, t, r, n.formattingOptions, n.getInsertionIndex);
      }),
      (t.applyEdits = function(e, t) {
        for (var r = t.length - 1; 0 <= r; r--) e = o.applyEdit(e, t[r]);
        return e;
      });
  }),
  define("jsonc-parser", ["jsonc-parser/main"], function(e) {
    return e;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/utils/objects", [
          "require",
          "exports"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.equals = function e(t, r) {
        if (t === r) return !0;
        if (null == t || null == r) return !1;
        if (typeof t != typeof r) return !1;
        if ("object" != typeof t) return !1;
        if (Array.isArray(t) !== Array.isArray(r)) return !1;
        var n, o;
        if (Array.isArray(t)) {
          if (t.length !== r.length) return !1;
          for (n = 0; n < t.length; n++) if (!e(t[n], r[n])) return !1;
        } else {
          var i = [];
          for (o in t) i.push(o);
          i.sort();
          var a = [];
          for (o in r) a.push(o);
          if ((a.sort(), !e(i, a))) return !1;
          for (n = 0; n < i.length; n++) if (!e(t[i[n]], r[i[n]])) return !1;
        }
        return !0;
      });
  }),
  define("vscode-nls/vscode-nls", ["require", "exports"], function(e, t) {
    "use strict";
    function r(e, t) {
      for (var r, n, o = [], i = 2; i < arguments.length; i++)
        o[i - 2] = arguments[i];
      return (
        (r = t),
        0 === (n = o).length
          ? r
          : r.replace(/\{(\d+)\}/g, function(e, t) {
              var r = t[0];
              return void 0 !== n[r] ? n[r] : e;
            })
      );
    }
    function n(e) {
      return r;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadMessageBundle = n),
      (t.config = function(e) {
        return n;
      });
  }),
  define("vscode-nls", ["vscode-nls/vscode-nls"], function(e) {
    return e;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-uri/index", ["require", "exports"], e);
  })(function(e, t) {
    "use strict";
    function r(e) {
      return (
        "%" +
        e
          .charCodeAt(0)
          .toString(16)
          .toUpperCase()
      );
    }
    function h(e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, r);
    }
    function d(e) {
      return e.replace(/[#?]/, r);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n,
      o = (function() {
        function p() {
          (this._scheme = p._empty),
            (this._authority = p._empty),
            (this._path = p._empty),
            (this._query = p._empty),
            (this._fragment = p._empty),
            (this._formatted = null),
            (this._fsPath = null);
        }
        return (
          (p.isUri = function(e) {
            return (
              e instanceof p ||
              (!!e &&
                ("string" == typeof e.authority &&
                  "string" == typeof e.fragment &&
                  "string" == typeof e.path &&
                  "string" == typeof e.query &&
                  "string" == typeof e.scheme))
            );
          }),
          Object.defineProperty(p.prototype, "scheme", {
            get: function() {
              return this._scheme;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(p.prototype, "authority", {
            get: function() {
              return this._authority;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(p.prototype, "path", {
            get: function() {
              return this._path;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(p.prototype, "query", {
            get: function() {
              return this._query;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(p.prototype, "fragment", {
            get: function() {
              return this._fragment;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(p.prototype, "fsPath", {
            get: function() {
              var e;
              this._fsPath ||
                ((e =
                  this._authority && this._path && "file" === this.scheme
                    ? "//" + this._authority + this._path
                    : p._driveLetterPath.test(this._path)
                      ? this._path[1].toLowerCase() + this._path.substr(2)
                      : this._path),
                n && (e = e.replace(/\//g, "\\")),
                (this._fsPath = e));
              return this._fsPath;
            },
            enumerable: !0,
            configurable: !0
          }),
          (p.prototype.with = function(e) {
            if (!e) return this;
            var t = e.scheme,
              r = e.authority,
              n = e.path,
              o = e.query,
              i = e.fragment;
            if (
              (void 0 === t ? (t = this.scheme) : null === t && (t = ""),
              void 0 === r ? (r = this.authority) : null === r && (r = ""),
              void 0 === n ? (n = this.path) : null === n && (n = ""),
              void 0 === o ? (o = this.query) : null === o && (o = ""),
              void 0 === i ? (i = this.fragment) : null === i && (i = ""),
              t === this.scheme &&
                r === this.authority &&
                n === this.path &&
                o === this.query &&
                i === this.fragment)
            )
              return this;
            var a = new p();
            return (
              (a._scheme = t),
              (a._authority = r),
              (a._path = n),
              (a._query = o),
              (a._fragment = i),
              p._validate(a),
              a
            );
          }),
          (p.parse = function(e) {
            var t = new p(),
              r = p._parseComponents(e);
            return (
              (t._scheme = r.scheme),
              (t._authority = decodeURIComponent(r.authority)),
              (t._path = decodeURIComponent(r.path)),
              (t._query = decodeURIComponent(r.query)),
              (t._fragment = decodeURIComponent(r.fragment)),
              p._validate(t),
              t
            );
          }),
          (p.file = function(e) {
            var t = new p();
            if (
              ((t._scheme = "file"),
              n && (e = e.replace(/\\/g, p._slash)),
              e[0] === p._slash && e[0] === e[1])
            ) {
              var r = e.indexOf(p._slash, 2);
              -1 === r
                ? (t._authority = e.substring(2))
                : ((t._authority = e.substring(2, r)),
                  (t._path = e.substring(r)));
            } else t._path = e;
            return (
              t._path[0] !== p._slash && (t._path = p._slash + t._path),
              p._validate(t),
              t
            );
          }),
          (p._parseComponents = function(e) {
            var t = {
                scheme: p._empty,
                authority: p._empty,
                path: p._empty,
                query: p._empty,
                fragment: p._empty
              },
              r = p._regexp.exec(e);
            return (
              r &&
                ((t.scheme = r[2] || t.scheme),
                (t.authority = r[4] || t.authority),
                (t.path = r[5] || t.path),
                (t.query = r[7] || t.query),
                (t.fragment = r[9] || t.fragment)),
              t
            );
          }),
          (p.from = function(e) {
            return new p().with(e);
          }),
          (p._validate = function(e) {
            if (e.scheme && !p._schemePattern.test(e.scheme))
              throw new Error(
                "[UriError]: Scheme contains illegal characters."
              );
            if (e.path)
              if (e.authority) {
                if (!p._singleSlashStart.test(e.path))
                  throw new Error(
                    '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                  );
              } else if (p._doubleSlashStart.test(e.path))
                throw new Error(
                  '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                );
          }),
          (p.prototype.toString = function(e) {
            return (
              void 0 === e && (e = !1),
              e
                ? p._asFormatted(this, !0)
                : (this._formatted ||
                    (this._formatted = p._asFormatted(this, !1)),
                  this._formatted)
            );
          }),
          (p._asFormatted = function(e, t) {
            var r = t ? d : h,
              n = [],
              o = e.scheme,
              i = e.authority,
              a = e.path,
              s = e.query,
              u = e.fragment;
            (o && n.push(o, ":"), (i || "file" === o) && n.push("//"), i) &&
              (-1 === (l = (i = i.toLowerCase()).indexOf(":"))
                ? n.push(r(i))
                : n.push(r(i.substr(0, l)), i.substr(l)));
            if (a) {
              var c = p._upperCaseDrive.exec(a);
              c &&
                (a = c[1]
                  ? "/" + c[2].toLowerCase() + a.substr(3)
                  : c[2].toLowerCase() + a.substr(2));
              for (var f = 0; ; ) {
                var l;
                if (-1 === (l = a.indexOf(p._slash, f))) {
                  n.push(r(a.substring(f)));
                  break;
                }
                n.push(r(a.substring(f, l)), p._slash), (f = l + 1);
              }
            }
            return (
              s && n.push("?", r(s)), u && n.push("#", r(u)), n.join(p._empty)
            );
          }),
          (p.prototype.toJSON = function() {
            var e = { fsPath: this.fsPath, external: this.toString(), $mid: 1 };
            return (
              this.path && (e.path = this.path),
              this.scheme && (e.scheme = this.scheme),
              this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment),
              e
            );
          }),
          (p.revive = function(e) {
            var t = new p();
            return (
              (t._scheme = e.scheme || p._empty),
              (t._authority = e.authority || p._empty),
              (t._path = e.path || p._empty),
              (t._query = e.query || p._empty),
              (t._fragment = e.fragment || p._empty),
              (t._fsPath = e.fsPath),
              (t._formatted = e.external),
              p._validate(t),
              t
            );
          }),
          p
        );
      })();
    if (
      ((o._empty = ""),
      (o._slash = "/"),
      (o._regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/),
      (o._driveLetterPath = /^\/[a-zA-z]:/),
      (o._upperCaseDrive = /^(\/)?([A-Z]:)/),
      (o._schemePattern = /^\w[\w\d+.-]*$/),
      (o._singleSlashStart = /^\//),
      (o._doubleSlashStart = /^\/\//),
      (t.default = o),
      "object" == typeof process)
    )
      n = "win32" === process.platform;
    else if ("object" == typeof navigator) {
      var i = navigator.userAgent;
      n = 0 <= i.indexOf("Windows");
    }
  }),
  define("vscode-uri", ["vscode-uri/index"], function(e) {
    return e;
  });
var __extends =
  (this && this.__extends) ||
  (function() {
    var n =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(e, t) {
          e.__proto__ = t;
        }) ||
      function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      };
    return function(e, t) {
      function r() {
        this.constructor = e;
      }
      n(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((r.prototype = t.prototype), new r()));
    };
  })();
!(function(e) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    "function" == typeof define &&
      define.amd &&
      define("vscode-json-languageservice/parser/jsonParser", [
        "require",
        "exports",
        "jsonc-parser",
        "../utils/objects",
        "vscode-nls",
        "vscode-uri",
        "vscode-languageserver-types"
      ], e);
})(function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var v,
    r,
    o = e("jsonc-parser"),
    d = e("../utils/objects"),
    n = e("vscode-nls"),
    s = e("vscode-uri"),
    y = (e("vscode-languageserver-types"), n.loadMessageBundle());
  ((r = v = t.ErrorCode || (t.ErrorCode = {}))[(r.Undefined = 0)] =
    "Undefined"),
    (r[(r.EnumValueMismatch = 1)] = "EnumValueMismatch"),
    (r[(r.UnexpectedEndOfComment = 257)] = "UnexpectedEndOfComment"),
    (r[(r.UnexpectedEndOfString = 258)] = "UnexpectedEndOfString"),
    (r[(r.UnexpectedEndOfNumber = 259)] = "UnexpectedEndOfNumber"),
    (r[(r.InvalidUnicode = 260)] = "InvalidUnicode"),
    (r[(r.InvalidEscapeCharacter = 261)] = "InvalidEscapeCharacter"),
    (r[(r.InvalidCharacter = 262)] = "InvalidCharacter"),
    (r[(r.PropertyExpected = 513)] = "PropertyExpected"),
    (r[(r.CommaExpected = 514)] = "CommaExpected"),
    (r[(r.ColonExpected = 515)] = "ColonExpected"),
    (r[(r.ValueExpected = 516)] = "ValueExpected"),
    (r[(r.CommaOrCloseBacketExpected = 517)] = "CommaOrCloseBacketExpected"),
    (r[(r.CommaOrCloseBraceExpected = 518)] = "CommaOrCloseBraceExpected"),
    (r[(r.TrailingComma = 519)] = "TrailingComma");
  var b,
    i,
    u = /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/,
    c = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ((i = b = t.ProblemSeverity || (t.ProblemSeverity = {})).Ignore = "ignore"),
    (i.Error = "error"),
    (i.Warning = "warning");
  var a = (function() {
      function e(e, t, r) {
        (this.offset = t), (this.length = r), (this.parent = e);
      }
      return (
        Object.defineProperty(e.prototype, "children", {
          get: function() {
            return [];
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.toString = function() {
          return (
            "type: " +
            this.type +
            " (" +
            this.offset +
            "/" +
            this.length +
            ")" +
            (this.parent ? " parent: {" + this.parent.toString() + "}" : "")
          );
        }),
        e
      );
    })(),
    x = (function(n) {
      function e(e, t) {
        var r = n.call(this, e, t) || this;
        return (r.type = "null"), r;
      }
      return __extends(e, n), e;
    })((t.ASTNodeImpl = a));
  t.NullASTNodeImpl = x;
  var S = (function(o) {
    function e(e, t, r) {
      var n = o.call(this, e, r) || this;
      return (n.type = "boolean"), (n.value = t), n;
    }
    return __extends(e, o), e;
  })(a);
  t.BooleanASTNodeImpl = S;
  var j = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = "array"), (r.items = []), r;
    }
    return (
      __extends(e, n),
      Object.defineProperty(e.prototype, "children", {
        get: function() {
          return this.items;
        },
        enumerable: !0,
        configurable: !0
      }),
      e
    );
  })(a);
  t.ArrayASTNodeImpl = j;
  var O = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = "number"), (r.isInteger = !0), (r.value = Number.NaN), r;
    }
    return __extends(e, n), e;
  })(a);
  t.NumberASTNodeImpl = O;
  var T = (function(o) {
    function e(e, t, r) {
      var n = o.call(this, e, t, r) || this;
      return (n.type = "string"), (n.value = ""), n;
    }
    return __extends(e, o), e;
  })(a);
  t.StringASTNodeImpl = T;
  var C = (function(n) {
    function e(e, t) {
      var r = n.call(this, e, t) || this;
      return (r.type = "property"), (r.colonOffset = -1), r;
    }
    return (
      __extends(e, n),
      Object.defineProperty(e.prototype, "children", {
        get: function() {
          return this.valueNode
            ? [this.keyNode, this.valueNode]
            : [this.keyNode];
        },
        enumerable: !0,
        configurable: !0
      }),
      e
    );
  })(a);
  t.PropertyASTNodeImpl = C;
  var f,
    A = (function(n) {
      function e(e, t) {
        var r = n.call(this, e, t) || this;
        return (r.type = "object"), (r.properties = []), r;
      }
      return (
        __extends(e, n),
        Object.defineProperty(e.prototype, "children", {
          get: function() {
            return this.properties;
          },
          enumerable: !0,
          configurable: !0
        }),
        e
      );
    })(a);
  function m(e) {
    return "boolean" == typeof e ? (e ? {} : { not: {} }) : e;
  }
  (t.ObjectASTNodeImpl = A),
    (t.asSchema = m),
    ((f = t.EnumMatch || (t.EnumMatch = {}))[(f.Key = 0)] = "Key"),
    (f[(f.Enum = 1)] = "Enum");
  var l = (function() {
      function e(e, t) {
        void 0 === e && (e = -1),
          void 0 === t && (t = null),
          (this.focusOffset = e),
          (this.exclude = t),
          (this.schemas = []);
      }
      return (
        (e.prototype.add = function(e) {
          this.schemas.push(e);
        }),
        (e.prototype.merge = function(e) {
          var t;
          (t = this.schemas).push.apply(t, e.schemas);
        }),
        (e.prototype.include = function(e) {
          return (
            (-1 === this.focusOffset || p(e, this.focusOffset)) &&
            e !== this.exclude
          );
        }),
        (e.prototype.newSub = function() {
          return new e(-1, this.exclude);
        }),
        e
      );
    })(),
    g = (function() {
      function e() {}
      return (
        Object.defineProperty(e.prototype, "schemas", {
          get: function() {
            return [];
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.add = function(e) {}),
        (e.prototype.merge = function(e) {}),
        (e.prototype.include = function(e) {
          return !0;
        }),
        (e.prototype.newSub = function() {
          return this;
        }),
        (e.instance = new e()),
        e
      );
    })(),
    k = (function() {
      function e() {
        (this.problems = []),
          (this.propertiesMatches = 0),
          (this.propertiesValueMatches = 0),
          (this.primaryValueMatches = 0),
          (this.enumValueMatch = !1),
          (this.enumValues = null);
      }
      return (
        (e.prototype.hasProblems = function() {
          return !!this.problems.length;
        }),
        (e.prototype.mergeAll = function(e) {
          var t = this;
          e.forEach(function(e) {
            t.merge(e);
          });
        }),
        (e.prototype.merge = function(e) {
          this.problems = this.problems.concat(e.problems);
        }),
        (e.prototype.mergeEnumValues = function(e) {
          if (
            !this.enumValueMatch &&
            !e.enumValueMatch &&
            this.enumValues &&
            e.enumValues
          ) {
            this.enumValues = this.enumValues.concat(e.enumValues);
            for (var t = 0, r = this.problems; t < r.length; t++) {
              var n = r[t];
              n.code === v.EnumValueMismatch &&
                (n.message = y(
                  "enumWarning",
                  "Value is not accepted. Valid values: {0}.",
                  this.enumValues
                    .map(function(e) {
                      return JSON.stringify(e);
                    })
                    .join(", ")
                ));
            }
          }
        }),
        (e.prototype.mergePropertyMatch = function(e) {
          this.merge(e),
            this.propertiesMatches++,
            (e.enumValueMatch || (!e.hasProblems() && e.propertiesMatches)) &&
              this.propertiesValueMatches++,
            e.enumValueMatch &&
              e.enumValues &&
              1 === e.enumValues.length &&
              this.primaryValueMatches++;
        }),
        (e.prototype.compare = function(e) {
          var t = this.hasProblems();
          return t !== e.hasProblems()
            ? t
              ? -1
              : 1
            : this.enumValueMatch !== e.enumValueMatch
              ? e.enumValueMatch
                ? -1
                : 1
              : this.primaryValueMatches !== e.primaryValueMatches
                ? this.primaryValueMatches - e.primaryValueMatches
                : this.propertiesValueMatches !== e.propertiesValueMatches
                  ? this.propertiesValueMatches - e.propertiesValueMatches
                  : this.propertiesMatches - e.propertiesMatches;
        }),
        e
      );
    })();
  function I(e) {
    switch (e.type) {
      case "array":
        return e.items.map(I);
      case "object":
        for (
          var t = Object.create(null), r = 0, n = e.properties;
          r < n.length;
          r++
        ) {
          var o = n[r];
          t[o.keyNode.value] = I(o.valueNode);
        }
        return t;
      case "string":
      case "number":
      case "boolean":
        return e.value;
    }
    return null;
  }
  function p(e, t, r) {
    return (
      void 0 === r && (r = !1),
      (t >= e.offset && t < e.offset + e.length) ||
        (r && t === e.offset + e.length)
    );
  }
  (t.ValidationResult = k),
    (t.newJSONDocument = function(e, t) {
      return void 0 === t && (t = []), new P(e, [], [], t);
    }),
    (t.getNodeValue = I),
    (t.getNodePath = function e(t) {
      if (!t.parent) return [];
      var r = e(t.parent);
      if ("property" === t.parent.type) {
        var n = t.parent.keyNode.value;
        r.push(n);
      } else if ("array" === t.parent.type) {
        var o = t.parent.items.indexOf(t);
        -1 !== o && r.push(o);
      }
      return r;
    }),
    (t.contains = p);
  var P = (function() {
    function e(e, t, r, n) {
      void 0 === t && (t = []),
        void 0 === r && (r = []),
        void 0 === n && (n = []),
        (this.root = e),
        (this.syntaxErrors = t),
        (this.comments = r),
        (this.externalDiagnostic = n);
    }
    return (
      (e.prototype.getNodeFromOffset = function(o) {
        var i = function(e) {
          if (o >= e.offset && o < e.offset + e.length) {
            for (
              var t = e.children, r = 0;
              r < t.length && t[r].offset <= o;
              r++
            ) {
              var n = i(t[r]);
              if (n) return n;
            }
            return e;
          }
          return null;
        };
        return this.root && i(this.root);
      }),
      (e.prototype.getNodeFromOffsetEndInclusive = function(o) {
        var i = function(e) {
          if (o >= e.offset && o <= e.offset + e.length) {
            for (
              var t = e.children, r = 0;
              r < t.length && t[r].offset <= o;
              r++
            ) {
              var n = i(t[r]);
              if (n) return n;
            }
            return e;
          }
          return null;
        };
        return this.root && i(this.root);
      }),
      (e.prototype.visit = function(o) {
        if (this.root) {
          var i = function(e) {
            for (var t = o(e), r = e.children, n = 0; n < r.length && t; n++)
              t = i(r[n]);
            return t;
          };
          i(this.root);
        }
      }),
      (e.prototype.validate = function(e) {
        if (this.root && e) {
          var t = new k();
          return E(this.root, e, t, g.instance), t.problems;
        }
        return null;
      }),
      (e.prototype.getMatchingSchemas = function(e, t, r) {
        void 0 === t && (t = -1), void 0 === r && (r = null);
        var n = new l(t, r);
        return this.root && e && E(this.root, e, new k(), n), n.schemas;
      }),
      e
    );
  })();
  function E(f, l, p, h) {
    if (f && h.include(f)) {
      switch (f.type) {
        case "object":
          !(function(i, s, u, c) {
            var f = Object.create(null),
              r = [];
            i.properties.forEach(function(e) {
              var t = e.keyNode.value;
              (f[t] = e.valueNode), r.push(t);
            }),
              Array.isArray(s.required) &&
                s.required.forEach(function(e) {
                  if (!f[e]) {
                    var t =
                        i.parent &&
                        "property" === i.parent.type &&
                        i.parent.keyNode,
                      r = t
                        ? { offset: t.offset, length: t.length }
                        : { offset: i.offset, length: 1 };
                    u.problems.push({
                      location: r,
                      severity: b.Warning,
                      message: y(
                        "MissingRequiredPropWarning",
                        'Missing property "{0}".',
                        e
                      )
                    });
                  }
                });
            var l = function(e) {
              for (var t = r.indexOf(e); 0 <= t; )
                r.splice(t, 1), (t = r.indexOf(e));
            };
            s.properties &&
              Object.keys(s.properties).forEach(function(e) {
                l(e);
                var t = s.properties[e],
                  r = f[e];
                if (r)
                  if ("boolean" == typeof t)
                    if (t) u.propertiesMatches++, u.propertiesValueMatches++;
                    else {
                      var n = r.parent;
                      u.problems.push({
                        location: {
                          offset: n.keyNode.offset,
                          length: n.keyNode.length
                        },
                        severity: b.Warning,
                        message:
                          s.errorMessage ||
                          y(
                            "DisallowedExtraPropWarning",
                            "Property {0} is not allowed.",
                            e
                          )
                      });
                    }
                  else {
                    var o = new k();
                    E(r, t, o, c), u.mergePropertyMatch(o);
                  }
              });
            s.patternProperties &&
              Object.keys(s.patternProperties).forEach(function(i) {
                var a = new RegExp(i);
                r.slice(0).forEach(function(e) {
                  if (a.test(e)) {
                    l(e);
                    var t = f[e];
                    if (t) {
                      var r = s.patternProperties[i];
                      if ("boolean" == typeof r)
                        if (r)
                          u.propertiesMatches++, u.propertiesValueMatches++;
                        else {
                          var n = t.parent;
                          u.problems.push({
                            location: {
                              offset: n.keyNode.offset,
                              length: n.keyNode.length
                            },
                            severity: b.Warning,
                            message:
                              s.errorMessage ||
                              y(
                                "DisallowedExtraPropWarning",
                                "Property {0} is not allowed.",
                                e
                              )
                          });
                        }
                      else {
                        var o = new k();
                        E(t, r, o, c), u.mergePropertyMatch(o);
                      }
                    }
                  }
                });
              });
            "object" == typeof s.additionalProperties
              ? r.forEach(function(e) {
                  var t = f[e];
                  if (t) {
                    var r = new k();
                    E(t, s.additionalProperties, r, c), u.mergePropertyMatch(r);
                  }
                })
              : !1 === s.additionalProperties &&
                0 < r.length &&
                r.forEach(function(e) {
                  var t = f[e];
                  if (t) {
                    var r = t.parent;
                    u.problems.push({
                      location: {
                        offset: r.keyNode.offset,
                        length: r.keyNode.length
                      },
                      severity: b.Warning,
                      message:
                        s.errorMessage ||
                        y(
                          "DisallowedExtraPropWarning",
                          "Property {0} is not allowed.",
                          e
                        )
                    });
                  }
                });
            s.maxProperties &&
              i.properties.length > s.maxProperties &&
              u.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: b.Warning,
                message: y(
                  "MaxPropWarning",
                  "Object has more properties than limit of {0}.",
                  s.maxProperties
                )
              });
            s.minProperties &&
              i.properties.length < s.minProperties &&
              u.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: b.Warning,
                message: y(
                  "MinPropWarning",
                  "Object has fewer properties than the required number of {0}",
                  s.minProperties
                )
              });
            s.dependencies &&
              Object.keys(s.dependencies).forEach(function(t) {
                var e = f[t];
                if (e) {
                  var r = s.dependencies[t];
                  if (Array.isArray(r))
                    r.forEach(function(e) {
                      f[e]
                        ? u.propertiesValueMatches++
                        : u.problems.push({
                            location: { offset: i.offset, length: i.length },
                            severity: b.Warning,
                            message: y(
                              "RequiredDependentPropWarning",
                              "Object is missing property {0} required by property {1}.",
                              e,
                              t
                            )
                          });
                    });
                  else {
                    var n = m(r);
                    if (n) {
                      var o = new k();
                      E(i, n, o, c), u.mergePropertyMatch(o);
                    }
                  }
                }
              });
            var n = m(s.propertyNames);
            n &&
              i.properties.forEach(function(e) {
                var t = e.keyNode;
                t && E(t, n, u, g.instance);
              });
          })(f, l, p, h);
          break;
        case "array":
          !(function(i, e, a, s) {
            if (Array.isArray(e.items)) {
              var u = e.items;
              if (
                (u.forEach(function(e, t) {
                  var r = m(e),
                    n = new k(),
                    o = i.items[t];
                  o
                    ? (E(o, r, n, s), a.mergePropertyMatch(n))
                    : i.items.length >= u.length && a.propertiesValueMatches++;
                }),
                i.items.length > u.length)
              )
                if ("object" == typeof e.additionalItems)
                  for (var t = u.length; t < i.items.length; t++) {
                    var r = new k();
                    E(i.items[t], e.additionalItems, r, s),
                      a.mergePropertyMatch(r);
                  }
                else
                  !1 === e.additionalItems &&
                    a.problems.push({
                      location: { offset: i.offset, length: i.length },
                      severity: b.Warning,
                      message: y(
                        "additionalItemsWarning",
                        "Array has too many items according to schema. Expected {0} or fewer.",
                        u.length
                      )
                    });
            } else {
              var n = m(e.items);
              n &&
                i.items.forEach(function(e) {
                  var t = new k();
                  E(e, n, t, s), a.mergePropertyMatch(t);
                });
            }
            var o = m(e.contains);
            if (o) {
              var c = i.items.some(function(e) {
                var t = new k();
                return E(e, o, t, g.instance), !t.hasProblems();
              });
              c ||
                a.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: b.Warning,
                  message:
                    e.errorMessage ||
                    y(
                      "requiredItemMissingWarning",
                      "Array does not contain required item.",
                      e.minItems
                    )
                });
            }
            e.minItems &&
              i.items.length < e.minItems &&
              a.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: b.Warning,
                message: y(
                  "minItemsWarning",
                  "Array has too few items. Expected {0} or more.",
                  e.minItems
                )
              });
            e.maxItems &&
              i.items.length > e.maxItems &&
              a.problems.push({
                location: { offset: i.offset, length: i.length },
                severity: b.Warning,
                message: y(
                  "maxItemsWarning",
                  "Array has too many items. Expected {0} or fewer.",
                  e.minItems
                )
              });
            if (!0 === e.uniqueItems) {
              var f = I(i),
                l = f.some(function(e, t) {
                  return t !== f.lastIndexOf(e);
                });
              l &&
                a.problems.push({
                  location: { offset: i.offset, length: i.length },
                  severity: b.Warning,
                  message: y("uniqueItemsWarning", "Array has duplicate items.")
                });
            }
          })(f, l, p, h);
          break;
        case "string":
          !(function(e, t, r, n) {
            t.minLength &&
              e.value.length < t.minLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "minLengthWarning",
                  "String is shorter than the minimum length of {0}.",
                  t.minLength
                )
              });
            t.maxLength &&
              e.value.length > t.maxLength &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "maxLengthWarning",
                  "String is longer than the maximum length of {0}.",
                  t.maxLength
                )
              });
            if (t.pattern) {
              var o = new RegExp(t.pattern);
              o.test(e.value) ||
                r.problems.push({
                  location: { offset: e.offset, length: e.length },
                  severity: b.Warning,
                  message:
                    t.patternErrorMessage ||
                    t.errorMessage ||
                    y(
                      "patternWarning",
                      'String does not match the pattern of "{0}".',
                      t.pattern
                    )
                });
            }
            if (t.format)
              switch (t.format) {
                case "uri":
                case "uri-reference":
                  var i = void 0;
                  if (e.value)
                    try {
                      var a = s.default.parse(e.value);
                      a.scheme ||
                        "uri" !== t.format ||
                        (i = y(
                          "uriSchemeMissing",
                          "URI with a scheme is expected."
                        ));
                    } catch (e) {
                      i = e.message;
                    }
                  else i = y("uriEmpty", "URI expected.");
                  i &&
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: b.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        y("uriFormatWarning", "String is not a URI: {0}", i)
                    });
                  break;
                case "email":
                  e.value.match(c) ||
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: b.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        y(
                          "emailFormatWarning",
                          "String is not an e-mail address."
                        )
                    });
                  break;
                case "color-hex":
                  e.value.match(u) ||
                    r.problems.push({
                      location: { offset: e.offset, length: e.length },
                      severity: b.Warning,
                      message:
                        t.patternErrorMessage ||
                        t.errorMessage ||
                        y(
                          "colorHexFormatWarning",
                          "Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."
                        )
                    });
              }
          })(f, l, p);
          break;
        case "number":
          !(function(e, t, r, n) {
            var o = e.value;
            "number" == typeof t.multipleOf &&
              o % t.multipleOf != 0 &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "multipleOfWarning",
                  "Value is not divisible by {0}.",
                  t.multipleOf
                )
              });
            function i(e, t) {
              return "number" == typeof t
                ? t
                : "boolean" == typeof t && t
                  ? e
                  : void 0;
            }
            function a(e, t) {
              if ("boolean" != typeof t || !t) return e;
            }
            var s = i(t.minimum, t.exclusiveMinimum);
            "number" == typeof s &&
              o <= s &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "exclusiveMinimumWarning",
                  "Value is below the exclusive minimum of {0}.",
                  s
                )
              });
            var u = i(t.maximum, t.exclusiveMaximum);
            "number" == typeof u &&
              u <= o &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "exclusiveMaximumWarning",
                  "Value is above the exclusive maximum of {0}.",
                  u
                )
              });
            var c = a(t.minimum, t.exclusiveMinimum);
            "number" == typeof c &&
              o < c &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "minimumWarning",
                  "Value is below the minimum of {0}.",
                  c
                )
              });
            var f = a(t.maximum, t.exclusiveMaximum);
            "number" == typeof f &&
              f < o &&
              r.problems.push({
                location: { offset: e.offset, length: e.length },
                severity: b.Warning,
                message: y(
                  "maximumWarning",
                  "Value is above the maximum of {0}.",
                  f
                )
              });
          })(f, l, p);
          break;
        case "property":
          return E(f.valueNode, l, p, h);
      }
      !(function() {
        function e(e) {
          return (
            f.type === e ||
            ("integer" === e && "number" === f.type && f.isInteger)
          );
        }
        Array.isArray(l.type)
          ? l.type.some(e) ||
            p.problems.push({
              location: { offset: f.offset, length: f.length },
              severity: b.Warning,
              message:
                l.errorMessage ||
                y(
                  "typeArrayMismatchWarning",
                  "Incorrect type. Expected one of {0}.",
                  l.type.join(", ")
                )
            })
          : l.type &&
            (e(l.type) ||
              p.problems.push({
                location: { offset: f.offset, length: f.length },
                severity: b.Warning,
                message:
                  l.errorMessage ||
                  y(
                    "typeMismatchWarning",
                    'Incorrect type. Expected "{0}".',
                    l.type
                  )
              }));
        Array.isArray(l.allOf) &&
          l.allOf.forEach(function(e) {
            E(f, m(e), p, h);
          });
        var t = m(l.not);
        if (t) {
          var r = new k(),
            n = h.newSub();
          E(f, t, r, n),
            r.hasProblems() ||
              p.problems.push({
                location: { offset: f.offset, length: f.length },
                severity: b.Warning,
                message: y(
                  "notSchemaWarning",
                  "Matches a schema that is not allowed."
                )
              }),
            n.schemas.forEach(function(e) {
              (e.inverted = !e.inverted), h.add(e);
            });
        }
        var o = function(e, i) {
          var a = [],
            s = null;
          return (
            e.forEach(function(e) {
              var t = m(e),
                r = new k(),
                n = h.newSub();
              if ((E(f, t, r, n), r.hasProblems() || a.push(t), s))
                if (i || r.hasProblems() || s.validationResult.hasProblems()) {
                  var o = r.compare(s.validationResult);
                  0 < o
                    ? (s = {
                        schema: t,
                        validationResult: r,
                        matchingSchemas: n
                      })
                    : 0 === o &&
                      (s.matchingSchemas.merge(n),
                      s.validationResult.mergeEnumValues(r));
                } else
                  s.matchingSchemas.merge(n),
                    (s.validationResult.propertiesMatches +=
                      r.propertiesMatches),
                    (s.validationResult.propertiesValueMatches +=
                      r.propertiesValueMatches);
              else s = { schema: t, validationResult: r, matchingSchemas: n };
            }),
            1 < a.length &&
              i &&
              p.problems.push({
                location: { offset: f.offset, length: 1 },
                severity: b.Warning,
                message: y(
                  "oneOfWarning",
                  "Matches multiple schemas when only one must validate."
                )
              }),
            null !== s &&
              (p.merge(s.validationResult),
              (p.propertiesMatches += s.validationResult.propertiesMatches),
              (p.propertiesValueMatches +=
                s.validationResult.propertiesValueMatches),
              h.merge(s.matchingSchemas)),
            a.length
          );
        };
        Array.isArray(l.anyOf) && o(l.anyOf, !1);
        Array.isArray(l.oneOf) && o(l.oneOf, !0);
        if (Array.isArray(l.enum)) {
          for (var i = I(f), a = !1, s = 0, u = l.enum; s < u.length; s++) {
            var c = u[s];
            if (d.equals(i, c)) {
              a = !0;
              break;
            }
          }
          (p.enumValues = l.enum),
            (p.enumValueMatch = a) ||
              p.problems.push({
                location: { offset: f.offset, length: f.length },
                severity: b.Warning,
                code: v.EnumValueMismatch,
                message:
                  l.errorMessage ||
                  y(
                    "enumWarning",
                    "Value is not accepted. Valid values: {0}.",
                    l.enum
                      .map(function(e) {
                        return JSON.stringify(e);
                      })
                      .join(", ")
                  )
              });
        }
        if (l.const) {
          var i = I(f);
          d.equals(i, l.const)
            ? (p.enumValueMatch = !0)
            : (p.problems.push({
                location: { offset: f.offset, length: f.length },
                severity: b.Warning,
                code: v.EnumValueMismatch,
                message:
                  l.errorMessage ||
                  y(
                    "constWarning",
                    "Value must be {0}.",
                    JSON.stringify(l.const)
                  )
              }),
              (p.enumValueMatch = !1)),
            (p.enumValues = [l.const]);
        }
        l.deprecationMessage &&
          f.parent &&
          p.problems.push({
            location: { offset: f.parent.offset, length: f.parent.length },
            severity: b.Warning,
            message: l.deprecationMessage
          });
      })(),
        h.add({ node: f, schema: l });
    }
  }
  (t.JSONDocument = P),
    (t.parse = function(s, e) {
      var u = [],
        c = s.getText(),
        f = o.createScanner(c, !1),
        t = e && e.collectComments ? [] : void 0;
      function l() {
        for (;;) {
          var e = f.scan();
          switch ((r(), e)) {
            case 12:
            case 13:
              Array.isArray(t) &&
                t.push({
                  offset: f.getTokenOffset(),
                  length: f.getTokenLength()
                });
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function p(e, t, r) {
        (0 !== u.length && u[u.length - 1].location.offset === r.offset) ||
          u.push({ message: e, location: r, code: t, severity: b.Error });
      }
      function h(e, t, r, n, o) {
        void 0 === r && (r = null),
          void 0 === n && (n = []),
          void 0 === o && (o = []);
        var i = f.getTokenOffset(),
          a = f.getTokenOffset() + f.getTokenLength();
        if (i === a && 0 < i) {
          for (i--; 0 < i && /\s/.test(c.charAt(i)); ) i--;
          a = i + 1;
        }
        if (
          (p(e, t, { offset: i, length: a - i }),
          r && d(r, !1),
          0 < n.length + o.length)
        )
          for (var s = f.getToken(); 17 !== s; ) {
            if (-1 !== n.indexOf(s)) {
              l();
              break;
            }
            if (-1 !== o.indexOf(s)) break;
            s = l();
          }
        return r;
      }
      function r() {
        switch (f.getTokenError()) {
          case 4:
            return (
              h(
                y("InvalidUnicode", "Invalid unicode sequence in string."),
                v.InvalidUnicode
              ),
              !0
            );
          case 5:
            return (
              h(
                y(
                  "InvalidEscapeCharacter",
                  "Invalid escape character in string."
                ),
                v.InvalidEscapeCharacter
              ),
              !0
            );
          case 3:
            return (
              h(
                y("UnexpectedEndOfNumber", "Unexpected end of number."),
                v.UnexpectedEndOfNumber
              ),
              !0
            );
          case 1:
            return (
              h(
                y("UnexpectedEndOfComment", "Unexpected end of comment."),
                v.UnexpectedEndOfComment
              ),
              !0
            );
          case 2:
            return (
              h(
                y("UnexpectedEndOfString", "Unexpected end of string."),
                v.UnexpectedEndOfString
              ),
              !0
            );
          case 6:
            return (
              h(
                y(
                  "InvalidCharacter",
                  "Invalid characters in string. Control characters must be escaped."
                ),
                v.InvalidCharacter
              ),
              !0
            );
        }
        return !1;
      }
      function d(e, t) {
        return (
          (e.length = f.getTokenOffset() + f.getTokenLength() - e.offset),
          t && l(),
          e
        );
      }
      function a(e, t) {
        var r = new C(e, f.getTokenOffset()),
          n = m(r);
        if (!n) {
          if (16 !== f.getToken()) return null;
          h(
            y("DoubleQuotesExpected", "Property keys must be doublequoted"),
            v.Undefined
          );
          var o = new T(r, f.getTokenOffset(), f.getTokenLength());
          (o.value = f.getTokenValue()), (n = o), l();
        }
        var i = t[(r.keyNode = n).value];
        if (
          (i
            ? (u.push({
                location: {
                  offset: r.keyNode.offset,
                  length: r.keyNode.length
                },
                message: y("DuplicateKeyWarning", "Duplicate object key"),
                code: v.Undefined,
                severity: b.Warning
              }),
              "object" == typeof i &&
                u.push({
                  location: {
                    offset: i.keyNode.offset,
                    length: i.keyNode.length
                  },
                  message: y("DuplicateKeyWarning", "Duplicate object key"),
                  code: v.Undefined,
                  severity: b.Warning
                }),
              (t[n.value] = !0))
            : (t[n.value] = r),
          6 === f.getToken())
        )
          (r.colonOffset = f.getTokenOffset()), l();
        else if (
          (h(y("ColonExpected", "Colon expected"), v.ColonExpected),
          10 === f.getToken() &&
            s.positionAt(n.offset + n.length).line <
              s.positionAt(f.getTokenOffset()).line)
        )
          return (r.length = n.length), r;
        var a = g(r, n.value);
        return a
          ? ((r.valueNode = a), (r.length = a.offset + a.length - r.offset), r)
          : h(
              y("ValueExpected", "Value expected"),
              v.ValueExpected,
              r,
              [],
              [2, 5]
            );
      }
      function m(e) {
        if (10 !== f.getToken()) return null;
        var t = new T(e, f.getTokenOffset());
        return (t.value = f.getTokenValue()), d(t, !0);
      }
      function g(e, t) {
        return (
          (function(e) {
            if (3 !== f.getToken()) return null;
            var t = new j(e, f.getTokenOffset());
            l();
            for (var r = !1; 4 !== f.getToken() && 17 !== f.getToken(); ) {
              if (5 === f.getToken()) {
                r || h(y("ValueExpected", "Value expected"), v.ValueExpected);
                var n = f.getTokenOffset();
                if ((l(), 4 === f.getToken())) {
                  r &&
                    p(y("TrailingComma", "Trailing comma"), v.TrailingComma, {
                      offset: n,
                      length: 1
                    });
                  continue;
                }
              } else
                r && h(y("ExpectedComma", "Expected comma"), v.CommaExpected);
              var o = g(t, 0);
              o
                ? t.items.push(o)
                : h(
                    y("PropertyExpected", "Value expected"),
                    v.ValueExpected,
                    null,
                    [],
                    [4, 5]
                  ),
                (r = !0);
            }
            return 4 !== f.getToken()
              ? h(
                  y(
                    "ExpectedCloseBracket",
                    "Expected comma or closing bracket"
                  ),
                  v.CommaOrCloseBacketExpected,
                  t
                )
              : d(t, !0);
          })(e) ||
          (function(e) {
            if (1 !== f.getToken()) return null;
            var t = new A(e, f.getTokenOffset()),
              r = Object.create(null);
            l();
            for (var n = !1; 2 !== f.getToken() && 17 !== f.getToken(); ) {
              if (5 === f.getToken()) {
                n ||
                  h(
                    y("PropertyExpected", "Property expected"),
                    v.PropertyExpected
                  );
                var o = f.getTokenOffset();
                if ((l(), 2 === f.getToken())) {
                  n &&
                    p(y("TrailingComma", "Trailing comma"), v.TrailingComma, {
                      offset: o,
                      length: 1
                    });
                  continue;
                }
              } else
                n && h(y("ExpectedComma", "Expected comma"), v.CommaExpected);
              var i = a(t, r);
              i
                ? t.properties.push(i)
                : h(
                    y("PropertyExpected", "Property expected"),
                    v.PropertyExpected,
                    null,
                    [],
                    [2, 5]
                  ),
                (n = !0);
            }
            return 2 !== f.getToken()
              ? h(
                  y("ExpectedCloseBrace", "Expected comma or closing brace"),
                  v.CommaOrCloseBraceExpected,
                  t
                )
              : d(t, !0);
          })(e) ||
          m(e) ||
          (function(e) {
            if (11 !== f.getToken()) return null;
            var t = new O(e, f.getTokenOffset());
            if (0 === f.getTokenError()) {
              var r = f.getTokenValue();
              try {
                var n = JSON.parse(r);
                if ("number" != typeof n)
                  return h(
                    y("InvalidNumberFormat", "Invalid number format."),
                    v.Undefined,
                    t
                  );
                t.value = n;
              } catch (e) {
                return h(
                  y("InvalidNumberFormat", "Invalid number format."),
                  v.Undefined,
                  t
                );
              }
              t.isInteger = -1 === r.indexOf(".");
            }
            return d(t, !0);
          })(e) ||
          (function(e) {
            switch (f.getToken()) {
              case 7:
                return d(new x(e, f.getTokenOffset()), !0);
              case 8:
                return d(new S(e, !0, f.getTokenOffset()), !0);
              case 9:
                return d(new S(e, !1, f.getTokenOffset()), !0);
              default:
                return null;
            }
          })(e)
        );
      }
      var n = null;
      return (
        17 !== l() &&
          ((n = g(null))
            ? 17 !== f.getToken() &&
              h(y("End of file expected", "End of file expected."), v.Undefined)
            : h(
                y(
                  "Invalid symbol",
                  "Expected a JSON object, array or literal."
                ),
                v.Undefined
              )),
        new P(n, u, t)
      );
    });
}),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/utils/json", [
          "require",
          "exports"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.stringifyObject = function e(t, r, n) {
        if (null !== t && "object" == typeof t) {
          var o = r + "\t";
          if (Array.isArray(t)) {
            if (0 === t.length) return "[]";
            for (var i = "[\n", a = 0; a < t.length; a++)
              (i += o + e(t[a], o, n)),
                a < t.length - 1 && (i += ","),
                (i += "\n");
            return (i += r + "]");
          }
          var s = Object.keys(t);
          if (0 === s.length) return "{}";
          for (i = "{\n", a = 0; a < s.length; a++) {
            var u = s[a];
            (i += o + JSON.stringify(u) + ": " + e(t[u], o, n)),
              a < s.length - 1 && (i += ","),
              (i += "\n");
          }
          return (i += r + "}");
        }
        return n(t);
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/utils/strings", [
          "require",
          "exports"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.startsWith = function(e, t) {
        if (e.length < t.length) return !1;
        for (var r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }),
      (t.endsWith = function(e, t) {
        var r = e.length - t.length;
        return 0 < r ? e.lastIndexOf(t) === r : 0 === r && e === t;
      }),
      (t.convertSimple2RegExpPattern = function(e) {
        return e
          .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
          .replace(/[\*]/g, ".*");
      }),
      (t.repeat = function(e, t) {
        for (var r = ""; 0 < t; )
          1 == (1 & t) && (r += e), (e += e), (t >>>= 1);
        return r;
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/jsonCompletion", [
          "require",
          "exports",
          "../parser/jsonParser",
          "jsonc-parser",
          "../utils/json",
          "../utils/strings",
          "vscode-languageserver-types",
          "vscode-nls"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var b = e("../parser/jsonParser"),
      s = e("jsonc-parser"),
      r = e("../utils/json"),
      u = e("../utils/strings"),
      x = e("vscode-languageserver-types"),
      n = e("vscode-nls").loadMessageBundle(),
      o = (function() {
        function e(e, t, r) {
          void 0 === t && (t = []),
            (this.templateVarIdCounter = 0),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = r || Promise);
        }
        return (
          (e.prototype.doResolve = function(e) {
            for (var t = this.contributions.length - 1; 0 <= t; t--)
              if (this.contributions[t].resolveCompletion) {
                var r = this.contributions[t].resolveCompletion(e);
                if (r) return r;
              }
            return this.promise.resolve(e);
          }),
          (e.prototype.doComplete = function(c, e, f) {
            var l = this,
              p = { items: [], isIncomplete: !1 },
              h = c.offsetAt(e),
              d = f.getNodeFromOffsetEndInclusive(h);
            if (this.isInComment(c, d ? d.offset : 0, h))
              return Promise.resolve(p);
            var m = this.getCurrentWord(c, h),
              g = null;
            if (
              !d ||
              ("string" !== d.type &&
                "number" !== d.type &&
                "boolean" !== d.type &&
                "null" !== d.type)
            ) {
              var t = h - m.length;
              0 < t && '"' === c.getText()[t - 1] && t--,
                (g = x.Range.create(c.positionAt(t), e));
            } else
              g = x.Range.create(
                c.positionAt(d.offset),
                c.positionAt(d.offset + d.length)
              );
            var v = {},
              y = {
                add: function(e) {
                  var t = v[e.label];
                  t
                    ? t.documentation || (t.documentation = e.documentation)
                    : ((v[e.label] = e),
                      g && (e.textEdit = x.TextEdit.replace(g, e.insertText)),
                      p.items.push(e));
                },
                setAsIncomplete: function() {
                  p.isIncomplete = !0;
                },
                error: function(e) {
                  console.error(e);
                },
                log: function(e) {
                  console.log(e);
                },
                getNumberOfProposals: function() {
                  return p.items.length;
                }
              };
            return this.schemaService
              .getSchemaForResource(c.uri, f)
              .then(function(e) {
                var r = [],
                  n = !0,
                  t = "",
                  o = null;
                if (d && "string" === d.type) {
                  var i = d.parent;
                  i &&
                    "property" === i.type &&
                    i.keyNode === d &&
                    ((n = !i.valueNode),
                    (o = i),
                    (t = c.getText().substr(d.offset + 1, d.length - 2)),
                    i && (d = i.parent));
                }
                if (d && "object" === d.type) {
                  if (d.offset === h) return p;
                  d.properties.forEach(function(e) {
                    (o && o === e) ||
                      (v[e.keyNode.value] = x.CompletionItem.create("__"));
                  });
                  var a = "";
                  n && (a = l.evaluateSeparatorAfter(c, c.offsetAt(g.end))),
                    e
                      ? l.getPropertyCompletions(e, f, d, n, a, y)
                      : l.getSchemaLessPropertyCompletions(f, d, t, y);
                  var s = b.getNodePath(d);
                  l.contributions.forEach(function(e) {
                    var t = e.collectPropertyCompletions(
                      c.uri,
                      s,
                      m,
                      n,
                      "" === a,
                      y
                    );
                    t && r.push(t);
                  }),
                    !e &&
                      0 < m.length &&
                      '"' !== c.getText().charAt(h - m.length - 1) &&
                      y.add({
                        kind: x.CompletionItemKind.Property,
                        label: l.getLabelForValue(m),
                        insertText: l.getInsertTextForProperty(m, null, !1, a),
                        insertTextFormat: x.InsertTextFormat.Snippet,
                        documentation: ""
                      });
                }
                var u = {};
                return (
                  e
                    ? l.getValueCompletions(e, f, d, h, c, y, u)
                    : l.getSchemaLessValueCompletions(f, d, h, c, y),
                  0 < l.contributions.length &&
                    l.getContributedValueCompletions(f, d, h, c, y, r),
                  l.promise.all(r).then(function() {
                    if (0 === y.getNumberOfProposals()) {
                      var e = h;
                      !d ||
                        ("string" !== d.type &&
                          "number" !== d.type &&
                          "boolean" !== d.type &&
                          "null" !== d.type) ||
                        (e = d.offset + d.length);
                      var t = l.evaluateSeparatorAfter(c, e);
                      l.addFillerValueCompletions(u, t, y);
                    }
                    return p;
                  })
                );
              });
          }),
          (e.prototype.getPropertyCompletions = function(e, t, r, o, i, a) {
            var s = this;
            t.getMatchingSchemas(e.schema, r.offset).forEach(function(e) {
              if (e.node === r && !e.inverted) {
                var n = e.schema.properties;
                n &&
                  Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    if (
                      "object" == typeof t &&
                      !t.deprecationMessage &&
                      !t.doNotSuggest
                    ) {
                      var r = {
                        kind: x.CompletionItemKind.Property,
                        label: e,
                        insertText: s.getInsertTextForProperty(e, t, o, i),
                        insertTextFormat: x.InsertTextFormat.Snippet,
                        filterText: s.getFilterTextForValue(e),
                        documentation: t.description || ""
                      };
                      u.endsWith(r.insertText, "$1" + i) &&
                        (r.command = {
                          title: "Suggest",
                          command: "editor.action.triggerSuggest"
                        }),
                        a.add(r);
                    }
                  });
              }
            });
          }),
          (e.prototype.getSchemaLessPropertyCompletions = function(e, t, r, n) {
            var o = this,
              i = function(e) {
                e.properties.forEach(function(e) {
                  var t = e.keyNode.value;
                  n.add({
                    kind: x.CompletionItemKind.Property,
                    label: t,
                    insertText: o.getInsertTextForValue(t, ""),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    filterText: o.getFilterTextForValue(t),
                    documentation: ""
                  });
                });
              };
            if (t.parent)
              if ("property" === t.parent.type) {
                var a = t.parent.keyNode.value;
                e.visit(function(e) {
                  return (
                    "property" === e.type &&
                      e !== t.parent &&
                      e.keyNode.value === a &&
                      e.valueNode &&
                      "object" === e.valueNode.type &&
                      i(e.valueNode),
                    !0
                  );
                });
              } else
                "array" === t.parent.type &&
                  t.parent.items.forEach(function(e) {
                    "object" === e.type && e !== t && i(e);
                  });
            else
              "object" === t.type &&
                n.add({
                  kind: x.CompletionItemKind.Property,
                  label: "$schema",
                  insertText: this.getInsertTextForProperty(
                    "$schema",
                    null,
                    !0,
                    ""
                  ),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: "",
                  filterText: this.getFilterTextForValue("$schema")
                });
          }),
          (e.prototype.getSchemaLessValueCompletions = function(e, t, r, n, o) {
            var i = this,
              a = r;
            if (
              (!t ||
                ("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                ((a = t.offset + t.length), (t = t.parent)),
              !t)
            )
              return (
                o.add({
                  kind: this.getSuggestionKind("object"),
                  label: "Empty object",
                  insertText: this.getInsertTextForValue({}, ""),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: ""
                }),
                void o.add({
                  kind: this.getSuggestionKind("array"),
                  label: "Empty array",
                  insertText: this.getInsertTextForValue([], ""),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: ""
                })
              );
            var s = this.evaluateSeparatorAfter(n, a),
              u = function(e) {
                b.contains(e.parent, r, !0) ||
                  o.add({
                    kind: i.getSuggestionKind(e.type),
                    label: i.getLabelTextForMatchingNode(e, n),
                    insertText: i.getInsertTextForMatchingNode(e, n, s),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    documentation: ""
                  }),
                  "boolean" === e.type &&
                    i.addBooleanValueCompletion(!e.value, s, o);
              };
            if ("property" === t.type && r > t.colonOffset) {
              var c = t.valueNode;
              if (
                c &&
                (r > c.offset + c.length ||
                  "object" === c.type ||
                  "array" === c.type)
              )
                return;
              var f = t.keyNode.value;
              e.visit(function(e) {
                return (
                  "property" === e.type &&
                    e.keyNode.value === f &&
                    e.valueNode &&
                    u(e.valueNode),
                  !0
                );
              }),
                "$schema" === f &&
                  t.parent &&
                  !t.parent.parent &&
                  this.addDollarSchemaCompletions(s, o);
            }
            if ("array" === t.type)
              if (t.parent && "property" === t.parent.type) {
                var l = t.parent.keyNode.value;
                e.visit(function(e) {
                  var t = e;
                  return (
                    "property" === e.type &&
                      t.keyNode.value === l &&
                      t.valueNode &&
                      "array" === t.valueNode.type &&
                      t.valueNode.items.forEach(u),
                    !0
                  );
                });
              } else t.items.forEach(u);
          }),
          (e.prototype.getValueCompletions = function(e, t, n, o, i, a, s) {
            var u = this,
              r = o,
              c = null,
              f = null;
            if (
              (!n ||
                ("string" !== n.type &&
                  "number" !== n.type &&
                  "boolean" !== n.type &&
                  "null" !== n.type) ||
                ((r = n.offset + n.length), (n = (f = n).parent)),
              n)
            ) {
              if ("property" === n.type && o > n.colonOffset) {
                var l = n.valueNode;
                if (l && o > l.offset + l.length) return;
                (c = n.keyNode.value), (n = n.parent);
              }
              if (n && (null !== c || "array" === n.type)) {
                var p = this.evaluateSeparatorAfter(i, r);
                t
                  .getMatchingSchemas(e.schema, n.offset, f)
                  .forEach(function(e) {
                    if (e.node === n && !e.inverted && e.schema) {
                      if ("array" === n.type && e.schema.items)
                        if (Array.isArray(e.schema.items)) {
                          var t = u.findItemAtOffset(n, i, o);
                          t < e.schema.items.length &&
                            u.addSchemaValueCompletions(
                              e.schema.items[t],
                              p,
                              a,
                              s
                            );
                        } else
                          u.addSchemaValueCompletions(e.schema.items, p, a, s);
                      if (e.schema.properties) {
                        var r = e.schema.properties[c];
                        r && u.addSchemaValueCompletions(r, p, a, s);
                      }
                    }
                  }),
                  "$schema" !== c ||
                    n.parent ||
                    this.addDollarSchemaCompletions(p, a),
                  s.boolean &&
                    (this.addBooleanValueCompletion(!0, p, a),
                    this.addBooleanValueCompletion(!1, p, a)),
                  s.null && this.addNullValueCompletion(p, a);
              }
            } else this.addSchemaValueCompletions(e.schema, "", a, s);
          }),
          (e.prototype.getContributedValueCompletions = function(
            e,
            t,
            r,
            n,
            o,
            i
          ) {
            if (t) {
              if (
                (("string" !== t.type &&
                  "number" !== t.type &&
                  "boolean" !== t.type &&
                  "null" !== t.type) ||
                  (t = t.parent),
                "property" === t.type && r > t.colonOffset)
              ) {
                var a = t.keyNode.value,
                  s = t.valueNode;
                if (!s || r <= s.offset + s.length) {
                  var u = b.getNodePath(t.parent);
                  this.contributions.forEach(function(e) {
                    var t = e.collectValueCompletions(n.uri, u, a, o);
                    t && i.push(t);
                  });
                }
              }
            } else
              this.contributions.forEach(function(e) {
                var t = e.collectDefaultCompletions(n.uri, o);
                t && i.push(t);
              });
          }),
          (e.prototype.addSchemaValueCompletions = function(e, t, r, n) {
            var o = this;
            "object" == typeof e &&
              (this.addEnumValueCompletions(e, t, r),
              this.addDefaultValueCompletions(e, t, r),
              this.collectTypes(e, n),
              Array.isArray(e.allOf) &&
                e.allOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }),
              Array.isArray(e.anyOf) &&
                e.anyOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }),
              Array.isArray(e.oneOf) &&
                e.oneOf.forEach(function(e) {
                  return o.addSchemaValueCompletions(e, t, r, n);
                }));
          }),
          (e.prototype.addDefaultValueCompletions = function(f, l, p, h) {
            var d = this;
            void 0 === h && (h = 0);
            var m = !1;
            if (f.default) {
              for (var e = f.type, t = f.default, r = h; 0 < r; r--)
                (t = [t]), (e = "array");
              p.add({
                kind: this.getSuggestionKind(e),
                label: this.getLabelForValue(t),
                insertText: this.getInsertTextForValue(t, l),
                insertTextFormat: x.InsertTextFormat.Snippet,
                detail: n("json.suggest.default", "Default value")
              }),
                (m = !0);
            }
            Array.isArray(f.defaultSnippets) &&
              f.defaultSnippets.forEach(function(e) {
                var t,
                  r,
                  n = f.type,
                  o = e.body,
                  i = e.label;
                if (void 0 !== o) {
                  f.type;
                  for (var a = h; 0 < a; a--) (o = [o]), "array";
                  (t = d.getInsertTextForSnippetValue(o, l)),
                    (r = d.getFilterTextForSnippetValue(o)),
                    (i = i || d.getLabelForSnippetValue(o));
                } else if ("string" == typeof e.bodyText) {
                  var s = "",
                    u = "",
                    c = "";
                  for (a = h; 0 < a; a--)
                    (s = s + c + "[\n"),
                      (u = u + "\n" + c + "]"),
                      (c += "\t"),
                      (n = "array");
                  (t = s + c + e.bodyText.split("\n").join("\n" + c) + u + l),
                    (i = i || t),
                    (r = t.replace(/[\n]/g, ""));
                }
                p.add({
                  kind: d.getSuggestionKind(n),
                  label: i,
                  documentation: e.description,
                  insertText: t,
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  filterText: r
                }),
                  (m = !0);
              }),
              m ||
                "object" != typeof f.items ||
                Array.isArray(f.items) ||
                this.addDefaultValueCompletions(f.items, l, p, h + 1);
          }),
          (e.prototype.addEnumValueCompletions = function(e, t, r) {
            if (Array.isArray(e.enum))
              for (var n = 0, o = e.enum.length; n < o; n++) {
                var i = e.enum[n],
                  a = e.description;
                e.enumDescriptions &&
                  n < e.enumDescriptions.length &&
                  (a = e.enumDescriptions[n]),
                  r.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(i),
                    insertText: this.getInsertTextForValue(i, t),
                    insertTextFormat: x.InsertTextFormat.Snippet,
                    documentation: a
                  });
              }
          }),
          (e.prototype.collectTypes = function(e, t) {
            if (!Array.isArray(e.enum)) {
              var r = e.type;
              Array.isArray(r)
                ? r.forEach(function(e) {
                    return (t[e] = !0);
                  })
                : (t[r] = !0);
            }
          }),
          (e.prototype.addFillerValueCompletions = function(e, t, r) {
            e.object &&
              r.add({
                kind: this.getSuggestionKind("object"),
                label: "{}",
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: x.InsertTextFormat.Snippet,
                detail: n("defaults.object", "New object"),
                documentation: ""
              }),
              e.array &&
                r.add({
                  kind: this.getSuggestionKind("array"),
                  label: "[]",
                  insertText: this.getInsertTextForGuessedValue([], t),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  detail: n("defaults.array", "New array"),
                  documentation: ""
                });
          }),
          (e.prototype.addBooleanValueCompletion = function(e, t, r) {
            r.add({
              kind: this.getSuggestionKind("boolean"),
              label: e ? "true" : "false",
              insertText: this.getInsertTextForValue(e, t),
              insertTextFormat: x.InsertTextFormat.Snippet,
              documentation: ""
            });
          }),
          (e.prototype.addNullValueCompletion = function(e, t) {
            t.add({
              kind: this.getSuggestionKind("null"),
              label: "null",
              insertText: "null" + e,
              insertTextFormat: x.InsertTextFormat.Snippet,
              documentation: ""
            });
          }),
          (e.prototype.addDollarSchemaCompletions = function(t, r) {
            var n = this;
            this.schemaService
              .getRegisteredSchemaIds(function(e) {
                return "http" === e || "https" === e;
              })
              .forEach(function(e) {
                return r.add({
                  kind: x.CompletionItemKind.Module,
                  label: n.getLabelForValue(e),
                  filterText: n.getFilterTextForValue(e),
                  insertText: n.getInsertTextForValue(e, t),
                  insertTextFormat: x.InsertTextFormat.Snippet,
                  documentation: ""
                });
              });
          }),
          (e.prototype.getLabelForValue = function(e) {
            var t = JSON.stringify(e);
            return 57 < t.length ? t.substr(0, 57).trim() + "..." : t;
          }),
          (e.prototype.getFilterTextForValue = function(e) {
            return JSON.stringify(e);
          }),
          (e.prototype.getFilterTextForSnippetValue = function(e) {
            return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
          }),
          (e.prototype.getLabelForSnippetValue = function(e) {
            var t = JSON.stringify(e);
            return 57 < (t = t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1")).length
              ? t.substr(0, 57).trim() + "..."
              : t;
          }),
          (e.prototype.getInsertTextForPlainText = function(e) {
            return e.replace(/[\\\$\}]/g, "\\$&");
          }),
          (e.prototype.getInsertTextForValue = function(e, t) {
            var r = JSON.stringify(e, null, "\t");
            return "{}" === r
              ? "{\n\t$1\n}" + t
              : "[]" === r
                ? "[\n\t$1\n]" + t
                : this.getInsertTextForPlainText(r + t);
          }),
          (e.prototype.getInsertTextForSnippetValue = function(e, t) {
            return (
              r.stringifyObject(e, "", function(e) {
                return "string" == typeof e && "^" === e[0]
                  ? e.substr(1)
                  : JSON.stringify(e);
              }) + t
            );
          }),
          (e.prototype.getInsertTextForGuessedValue = function(e, t) {
            switch (typeof e) {
              case "object":
                return null === e
                  ? "${1:null}" + t
                  : this.getInsertTextForValue(e, t);
              case "string":
                var r = JSON.stringify(e);
                return (
                  (r = r.substr(1, r.length - 2)),
                  '"${1:' + (r = this.getInsertTextForPlainText(r)) + '}"' + t
                );
              case "number":
              case "boolean":
                return "${1:" + JSON.stringify(e) + "}" + t;
            }
            return this.getInsertTextForValue(e, t);
          }),
          (e.prototype.getSuggestionKind = function(e) {
            if (Array.isArray(e)) {
              var t = e;
              e = 0 < t.length ? t[0] : null;
            }
            if (!e) return x.CompletionItemKind.Value;
            switch (e) {
              case "string":
                return x.CompletionItemKind.Value;
              case "object":
                return x.CompletionItemKind.Module;
              case "property":
                return x.CompletionItemKind.Property;
              default:
                return x.CompletionItemKind.Value;
            }
          }),
          (e.prototype.getLabelTextForMatchingNode = function(e, t) {
            switch (e.type) {
              case "array":
                return "[]";
              case "object":
                return "{}";
              default:
                return t.getText().substr(e.offset, e.length);
            }
          }),
          (e.prototype.getInsertTextForMatchingNode = function(e, t, r) {
            switch (e.type) {
              case "array":
                return this.getInsertTextForValue([], r);
              case "object":
                return this.getInsertTextForValue({}, r);
              default:
                var n = t.getText().substr(e.offset, e.length) + r;
                return this.getInsertTextForPlainText(n);
            }
          }),
          (e.prototype.getInsertTextForProperty = function(e, t, r, n) {
            var o = this.getInsertTextForValue(e, "");
            if (!r) return o;
            var i,
              a = o + ": ",
              s = 0;
            if (t) {
              if (Array.isArray(t.defaultSnippets)) {
                if (1 === t.defaultSnippets.length) {
                  var u = t.defaultSnippets[0].body;
                  void 0 !== u &&
                    (i = this.getInsertTextForSnippetValue(u, ""));
                }
                s += t.defaultSnippets.length;
              }
              if (
                (t.enum &&
                  (i ||
                    1 !== t.enum.length ||
                    (i = this.getInsertTextForGuessedValue(t.enum[0], "")),
                  (s += t.enum.length)),
                void 0 !== t.default &&
                  (i || (i = this.getInsertTextForGuessedValue(t.default, "")),
                  s++),
                0 === s)
              ) {
                var c = Array.isArray(t.type) ? t.type[0] : t.type;
                switch (
                  (c ||
                    (t.properties ? (c = "object") : t.items && (c = "array")),
                  c)
                ) {
                  case "boolean":
                    i = "$1";
                    break;
                  case "string":
                    i = '"$1"';
                    break;
                  case "object":
                    i = "{\n\t$1\n}";
                    break;
                  case "array":
                    i = "[\n\t$1\n]";
                    break;
                  case "number":
                  case "integer":
                    i = "${1:0}";
                    break;
                  case "null":
                    i = "${1:null}";
                    break;
                  default:
                    return o;
                }
              }
            }
            return (!i || 1 < s) && (i = "$1"), a + i + n;
          }),
          (e.prototype.getCurrentWord = function(e, t) {
            for (
              var r = t - 1, n = e.getText();
              0 <= r && -1 === ' \t\n\r\v":{[,]}'.indexOf(n.charAt(r));

            )
              r--;
            return n.substring(r + 1, t);
          }),
          (e.prototype.evaluateSeparatorAfter = function(e, t) {
            var r = s.createScanner(e.getText(), !0);
            switch ((r.setPosition(t), r.scan())) {
              case 5:
              case 2:
              case 4:
              case 17:
                return "";
              default:
                return ",";
            }
          }),
          (e.prototype.findItemAtOffset = function(e, t, r) {
            for (
              var n = s.createScanner(t.getText(), !0),
                o = e.items,
                i = o.length - 1;
              0 <= i;
              i--
            ) {
              var a = o[i];
              if (r > a.offset + a.length)
                return (
                  n.setPosition(a.offset + a.length),
                  5 === n.scan() && r >= n.getTokenOffset() + n.getTokenLength()
                    ? i + 1
                    : i
                );
              if (r >= a.offset) return i;
            }
            return 0;
          }),
          (e.prototype.isInComment = function(e, t, r) {
            var n = s.createScanner(e.getText(), !1);
            n.setPosition(t);
            for (
              var o = n.scan();
              17 !== o && n.getTokenOffset() + n.getTokenLength() < r;

            )
              o = n.scan();
            return (12 === o || 13 === o) && n.getTokenOffset() <= r;
          }),
          e
        );
      })();
    t.JSONCompletion = o;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/jsonHover", [
          "require",
          "exports",
          "../parser/jsonParser",
          "vscode-languageserver-types"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var p = e("../parser/jsonParser"),
      h = e("vscode-languageserver-types"),
      r = (function() {
        function e(e, t, r) {
          void 0 === t && (t = []),
            (this.schemaService = e),
            (this.contributions = t),
            (this.promise = r || Promise);
        }
        return (
          (e.prototype.doHover = function(e, t, s) {
            var r = e.offsetAt(t),
              u = s.getNodeFromOffset(r);
            if (
              !u ||
              (("object" === u.type || "array" === u.type) &&
                r > u.offset + 1 &&
                r < u.offset + u.length - 1)
            )
              return this.promise.resolve(null);
            var n = u;
            if ("string" === u.type) {
              var o = u.parent;
              if (
                "property" === o.type &&
                o.keyNode === u &&
                !(u = o.valueNode)
              )
                return this.promise.resolve(null);
            }
            for (
              var i = h.Range.create(
                  e.positionAt(n.offset),
                  e.positionAt(n.offset + n.length)
                ),
                c = function(e) {
                  return { contents: e, range: i };
                },
                a = p.getNodePath(u),
                f = this.contributions.length - 1;
              0 <= f;
              f--
            ) {
              var l = this.contributions[f].getInfoContribution(e.uri, a);
              if (l)
                return l.then(function(e) {
                  return c(e);
                });
            }
            return this.schemaService
              .getSchemaForResource(e.uri, s)
              .then(function(e) {
                if (e) {
                  var t = s.getMatchingSchemas(e.schema, u.offset),
                    r = null,
                    n = null,
                    o = null,
                    i = null;
                  t.every(function(e) {
                    if (
                      e.node === u &&
                      !e.inverted &&
                      e.schema &&
                      ((r = r || e.schema.title),
                      (n =
                        n ||
                        e.schema.markdownDescription ||
                        d(e.schema.description)),
                      e.schema.enum)
                    ) {
                      var t = e.schema.enum.indexOf(p.getNodeValue(u));
                      e.schema.markdownEnumDescriptions
                        ? (o = e.schema.markdownEnumDescriptions[t])
                        : e.schema.enumDescriptions &&
                          (o = d(e.schema.enumDescriptions[t])),
                        o &&
                          "string" != typeof (i = e.schema.enum[t]) &&
                          (i = JSON.stringify(i));
                    }
                    return !0;
                  });
                  var a = "";
                  return (
                    r && (a = d(r)),
                    n && (0 < a.length && (a += "\n\n"), (a += n)),
                    o &&
                      (0 < a.length && (a += "\n\n"),
                      (a += "`" + d(i) + "`: " + o)),
                    c([a])
                  );
                }
                return null;
              });
          }),
          e
        );
      })();
    function d(e) {
      if (e)
        return e
          .replace(/([^\n\r])(\r?\n)([^\n\r])/gm, "$1\n\n$3")
          .replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    t.JSONHover = r;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/jsonValidation", [
          "require",
          "exports",
          "../parser/jsonParser",
          "vscode-languageserver-types",
          "vscode-nls"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var h = e("../parser/jsonParser"),
      a = e("vscode-languageserver-types"),
      d = e("vscode-nls").loadMessageBundle(),
      r = (function() {
        function e(e, t) {
          (this.jsonSchemaService = e),
            (this.promise = t),
            (this.validationEnabled = !0);
        }
        return (
          (e.prototype.configure = function(e) {
            e &&
              ((this.validationEnabled = e.validate),
              (this.commentSeverity = e.allowComments
                ? h.ProblemSeverity.Ignore
                : h.ProblemSeverity.Error));
          }),
          (e.prototype.doValidation = function(o, u, c) {
            var f = this;
            if (!this.validationEnabled) return this.promise.resolve([]);
            var l = [],
              i = {},
              p = function(e) {
                if (e.severity !== h.ProblemSeverity.Ignore) {
                  var t =
                    e.location.offset +
                    " " +
                    e.location.length +
                    " " +
                    e.message;
                  if (!i[t]) {
                    i[t] = !0;
                    var r = {
                        start: o.positionAt(e.location.offset),
                        end: o.positionAt(e.location.offset + e.location.length)
                      },
                      n =
                        e.severity === h.ProblemSeverity.Error
                          ? a.DiagnosticSeverity.Error
                          : a.DiagnosticSeverity.Warning;
                    l.push({ severity: n, range: r, message: e.message });
                  }
                }
              };
            return this.jsonSchemaService
              .getSchemaForResource(o.uri, u)
              .then(function(e) {
                var t = c ? c.trailingCommas : h.ProblemSeverity.Error,
                  r = c ? c.comments : f.commentSeverity;
                if (e) {
                  if (e.errors.length && u.root) {
                    var n = u.root,
                      o = "object" === n.type ? n.properties[0] : null;
                    if (o && "$schema" === o.keyNode.value) {
                      var i = o.valueNode || o;
                      p({
                        location: { offset: i.offset, length: i.length },
                        message: e.errors[0],
                        severity: h.ProblemSeverity.Warning
                      });
                    } else
                      p({
                        location: { offset: n.offset, length: 1 },
                        message: e.errors[0],
                        severity: h.ProblemSeverity.Warning
                      });
                  } else {
                    var a = u.validate(e.schema);
                    a && a.forEach(p);
                  }
                  m(e.schema) && (t = r = h.ProblemSeverity.Ignore);
                }
                if (
                  (u.syntaxErrors.forEach(function(e) {
                    e.code === h.ErrorCode.TrailingComma && (e.severity = t),
                      p(e);
                  }),
                  l.push.apply(l, u.externalDiagnostic),
                  r !== h.ProblemSeverity.Ignore)
                ) {
                  var s = d(
                    "InvalidCommentToken",
                    "Comments are not permitted in JSON."
                  );
                  u.comments.forEach(function(e) {
                    p({ location: e, severity: r, message: s });
                  });
                }
                return l;
              });
          }),
          e
        );
      })();
    function m(e) {
      if (e && "object" == typeof e) {
        if (e.allowComments) return !0;
        if (e.allOf) return e.allOf.some(m);
      }
      return !1;
    }
    t.JSONValidation = r;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/utils/colors", [
          "require",
          "exports"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = 48,
      n = 57,
      o = 65,
      i = 97,
      a = 102;
    function s(e) {
      return e < r
        ? 0
        : e <= n
          ? e - r
          : (e < i && (e += i - o), i <= e && e <= a ? e - i + 10 : 0);
    }
    (t.hexDigit = s),
      (t.colorFromHex = function(e) {
        if ("#" !== e[0]) return null;
        switch (e.length) {
          case 4:
            return {
              red: (17 * s(e.charCodeAt(1))) / 255,
              green: (17 * s(e.charCodeAt(2))) / 255,
              blue: (17 * s(e.charCodeAt(3))) / 255,
              alpha: 1
            };
          case 5:
            return {
              red: (17 * s(e.charCodeAt(1))) / 255,
              green: (17 * s(e.charCodeAt(2))) / 255,
              blue: (17 * s(e.charCodeAt(3))) / 255,
              alpha: (17 * s(e.charCodeAt(4))) / 255
            };
          case 7:
            return {
              red: (16 * s(e.charCodeAt(1)) + s(e.charCodeAt(2))) / 255,
              green: (16 * s(e.charCodeAt(3)) + s(e.charCodeAt(4))) / 255,
              blue: (16 * s(e.charCodeAt(5)) + s(e.charCodeAt(6))) / 255,
              alpha: 1
            };
          case 9:
            return {
              red: (16 * s(e.charCodeAt(1)) + s(e.charCodeAt(2))) / 255,
              green: (16 * s(e.charCodeAt(3)) + s(e.charCodeAt(4))) / 255,
              blue: (16 * s(e.charCodeAt(5)) + s(e.charCodeAt(6))) / 255,
              alpha: (16 * s(e.charCodeAt(7)) + s(e.charCodeAt(8))) / 255
            };
        }
        return null;
      }),
      (t.colorFrom256RGB = function(e, t, r, n) {
        return (
          void 0 === n && (n = 1),
          { red: e / 255, green: t / 255, blue: r / 255, alpha: n }
        );
      });
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/jsonDocumentSymbols", [
          "require",
          "exports",
          "../parser/jsonParser",
          "../utils/strings",
          "../utils/colors",
          "vscode-languageserver-types"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l = e("../parser/jsonParser"),
      n = e("../utils/strings"),
      p = e("../utils/colors"),
      h = e("vscode-languageserver-types"),
      r = (function() {
        function e(e) {
          this.schemaService = e;
        }
        return (
          (e.prototype.findDocumentSymbols = function(a, e) {
            var s = this,
              t = e.root;
            if (!t) return null;
            var r = a.uri;
            if (
              ("vscode://defaultsettings/keybindings.json" === r ||
                n.endsWith(r.toLowerCase(), "/user/keybindings.json")) &&
              "array" === t.type
            ) {
              var i = [];
              return (
                t.items.forEach(function(e) {
                  if ("object" === e.type)
                    for (var t = 0, r = e.properties; t < r.length; t++) {
                      var n = r[t];
                      if ("key" === n.keyNode.value) {
                        if (n.valueNode) {
                          var o = h.Location.create(
                            a.uri,
                            h.Range.create(
                              a.positionAt(e.offset),
                              a.positionAt(e.offset + e.length)
                            )
                          );
                          i.push({
                            name: l.getNodeValue(n.valueNode),
                            kind: h.SymbolKind.Function,
                            location: o
                          });
                        }
                        return;
                      }
                    }
                }),
                i
              );
            }
            var u = function(o, e, i) {
              return (
                "array" === e.type
                  ? e.items.forEach(function(e) {
                      return u(o, e, i);
                    })
                  : "object" === e.type &&
                    e.properties.forEach(function(e) {
                      var t = h.Location.create(
                          a.uri,
                          h.Range.create(
                            a.positionAt(e.offset),
                            a.positionAt(e.offset + e.length)
                          )
                        ),
                        r = e.valueNode;
                      if (r) {
                        var n = i ? i + "." + e.keyNode.value : e.keyNode.value;
                        o.push({
                          name: e.keyNode.value,
                          kind: s.getSymbolKind(r.type),
                          location: t,
                          containerName: i
                        }),
                          u(o, r, n);
                      }
                    }),
                o
              );
            };
            return u([], t, void 0);
          }),
          (e.prototype.getSymbolKind = function(e) {
            switch (e) {
              case "object":
                return h.SymbolKind.Module;
              case "string":
                return h.SymbolKind.String;
              case "number":
                return h.SymbolKind.Number;
              case "array":
                return h.SymbolKind.Array;
              case "boolean":
                return h.SymbolKind.Boolean;
              default:
                return h.SymbolKind.Variable;
            }
          }),
          (e.prototype.findDocumentColors = function(c, f) {
            return this.schemaService
              .getSchemaForResource(c.uri, f)
              .then(function(e) {
                var t = [];
                if (e)
                  for (
                    var r = {}, n = 0, o = f.getMatchingSchemas(e.schema);
                    n < o.length;
                    n++
                  ) {
                    var i = o[n];
                    if (
                      !i.inverted &&
                      i.schema &&
                      ("color" === i.schema.format ||
                        "color-hex" === i.schema.format) &&
                      i.node &&
                      "string" === i.node.type
                    ) {
                      var a = String(i.node.offset);
                      if (!r[a]) {
                        var s = p.colorFromHex(l.getNodeValue(i.node));
                        if (s) {
                          var u = h.Range.create(
                            c.positionAt(i.node.offset),
                            c.positionAt(i.node.offset + i.node.length)
                          );
                          t.push({ color: s, range: u });
                        }
                        r[a] = !0;
                      }
                    }
                  }
                return t;
              });
          }),
          (e.prototype.getColorPresentations = function(e, t, r, n) {
            var o,
              i = [],
              a = Math.round(255 * r.red),
              s = Math.round(255 * r.green),
              u = Math.round(255 * r.blue);
            function c(e) {
              var t = e.toString(16);
              return 2 !== t.length ? "0" + t : t;
            }
            return (
              (o =
                1 === r.alpha
                  ? "#" + c(a) + c(s) + c(u)
                  : "#" + c(a) + c(s) + c(u) + c(Math.round(255 * r.alpha))),
              i.push({
                label: o,
                textEdit: h.TextEdit.replace(n, JSON.stringify(o))
              }),
              i
            );
          }),
          e
        );
      })();
    t.JSONDocumentSymbols = r;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/configuration", [
          "require",
          "exports",
          "vscode-nls"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = e("vscode-nls").loadMessageBundle();
    t.schemaContributions = {
      schemaAssociations: {},
      schemas: {
        "http://json-schema.org/draft-04/schema#": {
          title: r(
            "schema.json",
            "Describes a JSON file using a schema. See json-schema.org for more info."
          ),
          $schema: "http://json-schema.org/draft-04/schema#",
          definitions: {
            schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
            positiveInteger: { type: "integer", minimum: 0 },
            positiveIntegerDefault0: {
              allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }]
            },
            simpleTypes: {
              type: "string",
              enum: [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
              ]
            },
            stringArray: {
              type: "array",
              items: { type: "string" },
              minItems: 1,
              uniqueItems: !0
            }
          },
          type: "object",
          properties: {
            id: {
              type: "string",
              format: "uri",
              description: r(
                "schema.json.id",
                "A unique identifier for the schema."
              )
            },
            $schema: {
              type: "string",
              format: "uri",
              description: r(
                "schema.json.$schema",
                "The schema to verify this document against "
              )
            },
            title: {
              type: "string",
              description: r(
                "schema.json.title",
                "A descriptive title of the element"
              )
            },
            description: {
              type: "string",
              description: r(
                "schema.json.description",
                "A long description of the element. Used in hover menus and suggestions."
              )
            },
            default: {
              description: r(
                "schema.json.default",
                "A default value. Used by suggestions."
              )
            },
            multipleOf: {
              type: "number",
              minimum: 0,
              exclusiveMinimum: !0,
              description: r(
                "schema.json.multipleOf",
                "A number that should cleanly divide the current value (i.e. have no remainder)"
              )
            },
            maximum: {
              type: "number",
              description: r(
                "schema.json.maximum",
                "The maximum numerical value, inclusive by default."
              )
            },
            exclusiveMaximum: {
              type: "boolean",
              default: !1,
              description: r(
                "schema.json.exclusiveMaximum",
                "Makes the maximum property exclusive."
              )
            },
            minimum: {
              type: "number",
              description: r(
                "schema.json.minimum",
                "The minimum numerical value, inclusive by default."
              )
            },
            exclusiveMinimum: {
              type: "boolean",
              default: !1,
              description: r(
                "schema.json.exclusiveMininum",
                "Makes the minimum property exclusive."
              )
            },
            maxLength: {
              allOf: [{ $ref: "#/definitions/positiveInteger" }],
              description: r(
                "schema.json.maxLength",
                "The maximum length of a string."
              )
            },
            minLength: {
              allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              description: r(
                "schema.json.minLength",
                "The minimum length of a string."
              )
            },
            pattern: {
              type: "string",
              format: "regex",
              description: r(
                "schema.json.pattern",
                "A regular expression to match the string against. It is not implicitly anchored."
              )
            },
            additionalItems: {
              anyOf: [{ type: "boolean" }, { $ref: "#" }],
              default: {},
              description: r(
                "schema.json.additionalItems",
                "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."
              )
            },
            items: {
              anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
              default: {},
              description: r(
                "schema.json.items",
                "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."
              )
            },
            maxItems: {
              allOf: [{ $ref: "#/definitions/positiveInteger" }],
              description: r(
                "schema.json.maxItems",
                "The maximum number of items that can be inside an array. Inclusive."
              )
            },
            minItems: {
              allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              description: r(
                "schema.json.minItems",
                "The minimum number of items that can be inside an array. Inclusive."
              )
            },
            uniqueItems: {
              type: "boolean",
              default: !1,
              description: r(
                "schema.json.uniqueItems",
                "If all of the items in the array must be unique. Defaults to false."
              )
            },
            maxProperties: {
              allOf: [{ $ref: "#/definitions/positiveInteger" }],
              description: r(
                "schema.json.maxProperties",
                "The maximum number of properties an object can have. Inclusive."
              )
            },
            minProperties: {
              allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }],
              description: r(
                "schema.json.minProperties",
                "The minimum number of properties an object can have. Inclusive."
              )
            },
            required: {
              allOf: [{ $ref: "#/definitions/stringArray" }],
              description: r(
                "schema.json.required",
                "An array of strings that lists the names of all properties required on this object."
              )
            },
            additionalProperties: {
              anyOf: [{ type: "boolean" }, { $ref: "#" }],
              default: {},
              description: r(
                "schema.json.additionalProperties",
                "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."
              )
            },
            definitions: {
              type: "object",
              additionalProperties: { $ref: "#" },
              default: {},
              description: r(
                "schema.json.definitions",
                "Not used for validation. Place subschemas here that you wish to reference inline with $ref"
              )
            },
            properties: {
              type: "object",
              additionalProperties: { $ref: "#" },
              default: {},
              description: r(
                "schema.json.properties",
                "A map of property names to schemas for each property."
              )
            },
            patternProperties: {
              type: "object",
              additionalProperties: { $ref: "#" },
              default: {},
              description: r(
                "schema.json.patternProperties",
                "A map of regular expressions on property names to schemas for matching properties."
              )
            },
            dependencies: {
              type: "object",
              additionalProperties: {
                anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
              },
              description: r(
                "schema.json.dependencies",
                "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."
              )
            },
            enum: {
              type: "array",
              minItems: 1,
              uniqueItems: !0,
              description: r(
                "schema.json.enum",
                "The set of literal values that are valid"
              )
            },
            type: {
              anyOf: [
                { $ref: "#/definitions/simpleTypes" },
                {
                  type: "array",
                  items: { $ref: "#/definitions/simpleTypes" },
                  minItems: 1,
                  uniqueItems: !0
                }
              ],
              description: r(
                "schema.json.type",
                "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."
              )
            },
            format: {
              anyOf: [
                {
                  type: "string",
                  description: r(
                    "schema.json.format",
                    "Describes the format expected for the value."
                  ),
                  enum: [
                    "date-time",
                    "uri",
                    "email",
                    "hostname",
                    "ipv4",
                    "ipv6",
                    "regex"
                  ]
                },
                { type: "string" }
              ]
            },
            allOf: {
              allOf: [{ $ref: "#/definitions/schemaArray" }],
              description: r(
                "schema.json.allOf",
                "An array of schemas, all of which must match."
              )
            },
            anyOf: {
              allOf: [{ $ref: "#/definitions/schemaArray" }],
              description: r(
                "schema.json.anyOf",
                "An array of schemas, where at least one must match."
              )
            },
            oneOf: {
              allOf: [{ $ref: "#/definitions/schemaArray" }],
              description: r(
                "schema.json.oneOf",
                "An array of schemas, exactly one of which must match."
              )
            },
            not: {
              allOf: [{ $ref: "#" }],
              description: r(
                "schema.json.not",
                "A schema which must not match."
              )
            }
          },
          dependencies: {
            exclusiveMaximum: ["maximum"],
            exclusiveMinimum: ["minimum"]
          },
          default: {}
        }
      }
    };
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/services/jsonSchemaService", [
          "require",
          "exports",
          "jsonc-parser",
          "vscode-uri",
          "../utils/strings",
          "../parser/jsonParser",
          "vscode-nls"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = e("jsonc-parser"),
      n = e("vscode-uri"),
      h = e("../utils/strings"),
      d = e("../parser/jsonParser"),
      l = e("vscode-nls").loadMessageBundle(),
      r = (function() {
        function e(e) {
          try {
            this.patternRegExp = new RegExp(
              h.convertSimple2RegExpPattern(e) + "$"
            );
          } catch (e) {
            this.patternRegExp = null;
          }
          this.schemas = [];
        }
        return (
          (e.prototype.addSchema = function(e) {
            this.schemas.push(e);
          }),
          (e.prototype.matchesPattern = function(e) {
            return this.patternRegExp && this.patternRegExp.test(e);
          }),
          (e.prototype.getSchemas = function() {
            return this.schemas;
          }),
          e
        );
      })(),
      o = (function() {
        function e(e, t, r) {
          (this.service = e),
            (this.url = t),
            r &&
              (this.unresolvedSchema = this.service.promise.resolve(new s(r)));
        }
        return (
          (e.prototype.getUnresolvedSchema = function() {
            return (
              this.unresolvedSchema ||
                (this.unresolvedSchema = this.service.loadSchema(this.url)),
              this.unresolvedSchema
            );
          }),
          (e.prototype.getResolvedSchema = function() {
            var t = this;
            return (
              this.resolvedSchema ||
                (this.resolvedSchema = this.getUnresolvedSchema().then(function(
                  e
                ) {
                  return t.service.resolveSchemaContent(e, t.url);
                })),
              this.resolvedSchema
            );
          }),
          (e.prototype.clearSchema = function() {
            (this.resolvedSchema = null), (this.unresolvedSchema = null);
          }),
          e
        );
      })(),
      s = function(e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t);
      };
    t.UnresolvedSchema = s;
    var p = (function() {
      function e(e, t) {
        void 0 === t && (t = []), (this.schema = e), (this.errors = t);
      }
      return (
        (e.prototype.getSection = function(e) {
          return d.asSchema(this.getSectionRecursive(e, this.schema));
        }),
        (e.prototype.getSectionRecursive = function(t, r) {
          var n = this;
          if (!r || "boolean" == typeof r || 0 === t.length) return r;
          var o = t.shift();
          if (r.properties && (r.properties[o], 1))
            return this.getSectionRecursive(t, r.properties[o]);
          if (r.patternProperties)
            Object.keys(r.patternProperties).forEach(function(e) {
              if (new RegExp(e).test(o))
                return n.getSectionRecursive(t, r.patternProperties[e]);
            });
          else {
            if ("object" == typeof r.additionalProperties)
              return this.getSectionRecursive(t, r.additionalProperties);
            if (o.match("[0-9]+"))
              if (Array.isArray(r.items)) {
                var e = parseInt(o, 10);
                if (!isNaN(e) && r.items[e])
                  return this.getSectionRecursive(t, r.items[e]);
              } else if (r.items) return this.getSectionRecursive(t, r.items);
          }
          return null;
        }),
        e
      );
    })();
    t.ResolvedSchema = p;
    var i = (function() {
      function e(e, t, r) {
        (this.contextService = t),
          (this.requestService = e),
          (this.promiseConstructor = r || Promise),
          (this.callOnDispose = []),
          (this.contributionSchemas = {}),
          (this.contributionAssociations = {}),
          (this.schemasById = {}),
          (this.filePatternAssociations = []),
          (this.filePatternAssociationById = {}),
          (this.registeredSchemasIds = {});
      }
      return (
        (e.prototype.getRegisteredSchemaIds = function(r) {
          return Object.keys(this.registeredSchemasIds).filter(function(e) {
            var t = n.default.parse(e).scheme;
            return "schemaservice" !== t && (!r || r(t));
          });
        }),
        Object.defineProperty(e.prototype, "promise", {
          get: function() {
            return this.promiseConstructor;
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype.dispose = function() {
          for (; 0 < this.callOnDispose.length; ) this.callOnDispose.pop()();
        }),
        (e.prototype.onResourceChange = function(e) {
          e = this.normalizeId(e);
          var t = this.schemasById[e];
          return !!t && (t.clearSchema(), !0);
        }),
        (e.prototype.normalizeId = function(e) {
          return n.default.parse(e).toString();
        }),
        (e.prototype.setSchemaContributions = function(e) {
          var r = this;
          if (e.schemas) {
            var t = e.schemas;
            for (var n in t) {
              var o = this.normalizeId(n);
              this.contributionSchemas[o] = this.addSchemaHandle(o, t[n]);
            }
          }
          if (e.schemaAssociations) {
            var i = e.schemaAssociations;
            for (var a in i) {
              var s = i[a];
              this.contributionAssociations[a] = s;
              var u = this.getOrAddFilePatternAssociation(a);
              s.forEach(function(e) {
                var t = r.normalizeId(e);
                u.addSchema(t);
              });
            }
          }
        }),
        (e.prototype.addSchemaHandle = function(e, t) {
          var r = new o(this, e, t);
          return (this.schemasById[e] = r);
        }),
        (e.prototype.getOrAddSchemaHandle = function(e, t) {
          return this.schemasById[e] || this.addSchemaHandle(e, t);
        }),
        (e.prototype.getOrAddFilePatternAssociation = function(e) {
          var t = this.filePatternAssociationById[e];
          return (
            t ||
              ((t = new r(e)),
              (this.filePatternAssociationById[e] = t),
              this.filePatternAssociations.push(t)),
            t
          );
        }),
        (e.prototype.registerExternalSchema = function(e, t, r) {
          var n = this;
          void 0 === t && (t = null);
          var o = this.normalizeId(e);
          return (
            (this.registeredSchemasIds[o] = !0),
            t &&
              t.forEach(function(e) {
                n.getOrAddFilePatternAssociation(e).addSchema(o);
              }),
            r ? this.addSchemaHandle(o, r) : this.getOrAddSchemaHandle(o)
          );
        }),
        (e.prototype.clearExternalSchemas = function() {
          var r = this;
          for (var e in ((this.schemasById = {}),
          (this.filePatternAssociations = []),
          (this.filePatternAssociationById = {}),
          (this.registeredSchemasIds = {}),
          this.contributionSchemas))
            (this.schemasById[e] = this.contributionSchemas[e]),
              (this.registeredSchemasIds[e] = !0);
          for (var t in this.contributionAssociations) {
            var n = this.getOrAddFilePatternAssociation(t);
            this.contributionAssociations[t].forEach(function(e) {
              var t = r.normalizeId(e);
              n.addSchema(t);
            });
          }
        }),
        (e.prototype.getResolvedSchema = function(e) {
          var t = this.normalizeId(e),
            r = this.schemasById[t];
          return r ? r.getResolvedSchema() : this.promise.resolve(null);
        }),
        (e.prototype.loadSchema = function(i) {
          if (!this.requestService) {
            var e = l(
              "json.schema.norequestservice",
              "Unable to load schema from '{0}'. No schema request service available",
              u(i)
            );
            return this.promise.resolve(new s({}, [e]));
          }
          return this.requestService(i).then(
            function(e) {
              if (!e) {
                var t = l(
                  "json.schema.nocontent",
                  "Unable to load schema from '{0}': No content.",
                  u(i)
                );
                return new s({}, [t]);
              }
              var r,
                n = [];
              r = a.parse(e, n);
              var o = n.length
                ? [
                    l(
                      "json.schema.invalidFormat",
                      "Unable to parse content from '{0}': Parse error at offset {1}.",
                      u(i),
                      n[0].offset
                    )
                  ]
                : [];
              return new s(r, o);
            },
            function(e) {
              var t = l(
                "json.schema.unabletoload",
                "Unable to load schema from '{0}': {1}",
                u(i),
                e.toString()
              );
              return new s({}, [t]);
            }
          );
        }),
        (e.prototype.resolveSchemaContent = function(e, t) {
          var s = this,
            a = e.errors.slice(0),
            r = e.schema,
            i = this.contextService,
            c = function(e, t, r, n) {
              var o = (function(e, t) {
                if (!t) return e;
                var r = e;
                return (
                  "/" === t[0] && (t = t.substr(1)),
                  t.split("/").some(function(e) {
                    return !(r = r[e]);
                  }),
                  r
                );
              })(t, n);
              if (o)
                for (var i in o)
                  o.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = o[i]);
              else
                a.push(
                  l(
                    "json.schema.invalidref",
                    "$ref '{0}' in '{1}' can not be resolved.",
                    n,
                    r
                  )
                );
            },
            f = function(r, n, o, e) {
              return (
                i &&
                  !/^\w+:\/\/.*/.test(n) &&
                  (n = i.resolveRelativePath(n, e)),
                (n = s.normalizeId(n)),
                s
                  .getOrAddSchemaHandle(n)
                  .getUnresolvedSchema()
                  .then(function(e) {
                    if (e.errors.length) {
                      var t = o ? n + "#" + o : n;
                      a.push(
                        l(
                          "json.schema.problemloadingref",
                          "Problems loading reference '{0}': {1}",
                          t,
                          e.errors[0]
                        )
                      );
                    }
                    return c(r, e.schema, n, o), u(r, e.schema, n);
                  })
              );
            },
            u = function(e, r, n) {
              if (!e || "object" != typeof e) return Promise.resolve(null);
              for (
                var u = [e],
                  t = [],
                  o = [],
                  i = function(e) {
                    for (; e.$ref; ) {
                      var t = e.$ref.split("#", 2);
                      if ((delete e.$ref, 0 < t[0].length))
                        return void o.push(f(e, t[0], t[1], n));
                      c(e, r, n, t[1]);
                    }
                    !(function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      for (var r = 0, n = e; r < n.length; r++) {
                        var o = n[r];
                        "object" == typeof o && u.push(o);
                      }
                    })(
                      e.items,
                      e.additionalProperties,
                      e.not,
                      e.contains,
                      e.propertyNames
                    ),
                      (function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var r = 0, n = e; r < n.length; r++) {
                          var o = n[r];
                          if ("object" == typeof o)
                            for (var i in o) {
                              var a = o[i];
                              "object" == typeof a && u.push(a);
                            }
                        }
                      })(
                        e.definitions,
                        e.properties,
                        e.patternProperties,
                        e.dependencies
                      ),
                      (function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                          e[t] = arguments[t];
                        for (var r = 0, n = e; r < n.length; r++) {
                          var o = n[r];
                          if (Array.isArray(o))
                            for (var i = 0, a = o; i < a.length; i++) {
                              var s = a[i];
                              "object" == typeof s && u.push(s);
                            }
                        }
                      })(e.anyOf, e.allOf, e.oneOf, e.items);
                  };
                u.length;

              ) {
                var a = u.pop();
                0 <= t.indexOf(a) || (t.push(a), i(a));
              }
              return s.promise.all(o);
            };
          return u(r, r, t).then(function(e) {
            return new p(r, a);
          });
        }),
        (e.prototype.getSchemaForResource = function(e, t) {
          if (t && t.root && "object" === t.root.type) {
            var r = t.root.properties.filter(function(e) {
              return (
                "$schema" === e.keyNode.value &&
                e.valueNode &&
                "string" === e.valueNode.type
              );
            });
            if (0 < r.length) {
              var n = d.getNodeValue(r[0].valueNode);
              if (
                (n &&
                  h.startsWith(n, ".") &&
                  this.contextService &&
                  (n = this.contextService.resolveRelativePath(n, e)),
                n)
              ) {
                var o = this.normalizeId(n);
                return this.getOrAddSchemaHandle(o).getResolvedSchema();
              }
            }
          }
          for (
            var i = Object.create(null),
              a = [],
              s = 0,
              u = this.filePatternAssociations;
            s < u.length;
            s++
          ) {
            var c = u[s];
            if (c.matchesPattern(e))
              for (var f = 0, l = c.getSchemas(); f < l.length; f++) {
                var p = l[f];
                i[p] || (a.push(p), (i[p] = !0));
              }
          }
          return 0 < a.length
            ? this.createCombinedSchema(e, a).getResolvedSchema()
            : this.promise.resolve(null);
        }),
        (e.prototype.createCombinedSchema = function(e, t) {
          if (1 === t.length) return this.getOrAddSchemaHandle(t[0]);
          var r = "schemaservice://combinedSchema/" + encodeURIComponent(e),
            n = {
              allOf: t.map(function(e) {
                return { $ref: e };
              })
            };
          return this.addSchemaHandle(r, n);
        }),
        e
      );
    })();
    function u(e) {
      try {
        var t = n.default.parse(e);
        if ("file" === t.scheme) return t.fsPath;
      } catch (e) {}
      return e;
    }
    t.JSONSchemaService = i;
  }),
  (function(e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-json-languageservice/jsonLanguageService", [
          "require",
          "exports",
          "vscode-languageserver-types",
          "./services/jsonCompletion",
          "./services/jsonHover",
          "./services/jsonValidation",
          "./services/jsonDocumentSymbols",
          "./parser/jsonParser",
          "./services/configuration",
          "./services/jsonSchemaService",
          "jsonc-parser"
        ], e);
  })(function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = e("vscode-languageserver-types");
    (t.TextDocument = s.TextDocument),
      (t.Position = s.Position),
      (t.CompletionItem = s.CompletionItem),
      (t.CompletionList = s.CompletionList),
      (t.Range = s.Range),
      (t.SymbolInformation = s.SymbolInformation),
      (t.Diagnostic = s.Diagnostic),
      (t.TextEdit = s.TextEdit),
      (t.FormattingOptions = s.FormattingOptions),
      (t.MarkedString = s.MarkedString);
    var u = e("./services/jsonCompletion"),
      c = e("./services/jsonHover"),
      f = e("./services/jsonValidation"),
      l = e("./services/jsonDocumentSymbols"),
      p = e("./parser/jsonParser"),
      h = e("./services/configuration"),
      d = e("./services/jsonSchemaService"),
      m = e("jsonc-parser");
    t.getLanguageService = function(e) {
      var t = e.promiseConstructor || Promise,
        r = new d.JSONSchemaService(
          e.schemaRequestService,
          e.workspaceContext,
          t
        );
      r.setSchemaContributions(h.schemaContributions);
      var n = new u.JSONCompletion(r, e.contributions, t),
        o = new c.JSONHover(r, e.contributions, t),
        i = new l.JSONDocumentSymbols(r),
        a = new f.JSONValidation(r, t);
      return {
        configure: function(e) {
          r.clearExternalSchemas(),
            e.schemas &&
              e.schemas.forEach(function(e) {
                r.registerExternalSchema(e.uri, e.fileMatch, e.schema);
              }),
            a.configure(e);
        },
        resetSchema: function(e) {
          return r.onResourceChange(e);
        },
        doValidation: a.doValidation.bind(a),
        parseJSONDocument: function(e) {
          return p.parse(e, { collectComments: !0 });
        },
        newJSONDocument: function(e, t) {
          return p.newJSONDocument(e, t);
        },
        doResolve: n.doResolve.bind(n),
        doComplete: n.doComplete.bind(n),
        findDocumentSymbols: i.findDocumentSymbols.bind(i),
        findColorSymbols: function(e, t) {
          return i.findDocumentColors(e, t).then(function(e) {
            return e.map(function(e) {
              return e.range;
            });
          });
        },
        findDocumentColors: i.findDocumentColors.bind(i),
        getColorPresentations: i.getColorPresentations.bind(i),
        doHover: o.doHover.bind(o),
        format: function(t, e, r) {
          var n = void 0;
          if (e) {
            var o = t.offsetAt(e.start);
            n = { offset: o, length: t.offsetAt(e.end) - o };
          }
          var i = {
            tabSize: r ? r.tabSize : 4,
            insertSpaces: !r || r.insertSpaces,
            eol: "\n"
          };
          return m.format(t.getText(), n, i).map(function(e) {
            return s.TextEdit.replace(
              s.Range.create(
                t.positionAt(e.offset),
                t.positionAt(e.offset + e.length)
              ),
              e.content
            );
          });
        }
      };
    };
  }),
  define("vscode-json-languageservice", [
    "vscode-json-languageservice/jsonLanguageService"
  ], function(e) {
    return e;
  }),
  define("vs/language/json/jsonWorker", [
    "require",
    "exports",
    "vscode-json-languageservice",
    "vscode-languageserver-types"
  ], function(e, t, r, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = monaco.Promise,
      n = (function() {
        function e(e) {
          this.wrapped = new monaco.Promise(e);
        }
        return (
          (e.prototype.then = function(e, t) {
            return this.wrapped.then(e, t);
          }),
          (e.prototype.getWrapped = function() {
            return this.wrapped;
          }),
          (e.prototype.cancel = function() {
            this.wrapped.cancel();
          }),
          (e.resolve = function(e) {
            return monaco.Promise.as(e);
          }),
          (e.reject = function(e) {
            return monaco.Promise.wrapError(e);
          }),
          (e.all = function(e) {
            return monaco.Promise.join(e);
          }),
          e
        );
      })(),
      i = (function() {
        function e(e, t) {
          (this._ctx = e),
            (this._languageSettings = t.languageSettings),
            (this._languageId = t.languageId),
            (this._languageService = r.getLanguageService({
              promiseConstructor: n
            })),
            this._languageService.configure(this._languageSettings);
        }
        return (
          (e.prototype.doValidation = function(e) {
            var t = this._getTextDocument(e);
            if (t) {
              var r = this._languageService.parseJSONDocument(t);
              return this._languageService.doValidation(t, r);
            }
            return a.as([]);
          }),
          (e.prototype.doComplete = function(e, t) {
            var r = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(r);
            return this._languageService.doComplete(r, t, n);
          }),
          (e.prototype.doResolve = function(e) {
            return this._languageService.doResolve(e);
          }),
          (e.prototype.doHover = function(e, t) {
            var r = this._getTextDocument(e),
              n = this._languageService.parseJSONDocument(r);
            return this._languageService.doHover(r, t, n);
          }),
          (e.prototype.format = function(e, t, r) {
            var n = this._getTextDocument(e),
              o = this._languageService.format(n, t, r);
            return a.as(o);
          }),
          (e.prototype.resetSchema = function(e) {
            return a.as(this._languageService.resetSchema(e));
          }),
          (e.prototype.findDocumentSymbols = function(e) {
            var t = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(t),
              n = this._languageService.findDocumentSymbols(t, r);
            return a.as(n);
          }),
          (e.prototype.findDocumentColors = function(e) {
            var t = this._getTextDocument(e),
              r = this._languageService.parseJSONDocument(t),
              n = this._languageService.findDocumentColors(t, r);
            return a.as(n);
          }),
          (e.prototype.getColorPresentations = function(e, t, r) {
            var n = this._getTextDocument(e),
              o = this._languageService.parseJSONDocument(n),
              i = this._languageService.getColorPresentations(n, o, t, r);
            return a.as(i);
          }),
          (e.prototype._getTextDocument = function(e) {
            for (
              var t = 0, r = this._ctx.getMirrorModels();
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n.uri.toString() === e)
                return o.TextDocument.create(
                  e,
                  this._languageId,
                  n.version,
                  n.getValue()
                );
            }
            return null;
          }),
          e
        );
      })();
    (t.JSONWorker = i),
      (t.create = function(e, t) {
        return new i(e, t);
      });
  });
