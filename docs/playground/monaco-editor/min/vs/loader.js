/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.13.2(53a4043676e6259fb734c90fad14bf16f7425640)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
"use strict";
var _amdLoaderGlobal = this;
!(function(e) {
  e.global = _amdLoaderGlobal;
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
})(AMDLoader || (AMDLoader = {}));
!(function(e) {
  var t = (function() {
    return function(e, t, r) {
      (this.type = e), (this.detail = t), (this.timestamp = r);
    };
  })();
  e.LoaderEvent = t;
  var r = (function() {
    function r(e) {
      this._events = [new t(1, "", e)];
    }
    return (
      (r.prototype.record = function(r, n) {
        this._events.push(
          new t(r, n, e.Utilities.getHighPerformanceTimestamp())
        );
      }),
      (r.prototype.getEvents = function() {
        return this._events;
      }),
      r
    );
  })();
  e.LoaderEventRecorder = r;
  var n = (function() {
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
  e.NullLoaderEventRecorder = n;
})(AMDLoader || (AMDLoader = {}));
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
          var r = void 0;
          for (r in e) e.hasOwnProperty(r) && t(r, e[r]);
        }
      }),
      (t.isEmpty = function(e) {
        var r = !0;
        return (
          t.forEachProperty(e, function() {
            r = !1;
          }),
          r
        );
      }),
      (t.recursiveClone = function(e) {
        if (!e || "object" != typeof e) return e;
        var r = Array.isArray(e) ? [] : {};
        return (
          t.forEachProperty(e, function(e, n) {
            r[e] = n && "object" == typeof n ? t.recursiveClone(n) : n;
          }),
          r
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
})(AMDLoader || (AMDLoader = {}));
!(function(e) {
  var t = (function() {
    function t() {}
    return (
      (t.validateConfigurationOptions = function(t) {
        function r(e) {
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
          "function" != typeof t.onError && (t.onError = r),
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
      (t.mergeConfigurationOptions = function(r, n) {
        void 0 === r && (r = null), void 0 === n && (n = null);
        var o = e.Utilities.recursiveClone(n || {});
        return (
          e.Utilities.forEachProperty(r, function(t, r) {
            "ignoreDuplicateModules" === t &&
            void 0 !== o.ignoreDuplicateModules
              ? (o.ignoreDuplicateModules = o.ignoreDuplicateModules.concat(r))
              : "paths" === t && void 0 !== o.paths
                ? e.Utilities.forEachProperty(r, function(e, t) {
                    return (o.paths[e] = t);
                  })
                : "config" === t && void 0 !== o.config
                  ? e.Utilities.forEachProperty(r, function(e, t) {
                      return (o.config[e] = t);
                    })
                  : (o[t] = e.Utilities.recursiveClone(r));
          }),
          t.validateConfigurationOptions(o)
        );
      }),
      t
    );
  })();
  e.ConfigurationOptionsUtil = t;
  var r = (function() {
    function r(e, r) {
      if (
        ((this._env = e),
        (this.options = t.mergeConfigurationOptions(r)),
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
          var n = this.options.nodeRequire.main.filename,
            o = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
          this.options.baseUrl = n.substring(0, o + 1);
        }
        if (this.options.nodeMain && this._env.isNode) {
          var n = this.options.nodeMain,
            o = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
          this.options.baseUrl = n.substring(0, o + 1);
        }
      }
    }
    return (
      (r.prototype._createIgnoreDuplicateModulesMap = function() {
        this.ignoreDuplicateModulesMap = {};
        for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++)
          this.ignoreDuplicateModulesMap[
            this.options.ignoreDuplicateModules[e]
          ] = !0;
      }),
      (r.prototype._createNodeModulesMap = function() {
        this.nodeModulesMap = Object.create(null);
        for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
          var r = t[e];
          this.nodeModulesMap[r] = !0;
        }
      }),
      (r.prototype._createSortedPathsRules = function() {
        var t = this;
        (this.sortedPathsRules = []),
          e.Utilities.forEachProperty(this.options.paths, function(e, r) {
            Array.isArray(r)
              ? t.sortedPathsRules.push({ from: e, to: r })
              : t.sortedPathsRules.push({ from: e, to: [r] });
          }),
          this.sortedPathsRules.sort(function(e, t) {
            return t.from.length - e.from.length;
          });
      }),
      (r.prototype.cloneAndMerge = function(e) {
        return new r(this._env, t.mergeConfigurationOptions(e, this.options));
      }),
      (r.prototype.getOptionsLiteral = function() {
        return this.options;
      }),
      (r.prototype._applyPaths = function(t) {
        for (var r, n = 0, o = this.sortedPathsRules.length; n < o; n++)
          if (
            ((r = this.sortedPathsRules[n]), e.Utilities.startsWith(t, r.from))
          ) {
            for (var i = [], s = 0, d = r.to.length; s < d; s++)
              i.push(r.to[s] + t.substr(r.from.length));
            return i;
          }
        return [t];
      }),
      (r.prototype._addUrlArgsToUrl = function(t) {
        return e.Utilities.containsQueryString(t)
          ? t + "&" + this.options.urlArgs
          : t + "?" + this.options.urlArgs;
      }),
      (r.prototype._addUrlArgsIfNecessaryToUrl = function(e) {
        return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e;
      }),
      (r.prototype._addUrlArgsIfNecessaryToUrls = function(e) {
        if (this.options.urlArgs)
          for (var t = 0, r = e.length; t < r; t++)
            e[t] = this._addUrlArgsToUrl(e[t]);
        return e;
      }),
      (r.prototype.moduleIdToPaths = function(t) {
        if (!0 === this.nodeModulesMap[t])
          return this.isBuild() ? ["empty:"] : ["node|" + t];
        var r,
          n = t;
        if (e.Utilities.endsWith(n, ".js") || e.Utilities.isAbsolutePath(n))
          e.Utilities.endsWith(n, ".js") ||
            e.Utilities.containsQueryString(n) ||
            (n += ".js"),
            (r = [n]);
        else
          for (var o = 0, i = (r = this._applyPaths(n)).length; o < i; o++)
            (this.isBuild() && "empty:" === r[o]) ||
              (e.Utilities.isAbsolutePath(r[o]) ||
                (r[o] = this.options.baseUrl + r[o]),
              e.Utilities.endsWith(r[o], ".js") ||
                e.Utilities.containsQueryString(r[o]) ||
                (r[o] = r[o] + ".js"));
        return this._addUrlArgsIfNecessaryToUrls(r);
      }),
      (r.prototype.requireToUrl = function(t) {
        var r = t;
        return (
          e.Utilities.isAbsolutePath(r) ||
            ((r = this._applyPaths(r)[0]),
            e.Utilities.isAbsolutePath(r) || (r = this.options.baseUrl + r)),
          this._addUrlArgsIfNecessaryToUrl(r)
        );
      }),
      (r.prototype.isBuild = function() {
        return this.options.isBuild;
      }),
      (r.prototype.isDuplicateMessageIgnoredFor = function(e) {
        return this.ignoreDuplicateModulesMap.hasOwnProperty(e);
      }),
      (r.prototype.getConfigForModule = function(e) {
        if (this.options.config) return this.options.config[e];
      }),
      (r.prototype.shouldCatchError = function() {
        return this.options.catchError;
      }),
      (r.prototype.shouldRecordStats = function() {
        return this.options.recordStats;
      }),
      (r.prototype.onError = function(e) {
        this.options.onError(e);
      }),
      r
    );
  })();
  e.Configuration = r;
})(AMDLoader || (AMDLoader = {}));
!(function(e) {
  var t = (function() {
      function e(e) {
        (this._env = e), (this._scriptLoader = null), (this._callbackMap = {});
      }
      return (
        (e.prototype.load = function(e, t, i, s) {
          var d = this;
          this._scriptLoader ||
            (this._scriptLoader = this._env.isWebWorker
              ? new n()
              : this._env.isNode
                ? new o(this._env)
                : new r());
          var a = { callback: i, errorback: s };
          this._callbackMap.hasOwnProperty(t)
            ? this._callbackMap[t].push(a)
            : ((this._callbackMap[t] = [a]),
              this._scriptLoader.load(
                e,
                t,
                function() {
                  return d.triggerCallback(t);
                },
                function(e) {
                  return d.triggerErrorback(t, e);
                }
              ));
        }),
        (e.prototype.triggerCallback = function(e) {
          var t = this._callbackMap[e];
          delete this._callbackMap[e];
          for (var r = 0; r < t.length; r++) t[r].callback();
        }),
        (e.prototype.triggerErrorback = function(e, t) {
          var r = this._callbackMap[e];
          delete this._callbackMap[e];
          for (var n = 0; n < r.length; n++) r[n].errorback(t);
        }),
        e
      );
    })(),
    r = (function() {
      function e() {}
      return (
        (e.prototype.attachListeners = function(e, t, r) {
          var n = function() {
              e.removeEventListener("load", o),
                e.removeEventListener("error", i);
            },
            o = function(e) {
              n(), t();
            },
            i = function(e) {
              n(), r(e);
            };
          e.addEventListener("load", o), e.addEventListener("error", i);
        }),
        (e.prototype.load = function(e, t, r, n) {
          var o = document.createElement("script");
          o.setAttribute("async", "async"),
            o.setAttribute("type", "text/javascript"),
            this.attachListeners(o, r, n),
            o.setAttribute("src", t),
            document.getElementsByTagName("head")[0].appendChild(o);
        }),
        e
      );
    })(),
    n = (function() {
      function e() {}
      return (
        (e.prototype.load = function(e, t, r, n) {
          try {
            importScripts(t), r();
          } catch (e) {
            n(e);
          }
        }),
        e
      );
    })(),
    o = (function() {
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
            for (var t = 0, r = process.argv; t < r.length; t++) {
              var n = r[t];
              if (0 === n.indexOf("--js-flags=")) {
                this._jsflags = n;
                break;
              }
            }
          }
        }),
        (t.prototype._initNodeRequire = function(t, r) {
          var n = r.getConfig().getOptionsLiteral().nodeCachedDataDir;
          if (n && !this._didPatchNodeRequire) {
            this._didPatchNodeRequire = !0;
            var o = this,
              i = t("module");
            i.prototype._compile = function(t, s) {
              t = t.replace(/^#!.*/, "");
              var d = i.wrap(t),
                a = o._getCachedDataPath(n, s),
                u = { filename: s };
              try {
                u.cachedData = o._fs.readFileSync(a);
              } catch (e) {
                u.produceCachedData = !0;
              }
              var l = new o._vm.Script(d, u),
                c = l.runInThisContext(u),
                h = o._path.dirname(s),
                f = (function(e) {
                  var t = e.constructor,
                    r = function(t) {
                      try {
                        return e.require(t);
                      } finally {
                      }
                    };
                  return (
                    (r.resolve = function(r) {
                      return t._resolveFilename(r, e);
                    }),
                    (r.main = process.mainModule),
                    (r.extensions = t._extensions),
                    (r.cache = t._cache),
                    r
                  );
                })(this),
                p = [this.exports, f, this, s, h, process, e.global, Buffer],
                _ = c.apply(this.exports, p);
              return o._processCachedData(r, l, a), _;
            };
          }
        }),
        (t.prototype.load = function(r, n, o, i) {
          var s = this,
            d = r.getConfig().getOptionsLiteral(),
            a = d.nodeRequire || e.global.nodeRequire,
            u =
              d.nodeInstrumenter ||
              function(e) {
                return e;
              };
          this._init(a), this._initNodeRequire(a, r);
          var l = r.getRecorder();
          if (/^node\|/.test(n)) {
            var c = n.split("|"),
              h = null;
            try {
              h = a(c[1]);
            } catch (e) {
              return void i(e);
            }
            r.enqueueDefineAnonymousModule([], function() {
              return h;
            }),
              o();
          } else
            (n = e.Utilities.fileUriToFilePath(this._env.isWindows, n)),
              this._fs.readFile(n, { encoding: "utf8" }, function(e, a) {
                if (e) i(e);
                else {
                  var c = s._path.normalize(n),
                    h = c;
                  if (s._env.isElectronRenderer) {
                    var f = h.match(/^([a-z])\:(.*)/i);
                    h = f
                      ? "file:///" +
                        (f[1].toUpperCase() + ":" + f[2]).replace(/\\/g, "/")
                      : "file://" + h;
                  }
                  var p,
                    _ = "(function (require, define, __filename, __dirname) { ";
                  if (
                    ((p =
                      a.charCodeAt(0) === t._BOM
                        ? _ + a.substring(1) + "\n});"
                        : _ + a + "\n});"),
                    (p = u(p, c)),
                    d.nodeCachedDataDir)
                  ) {
                    var g = s._getCachedDataPath(d.nodeCachedDataDir, n);
                    s._fs.readFile(g, function(e, t) {
                      var i = {
                          filename: h,
                          produceCachedData: void 0 === t,
                          cachedData: t
                        },
                        d = s._loadAndEvalScript(r, n, h, p, i, l);
                      o(), s._processCachedData(r, d, g);
                    });
                  } else
                    s._loadAndEvalScript(r, n, h, p, { filename: h }, l), o();
                }
              });
        }),
        (t.prototype._loadAndEvalScript = function(t, r, n, o, i, s) {
          s.record(31, r);
          var d = new this._vm.Script(o, i);
          return (
            d
              .runInThisContext(i)
              .call(
                e.global,
                t.getGlobalAMDRequireFunc(),
                t.getGlobalAMDDefineFunc(),
                n,
                this._path.dirname(r)
              ),
            s.record(32, r),
            d
          );
        }),
        (t.prototype._getCachedDataPath = function(e, t) {
          var r = this._crypto
              .createHash("md5")
              .update(t, "utf8")
              .update(this._jsflags, "utf8")
              .digest("hex"),
            n = this._path.basename(t).replace(/\.js$/, "");
          return this._path.join(e, n + "-" + r + ".code");
        }),
        (t.prototype._processCachedData = function(e, r, n) {
          var o = this;
          r.cachedDataRejected
            ? (e
                .getConfig()
                .getOptionsLiteral()
                .onNodeCachedData({ errorCode: "cachedDataRejected", path: n }),
              t._runSoon(function() {
                return o._fs.unlink(n, function(t) {
                  t &&
                    e
                      .getConfig()
                      .getOptionsLiteral()
                      .onNodeCachedData({
                        errorCode: "unlink",
                        path: n,
                        detail: t
                      });
                });
              }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay))
            : r.cachedDataProduced &&
              (e
                .getConfig()
                .getOptionsLiteral()
                .onNodeCachedData(void 0, {
                  path: n,
                  length: r.cachedData.length
                }),
              t._runSoon(function() {
                return o._fs.writeFile(n, r.cachedData, function(t) {
                  t &&
                    e
                      .getConfig()
                      .getOptionsLiteral()
                      .onNodeCachedData({
                        errorCode: "writeFile",
                        path: n,
                        detail: t
                      });
                });
              }, e.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay));
        }),
        (t._runSoon = function(e, t) {
          var r = t + Math.ceil(Math.random() * t);
          setTimeout(e, r);
        }),
        (t._BOM = 65279),
        t
      );
    })();
  e.createScriptLoader = function(e) {
    return new t(e);
  };
})(AMDLoader || (AMDLoader = {}));
!(function(e) {
  var t = (function() {
    function t(e) {
      var t = e.lastIndexOf("/");
      this.fromModulePath = -1 !== t ? e.substr(0, t + 1) : "";
    }
    return (
      (t._normalizeModuleId = function(e) {
        var t,
          r = e;
        for (t = /\/\.\//; t.test(r); ) r = r.replace(t, "/");
        for (
          r = r.replace(/^\.\//g, ""),
            t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
          t.test(r);

        )
          r = r.replace(t, "/");
        return (r = r.replace(
          /^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,
          ""
        ));
      }),
      (t.prototype.resolveModule = function(r) {
        var n = r;
        return (
          e.Utilities.isAbsolutePath(n) ||
            ((e.Utilities.startsWith(n, "./") ||
              e.Utilities.startsWith(n, "../")) &&
              (n = t._normalizeModuleId(this.fromModulePath + n))),
          n
        );
      }),
      (t.ROOT = new t("")),
      t
    );
  })();
  e.ModuleIdResolver = t;
  var r = (function() {
    function t(e, t, r, n, o, i) {
      (this.id = e),
        (this.strId = t),
        (this.dependencies = r),
        (this._callback = n),
        (this._errorback = o),
        (this.moduleIdResolver = i),
        (this.exports = {}),
        (this.exportsPassedIn = !1),
        (this.unresolvedDependenciesCount = this.dependencies.length),
        (this._isComplete = !1);
    }
    return (
      (t._safeInvokeFunction = function(t, r) {
        try {
          return { returnedValue: t.apply(e.global, r), producedError: null };
        } catch (e) {
          return { returnedValue: null, producedError: e };
        }
      }),
      (t._invokeFactory = function(t, r, n, o) {
        return t.isBuild() && !e.Utilities.isAnonymousModule(r)
          ? { returnedValue: null, producedError: null }
          : t.shouldCatchError()
            ? this._safeInvokeFunction(n, o)
            : { returnedValue: n.apply(e.global, o), producedError: null };
      }),
      (t.prototype.complete = function(r, n, o) {
        this._isComplete = !0;
        var i = null;
        if (this._callback)
          if ("function" == typeof this._callback) {
            r.record(21, this.strId);
            var s = t._invokeFactory(n, this.strId, this._callback, o);
            (i = s.producedError),
              r.record(22, this.strId),
              i ||
                void 0 === s.returnedValue ||
                (this.exportsPassedIn && !e.Utilities.isEmpty(this.exports)) ||
                (this.exports = s.returnedValue);
          } else this.exports = this._callback;
        i &&
          n.onError({
            errorCode: "factory",
            moduleId: this.strId,
            detail: i
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
  e.Module = r;
  var n = (function() {
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
    o = (function() {
      function e(e) {
        this.id = e;
      }
      return (
        (e.EXPORTS = new e(0)), (e.MODULE = new e(1)), (e.REQUIRE = new e(2)), e
      );
    })();
  e.RegularDependency = o;
  var i = (function() {
    return function(e, t, r) {
      (this.id = e), (this.pluginId = t), (this.pluginParam = r);
    };
  })();
  e.PluginDependency = i;
  var s = (function() {
    function s(t, r, o, i, s) {
      void 0 === s && (s = 0),
        (this._env = t),
        (this._scriptLoader = r),
        (this._loaderAvailableTimestamp = s),
        (this._defineFunc = o),
        (this._requireFunc = i),
        (this._moduleIdProvider = new n()),
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
          var r = function(e) {
              return e.replace(/\\/g, "/");
            },
            n = r(e),
            o = t.split(/\n/),
            i = 0;
          i < o.length;
          i++
        ) {
          var s = o[i].match(/(.*):(\d+):(\d+)\)?$/);
          if (s) {
            var d = s[1],
              a = s[2],
              u = s[3],
              l = Math.max(d.lastIndexOf(" ") + 1, d.lastIndexOf("(") + 1);
            if (((d = d.substr(l)), (d = r(d)) === n)) {
              var c = { line: parseInt(a, 10), col: parseInt(u, 10) };
              return (
                1 === c.line &&
                  (c.col -= "(function (require, define, __filename, __dirname) { ".length),
                c
              );
            }
          }
        }
        throw new Error("Could not correlate define call site for needle " + e);
      }),
      (s.prototype.getBuildInfo = function() {
        if (!this._config.isBuild()) return null;
        for (var e = [], t = 0, r = 0, n = this._modules2.length; r < n; r++) {
          var o = this._modules2[r];
          if (o) {
            var i = this._buildInfoPath[o.id] || null,
              d = this._buildInfoDefineStack[o.id] || null,
              a = this._buildInfoDependencies[o.id];
            e[t++] = {
              id: o.strId,
              path: i,
              defineLocation:
                i && d ? s._findRelevantLocationInStack(i, d) : null,
              dependencies: a,
              shim: null,
              exports: o.exports
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
        var r = null;
        this._config.isBuild() && (r = new Error("StackLocation").stack),
          (this._currentAnnonymousDefineCall = {
            stack: r,
            dependencies: e,
            callback: t
          });
      }),
      (s.prototype.defineModule = function(e, n, o, i, s, d) {
        var a = this;
        void 0 === d && (d = new t(e));
        var u = this._moduleIdProvider.getModuleId(e);
        if (this._modules2[u])
          this._config.isDuplicateMessageIgnoredFor(e) ||
            console.warn("Duplicate definition of module '" + e + "'");
        else {
          var l = new r(u, e, this._normalizeDependencies(n, d), o, i, d);
          (this._modules2[u] = l),
            this._config.isBuild() &&
              ((this._buildInfoDefineStack[u] = s),
              (this._buildInfoDependencies[u] = l.dependencies.map(function(e) {
                return a._moduleIdProvider.getStrModuleId(e.id);
              }))),
            this._resolve(l);
        }
      }),
      (s.prototype._normalizeDependency = function(e, t) {
        if ("exports" === e) return o.EXPORTS;
        if ("module" === e) return o.MODULE;
        if ("require" === e) return o.REQUIRE;
        var r = e.indexOf("!");
        if (r >= 0) {
          var n = t.resolveModule(e.substr(0, r)),
            s = t.resolveModule(e.substr(r + 1)),
            d = this._moduleIdProvider.getModuleId(n + "!" + s),
            a = this._moduleIdProvider.getModuleId(n);
          return new i(d, a, s);
        }
        return new o(this._moduleIdProvider.getModuleId(t.resolveModule(e)));
      }),
      (s.prototype._normalizeDependencies = function(e, t) {
        for (var r = [], n = 0, o = 0, i = e.length; o < i; o++)
          r[n++] = this._normalizeDependency(e[o], t);
        return r;
      }),
      (s.prototype._relativeRequire = function(t, r, n, o) {
        if ("string" == typeof r) return this.synchronousRequire(r, t);
        this.defineModule(
          e.Utilities.generateAnonymousModule(),
          r,
          n,
          o,
          null,
          t
        );
      }),
      (s.prototype.synchronousRequire = function(e, r) {
        void 0 === r && (r = new t(e));
        var n = this._normalizeDependency(e, r),
          o = this._modules2[n.id];
        if (!o)
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              e +
              "'. This is the first mention of this module!"
          );
        if (!o.isComplete())
          throw new Error(
            "Check dependency list! Synchronous require cannot resolve module '" +
              e +
              "'. This module has not been resolved completely yet."
          );
        return o.exports;
      }),
      (s.prototype.configure = function(t, r) {
        var n = this._config.shouldRecordStats();
        (this._config = r
          ? new e.Configuration(this._env, t)
          : this._config.cloneAndMerge(t)),
          this._config.shouldRecordStats() && !n && (this._recorder = null);
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
        var r = this;
        return {
          errorCode: "load",
          moduleId: this._moduleIdProvider.getStrModuleId(e),
          neededBy: (this._inverseDependencies2[e] || []).map(function(e) {
            return r._moduleIdProvider.getStrModuleId(e);
          }),
          detail: t
        };
      }),
      (s.prototype._onLoadError = function(e, t) {
        for (
          var r = this._createLoadError(e, t),
            n = [],
            o = 0,
            i = this._moduleIdProvider.getMaxModuleId();
          o < i;
          o++
        )
          n[o] = !1;
        var s = !1,
          d = [];
        for (d.push(e), n[e] = !0; d.length > 0; ) {
          var a = d.shift(),
            u = this._modules2[a];
          u && (s = u.onDependencyError(r) || s);
          var l = this._inverseDependencies2[a];
          if (l)
            for (var o = 0, i = l.length; o < i; o++) {
              var c = l[o];
              n[c] || (d.push(c), (n[c] = !0));
            }
        }
        s || this._config.onError(r);
      }),
      (s.prototype._hasDependencyPath = function(e, t) {
        var r = this._modules2[e];
        if (!r) return !1;
        for (
          var n = [], o = 0, i = this._moduleIdProvider.getMaxModuleId();
          o < i;
          o++
        )
          n[o] = !1;
        var s = [];
        for (s.push(r), n[e] = !0; s.length > 0; ) {
          var d = s.shift().dependencies;
          if (d)
            for (var o = 0, i = d.length; o < i; o++) {
              var a = d[o];
              if (a.id === t) return !0;
              var u = this._modules2[a.id];
              u && !n[a.id] && ((n[a.id] = !0), s.push(u));
            }
        }
        return !1;
      }),
      (s.prototype._findCyclePath = function(e, t, r) {
        if (e === t || 50 === r) return [e];
        var n = this._modules2[e];
        if (!n) return null;
        for (var o = n.dependencies, i = 0, s = o.length; i < s; i++) {
          var d = this._findCyclePath(o[i].id, t, r + 1);
          if (null !== d) return d.push(e), d;
        }
        return null;
      }),
      (s.prototype._createRequire = function(t) {
        var r = this,
          n = function(e, n, o) {
            return r._relativeRequire(t, e, n, o);
          };
        return (
          (n.toUrl = function(e) {
            return r._config.requireToUrl(t.resolveModule(e));
          }),
          (n.getStats = function() {
            return r.getLoaderEvents();
          }),
          (n.__$__nodeRequire = e.global.nodeRequire),
          n
        );
      }),
      (s.prototype._loadModule = function(e) {
        var t = this;
        if (!this._modules2[e] && !this._knownModules2[e]) {
          this._knownModules2[e] = !0;
          var r = this._moduleIdProvider.getStrModuleId(e),
            n = this._config.moduleIdToPaths(r);
          this._env.isNode && -1 === r.indexOf("/") && n.push("node|" + r);
          var o = -1,
            i = function(r) {
              if (++o >= n.length) t._onLoadError(e, r);
              else {
                var s = n[o],
                  d = t.getRecorder();
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
                d.record(10, s),
                  t._scriptLoader.load(
                    t,
                    s,
                    function() {
                      t._config.isBuild() && (t._buildInfoPath[e] = s),
                        d.record(11, s),
                        t._onLoad(e);
                    },
                    function(e) {
                      d.record(12, s), i(e);
                    }
                  );
              }
            };
          i(null);
        }
      }),
      (s.prototype._loadPluginDependency = function(e, r) {
        var n = this;
        if (!this._modules2[r.id] && !this._knownModules2[r.id]) {
          this._knownModules2[r.id] = !0;
          var o = function(e) {
            n.defineModule(
              n._moduleIdProvider.getStrModuleId(r.id),
              [],
              e,
              null,
              null
            );
          };
          (o.error = function(e) {
            n._config.onError(n._createLoadError(r.id, e));
          }),
            e.load(
              r.pluginParam,
              this._createRequire(t.ROOT),
              o,
              this._config.getOptionsLiteral()
            );
        }
      }),
      (s.prototype._resolve = function(e) {
        for (
          var t = this, r = e.dependencies, n = 0, s = r.length;
          n < s;
          n++
        ) {
          var d = r[n];
          if (d !== o.EXPORTS)
            if (d !== o.MODULE)
              if (d !== o.REQUIRE) {
                var a = this._modules2[d.id];
                if (a && a.isComplete()) e.unresolvedDependenciesCount--;
                else if (this._hasDependencyPath(d.id, e.id)) {
                  console.warn(
                    "There is a dependency cycle between '" +
                      this._moduleIdProvider.getStrModuleId(d.id) +
                      "' and '" +
                      this._moduleIdProvider.getStrModuleId(e.id) +
                      "'. The cyclic path follows:"
                  );
                  var u = this._findCyclePath(d.id, e.id, 0);
                  u.reverse(),
                    u.push(d.id),
                    console.warn(
                      u
                        .map(function(e) {
                          return t._moduleIdProvider.getStrModuleId(e);
                        })
                        .join(" => \n")
                    ),
                    e.unresolvedDependenciesCount--;
                } else if (
                  ((this._inverseDependencies2[d.id] =
                    this._inverseDependencies2[d.id] || []),
                  this._inverseDependencies2[d.id].push(e.id),
                  d instanceof i)
                ) {
                  var l = this._modules2[d.pluginId];
                  if (l && l.isComplete()) {
                    this._loadPluginDependency(l.exports, d);
                    continue;
                  }
                  var c = this._inversePluginDependencies2.get(d.pluginId);
                  c ||
                    ((c = []),
                    this._inversePluginDependencies2.set(d.pluginId, c)),
                    c.push(d),
                    this._loadModule(d.pluginId);
                } else this._loadModule(d.id);
              } else e.unresolvedDependenciesCount--;
            else e.unresolvedDependenciesCount--;
          else (e.exportsPassedIn = !0), e.unresolvedDependenciesCount--;
        }
        0 === e.unresolvedDependenciesCount && this._onModuleComplete(e);
      }),
      (s.prototype._onModuleComplete = function(e) {
        var t = this,
          r = this.getRecorder();
        if (!e.isComplete()) {
          for (
            var n = e.dependencies, i = [], s = 0, d = n.length;
            s < d;
            s++
          ) {
            var a = n[s];
            if (a !== o.EXPORTS)
              if (a !== o.MODULE)
                if (a !== o.REQUIRE) {
                  var u = this._modules2[a.id];
                  i[s] = u ? u.exports : null;
                } else i[s] = this._createRequire(e.moduleIdResolver);
              else
                i[s] = {
                  id: e.strId,
                  config: function() {
                    return t._config.getConfigForModule(e.strId);
                  }
                };
            else i[s] = e.exports;
          }
          e.complete(r, this._config, i);
          var l = this._inverseDependencies2[e.id];
          if (((this._inverseDependencies2[e.id] = null), l))
            for (var s = 0, d = l.length; s < d; s++) {
              var c = l[s],
                h = this._modules2[c];
              h.unresolvedDependenciesCount--,
                0 === h.unresolvedDependenciesCount &&
                  this._onModuleComplete(h);
            }
          var f = this._inversePluginDependencies2.get(e.id);
          if (f) {
            this._inversePluginDependencies2.delete(e.id);
            for (var s = 0, d = f.length; s < d; s++)
              this._loadPluginDependency(e.exports, f[s]);
          }
        }
      }),
      s
    );
  })();
  e.ModuleManager = s;
})(AMDLoader || (AMDLoader = {}));
var define, AMDLoader;
!(function(e) {
  function t() {
    if (void 0 !== e.global.require || "undefined" != typeof require) {
      var t = e.global.require || require;
      if ("function" == typeof t && "function" == typeof t.resolve) {
        var i = function(e) {
          n.getRecorder().record(33, e);
          try {
            return t(e);
          } finally {
            n.getRecorder().record(34, e);
          }
        };
        (e.global.nodeRequire = i),
          (s.nodeRequire = i),
          (s.__$__nodeRequire = i);
      }
    }
    r.isNode && !r.isElectronRenderer
      ? ((module.exports = s), (require = s))
      : (r.isElectronRenderer || (e.global.define = o), (e.global.require = s));
  }
  var r = new e.Environment(),
    n = null,
    o = function(e, t, r) {
      "string" != typeof e && ((r = t), (t = e), (e = null)),
        ("object" == typeof t && Array.isArray(t)) || ((r = t), (t = null)),
        t || (t = ["require", "exports", "module"]),
        e
          ? n.defineModule(e, t, r, null, null)
          : n.enqueueDefineAnonymousModule(t, r);
    };
  o.amd = { jQuery: !0 };
  var i = function(e, t) {
      void 0 === t && (t = !1), n.configure(e, t);
    },
    s = function() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Object && !Array.isArray(arguments[0]))
          return void i(arguments[0]);
        if ("string" == typeof arguments[0])
          return n.synchronousRequire(arguments[0]);
      }
      if (
        (2 !== arguments.length && 3 !== arguments.length) ||
        !Array.isArray(arguments[0])
      )
        throw new Error("Unrecognized require call");
      n.defineModule(
        e.Utilities.generateAnonymousModule(),
        arguments[0],
        arguments[1],
        arguments[2],
        null
      );
    };
  (s.config = i),
    (s.getConfig = function() {
      return n.getConfig().getOptionsLiteral();
    }),
    (s.reset = function() {
      n = n.reset();
    }),
    (s.getBuildInfo = function() {
      return n.getBuildInfo();
    }),
    (s.getStats = function() {
      return n.getLoaderEvents();
    }),
    (e.init = t),
    ("function" == typeof e.global.define && e.global.define.amd) ||
      ((n = new e.ModuleManager(
        r,
        e.createScriptLoader(r),
        o,
        s,
        e.Utilities.getHighPerformanceTimestamp()
      )),
      void 0 !== e.global.require &&
        "function" != typeof e.global.require &&
        s.config(e.global.require),
      ((define = function() {
        return o.apply(null, arguments);
      }).amd =
        o.amd),
      "undefined" == typeof doNotInitLoader && t());
})(AMDLoader || (AMDLoader = {}));
//# sourceMappingURL=../../min-maps/vs/loader.js.map
