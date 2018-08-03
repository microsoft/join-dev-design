/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.13.2(53a4043676e6259fb734c90fad14bf16f7425640)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function() {
  var e = [
      "exports",
      "require",
      "vs/editor/common/core/position",
      "vs/base/common/winjs.base",
      "vs/base/common/errors",
      "vs/base/common/platform",
      "vs/base/common/uri",
      "vs/editor/common/core/range",
      "vs/editor/common/core/uint",
      "vs/base/common/event",
      "vs/base/common/lifecycle",
      "vs/base/common/cancellation",
      "vs/base/common/functional",
      "vs/base/common/diff/diff",
      "vs/base/common/async",
      "vs/base/common/map",
      "vs/base/common/strings",
      "vs/editor/common/model/mirrorTextModel",
      "vs/base/common/linkedList",
      "vs/base/common/keyCodes",
      "vs/editor/common/core/selection",
      "vs/editor/common/core/token",
      "vs/base/common/diff/diffChange",
      "vs/editor/common/core/characterClassifier",
      "vs/editor/common/diff/diffComputer",
      "vs/editor/common/model/wordHelper",
      "vs/editor/common/modes/linkComputer",
      "vs/editor/common/modes/supports/inplaceReplaceSupport",
      "vs/editor/common/standalone/standaloneBase",
      "vs/editor/common/viewModel/prefixSumComputer",
      "vs/base/common/worker/simpleWorker",
      "vs/editor/common/services/editorSimpleWorker"
    ],
    t = function(t) {
      for (var n = [], r = 0, i = t.length; r < i; r++) n[r] = e[t[r]];
      return n;
    },
    n = this;
  !(function(e) {
    e.global = n;
    var t = (function() {
      function t() {
        (this._detected = !1),
          (this._isWindows = !1),
          (this._isNode = !1),
          (this._isElectronRenderer = !1),
          (this._isWebWorker = !1);
      }
      return (
        Object.defineProperty(t.prototype, "isWindows", {
          get: function() {
            return this._detect(), this._isWindows;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "isNode", {
          get: function() {
            return this._detect(), this._isNode;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "isElectronRenderer", {
          get: function() {
            return this._detect(), this._isElectronRenderer;
          },
          enumerable: !0,
          configurable: !0
        }),
        Object.defineProperty(t.prototype, "isWebWorker", {
          get: function() {
            return this._detect(), this._isWebWorker;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype._detect = function() {
          this._detected ||
            ((this._detected = !0),
            (this._isWindows = t._isWindows()),
            (this._isNode = "undefined" != typeof module && !!module.exports),
            (this._isElectronRenderer =
              "undefined" != typeof process &&
              void 0 !== process.versions &&
              void 0 !== process.versions.electron &&
              "renderer" === process.type),
            (this._isWebWorker = "function" == typeof e.global.importScripts));
        }),
        (t._isWindows = function() {
          return (
            !!(
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.indexOf("Windows") >= 0
            ) ||
            ("undefined" != typeof process && "win32" === process.platform)
          );
        }),
        t
      );
    })();
    e.Environment = t;
  })(i || (i = {}));
  !(function(e) {
    var t = (function() {
      return function(e, t, n) {
        (this.type = e), (this.detail = t), (this.timestamp = n);
      };
    })();
    e.LoaderEvent = t;
    var n = (function() {
      function n(e) {
        this._events = [new t(1, "", e)];
      }
      return (
        (n.prototype.record = function(n, r) {
          this._events.push(
            new t(n, r, e.Utilities.getHighPerformanceTimestamp())
          );
        }),
        (n.prototype.getEvents = function() {
          return this._events;
        }),
        n
      );
    })();
    e.LoaderEventRecorder = n;
    var r = (function() {
      function e() {}
      return (
        (e.prototype.record = function(e, t) {}),
        (e.prototype.getEvents = function() {
          return [];
        }),
        (e.INSTANCE = new e()),
        e
      );
    })();
    e.NullLoaderEventRecorder = r;
  })(i || (i = {}));
  !(function(e) {
    var t = (function() {
      function t() {}
      return (
        (t.fileUriToFilePath = function(e, t) {
          if (((t = decodeURI(t)), e)) {
            if (/^file:\/\/\//.test(t)) return t.substr(8);
            if (/^file:\/\//.test(t)) return t.substr(5);
          } else if (/^file:\/\//.test(t)) return t.substr(7);
          return t;
        }),
        (t.startsWith = function(e, t) {
          return e.length >= t.length && e.substr(0, t.length) === t;
        }),
        (t.endsWith = function(e, t) {
          return e.length >= t.length && e.substr(e.length - t.length) === t;
        }),
        (t.containsQueryString = function(e) {
          return /^[^\#]*\?/gi.test(e);
        }),
        (t.isAbsolutePath = function(e) {
          return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e);
        }),
        (t.forEachProperty = function(e, t) {
          if (e) {
            var n = void 0;
            for (n in e) e.hasOwnProperty(n) && t(n, e[n]);
          }
        }),
        (t.isEmpty = function(e) {
          var n = !0;
          return (
            t.forEachProperty(e, function() {
              n = !1;
            }),
            n
          );
        }),
        (t.recursiveClone = function(e) {
          if (!e || "object" != typeof e) return e;
          var n = Array.isArray(e) ? [] : {};
          return (
            t.forEachProperty(e, function(e, r) {
              n[e] = r && "object" == typeof r ? t.recursiveClone(r) : r;
            }),
            n
          );
        }),
        (t.generateAnonymousModule = function() {
          return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "===";
        }),
        (t.isAnonymousModule = function(e) {
          return /^===anonymous/.test(e);
        }),
        (t.getHighPerformanceTimestamp = function() {
          return (
            this.PERFORMANCE_NOW_PROBED ||
              ((this.PERFORMANCE_NOW_PROBED = !0),
              (this.HAS_PERFORMANCE_NOW =
                e.global.performance &&
                "function" == typeof e.global.performance.now)),
            this.HAS_PERFORMANCE_NOW ? e.global.performance.now() : Date.now()
          );
        }),
        (t.NEXT_ANONYMOUS_ID = 1),
        (t.PERFORMANCE_NOW_PROBED = !1),
        (t.HAS_PERFORMANCE_NOW = !1),
        t
      );
    })();
    e.Utilities = t;
  })(i || (i = {}));
  !(function(e) {
    var t = (function() {
      function t() {}
      return (
        (t.validateConfigurationOptions = function(t) {
          function n(e) {
            return "load" === e.errorCode
              ? (console.error('Loading "' + e.moduleId + '" failed'),
                console.error("Detail: ", e.detail),
                e.detail && e.detail.stack && console.error(e.detail.stack),
                console.error("Here are the modules that depend on it:"),
                void console.error(e.neededBy))
              : "factory" === e.errorCode
                ? (console.error(
                    'The factory method of "' +
                      e.moduleId +
                      '" has thrown an exception'
                  ),
                  console.error(e.detail),
                  void (
                    e.detail &&
                    e.detail.stack &&
                    console.error(e.detail.stack)
                  ))
                : void 0;
          }
          return (
            "string" != typeof (t = t || {}).baseUrl && (t.baseUrl = ""),
            "boolean" != typeof t.isBuild && (t.isBuild = !1),
            "object" != typeof t.paths && (t.paths = {}),
            "object" != typeof t.config && (t.config = {}),
            void 0 === t.catchError && (t.catchError = !1),
            "string" != typeof t.urlArgs && (t.urlArgs = ""),
            "function" != typeof t.onError && (t.onError = n),
            ("object" == typeof t.ignoreDuplicateModules &&
              Array.isArray(t.ignoreDuplicateModules)) ||
              (t.ignoreDuplicateModules = []),
            t.baseUrl.length > 0 &&
              (e.Utilities.endsWith(t.baseUrl, "/") || (t.baseUrl += "/")),
            Array.isArray(t.nodeModules) || (t.nodeModules = []),
            ("number" != typeof t.nodeCachedDataWriteDelay ||
              t.nodeCachedDataWriteDelay < 0) &&
              (t.nodeCachedDataWriteDelay = 7e3),
            "function" != typeof t.onNodeCachedData &&
              (t.onNodeCachedData = function(e, t) {
                e &&
                  ("cachedDataRejected" === e.errorCode
                    ? console.warn("Rejected cached data from file: " + e.path)
                    : "unlink" === e.errorCode || "writeFile" === e.errorCode
                      ? (console.error(
                          "Problems writing cached data file: " + e.path
                        ),
                        console.error(e.detail))
                      : console.error(e));
              }),
            t
          );
        }),
        (t.mergeConfigurationOptions = function(n, r) {
          void 0 === n && (n = null), void 0 === r && (r = null);
          var i = e.Utilities.recursiveClone(r || {});
          return (
            e.Utilities.forEachProperty(n, function(t, n) {
              "ignoreDuplicateModules" === t &&
              void 0 !== i.ignoreDuplicateModules
                ? (i.ignoreDuplicateModules = i.ignoreDuplicateModules.concat(
                    n
                  ))
                : "paths" === t && void 0 !== i.paths
                  ? e.Utilities.forEachProperty(n, function(e, t) {
                      return (i.paths[e] = t);
                    })
                  : "config" === t && void 0 !== i.config
                    ? e.Utilities.forEachProperty(n, function(e, t) {
                        return (i.config[e] = t);
                      })
                    : (i[t] = e.Utilities.recursiveClone(n));
            }),
            t.validateConfigurationOptions(i)
          );
        }),
        t
      );
    })();
    e.ConfigurationOptionsUtil = t;
    var n = (function() {
      function n(e, n) {
        if (
          ((this._env = e),
          (this.options = t.mergeConfigurationOptions(n)),
          this._createIgnoreDuplicateModulesMap(),
          this._createNodeModulesMap(),
          this._createSortedPathsRules(),
          "" === this.options.baseUrl)
        ) {
          if (
            this.options.nodeRequire &&
            this.options.nodeRequire.main &&
            this.options.nodeRequire.main.filename &&
            this._env.isNode
          ) {
            var r = this.options.nodeRequire.main.filename,
              i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
            this.options.baseUrl = r.substring(0, i + 1);
          }
          if (this.options.nodeMain && this._env.isNode) {
            var r = this.options.nodeMain,
              i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
            this.options.baseUrl = r.substring(0, i + 1);
          }
        }
      }
      return (
        (n.prototype._createIgnoreDuplicateModulesMap = function() {
          this.ignoreDuplicateModulesMap = {};
          for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++)
            this.ignoreDuplicateModulesMap[
              this.options.ignoreDuplicateModules[e]
            ] = !0;
        }),
        (n.prototype._createNodeModulesMap = function() {
          this.nodeModulesMap = Object.create(null);
          for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
            var n = t[e];
            this.nodeModulesMap[n] = !0;
          }
        }),
        (n.prototype._createSortedPathsRules = function() {
          var t = this;
          (this.sortedPathsRules = []),
            e.Utilities.forEachProperty(this.options.paths, function(e, n) {
              Array.isArray(n)
                ? t.sortedPathsRules.push({ from: e, to: n })
                : t.sortedPathsRules.push({ from: e, to: [n] });
            }),
            this.sortedPathsRules.sort(function(e, t) {
              return t.from.length - e.from.length;
            });
        }),
        (n.prototype.cloneAndMerge = function(e) {
          return new n(this._env, t.mergeConfigurationOptions(e, this.options));
        }),
        (n.prototype.getOptionsLiteral = function() {
          return this.options;
        }),
        (n.prototype._applyPaths = function(t) {
          for (var n, r = 0, i = this.sortedPathsRules.length; r < i; r++)
            if (
              ((n = this.sortedPathsRules[r]),
              e.Utilities.startsWith(t, n.from))
            ) {
              for (var o = [], s = 0, u = n.to.length; s < u; s++)
                o.push(n.to[s] + t.substr(n.from.length));
              return o;
            }
          return [t];
        }),
        (n.prototype._addUrlArgsToUrl = function(t) {
          return e.Utilities.containsQueryString(t)
            ? t + "&" + this.options.urlArgs
            : t + "?" + this.options.urlArgs;
        }),
        (n.prototype._addUrlArgsIfNecessaryToUrl = function(e) {
          return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e;
        }),
        (n.prototype._addUrlArgsIfNecessaryToUrls = function(e) {
          if (this.options.urlArgs)
            for (var t = 0, n = e.length; t < n; t++)
              e[t] = this._addUrlArgsToUrl(e[t]);
          return e;
        }),
        (n.prototype.moduleIdToPaths = function(t) {
          if (!0 === this.nodeModulesMap[t])
            return this.isBuild() ? ["empty:"] : ["node|" + t];
          var n,
            r = t;
          if (e.Utilities.endsWith(r, ".js") || e.Utilities.isAbsolutePath(r))
            e.Utilities.endsWith(r, ".js") ||
              e.Utilities.containsQueryString(r) ||
              (r += ".js"),
              (n = [r]);
          else
            for (var i = 0, o = (n = this._applyPaths(r)).length; i < o; i++)
              (this.isBuild() && "empty:" === n[i]) ||
                (e.Utilities.isAbsolutePath(n[i]) ||
                  (n[i] = this.options.baseUrl + n[i]),
                e.Utilities.endsWith(n[i], ".js") ||
                  e.Utilities.containsQueryString(n[i]) ||
                  (n[i] = n[i] + ".js"));
          return this._addUrlArgsIfNecessaryToUrls(n);
        }),
        (n.prototype.requireToUrl = function(t) {
          var n = t;
          return (
            e.Utilities.isAbsolutePath(n) ||
              ((n = this._applyPaths(n)[0]),
              e.Utilities.isAbsolutePath(n) || (n = this.options.baseUrl + n)),
            this._addUrlArgsIfNecessaryToUrl(n)
          );
        }),
        (n.prototype.isBuild = function() {
          return this.options.isBuild;
        }),
        (n.prototype.isDuplicateMessageIgnoredFor = function(e) {
          return this.ignoreDuplicateModulesMap.hasOwnProperty(e);
        }),
        (n.prototype.getConfigForModule = function(e) {
          if (this.options.config) return this.options.config[e];
        }),
        (n.prototype.shouldCatchError = function() {
          return this.options.catchError;
        }),
        (n.prototype.shouldRecordStats = function() {
          return this.options.recordStats;
        }),
        (n.prototype.onError = function(e) {
          this.options.onError(e);
        }),
        n
      );
    })();
    e.Configuration = n;
  })(i || (i = {}));
  !(function(e) {
    var t = (function() {
        function e(e) {
          (this._env = e),
            (this._scriptLoader = null),
            (this._callbackMap = {});
        }
        return (
          (e.prototype.load = function(e, t, o, s) {
            var u = this;
            this._scriptLoader ||
              (this._scriptLoader = this._env.isWebWorker
                ? new r()
                : this._env.isNode
                  ? new i(this._env)
                  : new n());
            var a = { callback: o, errorback: s };
            this._callbackMap.hasOwnProperty(t)
              ? this._callbackMap[t].push(a)
              : ((this._callbackMap[t] = [a]),
                this._scriptLoader.load(
                  e,
                  t,
                  function() {
                    return u.triggerCallback(t);
                  },
                  function(e) {
                    return u.triggerErrorback(t, e);
                  }
                ));
          }),
          (e.prototype.triggerCallback = function(e) {
            var t = this._callbackMap[e];
            delete this._callbackMap[e];
            for (var n = 0; n < t.length; n++) t[n].callback();
          }),
          (e.prototype.triggerErrorback = function(e, t) {
            var n = this._callbackMap[e];
            delete this._callbackMap[e];
            for (var r = 0; r < n.length; r++) n[r].errorback(t);
          }),
          e
        );
      })(),
      n = (function() {
        function e() {}
        return (
          (e.prototype.attachListeners = function(e, t, n) {
            var r = function() {
                e.removeEventListener("load", i),
                  e.removeEventListener("error", o);
              },
              i = function(e) {
                r(), t();
              },
              o = function(e) {
                r(), n(e);
              };
            e.addEventListener("load", i), e.addEventListener("error", o);
          }),
          (e.prototype.load = function(e, t, n, r) {
            var i = document.createElement("script");
            i.setAttribute("async", "async"),
              i.setAttribute("type", "text/javascript"),
              this.attachListeners(i, n, r),
              i.setAttribute("src", t),
              document.getElementsByTagName("head")[0].appendChild(i);
          }),
          e
        );
      })(),
      r = (function() {
        function e() {}
        return (
          (e.prototype.load = function(e, t, n, r) {
            try {
              importScripts(t), n();
            } catch (e) {
              r(e);
            }
          }),
          e
        );
      })(),
      i = (function() {
        function t(e) {
          (this._env = e),
            (this._didInitialize = !1),
            (this._didPatchNodeRequire = !1);
        }
        return (
          (t.prototype._init = function(e) {
            if (!this._didInitialize) {
              (this._didInitialize = !0),
                (this._fs = e("fs")),
                (this._vm = e("vm")),
                (this._path = e("path")),
                (this._crypto = e("crypto")),
                (this._jsflags = "");
              for (var t = 0, n = process.argv; t < n.length; t++) {
                var r = n[t];
                if (0 === r.indexOf("--js-flags=")) {
                  this._jsflags = r;
                  break;
                }
              }
            }
          }),
          (t.prototype._initNodeRequire = function(t, n) {
            var r = n.getConfig().getOptionsLiteral().nodeCachedDataDir;
            if (r && !this._didPatchNodeRequire) {
              this._didPatchNodeRequire = !0;
              var i = this,
                o = t("module");
              o.prototype._compile = function(t, s) {
                t = t.replace(/^#!.*/, "");
                var u = o.wrap(t),
                  a = i._getCachedDataPath(r, s),
                  l = { filename: s };
                try {
                  l.cachedData = i._fs.readFileSync(a);
                } catch (e) {
                  l.produceCachedData = !0;
                }
                var c = new i._vm.Script(u, l),
                  f = c.runInThisContext(l),
                  h = i._path.dirname(s),
                  d = (function(e) {
                    var t = e.constructor,
                      n = function(t) {
                        try {
                          return e.require(t);
                        } finally {
                        }
                      };
                    return (
                      (n.resolve = function(n) {
                        return t._resolveFilename(n, e);
                      }),
                      (n.main = process.mainModule),
                      (n.extensions = t._extensions),
                      (n.cache = t._cache),
                      n
                    );
                  })(this),
                  p = [this.exports, d, this, s, h, process, e.global, Buffer],
                  m = f.apply(this.exports, p);
                return i._processCachedData(n, c, a), m;
              };
            }
          }),
          (t.prototype.load = function(n, r, i, o) {
            var s = this,
              u = n.getConfig().getOptionsLiteral(),
              a = u.nodeRequire || e.global.nodeRequire,
              l =
                u.nodeInstrumenter ||
                function(e) {
                  return e;
                };
            this._init(a), this._initNodeRequire(a, n);
            var c = n.getRecorder();
            if (/^node\|/.test(r)) {
              var f = r.split("|"),
                h = null;
              try {
                h = a(f[1]);
              } catch (e) {
                return void o(e);
              }
              n.enqueueDefineAnonymousModule([], function() {
                return h;
              }),
                i();
            } else
              (r = e.Utilities.fileUriToFilePath(this._env.isWindows, r)),
                this._fs.readFile(r, { encoding: "utf8" }, function(e, a) {
                  if (e) o(e);
                  else {
                    var f = s._path.normalize(r),
                      h = f;
                    if (s._env.isElectronRenderer) {
                      var d = h.match(/^([a-z])\:(.*)/i);
                      h = d
                        ? "file:///" +
                          (d[1].toUpperCase() + ":" + d[2]).replace(/\\/g, "/")
                        : "file://" + h;
                    }
                    var p,
                      m =
                        "(function (require, define, __filename, __dirname) { ";
                    if (
                      ((p =
                        a.charCodeAt(0) === t._BOM
                          ? m + a.substring(1) + "\n});"
                          : m + a + "\n});"),
                      (p = l(p, f)),
                      u.nodeCachedDataDir)
                    ) {
                      var _ = s._getCachedDataPath(u.nodeCachedDataDir, r);
                      s._fs.readFile(_, function(e, t) {
                        var o = {
                            filename: h,
                            produceCachedData: void 0 === t,
                            cachedData: t
                          },
                          u = s._loadAndEvalScript(n, r, h, p, o, c);
                        i(), s._processCachedData(n, u, _);
                      });
                    } else
                      s._loadAndEvalScript(n, r, h, p, { filename: h }, c), i();
                  }
                });
          }),
          (t.prototype._loadAndEvalScript = function(t, n, r, i, o, s) {
            s.record(31, n);
            var u = new this._vm.Script(i, o);
            return (
              u
                .runInThisContext(o)
                .call(
                  e.global,
                  t.getGlobalAMDRequireFunc(),
                  t.getGlobalAMDDefineFunc(),
                  r,
                  this._path.dirname(n)
                ),
              s.record(32, n),
              u
            );
          }),
          (t.prototype._getCachedDataPath = function(e, t) {
            var n = this._crypto
                .createHash("md5")
                .update(t, "utf8")
                .update(this._jsflags, "utf8")
                .digest("hex"),
              r = this._path.basename(t).replace(/\.js$/, "");
            return this._path.join(e, r + "-" + n + ".code");
          }),
          (t.prototype._processCachedData = function(e, n, r) {
            var i = this;
            n.cachedDataRejected
              ? (e
                  .getConfig()
                  .getOptionsLiteral()
                  .onNodeCachedData({
                    errorCode: "cachedDataRejected",
                    path: r
                  }),
                t._runSoon(function() {
                  return i._fs.unlink(r, function(t) {
                    t &&
                      e
                        .getConfig()
                        .getOptionsLiteral()
                        .onNodeCachedData({
                          errorCode: "unlink",
                          path: r,
                          detail: t
                        });
                  });
                }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay))
              : n.cachedDataProduced &&
                (e
                  .getConfig()
                  .getOptionsLiteral()
                  .onNodeCachedData(void 0, {
                    path: r,
                    length: n.cachedData.length
                  }),
                t._runSoon(function() {
                  return i._fs.writeFile(r, n.cachedData, function(t) {
                    t &&
                      e
                        .getConfig()
                        .getOptionsLiteral()
                        .onNodeCachedData({
                          errorCode: "writeFile",
                          path: r,
                          detail: t
                        });
                  });
                }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay));
          }),
          (t._runSoon = function(e, t) {
            var n = t + Math.ceil(Math.random() * t);
            setTimeout(e, n);
          }),
          (t._BOM = 65279),
          t
        );
      })();
    e.createScriptLoader = function(e) {
      return new t(e);
    };
  })(i || (i = {}));
  !(function(e) {
    var t = (function() {
      function t(e) {
        var t = e.lastIndexOf("/");
        this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : "";
      }
      return (
        (t._normalizeModuleId = function(e) {
          var t,
            n = e;
          for (t = /\/\.\//; t.test(n); ) n = n.replace(t, "/");
          for (
            n = n.replace(/^\.\//g, ""),
              t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
            t.test(n);

          )
            n = n.replace(t, "/");
          return (n = n.replace(
            /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
            ""
          ));
        }),
        (t.prototype.resolveModule = function(n) {
          var r = n;
          return (
            e.Utilities.isAbsolutePath(r) ||
              ((e.Utilities.startsWith(r, "./") ||
                e.Utilities.startsWith(r, "../")) &&
                (r = t._normalizeModuleId(this.fromModulePath + r))),
            r
          );
        }),
        (t.ROOT = new t("")),
        t
      );
    })();
    e.ModuleIdResolver = t;
    var n = (function() {
      function t(e, t, n, r, i, o) {
        (this.id = e),
          (this.strId = t),
          (this.dependencies = n),
          (this._callback = r),
          (this._errorback = i),
          (this.moduleIdResolver = o),
          (this.exports = {}),
          (this.exportsPassedIn = !1),
          (this.unresolvedDependenciesCount = this.dependencies.length),
          (this._isComplete = !1);
      }
      return (
        (t._safeInvokeFunction = function(t, n) {
          try {
            return { returnedValue: t.apply(e.global, n), producedError: null };
          } catch (e) {
            return { returnedValue: null, producedError: e };
          }
        }),
        (t._invokeFactory = function(t, n, r, i) {
          return t.isBuild() && !e.Utilities.isAnonymousModule(n)
            ? { returnedValue: null, producedError: null }
            : t.shouldCatchError()
              ? this._safeInvokeFunction(r, i)
              : { returnedValue: r.apply(e.global, i), producedError: null };
        }),
        (t.prototype.complete = function(n, r, i) {
          this._isComplete = !0;
          var o = null;
          if (this._callback)
            if ("function" == typeof this._callback) {
              n.record(21, this.strId);
              var s = t._invokeFactory(r, this.strId, this._callback, i);
              (o = s.producedError),
                n.record(22, this.strId),
                o ||
                  void 0 === s.returnedValue ||
                  (this.exportsPassedIn &&
                    !e.Utilities.isEmpty(this.exports)) ||
                  (this.exports = s.returnedValue);
            } else this.exports = this._callback;
          o &&
            r.onError({
              errorCode: "factory",
              moduleId: this.strId,
              detail: o
            }),
            (this.dependencies = null),
            (this._callback = null),
            (this._errorback = null),
            (this.moduleIdResolver = null);
        }),
        (t.prototype.onDependencyError = function(e) {
          return !!this._errorback && (this._errorback(e), !0);
        }),
        (t.prototype.isComplete = function() {
          return this._isComplete;
        }),
        t
      );
    })();
    e.Module = n;
    var r = (function() {
        function e() {
          (this._nextId = 0),
            (this._strModuleIdToIntModuleId = new Map()),
            (this._intModuleIdToStrModuleId = []),
            this.getModuleId("exports"),
            this.getModuleId("module"),
            this.getModuleId("require");
        }
        return (
          (e.prototype.getMaxModuleId = function() {
            return this._nextId;
          }),
          (e.prototype.getModuleId = function(e) {
            var t = this._strModuleIdToIntModuleId.get(e);
            return (
              void 0 === t &&
                ((t = this._nextId++),
                this._strModuleIdToIntModuleId.set(e, t),
                (this._intModuleIdToStrModuleId[t] = e)),
              t
            );
          }),
          (e.prototype.getStrModuleId = function(e) {
            return this._intModuleIdToStrModuleId[e];
          }),
          e
        );
      })(),
      i = (function() {
        function e(e) {
          this.id = e;
        }
        return (
          (e.EXPORTS = new e(0)),
          (e.MODULE = new e(1)),
          (e.REQUIRE = new e(2)),
          e
        );
      })();
    e.RegularDependency = i;
    var o = (function() {
      return function(e, t, n) {
        (this.id = e), (this.pluginId = t), (this.pluginParam = n);
      };
    })();
    e.PluginDependency = o;
    var s = (function() {
      function s(t, n, i, o, s) {
        void 0 === s && (s = 0),
          (this._env = t),
          (this._scriptLoader = n),
          (this._loaderAvailableTimestamp = s),
          (this._defineFunc = i),
          (this._requireFunc = o),
          (this._moduleIdProvider = new r()),
          (this._config = new e.Configuration(this._env)),
          (this._modules2 = []),
          (this._knownModules2 = []),
          (this._inverseDependencies2 = []),
          (this._inversePluginDependencies2 = new Map()),
          (this._currentAnnonymousDefineCall = null),
          (this._recorder = null),
          (this._buildInfoPath = []),
          (this._buildInfoDefineStack = []),
          (this._buildInfoDependencies = []);
      }
      return (
        (s.prototype.reset = function() {
          return new s(
            this._env,
            this._scriptLoader,
            this._defineFunc,
            this._requireFunc,
            this._loaderAvailableTimestamp
          );
        }),
        (s.prototype.getGlobalAMDDefineFunc = function() {
          return this._defineFunc;
        }),
        (s.prototype.getGlobalAMDRequireFunc = function() {
          return this._requireFunc;
        }),
        (s._findRelevantLocationInStack = function(e, t) {
          for (
            var n = function(e) {
                return e.replace(/\\/g, "/");
              },
              r = n(e),
              i = t.split(/\n/),
              o = 0;
            o < i.length;
            o++
          ) {
            var s = i[o].match(/(.*):(\d+):(\d+)\)?$/);
            if (s) {
              var u = s[1],
                a = s[2],
                l = s[3],
                c = Math.max(u.lastIndexOf(" ") + 1, u.lastIndexOf("(") + 1);
              if (((u = u.substr(c)), (u = n(u)) === r)) {
                var f = {
                  line: parseInt(a, 10),
                  col: parseInt(l, 10)
                };
                return (
                  1 === f.line &&
                    (f.col -= "(function (require, define, __filename, __dirname) { ".length),
                  f
                );
              }
            }
          }
          throw new Error(
            "Could not correlate define call site for needle " + e
          );
        }),
        (s.prototype.getBuildInfo = function() {
          if (!this._config.isBuild()) return null;
          for (
            var e = [], t = 0, n = 0, r = this._modules2.length;
            n < r;
            n++
          ) {
            var i = this._modules2[n];
            if (i) {
              var o = this._buildInfoPath[i.id] || null,
                u = this._buildInfoDefineStack[i.id] || null,
                a = this._buildInfoDependencies[i.id];
              e[t++] = {
                id: i.strId,
                path: o,
                defineLocation:
                  o && u ? s._findRelevantLocationInStack(o, u) : null,
                dependencies: a,
                shim: null,
                exports: i.exports
              };
            }
          }
          return e;
        }),
        (s.prototype.getRecorder = function() {
          return (
            this._recorder ||
              (this._config.shouldRecordStats()
                ? (this._recorder = new e.LoaderEventRecorder(
                    this._loaderAvailableTimestamp
                  ))
                : (this._recorder = e.NullLoaderEventRecorder.INSTANCE)),
            this._recorder
          );
        }),
        (s.prototype.getLoaderEvents = function() {
          return this.getRecorder().getEvents();
        }),
        (s.prototype.enqueueDefineAnonymousModule = function(e, t) {
          if (null !== this._currentAnnonymousDefineCall)
            throw new Error(
              "Can only have one anonymous define call per script file"
            );
          var n = null;
          this._config.isBuild() && (n = new Error("StackLocation").stack),
            (this._currentAnnonymousDefineCall = {
              stack: n,
              dependencies: e,
              callback: t
            });
        }),
        (s.prototype.defineModule = function(e, r, i, o, s, u) {
          var a = this;
          void 0 === u && (u = new t(e));
          var l = this._moduleIdProvider.getModuleId(e);
          if (this._modules2[l])
            this._config.isDuplicateMessageIgnoredFor(e) ||
              console.warn("Duplicate definition of module '" + e + "'");
          else {
            var c = new n(l, e, this._normalizeDependencies(r, u), i, o, u);
            (this._modules2[l] = c),
              this._config.isBuild() &&
                ((this._buildInfoDefineStack[l] = s),
                (this._buildInfoDependencies[l] = c.dependencies.map(function(
                  e
                ) {
                  return a._moduleIdProvider.getStrModuleId(e.id);
                }))),
              this._resolve(c);
          }
        }),
        (s.prototype._normalizeDependency = function(e, t) {
          if ("exports" === e) return i.EXPORTS;
          if ("module" === e) return i.MODULE;
          if ("require" === e) return i.REQUIRE;
          var n = e.indexOf("!");
          if (n >= 0) {
            var r = t.resolveModule(e.substr(0, n)),
              s = t.resolveModule(e.substr(n + 1)),
              u = this._moduleIdProvider.getModuleId(r + "!" + s),
              a = this._moduleIdProvider.getModuleId(r);
            return new o(u, a, s);
          }
          return new i(this._moduleIdProvider.getModuleId(t.resolveModule(e)));
        }),
        (s.prototype._normalizeDependencies = function(e, t) {
          for (var n = [], r = 0, i = 0, o = e.length; i < o; i++)
            n[r++] = this._normalizeDependency(e[i], t);
          return n;
        }),
        (s.prototype._relativeRequire = function(t, n, r, i) {
          if ("string" == typeof n) return this.synchronousRequire(n, t);
          this.defineModule(
            e.Utilities.generateAnonymousModule(),
            n,
            r,
            i,
            null,
            t
          );
        }),
        (s.prototype.synchronousRequire = function(e, n) {
          void 0 === n && (n = new t(e));
          var r = this._normalizeDependency(e, n),
            i = this._modules2[r.id];
          if (!i)
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                e +
                "'. This is the first mention of this module!"
            );
          if (!i.isComplete())
            throw new Error(
              "Check dependency list! Synchronous require cannot resolve module '" +
                e +
                "'. This module has not been resolved completely yet."
            );
          return i.exports;
        }),
        (s.prototype.configure = function(t, n) {
          var r = this._config.shouldRecordStats();
          (this._config = n
            ? new e.Configuration(this._env, t)
            : this._config.cloneAndMerge(t)),
            this._config.shouldRecordStats() && !r && (this._recorder = null);
        }),
        (s.prototype.getConfig = function() {
          return this._config;
        }),
        (s.prototype._onLoad = function(e) {
          if (null !== this._currentAnnonymousDefineCall) {
            var t = this._currentAnnonymousDefineCall;
            (this._currentAnnonymousDefineCall = null),
              this.defineModule(
                this._moduleIdProvider.getStrModuleId(e),
                t.dependencies,
                t.callback,
                null,
                t.stack
              );
          }
        }),
        (s.prototype._createLoadError = function(e, t) {
          var n = this;
          return {
            errorCode: "load",
            moduleId: this._moduleIdProvider.getStrModuleId(e),
            neededBy: (this._inverseDependencies2[e] || []).map(function(e) {
              return n._moduleIdProvider.getStrModuleId(e);
            }),
            detail: t
          };
        }),
        (s.prototype._onLoadError = function(e, t) {
          for (
            var n = this._createLoadError(e, t),
              r = [],
              i = 0,
              o = this._moduleIdProvider.getMaxModuleId();
            i < o;
            i++
          )
            r[i] = !1;
          var s = !1,
            u = [];
          for (u.push(e), r[e] = !0; u.length > 0; ) {
            var a = u.shift(),
              l = this._modules2[a];
            l && (s = l.onDependencyError(n) || s);
            var c = this._inverseDependencies2[a];
            if (c)
              for (var i = 0, o = c.length; i < o; i++) {
                var f = c[i];
                r[f] || (u.push(f), (r[f] = !0));
              }
          }
          s || this._config.onError(n);
        }),
        (s.prototype._hasDependencyPath = function(e, t) {
          var n = this._modules2[e];
          if (!n) return !1;
          for (
            var r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId();
            i < o;
            i++
          )
            r[i] = !1;
          var s = [];
          for (s.push(n), r[e] = !0; s.length > 0; ) {
            var u = s.shift().dependencies;
            if (u)
              for (var i = 0, o = u.length; i < o; i++) {
                var a = u[i];
                if (a.id === t) return !0;
                var l = this._modules2[a.id];
                l && !r[a.id] && ((r[a.id] = !0), s.push(l));
              }
          }
          return !1;
        }),
        (s.prototype._findCyclePath = function(e, t, n) {
          if (e === t || 50 === n) return [e];
          var r = this._modules2[e];
          if (!r) return null;
          for (var i = r.dependencies, o = 0, s = i.length; o < s; o++) {
            var u = this._findCyclePath(i[o].id, t, n + 1);
            if (null !== u) return u.push(e), u;
          }
          return null;
        }),
        (s.prototype._createRequire = function(t) {
          var n = this,
            r = function(e, r, i) {
              return n._relativeRequire(t, e, r, i);
            };
          return (
            (r.toUrl = function(e) {
              return n._config.requireToUrl(t.resolveModule(e));
            }),
            (r.getStats = function() {
              return n.getLoaderEvents();
            }),
            (r.__$__nodeRequire = e.global.nodeRequire),
            r
          );
        }),
        (s.prototype._loadModule = function(e) {
          var t = this;
          if (!this._modules2[e] && !this._knownModules2[e]) {
            this._knownModules2[e] = !0;
            var n = this._moduleIdProvider.getStrModuleId(e),
              r = this._config.moduleIdToPaths(n);
            this._env.isNode && -1 === n.indexOf("/") && r.push("node|" + n);
            var i = -1,
              o = function(n) {
                if (++i >= r.length) t._onLoadError(e, n);
                else {
                  var s = r[i],
                    u = t.getRecorder();
                  if (t._config.isBuild() && "empty:" === s)
                    return (
                      (t._buildInfoPath[e] = s),
                      t.defineModule(
                        t._moduleIdProvider.getStrModuleId(e),
                        [],
                        null,
                        null,
                        null
                      ),
                      void t._onLoad(e)
                    );
                  u.record(10, s),
                    t._scriptLoader.load(
                      t,
                      s,
                      function() {
                        t._config.isBuild() && (t._buildInfoPath[e] = s),
                          u.record(11, s),
                          t._onLoad(e);
                      },
                      function(e) {
                        u.record(12, s), o(e);
                      }
                    );
                }
              };
            o(null);
          }
        }),
        (s.prototype._loadPluginDependency = function(e, n) {
          var r = this;
          if (!this._modules2[n.id] && !this._knownModules2[n.id]) {
            this._knownModules2[n.id] = !0;
            var i = function(e) {
              r.defineModule(
                r._moduleIdProvider.getStrModuleId(n.id),
                [],
                e,
                null,
                null
              );
            };
            (i.error = function(e) {
              r._config.onError(r._createLoadError(n.id, e));
            }),
              e.load(
                n.pluginParam,
                this._createRequire(t.ROOT),
                i,
                this._config.getOptionsLiteral()
              );
          }
        }),
        (s.prototype._resolve = function(e) {
          for (
            var t = this, n = e.dependencies, r = 0, s = n.length;
            r < s;
            r++
          ) {
            var u = n[r];
            if (u !== i.EXPORTS)
              if (u !== i.MODULE)
                if (u !== i.REQUIRE) {
                  var a = this._modules2[u.id];
                  if (a && a.isComplete()) e.unresolvedDependenciesCount--;
                  else if (this._hasDependencyPath(u.id, e.id)) {
                    console.warn(
                      "There is a dependency cycle between '" +
                        this._moduleIdProvider.getStrModuleId(u.id) +
                        "' and '" +
                        this._moduleIdProvider.getStrModuleId(e.id) +
                        "'. The cyclic path follows:"
                    );
                    var l = this._findCyclePath(u.id, e.id, 0);
                    l.reverse(),
                      l.push(u.id),
                      console.warn(
                        l
                          .map(function(e) {
                            return t._moduleIdProvider.getStrModuleId(e);
                          })
                          .join(" => \n")
                      ),
                      e.unresolvedDependenciesCount--;
                  } else if (
                    ((this._inverseDependencies2[u.id] =
                      this._inverseDependencies2[u.id] || []),
                    this._inverseDependencies2[u.id].push(e.id),
                    u instanceof o)
                  ) {
                    var c = this._modules2[u.pluginId];
                    if (c && c.isComplete()) {
                      this._loadPluginDependency(c.exports, u);
                      continue;
                    }
                    var f = this._inversePluginDependencies2.get(u.pluginId);
                    f ||
                      ((f = []),
                      this._inversePluginDependencies2.set(u.pluginId, f)),
                      f.push(u),
                      this._loadModule(u.pluginId);
                  } else this._loadModule(u.id);
                } else e.unresolvedDependenciesCount--;
              else e.unresolvedDependenciesCount--;
            else (e.exportsPassedIn = !0), e.unresolvedDependenciesCount--;
          }
          0 === e.unresolvedDependenciesCount && this._onModuleComplete(e);
        }),
        (s.prototype._onModuleComplete = function(e) {
          var t = this,
            n = this.getRecorder();
          if (!e.isComplete()) {
            for (
              var r = e.dependencies, o = [], s = 0, u = r.length;
              s < u;
              s++
            ) {
              var a = r[s];
              if (a !== i.EXPORTS)
                if (a !== i.MODULE)
                  if (a !== i.REQUIRE) {
                    var l = this._modules2[a.id];
                    o[s] = l ? l.exports : null;
                  } else o[s] = this._createRequire(e.moduleIdResolver);
                else
                  o[s] = {
                    id: e.strId,
                    config: function() {
                      return t._config.getConfigForModule(e.strId);
                    }
                  };
              else o[s] = e.exports;
            }
            e.complete(n, this._config, o);
            var c = this._inverseDependencies2[e.id];
            if (((this._inverseDependencies2[e.id] = null), c))
              for (var s = 0, u = c.length; s < u; s++) {
                var f = c[s],
                  h = this._modules2[f];
                h.unresolvedDependenciesCount--,
                  0 === h.unresolvedDependenciesCount &&
                    this._onModuleComplete(h);
              }
            var d = this._inversePluginDependencies2.get(e.id);
            if (d) {
              this._inversePluginDependencies2.delete(e.id);
              for (var s = 0, u = d.length; s < u; s++)
                this._loadPluginDependency(e.exports, d[s]);
            }
          }
        }),
        s
      );
    })();
    e.ModuleManager = s;
  })(i || (i = {}));
  var r, i;
  !(function(e) {
    function t() {
      if (void 0 !== e.global.require || "undefined" != typeof require) {
        var t = e.global.require || require;
        if ("function" == typeof t && "function" == typeof t.resolve) {
          var r = function(e) {
            i.getRecorder().record(33, e);
            try {
              return t(e);
            } finally {
              i.getRecorder().record(34, e);
            }
          };
          (e.global.nodeRequire = r),
            (u.nodeRequire = r),
            (u.__$__nodeRequire = r);
        }
      }
      n.isNode && !n.isElectronRenderer
        ? ((module.exports = u), (require = u))
        : (n.isElectronRenderer || (e.global.define = o),
          (e.global.require = u));
    }
    var n = new e.Environment(),
      i = null,
      o = function(e, t, n) {
        "string" != typeof e && ((n = t), (t = e), (e = null)),
          ("object" == typeof t && Array.isArray(t)) || ((n = t), (t = null)),
          t || (t = ["require", "exports", "module"]),
          e
            ? i.defineModule(e, t, n, null, null)
            : i.enqueueDefineAnonymousModule(t, n);
      };
    o.amd = { jQuery: !0 };
    var s = function(e, t) {
        void 0 === t && (t = !1), i.configure(e, t);
      },
      u = function() {
        if (1 === arguments.length) {
          if (arguments[0] instanceof Object && !Array.isArray(arguments[0]))
            return void s(arguments[0]);
          if ("string" == typeof arguments[0])
            return i.synchronousRequire(arguments[0]);
        }
        if (
          (2 !== arguments.length && 3 !== arguments.length) ||
          !Array.isArray(arguments[0])
        )
          throw new Error("Unrecognized require call");
        i.defineModule(
          e.Utilities.generateAnonymousModule(),
          arguments[0],
          arguments[1],
          arguments[2],
          null
        );
      };
    (u.config = s),
      (u.getConfig = function() {
        return i.getConfig().getOptionsLiteral();
      }),
      (u.reset = function() {
        i = i.reset();
      }),
      (u.getBuildInfo = function() {
        return i.getBuildInfo();
      }),
      (u.getStats = function() {
        return i.getLoaderEvents();
      }),
      (e.init = t),
      ("function" == typeof e.global.define && e.global.define.amd) ||
        ((i = new e.ModuleManager(
          n,
          e.createScriptLoader(n),
          o,
          u,
          e.Utilities.getHighPerformanceTimestamp()
        )),
        void 0 !== e.global.require &&
          "function" != typeof e.global.require &&
          u.config(e.global.require),
        ((r = function() {
          return o.apply(null, arguments);
        }).amd =
          o.amd),
        "undefined" == typeof doNotInitLoader && t());
  })(i || (i = {})),
    r(e[22], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
        function e(e, t, n, r) {
          (this.originalStart = e),
            (this.originalLength = t),
            (this.modifiedStart = n),
            (this.modifiedLength = r);
        }
        return (
          (e.prototype.getOriginalEnd = function() {
            return this.originalStart + this.originalLength;
          }),
          (e.prototype.getModifiedEnd = function() {
            return this.modifiedStart + this.modifiedLength;
          }),
          e
        );
      })();
      t.DiffChange = n;
    }),
    r(e[13], t([1, 0, 22]), function(e, t, n) {
      "use strict";
      function r(e) {
        return {
          getLength: function() {
            return e.length;
          },
          getElementHash: function(t) {
            return e[t];
          }
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringDiff = function(e, t, n) {
          return new a(r(e), r(t)).ComputeDiff(n);
        });
      var i = (function() {
        function e() {}
        return (
          (e.Assert = function(e, t) {
            if (!e) throw new Error(t);
          }),
          e
        );
      })();
      t.Debug = i;
      var o = (function() {
        function e() {}
        return (
          (e.Copy = function(e, t, n, r, i) {
            for (var o = 0; o < i; o++) n[r + o] = e[t + o];
          }),
          e
        );
      })();
      t.MyArray = o;
      var s = (function() {
          function e() {
            (this.m_changes = []),
              (this.m_originalStart = Number.MAX_VALUE),
              (this.m_modifiedStart = Number.MAX_VALUE),
              (this.m_originalCount = 0),
              (this.m_modifiedCount = 0);
          }
          return (
            (e.prototype.MarkNextChange = function() {
              (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                this.m_changes.push(
                  new n.DiffChange(
                    this.m_originalStart,
                    this.m_originalCount,
                    this.m_modifiedStart,
                    this.m_modifiedCount
                  )
                ),
                (this.m_originalCount = 0),
                (this.m_modifiedCount = 0),
                (this.m_originalStart = Number.MAX_VALUE),
                (this.m_modifiedStart = Number.MAX_VALUE);
            }),
            (e.prototype.AddOriginalElement = function(e, t) {
              (this.m_originalStart = Math.min(this.m_originalStart, e)),
                (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                this.m_originalCount++;
            }),
            (e.prototype.AddModifiedElement = function(e, t) {
              (this.m_originalStart = Math.min(this.m_originalStart, e)),
                (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                this.m_modifiedCount++;
            }),
            (e.prototype.getChanges = function() {
              return (
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                  this.MarkNextChange(),
                this.m_changes
              );
            }),
            (e.prototype.getReverseChanges = function() {
              return (
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                  this.MarkNextChange(),
                this.m_changes.reverse(),
                this.m_changes
              );
            }),
            e
          );
        })(),
        u = Object.prototype.hasOwnProperty,
        a = (function() {
          function e(e, t, n) {
            void 0 === n && (n = null),
              (this.OriginalSequence = e),
              (this.ModifiedSequence = t),
              (this.ContinueProcessingPredicate = n),
              (this.m_originalIds = []),
              (this.m_modifiedIds = []),
              (this.m_forwardHistory = []),
              (this.m_reverseHistory = []),
              this.ComputeUniqueIdentifiers();
          }
          return (
            (e.prototype.ComputeUniqueIdentifiers = function() {
              var e = this.OriginalSequence.getLength(),
                t = this.ModifiedSequence.getLength();
              (this.m_originalIds = new Array(e)),
                (this.m_modifiedIds = new Array(t));
              var n,
                r = {},
                i = 1;
              for (n = 0; n < e; n++) {
                var o = this.OriginalSequence.getElementHash(n);
                u.call(r, o)
                  ? (this.m_originalIds[n] = r[o])
                  : ((this.m_originalIds[n] = i++),
                    (r[o] = this.m_originalIds[n]));
              }
              for (n = 0; n < t; n++) {
                var s = this.ModifiedSequence.getElementHash(n);
                u.call(r, s)
                  ? (this.m_modifiedIds[n] = r[s])
                  : ((this.m_modifiedIds[n] = i++),
                    (r[s] = this.m_modifiedIds[n]));
              }
            }),
            (e.prototype.ElementsAreEqual = function(e, t) {
              return this.m_originalIds[e] === this.m_modifiedIds[t];
            }),
            (e.prototype.OriginalElementsAreEqual = function(e, t) {
              return this.m_originalIds[e] === this.m_originalIds[t];
            }),
            (e.prototype.ModifiedElementsAreEqual = function(e, t) {
              return this.m_modifiedIds[e] === this.m_modifiedIds[t];
            }),
            (e.prototype.ComputeDiff = function(e) {
              return this._ComputeDiff(
                0,
                this.OriginalSequence.getLength() - 1,
                0,
                this.ModifiedSequence.getLength() - 1,
                e
              );
            }),
            (e.prototype._ComputeDiff = function(e, t, n, r, i) {
              var o = this.ComputeDiffRecursive(e, t, n, r, [!1]);
              return i ? this.ShiftChanges(o) : o;
            }),
            (e.prototype.ComputeDiffRecursive = function(e, t, r, o, s) {
              for (s[0] = !1; e <= t && r <= o && this.ElementsAreEqual(e, r); )
                e++, r++;
              for (; t >= e && o >= r && this.ElementsAreEqual(t, o); )
                t--, o--;
              if (e > t || r > o) {
                var u = void 0;
                return (
                  r <= o
                    ? (i.Assert(
                        e === t + 1,
                        "originalStart should only be one more than originalEnd"
                      ),
                      (u = [new n.DiffChange(e, 0, r, o - r + 1)]))
                    : e <= t
                      ? (i.Assert(
                          r === o + 1,
                          "modifiedStart should only be one more than modifiedEnd"
                        ),
                        (u = [new n.DiffChange(e, t - e + 1, r, 0)]))
                      : (i.Assert(
                          e === t + 1,
                          "originalStart should only be one more than originalEnd"
                        ),
                        i.Assert(
                          r === o + 1,
                          "modifiedStart should only be one more than modifiedEnd"
                        ),
                        (u = [])),
                  u
                );
              }
              var a = [0],
                l = [0],
                c = this.ComputeRecursionPoint(e, t, r, o, a, l, s),
                f = a[0],
                h = l[0];
              if (null !== c) return c;
              if (!s[0]) {
                var d = this.ComputeDiffRecursive(e, f, r, h, s),
                  p = [];
                return (
                  (p = s[0]
                    ? [
                        new n.DiffChange(
                          f + 1,
                          t - (f + 1) + 1,
                          h + 1,
                          o - (h + 1) + 1
                        )
                      ]
                    : this.ComputeDiffRecursive(f + 1, t, h + 1, o, s)),
                  this.ConcatenateChanges(d, p)
                );
              }
              return [new n.DiffChange(e, t - e + 1, r, o - r + 1)];
            }),
            (e.prototype.WALKTRACE = function(
              e,
              t,
              r,
              i,
              o,
              u,
              a,
              l,
              c,
              f,
              h,
              d,
              p,
              m,
              _,
              g,
              v,
              y
            ) {
              var b,
                C = null,
                E = null,
                S = new s(),
                L = t,
                A = r,
                N = p[0] - g[0] - i,
                P = Number.MIN_VALUE,
                M = this.m_forwardHistory.length - 1;
              do {
                (b = N + e) === L || (b < A && c[b - 1] < c[b + 1])
                  ? ((m = (h = c[b + 1]) - N - i),
                    h < P && S.MarkNextChange(),
                    (P = h),
                    S.AddModifiedElement(h + 1, m),
                    (N = b + 1 - e))
                  : ((m = (h = c[b - 1] + 1) - N - i),
                    h < P && S.MarkNextChange(),
                    (P = h - 1),
                    S.AddOriginalElement(h, m + 1),
                    (N = b - 1 - e)),
                  M >= 0 &&
                    ((e = (c = this.m_forwardHistory[M])[0]),
                    (L = 1),
                    (A = c.length - 1));
              } while (--M >= -1);
              if (((C = S.getReverseChanges()), y[0])) {
                var w = p[0] + 1,
                  D = g[0] + 1;
                if (null !== C && C.length > 0) {
                  var I = C[C.length - 1];
                  (w = Math.max(w, I.getOriginalEnd())),
                    (D = Math.max(D, I.getModifiedEnd()));
                }
                E = [new n.DiffChange(w, d - w + 1, D, _ - D + 1)];
              } else {
                (S = new s()),
                  (L = u),
                  (A = a),
                  (N = p[0] - g[0] - l),
                  (P = Number.MAX_VALUE),
                  (M = v
                    ? this.m_reverseHistory.length - 1
                    : this.m_reverseHistory.length - 2);
                do {
                  (b = N + o) === L || (b < A && f[b - 1] >= f[b + 1])
                    ? ((m = (h = f[b + 1] - 1) - N - l),
                      h > P && S.MarkNextChange(),
                      (P = h + 1),
                      S.AddOriginalElement(h + 1, m + 1),
                      (N = b + 1 - o))
                    : ((m = (h = f[b - 1]) - N - l),
                      h > P && S.MarkNextChange(),
                      (P = h),
                      S.AddModifiedElement(h + 1, m + 1),
                      (N = b - 1 - o)),
                    M >= 0 &&
                      ((o = (f = this.m_reverseHistory[M])[0]),
                      (L = 1),
                      (A = f.length - 1));
                } while (--M >= -1);
                E = S.getChanges();
              }
              return this.ConcatenateChanges(C, E);
            }),
            (e.prototype.ComputeRecursionPoint = function(e, t, r, i, s, u, a) {
              var l,
                c,
                f,
                h = 0,
                d = 0,
                p = 0,
                m = 0;
              e--,
                r--,
                (s[0] = 0),
                (u[0] = 0),
                (this.m_forwardHistory = []),
                (this.m_reverseHistory = []);
              var _ = t - e + (i - r),
                g = _ + 1,
                v = new Array(g),
                y = new Array(g),
                b = i - r,
                C = t - e,
                E = e - r,
                S = t - i,
                L = (C - b) % 2 == 0;
              (v[b] = e), (y[C] = t), (a[0] = !1);
              var A, N;
              for (f = 1; f <= _ / 2 + 1; f++) {
                var P = 0,
                  M = 0;
                for (
                  h = this.ClipDiagonalBound(b - f, f, b, g),
                    d = this.ClipDiagonalBound(b + f, f, b, g),
                    A = h;
                  A <= d;
                  A += 2
                ) {
                  for (
                    c =
                      (l =
                        A === h || (A < d && v[A - 1] < v[A + 1])
                          ? v[A + 1]
                          : v[A - 1] + 1) -
                      (A - b) -
                      E,
                      N = l;
                    l < t && c < i && this.ElementsAreEqual(l + 1, c + 1);

                  )
                    l++, c++;
                  if (
                    ((v[A] = l),
                    l + c > P + M && ((P = l), (M = c)),
                    !L && Math.abs(A - C) <= f - 1 && l >= y[A])
                  )
                    return (
                      (s[0] = l),
                      (u[0] = c),
                      N <= y[A] && f <= 1448
                        ? this.WALKTRACE(
                            b,
                            h,
                            d,
                            E,
                            C,
                            p,
                            m,
                            S,
                            v,
                            y,
                            l,
                            t,
                            s,
                            c,
                            i,
                            u,
                            L,
                            a
                          )
                        : null
                    );
                }
                var w = (P - e + (M - r) - f) / 2;
                if (
                  null !== this.ContinueProcessingPredicate &&
                  !this.ContinueProcessingPredicate(P, this.OriginalSequence, w)
                )
                  return (
                    (a[0] = !0),
                    (s[0] = P),
                    (u[0] = M),
                    w > 0 && f <= 1448
                      ? this.WALKTRACE(
                          b,
                          h,
                          d,
                          E,
                          C,
                          p,
                          m,
                          S,
                          v,
                          y,
                          l,
                          t,
                          s,
                          c,
                          i,
                          u,
                          L,
                          a
                        )
                      : (e++,
                        r++,
                        [new n.DiffChange(e, t - e + 1, r, i - r + 1)])
                  );
                for (
                  p = this.ClipDiagonalBound(C - f, f, C, g),
                    m = this.ClipDiagonalBound(C + f, f, C, g),
                    A = p;
                  A <= m;
                  A += 2
                ) {
                  for (
                    c =
                      (l =
                        A === p || (A < m && y[A - 1] >= y[A + 1])
                          ? y[A + 1] - 1
                          : y[A - 1]) -
                      (A - C) -
                      S,
                      N = l;
                    l > e && c > r && this.ElementsAreEqual(l, c);

                  )
                    l--, c--;
                  if (((y[A] = l), L && Math.abs(A - b) <= f && l <= v[A]))
                    return (
                      (s[0] = l),
                      (u[0] = c),
                      N >= v[A] && f <= 1448
                        ? this.WALKTRACE(
                            b,
                            h,
                            d,
                            E,
                            C,
                            p,
                            m,
                            S,
                            v,
                            y,
                            l,
                            t,
                            s,
                            c,
                            i,
                            u,
                            L,
                            a
                          )
                        : null
                    );
                }
                if (f <= 1447) {
                  var D = new Array(d - h + 2);
                  (D[0] = b - h + 1),
                    o.Copy(v, h, D, 1, d - h + 1),
                    this.m_forwardHistory.push(D),
                    ((D = new Array(m - p + 2))[0] = C - p + 1),
                    o.Copy(y, p, D, 1, m - p + 1),
                    this.m_reverseHistory.push(D);
                }
              }
              return this.WALKTRACE(
                b,
                h,
                d,
                E,
                C,
                p,
                m,
                S,
                v,
                y,
                l,
                t,
                s,
                c,
                i,
                u,
                L,
                a
              );
            }),
            (e.prototype.ShiftChanges = function(e) {
              var t;
              do {
                t = !1;
                for (l = 0; l < e.length; l++)
                  for (
                    var n = e[l],
                      r =
                        l < e.length - 1
                          ? e[l + 1].originalStart
                          : this.OriginalSequence.getLength(),
                      i =
                        l < e.length - 1
                          ? e[l + 1].modifiedStart
                          : this.ModifiedSequence.getLength(),
                      o = n.originalLength > 0,
                      s = n.modifiedLength > 0;
                    n.originalStart + n.originalLength < r &&
                    n.modifiedStart + n.modifiedLength < i &&
                    (!o ||
                      this.OriginalElementsAreEqual(
                        n.originalStart,
                        n.originalStart + n.originalLength
                      )) &&
                    (!s ||
                      this.ModifiedElementsAreEqual(
                        n.modifiedStart,
                        n.modifiedStart + n.modifiedLength
                      ));

                  )
                    n.originalStart++, n.modifiedStart++;
                for (var u = new Array(), a = [null], l = 0; l < e.length; l++)
                  l < e.length - 1 && this.ChangesOverlap(e[l], e[l + 1], a)
                    ? ((t = !0), u.push(a[0]), l++)
                    : u.push(e[l]);
                e = u;
              } while (t);
              for (l = e.length - 1; l >= 0; l--) {
                var n = e[l],
                  r = 0,
                  i = 0;
                if (l > 0) {
                  var c = e[l - 1];
                  c.originalLength > 0 &&
                    (r = c.originalStart + c.originalLength),
                    c.modifiedLength > 0 &&
                      (i = c.modifiedStart + c.modifiedLength);
                }
                for (
                  var o = n.originalLength > 0,
                    s = n.modifiedLength > 0,
                    f = 0,
                    h = this._boundaryScore(
                      n.originalStart,
                      n.originalLength,
                      n.modifiedStart,
                      n.modifiedLength
                    ),
                    d = 1;
                  ;
                  d++
                ) {
                  var p = n.originalStart - d,
                    m = n.modifiedStart - d;
                  if (p < r || m < i) break;
                  if (
                    o &&
                    !this.OriginalElementsAreEqual(p, p + n.originalLength)
                  )
                    break;
                  if (
                    s &&
                    !this.ModifiedElementsAreEqual(m, m + n.modifiedLength)
                  )
                    break;
                  var _ = this._boundaryScore(
                    p,
                    n.originalLength,
                    m,
                    n.modifiedLength
                  );
                  _ > h && ((h = _), (f = d));
                }
                (n.originalStart -= f), (n.modifiedStart -= f);
              }
              return e;
            }),
            (e.prototype._OriginalIsBoundary = function(e) {
              return (
                e <= 0 ||
                e >= this.OriginalSequence.getLength() - 1 ||
                /^\s*$/.test(this.OriginalSequence.getElementHash(e))
              );
            }),
            (e.prototype._OriginalRegionIsBoundary = function(e, t) {
              if (
                this._OriginalIsBoundary(e) ||
                this._OriginalIsBoundary(e - 1)
              )
                return !0;
              if (t > 0) {
                var n = e + t;
                if (
                  this._OriginalIsBoundary(n - 1) ||
                  this._OriginalIsBoundary(n)
                )
                  return !0;
              }
              return !1;
            }),
            (e.prototype._ModifiedIsBoundary = function(e) {
              return (
                e <= 0 ||
                e >= this.ModifiedSequence.getLength() - 1 ||
                /^\s*$/.test(this.ModifiedSequence.getElementHash(e))
              );
            }),
            (e.prototype._ModifiedRegionIsBoundary = function(e, t) {
              if (
                this._ModifiedIsBoundary(e) ||
                this._ModifiedIsBoundary(e - 1)
              )
                return !0;
              if (t > 0) {
                var n = e + t;
                if (
                  this._ModifiedIsBoundary(n - 1) ||
                  this._ModifiedIsBoundary(n)
                )
                  return !0;
              }
              return !1;
            }),
            (e.prototype._boundaryScore = function(e, t, n, r) {
              return (
                (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) +
                (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0)
              );
            }),
            (e.prototype.ConcatenateChanges = function(e, t) {
              var n = [],
                r = null;
              return 0 === e.length || 0 === t.length
                ? t.length > 0
                  ? t
                  : e
                : this.ChangesOverlap(e[e.length - 1], t[0], n)
                  ? ((r = new Array(e.length + t.length - 1)),
                    o.Copy(e, 0, r, 0, e.length - 1),
                    (r[e.length - 1] = n[0]),
                    o.Copy(t, 1, r, e.length, t.length - 1),
                    r)
                  : ((r = new Array(e.length + t.length)),
                    o.Copy(e, 0, r, 0, e.length),
                    o.Copy(t, 0, r, e.length, t.length),
                    r);
            }),
            (e.prototype.ChangesOverlap = function(e, t, r) {
              if (
                (i.Assert(
                  e.originalStart <= t.originalStart,
                  "Left change is not less than or equal to right change"
                ),
                i.Assert(
                  e.modifiedStart <= t.modifiedStart,
                  "Left change is not less than or equal to right change"
                ),
                e.originalStart + e.originalLength >= t.originalStart ||
                  e.modifiedStart + e.modifiedLength >= t.modifiedStart)
              ) {
                var o = e.originalStart,
                  s = e.originalLength,
                  u = e.modifiedStart,
                  a = e.modifiedLength;
                return (
                  e.originalStart + e.originalLength >= t.originalStart &&
                    (s = t.originalStart + t.originalLength - e.originalStart),
                  e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                    (a = t.modifiedStart + t.modifiedLength - e.modifiedStart),
                  (r[0] = new n.DiffChange(o, s, u, a)),
                  !0
                );
              }
              return (r[0] = null), !1;
            }),
            (e.prototype.ClipDiagonalBound = function(e, t, n, r) {
              if (e >= 0 && e < r) return e;
              var i = r - n - 1,
                o = t % 2 == 0;
              if (e < 0) {
                return o === (n % 2 == 0) ? 0 : 1;
              }
              return o === (i % 2 == 0) ? r - 1 : r - 2;
            }),
            e
          );
        })();
      t.LcsDiff = a;
    }),
    r(e[12], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.once = function(e) {
          var t,
            n = this,
            r = !1;
          return function() {
            return r ? t : ((r = !0), (t = e.apply(n, arguments)));
          };
        });
    }),
    r(e[19], t([1, 0]), function(e, t) {
      "use strict";
      function n(e, t) {
        var n = !!(2048 & e),
          r = !!(256 & e);
        return new a(
          2 === t ? r : n,
          !!(1024 & e),
          !!(512 & e),
          2 === t ? n : r,
          255 & e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function(e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Backspace = 1)] = "Backspace"),
          (e[(e.Tab = 2)] = "Tab"),
          (e[(e.Enter = 3)] = "Enter"),
          (e[(e.Shift = 4)] = "Shift"),
          (e[(e.Ctrl = 5)] = "Ctrl"),
          (e[(e.Alt = 6)] = "Alt"),
          (e[(e.PauseBreak = 7)] = "PauseBreak"),
          (e[(e.CapsLock = 8)] = "CapsLock"),
          (e[(e.Escape = 9)] = "Escape"),
          (e[(e.Space = 10)] = "Space"),
          (e[(e.PageUp = 11)] = "PageUp"),
          (e[(e.PageDown = 12)] = "PageDown"),
          (e[(e.End = 13)] = "End"),
          (e[(e.Home = 14)] = "Home"),
          (e[(e.LeftArrow = 15)] = "LeftArrow"),
          (e[(e.UpArrow = 16)] = "UpArrow"),
          (e[(e.RightArrow = 17)] = "RightArrow"),
          (e[(e.DownArrow = 18)] = "DownArrow"),
          (e[(e.Insert = 19)] = "Insert"),
          (e[(e.Delete = 20)] = "Delete"),
          (e[(e.KEY_0 = 21)] = "KEY_0"),
          (e[(e.KEY_1 = 22)] = "KEY_1"),
          (e[(e.KEY_2 = 23)] = "KEY_2"),
          (e[(e.KEY_3 = 24)] = "KEY_3"),
          (e[(e.KEY_4 = 25)] = "KEY_4"),
          (e[(e.KEY_5 = 26)] = "KEY_5"),
          (e[(e.KEY_6 = 27)] = "KEY_6"),
          (e[(e.KEY_7 = 28)] = "KEY_7"),
          (e[(e.KEY_8 = 29)] = "KEY_8"),
          (e[(e.KEY_9 = 30)] = "KEY_9"),
          (e[(e.KEY_A = 31)] = "KEY_A"),
          (e[(e.KEY_B = 32)] = "KEY_B"),
          (e[(e.KEY_C = 33)] = "KEY_C"),
          (e[(e.KEY_D = 34)] = "KEY_D"),
          (e[(e.KEY_E = 35)] = "KEY_E"),
          (e[(e.KEY_F = 36)] = "KEY_F"),
          (e[(e.KEY_G = 37)] = "KEY_G"),
          (e[(e.KEY_H = 38)] = "KEY_H"),
          (e[(e.KEY_I = 39)] = "KEY_I"),
          (e[(e.KEY_J = 40)] = "KEY_J"),
          (e[(e.KEY_K = 41)] = "KEY_K"),
          (e[(e.KEY_L = 42)] = "KEY_L"),
          (e[(e.KEY_M = 43)] = "KEY_M"),
          (e[(e.KEY_N = 44)] = "KEY_N"),
          (e[(e.KEY_O = 45)] = "KEY_O"),
          (e[(e.KEY_P = 46)] = "KEY_P"),
          (e[(e.KEY_Q = 47)] = "KEY_Q"),
          (e[(e.KEY_R = 48)] = "KEY_R"),
          (e[(e.KEY_S = 49)] = "KEY_S"),
          (e[(e.KEY_T = 50)] = "KEY_T"),
          (e[(e.KEY_U = 51)] = "KEY_U"),
          (e[(e.KEY_V = 52)] = "KEY_V"),
          (e[(e.KEY_W = 53)] = "KEY_W"),
          (e[(e.KEY_X = 54)] = "KEY_X"),
          (e[(e.KEY_Y = 55)] = "KEY_Y"),
          (e[(e.KEY_Z = 56)] = "KEY_Z"),
          (e[(e.Meta = 57)] = "Meta"),
          (e[(e.ContextMenu = 58)] = "ContextMenu"),
          (e[(e.F1 = 59)] = "F1"),
          (e[(e.F2 = 60)] = "F2"),
          (e[(e.F3 = 61)] = "F3"),
          (e[(e.F4 = 62)] = "F4"),
          (e[(e.F5 = 63)] = "F5"),
          (e[(e.F6 = 64)] = "F6"),
          (e[(e.F7 = 65)] = "F7"),
          (e[(e.F8 = 66)] = "F8"),
          (e[(e.F9 = 67)] = "F9"),
          (e[(e.F10 = 68)] = "F10"),
          (e[(e.F11 = 69)] = "F11"),
          (e[(e.F12 = 70)] = "F12"),
          (e[(e.F13 = 71)] = "F13"),
          (e[(e.F14 = 72)] = "F14"),
          (e[(e.F15 = 73)] = "F15"),
          (e[(e.F16 = 74)] = "F16"),
          (e[(e.F17 = 75)] = "F17"),
          (e[(e.F18 = 76)] = "F18"),
          (e[(e.F19 = 77)] = "F19"),
          (e[(e.NumLock = 78)] = "NumLock"),
          (e[(e.ScrollLock = 79)] = "ScrollLock"),
          (e[(e.US_SEMICOLON = 80)] = "US_SEMICOLON"),
          (e[(e.US_EQUAL = 81)] = "US_EQUAL"),
          (e[(e.US_COMMA = 82)] = "US_COMMA"),
          (e[(e.US_MINUS = 83)] = "US_MINUS"),
          (e[(e.US_DOT = 84)] = "US_DOT"),
          (e[(e.US_SLASH = 85)] = "US_SLASH"),
          (e[(e.US_BACKTICK = 86)] = "US_BACKTICK"),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = "US_OPEN_SQUARE_BRACKET"),
          (e[(e.US_BACKSLASH = 88)] = "US_BACKSLASH"),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = "US_CLOSE_SQUARE_BRACKET"),
          (e[(e.US_QUOTE = 90)] = "US_QUOTE"),
          (e[(e.OEM_8 = 91)] = "OEM_8"),
          (e[(e.OEM_102 = 92)] = "OEM_102"),
          (e[(e.NUMPAD_0 = 93)] = "NUMPAD_0"),
          (e[(e.NUMPAD_1 = 94)] = "NUMPAD_1"),
          (e[(e.NUMPAD_2 = 95)] = "NUMPAD_2"),
          (e[(e.NUMPAD_3 = 96)] = "NUMPAD_3"),
          (e[(e.NUMPAD_4 = 97)] = "NUMPAD_4"),
          (e[(e.NUMPAD_5 = 98)] = "NUMPAD_5"),
          (e[(e.NUMPAD_6 = 99)] = "NUMPAD_6"),
          (e[(e.NUMPAD_7 = 100)] = "NUMPAD_7"),
          (e[(e.NUMPAD_8 = 101)] = "NUMPAD_8"),
          (e[(e.NUMPAD_9 = 102)] = "NUMPAD_9"),
          (e[(e.NUMPAD_MULTIPLY = 103)] = "NUMPAD_MULTIPLY"),
          (e[(e.NUMPAD_ADD = 104)] = "NUMPAD_ADD"),
          (e[(e.NUMPAD_SEPARATOR = 105)] = "NUMPAD_SEPARATOR"),
          (e[(e.NUMPAD_SUBTRACT = 106)] = "NUMPAD_SUBTRACT"),
          (e[(e.NUMPAD_DECIMAL = 107)] = "NUMPAD_DECIMAL"),
          (e[(e.NUMPAD_DIVIDE = 108)] = "NUMPAD_DIVIDE"),
          (e[(e.KEY_IN_COMPOSITION = 109)] = "KEY_IN_COMPOSITION"),
          (e[(e.ABNT_C1 = 110)] = "ABNT_C1"),
          (e[(e.ABNT_C2 = 111)] = "ABNT_C2"),
          (e[(e.MAX_VALUE = 112)] = "MAX_VALUE");
      })(t.KeyCode || (t.KeyCode = {}));
      var r = (function() {
          function e() {
            (this._keyCodeToStr = []),
              (this._strToKeyCode = Object.create(null));
          }
          return (
            (e.prototype.define = function(e, t) {
              (this._keyCodeToStr[e] = t),
                (this._strToKeyCode[t.toLowerCase()] = e);
            }),
            (e.prototype.keyCodeToStr = function(e) {
              return this._keyCodeToStr[e];
            }),
            (e.prototype.strToKeyCode = function(e) {
              return this._strToKeyCode[e.toLowerCase()] || 0;
            }),
            e
          );
        })(),
        i = new r(),
        o = new r(),
        s = new r();
      !(function() {
        function e(e, t, n, r) {
          void 0 === n && (n = t),
            void 0 === r && (r = n),
            i.define(e, t),
            o.define(e, n),
            s.define(e, r);
        }
        e(0, "unknown"),
          e(1, "Backspace"),
          e(2, "Tab"),
          e(3, "Enter"),
          e(4, "Shift"),
          e(5, "Ctrl"),
          e(6, "Alt"),
          e(7, "PauseBreak"),
          e(8, "CapsLock"),
          e(9, "Escape"),
          e(10, "Space"),
          e(11, "PageUp"),
          e(12, "PageDown"),
          e(13, "End"),
          e(14, "Home"),
          e(15, "LeftArrow", "Left"),
          e(16, "UpArrow", "Up"),
          e(17, "RightArrow", "Right"),
          e(18, "DownArrow", "Down"),
          e(19, "Insert"),
          e(20, "Delete"),
          e(21, "0"),
          e(22, "1"),
          e(23, "2"),
          e(24, "3"),
          e(25, "4"),
          e(26, "5"),
          e(27, "6"),
          e(28, "7"),
          e(29, "8"),
          e(30, "9"),
          e(31, "A"),
          e(32, "B"),
          e(33, "C"),
          e(34, "D"),
          e(35, "E"),
          e(36, "F"),
          e(37, "G"),
          e(38, "H"),
          e(39, "I"),
          e(40, "J"),
          e(41, "K"),
          e(42, "L"),
          e(43, "M"),
          e(44, "N"),
          e(45, "O"),
          e(46, "P"),
          e(47, "Q"),
          e(48, "R"),
          e(49, "S"),
          e(50, "T"),
          e(51, "U"),
          e(52, "V"),
          e(53, "W"),
          e(54, "X"),
          e(55, "Y"),
          e(56, "Z"),
          e(57, "Meta"),
          e(58, "ContextMenu"),
          e(59, "F1"),
          e(60, "F2"),
          e(61, "F3"),
          e(62, "F4"),
          e(63, "F5"),
          e(64, "F6"),
          e(65, "F7"),
          e(66, "F8"),
          e(67, "F9"),
          e(68, "F10"),
          e(69, "F11"),
          e(70, "F12"),
          e(71, "F13"),
          e(72, "F14"),
          e(73, "F15"),
          e(74, "F16"),
          e(75, "F17"),
          e(76, "F18"),
          e(77, "F19"),
          e(78, "NumLock"),
          e(79, "ScrollLock"),
          e(80, ";", ";", "OEM_1"),
          e(81, "=", "=", "OEM_PLUS"),
          e(82, ",", ",", "OEM_COMMA"),
          e(83, "-", "-", "OEM_MINUS"),
          e(84, ".", ".", "OEM_PERIOD"),
          e(85, "/", "/", "OEM_2"),
          e(86, "`", "`", "OEM_3"),
          e(110, "ABNT_C1"),
          e(111, "ABNT_C2"),
          e(87, "[", "[", "OEM_4"),
          e(88, "\\", "\\", "OEM_5"),
          e(89, "]", "]", "OEM_6"),
          e(90, "'", "'", "OEM_7"),
          e(91, "OEM_8"),
          e(92, "OEM_102"),
          e(93, "NumPad0"),
          e(94, "NumPad1"),
          e(95, "NumPad2"),
          e(96, "NumPad3"),
          e(97, "NumPad4"),
          e(98, "NumPad5"),
          e(99, "NumPad6"),
          e(100, "NumPad7"),
          e(101, "NumPad8"),
          e(102, "NumPad9"),
          e(103, "NumPad_Multiply"),
          e(104, "NumPad_Add"),
          e(105, "NumPad_Separator"),
          e(106, "NumPad_Subtract"),
          e(107, "NumPad_Decimal"),
          e(108, "NumPad_Divide");
      })();
      !(function(e) {
        (e.toString = function(e) {
          return i.keyCodeToStr(e);
        }),
          (e.fromString = function(e) {
            return i.strToKeyCode(e);
          }),
          (e.toUserSettingsUS = function(e) {
            return o.keyCodeToStr(e);
          }),
          (e.toUserSettingsGeneral = function(e) {
            return s.keyCodeToStr(e);
          }),
          (e.fromUserSettings = function(e) {
            return o.strToKeyCode(e) || s.strToKeyCode(e);
          });
      })(t.KeyCodeUtils || (t.KeyCodeUtils = {}));
      var u;
      !(function(e) {
        (e[(e.CtrlCmd = 2048)] = "CtrlCmd"),
          (e[(e.Shift = 1024)] = "Shift"),
          (e[(e.Alt = 512)] = "Alt"),
          (e[(e.WinCtrl = 256)] = "WinCtrl"),
          (e[(e.KeyCode = 255)] = "KeyCode");
      })(u || (u = {}));
      !(function(e) {
        (e[(e.CtrlCmd = 2048)] = "CtrlCmd"),
          (e[(e.Shift = 1024)] = "Shift"),
          (e[(e.Alt = 512)] = "Alt"),
          (e[(e.WinCtrl = 256)] = "WinCtrl");
      })(t.KeyMod || (t.KeyMod = {})),
        (t.KeyChord = function(e, t) {
          return (e | (((65535 & t) << 16) >>> 0)) >>> 0;
        }),
        (t.createKeybinding = function(e, t) {
          if (0 === e) return null;
          var r = (65535 & e) >>> 0,
            i = (4294901760 & e) >>> 16;
          return 0 !== i ? new l(n(r, t), n(i, t)) : n(r, t);
        }),
        (t.createSimpleKeybinding = n);
      !(function(e) {
        (e[(e.Simple = 1)] = "Simple"), (e[(e.Chord = 2)] = "Chord");
      })(t.KeybindingType || (t.KeybindingType = {}));
      var a = (function() {
        function e(e, t, n, r, i) {
          (this.type = 1),
            (this.ctrlKey = e),
            (this.shiftKey = t),
            (this.altKey = n),
            (this.metaKey = r),
            (this.keyCode = i);
        }
        return (
          (e.prototype.equals = function(e) {
            return (
              1 === e.type &&
              (this.ctrlKey === e.ctrlKey &&
                this.shiftKey === e.shiftKey &&
                this.altKey === e.altKey &&
                this.metaKey === e.metaKey &&
                this.keyCode === e.keyCode)
            );
          }),
          (e.prototype.getHashCode = function() {
            return (
              "" +
              (this.ctrlKey ? "1" : "0") +
              (this.shiftKey ? "1" : "0") +
              (this.altKey ? "1" : "0") +
              (this.metaKey ? "1" : "0") +
              this.keyCode
            );
          }),
          (e.prototype.isModifierKey = function() {
            return (
              0 === this.keyCode ||
              5 === this.keyCode ||
              57 === this.keyCode ||
              6 === this.keyCode ||
              4 === this.keyCode
            );
          }),
          (e.prototype.isDuplicateModifierCase = function() {
            return (
              (this.ctrlKey && 5 === this.keyCode) ||
              (this.shiftKey && 4 === this.keyCode) ||
              (this.altKey && 6 === this.keyCode) ||
              (this.metaKey && 57 === this.keyCode)
            );
          }),
          e
        );
      })();
      t.SimpleKeybinding = a;
      var l = (function() {
        function e(e, t) {
          (this.type = 2), (this.firstPart = e), (this.chordPart = t);
        }
        return (
          (e.prototype.getHashCode = function() {
            return (
              this.firstPart.getHashCode() + ";" + this.chordPart.getHashCode()
            );
          }),
          e
        );
      })();
      t.ChordKeybinding = l;
      var c = (function() {
        return function(e, t, n, r, i, o) {
          (this.ctrlKey = e),
            (this.shiftKey = t),
            (this.altKey = n),
            (this.metaKey = r),
            (this.keyLabel = i),
            (this.keyAriaLabel = o);
        };
      })();
      t.ResolvedKeybindingPart = c;
      var f = (function() {
        return function() {};
      })();
      t.ResolvedKeybinding = f;
    }),
    r(e[10], t([1, 0, 12]), function(e, t, n) {
      "use strict";
      function r(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return Array.isArray(e)
          ? (e.forEach(function(e) {
              return e && e.dispose();
            }),
            [])
          : 0 !== t.length
            ? (r(e), r(t), [])
            : e
              ? (e.dispose(), e)
              : void 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.empty = Object.freeze({ dispose: function() {} })),
        (t.isDisposable = function(e) {
          return "function" == typeof e.dispose && 0 === e.dispose.length;
        }),
        (t.dispose = r),
        (t.combinedDisposable = function(e) {
          return {
            dispose: function() {
              return r(e);
            }
          };
        }),
        (t.toDisposable = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return {
            dispose: function() {
              for (var t = 0, n = e; t < n.length; t++) (0, n[t])();
            }
          };
        });
      var i = (function() {
        function e() {
          this._toDispose = [];
        }
        return (
          (e.prototype.dispose = function() {
            this._toDispose = r(this._toDispose);
          }),
          (e.prototype._register = function(e) {
            return this._toDispose.push(e), e;
          }),
          e
        );
      })();
      t.Disposable = i;
      var o = (function() {
        function e() {
          this.references = Object.create(null);
        }
        return (
          (e.prototype.acquire = function(e) {
            var t = this,
              r = this.references[e];
            r ||
              (r = this.references[e] = {
                counter: 0,
                object: this.createReferencedObject(e)
              });
            var i = r.object,
              o = n.once(function() {
                0 == --r.counter &&
                  (t.destroyReferencedObject(r.object), delete t.references[e]);
              });
            return r.counter++, { object: i, dispose: o };
          }),
          e
        );
      })();
      t.ReferenceCollection = o;
      var s = (function() {
        function e(e) {
          this.object = e;
        }
        return (e.prototype.dispose = function() {}), e;
      })();
      t.ImmortalReference = s;
    }),
    r(e[18], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
          return function(e) {
            this.element = e;
          };
        })(),
        r = (function() {
          function e() {}
          return (
            (e.prototype.isEmpty = function() {
              return !this._first;
            }),
            (e.prototype.clear = function() {
              (this._first = void 0), (this._last = void 0);
            }),
            (e.prototype.unshift = function(e) {
              return this.insert(e, !1);
            }),
            (e.prototype.push = function(e) {
              return this.insert(e, !0);
            }),
            (e.prototype.insert = function(e, t) {
              var r = this,
                i = new n(e);
              if (this._first)
                if (t) {
                  var o = this._last;
                  (this._last = i), (i.prev = o), (o.next = i);
                } else {
                  var s = this._first;
                  (this._first = i), (i.next = s), (s.prev = i);
                }
              else (this._first = i), (this._last = i);
              return function() {
                for (var e = r._first; e instanceof n; e = e.next)
                  if (e === i) {
                    if (e.prev && e.next) {
                      var t = e.prev;
                      (t.next = e.next), (e.next.prev = t);
                    } else
                      e.prev || e.next
                        ? e.next
                          ? e.prev ||
                            ((r._first = r._first.next),
                            (r._first.prev = void 0))
                          : ((r._last = r._last.prev), (r._last.next = void 0))
                        : ((r._first = void 0), (r._last = void 0));
                    break;
                  }
              };
            }),
            (e.prototype.iterator = function() {
              var e = { done: void 0, value: void 0 },
                t = this._first;
              return {
                next: function() {
                  return (
                    t
                      ? ((e.done = !1), (e.value = t.element), (t = t.next))
                      : ((e.done = !0), (e.value = void 0)),
                    e
                  );
                }
              };
            }),
            (e.prototype.toArray = function() {
              for (var e = [], t = this._first; t instanceof n; t = t.next)
                e.push(t.element);
              return e;
            }),
            e
          );
        })();
      t.LinkedList = r;
    }),
    r(e[5], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = !1,
        r = !1,
        i = !1,
        o = !1,
        s = !1,
        u = void 0,
        a = void 0,
        l = void 0;
      if (
        ((t.LANGUAGE_DEFAULT = "en"),
        "object" == typeof process &&
          "function" == typeof process.nextTick &&
          "string" == typeof process.platform)
      ) {
        (n = "win32" === process.platform),
          (r = "darwin" === process.platform),
          (i = "linux" === process.platform);
        var c = process.env.VSCODE_NLS_CONFIG;
        if (c)
          try {
            var f = JSON.parse(c),
              h = f.availableLanguages["*"];
            (u = f.locale),
              (a = h || t.LANGUAGE_DEFAULT),
              (l = f._translationsConfigFile);
          } catch (e) {}
        o = !0;
      } else if ("object" == typeof navigator) {
        var d = navigator.userAgent;
        (n = d.indexOf("Windows") >= 0),
          (r = d.indexOf("Macintosh") >= 0),
          (i = d.indexOf("Linux") >= 0),
          (s = !0),
          (a = u = navigator.language);
      }
      var p;
      !(function(e) {
        (e[(e.Web = 0)] = "Web"),
          (e[(e.Mac = 1)] = "Mac"),
          (e[(e.Linux = 2)] = "Linux"),
          (e[(e.Windows = 3)] = "Windows");
      })((p = t.Platform || (t.Platform = {})));
      var m = p.Web;
      o && (r ? (m = p.Mac) : n ? (m = p.Windows) : i && (m = p.Linux)),
        (t.isWindows = n),
        (t.isMacintosh = r),
        (t.isLinux = i),
        (t.isNative = o),
        (t.isWeb = s),
        (t.platform = m),
        (t.isRootUser = function() {
          return o && !n && 0 === process.getuid();
        }),
        (t.language = a),
        (t.locale = u),
        (t.translationsConfigFile = l);
      var _ =
        "object" == typeof self
          ? self
          : "object" == typeof global
            ? global
            : {};
      t.globals = _;
      var g = null;
      t.setImmediate = function(e) {
        return (
          null === g &&
            (g = t.globals.setImmediate
              ? t.globals.setImmediate.bind(t.globals)
              : "undefined" != typeof process &&
                "function" == typeof process.nextTick
                ? process.nextTick.bind(process)
                : t.globals.setTimeout.bind(t.globals)),
          g(e)
        );
      };
      !(function(e) {
        (e[(e.Windows = 1)] = "Windows"),
          (e[(e.Macintosh = 2)] = "Macintosh"),
          (e[(e.Linux = 3)] = "Linux");
      })(t.OperatingSystem || (t.OperatingSystem = {})),
        (t.OS = r ? 2 : n ? 1 : 3);
      !(function(e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Disabled = 1)] = "Disabled"),
          (e[(e.Enabled = 2)] = "Enabled");
      })(t.AccessibilitySupport || (t.AccessibilitySupport = {}));
    });
  var o =
    (this && this.__extends) ||
    (function() {
      var e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((r.prototype = n.prototype), new r()));
      };
    })();
  r(e[6], t([1, 0, 5]), function(e, t, n) {
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
    function i(e) {
      var t;
      return (
        (t =
          e.authority && e.path && "file" === e.scheme
            ? "//" + e.authority + e.path
            : d.test(e.path)
              ? e.path[1].toLowerCase() + e.path.substr(2)
              : e.path),
        n.isWindows && (t = t.replace(/\//g, "\\")),
        t
      );
    }
    function s(e, t) {
      var n = t
          ? function(e) {
              return e.replace(/[#?]/, r);
            }
          : function(e) {
              return encodeURIComponent(e).replace(/[!'()*]/g, r);
            },
        i = [],
        o = e.scheme,
        s = e.authority,
        u = e.path,
        a = e.query,
        l = e.fragment;
      if ((o && i.push(o, ":"), (s || "file" === o) && i.push("//"), s)) {
        if (-1 !== (_ = s.indexOf("@"))) {
          var h = s.substr(0, _);
          (s = s.substr(_ + 1)),
            -1 === (_ = h.indexOf(":"))
              ? i.push(n(h))
              : i.push(n(h.substr(0, _)), ":", n(h.substr(_ + 1))),
            i.push("@");
        }
        -1 === (_ = (s = s.toLowerCase()).indexOf(":"))
          ? i.push(n(s))
          : i.push(n(s.substr(0, _)), s.substr(_));
      }
      if (u) {
        var d = p.exec(u);
        d &&
          (u = d[1]
            ? "/" + d[2].toLowerCase() + u.substr(3)
            : d[2].toLowerCase() + u.substr(2));
        for (var m = 0; ; ) {
          var _ = u.indexOf(f, m);
          if (-1 === _) {
            i.push(n(u.substring(m)));
            break;
          }
          i.push(n(u.substring(m, _)), f), (m = _ + 1);
        }
      }
      return a && i.push("?", n(a)), l && i.push("#", n(l)), i.join(c);
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = /^\w[\w\d+.-]*$/,
      a = /^\//,
      l = /^\/\//,
      c = "",
      f = "/",
      h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      d = /^\/[a-zA-Z]:/,
      p = /^(\/)?([A-Z]:)/,
      m = /^[a-zA-Z]:/,
      _ = (function() {
        function e(e, t, n, r, i) {
          "object" == typeof e
            ? ((this.scheme = e.scheme || c),
              (this.authority = e.authority || c),
              (this.path = e.path || c),
              (this.query = e.query || c),
              (this.fragment = e.fragment || c))
            : ((this.scheme = e || c),
              (this.authority = t || c),
              (this.path = n || c),
              (this.query = r || c),
              (this.fragment = i || c),
              (function(e) {
                if (e.scheme && !u.test(e.scheme))
                  throw new Error(
                    "[UriError]: Scheme contains illegal characters."
                  );
                if (e.path)
                  if (e.authority) {
                    if (!a.test(e.path))
                      throw new Error(
                        '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                      );
                  } else if (l.test(e.path))
                    throw new Error(
                      '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                    );
              })(this));
        }
        return (
          (e.isUri = function(t) {
            return (
              t instanceof e ||
              (!!t &&
                ("string" == typeof t.authority &&
                  "string" == typeof t.fragment &&
                  "string" == typeof t.path &&
                  "string" == typeof t.query &&
                  "string" == typeof t.scheme))
            );
          }),
          Object.defineProperty(e.prototype, "fsPath", {
            get: function() {
              return i(this);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.with = function(e) {
            if (!e) return this;
            var t = e.scheme,
              n = e.authority,
              r = e.path,
              i = e.query,
              o = e.fragment;
            return (
              void 0 === t ? (t = this.scheme) : null === t && (t = c),
              void 0 === n ? (n = this.authority) : null === n && (n = c),
              void 0 === r ? (r = this.path) : null === r && (r = c),
              void 0 === i ? (i = this.query) : null === i && (i = c),
              void 0 === o ? (o = this.fragment) : null === o && (o = c),
              t === this.scheme &&
              n === this.authority &&
              r === this.path &&
              i === this.query &&
              o === this.fragment
                ? this
                : new g(t, n, r, i, o)
            );
          }),
          (e.parse = function(e) {
            var t = h.exec(e);
            return t
              ? new g(
                  t[2] || c,
                  decodeURIComponent(t[4] || c),
                  decodeURIComponent(t[5] || c),
                  decodeURIComponent(t[7] || c),
                  decodeURIComponent(t[9] || c)
                )
              : new g(c, c, c, c, c);
          }),
          (e.file = function(e) {
            var t = c;
            if (
              (n.isWindows && (e = e.replace(/\\/g, f)),
              e[0] === f && e[1] === f)
            ) {
              var r = e.indexOf(f, 2);
              -1 === r
                ? ((t = e.substring(2)), (e = f))
                : ((t = e.substring(2, r)), (e = e.substring(r) || f));
            }
            return (
              m.test(e) ? (e = f + e) : e[0] !== f && (e = f + e),
              new g("file", t, e, c, c)
            );
          }),
          (e.from = function(e) {
            return new g(e.scheme, e.authority, e.path, e.query, e.fragment);
          }),
          (e.prototype.toString = function(e) {
            return void 0 === e && (e = !1), s(this, e);
          }),
          (e.prototype.toJSON = function() {
            var e = { $mid: 1, fsPath: this.fsPath, external: this.toString() };
            return (
              this.path && (e.path = this.path),
              this.scheme && (e.scheme = this.scheme),
              this.authority && (e.authority = this.authority),
              this.query && (e.query = this.query),
              this.fragment && (e.fragment = this.fragment),
              e
            );
          }),
          (e.revive = function(t) {
            if (t) {
              if (t instanceof e) return t;
              var n = new g(t);
              return (n._fsPath = t.fsPath), (n._formatted = t.external), n;
            }
            return t;
          }),
          e
        );
      })();
    t.default = _;
    var g = (function(e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t._formatted = null), (t._fsPath = null), t;
      }
      return (
        o(t, e),
        Object.defineProperty(t.prototype, "fsPath", {
          get: function() {
            return this._fsPath || (this._fsPath = i(this)), this._fsPath;
          },
          enumerable: !0,
          configurable: !0
        }),
        (t.prototype.toString = function(e) {
          return (
            void 0 === e && (e = !1),
            e
              ? s(this, !0)
              : (this._formatted || (this._formatted = s(this, !1)),
                this._formatted)
          );
        }),
        t
      );
    })(_);
  }),
    r(e[15], t([1, 0, 6]), function(e, t, n) {
      "use strict";
      function r(e) {
        var t = [];
        return (
          e.forEach(function(e) {
            return t.push(e);
          }),
          t
        );
      }
      function i(e) {
        var t = [];
        return (
          e.forEach(function(e, n) {
            return t.push(n);
          }),
          t
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.values = r),
        (t.keys = i),
        (t.getOrSet = function(e, t, n) {
          var r = e.get(t);
          return void 0 === r && ((r = n), e.set(t, r)), r;
        });
      var s = (function() {
        function e() {
          (this._value = ""), (this._pos = 0);
        }
        return (
          (e.prototype.reset = function(e) {
            return (this._value = e), (this._pos = 0), this;
          }),
          (e.prototype.next = function() {
            return (this._pos += 1), this;
          }),
          (e.prototype.join = function(e) {
            return e.join("");
          }),
          (e.prototype.hasNext = function() {
            return this._pos < this._value.length - 1;
          }),
          (e.prototype.cmp = function(e) {
            return e.charCodeAt(0) - this._value.charCodeAt(this._pos);
          }),
          (e.prototype.value = function() {
            return this._value[this._pos];
          }),
          e
        );
      })();
      t.StringIterator = s;
      var u = (function() {
        function e() {}
        return (
          (e.prototype.reset = function(e) {
            return (
              (this._value = e.replace(/\\$|\/$/, "")),
              (this._from = 0),
              (this._to = 0),
              this.next()
            );
          }),
          (e.prototype.hasNext = function() {
            return this._to < this._value.length;
          }),
          (e.prototype.join = function(e) {
            return e.join("/");
          }),
          (e.prototype.next = function() {
            this._from = this._to;
            for (var t = !0; this._to < this._value.length; this._to++) {
              var n = this._value.charCodeAt(this._to);
              if (n === e._fwd || n === e._bwd) {
                if (!t) break;
                this._from++;
              } else t = !1;
            }
            return this;
          }),
          (e.prototype.cmp = function(e) {
            for (
              var t = 0, n = e.length, r = this._from;
              t < n && r < this._to;

            ) {
              var i = e.charCodeAt(t) - this._value.charCodeAt(r);
              if (0 !== i) return i;
              (t += 1), (r += 1);
            }
            return n === this._to - this._from ? 0 : t < n ? -1 : 1;
          }),
          (e.prototype.value = function() {
            return this._value.substring(this._from, this._to);
          }),
          (e._fwd = "/".charCodeAt(0)),
          (e._bwd = "\\".charCodeAt(0)),
          e
        );
      })();
      t.PathIterator = u;
      var a = (function() {
          function e() {}
          return (
            (e.prototype.isEmpty = function() {
              return !(this.left || this.mid || this.right || this.element);
            }),
            e
          );
        })(),
        l = (function() {
          function e(e) {
            this._iter = e;
          }
          return (
            (e.forPaths = function() {
              return new e(new u());
            }),
            (e.forStrings = function() {
              return new e(new s());
            }),
            (e.prototype.clear = function() {
              this._root = void 0;
            }),
            (e.prototype.set = function(e, t) {
              var n,
                r = this._iter.reset(e);
              for (
                this._root ||
                  ((this._root = new a()), (this._root.str = r.value())),
                  n = this._root;
                ;

              ) {
                var i = r.cmp(n.str);
                if (i > 0)
                  n.left || ((n.left = new a()), (n.left.str = r.value())),
                    (n = n.left);
                else if (i < 0)
                  n.right || ((n.right = new a()), (n.right.str = r.value())),
                    (n = n.right);
                else {
                  if (!r.hasNext()) break;
                  r.next(),
                    n.mid || ((n.mid = new a()), (n.mid.str = r.value())),
                    (n = n.mid);
                }
              }
              var o = n.element;
              return (n.element = t), o;
            }),
            (e.prototype.get = function(e) {
              for (var t = this._iter.reset(e), n = this._root; n; ) {
                var r = t.cmp(n.str);
                if (r > 0) n = n.left;
                else if (r < 0) n = n.right;
                else {
                  if (!t.hasNext()) break;
                  t.next(), (n = n.mid);
                }
              }
              return n ? n.element : void 0;
            }),
            (e.prototype.delete = function(e) {
              for (var t = this._iter.reset(e), n = [], r = this._root; r; ) {
                var i = t.cmp(r.str);
                if (i > 0) n.push([1, r]), (r = r.left);
                else if (i < 0) n.push([-1, r]), (r = r.right);
                else {
                  if (!t.hasNext()) {
                    for (r.element = void 0; n.length > 0 && r.isEmpty(); ) {
                      var o = n.pop(),
                        s = o[0],
                        u = o[1];
                      switch (s) {
                        case 1:
                          u.left = void 0;
                          break;
                        case 0:
                          u.mid = void 0;
                          break;
                        case -1:
                          u.right = void 0;
                      }
                      r = u;
                    }
                    break;
                  }
                  t.next(), n.push([0, r]), (r = r.mid);
                }
              }
            }),
            (e.prototype.findSubstr = function(e) {
              for (var t, n = this._iter.reset(e), r = this._root; r; ) {
                var i = n.cmp(r.str);
                if (i > 0) r = r.left;
                else if (i < 0) r = r.right;
                else {
                  if (!n.hasNext()) break;
                  n.next(), (t = r.element || t), (r = r.mid);
                }
              }
              return (r && r.element) || t;
            }),
            (e.prototype.findSuperstr = function(t) {
              for (var n = this._iter.reset(t), r = this._root; r; ) {
                var i = n.cmp(r.str);
                if (i > 0) r = r.left;
                else if (i < 0) r = r.right;
                else {
                  if (!n.hasNext()) {
                    if (!r.mid) return;
                    var o = new e(this._iter);
                    return (o._root = r.mid), o;
                  }
                  n.next(), (r = r.mid);
                }
              }
            }),
            (e.prototype.forEach = function(e) {
              this._forEach(this._root, [], e);
            }),
            (e.prototype._forEach = function(e, t, n) {
              e &&
                (this._forEach(e.left, t, n),
                t.push(e.str),
                e.element && n(e.element, this._iter.join(t)),
                this._forEach(e.mid, t, n),
                t.pop(),
                this._forEach(e.right, t, n));
            }),
            e
          );
        })();
      t.TernarySearchTree = l;
      var c = (function() {
        function e() {
          (this.map = new Map()), (this.ignoreCase = !1);
        }
        return (
          (e.prototype.set = function(e, t) {
            this.map.set(this.toKey(e), t);
          }),
          (e.prototype.get = function(e) {
            return this.map.get(this.toKey(e));
          }),
          (e.prototype.has = function(e) {
            return this.map.has(this.toKey(e));
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this.map.size;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.clear = function() {
            this.map.clear();
          }),
          (e.prototype.delete = function(e) {
            return this.map.delete(this.toKey(e));
          }),
          (e.prototype.forEach = function(e) {
            this.map.forEach(e);
          }),
          (e.prototype.values = function() {
            return r(this.map);
          }),
          (e.prototype.toKey = function(e) {
            var t = e.toString();
            return this.ignoreCase && (t = t.toLowerCase()), t;
          }),
          (e.prototype.keys = function() {
            return i(this.map).map(n.default.parse);
          }),
          e
        );
      })();
      t.ResourceMap = c;
      var f;
      !(function(e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.AsOld = 1)] = "AsOld"),
          (e[(e.AsNew = 2)] = "AsNew");
      })((f = t.Touch || (t.Touch = {})));
      var h = (function() {
        function e() {
          (this._map = new Map()),
            (this._head = void 0),
            (this._tail = void 0),
            (this._size = 0);
        }
        return (
          (e.prototype.clear = function() {
            this._map.clear(),
              (this._head = void 0),
              (this._tail = void 0),
              (this._size = 0);
          }),
          (e.prototype.isEmpty = function() {
            return !this._head && !this._tail;
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.has = function(e) {
            return this._map.has(e);
          }),
          (e.prototype.get = function(e, t) {
            void 0 === t && (t = f.None);
            var n = this._map.get(e);
            if (n) return t !== f.None && this.touch(n, t), n.value;
          }),
          (e.prototype.set = function(e, t, n) {
            void 0 === n && (n = f.None);
            var r = this._map.get(e);
            if (r) (r.value = t), n !== f.None && this.touch(r, n);
            else {
              switch (
                ((r = { key: e, value: t, next: void 0, previous: void 0 }), n)
              ) {
                case f.None:
                  this.addItemLast(r);
                  break;
                case f.AsOld:
                  this.addItemFirst(r);
                  break;
                case f.AsNew:
                default:
                  this.addItemLast(r);
              }
              this._map.set(e, r), this._size++;
            }
          }),
          (e.prototype.delete = function(e) {
            return !!this.remove(e);
          }),
          (e.prototype.remove = function(e) {
            var t = this._map.get(e);
            if (t)
              return (
                this._map.delete(e), this.removeItem(t), this._size--, t.value
              );
          }),
          (e.prototype.shift = function() {
            if (this._head || this._tail) {
              if (!this._head || !this._tail) throw new Error("Invalid list");
              var e = this._head;
              return (
                this._map.delete(e.key),
                this.removeItem(e),
                this._size--,
                e.value
              );
            }
          }),
          (e.prototype.forEach = function(e, t) {
            for (var n = this._head; n; )
              t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this),
                (n = n.next);
          }),
          (e.prototype.values = function() {
            for (var e = [], t = this._head; t; ) e.push(t.value), (t = t.next);
            return e;
          }),
          (e.prototype.keys = function() {
            for (var e = [], t = this._head; t; ) e.push(t.key), (t = t.next);
            return e;
          }),
          (e.prototype.trimOld = function(e) {
            if (!(e >= this.size))
              if (0 !== e) {
                for (var t = this._head, n = this.size; t && n > e; )
                  this._map.delete(t.key), (t = t.next), n--;
                (this._head = t), (this._size = n), (t.previous = void 0);
              } else this.clear();
          }),
          (e.prototype.addItemFirst = function(e) {
            if (this._head || this._tail) {
              if (!this._head) throw new Error("Invalid list");
              (e.next = this._head), (this._head.previous = e);
            } else this._tail = e;
            this._head = e;
          }),
          (e.prototype.addItemLast = function(e) {
            if (this._head || this._tail) {
              if (!this._tail) throw new Error("Invalid list");
              (e.previous = this._tail), (this._tail.next = e);
            } else this._head = e;
            this._tail = e;
          }),
          (e.prototype.removeItem = function(e) {
            if (e === this._head && e === this._tail)
              (this._head = void 0), (this._tail = void 0);
            else if (e === this._head) this._head = e.next;
            else if (e === this._tail) this._tail = e.previous;
            else {
              var t = e.next,
                n = e.previous;
              if (!t || !n) throw new Error("Invalid list");
              (t.previous = n), (n.next = t);
            }
          }),
          (e.prototype.touch = function(e, t) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (t === f.AsOld || t === f.AsNew)
              if (t === f.AsOld) {
                if (e === this._head) return;
                var n = e.next,
                  r = e.previous;
                e === this._tail
                  ? ((r.next = void 0), (this._tail = r))
                  : ((n.previous = r), (r.next = n)),
                  (e.previous = void 0),
                  (e.next = this._head),
                  (this._head.previous = e),
                  (this._head = e);
              } else if (t === f.AsNew) {
                if (e === this._tail) return;
                var n = e.next,
                  r = e.previous;
                e === this._head
                  ? ((n.previous = void 0), (this._head = n))
                  : ((n.previous = r), (r.next = n)),
                  (e.next = void 0),
                  (e.previous = this._tail),
                  (this._tail.next = e),
                  (this._tail = e);
              }
          }),
          (e.prototype.toJSON = function() {
            var e = [];
            return (
              this.forEach(function(t, n) {
                e.push([n, t]);
              }),
              e
            );
          }),
          (e.prototype.fromJSON = function(e) {
            this.clear();
            for (var t = 0, n = e; t < n.length; t++) {
              var r = n[t],
                i = r[0],
                o = r[1];
              this.set(i, o);
            }
          }),
          e
        );
      })();
      t.LinkedMap = h;
      var d = (function(e) {
        function t(t, n) {
          void 0 === n && (n = 1);
          var r = e.call(this) || this;
          return (r._limit = t), (r._ratio = Math.min(Math.max(0, n), 1)), r;
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "limit", {
            get: function() {
              return this._limit;
            },
            set: function(e) {
              (this._limit = e), this.checkTrim();
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "ratio", {
            get: function() {
              return this._ratio;
            },
            set: function(e) {
              (this._ratio = Math.min(Math.max(0, e), 1)), this.checkTrim();
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.get = function(t) {
            return e.prototype.get.call(this, t, f.AsNew);
          }),
          (t.prototype.peek = function(t) {
            return e.prototype.get.call(this, t, f.None);
          }),
          (t.prototype.set = function(t, n) {
            e.prototype.set.call(this, t, n, f.AsNew), this.checkTrim();
          }),
          (t.prototype.checkTrim = function() {
            this.size > this._limit &&
              this.trimOld(Math.round(this._limit * this._ratio));
          }),
          t
        );
      })(h);
      t.LRUCache = d;
    }),
    r(e[16], t([1, 0, 15]), function(e, t, n) {
      "use strict";
      function r(e) {
        return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, "\\$&");
      }
      function i(e, t) {
        if (!e || !t) return e;
        var n = t.length;
        if (0 === n || 0 === e.length) return e;
        for (var r = 0; e.indexOf(t, r) === r; ) r += n;
        return e.substring(r);
      }
      function o(e, t) {
        if (!e || !t) return e;
        var n = t.length,
          r = e.length;
        if (0 === n || 0 === r) return e;
        for (var i = r, o = -1; ; ) {
          if (-1 === (o = e.lastIndexOf(t, i - 1)) || o + n !== i) break;
          if (0 === o) return "";
          i = o;
        }
        return e.substring(0, i);
      }
      function s(e, n, r) {
        if (!t.canNormalize || !e) return e;
        var i = r.get(e);
        if (i) return i;
        var o;
        return (o = v.test(e) ? e.normalize(n) : e), r.set(e, o), o;
      }
      function u(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function a(e) {
        return e >= 97 && e <= 122;
      }
      function l(e) {
        return e >= 65 && e <= 90;
      }
      function c(e) {
        return a(e) || l(e);
      }
      function f(e, t, n) {
        if (
          (void 0 === n && (n = e.length),
          "string" != typeof e || "string" != typeof t)
        )
          return !1;
        for (var r = 0; r < n; r++) {
          var i = e.charCodeAt(r),
            o = t.charCodeAt(r);
          if (i !== o)
            if (c(i) && c(o)) {
              var s = Math.abs(i - o);
              if (0 !== s && 32 !== s) return !1;
            } else if (
              String.fromCharCode(i).toLowerCase() !==
              String.fromCharCode(o).toLowerCase()
            )
              return !1;
        }
        return !0;
      }
      function h(e, t, n, r, i, o) {
        for (; t < n && i < o; ) {
          if (e[t] !== r[i]) return !1;
          (t += 1), (i += 1);
        }
        return !0;
      }
      function d(e) {
        return (
          ((e = +e) >= 11904 && e <= 55215) ||
          (e >= 63744 && e <= 64255) ||
          (e >= 65281 && e <= 65374)
        );
      }
      function p(e) {
        return e && e.length > 0 && 65279 === e.charCodeAt(0);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.empty = ""),
        (t.isFalsyOrWhitespace = function(e) {
          return !e || "string" != typeof e || 0 === e.trim().length;
        }),
        (t.pad = function(e, t, n) {
          void 0 === n && (n = "0");
          for (var r = "" + e, i = [r], o = r.length; o < t; o++) i.push(n);
          return i.reverse().join("");
        });
      var m = /{(\d+)}/g;
      (t.format = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return 0 === t.length
          ? e
          : e.replace(m, function(e, n) {
              var r = parseInt(n, 10);
              return isNaN(r) || r < 0 || r >= t.length ? e : t[r];
            });
      }),
        (t.escape = function(e) {
          return e.replace(/[<|>|&]/g, function(e) {
            switch (e) {
              case "<":
                return "&lt;";
              case ">":
                return "&gt;";
              case "&":
                return "&amp;";
              default:
                return e;
            }
          });
        }),
        (t.escapeRegExpCharacters = r),
        (t.trim = function(e, t) {
          return void 0 === t && (t = " "), o(i(e, t), t);
        }),
        (t.ltrim = i),
        (t.rtrim = o),
        (t.convertSimple2RegExpPattern = function(e) {
          return e
            .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
            .replace(/[\*]/g, ".*");
        }),
        (t.stripWildcards = function(e) {
          return e.replace(/\*/g, "");
        }),
        (t.startsWith = function(e, t) {
          if (e.length < t.length) return !1;
          if (e === t) return !0;
          for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }),
        (t.endsWith = function(e, t) {
          var n = e.length - t.length;
          return n > 0 ? e.indexOf(t, n) === n : 0 === n && e === t;
        }),
        (t.createRegExp = function(e, t, n) {
          if ((void 0 === n && (n = {}), !e))
            throw new Error("Cannot create regex from empty string");
          t || (e = r(e)),
            n.wholeWord &&
              (/\B/.test(e.charAt(0)) || (e = "\\b" + e),
              /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
          var i = "";
          return (
            n.global && (i += "g"),
            n.matchCase || (i += "i"),
            n.multiline && (i += "m"),
            new RegExp(e, i)
          );
        }),
        (t.regExpLeadsToEndlessLoop = function(e) {
          return (
            "^" !== e.source &&
            "^$" !== e.source &&
            "$" !== e.source &&
            "^\\s*$" !== e.source &&
            e.exec("") &&
            0 === e.lastIndex
          );
        }),
        (t.regExpContainsBackreference = function(e) {
          return !!e.match(/([^\\]|^)(\\\\)*\\\d+/);
        }),
        (t.canNormalize = "function" == typeof "".normalize);
      var _ = new n.LRUCache(1e4);
      t.normalizeNFC = function(e) {
        return s(e, "NFC", _);
      };
      var g = new n.LRUCache(1e4);
      t.normalizeNFD = function(e) {
        return s(e, "NFD", g);
      };
      var v = /[^\u0000-\u0080]/;
      (t.firstNonWhitespaceIndex = function(e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);
          if (32 !== r && 9 !== r) return t;
        }
        return -1;
      }),
        (t.getLeadingWhitespace = function(e, t, n) {
          void 0 === t && (t = 0), void 0 === n && (n = e.length);
          for (var r = t; r < n; r++) {
            var i = e.charCodeAt(r);
            if (32 !== i && 9 !== i) return e.substring(t, r);
          }
          return e.substring(t, n);
        }),
        (t.lastNonWhitespaceIndex = function(e, t) {
          void 0 === t && (t = e.length - 1);
          for (var n = t; n >= 0; n--) {
            var r = e.charCodeAt(n);
            if (32 !== r && 9 !== r) return n;
          }
          return -1;
        }),
        (t.compare = u),
        (t.compareIgnoreCase = function(e, t) {
          for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
            var i = e.charCodeAt(r),
              o = t.charCodeAt(r);
            if (i !== o) {
              l(i) && (i += 32), l(o) && (o += 32);
              var s = i - o;
              if (0 !== s)
                return a(i) && a(o) ? s : u(e.toLowerCase(), t.toLowerCase());
            }
          }
          return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
        }),
        (t.equalsIgnoreCase = function(e, t) {
          return (e ? e.length : 0) === (t ? t.length : 0) && f(e, t);
        }),
        (t.startsWithIgnoreCase = function(e, t) {
          var n = t.length;
          return !(t.length > e.length) && f(e, t, n);
        }),
        (t.commonPrefixLength = function(e, t) {
          var n,
            r = Math.min(e.length, t.length);
          for (n = 0; n < r; n++)
            if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
          return r;
        }),
        (t.commonSuffixLength = function(e, t) {
          var n,
            r = Math.min(e.length, t.length),
            i = e.length - 1,
            o = t.length - 1;
          for (n = 0; n < r; n++)
            if (e.charCodeAt(i - n) !== t.charCodeAt(o - n)) return n;
          return r;
        }),
        (t.overlap = function(e, t) {
          var n = e.length,
            r = t.length,
            i = n - r;
          if (0 === i) return e === t ? n : 0;
          for (i < 0 && ((r += i), (i = 0)); i < n && r > 0; ) {
            if (h(e, i, n, t, 0, r)) return r;
            (r -= 1), (i += 1);
          }
          return 0;
        }),
        (t.isHighSurrogate = function(e) {
          return 55296 <= e && e <= 56319;
        }),
        (t.isLowSurrogate = function(e) {
          return 56320 <= e && e <= 57343;
        });
      var y = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
      t.containsRTL = function(e) {
        return y.test(e);
      };
      var b = /(?:[\u231A\u231B\u23F0\u23F3\u2600-\u27BF\u2B50\u2B55]|\uD83C[\uDDE6-\uDDFF\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEF8]|\uD83E[\uDD00-\uDDE6])/;
      t.containsEmoji = function(e) {
        return b.test(e);
      };
      var C = /^[\t\n\r\x20-\x7E]*$/;
      (t.isBasicASCII = function(e) {
        return C.test(e);
      }),
        (t.containsFullWidthCharacter = function(e) {
          for (var t = 0, n = e.length; t < n; t++)
            if (d(e.charCodeAt(t))) return !0;
          return !1;
        }),
        (t.isFullWidthCharacter = d),
        (t.lcut = function(e, n) {
          if (e.length < n) return e;
          for (
            var r = /\b/g, i = 0;
            r.test(e) && !(e.length - r.lastIndex < n);

          )
            (i = r.lastIndex), (r.lastIndex += 1);
          return e.substring(i).replace(/^\s/, t.empty);
        });
      var E = /\x1B\x5B[12]?K/g,
        S = /\x1b\[\d+m/g,
        L = /\x1b\[0?m/g;
      (t.removeAnsiEscapeCodes = function(e) {
        return (
          e && (e = (e = (e = e.replace(E, "")).replace(S, "")).replace(L, "")),
          e
        );
      }),
        (t.UTF8_BOM_CHARACTER = String.fromCharCode(65279)),
        (t.startsWithUTF8BOM = p),
        (t.stripUTF8BOM = function(e) {
          return p(e) ? e.substr(1) : e;
        }),
        (t.safeBtoa = function(e) {
          return btoa(encodeURIComponent(e));
        }),
        (t.repeat = function(e, t) {
          for (var n = "", r = 0; r < t; r++) n += e;
          return n;
        }),
        (t.fuzzyContains = function(e, t) {
          if (!e || !t) return !1;
          if (e.length < t.length) return !1;
          for (var n = t.length, r = e.toLowerCase(), i = 0, o = -1; i < n; ) {
            var s = r.indexOf(t[i], o + 1);
            if (s < 0) return !1;
            (o = s), i++;
          }
          return !0;
        }),
        (t.containsUppercaseCharacter = function(e, t) {
          return (
            void 0 === t && (t = !1),
            !!e && (t && (e = e.replace(/\\./g, "")), e.toLowerCase() !== e)
          );
        });
    });
  var s;
  !(function() {
    var e = Object.create(null);
    e["WinJS/Core/_WinJS"] = {};
    var t = function(t, n, r) {
      var i = {},
        o = !1,
        s = n.map(function(t) {
          return "exports" === t ? ((o = !0), i) : e[t];
        }),
        u = r.apply({}, s);
      e[t] = o ? i : u;
    };
    t("WinJS/Core/_Global", [], function() {
      "use strict";
      return "undefined" != typeof window
        ? window
        : "undefined" != typeof self
          ? self
          : "undefined" != typeof global
            ? global
            : {};
    }),
      t("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function(e) {
        "use strict";
        var t = null;
        return {
          hasWinRT: !!e.Windows,
          markSupportedForProcessing: function(e) {
            return (e.supportedForProcessing = !0), e;
          },
          _setImmediate: function(n) {
            null === t &&
              (t = e.setImmediate
                ? e.setImmediate.bind(e)
                : "undefined" != typeof process &&
                  "function" == typeof process.nextTick
                  ? process.nextTick.bind(process)
                  : e.setTimeout.bind(e)),
              t(n);
          }
        };
      }),
      t("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function(e) {
        "use strict";
        return e.msWriteProfilerMark || function() {};
      }),
      t(
        "WinJS/Core/_Base",
        [
          "WinJS/Core/_WinJS",
          "WinJS/Core/_Global",
          "WinJS/Core/_BaseCoreUtils",
          "WinJS/Core/_WriteProfilerMark"
        ],
        function(e, t, n, r) {
          "use strict";
          function i(e, t, n) {
            var r,
              i,
              o,
              s = Object.keys(t),
              u = Array.isArray(e);
            for (i = 0, o = s.length; i < o; i++) {
              var a = s[i],
                l = 95 !== a.charCodeAt(0),
                c = t[a];
              !c ||
              "object" != typeof c ||
              (void 0 === c.value &&
                "function" != typeof c.get &&
                "function" != typeof c.set)
                ? l
                  ? u
                    ? e.forEach(function(e) {
                        e[a] = c;
                      })
                    : (e[a] = c)
                  : ((r = r || {})[a] = {
                      value: c,
                      enumerable: l,
                      configurable: !0,
                      writable: !0
                    })
                : (void 0 === c.enumerable && (c.enumerable = l),
                  n &&
                    c.setName &&
                    "function" == typeof c.setName &&
                    c.setName(n + "." + a),
                  ((r = r || {})[a] = c));
            }
            r &&
              (u
                ? e.forEach(function(e) {
                    Object.defineProperties(e, r);
                  })
                : Object.defineProperties(e, r));
          }
          return (
            (function() {
              function n(n, r) {
                var i = n || {};
                if (r) {
                  var o = r.split(".");
                  i === t && "WinJS" === o[0] && ((i = e), o.splice(0, 1));
                  for (var s = 0, u = o.length; s < u; s++) {
                    var a = o[s];
                    i[a] ||
                      Object.defineProperty(i, a, {
                        value: {},
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                      }),
                      (i = i[a]);
                  }
                }
                return i;
              }
              function o(e, t, r) {
                var o = n(e, t);
                return r && i(o, r, t || "<ANONYMOUS>"), o;
              }
              var s = e;
              s.Namespace || (s.Namespace = Object.create(Object.prototype));
              var u = { uninitialized: 1, working: 2, initialized: 3 };
              Object.defineProperties(s.Namespace, {
                defineWithParent: {
                  value: o,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                define: {
                  value: function(e, n) {
                    return o(t, e, n);
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                _lazy: {
                  value: function(e) {
                    var t,
                      n,
                      i = u.uninitialized;
                    return {
                      setName: function(e) {
                        t = e;
                      },
                      get: function() {
                        switch (i) {
                          case u.initialized:
                            return n;
                          case u.uninitialized:
                            i = u.working;
                            try {
                              r("WinJS.Namespace._lazy:" + t + ",StartTM"),
                                (n = e());
                            } finally {
                              r("WinJS.Namespace._lazy:" + t + ",StopTM"),
                                (i = u.uninitialized);
                            }
                            return (e = null), (i = u.initialized), n;
                          case u.working:
                            throw "Illegal: reentrancy on initialization";
                          default:
                            throw "Illegal";
                        }
                      },
                      set: function(e) {
                        switch (i) {
                          case u.working:
                            throw "Illegal: reentrancy on initialization";
                          default:
                            (i = u.initialized), (n = e);
                        }
                      },
                      enumerable: !0,
                      configurable: !0
                    };
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                },
                _moduleDefine: {
                  value: function(e, r, o) {
                    var s = [e],
                      u = null;
                    return (
                      r && ((u = n(t, r)), s.push(u)),
                      i(s, o, r || "<ANONYMOUS>"),
                      u
                    );
                  },
                  writable: !0,
                  enumerable: !0,
                  configurable: !0
                }
              });
            })(),
            (function() {
              function t(e, t, r) {
                return (
                  (e = e || function() {}),
                  n.markSupportedForProcessing(e),
                  t && i(e.prototype, t),
                  r && i(e, r),
                  e
                );
              }
              e.Namespace.define("WinJS.Class", {
                define: t,
                derive: function(e, r, o, s) {
                  if (e) {
                    r = r || function() {};
                    var u = e.prototype;
                    return (
                      (r.prototype = Object.create(u)),
                      n.markSupportedForProcessing(r),
                      Object.defineProperty(r.prototype, "constructor", {
                        value: r,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                      }),
                      o && i(r.prototype, o),
                      s && i(r, s),
                      r
                    );
                  }
                  return t(r, o, s);
                },
                mix: function(e) {
                  e = e || function() {};
                  var t, n;
                  for (t = 1, n = arguments.length; t < n; t++)
                    i(e.prototype, arguments[t]);
                  return e;
                }
              });
            })(),
            { Namespace: e.Namespace, Class: e.Class }
          );
        }
      ),
      t("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function(e) {
        "use strict";
        var t = e.Class.derive(
          Error,
          function(e, t) {
            (this.name = e), (this.message = t || e);
          },
          {},
          { supportedForProcessing: !1 }
        );
        return e.Namespace.define("WinJS", { ErrorFromName: t }), t;
      }),
      t("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function(e, t) {
        "use strict";
        function n(e) {
          var t = "_on" + e + "state";
          return {
            get: function() {
              var e = this[t];
              return e && e.userHandler;
            },
            set: function(n) {
              var r = this[t];
              n
                ? (r ||
                    ((r = {
                      wrapper: function(e) {
                        return r.userHandler(e);
                      },
                      userHandler: n
                    }),
                    Object.defineProperty(this, t, {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }),
                    this.addEventListener(e, r.wrapper, !1)),
                  (r.userHandler = n))
                : r &&
                  (this.removeEventListener(e, r.wrapper, !1),
                  (this[t] = null));
            },
            enumerable: !0
          };
        }
        var r = t.Class.define(
            function(e, t, n) {
              (this.detail = t),
                (this.target = n),
                (this.timeStamp = Date.now()),
                (this.type = e);
            },
            {
              bubbles: { value: !1, writable: !1 },
              cancelable: { value: !1, writable: !1 },
              currentTarget: {
                get: function() {
                  return this.target;
                }
              },
              defaultPrevented: {
                get: function() {
                  return this._preventDefaultCalled;
                }
              },
              trusted: { value: !1, writable: !1 },
              eventPhase: { value: 0, writable: !1 },
              target: null,
              timeStamp: null,
              type: null,
              preventDefault: function() {
                this._preventDefaultCalled = !0;
              },
              stopImmediatePropagation: function() {
                this._stopImmediatePropagationCalled = !0;
              },
              stopPropagation: function() {}
            },
            { supportedForProcessing: !1 }
          ),
          i = {
            _listeners: null,
            addEventListener: function(e, t, n) {
              (n = n || !1), (this._listeners = this._listeners || {});
              for (
                var r = (this._listeners[e] = this._listeners[e] || []),
                  i = 0,
                  o = r.length;
                i < o;
                i++
              ) {
                var s = r[i];
                if (s.useCapture === n && s.listener === t) return;
              }
              r.push({ listener: t, useCapture: n });
            },
            dispatchEvent: function(e, t) {
              var n = this._listeners && this._listeners[e];
              if (n) {
                for (
                  var i = new r(e, t, this),
                    o = 0,
                    s = (n = n.slice(0, n.length)).length;
                  o < s && !i._stopImmediatePropagationCalled;
                  o++
                )
                  n[o].listener(i);
                return i.defaultPrevented || !1;
              }
              return !1;
            },
            removeEventListener: function(e, t, n) {
              n = n || !1;
              var r = this._listeners && this._listeners[e];
              if (r)
                for (var i = 0, o = r.length; i < o; i++) {
                  var s = r[i];
                  if (s.listener === t && s.useCapture === n) {
                    r.splice(i, 1), 0 === r.length && delete this._listeners[e];
                    break;
                  }
                }
            }
          };
        t.Namespace._moduleDefine(e, "WinJS.Utilities", {
          _createEventProperty: n,
          createEventProperties: function() {
            for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
              var i = arguments[t];
              e["on" + i] = n(i);
            }
            return e;
          },
          eventMixin: i
        });
      }),
      t("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function(e) {
        "use strict";
        function t(e) {
          return e;
        }
        return {
          _traceAsyncOperationStarting:
            (e.Debug &&
              e.Debug.msTraceAsyncOperationStarting &&
              e.Debug.msTraceAsyncOperationStarting.bind(e.Debug)) ||
            t,
          _traceAsyncOperationCompleted:
            (e.Debug &&
              e.Debug.msTraceAsyncOperationCompleted &&
              e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug)) ||
            t,
          _traceAsyncCallbackStarting:
            (e.Debug &&
              e.Debug.msTraceAsyncCallbackStarting &&
              e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug)) ||
            t,
          _traceAsyncCallbackCompleted:
            (e.Debug &&
              e.Debug.msTraceAsyncCallbackCompleted &&
              e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug)) ||
            t
        };
      }),
      t(
        "WinJS/Promise/_StateMachine",
        [
          "WinJS/Core/_Global",
          "WinJS/Core/_BaseCoreUtils",
          "WinJS/Core/_Base",
          "WinJS/Core/_ErrorFromName",
          "WinJS/Core/_Events",
          "WinJS/Core/_Trace"
        ],
        function(e, t, n, r, i, o) {
          "use strict";
          function s() {}
          function u(e, t) {
            var n;
            (n =
              t && "object" == typeof t && "function" == typeof t.then ? I : T),
              (e._value = t),
              e._setState(n);
          }
          function a(e, t, n, r, i, o) {
            return {
              exception: e,
              error: t,
              promise: n,
              handler: o,
              id: r,
              parent: i
            };
          }
          function l(e, t, n, r) {
            var i = n._isException,
              o = n._errorId;
            return a(i ? t : null, i ? null : t, e, o, n, r);
          }
          function c(e, t, n) {
            var r = n._isException,
              i = n._errorId;
            return b(e, i, r), a(r ? t : null, r ? null : t, e, i, n);
          }
          function f(e, t) {
            var n = ++K;
            return b(e, n), a(null, t, e, n);
          }
          function h(e, t) {
            var n = ++K;
            return b(e, n, !0), a(t, null, e, n);
          }
          function d(e, t, n, r) {
            y(e, {
              c: t,
              e: n,
              p: r,
              asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done")
            });
          }
          function p(e, t, n, r) {
            (e._value = t), g(e, t, n, r), e._setState(R);
          }
          function m(t, n) {
            var r = t._value,
              i = t._listeners;
            if (i) {
              t._listeners = null;
              var s, u;
              for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
                var a = 1 === u ? i : i[s],
                  l = a.c,
                  c = a.promise;
                if (
                  (o._traceAsyncOperationCompleted(
                    a.asyncOpID,
                    e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS
                  ),
                  c)
                ) {
                  o._traceAsyncCallbackStarting(a.asyncOpID);
                  try {
                    c._setCompleteValue(l ? l(r) : r);
                  } catch (e) {
                    c._setExceptionValue(e);
                  } finally {
                    o._traceAsyncCallbackCompleted();
                  }
                  c._state !== I && c._listeners && n.push(c);
                } else V.prototype.done.call(t, l);
              }
            }
          }
          function _(t, n) {
            var r = t._value,
              i = t._listeners;
            if (i) {
              t._listeners = null;
              var s, u;
              for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
                var a = 1 === u ? i : i[s],
                  c = a.e,
                  f = a.promise,
                  h =
                    e.Debug &&
                    (r && r.name === N
                      ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED
                      : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
                if ((o._traceAsyncOperationCompleted(a.asyncOpID, h), f)) {
                  var d = !1;
                  try {
                    c
                      ? (o._traceAsyncCallbackStarting(a.asyncOpID),
                        (d = !0),
                        c.handlesOnError || g(f, r, l, t, c),
                        f._setCompleteValue(c(r)))
                      : f._setChainedErrorValue(r, t);
                  } catch (e) {
                    f._setExceptionValue(e);
                  } finally {
                    d && o._traceAsyncCallbackCompleted();
                  }
                  f._state !== I && f._listeners && n.push(f);
                } else j.prototype.done.call(t, null, c);
              }
            }
          }
          function g(e, t, n, r, i) {
            if (L._listeners[A]) {
              if (t instanceof Error && t.message === N) return;
              L.dispatchEvent(A, n(e, t, r, i));
            }
          }
          function v(e, t) {
            var n = e._listeners;
            if (n) {
              var r, i;
              for (r = 0, i = Array.isArray(n) ? n.length : 1; r < i; r++) {
                var o = 1 === i ? n : n[r],
                  s = o.p;
                if (s)
                  try {
                    s(t);
                  } catch (e) {}
                o.c || o.e || !o.promise || o.promise._progress(t);
              }
            }
          }
          function y(e, t) {
            var n = e._listeners;
            n ? (n = Array.isArray(n) ? n : [n]).push(t) : (n = t),
              (e._listeners = n);
          }
          function b(e, t, n) {
            (e._isException = n || !1), (e._errorId = t);
          }
          function C(e, t, n, r) {
            (e._value = t), g(e, t, n, r), e._setState(F);
          }
          function E(e, t) {
            var n;
            (n =
              t && "object" == typeof t && "function" == typeof t.then ? I : U),
              (e._value = t),
              e._setState(n);
          }
          function S(e, t, n, r) {
            var i = new Y(e);
            return (
              y(e, {
                promise: i,
                c: t,
                e: n,
                p: r,
                asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
              }),
              i
            );
          }
          e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
          var L = new (n.Class.mix(
            n.Class.define(null, {}, { supportedForProcessing: !1 }),
            i.eventMixin
          ))();
          L._listeners = {};
          var A = "error",
            N = "Canceled",
            P = !1,
            M = {
              promise: 1,
              thenPromise: 2,
              errorPromise: 4,
              exceptionPromise: 8,
              completePromise: 16
            };
          M.all =
            M.promise |
            M.thenPromise |
            M.errorPromise |
            M.exceptionPromise |
            M.completePromise;
          var w,
            D,
            I,
            k,
            x,
            O,
            T,
            U,
            R,
            F,
            K = 1;
          (w = {
            name: "created",
            enter: function(e) {
              e._setState(D);
            },
            cancel: s,
            done: s,
            then: s,
            _completed: s,
            _error: s,
            _notify: s,
            _progress: s,
            _setCompleteValue: s,
            _setErrorValue: s
          }),
            (D = {
              name: "working",
              enter: s,
              cancel: function(e) {
                e._setState(x);
              },
              done: d,
              then: S,
              _completed: u,
              _error: p,
              _notify: s,
              _progress: v,
              _setCompleteValue: E,
              _setErrorValue: C
            }),
            (I = {
              name: "waiting",
              enter: function(e) {
                var t = e._value;
                if (t instanceof Y && t._state !== F && t._state !== U)
                  y(t, { promise: e });
                else {
                  var n = function(r) {
                    t._errorId
                      ? e._chainedError(r, t)
                      : (g(e, r, l, t, n), e._error(r));
                  };
                  (n.handlesOnError = !0),
                    t.then(e._completed.bind(e), n, e._progress.bind(e));
                }
              },
              cancel: function(e) {
                e._setState(k);
              },
              done: d,
              then: S,
              _completed: u,
              _error: p,
              _notify: s,
              _progress: v,
              _setCompleteValue: E,
              _setErrorValue: C
            }),
            (k = {
              name: "waiting_canceled",
              enter: function(e) {
                e._setState(O);
                var t = e._value;
                t.cancel && t.cancel();
              },
              cancel: s,
              done: d,
              then: S,
              _completed: u,
              _error: p,
              _notify: s,
              _progress: v,
              _setCompleteValue: E,
              _setErrorValue: C
            }),
            (x = {
              name: "canceled",
              enter: function(e) {
                e._setState(O), e._cancelAction();
              },
              cancel: s,
              done: d,
              then: S,
              _completed: u,
              _error: p,
              _notify: s,
              _progress: v,
              _setCompleteValue: E,
              _setErrorValue: C
            }),
            (O = {
              name: "canceling",
              enter: function(e) {
                var t = new Error(N);
                (t.name = t.message), (e._value = t), e._setState(R);
              },
              cancel: s,
              done: s,
              then: s,
              _completed: s,
              _error: s,
              _notify: s,
              _progress: s,
              _setCompleteValue: s,
              _setErrorValue: s
            }),
            (T = {
              name: "complete_notify",
              enter: function(e) {
                if (
                  ((e.done = V.prototype.done),
                  (e.then = V.prototype.then),
                  e._listeners)
                )
                  for (var t, n = [e]; n.length; )
                    (t = n.shift())._state._notify(t, n);
                e._setState(U);
              },
              cancel: s,
              done: null,
              then: null,
              _completed: s,
              _error: s,
              _notify: m,
              _progress: s,
              _setCompleteValue: s,
              _setErrorValue: s
            }),
            (U = {
              name: "success",
              enter: function(e) {
                (e.done = V.prototype.done),
                  (e.then = V.prototype.then),
                  e._cleanupAction();
              },
              cancel: s,
              done: null,
              then: null,
              _completed: s,
              _error: s,
              _notify: m,
              _progress: s,
              _setCompleteValue: s,
              _setErrorValue: s
            }),
            (R = {
              name: "error_notify",
              enter: function(e) {
                if (
                  ((e.done = j.prototype.done),
                  (e.then = j.prototype.then),
                  e._listeners)
                )
                  for (var t, n = [e]; n.length; )
                    (t = n.shift())._state._notify(t, n);
                e._setState(F);
              },
              cancel: s,
              done: null,
              then: null,
              _completed: s,
              _error: s,
              _notify: _,
              _progress: s,
              _setCompleteValue: s,
              _setErrorValue: s
            }),
            (F = {
              name: "error",
              enter: function(e) {
                (e.done = j.prototype.done),
                  (e.then = j.prototype.then),
                  e._cleanupAction();
              },
              cancel: s,
              done: null,
              then: null,
              _completed: s,
              _error: s,
              _notify: _,
              _progress: s,
              _setCompleteValue: s,
              _setErrorValue: s
            });
          var W,
            q = n.Class.define(
              null,
              {
                _listeners: null,
                _nextState: null,
                _state: null,
                _value: null,
                cancel: function() {
                  this._state.cancel(this), this._run();
                },
                done: function(e, t, n) {
                  this._state.done(this, e, t, n);
                },
                then: function(e, t, n) {
                  return this._state.then(this, e, t, n);
                },
                _chainedError: function(e, t) {
                  var n = this._state._error(this, e, c, t);
                  return this._run(), n;
                },
                _completed: function(e) {
                  var t = this._state._completed(this, e);
                  return this._run(), t;
                },
                _error: function(e) {
                  var t = this._state._error(this, e, f);
                  return this._run(), t;
                },
                _progress: function(e) {
                  this._state._progress(this, e);
                },
                _setState: function(e) {
                  this._nextState = e;
                },
                _setCompleteValue: function(e) {
                  this._state._setCompleteValue(this, e), this._run();
                },
                _setChainedErrorValue: function(e, t) {
                  var n = this._state._setErrorValue(this, e, c, t);
                  return this._run(), n;
                },
                _setExceptionValue: function(e) {
                  var t = this._state._setErrorValue(this, e, h);
                  return this._run(), t;
                },
                _run: function() {
                  for (; this._nextState; )
                    (this._state = this._nextState),
                      (this._nextState = null),
                      this._state.enter(this);
                }
              },
              { supportedForProcessing: !1 }
            ),
            Y = n.Class.derive(
              q,
              function(e) {
                P &&
                  (!0 === P || P & M.thenPromise) &&
                  (this._stack = H._getStack()),
                  (this._creator = e),
                  this._setState(w),
                  this._run();
              },
              {
                _creator: null,
                _cancelAction: function() {
                  this._creator && this._creator.cancel();
                },
                _cleanupAction: function() {
                  this._creator = null;
                }
              },
              { supportedForProcessing: !1 }
            ),
            j = n.Class.define(
              function(e) {
                P &&
                  (!0 === P || P & M.errorPromise) &&
                  (this._stack = H._getStack()),
                  (this._value = e),
                  g(this, e, f);
              },
              {
                cancel: function() {},
                done: function(e, t) {
                  var n = this._value;
                  if (t)
                    try {
                      t.handlesOnError || g(null, n, l, this, t);
                      var r = t(n);
                      return void (
                        r &&
                        "object" == typeof r &&
                        "function" == typeof r.done &&
                        r.done()
                      );
                    } catch (e) {
                      n = e;
                    }
                  (n instanceof Error && n.message === N) || H._doneHandler(n);
                },
                then: function(e, t) {
                  if (!t) return this;
                  var n,
                    r = this._value;
                  try {
                    t.handlesOnError || g(null, r, l, this, t),
                      (n = new V(t(r)));
                  } catch (e) {
                    n = e === r ? this : new B(e);
                  }
                  return n;
                }
              },
              { supportedForProcessing: !1 }
            ),
            B = n.Class.derive(
              j,
              function(e) {
                P &&
                  (!0 === P || P & M.exceptionPromise) &&
                  (this._stack = H._getStack()),
                  (this._value = e),
                  g(this, e, h);
              },
              {},
              { supportedForProcessing: !1 }
            ),
            V = n.Class.define(
              function(e) {
                if (
                  (P &&
                    (!0 === P || P & M.completePromise) &&
                    (this._stack = H._getStack()),
                  e && "object" == typeof e && "function" == typeof e.then)
                ) {
                  var t = new Y(null);
                  return t._setCompleteValue(e), t;
                }
                this._value = e;
              },
              {
                cancel: function() {},
                done: function(e) {
                  if (e)
                    try {
                      var t = e(this._value);
                      t &&
                        "object" == typeof t &&
                        "function" == typeof t.done &&
                        t.done();
                    } catch (e) {
                      H._doneHandler(e);
                    }
                },
                then: function(e) {
                  try {
                    var t = e ? e(this._value) : this._value;
                    return t === this._value ? this : new V(t);
                  } catch (e) {
                    return new B(e);
                  }
                }
              },
              { supportedForProcessing: !1 }
            ),
            H = n.Class.derive(
              q,
              function(e, t) {
                P &&
                  (!0 === P || P & M.promise) &&
                  (this._stack = H._getStack()),
                  (this._oncancel = t),
                  this._setState(w),
                  this._run();
                try {
                  e(
                    this._completed.bind(this),
                    this._error.bind(this),
                    this._progress.bind(this)
                  );
                } catch (e) {
                  this._setExceptionValue(e);
                }
              },
              {
                _oncancel: null,
                _cancelAction: function() {
                  try {
                    if (!this._oncancel)
                      throw new Error("Promise did not implement oncancel");
                    this._oncancel();
                  } catch (e) {
                    e.message, e.stack;
                    L.dispatchEvent("error", e);
                  }
                },
                _cleanupAction: function() {
                  this._oncancel = null;
                }
              },
              {
                addEventListener: function(e, t, n) {
                  L.addEventListener(e, t, n);
                },
                any: function(e) {
                  return new H(
                    function(t, n) {
                      var r = Object.keys(e);
                      0 === r.length && t();
                      var i = 0;
                      r.forEach(function(o) {
                        H.as(e[o]).then(
                          function() {
                            t({ key: o, value: e[o] });
                          },
                          function(s) {
                            s instanceof Error && s.name === N
                              ? ++i === r.length && t(H.cancel)
                              : n({ key: o, value: e[o] });
                          }
                        );
                      });
                    },
                    function() {
                      Object.keys(e).forEach(function(t) {
                        var n = H.as(e[t]);
                        "function" == typeof n.cancel && n.cancel();
                      });
                    }
                  );
                },
                as: function(e) {
                  return e &&
                    "object" == typeof e &&
                    "function" == typeof e.then
                    ? e
                    : new V(e);
                },
                cancel: {
                  get: function() {
                    return (W = W || new j(new r(N)));
                  }
                },
                dispatchEvent: function(e, t) {
                  return L.dispatchEvent(e, t);
                },
                is: function(e) {
                  return (
                    e && "object" == typeof e && "function" == typeof e.then
                  );
                },
                join: function(e) {
                  return new H(
                    function(t, n, r) {
                      var i = Object.keys(e),
                        o = Array.isArray(e) ? [] : {},
                        s = Array.isArray(e) ? [] : {},
                        u = 0,
                        a = i.length,
                        l = function(e) {
                          if (0 == --a) {
                            var u = Object.keys(o).length;
                            if (0 === u) t(s);
                            else {
                              var l = 0;
                              i.forEach(function(e) {
                                var t = o[e];
                                t instanceof Error && t.name === N && l++;
                              }),
                                l === u ? t(H.cancel) : n(o);
                            }
                          } else r({ Key: e, Done: !0 });
                        };
                      i.forEach(function(t) {
                        var n = e[t];
                        void 0 === n
                          ? u++
                          : H.then(
                              n,
                              function(e) {
                                (s[t] = e), l(t);
                              },
                              function(e) {
                                (o[t] = e), l(t);
                              }
                            );
                      }),
                        0 !== (a -= u) || t(s);
                    },
                    function() {
                      Object.keys(e).forEach(function(t) {
                        var n = H.as(e[t]);
                        "function" == typeof n.cancel && n.cancel();
                      });
                    }
                  );
                },
                removeEventListener: function(e, t, n) {
                  L.removeEventListener(e, t, n);
                },
                supportedForProcessing: !1,
                then: function(e, t, n, r) {
                  return H.as(e).then(t, n, r);
                },
                thenEach: function(e, t, n, r) {
                  var i = Array.isArray(e) ? [] : {};
                  return (
                    Object.keys(e).forEach(function(o) {
                      i[o] = H.as(e[o]).then(t, n, r);
                    }),
                    H.join(i)
                  );
                },
                timeout: function(n, r) {
                  var i = (function(n) {
                    var r;
                    return new H(
                      function(i) {
                        n ? (r = e.setTimeout(i, n)) : t._setImmediate(i);
                      },
                      function() {
                        r && e.clearTimeout(r);
                      }
                    );
                  })(n);
                  return r
                    ? (function(e, t) {
                        var n = function() {
                          e.cancel();
                        };
                        return (
                          e.then(function() {
                            t.cancel();
                          }),
                          t.then(n, n),
                          t
                        );
                      })(i, r)
                    : i;
                },
                wrap: function(e) {
                  return new V(e);
                },
                wrapError: function(e) {
                  return new j(e);
                },
                _veryExpensiveTagWithStack: {
                  get: function() {
                    return P;
                  },
                  set: function(e) {
                    P = e;
                  }
                },
                _veryExpensiveTagWithStack_tag: M,
                _getStack: function() {
                  if (e.Debug && e.Debug.debuggerEnabled)
                    try {
                      throw new Error();
                    } catch (e) {
                      return e.stack;
                    }
                },
                _cancelBlocker: function(e, t) {
                  if (!H.is(e)) return H.wrap(e);
                  var n,
                    r,
                    i = new H(
                      function(e, t) {
                        (n = e), (r = t);
                      },
                      function() {
                        (n = null), (r = null), t && t();
                      }
                    );
                  return (
                    e.then(
                      function(e) {
                        n && n(e);
                      },
                      function(e) {
                        r && r(e);
                      }
                    ),
                    i
                  );
                }
              }
            );
          return (
            Object.defineProperties(H, i.createEventProperties(A)),
            (H._doneHandler = function(e) {
              t._setImmediate(function() {
                throw e;
              });
            }),
            {
              PromiseStateMachine: q,
              Promise: H,
              state_created: w
            }
          );
        }
      ),
      t(
        "WinJS/Promise",
        ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"],
        function(e, t) {
          "use strict";
          return e.Namespace.define("WinJS", { Promise: t.Promise }), t.Promise;
        }
      ),
      ((s = e["WinJS/Core/_WinJS"]).TPromise = s.Promise),
      (s.PPromise = s.Promise),
      "undefined" == typeof exports && "function" == typeof r && r.amd
        ? r("vs/base/common/winjs.base", [], s)
        : (module.exports = s);
  })(),
    r(e[4], t([1, 0, 3]), function(e, t, n) {
      "use strict";
      function r(e) {
        i(e) || t.errorHandler.onUnexpectedError(e);
      }
      function i(e) {
        return e instanceof Error && e.name === u && e.message === u;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = {};
      n.TPromise.addEventListener("error", function(e) {
        var t = e.detail,
          n = t.id;
        t.parent
          ? t.handler && o && delete o[n]
          : ((o[n] = t),
            1 === Object.keys(o).length &&
              setTimeout(function() {
                var e = o;
                (o = {}),
                  Object.keys(e).forEach(function(t) {
                    var n = e[t];
                    n.exception ? r(n.exception) : n.error && r(n.error),
                      console.log(
                        "WARNING: Promise with no error callback:" + n.id
                      ),
                      console.log(n),
                      n.exception && console.log(n.exception.stack);
                  });
              }, 0));
      });
      var s = (function() {
        function e() {
          (this.listeners = []),
            (this.unexpectedErrorHandler = function(e) {
              setTimeout(function() {
                if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
                throw e;
              }, 0);
            });
        }
        return (
          (e.prototype.addListener = function(e) {
            var t = this;
            return (
              this.listeners.push(e),
              function() {
                t._removeListener(e);
              }
            );
          }),
          (e.prototype.emit = function(e) {
            this.listeners.forEach(function(t) {
              t(e);
            });
          }),
          (e.prototype._removeListener = function(e) {
            this.listeners.splice(this.listeners.indexOf(e), 1);
          }),
          (e.prototype.setUnexpectedErrorHandler = function(e) {
            this.unexpectedErrorHandler = e;
          }),
          (e.prototype.getUnexpectedErrorHandler = function() {
            return this.unexpectedErrorHandler;
          }),
          (e.prototype.onUnexpectedError = function(e) {
            this.unexpectedErrorHandler(e), this.emit(e);
          }),
          (e.prototype.onUnexpectedExternalError = function(e) {
            this.unexpectedErrorHandler(e);
          }),
          e
        );
      })();
      (t.ErrorHandler = s),
        (t.errorHandler = new s()),
        (t.setUnexpectedErrorHandler = function(e) {
          t.errorHandler.setUnexpectedErrorHandler(e);
        }),
        (t.onUnexpectedError = r),
        (t.onUnexpectedExternalError = function(e) {
          i(e) || t.errorHandler.onUnexpectedExternalError(e);
        }),
        (t.transformErrorForSerialization = function(e) {
          if (e instanceof Error)
            return {
              $isError: !0,
              name: e.name,
              message: e.message,
              stack: e.stacktrace || e.stack
            };
          return e;
        });
      var u = "Canceled";
      (t.isPromiseCanceledError = i),
        (t.canceled = function() {
          var e = new Error(u);
          return (e.name = e.message), e;
        }),
        (t.illegalArgument = function(e) {
          return e
            ? new Error("Illegal argument: " + e)
            : new Error("Illegal argument");
        }),
        (t.illegalState = function(e) {
          return e
            ? new Error("Illegal state: " + e)
            : new Error("Illegal state");
        }),
        (t.readonly = function(e) {
          return e
            ? new Error("readonly property '" + e + " cannot be changed'")
            : new Error("readonly property cannot be changed");
        }),
        (t.disposed = function(e) {
          var t = new Error(e + " has been disposed");
          return (t.name = "DISPOSED"), t;
        }),
        (t.isErrorWithActions = function(e) {
          return e instanceof Error && Array.isArray(e.actions);
        }),
        (t.create = function(e, t) {
          void 0 === t && (t = Object.create(null));
          var n = new Error(e);
          return t.actions && (n.actions = t.actions), n;
        }),
        (t.getErrorMessage = function(e) {
          return e
            ? e.message
              ? e.message
              : e.stack
                ? e.stack.split("\n")[0]
                : String(e)
            : "Error";
        });
    }),
    r(e[9], t([1, 0, 10, 3, 12, 4, 18]), function(e, t, n, r, i, o, s) {
      "use strict";
      function u(e) {
        return function(t, n, r) {
          void 0 === n && (n = null);
          var i = e(
            function(e) {
              return i.dispose(), t.call(n, e);
            },
            null,
            r
          );
          return i;
        };
      }
      function a(e, t) {
        return function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                return n.call(r, t(e));
              },
              null,
              i
            )
          );
        };
      }
      function l(e, t) {
        return function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                t(e), n.call(r, e);
              },
              null,
              i
            )
          );
        };
      }
      function c(e, t) {
        return function(n, r, i) {
          return (
            void 0 === r && (r = null),
            e(
              function(e) {
                return t(e) && n.call(r, e);
              },
              null,
              i
            )
          );
        };
      }
      function f(e) {
        var t,
          n = !0;
        return c(e, function(e) {
          var r = n || e !== t;
          return (n = !1), (t = e), r;
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function(e) {
        var t = { dispose: function() {} };
        e.None = function() {
          return t;
        };
      })(t.Event || (t.Event = {}));
      var h = (function() {
        function e(e) {
          this._options = e;
        }
        return (
          Object.defineProperty(e.prototype, "event", {
            get: function() {
              var t = this;
              return (
                this._event ||
                  (this._event = function(n, r, i) {
                    t._listeners || (t._listeners = new s.LinkedList());
                    var o = t._listeners.isEmpty();
                    o &&
                      t._options &&
                      t._options.onFirstListenerAdd &&
                      t._options.onFirstListenerAdd(t);
                    var u = t._listeners.push(r ? [n, r] : n);
                    o &&
                      t._options &&
                      t._options.onFirstListenerDidAdd &&
                      t._options.onFirstListenerDidAdd(t),
                      t._options &&
                        t._options.onListenerDidAdd &&
                        t._options.onListenerDidAdd(t, n, r);
                    var a;
                    return (
                      (a = {
                        dispose: function() {
                          (a.dispose = e._noop),
                            t._disposed ||
                              (u(),
                              t._options &&
                                t._options.onLastListenerRemove &&
                                t._listeners.isEmpty() &&
                                t._options.onLastListenerRemove(t));
                        }
                      }),
                      Array.isArray(i) && i.push(a),
                      a
                    );
                  }),
                this._event
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.fire = function(e) {
            if (this._listeners) {
              this._deliveryQueue || (this._deliveryQueue = []);
              for (
                var t = this._listeners.iterator(), n = t.next();
                !n.done;
                n = t.next()
              )
                this._deliveryQueue.push([n.value, e]);
              for (; this._deliveryQueue.length > 0; ) {
                var r = this._deliveryQueue.shift(),
                  i = r[0],
                  s = r[1];
                try {
                  "function" == typeof i
                    ? i.call(void 0, s)
                    : i[0].call(i[1], s);
                } catch (n) {
                  o.onUnexpectedError(n);
                }
              }
            }
          }),
          (e.prototype.dispose = function() {
            this._listeners && (this._listeners = void 0),
              this._deliveryQueue && (this._deliveryQueue.length = 0),
              (this._disposed = !0);
          }),
          (e._noop = function() {}),
          e
        );
      })();
      t.Emitter = h;
      var d = (function() {
        function e() {
          var e = this;
          (this.hasListeners = !1),
            (this.events = []),
            (this.emitter = new h({
              onFirstListenerAdd: function() {
                return e.onFirstListenerAdd();
              },
              onLastListenerRemove: function() {
                return e.onLastListenerRemove();
              }
            }));
        }
        return (
          Object.defineProperty(e.prototype, "event", {
            get: function() {
              return this.emitter.event;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.add = function(e) {
            var t = this,
              r = { event: e, listener: null };
            this.events.push(r), this.hasListeners && this.hook(r);
            return n.toDisposable(
              i.once(function() {
                t.hasListeners && t.unhook(r);
                var e = t.events.indexOf(r);
                t.events.splice(e, 1);
              })
            );
          }),
          (e.prototype.onFirstListenerAdd = function() {
            var e = this;
            (this.hasListeners = !0),
              this.events.forEach(function(t) {
                return e.hook(t);
              });
          }),
          (e.prototype.onLastListenerRemove = function() {
            var e = this;
            (this.hasListeners = !1),
              this.events.forEach(function(t) {
                return e.unhook(t);
              });
          }),
          (e.prototype.hook = function(e) {
            var t = this;
            e.listener = e.event(function(e) {
              return t.emitter.fire(e);
            });
          }),
          (e.prototype.unhook = function(e) {
            e.listener.dispose(), (e.listener = null);
          }),
          (e.prototype.dispose = function() {
            this.emitter.dispose();
          }),
          e
        );
      })();
      (t.EventMultiplexer = d),
        (t.fromCallback = function(e) {
          var t,
            n = new h({
              onFirstListenerAdd: function() {
                return (t = e(function(e) {
                  return n.fire(e);
                }));
              },
              onLastListenerRemove: function() {
                return t.dispose();
              }
            });
          return n.event;
        }),
        (t.fromPromise = function(e) {
          var t = new h(),
            n = !1;
          return (
            e
              .then(null, function() {
                return null;
              })
              .then(function() {
                n
                  ? t.fire()
                  : setTimeout(function() {
                      return t.fire();
                    }, 0);
              }),
            (n = !0),
            t.event
          );
        }),
        (t.toPromise = function(e) {
          return new r.TPromise(function(t) {
            var n = e(function(e) {
              n.dispose(), t(e);
            });
          });
        }),
        (t.once = u),
        (t.anyEvent = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return function(t, r, i) {
            return (
              void 0 === r && (r = null),
              n.combinedDisposable(
                e.map(function(e) {
                  return e(
                    function(e) {
                      return t.call(r, e);
                    },
                    null,
                    i
                  );
                })
              )
            );
          };
        }),
        (t.debounceEvent = function(e, t, n, r) {
          void 0 === n && (n = 100), void 0 === r && (r = !1);
          var i,
            o = void 0,
            s = void 0,
            u = 0,
            a = new h({
              onFirstListenerAdd: function() {
                i = e(function(e) {
                  u++,
                    (o = t(o, e)),
                    r && !s && a.fire(o),
                    clearTimeout(s),
                    (s = setTimeout(function() {
                      var e = o;
                      (o = void 0),
                        (s = void 0),
                        (!r || u > 1) && a.fire(e),
                        (u = 0);
                    }, n));
                });
              },
              onLastListenerRemove: function() {
                i.dispose();
              }
            });
          return a.event;
        });
      var p = (function() {
        function e() {
          this.buffers = [];
        }
        return (
          (e.prototype.wrapEvent = function(e) {
            var t = this;
            return function(n, r, i) {
              return e(
                function(e) {
                  var i = t.buffers[t.buffers.length - 1];
                  i
                    ? i.push(function() {
                        return n.call(r, e);
                      })
                    : n.call(r, e);
                },
                void 0,
                i
              );
            };
          }),
          (e.prototype.bufferEvents = function(e) {
            var t = [];
            this.buffers.push(t),
              e(),
              this.buffers.pop(),
              t.forEach(function(e) {
                return e();
              });
          }),
          e
        );
      })();
      (t.EventBufferer = p),
        (t.mapEvent = a),
        (t.forEach = l),
        (t.filterEvent = c);
      var m = (function() {
        function e(e) {
          this._event = e;
        }
        return (
          Object.defineProperty(e.prototype, "event", {
            get: function() {
              return this._event;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.map = function(t) {
            return new e(a(this._event, t));
          }),
          (e.prototype.forEach = function(t) {
            return new e(l(this._event, t));
          }),
          (e.prototype.filter = function(t) {
            return new e(c(this._event, t));
          }),
          (e.prototype.latch = function() {
            return new e(f(this._event));
          }),
          (e.prototype.on = function(e, t, n) {
            return this._event(e, t, n);
          }),
          e
        );
      })();
      (t.chain = function(e) {
        return new m(e);
      }),
        (t.stopwatch = function(e) {
          var t = new Date().getTime();
          return a(u(e), function(e) {
            return new Date().getTime() - t;
          });
        }),
        (t.buffer = function(e, t, n) {
          void 0 === t && (t = !1), void 0 === n && (n = []), (n = n.slice());
          var r = e(function(e) {
              n ? n.push(e) : o.fire(e);
            }),
            i = function() {
              n.forEach(function(e) {
                return o.fire(e);
              }),
                (n = null);
            },
            o = new h({
              onFirstListenerAdd: function() {
                r ||
                  (r = e(function(e) {
                    return o.fire(e);
                  }));
              },
              onFirstListenerDidAdd: function() {
                n && (t ? setTimeout(i) : i());
              },
              onLastListenerRemove: function() {
                r.dispose(), (r = null);
              }
            });
          return o.event;
        }),
        (t.echo = function(e, t, n) {
          void 0 === t && (t = !1),
            void 0 === n && (n = []),
            (n = n.slice()),
            e(function(e) {
              n.push(e), i.fire(e);
            });
          var r = function(e, t) {
              return n.forEach(function(n) {
                return e.call(t, n);
              });
            },
            i = new h({
              onListenerDidAdd: function(e, n, i) {
                t
                  ? setTimeout(function() {
                      return r(n, i);
                    })
                  : r(n, i);
              }
            });
          return i.event;
        });
      var _ = (function() {
        function e() {
          (this.emitter = new h()),
            (this.event = this.emitter.event),
            (this.disposable = n.empty);
        }
        return (
          Object.defineProperty(e.prototype, "input", {
            set: function(e) {
              this.disposable.dispose(),
                (this.disposable = e(this.emitter.fire, this.emitter));
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.dispose = function() {
            this.disposable.dispose(), this.emitter.dispose();
          }),
          e
        );
      })();
      (t.Relay = _),
        (t.fromNodeEventEmitter = function(e, t, n) {
          void 0 === n &&
            (n = function(e) {
              return e;
            });
          var r = function() {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return i.fire(n.apply(void 0, e));
            },
            i = new h({
              onFirstListenerAdd: function() {
                return e.on(t, r);
              },
              onLastListenerRemove: function() {
                return e.removeListener(t, r);
              }
            });
          return i.event;
        }),
        (t.latch = f);
    }),
    r(e[11], t([1, 0, 9]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = Object.freeze(function(e, t) {
          var n = setTimeout(e.bind(t), 0);
          return {
            dispose: function() {
              clearTimeout(n);
            }
          };
        });
      !(function(e) {
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: n.Event.None
        })),
          (e.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: i
          }));
      })((r = t.CancellationToken || (t.CancellationToken = {})));
      var o = (function() {
          function e() {
            this._isCancelled = !1;
          }
          return (
            (e.prototype.cancel = function() {
              this._isCancelled ||
                ((this._isCancelled = !0),
                this._emitter && (this._emitter.fire(void 0), this.dispose()));
            }),
            Object.defineProperty(e.prototype, "isCancellationRequested", {
              get: function() {
                return this._isCancelled;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, "onCancellationRequested", {
              get: function() {
                return this._isCancelled
                  ? i
                  : (this._emitter || (this._emitter = new n.Emitter()),
                    this._emitter.event);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.dispose = function() {
              this._emitter &&
                (this._emitter.dispose(), (this._emitter = void 0));
            }),
            e
          );
        })(),
        s = (function() {
          function e() {}
          return (
            Object.defineProperty(e.prototype, "token", {
              get: function() {
                return this._token || (this._token = new o()), this._token;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.cancel = function() {
              this._token
                ? this._token instanceof o && this._token.cancel()
                : (this._token = r.Cancelled);
            }),
            (e.prototype.dispose = function() {
              this._token
                ? this._token instanceof o && this._token.dispose()
                : (this._token = r.None);
            }),
            e
          );
        })();
      t.CancellationTokenSource = s;
    }),
    r(e[14], t([1, 0, 4, 3, 11, 10, 9]), function(e, t, n, r, i, s, u) {
      "use strict";
      function a(e) {
        return e && "function" == typeof e.then;
      }
      function l(e, t) {
        return (function(e) {
          return r.TPromise.is(e) && "function" == typeof e.done;
        })(e)
          ? new r.TPromise(
              function(r, i, o) {
                e.done(
                  function(e) {
                    try {
                      t(e);
                    } catch (e) {
                      n.onUnexpectedError(e);
                    }
                    r(e);
                  },
                  function(e) {
                    try {
                      t(e);
                    } catch (e) {
                      n.onUnexpectedError(e);
                    }
                    i(e);
                  },
                  function(e) {
                    o(e);
                  }
                );
              },
              function() {
                e.cancel();
              }
            )
          : (e.then(
              function(e) {
                return t();
              },
              function(e) {
                return t();
              }
            ),
            e);
      }
      function c(e) {
        function t(i) {
          void 0 !== i && null !== i && n.push(i);
          var o = e.length ? e.pop()() : null;
          return o ? o.then(t) : r.TPromise.as(n);
        }
        var n = [];
        return (e = e.reverse()), r.TPromise.as(null).then(t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isThenable = a),
        (t.toThenable = function(e) {
          return a(e) ? e : r.TPromise.as(e);
        }),
        (t.asWinJsPromise = function(e) {
          var t = new i.CancellationTokenSource();
          return new r.TPromise(
            function(n, i, o) {
              var s = e(t.token);
              s instanceof r.TPromise
                ? s.then(
                    function(e) {
                      t.dispose(), n(e);
                    },
                    function(e) {
                      t.dispose(), i(e);
                    },
                    o
                  )
                : a(s)
                  ? s.then(
                      function(e) {
                        t.dispose(), n(e);
                      },
                      function(e) {
                        t.dispose(), i(e);
                      }
                    )
                  : (t.dispose(), n(s));
            },
            function() {
              t.cancel();
            }
          );
        }),
        (t.wireCancellationToken = function(e, t, i) {
          var o = e.onCancellationRequested(function() {
            return t.cancel();
          });
          return (
            i &&
              (t = t.then(void 0, function(e) {
                if (!n.isPromiseCanceledError(e))
                  return r.TPromise.wrapError(e);
              })),
            l(t, function() {
              return o.dispose();
            })
          );
        });
      var f = (function() {
        function e() {
          (this.activePromise = null),
            (this.queuedPromise = null),
            (this.queuedPromiseFactory = null);
        }
        return (
          (e.prototype.queue = function(e) {
            var t = this;
            if (this.activePromise) {
              if (((this.queuedPromiseFactory = e), !this.queuedPromise)) {
                var n = function() {
                  t.queuedPromise = null;
                  var e = t.queue(t.queuedPromiseFactory);
                  return (t.queuedPromiseFactory = null), e;
                };
                this.queuedPromise = new r.TPromise(
                  function(e, r, i) {
                    t.activePromise.then(n, n, i).done(e);
                  },
                  function() {
                    t.activePromise.cancel();
                  }
                );
              }
              return new r.TPromise(
                function(e, n, r) {
                  t.queuedPromise.then(e, n, r);
                },
                function() {}
              );
            }
            return (
              (this.activePromise = e()),
              new r.TPromise(
                function(e, n, r) {
                  t.activePromise.done(
                    function(n) {
                      (t.activePromise = null), e(n);
                    },
                    function(e) {
                      (t.activePromise = null), n(e);
                    },
                    r
                  );
                },
                function() {
                  t.activePromise.cancel();
                }
              )
            );
          }),
          e
        );
      })();
      t.Throttler = f;
      var h = (function() {
        function e() {
          this.current = r.TPromise.wrap(null);
        }
        return (
          (e.prototype.queue = function(e) {
            return (this.current = this.current.then(function() {
              return e();
            }));
          }),
          e
        );
      })();
      t.SimpleThrottler = h;
      var d = (function() {
        function e(e) {
          (this.defaultDelay = e),
            (this.timeout = null),
            (this.completionPromise = null),
            (this.onSuccess = null),
            (this.task = null);
        }
        return (
          (e.prototype.trigger = function(e, t) {
            var n = this;
            return (
              void 0 === t && (t = this.defaultDelay),
              (this.task = e),
              this.cancelTimeout(),
              this.completionPromise ||
                (this.completionPromise = new r.TPromise(
                  function(e) {
                    n.onSuccess = e;
                  },
                  function() {}
                ).then(function() {
                  (n.completionPromise = null), (n.onSuccess = null);
                  var e = n.task;
                  return (n.task = null), e();
                })),
              (this.timeout = setTimeout(function() {
                (n.timeout = null), n.onSuccess(null);
              }, t)),
              this.completionPromise
            );
          }),
          (e.prototype.isTriggered = function() {
            return null !== this.timeout;
          }),
          (e.prototype.cancel = function() {
            this.cancelTimeout(),
              this.completionPromise &&
                (this.completionPromise.cancel(),
                (this.completionPromise = null));
          }),
          (e.prototype.cancelTimeout = function() {
            null !== this.timeout &&
              (clearTimeout(this.timeout), (this.timeout = null));
          }),
          e
        );
      })();
      t.Delayer = d;
      var p = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.throttler = new f()), n;
        }
        return (
          o(t, e),
          (t.prototype.trigger = function(t, n) {
            var r = this;
            return e.prototype.trigger.call(
              this,
              function() {
                return r.throttler.queue(t);
              },
              n
            );
          }),
          t
        );
      })(d);
      t.ThrottledDelayer = p;
      var m = (function() {
        function e() {
          var e = this;
          (this._isOpen = !1),
            (this._promise = new r.TPromise(
              function(t, n, r) {
                e._completePromise = t;
              },
              function() {
                console.warn(
                  "You should really not try to cancel this ready promise!"
                );
              }
            ));
        }
        return (
          (e.prototype.isOpen = function() {
            return this._isOpen;
          }),
          (e.prototype.open = function() {
            (this._isOpen = !0), this._completePromise(!0);
          }),
          (e.prototype.wait = function() {
            return this._promise;
          }),
          e
        );
      })();
      t.Barrier = m;
      var _ = (function(e) {
        function t(t) {
          var r,
            i,
            o,
            s = this;
          return (
            (s =
              e.call(
                this,
                function(e, t, n) {
                  (r = e), (i = t), (o = n);
                },
                function() {
                  i(n.canceled());
                }
              ) || this),
            t.then(r, i, o),
            s
          );
        }
        return o(t, e), t;
      })(r.TPromise);
      (t.ShallowCancelThenPromise = _),
        (t.timeout = function(e) {
          return new r.Promise(function(t) {
            return setTimeout(t, e);
          });
        }),
        (t.always = l),
        (t.sequence = c),
        (t.first = function(e, t) {
          void 0 === t &&
            (t = function(e) {
              return !!e;
            }),
            (e = e.reverse().slice());
          var n = function() {
            return 0 === e.length
              ? r.TPromise.as(null)
              : e
                  .pop()()
                  .then(function(e) {
                    return t(e) ? r.TPromise.as(e) : n();
                  });
          };
          return n();
        });
      var g = (function() {
        function e(e) {
          (this.maxDegreeOfParalellism = e),
            (this.outstandingPromises = []),
            (this.runningPromises = 0),
            (this._onFinished = new u.Emitter());
        }
        return (
          Object.defineProperty(e.prototype, "onFinished", {
            get: function() {
              return this._onFinished.event;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this.runningPromises + this.outstandingPromises.length;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.queue = function(e) {
            var t = this;
            return new r.TPromise(function(n, r, i) {
              t.outstandingPromises.push({
                factory: e,
                c: n,
                e: r,
                p: i
              }),
                t.consume();
            });
          }),
          (e.prototype.consume = function() {
            for (
              var e = this;
              this.outstandingPromises.length &&
              this.runningPromises < this.maxDegreeOfParalellism;

            ) {
              var t = this.outstandingPromises.shift();
              this.runningPromises++;
              var n = t.factory();
              n.done(t.c, t.e, t.p),
                n.done(
                  function() {
                    return e.consumed();
                  },
                  function() {
                    return e.consumed();
                  }
                );
            }
          }),
          (e.prototype.consumed = function() {
            this.runningPromises--,
              this.outstandingPromises.length > 0
                ? this.consume()
                : this._onFinished.fire();
          }),
          (e.prototype.dispose = function() {
            this._onFinished.dispose();
          }),
          e
        );
      })();
      t.Limiter = g;
      var v = (function(e) {
        function t() {
          return e.call(this, 1) || this;
        }
        return o(t, e), t;
      })(g);
      t.Queue = v;
      var y = (function() {
        function e() {
          this.queues = Object.create(null);
        }
        return (
          (e.prototype.queueFor = function(e) {
            var t = this,
              n = e.toString();
            if (!this.queues[n]) {
              var r = new v();
              r.onFinished(function() {
                r.dispose(), delete t.queues[n];
              }),
                (this.queues[n] = r);
            }
            return this.queues[n];
          }),
          e
        );
      })();
      (t.ResourceQueue = y),
        (t.setDisposableTimeout = function(e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = setTimeout.apply(void 0, [e, t].concat(n));
          return {
            dispose: function() {
              clearTimeout(i);
            }
          };
        });
      var b = (function(e) {
        function t() {
          var t = e.call(this) || this;
          return (t._token = -1), t;
        }
        return (
          o(t, e),
          (t.prototype.dispose = function() {
            this.cancel(), e.prototype.dispose.call(this);
          }),
          (t.prototype.cancel = function() {
            -1 !== this._token &&
              (clearTimeout(this._token), (this._token = -1));
          }),
          (t.prototype.cancelAndSet = function(e, t) {
            var n = this;
            this.cancel(),
              (this._token = setTimeout(function() {
                (n._token = -1), e();
              }, t));
          }),
          (t.prototype.setIfNotSet = function(e, t) {
            var n = this;
            -1 === this._token &&
              (this._token = setTimeout(function() {
                (n._token = -1), e();
              }, t));
          }),
          t
        );
      })(s.Disposable);
      t.TimeoutTimer = b;
      var C = (function(e) {
        function t() {
          var t = e.call(this) || this;
          return (t._token = -1), t;
        }
        return (
          o(t, e),
          (t.prototype.dispose = function() {
            this.cancel(), e.prototype.dispose.call(this);
          }),
          (t.prototype.cancel = function() {
            -1 !== this._token &&
              (clearInterval(this._token), (this._token = -1));
          }),
          (t.prototype.cancelAndSet = function(e, t) {
            this.cancel(),
              (this._token = setInterval(function() {
                e();
              }, t));
          }),
          t
        );
      })(s.Disposable);
      t.IntervalTimer = C;
      var E = (function() {
        function e(e, t) {
          (this.timeoutToken = -1),
            (this.runner = e),
            (this.timeout = t),
            (this.timeoutHandler = this.onTimeout.bind(this));
        }
        return (
          (e.prototype.dispose = function() {
            this.cancel(), (this.runner = null);
          }),
          (e.prototype.cancel = function() {
            this.isScheduled() &&
              (clearTimeout(this.timeoutToken), (this.timeoutToken = -1));
          }),
          (e.prototype.schedule = function(e) {
            void 0 === e && (e = this.timeout),
              this.cancel(),
              (this.timeoutToken = setTimeout(this.timeoutHandler, e));
          }),
          (e.prototype.isScheduled = function() {
            return -1 !== this.timeoutToken;
          }),
          (e.prototype.onTimeout = function() {
            (this.timeoutToken = -1), this.runner && this.runner();
          }),
          e
        );
      })();
      (t.RunOnceScheduler = E),
        (t.nfcall = function(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return new r.TPromise(
            function(n, r) {
              return e.apply(
                void 0,
                t.concat([
                  function(e, t) {
                    return e ? r(e) : n(t);
                  }
                ])
              );
            },
            function() {
              return null;
            }
          );
        }),
        (t.ninvoke = function(e, t) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          return new r.TPromise(
            function(r, i) {
              return t.call.apply(
                t,
                [e].concat(n, [
                  function(e, t) {
                    return e ? i(e) : r(t);
                  }
                ])
              );
            },
            function() {
              return null;
            }
          );
        });
      var S = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.throttle = function(e) {
            var t = this;
            return (
              (this.suspended = !0),
              l(e, function() {
                return t.resume();
              })
            );
          }),
          (t.prototype.fire = function(t) {
            return this.suspended
              ? ((this.lastEvent = t), void (this.hasLastEvent = !0))
              : e.prototype.fire.call(this, t);
          }),
          (t.prototype.resume = function() {
            (this.suspended = !1),
              this.hasLastEvent && this.fire(this.lastEvent),
              (this.hasLastEvent = !1),
              (this.lastEvent = void 0);
          }),
          t
        );
      })(u.Emitter);
      t.ThrottledEmitter = S;
    }),
    r(e[30], t([1, 0, 4, 10, 3, 14, 5]), function(e, t, n, r, i, s, u) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = "$initialize",
        l = !1;
      t.logOnceWebWorkerWarning = function(e) {
        u.isWeb &&
          (l ||
            ((l = !0),
            console.warn(
              "Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq"
            )),
          console.warn(e.message));
      };
      var c = (function() {
          function e(e) {
            (this._workerId = -1),
              (this._handler = e),
              (this._lastSentReq = 0),
              (this._pendingReplies = Object.create(null));
          }
          return (
            (e.prototype.setWorkerId = function(e) {
              this._workerId = e;
            }),
            (e.prototype.sendMessage = function(e, t) {
              var n = String(++this._lastSentReq),
                r = { c: null, e: null },
                o = new i.TPromise(
                  function(e, t, n) {
                    (r.c = e), (r.e = t);
                  },
                  function() {}
                );
              return (
                (this._pendingReplies[n] = r),
                this._send({
                  vsWorker: this._workerId,
                  req: n,
                  method: e,
                  args: t
                }),
                o
              );
            }),
            (e.prototype.handleMessage = function(e) {
              var t;
              try {
                t = JSON.parse(e);
              } catch (e) {}
              t &&
                t.vsWorker &&
                ((-1 !== this._workerId && t.vsWorker !== this._workerId) ||
                  this._handleMessage(t));
            }),
            (e.prototype._handleMessage = function(e) {
              var t = this;
              if (e.seq) {
                var r = e;
                if (!this._pendingReplies[r.seq])
                  return void console.warn("Got reply to unknown seq");
                var i = this._pendingReplies[r.seq];
                if ((delete this._pendingReplies[r.seq], r.err)) {
                  var o = r.err;
                  return (
                    r.err.$isError &&
                      (((o = new Error()).name = r.err.name),
                      (o.message = r.err.message),
                      (o.stack = r.err.stack)),
                    void i.e(o)
                  );
                }
                i.c(r.res);
              } else {
                var s = e,
                  u = s.req;
                this._handler.handleMessage(s.method, s.args).then(
                  function(e) {
                    t._send({
                      vsWorker: t._workerId,
                      seq: u,
                      res: e,
                      err: void 0
                    });
                  },
                  function(e) {
                    e.detail instanceof Error &&
                      (e.detail = n.transformErrorForSerialization(e.detail)),
                      t._send({
                        vsWorker: t._workerId,
                        seq: u,
                        res: void 0,
                        err: n.transformErrorForSerialization(e)
                      });
                  }
                );
              }
            }),
            (e.prototype._send = function(e) {
              var t = JSON.stringify(e);
              this._handler.sendMessage(t);
            }),
            e
          );
        })(),
        f = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this,
              o = null,
              s = null;
            (r._worker = r._register(
              t.create(
                "vs/base/common/worker/simpleWorker",
                function(e) {
                  r._protocol.handleMessage(e);
                },
                function(e) {
                  s(e);
                }
              )
            )),
              (r._protocol = new c({
                sendMessage: function(e) {
                  r._worker.postMessage(e);
                },
                handleMessage: function(e, t) {
                  return i.TPromise.as(null);
                }
              })),
              r._protocol.setWorkerId(r._worker.getId());
            var u = null;
            void 0 !== self.require &&
            "function" == typeof self.require.getConfig
              ? (u = self.require.getConfig())
              : void 0 !== self.requirejs &&
                (u = self.requirejs.s.contexts._.config),
              (r._lazyProxy = new i.TPromise(
                function(e, t, n) {
                  (o = e), (s = t);
                },
                function() {}
              )),
              (r._onModuleLoaded = r._protocol.sendMessage(a, [
                r._worker.getId(),
                n,
                u
              ])),
              r._onModuleLoaded.then(
                function(e) {
                  for (var t = {}, n = 0; n < e.length; n++)
                    t[e[n]] = f(e[n], l);
                  o(t);
                },
                function(e) {
                  s(e), r._onError("Worker failed to load " + n, e);
                }
              );
            var l = function(e, t) {
                return r._request(e, t);
              },
              f = function(e, t) {
                return function() {
                  var n = Array.prototype.slice.call(arguments, 0);
                  return t(e, n);
                };
              };
            return r;
          }
          return (
            o(t, e),
            (t.prototype.getProxyObject = function() {
              return new s.ShallowCancelThenPromise(this._lazyProxy);
            }),
            (t.prototype._request = function(e, t) {
              var n = this;
              return new i.TPromise(
                function(r, i, o) {
                  n._onModuleLoaded.then(function() {
                    n._protocol.sendMessage(e, t).then(r, i);
                  }, i);
                },
                function() {}
              );
            }),
            (t.prototype._onError = function(e, t) {
              console.error(e), console.info(t);
            }),
            t
          );
        })(r.Disposable);
      t.SimpleWorkerClient = f;
      var h = (function() {
        function e(e, t) {
          var n = this;
          (this._requestHandler = t),
            (this._protocol = new c({
              sendMessage: function(t) {
                e(t);
              },
              handleMessage: function(e, t) {
                return n._handleMessage(e, t);
              }
            }));
        }
        return (
          (e.prototype.onmessage = function(e) {
            this._protocol.handleMessage(e);
          }),
          (e.prototype._handleMessage = function(e, t) {
            if (e === a) return this.initialize(t[0], t[1], t[2]);
            if (
              !this._requestHandler ||
              "function" != typeof this._requestHandler[e]
            )
              return i.TPromise.wrapError(
                new Error("Missing requestHandler or method: " + e)
              );
            try {
              return i.TPromise.as(
                this._requestHandler[e].apply(this._requestHandler, t)
              );
            } catch (e) {
              return i.TPromise.wrapError(e);
            }
          }),
          (e.prototype.initialize = function(e, t, n) {
            var r = this;
            if ((this._protocol.setWorkerId(e), this._requestHandler)) {
              var o = [];
              for (var s in this._requestHandler)
                "function" == typeof this._requestHandler[s] && o.push(s);
              return i.TPromise.as(o);
            }
            n &&
              (void 0 !== n.baseUrl && delete n.baseUrl,
              void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs,
              (n.catchError = !0),
              self.require.config(n));
            var u,
              a,
              l = new i.TPromise(function(e, t, n) {
                (u = e), (a = t);
              });
            return (
              self.require(
                [t],
                function() {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var n = e[0];
                  r._requestHandler = n.create();
                  var i = [];
                  for (var o in r._requestHandler)
                    "function" == typeof r._requestHandler[o] && i.push(o);
                  u(i);
                },
                a
              ),
              l
            );
          }),
          e
        );
      })();
      (t.SimpleWorkerServer = h),
        (t.create = function(e) {
          return new h(e, null);
        });
    }),
    r(e[2], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
        function e(e, t) {
          (this.lineNumber = e), (this.column = t);
        }
        return (
          (e.prototype.equals = function(t) {
            return e.equals(this, t);
          }),
          (e.equals = function(e, t) {
            return (
              (!e && !t) ||
              (!!e &&
                !!t &&
                e.lineNumber === t.lineNumber &&
                e.column === t.column)
            );
          }),
          (e.prototype.isBefore = function(t) {
            return e.isBefore(this, t);
          }),
          (e.isBefore = function(e, t) {
            return (
              e.lineNumber < t.lineNumber ||
              (!(t.lineNumber < e.lineNumber) && e.column < t.column)
            );
          }),
          (e.prototype.isBeforeOrEqual = function(t) {
            return e.isBeforeOrEqual(this, t);
          }),
          (e.isBeforeOrEqual = function(e, t) {
            return (
              e.lineNumber < t.lineNumber ||
              (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
            );
          }),
          (e.compare = function(e, t) {
            var n = 0 | e.lineNumber,
              r = 0 | t.lineNumber;
            if (n === r) {
              return (0 | e.column) - (0 | t.column);
            }
            return n - r;
          }),
          (e.prototype.clone = function() {
            return new e(this.lineNumber, this.column);
          }),
          (e.prototype.toString = function() {
            return "(" + this.lineNumber + "," + this.column + ")";
          }),
          (e.lift = function(t) {
            return new e(t.lineNumber, t.column);
          }),
          (e.isIPosition = function(e) {
            return (
              e &&
              "number" == typeof e.lineNumber &&
              "number" == typeof e.column
            );
          }),
          e
        );
      })();
      t.Position = n;
    }),
    r(e[7], t([1, 0, 2]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t, n, r) {
          e > n || (e === n && t > r)
            ? ((this.startLineNumber = n),
              (this.startColumn = r),
              (this.endLineNumber = e),
              (this.endColumn = t))
            : ((this.startLineNumber = e),
              (this.startColumn = t),
              (this.endLineNumber = n),
              (this.endColumn = r));
        }
        return (
          (e.prototype.isEmpty = function() {
            return e.isEmpty(this);
          }),
          (e.isEmpty = function(e) {
            return (
              e.startLineNumber === e.endLineNumber &&
              e.startColumn === e.endColumn
            );
          }),
          (e.prototype.containsPosition = function(t) {
            return e.containsPosition(this, t);
          }),
          (e.containsPosition = function(e, t) {
            return (
              !(
                t.lineNumber < e.startLineNumber ||
                t.lineNumber > e.endLineNumber
              ) &&
              (!(
                t.lineNumber === e.startLineNumber && t.column < e.startColumn
              ) &&
                !(t.lineNumber === e.endLineNumber && t.column > e.endColumn))
            );
          }),
          (e.prototype.containsRange = function(t) {
            return e.containsRange(this, t);
          }),
          (e.containsRange = function(e, t) {
            return (
              !(
                t.startLineNumber < e.startLineNumber ||
                t.endLineNumber < e.startLineNumber
              ) &&
              (!(
                t.startLineNumber > e.endLineNumber ||
                t.endLineNumber > e.endLineNumber
              ) &&
                (!(
                  t.startLineNumber === e.startLineNumber &&
                  t.startColumn < e.startColumn
                ) &&
                  !(
                    t.endLineNumber === e.endLineNumber &&
                    t.endColumn > e.endColumn
                  )))
            );
          }),
          (e.prototype.plusRange = function(t) {
            return e.plusRange(this, t);
          }),
          (e.plusRange = function(t, n) {
            var r, i, o, s;
            return (
              n.startLineNumber < t.startLineNumber
                ? ((r = n.startLineNumber), (i = n.startColumn))
                : n.startLineNumber === t.startLineNumber
                  ? ((r = n.startLineNumber),
                    (i = Math.min(n.startColumn, t.startColumn)))
                  : ((r = t.startLineNumber), (i = t.startColumn)),
              n.endLineNumber > t.endLineNumber
                ? ((o = n.endLineNumber), (s = n.endColumn))
                : n.endLineNumber === t.endLineNumber
                  ? ((o = n.endLineNumber),
                    (s = Math.max(n.endColumn, t.endColumn)))
                  : ((o = t.endLineNumber), (s = t.endColumn)),
              new e(r, i, o, s)
            );
          }),
          (e.prototype.intersectRanges = function(t) {
            return e.intersectRanges(this, t);
          }),
          (e.intersectRanges = function(t, n) {
            var r = t.startLineNumber,
              i = t.startColumn,
              o = t.endLineNumber,
              s = t.endColumn,
              u = n.startLineNumber,
              a = n.startColumn,
              l = n.endLineNumber,
              c = n.endColumn;
            return (
              r < u ? ((r = u), (i = a)) : r === u && (i = Math.max(i, a)),
              o > l ? ((o = l), (s = c)) : o === l && (s = Math.min(s, c)),
              r > o ? null : r === o && i > s ? null : new e(r, i, o, s)
            );
          }),
          (e.prototype.equalsRange = function(t) {
            return e.equalsRange(this, t);
          }),
          (e.equalsRange = function(e, t) {
            return (
              !!e &&
              !!t &&
              e.startLineNumber === t.startLineNumber &&
              e.startColumn === t.startColumn &&
              e.endLineNumber === t.endLineNumber &&
              e.endColumn === t.endColumn
            );
          }),
          (e.prototype.getEndPosition = function() {
            return new n.Position(this.endLineNumber, this.endColumn);
          }),
          (e.prototype.getStartPosition = function() {
            return new n.Position(this.startLineNumber, this.startColumn);
          }),
          (e.prototype.toString = function() {
            return (
              "[" +
              this.startLineNumber +
              "," +
              this.startColumn +
              " -> " +
              this.endLineNumber +
              "," +
              this.endColumn +
              "]"
            );
          }),
          (e.prototype.setEndPosition = function(t, n) {
            return new e(this.startLineNumber, this.startColumn, t, n);
          }),
          (e.prototype.setStartPosition = function(t, n) {
            return new e(t, n, this.endLineNumber, this.endColumn);
          }),
          (e.prototype.collapseToStart = function() {
            return e.collapseToStart(this);
          }),
          (e.collapseToStart = function(t) {
            return new e(
              t.startLineNumber,
              t.startColumn,
              t.startLineNumber,
              t.startColumn
            );
          }),
          (e.fromPositions = function(t, n) {
            return (
              void 0 === n && (n = t),
              new e(t.lineNumber, t.column, n.lineNumber, n.column)
            );
          }),
          (e.lift = function(t) {
            return t
              ? new e(
                  t.startLineNumber,
                  t.startColumn,
                  t.endLineNumber,
                  t.endColumn
                )
              : null;
          }),
          (e.isIRange = function(e) {
            return (
              e &&
              "number" == typeof e.startLineNumber &&
              "number" == typeof e.startColumn &&
              "number" == typeof e.endLineNumber &&
              "number" == typeof e.endColumn
            );
          }),
          (e.areIntersectingOrTouching = function(e, t) {
            return (
              !(
                e.endLineNumber < t.startLineNumber ||
                (e.endLineNumber === t.startLineNumber &&
                  e.endColumn < t.startColumn)
              ) &&
              !(
                t.endLineNumber < e.startLineNumber ||
                (t.endLineNumber === e.startLineNumber &&
                  t.endColumn < e.startColumn)
              )
            );
          }),
          (e.compareRangesUsingStarts = function(e, t) {
            var n = 0 | e.startLineNumber,
              r = 0 | t.startLineNumber;
            if (n === r) {
              var i = 0 | e.startColumn,
                o = 0 | t.startColumn;
              if (i === o) {
                var s = 0 | e.endLineNumber,
                  u = 0 | t.endLineNumber;
                if (s === u) {
                  return (0 | e.endColumn) - (0 | t.endColumn);
                }
                return s - u;
              }
              return i - o;
            }
            return n - r;
          }),
          (e.compareRangesUsingEnds = function(e, t) {
            return e.endLineNumber === t.endLineNumber
              ? e.endColumn === t.endColumn
                ? e.startLineNumber === t.startLineNumber
                  ? e.startColumn - t.startColumn
                  : e.startLineNumber - t.startLineNumber
                : e.endColumn - t.endColumn
              : e.endLineNumber - t.endLineNumber;
          }),
          (e.spansMultipleLines = function(e) {
            return e.endLineNumber > e.startLineNumber;
          }),
          e
        );
      })();
      t.Range = r;
    }),
    r(e[20], t([1, 0, 7, 2]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i;
      !(function(e) {
        (e[(e.LTR = 0)] = "LTR"), (e[(e.RTL = 1)] = "RTL");
      })((i = t.SelectionDirection || (t.SelectionDirection = {})));
      var s = (function(e) {
        function t(t, n, r, i) {
          var o = e.call(this, t, n, r, i) || this;
          return (
            (o.selectionStartLineNumber = t),
            (o.selectionStartColumn = n),
            (o.positionLineNumber = r),
            (o.positionColumn = i),
            o
          );
        }
        return (
          o(t, e),
          (t.prototype.clone = function() {
            return new t(
              this.selectionStartLineNumber,
              this.selectionStartColumn,
              this.positionLineNumber,
              this.positionColumn
            );
          }),
          (t.prototype.toString = function() {
            return (
              "[" +
              this.selectionStartLineNumber +
              "," +
              this.selectionStartColumn +
              " -> " +
              this.positionLineNumber +
              "," +
              this.positionColumn +
              "]"
            );
          }),
          (t.prototype.equalsSelection = function(e) {
            return t.selectionsEqual(this, e);
          }),
          (t.selectionsEqual = function(e, t) {
            return (
              e.selectionStartLineNumber === t.selectionStartLineNumber &&
              e.selectionStartColumn === t.selectionStartColumn &&
              e.positionLineNumber === t.positionLineNumber &&
              e.positionColumn === t.positionColumn
            );
          }),
          (t.prototype.getDirection = function() {
            return this.selectionStartLineNumber === this.startLineNumber &&
              this.selectionStartColumn === this.startColumn
              ? i.LTR
              : i.RTL;
          }),
          (t.prototype.setEndPosition = function(e, n) {
            return this.getDirection() === i.LTR
              ? new t(this.startLineNumber, this.startColumn, e, n)
              : new t(e, n, this.startLineNumber, this.startColumn);
          }),
          (t.prototype.getPosition = function() {
            return new r.Position(this.positionLineNumber, this.positionColumn);
          }),
          (t.prototype.setStartPosition = function(e, n) {
            return this.getDirection() === i.LTR
              ? new t(e, n, this.endLineNumber, this.endColumn)
              : new t(this.endLineNumber, this.endColumn, e, n);
          }),
          (t.fromPositions = function(e, n) {
            return (
              void 0 === n && (n = e),
              new t(e.lineNumber, e.column, n.lineNumber, n.column)
            );
          }),
          (t.liftSelection = function(e) {
            return new t(
              e.selectionStartLineNumber,
              e.selectionStartColumn,
              e.positionLineNumber,
              e.positionColumn
            );
          }),
          (t.selectionsArrEqual = function(e, t) {
            if ((e && !t) || (!e && t)) return !1;
            if (!e && !t) return !0;
            if (e.length !== t.length) return !1;
            for (var n = 0, r = e.length; n < r; n++)
              if (!this.selectionsEqual(e[n], t[n])) return !1;
            return !0;
          }),
          (t.isISelection = function(e) {
            return (
              e &&
              "number" == typeof e.selectionStartLineNumber &&
              "number" == typeof e.selectionStartColumn &&
              "number" == typeof e.positionLineNumber &&
              "number" == typeof e.positionColumn
            );
          }),
          (t.createWithDirection = function(e, n, r, o, s) {
            return s === i.LTR ? new t(e, n, r, o) : new t(r, o, e, n);
          }),
          t
        );
      })(n.Range);
      t.Selection = s;
    }),
    r(e[21], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
        function e(e, t, n) {
          (this.offset = 0 | e), (this.type = t), (this.language = n);
        }
        return (
          (e.prototype.toString = function() {
            return "(" + this.offset + ", " + this.type + ")";
          }),
          e
        );
      })();
      t.Token = n;
      var r = (function() {
        return function(e, t) {
          (this.tokens = e), (this.endState = t);
        };
      })();
      t.TokenizationResult = r;
      var i = (function() {
        return function(e, t) {
          (this.tokens = e), (this.endState = t);
        };
      })();
      t.TokenizationResult2 = i;
    }),
    r(e[8], t([1, 0]), function(e, t) {
      "use strict";
      function n(e) {
        return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(e, t, n) {
          for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++)
            r[i] = n;
          (this._data = r), (this.rows = e), (this.cols = t);
        }
        return (
          (e.prototype.get = function(e, t) {
            return this._data[e * this.cols + t];
          }),
          (e.prototype.set = function(e, t, n) {
            this._data[e * this.cols + t] = n;
          }),
          e
        );
      })();
      t.Uint8Matrix = r;
      !(function(e) {
        (e[(e.MAX_SAFE_SMALL_INTEGER = 1073741824)] = "MAX_SAFE_SMALL_INTEGER"),
          (e[(e.MIN_SAFE_SMALL_INTEGER = -1073741824)] =
            "MIN_SAFE_SMALL_INTEGER"),
          (e[(e.MAX_UINT_8 = 255)] = "MAX_UINT_8"),
          (e[(e.MAX_UINT_16 = 65535)] = "MAX_UINT_16"),
          (e[(e.MAX_UINT_32 = 4294967295)] = "MAX_UINT_32");
      })(t.Constants || (t.Constants = {})),
        (t.toUint8 = function(e) {
          return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
        }),
        (t.toUint32 = n),
        (t.toUint32Array = function(e) {
          for (var t = e.length, r = new Uint32Array(t), i = 0; i < t; i++)
            r[i] = n(e[i]);
          return r;
        });
    }),
    r(e[23], t([1, 0, 8]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        function e(t) {
          var r = n.toUint8(t);
          (this._defaultValue = r),
            (this._asciiMap = e._createAsciiMap(r)),
            (this._map = new Map());
        }
        return (
          (e._createAsciiMap = function(e) {
            for (var t = new Uint8Array(256), n = 0; n < 256; n++) t[n] = e;
            return t;
          }),
          (e.prototype.set = function(e, t) {
            var r = n.toUint8(t);
            e >= 0 && e < 256 ? (this._asciiMap[e] = r) : this._map.set(e, r);
          }),
          (e.prototype.get = function(e) {
            return e >= 0 && e < 256
              ? this._asciiMap[e]
              : this._map.get(e) || this._defaultValue;
          }),
          e
        );
      })();
      t.CharacterClassifier = r;
      var i;
      !(function(e) {
        (e[(e.False = 0)] = "False"), (e[(e.True = 1)] = "True");
      })(i || (i = {}));
      var o = (function() {
        function e() {
          this._actual = new r(0);
        }
        return (
          (e.prototype.add = function(e) {
            this._actual.set(e, 1);
          }),
          (e.prototype.has = function(e) {
            return 1 === this._actual.get(e);
          }),
          e
        );
      })();
      t.CharacterSet = o;
    }),
    r(e[24], t([1, 0, 13, 16]), function(e, t, n, r) {
      "use strict";
      function i(e, t, r, i) {
        return new n.LcsDiff(e, t, r).ComputeDiff(i);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = 5e3,
        u = 3,
        a = (function() {
          function e(e, t, n) {
            (this.buffer = e), (this.startMarkers = t), (this.endMarkers = n);
          }
          return (
            (e.prototype.getLength = function() {
              return this.startMarkers.length;
            }),
            (e.prototype.getElementHash = function(e) {
              return this.buffer.substring(
                this.startMarkers[e].offset,
                this.endMarkers[e].offset
              );
            }),
            (e.prototype.getStartLineNumber = function(e) {
              return e === this.startMarkers.length
                ? this.startMarkers[e - 1].lineNumber + 1
                : this.startMarkers[e].lineNumber;
            }),
            (e.prototype.getStartColumn = function(e) {
              return this.startMarkers[e].column;
            }),
            (e.prototype.getEndLineNumber = function(e) {
              return this.endMarkers[e].lineNumber;
            }),
            (e.prototype.getEndColumn = function(e) {
              return this.endMarkers[e].column;
            }),
            e
          );
        })(),
        l = (function(e) {
          function t(n) {
            for (
              var r = "", i = [], o = [], s = 0, u = 0, a = n.length;
              u < a;
              u++
            ) {
              r += n[u];
              var l = t._getFirstNonBlankColumn(n[u], 1),
                c = t._getLastNonBlankColumn(n[u], 1);
              i.push({
                offset: s + l - 1,
                lineNumber: u + 1,
                column: l
              }),
                o.push({ offset: s + c - 1, lineNumber: u + 1, column: c }),
                (s += n[u].length);
            }
            return e.call(this, r, i, o) || this;
          }
          return (
            o(t, e),
            (t._getFirstNonBlankColumn = function(e, t) {
              var n = r.firstNonWhitespaceIndex(e);
              return -1 === n ? t : n + 1;
            }),
            (t._getLastNonBlankColumn = function(e, t) {
              var n = r.lastNonWhitespaceIndex(e);
              return -1 === n ? t : n + 2;
            }),
            (t.prototype.getCharSequence = function(e, t) {
              for (var n = [], r = [], i = e; i <= t; i++)
                for (
                  var o = this.startMarkers[i],
                    s = this.endMarkers[i],
                    u = o.offset;
                  u < s.offset;
                  u++
                )
                  n.push({
                    offset: u,
                    lineNumber: o.lineNumber,
                    column: o.column + (u - o.offset)
                  }),
                    r.push({
                      offset: u + 1,
                      lineNumber: o.lineNumber,
                      column: o.column + (u - o.offset) + 1
                    });
              return new a(this.buffer, n, r);
            }),
            t
          );
        })(a),
        c = (function() {
          function e(e, t, n, r, i, o, s, u) {
            (this.originalStartLineNumber = e),
              (this.originalStartColumn = t),
              (this.originalEndLineNumber = n),
              (this.originalEndColumn = r),
              (this.modifiedStartLineNumber = i),
              (this.modifiedStartColumn = o),
              (this.modifiedEndLineNumber = s),
              (this.modifiedEndColumn = u);
          }
          return (
            (e.createFromDiffChange = function(t, n, r) {
              var i, o, s, u, a, l, c, f;
              return (
                0 === t.originalLength
                  ? ((i = 0), (o = 0), (s = 0), (u = 0))
                  : ((i = n.getStartLineNumber(t.originalStart)),
                    (o = n.getStartColumn(t.originalStart)),
                    (s = n.getEndLineNumber(
                      t.originalStart + t.originalLength - 1
                    )),
                    (u = n.getEndColumn(
                      t.originalStart + t.originalLength - 1
                    ))),
                0 === t.modifiedLength
                  ? ((a = 0), (l = 0), (c = 0), (f = 0))
                  : ((a = r.getStartLineNumber(t.modifiedStart)),
                    (l = r.getStartColumn(t.modifiedStart)),
                    (c = r.getEndLineNumber(
                      t.modifiedStart + t.modifiedLength - 1
                    )),
                    (f = r.getEndColumn(
                      t.modifiedStart + t.modifiedLength - 1
                    ))),
                new e(i, o, s, u, a, l, c, f)
              );
            }),
            e
          );
        })(),
        f = (function() {
          function e(e, t, n, r, i) {
            (this.originalStartLineNumber = e),
              (this.originalEndLineNumber = t),
              (this.modifiedStartLineNumber = n),
              (this.modifiedEndLineNumber = r),
              (this.charChanges = i);
          }
          return (
            (e.createFromDiffResult = function(t, n, r, o, s) {
              var a, l, f, h, d;
              if (
                (0 === t.originalLength
                  ? ((a = n.getStartLineNumber(t.originalStart) - 1), (l = 0))
                  : ((a = n.getStartLineNumber(t.originalStart)),
                    (l = n.getEndLineNumber(
                      t.originalStart + t.originalLength - 1
                    ))),
                0 === t.modifiedLength
                  ? ((f = r.getStartLineNumber(t.modifiedStart) - 1), (h = 0))
                  : ((f = r.getStartLineNumber(t.modifiedStart)),
                    (h = r.getEndLineNumber(
                      t.modifiedStart + t.modifiedLength - 1
                    ))),
                0 !== t.originalLength && 0 !== t.modifiedLength && o())
              ) {
                var p = n.getCharSequence(
                    t.originalStart,
                    t.originalStart + t.originalLength - 1
                  ),
                  m = r.getCharSequence(
                    t.modifiedStart,
                    t.modifiedStart + t.modifiedLength - 1
                  ),
                  _ = i(p, m, o, !0);
                s &&
                  (_ = (function(e) {
                    if (e.length <= 1) return e;
                    for (
                      var t = [e[0]], n = t[0], r = 1, i = e.length;
                      r < i;
                      r++
                    ) {
                      var o = e[r],
                        s =
                          o.originalStart -
                          (n.originalStart + n.originalLength),
                        a =
                          o.modifiedStart -
                          (n.modifiedStart + n.modifiedLength);
                      Math.min(s, a) < u
                        ? ((n.originalLength =
                            o.originalStart +
                            o.originalLength -
                            n.originalStart),
                          (n.modifiedLength =
                            o.modifiedStart +
                            o.modifiedLength -
                            n.modifiedStart))
                        : (t.push(o), (n = o));
                    }
                    return t;
                  })(_)),
                  (d = []);
                for (var g = 0, v = _.length; g < v; g++)
                  d.push(c.createFromDiffChange(_[g], p, m));
              }
              return new e(a, l, f, h, d);
            }),
            e
          );
        })(),
        h = (function() {
          function e(e, t, n) {
            (this.shouldPostProcessCharChanges =
              n.shouldPostProcessCharChanges),
              (this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace),
              (this.shouldMakePrettyDiff = n.shouldMakePrettyDiff),
              (this.maximumRunTimeMs = s),
              (this.originalLines = e),
              (this.modifiedLines = t),
              (this.original = new l(e)),
              (this.modified = new l(t));
          }
          return (
            (e.prototype.computeDiff = function() {
              if (
                1 === this.original.getLength() &&
                0 === this.original.getElementHash(0).length
              )
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: 1,
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: this.modified.getLength(),
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ];
              if (
                1 === this.modified.getLength() &&
                0 === this.modified.getElementHash(0).length
              )
                return [
                  {
                    originalStartLineNumber: 1,
                    originalEndLineNumber: this.original.getLength(),
                    modifiedStartLineNumber: 1,
                    modifiedEndLineNumber: 1,
                    charChanges: [
                      {
                        modifiedEndColumn: 0,
                        modifiedEndLineNumber: 0,
                        modifiedStartColumn: 0,
                        modifiedStartLineNumber: 0,
                        originalEndColumn: 0,
                        originalEndLineNumber: 0,
                        originalStartColumn: 0,
                        originalStartLineNumber: 0
                      }
                    ]
                  }
                ];
              this.computationStartTime = new Date().getTime();
              var e = i(
                this.original,
                this.modified,
                this._continueProcessingPredicate.bind(this),
                this.shouldMakePrettyDiff
              );
              if (this.shouldIgnoreTrimWhitespace) {
                for (var t = [], n = 0, r = e.length; n < r; n++)
                  t.push(
                    f.createFromDiffResult(
                      e[n],
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldPostProcessCharChanges
                    )
                  );
                return t;
              }
              for (var o = [], s = 0, u = 0, n = -1, a = e.length; n < a; n++) {
                for (
                  var c = n + 1 < a ? e[n + 1] : null,
                    h = c ? c.originalStart : this.originalLines.length,
                    d = c ? c.modifiedStart : this.modifiedLines.length;
                  s < h && u < d;

                ) {
                  var p = this.originalLines[s],
                    m = this.modifiedLines[u];
                  if (p !== m) {
                    for (
                      var _ = l._getFirstNonBlankColumn(p, 1),
                        g = l._getFirstNonBlankColumn(m, 1);
                      _ > 1 && g > 1;

                    ) {
                      if (
                        (E = p.charCodeAt(_ - 2)) !== (S = m.charCodeAt(g - 2))
                      )
                        break;
                      _--, g--;
                    }
                    (_ > 1 || g > 1) &&
                      this._pushTrimWhitespaceCharChange(
                        o,
                        s + 1,
                        1,
                        _,
                        u + 1,
                        1,
                        g
                      );
                    for (
                      var v = l._getLastNonBlankColumn(p, 1),
                        y = l._getLastNonBlankColumn(m, 1),
                        b = p.length + 1,
                        C = m.length + 1;
                      v < b && y < C;

                    ) {
                      var E = p.charCodeAt(v - 1),
                        S = p.charCodeAt(y - 1);
                      if (E !== S) break;
                      v++, y++;
                    }
                    (v < b || y < C) &&
                      this._pushTrimWhitespaceCharChange(
                        o,
                        s + 1,
                        v,
                        b,
                        u + 1,
                        y,
                        C
                      );
                  }
                  s++, u++;
                }
                c &&
                  (o.push(
                    f.createFromDiffResult(
                      c,
                      this.original,
                      this.modified,
                      this._continueProcessingPredicate.bind(this),
                      this.shouldPostProcessCharChanges
                    )
                  ),
                  (s += c.originalLength),
                  (u += c.modifiedLength));
              }
              return o;
            }),
            (e.prototype._pushTrimWhitespaceCharChange = function(
              e,
              t,
              n,
              r,
              i,
              o,
              s
            ) {
              this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) ||
                e.push(new f(t, t, i, i, [new c(t, n, t, r, i, o, i, s)]));
            }),
            (e.prototype._mergeTrimWhitespaceCharChange = function(
              e,
              t,
              n,
              r,
              i,
              o,
              s
            ) {
              var u = e.length;
              if (0 === u) return !1;
              var a = e[u - 1];
              return (
                0 !== a.originalEndLineNumber &&
                0 !== a.modifiedEndLineNumber &&
                (a.originalEndLineNumber + 1 === t &&
                  a.modifiedEndLineNumber + 1 === i &&
                  ((a.originalEndLineNumber = t),
                  (a.modifiedEndLineNumber = i),
                  a.charChanges.push(new c(t, n, t, r, i, o, i, s)),
                  !0))
              );
            }),
            (e.prototype._continueProcessingPredicate = function() {
              if (0 === this.maximumRunTimeMs) return !0;
              return (
                new Date().getTime() - this.computationStartTime <
                this.maximumRunTimeMs
              );
            }),
            e
          );
        })();
      t.DiffComputer = h;
    }),
    r(e[25], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?"),
        (t.DEFAULT_WORD_REGEXP = (function(e) {
          void 0 === e && (e = "");
          for (
            var n = "(-?\\d*\\.\\d\\w*)|([^", r = 0;
            r < t.USUAL_WORD_SEPARATORS.length;
            r++
          )
            e.indexOf(t.USUAL_WORD_SEPARATORS[r]) >= 0 ||
              (n += "\\" + t.USUAL_WORD_SEPARATORS[r]);
          return (n += "\\s]+)"), new RegExp(n, "g");
        })()),
        (t.ensureValidWordDefinition = function(e) {
          var n = t.DEFAULT_WORD_REGEXP;
          if (e && e instanceof RegExp)
            if (e.global) n = e;
            else {
              var r = "g";
              e.ignoreCase && (r += "i"),
                e.multiline && (r += "m"),
                (n = new RegExp(e.source, r));
            }
          return (n.lastIndex = 0), n;
        }),
        (t.getWordAtText = function(e, t, n, r) {
          t.lastIndex = 0;
          var i = t.exec(n);
          if (!i) return null;
          var o =
            i[0].indexOf(" ") >= 0
              ? (function(e, t, n, r) {
                  var i = e - 1 - r;
                  t.lastIndex = 0;
                  for (var o; (o = t.exec(n)); ) {
                    if (o.index > i) return null;
                    if (t.lastIndex >= i)
                      return {
                        word: o[0],
                        startColumn: r + 1 + o.index,
                        endColumn: r + 1 + t.lastIndex
                      };
                  }
                  return null;
                })(e, t, n, r)
              : (function(e, t, n, r) {
                  var i = e - 1 - r,
                    o = n.lastIndexOf(" ", i - 1) + 1,
                    s = n.indexOf(" ", i);
                  -1 === s && (s = n.length), (t.lastIndex = o);
                  for (var u; (u = t.exec(n)); )
                    if (u.index <= i && t.lastIndex >= i)
                      return {
                        word: u[0],
                        startColumn: r + 1 + u.index,
                        endColumn: r + 1 + t.lastIndex
                      };
                  return null;
                })(e, t, n, r);
          return (t.lastIndex = 0), o;
        });
    }),
    r(e[26], t([1, 0, 23, 8]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i;
      !(function(e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.Start = 1)] = "Start"),
          (e[(e.H = 2)] = "H"),
          (e[(e.HT = 3)] = "HT"),
          (e[(e.HTT = 4)] = "HTT"),
          (e[(e.HTTP = 5)] = "HTTP"),
          (e[(e.F = 6)] = "F"),
          (e[(e.FI = 7)] = "FI"),
          (e[(e.FIL = 8)] = "FIL"),
          (e[(e.BeforeColon = 9)] = "BeforeColon"),
          (e[(e.AfterColon = 10)] = "AfterColon"),
          (e[(e.AlmostThere = 11)] = "AlmostThere"),
          (e[(e.End = 12)] = "End"),
          (e[(e.Accept = 13)] = "Accept");
      })(i || (i = {}));
      var o,
        s = (function() {
          function e(e) {
            for (var t = 0, n = 0, i = 0, o = e.length; i < o; i++) {
              var s = e[i],
                u = s[0],
                a = s[1],
                l = s[2];
              a > t && (t = a), u > n && (n = u), l > n && (n = l);
            }
            t++, n++;
            for (
              var c = new r.Uint8Matrix(n, t, 0), i = 0, o = e.length;
              i < o;
              i++
            ) {
              var f = e[i],
                u = f[0],
                a = f[1],
                l = f[2];
              c.set(u, a, l);
            }
            (this._states = c), (this._maxCharCode = t);
          }
          return (
            (e.prototype.nextState = function(e, t) {
              return t < 0 || t >= this._maxCharCode
                ? 0
                : this._states.get(e, t);
            }),
            e
          );
        })(),
        u = null;
      !(function(e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.ForceTermination = 1)] = "ForceTermination"),
          (e[(e.CannotEndIn = 2)] = "CannotEndIn");
      })(o || (o = {}));
      var a = null,
        l = (function() {
          function e() {}
          return (
            (e._createLink = function(e, t, n, r, i) {
              var o = i - 1;
              do {
                var s = t.charCodeAt(o);
                if (2 !== e.get(s)) break;
                o--;
              } while (o > r);
              if (r > 0) {
                var u = t.charCodeAt(r - 1),
                  a = t.charCodeAt(o);
                ((40 === u && 41 === a) ||
                  (91 === u && 93 === a) ||
                  (123 === u && 125 === a)) &&
                  o--;
              }
              return {
                range: {
                  startLineNumber: n,
                  startColumn: r + 1,
                  endLineNumber: n,
                  endColumn: o + 2
                },
                url: t.substring(r, o + 1)
              };
            }),
            (e.computeLinks = function(t) {
              for (
                var r = (null === u &&
                    (u = new s([
                      [1, 104, 2],
                      [1, 72, 2],
                      [1, 102, 6],
                      [1, 70, 6],
                      [2, 116, 3],
                      [2, 84, 3],
                      [3, 116, 4],
                      [3, 84, 4],
                      [4, 112, 5],
                      [4, 80, 5],
                      [5, 115, 9],
                      [5, 83, 9],
                      [5, 58, 10],
                      [6, 105, 7],
                      [6, 73, 7],
                      [7, 108, 8],
                      [7, 76, 8],
                      [8, 101, 9],
                      [8, 69, 9],
                      [9, 58, 10],
                      [10, 47, 11],
                      [11, 47, 12]
                    ])),
                  u),
                  i = (function() {
                    if (null === a) {
                      for (
                        a = new n.CharacterClassifier(0), e = 0;
                        e <
                        " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…"
                          .length;
                        e++
                      )
                        a.set(
                          " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(
                            e
                          ),
                          1
                        );
                      for (var e = 0; e < ".,;".length; e++)
                        a.set(".,;".charCodeAt(e), 2);
                    }
                    return a;
                  })(),
                  o = [],
                  l = 1,
                  c = t.getLineCount();
                l <= c;
                l++
              ) {
                for (
                  var f = t.getLineContent(l),
                    h = f.length,
                    d = 0,
                    p = 0,
                    m = 0,
                    _ = 1,
                    g = !1,
                    v = !1,
                    y = !1;
                  d < h;

                ) {
                  var b = !1,
                    C = f.charCodeAt(d);
                  if (13 === _) {
                    E = void 0;
                    switch (C) {
                      case 40:
                        (g = !0), (E = 0);
                        break;
                      case 41:
                        E = g ? 0 : 1;
                        break;
                      case 91:
                        (v = !0), (E = 0);
                        break;
                      case 93:
                        E = v ? 0 : 1;
                        break;
                      case 123:
                        (y = !0), (E = 0);
                        break;
                      case 125:
                        E = y ? 0 : 1;
                        break;
                      case 39:
                        E = 34 === m || 96 === m ? 0 : 1;
                        break;
                      case 34:
                        E = 39 === m || 96 === m ? 0 : 1;
                        break;
                      case 96:
                        E = 39 === m || 34 === m ? 0 : 1;
                        break;
                      default:
                        E = i.get(C);
                    }
                    1 === E && (o.push(e._createLink(i, f, l, p, d)), (b = !0));
                  } else if (12 === _) {
                    var E;
                    1 === (E = i.get(C)) ? (b = !0) : (_ = 13);
                  } else 0 === (_ = r.nextState(_, C)) && (b = !0);
                  b &&
                    ((_ = 1),
                    (g = !1),
                    (v = !1),
                    (y = !1),
                    (p = d + 1),
                    (m = C)),
                    d++;
                }
                13 === _ && o.push(e._createLink(i, f, l, p, h));
              }
              return o;
            }),
            e
          );
        })();
      t.computeLinks = function(e) {
        return e &&
          "function" == typeof e.getLineCount &&
          "function" == typeof e.getLineContent
          ? l.computeLinks(e)
          : [];
      };
    }),
    r(e[27], t([1, 0]), function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function() {
        function e() {
          this._defaultValueSet = [
            ["true", "false"],
            ["True", "False"],
            [
              "Private",
              "Public",
              "Friend",
              "ReadOnly",
              "Partial",
              "Protected",
              "WriteOnly"
            ],
            ["public", "protected", "private"]
          ];
        }
        return (
          (e.prototype.navigateValueSet = function(e, t, n, r, i) {
            if (e && t) {
              if ((o = this.doNavigateValueSet(t, i)))
                return { range: e, value: o };
            }
            if (n && r) {
              var o = this.doNavigateValueSet(r, i);
              if (o) return { range: n, value: o };
            }
            return null;
          }),
          (e.prototype.doNavigateValueSet = function(e, t) {
            var n = this.numberReplace(e, t);
            return null !== n ? n : this.textReplace(e, t);
          }),
          (e.prototype.numberReplace = function(e, t) {
            var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)),
              r = Number(e),
              i = parseFloat(e);
            return isNaN(r) || isNaN(i) || r !== i
              ? null
              : 0 !== r || t
                ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
                : null;
          }),
          (e.prototype.textReplace = function(e, t) {
            return this.valueSetsReplace(this._defaultValueSet, e, t);
          }),
          (e.prototype.valueSetsReplace = function(e, t, n) {
            for (var r = null, i = 0, o = e.length; null === r && i < o; i++)
              r = this.valueSetReplace(e[i], t, n);
            return r;
          }),
          (e.prototype.valueSetReplace = function(e, t, n) {
            var r = e.indexOf(t);
            return r >= 0
              ? ((r += n ? 1 : -1) < 0 ? (r = e.length - 1) : (r %= e.length),
                e[r])
              : null;
          }),
          (e.INSTANCE = new e()),
          e
        );
      })();
      t.BasicInplaceReplace = n;
    }),
    r(e[28], t([1, 0, 9, 19, 2, 7, 20, 3, 11, 21, 6]), function(
      e,
      t,
      n,
      r,
      i,
      o,
      s,
      u,
      a,
      l,
      c
    ) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var f;
      !(function(e) {
        (e[(e.Ignore = 0)] = "Ignore"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })((f = t.Severity || (t.Severity = {})));
      var h;
      !(function(e) {
        (e[(e.Hint = 1)] = "Hint"),
          (e[(e.Info = 2)] = "Info"),
          (e[(e.Warning = 4)] = "Warning"),
          (e[(e.Error = 8)] = "Error");
      })((h = t.MarkerSeverity || (t.MarkerSeverity = {})));
      var d = (function() {
        function e() {}
        return (
          (e.chord = function(e, t) {
            return r.KeyChord(e, t);
          }),
          (e.CtrlCmd = 2048),
          (e.Shift = 1024),
          (e.Alt = 512),
          (e.WinCtrl = 256),
          e
        );
      })();
      t.KeyMod = d;
      var p;
      !(function(e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Backspace = 1)] = "Backspace"),
          (e[(e.Tab = 2)] = "Tab"),
          (e[(e.Enter = 3)] = "Enter"),
          (e[(e.Shift = 4)] = "Shift"),
          (e[(e.Ctrl = 5)] = "Ctrl"),
          (e[(e.Alt = 6)] = "Alt"),
          (e[(e.PauseBreak = 7)] = "PauseBreak"),
          (e[(e.CapsLock = 8)] = "CapsLock"),
          (e[(e.Escape = 9)] = "Escape"),
          (e[(e.Space = 10)] = "Space"),
          (e[(e.PageUp = 11)] = "PageUp"),
          (e[(e.PageDown = 12)] = "PageDown"),
          (e[(e.End = 13)] = "End"),
          (e[(e.Home = 14)] = "Home"),
          (e[(e.LeftArrow = 15)] = "LeftArrow"),
          (e[(e.UpArrow = 16)] = "UpArrow"),
          (e[(e.RightArrow = 17)] = "RightArrow"),
          (e[(e.DownArrow = 18)] = "DownArrow"),
          (e[(e.Insert = 19)] = "Insert"),
          (e[(e.Delete = 20)] = "Delete"),
          (e[(e.KEY_0 = 21)] = "KEY_0"),
          (e[(e.KEY_1 = 22)] = "KEY_1"),
          (e[(e.KEY_2 = 23)] = "KEY_2"),
          (e[(e.KEY_3 = 24)] = "KEY_3"),
          (e[(e.KEY_4 = 25)] = "KEY_4"),
          (e[(e.KEY_5 = 26)] = "KEY_5"),
          (e[(e.KEY_6 = 27)] = "KEY_6"),
          (e[(e.KEY_7 = 28)] = "KEY_7"),
          (e[(e.KEY_8 = 29)] = "KEY_8"),
          (e[(e.KEY_9 = 30)] = "KEY_9"),
          (e[(e.KEY_A = 31)] = "KEY_A"),
          (e[(e.KEY_B = 32)] = "KEY_B"),
          (e[(e.KEY_C = 33)] = "KEY_C"),
          (e[(e.KEY_D = 34)] = "KEY_D"),
          (e[(e.KEY_E = 35)] = "KEY_E"),
          (e[(e.KEY_F = 36)] = "KEY_F"),
          (e[(e.KEY_G = 37)] = "KEY_G"),
          (e[(e.KEY_H = 38)] = "KEY_H"),
          (e[(e.KEY_I = 39)] = "KEY_I"),
          (e[(e.KEY_J = 40)] = "KEY_J"),
          (e[(e.KEY_K = 41)] = "KEY_K"),
          (e[(e.KEY_L = 42)] = "KEY_L"),
          (e[(e.KEY_M = 43)] = "KEY_M"),
          (e[(e.KEY_N = 44)] = "KEY_N"),
          (e[(e.KEY_O = 45)] = "KEY_O"),
          (e[(e.KEY_P = 46)] = "KEY_P"),
          (e[(e.KEY_Q = 47)] = "KEY_Q"),
          (e[(e.KEY_R = 48)] = "KEY_R"),
          (e[(e.KEY_S = 49)] = "KEY_S"),
          (e[(e.KEY_T = 50)] = "KEY_T"),
          (e[(e.KEY_U = 51)] = "KEY_U"),
          (e[(e.KEY_V = 52)] = "KEY_V"),
          (e[(e.KEY_W = 53)] = "KEY_W"),
          (e[(e.KEY_X = 54)] = "KEY_X"),
          (e[(e.KEY_Y = 55)] = "KEY_Y"),
          (e[(e.KEY_Z = 56)] = "KEY_Z"),
          (e[(e.Meta = 57)] = "Meta"),
          (e[(e.ContextMenu = 58)] = "ContextMenu"),
          (e[(e.F1 = 59)] = "F1"),
          (e[(e.F2 = 60)] = "F2"),
          (e[(e.F3 = 61)] = "F3"),
          (e[(e.F4 = 62)] = "F4"),
          (e[(e.F5 = 63)] = "F5"),
          (e[(e.F6 = 64)] = "F6"),
          (e[(e.F7 = 65)] = "F7"),
          (e[(e.F8 = 66)] = "F8"),
          (e[(e.F9 = 67)] = "F9"),
          (e[(e.F10 = 68)] = "F10"),
          (e[(e.F11 = 69)] = "F11"),
          (e[(e.F12 = 70)] = "F12"),
          (e[(e.F13 = 71)] = "F13"),
          (e[(e.F14 = 72)] = "F14"),
          (e[(e.F15 = 73)] = "F15"),
          (e[(e.F16 = 74)] = "F16"),
          (e[(e.F17 = 75)] = "F17"),
          (e[(e.F18 = 76)] = "F18"),
          (e[(e.F19 = 77)] = "F19"),
          (e[(e.NumLock = 78)] = "NumLock"),
          (e[(e.ScrollLock = 79)] = "ScrollLock"),
          (e[(e.US_SEMICOLON = 80)] = "US_SEMICOLON"),
          (e[(e.US_EQUAL = 81)] = "US_EQUAL"),
          (e[(e.US_COMMA = 82)] = "US_COMMA"),
          (e[(e.US_MINUS = 83)] = "US_MINUS"),
          (e[(e.US_DOT = 84)] = "US_DOT"),
          (e[(e.US_SLASH = 85)] = "US_SLASH"),
          (e[(e.US_BACKTICK = 86)] = "US_BACKTICK"),
          (e[(e.US_OPEN_SQUARE_BRACKET = 87)] = "US_OPEN_SQUARE_BRACKET"),
          (e[(e.US_BACKSLASH = 88)] = "US_BACKSLASH"),
          (e[(e.US_CLOSE_SQUARE_BRACKET = 89)] = "US_CLOSE_SQUARE_BRACKET"),
          (e[(e.US_QUOTE = 90)] = "US_QUOTE"),
          (e[(e.OEM_8 = 91)] = "OEM_8"),
          (e[(e.OEM_102 = 92)] = "OEM_102"),
          (e[(e.NUMPAD_0 = 93)] = "NUMPAD_0"),
          (e[(e.NUMPAD_1 = 94)] = "NUMPAD_1"),
          (e[(e.NUMPAD_2 = 95)] = "NUMPAD_2"),
          (e[(e.NUMPAD_3 = 96)] = "NUMPAD_3"),
          (e[(e.NUMPAD_4 = 97)] = "NUMPAD_4"),
          (e[(e.NUMPAD_5 = 98)] = "NUMPAD_5"),
          (e[(e.NUMPAD_6 = 99)] = "NUMPAD_6"),
          (e[(e.NUMPAD_7 = 100)] = "NUMPAD_7"),
          (e[(e.NUMPAD_8 = 101)] = "NUMPAD_8"),
          (e[(e.NUMPAD_9 = 102)] = "NUMPAD_9"),
          (e[(e.NUMPAD_MULTIPLY = 103)] = "NUMPAD_MULTIPLY"),
          (e[(e.NUMPAD_ADD = 104)] = "NUMPAD_ADD"),
          (e[(e.NUMPAD_SEPARATOR = 105)] = "NUMPAD_SEPARATOR"),
          (e[(e.NUMPAD_SUBTRACT = 106)] = "NUMPAD_SUBTRACT"),
          (e[(e.NUMPAD_DECIMAL = 107)] = "NUMPAD_DECIMAL"),
          (e[(e.NUMPAD_DIVIDE = 108)] = "NUMPAD_DIVIDE"),
          (e[(e.KEY_IN_COMPOSITION = 109)] = "KEY_IN_COMPOSITION"),
          (e[(e.ABNT_C1 = 110)] = "ABNT_C1"),
          (e[(e.ABNT_C2 = 111)] = "ABNT_C2"),
          (e[(e.MAX_VALUE = 112)] = "MAX_VALUE");
      })((p = t.KeyCode || (t.KeyCode = {}))),
        (t.createMonacoBaseAPI = function() {
          return {
            editor: void 0,
            languages: void 0,
            CancellationTokenSource: a.CancellationTokenSource,
            Emitter: n.Emitter,
            KeyCode: p,
            KeyMod: d,
            Position: i.Position,
            Range: o.Range,
            Selection: s.Selection,
            SelectionDirection: s.SelectionDirection,
            Severity: f,
            MarkerSeverity: h,
            Promise: u.TPromise,
            Uri: c.default,
            Token: l.Token
          };
        });
    }),
    r(e[29], t([1, 0, 8]), function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function() {
        return function(e, t) {
          (this.index = e), (this.remainder = t);
        };
      })();
      t.PrefixSumIndexOfResult = r;
      var i = (function() {
        function e(e) {
          (this.values = e),
            (this.prefixSum = new Uint32Array(e.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        return (
          (e.prototype.getCount = function() {
            return this.values.length;
          }),
          (e.prototype.insertValues = function(e, t) {
            e = n.toUint32(e);
            var r = this.values,
              i = this.prefixSum,
              o = t.length;
            return (
              0 !== o &&
              ((this.values = new Uint32Array(r.length + o)),
              this.values.set(r.subarray(0, e), 0),
              this.values.set(r.subarray(e), e + o),
              this.values.set(t, e),
              e - 1 < this.prefixSumValidIndex[0] &&
                (this.prefixSumValidIndex[0] = e - 1),
              (this.prefixSum = new Uint32Array(this.values.length)),
              this.prefixSumValidIndex[0] >= 0 &&
                this.prefixSum.set(
                  i.subarray(0, this.prefixSumValidIndex[0] + 1)
                ),
              !0)
            );
          }),
          (e.prototype.changeValue = function(e, t) {
            return (
              (e = n.toUint32(e)),
              (t = n.toUint32(t)),
              this.values[e] !== t &&
                ((this.values[e] = t),
                e - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = e - 1),
                !0)
            );
          }),
          (e.prototype.removeValues = function(e, t) {
            (e = n.toUint32(e)), (t = n.toUint32(t));
            var r = this.values,
              i = this.prefixSum;
            if (e >= r.length) return !1;
            var o = r.length - e;
            return (
              t >= o && (t = o),
              0 !== t &&
                ((this.values = new Uint32Array(r.length - t)),
                this.values.set(r.subarray(0, e), 0),
                this.values.set(r.subarray(e + t), e),
                (this.prefixSum = new Uint32Array(this.values.length)),
                e - 1 < this.prefixSumValidIndex[0] &&
                  (this.prefixSumValidIndex[0] = e - 1),
                this.prefixSumValidIndex[0] >= 0 &&
                  this.prefixSum.set(
                    i.subarray(0, this.prefixSumValidIndex[0] + 1)
                  ),
                !0)
            );
          }),
          (e.prototype.getTotalValue = function() {
            return 0 === this.values.length
              ? 0
              : this._getAccumulatedValue(this.values.length - 1);
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return e < 0
              ? 0
              : ((e = n.toUint32(e)), this._getAccumulatedValue(e));
          }),
          (e.prototype._getAccumulatedValue = function(e) {
            if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
            var t = this.prefixSumValidIndex[0] + 1;
            0 === t && ((this.prefixSum[0] = this.values[0]), t++),
              e >= this.values.length && (e = this.values.length - 1);
            for (var n = t; n <= e; n++)
              this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
            return (
              (this.prefixSumValidIndex[0] = Math.max(
                this.prefixSumValidIndex[0],
                e
              )),
              this.prefixSum[e]
            );
          }),
          (e.prototype.getIndexOf = function(e) {
            (e = Math.floor(e)), this.getTotalValue();
            for (var t, n, i, o = 0, s = this.values.length - 1; o <= s; )
              if (
                ((t = (o + (s - o) / 2) | 0),
                (n = this.prefixSum[t]),
                (i = n - this.values[t]),
                e < i)
              )
                s = t - 1;
              else {
                if (!(e >= n)) break;
                o = t + 1;
              }
            return new r(t, e - i);
          }),
          e
        );
      })();
      t.PrefixSumComputer = i;
      var o = (function() {
        function e(e) {
          (this._cacheAccumulatedValueStart = 0),
            (this._cache = null),
            (this._actual = new i(e)),
            this._bustCache();
        }
        return (
          (e.prototype._bustCache = function() {
            (this._cacheAccumulatedValueStart = 0), (this._cache = null);
          }),
          (e.prototype.insertValues = function(e, t) {
            this._actual.insertValues(e, t) && this._bustCache();
          }),
          (e.prototype.changeValue = function(e, t) {
            this._actual.changeValue(e, t) && this._bustCache();
          }),
          (e.prototype.removeValues = function(e, t) {
            this._actual.removeValues(e, t) && this._bustCache();
          }),
          (e.prototype.getTotalValue = function() {
            return this._actual.getTotalValue();
          }),
          (e.prototype.getAccumulatedValue = function(e) {
            return this._actual.getAccumulatedValue(e);
          }),
          (e.prototype.getIndexOf = function(e) {
            if (((e = Math.floor(e)), null !== this._cache)) {
              var t = e - this._cacheAccumulatedValueStart;
              if (t >= 0 && t < this._cache.length) return this._cache[t];
            }
            return this._actual.getIndexOf(e);
          }),
          (e.prototype.warmUpCache = function(e, t) {
            for (var n = [], r = e; r <= t; r++) n[r - e] = this.getIndexOf(r);
            (this._cache = n), (this._cacheAccumulatedValueStart = e);
          }),
          e
        );
      })();
      t.PrefixSumComputerWithCache = o;
    }),
    r(e[17], t([1, 0, 29, 2]), function(e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function() {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._lines = t),
            (this._eol = n),
            (this._versionId = r);
        }
        return (
          (e.prototype.dispose = function() {
            this._lines.length = 0;
          }),
          Object.defineProperty(e.prototype, "version", {
            get: function() {
              return this._versionId;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.getText = function() {
            return this._lines.join(this._eol);
          }),
          (e.prototype.onEvents = function(e) {
            e.eol &&
              e.eol !== this._eol &&
              ((this._eol = e.eol), (this._lineStarts = null));
            for (var t = e.changes, n = 0, i = t.length; n < i; n++) {
              var o = t[n];
              this._acceptDeleteRange(o.range),
                this._acceptInsertText(
                  new r.Position(o.range.startLineNumber, o.range.startColumn),
                  o.text
                );
            }
            this._versionId = e.versionId;
          }),
          (e.prototype._ensureLineStarts = function() {
            if (!this._lineStarts) {
              for (
                var e = this._eol.length,
                  t = this._lines.length,
                  r = new Uint32Array(t),
                  i = 0;
                i < t;
                i++
              )
                r[i] = this._lines[i].length + e;
              this._lineStarts = new n.PrefixSumComputer(r);
            }
          }),
          (e.prototype._setLineText = function(e, t) {
            (this._lines[e] = t),
              this._lineStarts &&
                this._lineStarts.changeValue(
                  e,
                  this._lines[e].length + this._eol.length
                );
          }),
          (e.prototype._acceptDeleteRange = function(e) {
            if (e.startLineNumber !== e.endLineNumber)
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1
                ) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)
              ),
                this._lines.splice(
                  e.startLineNumber,
                  e.endLineNumber - e.startLineNumber
                ),
                this._lineStarts &&
                  this._lineStarts.removeValues(
                    e.startLineNumber,
                    e.endLineNumber - e.startLineNumber
                  );
            else {
              if (e.startColumn === e.endColumn) return;
              this._setLineText(
                e.startLineNumber - 1,
                this._lines[e.startLineNumber - 1].substring(
                  0,
                  e.startColumn - 1
                ) +
                  this._lines[e.startLineNumber - 1].substring(e.endColumn - 1)
              );
            }
          }),
          (e.prototype._acceptInsertText = function(e, t) {
            if (0 !== t.length) {
              var n = t.split(/\r\n|\r|\n/);
              if (1 !== n.length) {
                (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                  e.column - 1
                )),
                  this._setLineText(
                    e.lineNumber - 1,
                    this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                      n[0]
                  );
                for (
                  var r = new Uint32Array(n.length - 1), i = 1;
                  i < n.length;
                  i++
                )
                  this._lines.splice(e.lineNumber + i - 1, 0, n[i]),
                    (r[i - 1] = n[i].length + this._eol.length);
                this._lineStarts &&
                  this._lineStarts.insertValues(e.lineNumber, r);
              } else
                this._setLineText(
                  e.lineNumber - 1,
                  this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                    n[0] +
                    this._lines[e.lineNumber - 1].substring(e.column - 1)
                );
            }
          }),
          e
        );
      })();
      t.MirrorTextModel = i;
    }),
    r(e[31], t([1, 0, 6, 3, 7, 24, 13, 2, 17, 26, 27, 25, 28, 5]), function(
      e,
      t,
      n,
      r,
      i,
      s,
      u,
      a,
      l,
      c,
      f,
      h,
      d,
      p
    ) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var m = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, "uri", {
              get: function() {
                return this._uri;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "version", {
              get: function() {
                return this._versionId;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, "eol", {
              get: function() {
                return this._eol;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.getValue = function() {
              return this.getText();
            }),
            (t.prototype.getLinesContent = function() {
              return this._lines.slice(0);
            }),
            (t.prototype.getLineCount = function() {
              return this._lines.length;
            }),
            (t.prototype.getLineContent = function(e) {
              return this._lines[e - 1];
            }),
            (t.prototype.getWordAtPosition = function(e, t) {
              var n = h.getWordAtText(
                e.column,
                h.ensureValidWordDefinition(t),
                this._lines[e.lineNumber - 1],
                0
              );
              return n
                ? new i.Range(
                    e.lineNumber,
                    n.startColumn,
                    e.lineNumber,
                    n.endColumn
                  )
                : null;
            }),
            (t.prototype.getWordUntilPosition = function(e, t) {
              var n = this.getWordAtPosition(e, t);
              return n
                ? {
                    word: this._lines[e.lineNumber - 1].substring(
                      n.startColumn - 1,
                      e.column - 1
                    ),
                    startColumn: n.startColumn,
                    endColumn: e.column
                  }
                : { word: "", startColumn: e.column, endColumn: e.column };
            }),
            (t.prototype.createWordIterator = function(e) {
              var t,
                n = this,
                r = {
                  done: !1,
                  value: ""
                },
                i = 0,
                o = 0,
                s = [],
                u = function() {
                  if (o < s.length)
                    (r.done = !1),
                      (r.value = t.substring(s[o].start, s[o].end)),
                      (o += 1);
                  else {
                    if (!(i >= n._lines.length))
                      return (
                        (t = n._lines[i]),
                        (s = n._wordenize(t, e)),
                        (o = 0),
                        (i += 1),
                        u()
                      );
                    (r.done = !0), (r.value = void 0);
                  }
                  return r;
                };
              return { next: u };
            }),
            (t.prototype._wordenize = function(e, t) {
              var n,
                r = [];
              for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length; )
                r.push({ start: n.index, end: n.index + n[0].length });
              return r;
            }),
            (t.prototype.getValueInRange = function(e) {
              if (
                (e = this._validateRange(e)).startLineNumber === e.endLineNumber
              )
                return this._lines[e.startLineNumber - 1].substring(
                  e.startColumn - 1,
                  e.endColumn - 1
                );
              var t = this._eol,
                n = e.startLineNumber - 1,
                r = e.endLineNumber - 1,
                i = [];
              i.push(this._lines[n].substring(e.startColumn - 1));
              for (var o = n + 1; o < r; o++) i.push(this._lines[o]);
              return (
                i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
              );
            }),
            (t.prototype.offsetAt = function(e) {
              return (
                (e = this._validatePosition(e)),
                this._ensureLineStarts(),
                this._lineStarts.getAccumulatedValue(e.lineNumber - 2) +
                  (e.column - 1)
              );
            }),
            (t.prototype.positionAt = function(e) {
              (e = Math.floor(e)),
                (e = Math.max(0, e)),
                this._ensureLineStarts();
              var t = this._lineStarts.getIndexOf(e),
                n = this._lines[t.index].length;
              return {
                lineNumber: 1 + t.index,
                column: 1 + Math.min(t.remainder, n)
              };
            }),
            (t.prototype._validateRange = function(e) {
              var t = this._validatePosition({
                  lineNumber: e.startLineNumber,
                  column: e.startColumn
                }),
                n = this._validatePosition({
                  lineNumber: e.endLineNumber,
                  column: e.endColumn
                });
              return t.lineNumber !== e.startLineNumber ||
                t.column !== e.startColumn ||
                n.lineNumber !== e.endLineNumber ||
                n.column !== e.endColumn
                ? {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: n.lineNumber,
                    endColumn: n.column
                  }
                : e;
            }),
            (t.prototype._validatePosition = function(e) {
              if (!a.Position.isIPosition(e)) throw new Error("bad position");
              var t = e.lineNumber,
                n = e.column,
                r = !1;
              if (t < 1) (t = 1), (n = 1), (r = !0);
              else if (t > this._lines.length)
                (t = this._lines.length),
                  (n = this._lines[t - 1].length + 1),
                  (r = !0);
              else {
                var i = this._lines[t - 1].length + 1;
                n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
              }
              return r ? { lineNumber: t, column: n } : e;
            }),
            t
          );
        })(l.MirrorTextModel),
        _ = (function() {
          function t(e) {
            (this._foreignModuleFactory = e), (this._foreignModule = null);
          }
          return (
            (t.prototype.computeDiff = function(e, t, n) {
              var i = this._getModel(e),
                o = this._getModel(t);
              if (!i || !o) return null;
              var u = i.getLinesContent(),
                a = o.getLinesContent(),
                l = new s.DiffComputer(u, a, {
                  shouldPostProcessCharChanges: !0,
                  shouldIgnoreTrimWhitespace: n,
                  shouldMakePrettyDiff: !0
                });
              return r.TPromise.as(l.computeDiff());
            }),
            (t.prototype.computeDirtyDiff = function(e, t, n) {
              var i = this._getModel(e),
                o = this._getModel(t);
              if (!i || !o) return null;
              var u = i.getLinesContent(),
                a = o.getLinesContent(),
                l = new s.DiffComputer(u, a, {
                  shouldPostProcessCharChanges: !1,
                  shouldIgnoreTrimWhitespace: n,
                  shouldMakePrettyDiff: !0
                });
              return r.TPromise.as(l.computeDiff());
            }),
            (t.prototype.computeMoreMinimalEdits = function(e, n) {
              var o = this._getModel(e);
              if (!o) return r.TPromise.as(n);
              for (var s, a = [], l = 0, c = n; l < c.length; l++) {
                var f = c[l],
                  h = f.range,
                  d = f.text,
                  p = f.eol;
                if (("number" == typeof p && (s = p), h)) {
                  var m = o.getValueInRange(h);
                  if (((d = d.replace(/\r\n|\n|\r/g, o.eol)), m !== d))
                    if (Math.max(d.length, m.length) > t._diffLimit)
                      a.push({
                        range: h,
                        text: d
                      });
                    else
                      for (
                        var _ = u.stringDiff(m, d, !1),
                          g = o.offsetAt(i.Range.lift(h).getStartPosition()),
                          v = 0,
                          y = _;
                        v < y.length;
                        v++
                      ) {
                        var b = y[v],
                          C = o.positionAt(g + b.originalStart),
                          E = o.positionAt(
                            g + b.originalStart + b.originalLength
                          ),
                          S = {
                            text: d.substr(b.modifiedStart, b.modifiedLength),
                            range: {
                              startLineNumber: C.lineNumber,
                              startColumn: C.column,
                              endLineNumber: E.lineNumber,
                              endColumn: E.column
                            }
                          };
                        o.getValueInRange(S.range) !== S.text && a.push(S);
                      }
                }
              }
              return (
                "number" == typeof s &&
                  a.push({ eol: s, text: void 0, range: void 0 }),
                r.TPromise.as(a)
              );
            }),
            (t.prototype.computeLinks = function(e) {
              var t = this._getModel(e);
              return t ? r.TPromise.as(c.computeLinks(t)) : null;
            }),
            (t.prototype.textualSuggest = function(e, n, i, o) {
              var s = this._getModel(e);
              if (s) {
                var u = [],
                  a = new RegExp(i, o),
                  l = s.getWordUntilPosition(n, a).word,
                  c = Object.create(null);
                c[l] = !0;
                for (
                  var f = s.createWordIterator(a), h = f.next();
                  !h.done && u.length <= t._suggestionsLimit;
                  h = f.next()
                ) {
                  var d = h.value;
                  c[d] ||
                    ((c[d] = !0),
                    isNaN(Number(d)) &&
                      u.push({
                        type: "text",
                        label: d,
                        insertText: d,
                        noAutoAccept: !0,
                        overwriteBefore: l.length
                      }));
                }
                return r.TPromise.as({
                  suggestions: u
                });
              }
            }),
            (t.prototype.navigateValueSet = function(e, t, n, i, o) {
              var s = this._getModel(e);
              if (!s) return null;
              var u = new RegExp(i, o);
              t.startColumn === t.endColumn &&
                (t = {
                  startLineNumber: t.startLineNumber,
                  startColumn: t.startColumn,
                  endLineNumber: t.endLineNumber,
                  endColumn: t.endColumn + 1
                });
              var a = s.getValueInRange(t),
                l = s.getWordAtPosition(
                  { lineNumber: t.startLineNumber, column: t.startColumn },
                  u
                ),
                c = null;
              null !== l && (c = s.getValueInRange(l));
              var h = f.BasicInplaceReplace.INSTANCE.navigateValueSet(
                t,
                a,
                l,
                c,
                n
              );
              return r.TPromise.as(h);
            }),
            (t.prototype.loadForeignModule = function(t, n) {
              var i = this,
                o = {
                  getMirrorModels: function() {
                    return i._getModels();
                  }
                };
              if (this._foreignModuleFactory) {
                this._foreignModule = this._foreignModuleFactory(o, n);
                var s = [];
                for (var u in this._foreignModule)
                  "function" == typeof this._foreignModule[u] && s.push(u);
                return r.TPromise.as(s);
              }
              return new r.TPromise(function(r, s) {
                e(
                  [t],
                  function(e) {
                    i._foreignModule = e.create(o, n);
                    var t = [];
                    for (var s in i._foreignModule)
                      "function" == typeof i._foreignModule[s] && t.push(s);
                    r(t);
                  },
                  s
                );
              });
            }),
            (t.prototype.fmr = function(e, t) {
              if (
                !this._foreignModule ||
                "function" != typeof this._foreignModule[e]
              )
                return r.TPromise.wrapError(
                  new Error("Missing requestHandler or method: " + e)
                );
              try {
                return r.TPromise.as(
                  this._foreignModule[e].apply(this._foreignModule, t)
                );
              } catch (e) {
                return r.TPromise.wrapError(e);
              }
            }),
            (t._diffLimit = 1e4),
            (t._suggestionsLimit = 1e4),
            t
          );
        })();
      t.BaseEditorSimpleWorker = _;
      var g = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n._models = Object.create(null)), n;
        }
        return (
          o(t, e),
          (t.prototype.dispose = function() {
            this._models = Object.create(null);
          }),
          (t.prototype._getModel = function(e) {
            return this._models[e];
          }),
          (t.prototype._getModels = function() {
            var e = this,
              t = [];
            return (
              Object.keys(this._models).forEach(function(n) {
                return t.push(e._models[n]);
              }),
              t
            );
          }),
          (t.prototype.acceptNewModel = function(e) {
            this._models[e.url] = new m(
              n.default.parse(e.url),
              e.lines,
              e.EOL,
              e.versionId
            );
          }),
          (t.prototype.acceptModelChanged = function(e, t) {
            if (this._models[e]) {
              this._models[e].onEvents(t);
            }
          }),
          (t.prototype.acceptRemovedModel = function(e) {
            this._models[e] && delete this._models[e];
          }),
          t
        );
      })(_);
      (t.EditorSimpleWorkerImpl = g),
        (t.create = function() {
          return new g(null);
        }),
        "function" == typeof importScripts &&
          (p.globals.monaco = d.createMonacoBaseAPI());
    }),
    (function() {
      "use strict";
      var e = self.MonacoEnvironment,
        t = e && e.baseUrl ? e.baseUrl : "../../../";
      ("function" == typeof self.define && self.define.amd) ||
        importScripts(t + "vs/loader.js"),
        require.config({ baseUrl: t, catchError: !0 });
      var n = !0,
        r = [];
      self.onmessage = function(e) {
        n
          ? ((n = !1),
            (function(e) {
              require([e], function(e) {
                setTimeout(function() {
                  var t = e.create(function(e) {
                    self.postMessage(e);
                  }, null);
                  for (
                    self.onmessage = function(e) {
                      return t.onmessage(e.data);
                    };
                    r.length > 0;

                  )
                    self.onmessage(r.shift());
                }, 0);
              });
            })(e.data))
          : r.push(e);
      };
    })();
}.call(this));
//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map
