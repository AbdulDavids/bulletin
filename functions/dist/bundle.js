/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      583: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          i,
          s = n(178),
          o = n(556),
          a = n(664),
          c = n(766),
          u = n(987),
          l = (function () {
            function e(e) {
              this.container = e;
            }
            return (
              (e.prototype.getPlatformInfoString = function () {
                return this.container
                  .getProviders()
                  .map(function (e) {
                    if (
                      (function (e) {
                        var t = e.getComponent();
                        return "VERSION" === (null == t ? void 0 : t.type);
                      })(e)
                    ) {
                      var t = e.getImmediate();
                      return "".concat(t.library, "/").concat(t.version);
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .join(" ");
              }),
              e
            );
          })(),
          h = "@firebase/app",
          d = "0.9.15",
          f = new a.Logger("@firebase/app"),
          p = "[DEFAULT]",
          g =
            (((r = {})[h] = "fire-core"),
            (r["@firebase/app-compat"] = "fire-core-compat"),
            (r["@firebase/analytics"] = "fire-analytics"),
            (r["@firebase/analytics-compat"] = "fire-analytics-compat"),
            (r["@firebase/app-check"] = "fire-app-check"),
            (r["@firebase/app-check-compat"] = "fire-app-check-compat"),
            (r["@firebase/auth"] = "fire-auth"),
            (r["@firebase/auth-compat"] = "fire-auth-compat"),
            (r["@firebase/database"] = "fire-rtdb"),
            (r["@firebase/database-compat"] = "fire-rtdb-compat"),
            (r["@firebase/functions"] = "fire-fn"),
            (r["@firebase/functions-compat"] = "fire-fn-compat"),
            (r["@firebase/installations"] = "fire-iid"),
            (r["@firebase/installations-compat"] = "fire-iid-compat"),
            (r["@firebase/messaging"] = "fire-fcm"),
            (r["@firebase/messaging-compat"] = "fire-fcm-compat"),
            (r["@firebase/performance"] = "fire-perf"),
            (r["@firebase/performance-compat"] = "fire-perf-compat"),
            (r["@firebase/remote-config"] = "fire-rc"),
            (r["@firebase/remote-config-compat"] = "fire-rc-compat"),
            (r["@firebase/storage"] = "fire-gcs"),
            (r["@firebase/storage-compat"] = "fire-gcs-compat"),
            (r["@firebase/firestore"] = "fire-fst"),
            (r["@firebase/firestore-compat"] = "fire-fst-compat"),
            (r["fire-js"] = "fire-js"),
            (r.firebase = "fire-js-all"),
            r),
          m = new Map(),
          y = new Map();
        function v(e, t) {
          try {
            e.container.addComponent(t);
          } catch (n) {
            f.debug(
              "Component "
                .concat(t.name, " failed to register with FirebaseApp ")
                .concat(e.name),
              n
            );
          }
        }
        function w(e) {
          var t,
            n,
            r = e.name;
          if (y.has(r))
            return (
              f.debug(
                "There were multiple attempts to register component ".concat(
                  r,
                  "."
                )
              ),
              !1
            );
          y.set(r, e);
          try {
            for (
              var i = o.__values(m.values()), s = i.next();
              !s.done;
              s = i.next()
            )
              v(s.value, e);
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              s && !s.done && (n = i.return) && n.call(i);
            } finally {
              if (t) throw t.error;
            }
          }
          return !0;
        }
        function b(e, t) {
          var n = e.container
            .getProvider("heartbeat")
            .getImmediate({ optional: !0 });
          return n && n.triggerHeartbeat(), e.container.getProvider(t);
        }
        var _ =
            (((i = {})["no-app"] =
              "No Firebase App '{$appName}' has been created - call initializeApp() first"),
            (i["bad-app-name"] = "Illegal App name: '{$appName}"),
            (i["duplicate-app"] =
              "Firebase App named '{$appName}' already exists with different options or config"),
            (i["app-deleted"] =
              "Firebase App named '{$appName}' already deleted"),
            (i["no-options"] =
              "Need to provide options, when not being deployed to hosting via source."),
            (i["invalid-app-argument"] =
              "firebase.{$appName}() takes either no argument or a Firebase App instance."),
            (i["invalid-log-argument"] =
              "First argument to `onLog` must be null or a function."),
            (i["idb-open"] =
              "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),
            (i["idb-get"] =
              "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),
            (i["idb-set"] =
              "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),
            (i["idb-delete"] =
              "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),
            i),
          I = new c.ErrorFactory("app", "Firebase", _),
          E = (function () {
            function e(e, t, n) {
              var r = this;
              (this._isDeleted = !1),
                (this._options = o.__assign({}, e)),
                (this._config = o.__assign({}, t)),
                (this._name = t.name),
                (this._automaticDataCollectionEnabled =
                  t.automaticDataCollectionEnabled),
                (this._container = n),
                this.container.addComponent(
                  new s.Component(
                    "app",
                    function () {
                      return r;
                    },
                    "PUBLIC"
                  )
                );
            }
            return (
              Object.defineProperty(
                e.prototype,
                "automaticDataCollectionEnabled",
                {
                  get: function () {
                    return (
                      this.checkDestroyed(),
                      this._automaticDataCollectionEnabled
                    );
                  },
                  set: function (e) {
                    this.checkDestroyed(),
                      (this._automaticDataCollectionEnabled = e);
                  },
                  enumerable: !1,
                  configurable: !0,
                }
              ),
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this.checkDestroyed(), this._name;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "options", {
                get: function () {
                  return this.checkDestroyed(), this._options;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "config", {
                get: function () {
                  return this.checkDestroyed(), this._config;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "container", {
                get: function () {
                  return this._container;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "isDeleted", {
                get: function () {
                  return this._isDeleted;
                },
                set: function (e) {
                  this._isDeleted = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.checkDestroyed = function () {
                if (this.isDeleted)
                  throw I.create("app-deleted", { appName: this._name });
              }),
              e
            );
          })();
        function S(e, t) {
          var n, r;
          void 0 === t && (t = {});
          var i = e;
          "object" != typeof t && (t = { name: t });
          var a = o.__assign(
              { name: p, automaticDataCollectionEnabled: !1 },
              t
            ),
            u = a.name;
          if ("string" != typeof u || !u)
            throw I.create("bad-app-name", { appName: String(u) });
          if ((i || (i = c.getDefaultAppConfig()), !i))
            throw I.create("no-options");
          var l = m.get(u);
          if (l) {
            if (c.deepEqual(i, l.options) && c.deepEqual(a, l.config)) return l;
            throw I.create("duplicate-app", { appName: u });
          }
          var h = new s.ComponentContainer(u);
          try {
            for (
              var d = o.__values(y.values()), f = d.next();
              !f.done;
              f = d.next()
            ) {
              var g = f.value;
              h.addComponent(g);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              f && !f.done && (r = d.return) && r.call(d);
            } finally {
              if (n) throw n.error;
            }
          }
          var v = new E(i, a, h);
          return m.set(u, v), v;
        }
        function T(e, t, n) {
          var r,
            i = null !== (r = g[e]) && void 0 !== r ? r : e;
          n && (i += "-".concat(n));
          var o = i.match(/\s|\//),
            a = t.match(/\s|\//);
          if (o || a) {
            var c = [
              'Unable to register library "'
                .concat(i, '" with version "')
                .concat(t, '":'),
            ];
            return (
              o &&
                c.push(
                  'library name "'.concat(
                    i,
                    '" contains illegal characters (whitespace or "/")'
                  )
                ),
              o && a && c.push("and"),
              a &&
                c.push(
                  'version name "'.concat(
                    t,
                    '" contains illegal characters (whitespace or "/")'
                  )
                ),
              void f.warn(c.join(" "))
            );
          }
          w(
            new s.Component(
              "".concat(i, "-version"),
              function () {
                return { library: i, version: t };
              },
              "VERSION"
            )
          );
        }
        var x = "firebase-heartbeat-database",
          C = 1,
          D = "firebase-heartbeat-store",
          A = null;
        function k() {
          return (
            A ||
              (A = u
                .openDB(x, C, {
                  upgrade: function (e, t) {
                    0 === t && e.createObjectStore(D);
                  },
                })
                .catch(function (e) {
                  throw I.create("idb-open", {
                    originalErrorMessage: e.message,
                  });
                })),
            A
          );
        }
        function N(e) {
          return o.__awaiter(this, void 0, void 0, function () {
            var t, n;
            return o.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 3, , 4]), [4, k()];
                case 1:
                  return [4, r.sent().transaction(D).objectStore(D).get(L(e))];
                case 2:
                  return [2, r.sent()];
                case 3:
                  return (
                    (t = r.sent()) instanceof c.FirebaseError
                      ? f.warn(t.message)
                      : ((n = I.create("idb-get", {
                          originalErrorMessage: null == t ? void 0 : t.message,
                        })),
                        f.warn(n.message)),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }
        function O(e, t) {
          return o.__awaiter(this, void 0, void 0, function () {
            var n, r, i, s;
            return o.__generator(this, function (o) {
              switch (o.label) {
                case 0:
                  return o.trys.push([0, 4, , 5]), [4, k()];
                case 1:
                  return (
                    (n = o.sent()),
                    [
                      4,
                      (r = n.transaction(D, "readwrite"))
                        .objectStore(D)
                        .put(t, L(e)),
                    ]
                  );
                case 2:
                  return o.sent(), [4, r.done];
                case 3:
                  return o.sent(), [3, 5];
                case 4:
                  return (
                    (i = o.sent()) instanceof c.FirebaseError
                      ? f.warn(i.message)
                      : ((s = I.create("idb-set", {
                          originalErrorMessage: null == i ? void 0 : i.message,
                        })),
                        f.warn(s.message)),
                    [3, 5]
                  );
                case 5:
                  return [2];
              }
            });
          });
        }
        function L(e) {
          return "".concat(e.name, "!").concat(e.options.appId);
        }
        var P = (function () {
          function e(e) {
            var t = this;
            (this.container = e), (this._heartbeatsCache = null);
            var n = this.container.getProvider("app").getImmediate();
            (this._storage = new R(n)),
              (this._heartbeatsCachePromise = this._storage
                .read()
                .then(function (e) {
                  return (t._heartbeatsCache = e), e;
                }));
          }
          return (
            (e.prototype.triggerHeartbeat = function () {
              return o.__awaiter(this, void 0, void 0, function () {
                var e, t, n, r;
                return o.__generator(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = this.container
                          .getProvider("platform-logger")
                          .getImmediate()),
                        (t = e.getPlatformInfoString()),
                        (n = M()),
                        null !== this._heartbeatsCache
                          ? [3, 2]
                          : ((r = this), [4, this._heartbeatsCachePromise])
                      );
                    case 1:
                      (r._heartbeatsCache = i.sent()), (i.label = 2);
                    case 2:
                      return this._heartbeatsCache.lastSentHeartbeatDate ===
                        n ||
                        this._heartbeatsCache.heartbeats.some(function (e) {
                          return e.date === n;
                        })
                        ? [2]
                        : (this._heartbeatsCache.heartbeats.push({
                            date: n,
                            agent: t,
                          }),
                          (this._heartbeatsCache.heartbeats =
                            this._heartbeatsCache.heartbeats.filter(function (
                              e
                            ) {
                              var t = new Date(e.date).valueOf();
                              return Date.now() - t <= 2592e6;
                            })),
                          [2, this._storage.overwrite(this._heartbeatsCache)]);
                  }
                });
              });
            }),
            (e.prototype.getHeartbeatsHeader = function () {
              return o.__awaiter(this, void 0, void 0, function () {
                var e, t, n, r, i;
                return o.__generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return null !== this._heartbeatsCache
                        ? [3, 2]
                        : [4, this._heartbeatsCachePromise];
                    case 1:
                      s.sent(), (s.label = 2);
                    case 2:
                      return null === this._heartbeatsCache ||
                        0 === this._heartbeatsCache.heartbeats.length
                        ? [2, ""]
                        : ((e = M()),
                          (t = (function (e, t) {
                            var n, r;
                            void 0 === t && (t = 1024);
                            var i = [],
                              s = e.slice(),
                              a = function (e) {
                                var n = i.find(function (t) {
                                  return t.agent === e.agent;
                                });
                                if (n) {
                                  if ((n.dates.push(e.date), F(i) > t))
                                    return n.dates.pop(), "break";
                                } else if (
                                  (i.push({ agent: e.agent, dates: [e.date] }),
                                  F(i) > t)
                                )
                                  return i.pop(), "break";
                                s = s.slice(1);
                              };
                            try {
                              for (
                                var c = o.__values(e), u = c.next();
                                !u.done && "break" !== a(u.value);
                                u = c.next()
                              );
                            } catch (e) {
                              n = { error: e };
                            } finally {
                              try {
                                u && !u.done && (r = c.return) && r.call(c);
                              } finally {
                                if (n) throw n.error;
                              }
                            }
                            return { heartbeatsToSend: i, unsentEntries: s };
                          })(this._heartbeatsCache.heartbeats)),
                          (n = t.heartbeatsToSend),
                          (r = t.unsentEntries),
                          (i = c.base64urlEncodeWithoutPadding(
                            JSON.stringify({ version: 2, heartbeats: n })
                          )),
                          (this._heartbeatsCache.lastSentHeartbeatDate = e),
                          r.length > 0
                            ? ((this._heartbeatsCache.heartbeats = r),
                              [
                                4,
                                this._storage.overwrite(this._heartbeatsCache),
                              ])
                            : [3, 4]);
                    case 3:
                      return s.sent(), [3, 5];
                    case 4:
                      (this._heartbeatsCache.heartbeats = []),
                        this._storage.overwrite(this._heartbeatsCache),
                        (s.label = 5);
                    case 5:
                      return [2, i];
                  }
                });
              });
            }),
            e
          );
        })();
        function M() {
          return new Date().toISOString().substring(0, 10);
        }
        var R = (function () {
          function e(e) {
            (this.app = e),
              (this._canUseIndexedDBPromise =
                this.runIndexedDBEnvironmentCheck());
          }
          return (
            (e.prototype.runIndexedDBEnvironmentCheck = function () {
              return o.__awaiter(this, void 0, void 0, function () {
                return o.__generator(this, function (e) {
                  return c.isIndexedDBAvailable()
                    ? [
                        2,
                        c
                          .validateIndexedDBOpenable()
                          .then(function () {
                            return !0;
                          })
                          .catch(function () {
                            return !1;
                          }),
                      ]
                    : [2, !1];
                });
              });
            }),
            (e.prototype.read = function () {
              return o.__awaiter(this, void 0, void 0, function () {
                return o.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this._canUseIndexedDBPromise];
                    case 1:
                      return e.sent() ? [3, 2] : [2, { heartbeats: [] }];
                    case 2:
                      return [4, N(this.app)];
                    case 3:
                      return [2, e.sent() || { heartbeats: [] }];
                  }
                });
              });
            }),
            (e.prototype.overwrite = function (e) {
              var t;
              return o.__awaiter(this, void 0, void 0, function () {
                var n;
                return o.__generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this._canUseIndexedDBPromise];
                    case 1:
                      return r.sent() ? [3, 2] : [2];
                    case 2:
                      return [4, this.read()];
                    case 3:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          O(this.app, {
                            lastSentHeartbeatDate:
                              null !== (t = e.lastSentHeartbeatDate) &&
                              void 0 !== t
                                ? t
                                : n.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats,
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.add = function (e) {
              var t;
              return o.__awaiter(this, void 0, void 0, function () {
                var n;
                return o.__generator(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this._canUseIndexedDBPromise];
                    case 1:
                      return r.sent() ? [3, 2] : [2];
                    case 2:
                      return [4, this.read()];
                    case 3:
                      return (
                        (n = r.sent()),
                        [
                          2,
                          O(this.app, {
                            lastSentHeartbeatDate:
                              null !== (t = e.lastSentHeartbeatDate) &&
                              void 0 !== t
                                ? t
                                : n.lastSentHeartbeatDate,
                            heartbeats: o.__spreadArray(
                              o.__spreadArray([], o.__read(n.heartbeats), !1),
                              o.__read(e.heartbeats),
                              !1
                            ),
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            e
          );
        })();
        function F(e) {
          return c.base64urlEncodeWithoutPadding(
            JSON.stringify({ version: 2, heartbeats: e })
          ).length;
        }
        w(
          new s.Component(
            "platform-logger",
            function (e) {
              return new l(e);
            },
            "PRIVATE"
          )
        ),
          w(
            new s.Component(
              "heartbeat",
              function (e) {
                return new P(e);
              },
              "PRIVATE"
            )
          ),
          T(h, d, "node"),
          T(h, d, "cjs5"),
          T("fire-js", ""),
          Object.defineProperty(t, "FirebaseError", {
            enumerable: !0,
            get: function () {
              return c.FirebaseError;
            },
          }),
          (t.SDK_VERSION = "10.1.0"),
          (t._DEFAULT_ENTRY_NAME = p),
          (t._addComponent = v),
          (t._addOrOverwriteComponent = function (e, t) {
            e.container.addOrOverwriteComponent(t);
          }),
          (t._apps = m),
          (t._clearComponents = function () {
            y.clear();
          }),
          (t._components = y),
          (t._getProvider = b),
          (t._registerComponent = w),
          (t._removeServiceInstance = function (e, t, n) {
            void 0 === n && (n = p), b(e, t).clearInstance(n);
          }),
          (t.deleteApp = function (e) {
            return o.__awaiter(this, void 0, void 0, function () {
              var t;
              return o.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = e.name),
                      m.has(t)
                        ? (m.delete(t),
                          [
                            4,
                            Promise.all(
                              e.container.getProviders().map(function (e) {
                                return e.delete();
                              })
                            ),
                          ])
                        : [3, 2]
                    );
                  case 1:
                    n.sent(), (e.isDeleted = !0), (n.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (t.getApp = function (e) {
            void 0 === e && (e = p);
            var t = m.get(e);
            if (!t && e === p && c.getDefaultAppConfig()) return S();
            if (!t) throw I.create("no-app", { appName: e });
            return t;
          }),
          (t.getApps = function () {
            return Array.from(m.values());
          }),
          (t.initializeApp = S),
          (t.onLog = function (e, t) {
            if (null !== e && "function" != typeof e)
              throw I.create("invalid-log-argument");
            a.setUserLogHandler(e, t);
          }),
          (t.registerVersion = T),
          (t.setLogLevel = function (e) {
            a.setLogLevel(e);
          });
      },
      178: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(556),
          i = n(766),
          s = (function () {
            function e(e, t, n) {
              (this.name = e),
                (this.instanceFactory = t),
                (this.type = n),
                (this.multipleInstances = !1),
                (this.serviceProps = {}),
                (this.instantiationMode = "LAZY"),
                (this.onInstanceCreated = null);
            }
            return (
              (e.prototype.setInstantiationMode = function (e) {
                return (this.instantiationMode = e), this;
              }),
              (e.prototype.setMultipleInstances = function (e) {
                return (this.multipleInstances = e), this;
              }),
              (e.prototype.setServiceProps = function (e) {
                return (this.serviceProps = e), this;
              }),
              (e.prototype.setInstanceCreatedCallback = function (e) {
                return (this.onInstanceCreated = e), this;
              }),
              e
            );
          })(),
          o = "[DEFAULT]",
          a = (function () {
            function e(e, t) {
              (this.name = e),
                (this.container = t),
                (this.component = null),
                (this.instances = new Map()),
                (this.instancesDeferred = new Map()),
                (this.instancesOptions = new Map()),
                (this.onInitCallbacks = new Map());
            }
            return (
              (e.prototype.get = function (e) {
                var t = this.normalizeInstanceIdentifier(e);
                if (!this.instancesDeferred.has(t)) {
                  var n = new i.Deferred();
                  if (
                    (this.instancesDeferred.set(t, n),
                    this.isInitialized(t) || this.shouldAutoInitialize())
                  )
                    try {
                      var r = this.getOrInitializeService({
                        instanceIdentifier: t,
                      });
                      r && n.resolve(r);
                    } catch (e) {}
                }
                return this.instancesDeferred.get(t).promise;
              }),
              (e.prototype.getImmediate = function (e) {
                var t,
                  n = this.normalizeInstanceIdentifier(
                    null == e ? void 0 : e.identifier
                  ),
                  r =
                    null !== (t = null == e ? void 0 : e.optional) &&
                    void 0 !== t &&
                    t;
                if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                  if (r) return null;
                  throw Error(
                    "Service ".concat(this.name, " is not available")
                  );
                }
                try {
                  return this.getOrInitializeService({ instanceIdentifier: n });
                } catch (e) {
                  if (r) return null;
                  throw e;
                }
              }),
              (e.prototype.getComponent = function () {
                return this.component;
              }),
              (e.prototype.setComponent = function (e) {
                var t, n;
                if (e.name !== this.name)
                  throw Error(
                    "Mismatching Component "
                      .concat(e.name, " for Provider ")
                      .concat(this.name, ".")
                  );
                if (this.component)
                  throw Error(
                    "Component for ".concat(
                      this.name,
                      " has already been provided"
                    )
                  );
                if (((this.component = e), this.shouldAutoInitialize())) {
                  if (
                    (function (e) {
                      return "EAGER" === e.instantiationMode;
                    })(e)
                  )
                    try {
                      this.getOrInitializeService({ instanceIdentifier: o });
                    } catch (e) {}
                  try {
                    for (
                      var i = r.__values(this.instancesDeferred.entries()),
                        s = i.next();
                      !s.done;
                      s = i.next()
                    ) {
                      var a = r.__read(s.value, 2),
                        c = a[0],
                        u = a[1],
                        l = this.normalizeInstanceIdentifier(c);
                      try {
                        var h = this.getOrInitializeService({
                          instanceIdentifier: l,
                        });
                        u.resolve(h);
                      } catch (e) {}
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      s && !s.done && (n = i.return) && n.call(i);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
              }),
              (e.prototype.clearInstance = function (e) {
                void 0 === e && (e = o),
                  this.instancesDeferred.delete(e),
                  this.instancesOptions.delete(e),
                  this.instances.delete(e);
              }),
              (e.prototype.delete = function () {
                return r.__awaiter(this, void 0, void 0, function () {
                  var e;
                  return r.__generator(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (e = Array.from(this.instances.values())),
                          [
                            4,
                            Promise.all(
                              r.__spreadArray(
                                r.__spreadArray(
                                  [],
                                  r.__read(
                                    e
                                      .filter(function (e) {
                                        return "INTERNAL" in e;
                                      })
                                      .map(function (e) {
                                        return e.INTERNAL.delete();
                                      })
                                  ),
                                  !1
                                ),
                                r.__read(
                                  e
                                    .filter(function (e) {
                                      return "_delete" in e;
                                    })
                                    .map(function (e) {
                                      return e._delete();
                                    })
                                ),
                                !1
                              )
                            ),
                          ]
                        );
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.isComponentSet = function () {
                return null != this.component;
              }),
              (e.prototype.isInitialized = function (e) {
                return void 0 === e && (e = o), this.instances.has(e);
              }),
              (e.prototype.getOptions = function (e) {
                return (
                  void 0 === e && (e = o), this.instancesOptions.get(e) || {}
                );
              }),
              (e.prototype.initialize = function (e) {
                var t, n;
                void 0 === e && (e = {});
                var i = e.options,
                  s = void 0 === i ? {} : i,
                  o = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                if (this.isInitialized(o))
                  throw Error(
                    ""
                      .concat(this.name, "(")
                      .concat(o, ") has already been initialized")
                  );
                if (!this.isComponentSet())
                  throw Error(
                    "Component ".concat(
                      this.name,
                      " has not been registered yet"
                    )
                  );
                var a = this.getOrInitializeService({
                  instanceIdentifier: o,
                  options: s,
                });
                try {
                  for (
                    var c = r.__values(this.instancesDeferred.entries()),
                      u = c.next();
                    !u.done;
                    u = c.next()
                  ) {
                    var l = r.__read(u.value, 2),
                      h = l[0],
                      d = l[1];
                    o === this.normalizeInstanceIdentifier(h) && d.resolve(a);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    u && !u.done && (n = c.return) && n.call(c);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return a;
              }),
              (e.prototype.onInit = function (e, t) {
                var n,
                  r = this.normalizeInstanceIdentifier(t),
                  i =
                    null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
                      ? n
                      : new Set();
                i.add(e), this.onInitCallbacks.set(r, i);
                var s = this.instances.get(r);
                return (
                  s && e(s, r),
                  function () {
                    i.delete(e);
                  }
                );
              }),
              (e.prototype.invokeOnInitCallbacks = function (e, t) {
                var n,
                  i,
                  s = this.onInitCallbacks.get(t);
                if (s)
                  try {
                    for (
                      var o = r.__values(s), a = o.next();
                      !a.done;
                      a = o.next()
                    ) {
                      var c = a.value;
                      try {
                        c(e, t);
                      } catch (e) {}
                    }
                  } catch (e) {
                    n = { error: e };
                  } finally {
                    try {
                      a && !a.done && (i = o.return) && i.call(o);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
              }),
              (e.prototype.getOrInitializeService = function (e) {
                var t,
                  n = e.instanceIdentifier,
                  r = e.options,
                  i = void 0 === r ? {} : r,
                  s = this.instances.get(n);
                if (
                  !s &&
                  this.component &&
                  ((s = this.component.instanceFactory(this.container, {
                    instanceIdentifier: ((t = n), t === o ? void 0 : t),
                    options: i,
                  })),
                  this.instances.set(n, s),
                  this.instancesOptions.set(n, i),
                  this.invokeOnInitCallbacks(s, n),
                  this.component.onInstanceCreated)
                )
                  try {
                    this.component.onInstanceCreated(this.container, n, s);
                  } catch (e) {}
                return s || null;
              }),
              (e.prototype.normalizeInstanceIdentifier = function (e) {
                return (
                  void 0 === e && (e = o),
                  this.component
                    ? this.component.multipleInstances
                      ? e
                      : o
                    : e
                );
              }),
              (e.prototype.shouldAutoInitialize = function () {
                return (
                  !!this.component &&
                  "EXPLICIT" !== this.component.instantiationMode
                );
              }),
              e
            );
          })(),
          c = (function () {
            function e(e) {
              (this.name = e), (this.providers = new Map());
            }
            return (
              (e.prototype.addComponent = function (e) {
                var t = this.getProvider(e.name);
                if (t.isComponentSet())
                  throw new Error(
                    "Component "
                      .concat(e.name, " has already been registered with ")
                      .concat(this.name)
                  );
                t.setComponent(e);
              }),
              (e.prototype.addOrOverwriteComponent = function (e) {
                this.getProvider(e.name).isComponentSet() &&
                  this.providers.delete(e.name),
                  this.addComponent(e);
              }),
              (e.prototype.getProvider = function (e) {
                if (this.providers.has(e)) return this.providers.get(e);
                var t = new a(e, this);
                return this.providers.set(e, t), t;
              }),
              (e.prototype.getProviders = function () {
                return Array.from(this.providers.values());
              }),
              e
            );
          })();
        (t.Component = s), (t.ComponentContainer = c), (t.Provider = a);
      },
      654: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(583),
          i = n(178),
          s = n(664),
          o = n(766),
          a = n(921);
        const c = "@firebase/firestore";
        class u {
          constructor(e) {
            this.uid = e;
          }
          isAuthenticated() {
            return null != this.uid;
          }
          toKey() {
            return this.isAuthenticated()
              ? "uid:" + this.uid
              : "anonymous-user";
          }
          isEqual(e) {
            return e.uid === this.uid;
          }
        }
        (u.UNAUTHENTICATED = new u(null)),
          (u.GOOGLE_CREDENTIALS = new u("google-credentials-uid")),
          (u.FIRST_PARTY = new u("first-party-uid")),
          (u.MOCK_USER = new u("mock-user"));
        let l = "10.1.0";
        const h = new s.Logger("@firebase/firestore");
        function d() {
          return h.logLevel;
        }
        function f(e, ...t) {
          if (h.logLevel <= s.LogLevel.DEBUG) {
            const n = t.map(m);
            h.debug(`Firestore (${l}): ${e}`, ...n);
          }
        }
        function p(e, ...t) {
          if (h.logLevel <= s.LogLevel.ERROR) {
            const n = t.map(m);
            h.error(`Firestore (${l}): ${e}`, ...n);
          }
        }
        function g(e, ...t) {
          if (h.logLevel <= s.LogLevel.WARN) {
            const n = t.map(m);
            h.warn(`Firestore (${l}): ${e}`, ...n);
          }
        }
        function m(e) {
          if ("string" == typeof e) return e;
          try {
            return (function (e) {
              return JSON.stringify(e);
            })(e);
          } catch (t) {
            return e;
          }
        }
        function y(e = "Unexpected state") {
          const t = `FIRESTORE (${l}) INTERNAL ASSERTION FAILED: ` + e;
          throw (p(t), new Error(t));
        }
        function v(e, t) {
          e || y();
        }
        function w(e, t) {
          return e;
        }
        const b = {
          OK: "ok",
          CANCELLED: "cancelled",
          UNKNOWN: "unknown",
          INVALID_ARGUMENT: "invalid-argument",
          DEADLINE_EXCEEDED: "deadline-exceeded",
          NOT_FOUND: "not-found",
          ALREADY_EXISTS: "already-exists",
          PERMISSION_DENIED: "permission-denied",
          UNAUTHENTICATED: "unauthenticated",
          RESOURCE_EXHAUSTED: "resource-exhausted",
          FAILED_PRECONDITION: "failed-precondition",
          ABORTED: "aborted",
          OUT_OF_RANGE: "out-of-range",
          UNIMPLEMENTED: "unimplemented",
          INTERNAL: "internal",
          UNAVAILABLE: "unavailable",
          DATA_LOSS: "data-loss",
        };
        class _ extends o.FirebaseError {
          constructor(e, t) {
            super(e, t),
              (this.code = e),
              (this.message = t),
              (this.toString = () =>
                `${this.name}: [code=${this.code}]: ${this.message}`);
          }
        }
        class I {
          constructor() {
            this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            });
          }
        }
        class E {
          constructor(e, t) {
            (this.user = t),
              (this.type = "OAuth"),
              (this.headers = new Map()),
              this.headers.set("Authorization", `Bearer ${e}`);
          }
        }
        class S {
          getToken() {
            return Promise.resolve(null);
          }
          invalidateToken() {}
          start(e, t) {
            e.enqueueRetryable(() => t(u.UNAUTHENTICATED));
          }
          shutdown() {}
        }
        class T {
          constructor(e) {
            (this.token = e), (this.changeListener = null);
          }
          getToken() {
            return Promise.resolve(this.token);
          }
          invalidateToken() {}
          start(e, t) {
            (this.changeListener = t),
              e.enqueueRetryable(() => t(this.token.user));
          }
          shutdown() {
            this.changeListener = null;
          }
        }
        class x {
          constructor(e) {
            (this.t = e),
              (this.currentUser = u.UNAUTHENTICATED),
              (this.i = 0),
              (this.forceRefresh = !1),
              (this.auth = null);
          }
          start(e, t) {
            let n = this.i;
            const r = (e) =>
              this.i !== n ? ((n = this.i), t(e)) : Promise.resolve();
            let i = new I();
            this.o = () => {
              this.i++,
                (this.currentUser = this.u()),
                i.resolve(),
                (i = new I()),
                e.enqueueRetryable(() => r(this.currentUser));
            };
            const s = () => {
                const t = i;
                e.enqueueRetryable(async () => {
                  await t.promise, await r(this.currentUser);
                });
              },
              o = (e) => {
                f("FirebaseAuthCredentialsProvider", "Auth detected"),
                  (this.auth = e),
                  this.auth.addAuthTokenListener(this.o),
                  s();
              };
            this.t.onInit((e) => o(e)),
              setTimeout(() => {
                if (!this.auth) {
                  const e = this.t.getImmediate({ optional: !0 });
                  e
                    ? o(e)
                    : (f(
                        "FirebaseAuthCredentialsProvider",
                        "Auth not yet detected"
                      ),
                      i.resolve(),
                      (i = new I()));
                }
              }, 0),
              s();
          }
          getToken() {
            const e = this.i,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth
                    .getToken(t)
                    .then((t) =>
                      this.i !== e
                        ? (f(
                            "FirebaseAuthCredentialsProvider",
                            "getToken aborted due to token change."
                          ),
                          this.getToken())
                        : t
                        ? (v("string" == typeof t.accessToken),
                          new E(t.accessToken, this.currentUser))
                        : null
                    )
                : Promise.resolve(null)
            );
          }
          invalidateToken() {
            this.forceRefresh = !0;
          }
          shutdown() {
            this.auth && this.auth.removeAuthTokenListener(this.o);
          }
          u() {
            const e = this.auth && this.auth.getUid();
            return v(null === e || "string" == typeof e), new u(e);
          }
        }
        class C {
          constructor(e, t, n) {
            (this.l = e),
              (this.h = t),
              (this.P = n),
              (this.type = "FirstParty"),
              (this.user = u.FIRST_PARTY),
              (this.I = new Map());
          }
          T() {
            return this.P ? this.P() : null;
          }
          get headers() {
            this.I.set("X-Goog-AuthUser", this.l);
            const e = this.T();
            return (
              e && this.I.set("Authorization", e),
              this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
              this.I
            );
          }
        }
        class D {
          constructor(e, t, n) {
            (this.l = e), (this.h = t), (this.P = n);
          }
          getToken() {
            return Promise.resolve(new C(this.l, this.h, this.P));
          }
          start(e, t) {
            e.enqueueRetryable(() => t(u.FIRST_PARTY));
          }
          shutdown() {}
          invalidateToken() {}
        }
        class A {
          constructor(e) {
            (this.value = e),
              (this.type = "AppCheck"),
              (this.headers = new Map()),
              e &&
                e.length > 0 &&
                this.headers.set("x-firebase-appcheck", this.value);
          }
        }
        class k {
          constructor(e) {
            (this.A = e),
              (this.forceRefresh = !1),
              (this.appCheck = null),
              (this.R = null);
          }
          start(e, t) {
            const n = (e) => {
              null != e.error &&
                f(
                  "FirebaseAppCheckTokenProvider",
                  `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`
                );
              const n = e.token !== this.R;
              return (
                (this.R = e.token),
                f(
                  "FirebaseAppCheckTokenProvider",
                  `Received ${n ? "new" : "existing"} token.`
                ),
                n ? t(e.token) : Promise.resolve()
              );
            };
            this.o = (t) => {
              e.enqueueRetryable(() => n(t));
            };
            const r = (e) => {
              f("FirebaseAppCheckTokenProvider", "AppCheck detected"),
                (this.appCheck = e),
                this.appCheck.addTokenListener(this.o);
            };
            this.A.onInit((e) => r(e)),
              setTimeout(() => {
                if (!this.appCheck) {
                  const e = this.A.getImmediate({ optional: !0 });
                  e
                    ? r(e)
                    : f(
                        "FirebaseAppCheckTokenProvider",
                        "AppCheck not yet detected"
                      );
                }
              }, 0);
          }
          getToken() {
            const e = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.appCheck
                ? this.appCheck
                    .getToken(e)
                    .then((e) =>
                      e
                        ? (v("string" == typeof e.token),
                          (this.R = e.token),
                          new A(e.token))
                        : null
                    )
                : Promise.resolve(null)
            );
          }
          invalidateToken() {
            this.forceRefresh = !0;
          }
          shutdown() {
            this.appCheck && this.appCheck.removeTokenListener(this.o);
          }
        }
        function N(e) {
          const t =
              "undefined" != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(e);
          if (t && "function" == typeof t.getRandomValues) t.getRandomValues(n);
          else
            for (let t = 0; t < e; t++) n[t] = Math.floor(256 * Math.random());
          return n;
        }
        class O {
          static V() {
            const e = 62 * Math.floor(256 / 62);
            let t = "";
            for (; t.length < 20; ) {
              const n = N(40);
              for (let r = 0; r < n.length; ++r)
                t.length < 20 &&
                  n[r] < e &&
                  (t +=
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                      n[r] % 62
                    ));
            }
            return t;
          }
        }
        function L(e, t) {
          return e < t ? -1 : e > t ? 1 : 0;
        }
        function P(e, t, n) {
          return e.length === t.length && e.every((e, r) => n(e, t[r]));
        }
        function M(e) {
          return e + "\0";
        }
        class R {
          constructor(e, t) {
            if (((this.seconds = e), (this.nanoseconds = t), t < 0))
              throw new _(
                b.INVALID_ARGUMENT,
                "Timestamp nanoseconds out of range: " + t
              );
            if (t >= 1e9)
              throw new _(
                b.INVALID_ARGUMENT,
                "Timestamp nanoseconds out of range: " + t
              );
            if (e < -62135596800)
              throw new _(
                b.INVALID_ARGUMENT,
                "Timestamp seconds out of range: " + e
              );
            if (e >= 253402300800)
              throw new _(
                b.INVALID_ARGUMENT,
                "Timestamp seconds out of range: " + e
              );
          }
          static now() {
            return R.fromMillis(Date.now());
          }
          static fromDate(e) {
            return R.fromMillis(e.getTime());
          }
          static fromMillis(e) {
            const t = Math.floor(e / 1e3),
              n = Math.floor(1e6 * (e - 1e3 * t));
            return new R(t, n);
          }
          toDate() {
            return new Date(this.toMillis());
          }
          toMillis() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }
          _compareTo(e) {
            return this.seconds === e.seconds
              ? L(this.nanoseconds, e.nanoseconds)
              : L(this.seconds, e.seconds);
          }
          isEqual(e) {
            return (
              e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
            );
          }
          toString() {
            return (
              "Timestamp(seconds=" +
              this.seconds +
              ", nanoseconds=" +
              this.nanoseconds +
              ")"
            );
          }
          toJSON() {
            return { seconds: this.seconds, nanoseconds: this.nanoseconds };
          }
          valueOf() {
            const e = this.seconds - -62135596800;
            return (
              String(e).padStart(12, "0") +
              "." +
              String(this.nanoseconds).padStart(9, "0")
            );
          }
        }
        class F {
          constructor(e) {
            this.timestamp = e;
          }
          static fromTimestamp(e) {
            return new F(e);
          }
          static min() {
            return new F(new R(0, 0));
          }
          static max() {
            return new F(new R(253402300799, 999999999));
          }
          compareTo(e) {
            return this.timestamp._compareTo(e.timestamp);
          }
          isEqual(e) {
            return this.timestamp.isEqual(e.timestamp);
          }
          toMicroseconds() {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }
          toString() {
            return "SnapshotVersion(" + this.timestamp.toString() + ")";
          }
          toTimestamp() {
            return this.timestamp;
          }
        }
        class V {
          constructor(e, t, n) {
            void 0 === t ? (t = 0) : t > e.length && y(),
              void 0 === n ? (n = e.length - t) : n > e.length - t && y(),
              (this.segments = e),
              (this.offset = t),
              (this.len = n);
          }
          get length() {
            return this.len;
          }
          isEqual(e) {
            return 0 === V.comparator(this, e);
          }
          child(e) {
            const t = this.segments.slice(this.offset, this.limit());
            return (
              e instanceof V
                ? e.forEach((e) => {
                    t.push(e);
                  })
                : t.push(e),
              this.construct(t)
            );
          }
          limit() {
            return this.offset + this.length;
          }
          popFirst(e) {
            return (
              (e = void 0 === e ? 1 : e),
              this.construct(this.segments, this.offset + e, this.length - e)
            );
          }
          popLast() {
            return this.construct(this.segments, this.offset, this.length - 1);
          }
          firstSegment() {
            return this.segments[this.offset];
          }
          lastSegment() {
            return this.get(this.length - 1);
          }
          get(e) {
            return this.segments[this.offset + e];
          }
          isEmpty() {
            return 0 === this.length;
          }
          isPrefixOf(e) {
            if (e.length < this.length) return !1;
            for (let t = 0; t < this.length; t++)
              if (this.get(t) !== e.get(t)) return !1;
            return !0;
          }
          isImmediateParentOf(e) {
            if (this.length + 1 !== e.length) return !1;
            for (let t = 0; t < this.length; t++)
              if (this.get(t) !== e.get(t)) return !1;
            return !0;
          }
          forEach(e) {
            for (let t = this.offset, n = this.limit(); t < n; t++)
              e(this.segments[t]);
          }
          toArray() {
            return this.segments.slice(this.offset, this.limit());
          }
          static comparator(e, t) {
            const n = Math.min(e.length, t.length);
            for (let r = 0; r < n; r++) {
              const n = e.get(r),
                i = t.get(r);
              if (n < i) return -1;
              if (n > i) return 1;
            }
            return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
          }
        }
        class B extends V {
          construct(e, t, n) {
            return new B(e, t, n);
          }
          canonicalString() {
            return this.toArray().join("/");
          }
          toString() {
            return this.canonicalString();
          }
          static fromString(...e) {
            const t = [];
            for (const n of e) {
              if (n.indexOf("//") >= 0)
                throw new _(
                  b.INVALID_ARGUMENT,
                  `Invalid segment (${n}). Paths must not contain // in them.`
                );
              t.push(...n.split("/").filter((e) => e.length > 0));
            }
            return new B(t);
          }
          static emptyPath() {
            return new B([]);
          }
        }
        const U = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
        class j extends V {
          construct(e, t, n) {
            return new j(e, t, n);
          }
          static isValidIdentifier(e) {
            return U.test(e);
          }
          canonicalString() {
            return this.toArray()
              .map(
                (e) => (
                  (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                  j.isValidIdentifier(e) || (e = "`" + e + "`"),
                  e
                )
              )
              .join(".");
          }
          toString() {
            return this.canonicalString();
          }
          isKeyField() {
            return 1 === this.length && "__name__" === this.get(0);
          }
          static keyField() {
            return new j(["__name__"]);
          }
          static fromServerFormat(e) {
            const t = [];
            let n = "",
              r = 0;
            const i = () => {
              if (0 === n.length)
                throw new _(
                  b.INVALID_ARGUMENT,
                  `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
                );
              t.push(n), (n = "");
            };
            let s = !1;
            for (; r < e.length; ) {
              const t = e[r];
              if ("\\" === t) {
                if (r + 1 === e.length)
                  throw new _(
                    b.INVALID_ARGUMENT,
                    "Path has trailing escape character: " + e
                  );
                const t = e[r + 1];
                if ("\\" !== t && "." !== t && "`" !== t)
                  throw new _(
                    b.INVALID_ARGUMENT,
                    "Path has invalid escape sequence: " + e
                  );
                (n += t), (r += 2);
              } else
                "`" === t
                  ? ((s = !s), r++)
                  : "." !== t || s
                  ? ((n += t), r++)
                  : (i(), r++);
            }
            if ((i(), s))
              throw new _(b.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
            return new j(t);
          }
          static emptyPath() {
            return new j([]);
          }
        }
        class q {
          constructor(e) {
            this.path = e;
          }
          static fromPath(e) {
            return new q(B.fromString(e));
          }
          static fromName(e) {
            return new q(B.fromString(e).popFirst(5));
          }
          static empty() {
            return new q(B.emptyPath());
          }
          get collectionGroup() {
            return this.path.popLast().lastSegment();
          }
          hasCollectionId(e) {
            return (
              this.path.length >= 2 && this.path.get(this.path.length - 2) === e
            );
          }
          getCollectionGroup() {
            return this.path.get(this.path.length - 2);
          }
          getCollectionPath() {
            return this.path.popLast();
          }
          isEqual(e) {
            return null !== e && 0 === B.comparator(this.path, e.path);
          }
          toString() {
            return this.path.toString();
          }
          static comparator(e, t) {
            return B.comparator(e.path, t.path);
          }
          static isDocumentKey(e) {
            return e.length % 2 == 0;
          }
          static fromSegments(e) {
            return new q(new B(e.slice()));
          }
        }
        class z {
          constructor(e, t, n, r) {
            (this.indexId = e),
              (this.collectionGroup = t),
              (this.fields = n),
              (this.indexState = r);
          }
        }
        function G(e) {
          return e.fields.find((e) => 2 === e.kind);
        }
        function K(e) {
          return e.fields.filter((e) => 2 !== e.kind);
        }
        function $(e, t) {
          let n = L(e.collectionGroup, t.collectionGroup);
          if (0 !== n) return n;
          for (let r = 0; r < Math.min(e.fields.length, t.fields.length); ++r)
            if (((n = H(e.fields[r], t.fields[r])), 0 !== n)) return n;
          return L(e.fields.length, t.fields.length);
        }
        z.UNKNOWN_ID = -1;
        class Q {
          constructor(e, t) {
            (this.fieldPath = e), (this.kind = t);
          }
        }
        function H(e, t) {
          const n = j.comparator(e.fieldPath, t.fieldPath);
          return 0 !== n ? n : L(e.kind, t.kind);
        }
        class W {
          constructor(e, t) {
            (this.sequenceNumber = e), (this.offset = t);
          }
          static empty() {
            return new W(0, Y.min());
          }
        }
        function J(e, t) {
          const n = e.toTimestamp().seconds,
            r = e.toTimestamp().nanoseconds + 1,
            i = F.fromTimestamp(1e9 === r ? new R(n + 1, 0) : new R(n, r));
          return new Y(i, q.empty(), t);
        }
        function X(e) {
          return new Y(e.readTime, e.key, -1);
        }
        class Y {
          constructor(e, t, n) {
            (this.readTime = e),
              (this.documentKey = t),
              (this.largestBatchId = n);
          }
          static min() {
            return new Y(F.min(), q.empty(), -1);
          }
          static max() {
            return new Y(F.max(), q.empty(), -1);
          }
        }
        function Z(e, t) {
          let n = e.readTime.compareTo(t.readTime);
          return 0 !== n
            ? n
            : ((n = q.comparator(e.documentKey, t.documentKey)),
              0 !== n ? n : L(e.largestBatchId, t.largestBatchId));
        }
        const ee =
          "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
        class te {
          constructor() {
            this.onCommittedListeners = [];
          }
          addOnCommittedListener(e) {
            this.onCommittedListeners.push(e);
          }
          raiseOnCommittedEvent() {
            this.onCommittedListeners.forEach((e) => e());
          }
        }
        async function ne(e) {
          if (e.code !== b.FAILED_PRECONDITION || e.message !== ee) throw e;
          f("LocalStore", "Unexpectedly lost primary lease");
        }
        class re {
          constructor(e) {
            (this.nextCallback = null),
              (this.catchCallback = null),
              (this.result = void 0),
              (this.error = void 0),
              (this.isDone = !1),
              (this.callbackAttached = !1),
              e(
                (e) => {
                  (this.isDone = !0),
                    (this.result = e),
                    this.nextCallback && this.nextCallback(e);
                },
                (e) => {
                  (this.isDone = !0),
                    (this.error = e),
                    this.catchCallback && this.catchCallback(e);
                }
              );
          }
          catch(e) {
            return this.next(void 0, e);
          }
          next(e, t) {
            return (
              this.callbackAttached && y(),
              (this.callbackAttached = !0),
              this.isDone
                ? this.error
                  ? this.wrapFailure(t, this.error)
                  : this.wrapSuccess(e, this.result)
                : new re((n, r) => {
                    (this.nextCallback = (t) => {
                      this.wrapSuccess(e, t).next(n, r);
                    }),
                      (this.catchCallback = (e) => {
                        this.wrapFailure(t, e).next(n, r);
                      });
                  })
            );
          }
          toPromise() {
            return new Promise((e, t) => {
              this.next(e, t);
            });
          }
          wrapUserFunction(e) {
            try {
              const t = e();
              return t instanceof re ? t : re.resolve(t);
            } catch (e) {
              return re.reject(e);
            }
          }
          wrapSuccess(e, t) {
            return e ? this.wrapUserFunction(() => e(t)) : re.resolve(t);
          }
          wrapFailure(e, t) {
            return e ? this.wrapUserFunction(() => e(t)) : re.reject(t);
          }
          static resolve(e) {
            return new re((t, n) => {
              t(e);
            });
          }
          static reject(e) {
            return new re((t, n) => {
              n(e);
            });
          }
          static waitFor(e) {
            return new re((t, n) => {
              let r = 0,
                i = 0,
                s = !1;
              e.forEach((e) => {
                ++r,
                  e.next(
                    () => {
                      ++i, s && i === r && t();
                    },
                    (e) => n(e)
                  );
              }),
                (s = !0),
                i === r && t();
            });
          }
          static or(e) {
            let t = re.resolve(!1);
            for (const n of e) t = t.next((e) => (e ? re.resolve(e) : n()));
            return t;
          }
          static forEach(e, t) {
            const n = [];
            return (
              e.forEach((e, r) => {
                n.push(t.call(this, e, r));
              }),
              this.waitFor(n)
            );
          }
          static mapArray(e, t) {
            return new re((n, r) => {
              const i = e.length,
                s = new Array(i);
              let o = 0;
              for (let a = 0; a < i; a++) {
                const c = a;
                t(e[c]).next(
                  (e) => {
                    (s[c] = e), ++o, o === i && n(s);
                  },
                  (e) => r(e)
                );
              }
            });
          }
          static doWhile(e, t) {
            return new re((n, r) => {
              const i = () => {
                !0 === e()
                  ? t().next(() => {
                      i();
                    }, r)
                  : n();
              };
              i();
            });
          }
        }
        class ie {
          constructor(e, t) {
            (this.action = e),
              (this.transaction = t),
              (this.aborted = !1),
              (this.m = new I()),
              (this.transaction.oncomplete = () => {
                this.m.resolve();
              }),
              (this.transaction.onabort = () => {
                t.error ? this.m.reject(new ae(e, t.error)) : this.m.resolve();
              }),
              (this.transaction.onerror = (t) => {
                const n = de(t.target.error);
                this.m.reject(new ae(e, n));
              });
          }
          static open(e, t, n, r) {
            try {
              return new ie(t, e.transaction(r, n));
            } catch (e) {
              throw new ae(t, e);
            }
          }
          get g() {
            return this.m.promise;
          }
          abort(e) {
            e && this.m.reject(e),
              this.aborted ||
                (f(
                  "SimpleDb",
                  "Aborting transaction:",
                  e ? e.message : "Client-initiated abort"
                ),
                (this.aborted = !0),
                this.transaction.abort());
          }
          p() {
            const e = this.transaction;
            this.aborted || "function" != typeof e.commit || e.commit();
          }
          store(e) {
            const t = this.transaction.objectStore(e);
            return new ue(t);
          }
        }
        class se {
          constructor(e, t, n) {
            (this.name = e),
              (this.version = t),
              (this.S = n),
              12.2 === se.D(o.getUA()) &&
                p(
                  "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
                );
          }
          static delete(e) {
            return (
              f("SimpleDb", "Removing database:", e),
              le(window.indexedDB.deleteDatabase(e)).toPromise()
            );
          }
          static v() {
            if (!o.isIndexedDBAvailable()) return !1;
            if (se.C()) return !0;
            const e = o.getUA(),
              t = se.D(e),
              n = 0 < t && t < 10,
              r = se.F(e),
              i = 0 < r && r < 4.5;
            return !(
              e.indexOf("MSIE ") > 0 ||
              e.indexOf("Trident/") > 0 ||
              e.indexOf("Edge/") > 0 ||
              n ||
              i
            );
          }
          static C() {
            var e;
            return (
              "undefined" != typeof process &&
              "YES" ===
                (null === (e = process.env) || void 0 === e ? void 0 : e.M)
            );
          }
          static O(e, t) {
            return e.store(t);
          }
          static D(e) {
            const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
              n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
            return Number(n);
          }
          static F(e) {
            const t = e.match(/Android ([\d.]+)/i),
              n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
            return Number(n);
          }
          async N(e) {
            return (
              this.db ||
                (f("SimpleDb", "Opening database:", this.name),
                (this.db = await new Promise((t, n) => {
                  const r = indexedDB.open(this.name, this.version);
                  (r.onsuccess = (e) => {
                    const n = e.target.result;
                    t(n);
                  }),
                    (r.onblocked = () => {
                      n(
                        new ae(
                          e,
                          "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."
                        )
                      );
                    }),
                    (r.onerror = (t) => {
                      const r = t.target.error;
                      "VersionError" === r.name
                        ? n(
                            new _(
                              b.FAILED_PRECONDITION,
                              "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh."
                            )
                          )
                        : "InvalidStateError" === r.name
                        ? n(
                            new _(
                              b.FAILED_PRECONDITION,
                              "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " +
                                r
                            )
                          )
                        : n(new ae(e, r));
                    }),
                    (r.onupgradeneeded = (e) => {
                      f(
                        "SimpleDb",
                        'Database "' +
                          this.name +
                          '" requires upgrade from version:',
                        e.oldVersion
                      );
                      const t = e.target.result;
                      this.S.B(
                        t,
                        r.transaction,
                        e.oldVersion,
                        this.version
                      ).next(() => {
                        f(
                          "SimpleDb",
                          "Database upgrade to version " +
                            this.version +
                            " complete"
                        );
                      });
                    });
                }))),
              this.L && (this.db.onversionchange = (e) => this.L(e)),
              this.db
            );
          }
          k(e) {
            (this.L = e), this.db && (this.db.onversionchange = (t) => e(t));
          }
          async runTransaction(e, t, n, r) {
            const i = "readonly" === t;
            let s = 0;
            for (;;) {
              ++s;
              try {
                this.db = await this.N(e);
                const t = ie.open(this.db, e, i ? "readonly" : "readwrite", n),
                  s = r(t)
                    .next((e) => (t.p(), e))
                    .catch((e) => (t.abort(e), re.reject(e)))
                    .toPromise();
                return s.catch(() => {}), await t.g, s;
              } catch (e) {
                const t = e,
                  n = "FirebaseError" !== t.name && s < 3;
                if (
                  (f(
                    "SimpleDb",
                    "Transaction failed with error:",
                    t.message,
                    "Retrying:",
                    n
                  ),
                  this.close(),
                  !n)
                )
                  return Promise.reject(t);
              }
            }
          }
          close() {
            this.db && this.db.close(), (this.db = void 0);
          }
        }
        class oe {
          constructor(e) {
            (this.q = e), (this.K = !1), (this.$ = null);
          }
          get isDone() {
            return this.K;
          }
          get U() {
            return this.$;
          }
          set cursor(e) {
            this.q = e;
          }
          done() {
            this.K = !0;
          }
          W(e) {
            this.$ = e;
          }
          delete() {
            return le(this.q.delete());
          }
        }
        class ae extends _ {
          constructor(e, t) {
            super(b.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`),
              (this.name = "IndexedDbTransactionError");
          }
        }
        function ce(e) {
          return "IndexedDbTransactionError" === e.name;
        }
        class ue {
          constructor(e) {
            this.store = e;
          }
          put(e, t) {
            let n;
            return (
              void 0 !== t
                ? (f("SimpleDb", "PUT", this.store.name, e, t),
                  (n = this.store.put(t, e)))
                : (f("SimpleDb", "PUT", this.store.name, "<auto-key>", e),
                  (n = this.store.put(e))),
              le(n)
            );
          }
          add(e) {
            return (
              f("SimpleDb", "ADD", this.store.name, e, e), le(this.store.add(e))
            );
          }
          get(e) {
            return le(this.store.get(e)).next(
              (t) => (
                void 0 === t && (t = null),
                f("SimpleDb", "GET", this.store.name, e, t),
                t
              )
            );
          }
          delete(e) {
            return (
              f("SimpleDb", "DELETE", this.store.name, e),
              le(this.store.delete(e))
            );
          }
          count() {
            return (
              f("SimpleDb", "COUNT", this.store.name), le(this.store.count())
            );
          }
          G(e, t) {
            const n = this.options(e, t);
            if (n.index || "function" != typeof this.store.getAll) {
              const e = this.cursor(n),
                t = [];
              return this.j(e, (e, n) => {
                t.push(n);
              }).next(() => t);
            }
            {
              const e = this.store.getAll(n.range);
              return new re((t, n) => {
                (e.onerror = (e) => {
                  n(e.target.error);
                }),
                  (e.onsuccess = (e) => {
                    t(e.target.result);
                  });
              });
            }
          }
          H(e, t) {
            const n = this.store.getAll(e, null === t ? void 0 : t);
            return new re((e, t) => {
              (n.onerror = (e) => {
                t(e.target.error);
              }),
                (n.onsuccess = (t) => {
                  e(t.target.result);
                });
            });
          }
          J(e, t) {
            f("SimpleDb", "DELETE ALL", this.store.name);
            const n = this.options(e, t);
            n.Y = !1;
            const r = this.cursor(n);
            return this.j(r, (e, t, n) => n.delete());
          }
          Z(e, t) {
            let n;
            t ? (n = e) : ((n = {}), (t = e));
            const r = this.cursor(n);
            return this.j(r, t);
          }
          X(e) {
            const t = this.cursor({});
            return new re((n, r) => {
              (t.onerror = (e) => {
                const t = de(e.target.error);
                r(t);
              }),
                (t.onsuccess = (t) => {
                  const r = t.target.result;
                  r
                    ? e(r.primaryKey, r.value).next((e) => {
                        e ? r.continue() : n();
                      })
                    : n();
                });
            });
          }
          j(e, t) {
            const n = [];
            return new re((r, i) => {
              (e.onerror = (e) => {
                i(e.target.error);
              }),
                (e.onsuccess = (e) => {
                  const i = e.target.result;
                  if (!i) return void r();
                  const s = new oe(i),
                    o = t(i.primaryKey, i.value, s);
                  if (o instanceof re) {
                    const e = o.catch((e) => (s.done(), re.reject(e)));
                    n.push(e);
                  }
                  s.isDone
                    ? r()
                    : null === s.U
                    ? i.continue()
                    : i.continue(s.U);
                });
            }).next(() => re.waitFor(n));
          }
          options(e, t) {
            let n;
            return (
              void 0 !== e && ("string" == typeof e ? (n = e) : (t = e)),
              { index: n, range: t }
            );
          }
          cursor(e) {
            let t = "next";
            if ((e.reverse && (t = "prev"), e.index)) {
              const n = this.store.index(e.index);
              return e.Y
                ? n.openKeyCursor(e.range, t)
                : n.openCursor(e.range, t);
            }
            return this.store.openCursor(e.range, t);
          }
        }
        function le(e) {
          return new re((t, n) => {
            (e.onsuccess = (e) => {
              const n = e.target.result;
              t(n);
            }),
              (e.onerror = (e) => {
                const t = de(e.target.error);
                n(t);
              });
          });
        }
        let he = !1;
        function de(e) {
          const t = se.D(o.getUA());
          if (t >= 12.2 && t < 13) {
            const t =
              "An internal error was encountered in the Indexed Database server";
            if (e.message.indexOf(t) >= 0) {
              const e = new _(
                "internal",
                `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`
              );
              return (
                he ||
                  ((he = !0),
                  setTimeout(() => {
                    throw e;
                  }, 0)),
                e
              );
            }
          }
          return e;
        }
        class fe {
          constructor(e, t) {
            (this.asyncQueue = e), (this.ee = t), (this.task = null);
          }
          start() {
            this.te(15e3);
          }
          stop() {
            this.task && (this.task.cancel(), (this.task = null));
          }
          get started() {
            return null !== this.task;
          }
          te(e) {
            f("IndexBackiller", `Scheduled in ${e}ms`),
              (this.task = this.asyncQueue.enqueueAfterDelay(
                "index_backfill",
                e,
                async () => {
                  this.task = null;
                  try {
                    f(
                      "IndexBackiller",
                      `Documents written: ${await this.ee.ne()}`
                    );
                  } catch (e) {
                    ce(e)
                      ? f(
                          "IndexBackiller",
                          "Ignoring IndexedDB error during index backfill: ",
                          e
                        )
                      : await ne(e);
                  }
                  await this.te(6e4);
                }
              ));
          }
        }
        class pe {
          constructor(e, t) {
            (this.localStore = e), (this.persistence = t);
          }
          async ne(e = 50) {
            return this.persistence.runTransaction(
              "Backfill Indexes",
              "readwrite-primary",
              (t) => this.re(t, e)
            );
          }
          re(e, t) {
            const n = new Set();
            let r = t,
              i = !0;
            return re
              .doWhile(
                () => !0 === i && r > 0,
                () =>
                  this.localStore.indexManager
                    .getNextCollectionGroupToUpdate(e)
                    .next((t) => {
                      if (null !== t && !n.has(t))
                        return (
                          f("IndexBackiller", `Processing collection: ${t}`),
                          this.ie(e, t, r).next((e) => {
                            (r -= e), n.add(t);
                          })
                        );
                      i = !1;
                    })
              )
              .next(() => t - r);
          }
          ie(e, t, n) {
            return this.localStore.indexManager
              .getMinOffsetFromCollectionGroup(e, t)
              .next((r) =>
                this.localStore.localDocuments
                  .getNextDocuments(e, t, r, n)
                  .next((n) => {
                    const i = n.changes;
                    return this.localStore.indexManager
                      .updateIndexEntries(e, i)
                      .next(() => this.se(r, n))
                      .next(
                        (n) => (
                          f("IndexBackiller", `Updating offset: ${n}`),
                          this.localStore.indexManager.updateCollectionGroup(
                            e,
                            t,
                            n
                          )
                        )
                      )
                      .next(() => i.size);
                  })
              );
          }
          se(e, t) {
            let n = e;
            return (
              t.changes.forEach((e, t) => {
                const r = X(t);
                Z(r, n) > 0 && (n = r);
              }),
              new Y(
                n.readTime,
                n.documentKey,
                Math.max(t.batchId, e.largestBatchId)
              )
            );
          }
        }
        class ge {
          constructor(e, t) {
            (this.previousValue = e),
              t &&
                ((t.sequenceNumberHandler = (e) => this.oe(e)),
                (this._e = (e) => t.writeSequenceNumber(e)));
          }
          oe(e) {
            return (
              (this.previousValue = Math.max(e, this.previousValue)),
              this.previousValue
            );
          }
          next() {
            const e = ++this.previousValue;
            return this._e && this._e(e), e;
          }
        }
        function me(e) {
          return null == e;
        }
        function ye(e) {
          return 0 === e && 1 / e == -1 / 0;
        }
        function ve(e) {
          return (
            "number" == typeof e &&
            Number.isInteger(e) &&
            !ye(e) &&
            e <= Number.MAX_SAFE_INTEGER &&
            e >= Number.MIN_SAFE_INTEGER
          );
        }
        function we(e) {
          let t = "";
          for (let n = 0; n < e.length; n++)
            t.length > 0 && (t = _e(t)), (t = be(e.get(n), t));
          return _e(t);
        }
        function be(e, t) {
          let n = t;
          const r = e.length;
          for (let t = 0; t < r; t++) {
            const r = e.charAt(t);
            switch (r) {
              case "\0":
                n += "";
                break;
              case "":
                n += "";
                break;
              default:
                n += r;
            }
          }
          return n;
        }
        function _e(e) {
          return e + "";
        }
        function Ie(e) {
          const t = e.length;
          if ((v(t >= 2), 2 === t))
            return v("" === e.charAt(0) && "" === e.charAt(1)), B.emptyPath();
          const n = t - 2,
            r = [];
          let i = "";
          for (let s = 0; s < t; ) {
            const t = e.indexOf("", s);
            switch (((t < 0 || t > n) && y(), e.charAt(t + 1))) {
              case "":
                const n = e.substring(s, t);
                let o;
                0 === i.length ? (o = n) : ((i += n), (o = i), (i = "")),
                  r.push(o);
                break;
              case "":
                (i += e.substring(s, t)), (i += "\0");
                break;
              case "":
                i += e.substring(s, t + 1);
                break;
              default:
                y();
            }
            s = t + 2;
          }
          return new B(r);
        }
        ge.ae = -1;
        const Ee = ["userId", "batchId"];
        function Se(e, t) {
          return [e, we(t)];
        }
        function Te(e, t, n) {
          return [e, we(t), n];
        }
        const xe = {},
          Ce = ["prefixPath", "collectionGroup", "readTime", "documentId"],
          De = ["prefixPath", "collectionGroup", "documentId"],
          Ae = ["collectionGroup", "readTime", "prefixPath", "documentId"],
          ke = ["canonicalId", "targetId"],
          Ne = ["targetId", "path"],
          Oe = ["path", "targetId"],
          Le = ["collectionId", "parent"],
          Pe = ["indexId", "uid"],
          Me = ["uid", "sequenceNumber"],
          Re = [
            "indexId",
            "uid",
            "arrayValue",
            "directionalValue",
            "orderedDocumentKey",
            "documentKey",
          ],
          Fe = ["indexId", "uid", "orderedDocumentKey"],
          Ve = ["userId", "collectionPath", "documentId"],
          Be = ["userId", "collectionPath", "largestBatchId"],
          Ue = ["userId", "collectionGroup", "largestBatchId"],
          je = [
            "mutationQueues",
            "mutations",
            "documentMutations",
            "remoteDocuments",
            "targets",
            "owner",
            "targetGlobal",
            "targetDocuments",
            "clientMetadata",
            "remoteDocumentGlobal",
            "collectionParents",
            "bundles",
            "namedQueries",
          ],
          qe = [...je, "documentOverlays"],
          ze = [
            "mutationQueues",
            "mutations",
            "documentMutations",
            "remoteDocumentsV14",
            "targets",
            "owner",
            "targetGlobal",
            "targetDocuments",
            "clientMetadata",
            "remoteDocumentGlobal",
            "collectionParents",
            "bundles",
            "namedQueries",
            "documentOverlays",
          ],
          Ge = ze,
          Ke = [...Ge, "indexConfiguration", "indexState", "indexEntries"];
        class $e extends te {
          constructor(e, t) {
            super(), (this.ue = e), (this.currentSequenceNumber = t);
          }
        }
        function Qe(e, t) {
          const n = w(e);
          return se.O(n.ue, t);
        }
        function He(e) {
          let t = 0;
          for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && t++;
          return t;
        }
        function We(e, t) {
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
        }
        function Je(e) {
          for (const t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
          return !0;
        }
        class Xe {
          constructor(e, t) {
            (this.comparator = e), (this.root = t || Ze.EMPTY);
          }
          insert(e, t) {
            return new Xe(
              this.comparator,
              this.root
                .insert(e, t, this.comparator)
                .copy(null, null, Ze.BLACK, null, null)
            );
          }
          remove(e) {
            return new Xe(
              this.comparator,
              this.root
                .remove(e, this.comparator)
                .copy(null, null, Ze.BLACK, null, null)
            );
          }
          get(e) {
            let t = this.root;
            for (; !t.isEmpty(); ) {
              const n = this.comparator(e, t.key);
              if (0 === n) return t.value;
              n < 0 ? (t = t.left) : n > 0 && (t = t.right);
            }
            return null;
          }
          indexOf(e) {
            let t = 0,
              n = this.root;
            for (; !n.isEmpty(); ) {
              const r = this.comparator(e, n.key);
              if (0 === r) return t + n.left.size;
              r < 0 ? (n = n.left) : ((t += n.left.size + 1), (n = n.right));
            }
            return -1;
          }
          isEmpty() {
            return this.root.isEmpty();
          }
          get size() {
            return this.root.size;
          }
          minKey() {
            return this.root.minKey();
          }
          maxKey() {
            return this.root.maxKey();
          }
          inorderTraversal(e) {
            return this.root.inorderTraversal(e);
          }
          forEach(e) {
            this.inorderTraversal((t, n) => (e(t, n), !1));
          }
          toString() {
            const e = [];
            return (
              this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), !1)),
              `{${e.join(", ")}}`
            );
          }
          reverseTraversal(e) {
            return this.root.reverseTraversal(e);
          }
          getIterator() {
            return new Ye(this.root, null, this.comparator, !1);
          }
          getIteratorFrom(e) {
            return new Ye(this.root, e, this.comparator, !1);
          }
          getReverseIterator() {
            return new Ye(this.root, null, this.comparator, !0);
          }
          getReverseIteratorFrom(e) {
            return new Ye(this.root, e, this.comparator, !0);
          }
        }
        class Ye {
          constructor(e, t, n, r) {
            (this.isReverse = r), (this.nodeStack = []);
            let i = 1;
            for (; !e.isEmpty(); )
              if (((i = t ? n(e.key, t) : 1), t && r && (i *= -1), i < 0))
                e = this.isReverse ? e.left : e.right;
              else {
                if (0 === i) {
                  this.nodeStack.push(e);
                  break;
                }
                this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
              }
          }
          getNext() {
            let e = this.nodeStack.pop();
            const t = { key: e.key, value: e.value };
            if (this.isReverse)
              for (e = e.left; !e.isEmpty(); )
                this.nodeStack.push(e), (e = e.right);
            else
              for (e = e.right; !e.isEmpty(); )
                this.nodeStack.push(e), (e = e.left);
            return t;
          }
          hasNext() {
            return this.nodeStack.length > 0;
          }
          peek() {
            if (0 === this.nodeStack.length) return null;
            const e = this.nodeStack[this.nodeStack.length - 1];
            return { key: e.key, value: e.value };
          }
        }
        class Ze {
          constructor(e, t, n, r, i) {
            (this.key = e),
              (this.value = t),
              (this.color = null != n ? n : Ze.RED),
              (this.left = null != r ? r : Ze.EMPTY),
              (this.right = null != i ? i : Ze.EMPTY),
              (this.size = this.left.size + 1 + this.right.size);
          }
          copy(e, t, n, r, i) {
            return new Ze(
              null != e ? e : this.key,
              null != t ? t : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right
            );
          }
          isEmpty() {
            return !1;
          }
          inorderTraversal(e) {
            return (
              this.left.inorderTraversal(e) ||
              e(this.key, this.value) ||
              this.right.inorderTraversal(e)
            );
          }
          reverseTraversal(e) {
            return (
              this.right.reverseTraversal(e) ||
              e(this.key, this.value) ||
              this.left.reverseTraversal(e)
            );
          }
          min() {
            return this.left.isEmpty() ? this : this.left.min();
          }
          minKey() {
            return this.min().key;
          }
          maxKey() {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
          }
          insert(e, t, n) {
            let r = this;
            const i = n(e, r.key);
            return (
              (r =
                i < 0
                  ? r.copy(null, null, null, r.left.insert(e, t, n), null)
                  : 0 === i
                  ? r.copy(null, t, null, null, null)
                  : r.copy(null, null, null, null, r.right.insert(e, t, n))),
              r.fixUp()
            );
          }
          removeMin() {
            if (this.left.isEmpty()) return Ze.EMPTY;
            let e = this;
            return (
              e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
              (e = e.copy(null, null, null, e.left.removeMin(), null)),
              e.fixUp()
            );
          }
          remove(e, t) {
            let n,
              r = this;
            if (t(e, r.key) < 0)
              r.left.isEmpty() ||
                r.left.isRed() ||
                r.left.left.isRed() ||
                (r = r.moveRedLeft()),
                (r = r.copy(null, null, null, r.left.remove(e, t), null));
            else {
              if (
                (r.left.isRed() && (r = r.rotateRight()),
                r.right.isEmpty() ||
                  r.right.isRed() ||
                  r.right.left.isRed() ||
                  (r = r.moveRedRight()),
                0 === t(e, r.key))
              ) {
                if (r.right.isEmpty()) return Ze.EMPTY;
                (n = r.right.min()),
                  (r = r.copy(n.key, n.value, null, null, r.right.removeMin()));
              }
              r = r.copy(null, null, null, null, r.right.remove(e, t));
            }
            return r.fixUp();
          }
          isRed() {
            return this.color;
          }
          fixUp() {
            let e = this;
            return (
              e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
              e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
              e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
              e
            );
          }
          moveRedLeft() {
            let e = this.colorFlip();
            return (
              e.right.left.isRed() &&
                ((e = e.copy(null, null, null, null, e.right.rotateRight())),
                (e = e.rotateLeft()),
                (e = e.colorFlip())),
              e
            );
          }
          moveRedRight() {
            let e = this.colorFlip();
            return (
              e.left.left.isRed() &&
                ((e = e.rotateRight()), (e = e.colorFlip())),
              e
            );
          }
          rotateLeft() {
            const e = this.copy(null, null, Ze.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, e, null);
          }
          rotateRight() {
            const e = this.copy(null, null, Ze.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, e);
          }
          colorFlip() {
            const e = this.left.copy(null, null, !this.left.color, null, null),
              t = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, e, t);
          }
          checkMaxDepth() {
            const e = this.check();
            return Math.pow(2, e) <= this.size + 1;
          }
          check() {
            if (this.isRed() && this.left.isRed()) throw y();
            if (this.right.isRed()) throw y();
            const e = this.left.check();
            if (e !== this.right.check()) throw y();
            return e + (this.isRed() ? 0 : 1);
          }
        }
        (Ze.EMPTY = null),
          (Ze.RED = !0),
          (Ze.BLACK = !1),
          (Ze.EMPTY = new (class {
            constructor() {
              this.size = 0;
            }
            get key() {
              throw y();
            }
            get value() {
              throw y();
            }
            get color() {
              throw y();
            }
            get left() {
              throw y();
            }
            get right() {
              throw y();
            }
            copy(e, t, n, r, i) {
              return this;
            }
            insert(e, t, n) {
              return new Ze(e, t);
            }
            remove(e, t) {
              return this;
            }
            isEmpty() {
              return !0;
            }
            inorderTraversal(e) {
              return !1;
            }
            reverseTraversal(e) {
              return !1;
            }
            minKey() {
              return null;
            }
            maxKey() {
              return null;
            }
            isRed() {
              return !1;
            }
            checkMaxDepth() {
              return !0;
            }
            check() {
              return 0;
            }
          })());
        class et {
          constructor(e) {
            (this.comparator = e), (this.data = new Xe(this.comparator));
          }
          has(e) {
            return null !== this.data.get(e);
          }
          first() {
            return this.data.minKey();
          }
          last() {
            return this.data.maxKey();
          }
          get size() {
            return this.data.size;
          }
          indexOf(e) {
            return this.data.indexOf(e);
          }
          forEach(e) {
            this.data.inorderTraversal((t, n) => (e(t), !1));
          }
          forEachInRange(e, t) {
            const n = this.data.getIteratorFrom(e[0]);
            for (; n.hasNext(); ) {
              const r = n.getNext();
              if (this.comparator(r.key, e[1]) >= 0) return;
              t(r.key);
            }
          }
          forEachWhile(e, t) {
            let n;
            for (
              n =
                void 0 !== t
                  ? this.data.getIteratorFrom(t)
                  : this.data.getIterator();
              n.hasNext();

            )
              if (!e(n.getNext().key)) return;
          }
          firstAfterOrEqual(e) {
            const t = this.data.getIteratorFrom(e);
            return t.hasNext() ? t.getNext().key : null;
          }
          getIterator() {
            return new tt(this.data.getIterator());
          }
          getIteratorFrom(e) {
            return new tt(this.data.getIteratorFrom(e));
          }
          add(e) {
            return this.copy(this.data.remove(e).insert(e, !0));
          }
          delete(e) {
            return this.has(e) ? this.copy(this.data.remove(e)) : this;
          }
          isEmpty() {
            return this.data.isEmpty();
          }
          unionWith(e) {
            let t = this;
            return (
              t.size < e.size && ((t = e), (e = this)),
              e.forEach((e) => {
                t = t.add(e);
              }),
              t
            );
          }
          isEqual(e) {
            if (!(e instanceof et)) return !1;
            if (this.size !== e.size) return !1;
            const t = this.data.getIterator(),
              n = e.data.getIterator();
            for (; t.hasNext(); ) {
              const e = t.getNext().key,
                r = n.getNext().key;
              if (0 !== this.comparator(e, r)) return !1;
            }
            return !0;
          }
          toArray() {
            const e = [];
            return (
              this.forEach((t) => {
                e.push(t);
              }),
              e
            );
          }
          toString() {
            const e = [];
            return (
              this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")"
            );
          }
          copy(e) {
            const t = new et(this.comparator);
            return (t.data = e), t;
          }
        }
        class tt {
          constructor(e) {
            this.iter = e;
          }
          getNext() {
            return this.iter.getNext().key;
          }
          hasNext() {
            return this.iter.hasNext();
          }
        }
        function nt(e) {
          return e.hasNext() ? e.getNext() : void 0;
        }
        class rt {
          constructor(e) {
            (this.fields = e), e.sort(j.comparator);
          }
          static empty() {
            return new rt([]);
          }
          unionWith(e) {
            let t = new et(j.comparator);
            for (const e of this.fields) t = t.add(e);
            for (const n of e) t = t.add(n);
            return new rt(t.toArray());
          }
          covers(e) {
            for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
            return !1;
          }
          isEqual(e) {
            return P(this.fields, e.fields, (e, t) => e.isEqual(t));
          }
        }
        class it extends Error {
          constructor() {
            super(...arguments), (this.name = "Base64DecodeError");
          }
        }
        class st {
          constructor(e) {
            this.binaryString = e;
          }
          static fromBase64String(e) {
            const t = (function (e) {
              try {
                return atob(e);
              } catch (e) {
                throw "undefined" != typeof DOMException &&
                  e instanceof DOMException
                  ? new it("Invalid base64 string: " + e)
                  : e;
              }
            })(e);
            return new st(t);
          }
          static fromUint8Array(e) {
            const t = (function (e) {
              let t = "";
              for (let n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
              return t;
            })(e);
            return new st(t);
          }
          [Symbol.iterator]() {
            let e = 0;
            return {
              next: () =>
                e < this.binaryString.length
                  ? { value: this.binaryString.charCodeAt(e++), done: !1 }
                  : { value: void 0, done: !0 },
            };
          }
          toBase64() {
            return (e = this.binaryString), btoa(e);
            var e;
          }
          toUint8Array() {
            return (function (e) {
              const t = new Uint8Array(e.length);
              for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
              return t;
            })(this.binaryString);
          }
          approximateByteSize() {
            return 2 * this.binaryString.length;
          }
          compareTo(e) {
            return L(this.binaryString, e.binaryString);
          }
          isEqual(e) {
            return this.binaryString === e.binaryString;
          }
        }
        st.EMPTY_BYTE_STRING = new st("");
        const ot = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
        function at(e) {
          if ((v(!!e), "string" == typeof e)) {
            let t = 0;
            const n = ot.exec(e);
            if ((v(!!n), n[1])) {
              let e = n[1];
              (e = (e + "000000000").substr(0, 9)), (t = Number(e));
            }
            const r = new Date(e);
            return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
          }
          return { seconds: ct(e.seconds), nanos: ct(e.nanos) };
        }
        function ct(e) {
          return "number" == typeof e
            ? e
            : "string" == typeof e
            ? Number(e)
            : 0;
        }
        function ut(e) {
          return "string" == typeof e
            ? st.fromBase64String(e)
            : st.fromUint8Array(e);
        }
        function lt(e) {
          var t, n;
          return (
            "server_timestamp" ===
            (null ===
              (n = (
                (null === (t = null == e ? void 0 : e.mapValue) || void 0 === t
                  ? void 0
                  : t.fields) || {}
              ).__type__) || void 0 === n
              ? void 0
              : n.stringValue)
          );
        }
        function ht(e) {
          const t = e.mapValue.fields.__previous_value__;
          return lt(t) ? ht(t) : t;
        }
        function dt(e) {
          const t = at(e.mapValue.fields.__local_write_time__.timestampValue);
          return new R(t.seconds, t.nanos);
        }
        class ft {
          constructor(e, t, n, r, i, s, o, a, c) {
            (this.databaseId = e),
              (this.appId = t),
              (this.persistenceKey = n),
              (this.host = r),
              (this.ssl = i),
              (this.forceLongPolling = s),
              (this.autoDetectLongPolling = o),
              (this.longPollingOptions = a),
              (this.useFetchStreams = c);
          }
        }
        class pt {
          constructor(e, t) {
            (this.projectId = e), (this.database = t || "(default)");
          }
          static empty() {
            return new pt("", "");
          }
          get isDefaultDatabase() {
            return "(default)" === this.database;
          }
          isEqual(e) {
            return (
              e instanceof pt &&
              e.projectId === this.projectId &&
              e.database === this.database
            );
          }
        }
        const gt = {
            mapValue: { fields: { __type__: { stringValue: "__max__" } } },
          },
          mt = { nullValue: "NULL_VALUE" };
        function yt(e) {
          return "nullValue" in e
            ? 0
            : "booleanValue" in e
            ? 1
            : "integerValue" in e || "doubleValue" in e
            ? 2
            : "timestampValue" in e
            ? 3
            : "stringValue" in e
            ? 5
            : "bytesValue" in e
            ? 6
            : "referenceValue" in e
            ? 7
            : "geoPointValue" in e
            ? 8
            : "arrayValue" in e
            ? 9
            : "mapValue" in e
            ? lt(e)
              ? 4
              : Ot(e)
              ? 9007199254740991
              : 10
            : y();
        }
        function vt(e, t) {
          if (e === t) return !0;
          const n = yt(e);
          if (n !== yt(t)) return !1;
          switch (n) {
            case 0:
            case 9007199254740991:
              return !0;
            case 1:
              return e.booleanValue === t.booleanValue;
            case 4:
              return dt(e).isEqual(dt(t));
            case 3:
              return (function (e, t) {
                if (
                  "string" == typeof e.timestampValue &&
                  "string" == typeof t.timestampValue &&
                  e.timestampValue.length === t.timestampValue.length
                )
                  return e.timestampValue === t.timestampValue;
                const n = at(e.timestampValue),
                  r = at(t.timestampValue);
                return n.seconds === r.seconds && n.nanos === r.nanos;
              })(e, t);
            case 5:
              return e.stringValue === t.stringValue;
            case 6:
              return (function (e, t) {
                return ut(e.bytesValue).isEqual(ut(t.bytesValue));
              })(e, t);
            case 7:
              return e.referenceValue === t.referenceValue;
            case 8:
              return (function (e, t) {
                return (
                  ct(e.geoPointValue.latitude) ===
                    ct(t.geoPointValue.latitude) &&
                  ct(e.geoPointValue.longitude) ===
                    ct(t.geoPointValue.longitude)
                );
              })(e, t);
            case 2:
              return (function (e, t) {
                if ("integerValue" in e && "integerValue" in t)
                  return ct(e.integerValue) === ct(t.integerValue);
                if ("doubleValue" in e && "doubleValue" in t) {
                  const n = ct(e.doubleValue),
                    r = ct(t.doubleValue);
                  return n === r ? ye(n) === ye(r) : isNaN(n) && isNaN(r);
                }
                return !1;
              })(e, t);
            case 9:
              return P(
                e.arrayValue.values || [],
                t.arrayValue.values || [],
                vt
              );
            case 10:
              return (function (e, t) {
                const n = e.mapValue.fields || {},
                  r = t.mapValue.fields || {};
                if (He(n) !== He(r)) return !1;
                for (const e in n)
                  if (
                    n.hasOwnProperty(e) &&
                    (void 0 === r[e] || !vt(n[e], r[e]))
                  )
                    return !1;
                return !0;
              })(e, t);
            default:
              return y();
          }
        }
        function wt(e, t) {
          return void 0 !== (e.values || []).find((e) => vt(e, t));
        }
        function bt(e, t) {
          if (e === t) return 0;
          const n = yt(e),
            r = yt(t);
          if (n !== r) return L(n, r);
          switch (n) {
            case 0:
            case 9007199254740991:
              return 0;
            case 1:
              return L(e.booleanValue, t.booleanValue);
            case 2:
              return (function (e, t) {
                const n = ct(e.integerValue || e.doubleValue),
                  r = ct(t.integerValue || t.doubleValue);
                return n < r
                  ? -1
                  : n > r
                  ? 1
                  : n === r
                  ? 0
                  : isNaN(n)
                  ? isNaN(r)
                    ? 0
                    : -1
                  : 1;
              })(e, t);
            case 3:
              return _t(e.timestampValue, t.timestampValue);
            case 4:
              return _t(dt(e), dt(t));
            case 5:
              return L(e.stringValue, t.stringValue);
            case 6:
              return (function (e, t) {
                const n = ut(e),
                  r = ut(t);
                return n.compareTo(r);
              })(e.bytesValue, t.bytesValue);
            case 7:
              return (function (e, t) {
                const n = e.split("/"),
                  r = t.split("/");
                for (let e = 0; e < n.length && e < r.length; e++) {
                  const t = L(n[e], r[e]);
                  if (0 !== t) return t;
                }
                return L(n.length, r.length);
              })(e.referenceValue, t.referenceValue);
            case 8:
              return (function (e, t) {
                const n = L(ct(e.latitude), ct(t.latitude));
                return 0 !== n ? n : L(ct(e.longitude), ct(t.longitude));
              })(e.geoPointValue, t.geoPointValue);
            case 9:
              return (function (e, t) {
                const n = e.values || [],
                  r = t.values || [];
                for (let e = 0; e < n.length && e < r.length; ++e) {
                  const t = bt(n[e], r[e]);
                  if (t) return t;
                }
                return L(n.length, r.length);
              })(e.arrayValue, t.arrayValue);
            case 10:
              return (function (e, t) {
                if (e === gt.mapValue && t === gt.mapValue) return 0;
                if (e === gt.mapValue) return 1;
                if (t === gt.mapValue) return -1;
                const n = e.fields || {},
                  r = Object.keys(n),
                  i = t.fields || {},
                  s = Object.keys(i);
                r.sort(), s.sort();
                for (let e = 0; e < r.length && e < s.length; ++e) {
                  const t = L(r[e], s[e]);
                  if (0 !== t) return t;
                  const o = bt(n[r[e]], i[s[e]]);
                  if (0 !== o) return o;
                }
                return L(r.length, s.length);
              })(e.mapValue, t.mapValue);
            default:
              throw y();
          }
        }
        function _t(e, t) {
          if (
            "string" == typeof e &&
            "string" == typeof t &&
            e.length === t.length
          )
            return L(e, t);
          const n = at(e),
            r = at(t),
            i = L(n.seconds, r.seconds);
          return 0 !== i ? i : L(n.nanos, r.nanos);
        }
        function It(e) {
          return Et(e);
        }
        function Et(e) {
          return "nullValue" in e
            ? "null"
            : "booleanValue" in e
            ? "" + e.booleanValue
            : "integerValue" in e
            ? "" + e.integerValue
            : "doubleValue" in e
            ? "" + e.doubleValue
            : "timestampValue" in e
            ? (function (e) {
                const t = at(e);
                return `time(${t.seconds},${t.nanos})`;
              })(e.timestampValue)
            : "stringValue" in e
            ? e.stringValue
            : "bytesValue" in e
            ? (function (e) {
                return ut(e).toBase64();
              })(e.bytesValue)
            : "referenceValue" in e
            ? (function (e) {
                return q.fromName(e).toString();
              })(e.referenceValue)
            : "geoPointValue" in e
            ? (function (e) {
                return `geo(${e.latitude},${e.longitude})`;
              })(e.geoPointValue)
            : "arrayValue" in e
            ? (function (e) {
                let t = "[",
                  n = !0;
                for (const r of e.values || [])
                  n ? (n = !1) : (t += ","), (t += Et(r));
                return t + "]";
              })(e.arrayValue)
            : "mapValue" in e
            ? (function (e) {
                const t = Object.keys(e.fields || {}).sort();
                let n = "{",
                  r = !0;
                for (const i of t)
                  r ? (r = !1) : (n += ","), (n += `${i}:${Et(e.fields[i])}`);
                return n + "}";
              })(e.mapValue)
            : y();
        }
        function St(e) {
          switch (yt(e)) {
            case 0:
            case 1:
              return 4;
            case 2:
              return 8;
            case 3:
            case 8:
              return 16;
            case 4:
              const t = ht(e);
              return t ? 16 + St(t) : 16;
            case 5:
              return 2 * e.stringValue.length;
            case 6:
              return ut(e.bytesValue).approximateByteSize();
            case 7:
              return e.referenceValue.length;
            case 9:
              return (function (e) {
                return (e.values || []).reduce((e, t) => e + St(t), 0);
              })(e.arrayValue);
            case 10:
              return (function (e) {
                let t = 0;
                return (
                  We(e.fields, (e, n) => {
                    t += e.length + St(n);
                  }),
                  t
                );
              })(e.mapValue);
            default:
              throw y();
          }
        }
        function Tt(e, t) {
          return {
            referenceValue: `projects/${e.projectId}/databases/${
              e.database
            }/documents/${t.path.canonicalString()}`,
          };
        }
        function xt(e) {
          return !!e && "integerValue" in e;
        }
        function Ct(e) {
          return !!e && "arrayValue" in e;
        }
        function Dt(e) {
          return !!e && "nullValue" in e;
        }
        function At(e) {
          return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
        }
        function kt(e) {
          return !!e && "mapValue" in e;
        }
        function Nt(e) {
          if (e.geoPointValue)
            return { geoPointValue: Object.assign({}, e.geoPointValue) };
          if (e.timestampValue && "object" == typeof e.timestampValue)
            return { timestampValue: Object.assign({}, e.timestampValue) };
          if (e.mapValue) {
            const t = { mapValue: { fields: {} } };
            return (
              We(e.mapValue.fields, (e, n) => (t.mapValue.fields[e] = Nt(n))), t
            );
          }
          if (e.arrayValue) {
            const t = { arrayValue: { values: [] } };
            for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
              t.arrayValue.values[n] = Nt(e.arrayValue.values[n]);
            return t;
          }
          return Object.assign({}, e);
        }
        function Ot(e) {
          return (
            "__max__" ===
            (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue
          );
        }
        function Lt(e) {
          return "nullValue" in e
            ? mt
            : "booleanValue" in e
            ? { booleanValue: !1 }
            : "integerValue" in e || "doubleValue" in e
            ? { doubleValue: NaN }
            : "timestampValue" in e
            ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } }
            : "stringValue" in e
            ? { stringValue: "" }
            : "bytesValue" in e
            ? { bytesValue: "" }
            : "referenceValue" in e
            ? Tt(pt.empty(), q.empty())
            : "geoPointValue" in e
            ? { geoPointValue: { latitude: -90, longitude: -180 } }
            : "arrayValue" in e
            ? { arrayValue: {} }
            : "mapValue" in e
            ? { mapValue: {} }
            : y();
        }
        function Pt(e) {
          return "nullValue" in e
            ? { booleanValue: !1 }
            : "booleanValue" in e
            ? { doubleValue: NaN }
            : "integerValue" in e || "doubleValue" in e
            ? { timestampValue: { seconds: Number.MIN_SAFE_INTEGER } }
            : "timestampValue" in e
            ? { stringValue: "" }
            : "stringValue" in e
            ? { bytesValue: "" }
            : "bytesValue" in e
            ? Tt(pt.empty(), q.empty())
            : "referenceValue" in e
            ? { geoPointValue: { latitude: -90, longitude: -180 } }
            : "geoPointValue" in e
            ? { arrayValue: {} }
            : "arrayValue" in e
            ? { mapValue: {} }
            : "mapValue" in e
            ? gt
            : y();
        }
        function Mt(e, t) {
          const n = bt(e.value, t.value);
          return 0 !== n
            ? n
            : e.inclusive && !t.inclusive
            ? -1
            : !e.inclusive && t.inclusive
            ? 1
            : 0;
        }
        function Rt(e, t) {
          const n = bt(e.value, t.value);
          return 0 !== n
            ? n
            : e.inclusive && !t.inclusive
            ? 1
            : !e.inclusive && t.inclusive
            ? -1
            : 0;
        }
        class Ft {
          constructor(e) {
            this.value = e;
          }
          static empty() {
            return new Ft({ mapValue: {} });
          }
          field(e) {
            if (e.isEmpty()) return this.value;
            {
              let t = this.value;
              for (let n = 0; n < e.length - 1; ++n)
                if (((t = (t.mapValue.fields || {})[e.get(n)]), !kt(t)))
                  return null;
              return (
                (t = (t.mapValue.fields || {})[e.lastSegment()]), t || null
              );
            }
          }
          set(e, t) {
            this.getFieldsMap(e.popLast())[e.lastSegment()] = Nt(t);
          }
          setAll(e) {
            let t = j.emptyPath(),
              n = {},
              r = [];
            e.forEach((e, i) => {
              if (!t.isImmediateParentOf(i)) {
                const e = this.getFieldsMap(t);
                this.applyChanges(e, n, r),
                  (n = {}),
                  (r = []),
                  (t = i.popLast());
              }
              e ? (n[i.lastSegment()] = Nt(e)) : r.push(i.lastSegment());
            });
            const i = this.getFieldsMap(t);
            this.applyChanges(i, n, r);
          }
          delete(e) {
            const t = this.field(e.popLast());
            kt(t) &&
              t.mapValue.fields &&
              delete t.mapValue.fields[e.lastSegment()];
          }
          isEqual(e) {
            return vt(this.value, e.value);
          }
          getFieldsMap(e) {
            let t = this.value;
            t.mapValue.fields || (t.mapValue = { fields: {} });
            for (let n = 0; n < e.length; ++n) {
              let r = t.mapValue.fields[e.get(n)];
              (kt(r) && r.mapValue.fields) ||
                ((r = { mapValue: { fields: {} } }),
                (t.mapValue.fields[e.get(n)] = r)),
                (t = r);
            }
            return t.mapValue.fields;
          }
          applyChanges(e, t, n) {
            We(t, (t, n) => (e[t] = n));
            for (const t of n) delete e[t];
          }
          clone() {
            return new Ft(Nt(this.value));
          }
        }
        function Vt(e) {
          const t = [];
          return (
            We(e.fields, (e, n) => {
              const r = new j([e]);
              if (kt(n)) {
                const e = Vt(n.mapValue).fields;
                if (0 === e.length) t.push(r);
                else for (const n of e) t.push(r.child(n));
              } else t.push(r);
            }),
            new rt(t)
          );
        }
        class Bt {
          constructor(e, t, n, r, i, s, o) {
            (this.key = e),
              (this.documentType = t),
              (this.version = n),
              (this.readTime = r),
              (this.createTime = i),
              (this.data = s),
              (this.documentState = o);
          }
          static newInvalidDocument(e) {
            return new Bt(e, 0, F.min(), F.min(), F.min(), Ft.empty(), 0);
          }
          static newFoundDocument(e, t, n, r) {
            return new Bt(e, 1, t, F.min(), n, r, 0);
          }
          static newNoDocument(e, t) {
            return new Bt(e, 2, t, F.min(), F.min(), Ft.empty(), 0);
          }
          static newUnknownDocument(e, t) {
            return new Bt(e, 3, t, F.min(), F.min(), Ft.empty(), 2);
          }
          convertToFoundDocument(e, t) {
            return (
              !this.createTime.isEqual(F.min()) ||
                (2 !== this.documentType && 0 !== this.documentType) ||
                (this.createTime = e),
              (this.version = e),
              (this.documentType = 1),
              (this.data = t),
              (this.documentState = 0),
              this
            );
          }
          convertToNoDocument(e) {
            return (
              (this.version = e),
              (this.documentType = 2),
              (this.data = Ft.empty()),
              (this.documentState = 0),
              this
            );
          }
          convertToUnknownDocument(e) {
            return (
              (this.version = e),
              (this.documentType = 3),
              (this.data = Ft.empty()),
              (this.documentState = 2),
              this
            );
          }
          setHasCommittedMutations() {
            return (this.documentState = 2), this;
          }
          setHasLocalMutations() {
            return (this.documentState = 1), (this.version = F.min()), this;
          }
          setReadTime(e) {
            return (this.readTime = e), this;
          }
          get hasLocalMutations() {
            return 1 === this.documentState;
          }
          get hasCommittedMutations() {
            return 2 === this.documentState;
          }
          get hasPendingWrites() {
            return this.hasLocalMutations || this.hasCommittedMutations;
          }
          isValidDocument() {
            return 0 !== this.documentType;
          }
          isFoundDocument() {
            return 1 === this.documentType;
          }
          isNoDocument() {
            return 2 === this.documentType;
          }
          isUnknownDocument() {
            return 3 === this.documentType;
          }
          isEqual(e) {
            return (
              e instanceof Bt &&
              this.key.isEqual(e.key) &&
              this.version.isEqual(e.version) &&
              this.documentType === e.documentType &&
              this.documentState === e.documentState &&
              this.data.isEqual(e.data)
            );
          }
          mutableCopy() {
            return new Bt(
              this.key,
              this.documentType,
              this.version,
              this.readTime,
              this.createTime,
              this.data.clone(),
              this.documentState
            );
          }
          toString() {
            return `Document(${this.key}, ${this.version}, ${JSON.stringify(
              this.data.value
            )}, {createTime: ${this.createTime}}), {documentType: ${
              this.documentType
            }}), {documentState: ${this.documentState}})`;
          }
        }
        class Ut {
          constructor(e, t) {
            (this.position = e), (this.inclusive = t);
          }
        }
        function jt(e, t, n) {
          let r = 0;
          for (let i = 0; i < e.position.length; i++) {
            const s = t[i],
              o = e.position[i];
            if (
              ((r = s.field.isKeyField()
                ? q.comparator(q.fromName(o.referenceValue), n.key)
                : bt(o, n.data.field(s.field))),
              "desc" === s.dir && (r *= -1),
              0 !== r)
            )
              break;
          }
          return r;
        }
        function qt(e, t) {
          if (null === e) return null === t;
          if (null === t) return !1;
          if (
            e.inclusive !== t.inclusive ||
            e.position.length !== t.position.length
          )
            return !1;
          for (let n = 0; n < e.position.length; n++)
            if (!vt(e.position[n], t.position[n])) return !1;
          return !0;
        }
        class zt {
          constructor(e, t = "asc") {
            (this.field = e), (this.dir = t);
          }
        }
        function Gt(e, t) {
          return e.dir === t.dir && e.field.isEqual(t.field);
        }
        class Kt {}
        class $t extends Kt {
          constructor(e, t, n) {
            super(), (this.field = e), (this.op = t), (this.value = n);
          }
          static create(e, t, n) {
            return e.isKeyField()
              ? "in" === t || "not-in" === t
                ? this.createKeyFieldInFilter(e, t, n)
                : new nn(e, t, n)
              : "array-contains" === t
              ? new an(e, n)
              : "in" === t
              ? new cn(e, n)
              : "not-in" === t
              ? new un(e, n)
              : "array-contains-any" === t
              ? new ln(e, n)
              : new $t(e, t, n);
          }
          static createKeyFieldInFilter(e, t, n) {
            return "in" === t ? new rn(e, n) : new sn(e, n);
          }
          matches(e) {
            const t = e.data.field(this.field);
            return "!=" === this.op
              ? null !== t && this.matchesComparison(bt(t, this.value))
              : null !== t &&
                  yt(this.value) === yt(t) &&
                  this.matchesComparison(bt(t, this.value));
          }
          matchesComparison(e) {
            switch (this.op) {
              case "<":
                return e < 0;
              case "<=":
                return e <= 0;
              case "==":
                return 0 === e;
              case "!=":
                return 0 !== e;
              case ">":
                return e > 0;
              case ">=":
                return e >= 0;
              default:
                return y();
            }
          }
          isInequality() {
            return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
          }
          getFlattenedFilters() {
            return [this];
          }
          getFilters() {
            return [this];
          }
          getFirstInequalityField() {
            return this.isInequality() ? this.field : null;
          }
        }
        class Qt extends Kt {
          constructor(e, t) {
            super(), (this.filters = e), (this.op = t), (this.ce = null);
          }
          static create(e, t) {
            return new Qt(e, t);
          }
          matches(e) {
            return Ht(this)
              ? void 0 === this.filters.find((t) => !t.matches(e))
              : void 0 !== this.filters.find((t) => t.matches(e));
          }
          getFlattenedFilters() {
            return (
              null !== this.ce ||
                (this.ce = this.filters.reduce(
                  (e, t) => e.concat(t.getFlattenedFilters()),
                  []
                )),
              this.ce
            );
          }
          getFilters() {
            return Object.assign([], this.filters);
          }
          getFirstInequalityField() {
            const e = this.le((e) => e.isInequality());
            return null !== e ? e.field : null;
          }
          le(e) {
            for (const t of this.getFlattenedFilters()) if (e(t)) return t;
            return null;
          }
        }
        function Ht(e) {
          return "and" === e.op;
        }
        function Wt(e) {
          return "or" === e.op;
        }
        function Jt(e) {
          return Xt(e) && Ht(e);
        }
        function Xt(e) {
          for (const t of e.filters) if (t instanceof Qt) return !1;
          return !0;
        }
        function Yt(e) {
          if (e instanceof $t)
            return e.field.canonicalString() + e.op.toString() + It(e.value);
          if (Jt(e)) return e.filters.map((e) => Yt(e)).join(",");
          {
            const t = e.filters.map((e) => Yt(e)).join(",");
            return `${e.op}(${t})`;
          }
        }
        function Zt(e, t) {
          return e instanceof $t
            ? (function (e, t) {
                return (
                  t instanceof $t &&
                  e.op === t.op &&
                  e.field.isEqual(t.field) &&
                  vt(e.value, t.value)
                );
              })(e, t)
            : e instanceof Qt
            ? (function (e, t) {
                return (
                  t instanceof Qt &&
                  e.op === t.op &&
                  e.filters.length === t.filters.length &&
                  e.filters.reduce((e, n, r) => e && Zt(n, t.filters[r]), !0)
                );
              })(e, t)
            : void y();
        }
        function en(e, t) {
          const n = e.filters.concat(t);
          return Qt.create(n, e.op);
        }
        function tn(e) {
          return e instanceof $t
            ? (function (e) {
                return `${e.field.canonicalString()} ${e.op} ${It(e.value)}`;
              })(e)
            : e instanceof Qt
            ? (function (e) {
                return (
                  e.op.toString() +
                  " {" +
                  e.getFilters().map(tn).join(" ,") +
                  "}"
                );
              })(e)
            : "Filter";
        }
        class nn extends $t {
          constructor(e, t, n) {
            super(e, t, n), (this.key = q.fromName(n.referenceValue));
          }
          matches(e) {
            const t = q.comparator(e.key, this.key);
            return this.matchesComparison(t);
          }
        }
        class rn extends $t {
          constructor(e, t) {
            super(e, "in", t), (this.keys = on(0, t));
          }
          matches(e) {
            return this.keys.some((t) => t.isEqual(e.key));
          }
        }
        class sn extends $t {
          constructor(e, t) {
            super(e, "not-in", t), (this.keys = on(0, t));
          }
          matches(e) {
            return !this.keys.some((t) => t.isEqual(e.key));
          }
        }
        function on(e, t) {
          var n;
          return (
            (null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) ||
            []
          ).map((e) => q.fromName(e.referenceValue));
        }
        class an extends $t {
          constructor(e, t) {
            super(e, "array-contains", t);
          }
          matches(e) {
            const t = e.data.field(this.field);
            return Ct(t) && wt(t.arrayValue, this.value);
          }
        }
        class cn extends $t {
          constructor(e, t) {
            super(e, "in", t);
          }
          matches(e) {
            const t = e.data.field(this.field);
            return null !== t && wt(this.value.arrayValue, t);
          }
        }
        class un extends $t {
          constructor(e, t) {
            super(e, "not-in", t);
          }
          matches(e) {
            if (wt(this.value.arrayValue, { nullValue: "NULL_VALUE" }))
              return !1;
            const t = e.data.field(this.field);
            return null !== t && !wt(this.value.arrayValue, t);
          }
        }
        class ln extends $t {
          constructor(e, t) {
            super(e, "array-contains-any", t);
          }
          matches(e) {
            const t = e.data.field(this.field);
            return (
              !(!Ct(t) || !t.arrayValue.values) &&
              t.arrayValue.values.some((e) => wt(this.value.arrayValue, e))
            );
          }
        }
        class hn {
          constructor(
            e,
            t = null,
            n = [],
            r = [],
            i = null,
            s = null,
            o = null
          ) {
            (this.path = e),
              (this.collectionGroup = t),
              (this.orderBy = n),
              (this.filters = r),
              (this.limit = i),
              (this.startAt = s),
              (this.endAt = o),
              (this.he = null);
          }
        }
        function dn(e, t = null, n = [], r = [], i = null, s = null, o = null) {
          return new hn(e, t, n, r, i, s, o);
        }
        function fn(e) {
          const t = w(e);
          if (null === t.he) {
            let e = t.path.canonicalString();
            null !== t.collectionGroup && (e += "|cg:" + t.collectionGroup),
              (e += "|f:"),
              (e += t.filters.map((e) => Yt(e)).join(",")),
              (e += "|ob:"),
              (e += t.orderBy
                .map((e) =>
                  (function (e) {
                    return e.field.canonicalString() + e.dir;
                  })(e)
                )
                .join(",")),
              me(t.limit) || ((e += "|l:"), (e += t.limit)),
              t.startAt &&
                ((e += "|lb:"),
                (e += t.startAt.inclusive ? "b:" : "a:"),
                (e += t.startAt.position.map((e) => It(e)).join(","))),
              t.endAt &&
                ((e += "|ub:"),
                (e += t.endAt.inclusive ? "a:" : "b:"),
                (e += t.endAt.position.map((e) => It(e)).join(","))),
              (t.he = e);
          }
          return t.he;
        }
        function pn(e, t) {
          if (e.limit !== t.limit) return !1;
          if (e.orderBy.length !== t.orderBy.length) return !1;
          for (let n = 0; n < e.orderBy.length; n++)
            if (!Gt(e.orderBy[n], t.orderBy[n])) return !1;
          if (e.filters.length !== t.filters.length) return !1;
          for (let n = 0; n < e.filters.length; n++)
            if (!Zt(e.filters[n], t.filters[n])) return !1;
          return (
            e.collectionGroup === t.collectionGroup &&
            !!e.path.isEqual(t.path) &&
            !!qt(e.startAt, t.startAt) &&
            qt(e.endAt, t.endAt)
          );
        }
        function gn(e) {
          return (
            q.isDocumentKey(e.path) &&
            null === e.collectionGroup &&
            0 === e.filters.length
          );
        }
        function mn(e, t) {
          return e.filters.filter((e) => e instanceof $t && e.field.isEqual(t));
        }
        function yn(e, t, n) {
          let r = mt,
            i = !0;
          for (const n of mn(e, t)) {
            let e = mt,
              t = !0;
            switch (n.op) {
              case "<":
              case "<=":
                e = Lt(n.value);
                break;
              case "==":
              case "in":
              case ">=":
                e = n.value;
                break;
              case ">":
                (e = n.value), (t = !1);
                break;
              case "!=":
              case "not-in":
                e = mt;
            }
            Mt({ value: r, inclusive: i }, { value: e, inclusive: t }) < 0 &&
              ((r = e), (i = t));
          }
          if (null !== n)
            for (let s = 0; s < e.orderBy.length; ++s)
              if (e.orderBy[s].field.isEqual(t)) {
                const e = n.position[s];
                Mt(
                  { value: r, inclusive: i },
                  { value: e, inclusive: n.inclusive }
                ) < 0 && ((r = e), (i = n.inclusive));
                break;
              }
          return { value: r, inclusive: i };
        }
        function vn(e, t, n) {
          let r = gt,
            i = !0;
          for (const n of mn(e, t)) {
            let e = gt,
              t = !0;
            switch (n.op) {
              case ">=":
              case ">":
                (e = Pt(n.value)), (t = !1);
                break;
              case "==":
              case "in":
              case "<=":
                e = n.value;
                break;
              case "<":
                (e = n.value), (t = !1);
                break;
              case "!=":
              case "not-in":
                e = gt;
            }
            Rt({ value: r, inclusive: i }, { value: e, inclusive: t }) > 0 &&
              ((r = e), (i = t));
          }
          if (null !== n)
            for (let s = 0; s < e.orderBy.length; ++s)
              if (e.orderBy[s].field.isEqual(t)) {
                const e = n.position[s];
                Rt(
                  { value: r, inclusive: i },
                  { value: e, inclusive: n.inclusive }
                ) > 0 && ((r = e), (i = n.inclusive));
                break;
              }
          return { value: r, inclusive: i };
        }
        class wn {
          constructor(
            e,
            t = null,
            n = [],
            r = [],
            i = null,
            s = "F",
            o = null,
            a = null
          ) {
            (this.path = e),
              (this.collectionGroup = t),
              (this.explicitOrderBy = n),
              (this.filters = r),
              (this.limit = i),
              (this.limitType = s),
              (this.startAt = o),
              (this.endAt = a),
              (this.Pe = null),
              (this.Ie = null),
              this.startAt,
              this.endAt;
          }
        }
        function bn(e, t, n, r, i, s, o, a) {
          return new wn(e, t, n, r, i, s, o, a);
        }
        function _n(e) {
          return new wn(e);
        }
        function In(e) {
          return (
            0 === e.filters.length &&
            null === e.limit &&
            null == e.startAt &&
            null == e.endAt &&
            (0 === e.explicitOrderBy.length ||
              (1 === e.explicitOrderBy.length &&
                e.explicitOrderBy[0].field.isKeyField()))
          );
        }
        function En(e) {
          return e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[0].field
            : null;
        }
        function Sn(e) {
          for (const t of e.filters) {
            const e = t.getFirstInequalityField();
            if (null !== e) return e;
          }
          return null;
        }
        function Tn(e) {
          return null !== e.collectionGroup;
        }
        function xn(e) {
          const t = w(e);
          if (null === t.Pe) {
            t.Pe = [];
            const e = Sn(t),
              n = En(t);
            if (null !== e && null === n)
              e.isKeyField() || t.Pe.push(new zt(e)),
                t.Pe.push(new zt(j.keyField(), "asc"));
            else {
              let e = !1;
              for (const n of t.explicitOrderBy)
                t.Pe.push(n), n.field.isKeyField() && (e = !0);
              if (!e) {
                const e =
                  t.explicitOrderBy.length > 0
                    ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
                    : "asc";
                t.Pe.push(new zt(j.keyField(), e));
              }
            }
          }
          return t.Pe;
        }
        function Cn(e) {
          const t = w(e);
          if (!t.Ie)
            if ("F" === t.limitType)
              t.Ie = dn(
                t.path,
                t.collectionGroup,
                xn(t),
                t.filters,
                t.limit,
                t.startAt,
                t.endAt
              );
            else {
              const e = [];
              for (const n of xn(t)) {
                const t = "desc" === n.dir ? "asc" : "desc";
                e.push(new zt(n.field, t));
              }
              const n = t.endAt
                  ? new Ut(t.endAt.position, t.endAt.inclusive)
                  : null,
                r = t.startAt
                  ? new Ut(t.startAt.position, t.startAt.inclusive)
                  : null;
              t.Ie = dn(t.path, t.collectionGroup, e, t.filters, t.limit, n, r);
            }
          return t.Ie;
        }
        function Dn(e, t) {
          t.getFirstInequalityField(), Sn(e);
          const n = e.filters.concat([t]);
          return new wn(
            e.path,
            e.collectionGroup,
            e.explicitOrderBy.slice(),
            n,
            e.limit,
            e.limitType,
            e.startAt,
            e.endAt
          );
        }
        function An(e, t, n) {
          return new wn(
            e.path,
            e.collectionGroup,
            e.explicitOrderBy.slice(),
            e.filters.slice(),
            t,
            n,
            e.startAt,
            e.endAt
          );
        }
        function kn(e, t) {
          return pn(Cn(e), Cn(t)) && e.limitType === t.limitType;
        }
        function Nn(e) {
          return `${fn(Cn(e))}|lt:${e.limitType}`;
        }
        function On(e) {
          return `Query(target=${(function (e) {
            let t = e.path.canonicalString();
            return (
              null !== e.collectionGroup &&
                (t += " collectionGroup=" + e.collectionGroup),
              e.filters.length > 0 &&
                (t += `, filters: [${e.filters.map((e) => tn(e)).join(", ")}]`),
              me(e.limit) || (t += ", limit: " + e.limit),
              e.orderBy.length > 0 &&
                (t += `, orderBy: [${e.orderBy
                  .map((e) =>
                    (function (e) {
                      return `${e.field.canonicalString()} (${e.dir})`;
                    })(e)
                  )
                  .join(", ")}]`),
              e.startAt &&
                ((t += ", startAt: "),
                (t += e.startAt.inclusive ? "b:" : "a:"),
                (t += e.startAt.position.map((e) => It(e)).join(","))),
              e.endAt &&
                ((t += ", endAt: "),
                (t += e.endAt.inclusive ? "a:" : "b:"),
                (t += e.endAt.position.map((e) => It(e)).join(","))),
              `Target(${t})`
            );
          })(Cn(e))}; limitType=${e.limitType})`;
        }
        function Ln(e, t) {
          return (
            t.isFoundDocument() &&
            (function (e, t) {
              const n = t.key.path;
              return null !== e.collectionGroup
                ? t.key.hasCollectionId(e.collectionGroup) &&
                    e.path.isPrefixOf(n)
                : q.isDocumentKey(e.path)
                ? e.path.isEqual(n)
                : e.path.isImmediateParentOf(n);
            })(e, t) &&
            (function (e, t) {
              for (const n of xn(e))
                if (!n.field.isKeyField() && null === t.data.field(n.field))
                  return !1;
              return !0;
            })(e, t) &&
            (function (e, t) {
              for (const n of e.filters) if (!n.matches(t)) return !1;
              return !0;
            })(e, t) &&
            (function (e, t) {
              return !(
                (e.startAt &&
                  !(function (e, t, n) {
                    const r = jt(e, t, n);
                    return e.inclusive ? r <= 0 : r < 0;
                  })(e.startAt, xn(e), t)) ||
                (e.endAt &&
                  !(function (e, t, n) {
                    const r = jt(e, t, n);
                    return e.inclusive ? r >= 0 : r > 0;
                  })(e.endAt, xn(e), t))
              );
            })(e, t)
          );
        }
        function Pn(e) {
          return (
            e.collectionGroup ||
            (e.path.length % 2 == 1
              ? e.path.lastSegment()
              : e.path.get(e.path.length - 2))
          );
        }
        function Mn(e) {
          return (t, n) => {
            let r = !1;
            for (const i of xn(e)) {
              const e = Rn(i, t, n);
              if (0 !== e) return e;
              r = r || i.field.isKeyField();
            }
            return 0;
          };
        }
        function Rn(e, t, n) {
          const r = e.field.isKeyField()
            ? q.comparator(t.key, n.key)
            : (function (e, t, n) {
                const r = t.data.field(e),
                  i = n.data.field(e);
                return null !== r && null !== i ? bt(r, i) : y();
              })(e.field, t, n);
          switch (e.dir) {
            case "asc":
              return r;
            case "desc":
              return -1 * r;
            default:
              return y();
          }
        }
        class Fn {
          constructor(e, t) {
            (this.mapKeyFn = e),
              (this.equalsFn = t),
              (this.inner = {}),
              (this.innerSize = 0);
          }
          get(e) {
            const t = this.mapKeyFn(e),
              n = this.inner[t];
            if (void 0 !== n)
              for (const [t, r] of n) if (this.equalsFn(t, e)) return r;
          }
          has(e) {
            return void 0 !== this.get(e);
          }
          set(e, t) {
            const n = this.mapKeyFn(e),
              r = this.inner[n];
            if (void 0 === r)
              return (this.inner[n] = [[e, t]]), void this.innerSize++;
            for (let n = 0; n < r.length; n++)
              if (this.equalsFn(r[n][0], e)) return void (r[n] = [e, t]);
            r.push([e, t]), this.innerSize++;
          }
          delete(e) {
            const t = this.mapKeyFn(e),
              n = this.inner[t];
            if (void 0 === n) return !1;
            for (let r = 0; r < n.length; r++)
              if (this.equalsFn(n[r][0], e))
                return (
                  1 === n.length ? delete this.inner[t] : n.splice(r, 1),
                  this.innerSize--,
                  !0
                );
            return !1;
          }
          forEach(e) {
            We(this.inner, (t, n) => {
              for (const [t, r] of n) e(t, r);
            });
          }
          isEmpty() {
            return Je(this.inner);
          }
          size() {
            return this.innerSize;
          }
        }
        const Vn = new Xe(q.comparator);
        function Bn() {
          return Vn;
        }
        const Un = new Xe(q.comparator);
        function jn(...e) {
          let t = Un;
          for (const n of e) t = t.insert(n.key, n);
          return t;
        }
        function qn(e) {
          let t = Un;
          return e.forEach((e, n) => (t = t.insert(e, n.overlayedDocument))), t;
        }
        function zn() {
          return Kn();
        }
        function Gn() {
          return Kn();
        }
        function Kn() {
          return new Fn(
            (e) => e.toString(),
            (e, t) => e.isEqual(t)
          );
        }
        const $n = new Xe(q.comparator),
          Qn = new et(q.comparator);
        function Hn(...e) {
          let t = Qn;
          for (const n of e) t = t.add(n);
          return t;
        }
        const Wn = new et(L);
        function Jn() {
          return Wn;
        }
        function Xn(e, t) {
          if (e.useProto3Json) {
            if (isNaN(t)) return { doubleValue: "NaN" };
            if (t === 1 / 0) return { doubleValue: "Infinity" };
            if (t === -1 / 0) return { doubleValue: "-Infinity" };
          }
          return { doubleValue: ye(t) ? "-0" : t };
        }
        function Yn(e) {
          return { integerValue: "" + e };
        }
        function Zn(e, t) {
          return ve(t) ? Yn(t) : Xn(e, t);
        }
        class er {
          constructor() {
            this._ = void 0;
          }
        }
        function tr(e, t, n) {
          return e instanceof ir
            ? (function (e, t) {
                const n = {
                  fields: {
                    __type__: { stringValue: "server_timestamp" },
                    __local_write_time__: {
                      timestampValue: {
                        seconds: e.seconds,
                        nanos: e.nanoseconds,
                      },
                    },
                  },
                };
                return (
                  t && lt(t) && (t = ht(t)),
                  t && (n.fields.__previous_value__ = t),
                  { mapValue: n }
                );
              })(n, t)
            : e instanceof sr
            ? or(e, t)
            : e instanceof ar
            ? cr(e, t)
            : (function (e, t) {
                const n = rr(e, t),
                  r = lr(n) + lr(e.Te);
                return xt(n) && xt(e.Te) ? Yn(r) : Xn(e.serializer, r);
              })(e, t);
        }
        function nr(e, t, n) {
          return e instanceof sr ? or(e, t) : e instanceof ar ? cr(e, t) : n;
        }
        function rr(e, t) {
          return e instanceof ur
            ? (function (e) {
                return (
                  xt(e) ||
                  (function (e) {
                    return !!e && "doubleValue" in e;
                  })(e)
                );
              })(t)
              ? t
              : { integerValue: 0 }
            : null;
        }
        class ir extends er {}
        class sr extends er {
          constructor(e) {
            super(), (this.elements = e);
          }
        }
        function or(e, t) {
          const n = hr(t);
          for (const t of e.elements) n.some((e) => vt(e, t)) || n.push(t);
          return { arrayValue: { values: n } };
        }
        class ar extends er {
          constructor(e) {
            super(), (this.elements = e);
          }
        }
        function cr(e, t) {
          let n = hr(t);
          for (const t of e.elements) n = n.filter((e) => !vt(e, t));
          return { arrayValue: { values: n } };
        }
        class ur extends er {
          constructor(e, t) {
            super(), (this.serializer = e), (this.Te = t);
          }
        }
        function lr(e) {
          return ct(e.integerValue || e.doubleValue);
        }
        function hr(e) {
          return Ct(e) && e.arrayValue.values
            ? e.arrayValue.values.slice()
            : [];
        }
        class dr {
          constructor(e, t) {
            (this.field = e), (this.transform = t);
          }
        }
        class fr {
          constructor(e, t) {
            (this.version = e), (this.transformResults = t);
          }
        }
        class pr {
          constructor(e, t) {
            (this.updateTime = e), (this.exists = t);
          }
          static none() {
            return new pr();
          }
          static exists(e) {
            return new pr(void 0, e);
          }
          static updateTime(e) {
            return new pr(e);
          }
          get isNone() {
            return void 0 === this.updateTime && void 0 === this.exists;
          }
          isEqual(e) {
            return (
              this.exists === e.exists &&
              (this.updateTime
                ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
                : !e.updateTime)
            );
          }
        }
        function gr(e, t) {
          return void 0 !== e.updateTime
            ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
            : void 0 === e.exists || e.exists === t.isFoundDocument();
        }
        class mr {}
        function yr(e, t) {
          if (!e.hasLocalMutations || (t && 0 === t.fields.length)) return null;
          if (null === t)
            return e.isNoDocument()
              ? new Cr(e.key, pr.none())
              : new Ir(e.key, e.data, pr.none());
          {
            const n = e.data,
              r = Ft.empty();
            let i = new et(j.comparator);
            for (let e of t.fields)
              if (!i.has(e)) {
                let t = n.field(e);
                null === t &&
                  e.length > 1 &&
                  ((e = e.popLast()), (t = n.field(e))),
                  null === t ? r.delete(e) : r.set(e, t),
                  (i = i.add(e));
              }
            return new Er(e.key, r, new rt(i.toArray()), pr.none());
          }
        }
        function vr(e, t, n) {
          e instanceof Ir
            ? (function (e, t, n) {
                const r = e.value.clone(),
                  i = Tr(e.fieldTransforms, t, n.transformResults);
                r.setAll(i),
                  t
                    .convertToFoundDocument(n.version, r)
                    .setHasCommittedMutations();
              })(e, t, n)
            : e instanceof Er
            ? (function (e, t, n) {
                if (!gr(e.precondition, t))
                  return void t.convertToUnknownDocument(n.version);
                const r = Tr(e.fieldTransforms, t, n.transformResults),
                  i = t.data;
                i.setAll(Sr(e)),
                  i.setAll(r),
                  t
                    .convertToFoundDocument(n.version, i)
                    .setHasCommittedMutations();
              })(e, t, n)
            : (function (e, t, n) {
                t.convertToNoDocument(n.version).setHasCommittedMutations();
              })(0, t, n);
        }
        function wr(e, t, n, r) {
          return e instanceof Ir
            ? (function (e, t, n, r) {
                if (!gr(e.precondition, t)) return n;
                const i = e.value.clone(),
                  s = xr(e.fieldTransforms, r, t);
                return (
                  i.setAll(s),
                  t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
                  null
                );
              })(e, t, n, r)
            : e instanceof Er
            ? (function (e, t, n, r) {
                if (!gr(e.precondition, t)) return n;
                const i = xr(e.fieldTransforms, r, t),
                  s = t.data;
                return (
                  s.setAll(Sr(e)),
                  s.setAll(i),
                  t.convertToFoundDocument(t.version, s).setHasLocalMutations(),
                  null === n
                    ? null
                    : n
                        .unionWith(e.fieldMask.fields)
                        .unionWith(e.fieldTransforms.map((e) => e.field))
                );
              })(e, t, n, r)
            : (function (e, t, n) {
                return gr(e.precondition, t)
                  ? (t.convertToNoDocument(t.version).setHasLocalMutations(),
                    null)
                  : n;
              })(e, t, n);
        }
        function br(e, t) {
          let n = null;
          for (const r of e.fieldTransforms) {
            const e = t.data.field(r.field),
              i = rr(r.transform, e || null);
            null != i && (null === n && (n = Ft.empty()), n.set(r.field, i));
          }
          return n || null;
        }
        function _r(e, t) {
          return (
            e.type === t.type &&
            !!e.key.isEqual(t.key) &&
            !!e.precondition.isEqual(t.precondition) &&
            !!(function (e, t) {
              return (
                (void 0 === e && void 0 === t) ||
                (!(!e || !t) &&
                  P(e, t, (e, t) =>
                    (function (e, t) {
                      return (
                        e.field.isEqual(t.field) &&
                        (function (e, t) {
                          return (e instanceof sr && t instanceof sr) ||
                            (e instanceof ar && t instanceof ar)
                            ? P(e.elements, t.elements, vt)
                            : e instanceof ur && t instanceof ur
                            ? vt(e.Te, t.Te)
                            : e instanceof ir && t instanceof ir;
                        })(e.transform, t.transform)
                      );
                    })(e, t)
                  ))
              );
            })(e.fieldTransforms, t.fieldTransforms) &&
            (0 === e.type
              ? e.value.isEqual(t.value)
              : 1 !== e.type ||
                (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
          );
        }
        class Ir extends mr {
          constructor(e, t, n, r = []) {
            super(),
              (this.key = e),
              (this.value = t),
              (this.precondition = n),
              (this.fieldTransforms = r),
              (this.type = 0);
          }
          getFieldMask() {
            return null;
          }
        }
        class Er extends mr {
          constructor(e, t, n, r, i = []) {
            super(),
              (this.key = e),
              (this.data = t),
              (this.fieldMask = n),
              (this.precondition = r),
              (this.fieldTransforms = i),
              (this.type = 1);
          }
          getFieldMask() {
            return this.fieldMask;
          }
        }
        function Sr(e) {
          const t = new Map();
          return (
            e.fieldMask.fields.forEach((n) => {
              if (!n.isEmpty()) {
                const r = e.data.field(n);
                t.set(n, r);
              }
            }),
            t
          );
        }
        function Tr(e, t, n) {
          const r = new Map();
          v(e.length === n.length);
          for (let i = 0; i < n.length; i++) {
            const s = e[i],
              o = s.transform,
              a = t.data.field(s.field);
            r.set(s.field, nr(o, a, n[i]));
          }
          return r;
        }
        function xr(e, t, n) {
          const r = new Map();
          for (const i of e) {
            const e = i.transform,
              s = n.data.field(i.field);
            r.set(i.field, tr(e, s, t));
          }
          return r;
        }
        class Cr extends mr {
          constructor(e, t) {
            super(),
              (this.key = e),
              (this.precondition = t),
              (this.type = 2),
              (this.fieldTransforms = []);
          }
          getFieldMask() {
            return null;
          }
        }
        class Dr extends mr {
          constructor(e, t) {
            super(),
              (this.key = e),
              (this.precondition = t),
              (this.type = 3),
              (this.fieldTransforms = []);
          }
          getFieldMask() {
            return null;
          }
        }
        class Ar {
          constructor(e, t, n, r) {
            (this.batchId = e),
              (this.localWriteTime = t),
              (this.baseMutations = n),
              (this.mutations = r);
          }
          applyToRemoteDocument(e, t) {
            const n = t.mutationResults;
            for (let t = 0; t < this.mutations.length; t++) {
              const r = this.mutations[t];
              r.key.isEqual(e.key) && vr(r, e, n[t]);
            }
          }
          applyToLocalView(e, t) {
            for (const n of this.baseMutations)
              n.key.isEqual(e.key) && (t = wr(n, e, t, this.localWriteTime));
            for (const n of this.mutations)
              n.key.isEqual(e.key) && (t = wr(n, e, t, this.localWriteTime));
            return t;
          }
          applyToLocalDocumentSet(e, t) {
            const n = Gn();
            return (
              this.mutations.forEach((r) => {
                const i = e.get(r.key),
                  s = i.overlayedDocument;
                let o = this.applyToLocalView(s, i.mutatedFields);
                o = t.has(r.key) ? null : o;
                const a = yr(s, o);
                null !== a && n.set(r.key, a),
                  s.isValidDocument() || s.convertToNoDocument(F.min());
              }),
              n
            );
          }
          keys() {
            return this.mutations.reduce((e, t) => e.add(t.key), Hn());
          }
          isEqual(e) {
            return (
              this.batchId === e.batchId &&
              P(this.mutations, e.mutations, (e, t) => _r(e, t)) &&
              P(this.baseMutations, e.baseMutations, (e, t) => _r(e, t))
            );
          }
        }
        class kr {
          constructor(e, t, n, r) {
            (this.batch = e),
              (this.commitVersion = t),
              (this.mutationResults = n),
              (this.docVersions = r);
          }
          static from(e, t, n) {
            v(e.mutations.length === n.length);
            let r = $n;
            const i = e.mutations;
            for (let e = 0; e < i.length; e++)
              r = r.insert(i[e].key, n[e].version);
            return new kr(e, t, n, r);
          }
        }
        class Nr {
          constructor(e, t) {
            (this.largestBatchId = e), (this.mutation = t);
          }
          getKey() {
            return this.mutation.key;
          }
          isEqual(e) {
            return null !== e && this.mutation === e.mutation;
          }
          toString() {
            return `Overlay{\n      largestBatchId: ${
              this.largestBatchId
            },\n      mutation: ${this.mutation.toString()}\n    }`;
          }
        }
        class Or {
          constructor(e, t, n) {
            (this.alias = e), (this.Ee = t), (this.fieldPath = n);
          }
        }
        class Lr {
          constructor(e, t) {
            (this.count = e), (this.unchangedNames = t);
          }
        }
        var Pr, Mr;
        function Rr(e) {
          switch (e) {
            default:
              return y();
            case b.CANCELLED:
            case b.UNKNOWN:
            case b.DEADLINE_EXCEEDED:
            case b.RESOURCE_EXHAUSTED:
            case b.INTERNAL:
            case b.UNAVAILABLE:
            case b.UNAUTHENTICATED:
              return !1;
            case b.INVALID_ARGUMENT:
            case b.NOT_FOUND:
            case b.ALREADY_EXISTS:
            case b.PERMISSION_DENIED:
            case b.FAILED_PRECONDITION:
            case b.ABORTED:
            case b.OUT_OF_RANGE:
            case b.UNIMPLEMENTED:
            case b.DATA_LOSS:
              return !0;
          }
        }
        function Fr(e) {
          if (void 0 === e) return p("GRPC error has no .code"), b.UNKNOWN;
          switch (e) {
            case Pr.OK:
              return b.OK;
            case Pr.CANCELLED:
              return b.CANCELLED;
            case Pr.UNKNOWN:
              return b.UNKNOWN;
            case Pr.DEADLINE_EXCEEDED:
              return b.DEADLINE_EXCEEDED;
            case Pr.RESOURCE_EXHAUSTED:
              return b.RESOURCE_EXHAUSTED;
            case Pr.INTERNAL:
              return b.INTERNAL;
            case Pr.UNAVAILABLE:
              return b.UNAVAILABLE;
            case Pr.UNAUTHENTICATED:
              return b.UNAUTHENTICATED;
            case Pr.INVALID_ARGUMENT:
              return b.INVALID_ARGUMENT;
            case Pr.NOT_FOUND:
              return b.NOT_FOUND;
            case Pr.ALREADY_EXISTS:
              return b.ALREADY_EXISTS;
            case Pr.PERMISSION_DENIED:
              return b.PERMISSION_DENIED;
            case Pr.FAILED_PRECONDITION:
              return b.FAILED_PRECONDITION;
            case Pr.ABORTED:
              return b.ABORTED;
            case Pr.OUT_OF_RANGE:
              return b.OUT_OF_RANGE;
            case Pr.UNIMPLEMENTED:
              return b.UNIMPLEMENTED;
            case Pr.DATA_LOSS:
              return b.DATA_LOSS;
            default:
              return y();
          }
        }
        ((Mr = Pr || (Pr = {}))[(Mr.OK = 0)] = "OK"),
          (Mr[(Mr.CANCELLED = 1)] = "CANCELLED"),
          (Mr[(Mr.UNKNOWN = 2)] = "UNKNOWN"),
          (Mr[(Mr.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
          (Mr[(Mr.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
          (Mr[(Mr.NOT_FOUND = 5)] = "NOT_FOUND"),
          (Mr[(Mr.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
          (Mr[(Mr.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
          (Mr[(Mr.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
          (Mr[(Mr.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
          (Mr[(Mr.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
          (Mr[(Mr.ABORTED = 10)] = "ABORTED"),
          (Mr[(Mr.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
          (Mr[(Mr.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
          (Mr[(Mr.INTERNAL = 13)] = "INTERNAL"),
          (Mr[(Mr.UNAVAILABLE = 14)] = "UNAVAILABLE"),
          (Mr[(Mr.DATA_LOSS = 15)] = "DATA_LOSS");
        class Vr {
          constructor() {
            this.onExistenceFilterMismatchCallbacks = new Map();
          }
          static get instance() {
            return Br;
          }
          static getOrCreateInstance() {
            return null === Br && (Br = new Vr()), Br;
          }
          onExistenceFilterMismatch(e) {
            const t = Symbol();
            return (
              this.onExistenceFilterMismatchCallbacks.set(t, e),
              () => this.onExistenceFilterMismatchCallbacks.delete(t)
            );
          }
          notifyOnExistenceFilterMismatch(e) {
            this.onExistenceFilterMismatchCallbacks.forEach((t) => t(e));
          }
        }
        let Br = null;
        function Ur() {
          return new TextEncoder();
        }
        const jr = new a.Integer([4294967295, 4294967295], 0);
        function qr(e) {
          const t = Ur().encode(e),
            n = new a.Md5();
          return n.update(t), new Uint8Array(n.digest());
        }
        function zr(e) {
          const t = new DataView(e.buffer),
            n = t.getUint32(0, !0),
            r = t.getUint32(4, !0),
            i = t.getUint32(8, !0),
            s = t.getUint32(12, !0);
          return [new a.Integer([n, r], 0), new a.Integer([i, s], 0)];
        }
        class Gr {
          constructor(e, t, n) {
            if (
              ((this.bitmap = e),
              (this.padding = t),
              (this.hashCount = n),
              t < 0 || t >= 8)
            )
              throw new Kr(`Invalid padding: ${t}`);
            if (n < 0) throw new Kr(`Invalid hash count: ${n}`);
            if (e.length > 0 && 0 === this.hashCount)
              throw new Kr(`Invalid hash count: ${n}`);
            if (0 === e.length && 0 !== t)
              throw new Kr(`Invalid padding when bitmap length is 0: ${t}`);
            (this.de = 8 * e.length - t),
              (this.Ae = a.Integer.fromNumber(this.de));
          }
          Re(e, t, n) {
            let r = e.add(t.multiply(a.Integer.fromNumber(n)));
            return (
              1 === r.compare(jr) &&
                (r = new a.Integer([r.getBits(0), r.getBits(1)], 0)),
              r.modulo(this.Ae).toNumber()
            );
          }
          Ve(e) {
            return 0 != (this.bitmap[Math.floor(e / 8)] & (1 << e % 8));
          }
          mightContain(e) {
            if (0 === this.de) return !1;
            const t = qr(e),
              [n, r] = zr(t);
            for (let e = 0; e < this.hashCount; e++) {
              const t = this.Re(n, r, e);
              if (!this.Ve(t)) return !1;
            }
            return !0;
          }
          static create(e, t, n) {
            const r = e % 8 == 0 ? 0 : 8 - (e % 8),
              i = new Uint8Array(Math.ceil(e / 8)),
              s = new Gr(i, r, t);
            return n.forEach((e) => s.insert(e)), s;
          }
          insert(e) {
            if (0 === this.de) return;
            const t = qr(e),
              [n, r] = zr(t);
            for (let e = 0; e < this.hashCount; e++) {
              const t = this.Re(n, r, e);
              this.me(t);
            }
          }
          me(e) {
            const t = Math.floor(e / 8),
              n = e % 8;
            this.bitmap[t] |= 1 << n;
          }
        }
        class Kr extends Error {
          constructor() {
            super(...arguments), (this.name = "BloomFilterError");
          }
        }
        class $r {
          constructor(e, t, n, r, i) {
            (this.snapshotVersion = e),
              (this.targetChanges = t),
              (this.targetMismatches = n),
              (this.documentUpdates = r),
              (this.resolvedLimboDocuments = i);
          }
          static createSynthesizedRemoteEventForCurrentChange(e, t, n) {
            const r = new Map();
            return (
              r.set(
                e,
                Qr.createSynthesizedTargetChangeForCurrentChange(e, t, n)
              ),
              new $r(F.min(), r, new Xe(L), Bn(), Hn())
            );
          }
        }
        class Qr {
          constructor(e, t, n, r, i) {
            (this.resumeToken = e),
              (this.current = t),
              (this.addedDocuments = n),
              (this.modifiedDocuments = r),
              (this.removedDocuments = i);
          }
          static createSynthesizedTargetChangeForCurrentChange(e, t, n) {
            return new Qr(n, t, Hn(), Hn(), Hn());
          }
        }
        class Hr {
          constructor(e, t, n, r) {
            (this.fe = e),
              (this.removedTargetIds = t),
              (this.key = n),
              (this.ge = r);
          }
        }
        class Wr {
          constructor(e, t) {
            (this.targetId = e), (this.pe = t);
          }
        }
        class Jr {
          constructor(e, t, n = st.EMPTY_BYTE_STRING, r = null) {
            (this.state = e),
              (this.targetIds = t),
              (this.resumeToken = n),
              (this.cause = r);
          }
        }
        class Xr {
          constructor() {
            (this.ye = 0),
              (this.we = ei()),
              (this.Se = st.EMPTY_BYTE_STRING),
              (this.be = !1),
              (this.De = !0);
          }
          get current() {
            return this.be;
          }
          get resumeToken() {
            return this.Se;
          }
          get ve() {
            return 0 !== this.ye;
          }
          get Ce() {
            return this.De;
          }
          Fe(e) {
            e.approximateByteSize() > 0 && ((this.De = !0), (this.Se = e));
          }
          Me() {
            let e = Hn(),
              t = Hn(),
              n = Hn();
            return (
              this.we.forEach((r, i) => {
                switch (i) {
                  case 0:
                    e = e.add(r);
                    break;
                  case 2:
                    t = t.add(r);
                    break;
                  case 1:
                    n = n.add(r);
                    break;
                  default:
                    y();
                }
              }),
              new Qr(this.Se, this.be, e, t, n)
            );
          }
          xe() {
            (this.De = !1), (this.we = ei());
          }
          Oe(e, t) {
            (this.De = !0), (this.we = this.we.insert(e, t));
          }
          Ne(e) {
            (this.De = !0), (this.we = this.we.remove(e));
          }
          Be() {
            this.ye += 1;
          }
          Le() {
            this.ye -= 1;
          }
          ke() {
            (this.De = !0), (this.be = !0);
          }
        }
        class Yr {
          constructor(e) {
            (this.qe = e),
              (this.Qe = new Map()),
              (this.Ke = Bn()),
              (this.$e = Zr()),
              (this.Ue = new Xe(L));
          }
          We(e) {
            for (const t of e.fe)
              e.ge && e.ge.isFoundDocument()
                ? this.Ge(t, e.ge)
                : this.ze(t, e.key, e.ge);
            for (const t of e.removedTargetIds) this.ze(t, e.key, e.ge);
          }
          je(e) {
            this.forEachTarget(e, (t) => {
              const n = this.He(t);
              switch (e.state) {
                case 0:
                  this.Je(t) && n.Fe(e.resumeToken);
                  break;
                case 1:
                  n.Le(), n.ve || n.xe(), n.Fe(e.resumeToken);
                  break;
                case 2:
                  n.Le(), n.ve || this.removeTarget(t);
                  break;
                case 3:
                  this.Je(t) && (n.ke(), n.Fe(e.resumeToken));
                  break;
                case 4:
                  this.Je(t) && (this.Ye(t), n.Fe(e.resumeToken));
                  break;
                default:
                  y();
              }
            });
          }
          forEachTarget(e, t) {
            e.targetIds.length > 0
              ? e.targetIds.forEach(t)
              : this.Qe.forEach((e, n) => {
                  this.Je(n) && t(n);
                });
          }
          Ze(e) {
            var t, n;
            const r = e.targetId,
              i = e.pe.count,
              s = this.Xe(r);
            if (s) {
              const o = s.target;
              if (gn(o))
                if (0 === i) {
                  const e = new q(o.path);
                  this.ze(r, e, Bt.newNoDocument(e, F.min()));
                } else v(1 === i);
              else {
                const s = this.et(r);
                if (s !== i) {
                  const i = this.tt(e, s);
                  if (0 !== i.status) {
                    this.Ye(r);
                    const e =
                      2 === i.status
                        ? "TargetPurposeExistenceFilterMismatchBloom"
                        : "TargetPurposeExistenceFilterMismatch";
                    this.Ue = this.Ue.insert(r, e);
                  }
                  null === (t = Vr.instance) ||
                    void 0 === t ||
                    t.notifyOnExistenceFilterMismatch(
                      (function (e, t, n, r) {
                        var i, s, o, a, c, u;
                        const l = {
                            localCacheCount: n,
                            existenceFilterCount: r.count,
                          },
                          h = r.unchangedNames;
                        return (
                          h &&
                            ((l.bloomFilter = {
                              applied: 0 === e,
                              hashCount:
                                null !==
                                  (i = null == h ? void 0 : h.hashCount) &&
                                void 0 !== i
                                  ? i
                                  : 0,
                              bitmapLength:
                                null !==
                                  (a =
                                    null ===
                                      (o =
                                        null ===
                                          (s = null == h ? void 0 : h.bits) ||
                                        void 0 === s
                                          ? void 0
                                          : s.bitmap) || void 0 === o
                                      ? void 0
                                      : o.length) && void 0 !== a
                                  ? a
                                  : 0,
                              padding:
                                null !==
                                  (u =
                                    null ===
                                      (c = null == h ? void 0 : h.bits) ||
                                    void 0 === c
                                      ? void 0
                                      : c.padding) && void 0 !== u
                                  ? u
                                  : 0,
                            }),
                            t && (l.bloomFilter.mightContain = t)),
                          l
                        );
                      })(
                        i.status,
                        null !== (n = i.nt) && void 0 !== n ? n : null,
                        s,
                        e.pe
                      )
                    );
                }
              }
            }
          }
          tt(e, t) {
            const { unchangedNames: n, count: r } = e.pe;
            if (!n || !n.bits) return { status: 1 };
            const {
              bits: { bitmap: i = "", padding: s = 0 },
              hashCount: o = 0,
            } = n;
            let a, c;
            try {
              a = ut(i).toUint8Array();
            } catch (e) {
              if (e instanceof it)
                return (
                  g(
                    "Decoding the base64 bloom filter in existence filter failed (" +
                      e.message +
                      "); ignoring the bloom filter and falling back to full re-query."
                  ),
                  { status: 1 }
                );
              throw e;
            }
            try {
              c = new Gr(a, s, o);
            } catch (e) {
              return (
                g(
                  e instanceof Kr
                    ? "BloomFilter error: "
                    : "Applying bloom filter failed: ",
                  e
                ),
                { status: 1 }
              );
            }
            const u = (e) => {
              const t = this.qe.rt();
              return c.mightContain(
                `projects/${t.projectId}/databases/${t.database}/documents/${e}`
              );
            };
            return 0 === c.de
              ? { status: 1 }
              : { status: r === t - this.it(e.targetId, u) ? 0 : 2, nt: u };
          }
          it(e, t) {
            const n = this.qe.getRemoteKeysForTarget(e);
            let r = 0;
            return (
              n.forEach((n) => {
                t(n.path.canonicalString()) || (this.ze(e, n, null), r++);
              }),
              r
            );
          }
          st(e) {
            const t = new Map();
            this.Qe.forEach((n, r) => {
              const i = this.Xe(r);
              if (i) {
                if (n.current && gn(i.target)) {
                  const t = new q(i.target.path);
                  null !== this.Ke.get(t) ||
                    this.ot(r, t) ||
                    this.ze(r, t, Bt.newNoDocument(t, e));
                }
                n.Ce && (t.set(r, n.Me()), n.xe());
              }
            });
            let n = Hn();
            this.$e.forEach((e, t) => {
              let r = !0;
              t.forEachWhile((e) => {
                const t = this.Xe(e);
                return (
                  !t ||
                  "TargetPurposeLimboResolution" === t.purpose ||
                  ((r = !1), !1)
                );
              }),
                r && (n = n.add(e));
            }),
              this.Ke.forEach((t, n) => n.setReadTime(e));
            const r = new $r(e, t, this.Ue, this.Ke, n);
            return (this.Ke = Bn()), (this.$e = Zr()), (this.Ue = new Xe(L)), r;
          }
          Ge(e, t) {
            if (!this.Je(e)) return;
            const n = this.ot(e, t.key) ? 2 : 0;
            this.He(e).Oe(t.key, n),
              (this.Ke = this.Ke.insert(t.key, t)),
              (this.$e = this.$e.insert(t.key, this._t(t.key).add(e)));
          }
          ze(e, t, n) {
            if (!this.Je(e)) return;
            const r = this.He(e);
            this.ot(e, t) ? r.Oe(t, 1) : r.Ne(t),
              (this.$e = this.$e.insert(t, this._t(t).delete(e))),
              n && (this.Ke = this.Ke.insert(t, n));
          }
          removeTarget(e) {
            this.Qe.delete(e);
          }
          et(e) {
            const t = this.He(e).Me();
            return (
              this.qe.getRemoteKeysForTarget(e).size +
              t.addedDocuments.size -
              t.removedDocuments.size
            );
          }
          Be(e) {
            this.He(e).Be();
          }
          He(e) {
            let t = this.Qe.get(e);
            return t || ((t = new Xr()), this.Qe.set(e, t)), t;
          }
          _t(e) {
            let t = this.$e.get(e);
            return t || ((t = new et(L)), (this.$e = this.$e.insert(e, t))), t;
          }
          Je(e) {
            const t = null !== this.Xe(e);
            return (
              t || f("WatchChangeAggregator", "Detected inactive target", e), t
            );
          }
          Xe(e) {
            const t = this.Qe.get(e);
            return t && t.ve ? null : this.qe.ut(e);
          }
          Ye(e) {
            this.Qe.set(e, new Xr()),
              this.qe.getRemoteKeysForTarget(e).forEach((t) => {
                this.ze(e, t, null);
              });
          }
          ot(e, t) {
            return this.qe.getRemoteKeysForTarget(e).has(t);
          }
        }
        function Zr() {
          return new Xe(q.comparator);
        }
        function ei() {
          return new Xe(q.comparator);
        }
        const ti = { asc: "ASCENDING", desc: "DESCENDING" },
          ni = {
            "<": "LESS_THAN",
            "<=": "LESS_THAN_OR_EQUAL",
            ">": "GREATER_THAN",
            ">=": "GREATER_THAN_OR_EQUAL",
            "==": "EQUAL",
            "!=": "NOT_EQUAL",
            "array-contains": "ARRAY_CONTAINS",
            in: "IN",
            "not-in": "NOT_IN",
            "array-contains-any": "ARRAY_CONTAINS_ANY",
          },
          ri = { and: "AND", or: "OR" };
        class ii {
          constructor(e, t) {
            (this.databaseId = e), (this.useProto3Json = t);
          }
        }
        function si(e, t) {
          return e.useProto3Json || me(t) ? t : { value: t };
        }
        function oi(e, t) {
          return e.useProto3Json
            ? `${new Date(1e3 * t.seconds)
                .toISOString()
                .replace(/\.\d*/, "")
                .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
            : { seconds: "" + t.seconds, nanos: t.nanoseconds };
        }
        function ai(e, t) {
          return e.useProto3Json ? t.toBase64() : t.toUint8Array();
        }
        function ci(e, t) {
          return oi(e, t.toTimestamp());
        }
        function ui(e) {
          return (
            v(!!e),
            F.fromTimestamp(
              (function (e) {
                const t = at(e);
                return new R(t.seconds, t.nanos);
              })(e)
            )
          );
        }
        function li(e, t) {
          return (function (e) {
            return new B(["projects", e.projectId, "databases", e.database]);
          })(e)
            .child("documents")
            .child(t)
            .canonicalString();
        }
        function hi(e) {
          const t = B.fromString(e);
          return v(Li(t)), t;
        }
        function di(e, t) {
          return li(e.databaseId, t.path);
        }
        function fi(e, t) {
          const n = hi(t);
          if (n.get(1) !== e.databaseId.projectId)
            throw new _(
              b.INVALID_ARGUMENT,
              "Tried to deserialize key from different project: " +
                n.get(1) +
                " vs " +
                e.databaseId.projectId
            );
          if (n.get(3) !== e.databaseId.database)
            throw new _(
              b.INVALID_ARGUMENT,
              "Tried to deserialize key from different database: " +
                n.get(3) +
                " vs " +
                e.databaseId.database
            );
          return new q(yi(n));
        }
        function pi(e, t) {
          return li(e.databaseId, t);
        }
        function gi(e) {
          const t = hi(e);
          return 4 === t.length ? B.emptyPath() : yi(t);
        }
        function mi(e) {
          return new B([
            "projects",
            e.databaseId.projectId,
            "databases",
            e.databaseId.database,
          ]).canonicalString();
        }
        function yi(e) {
          return v(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
        }
        function vi(e, t, n) {
          return { name: di(e, t), fields: n.value.mapValue.fields };
        }
        function wi(e, t, n) {
          const r = fi(e, t.name),
            i = ui(t.updateTime),
            s = t.createTime ? ui(t.createTime) : F.min(),
            o = new Ft({ mapValue: { fields: t.fields } }),
            a = Bt.newFoundDocument(r, i, s, o);
          return (
            n && a.setHasCommittedMutations(),
            n ? a.setHasCommittedMutations() : a
          );
        }
        function bi(e, t) {
          let n;
          if (t instanceof Ir) n = { update: vi(e, t.key, t.value) };
          else if (t instanceof Cr) n = { delete: di(e, t.key) };
          else if (t instanceof Er)
            n = { update: vi(e, t.key, t.data), updateMask: Oi(t.fieldMask) };
          else {
            if (!(t instanceof Dr)) return y();
            n = { verify: di(e, t.key) };
          }
          return (
            t.fieldTransforms.length > 0 &&
              (n.updateTransforms = t.fieldTransforms.map((e) =>
                (function (e, t) {
                  const n = t.transform;
                  if (n instanceof ir)
                    return {
                      fieldPath: t.field.canonicalString(),
                      setToServerValue: "REQUEST_TIME",
                    };
                  if (n instanceof sr)
                    return {
                      fieldPath: t.field.canonicalString(),
                      appendMissingElements: { values: n.elements },
                    };
                  if (n instanceof ar)
                    return {
                      fieldPath: t.field.canonicalString(),
                      removeAllFromArray: { values: n.elements },
                    };
                  if (n instanceof ur)
                    return {
                      fieldPath: t.field.canonicalString(),
                      increment: n.Te,
                    };
                  throw y();
                })(0, e)
              )),
            t.precondition.isNone ||
              (n.currentDocument = (function (e, t) {
                return void 0 !== t.updateTime
                  ? { updateTime: ci(e, t.updateTime) }
                  : void 0 !== t.exists
                  ? { exists: t.exists }
                  : y();
              })(e, t.precondition)),
            n
          );
        }
        function _i(e, t) {
          const n = t.currentDocument
              ? (function (e) {
                  return void 0 !== e.updateTime
                    ? pr.updateTime(ui(e.updateTime))
                    : void 0 !== e.exists
                    ? pr.exists(e.exists)
                    : pr.none();
                })(t.currentDocument)
              : pr.none(),
            r = t.updateTransforms
              ? t.updateTransforms.map((t) =>
                  (function (e, t) {
                    let n = null;
                    if ("setToServerValue" in t)
                      v("REQUEST_TIME" === t.setToServerValue), (n = new ir());
                    else if ("appendMissingElements" in t) {
                      const e = t.appendMissingElements.values || [];
                      n = new sr(e);
                    } else if ("removeAllFromArray" in t) {
                      const e = t.removeAllFromArray.values || [];
                      n = new ar(e);
                    } else
                      "increment" in t ? (n = new ur(e, t.increment)) : y();
                    const r = j.fromServerFormat(t.fieldPath);
                    return new dr(r, n);
                  })(e, t)
                )
              : [];
          if (t.update) {
            t.update.name;
            const i = fi(e, t.update.name),
              s = new Ft({ mapValue: { fields: t.update.fields } });
            if (t.updateMask) {
              const e = (function (e) {
                const t = e.fieldPaths || [];
                return new rt(t.map((e) => j.fromServerFormat(e)));
              })(t.updateMask);
              return new Er(i, s, e, n, r);
            }
            return new Ir(i, s, n, r);
          }
          if (t.delete) {
            const r = fi(e, t.delete);
            return new Cr(r, n);
          }
          if (t.verify) {
            const r = fi(e, t.verify);
            return new Dr(r, n);
          }
          return y();
        }
        function Ii(e, t) {
          return { documents: [pi(e, t.path)] };
        }
        function Ei(e, t) {
          const n = { structuredQuery: {} },
            r = t.path;
          null !== t.collectionGroup
            ? ((n.parent = pi(e, r)),
              (n.structuredQuery.from = [
                { collectionId: t.collectionGroup, allDescendants: !0 },
              ]))
            : ((n.parent = pi(e, r.popLast())),
              (n.structuredQuery.from = [{ collectionId: r.lastSegment() }]));
          const i = (function (e) {
            if (0 !== e.length) return Ni(Qt.create(e, "and"));
          })(t.filters);
          i && (n.structuredQuery.where = i);
          const s = (function (e) {
            if (0 !== e.length)
              return e.map((e) =>
                (function (e) {
                  return { field: Ai(e.field), direction: xi(e.dir) };
                })(e)
              );
          })(t.orderBy);
          s && (n.structuredQuery.orderBy = s);
          const o = si(e, t.limit);
          return (
            null !== o && (n.structuredQuery.limit = o),
            t.startAt &&
              (n.structuredQuery.startAt = (function (e) {
                return { before: e.inclusive, values: e.position };
              })(t.startAt)),
            t.endAt &&
              (n.structuredQuery.endAt = (function (e) {
                return { before: !e.inclusive, values: e.position };
              })(t.endAt)),
            n
          );
        }
        function Si(e) {
          let t = gi(e.parent);
          const n = e.structuredQuery,
            r = n.from ? n.from.length : 0;
          let i = null;
          if (r > 0) {
            v(1 === r);
            const e = n.from[0];
            e.allDescendants
              ? (i = e.collectionId)
              : (t = t.child(e.collectionId));
          }
          let s = [];
          n.where &&
            (s = (function (e) {
              const t = Ti(e);
              return t instanceof Qt && Jt(t) ? t.getFilters() : [t];
            })(n.where));
          let o = [];
          n.orderBy &&
            (o = (function (e) {
              return e.map((e) =>
                (function (e) {
                  return new zt(
                    ki(e.field),
                    (function (e) {
                      switch (e) {
                        case "ASCENDING":
                          return "asc";
                        case "DESCENDING":
                          return "desc";
                        default:
                          return;
                      }
                    })(e.direction)
                  );
                })(e)
              );
            })(n.orderBy));
          let a = null;
          n.limit &&
            (a = (function (e) {
              let t;
              return (t = "object" == typeof e ? e.value : e), me(t) ? null : t;
            })(n.limit));
          let c = null;
          n.startAt &&
            (c = (function (e) {
              const t = !!e.before,
                n = e.values || [];
              return new Ut(n, t);
            })(n.startAt));
          let u = null;
          return (
            n.endAt &&
              (u = (function (e) {
                const t = !e.before,
                  n = e.values || [];
                return new Ut(n, t);
              })(n.endAt)),
            bn(t, i, o, s, a, "F", c, u)
          );
        }
        function Ti(e) {
          return void 0 !== e.unaryFilter
            ? (function (e) {
                switch (e.unaryFilter.op) {
                  case "IS_NAN":
                    const t = ki(e.unaryFilter.field);
                    return $t.create(t, "==", { doubleValue: NaN });
                  case "IS_NULL":
                    const n = ki(e.unaryFilter.field);
                    return $t.create(n, "==", { nullValue: "NULL_VALUE" });
                  case "IS_NOT_NAN":
                    const r = ki(e.unaryFilter.field);
                    return $t.create(r, "!=", { doubleValue: NaN });
                  case "IS_NOT_NULL":
                    const i = ki(e.unaryFilter.field);
                    return $t.create(i, "!=", { nullValue: "NULL_VALUE" });
                  default:
                    return y();
                }
              })(e)
            : void 0 !== e.fieldFilter
            ? (function (e) {
                return $t.create(
                  ki(e.fieldFilter.field),
                  (function (e) {
                    switch (e) {
                      case "EQUAL":
                        return "==";
                      case "NOT_EQUAL":
                        return "!=";
                      case "GREATER_THAN":
                        return ">";
                      case "GREATER_THAN_OR_EQUAL":
                        return ">=";
                      case "LESS_THAN":
                        return "<";
                      case "LESS_THAN_OR_EQUAL":
                        return "<=";
                      case "ARRAY_CONTAINS":
                        return "array-contains";
                      case "IN":
                        return "in";
                      case "NOT_IN":
                        return "not-in";
                      case "ARRAY_CONTAINS_ANY":
                        return "array-contains-any";
                      default:
                        return y();
                    }
                  })(e.fieldFilter.op),
                  e.fieldFilter.value
                );
              })(e)
            : void 0 !== e.compositeFilter
            ? (function (e) {
                return Qt.create(
                  e.compositeFilter.filters.map((e) => Ti(e)),
                  (function (e) {
                    switch (e) {
                      case "AND":
                        return "and";
                      case "OR":
                        return "or";
                      default:
                        return y();
                    }
                  })(e.compositeFilter.op)
                );
              })(e)
            : y();
        }
        function xi(e) {
          return ti[e];
        }
        function Ci(e) {
          return ni[e];
        }
        function Di(e) {
          return ri[e];
        }
        function Ai(e) {
          return { fieldPath: e.canonicalString() };
        }
        function ki(e) {
          return j.fromServerFormat(e.fieldPath);
        }
        function Ni(e) {
          return e instanceof $t
            ? (function (e) {
                if ("==" === e.op) {
                  if (At(e.value))
                    return {
                      unaryFilter: { field: Ai(e.field), op: "IS_NAN" },
                    };
                  if (Dt(e.value))
                    return {
                      unaryFilter: { field: Ai(e.field), op: "IS_NULL" },
                    };
                } else if ("!=" === e.op) {
                  if (At(e.value))
                    return {
                      unaryFilter: { field: Ai(e.field), op: "IS_NOT_NAN" },
                    };
                  if (Dt(e.value))
                    return {
                      unaryFilter: { field: Ai(e.field), op: "IS_NOT_NULL" },
                    };
                }
                return {
                  fieldFilter: {
                    field: Ai(e.field),
                    op: Ci(e.op),
                    value: e.value,
                  },
                };
              })(e)
            : e instanceof Qt
            ? (function (e) {
                const t = e.getFilters().map((e) => Ni(e));
                return 1 === t.length
                  ? t[0]
                  : { compositeFilter: { op: Di(e.op), filters: t } };
              })(e)
            : y();
        }
        function Oi(e) {
          const t = [];
          return (
            e.fields.forEach((e) => t.push(e.canonicalString())),
            { fieldPaths: t }
          );
        }
        function Li(e) {
          return (
            e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
          );
        }
        class Pi {
          constructor(
            e,
            t,
            n,
            r,
            i = F.min(),
            s = F.min(),
            o = st.EMPTY_BYTE_STRING,
            a = null
          ) {
            (this.target = e),
              (this.targetId = t),
              (this.purpose = n),
              (this.sequenceNumber = r),
              (this.snapshotVersion = i),
              (this.lastLimboFreeSnapshotVersion = s),
              (this.resumeToken = o),
              (this.expectedCount = a);
          }
          withSequenceNumber(e) {
            return new Pi(
              this.target,
              this.targetId,
              this.purpose,
              e,
              this.snapshotVersion,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken,
              this.expectedCount
            );
          }
          withResumeToken(e, t) {
            return new Pi(
              this.target,
              this.targetId,
              this.purpose,
              this.sequenceNumber,
              t,
              this.lastLimboFreeSnapshotVersion,
              e,
              null
            );
          }
          withExpectedCount(e) {
            return new Pi(
              this.target,
              this.targetId,
              this.purpose,
              this.sequenceNumber,
              this.snapshotVersion,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken,
              e
            );
          }
          withLastLimboFreeSnapshotVersion(e) {
            return new Pi(
              this.target,
              this.targetId,
              this.purpose,
              this.sequenceNumber,
              this.snapshotVersion,
              e,
              this.resumeToken,
              this.expectedCount
            );
          }
        }
        class Mi {
          constructor(e) {
            this.ct = e;
          }
        }
        function Ri(e, t) {
          const n = t.key,
            r = {
              prefixPath: n.getCollectionPath().popLast().toArray(),
              collectionGroup: n.collectionGroup,
              documentId: n.path.lastSegment(),
              readTime: Fi(t.readTime),
              hasCommittedMutations: t.hasCommittedMutations,
            };
          if (t.isFoundDocument())
            r.document = (function (e, t) {
              return {
                name: di(e, t.key),
                fields: t.data.value.mapValue.fields,
                updateTime: oi(e, t.version.toTimestamp()),
                createTime: oi(e, t.createTime.toTimestamp()),
              };
            })(e.ct, t);
          else if (t.isNoDocument())
            r.noDocument = { path: n.path.toArray(), readTime: Vi(t.version) };
          else {
            if (!t.isUnknownDocument()) return y();
            r.unknownDocument = {
              path: n.path.toArray(),
              version: Vi(t.version),
            };
          }
          return r;
        }
        function Fi(e) {
          const t = e.toTimestamp();
          return [t.seconds, t.nanoseconds];
        }
        function Vi(e) {
          const t = e.toTimestamp();
          return { seconds: t.seconds, nanoseconds: t.nanoseconds };
        }
        function Bi(e) {
          const t = new R(e.seconds, e.nanoseconds);
          return F.fromTimestamp(t);
        }
        function Ui(e, t) {
          const n = (t.baseMutations || []).map((t) => _i(e.ct, t));
          for (let e = 0; e < t.mutations.length - 1; ++e) {
            const n = t.mutations[e];
            if (
              e + 1 < t.mutations.length &&
              void 0 !== t.mutations[e + 1].transform
            ) {
              const r = t.mutations[e + 1];
              (n.updateTransforms = r.transform.fieldTransforms),
                t.mutations.splice(e + 1, 1),
                ++e;
            }
          }
          const r = t.mutations.map((t) => _i(e.ct, t)),
            i = R.fromMillis(t.localWriteTimeMs);
          return new Ar(t.batchId, i, n, r);
        }
        function ji(e) {
          const t = Bi(e.readTime),
            n =
              void 0 !== e.lastLimboFreeSnapshotVersion
                ? Bi(e.lastLimboFreeSnapshotVersion)
                : F.min();
          let r;
          return (
            (r = (function (e) {
              return void 0 !== e.documents;
            })(e.query)
              ? (function (e) {
                  return (
                    v(1 === e.documents.length), Cn(_n(gi(e.documents[0])))
                  );
                })(e.query)
              : (function (e) {
                  return Cn(Si(e));
                })(e.query)),
            new Pi(
              r,
              e.targetId,
              "TargetPurposeListen",
              e.lastListenSequenceNumber,
              t,
              n,
              st.fromBase64String(e.resumeToken)
            )
          );
        }
        function qi(e, t) {
          const n = Vi(t.snapshotVersion),
            r = Vi(t.lastLimboFreeSnapshotVersion);
          let i;
          i = gn(t.target) ? Ii(e.ct, t.target) : Ei(e.ct, t.target);
          const s = t.resumeToken.toBase64();
          return {
            targetId: t.targetId,
            canonicalId: fn(t.target),
            readTime: n,
            resumeToken: s,
            lastListenSequenceNumber: t.sequenceNumber,
            lastLimboFreeSnapshotVersion: r,
            query: i,
          };
        }
        function zi(e) {
          const t = Si({
            parent: e.parent,
            structuredQuery: e.structuredQuery,
          });
          return "LAST" === e.limitType ? An(t, t.limit, "L") : t;
        }
        function Gi(e, t) {
          return new Nr(t.largestBatchId, _i(e.ct, t.overlayMutation));
        }
        function Ki(e, t) {
          const n = t.path.lastSegment();
          return [e, we(t.path.popLast()), n];
        }
        function $i(e, t, n, r) {
          return {
            indexId: e,
            uid: t.uid || "",
            sequenceNumber: n,
            readTime: Vi(r.readTime),
            documentKey: we(r.documentKey.path),
            largestBatchId: r.largestBatchId,
          };
        }
        class Qi {
          getBundleMetadata(e, t) {
            return Hi(e)
              .get(t)
              .next((e) => {
                if (e)
                  return (function (e) {
                    return {
                      id: e.bundleId,
                      createTime: Bi(e.createTime),
                      version: e.version,
                    };
                  })(e);
              });
          }
          saveBundleMetadata(e, t) {
            return Hi(e).put(
              (function (e) {
                return {
                  bundleId: e.id,
                  createTime: Vi(ui(e.createTime)),
                  version: e.version,
                };
              })(t)
            );
          }
          getNamedQuery(e, t) {
            return Wi(e)
              .get(t)
              .next((e) => {
                if (e)
                  return (function (e) {
                    return {
                      name: e.name,
                      query: zi(e.bundledQuery),
                      readTime: Bi(e.readTime),
                    };
                  })(e);
              });
          }
          saveNamedQuery(e, t) {
            return Wi(e).put(
              (function (e) {
                return {
                  name: e.name,
                  readTime: Vi(ui(e.readTime)),
                  bundledQuery: e.bundledQuery,
                };
              })(t)
            );
          }
        }
        function Hi(e) {
          return Qe(e, "bundles");
        }
        function Wi(e) {
          return Qe(e, "namedQueries");
        }
        class Ji {
          constructor(e, t) {
            (this.serializer = e), (this.userId = t);
          }
          static lt(e, t) {
            const n = t.uid || "";
            return new Ji(e, n);
          }
          getOverlay(e, t) {
            return Xi(e)
              .get(Ki(this.userId, t))
              .next((e) => (e ? Gi(this.serializer, e) : null));
          }
          getOverlays(e, t) {
            const n = zn();
            return re
              .forEach(t, (t) =>
                this.getOverlay(e, t).next((e) => {
                  null !== e && n.set(t, e);
                })
              )
              .next(() => n);
          }
          saveOverlays(e, t, n) {
            const r = [];
            return (
              n.forEach((n, i) => {
                const s = new Nr(t, i);
                r.push(this.ht(e, s));
              }),
              re.waitFor(r)
            );
          }
          removeOverlaysForBatchId(e, t, n) {
            const r = new Set();
            t.forEach((e) => r.add(we(e.getCollectionPath())));
            const i = [];
            return (
              r.forEach((t) => {
                const r = IDBKeyRange.bound(
                  [this.userId, t, n],
                  [this.userId, t, n + 1],
                  !1,
                  !0
                );
                i.push(Xi(e).J("collectionPathOverlayIndex", r));
              }),
              re.waitFor(i)
            );
          }
          getOverlaysForCollection(e, t, n) {
            const r = zn(),
              i = we(t),
              s = IDBKeyRange.bound(
                [this.userId, i, n],
                [this.userId, i, Number.POSITIVE_INFINITY],
                !0
              );
            return Xi(e)
              .G("collectionPathOverlayIndex", s)
              .next((e) => {
                for (const t of e) {
                  const e = Gi(this.serializer, t);
                  r.set(e.getKey(), e);
                }
                return r;
              });
          }
          getOverlaysForCollectionGroup(e, t, n, r) {
            const i = zn();
            let s;
            const o = IDBKeyRange.bound(
              [this.userId, t, n],
              [this.userId, t, Number.POSITIVE_INFINITY],
              !0
            );
            return Xi(e)
              .Z(
                { index: "collectionGroupOverlayIndex", range: o },
                (e, t, n) => {
                  const o = Gi(this.serializer, t);
                  i.size() < r || o.largestBatchId === s
                    ? (i.set(o.getKey(), o), (s = o.largestBatchId))
                    : n.done();
                }
              )
              .next(() => i);
          }
          ht(e, t) {
            return Xi(e).put(
              (function (e, t, n) {
                const [r, i, s] = Ki(t, n.mutation.key);
                return {
                  userId: t,
                  collectionPath: i,
                  documentId: s,
                  collectionGroup: n.mutation.key.getCollectionGroup(),
                  largestBatchId: n.largestBatchId,
                  overlayMutation: bi(e.ct, n.mutation),
                };
              })(this.serializer, this.userId, t)
            );
          }
        }
        function Xi(e) {
          return Qe(e, "documentOverlays");
        }
        class Yi {
          constructor() {}
          Pt(e, t) {
            this.It(e, t), t.Tt();
          }
          It(e, t) {
            if ("nullValue" in e) this.Et(t, 5);
            else if ("booleanValue" in e)
              this.Et(t, 10), t.dt(e.booleanValue ? 1 : 0);
            else if ("integerValue" in e)
              this.Et(t, 15), t.dt(ct(e.integerValue));
            else if ("doubleValue" in e) {
              const n = ct(e.doubleValue);
              isNaN(n)
                ? this.Et(t, 13)
                : (this.Et(t, 15), ye(n) ? t.dt(0) : t.dt(n));
            } else if ("timestampValue" in e) {
              const n = e.timestampValue;
              this.Et(t, 20),
                "string" == typeof n
                  ? t.At(n)
                  : (t.At(`${n.seconds || ""}`), t.dt(n.nanos || 0));
            } else if ("stringValue" in e)
              this.Rt(e.stringValue, t), this.Vt(t);
            else if ("bytesValue" in e)
              this.Et(t, 30), t.ft(ut(e.bytesValue)), this.Vt(t);
            else if ("referenceValue" in e) this.gt(e.referenceValue, t);
            else if ("geoPointValue" in e) {
              const n = e.geoPointValue;
              this.Et(t, 45), t.dt(n.latitude || 0), t.dt(n.longitude || 0);
            } else
              "mapValue" in e
                ? Ot(e)
                  ? this.Et(t, Number.MAX_SAFE_INTEGER)
                  : (this.yt(e.mapValue, t), this.Vt(t))
                : "arrayValue" in e
                ? (this.wt(e.arrayValue, t), this.Vt(t))
                : y();
          }
          Rt(e, t) {
            this.Et(t, 25), this.St(e, t);
          }
          St(e, t) {
            t.At(e);
          }
          yt(e, t) {
            const n = e.fields || {};
            this.Et(t, 55);
            for (const e of Object.keys(n)) this.Rt(e, t), this.It(n[e], t);
          }
          wt(e, t) {
            const n = e.values || [];
            this.Et(t, 50);
            for (const e of n) this.It(e, t);
          }
          gt(e, t) {
            this.Et(t, 37),
              q.fromName(e).path.forEach((e) => {
                this.Et(t, 60), this.St(e, t);
              });
          }
          Et(e, t) {
            e.dt(t);
          }
          Vt(e) {
            e.dt(2);
          }
        }
        function Zi(e) {
          if (0 === e) return 8;
          let t = 0;
          return (
            e >> 4 == 0 && ((t += 4), (e <<= 4)),
            e >> 6 == 0 && ((t += 2), (e <<= 2)),
            e >> 7 == 0 && (t += 1),
            t
          );
        }
        function es(e) {
          const t =
            64 -
            (function (e) {
              let t = 0;
              for (let n = 0; n < 8; ++n) {
                const r = Zi(255 & e[n]);
                if (((t += r), 8 !== r)) break;
              }
              return t;
            })(e);
          return Math.ceil(t / 8);
        }
        Yi.bt = new Yi();
        class ts {
          constructor() {
            (this.buffer = new Uint8Array(1024)), (this.position = 0);
          }
          Dt(e) {
            const t = e[Symbol.iterator]();
            let n = t.next();
            for (; !n.done; ) this.vt(n.value), (n = t.next());
            this.Ct();
          }
          Ft(e) {
            const t = e[Symbol.iterator]();
            let n = t.next();
            for (; !n.done; ) this.Mt(n.value), (n = t.next());
            this.xt();
          }
          Ot(e) {
            for (const t of e) {
              const e = t.charCodeAt(0);
              if (e < 128) this.vt(e);
              else if (e < 2048)
                this.vt(960 | (e >>> 6)), this.vt(128 | (63 & e));
              else if (t < "\ud800" || "\udbff" < t)
                this.vt(480 | (e >>> 12)),
                  this.vt(128 | (63 & (e >>> 6))),
                  this.vt(128 | (63 & e));
              else {
                const e = t.codePointAt(0);
                this.vt(240 | (e >>> 18)),
                  this.vt(128 | (63 & (e >>> 12))),
                  this.vt(128 | (63 & (e >>> 6))),
                  this.vt(128 | (63 & e));
              }
            }
            this.Ct();
          }
          Nt(e) {
            for (const t of e) {
              const e = t.charCodeAt(0);
              if (e < 128) this.Mt(e);
              else if (e < 2048)
                this.Mt(960 | (e >>> 6)), this.Mt(128 | (63 & e));
              else if (t < "\ud800" || "\udbff" < t)
                this.Mt(480 | (e >>> 12)),
                  this.Mt(128 | (63 & (e >>> 6))),
                  this.Mt(128 | (63 & e));
              else {
                const e = t.codePointAt(0);
                this.Mt(240 | (e >>> 18)),
                  this.Mt(128 | (63 & (e >>> 12))),
                  this.Mt(128 | (63 & (e >>> 6))),
                  this.Mt(128 | (63 & e));
              }
            }
            this.xt();
          }
          Bt(e) {
            const t = this.Lt(e),
              n = es(t);
            this.kt(1 + n), (this.buffer[this.position++] = 255 & n);
            for (let e = t.length - n; e < t.length; ++e)
              this.buffer[this.position++] = 255 & t[e];
          }
          qt(e) {
            const t = this.Lt(e),
              n = es(t);
            this.kt(1 + n), (this.buffer[this.position++] = ~(255 & n));
            for (let e = t.length - n; e < t.length; ++e)
              this.buffer[this.position++] = ~(255 & t[e]);
          }
          Qt() {
            this.Kt(255), this.Kt(255);
          }
          $t() {
            this.Ut(255), this.Ut(255);
          }
          reset() {
            this.position = 0;
          }
          seed(e) {
            this.kt(e.length),
              this.buffer.set(e, this.position),
              (this.position += e.length);
          }
          Wt() {
            return this.buffer.slice(0, this.position);
          }
          Lt(e) {
            const t = (function (e) {
                const t = new DataView(new ArrayBuffer(8));
                return t.setFloat64(0, e, !1), new Uint8Array(t.buffer);
              })(e),
              n = 0 != (128 & t[0]);
            t[0] ^= n ? 255 : 128;
            for (let e = 1; e < t.length; ++e) t[e] ^= n ? 255 : 0;
            return t;
          }
          vt(e) {
            const t = 255 & e;
            0 === t
              ? (this.Kt(0), this.Kt(255))
              : 255 === t
              ? (this.Kt(255), this.Kt(0))
              : this.Kt(t);
          }
          Mt(e) {
            const t = 255 & e;
            0 === t
              ? (this.Ut(0), this.Ut(255))
              : 255 === t
              ? (this.Ut(255), this.Ut(0))
              : this.Ut(e);
          }
          Ct() {
            this.Kt(0), this.Kt(1);
          }
          xt() {
            this.Ut(0), this.Ut(1);
          }
          Kt(e) {
            this.kt(1), (this.buffer[this.position++] = e);
          }
          Ut(e) {
            this.kt(1), (this.buffer[this.position++] = ~e);
          }
          kt(e) {
            const t = e + this.position;
            if (t <= this.buffer.length) return;
            let n = 2 * this.buffer.length;
            n < t && (n = t);
            const r = new Uint8Array(n);
            r.set(this.buffer), (this.buffer = r);
          }
        }
        class ns {
          constructor(e) {
            this.Gt = e;
          }
          ft(e) {
            this.Gt.Dt(e);
          }
          At(e) {
            this.Gt.Ot(e);
          }
          dt(e) {
            this.Gt.Bt(e);
          }
          Tt() {
            this.Gt.Qt();
          }
        }
        class rs {
          constructor(e) {
            this.Gt = e;
          }
          ft(e) {
            this.Gt.Ft(e);
          }
          At(e) {
            this.Gt.Nt(e);
          }
          dt(e) {
            this.Gt.qt(e);
          }
          Tt() {
            this.Gt.$t();
          }
        }
        class is {
          constructor() {
            (this.Gt = new ts()),
              (this.zt = new ns(this.Gt)),
              (this.jt = new rs(this.Gt));
          }
          seed(e) {
            this.Gt.seed(e);
          }
          Ht(e) {
            return 0 === e ? this.zt : this.jt;
          }
          Wt() {
            return this.Gt.Wt();
          }
          reset() {
            this.Gt.reset();
          }
        }
        class ss {
          constructor(e, t, n, r) {
            (this.indexId = e),
              (this.documentKey = t),
              (this.arrayValue = n),
              (this.directionalValue = r);
          }
          Jt() {
            const e = this.directionalValue.length,
              t = 0 === e || 255 === this.directionalValue[e - 1] ? e + 1 : e,
              n = new Uint8Array(t);
            return (
              n.set(this.directionalValue, 0),
              t !== e
                ? n.set([0], this.directionalValue.length)
                : ++n[n.length - 1],
              new ss(this.indexId, this.documentKey, this.arrayValue, n)
            );
          }
        }
        function os(e, t) {
          let n = e.indexId - t.indexId;
          return 0 !== n
            ? n
            : ((n = as(e.arrayValue, t.arrayValue)),
              0 !== n
                ? n
                : ((n = as(e.directionalValue, t.directionalValue)),
                  0 !== n ? n : q.comparator(e.documentKey, t.documentKey)));
        }
        function as(e, t) {
          for (let n = 0; n < e.length && n < t.length; ++n) {
            const r = e[n] - t[n];
            if (0 !== r) return r;
          }
          return e.length - t.length;
        }
        class cs {
          constructor(e) {
            (this.collectionId =
              null != e.collectionGroup
                ? e.collectionGroup
                : e.path.lastSegment()),
              (this.Yt = e.orderBy),
              (this.Zt = []);
            for (const t of e.filters) {
              const e = t;
              e.isInequality() ? (this.Xt = e) : this.Zt.push(e);
            }
          }
          en(e) {
            v(e.collectionGroup === this.collectionId);
            const t = G(e);
            if (void 0 !== t && !this.tn(t)) return !1;
            const n = K(e);
            let r = new Set(),
              i = 0,
              s = 0;
            for (; i < n.length && this.tn(n[i]); ++i)
              r = r.add(n[i].fieldPath.canonicalString());
            if (i === n.length) return !0;
            if (void 0 !== this.Xt) {
              if (!r.has(this.Xt.field.canonicalString())) {
                const e = n[i];
                if (!this.nn(this.Xt, e) || !this.rn(this.Yt[s++], e))
                  return !1;
              }
              ++i;
            }
            for (; i < n.length; ++i) {
              const e = n[i];
              if (s >= this.Yt.length || !this.rn(this.Yt[s++], e)) return !1;
            }
            return !0;
          }
          tn(e) {
            for (const t of this.Zt) if (this.nn(t, e)) return !0;
            return !1;
          }
          nn(e, t) {
            if (void 0 === e || !e.field.isEqual(t.fieldPath)) return !1;
            const n =
              "array-contains" === e.op || "array-contains-any" === e.op;
            return (2 === t.kind) === n;
          }
          rn(e, t) {
            return (
              !!e.field.isEqual(t.fieldPath) &&
              ((0 === t.kind && "asc" === e.dir) ||
                (1 === t.kind && "desc" === e.dir))
            );
          }
        }
        function us(e) {
          var t, n;
          if ((v(e instanceof $t || e instanceof Qt), e instanceof $t)) {
            if (e instanceof cn) {
              const r =
                (null ===
                  (n =
                    null === (t = e.value.arrayValue) || void 0 === t
                      ? void 0
                      : t.values) || void 0 === n
                  ? void 0
                  : n.map((t) => $t.create(e.field, "==", t))) || [];
              return Qt.create(r, "or");
            }
            return e;
          }
          const r = e.filters.map((e) => us(e));
          return Qt.create(r, e.op);
        }
        function ls(e) {
          if (0 === e.getFilters().length) return [];
          const t = ps(us(e));
          return v(fs(t)), hs(t) || ds(t) ? [t] : t.getFilters();
        }
        function hs(e) {
          return e instanceof $t;
        }
        function ds(e) {
          return e instanceof Qt && Jt(e);
        }
        function fs(e) {
          return (
            hs(e) ||
            ds(e) ||
            (function (e) {
              if (e instanceof Qt && Wt(e)) {
                for (const t of e.getFilters()) if (!hs(t) && !ds(t)) return !1;
                return !0;
              }
              return !1;
            })(e)
          );
        }
        function ps(e) {
          if ((v(e instanceof $t || e instanceof Qt), e instanceof $t))
            return e;
          if (1 === e.filters.length) return ps(e.filters[0]);
          const t = e.filters.map((e) => ps(e));
          let n = Qt.create(t, e.op);
          return (
            (n = ys(n)),
            fs(n)
              ? n
              : (v(n instanceof Qt),
                v(Ht(n)),
                v(n.filters.length > 1),
                n.filters.reduce((e, t) => gs(e, t)))
          );
        }
        function gs(e, t) {
          let n;
          return (
            v(e instanceof $t || e instanceof Qt),
            v(t instanceof $t || t instanceof Qt),
            (n =
              e instanceof $t
                ? t instanceof $t
                  ? (function (e, t) {
                      return Qt.create([e, t], "and");
                    })(e, t)
                  : ms(e, t)
                : t instanceof $t
                ? ms(t, e)
                : (function (e, t) {
                    if (
                      (v(e.filters.length > 0 && t.filters.length > 0),
                      Ht(e) && Ht(t))
                    )
                      return en(e, t.getFilters());
                    const n = Wt(e) ? e : t,
                      r = Wt(e) ? t : e,
                      i = n.filters.map((e) => gs(e, r));
                    return Qt.create(i, "or");
                  })(e, t)),
            ys(n)
          );
        }
        function ms(e, t) {
          if (Ht(t)) return en(t, e.getFilters());
          {
            const n = t.filters.map((t) => gs(e, t));
            return Qt.create(n, "or");
          }
        }
        function ys(e) {
          if ((v(e instanceof $t || e instanceof Qt), e instanceof $t))
            return e;
          const t = e.getFilters();
          if (1 === t.length) return ys(t[0]);
          if (Xt(e)) return e;
          const n = t.map((e) => ys(e)),
            r = [];
          return (
            n.forEach((t) => {
              t instanceof $t
                ? r.push(t)
                : t instanceof Qt &&
                  (t.op === e.op ? r.push(...t.filters) : r.push(t));
            }),
            1 === r.length ? r[0] : Qt.create(r, e.op)
          );
        }
        class vs {
          constructor() {
            this.sn = new ws();
          }
          addToCollectionParentIndex(e, t) {
            return this.sn.add(t), re.resolve();
          }
          getCollectionParents(e, t) {
            return re.resolve(this.sn.getEntries(t));
          }
          addFieldIndex(e, t) {
            return re.resolve();
          }
          deleteFieldIndex(e, t) {
            return re.resolve();
          }
          getDocumentsMatchingTarget(e, t) {
            return re.resolve(null);
          }
          getIndexType(e, t) {
            return re.resolve(0);
          }
          getFieldIndexes(e, t) {
            return re.resolve([]);
          }
          getNextCollectionGroupToUpdate(e) {
            return re.resolve(null);
          }
          getMinOffset(e, t) {
            return re.resolve(Y.min());
          }
          getMinOffsetFromCollectionGroup(e, t) {
            return re.resolve(Y.min());
          }
          updateCollectionGroup(e, t, n) {
            return re.resolve();
          }
          updateIndexEntries(e, t) {
            return re.resolve();
          }
        }
        class ws {
          constructor() {
            this.index = {};
          }
          add(e) {
            const t = e.lastSegment(),
              n = e.popLast(),
              r = this.index[t] || new et(B.comparator),
              i = !r.has(n);
            return (this.index[t] = r.add(n)), i;
          }
          has(e) {
            const t = e.lastSegment(),
              n = e.popLast(),
              r = this.index[t];
            return r && r.has(n);
          }
          getEntries(e) {
            return (this.index[e] || new et(B.comparator)).toArray();
          }
        }
        const bs = new Uint8Array(0);
        class _s {
          constructor(e, t) {
            (this.user = e),
              (this.databaseId = t),
              (this.on = new ws()),
              (this._n = new Fn(
                (e) => fn(e),
                (e, t) => pn(e, t)
              )),
              (this.uid = e.uid || "");
          }
          addToCollectionParentIndex(e, t) {
            if (!this.on.has(t)) {
              const n = t.lastSegment(),
                r = t.popLast();
              e.addOnCommittedListener(() => {
                this.on.add(t);
              });
              const i = { collectionId: n, parent: we(r) };
              return Is(e).put(i);
            }
            return re.resolve();
          }
          getCollectionParents(e, t) {
            const n = [],
              r = IDBKeyRange.bound([t, ""], [M(t), ""], !1, !0);
            return Is(e)
              .G(r)
              .next((e) => {
                for (const r of e) {
                  if (r.collectionId !== t) break;
                  n.push(Ie(r.parent));
                }
                return n;
              });
          }
          addFieldIndex(e, t) {
            const n = Ss(e),
              r = (function (e) {
                return {
                  indexId: e.indexId,
                  collectionGroup: e.collectionGroup,
                  fields: e.fields.map((e) => [
                    e.fieldPath.canonicalString(),
                    e.kind,
                  ]),
                };
              })(t);
            delete r.indexId;
            const i = n.add(r);
            if (t.indexState) {
              const n = Ts(e);
              return i.next((e) => {
                n.put(
                  $i(
                    e,
                    this.user,
                    t.indexState.sequenceNumber,
                    t.indexState.offset
                  )
                );
              });
            }
            return i.next();
          }
          deleteFieldIndex(e, t) {
            const n = Ss(e),
              r = Ts(e),
              i = Es(e);
            return n
              .delete(t.indexId)
              .next(() =>
                r.delete(
                  IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0)
                )
              )
              .next(() =>
                i.delete(
                  IDBKeyRange.bound([t.indexId], [t.indexId + 1], !1, !0)
                )
              );
          }
          getDocumentsMatchingTarget(e, t) {
            const n = Es(e);
            let r = !0;
            const i = new Map();
            return re
              .forEach(this.an(t), (t) =>
                this.un(e, t).next((e) => {
                  r && (r = !!e), i.set(t, e);
                })
              )
              .next(() => {
                if (r) {
                  let e = Hn();
                  const r = [];
                  return re
                    .forEach(i, (i, s) => {
                      f(
                        "IndexedDbIndexManager",
                        `Using index ${(function (e) {
                          return `id=${e.indexId}|cg=${
                            e.collectionGroup
                          }|f=${e.fields
                            .map((e) => `${e.fieldPath}:${e.kind}`)
                            .join(",")}`;
                        })(i)} to execute ${fn(t)}`
                      );
                      const o = (function (e, t) {
                          const n = G(t);
                          if (void 0 === n) return null;
                          for (const t of mn(e, n.fieldPath))
                            switch (t.op) {
                              case "array-contains-any":
                                return t.value.arrayValue.values || [];
                              case "array-contains":
                                return [t.value];
                            }
                          return null;
                        })(s, i),
                        a = (function (e, t) {
                          const n = new Map();
                          for (const r of K(t))
                            for (const t of mn(e, r.fieldPath))
                              switch (t.op) {
                                case "==":
                                case "in":
                                  n.set(r.fieldPath.canonicalString(), t.value);
                                  break;
                                case "not-in":
                                case "!=":
                                  return (
                                    n.set(
                                      r.fieldPath.canonicalString(),
                                      t.value
                                    ),
                                    Array.from(n.values())
                                  );
                              }
                          return null;
                        })(s, i),
                        c = (function (e, t) {
                          const n = [];
                          let r = !0;
                          for (const i of K(t)) {
                            const t =
                              0 === i.kind
                                ? yn(e, i.fieldPath, e.startAt)
                                : vn(e, i.fieldPath, e.startAt);
                            n.push(t.value), r && (r = t.inclusive);
                          }
                          return new Ut(n, r);
                        })(s, i),
                        u = (function (e, t) {
                          const n = [];
                          let r = !0;
                          for (const i of K(t)) {
                            const t =
                              0 === i.kind
                                ? vn(e, i.fieldPath, e.endAt)
                                : yn(e, i.fieldPath, e.endAt);
                            n.push(t.value), r && (r = t.inclusive);
                          }
                          return new Ut(n, r);
                        })(s, i),
                        l = this.cn(i, s, c),
                        h = this.cn(i, s, u),
                        d = this.ln(i, s, a),
                        p = this.hn(
                          i.indexId,
                          o,
                          l,
                          c.inclusive,
                          h,
                          u.inclusive,
                          d
                        );
                      return re.forEach(p, (i) =>
                        n.H(i, t.limit).next((t) => {
                          t.forEach((t) => {
                            const n = q.fromSegments(t.documentKey);
                            e.has(n) || ((e = e.add(n)), r.push(n));
                          });
                        })
                      );
                    })
                    .next(() => r);
                }
                return re.resolve(null);
              });
          }
          an(e) {
            let t = this._n.get(e);
            return (
              t ||
              ((t =
                0 === e.filters.length
                  ? [e]
                  : ls(Qt.create(e.filters, "and")).map((t) =>
                      dn(
                        e.path,
                        e.collectionGroup,
                        e.orderBy,
                        t.getFilters(),
                        e.limit,
                        e.startAt,
                        e.endAt
                      )
                    )),
              this._n.set(e, t),
              t)
            );
          }
          hn(e, t, n, r, i, s, o) {
            const a = (null != t ? t.length : 1) * Math.max(n.length, i.length),
              c = a / (null != t ? t.length : 1),
              u = [];
            for (let l = 0; l < a; ++l) {
              const a = t ? this.Pn(t[l / c]) : bs,
                h = this.In(e, a, n[l % c], r),
                d = this.Tn(e, a, i[l % c], s),
                f = o.map((t) => this.In(e, a, t, !0));
              u.push(...this.createRange(h, d, f));
            }
            return u;
          }
          In(e, t, n, r) {
            const i = new ss(e, q.empty(), t, n);
            return r ? i : i.Jt();
          }
          Tn(e, t, n, r) {
            const i = new ss(e, q.empty(), t, n);
            return r ? i.Jt() : i;
          }
          un(e, t) {
            const n = new cs(t),
              r =
                null != t.collectionGroup
                  ? t.collectionGroup
                  : t.path.lastSegment();
            return this.getFieldIndexes(e, r).next((e) => {
              let t = null;
              for (const r of e)
                n.en(r) && (!t || r.fields.length > t.fields.length) && (t = r);
              return t;
            });
          }
          getIndexType(e, t) {
            let n = 2;
            const r = this.an(t);
            return re
              .forEach(r, (t) =>
                this.un(e, t).next((e) => {
                  e
                    ? 0 !== n &&
                      e.fields.length <
                        (function (e) {
                          let t = new et(j.comparator),
                            n = !1;
                          for (const r of e.filters)
                            for (const e of r.getFlattenedFilters())
                              e.field.isKeyField() ||
                                ("array-contains" === e.op ||
                                "array-contains-any" === e.op
                                  ? (n = !0)
                                  : (t = t.add(e.field)));
                          for (const n of e.orderBy)
                            n.field.isKeyField() || (t = t.add(n.field));
                          return t.size + (n ? 1 : 0);
                        })(t) &&
                      (n = 1)
                    : (n = 0);
                })
              )
              .next(() =>
                (function (e) {
                  return null !== e.limit;
                })(t) &&
                r.length > 1 &&
                2 === n
                  ? 1
                  : n
              );
          }
          En(e, t) {
            const n = new is();
            for (const r of K(e)) {
              const e = t.data.field(r.fieldPath);
              if (null == e) return null;
              const i = n.Ht(r.kind);
              Yi.bt.Pt(e, i);
            }
            return n.Wt();
          }
          Pn(e) {
            const t = new is();
            return Yi.bt.Pt(e, t.Ht(0)), t.Wt();
          }
          dn(e, t) {
            const n = new is();
            return (
              Yi.bt.Pt(
                Tt(this.databaseId, t),
                n.Ht(
                  (function (e) {
                    const t = K(e);
                    return 0 === t.length ? 0 : t[t.length - 1].kind;
                  })(e)
                )
              ),
              n.Wt()
            );
          }
          ln(e, t, n) {
            if (null === n) return [];
            let r = [];
            r.push(new is());
            let i = 0;
            for (const s of K(e)) {
              const e = n[i++];
              for (const n of r)
                if (this.An(t, s.fieldPath) && Ct(e)) r = this.Rn(r, s, e);
                else {
                  const t = n.Ht(s.kind);
                  Yi.bt.Pt(e, t);
                }
            }
            return this.Vn(r);
          }
          cn(e, t, n) {
            return this.ln(e, t, n.position);
          }
          Vn(e) {
            const t = [];
            for (let n = 0; n < e.length; ++n) t[n] = e[n].Wt();
            return t;
          }
          Rn(e, t, n) {
            const r = [...e],
              i = [];
            for (const e of n.arrayValue.values || [])
              for (const n of r) {
                const r = new is();
                r.seed(n.Wt()), Yi.bt.Pt(e, r.Ht(t.kind)), i.push(r);
              }
            return i;
          }
          An(e, t) {
            return !!e.filters.find(
              (e) =>
                e instanceof $t &&
                e.field.isEqual(t) &&
                ("in" === e.op || "not-in" === e.op)
            );
          }
          getFieldIndexes(e, t) {
            const n = Ss(e),
              r = Ts(e);
            return (
              t ? n.G("collectionGroupIndex", IDBKeyRange.bound(t, t)) : n.G()
            ).next((e) => {
              const t = [];
              return re
                .forEach(e, (e) =>
                  r.get([e.indexId, this.uid]).next((n) => {
                    t.push(
                      (function (e, t) {
                        const n = t
                            ? new W(
                                t.sequenceNumber,
                                new Y(
                                  Bi(t.readTime),
                                  new q(Ie(t.documentKey)),
                                  t.largestBatchId
                                )
                              )
                            : W.empty(),
                          r = e.fields.map(
                            ([e, t]) => new Q(j.fromServerFormat(e), t)
                          );
                        return new z(e.indexId, e.collectionGroup, r, n);
                      })(e, n)
                    );
                  })
                )
                .next(() => t);
            });
          }
          getNextCollectionGroupToUpdate(e) {
            return this.getFieldIndexes(e).next((e) =>
              0 === e.length
                ? null
                : (e.sort((e, t) => {
                    const n =
                      e.indexState.sequenceNumber - t.indexState.sequenceNumber;
                    return 0 !== n
                      ? n
                      : L(e.collectionGroup, t.collectionGroup);
                  }),
                  e[0].collectionGroup)
            );
          }
          updateCollectionGroup(e, t, n) {
            const r = Ss(e),
              i = Ts(e);
            return this.mn(e).next((e) =>
              r
                .G("collectionGroupIndex", IDBKeyRange.bound(t, t))
                .next((t) =>
                  re.forEach(t, (t) => i.put($i(t.indexId, this.user, e, n)))
                )
            );
          }
          updateIndexEntries(e, t) {
            const n = new Map();
            return re.forEach(t, (t, r) => {
              const i = n.get(t.collectionGroup);
              return (
                i ? re.resolve(i) : this.getFieldIndexes(e, t.collectionGroup)
              ).next(
                (i) => (
                  n.set(t.collectionGroup, i),
                  re.forEach(i, (n) =>
                    this.fn(e, t, n).next((t) => {
                      const i = this.gn(r, n);
                      return t.isEqual(i)
                        ? re.resolve()
                        : this.pn(e, r, n, t, i);
                    })
                  )
                )
              );
            });
          }
          yn(e, t, n, r) {
            return Es(e).put({
              indexId: r.indexId,
              uid: this.uid,
              arrayValue: r.arrayValue,
              directionalValue: r.directionalValue,
              orderedDocumentKey: this.dn(n, t.key),
              documentKey: t.key.path.toArray(),
            });
          }
          wn(e, t, n, r) {
            return Es(e).delete([
              r.indexId,
              this.uid,
              r.arrayValue,
              r.directionalValue,
              this.dn(n, t.key),
              t.key.path.toArray(),
            ]);
          }
          fn(e, t, n) {
            const r = Es(e);
            let i = new et(os);
            return r
              .Z(
                {
                  index: "documentKeyIndex",
                  range: IDBKeyRange.only([n.indexId, this.uid, this.dn(n, t)]),
                },
                (e, r) => {
                  i = i.add(
                    new ss(n.indexId, t, r.arrayValue, r.directionalValue)
                  );
                }
              )
              .next(() => i);
          }
          gn(e, t) {
            let n = new et(os);
            const r = this.En(t, e);
            if (null == r) return n;
            const i = G(t);
            if (null != i) {
              const s = e.data.field(i.fieldPath);
              if (Ct(s))
                for (const i of s.arrayValue.values || [])
                  n = n.add(new ss(t.indexId, e.key, this.Pn(i), r));
            } else n = n.add(new ss(t.indexId, e.key, bs, r));
            return n;
          }
          pn(e, t, n, r, i) {
            f(
              "IndexedDbIndexManager",
              "Updating index entries for document '%s'",
              t.key
            );
            const s = [];
            return (
              (function (e, t, n, r, i) {
                const s = e.getIterator(),
                  o = t.getIterator();
                let a = nt(s),
                  c = nt(o);
                for (; a || c; ) {
                  let e = !1,
                    t = !1;
                  if (a && c) {
                    const r = n(a, c);
                    r < 0 ? (t = !0) : r > 0 && (e = !0);
                  } else null != a ? (t = !0) : (e = !0);
                  e
                    ? (r(c), (c = nt(o)))
                    : t
                    ? (i(a), (a = nt(s)))
                    : ((a = nt(s)), (c = nt(o)));
                }
              })(
                r,
                i,
                os,
                (r) => {
                  s.push(this.yn(e, t, n, r));
                },
                (r) => {
                  s.push(this.wn(e, t, n, r));
                }
              ),
              re.waitFor(s)
            );
          }
          mn(e) {
            let t = 1;
            return Ts(e)
              .Z(
                {
                  index: "sequenceNumberIndex",
                  reverse: !0,
                  range: IDBKeyRange.upperBound([
                    this.uid,
                    Number.MAX_SAFE_INTEGER,
                  ]),
                },
                (e, n, r) => {
                  r.done(), (t = n.sequenceNumber + 1);
                }
              )
              .next(() => t);
          }
          createRange(e, t, n) {
            n = n
              .sort((e, t) => os(e, t))
              .filter((e, t, n) => !t || 0 !== os(e, n[t - 1]));
            const r = [];
            r.push(e);
            for (const i of n) {
              const n = os(i, e),
                s = os(i, t);
              if (0 === n) r[0] = e.Jt();
              else if (n > 0 && s < 0) r.push(i), r.push(i.Jt());
              else if (s > 0) break;
            }
            r.push(t);
            const i = [];
            for (let e = 0; e < r.length; e += 2) {
              if (this.Sn(r[e], r[e + 1])) return [];
              const t = [
                  r[e].indexId,
                  this.uid,
                  r[e].arrayValue,
                  r[e].directionalValue,
                  bs,
                  [],
                ],
                n = [
                  r[e + 1].indexId,
                  this.uid,
                  r[e + 1].arrayValue,
                  r[e + 1].directionalValue,
                  bs,
                  [],
                ];
              i.push(IDBKeyRange.bound(t, n));
            }
            return i;
          }
          Sn(e, t) {
            return os(e, t) > 0;
          }
          getMinOffsetFromCollectionGroup(e, t) {
            return this.getFieldIndexes(e, t).next(xs);
          }
          getMinOffset(e, t) {
            return re
              .mapArray(this.an(t), (t) => this.un(e, t).next((e) => e || y()))
              .next(xs);
          }
        }
        function Is(e) {
          return Qe(e, "collectionParents");
        }
        function Es(e) {
          return Qe(e, "indexEntries");
        }
        function Ss(e) {
          return Qe(e, "indexConfiguration");
        }
        function Ts(e) {
          return Qe(e, "indexState");
        }
        function xs(e) {
          v(0 !== e.length);
          let t = e[0].indexState.offset,
            n = t.largestBatchId;
          for (let r = 1; r < e.length; r++) {
            const i = e[r].indexState.offset;
            Z(i, t) < 0 && (t = i),
              n < i.largestBatchId && (n = i.largestBatchId);
          }
          return new Y(t.readTime, t.documentKey, n);
        }
        const Cs = {
          didRun: !1,
          sequenceNumbersCollected: 0,
          targetsRemoved: 0,
          documentsRemoved: 0,
        };
        class Ds {
          constructor(e, t, n) {
            (this.cacheSizeCollectionThreshold = e),
              (this.percentileToCollect = t),
              (this.maximumSequenceNumbersToCollect = n);
          }
          static withCacheSize(e) {
            return new Ds(
              e,
              Ds.DEFAULT_COLLECTION_PERCENTILE,
              Ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
            );
          }
        }
        function As(e, t, n) {
          const r = e.store("mutations"),
            i = e.store("documentMutations"),
            s = [],
            o = IDBKeyRange.only(n.batchId);
          let a = 0;
          const c = r.Z({ range: o }, (e, t, n) => (a++, n.delete()));
          s.push(
            c.next(() => {
              v(1 === a);
            })
          );
          const u = [];
          for (const e of n.mutations) {
            const r = Te(t, e.key.path, n.batchId);
            s.push(i.delete(r)), u.push(e.key);
          }
          return re.waitFor(s).next(() => u);
        }
        function ks(e) {
          if (!e) return 0;
          let t;
          if (e.document) t = e.document;
          else if (e.unknownDocument) t = e.unknownDocument;
          else {
            if (!e.noDocument) throw y();
            t = e.noDocument;
          }
          return JSON.stringify(t).length;
        }
        (Ds.DEFAULT_COLLECTION_PERCENTILE = 10),
          (Ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
          (Ds.DEFAULT = new Ds(
            41943040,
            Ds.DEFAULT_COLLECTION_PERCENTILE,
            Ds.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
          )),
          (Ds.DISABLED = new Ds(-1, 0, 0));
        class Ns {
          constructor(e, t, n, r) {
            (this.userId = e),
              (this.serializer = t),
              (this.indexManager = n),
              (this.referenceDelegate = r),
              (this.bn = {});
          }
          static lt(e, t, n, r) {
            v("" !== e.uid);
            const i = e.isAuthenticated() ? e.uid : "";
            return new Ns(i, t, n, r);
          }
          checkEmpty(e) {
            let t = !0;
            const n = IDBKeyRange.bound(
              [this.userId, Number.NEGATIVE_INFINITY],
              [this.userId, Number.POSITIVE_INFINITY]
            );
            return Ls(e)
              .Z({ index: "userMutationsIndex", range: n }, (e, n, r) => {
                (t = !1), r.done();
              })
              .next(() => t);
          }
          addMutationBatch(e, t, n, r) {
            const i = Ps(e),
              s = Ls(e);
            return s.add({}).next((o) => {
              v("number" == typeof o);
              const a = new Ar(o, t, n, r),
                c = (function (e, t, n) {
                  const r = n.baseMutations.map((t) => bi(e.ct, t)),
                    i = n.mutations.map((t) => bi(e.ct, t));
                  return {
                    userId: t,
                    batchId: n.batchId,
                    localWriteTimeMs: n.localWriteTime.toMillis(),
                    baseMutations: r,
                    mutations: i,
                  };
                })(this.serializer, this.userId, a),
                u = [];
              let l = new et((e, t) =>
                L(e.canonicalString(), t.canonicalString())
              );
              for (const e of r) {
                const t = Te(this.userId, e.key.path, o);
                (l = l.add(e.key.path.popLast())),
                  u.push(s.put(c)),
                  u.push(i.put(t, xe));
              }
              return (
                l.forEach((t) => {
                  u.push(this.indexManager.addToCollectionParentIndex(e, t));
                }),
                e.addOnCommittedListener(() => {
                  this.bn[o] = a.keys();
                }),
                re.waitFor(u).next(() => a)
              );
            });
          }
          lookupMutationBatch(e, t) {
            return Ls(e)
              .get(t)
              .next((e) =>
                e ? (v(e.userId === this.userId), Ui(this.serializer, e)) : null
              );
          }
          Dn(e, t) {
            return this.bn[t]
              ? re.resolve(this.bn[t])
              : this.lookupMutationBatch(e, t).next((e) => {
                  if (e) {
                    const n = e.keys();
                    return (this.bn[t] = n), n;
                  }
                  return null;
                });
          }
          getNextMutationBatchAfterBatchId(e, t) {
            const n = t + 1,
              r = IDBKeyRange.lowerBound([this.userId, n]);
            let i = null;
            return Ls(e)
              .Z({ index: "userMutationsIndex", range: r }, (e, t, r) => {
                t.userId === this.userId &&
                  (v(t.batchId >= n), (i = Ui(this.serializer, t))),
                  r.done();
              })
              .next(() => i);
          }
          getHighestUnacknowledgedBatchId(e) {
            const t = IDBKeyRange.upperBound([
              this.userId,
              Number.POSITIVE_INFINITY,
            ]);
            let n = -1;
            return Ls(e)
              .Z(
                { index: "userMutationsIndex", range: t, reverse: !0 },
                (e, t, r) => {
                  (n = t.batchId), r.done();
                }
              )
              .next(() => n);
          }
          getAllMutationBatches(e) {
            const t = IDBKeyRange.bound(
              [this.userId, -1],
              [this.userId, Number.POSITIVE_INFINITY]
            );
            return Ls(e)
              .G("userMutationsIndex", t)
              .next((e) => e.map((e) => Ui(this.serializer, e)));
          }
          getAllMutationBatchesAffectingDocumentKey(e, t) {
            const n = Se(this.userId, t.path),
              r = IDBKeyRange.lowerBound(n),
              i = [];
            return Ps(e)
              .Z({ range: r }, (n, r, s) => {
                const [o, a, c] = n,
                  u = Ie(a);
                if (o === this.userId && t.path.isEqual(u))
                  return Ls(e)
                    .get(c)
                    .next((e) => {
                      if (!e) throw y();
                      v(e.userId === this.userId),
                        i.push(Ui(this.serializer, e));
                    });
                s.done();
              })
              .next(() => i);
          }
          getAllMutationBatchesAffectingDocumentKeys(e, t) {
            let n = new et(L);
            const r = [];
            return (
              t.forEach((t) => {
                const i = Se(this.userId, t.path),
                  s = IDBKeyRange.lowerBound(i),
                  o = Ps(e).Z({ range: s }, (e, r, i) => {
                    const [s, o, a] = e,
                      c = Ie(o);
                    s === this.userId && t.path.isEqual(c)
                      ? (n = n.add(a))
                      : i.done();
                  });
                r.push(o);
              }),
              re.waitFor(r).next(() => this.vn(e, n))
            );
          }
          getAllMutationBatchesAffectingQuery(e, t) {
            const n = t.path,
              r = n.length + 1,
              i = Se(this.userId, n),
              s = IDBKeyRange.lowerBound(i);
            let o = new et(L);
            return Ps(e)
              .Z({ range: s }, (e, t, i) => {
                const [s, a, c] = e,
                  u = Ie(a);
                s === this.userId && n.isPrefixOf(u)
                  ? u.length === r && (o = o.add(c))
                  : i.done();
              })
              .next(() => this.vn(e, o));
          }
          vn(e, t) {
            const n = [],
              r = [];
            return (
              t.forEach((t) => {
                r.push(
                  Ls(e)
                    .get(t)
                    .next((e) => {
                      if (null === e) throw y();
                      v(e.userId === this.userId),
                        n.push(Ui(this.serializer, e));
                    })
                );
              }),
              re.waitFor(r).next(() => n)
            );
          }
          removeMutationBatch(e, t) {
            return As(e.ue, this.userId, t).next(
              (n) => (
                e.addOnCommittedListener(() => {
                  this.Cn(t.batchId);
                }),
                re.forEach(n, (t) =>
                  this.referenceDelegate.markPotentiallyOrphaned(e, t)
                )
              )
            );
          }
          Cn(e) {
            delete this.bn[e];
          }
          performConsistencyCheck(e) {
            return this.checkEmpty(e).next((t) => {
              if (!t) return re.resolve();
              const n = IDBKeyRange.lowerBound(
                  (function (e) {
                    return [e];
                  })(this.userId)
                ),
                r = [];
              return Ps(e)
                .Z({ range: n }, (e, t, n) => {
                  if (e[0] === this.userId) {
                    const t = Ie(e[1]);
                    r.push(t);
                  } else n.done();
                })
                .next(() => {
                  v(0 === r.length);
                });
            });
          }
          containsKey(e, t) {
            return Os(e, this.userId, t);
          }
          Fn(e) {
            return Ms(e)
              .get(this.userId)
              .next(
                (e) =>
                  e || {
                    userId: this.userId,
                    lastAcknowledgedBatchId: -1,
                    lastStreamToken: "",
                  }
              );
          }
        }
        function Os(e, t, n) {
          const r = Se(t, n.path),
            i = r[1],
            s = IDBKeyRange.lowerBound(r);
          let o = !1;
          return Ps(e)
            .Z({ range: s, Y: !0 }, (e, n, r) => {
              const [s, a, c] = e;
              s === t && a === i && (o = !0), r.done();
            })
            .next(() => o);
        }
        function Ls(e) {
          return Qe(e, "mutations");
        }
        function Ps(e) {
          return Qe(e, "documentMutations");
        }
        function Ms(e) {
          return Qe(e, "mutationQueues");
        }
        class Rs {
          constructor(e) {
            this.Mn = e;
          }
          next() {
            return (this.Mn += 2), this.Mn;
          }
          static xn() {
            return new Rs(0);
          }
          static On() {
            return new Rs(-1);
          }
        }
        class Fs {
          constructor(e, t) {
            (this.referenceDelegate = e), (this.serializer = t);
          }
          allocateTargetId(e) {
            return this.Nn(e).next((t) => {
              const n = new Rs(t.highestTargetId);
              return (
                (t.highestTargetId = n.next()),
                this.Bn(e, t).next(() => t.highestTargetId)
              );
            });
          }
          getLastRemoteSnapshotVersion(e) {
            return this.Nn(e).next((e) =>
              F.fromTimestamp(
                new R(
                  e.lastRemoteSnapshotVersion.seconds,
                  e.lastRemoteSnapshotVersion.nanoseconds
                )
              )
            );
          }
          getHighestSequenceNumber(e) {
            return this.Nn(e).next((e) => e.highestListenSequenceNumber);
          }
          setTargetsMetadata(e, t, n) {
            return this.Nn(e).next(
              (r) => (
                (r.highestListenSequenceNumber = t),
                n && (r.lastRemoteSnapshotVersion = n.toTimestamp()),
                t > r.highestListenSequenceNumber &&
                  (r.highestListenSequenceNumber = t),
                this.Bn(e, r)
              )
            );
          }
          addTargetData(e, t) {
            return this.Ln(e, t).next(() =>
              this.Nn(e).next(
                (n) => ((n.targetCount += 1), this.kn(t, n), this.Bn(e, n))
              )
            );
          }
          updateTargetData(e, t) {
            return this.Ln(e, t);
          }
          removeTargetData(e, t) {
            return this.removeMatchingKeysForTargetId(e, t.targetId)
              .next(() => Vs(e).delete(t.targetId))
              .next(() => this.Nn(e))
              .next(
                (t) => (
                  v(t.targetCount > 0), (t.targetCount -= 1), this.Bn(e, t)
                )
              );
          }
          removeTargets(e, t, n) {
            let r = 0;
            const i = [];
            return Vs(e)
              .Z((s, o) => {
                const a = ji(o);
                a.sequenceNumber <= t &&
                  null === n.get(a.targetId) &&
                  (r++, i.push(this.removeTargetData(e, a)));
              })
              .next(() => re.waitFor(i))
              .next(() => r);
          }
          forEachTarget(e, t) {
            return Vs(e).Z((e, n) => {
              const r = ji(n);
              t(r);
            });
          }
          Nn(e) {
            return Bs(e)
              .get("targetGlobalKey")
              .next((e) => (v(null !== e), e));
          }
          Bn(e, t) {
            return Bs(e).put("targetGlobalKey", t);
          }
          Ln(e, t) {
            return Vs(e).put(qi(this.serializer, t));
          }
          kn(e, t) {
            let n = !1;
            return (
              e.targetId > t.highestTargetId &&
                ((t.highestTargetId = e.targetId), (n = !0)),
              e.sequenceNumber > t.highestListenSequenceNumber &&
                ((t.highestListenSequenceNumber = e.sequenceNumber), (n = !0)),
              n
            );
          }
          getTargetCount(e) {
            return this.Nn(e).next((e) => e.targetCount);
          }
          getTargetData(e, t) {
            const n = fn(t),
              r = IDBKeyRange.bound(
                [n, Number.NEGATIVE_INFINITY],
                [n, Number.POSITIVE_INFINITY]
              );
            let i = null;
            return Vs(e)
              .Z({ range: r, index: "queryTargetsIndex" }, (e, n, r) => {
                const s = ji(n);
                pn(t, s.target) && ((i = s), r.done());
              })
              .next(() => i);
          }
          addMatchingKeys(e, t, n) {
            const r = [],
              i = Us(e);
            return (
              t.forEach((t) => {
                const s = we(t.path);
                r.push(i.put({ targetId: n, path: s })),
                  r.push(this.referenceDelegate.addReference(e, n, t));
              }),
              re.waitFor(r)
            );
          }
          removeMatchingKeys(e, t, n) {
            const r = Us(e);
            return re.forEach(t, (t) => {
              const i = we(t.path);
              return re.waitFor([
                r.delete([n, i]),
                this.referenceDelegate.removeReference(e, n, t),
              ]);
            });
          }
          removeMatchingKeysForTargetId(e, t) {
            const n = Us(e),
              r = IDBKeyRange.bound([t], [t + 1], !1, !0);
            return n.delete(r);
          }
          getMatchingKeysForTargetId(e, t) {
            const n = IDBKeyRange.bound([t], [t + 1], !1, !0),
              r = Us(e);
            let i = Hn();
            return r
              .Z({ range: n, Y: !0 }, (e, t, n) => {
                const r = Ie(e[1]),
                  s = new q(r);
                i = i.add(s);
              })
              .next(() => i);
          }
          containsKey(e, t) {
            const n = we(t.path),
              r = IDBKeyRange.bound([n], [M(n)], !1, !0);
            let i = 0;
            return Us(e)
              .Z(
                { index: "documentTargetsIndex", Y: !0, range: r },
                ([e, t], n, r) => {
                  0 !== e && (i++, r.done());
                }
              )
              .next(() => i > 0);
          }
          ut(e, t) {
            return Vs(e)
              .get(t)
              .next((e) => (e ? ji(e) : null));
          }
        }
        function Vs(e) {
          return Qe(e, "targets");
        }
        function Bs(e) {
          return Qe(e, "targetGlobal");
        }
        function Us(e) {
          return Qe(e, "targetDocuments");
        }
        function js([e, t], [n, r]) {
          const i = L(e, n);
          return 0 === i ? L(t, r) : i;
        }
        class qs {
          constructor(e) {
            (this.qn = e), (this.buffer = new et(js)), (this.Qn = 0);
          }
          Kn() {
            return ++this.Qn;
          }
          $n(e) {
            const t = [e, this.Kn()];
            if (this.buffer.size < this.qn) this.buffer = this.buffer.add(t);
            else {
              const e = this.buffer.last();
              js(t, e) < 0 && (this.buffer = this.buffer.delete(e).add(t));
            }
          }
          get maxValue() {
            return this.buffer.last()[0];
          }
        }
        class zs {
          constructor(e, t, n) {
            (this.garbageCollector = e),
              (this.asyncQueue = t),
              (this.localStore = n),
              (this.Un = null);
          }
          start() {
            -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold &&
              this.Wn(6e4);
          }
          stop() {
            this.Un && (this.Un.cancel(), (this.Un = null));
          }
          get started() {
            return null !== this.Un;
          }
          Wn(e) {
            f("LruGarbageCollector", `Garbage collection scheduled in ${e}ms`),
              (this.Un = this.asyncQueue.enqueueAfterDelay(
                "lru_garbage_collection",
                e,
                async () => {
                  this.Un = null;
                  try {
                    await this.localStore.collectGarbage(this.garbageCollector);
                  } catch (e) {
                    ce(e)
                      ? f(
                          "LruGarbageCollector",
                          "Ignoring IndexedDB error during garbage collection: ",
                          e
                        )
                      : await ne(e);
                  }
                  await this.Wn(3e5);
                }
              ));
          }
        }
        class Gs {
          constructor(e, t) {
            (this.Gn = e), (this.params = t);
          }
          calculateTargetCount(e, t) {
            return this.Gn.zn(e).next((e) => Math.floor((t / 100) * e));
          }
          nthSequenceNumber(e, t) {
            if (0 === t) return re.resolve(ge.ae);
            const n = new qs(t);
            return this.Gn.forEachTarget(e, (e) => n.$n(e.sequenceNumber))
              .next(() => this.Gn.jn(e, (e) => n.$n(e)))
              .next(() => n.maxValue);
          }
          removeTargets(e, t, n) {
            return this.Gn.removeTargets(e, t, n);
          }
          removeOrphanedDocuments(e, t) {
            return this.Gn.removeOrphanedDocuments(e, t);
          }
          collect(e, t) {
            return -1 === this.params.cacheSizeCollectionThreshold
              ? (f(
                  "LruGarbageCollector",
                  "Garbage collection skipped; disabled"
                ),
                re.resolve(Cs))
              : this.getCacheSize(e).next((n) =>
                  n < this.params.cacheSizeCollectionThreshold
                    ? (f(
                        "LruGarbageCollector",
                        `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
                      ),
                      Cs)
                    : this.Hn(e, t)
                );
          }
          getCacheSize(e) {
            return this.Gn.getCacheSize(e);
          }
          Hn(e, t) {
            let n, r, i, o, a, c, u;
            const l = Date.now();
            return this.calculateTargetCount(e, this.params.percentileToCollect)
              .next(
                (t) => (
                  t > this.params.maximumSequenceNumbersToCollect
                    ? (f(
                        "LruGarbageCollector",
                        `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`
                      ),
                      (r = this.params.maximumSequenceNumbersToCollect))
                    : (r = t),
                  (o = Date.now()),
                  this.nthSequenceNumber(e, r)
                )
              )
              .next(
                (r) => ((n = r), (a = Date.now()), this.removeTargets(e, n, t))
              )
              .next(
                (t) => (
                  (i = t), (c = Date.now()), this.removeOrphanedDocuments(e, n)
                )
              )
              .next(
                (e) => (
                  (u = Date.now()),
                  d() <= s.LogLevel.DEBUG &&
                    f(
                      "LruGarbageCollector",
                      `LRU Garbage Collection\n\tCounted targets in ${
                        o - l
                      }ms\n\tDetermined least recently used ${r} in ` +
                        (a - o) +
                        "ms\n" +
                        `\tRemoved ${i} targets in ` +
                        (c - a) +
                        "ms\n" +
                        `\tRemoved ${e} documents in ` +
                        (u - c) +
                        "ms\n" +
                        `Total Duration: ${u - l}ms`
                    ),
                  re.resolve({
                    didRun: !0,
                    sequenceNumbersCollected: r,
                    targetsRemoved: i,
                    documentsRemoved: e,
                  })
                )
              );
          }
        }
        function Ks(e, t) {
          return new Gs(e, t);
        }
        class $s {
          constructor(e, t) {
            (this.db = e), (this.garbageCollector = Ks(this, t));
          }
          zn(e) {
            const t = this.Jn(e);
            return this.db
              .getTargetCache()
              .getTargetCount(e)
              .next((e) => t.next((t) => e + t));
          }
          Jn(e) {
            let t = 0;
            return this.jn(e, (e) => {
              t++;
            }).next(() => t);
          }
          forEachTarget(e, t) {
            return this.db.getTargetCache().forEachTarget(e, t);
          }
          jn(e, t) {
            return this.Yn(e, (e, n) => t(n));
          }
          addReference(e, t, n) {
            return Qs(e, n);
          }
          removeReference(e, t, n) {
            return Qs(e, n);
          }
          removeTargets(e, t, n) {
            return this.db.getTargetCache().removeTargets(e, t, n);
          }
          markPotentiallyOrphaned(e, t) {
            return Qs(e, t);
          }
          Zn(e, t) {
            return (function (e, t) {
              let n = !1;
              return Ms(e)
                .X((r) =>
                  Os(e, r, t).next((e) => (e && (n = !0), re.resolve(!e)))
                )
                .next(() => n);
            })(e, t);
          }
          removeOrphanedDocuments(e, t) {
            const n = this.db.getRemoteDocumentCache().newChangeBuffer(),
              r = [];
            let i = 0;
            return this.Yn(e, (s, o) => {
              if (o <= t) {
                const t = this.Zn(e, s).next((t) => {
                  if (!t)
                    return (
                      i++,
                      n.getEntry(e, s).next(
                        () => (
                          n.removeEntry(s, F.min()),
                          Us(e).delete(
                            (function (e) {
                              return [0, we(e.path)];
                            })(s)
                          )
                        )
                      )
                    );
                });
                r.push(t);
              }
            })
              .next(() => re.waitFor(r))
              .next(() => n.apply(e))
              .next(() => i);
          }
          removeTarget(e, t) {
            const n = t.withSequenceNumber(e.currentSequenceNumber);
            return this.db.getTargetCache().updateTargetData(e, n);
          }
          updateLimboDocument(e, t) {
            return Qs(e, t);
          }
          Yn(e, t) {
            const n = Us(e);
            let r,
              i = ge.ae;
            return n
              .Z(
                { index: "documentTargetsIndex" },
                ([e, n], { path: s, sequenceNumber: o }) => {
                  0 === e
                    ? (i !== ge.ae && t(new q(Ie(r)), i), (i = o), (r = s))
                    : (i = ge.ae);
                }
              )
              .next(() => {
                i !== ge.ae && t(new q(Ie(r)), i);
              });
          }
          getCacheSize(e) {
            return this.db.getRemoteDocumentCache().getSize(e);
          }
        }
        function Qs(e, t) {
          return Us(e).put(
            (function (e, t) {
              return { targetId: 0, path: we(e.path), sequenceNumber: t };
            })(t, e.currentSequenceNumber)
          );
        }
        class Hs {
          constructor() {
            (this.changes = new Fn(
              (e) => e.toString(),
              (e, t) => e.isEqual(t)
            )),
              (this.changesApplied = !1);
          }
          addEntry(e) {
            this.assertNotApplied(), this.changes.set(e.key, e);
          }
          removeEntry(e, t) {
            this.assertNotApplied(),
              this.changes.set(e, Bt.newInvalidDocument(e).setReadTime(t));
          }
          getEntry(e, t) {
            this.assertNotApplied();
            const n = this.changes.get(t);
            return void 0 !== n ? re.resolve(n) : this.getFromCache(e, t);
          }
          getEntries(e, t) {
            return this.getAllFromCache(e, t);
          }
          apply(e) {
            return (
              this.assertNotApplied(),
              (this.changesApplied = !0),
              this.applyChanges(e)
            );
          }
          assertNotApplied() {}
        }
        class Ws {
          constructor(e) {
            this.serializer = e;
          }
          setIndexManager(e) {
            this.indexManager = e;
          }
          addEntry(e, t, n) {
            return Zs(e).put(n);
          }
          removeEntry(e, t, n) {
            return Zs(e).delete(
              (function (e, t) {
                const n = e.path.toArray();
                return [
                  n.slice(0, n.length - 2),
                  n[n.length - 2],
                  Fi(t),
                  n[n.length - 1],
                ];
              })(t, n)
            );
          }
          updateMetadata(e, t) {
            return this.getMetadata(e).next(
              (n) => ((n.byteSize += t), this.Xn(e, n))
            );
          }
          getEntry(e, t) {
            let n = Bt.newInvalidDocument(t);
            return Zs(e)
              .Z(
                { index: "documentKeyIndex", range: IDBKeyRange.only(eo(t)) },
                (e, r) => {
                  n = this.er(t, r);
                }
              )
              .next(() => n);
          }
          tr(e, t) {
            let n = { size: 0, document: Bt.newInvalidDocument(t) };
            return Zs(e)
              .Z(
                { index: "documentKeyIndex", range: IDBKeyRange.only(eo(t)) },
                (e, r) => {
                  n = { document: this.er(t, r), size: ks(r) };
                }
              )
              .next(() => n);
          }
          getEntries(e, t) {
            let n = Bn();
            return this.nr(e, t, (e, t) => {
              const r = this.er(e, t);
              n = n.insert(e, r);
            }).next(() => n);
          }
          rr(e, t) {
            let n = Bn(),
              r = new Xe(q.comparator);
            return this.nr(e, t, (e, t) => {
              const i = this.er(e, t);
              (n = n.insert(e, i)), (r = r.insert(e, ks(t)));
            }).next(() => ({ documents: n, ir: r }));
          }
          nr(e, t, n) {
            if (t.isEmpty()) return re.resolve();
            let r = new et(no);
            t.forEach((e) => (r = r.add(e)));
            const i = IDBKeyRange.bound(eo(r.first()), eo(r.last())),
              s = r.getIterator();
            let o = s.getNext();
            return Zs(e)
              .Z({ index: "documentKeyIndex", range: i }, (e, t, r) => {
                const i = q.fromSegments([
                  ...t.prefixPath,
                  t.collectionGroup,
                  t.documentId,
                ]);
                for (; o && no(o, i) < 0; ) n(o, null), (o = s.getNext());
                o &&
                  o.isEqual(i) &&
                  (n(o, t), (o = s.hasNext() ? s.getNext() : null)),
                  o ? r.W(eo(o)) : r.done();
              })
              .next(() => {
                for (; o; ) n(o, null), (o = s.hasNext() ? s.getNext() : null);
              });
          }
          getDocumentsMatchingQuery(e, t, n, r) {
            const i = t.path,
              s = [
                i.popLast().toArray(),
                i.lastSegment(),
                Fi(n.readTime),
                n.documentKey.path.isEmpty()
                  ? ""
                  : n.documentKey.path.lastSegment(),
              ],
              o = [
                i.popLast().toArray(),
                i.lastSegment(),
                [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                "",
              ];
            return Zs(e)
              .G(IDBKeyRange.bound(s, o, !0))
              .next((e) => {
                let n = Bn();
                for (const i of e) {
                  const e = this.er(
                    q.fromSegments(
                      i.prefixPath.concat(i.collectionGroup, i.documentId)
                    ),
                    i
                  );
                  e.isFoundDocument() &&
                    (Ln(t, e) || r.has(e.key)) &&
                    (n = n.insert(e.key, e));
                }
                return n;
              });
          }
          getAllFromCollectionGroup(e, t, n, r) {
            let i = Bn();
            const s = to(t, n),
              o = to(t, Y.max());
            return Zs(e)
              .Z(
                {
                  index: "collectionGroupIndex",
                  range: IDBKeyRange.bound(s, o, !0),
                },
                (e, t, n) => {
                  const s = this.er(
                    q.fromSegments(
                      t.prefixPath.concat(t.collectionGroup, t.documentId)
                    ),
                    t
                  );
                  (i = i.insert(s.key, s)), i.size === r && n.done();
                }
              )
              .next(() => i);
          }
          newChangeBuffer(e) {
            return new Xs(this, !!e && e.trackRemovals);
          }
          getSize(e) {
            return this.getMetadata(e).next((e) => e.byteSize);
          }
          getMetadata(e) {
            return Ys(e)
              .get("remoteDocumentGlobalKey")
              .next((e) => (v(!!e), e));
          }
          Xn(e, t) {
            return Ys(e).put("remoteDocumentGlobalKey", t);
          }
          er(e, t) {
            if (t) {
              const e = (function (e, t) {
                let n;
                if (t.document)
                  n = wi(e.ct, t.document, !!t.hasCommittedMutations);
                else if (t.noDocument) {
                  const e = q.fromSegments(t.noDocument.path),
                    r = Bi(t.noDocument.readTime);
                  (n = Bt.newNoDocument(e, r)),
                    t.hasCommittedMutations && n.setHasCommittedMutations();
                } else {
                  if (!t.unknownDocument) return y();
                  {
                    const e = q.fromSegments(t.unknownDocument.path),
                      r = Bi(t.unknownDocument.version);
                    n = Bt.newUnknownDocument(e, r);
                  }
                }
                return (
                  t.readTime &&
                    n.setReadTime(
                      (function (e) {
                        const t = new R(e[0], e[1]);
                        return F.fromTimestamp(t);
                      })(t.readTime)
                    ),
                  n
                );
              })(this.serializer, t);
              if (!e.isNoDocument() || !e.version.isEqual(F.min())) return e;
            }
            return Bt.newInvalidDocument(e);
          }
        }
        function Js(e) {
          return new Ws(e);
        }
        class Xs extends Hs {
          constructor(e, t) {
            super(),
              (this.sr = e),
              (this.trackRemovals = t),
              (this._r = new Fn(
                (e) => e.toString(),
                (e, t) => e.isEqual(t)
              ));
          }
          applyChanges(e) {
            const t = [];
            let n = 0,
              r = new et((e, t) => L(e.canonicalString(), t.canonicalString()));
            return (
              this.changes.forEach((i, s) => {
                const o = this._r.get(i);
                if (
                  (t.push(this.sr.removeEntry(e, i, o.readTime)),
                  s.isValidDocument())
                ) {
                  const a = Ri(this.sr.serializer, s);
                  r = r.add(i.path.popLast());
                  const c = ks(a);
                  (n += c - o.size), t.push(this.sr.addEntry(e, i, a));
                } else if (((n -= o.size), this.trackRemovals)) {
                  const n = Ri(
                    this.sr.serializer,
                    s.convertToNoDocument(F.min())
                  );
                  t.push(this.sr.addEntry(e, i, n));
                }
              }),
              r.forEach((n) => {
                t.push(this.sr.indexManager.addToCollectionParentIndex(e, n));
              }),
              t.push(this.sr.updateMetadata(e, n)),
              re.waitFor(t)
            );
          }
          getFromCache(e, t) {
            return this.sr
              .tr(e, t)
              .next(
                (e) => (
                  this._r.set(t, {
                    size: e.size,
                    readTime: e.document.readTime,
                  }),
                  e.document
                )
              );
          }
          getAllFromCache(e, t) {
            return this.sr.rr(e, t).next(
              ({ documents: e, ir: t }) => (
                t.forEach((t, n) => {
                  this._r.set(t, { size: n, readTime: e.get(t).readTime });
                }),
                e
              )
            );
          }
        }
        function Ys(e) {
          return Qe(e, "remoteDocumentGlobal");
        }
        function Zs(e) {
          return Qe(e, "remoteDocumentsV14");
        }
        function eo(e) {
          const t = e.path.toArray();
          return [t.slice(0, t.length - 2), t[t.length - 2], t[t.length - 1]];
        }
        function to(e, t) {
          const n = t.documentKey.path.toArray();
          return [
            e,
            Fi(t.readTime),
            n.slice(0, n.length - 2),
            n.length > 0 ? n[n.length - 1] : "",
          ];
        }
        function no(e, t) {
          const n = e.path.toArray(),
            r = t.path.toArray();
          let i = 0;
          for (let e = 0; e < n.length - 2 && e < r.length - 2; ++e)
            if (((i = L(n[e], r[e])), i)) return i;
          return (
            (i = L(n.length, r.length)),
            i ||
              ((i = L(n[n.length - 2], r[r.length - 2])),
              i || L(n[n.length - 1], r[r.length - 1]))
          );
        }
        class ro {
          constructor(e, t) {
            (this.overlayedDocument = e), (this.mutatedFields = t);
          }
        }
        class io {
          constructor(e, t, n, r) {
            (this.remoteDocumentCache = e),
              (this.mutationQueue = t),
              (this.documentOverlayCache = n),
              (this.indexManager = r);
          }
          getDocument(e, t) {
            let n = null;
            return this.documentOverlayCache
              .getOverlay(e, t)
              .next((r) => ((n = r), this.remoteDocumentCache.getEntry(e, t)))
              .next(
                (e) => (null !== n && wr(n.mutation, e, rt.empty(), R.now()), e)
              );
          }
          getDocuments(e, t) {
            return this.remoteDocumentCache
              .getEntries(e, t)
              .next((t) =>
                this.getLocalViewOfDocuments(e, t, Hn()).next(() => t)
              );
          }
          getLocalViewOfDocuments(e, t, n = Hn()) {
            const r = zn();
            return this.populateOverlays(e, r, t).next(() =>
              this.computeViews(e, t, r, n).next((e) => {
                let t = jn();
                return (
                  e.forEach((e, n) => {
                    t = t.insert(e, n.overlayedDocument);
                  }),
                  t
                );
              })
            );
          }
          getOverlayedDocuments(e, t) {
            const n = zn();
            return this.populateOverlays(e, n, t).next(() =>
              this.computeViews(e, t, n, Hn())
            );
          }
          populateOverlays(e, t, n) {
            const r = [];
            return (
              n.forEach((e) => {
                t.has(e) || r.push(e);
              }),
              this.documentOverlayCache.getOverlays(e, r).next((e) => {
                e.forEach((e, n) => {
                  t.set(e, n);
                });
              })
            );
          }
          computeViews(e, t, n, r) {
            let i = Bn();
            const s = Kn(),
              o = Kn();
            return (
              t.forEach((e, t) => {
                const o = n.get(t.key);
                r.has(t.key) && (void 0 === o || o.mutation instanceof Er)
                  ? (i = i.insert(t.key, t))
                  : void 0 !== o
                  ? (s.set(t.key, o.mutation.getFieldMask()),
                    wr(o.mutation, t, o.mutation.getFieldMask(), R.now()))
                  : s.set(t.key, rt.empty());
              }),
              this.recalculateAndSaveOverlays(e, i).next(
                (e) => (
                  e.forEach((e, t) => s.set(e, t)),
                  t.forEach((e, t) => {
                    var n;
                    return o.set(
                      e,
                      new ro(
                        t,
                        null !== (n = s.get(e)) && void 0 !== n ? n : null
                      )
                    );
                  }),
                  o
                )
              )
            );
          }
          recalculateAndSaveOverlays(e, t) {
            const n = Kn();
            let r = new Xe((e, t) => e - t),
              i = Hn();
            return this.mutationQueue
              .getAllMutationBatchesAffectingDocumentKeys(e, t)
              .next((e) => {
                for (const i of e)
                  i.keys().forEach((e) => {
                    const s = t.get(e);
                    if (null === s) return;
                    let o = n.get(e) || rt.empty();
                    (o = i.applyToLocalView(s, o)), n.set(e, o);
                    const a = (r.get(i.batchId) || Hn()).add(e);
                    r = r.insert(i.batchId, a);
                  });
              })
              .next(() => {
                const s = [],
                  o = r.getReverseIterator();
                for (; o.hasNext(); ) {
                  const r = o.getNext(),
                    a = r.key,
                    c = r.value,
                    u = Gn();
                  c.forEach((e) => {
                    if (!i.has(e)) {
                      const r = yr(t.get(e), n.get(e));
                      null !== r && u.set(e, r), (i = i.add(e));
                    }
                  }),
                    s.push(this.documentOverlayCache.saveOverlays(e, a, u));
                }
                return re.waitFor(s);
              })
              .next(() => n);
          }
          recalculateAndSaveOverlaysForDocumentKeys(e, t) {
            return this.remoteDocumentCache
              .getEntries(e, t)
              .next((t) => this.recalculateAndSaveOverlays(e, t));
          }
          getDocumentsMatchingQuery(e, t, n) {
            return (function (e) {
              return (
                q.isDocumentKey(e.path) &&
                null === e.collectionGroup &&
                0 === e.filters.length
              );
            })(t)
              ? this.getDocumentsMatchingDocumentQuery(e, t.path)
              : Tn(t)
              ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n)
              : this.getDocumentsMatchingCollectionQuery(e, t, n);
          }
          getNextDocuments(e, t, n, r) {
            return this.remoteDocumentCache
              .getAllFromCollectionGroup(e, t, n, r)
              .next((i) => {
                const s =
                  r - i.size > 0
                    ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                        e,
                        t,
                        n.largestBatchId,
                        r - i.size
                      )
                    : re.resolve(zn());
                let o = -1,
                  a = i;
                return s.next((t) =>
                  re
                    .forEach(
                      t,
                      (t, n) => (
                        o < n.largestBatchId && (o = n.largestBatchId),
                        i.get(t)
                          ? re.resolve()
                          : this.remoteDocumentCache
                              .getEntry(e, t)
                              .next((e) => {
                                a = a.insert(t, e);
                              })
                      )
                    )
                    .next(() => this.populateOverlays(e, t, i))
                    .next(() => this.computeViews(e, a, t, Hn()))
                    .next((e) => ({ batchId: o, changes: qn(e) }))
                );
              });
          }
          getDocumentsMatchingDocumentQuery(e, t) {
            return this.getDocument(e, new q(t)).next((e) => {
              let t = jn();
              return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
            });
          }
          getDocumentsMatchingCollectionGroupQuery(e, t, n) {
            const r = t.collectionGroup;
            let i = jn();
            return this.indexManager.getCollectionParents(e, r).next((s) =>
              re
                .forEach(s, (s) => {
                  const o = (function (e, t) {
                    return new wn(
                      t,
                      null,
                      e.explicitOrderBy.slice(),
                      e.filters.slice(),
                      e.limit,
                      e.limitType,
                      e.startAt,
                      e.endAt
                    );
                  })(t, s.child(r));
                  return this.getDocumentsMatchingCollectionQuery(e, o, n).next(
                    (e) => {
                      e.forEach((e, t) => {
                        i = i.insert(e, t);
                      });
                    }
                  );
                })
                .next(() => i)
            );
          }
          getDocumentsMatchingCollectionQuery(e, t, n) {
            let r;
            return this.documentOverlayCache
              .getOverlaysForCollection(e, t.path, n.largestBatchId)
              .next(
                (i) => (
                  (r = i),
                  this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, r)
                )
              )
              .next((e) => {
                r.forEach((t, n) => {
                  const r = n.getKey();
                  null === e.get(r) &&
                    (e = e.insert(r, Bt.newInvalidDocument(r)));
                });
                let n = jn();
                return (
                  e.forEach((e, i) => {
                    const s = r.get(e);
                    void 0 !== s && wr(s.mutation, i, rt.empty(), R.now()),
                      Ln(t, i) && (n = n.insert(e, i));
                  }),
                  n
                );
              });
          }
        }
        class so {
          constructor(e) {
            (this.serializer = e), (this.ar = new Map()), (this.ur = new Map());
          }
          getBundleMetadata(e, t) {
            return re.resolve(this.ar.get(t));
          }
          saveBundleMetadata(e, t) {
            return (
              this.ar.set(
                t.id,
                (function (e) {
                  return {
                    id: e.id,
                    version: e.version,
                    createTime: ui(e.createTime),
                  };
                })(t)
              ),
              re.resolve()
            );
          }
          getNamedQuery(e, t) {
            return re.resolve(this.ur.get(t));
          }
          saveNamedQuery(e, t) {
            return (
              this.ur.set(
                t.name,
                (function (e) {
                  return {
                    name: e.name,
                    query: zi(e.bundledQuery),
                    readTime: ui(e.readTime),
                  };
                })(t)
              ),
              re.resolve()
            );
          }
        }
        class oo {
          constructor() {
            (this.overlays = new Xe(q.comparator)), (this.cr = new Map());
          }
          getOverlay(e, t) {
            return re.resolve(this.overlays.get(t));
          }
          getOverlays(e, t) {
            const n = zn();
            return re
              .forEach(t, (t) =>
                this.getOverlay(e, t).next((e) => {
                  null !== e && n.set(t, e);
                })
              )
              .next(() => n);
          }
          saveOverlays(e, t, n) {
            return (
              n.forEach((n, r) => {
                this.ht(e, t, r);
              }),
              re.resolve()
            );
          }
          removeOverlaysForBatchId(e, t, n) {
            const r = this.cr.get(n);
            return (
              void 0 !== r &&
                (r.forEach((e) => (this.overlays = this.overlays.remove(e))),
                this.cr.delete(n)),
              re.resolve()
            );
          }
          getOverlaysForCollection(e, t, n) {
            const r = zn(),
              i = t.length + 1,
              s = new q(t.child("")),
              o = this.overlays.getIteratorFrom(s);
            for (; o.hasNext(); ) {
              const e = o.getNext().value,
                s = e.getKey();
              if (!t.isPrefixOf(s.path)) break;
              s.path.length === i &&
                e.largestBatchId > n &&
                r.set(e.getKey(), e);
            }
            return re.resolve(r);
          }
          getOverlaysForCollectionGroup(e, t, n, r) {
            let i = new Xe((e, t) => e - t);
            const s = this.overlays.getIterator();
            for (; s.hasNext(); ) {
              const e = s.getNext().value;
              if (
                e.getKey().getCollectionGroup() === t &&
                e.largestBatchId > n
              ) {
                let t = i.get(e.largestBatchId);
                null === t && ((t = zn()), (i = i.insert(e.largestBatchId, t))),
                  t.set(e.getKey(), e);
              }
            }
            const o = zn(),
              a = i.getIterator();
            for (
              ;
              a.hasNext() &&
              (a.getNext().value.forEach((e, t) => o.set(e, t)),
              !(o.size() >= r));

            );
            return re.resolve(o);
          }
          ht(e, t, n) {
            const r = this.overlays.get(n.key);
            if (null !== r) {
              const e = this.cr.get(r.largestBatchId).delete(n.key);
              this.cr.set(r.largestBatchId, e);
            }
            this.overlays = this.overlays.insert(n.key, new Nr(t, n));
            let i = this.cr.get(t);
            void 0 === i && ((i = Hn()), this.cr.set(t, i)),
              this.cr.set(t, i.add(n.key));
          }
        }
        class ao {
          constructor() {
            (this.lr = new et(co.hr)), (this.Pr = new et(co.Ir));
          }
          isEmpty() {
            return this.lr.isEmpty();
          }
          addReference(e, t) {
            const n = new co(e, t);
            (this.lr = this.lr.add(n)), (this.Pr = this.Pr.add(n));
          }
          Tr(e, t) {
            e.forEach((e) => this.addReference(e, t));
          }
          removeReference(e, t) {
            this.Er(new co(e, t));
          }
          dr(e, t) {
            e.forEach((e) => this.removeReference(e, t));
          }
          Ar(e) {
            const t = new q(new B([])),
              n = new co(t, e),
              r = new co(t, e + 1),
              i = [];
            return (
              this.Pr.forEachInRange([n, r], (e) => {
                this.Er(e), i.push(e.key);
              }),
              i
            );
          }
          Rr() {
            this.lr.forEach((e) => this.Er(e));
          }
          Er(e) {
            (this.lr = this.lr.delete(e)), (this.Pr = this.Pr.delete(e));
          }
          Vr(e) {
            const t = new q(new B([])),
              n = new co(t, e),
              r = new co(t, e + 1);
            let i = Hn();
            return (
              this.Pr.forEachInRange([n, r], (e) => {
                i = i.add(e.key);
              }),
              i
            );
          }
          containsKey(e) {
            const t = new co(e, 0),
              n = this.lr.firstAfterOrEqual(t);
            return null !== n && e.isEqual(n.key);
          }
        }
        class co {
          constructor(e, t) {
            (this.key = e), (this.mr = t);
          }
          static hr(e, t) {
            return q.comparator(e.key, t.key) || L(e.mr, t.mr);
          }
          static Ir(e, t) {
            return L(e.mr, t.mr) || q.comparator(e.key, t.key);
          }
        }
        class uo {
          constructor(e, t) {
            (this.indexManager = e),
              (this.referenceDelegate = t),
              (this.mutationQueue = []),
              (this.gr = 1),
              (this.pr = new et(co.hr));
          }
          checkEmpty(e) {
            return re.resolve(0 === this.mutationQueue.length);
          }
          addMutationBatch(e, t, n, r) {
            const i = this.gr;
            this.gr++,
              this.mutationQueue.length > 0 &&
                this.mutationQueue[this.mutationQueue.length - 1];
            const s = new Ar(i, t, n, r);
            this.mutationQueue.push(s);
            for (const t of r)
              (this.pr = this.pr.add(new co(t.key, i))),
                this.indexManager.addToCollectionParentIndex(
                  e,
                  t.key.path.popLast()
                );
            return re.resolve(s);
          }
          lookupMutationBatch(e, t) {
            return re.resolve(this.yr(t));
          }
          getNextMutationBatchAfterBatchId(e, t) {
            const n = t + 1,
              r = this.wr(n),
              i = r < 0 ? 0 : r;
            return re.resolve(
              this.mutationQueue.length > i ? this.mutationQueue[i] : null
            );
          }
          getHighestUnacknowledgedBatchId() {
            return re.resolve(
              0 === this.mutationQueue.length ? -1 : this.gr - 1
            );
          }
          getAllMutationBatches(e) {
            return re.resolve(this.mutationQueue.slice());
          }
          getAllMutationBatchesAffectingDocumentKey(e, t) {
            const n = new co(t, 0),
              r = new co(t, Number.POSITIVE_INFINITY),
              i = [];
            return (
              this.pr.forEachInRange([n, r], (e) => {
                const t = this.yr(e.mr);
                i.push(t);
              }),
              re.resolve(i)
            );
          }
          getAllMutationBatchesAffectingDocumentKeys(e, t) {
            let n = new et(L);
            return (
              t.forEach((e) => {
                const t = new co(e, 0),
                  r = new co(e, Number.POSITIVE_INFINITY);
                this.pr.forEachInRange([t, r], (e) => {
                  n = n.add(e.mr);
                });
              }),
              re.resolve(this.Sr(n))
            );
          }
          getAllMutationBatchesAffectingQuery(e, t) {
            const n = t.path,
              r = n.length + 1;
            let i = n;
            q.isDocumentKey(i) || (i = i.child(""));
            const s = new co(new q(i), 0);
            let o = new et(L);
            return (
              this.pr.forEachWhile((e) => {
                const t = e.key.path;
                return (
                  !!n.isPrefixOf(t) && (t.length === r && (o = o.add(e.mr)), !0)
                );
              }, s),
              re.resolve(this.Sr(o))
            );
          }
          Sr(e) {
            const t = [];
            return (
              e.forEach((e) => {
                const n = this.yr(e);
                null !== n && t.push(n);
              }),
              t
            );
          }
          removeMutationBatch(e, t) {
            v(0 === this.br(t.batchId, "removed")), this.mutationQueue.shift();
            let n = this.pr;
            return re
              .forEach(t.mutations, (r) => {
                const i = new co(r.key, t.batchId);
                return (
                  (n = n.delete(i)),
                  this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
                );
              })
              .next(() => {
                this.pr = n;
              });
          }
          Cn(e) {}
          containsKey(e, t) {
            const n = new co(t, 0),
              r = this.pr.firstAfterOrEqual(n);
            return re.resolve(t.isEqual(r && r.key));
          }
          performConsistencyCheck(e) {
            return this.mutationQueue.length, re.resolve();
          }
          br(e, t) {
            return this.wr(e);
          }
          wr(e) {
            return 0 === this.mutationQueue.length
              ? 0
              : e - this.mutationQueue[0].batchId;
          }
          yr(e) {
            const t = this.wr(e);
            return t < 0 || t >= this.mutationQueue.length
              ? null
              : this.mutationQueue[t];
          }
        }
        class lo {
          constructor(e) {
            (this.Dr = e), (this.docs = new Xe(q.comparator)), (this.size = 0);
          }
          setIndexManager(e) {
            this.indexManager = e;
          }
          addEntry(e, t) {
            const n = t.key,
              r = this.docs.get(n),
              i = r ? r.size : 0,
              s = this.Dr(t);
            return (
              (this.docs = this.docs.insert(n, {
                document: t.mutableCopy(),
                size: s,
              })),
              (this.size += s - i),
              this.indexManager.addToCollectionParentIndex(e, n.path.popLast())
            );
          }
          removeEntry(e) {
            const t = this.docs.get(e);
            t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
          }
          getEntry(e, t) {
            const n = this.docs.get(t);
            return re.resolve(
              n ? n.document.mutableCopy() : Bt.newInvalidDocument(t)
            );
          }
          getEntries(e, t) {
            let n = Bn();
            return (
              t.forEach((e) => {
                const t = this.docs.get(e);
                n = n.insert(
                  e,
                  t ? t.document.mutableCopy() : Bt.newInvalidDocument(e)
                );
              }),
              re.resolve(n)
            );
          }
          getDocumentsMatchingQuery(e, t, n, r) {
            let i = Bn();
            const s = t.path,
              o = new q(s.child("")),
              a = this.docs.getIteratorFrom(o);
            for (; a.hasNext(); ) {
              const {
                key: e,
                value: { document: o },
              } = a.getNext();
              if (!s.isPrefixOf(e.path)) break;
              e.path.length > s.length + 1 ||
                Z(X(o), n) <= 0 ||
                ((r.has(o.key) || Ln(t, o)) &&
                  (i = i.insert(o.key, o.mutableCopy())));
            }
            return re.resolve(i);
          }
          getAllFromCollectionGroup(e, t, n, r) {
            y();
          }
          vr(e, t) {
            return re.forEach(this.docs, (e) => t(e));
          }
          newChangeBuffer(e) {
            return new ho(this);
          }
          getSize(e) {
            return re.resolve(this.size);
          }
        }
        class ho extends Hs {
          constructor(e) {
            super(), (this.sr = e);
          }
          applyChanges(e) {
            const t = [];
            return (
              this.changes.forEach((n, r) => {
                r.isValidDocument()
                  ? t.push(this.sr.addEntry(e, r))
                  : this.sr.removeEntry(n);
              }),
              re.waitFor(t)
            );
          }
          getFromCache(e, t) {
            return this.sr.getEntry(e, t);
          }
          getAllFromCache(e, t) {
            return this.sr.getEntries(e, t);
          }
        }
        class fo {
          constructor(e) {
            (this.persistence = e),
              (this.Cr = new Fn((e) => fn(e), pn)),
              (this.lastRemoteSnapshotVersion = F.min()),
              (this.highestTargetId = 0),
              (this.Fr = 0),
              (this.Mr = new ao()),
              (this.targetCount = 0),
              (this.Or = Rs.xn());
          }
          forEachTarget(e, t) {
            return this.Cr.forEach((e, n) => t(n)), re.resolve();
          }
          getLastRemoteSnapshotVersion(e) {
            return re.resolve(this.lastRemoteSnapshotVersion);
          }
          getHighestSequenceNumber(e) {
            return re.resolve(this.Fr);
          }
          allocateTargetId(e) {
            return (
              (this.highestTargetId = this.Or.next()),
              re.resolve(this.highestTargetId)
            );
          }
          setTargetsMetadata(e, t, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              t > this.Fr && (this.Fr = t),
              re.resolve()
            );
          }
          Ln(e) {
            this.Cr.set(e.target, e);
            const t = e.targetId;
            t > this.highestTargetId &&
              ((this.Or = new Rs(t)), (this.highestTargetId = t)),
              e.sequenceNumber > this.Fr && (this.Fr = e.sequenceNumber);
          }
          addTargetData(e, t) {
            return this.Ln(t), (this.targetCount += 1), re.resolve();
          }
          updateTargetData(e, t) {
            return this.Ln(t), re.resolve();
          }
          removeTargetData(e, t) {
            return (
              this.Cr.delete(t.target),
              this.Mr.Ar(t.targetId),
              (this.targetCount -= 1),
              re.resolve()
            );
          }
          removeTargets(e, t, n) {
            let r = 0;
            const i = [];
            return (
              this.Cr.forEach((s, o) => {
                o.sequenceNumber <= t &&
                  null === n.get(o.targetId) &&
                  (this.Cr.delete(s),
                  i.push(this.removeMatchingKeysForTargetId(e, o.targetId)),
                  r++);
              }),
              re.waitFor(i).next(() => r)
            );
          }
          getTargetCount(e) {
            return re.resolve(this.targetCount);
          }
          getTargetData(e, t) {
            const n = this.Cr.get(t) || null;
            return re.resolve(n);
          }
          addMatchingKeys(e, t, n) {
            return this.Mr.Tr(t, n), re.resolve();
          }
          removeMatchingKeys(e, t, n) {
            this.Mr.dr(t, n);
            const r = this.persistence.referenceDelegate,
              i = [];
            return (
              r &&
                t.forEach((t) => {
                  i.push(r.markPotentiallyOrphaned(e, t));
                }),
              re.waitFor(i)
            );
          }
          removeMatchingKeysForTargetId(e, t) {
            return this.Mr.Ar(t), re.resolve();
          }
          getMatchingKeysForTargetId(e, t) {
            const n = this.Mr.Vr(t);
            return re.resolve(n);
          }
          containsKey(e, t) {
            return re.resolve(this.Mr.containsKey(t));
          }
        }
        class po {
          constructor(e, t) {
            (this.Nr = {}),
              (this.overlays = {}),
              (this.Br = new ge(0)),
              (this.Lr = !1),
              (this.Lr = !0),
              (this.referenceDelegate = e(this)),
              (this.kr = new fo(this)),
              (this.indexManager = new vs()),
              (this.remoteDocumentCache = (function (e) {
                return new lo(e);
              })((e) => this.referenceDelegate.qr(e))),
              (this.serializer = new Mi(t)),
              (this.Qr = new so(this.serializer));
          }
          start() {
            return Promise.resolve();
          }
          shutdown() {
            return (this.Lr = !1), Promise.resolve();
          }
          get started() {
            return this.Lr;
          }
          setDatabaseDeletedListener() {}
          setNetworkEnabled() {}
          getIndexManager(e) {
            return this.indexManager;
          }
          getDocumentOverlayCache(e) {
            let t = this.overlays[e.toKey()];
            return t || ((t = new oo()), (this.overlays[e.toKey()] = t)), t;
          }
          getMutationQueue(e, t) {
            let n = this.Nr[e.toKey()];
            return (
              n ||
                ((n = new uo(t, this.referenceDelegate)),
                (this.Nr[e.toKey()] = n)),
              n
            );
          }
          getTargetCache() {
            return this.kr;
          }
          getRemoteDocumentCache() {
            return this.remoteDocumentCache;
          }
          getBundleCache() {
            return this.Qr;
          }
          runTransaction(e, t, n) {
            f("MemoryPersistence", "Starting transaction:", e);
            const r = new go(this.Br.next());
            return (
              this.referenceDelegate.Kr(),
              n(r)
                .next((e) => this.referenceDelegate.$r(r).next(() => e))
                .toPromise()
                .then((e) => (r.raiseOnCommittedEvent(), e))
            );
          }
          Ur(e, t) {
            return re.or(
              Object.values(this.Nr).map((n) => () => n.containsKey(e, t))
            );
          }
        }
        class go extends te {
          constructor(e) {
            super(), (this.currentSequenceNumber = e);
          }
        }
        class mo {
          constructor(e) {
            (this.persistence = e), (this.Wr = new ao()), (this.Gr = null);
          }
          static zr(e) {
            return new mo(e);
          }
          get jr() {
            if (this.Gr) return this.Gr;
            throw y();
          }
          addReference(e, t, n) {
            return (
              this.Wr.addReference(n, t),
              this.jr.delete(n.toString()),
              re.resolve()
            );
          }
          removeReference(e, t, n) {
            return (
              this.Wr.removeReference(n, t),
              this.jr.add(n.toString()),
              re.resolve()
            );
          }
          markPotentiallyOrphaned(e, t) {
            return this.jr.add(t.toString()), re.resolve();
          }
          removeTarget(e, t) {
            this.Wr.Ar(t.targetId).forEach((e) => this.jr.add(e.toString()));
            const n = this.persistence.getTargetCache();
            return n
              .getMatchingKeysForTargetId(e, t.targetId)
              .next((e) => {
                e.forEach((e) => this.jr.add(e.toString()));
              })
              .next(() => n.removeTargetData(e, t));
          }
          Kr() {
            this.Gr = new Set();
          }
          $r(e) {
            const t = this.persistence
              .getRemoteDocumentCache()
              .newChangeBuffer();
            return re
              .forEach(this.jr, (n) => {
                const r = q.fromPath(n);
                return this.Hr(e, r).next((e) => {
                  e || t.removeEntry(r, F.min());
                });
              })
              .next(() => ((this.Gr = null), t.apply(e)));
          }
          updateLimboDocument(e, t) {
            return this.Hr(e, t).next((e) => {
              e ? this.jr.delete(t.toString()) : this.jr.add(t.toString());
            });
          }
          qr(e) {
            return 0;
          }
          Hr(e, t) {
            return re.or([
              () => re.resolve(this.Wr.containsKey(t)),
              () => this.persistence.getTargetCache().containsKey(e, t),
              () => this.persistence.Ur(e, t),
            ]);
          }
        }
        class yo {
          constructor(e, t) {
            (this.persistence = e),
              (this.Jr = new Fn(
                (e) => we(e.path),
                (e, t) => e.isEqual(t)
              )),
              (this.garbageCollector = Ks(this, t));
          }
          static zr(e, t) {
            return new yo(e, t);
          }
          Kr() {}
          $r(e) {
            return re.resolve();
          }
          forEachTarget(e, t) {
            return this.persistence.getTargetCache().forEachTarget(e, t);
          }
          zn(e) {
            const t = this.Jn(e);
            return this.persistence
              .getTargetCache()
              .getTargetCount(e)
              .next((e) => t.next((t) => e + t));
          }
          Jn(e) {
            let t = 0;
            return this.jn(e, (e) => {
              t++;
            }).next(() => t);
          }
          jn(e, t) {
            return re.forEach(this.Jr, (n, r) =>
              this.Zn(e, n, r).next((e) => (e ? re.resolve() : t(r)))
            );
          }
          removeTargets(e, t, n) {
            return this.persistence.getTargetCache().removeTargets(e, t, n);
          }
          removeOrphanedDocuments(e, t) {
            let n = 0;
            const r = this.persistence.getRemoteDocumentCache(),
              i = r.newChangeBuffer();
            return r
              .vr(e, (r) =>
                this.Zn(e, r, t).next((e) => {
                  e || (n++, i.removeEntry(r, F.min()));
                })
              )
              .next(() => i.apply(e))
              .next(() => n);
          }
          markPotentiallyOrphaned(e, t) {
            return this.Jr.set(t, e.currentSequenceNumber), re.resolve();
          }
          removeTarget(e, t) {
            const n = t.withSequenceNumber(e.currentSequenceNumber);
            return this.persistence.getTargetCache().updateTargetData(e, n);
          }
          addReference(e, t, n) {
            return this.Jr.set(n, e.currentSequenceNumber), re.resolve();
          }
          removeReference(e, t, n) {
            return this.Jr.set(n, e.currentSequenceNumber), re.resolve();
          }
          updateLimboDocument(e, t) {
            return this.Jr.set(t, e.currentSequenceNumber), re.resolve();
          }
          qr(e) {
            let t = e.key.toString().length;
            return e.isFoundDocument() && (t += St(e.data.value)), t;
          }
          Zn(e, t, n) {
            return re.or([
              () => this.persistence.Ur(e, t),
              () => this.persistence.getTargetCache().containsKey(e, t),
              () => {
                const e = this.Jr.get(t);
                return re.resolve(void 0 !== e && e > n);
              },
            ]);
          }
          getCacheSize(e) {
            return this.persistence.getRemoteDocumentCache().getSize(e);
          }
        }
        class vo {
          constructor(e) {
            this.serializer = e;
          }
          B(e, t, n, r) {
            const i = new ie("createOrUpgrade", t);
            n < 1 &&
              r >= 1 &&
              ((function (e) {
                e.createObjectStore("owner");
              })(e),
              (function (e) {
                e.createObjectStore("mutationQueues", { keyPath: "userId" }),
                  e
                    .createObjectStore("mutations", {
                      keyPath: "batchId",
                      autoIncrement: !0,
                    })
                    .createIndex("userMutationsIndex", Ee, { unique: !0 }),
                  e.createObjectStore("documentMutations");
              })(e),
              wo(e),
              (function (e) {
                e.createObjectStore("remoteDocuments");
              })(e));
            let s = re.resolve();
            return (
              n < 3 &&
                r >= 3 &&
                (0 !== n &&
                  ((function (e) {
                    e.deleteObjectStore("targetDocuments"),
                      e.deleteObjectStore("targets"),
                      e.deleteObjectStore("targetGlobal");
                  })(e),
                  wo(e)),
                (s = s.next(() =>
                  (function (e) {
                    const t = e.store("targetGlobal"),
                      n = {
                        highestTargetId: 0,
                        highestListenSequenceNumber: 0,
                        lastRemoteSnapshotVersion: F.min().toTimestamp(),
                        targetCount: 0,
                      };
                    return t.put("targetGlobalKey", n);
                  })(i)
                ))),
              n < 4 &&
                r >= 4 &&
                (0 !== n &&
                  (s = s.next(() =>
                    (function (e, t) {
                      return t
                        .store("mutations")
                        .G()
                        .next((n) => {
                          e.deleteObjectStore("mutations"),
                            e
                              .createObjectStore("mutations", {
                                keyPath: "batchId",
                                autoIncrement: !0,
                              })
                              .createIndex("userMutationsIndex", Ee, {
                                unique: !0,
                              });
                          const r = t.store("mutations"),
                            i = n.map((e) => r.put(e));
                          return re.waitFor(i);
                        });
                    })(e, i)
                  )),
                (s = s.next(() => {
                  !(function (e) {
                    e.createObjectStore("clientMetadata", {
                      keyPath: "clientId",
                    });
                  })(e);
                }))),
              n < 5 && r >= 5 && (s = s.next(() => this.Yr(i))),
              n < 6 &&
                r >= 6 &&
                (s = s.next(
                  () => (
                    (function (e) {
                      e.createObjectStore("remoteDocumentGlobal");
                    })(e),
                    this.Zr(i)
                  )
                )),
              n < 7 && r >= 7 && (s = s.next(() => this.Xr(i))),
              n < 8 && r >= 8 && (s = s.next(() => this.ei(e, i))),
              n < 9 &&
                r >= 9 &&
                (s = s.next(() => {
                  !(function (e) {
                    e.objectStoreNames.contains("remoteDocumentChanges") &&
                      e.deleteObjectStore("remoteDocumentChanges");
                  })(e);
                })),
              n < 10 && r >= 10 && (s = s.next(() => this.ti(i))),
              n < 11 &&
                r >= 11 &&
                (s = s.next(() => {
                  !(function (e) {
                    e.createObjectStore("bundles", { keyPath: "bundleId" });
                  })(e),
                    (function (e) {
                      e.createObjectStore("namedQueries", { keyPath: "name" });
                    })(e);
                })),
              n < 12 &&
                r >= 12 &&
                (s = s.next(() => {
                  !(function (e) {
                    const t = e.createObjectStore("documentOverlays", {
                      keyPath: Ve,
                    });
                    t.createIndex("collectionPathOverlayIndex", Be, {
                      unique: !1,
                    }),
                      t.createIndex("collectionGroupOverlayIndex", Ue, {
                        unique: !1,
                      });
                  })(e);
                })),
              n < 13 &&
                r >= 13 &&
                (s = s
                  .next(() =>
                    (function (e) {
                      const t = e.createObjectStore("remoteDocumentsV14", {
                        keyPath: Ce,
                      });
                      t.createIndex("documentKeyIndex", De),
                        t.createIndex("collectionGroupIndex", Ae);
                    })(e)
                  )
                  .next(() => this.ni(e, i))
                  .next(() => e.deleteObjectStore("remoteDocuments"))),
              n < 14 && r >= 14 && (s = s.next(() => this.ri(e, i))),
              n < 15 &&
                r >= 15 &&
                (s = s.next(() =>
                  (function (e) {
                    e
                      .createObjectStore("indexConfiguration", {
                        keyPath: "indexId",
                        autoIncrement: !0,
                      })
                      .createIndex("collectionGroupIndex", "collectionGroup", {
                        unique: !1,
                      }),
                      e
                        .createObjectStore("indexState", { keyPath: Pe })
                        .createIndex("sequenceNumberIndex", Me, { unique: !1 }),
                      e
                        .createObjectStore("indexEntries", { keyPath: Re })
                        .createIndex("documentKeyIndex", Fe, { unique: !1 });
                  })(e)
                )),
              s
            );
          }
          Zr(e) {
            let t = 0;
            return e
              .store("remoteDocuments")
              .Z((e, n) => {
                t += ks(n);
              })
              .next(() => {
                const n = { byteSize: t };
                return e
                  .store("remoteDocumentGlobal")
                  .put("remoteDocumentGlobalKey", n);
              });
          }
          Yr(e) {
            const t = e.store("mutationQueues"),
              n = e.store("mutations");
            return t.G().next((t) =>
              re.forEach(t, (t) => {
                const r = IDBKeyRange.bound(
                  [t.userId, -1],
                  [t.userId, t.lastAcknowledgedBatchId]
                );
                return n.G("userMutationsIndex", r).next((n) =>
                  re.forEach(n, (n) => {
                    v(n.userId === t.userId);
                    const r = Ui(this.serializer, n);
                    return As(e, t.userId, r).next(() => {});
                  })
                );
              })
            );
          }
          Xr(e) {
            const t = e.store("targetDocuments"),
              n = e.store("remoteDocuments");
            return e
              .store("targetGlobal")
              .get("targetGlobalKey")
              .next((e) => {
                const r = [];
                return n
                  .Z((n, i) => {
                    const s = new B(n),
                      o = (function (e) {
                        return [0, we(e)];
                      })(s);
                    r.push(
                      t
                        .get(o)
                        .next((n) =>
                          n
                            ? re.resolve()
                            : ((n) =>
                                t.put({
                                  targetId: 0,
                                  path: we(n),
                                  sequenceNumber: e.highestListenSequenceNumber,
                                }))(s)
                        )
                    );
                  })
                  .next(() => re.waitFor(r));
              });
          }
          ei(e, t) {
            e.createObjectStore("collectionParents", { keyPath: Le });
            const n = t.store("collectionParents"),
              r = new ws(),
              i = (e) => {
                if (r.add(e)) {
                  const t = e.lastSegment(),
                    r = e.popLast();
                  return n.put({ collectionId: t, parent: we(r) });
                }
              };
            return t
              .store("remoteDocuments")
              .Z({ Y: !0 }, (e, t) => {
                const n = new B(e);
                return i(n.popLast());
              })
              .next(() =>
                t.store("documentMutations").Z({ Y: !0 }, ([e, t, n], r) => {
                  const s = Ie(t);
                  return i(s.popLast());
                })
              );
          }
          ti(e) {
            const t = e.store("targets");
            return t.Z((e, n) => {
              const r = ji(n),
                i = qi(this.serializer, r);
              return t.put(i);
            });
          }
          ni(e, t) {
            const n = t.store("remoteDocuments"),
              r = [];
            return n
              .Z((e, n) => {
                const i = t.store("remoteDocumentsV14"),
                  s = (function (e) {
                    return e.document
                      ? new q(B.fromString(e.document.name).popFirst(5))
                      : e.noDocument
                      ? q.fromSegments(e.noDocument.path)
                      : e.unknownDocument
                      ? q.fromSegments(e.unknownDocument.path)
                      : y();
                  })(n).path.toArray(),
                  o = {
                    prefixPath: s.slice(0, s.length - 2),
                    collectionGroup: s[s.length - 2],
                    documentId: s[s.length - 1],
                    readTime: n.readTime || [0, 0],
                    unknownDocument: n.unknownDocument,
                    noDocument: n.noDocument,
                    document: n.document,
                    hasCommittedMutations: !!n.hasCommittedMutations,
                  };
                r.push(i.put(o));
              })
              .next(() => re.waitFor(r));
          }
          ri(e, t) {
            const n = t.store("mutations"),
              r = Js(this.serializer),
              i = new po(mo.zr, this.serializer.ct);
            return n.G().next((e) => {
              const n = new Map();
              return (
                e.forEach((e) => {
                  var t;
                  let r =
                    null !== (t = n.get(e.userId)) && void 0 !== t ? t : Hn();
                  Ui(this.serializer, e)
                    .keys()
                    .forEach((e) => (r = r.add(e))),
                    n.set(e.userId, r);
                }),
                re.forEach(n, (e, n) => {
                  const s = new u(n),
                    o = Ji.lt(this.serializer, s),
                    a = i.getIndexManager(s),
                    c = Ns.lt(s, this.serializer, a, i.referenceDelegate);
                  return new io(r, c, o, a)
                    .recalculateAndSaveOverlaysForDocumentKeys(
                      new $e(t, ge.ae),
                      e
                    )
                    .next();
                })
              );
            });
          }
        }
        function wo(e) {
          e
            .createObjectStore("targetDocuments", { keyPath: Ne })
            .createIndex("documentTargetsIndex", Oe, { unique: !0 }),
            e
              .createObjectStore("targets", { keyPath: "targetId" })
              .createIndex("queryTargetsIndex", ke, { unique: !0 }),
            e.createObjectStore("targetGlobal");
        }
        const bo =
          "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";
        class _o {
          constructor(e, t, n, r, i, s, o, a, c, u, l = 15) {
            if (
              ((this.allowTabSynchronization = e),
              (this.persistenceKey = t),
              (this.clientId = n),
              (this.ii = i),
              (this.window = s),
              (this.document = o),
              (this.si = c),
              (this.oi = u),
              (this._i = l),
              (this.Br = null),
              (this.Lr = !1),
              (this.isPrimary = !1),
              (this.networkEnabled = !0),
              (this.ai = null),
              (this.inForeground = !1),
              (this.ui = null),
              (this.ci = null),
              (this.li = Number.NEGATIVE_INFINITY),
              (this.hi = (e) => Promise.resolve()),
              !_o.v())
            )
              throw new _(
                b.UNIMPLEMENTED,
                "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."
              );
            (this.referenceDelegate = new $s(this, r)),
              (this.Pi = t + "main"),
              (this.serializer = new Mi(a)),
              (this.Ii = new se(this.Pi, this._i, new vo(this.serializer))),
              (this.kr = new Fs(this.referenceDelegate, this.serializer)),
              (this.remoteDocumentCache = Js(this.serializer)),
              (this.Qr = new Qi()),
              this.window && this.window.localStorage
                ? (this.Ti = this.window.localStorage)
                : ((this.Ti = null),
                  !1 === u &&
                    p(
                      "IndexedDbPersistence",
                      "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."
                    ));
          }
          start() {
            return this.Ei()
              .then(() => {
                if (!this.isPrimary && !this.allowTabSynchronization)
                  throw new _(b.FAILED_PRECONDITION, bo);
                return (
                  this.di(),
                  this.Ai(),
                  this.Ri(),
                  this.runTransaction(
                    "getHighestListenSequenceNumber",
                    "readonly",
                    (e) => this.kr.getHighestSequenceNumber(e)
                  )
                );
              })
              .then((e) => {
                this.Br = new ge(e, this.si);
              })
              .then(() => {
                this.Lr = !0;
              })
              .catch((e) => (this.Ii && this.Ii.close(), Promise.reject(e)));
          }
          Vi(e) {
            return (
              (this.hi = async (t) => {
                if (this.started) return e(t);
              }),
              e(this.isPrimary)
            );
          }
          setDatabaseDeletedListener(e) {
            this.Ii.k(async (t) => {
              null === t.newVersion && (await e());
            });
          }
          setNetworkEnabled(e) {
            this.networkEnabled !== e &&
              ((this.networkEnabled = e),
              this.ii.enqueueAndForget(async () => {
                this.started && (await this.Ei());
              }));
          }
          Ei() {
            return this.runTransaction(
              "updateClientMetadataAndTryBecomePrimary",
              "readwrite",
              (e) =>
                Eo(e)
                  .put({
                    clientId: this.clientId,
                    updateTimeMs: Date.now(),
                    networkEnabled: this.networkEnabled,
                    inForeground: this.inForeground,
                  })
                  .next(() => {
                    if (this.isPrimary)
                      return this.mi(e).next((e) => {
                        e ||
                          ((this.isPrimary = !1),
                          this.ii.enqueueRetryable(() => this.hi(!1)));
                      });
                  })
                  .next(() => this.fi(e))
                  .next((t) =>
                    this.isPrimary && !t
                      ? this.gi(e).next(() => !1)
                      : !!t && this.pi(e).next(() => !0)
                  )
            )
              .catch((e) => {
                if (ce(e))
                  return (
                    f(
                      "IndexedDbPersistence",
                      "Failed to extend owner lease: ",
                      e
                    ),
                    this.isPrimary
                  );
                if (!this.allowTabSynchronization) throw e;
                return (
                  f(
                    "IndexedDbPersistence",
                    "Releasing owner lease after error during lease refresh",
                    e
                  ),
                  !1
                );
              })
              .then((e) => {
                this.isPrimary !== e &&
                  this.ii.enqueueRetryable(() => this.hi(e)),
                  (this.isPrimary = e);
              });
          }
          mi(e) {
            return Io(e)
              .get("owner")
              .next((e) => re.resolve(this.yi(e)));
          }
          wi(e) {
            return Eo(e).delete(this.clientId);
          }
          async Si() {
            if (this.isPrimary && !this.bi(this.li, 18e5)) {
              this.li = Date.now();
              const e = await this.runTransaction(
                "maybeGarbageCollectMultiClientState",
                "readwrite-primary",
                (e) => {
                  const t = Qe(e, "clientMetadata");
                  return t.G().next((e) => {
                    const n = this.Di(e, 18e5),
                      r = e.filter((e) => -1 === n.indexOf(e));
                    return re
                      .forEach(r, (e) => t.delete(e.clientId))
                      .next(() => r);
                  });
                }
              ).catch(() => []);
              if (this.Ti)
                for (const t of e) this.Ti.removeItem(this.vi(t.clientId));
            }
          }
          Ri() {
            this.ci = this.ii.enqueueAfterDelay(
              "client_metadata_refresh",
              4e3,
              () =>
                this.Ei()
                  .then(() => this.Si())
                  .then(() => this.Ri())
            );
          }
          yi(e) {
            return !!e && e.ownerId === this.clientId;
          }
          fi(e) {
            return this.oi
              ? re.resolve(!0)
              : Io(e)
                  .get("owner")
                  .next((t) => {
                    if (
                      null !== t &&
                      this.bi(t.leaseTimestampMs, 5e3) &&
                      !this.Ci(t.ownerId)
                    ) {
                      if (this.yi(t) && this.networkEnabled) return !0;
                      if (!this.yi(t)) {
                        if (!t.allowTabSynchronization)
                          throw new _(b.FAILED_PRECONDITION, bo);
                        return !1;
                      }
                    }
                    return (
                      !(!this.networkEnabled || !this.inForeground) ||
                      Eo(e)
                        .G()
                        .next(
                          (e) =>
                            void 0 ===
                            this.Di(e, 5e3).find((e) => {
                              if (this.clientId !== e.clientId) {
                                const t =
                                    !this.networkEnabled && e.networkEnabled,
                                  n = !this.inForeground && e.inForeground,
                                  r = this.networkEnabled === e.networkEnabled;
                                if (t || (n && r)) return !0;
                              }
                              return !1;
                            })
                        )
                    );
                  })
                  .next(
                    (e) => (
                      this.isPrimary !== e &&
                        f(
                          "IndexedDbPersistence",
                          `Client ${
                            e ? "is" : "is not"
                          } eligible for a primary lease.`
                        ),
                      e
                    )
                  );
          }
          async shutdown() {
            (this.Lr = !1),
              this.Fi(),
              this.ci && (this.ci.cancel(), (this.ci = null)),
              this.Mi(),
              this.xi(),
              await this.Ii.runTransaction(
                "shutdown",
                "readwrite",
                ["owner", "clientMetadata"],
                (e) => {
                  const t = new $e(e, ge.ae);
                  return this.gi(t).next(() => this.wi(t));
                }
              ),
              this.Ii.close(),
              this.Oi();
          }
          Di(e, t) {
            return e.filter(
              (e) => this.bi(e.updateTimeMs, t) && !this.Ci(e.clientId)
            );
          }
          Ni() {
            return this.runTransaction("getActiveClients", "readonly", (e) =>
              Eo(e)
                .G()
                .next((e) => this.Di(e, 18e5).map((e) => e.clientId))
            );
          }
          get started() {
            return this.Lr;
          }
          getMutationQueue(e, t) {
            return Ns.lt(e, this.serializer, t, this.referenceDelegate);
          }
          getTargetCache() {
            return this.kr;
          }
          getRemoteDocumentCache() {
            return this.remoteDocumentCache;
          }
          getIndexManager(e) {
            return new _s(e, this.serializer.ct.databaseId);
          }
          getDocumentOverlayCache(e) {
            return Ji.lt(this.serializer, e);
          }
          getBundleCache() {
            return this.Qr;
          }
          runTransaction(e, t, n) {
            f("IndexedDbPersistence", "Starting transaction:", e);
            const r = "readonly" === t ? "readonly" : "readwrite",
              i = (function (e) {
                return 15 === e
                  ? Ke
                  : 14 === e
                  ? Ge
                  : 13 === e
                  ? ze
                  : 12 === e
                  ? qe
                  : 11 === e
                  ? je
                  : void y();
              })(this._i);
            let s;
            return this.Ii.runTransaction(
              e,
              r,
              i,
              (r) => (
                (s = new $e(r, this.Br ? this.Br.next() : ge.ae)),
                "readwrite-primary" === t
                  ? this.mi(s)
                      .next((e) => !!e || this.fi(s))
                      .next((t) => {
                        if (!t)
                          throw (
                            (p(
                              `Failed to obtain primary lease for action '${e}'.`
                            ),
                            (this.isPrimary = !1),
                            this.ii.enqueueRetryable(() => this.hi(!1)),
                            new _(b.FAILED_PRECONDITION, ee))
                          );
                        return n(s);
                      })
                      .next((e) => this.pi(s).next(() => e))
                  : this.Bi(s).next(() => n(s))
              )
            ).then((e) => (s.raiseOnCommittedEvent(), e));
          }
          Bi(e) {
            return Io(e)
              .get("owner")
              .next((e) => {
                if (
                  null !== e &&
                  this.bi(e.leaseTimestampMs, 5e3) &&
                  !this.Ci(e.ownerId) &&
                  !this.yi(e) &&
                  !(
                    this.oi ||
                    (this.allowTabSynchronization && e.allowTabSynchronization)
                  )
                )
                  throw new _(b.FAILED_PRECONDITION, bo);
              });
          }
          pi(e) {
            const t = {
              ownerId: this.clientId,
              allowTabSynchronization: this.allowTabSynchronization,
              leaseTimestampMs: Date.now(),
            };
            return Io(e).put("owner", t);
          }
          static v() {
            return se.v();
          }
          gi(e) {
            const t = Io(e);
            return t
              .get("owner")
              .next((e) =>
                this.yi(e)
                  ? (f("IndexedDbPersistence", "Releasing primary lease."),
                    t.delete("owner"))
                  : re.resolve()
              );
          }
          bi(e, t) {
            const n = Date.now();
            return !(
              e < n - t ||
              (e > n &&
                (p(
                  `Detected an update time that is in the future: ${e} > ${n}`
                ),
                1))
            );
          }
          di() {
            null !== this.document &&
              "function" == typeof this.document.addEventListener &&
              ((this.ui = () => {
                this.ii.enqueueAndForget(
                  () => (
                    (this.inForeground =
                      "visible" === this.document.visibilityState),
                    this.Ei()
                  )
                );
              }),
              this.document.addEventListener("visibilitychange", this.ui),
              (this.inForeground =
                "visible" === this.document.visibilityState));
          }
          Mi() {
            this.ui &&
              (this.document.removeEventListener("visibilitychange", this.ui),
              (this.ui = null));
          }
          Ai() {
            var e;
            "function" ==
              typeof (null === (e = this.window) || void 0 === e
                ? void 0
                : e.addEventListener) &&
              ((this.ai = () => {
                this.Fi();
                const e = /(?:Version|Mobile)\/1[456]/;
                o.isSafari() &&
                  (navigator.appVersion.match(e) ||
                    navigator.userAgent.match(e)) &&
                  this.ii.enterRestrictedMode(!0),
                  this.ii.enqueueAndForget(() => this.shutdown());
              }),
              this.window.addEventListener("pagehide", this.ai));
          }
          xi() {
            this.ai &&
              (this.window.removeEventListener("pagehide", this.ai),
              (this.ai = null));
          }
          Ci(e) {
            var t;
            try {
              const n =
                null !==
                (null === (t = this.Ti) || void 0 === t
                  ? void 0
                  : t.getItem(this.vi(e)));
              return (
                f(
                  "IndexedDbPersistence",
                  `Client '${e}' ${n ? "is" : "is not"} zombied in LocalStorage`
                ),
                n
              );
            } catch (e) {
              return (
                p(
                  "IndexedDbPersistence",
                  "Failed to get zombied client id.",
                  e
                ),
                !1
              );
            }
          }
          Fi() {
            if (this.Ti)
              try {
                this.Ti.setItem(this.vi(this.clientId), String(Date.now()));
              } catch (e) {
                p("Failed to set zombie client id.", e);
              }
          }
          Oi() {
            if (this.Ti)
              try {
                this.Ti.removeItem(this.vi(this.clientId));
              } catch (e) {}
          }
          vi(e) {
            return `firestore_zombie_${this.persistenceKey}_${e}`;
          }
        }
        function Io(e) {
          return Qe(e, "owner");
        }
        function Eo(e) {
          return Qe(e, "clientMetadata");
        }
        function So(e, t) {
          let n = e.projectId;
          return (
            e.isDefaultDatabase || (n += "." + e.database),
            "firestore/" + t + "/" + n + "/"
          );
        }
        class To {
          constructor(e, t, n, r) {
            (this.targetId = e),
              (this.fromCache = t),
              (this.Li = n),
              (this.ki = r);
          }
          static qi(e, t) {
            let n = Hn(),
              r = Hn();
            for (const e of t.docChanges)
              switch (e.type) {
                case 0:
                  n = n.add(e.doc.key);
                  break;
                case 1:
                  r = r.add(e.doc.key);
              }
            return new To(e, t.fromCache, n, r);
          }
        }
        class xo {
          constructor() {
            this.Qi = !1;
          }
          initialize(e, t) {
            (this.Ki = e), (this.indexManager = t), (this.Qi = !0);
          }
          getDocumentsMatchingQuery(e, t, n, r) {
            return this.$i(e, t)
              .next((i) => i || this.Ui(e, t, r, n))
              .next((n) => n || this.Wi(e, t));
          }
          $i(e, t) {
            if (In(t)) return re.resolve(null);
            let n = Cn(t);
            return this.indexManager.getIndexType(e, n).next((r) =>
              0 === r
                ? null
                : (null !== t.limit &&
                    1 === r &&
                    ((t = An(t, null, "F")), (n = Cn(t))),
                  this.indexManager
                    .getDocumentsMatchingTarget(e, n)
                    .next((r) => {
                      const i = Hn(...r);
                      return this.Ki.getDocuments(e, i).next((r) =>
                        this.indexManager.getMinOffset(e, n).next((n) => {
                          const s = this.Gi(t, r);
                          return this.zi(t, s, i, n.readTime)
                            ? this.$i(e, An(t, null, "F"))
                            : this.ji(e, s, t, n);
                        })
                      );
                    }))
            );
          }
          Ui(e, t, n, r) {
            return In(t) || r.isEqual(F.min())
              ? this.Wi(e, t)
              : this.Ki.getDocuments(e, n).next((i) => {
                  const o = this.Gi(t, i);
                  return this.zi(t, o, n, r)
                    ? this.Wi(e, t)
                    : (d() <= s.LogLevel.DEBUG &&
                        f(
                          "QueryEngine",
                          "Re-using previous result from %s to execute query: %s",
                          r.toString(),
                          On(t)
                        ),
                      this.ji(e, o, t, J(r, -1)));
                });
          }
          Gi(e, t) {
            let n = new et(Mn(e));
            return (
              t.forEach((t, r) => {
                Ln(e, r) && (n = n.add(r));
              }),
              n
            );
          }
          zi(e, t, n, r) {
            if (null === e.limit) return !1;
            if (n.size !== t.size) return !0;
            const i = "F" === e.limitType ? t.last() : t.first();
            return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
          }
          Wi(e, t) {
            return (
              d() <= s.LogLevel.DEBUG &&
                f(
                  "QueryEngine",
                  "Using full collection scan to execute query:",
                  On(t)
                ),
              this.Ki.getDocumentsMatchingQuery(e, t, Y.min())
            );
          }
          ji(e, t, n, r) {
            return this.Ki.getDocumentsMatchingQuery(e, n, r).next(
              (e) => (
                t.forEach((t) => {
                  e = e.insert(t.key, t);
                }),
                e
              )
            );
          }
        }
        class Co {
          constructor(e, t, n, r) {
            (this.persistence = e),
              (this.Hi = t),
              (this.serializer = r),
              (this.Ji = new Xe(L)),
              (this.Yi = new Fn((e) => fn(e), pn)),
              (this.Zi = new Map()),
              (this.Xi = e.getRemoteDocumentCache()),
              (this.kr = e.getTargetCache()),
              (this.Qr = e.getBundleCache()),
              this.es(n);
          }
          es(e) {
            (this.documentOverlayCache =
              this.persistence.getDocumentOverlayCache(e)),
              (this.indexManager = this.persistence.getIndexManager(e)),
              (this.mutationQueue = this.persistence.getMutationQueue(
                e,
                this.indexManager
              )),
              (this.localDocuments = new io(
                this.Xi,
                this.mutationQueue,
                this.documentOverlayCache,
                this.indexManager
              )),
              this.Xi.setIndexManager(this.indexManager),
              this.Hi.initialize(this.localDocuments, this.indexManager);
          }
          collectGarbage(e) {
            return this.persistence.runTransaction(
              "Collect garbage",
              "readwrite-primary",
              (t) => e.collect(t, this.Ji)
            );
          }
        }
        function Do(e, t, n, r) {
          return new Co(e, t, n, r);
        }
        async function Ao(e, t) {
          const n = w(e);
          return await n.persistence.runTransaction(
            "Handle user change",
            "readonly",
            (e) => {
              let r;
              return n.mutationQueue
                .getAllMutationBatches(e)
                .next(
                  (i) => (
                    (r = i), n.es(t), n.mutationQueue.getAllMutationBatches(e)
                  )
                )
                .next((t) => {
                  const i = [],
                    s = [];
                  let o = Hn();
                  for (const e of r) {
                    i.push(e.batchId);
                    for (const t of e.mutations) o = o.add(t.key);
                  }
                  for (const e of t) {
                    s.push(e.batchId);
                    for (const t of e.mutations) o = o.add(t.key);
                  }
                  return n.localDocuments
                    .getDocuments(e, o)
                    .next((e) => ({
                      ts: e,
                      removedBatchIds: i,
                      addedBatchIds: s,
                    }));
                });
            }
          );
        }
        function ko(e) {
          const t = w(e);
          return t.persistence.runTransaction(
            "Get last remote snapshot version",
            "readonly",
            (e) => t.kr.getLastRemoteSnapshotVersion(e)
          );
        }
        function No(e, t, n) {
          let r = Hn(),
            i = Hn();
          return (
            n.forEach((e) => (r = r.add(e))),
            t.getEntries(e, r).next((e) => {
              let r = Bn();
              return (
                n.forEach((n, s) => {
                  const o = e.get(n);
                  s.isFoundDocument() !== o.isFoundDocument() && (i = i.add(n)),
                    s.isNoDocument() && s.version.isEqual(F.min())
                      ? (t.removeEntry(n, s.readTime), (r = r.insert(n, s)))
                      : !o.isValidDocument() ||
                        s.version.compareTo(o.version) > 0 ||
                        (0 === s.version.compareTo(o.version) &&
                          o.hasPendingWrites)
                      ? (t.addEntry(s), (r = r.insert(n, s)))
                      : f(
                          "LocalStore",
                          "Ignoring outdated watch update for ",
                          n,
                          ". Current version:",
                          o.version,
                          " Watch version:",
                          s.version
                        );
                }),
                { ns: r, rs: i }
              );
            })
          );
        }
        function Oo(e, t) {
          const n = w(e);
          return n.persistence.runTransaction(
            "Get next mutation batch",
            "readonly",
            (e) => (
              void 0 === t && (t = -1),
              n.mutationQueue.getNextMutationBatchAfterBatchId(e, t)
            )
          );
        }
        function Lo(e, t) {
          const n = w(e);
          return n.persistence
            .runTransaction("Allocate target", "readwrite", (e) => {
              let r;
              return n.kr
                .getTargetData(e, t)
                .next((i) =>
                  i
                    ? ((r = i), re.resolve(r))
                    : n.kr
                        .allocateTargetId(e)
                        .next(
                          (i) => (
                            (r = new Pi(
                              t,
                              i,
                              "TargetPurposeListen",
                              e.currentSequenceNumber
                            )),
                            n.kr.addTargetData(e, r).next(() => r)
                          )
                        )
                );
            })
            .then((e) => {
              const r = n.Ji.get(e.targetId);
              return (
                (null === r ||
                  e.snapshotVersion.compareTo(r.snapshotVersion) > 0) &&
                  ((n.Ji = n.Ji.insert(e.targetId, e)),
                  n.Yi.set(t, e.targetId)),
                e
              );
            });
        }
        async function Po(e, t, n) {
          const r = w(e),
            i = r.Ji.get(t),
            s = n ? "readwrite" : "readwrite-primary";
          try {
            n ||
              (await r.persistence.runTransaction("Release target", s, (e) =>
                r.persistence.referenceDelegate.removeTarget(e, i)
              ));
          } catch (e) {
            if (!ce(e)) throw e;
            f(
              "LocalStore",
              `Failed to update sequence numbers for target ${t}: ${e}`
            );
          }
          (r.Ji = r.Ji.remove(t)), r.Yi.delete(i.target);
        }
        function Mo(e, t, n) {
          const r = w(e);
          let i = F.min(),
            s = Hn();
          return r.persistence.runTransaction(
            "Execute query",
            "readonly",
            (e) =>
              (function (e, t, n) {
                const r = w(e),
                  i = r.Yi.get(n);
                return void 0 !== i
                  ? re.resolve(r.Ji.get(i))
                  : r.kr.getTargetData(t, n);
              })(r, e, Cn(t))
                .next((t) => {
                  if (t)
                    return (
                      (i = t.lastLimboFreeSnapshotVersion),
                      r.kr
                        .getMatchingKeysForTargetId(e, t.targetId)
                        .next((e) => {
                          s = e;
                        })
                    );
                })
                .next(() =>
                  r.Hi.getDocumentsMatchingQuery(
                    e,
                    t,
                    n ? i : F.min(),
                    n ? s : Hn()
                  )
                )
                .next((e) => (Vo(r, Pn(t), e), { documents: e, ss: s }))
          );
        }
        function Ro(e, t) {
          const n = w(e),
            r = w(n.kr),
            i = n.Ji.get(t);
          return i
            ? Promise.resolve(i.target)
            : n.persistence.runTransaction("Get target data", "readonly", (e) =>
                r.ut(e, t).next((e) => (e ? e.target : null))
              );
        }
        function Fo(e, t) {
          const n = w(e),
            r = n.Zi.get(t) || F.min();
          return n.persistence
            .runTransaction("Get new document changes", "readonly", (e) =>
              n.Xi.getAllFromCollectionGroup(
                e,
                t,
                J(r, -1),
                Number.MAX_SAFE_INTEGER
              )
            )
            .then((e) => (Vo(n, t, e), e));
        }
        function Vo(e, t, n) {
          let r = e.Zi.get(t) || F.min();
          n.forEach((e, t) => {
            t.readTime.compareTo(r) > 0 && (r = t.readTime);
          }),
            e.Zi.set(t, r);
        }
        async function Bo(e, t, n = Hn()) {
          const r = await Lo(e, Cn(zi(t.bundledQuery))),
            i = w(e);
          return i.persistence.runTransaction(
            "Save named query",
            "readwrite",
            (e) => {
              const s = ui(t.readTime);
              if (r.snapshotVersion.compareTo(s) >= 0)
                return i.Qr.saveNamedQuery(e, t);
              const o = r.withResumeToken(st.EMPTY_BYTE_STRING, s);
              return (
                (i.Ji = i.Ji.insert(o.targetId, o)),
                i.kr
                  .updateTargetData(e, o)
                  .next(() => i.kr.removeMatchingKeysForTargetId(e, r.targetId))
                  .next(() => i.kr.addMatchingKeys(e, n, r.targetId))
                  .next(() => i.Qr.saveNamedQuery(e, t))
              );
            }
          );
        }
        function Uo(e, t) {
          return `firestore_clients_${e}_${t}`;
        }
        function jo(e, t, n) {
          let r = `firestore_mutations_${e}_${n}`;
          return t.isAuthenticated() && (r += `_${t.uid}`), r;
        }
        function qo(e, t) {
          return `firestore_targets_${e}_${t}`;
        }
        class zo {
          constructor(e, t, n, r) {
            (this.user = e),
              (this.batchId = t),
              (this.state = n),
              (this.error = r);
          }
          static cs(e, t, n) {
            const r = JSON.parse(n);
            let i,
              s =
                "object" == typeof r &&
                -1 !==
                  ["pending", "acknowledged", "rejected"].indexOf(r.state) &&
                (void 0 === r.error || "object" == typeof r.error);
            return (
              s &&
                r.error &&
                ((s =
                  "string" == typeof r.error.message &&
                  "string" == typeof r.error.code),
                s && (i = new _(r.error.code, r.error.message))),
              s
                ? new zo(e, t, r.state, i)
                : (p(
                    "SharedClientState",
                    `Failed to parse mutation state for ID '${t}': ${n}`
                  ),
                  null)
            );
          }
          ls() {
            const e = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (e.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(e)
            );
          }
        }
        class Go {
          constructor(e, t, n) {
            (this.targetId = e), (this.state = t), (this.error = n);
          }
          static cs(e, t) {
            const n = JSON.parse(t);
            let r,
              i =
                "object" == typeof n &&
                -1 !==
                  ["not-current", "current", "rejected"].indexOf(n.state) &&
                (void 0 === n.error || "object" == typeof n.error);
            return (
              i &&
                n.error &&
                ((i =
                  "string" == typeof n.error.message &&
                  "string" == typeof n.error.code),
                i && (r = new _(n.error.code, n.error.message))),
              i
                ? new Go(e, n.state, r)
                : (p(
                    "SharedClientState",
                    `Failed to parse target state for ID '${e}': ${t}`
                  ),
                  null)
            );
          }
          ls() {
            const e = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (e.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(e)
            );
          }
        }
        class Ko {
          constructor(e, t) {
            (this.clientId = e), (this.activeTargetIds = t);
          }
          static cs(e, t) {
            const n = JSON.parse(t);
            let r = "object" == typeof n && n.activeTargetIds instanceof Array,
              i = Jn();
            for (let e = 0; r && e < n.activeTargetIds.length; ++e)
              (r = ve(n.activeTargetIds[e])), (i = i.add(n.activeTargetIds[e]));
            return r
              ? new Ko(e, i)
              : (p(
                  "SharedClientState",
                  `Failed to parse client data for instance '${e}': ${t}`
                ),
                null);
          }
        }
        class $o {
          constructor(e, t) {
            (this.clientId = e), (this.onlineState = t);
          }
          static cs(e) {
            const t = JSON.parse(e);
            return "object" == typeof t &&
              -1 !== ["Unknown", "Online", "Offline"].indexOf(t.onlineState) &&
              "string" == typeof t.clientId
              ? new $o(t.clientId, t.onlineState)
              : (p("SharedClientState", `Failed to parse online state: ${e}`),
                null);
          }
        }
        class Qo {
          constructor() {
            this.activeTargetIds = Jn();
          }
          hs(e) {
            this.activeTargetIds = this.activeTargetIds.add(e);
          }
          Ps(e) {
            this.activeTargetIds = this.activeTargetIds.delete(e);
          }
          ls() {
            const e = {
              activeTargetIds: this.activeTargetIds.toArray(),
              updateTimeMs: Date.now(),
            };
            return JSON.stringify(e);
          }
        }
        class Ho {
          constructor(e, t, n, r, i) {
            (this.window = e),
              (this.ii = t),
              (this.persistenceKey = n),
              (this.Is = r),
              (this.syncEngine = null),
              (this.onlineStateHandler = null),
              (this.sequenceNumberHandler = null),
              (this.Ts = this.Es.bind(this)),
              (this.ds = new Xe(L)),
              (this.started = !1),
              (this.As = []);
            const s = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            (this.storage = this.window.localStorage),
              (this.currentUser = i),
              (this.Rs = Uo(this.persistenceKey, this.Is)),
              (this.Vs = (function (e) {
                return `firestore_sequence_number_${e}`;
              })(this.persistenceKey)),
              (this.ds = this.ds.insert(this.Is, new Qo())),
              (this.fs = new RegExp(`^firestore_clients_${s}_([^_]*)$`)),
              (this.gs = new RegExp(
                `^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`
              )),
              (this.ps = new RegExp(`^firestore_targets_${s}_(\\d+)$`)),
              (this.ys = (function (e) {
                return `firestore_online_state_${e}`;
              })(this.persistenceKey)),
              (this.ws = (function (e) {
                return `firestore_bundle_loaded_v2_${e}`;
              })(this.persistenceKey)),
              this.window.addEventListener("storage", this.Ts);
          }
          static v(e) {
            return !(!e || !e.localStorage);
          }
          async start() {
            const e = await this.syncEngine.Ni();
            for (const t of e) {
              if (t === this.Is) continue;
              const e = this.getItem(Uo(this.persistenceKey, t));
              if (e) {
                const n = Ko.cs(t, e);
                n && (this.ds = this.ds.insert(n.clientId, n));
              }
            }
            this.Ss();
            const t = this.storage.getItem(this.ys);
            if (t) {
              const e = this.bs(t);
              e && this.Ds(e);
            }
            for (const e of this.As) this.Es(e);
            (this.As = []),
              this.window.addEventListener("pagehide", () => this.shutdown()),
              (this.started = !0);
          }
          writeSequenceNumber(e) {
            this.setItem(this.Vs, JSON.stringify(e));
          }
          getAllActiveQueryTargets() {
            return this.vs(this.ds);
          }
          isActiveQueryTarget(e) {
            let t = !1;
            return (
              this.ds.forEach((n, r) => {
                r.activeTargetIds.has(e) && (t = !0);
              }),
              t
            );
          }
          addPendingMutation(e) {
            this.Cs(e, "pending");
          }
          updateMutationState(e, t, n) {
            this.Cs(e, t, n), this.Fs(e);
          }
          addLocalQueryTarget(e) {
            let t = "not-current";
            if (this.isActiveQueryTarget(e)) {
              const n = this.storage.getItem(qo(this.persistenceKey, e));
              if (n) {
                const r = Go.cs(e, n);
                r && (t = r.state);
              }
            }
            return this.Ms.hs(e), this.Ss(), t;
          }
          removeLocalQueryTarget(e) {
            this.Ms.Ps(e), this.Ss();
          }
          isLocalQueryTarget(e) {
            return this.Ms.activeTargetIds.has(e);
          }
          clearQueryState(e) {
            this.removeItem(qo(this.persistenceKey, e));
          }
          updateQueryState(e, t, n) {
            this.xs(e, t, n);
          }
          handleUserChange(e, t, n) {
            t.forEach((e) => {
              this.Fs(e);
            }),
              (this.currentUser = e),
              n.forEach((e) => {
                this.addPendingMutation(e);
              });
          }
          setOnlineState(e) {
            this.Os(e);
          }
          notifyBundleLoaded(e) {
            this.Ns(e);
          }
          shutdown() {
            this.started &&
              (this.window.removeEventListener("storage", this.Ts),
              this.removeItem(this.Rs),
              (this.started = !1));
          }
          getItem(e) {
            const t = this.storage.getItem(e);
            return f("SharedClientState", "READ", e, t), t;
          }
          setItem(e, t) {
            f("SharedClientState", "SET", e, t), this.storage.setItem(e, t);
          }
          removeItem(e) {
            f("SharedClientState", "REMOVE", e), this.storage.removeItem(e);
          }
          Es(e) {
            const t = e;
            if (t.storageArea === this.storage) {
              if (
                (f("SharedClientState", "EVENT", t.key, t.newValue),
                t.key === this.Rs)
              )
                return void p(
                  "Received WebStorage notification for local change. Another client might have garbage-collected our state"
                );
              this.ii.enqueueRetryable(async () => {
                if (this.started) {
                  if (null !== t.key)
                    if (this.fs.test(t.key)) {
                      if (null == t.newValue) {
                        const e = this.Bs(t.key);
                        return this.Ls(e, null);
                      }
                      {
                        const e = this.ks(t.key, t.newValue);
                        if (e) return this.Ls(e.clientId, e);
                      }
                    } else if (this.gs.test(t.key)) {
                      if (null !== t.newValue) {
                        const e = this.qs(t.key, t.newValue);
                        if (e) return this.Qs(e);
                      }
                    } else if (this.ps.test(t.key)) {
                      if (null !== t.newValue) {
                        const e = this.Ks(t.key, t.newValue);
                        if (e) return this.$s(e);
                      }
                    } else if (t.key === this.ys) {
                      if (null !== t.newValue) {
                        const e = this.bs(t.newValue);
                        if (e) return this.Ds(e);
                      }
                    } else if (t.key === this.Vs) {
                      const e = (function (e) {
                        let t = ge.ae;
                        if (null != e)
                          try {
                            const n = JSON.parse(e);
                            v("number" == typeof n), (t = n);
                          } catch (e) {
                            p(
                              "SharedClientState",
                              "Failed to read sequence number from WebStorage",
                              e
                            );
                          }
                        return t;
                      })(t.newValue);
                      e !== ge.ae && this.sequenceNumberHandler(e);
                    } else if (t.key === this.ws) {
                      const e = this.Us(t.newValue);
                      await Promise.all(e.map((e) => this.syncEngine.Ws(e)));
                    }
                } else this.As.push(t);
              });
            }
          }
          get Ms() {
            return this.ds.get(this.Is);
          }
          Ss() {
            this.setItem(this.Rs, this.Ms.ls());
          }
          Cs(e, t, n) {
            const r = new zo(this.currentUser, e, t, n),
              i = jo(this.persistenceKey, this.currentUser, e);
            this.setItem(i, r.ls());
          }
          Fs(e) {
            const t = jo(this.persistenceKey, this.currentUser, e);
            this.removeItem(t);
          }
          Os(e) {
            const t = { clientId: this.Is, onlineState: e };
            this.storage.setItem(this.ys, JSON.stringify(t));
          }
          xs(e, t, n) {
            const r = qo(this.persistenceKey, e),
              i = new Go(e, t, n);
            this.setItem(r, i.ls());
          }
          Ns(e) {
            const t = JSON.stringify(Array.from(e));
            this.setItem(this.ws, t);
          }
          Bs(e) {
            const t = this.fs.exec(e);
            return t ? t[1] : null;
          }
          ks(e, t) {
            const n = this.Bs(e);
            return Ko.cs(n, t);
          }
          qs(e, t) {
            const n = this.gs.exec(e),
              r = Number(n[1]),
              i = void 0 !== n[2] ? n[2] : null;
            return zo.cs(new u(i), r, t);
          }
          Ks(e, t) {
            const n = this.ps.exec(e),
              r = Number(n[1]);
            return Go.cs(r, t);
          }
          bs(e) {
            return $o.cs(e);
          }
          Us(e) {
            return JSON.parse(e);
          }
          async Qs(e) {
            if (e.user.uid === this.currentUser.uid)
              return this.syncEngine.Gs(e.batchId, e.state, e.error);
            f(
              "SharedClientState",
              `Ignoring mutation for non-active user ${e.user.uid}`
            );
          }
          $s(e) {
            return this.syncEngine.zs(e.targetId, e.state, e.error);
          }
          Ls(e, t) {
            const n = t ? this.ds.insert(e, t) : this.ds.remove(e),
              r = this.vs(this.ds),
              i = this.vs(n),
              s = [],
              o = [];
            return (
              i.forEach((e) => {
                r.has(e) || s.push(e);
              }),
              r.forEach((e) => {
                i.has(e) || o.push(e);
              }),
              this.syncEngine.js(s, o).then(() => {
                this.ds = n;
              })
            );
          }
          Ds(e) {
            this.ds.get(e.clientId) && this.onlineStateHandler(e.onlineState);
          }
          vs(e) {
            let t = Jn();
            return (
              e.forEach((e, n) => {
                t = t.unionWith(n.activeTargetIds);
              }),
              t
            );
          }
        }
        class Wo {
          constructor() {
            (this.Hs = new Qo()),
              (this.Js = {}),
              (this.onlineStateHandler = null),
              (this.sequenceNumberHandler = null);
          }
          addPendingMutation(e) {}
          updateMutationState(e, t, n) {}
          addLocalQueryTarget(e) {
            return this.Hs.hs(e), this.Js[e] || "not-current";
          }
          updateQueryState(e, t, n) {
            this.Js[e] = t;
          }
          removeLocalQueryTarget(e) {
            this.Hs.Ps(e);
          }
          isLocalQueryTarget(e) {
            return this.Hs.activeTargetIds.has(e);
          }
          clearQueryState(e) {
            delete this.Js[e];
          }
          getAllActiveQueryTargets() {
            return this.Hs.activeTargetIds;
          }
          isActiveQueryTarget(e) {
            return this.Hs.activeTargetIds.has(e);
          }
          start() {
            return (this.Hs = new Qo()), Promise.resolve();
          }
          handleUserChange(e, t, n) {}
          setOnlineState(e) {}
          shutdown() {}
          writeSequenceNumber(e) {}
          notifyBundleLoaded(e) {}
        }
        class Jo {
          Ys(e) {}
          shutdown() {}
        }
        class Xo {
          constructor() {
            (this.Zs = () => this.Xs()),
              (this.eo = () => this.no()),
              (this.ro = []),
              this.io();
          }
          Ys(e) {
            this.ro.push(e);
          }
          shutdown() {
            window.removeEventListener("online", this.Zs),
              window.removeEventListener("offline", this.eo);
          }
          io() {
            window.addEventListener("online", this.Zs),
              window.addEventListener("offline", this.eo);
          }
          Xs() {
            f("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
            for (const e of this.ro) e(0);
          }
          no() {
            f(
              "ConnectivityMonitor",
              "Network connectivity changed: UNAVAILABLE"
            );
            for (const e of this.ro) e(1);
          }
          static v() {
            return (
              "undefined" != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }
        }
        let Yo = null;
        function Zo() {
          return (
            null === Yo
              ? (Yo = 268435456 + Math.round(2147483648 * Math.random()))
              : Yo++,
            "0x" + Yo.toString(16)
          );
        }
        const ea = {
          BatchGetDocuments: "batchGet",
          Commit: "commit",
          RunQuery: "runQuery",
          RunAggregationQuery: "runAggregationQuery",
        };
        class ta {
          constructor(e) {
            (this.so = e.so), (this.oo = e.oo);
          }
          _o(e) {
            this.ao = e;
          }
          uo(e) {
            this.co = e;
          }
          onMessage(e) {
            this.lo = e;
          }
          close() {
            this.oo();
          }
          send(e) {
            this.so(e);
          }
          ho() {
            this.ao();
          }
          Po(e) {
            this.co(e);
          }
          Io(e) {
            this.lo(e);
          }
        }
        const na = "WebChannelConnection";
        class ra extends class {
          constructor(e) {
            (this.databaseInfo = e), (this.databaseId = e.databaseId);
            const t = e.ssl ? "https" : "http",
              n = encodeURIComponent(this.databaseId.projectId),
              r = encodeURIComponent(this.databaseId.database);
            (this.To = t + "://" + e.host),
              (this.Eo = `projects/${n}/databases/${r}`),
              (this.Ao =
                "(default)" === this.databaseId.database
                  ? `project_id=${n}`
                  : `project_id=${n}&database_id=${r}`);
          }
          get Ro() {
            return !1;
          }
          Vo(e, t, n, r, i) {
            const s = Zo(),
              o = this.mo(e, t);
            f("RestConnection", `Sending RPC '${e}' ${s}:`, o, n);
            const a = {
              "google-cloud-resource-prefix": this.Eo,
              "x-goog-request-params": this.Ao,
            };
            return (
              this.fo(a, r, i),
              this.po(e, o, a, n).then(
                (t) => (
                  f("RestConnection", `Received RPC '${e}' ${s}: `, t), t
                ),
                (t) => {
                  throw (
                    (g(
                      "RestConnection",
                      `RPC '${e}' ${s} failed with error: `,
                      t,
                      "url: ",
                      o,
                      "request:",
                      n
                    ),
                    t)
                  );
                }
              )
            );
          }
          yo(e, t, n, r, i, s) {
            return this.Vo(e, t, n, r, i);
          }
          fo(e, t, n) {
            (e["X-Goog-Api-Client"] = "gl-js/ fire/" + l),
              (e["Content-Type"] = "text/plain"),
              this.databaseInfo.appId &&
                (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
              t && t.headers.forEach((t, n) => (e[n] = t)),
              n && n.headers.forEach((t, n) => (e[n] = t));
          }
          mo(e, t) {
            const n = ea[e];
            return `${this.To}/v1/${t}:${n}`;
          }
        } {
          constructor(e) {
            super(e),
              (this.forceLongPolling = e.forceLongPolling),
              (this.autoDetectLongPolling = e.autoDetectLongPolling),
              (this.useFetchStreams = e.useFetchStreams),
              (this.longPollingOptions = e.longPollingOptions);
          }
          po(e, t, n, r) {
            const i = Zo();
            return new Promise((s, o) => {
              const c = new a.XhrIo();
              c.setWithCredentials(!0),
                c.listenOnce(a.EventType.COMPLETE, () => {
                  try {
                    switch (c.getLastErrorCode()) {
                      case a.ErrorCode.NO_ERROR:
                        const t = c.getResponseJson();
                        f(
                          na,
                          `XHR for RPC '${e}' ${i} received:`,
                          JSON.stringify(t)
                        ),
                          s(t);
                        break;
                      case a.ErrorCode.TIMEOUT:
                        f(na, `RPC '${e}' ${i} timed out`),
                          o(new _(b.DEADLINE_EXCEEDED, "Request time out"));
                        break;
                      case a.ErrorCode.HTTP_ERROR:
                        const n = c.getStatus();
                        if (
                          (f(
                            na,
                            `RPC '${e}' ${i} failed with status:`,
                            n,
                            "response text:",
                            c.getResponseText()
                          ),
                          n > 0)
                        ) {
                          let e = c.getResponseJson();
                          Array.isArray(e) && (e = e[0]);
                          const t = null == e ? void 0 : e.error;
                          if (t && t.status && t.message) {
                            const e = (function (e) {
                              const t = e.toLowerCase().replace(/_/g, "-");
                              return Object.values(b).indexOf(t) >= 0
                                ? t
                                : b.UNKNOWN;
                            })(t.status);
                            o(new _(e, t.message));
                          } else
                            o(
                              new _(
                                b.UNKNOWN,
                                "Server responded with status " + c.getStatus()
                              )
                            );
                        } else o(new _(b.UNAVAILABLE, "Connection failed."));
                        break;
                      default:
                        y();
                    }
                  } finally {
                    f(na, `RPC '${e}' ${i} completed.`);
                  }
                });
              const u = JSON.stringify(r);
              f(na, `RPC '${e}' ${i} sending request:`, r),
                c.send(t, "POST", u, n, 15);
            });
          }
          wo(e, t, n) {
            const r = Zo(),
              i = [
                this.To,
                "/",
                "google.firestore.v1.Firestore",
                "/",
                e,
                "/channel",
              ],
              s = a.createWebChannelTransport(),
              o = a.getStatEventTarget(),
              c = {
                httpSessionIdParam: "gsessionid",
                initMessageHeaders: {},
                messageUrlParams: {
                  database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                forceLongPolling: this.forceLongPolling,
                detectBufferingProxy: this.autoDetectLongPolling,
              },
              u = this.longPollingOptions.timeoutSeconds;
            void 0 !== u && (c.longPollingTimeout = Math.round(1e3 * u)),
              this.useFetchStreams &&
                (c.xmlHttpFactory = new a.FetchXmlHttpFactory({})),
              this.fo(c.initMessageHeaders, t, n),
              (c.encodeInitMessageHeaders = !0);
            const l = i.join("");
            f(na, `Creating RPC '${e}' stream ${r}: ${l}`, c);
            const h = s.createWebChannel(l, c);
            let d = !1,
              p = !1;
            const m = new ta({
                so: (t) => {
                  p
                    ? f(
                        na,
                        `Not sending because RPC '${e}' stream ${r} is closed:`,
                        t
                      )
                    : (d ||
                        (f(na, `Opening RPC '${e}' stream ${r} transport.`),
                        h.open(),
                        (d = !0)),
                      f(na, `RPC '${e}' stream ${r} sending:`, t),
                      h.send(t));
                },
                oo: () => h.close(),
              }),
              y = (e, t, n) => {
                e.listen(t, (e) => {
                  try {
                    n(e);
                  } catch (e) {
                    setTimeout(() => {
                      throw e;
                    }, 0);
                  }
                });
              };
            return (
              y(h, a.WebChannel.EventType.OPEN, () => {
                p || f(na, `RPC '${e}' stream ${r} transport opened.`);
              }),
              y(h, a.WebChannel.EventType.CLOSE, () => {
                p ||
                  ((p = !0),
                  f(na, `RPC '${e}' stream ${r} transport closed`),
                  m.Po());
              }),
              y(h, a.WebChannel.EventType.ERROR, (t) => {
                p ||
                  ((p = !0),
                  g(na, `RPC '${e}' stream ${r} transport errored:`, t),
                  m.Po(
                    new _(b.UNAVAILABLE, "The operation could not be completed")
                  ));
              }),
              y(h, a.WebChannel.EventType.MESSAGE, (t) => {
                var n;
                if (!p) {
                  const i = t.data[0];
                  v(!!i);
                  const s = i,
                    o =
                      s.error ||
                      (null === (n = s[0]) || void 0 === n ? void 0 : n.error);
                  if (o) {
                    f(na, `RPC '${e}' stream ${r} received error:`, o);
                    const t = o.status;
                    let n = (function (e) {
                        const t = Pr[e];
                        if (void 0 !== t) return Fr(t);
                      })(t),
                      i = o.message;
                    void 0 === n &&
                      ((n = b.INTERNAL),
                      (i =
                        "Unknown error status: " +
                        t +
                        " with message " +
                        o.message)),
                      (p = !0),
                      m.Po(new _(n, i)),
                      h.close();
                  } else f(na, `RPC '${e}' stream ${r} received:`, i), m.Io(i);
                }
              }),
              y(o, a.Event.STAT_EVENT, (t) => {
                t.stat === a.Stat.PROXY
                  ? f(na, `RPC '${e}' stream ${r} detected buffering proxy`)
                  : t.stat === a.Stat.NOPROXY &&
                    f(na, `RPC '${e}' stream ${r} detected no buffering proxy`);
              }),
              setTimeout(() => {
                m.ho();
              }, 0),
              m
            );
          }
        }
        function ia() {
          return "undefined" != typeof window ? window : null;
        }
        function sa() {
          return "undefined" != typeof document ? document : null;
        }
        function oa(e) {
          return new ii(e, !0);
        }
        class aa {
          constructor(e, t, n = 1e3, r = 1.5, i = 6e4) {
            (this.ii = e),
              (this.timerId = t),
              (this.So = n),
              (this.bo = r),
              (this.Do = i),
              (this.vo = 0),
              (this.Co = null),
              (this.Fo = Date.now()),
              this.reset();
          }
          reset() {
            this.vo = 0;
          }
          Mo() {
            this.vo = this.Do;
          }
          xo(e) {
            this.cancel();
            const t = Math.floor(this.vo + this.Oo()),
              n = Math.max(0, Date.now() - this.Fo),
              r = Math.max(0, t - n);
            r > 0 &&
              f(
                "ExponentialBackoff",
                `Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`
              ),
              (this.Co = this.ii.enqueueAfterDelay(
                this.timerId,
                r,
                () => ((this.Fo = Date.now()), e())
              )),
              (this.vo *= this.bo),
              this.vo < this.So && (this.vo = this.So),
              this.vo > this.Do && (this.vo = this.Do);
          }
          No() {
            null !== this.Co && (this.Co.skipDelay(), (this.Co = null));
          }
          cancel() {
            null !== this.Co && (this.Co.cancel(), (this.Co = null));
          }
          Oo() {
            return (Math.random() - 0.5) * this.vo;
          }
        }
        class ca {
          constructor(e, t, n, r, i, s, o, a) {
            (this.ii = e),
              (this.Bo = n),
              (this.Lo = r),
              (this.connection = i),
              (this.authCredentialsProvider = s),
              (this.appCheckCredentialsProvider = o),
              (this.listener = a),
              (this.state = 0),
              (this.ko = 0),
              (this.qo = null),
              (this.Qo = null),
              (this.stream = null),
              (this.Ko = new aa(e, t));
          }
          $o() {
            return 1 === this.state || 5 === this.state || this.Uo();
          }
          Uo() {
            return 2 === this.state || 3 === this.state;
          }
          start() {
            4 !== this.state ? this.auth() : this.Wo();
          }
          async stop() {
            this.$o() && (await this.close(0));
          }
          Go() {
            (this.state = 0), this.Ko.reset();
          }
          zo() {
            this.Uo() &&
              null === this.qo &&
              (this.qo = this.ii.enqueueAfterDelay(this.Bo, 6e4, () =>
                this.jo()
              ));
          }
          Ho(e) {
            this.Jo(), this.stream.send(e);
          }
          async jo() {
            if (this.Uo()) return this.close(0);
          }
          Jo() {
            this.qo && (this.qo.cancel(), (this.qo = null));
          }
          Yo() {
            this.Qo && (this.Qo.cancel(), (this.Qo = null));
          }
          async close(e, t) {
            this.Jo(),
              this.Yo(),
              this.Ko.cancel(),
              this.ko++,
              4 !== e
                ? this.Ko.reset()
                : t && t.code === b.RESOURCE_EXHAUSTED
                ? (p(t.toString()),
                  p(
                    "Using maximum backoff delay to prevent overloading the backend."
                  ),
                  this.Ko.Mo())
                : t &&
                  t.code === b.UNAUTHENTICATED &&
                  3 !== this.state &&
                  (this.authCredentialsProvider.invalidateToken(),
                  this.appCheckCredentialsProvider.invalidateToken()),
              null !== this.stream &&
                (this.Zo(), this.stream.close(), (this.stream = null)),
              (this.state = e),
              await this.listener.uo(t);
          }
          Zo() {}
          auth() {
            this.state = 1;
            const e = this.Xo(this.ko),
              t = this.ko;
            Promise.all([
              this.authCredentialsProvider.getToken(),
              this.appCheckCredentialsProvider.getToken(),
            ]).then(
              ([e, n]) => {
                this.ko === t && this.e_(e, n);
              },
              (t) => {
                e(() => {
                  const e = new _(
                    b.UNKNOWN,
                    "Fetching auth token failed: " + t.message
                  );
                  return this.t_(e);
                });
              }
            );
          }
          e_(e, t) {
            const n = this.Xo(this.ko);
            (this.stream = this.n_(e, t)),
              this.stream._o(() => {
                n(
                  () => (
                    (this.state = 2),
                    (this.Qo = this.ii.enqueueAfterDelay(
                      this.Lo,
                      1e4,
                      () => (this.Uo() && (this.state = 3), Promise.resolve())
                    )),
                    this.listener._o()
                  )
                );
              }),
              this.stream.uo((e) => {
                n(() => this.t_(e));
              }),
              this.stream.onMessage((e) => {
                n(() => this.onMessage(e));
              });
          }
          Wo() {
            (this.state = 5),
              this.Ko.xo(async () => {
                (this.state = 0), this.start();
              });
          }
          t_(e) {
            return (
              f("PersistentStream", `close with error: ${e}`),
              (this.stream = null),
              this.close(4, e)
            );
          }
          Xo(e) {
            return (t) => {
              this.ii.enqueueAndForget(() =>
                this.ko === e
                  ? t()
                  : (f(
                      "PersistentStream",
                      "stream callback skipped by getCloseGuardedDispatcher."
                    ),
                    Promise.resolve())
              );
            };
          }
        }
        class ua extends ca {
          constructor(e, t, n, r, i, s) {
            super(
              e,
              "listen_stream_connection_backoff",
              "listen_stream_idle",
              "health_check_timeout",
              t,
              n,
              r,
              s
            ),
              (this.serializer = i);
          }
          n_(e, t) {
            return this.connection.wo("Listen", e, t);
          }
          onMessage(e) {
            this.Ko.reset();
            const t = (function (e, t) {
                let n;
                if ("targetChange" in t) {
                  t.targetChange;
                  const r = (function (e) {
                      return "NO_CHANGE" === e
                        ? 0
                        : "ADD" === e
                        ? 1
                        : "REMOVE" === e
                        ? 2
                        : "CURRENT" === e
                        ? 3
                        : "RESET" === e
                        ? 4
                        : y();
                    })(t.targetChange.targetChangeType || "NO_CHANGE"),
                    i = t.targetChange.targetIds || [],
                    s = (function (e, t) {
                      return e.useProto3Json
                        ? (v(void 0 === t || "string" == typeof t),
                          st.fromBase64String(t || ""))
                        : (v(void 0 === t || t instanceof Uint8Array),
                          st.fromUint8Array(t || new Uint8Array()));
                    })(e, t.targetChange.resumeToken),
                    o = t.targetChange.cause,
                    a =
                      o &&
                      (function (e) {
                        const t = void 0 === e.code ? b.UNKNOWN : Fr(e.code);
                        return new _(t, e.message || "");
                      })(o);
                  n = new Jr(r, i, s, a || null);
                } else if ("documentChange" in t) {
                  t.documentChange;
                  const r = t.documentChange;
                  r.document, r.document.name, r.document.updateTime;
                  const i = fi(e, r.document.name),
                    s = ui(r.document.updateTime),
                    o = r.document.createTime
                      ? ui(r.document.createTime)
                      : F.min(),
                    a = new Ft({ mapValue: { fields: r.document.fields } }),
                    c = Bt.newFoundDocument(i, s, o, a),
                    u = r.targetIds || [],
                    l = r.removedTargetIds || [];
                  n = new Hr(u, l, c.key, c);
                } else if ("documentDelete" in t) {
                  t.documentDelete;
                  const r = t.documentDelete;
                  r.document;
                  const i = fi(e, r.document),
                    s = r.readTime ? ui(r.readTime) : F.min(),
                    o = Bt.newNoDocument(i, s),
                    a = r.removedTargetIds || [];
                  n = new Hr([], a, o.key, o);
                } else if ("documentRemove" in t) {
                  t.documentRemove;
                  const r = t.documentRemove;
                  r.document;
                  const i = fi(e, r.document),
                    s = r.removedTargetIds || [];
                  n = new Hr([], s, i, null);
                } else {
                  if (!("filter" in t)) return y();
                  {
                    t.filter;
                    const e = t.filter;
                    e.targetId;
                    const { count: r = 0, unchangedNames: i } = e,
                      s = new Lr(r, i),
                      o = e.targetId;
                    n = new Wr(o, s);
                  }
                }
                return n;
              })(this.serializer, e),
              n = (function (e) {
                if (!("targetChange" in e)) return F.min();
                const t = e.targetChange;
                return t.targetIds && t.targetIds.length
                  ? F.min()
                  : t.readTime
                  ? ui(t.readTime)
                  : F.min();
              })(e);
            return this.listener.r_(t, n);
          }
          i_(e) {
            const t = {};
            (t.database = mi(this.serializer)),
              (t.addTarget = (function (e, t) {
                let n;
                const r = t.target;
                if (
                  ((n = gn(r) ? { documents: Ii(e, r) } : { query: Ei(e, r) }),
                  (n.targetId = t.targetId),
                  t.resumeToken.approximateByteSize() > 0)
                ) {
                  n.resumeToken = ai(e, t.resumeToken);
                  const r = si(e, t.expectedCount);
                  null !== r && (n.expectedCount = r);
                } else if (t.snapshotVersion.compareTo(F.min()) > 0) {
                  n.readTime = oi(e, t.snapshotVersion.toTimestamp());
                  const r = si(e, t.expectedCount);
                  null !== r && (n.expectedCount = r);
                }
                return n;
              })(this.serializer, e));
            const n = (function (e, t) {
              const n = (function (e) {
                switch (e) {
                  case "TargetPurposeListen":
                    return null;
                  case "TargetPurposeExistenceFilterMismatch":
                    return "existence-filter-mismatch";
                  case "TargetPurposeExistenceFilterMismatchBloom":
                    return "existence-filter-mismatch-bloom";
                  case "TargetPurposeLimboResolution":
                    return "limbo-document";
                  default:
                    return y();
                }
              })(t.purpose);
              return null == n ? null : { "goog-listen-tags": n };
            })(this.serializer, e);
            n && (t.labels = n), this.Ho(t);
          }
          s_(e) {
            const t = {};
            (t.database = mi(this.serializer)),
              (t.removeTarget = e),
              this.Ho(t);
          }
        }
        class la extends ca {
          constructor(e, t, n, r, i, s) {
            super(
              e,
              "write_stream_connection_backoff",
              "write_stream_idle",
              "health_check_timeout",
              t,
              n,
              r,
              s
            ),
              (this.serializer = i),
              (this.o_ = !1);
          }
          get __() {
            return this.o_;
          }
          start() {
            (this.o_ = !1), (this.lastStreamToken = void 0), super.start();
          }
          Zo() {
            this.o_ && this.a_([]);
          }
          n_(e, t) {
            return this.connection.wo("Write", e, t);
          }
          onMessage(e) {
            if (
              (v(!!e.streamToken),
              (this.lastStreamToken = e.streamToken),
              this.o_)
            ) {
              this.Ko.reset();
              const t = (function (e, t) {
                  return e && e.length > 0
                    ? (v(void 0 !== t),
                      e.map((e) =>
                        (function (e, t) {
                          let n = e.updateTime ? ui(e.updateTime) : ui(t);
                          return (
                            n.isEqual(F.min()) && (n = ui(t)),
                            new fr(n, e.transformResults || [])
                          );
                        })(e, t)
                      ))
                    : [];
                })(e.writeResults, e.commitTime),
                n = ui(e.commitTime);
              return this.listener.u_(n, t);
            }
            return (
              v(!e.writeResults || 0 === e.writeResults.length),
              (this.o_ = !0),
              this.listener.c_()
            );
          }
          l_() {
            const e = {};
            (e.database = mi(this.serializer)), this.Ho(e);
          }
          a_(e) {
            const t = {
              streamToken: this.lastStreamToken,
              writes: e.map((e) => bi(this.serializer, e)),
            };
            this.Ho(t);
          }
        }
        class ha extends class {} {
          constructor(e, t, n, r) {
            super(),
              (this.authCredentials = e),
              (this.appCheckCredentials = t),
              (this.connection = n),
              (this.serializer = r),
              (this.h_ = !1);
          }
          P_() {
            if (this.h_)
              throw new _(
                b.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }
          Vo(e, t, n) {
            return (
              this.P_(),
              Promise.all([
                this.authCredentials.getToken(),
                this.appCheckCredentials.getToken(),
              ])
                .then(([r, i]) => this.connection.Vo(e, t, n, r, i))
                .catch((e) => {
                  throw "FirebaseError" === e.name
                    ? (e.code === b.UNAUTHENTICATED &&
                        (this.authCredentials.invalidateToken(),
                        this.appCheckCredentials.invalidateToken()),
                      e)
                    : new _(b.UNKNOWN, e.toString());
                })
            );
          }
          yo(e, t, n, r) {
            return (
              this.P_(),
              Promise.all([
                this.authCredentials.getToken(),
                this.appCheckCredentials.getToken(),
              ])
                .then(([i, s]) => this.connection.yo(e, t, n, i, s, r))
                .catch((e) => {
                  throw "FirebaseError" === e.name
                    ? (e.code === b.UNAUTHENTICATED &&
                        (this.authCredentials.invalidateToken(),
                        this.appCheckCredentials.invalidateToken()),
                      e)
                    : new _(b.UNKNOWN, e.toString());
                })
            );
          }
          terminate() {
            this.h_ = !0;
          }
        }
        class da {
          constructor(e, t) {
            (this.asyncQueue = e),
              (this.onlineStateHandler = t),
              (this.state = "Unknown"),
              (this.T_ = 0),
              (this.E_ = null),
              (this.d_ = !0);
          }
          A_() {
            0 === this.T_ &&
              (this.R_("Unknown"),
              (this.E_ = this.asyncQueue.enqueueAfterDelay(
                "online_state_timeout",
                1e4,
                () => (
                  (this.E_ = null),
                  this.V_("Backend didn't respond within 10 seconds."),
                  this.R_("Offline"),
                  Promise.resolve()
                )
              )));
          }
          m_(e) {
            "Online" === this.state
              ? this.R_("Unknown")
              : (this.T_++,
                this.T_ >= 1 &&
                  (this.f_(),
                  this.V_(
                    `Connection failed 1 times. Most recent error: ${e.toString()}`
                  ),
                  this.R_("Offline")));
          }
          set(e) {
            this.f_(),
              (this.T_ = 0),
              "Online" === e && (this.d_ = !1),
              this.R_(e);
          }
          R_(e) {
            e !== this.state && ((this.state = e), this.onlineStateHandler(e));
          }
          V_(e) {
            const t = `Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
            this.d_ ? (p(t), (this.d_ = !1)) : f("OnlineStateTracker", t);
          }
          f_() {
            null !== this.E_ && (this.E_.cancel(), (this.E_ = null));
          }
        }
        class fa {
          constructor(e, t, n, r, i) {
            (this.localStore = e),
              (this.datastore = t),
              (this.asyncQueue = n),
              (this.remoteSyncer = {}),
              (this.g_ = []),
              (this.p_ = new Map()),
              (this.y_ = new Set()),
              (this.w_ = []),
              (this.S_ = i),
              this.S_.Ys((e) => {
                n.enqueueAndForget(async () => {
                  Ia(this) &&
                    (f(
                      "RemoteStore",
                      "Restarting streams for network reachability change."
                    ),
                    await (async function (e) {
                      const t = w(e);
                      t.y_.add(4),
                        await ga(t),
                        t.b_.set("Unknown"),
                        t.y_.delete(4),
                        await pa(t);
                    })(this));
                });
              }),
              (this.b_ = new da(n, r));
          }
        }
        async function pa(e) {
          if (Ia(e)) for (const t of e.w_) await t(!0);
        }
        async function ga(e) {
          for (const t of e.w_) await t(!1);
        }
        function ma(e, t) {
          const n = w(e);
          n.p_.has(t.targetId) ||
            (n.p_.set(t.targetId, t), _a(n) ? ba(n) : Ua(n).Uo() && va(n, t));
        }
        function ya(e, t) {
          const n = w(e),
            r = Ua(n);
          n.p_.delete(t),
            r.Uo() && wa(n, t),
            0 === n.p_.size && (r.Uo() ? r.zo() : Ia(n) && n.b_.set("Unknown"));
        }
        function va(e, t) {
          if (
            (e.D_.Be(t.targetId),
            t.resumeToken.approximateByteSize() > 0 ||
              t.snapshotVersion.compareTo(F.min()) > 0)
          ) {
            const n = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
            t = t.withExpectedCount(n);
          }
          Ua(e).i_(t);
        }
        function wa(e, t) {
          e.D_.Be(t), Ua(e).s_(t);
        }
        function ba(e) {
          (e.D_ = new Yr({
            getRemoteKeysForTarget: (t) =>
              e.remoteSyncer.getRemoteKeysForTarget(t),
            ut: (t) => e.p_.get(t) || null,
            rt: () => e.datastore.serializer.databaseId,
          })),
            Ua(e).start(),
            e.b_.A_();
        }
        function _a(e) {
          return Ia(e) && !Ua(e).$o() && e.p_.size > 0;
        }
        function Ia(e) {
          return 0 === w(e).y_.size;
        }
        function Ea(e) {
          e.D_ = void 0;
        }
        async function Sa(e) {
          e.p_.forEach((t, n) => {
            va(e, t);
          });
        }
        async function Ta(e, t) {
          Ea(e), _a(e) ? (e.b_.m_(t), ba(e)) : e.b_.set("Unknown");
        }
        async function xa(e, t, n) {
          if ((e.b_.set("Online"), t instanceof Jr && 2 === t.state && t.cause))
            try {
              await (async function (e, t) {
                const n = t.cause;
                for (const r of t.targetIds)
                  e.p_.has(r) &&
                    (await e.remoteSyncer.rejectListen(r, n),
                    e.p_.delete(r),
                    e.D_.removeTarget(r));
              })(e, t);
            } catch (n) {
              f(
                "RemoteStore",
                "Failed to remove targets %s: %s ",
                t.targetIds.join(","),
                n
              ),
                await Ca(e, n);
            }
          else if (
            (t instanceof Hr
              ? e.D_.We(t)
              : t instanceof Wr
              ? e.D_.Ze(t)
              : e.D_.je(t),
            !n.isEqual(F.min()))
          )
            try {
              const t = await ko(e.localStore);
              n.compareTo(t) >= 0 &&
                (await (function (e, t) {
                  const n = e.D_.st(t);
                  return (
                    n.targetChanges.forEach((n, r) => {
                      if (n.resumeToken.approximateByteSize() > 0) {
                        const i = e.p_.get(r);
                        i && e.p_.set(r, i.withResumeToken(n.resumeToken, t));
                      }
                    }),
                    n.targetMismatches.forEach((t, n) => {
                      const r = e.p_.get(t);
                      if (!r) return;
                      e.p_.set(
                        t,
                        r.withResumeToken(
                          st.EMPTY_BYTE_STRING,
                          r.snapshotVersion
                        )
                      ),
                        wa(e, t);
                      const i = new Pi(r.target, t, n, r.sequenceNumber);
                      va(e, i);
                    }),
                    e.remoteSyncer.applyRemoteEvent(n)
                  );
                })(e, n));
            } catch (t) {
              f("RemoteStore", "Failed to raise snapshot:", t), await Ca(e, t);
            }
        }
        async function Ca(e, t, n) {
          if (!ce(t)) throw t;
          e.y_.add(1),
            await ga(e),
            e.b_.set("Offline"),
            n || (n = () => ko(e.localStore)),
            e.asyncQueue.enqueueRetryable(async () => {
              f("RemoteStore", "Retrying IndexedDB access"),
                await n(),
                e.y_.delete(1),
                await pa(e);
            });
        }
        function Da(e, t) {
          return t().catch((n) => Ca(e, n, t));
        }
        async function Aa(e) {
          const t = w(e),
            n = ja(t);
          let r = t.g_.length > 0 ? t.g_[t.g_.length - 1].batchId : -1;
          for (; ka(t); )
            try {
              const e = await Oo(t.localStore, r);
              if (null === e) {
                0 === t.g_.length && n.zo();
                break;
              }
              (r = e.batchId), Na(t, e);
            } catch (e) {
              await Ca(t, e);
            }
          Oa(t) && La(t);
        }
        function ka(e) {
          return Ia(e) && e.g_.length < 10;
        }
        function Na(e, t) {
          e.g_.push(t);
          const n = ja(e);
          n.Uo() && n.__ && n.a_(t.mutations);
        }
        function Oa(e) {
          return Ia(e) && !ja(e).$o() && e.g_.length > 0;
        }
        function La(e) {
          ja(e).start();
        }
        async function Pa(e) {
          ja(e).l_();
        }
        async function Ma(e) {
          const t = ja(e);
          for (const n of e.g_) t.a_(n.mutations);
        }
        async function Ra(e, t, n) {
          const r = e.g_.shift(),
            i = kr.from(r, t, n);
          await Da(e, () => e.remoteSyncer.applySuccessfulWrite(i)),
            await Aa(e);
        }
        async function Fa(e, t) {
          t &&
            ja(e).__ &&
            (await (async function (e, t) {
              if (
                (function (e) {
                  return Rr(e) && e !== b.ABORTED;
                })(t.code)
              ) {
                const n = e.g_.shift();
                ja(e).Go(),
                  await Da(e, () =>
                    e.remoteSyncer.rejectFailedWrite(n.batchId, t)
                  ),
                  await Aa(e);
              }
            })(e, t)),
            Oa(e) && La(e);
        }
        async function Va(e, t) {
          const n = w(e);
          n.asyncQueue.verifyOperationInProgress(),
            f("RemoteStore", "RemoteStore received new credentials");
          const r = Ia(n);
          n.y_.add(3),
            await ga(n),
            r && n.b_.set("Unknown"),
            await n.remoteSyncer.handleCredentialChange(t),
            n.y_.delete(3),
            await pa(n);
        }
        async function Ba(e, t) {
          const n = w(e);
          t
            ? (n.y_.delete(2), await pa(n))
            : t || (n.y_.add(2), await ga(n), n.b_.set("Unknown"));
        }
        function Ua(e) {
          return (
            e.v_ ||
              ((e.v_ = (function (e, t, n) {
                const r = w(e);
                return (
                  r.P_(),
                  new ua(
                    t,
                    r.connection,
                    r.authCredentials,
                    r.appCheckCredentials,
                    r.serializer,
                    n
                  )
                );
              })(e.datastore, e.asyncQueue, {
                _o: Sa.bind(null, e),
                uo: Ta.bind(null, e),
                r_: xa.bind(null, e),
              })),
              e.w_.push(async (t) => {
                t
                  ? (e.v_.Go(), _a(e) ? ba(e) : e.b_.set("Unknown"))
                  : (await e.v_.stop(), Ea(e));
              })),
            e.v_
          );
        }
        function ja(e) {
          return (
            e.C_ ||
              ((e.C_ = (function (e, t, n) {
                const r = w(e);
                return (
                  r.P_(),
                  new la(
                    t,
                    r.connection,
                    r.authCredentials,
                    r.appCheckCredentials,
                    r.serializer,
                    n
                  )
                );
              })(e.datastore, e.asyncQueue, {
                _o: Pa.bind(null, e),
                uo: Fa.bind(null, e),
                c_: Ma.bind(null, e),
                u_: Ra.bind(null, e),
              })),
              e.w_.push(async (t) => {
                t
                  ? (e.C_.Go(), await Aa(e))
                  : (await e.C_.stop(),
                    e.g_.length > 0 &&
                      (f(
                        "RemoteStore",
                        `Stopping write stream with ${e.g_.length} pending writes`
                      ),
                      (e.g_ = [])));
              })),
            e.C_
          );
        }
        class qa {
          constructor(e, t, n, r, i) {
            (this.asyncQueue = e),
              (this.timerId = t),
              (this.targetTimeMs = n),
              (this.op = r),
              (this.removalCallback = i),
              (this.deferred = new I()),
              (this.then = this.deferred.promise.then.bind(
                this.deferred.promise
              )),
              this.deferred.promise.catch((e) => {});
          }
          static createAndSchedule(e, t, n, r, i) {
            const s = Date.now() + n,
              o = new qa(e, t, s, r, i);
            return o.start(n), o;
          }
          start(e) {
            this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
          }
          skipDelay() {
            return this.handleDelayElapsed();
          }
          cancel(e) {
            null !== this.timerHandle &&
              (this.clearTimeout(),
              this.deferred.reject(
                new _(b.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
              ));
          }
          handleDelayElapsed() {
            this.asyncQueue.enqueueAndForget(() =>
              null !== this.timerHandle
                ? (this.clearTimeout(),
                  this.op().then((e) => this.deferred.resolve(e)))
                : Promise.resolve()
            );
          }
          clearTimeout() {
            null !== this.timerHandle &&
              (this.removalCallback(this),
              clearTimeout(this.timerHandle),
              (this.timerHandle = null));
          }
        }
        function za(e, t) {
          if ((p("AsyncQueue", `${t}: ${e}`), ce(e)))
            return new _(b.UNAVAILABLE, `${t}: ${e}`);
          throw e;
        }
        class Ga {
          constructor(e) {
            (this.comparator = e
              ? (t, n) => e(t, n) || q.comparator(t.key, n.key)
              : (e, t) => q.comparator(e.key, t.key)),
              (this.keyedMap = jn()),
              (this.sortedSet = new Xe(this.comparator));
          }
          static emptySet(e) {
            return new Ga(e.comparator);
          }
          has(e) {
            return null != this.keyedMap.get(e);
          }
          get(e) {
            return this.keyedMap.get(e);
          }
          first() {
            return this.sortedSet.minKey();
          }
          last() {
            return this.sortedSet.maxKey();
          }
          isEmpty() {
            return this.sortedSet.isEmpty();
          }
          indexOf(e) {
            const t = this.keyedMap.get(e);
            return t ? this.sortedSet.indexOf(t) : -1;
          }
          get size() {
            return this.sortedSet.size;
          }
          forEach(e) {
            this.sortedSet.inorderTraversal((t, n) => (e(t), !1));
          }
          add(e) {
            const t = this.delete(e.key);
            return t.copy(
              t.keyedMap.insert(e.key, e),
              t.sortedSet.insert(e, null)
            );
          }
          delete(e) {
            const t = this.get(e);
            return t
              ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
              : this;
          }
          isEqual(e) {
            if (!(e instanceof Ga)) return !1;
            if (this.size !== e.size) return !1;
            const t = this.sortedSet.getIterator(),
              n = e.sortedSet.getIterator();
            for (; t.hasNext(); ) {
              const e = t.getNext().key,
                r = n.getNext().key;
              if (!e.isEqual(r)) return !1;
            }
            return !0;
          }
          toString() {
            const e = [];
            return (
              this.forEach((t) => {
                e.push(t.toString());
              }),
              0 === e.length
                ? "DocumentSet ()"
                : "DocumentSet (\n  " + e.join("  \n") + "\n)"
            );
          }
          copy(e, t) {
            const n = new Ga();
            return (
              (n.comparator = this.comparator),
              (n.keyedMap = e),
              (n.sortedSet = t),
              n
            );
          }
        }
        class Ka {
          constructor() {
            this.F_ = new Xe(q.comparator);
          }
          track(e) {
            const t = e.doc.key,
              n = this.F_.get(t);
            n
              ? 0 !== e.type && 3 === n.type
                ? (this.F_ = this.F_.insert(t, e))
                : 3 === e.type && 1 !== n.type
                ? (this.F_ = this.F_.insert(t, { type: n.type, doc: e.doc }))
                : 2 === e.type && 2 === n.type
                ? (this.F_ = this.F_.insert(t, { type: 2, doc: e.doc }))
                : 2 === e.type && 0 === n.type
                ? (this.F_ = this.F_.insert(t, { type: 0, doc: e.doc }))
                : 1 === e.type && 0 === n.type
                ? (this.F_ = this.F_.remove(t))
                : 1 === e.type && 2 === n.type
                ? (this.F_ = this.F_.insert(t, { type: 1, doc: n.doc }))
                : 0 === e.type && 1 === n.type
                ? (this.F_ = this.F_.insert(t, { type: 2, doc: e.doc }))
                : y()
              : (this.F_ = this.F_.insert(t, e));
          }
          M_() {
            const e = [];
            return (
              this.F_.inorderTraversal((t, n) => {
                e.push(n);
              }),
              e
            );
          }
        }
        class $a {
          constructor(e, t, n, r, i, s, o, a, c) {
            (this.query = e),
              (this.docs = t),
              (this.oldDocs = n),
              (this.docChanges = r),
              (this.mutatedKeys = i),
              (this.fromCache = s),
              (this.syncStateChanged = o),
              (this.excludesMetadataChanges = a),
              (this.hasCachedResults = c);
          }
          static fromInitialDocuments(e, t, n, r, i) {
            const s = [];
            return (
              t.forEach((e) => {
                s.push({ type: 0, doc: e });
              }),
              new $a(e, t, Ga.emptySet(t), s, n, r, !0, !1, i)
            );
          }
          get hasPendingWrites() {
            return !this.mutatedKeys.isEmpty();
          }
          isEqual(e) {
            if (
              !(
                this.fromCache === e.fromCache &&
                this.hasCachedResults === e.hasCachedResults &&
                this.syncStateChanged === e.syncStateChanged &&
                this.mutatedKeys.isEqual(e.mutatedKeys) &&
                kn(this.query, e.query) &&
                this.docs.isEqual(e.docs) &&
                this.oldDocs.isEqual(e.oldDocs)
              )
            )
              return !1;
            const t = this.docChanges,
              n = e.docChanges;
            if (t.length !== n.length) return !1;
            for (let e = 0; e < t.length; e++)
              if (t[e].type !== n[e].type || !t[e].doc.isEqual(n[e].doc))
                return !1;
            return !0;
          }
        }
        class Qa {
          constructor() {
            (this.x_ = void 0), (this.listeners = []);
          }
        }
        class Ha {
          constructor() {
            (this.queries = new Fn((e) => Nn(e), kn)),
              (this.onlineState = "Unknown"),
              (this.O_ = new Set());
          }
        }
        async function Wa(e, t) {
          const n = w(e),
            r = t.query;
          let i = !1,
            s = n.queries.get(r);
          if ((s || ((i = !0), (s = new Qa())), i))
            try {
              s.x_ = await n.onListen(r);
            } catch (e) {
              const n = za(
                e,
                `Initialization of query '${On(t.query)}' failed`
              );
              return void t.onError(n);
            }
          n.queries.set(r, s),
            s.listeners.push(t),
            t.N_(n.onlineState),
            s.x_ && t.B_(s.x_) && Za(n);
        }
        async function Ja(e, t) {
          const n = w(e),
            r = t.query;
          let i = !1;
          const s = n.queries.get(r);
          if (s) {
            const e = s.listeners.indexOf(t);
            e >= 0 &&
              (s.listeners.splice(e, 1), (i = 0 === s.listeners.length));
          }
          if (i) return n.queries.delete(r), n.onUnlisten(r);
        }
        function Xa(e, t) {
          const n = w(e);
          let r = !1;
          for (const e of t) {
            const t = e.query,
              i = n.queries.get(t);
            if (i) {
              for (const t of i.listeners) t.B_(e) && (r = !0);
              i.x_ = e;
            }
          }
          r && Za(n);
        }
        function Ya(e, t, n) {
          const r = w(e),
            i = r.queries.get(t);
          if (i) for (const e of i.listeners) e.onError(n);
          r.queries.delete(t);
        }
        function Za(e) {
          e.O_.forEach((e) => {
            e.next();
          });
        }
        class ec {
          constructor(e, t, n) {
            (this.query = e),
              (this.L_ = t),
              (this.k_ = !1),
              (this.q_ = null),
              (this.onlineState = "Unknown"),
              (this.options = n || {});
          }
          B_(e) {
            if (!this.options.includeMetadataChanges) {
              const t = [];
              for (const n of e.docChanges) 3 !== n.type && t.push(n);
              e = new $a(
                e.query,
                e.docs,
                e.oldDocs,
                t,
                e.mutatedKeys,
                e.fromCache,
                e.syncStateChanged,
                !0,
                e.hasCachedResults
              );
            }
            let t = !1;
            return (
              this.k_
                ? this.Q_(e) && (this.L_.next(e), (t = !0))
                : this.K_(e, this.onlineState) && (this.U_(e), (t = !0)),
              (this.q_ = e),
              t
            );
          }
          onError(e) {
            this.L_.error(e);
          }
          N_(e) {
            this.onlineState = e;
            let t = !1;
            return (
              this.q_ &&
                !this.k_ &&
                this.K_(this.q_, e) &&
                (this.U_(this.q_), (t = !0)),
              t
            );
          }
          K_(e, t) {
            if (!e.fromCache) return !0;
            const n = "Offline" !== t;
            return (
              (!this.options.W_ || !n) &&
              (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t)
            );
          }
          Q_(e) {
            if (e.docChanges.length > 0) return !0;
            const t =
              this.q_ && this.q_.hasPendingWrites !== e.hasPendingWrites;
            return (
              !(!e.syncStateChanged && !t) &&
              !0 === this.options.includeMetadataChanges
            );
          }
          U_(e) {
            (e = $a.fromInitialDocuments(
              e.query,
              e.docs,
              e.mutatedKeys,
              e.fromCache,
              e.hasCachedResults
            )),
              (this.k_ = !0),
              this.L_.next(e);
          }
        }
        class tc {
          constructor(e, t) {
            (this.G_ = e), (this.byteLength = t);
          }
          z_() {
            return "metadata" in this.G_;
          }
        }
        class nc {
          constructor(e) {
            this.serializer = e;
          }
          os(e) {
            return fi(this.serializer, e);
          }
          _s(e) {
            return e.metadata.exists
              ? wi(this.serializer, e.document, !1)
              : Bt.newNoDocument(
                  this.os(e.metadata.name),
                  this.us(e.metadata.readTime)
                );
          }
          us(e) {
            return ui(e);
          }
        }
        class rc {
          constructor(e, t, n) {
            (this.j_ = e),
              (this.localStore = t),
              (this.serializer = n),
              (this.queries = []),
              (this.documents = []),
              (this.collectionGroups = new Set()),
              (this.progress = ic(e));
          }
          H_(e) {
            this.progress.bytesLoaded += e.byteLength;
            let t = this.progress.documentsLoaded;
            if (e.G_.namedQuery) this.queries.push(e.G_.namedQuery);
            else if (e.G_.documentMetadata) {
              this.documents.push({ metadata: e.G_.documentMetadata }),
                e.G_.documentMetadata.exists || ++t;
              const n = B.fromString(e.G_.documentMetadata.name);
              this.collectionGroups.add(n.get(n.length - 2));
            } else
              e.G_.document &&
                ((this.documents[this.documents.length - 1].document =
                  e.G_.document),
                ++t);
            return t !== this.progress.documentsLoaded
              ? ((this.progress.documentsLoaded = t),
                Object.assign({}, this.progress))
              : null;
          }
          J_(e) {
            const t = new Map(),
              n = new nc(this.serializer);
            for (const r of e)
              if (r.metadata.queries) {
                const e = n.os(r.metadata.name);
                for (const n of r.metadata.queries) {
                  const r = (t.get(n) || Hn()).add(e);
                  t.set(n, r);
                }
              }
            return t;
          }
          async complete() {
            const e = await (async function (e, t, n, r) {
                const i = w(e);
                let s = Hn(),
                  o = Bn();
                for (const e of n) {
                  const n = t.os(e.metadata.name);
                  e.document && (s = s.add(n));
                  const r = t._s(e);
                  r.setReadTime(t.us(e.metadata.readTime)),
                    (o = o.insert(n, r));
                }
                const a = i.Xi.newChangeBuffer({ trackRemovals: !0 }),
                  c = await Lo(
                    i,
                    (function (e) {
                      return Cn(_n(B.fromString(`__bundle__/docs/${e}`)));
                    })(r)
                  );
                return i.persistence.runTransaction(
                  "Apply bundle documents",
                  "readwrite",
                  (e) =>
                    No(e, a, o)
                      .next((t) => (a.apply(e), t))
                      .next((t) =>
                        i.kr
                          .removeMatchingKeysForTargetId(e, c.targetId)
                          .next(() => i.kr.addMatchingKeys(e, s, c.targetId))
                          .next(() =>
                            i.localDocuments.getLocalViewOfDocuments(
                              e,
                              t.ns,
                              t.rs
                            )
                          )
                          .next(() => t.ns)
                      )
                );
              })(
                this.localStore,
                new nc(this.serializer),
                this.documents,
                this.j_.id
              ),
              t = this.J_(this.documents);
            for (const e of this.queries)
              await Bo(this.localStore, e, t.get(e.name));
            return (
              (this.progress.taskState = "Success"),
              { progress: this.progress, Y_: this.collectionGroups, Z_: e }
            );
          }
        }
        function ic(e) {
          return {
            taskState: "Running",
            documentsLoaded: 0,
            bytesLoaded: 0,
            totalDocuments: e.totalDocuments,
            totalBytes: e.totalBytes,
          };
        }
        class sc {
          constructor(e) {
            this.key = e;
          }
        }
        class oc {
          constructor(e) {
            this.key = e;
          }
        }
        class ac {
          constructor(e, t) {
            (this.query = e),
              (this.X_ = t),
              (this.ea = null),
              (this.hasCachedResults = !1),
              (this.current = !1),
              (this.ta = Hn()),
              (this.mutatedKeys = Hn()),
              (this.na = Mn(e)),
              (this.ra = new Ga(this.na));
          }
          get ia() {
            return this.X_;
          }
          sa(e, t) {
            const n = t ? t.oa : new Ka(),
              r = t ? t.ra : this.ra;
            let i = t ? t.mutatedKeys : this.mutatedKeys,
              s = r,
              o = !1;
            const a =
                "F" === this.query.limitType && r.size === this.query.limit
                  ? r.last()
                  : null,
              c =
                "L" === this.query.limitType && r.size === this.query.limit
                  ? r.first()
                  : null;
            if (
              (e.inorderTraversal((e, t) => {
                const u = r.get(e),
                  l = Ln(this.query, t) ? t : null,
                  h = !!u && this.mutatedKeys.has(u.key),
                  d =
                    !!l &&
                    (l.hasLocalMutations ||
                      (this.mutatedKeys.has(l.key) && l.hasCommittedMutations));
                let f = !1;
                u && l
                  ? u.data.isEqual(l.data)
                    ? h !== d && (n.track({ type: 3, doc: l }), (f = !0))
                    : this._a(u, l) ||
                      (n.track({ type: 2, doc: l }),
                      (f = !0),
                      ((a && this.na(l, a) > 0) || (c && this.na(l, c) < 0)) &&
                        (o = !0))
                  : !u && l
                  ? (n.track({ type: 0, doc: l }), (f = !0))
                  : u &&
                    !l &&
                    (n.track({ type: 1, doc: u }),
                    (f = !0),
                    (a || c) && (o = !0)),
                  f &&
                    (l
                      ? ((s = s.add(l)), (i = d ? i.add(e) : i.delete(e)))
                      : ((s = s.delete(e)), (i = i.delete(e))));
              }),
              null !== this.query.limit)
            )
              for (; s.size > this.query.limit; ) {
                const e = "F" === this.query.limitType ? s.last() : s.first();
                (s = s.delete(e.key)),
                  (i = i.delete(e.key)),
                  n.track({ type: 1, doc: e });
              }
            return { ra: s, oa: n, zi: o, mutatedKeys: i };
          }
          _a(e, t) {
            return (
              e.hasLocalMutations &&
              t.hasCommittedMutations &&
              !t.hasLocalMutations
            );
          }
          applyChanges(e, t, n) {
            const r = this.ra;
            (this.ra = e.ra), (this.mutatedKeys = e.mutatedKeys);
            const i = e.oa.M_();
            i.sort(
              (e, t) =>
                (function (e, t) {
                  const n = (e) => {
                    switch (e) {
                      case 0:
                        return 1;
                      case 2:
                      case 3:
                        return 2;
                      case 1:
                        return 0;
                      default:
                        return y();
                    }
                  };
                  return n(e) - n(t);
                })(e.type, t.type) || this.na(e.doc, t.doc)
            ),
              this.aa(n);
            const s = t ? this.ua() : [],
              o = 0 === this.ta.size && this.current ? 1 : 0,
              a = o !== this.ea;
            return (
              (this.ea = o),
              0 !== i.length || a
                ? {
                    snapshot: new $a(
                      this.query,
                      e.ra,
                      r,
                      i,
                      e.mutatedKeys,
                      0 === o,
                      a,
                      !1,
                      !!n && n.resumeToken.approximateByteSize() > 0
                    ),
                    ca: s,
                  }
                : { ca: s }
            );
          }
          N_(e) {
            return this.current && "Offline" === e
              ? ((this.current = !1),
                this.applyChanges(
                  {
                    ra: this.ra,
                    oa: new Ka(),
                    mutatedKeys: this.mutatedKeys,
                    zi: !1,
                  },
                  !1
                ))
              : { ca: [] };
          }
          la(e) {
            return (
              !this.X_.has(e) &&
              !!this.ra.has(e) &&
              !this.ra.get(e).hasLocalMutations
            );
          }
          aa(e) {
            e &&
              (e.addedDocuments.forEach((e) => (this.X_ = this.X_.add(e))),
              e.modifiedDocuments.forEach((e) => {}),
              e.removedDocuments.forEach((e) => (this.X_ = this.X_.delete(e))),
              (this.current = e.current));
          }
          ua() {
            if (!this.current) return [];
            const e = this.ta;
            (this.ta = Hn()),
              this.ra.forEach((e) => {
                this.la(e.key) && (this.ta = this.ta.add(e.key));
              });
            const t = [];
            return (
              e.forEach((e) => {
                this.ta.has(e) || t.push(new oc(e));
              }),
              this.ta.forEach((n) => {
                e.has(n) || t.push(new sc(n));
              }),
              t
            );
          }
          ha(e) {
            (this.X_ = e.ss), (this.ta = Hn());
            const t = this.sa(e.documents);
            return this.applyChanges(t, !0);
          }
          Pa() {
            return $a.fromInitialDocuments(
              this.query,
              this.ra,
              this.mutatedKeys,
              0 === this.ea,
              this.hasCachedResults
            );
          }
        }
        class cc {
          constructor(e, t, n) {
            (this.query = e), (this.targetId = t), (this.view = n);
          }
        }
        class uc {
          constructor(e) {
            (this.key = e), (this.Ia = !1);
          }
        }
        class lc {
          constructor(e, t, n, r, i, s) {
            (this.localStore = e),
              (this.remoteStore = t),
              (this.eventManager = n),
              (this.sharedClientState = r),
              (this.currentUser = i),
              (this.maxConcurrentLimboResolutions = s),
              (this.Ta = {}),
              (this.Ea = new Fn((e) => Nn(e), kn)),
              (this.da = new Map()),
              (this.Aa = new Set()),
              (this.Ra = new Xe(q.comparator)),
              (this.Va = new Map()),
              (this.ma = new ao()),
              (this.fa = {}),
              (this.ga = new Map()),
              (this.pa = Rs.On()),
              (this.onlineState = "Unknown"),
              (this.ya = void 0);
          }
          get isPrimaryClient() {
            return !0 === this.ya;
          }
        }
        async function hc(e, t) {
          const n = Fc(e);
          let r, i;
          const s = n.Ea.get(t);
          if (s)
            (r = s.targetId),
              n.sharedClientState.addLocalQueryTarget(r),
              (i = s.view.Pa());
          else {
            const e = await Lo(n.localStore, Cn(t)),
              s = n.sharedClientState.addLocalQueryTarget(e.targetId);
            (r = e.targetId),
              (i = await dc(n, t, r, "current" === s, e.resumeToken)),
              n.isPrimaryClient && ma(n.remoteStore, e);
          }
          return i;
        }
        async function dc(e, t, n, r, i) {
          e.wa = (t, n, r) =>
            (async function (e, t, n, r) {
              let i = t.view.sa(n);
              i.zi &&
                (i = await Mo(e.localStore, t.query, !1).then(
                  ({ documents: e }) => t.view.sa(e, i)
                ));
              const s = r && r.targetChanges.get(t.targetId),
                o = t.view.applyChanges(i, e.isPrimaryClient, s);
              return Ec(e, t.targetId, o.ca), o.snapshot;
            })(e, t, n, r);
          const s = await Mo(e.localStore, t, !0),
            o = new ac(t, s.ss),
            a = o.sa(s.documents),
            c = Qr.createSynthesizedTargetChangeForCurrentChange(
              n,
              r && "Offline" !== e.onlineState,
              i
            ),
            u = o.applyChanges(a, e.isPrimaryClient, c);
          Ec(e, n, u.ca);
          const l = new cc(t, n, o);
          return (
            e.Ea.set(t, l),
            e.da.has(n) ? e.da.get(n).push(t) : e.da.set(n, [t]),
            u.snapshot
          );
        }
        async function fc(e, t) {
          const n = w(e),
            r = n.Ea.get(t),
            i = n.da.get(r.targetId);
          if (i.length > 1)
            return (
              n.da.set(
                r.targetId,
                i.filter((e) => !kn(e, t))
              ),
              void n.Ea.delete(t)
            );
          n.isPrimaryClient
            ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
              n.sharedClientState.isActiveQueryTarget(r.targetId) ||
                (await Po(n.localStore, r.targetId, !1)
                  .then(() => {
                    n.sharedClientState.clearQueryState(r.targetId),
                      ya(n.remoteStore, r.targetId),
                      _c(n, r.targetId);
                  })
                  .catch(ne)))
            : (_c(n, r.targetId), await Po(n.localStore, r.targetId, !0));
        }
        async function pc(e, t) {
          const n = w(e);
          try {
            const e = await (function (e, t) {
              const n = w(e),
                r = t.snapshotVersion;
              let i = n.Ji;
              return n.persistence
                .runTransaction(
                  "Apply remote event",
                  "readwrite-primary",
                  (e) => {
                    const s = n.Xi.newChangeBuffer({ trackRemovals: !0 });
                    i = n.Ji;
                    const o = [];
                    t.targetChanges.forEach((s, a) => {
                      const c = i.get(a);
                      if (!c) return;
                      o.push(
                        n.kr
                          .removeMatchingKeys(e, s.removedDocuments, a)
                          .next(() =>
                            n.kr.addMatchingKeys(e, s.addedDocuments, a)
                          )
                      );
                      let u = c.withSequenceNumber(e.currentSequenceNumber);
                      null !== t.targetMismatches.get(a)
                        ? (u = u
                            .withResumeToken(st.EMPTY_BYTE_STRING, F.min())
                            .withLastLimboFreeSnapshotVersion(F.min()))
                        : s.resumeToken.approximateByteSize() > 0 &&
                          (u = u.withResumeToken(s.resumeToken, r)),
                        (i = i.insert(a, u)),
                        (function (e, t, n) {
                          return (
                            0 === e.resumeToken.approximateByteSize() ||
                            t.snapshotVersion.toMicroseconds() -
                              e.snapshotVersion.toMicroseconds() >=
                              3e8 ||
                            n.addedDocuments.size +
                              n.modifiedDocuments.size +
                              n.removedDocuments.size >
                              0
                          );
                        })(c, u, s) && o.push(n.kr.updateTargetData(e, u));
                    });
                    let a = Bn(),
                      c = Hn();
                    if (
                      (t.documentUpdates.forEach((r) => {
                        t.resolvedLimboDocuments.has(r) &&
                          o.push(
                            n.persistence.referenceDelegate.updateLimboDocument(
                              e,
                              r
                            )
                          );
                      }),
                      o.push(
                        No(e, s, t.documentUpdates).next((e) => {
                          (a = e.ns), (c = e.rs);
                        })
                      ),
                      !r.isEqual(F.min()))
                    ) {
                      const t = n.kr
                        .getLastRemoteSnapshotVersion(e)
                        .next((t) =>
                          n.kr.setTargetsMetadata(e, e.currentSequenceNumber, r)
                        );
                      o.push(t);
                    }
                    return re
                      .waitFor(o)
                      .next(() => s.apply(e))
                      .next(() =>
                        n.localDocuments.getLocalViewOfDocuments(e, a, c)
                      )
                      .next(() => a);
                  }
                )
                .then((e) => ((n.Ji = i), e));
            })(n.localStore, t);
            t.targetChanges.forEach((e, t) => {
              const r = n.Va.get(t);
              r &&
                (v(
                  e.addedDocuments.size +
                    e.modifiedDocuments.size +
                    e.removedDocuments.size <=
                    1
                ),
                e.addedDocuments.size > 0
                  ? (r.Ia = !0)
                  : e.modifiedDocuments.size > 0
                  ? v(r.Ia)
                  : e.removedDocuments.size > 0 && (v(r.Ia), (r.Ia = !1)));
            }),
              await xc(n, e, t);
          } catch (e) {
            await ne(e);
          }
        }
        function gc(e, t, n) {
          const r = w(e);
          if (
            (r.isPrimaryClient && 0 === n) ||
            (!r.isPrimaryClient && 1 === n)
          ) {
            const e = [];
            r.Ea.forEach((n, r) => {
              const i = r.view.N_(t);
              i.snapshot && e.push(i.snapshot);
            }),
              (function (e, t) {
                const n = w(e);
                n.onlineState = t;
                let r = !1;
                n.queries.forEach((e, n) => {
                  for (const e of n.listeners) e.N_(t) && (r = !0);
                }),
                  r && Za(n);
              })(r.eventManager, t),
              e.length && r.Ta.r_(e),
              (r.onlineState = t),
              r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
          }
        }
        async function mc(e, t, n) {
          const r = w(e);
          r.sharedClientState.updateQueryState(t, "rejected", n);
          const i = r.Va.get(t),
            s = i && i.key;
          if (s) {
            let e = new Xe(q.comparator);
            e = e.insert(s, Bt.newNoDocument(s, F.min()));
            const n = Hn().add(s),
              i = new $r(F.min(), new Map(), new Xe(L), e, n);
            await pc(r, i), (r.Ra = r.Ra.remove(s)), r.Va.delete(t), Tc(r);
          } else
            await Po(r.localStore, t, !1)
              .then(() => _c(r, t, n))
              .catch(ne);
        }
        async function yc(e, t) {
          const n = w(e),
            r = t.batch.batchId;
          try {
            const e = await (function (e, t) {
              const n = w(e);
              return n.persistence.runTransaction(
                "Acknowledge batch",
                "readwrite-primary",
                (e) => {
                  const r = t.batch.keys(),
                    i = n.Xi.newChangeBuffer({ trackRemovals: !0 });
                  return (function (e, t, n, r) {
                    const i = n.batch,
                      s = i.keys();
                    let o = re.resolve();
                    return (
                      s.forEach((e) => {
                        o = o
                          .next(() => r.getEntry(t, e))
                          .next((t) => {
                            const s = n.docVersions.get(e);
                            v(null !== s),
                              t.version.compareTo(s) < 0 &&
                                (i.applyToRemoteDocument(t, n),
                                t.isValidDocument() &&
                                  (t.setReadTime(n.commitVersion),
                                  r.addEntry(t)));
                          });
                      }),
                      o.next(() => e.mutationQueue.removeMutationBatch(t, i))
                    );
                  })(n, e, t, i)
                    .next(() => i.apply(e))
                    .next(() => n.mutationQueue.performConsistencyCheck(e))
                    .next(() =>
                      n.documentOverlayCache.removeOverlaysForBatchId(
                        e,
                        r,
                        t.batch.batchId
                      )
                    )
                    .next(() =>
                      n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                        e,
                        (function (e) {
                          let t = Hn();
                          for (let n = 0; n < e.mutationResults.length; ++n)
                            e.mutationResults[n].transformResults.length > 0 &&
                              (t = t.add(e.batch.mutations[n].key));
                          return t;
                        })(t)
                      )
                    )
                    .next(() => n.localDocuments.getDocuments(e, r));
                }
              );
            })(n.localStore, t);
            bc(n, r, null),
              wc(n, r),
              n.sharedClientState.updateMutationState(r, "acknowledged"),
              await xc(n, e);
          } catch (e) {
            await ne(e);
          }
        }
        async function vc(e, t, n) {
          const r = w(e);
          try {
            const e = await (function (e, t) {
              const n = w(e);
              return n.persistence.runTransaction(
                "Reject batch",
                "readwrite-primary",
                (e) => {
                  let r;
                  return n.mutationQueue
                    .lookupMutationBatch(e, t)
                    .next(
                      (t) => (
                        v(null !== t),
                        (r = t.keys()),
                        n.mutationQueue.removeMutationBatch(e, t)
                      )
                    )
                    .next(() => n.mutationQueue.performConsistencyCheck(e))
                    .next(() =>
                      n.documentOverlayCache.removeOverlaysForBatchId(e, r, t)
                    )
                    .next(() =>
                      n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                        e,
                        r
                      )
                    )
                    .next(() => n.localDocuments.getDocuments(e, r));
                }
              );
            })(r.localStore, t);
            bc(r, t, n),
              wc(r, t),
              r.sharedClientState.updateMutationState(t, "rejected", n),
              await xc(r, e);
          } catch (n) {
            await ne(n);
          }
        }
        function wc(e, t) {
          (e.ga.get(t) || []).forEach((e) => {
            e.resolve();
          }),
            e.ga.delete(t);
        }
        function bc(e, t, n) {
          const r = w(e);
          let i = r.fa[r.currentUser.toKey()];
          if (i) {
            const e = i.get(t);
            e && (n ? e.reject(n) : e.resolve(), (i = i.remove(t))),
              (r.fa[r.currentUser.toKey()] = i);
          }
        }
        function _c(e, t, n = null) {
          e.sharedClientState.removeLocalQueryTarget(t);
          for (const r of e.da.get(t)) e.Ea.delete(r), n && e.Ta.Sa(r, n);
          e.da.delete(t),
            e.isPrimaryClient &&
              e.ma.Ar(t).forEach((t) => {
                e.ma.containsKey(t) || Ic(e, t);
              });
        }
        function Ic(e, t) {
          e.Aa.delete(t.path.canonicalString());
          const n = e.Ra.get(t);
          null !== n &&
            (ya(e.remoteStore, n),
            (e.Ra = e.Ra.remove(t)),
            e.Va.delete(n),
            Tc(e));
        }
        function Ec(e, t, n) {
          for (const r of n)
            r instanceof sc
              ? (e.ma.addReference(r.key, t), Sc(e, r))
              : r instanceof oc
              ? (f("SyncEngine", "Document no longer in limbo: " + r.key),
                e.ma.removeReference(r.key, t),
                e.ma.containsKey(r.key) || Ic(e, r.key))
              : y();
        }
        function Sc(e, t) {
          const n = t.key,
            r = n.path.canonicalString();
          e.Ra.get(n) ||
            e.Aa.has(r) ||
            (f("SyncEngine", "New document in limbo: " + n),
            e.Aa.add(r),
            Tc(e));
        }
        function Tc(e) {
          for (
            ;
            e.Aa.size > 0 && e.Ra.size < e.maxConcurrentLimboResolutions;

          ) {
            const t = e.Aa.values().next().value;
            e.Aa.delete(t);
            const n = new q(B.fromString(t)),
              r = e.pa.next();
            e.Va.set(r, new uc(n)),
              (e.Ra = e.Ra.insert(n, r)),
              ma(
                e.remoteStore,
                new Pi(Cn(_n(n.path)), r, "TargetPurposeLimboResolution", ge.ae)
              );
          }
        }
        async function xc(e, t, n) {
          const r = w(e),
            i = [],
            s = [],
            o = [];
          r.Ea.isEmpty() ||
            (r.Ea.forEach((e, a) => {
              o.push(
                r.wa(a, t, n).then((e) => {
                  if (
                    ((e || n) &&
                      r.isPrimaryClient &&
                      r.sharedClientState.updateQueryState(
                        a.targetId,
                        (null == e ? void 0 : e.fromCache)
                          ? "not-current"
                          : "current"
                      ),
                    e)
                  ) {
                    i.push(e);
                    const t = To.qi(a.targetId, e);
                    s.push(t);
                  }
                })
              );
            }),
            await Promise.all(o),
            r.Ta.r_(i),
            await (async function (e, t) {
              const n = w(e);
              try {
                await n.persistence.runTransaction(
                  "notifyLocalViewChanges",
                  "readwrite",
                  (e) =>
                    re.forEach(t, (t) =>
                      re
                        .forEach(t.Li, (r) =>
                          n.persistence.referenceDelegate.addReference(
                            e,
                            t.targetId,
                            r
                          )
                        )
                        .next(() =>
                          re.forEach(t.ki, (r) =>
                            n.persistence.referenceDelegate.removeReference(
                              e,
                              t.targetId,
                              r
                            )
                          )
                        )
                    )
                );
              } catch (e) {
                if (!ce(e)) throw e;
                f("LocalStore", "Failed to update sequence numbers: " + e);
              }
              for (const e of t) {
                const t = e.targetId;
                if (!e.fromCache) {
                  const e = n.Ji.get(t),
                    r = e.snapshotVersion,
                    i = e.withLastLimboFreeSnapshotVersion(r);
                  n.Ji = n.Ji.insert(t, i);
                }
              }
            })(r.localStore, s));
        }
        async function Cc(e, t) {
          const n = w(e);
          if (!n.currentUser.isEqual(t)) {
            f("SyncEngine", "User change. New user:", t.toKey());
            const e = await Ao(n.localStore, t);
            (n.currentUser = t),
              (function (e, t) {
                e.ga.forEach((e) => {
                  e.forEach((e) => {
                    e.reject(
                      new _(
                        b.CANCELLED,
                        "'waitForPendingWrites' promise is rejected due to a user change."
                      )
                    );
                  });
                }),
                  e.ga.clear();
              })(n),
              n.sharedClientState.handleUserChange(
                t,
                e.removedBatchIds,
                e.addedBatchIds
              ),
              await xc(n, e.ts);
          }
        }
        function Dc(e, t) {
          const n = w(e),
            r = n.Va.get(t);
          if (r && r.Ia) return Hn().add(r.key);
          {
            let e = Hn();
            const r = n.da.get(t);
            if (!r) return e;
            for (const t of r) {
              const r = n.Ea.get(t);
              e = e.unionWith(r.view.ia);
            }
            return e;
          }
        }
        async function Ac(e, t) {
          const n = w(e),
            r = await Mo(n.localStore, t.query, !0),
            i = t.view.ha(r);
          return n.isPrimaryClient && Ec(n, t.targetId, i.ca), i;
        }
        async function kc(e, t) {
          const n = w(e);
          return Fo(n.localStore, t).then((e) => xc(n, e));
        }
        async function Nc(e, t, n, r) {
          const i = w(e),
            s = await (function (e, t) {
              const n = w(e),
                r = w(n.mutationQueue);
              return n.persistence.runTransaction(
                "Lookup mutation documents",
                "readonly",
                (e) =>
                  r
                    .Dn(e, t)
                    .next((t) =>
                      t ? n.localDocuments.getDocuments(e, t) : re.resolve(null)
                    )
              );
            })(i.localStore, t);
          null !== s
            ? ("pending" === n
                ? await Aa(i.remoteStore)
                : "acknowledged" === n || "rejected" === n
                ? (bc(i, t, r || null),
                  wc(i, t),
                  (function (e, t) {
                    w(w(e).mutationQueue).Cn(t);
                  })(i.localStore, t))
                : y(),
              await xc(i, s))
            : f("SyncEngine", "Cannot apply mutation batch with id: " + t);
        }
        async function Oc(e, t, n) {
          const r = w(e),
            i = [],
            s = [];
          for (const e of t) {
            let t;
            const n = r.da.get(e);
            if (n && 0 !== n.length) {
              t = await Lo(r.localStore, Cn(n[0]));
              for (const e of n) {
                const t = r.Ea.get(e),
                  n = await Ac(r, t);
                n.snapshot && s.push(n.snapshot);
              }
            } else {
              const n = await Ro(r.localStore, e);
              (t = await Lo(r.localStore, n)),
                await dc(r, Lc(n), e, !1, t.resumeToken);
            }
            i.push(t);
          }
          return r.Ta.r_(s), i;
        }
        function Lc(e) {
          return bn(
            e.path,
            e.collectionGroup,
            e.orderBy,
            e.filters,
            e.limit,
            "F",
            e.startAt,
            e.endAt
          );
        }
        function Pc(e) {
          return (function (e) {
            return w(w(e).persistence).Ni();
          })(w(e).localStore);
        }
        async function Mc(e, t, n, r) {
          const i = w(e);
          if (i.ya)
            return void f(
              "SyncEngine",
              "Ignoring unexpected query state notification."
            );
          const s = i.da.get(t);
          if (s && s.length > 0)
            switch (n) {
              case "current":
              case "not-current": {
                const e = await Fo(i.localStore, Pn(s[0])),
                  r = $r.createSynthesizedRemoteEventForCurrentChange(
                    t,
                    "current" === n,
                    st.EMPTY_BYTE_STRING
                  );
                await xc(i, e, r);
                break;
              }
              case "rejected":
                await Po(i.localStore, t, !0), _c(i, t, r);
                break;
              default:
                y();
            }
        }
        async function Rc(e, t, n) {
          const r = Fc(e);
          if (r.ya) {
            for (const e of t) {
              if (r.da.has(e)) {
                f("SyncEngine", "Adding an already active target " + e);
                continue;
              }
              const t = await Ro(r.localStore, e),
                n = await Lo(r.localStore, t);
              await dc(r, Lc(t), n.targetId, !1, n.resumeToken),
                ma(r.remoteStore, n);
            }
            for (const e of n)
              r.da.has(e) &&
                (await Po(r.localStore, e, !1)
                  .then(() => {
                    ya(r.remoteStore, e), _c(r, e);
                  })
                  .catch(ne));
          }
        }
        function Fc(e) {
          const t = w(e);
          return (
            (t.remoteStore.remoteSyncer.applyRemoteEvent = pc.bind(null, t)),
            (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Dc.bind(
              null,
              t
            )),
            (t.remoteStore.remoteSyncer.rejectListen = mc.bind(null, t)),
            (t.Ta.r_ = Xa.bind(null, t.eventManager)),
            (t.Ta.Sa = Ya.bind(null, t.eventManager)),
            t
          );
        }
        function Vc(e) {
          const t = w(e);
          return (
            (t.remoteStore.remoteSyncer.applySuccessfulWrite = yc.bind(
              null,
              t
            )),
            (t.remoteStore.remoteSyncer.rejectFailedWrite = vc.bind(null, t)),
            t
          );
        }
        class Bc {
          constructor() {
            this.synchronizeTabs = !1;
          }
          async initialize(e) {
            (this.serializer = oa(e.databaseInfo.databaseId)),
              (this.sharedClientState = this.createSharedClientState(e)),
              (this.persistence = this.createPersistence(e)),
              await this.persistence.start(),
              (this.localStore = this.createLocalStore(e)),
              (this.gcScheduler = this.createGarbageCollectionScheduler(
                e,
                this.localStore
              )),
              (this.indexBackfillerScheduler =
                this.createIndexBackfillerScheduler(e, this.localStore));
          }
          createGarbageCollectionScheduler(e, t) {
            return null;
          }
          createIndexBackfillerScheduler(e, t) {
            return null;
          }
          createLocalStore(e) {
            return Do(
              this.persistence,
              new xo(),
              e.initialUser,
              this.serializer
            );
          }
          createPersistence(e) {
            return new po(mo.zr, this.serializer);
          }
          createSharedClientState(e) {
            return new Wo();
          }
          async terminate() {
            this.gcScheduler && this.gcScheduler.stop(),
              await this.sharedClientState.shutdown(),
              await this.persistence.shutdown();
          }
        }
        class Uc extends Bc {
          constructor(e) {
            super(), (this.cacheSizeBytes = e);
          }
          createGarbageCollectionScheduler(e, t) {
            v(this.persistence.referenceDelegate instanceof yo);
            const n = this.persistence.referenceDelegate.garbageCollector;
            return new zs(n, e.asyncQueue, t);
          }
          createPersistence(e) {
            const t =
              void 0 !== this.cacheSizeBytes
                ? Ds.withCacheSize(this.cacheSizeBytes)
                : Ds.DEFAULT;
            return new po((e) => yo.zr(e, t), this.serializer);
          }
        }
        class jc extends Bc {
          constructor(e, t, n) {
            super(),
              (this.Da = e),
              (this.cacheSizeBytes = t),
              (this.forceOwnership = n),
              (this.synchronizeTabs = !1);
          }
          async initialize(e) {
            await super.initialize(e),
              await this.Da.initialize(this, e),
              await Vc(this.Da.syncEngine),
              await Aa(this.Da.remoteStore),
              await this.persistence.Vi(
                () => (
                  this.gcScheduler &&
                    !this.gcScheduler.started &&
                    this.gcScheduler.start(),
                  this.indexBackfillerScheduler &&
                    !this.indexBackfillerScheduler.started &&
                    this.indexBackfillerScheduler.start(),
                  Promise.resolve()
                )
              );
          }
          createLocalStore(e) {
            return Do(
              this.persistence,
              new xo(),
              e.initialUser,
              this.serializer
            );
          }
          createGarbageCollectionScheduler(e, t) {
            const n = this.persistence.referenceDelegate.garbageCollector;
            return new zs(n, e.asyncQueue, t);
          }
          createIndexBackfillerScheduler(e, t) {
            const n = new pe(t, this.persistence);
            return new fe(e.asyncQueue, n);
          }
          createPersistence(e) {
            const t = So(
                e.databaseInfo.databaseId,
                e.databaseInfo.persistenceKey
              ),
              n =
                void 0 !== this.cacheSizeBytes
                  ? Ds.withCacheSize(this.cacheSizeBytes)
                  : Ds.DEFAULT;
            return new _o(
              this.synchronizeTabs,
              t,
              e.clientId,
              n,
              e.asyncQueue,
              ia(),
              sa(),
              this.serializer,
              this.sharedClientState,
              !!this.forceOwnership
            );
          }
          createSharedClientState(e) {
            return new Wo();
          }
        }
        class qc extends jc {
          constructor(e, t) {
            super(e, t, !1),
              (this.Da = e),
              (this.cacheSizeBytes = t),
              (this.synchronizeTabs = !0);
          }
          async initialize(e) {
            await super.initialize(e);
            const t = this.Da.syncEngine;
            this.sharedClientState instanceof Ho &&
              ((this.sharedClientState.syncEngine = {
                Gs: Nc.bind(null, t),
                zs: Mc.bind(null, t),
                js: Rc.bind(null, t),
                Ni: Pc.bind(null, t),
                Ws: kc.bind(null, t),
              }),
              await this.sharedClientState.start()),
              await this.persistence.Vi(async (e) => {
                await (async function (e, t) {
                  const n = w(e);
                  if ((Fc(n), Vc(n), !0 === t && !0 !== n.ya)) {
                    const e = n.sharedClientState.getAllActiveQueryTargets(),
                      t = await Oc(n, e.toArray());
                    (n.ya = !0), await Ba(n.remoteStore, !0);
                    for (const e of t) ma(n.remoteStore, e);
                  } else if (!1 === t && !1 !== n.ya) {
                    const e = [];
                    let t = Promise.resolve();
                    n.da.forEach((r, i) => {
                      n.sharedClientState.isLocalQueryTarget(i)
                        ? e.push(i)
                        : (t = t.then(
                            () => (_c(n, i), Po(n.localStore, i, !0))
                          )),
                        ya(n.remoteStore, i);
                    }),
                      await t,
                      await Oc(n, e),
                      (function (e) {
                        const t = w(e);
                        t.Va.forEach((e, n) => {
                          ya(t.remoteStore, n);
                        }),
                          t.ma.Rr(),
                          (t.Va = new Map()),
                          (t.Ra = new Xe(q.comparator));
                      })(n),
                      (n.ya = !1),
                      await Ba(n.remoteStore, !1);
                  }
                })(this.Da.syncEngine, e),
                  this.gcScheduler &&
                    (e && !this.gcScheduler.started
                      ? this.gcScheduler.start()
                      : e || this.gcScheduler.stop()),
                  this.indexBackfillerScheduler &&
                    (e && !this.indexBackfillerScheduler.started
                      ? this.indexBackfillerScheduler.start()
                      : e || this.indexBackfillerScheduler.stop());
              });
          }
          createSharedClientState(e) {
            const t = ia();
            if (!Ho.v(t))
              throw new _(
                b.UNIMPLEMENTED,
                "IndexedDB persistence is only available on platforms that support LocalStorage."
              );
            const n = So(
              e.databaseInfo.databaseId,
              e.databaseInfo.persistenceKey
            );
            return new Ho(t, e.asyncQueue, n, e.clientId, e.initialUser);
          }
        }
        class zc {
          async initialize(e, t) {
            this.localStore ||
              ((this.localStore = e.localStore),
              (this.sharedClientState = e.sharedClientState),
              (this.datastore = this.createDatastore(t)),
              (this.remoteStore = this.createRemoteStore(t)),
              (this.eventManager = this.createEventManager(t)),
              (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
              (this.sharedClientState.onlineStateHandler = (e) =>
                gc(this.syncEngine, e, 1)),
              (this.remoteStore.remoteSyncer.handleCredentialChange = Cc.bind(
                null,
                this.syncEngine
              )),
              await Ba(this.remoteStore, this.syncEngine.isPrimaryClient));
          }
          createEventManager(e) {
            return new Ha();
          }
          createDatastore(e) {
            const t = oa(e.databaseInfo.databaseId),
              n = (function (e) {
                return new ra(e);
              })(e.databaseInfo);
            return (function (e, t, n, r) {
              return new ha(e, t, n, r);
            })(e.authCredentials, e.appCheckCredentials, n, t);
          }
          createRemoteStore(e) {
            return (function (e, t, n, r, i) {
              return new fa(e, t, n, r, i);
            })(
              this.localStore,
              this.datastore,
              e.asyncQueue,
              (e) => gc(this.syncEngine, e, 0),
              Xo.v() ? new Xo() : new Jo()
            );
          }
          createSyncEngine(e, t) {
            return (function (e, t, n, r, i, s, o) {
              const a = new lc(e, t, n, r, i, s);
              return o && (a.ya = !0), a;
            })(
              this.localStore,
              this.remoteStore,
              this.eventManager,
              this.sharedClientState,
              e.initialUser,
              e.maxConcurrentLimboResolutions,
              t
            );
          }
          terminate() {
            return (async function (e) {
              const t = w(e);
              f("RemoteStore", "RemoteStore shutting down."),
                t.y_.add(5),
                await ga(t),
                t.S_.shutdown(),
                t.b_.set("Unknown");
            })(this.remoteStore);
          }
        }
        function Gc(e, t = 10240) {
          let n = 0;
          return {
            async read() {
              if (n < e.byteLength) {
                const r = { value: e.slice(n, n + t), done: !1 };
                return (n += t), r;
              }
              return { done: !0 };
            },
            async cancel() {},
            releaseLock() {},
            closed: Promise.resolve(),
          };
        }
        class Kc {
          constructor(e) {
            (this.observer = e), (this.muted = !1);
          }
          next(e) {
            this.observer.next && this.va(this.observer.next, e);
          }
          error(e) {
            this.observer.error
              ? this.va(this.observer.error, e)
              : p("Uncaught Error in snapshot listener:", e.toString());
          }
          Ca() {
            this.muted = !0;
          }
          va(e, t) {
            this.muted ||
              setTimeout(() => {
                this.muted || e(t);
              }, 0);
          }
        }
        class $c {
          constructor(e, t) {
            (this.Fa = e),
              (this.serializer = t),
              (this.metadata = new I()),
              (this.buffer = new Uint8Array()),
              (this.Ma = new TextDecoder("utf-8")),
              this.xa().then(
                (e) => {
                  e && e.z_()
                    ? this.metadata.resolve(e.G_.metadata)
                    : this.metadata.reject(
                        new Error(
                          `The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(
                            null == e ? void 0 : e.G_
                          )}`
                        )
                      );
                },
                (e) => this.metadata.reject(e)
              );
          }
          close() {
            return this.Fa.cancel();
          }
          async getMetadata() {
            return this.metadata.promise;
          }
          async ba() {
            return await this.getMetadata(), this.xa();
          }
          async xa() {
            const e = await this.Oa();
            if (null === e) return null;
            const t = this.Ma.decode(e),
              n = Number(t);
            isNaN(n) && this.Na(`length string (${t}) is not valid number`);
            const r = await this.Ba(n);
            return new tc(JSON.parse(r), e.length + n);
          }
          La() {
            return this.buffer.findIndex((e) => e === "{".charCodeAt(0));
          }
          async Oa() {
            for (; this.La() < 0 && !(await this.ka()); );
            if (0 === this.buffer.length) return null;
            const e = this.La();
            e < 0 &&
              this.Na(
                "Reached the end of bundle when a length string is expected."
              );
            const t = this.buffer.slice(0, e);
            return (this.buffer = this.buffer.slice(e)), t;
          }
          async Ba(e) {
            for (; this.buffer.length < e; )
              (await this.ka()) &&
                this.Na("Reached the end of bundle when more is expected.");
            const t = this.Ma.decode(this.buffer.slice(0, e));
            return (this.buffer = this.buffer.slice(e)), t;
          }
          Na(e) {
            throw (this.Fa.cancel(), new Error(`Invalid bundle format: ${e}`));
          }
          async ka() {
            const e = await this.Fa.read();
            if (!e.done) {
              const t = new Uint8Array(this.buffer.length + e.value.length);
              t.set(this.buffer),
                t.set(e.value, this.buffer.length),
                (this.buffer = t);
            }
            return e.done;
          }
        }
        class Qc {
          constructor(e) {
            (this.datastore = e),
              (this.readVersions = new Map()),
              (this.mutations = []),
              (this.committed = !1),
              (this.lastWriteError = null),
              (this.writtenDocs = new Set());
          }
          async lookup(e) {
            if ((this.ensureCommitNotCalled(), this.mutations.length > 0))
              throw new _(
                b.INVALID_ARGUMENT,
                "Firestore transactions require all reads to be executed before all writes."
              );
            const t = await (async function (e, t) {
              const n = w(e),
                r = mi(n.serializer) + "/documents",
                i = { documents: t.map((e) => di(n.serializer, e)) },
                s = await n.yo("BatchGetDocuments", r, i, t.length),
                o = new Map();
              s.forEach((e) => {
                const t = (function (e, t) {
                  return "found" in t
                    ? (function (e, t) {
                        v(!!t.found), t.found.name, t.found.updateTime;
                        const n = fi(e, t.found.name),
                          r = ui(t.found.updateTime),
                          i = t.found.createTime
                            ? ui(t.found.createTime)
                            : F.min(),
                          s = new Ft({ mapValue: { fields: t.found.fields } });
                        return Bt.newFoundDocument(n, r, i, s);
                      })(e, t)
                    : "missing" in t
                    ? (function (e, t) {
                        v(!!t.missing), v(!!t.readTime);
                        const n = fi(e, t.missing),
                          r = ui(t.readTime);
                        return Bt.newNoDocument(n, r);
                      })(e, t)
                    : y();
                })(n.serializer, e);
                o.set(t.key.toString(), t);
              });
              const a = [];
              return (
                t.forEach((e) => {
                  const t = o.get(e.toString());
                  v(!!t), a.push(t);
                }),
                a
              );
            })(this.datastore, e);
            return t.forEach((e) => this.recordVersion(e)), t;
          }
          set(e, t) {
            this.write(t.toMutation(e, this.precondition(e))),
              this.writtenDocs.add(e.toString());
          }
          update(e, t) {
            try {
              this.write(t.toMutation(e, this.preconditionForUpdate(e)));
            } catch (e) {
              this.lastWriteError = e;
            }
            this.writtenDocs.add(e.toString());
          }
          delete(e) {
            this.write(new Cr(e, this.precondition(e))),
              this.writtenDocs.add(e.toString());
          }
          async commit() {
            if ((this.ensureCommitNotCalled(), this.lastWriteError))
              throw this.lastWriteError;
            const e = this.readVersions;
            this.mutations.forEach((t) => {
              e.delete(t.key.toString());
            }),
              e.forEach((e, t) => {
                const n = q.fromPath(t);
                this.mutations.push(new Dr(n, this.precondition(n)));
              }),
              await (async function (e, t) {
                const n = w(e),
                  r = mi(n.serializer) + "/documents",
                  i = { writes: t.map((e) => bi(n.serializer, e)) };
                await n.Vo("Commit", r, i);
              })(this.datastore, this.mutations),
              (this.committed = !0);
          }
          recordVersion(e) {
            let t;
            if (e.isFoundDocument()) t = e.version;
            else {
              if (!e.isNoDocument()) throw y();
              t = F.min();
            }
            const n = this.readVersions.get(e.key.toString());
            if (n) {
              if (!t.isEqual(n))
                throw new _(
                  b.ABORTED,
                  "Document version changed between two reads."
                );
            } else this.readVersions.set(e.key.toString(), t);
          }
          precondition(e) {
            const t = this.readVersions.get(e.toString());
            return !this.writtenDocs.has(e.toString()) && t
              ? t.isEqual(F.min())
                ? pr.exists(!1)
                : pr.updateTime(t)
              : pr.none();
          }
          preconditionForUpdate(e) {
            const t = this.readVersions.get(e.toString());
            if (!this.writtenDocs.has(e.toString()) && t) {
              if (t.isEqual(F.min()))
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Can't update a document that doesn't exist."
                );
              return pr.updateTime(t);
            }
            return pr.exists(!0);
          }
          write(e) {
            this.ensureCommitNotCalled(), this.mutations.push(e);
          }
          ensureCommitNotCalled() {}
        }
        class Hc {
          constructor(e, t, n, r, i) {
            (this.asyncQueue = e),
              (this.datastore = t),
              (this.options = n),
              (this.updateFunction = r),
              (this.deferred = i),
              (this.qa = n.maxAttempts),
              (this.Ko = new aa(this.asyncQueue, "transaction_retry"));
          }
          run() {
            (this.qa -= 1), this.Qa();
          }
          Qa() {
            this.Ko.xo(async () => {
              const e = new Qc(this.datastore),
                t = this.Ka(e);
              t &&
                t
                  .then((t) => {
                    this.asyncQueue.enqueueAndForget(() =>
                      e
                        .commit()
                        .then(() => {
                          this.deferred.resolve(t);
                        })
                        .catch((e) => {
                          this.$a(e);
                        })
                    );
                  })
                  .catch((e) => {
                    this.$a(e);
                  });
            });
          }
          Ka(e) {
            try {
              const t = this.updateFunction(e);
              return !me(t) && t.catch && t.then
                ? t
                : (this.deferred.reject(
                    Error("Transaction callback must return a Promise")
                  ),
                  null);
            } catch (e) {
              return this.deferred.reject(e), null;
            }
          }
          $a(e) {
            this.qa > 0 && this.Ua(e)
              ? ((this.qa -= 1),
                this.asyncQueue.enqueueAndForget(
                  () => (this.Qa(), Promise.resolve())
                ))
              : this.deferred.reject(e);
          }
          Ua(e) {
            if ("FirebaseError" === e.name) {
              const t = e.code;
              return (
                "aborted" === t ||
                "failed-precondition" === t ||
                "already-exists" === t ||
                !Rr(t)
              );
            }
            return !1;
          }
        }
        class Wc {
          constructor(e, t, n, r) {
            (this.authCredentials = e),
              (this.appCheckCredentials = t),
              (this.asyncQueue = n),
              (this.databaseInfo = r),
              (this.user = u.UNAUTHENTICATED),
              (this.clientId = O.V()),
              (this.authCredentialListener = () => Promise.resolve()),
              (this.appCheckCredentialListener = () => Promise.resolve()),
              this.authCredentials.start(n, async (e) => {
                f("FirestoreClient", "Received user=", e.uid),
                  await this.authCredentialListener(e),
                  (this.user = e);
              }),
              this.appCheckCredentials.start(
                n,
                (e) => (
                  f("FirestoreClient", "Received new app check token=", e),
                  this.appCheckCredentialListener(e, this.user)
                )
              );
          }
          async getConfiguration() {
            return {
              asyncQueue: this.asyncQueue,
              databaseInfo: this.databaseInfo,
              clientId: this.clientId,
              authCredentials: this.authCredentials,
              appCheckCredentials: this.appCheckCredentials,
              initialUser: this.user,
              maxConcurrentLimboResolutions: 100,
            };
          }
          setCredentialChangeListener(e) {
            this.authCredentialListener = e;
          }
          setAppCheckTokenChangeListener(e) {
            this.appCheckCredentialListener = e;
          }
          verifyNotTerminated() {
            if (this.asyncQueue.isShuttingDown)
              throw new _(
                b.FAILED_PRECONDITION,
                "The client has already been terminated."
              );
          }
          terminate() {
            this.asyncQueue.enterRestrictedMode();
            const e = new I();
            return (
              this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
                try {
                  this._onlineComponents &&
                    (await this._onlineComponents.terminate()),
                    this._offlineComponents &&
                      (await this._offlineComponents.terminate()),
                    this.authCredentials.shutdown(),
                    this.appCheckCredentials.shutdown(),
                    e.resolve();
                } catch (t) {
                  const n = za(t, "Failed to shutdown persistence");
                  e.reject(n);
                }
              }),
              e.promise
            );
          }
        }
        async function Jc(e, t) {
          e.asyncQueue.verifyOperationInProgress(),
            f("FirestoreClient", "Initializing OfflineComponentProvider");
          const n = await e.getConfiguration();
          await t.initialize(n);
          let r = n.initialUser;
          e.setCredentialChangeListener(async (e) => {
            r.isEqual(e) || (await Ao(t.localStore, e), (r = e));
          }),
            t.persistence.setDatabaseDeletedListener(() => e.terminate()),
            (e._offlineComponents = t);
        }
        async function Xc(e, t) {
          e.asyncQueue.verifyOperationInProgress();
          const n = await Zc(e);
          f("FirestoreClient", "Initializing OnlineComponentProvider");
          const r = await e.getConfiguration();
          await t.initialize(n, r),
            e.setCredentialChangeListener((e) => Va(t.remoteStore, e)),
            e.setAppCheckTokenChangeListener((e, n) => Va(t.remoteStore, n)),
            (e._onlineComponents = t);
        }
        function Yc(e) {
          return "FirebaseError" === e.name
            ? e.code === b.FAILED_PRECONDITION || e.code === b.UNIMPLEMENTED
            : !(
                "undefined" != typeof DOMException && e instanceof DOMException
              ) ||
                22 === e.code ||
                20 === e.code ||
                11 === e.code;
        }
        async function Zc(e) {
          if (!e._offlineComponents)
            if (e._uninitializedComponentsProvider) {
              f(
                "FirestoreClient",
                "Using user provided OfflineComponentProvider"
              );
              try {
                await Jc(e, e._uninitializedComponentsProvider._offline);
              } catch (t) {
                const n = t;
                if (!Yc(n)) throw n;
                g(
                  "Error using user provided cache. Falling back to memory cache: " +
                    n
                ),
                  await Jc(e, new Bc());
              }
            } else
              f("FirestoreClient", "Using default OfflineComponentProvider"),
                await Jc(e, new Bc());
          return e._offlineComponents;
        }
        async function eu(e) {
          return (
            e._onlineComponents ||
              (e._uninitializedComponentsProvider
                ? (f(
                    "FirestoreClient",
                    "Using user provided OnlineComponentProvider"
                  ),
                  await Xc(e, e._uninitializedComponentsProvider._online))
                : (f(
                    "FirestoreClient",
                    "Using default OnlineComponentProvider"
                  ),
                  await Xc(e, new zc()))),
            e._onlineComponents
          );
        }
        function tu(e) {
          return Zc(e).then((e) => e.persistence);
        }
        function nu(e) {
          return Zc(e).then((e) => e.localStore);
        }
        function ru(e) {
          return eu(e).then((e) => e.remoteStore);
        }
        function iu(e) {
          return eu(e).then((e) => e.syncEngine);
        }
        function su(e) {
          return eu(e).then((e) => e.datastore);
        }
        async function ou(e) {
          const t = await eu(e),
            n = t.eventManager;
          return (
            (n.onListen = hc.bind(null, t.syncEngine)),
            (n.onUnlisten = fc.bind(null, t.syncEngine)),
            n
          );
        }
        function au(e, t, n = {}) {
          const r = new I();
          return (
            e.asyncQueue.enqueueAndForget(async () =>
              (function (e, t, n, r, i) {
                const s = new Kc({
                    next: (s) => {
                      t.enqueueAndForget(() => Ja(e, o));
                      const a = s.docs.has(n);
                      !a && s.fromCache
                        ? i.reject(
                            new _(
                              b.UNAVAILABLE,
                              "Failed to get document because the client is offline."
                            )
                          )
                        : a && s.fromCache && r && "server" === r.source
                        ? i.reject(
                            new _(
                              b.UNAVAILABLE,
                              'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                            )
                          )
                        : i.resolve(s);
                    },
                    error: (e) => i.reject(e),
                  }),
                  o = new ec(_n(n.path), s, {
                    includeMetadataChanges: !0,
                    W_: !0,
                  });
                return Wa(e, o);
              })(await ou(e), e.asyncQueue, t, n, r)
            ),
            r.promise
          );
        }
        function cu(e, t, n = {}) {
          const r = new I();
          return (
            e.asyncQueue.enqueueAndForget(async () =>
              (function (e, t, n, r, i) {
                const s = new Kc({
                    next: (n) => {
                      t.enqueueAndForget(() => Ja(e, o)),
                        n.fromCache && "server" === r.source
                          ? i.reject(
                              new _(
                                b.UNAVAILABLE,
                                'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                              )
                            )
                          : i.resolve(n);
                    },
                    error: (e) => i.reject(e),
                  }),
                  o = new ec(n, s, { includeMetadataChanges: !0, W_: !0 });
                return Wa(e, o);
              })(await ou(e), e.asyncQueue, t, n, r)
            ),
            r.promise
          );
        }
        function uu(e) {
          const t = {};
          return (
            void 0 !== e.timeoutSeconds &&
              (t.timeoutSeconds = e.timeoutSeconds),
            t
          );
        }
        const lu = new Map();
        function hu(e, t, n) {
          if (!n)
            throw new _(
              b.INVALID_ARGUMENT,
              `Function ${e}() cannot be called with an empty ${t}.`
            );
        }
        function du(e, t, n, r) {
          if (!0 === t && !0 === r)
            throw new _(
              b.INVALID_ARGUMENT,
              `${e} and ${n} cannot be used together.`
            );
        }
        function fu(e) {
          if (!q.isDocumentKey(e))
            throw new _(
              b.INVALID_ARGUMENT,
              `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`
            );
        }
        function pu(e) {
          if (q.isDocumentKey(e))
            throw new _(
              b.INVALID_ARGUMENT,
              `Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`
            );
        }
        function gu(e) {
          if (void 0 === e) return "undefined";
          if (null === e) return "null";
          if ("string" == typeof e)
            return (
              e.length > 20 && (e = `${e.substring(0, 20)}...`),
              JSON.stringify(e)
            );
          if ("number" == typeof e || "boolean" == typeof e) return "" + e;
          if ("object" == typeof e) {
            if (e instanceof Array) return "an array";
            {
              const t = (function (e) {
                return e.constructor ? e.constructor.name : null;
              })(e);
              return t ? `a custom ${t} object` : "an object";
            }
          }
          return "function" == typeof e ? "a function" : y();
        }
        function mu(e, t) {
          if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
            if (t.name === e.constructor.name)
              throw new _(
                b.INVALID_ARGUMENT,
                "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
              );
            {
              const n = gu(e);
              throw new _(
                b.INVALID_ARGUMENT,
                `Expected type '${t.name}', but it was: ${n}`
              );
            }
          }
          return e;
        }
        function yu(e, t) {
          if (t <= 0)
            throw new _(
              b.INVALID_ARGUMENT,
              `Function ${e}() requires a positive number, but it was: ${t}.`
            );
        }
        class vu {
          constructor(e) {
            var t, n;
            if (void 0 === e.host) {
              if (void 0 !== e.ssl)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Can't provide ssl option if host option is not set"
                );
              (this.host = "firestore.googleapis.com"), (this.ssl = !0);
            } else
              (this.host = e.host),
                (this.ssl = null === (t = e.ssl) || void 0 === t || t);
            if (
              ((this.credentials = e.credentials),
              (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
              (this.localCache = e.localCache),
              void 0 === e.cacheSizeBytes)
            )
              this.cacheSizeBytes = 41943040;
            else {
              if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "cacheSizeBytes must be at least 1048576"
                );
              this.cacheSizeBytes = e.cacheSizeBytes;
            }
            du(
              "experimentalForceLongPolling",
              e.experimentalForceLongPolling,
              "experimentalAutoDetectLongPolling",
              e.experimentalAutoDetectLongPolling
            ),
              (this.experimentalForceLongPolling =
                !!e.experimentalForceLongPolling),
              this.experimentalForceLongPolling
                ? (this.experimentalAutoDetectLongPolling = !1)
                : void 0 === e.experimentalAutoDetectLongPolling
                ? (this.experimentalAutoDetectLongPolling = !0)
                : (this.experimentalAutoDetectLongPolling =
                    !!e.experimentalAutoDetectLongPolling),
              (this.experimentalLongPollingOptions = uu(
                null !== (n = e.experimentalLongPollingOptions) && void 0 !== n
                  ? n
                  : {}
              )),
              (function (e) {
                if (void 0 !== e.timeoutSeconds) {
                  if (isNaN(e.timeoutSeconds))
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`
                    );
                  if (e.timeoutSeconds < 5)
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`
                    );
                  if (e.timeoutSeconds > 30)
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`
                    );
                }
              })(this.experimentalLongPollingOptions),
              (this.useFetchStreams = !!e.useFetchStreams);
          }
          isEqual(e) {
            return (
              this.host === e.host &&
              this.ssl === e.ssl &&
              this.credentials === e.credentials &&
              this.cacheSizeBytes === e.cacheSizeBytes &&
              this.experimentalForceLongPolling ===
                e.experimentalForceLongPolling &&
              this.experimentalAutoDetectLongPolling ===
                e.experimentalAutoDetectLongPolling &&
              (function (e, t) {
                return e.timeoutSeconds === t.timeoutSeconds;
              })(
                this.experimentalLongPollingOptions,
                e.experimentalLongPollingOptions
              ) &&
              this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
              this.useFetchStreams === e.useFetchStreams
            );
          }
        }
        class wu {
          constructor(e, t, n, r) {
            (this._authCredentials = e),
              (this._appCheckCredentials = t),
              (this._databaseId = n),
              (this._app = r),
              (this.type = "firestore-lite"),
              (this._persistenceKey = "(lite)"),
              (this._settings = new vu({})),
              (this._settingsFrozen = !1);
          }
          get app() {
            if (!this._app)
              throw new _(
                b.FAILED_PRECONDITION,
                "Firestore was not initialized using the Firebase SDK. 'app' is not available"
              );
            return this._app;
          }
          get _initialized() {
            return this._settingsFrozen;
          }
          get _terminated() {
            return void 0 !== this._terminateTask;
          }
          _setSettings(e) {
            if (this._settingsFrozen)
              throw new _(
                b.FAILED_PRECONDITION,
                "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
              );
            (this._settings = new vu(e)),
              void 0 !== e.credentials &&
                (this._authCredentials = (function (e) {
                  if (!e) return new S();
                  switch (e.type) {
                    case "firstParty":
                      return new D(
                        e.sessionIndex || "0",
                        e.iamToken || null,
                        e.authTokenFactory || null
                      );
                    case "provider":
                      return e.client;
                    default:
                      throw new _(
                        b.INVALID_ARGUMENT,
                        "makeAuthCredentialsProvider failed due to invalid credential type"
                      );
                  }
                })(e.credentials));
          }
          _getSettings() {
            return this._settings;
          }
          _freezeSettings() {
            return (this._settingsFrozen = !0), this._settings;
          }
          _delete() {
            return (
              this._terminateTask || (this._terminateTask = this._terminate()),
              this._terminateTask
            );
          }
          toJSON() {
            return {
              app: this._app,
              databaseId: this._databaseId,
              settings: this._settings,
            };
          }
          _terminate() {
            return (
              (function (e) {
                const t = lu.get(e);
                t &&
                  (f("ComponentProvider", "Removing Datastore"),
                  lu.delete(e),
                  t.terminate());
              })(this),
              Promise.resolve()
            );
          }
        }
        function bu(e, t, n, r = {}) {
          var i;
          const s = (e = mu(e, wu))._getSettings(),
            a = `${t}:${n}`;
          if (
            ("firestore.googleapis.com" !== s.host &&
              s.host !== a &&
              g(
                "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
              ),
            e._setSettings(
              Object.assign(Object.assign({}, s), { host: a, ssl: !1 })
            ),
            r.mockUserToken)
          ) {
            let t, n;
            if ("string" == typeof r.mockUserToken)
              (t = r.mockUserToken), (n = u.MOCK_USER);
            else {
              t = o.createMockUserToken(
                r.mockUserToken,
                null === (i = e._app) || void 0 === i
                  ? void 0
                  : i.options.projectId
              );
              const s = r.mockUserToken.sub || r.mockUserToken.user_id;
              if (!s)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "mockUserToken must contain 'sub' or 'user_id' field!"
                );
              n = new u(s);
            }
            e._authCredentials = new T(new E(t, n));
          }
        }
        class _u {
          constructor(e, t, n) {
            (this.converter = t),
              (this._query = n),
              (this.type = "query"),
              (this.firestore = e);
          }
          withConverter(e) {
            return new _u(this.firestore, e, this._query);
          }
        }
        class Iu {
          constructor(e, t, n) {
            (this.converter = t),
              (this._key = n),
              (this.type = "document"),
              (this.firestore = e);
          }
          get _path() {
            return this._key.path;
          }
          get id() {
            return this._key.path.lastSegment();
          }
          get path() {
            return this._key.path.canonicalString();
          }
          get parent() {
            return new Eu(
              this.firestore,
              this.converter,
              this._key.path.popLast()
            );
          }
          withConverter(e) {
            return new Iu(this.firestore, e, this._key);
          }
        }
        class Eu extends _u {
          constructor(e, t, n) {
            super(e, t, _n(n)), (this._path = n), (this.type = "collection");
          }
          get id() {
            return this._query.path.lastSegment();
          }
          get path() {
            return this._query.path.canonicalString();
          }
          get parent() {
            const e = this._path.popLast();
            return e.isEmpty() ? null : new Iu(this.firestore, null, new q(e));
          }
          withConverter(e) {
            return new Eu(this.firestore, e, this._path);
          }
        }
        function Su(e, t, ...n) {
          if (
            ((e = o.getModularInstance(e)),
            1 === arguments.length && (t = O.V()),
            hu("doc", "path", t),
            e instanceof wu)
          ) {
            const r = B.fromString(t, ...n);
            return fu(r), new Iu(e, null, new q(r));
          }
          {
            if (!(e instanceof Iu || e instanceof Eu))
              throw new _(
                b.INVALID_ARGUMENT,
                "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
              );
            const r = e._path.child(B.fromString(t, ...n));
            return (
              fu(r),
              new Iu(
                e.firestore,
                e instanceof Eu ? e.converter : null,
                new q(r)
              )
            );
          }
        }
        function Tu(e, t) {
          return (
            (e = o.getModularInstance(e)),
            (t = o.getModularInstance(t)),
            e instanceof _u &&
              t instanceof _u &&
              e.firestore === t.firestore &&
              kn(e._query, t._query) &&
              e.converter === t.converter
          );
        }
        class xu {
          constructor() {
            (this.Wa = Promise.resolve()),
              (this.Ga = []),
              (this.za = !1),
              (this.ja = []),
              (this.Ha = null),
              (this.Ja = !1),
              (this.Ya = !1),
              (this.Za = []),
              (this.Ko = new aa(this, "async_queue_retry")),
              (this.Xa = () => {
                const e = sa();
                e &&
                  f(
                    "AsyncQueue",
                    "Visibility state changed to " + e.visibilityState
                  ),
                  this.Ko.No();
              });
            const e = sa();
            e &&
              "function" == typeof e.addEventListener &&
              e.addEventListener("visibilitychange", this.Xa);
          }
          get isShuttingDown() {
            return this.za;
          }
          enqueueAndForget(e) {
            this.enqueue(e);
          }
          enqueueAndForgetEvenWhileRestricted(e) {
            this.eu(), this.tu(e);
          }
          enterRestrictedMode(e) {
            if (!this.za) {
              (this.za = !0), (this.Ya = e || !1);
              const t = sa();
              t &&
                "function" == typeof t.removeEventListener &&
                t.removeEventListener("visibilitychange", this.Xa);
            }
          }
          enqueue(e) {
            if ((this.eu(), this.za)) return new Promise(() => {});
            const t = new I();
            return this.tu(() =>
              this.za && this.Ya
                ? Promise.resolve()
                : (e().then(t.resolve, t.reject), t.promise)
            ).then(() => t.promise);
          }
          enqueueRetryable(e) {
            this.enqueueAndForget(() => (this.Ga.push(e), this.nu()));
          }
          async nu() {
            if (0 !== this.Ga.length) {
              try {
                await this.Ga[0](), this.Ga.shift(), this.Ko.reset();
              } catch (e) {
                if (!ce(e)) throw e;
                f("AsyncQueue", "Operation failed with retryable error: " + e);
              }
              this.Ga.length > 0 && this.Ko.xo(() => this.nu());
            }
          }
          tu(e) {
            const t = this.Wa.then(
              () => (
                (this.Ja = !0),
                e()
                  .catch((e) => {
                    (this.Ha = e), (this.Ja = !1);
                    const t = (function (e) {
                      let t = e.message || "";
                      return (
                        e.stack &&
                          (t = e.stack.includes(e.message)
                            ? e.stack
                            : e.message + "\n" + e.stack),
                        t
                      );
                    })(e);
                    throw (p("INTERNAL UNHANDLED ERROR: ", t), e);
                  })
                  .then((e) => ((this.Ja = !1), e))
              )
            );
            return (this.Wa = t), t;
          }
          enqueueAfterDelay(e, t, n) {
            this.eu(), this.Za.indexOf(e) > -1 && (t = 0);
            const r = qa.createAndSchedule(this, e, t, n, (e) => this.ru(e));
            return this.ja.push(r), r;
          }
          eu() {
            this.Ha && y();
          }
          verifyOperationInProgress() {}
          async iu() {
            let e;
            do {
              (e = this.Wa), await e;
            } while (e !== this.Wa);
          }
          su(e) {
            for (const t of this.ja) if (t.timerId === e) return !0;
            return !1;
          }
          ou(e) {
            return this.iu().then(() => {
              this.ja.sort((e, t) => e.targetTimeMs - t.targetTimeMs);
              for (const t of this.ja)
                if ((t.skipDelay(), "all" !== e && t.timerId === e)) break;
              return this.iu();
            });
          }
          _u(e) {
            this.Za.push(e);
          }
          ru(e) {
            const t = this.ja.indexOf(e);
            this.ja.splice(t, 1);
          }
        }
        function Cu(e) {
          return (function (e, t) {
            if ("object" != typeof e || null === e) return !1;
            const n = e;
            for (const e of ["next", "error", "complete"])
              if (e in n && "function" == typeof n[e]) return !0;
            return !1;
          })(e);
        }
        class Du {
          constructor() {
            (this._progressObserver = {}),
              (this._taskCompletionResolver = new I()),
              (this._lastProgress = {
                taskState: "Running",
                totalBytes: 0,
                totalDocuments: 0,
                bytesLoaded: 0,
                documentsLoaded: 0,
              });
          }
          onProgress(e, t, n) {
            this._progressObserver = { next: e, error: t, complete: n };
          }
          catch(e) {
            return this._taskCompletionResolver.promise.catch(e);
          }
          then(e, t) {
            return this._taskCompletionResolver.promise.then(e, t);
          }
          _completeWith(e) {
            this._updateProgress(e),
              this._progressObserver.complete &&
                this._progressObserver.complete(),
              this._taskCompletionResolver.resolve(e);
          }
          _failWith(e) {
            (this._lastProgress.taskState = "Error"),
              this._progressObserver.next &&
                this._progressObserver.next(this._lastProgress),
              this._progressObserver.error && this._progressObserver.error(e),
              this._taskCompletionResolver.reject(e);
          }
          _updateProgress(e) {
            (this._lastProgress = e),
              this._progressObserver.next && this._progressObserver.next(e);
          }
        }
        class Au extends wu {
          constructor(e, t, n, r) {
            super(e, t, n, r),
              (this.type = "firestore"),
              (this._queue = new xu()),
              (this._persistenceKey =
                (null == r ? void 0 : r.name) || "[DEFAULT]");
          }
          _terminate() {
            return (
              this._firestoreClient || Nu(this),
              this._firestoreClient.terminate()
            );
          }
        }
        function ku(e) {
          return (
            e._firestoreClient || Nu(e),
            e._firestoreClient.verifyNotTerminated(),
            e._firestoreClient
          );
        }
        function Nu(e) {
          var t, n, r;
          const i = e._freezeSettings(),
            s = (function (e, t, n, r) {
              return new ft(
                e,
                t,
                n,
                r.host,
                r.ssl,
                r.experimentalForceLongPolling,
                r.experimentalAutoDetectLongPolling,
                uu(r.experimentalLongPollingOptions),
                r.useFetchStreams
              );
            })(
              e._databaseId,
              (null === (t = e._app) || void 0 === t
                ? void 0
                : t.options.appId) || "",
              e._persistenceKey,
              i
            );
          (e._firestoreClient = new Wc(
            e._authCredentials,
            e._appCheckCredentials,
            e._queue,
            s
          )),
            (null === (n = i.localCache) || void 0 === n
              ? void 0
              : n._offlineComponentProvider) &&
              (null === (r = i.localCache) || void 0 === r
                ? void 0
                : r._onlineComponentProvider) &&
              (e._firestoreClient._uninitializedComponentsProvider = {
                _offlineKind: i.localCache.kind,
                _offline: i.localCache._offlineComponentProvider,
                _online: i.localCache._onlineComponentProvider,
              });
        }
        function Ou(e, t, n) {
          const r = new I();
          return e.asyncQueue
            .enqueue(async () => {
              try {
                await Jc(e, n), await Xc(e, t), r.resolve();
              } catch (e) {
                const t = e;
                if (!Yc(t)) throw t;
                g(
                  "Error enabling indexeddb cache. Falling back to memory cache: " +
                    t
                ),
                  r.reject(t);
              }
            })
            .then(() => r.promise);
        }
        function Lu(e) {
          if (e._initialized || e._terminated)
            throw new _(
              b.FAILED_PRECONDITION,
              "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object."
            );
        }
        class Pu {
          constructor(e = "count", t) {
            (this._aggregateType = e),
              (this._internalFieldPath = t),
              (this.type = "AggregateField");
          }
        }
        class Mu {
          constructor(e, t, n) {
            (this._userDataWriter = t),
              (this._data = n),
              (this.type = "AggregateQuerySnapshot"),
              (this.query = e);
          }
          data() {
            return this._userDataWriter.convertObjectMap(this._data);
          }
        }
        class Ru {
          constructor(e) {
            this._byteString = e;
          }
          static fromBase64String(e) {
            try {
              return new Ru(st.fromBase64String(e));
            } catch (e) {
              throw new _(
                b.INVALID_ARGUMENT,
                "Failed to construct data from Base64 string: " + e
              );
            }
          }
          static fromUint8Array(e) {
            return new Ru(st.fromUint8Array(e));
          }
          toBase64() {
            return this._byteString.toBase64();
          }
          toUint8Array() {
            return this._byteString.toUint8Array();
          }
          toString() {
            return "Bytes(base64: " + this.toBase64() + ")";
          }
          isEqual(e) {
            return this._byteString.isEqual(e._byteString);
          }
        }
        class Fu {
          constructor(...e) {
            for (let t = 0; t < e.length; ++t)
              if (0 === e[t].length)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Invalid field name at argument $(i + 1). Field names must not be empty."
                );
            this._internalPath = new j(e);
          }
          isEqual(e) {
            return this._internalPath.isEqual(e._internalPath);
          }
        }
        class Vu {
          constructor(e) {
            this._methodName = e;
          }
        }
        class Bu {
          constructor(e, t) {
            if (!isFinite(e) || e < -90 || e > 90)
              throw new _(
                b.INVALID_ARGUMENT,
                "Latitude must be a number between -90 and 90, but was: " + e
              );
            if (!isFinite(t) || t < -180 || t > 180)
              throw new _(
                b.INVALID_ARGUMENT,
                "Longitude must be a number between -180 and 180, but was: " + t
              );
            (this._lat = e), (this._long = t);
          }
          get latitude() {
            return this._lat;
          }
          get longitude() {
            return this._long;
          }
          isEqual(e) {
            return this._lat === e._lat && this._long === e._long;
          }
          toJSON() {
            return { latitude: this._lat, longitude: this._long };
          }
          _compareTo(e) {
            return L(this._lat, e._lat) || L(this._long, e._long);
          }
        }
        const Uu = /^__.*__$/;
        class ju {
          constructor(e, t, n) {
            (this.data = e), (this.fieldMask = t), (this.fieldTransforms = n);
          }
          toMutation(e, t) {
            return null !== this.fieldMask
              ? new Er(e, this.data, this.fieldMask, t, this.fieldTransforms)
              : new Ir(e, this.data, t, this.fieldTransforms);
          }
        }
        class qu {
          constructor(e, t, n) {
            (this.data = e), (this.fieldMask = t), (this.fieldTransforms = n);
          }
          toMutation(e, t) {
            return new Er(
              e,
              this.data,
              this.fieldMask,
              t,
              this.fieldTransforms
            );
          }
        }
        function zu(e) {
          switch (e) {
            case 0:
            case 2:
            case 1:
              return !0;
            case 3:
            case 4:
              return !1;
            default:
              throw y();
          }
        }
        class Gu {
          constructor(e, t, n, r, i, s) {
            (this.settings = e),
              (this.databaseId = t),
              (this.serializer = n),
              (this.ignoreUndefinedProperties = r),
              void 0 === i && this.au(),
              (this.fieldTransforms = i || []),
              (this.fieldMask = s || []);
          }
          get path() {
            return this.settings.path;
          }
          get uu() {
            return this.settings.uu;
          }
          cu(e) {
            return new Gu(
              Object.assign(Object.assign({}, this.settings), e),
              this.databaseId,
              this.serializer,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.fieldMask
            );
          }
          lu(e) {
            var t;
            const n =
                null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
              r = this.cu({ path: n, hu: !1 });
            return r.Pu(e), r;
          }
          Iu(e) {
            var t;
            const n =
                null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
              r = this.cu({ path: n, hu: !1 });
            return r.au(), r;
          }
          Tu(e) {
            return this.cu({ path: void 0, hu: !0 });
          }
          Eu(e) {
            return ll(
              e,
              this.settings.methodName,
              this.settings.du || !1,
              this.path,
              this.settings.Au
            );
          }
          contains(e) {
            return (
              void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) ||
              void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field))
            );
          }
          au() {
            if (this.path)
              for (let e = 0; e < this.path.length; e++)
                this.Pu(this.path.get(e));
          }
          Pu(e) {
            if (0 === e.length)
              throw this.Eu("Document fields must not be empty");
            if (zu(this.uu) && Uu.test(e))
              throw this.Eu('Document fields cannot begin and end with "__"');
          }
        }
        class Ku {
          constructor(e, t, n) {
            (this.databaseId = e),
              (this.ignoreUndefinedProperties = t),
              (this.serializer = n || oa(e));
          }
          Ru(e, t, n, r = !1) {
            return new Gu(
              {
                uu: e,
                methodName: t,
                Au: n,
                path: j.emptyPath(),
                hu: !1,
                du: r,
              },
              this.databaseId,
              this.serializer,
              this.ignoreUndefinedProperties
            );
          }
        }
        function $u(e) {
          const t = e._freezeSettings(),
            n = oa(e._databaseId);
          return new Ku(e._databaseId, !!t.ignoreUndefinedProperties, n);
        }
        function Qu(e, t, n, r, i, s = {}) {
          const o = e.Ru(s.merge || s.mergeFields ? 2 : 0, t, n, i);
          ol("Data must be an object, but it was:", o, r);
          const a = il(r, o);
          let c, u;
          if (s.merge) (c = new rt(o.fieldMask)), (u = o.fieldTransforms);
          else if (s.mergeFields) {
            const e = [];
            for (const r of s.mergeFields) {
              const i = al(t, r, n);
              if (!o.contains(i))
                throw new _(
                  b.INVALID_ARGUMENT,
                  `Field '${i}' is specified in your field mask but missing from your input data.`
                );
              hl(e, i) || e.push(i);
            }
            (c = new rt(e)),
              (u = o.fieldTransforms.filter((e) => c.covers(e.field)));
          } else (c = null), (u = o.fieldTransforms);
          return new ju(new Ft(a), c, u);
        }
        class Hu extends Vu {
          _toFieldTransform(e) {
            if (2 !== e.uu)
              throw 1 === e.uu
                ? e.Eu(
                    `${this._methodName}() can only appear at the top level of your update data`
                  )
                : e.Eu(
                    `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
                  );
            return e.fieldMask.push(e.path), null;
          }
          isEqual(e) {
            return e instanceof Hu;
          }
        }
        function Wu(e, t, n) {
          return new Gu(
            { uu: 3, Au: t.settings.Au, methodName: e._methodName, hu: n },
            t.databaseId,
            t.serializer,
            t.ignoreUndefinedProperties
          );
        }
        class Ju extends Vu {
          _toFieldTransform(e) {
            return new dr(e.path, new ir());
          }
          isEqual(e) {
            return e instanceof Ju;
          }
        }
        class Xu extends Vu {
          constructor(e, t) {
            super(e), (this.Vu = t);
          }
          _toFieldTransform(e) {
            const t = Wu(this, e, !0),
              n = this.Vu.map((e) => rl(e, t)),
              r = new sr(n);
            return new dr(e.path, r);
          }
          isEqual(e) {
            return this === e;
          }
        }
        class Yu extends Vu {
          constructor(e, t) {
            super(e), (this.Vu = t);
          }
          _toFieldTransform(e) {
            const t = Wu(this, e, !0),
              n = this.Vu.map((e) => rl(e, t)),
              r = new ar(n);
            return new dr(e.path, r);
          }
          isEqual(e) {
            return this === e;
          }
        }
        class Zu extends Vu {
          constructor(e, t) {
            super(e), (this.mu = t);
          }
          _toFieldTransform(e) {
            const t = new ur(e.serializer, Zn(e.serializer, this.mu));
            return new dr(e.path, t);
          }
          isEqual(e) {
            return this === e;
          }
        }
        function el(e, t, n, r) {
          const i = e.Ru(1, t, n);
          ol("Data must be an object, but it was:", i, r);
          const s = [],
            a = Ft.empty();
          We(r, (e, r) => {
            const c = ul(t, e, n);
            r = o.getModularInstance(r);
            const u = i.Iu(c);
            if (r instanceof Hu) s.push(c);
            else {
              const e = rl(r, u);
              null != e && (s.push(c), a.set(c, e));
            }
          });
          const c = new rt(s);
          return new qu(a, c, i.fieldTransforms);
        }
        function tl(e, t, n, r, i, s) {
          const a = e.Ru(1, t, n),
            c = [al(t, r, n)],
            u = [i];
          if (s.length % 2 != 0)
            throw new _(
              b.INVALID_ARGUMENT,
              `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`
            );
          for (let e = 0; e < s.length; e += 2)
            c.push(al(t, s[e])), u.push(s[e + 1]);
          const l = [],
            h = Ft.empty();
          for (let e = c.length - 1; e >= 0; --e)
            if (!hl(l, c[e])) {
              const t = c[e];
              let n = u[e];
              n = o.getModularInstance(n);
              const r = a.Iu(t);
              if (n instanceof Hu) l.push(t);
              else {
                const e = rl(n, r);
                null != e && (l.push(t), h.set(t, e));
              }
            }
          const d = new rt(l);
          return new qu(h, d, a.fieldTransforms);
        }
        function nl(e, t, n, r = !1) {
          return rl(n, e.Ru(r ? 4 : 3, t));
        }
        function rl(e, t) {
          if (sl((e = o.getModularInstance(e))))
            return ol("Unsupported field value:", t, e), il(e, t);
          if (e instanceof Vu)
            return (
              (function (e, t) {
                if (!zu(t.uu))
                  throw t.Eu(
                    `${e._methodName}() can only be used with update() and set()`
                  );
                if (!t.path)
                  throw t.Eu(
                    `${e._methodName}() is not currently supported inside arrays`
                  );
                const n = e._toFieldTransform(t);
                n && t.fieldTransforms.push(n);
              })(e, t),
              null
            );
          if (void 0 === e && t.ignoreUndefinedProperties) return null;
          if ((t.path && t.fieldMask.push(t.path), e instanceof Array)) {
            if (t.settings.hu && 4 !== t.uu)
              throw t.Eu("Nested arrays are not supported");
            return (function (e, t) {
              const n = [];
              let r = 0;
              for (const i of e) {
                let e = rl(i, t.Tu(r));
                null == e && (e = { nullValue: "NULL_VALUE" }), n.push(e), r++;
              }
              return { arrayValue: { values: n } };
            })(e, t);
          }
          return (function (e, t) {
            if (null === (e = o.getModularInstance(e)))
              return { nullValue: "NULL_VALUE" };
            if ("number" == typeof e) return Zn(t.serializer, e);
            if ("boolean" == typeof e) return { booleanValue: e };
            if ("string" == typeof e) return { stringValue: e };
            if (e instanceof Date) {
              const n = R.fromDate(e);
              return { timestampValue: oi(t.serializer, n) };
            }
            if (e instanceof R) {
              const n = new R(e.seconds, 1e3 * Math.floor(e.nanoseconds / 1e3));
              return { timestampValue: oi(t.serializer, n) };
            }
            if (e instanceof Bu)
              return {
                geoPointValue: { latitude: e.latitude, longitude: e.longitude },
              };
            if (e instanceof Ru)
              return { bytesValue: ai(t.serializer, e._byteString) };
            if (e instanceof Iu) {
              const n = t.databaseId,
                r = e.firestore._databaseId;
              if (!r.isEqual(n))
                throw t.Eu(
                  `Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`
                );
              return {
                referenceValue: li(
                  e.firestore._databaseId || t.databaseId,
                  e._key.path
                ),
              };
            }
            throw t.Eu(`Unsupported field value: ${gu(e)}`);
          })(e, t);
        }
        function il(e, t) {
          const n = {};
          return (
            Je(e)
              ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
              : We(e, (e, r) => {
                  const i = rl(r, t.lu(e));
                  null != i && (n[e] = i);
                }),
            { mapValue: { fields: n } }
          );
        }
        function sl(e) {
          return !(
            "object" != typeof e ||
            null === e ||
            e instanceof Array ||
            e instanceof Date ||
            e instanceof R ||
            e instanceof Bu ||
            e instanceof Ru ||
            e instanceof Iu ||
            e instanceof Vu
          );
        }
        function ol(e, t, n) {
          if (
            !sl(n) ||
            !(function (e) {
              return (
                "object" == typeof e &&
                null !== e &&
                (Object.getPrototypeOf(e) === Object.prototype ||
                  null === Object.getPrototypeOf(e))
              );
            })(n)
          ) {
            const r = gu(n);
            throw "an object" === r
              ? t.Eu(e + " a custom object")
              : t.Eu(e + " " + r);
          }
        }
        function al(e, t, n) {
          if ((t = o.getModularInstance(t)) instanceof Fu)
            return t._internalPath;
          if ("string" == typeof t) return ul(e, t);
          throw ll(
            "Field path arguments must be of type string or ",
            e,
            !1,
            void 0,
            n
          );
        }
        const cl = new RegExp("[~\\*/\\[\\]]");
        function ul(e, t, n) {
          if (t.search(cl) >= 0)
            throw ll(
              `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
              e,
              !1,
              void 0,
              n
            );
          try {
            return new Fu(...t.split("."))._internalPath;
          } catch (r) {
            throw ll(
              `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
              e,
              !1,
              void 0,
              n
            );
          }
        }
        function ll(e, t, n, r, i) {
          const s = r && !r.isEmpty(),
            o = void 0 !== i;
          let a = `Function ${t}() called with invalid data`;
          n && (a += " (via `toFirestore()`)"), (a += ". ");
          let c = "";
          return (
            (s || o) &&
              ((c += " (found"),
              s && (c += ` in field ${r}`),
              o && (c += ` in document ${i}`),
              (c += ")")),
            new _(b.INVALID_ARGUMENT, a + e + c)
          );
        }
        function hl(e, t) {
          return e.some((e) => e.isEqual(t));
        }
        class dl {
          constructor(e, t, n, r, i) {
            (this._firestore = e),
              (this._userDataWriter = t),
              (this._key = n),
              (this._document = r),
              (this._converter = i);
          }
          get id() {
            return this._key.path.lastSegment();
          }
          get ref() {
            return new Iu(this._firestore, this._converter, this._key);
          }
          exists() {
            return null !== this._document;
          }
          data() {
            if (this._document) {
              if (this._converter) {
                const e = new fl(
                  this._firestore,
                  this._userDataWriter,
                  this._key,
                  this._document,
                  null
                );
                return this._converter.fromFirestore(e);
              }
              return this._userDataWriter.convertValue(
                this._document.data.value
              );
            }
          }
          get(e) {
            if (this._document) {
              const t = this._document.data.field(
                pl("DocumentSnapshot.get", e)
              );
              if (null !== t) return this._userDataWriter.convertValue(t);
            }
          }
        }
        class fl extends dl {
          data() {
            return super.data();
          }
        }
        function pl(e, t) {
          return "string" == typeof t
            ? ul(e, t)
            : t instanceof Fu
            ? t._internalPath
            : t._delegate._internalPath;
        }
        function gl(e) {
          if ("L" === e.limitType && 0 === e.explicitOrderBy.length)
            throw new _(
              b.UNIMPLEMENTED,
              "limitToLast() queries require specifying at least one orderBy() clause"
            );
        }
        class ml {}
        class yl extends ml {}
        class vl extends yl {
          constructor(e, t, n) {
            super(),
              (this._field = e),
              (this._op = t),
              (this._value = n),
              (this.type = "where");
          }
          static _create(e, t, n) {
            return new vl(e, t, n);
          }
          _apply(e) {
            const t = this._parse(e);
            return (
              Cl(e._query, t), new _u(e.firestore, e.converter, Dn(e._query, t))
            );
          }
          _parse(e) {
            const t = $u(e.firestore),
              n = (function (e, t, n, r, i, s, o) {
                let a;
                if (i.isKeyField()) {
                  if ("array-contains" === s || "array-contains-any" === s)
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `Invalid Query. You can't perform '${s}' queries on documentId().`
                    );
                  if ("in" === s || "not-in" === s) {
                    xl(o, s);
                    const t = [];
                    for (const n of o) t.push(Tl(r, e, n));
                    a = { arrayValue: { values: t } };
                  } else a = Tl(r, e, o);
                } else
                  ("in" !== s &&
                    "not-in" !== s &&
                    "array-contains-any" !== s) ||
                    xl(o, s),
                    (a = nl(n, "where", o, "in" === s || "not-in" === s));
                return $t.create(i, s, a);
              })(
                e._query,
                0,
                t,
                e.firestore._databaseId,
                this._field,
                this._op,
                this._value
              );
            return n;
          }
        }
        class wl extends ml {
          constructor(e, t) {
            super(), (this.type = e), (this._queryConstraints = t);
          }
          static _create(e, t) {
            return new wl(e, t);
          }
          _parse(e) {
            const t = this._queryConstraints
              .map((t) => t._parse(e))
              .filter((e) => e.getFilters().length > 0);
            return 1 === t.length ? t[0] : Qt.create(t, this._getOperator());
          }
          _apply(e) {
            const t = this._parse(e);
            return 0 === t.getFilters().length
              ? e
              : ((function (e, t) {
                  let n = e;
                  const r = t.getFlattenedFilters();
                  for (const e of r) Cl(n, e), (n = Dn(n, e));
                })(e._query, t),
                new _u(e.firestore, e.converter, Dn(e._query, t)));
          }
          _getQueryConstraints() {
            return this._queryConstraints;
          }
          _getOperator() {
            return "and" === this.type ? "and" : "or";
          }
        }
        class bl extends yl {
          constructor(e, t) {
            super(),
              (this._field = e),
              (this._direction = t),
              (this.type = "orderBy");
          }
          static _create(e, t) {
            return new bl(e, t);
          }
          _apply(e) {
            const t = (function (e, t, n) {
              if (null !== e.startAt)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
                );
              if (null !== e.endAt)
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
                );
              const r = new zt(t, n);
              return (
                (function (e, t) {
                  if (null === En(e)) {
                    const n = Sn(e);
                    null !== n && Dl(0, n, t.field);
                  }
                })(e, r),
                r
              );
            })(e._query, this._field, this._direction);
            return new _u(
              e.firestore,
              e.converter,
              (function (e, t) {
                const n = e.explicitOrderBy.concat([t]);
                return new wn(
                  e.path,
                  e.collectionGroup,
                  n,
                  e.filters.slice(),
                  e.limit,
                  e.limitType,
                  e.startAt,
                  e.endAt
                );
              })(e._query, t)
            );
          }
        }
        class _l extends yl {
          constructor(e, t, n) {
            super(), (this.type = e), (this._limit = t), (this._limitType = n);
          }
          static _create(e, t, n) {
            return new _l(e, t, n);
          }
          _apply(e) {
            return new _u(
              e.firestore,
              e.converter,
              An(e._query, this._limit, this._limitType)
            );
          }
        }
        class Il extends yl {
          constructor(e, t, n) {
            super(),
              (this.type = e),
              (this._docOrFields = t),
              (this._inclusive = n);
          }
          static _create(e, t, n) {
            return new Il(e, t, n);
          }
          _apply(e) {
            const t = Sl(e, this.type, this._docOrFields, this._inclusive);
            return new _u(
              e.firestore,
              e.converter,
              (function (e, t) {
                return new wn(
                  e.path,
                  e.collectionGroup,
                  e.explicitOrderBy.slice(),
                  e.filters.slice(),
                  e.limit,
                  e.limitType,
                  t,
                  e.endAt
                );
              })(e._query, t)
            );
          }
        }
        class El extends yl {
          constructor(e, t, n) {
            super(),
              (this.type = e),
              (this._docOrFields = t),
              (this._inclusive = n);
          }
          static _create(e, t, n) {
            return new El(e, t, n);
          }
          _apply(e) {
            const t = Sl(e, this.type, this._docOrFields, this._inclusive);
            return new _u(
              e.firestore,
              e.converter,
              (function (e, t) {
                return new wn(
                  e.path,
                  e.collectionGroup,
                  e.explicitOrderBy.slice(),
                  e.filters.slice(),
                  e.limit,
                  e.limitType,
                  e.startAt,
                  t
                );
              })(e._query, t)
            );
          }
        }
        function Sl(e, t, n, r) {
          if (((n[0] = o.getModularInstance(n[0])), n[0] instanceof dl))
            return (function (e, t, n, r, i) {
              if (!r)
                throw new _(
                  b.NOT_FOUND,
                  `Can't use a DocumentSnapshot that doesn't exist for ${n}().`
                );
              const s = [];
              for (const n of xn(e))
                if (n.field.isKeyField()) s.push(Tt(t, r.key));
                else {
                  const e = r.data.field(n.field);
                  if (lt(e))
                    throw new _(
                      b.INVALID_ARGUMENT,
                      'Invalid query. You are trying to start or end a query using a document for which the field "' +
                        n.field +
                        '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                    );
                  if (null === e) {
                    const e = n.field.canonicalString();
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`
                    );
                  }
                  s.push(e);
                }
              return new Ut(s, i);
            })(e._query, e.firestore._databaseId, t, n[0]._document, r);
          {
            const i = $u(e.firestore);
            return (function (e, t, n, r, i, s) {
              const o = e.explicitOrderBy;
              if (i.length > o.length)
                throw new _(
                  b.INVALID_ARGUMENT,
                  `Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`
                );
              const a = [];
              for (let s = 0; s < i.length; s++) {
                const c = i[s];
                if (o[s].field.isKeyField()) {
                  if ("string" != typeof c)
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`
                    );
                  if (!Tn(e) && -1 !== c.indexOf("/"))
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`
                    );
                  const n = e.path.child(B.fromString(c));
                  if (!q.isDocumentKey(n))
                    throw new _(
                      b.INVALID_ARGUMENT,
                      `Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`
                    );
                  const i = new q(n);
                  a.push(Tt(t, i));
                } else {
                  const e = nl(n, r, c);
                  a.push(e);
                }
              }
              return new Ut(a, s);
            })(e._query, e.firestore._databaseId, i, t, n, r);
          }
        }
        function Tl(e, t, n) {
          if ("string" == typeof (n = o.getModularInstance(n))) {
            if ("" === n)
              throw new _(
                b.INVALID_ARGUMENT,
                "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
              );
            if (!Tn(t) && -1 !== n.indexOf("/"))
              throw new _(
                b.INVALID_ARGUMENT,
                `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
              );
            const r = t.path.child(B.fromString(n));
            if (!q.isDocumentKey(r))
              throw new _(
                b.INVALID_ARGUMENT,
                `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`
              );
            return Tt(e, new q(r));
          }
          if (n instanceof Iu) return Tt(e, n._key);
          throw new _(
            b.INVALID_ARGUMENT,
            `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gu(
              n
            )}.`
          );
        }
        function xl(e, t) {
          if (!Array.isArray(e) || 0 === e.length)
            throw new _(
              b.INVALID_ARGUMENT,
              `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`
            );
        }
        function Cl(e, t) {
          if (t.isInequality()) {
            const n = Sn(e),
              r = t.field;
            if (null !== n && !n.isEqual(r))
              throw new _(
                b.INVALID_ARGUMENT,
                `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`
              );
            const i = En(e);
            null !== i && Dl(0, r, i);
          }
          const n = (function (e, t) {
            for (const n of e)
              for (const e of n.getFlattenedFilters())
                if (t.indexOf(e.op) >= 0) return e.op;
            return null;
          })(
            e.filters,
            (function (e) {
              switch (e) {
                case "!=":
                  return ["!=", "not-in"];
                case "array-contains-any":
                case "in":
                  return ["not-in"];
                case "not-in":
                  return ["array-contains-any", "in", "not-in", "!="];
                default:
                  return [];
              }
            })(t.op)
          );
          if (null !== n)
            throw n === t.op
              ? new _(
                  b.INVALID_ARGUMENT,
                  `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`
                )
              : new _(
                  b.INVALID_ARGUMENT,
                  `Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`
                );
        }
        function Dl(e, t, n) {
          if (!n.isEqual(t))
            throw new _(
              b.INVALID_ARGUMENT,
              `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
            );
        }
        function Al(e, t) {
          if (!(t instanceof vl || t instanceof wl))
            throw new _(
              b.INVALID_ARGUMENT,
              `Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`
            );
        }
        class kl {
          convertValue(e, t = "none") {
            switch (yt(e)) {
              case 0:
                return null;
              case 1:
                return e.booleanValue;
              case 2:
                return ct(e.integerValue || e.doubleValue);
              case 3:
                return this.convertTimestamp(e.timestampValue);
              case 4:
                return this.convertServerTimestamp(e, t);
              case 5:
                return e.stringValue;
              case 6:
                return this.convertBytes(ut(e.bytesValue));
              case 7:
                return this.convertReference(e.referenceValue);
              case 8:
                return this.convertGeoPoint(e.geoPointValue);
              case 9:
                return this.convertArray(e.arrayValue, t);
              case 10:
                return this.convertObject(e.mapValue, t);
              default:
                throw y();
            }
          }
          convertObject(e, t) {
            return this.convertObjectMap(e.fields, t);
          }
          convertObjectMap(e, t = "none") {
            const n = {};
            return (
              We(e, (e, r) => {
                n[e] = this.convertValue(r, t);
              }),
              n
            );
          }
          convertGeoPoint(e) {
            return new Bu(ct(e.latitude), ct(e.longitude));
          }
          convertArray(e, t) {
            return (e.values || []).map((e) => this.convertValue(e, t));
          }
          convertServerTimestamp(e, t) {
            switch (t) {
              case "previous":
                const n = ht(e);
                return null == n ? null : this.convertValue(n, t);
              case "estimate":
                return this.convertTimestamp(dt(e));
              default:
                return null;
            }
          }
          convertTimestamp(e) {
            const t = at(e);
            return new R(t.seconds, t.nanos);
          }
          convertDocumentKey(e, t) {
            const n = B.fromString(e);
            v(Li(n));
            const r = new pt(n.get(1), n.get(3)),
              i = new q(n.popFirst(5));
            return (
              r.isEqual(t) ||
                p(
                  `Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
                ),
              i
            );
          }
        }
        function Nl(e, t, n) {
          let r;
          return (
            (r = e
              ? n && (n.merge || n.mergeFields)
                ? e.toFirestore(t, n)
                : e.toFirestore(t)
              : t),
            r
          );
        }
        class Ol extends kl {
          constructor(e) {
            super(), (this.firestore = e);
          }
          convertBytes(e) {
            return new Ru(e);
          }
          convertReference(e) {
            const t = this.convertDocumentKey(e, this.firestore._databaseId);
            return new Iu(this.firestore, null, t);
          }
        }
        function Ll() {
          return new Pu("count");
        }
        class Pl {
          constructor(e, t) {
            (this.hasPendingWrites = e), (this.fromCache = t);
          }
          isEqual(e) {
            return (
              this.hasPendingWrites === e.hasPendingWrites &&
              this.fromCache === e.fromCache
            );
          }
        }
        class Ml extends dl {
          constructor(e, t, n, r, i, s) {
            super(e, t, n, r, s),
              (this._firestore = e),
              (this._firestoreImpl = e),
              (this.metadata = i);
          }
          exists() {
            return super.exists();
          }
          data(e = {}) {
            if (this._document) {
              if (this._converter) {
                const t = new Rl(
                  this._firestore,
                  this._userDataWriter,
                  this._key,
                  this._document,
                  this.metadata,
                  null
                );
                return this._converter.fromFirestore(t, e);
              }
              return this._userDataWriter.convertValue(
                this._document.data.value,
                e.serverTimestamps
              );
            }
          }
          get(e, t = {}) {
            if (this._document) {
              const n = this._document.data.field(
                pl("DocumentSnapshot.get", e)
              );
              if (null !== n)
                return this._userDataWriter.convertValue(n, t.serverTimestamps);
            }
          }
        }
        class Rl extends Ml {
          data(e = {}) {
            return super.data(e);
          }
        }
        class Fl {
          constructor(e, t, n, r) {
            (this._firestore = e),
              (this._userDataWriter = t),
              (this._snapshot = r),
              (this.metadata = new Pl(r.hasPendingWrites, r.fromCache)),
              (this.query = n);
          }
          get docs() {
            const e = [];
            return this.forEach((t) => e.push(t)), e;
          }
          get size() {
            return this._snapshot.docs.size;
          }
          get empty() {
            return 0 === this.size;
          }
          forEach(e, t) {
            this._snapshot.docs.forEach((n) => {
              e.call(
                t,
                new Rl(
                  this._firestore,
                  this._userDataWriter,
                  n.key,
                  n,
                  new Pl(
                    this._snapshot.mutatedKeys.has(n.key),
                    this._snapshot.fromCache
                  ),
                  this.query.converter
                )
              );
            });
          }
          docChanges(e = {}) {
            const t = !!e.includeMetadataChanges;
            if (t && this._snapshot.excludesMetadataChanges)
              throw new _(
                b.INVALID_ARGUMENT,
                "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
              );
            return (
              (this._cachedChanges &&
                this._cachedChangesIncludeMetadataChanges === t) ||
                ((this._cachedChanges = (function (e, t) {
                  if (e._snapshot.oldDocs.isEmpty()) {
                    let t = 0;
                    return e._snapshot.docChanges.map((n) => {
                      const r = new Rl(
                        e._firestore,
                        e._userDataWriter,
                        n.doc.key,
                        n.doc,
                        new Pl(
                          e._snapshot.mutatedKeys.has(n.doc.key),
                          e._snapshot.fromCache
                        ),
                        e.query.converter
                      );
                      return (
                        n.doc,
                        { type: "added", doc: r, oldIndex: -1, newIndex: t++ }
                      );
                    });
                  }
                  {
                    let n = e._snapshot.oldDocs;
                    return e._snapshot.docChanges
                      .filter((e) => t || 3 !== e.type)
                      .map((t) => {
                        const r = new Rl(
                          e._firestore,
                          e._userDataWriter,
                          t.doc.key,
                          t.doc,
                          new Pl(
                            e._snapshot.mutatedKeys.has(t.doc.key),
                            e._snapshot.fromCache
                          ),
                          e.query.converter
                        );
                        let i = -1,
                          s = -1;
                        return (
                          0 !== t.type &&
                            ((i = n.indexOf(t.doc.key)),
                            (n = n.delete(t.doc.key))),
                          1 !== t.type &&
                            ((n = n.add(t.doc)), (s = n.indexOf(t.doc.key))),
                          { type: Vl(t.type), doc: r, oldIndex: i, newIndex: s }
                        );
                      });
                  }
                })(this, t)),
                (this._cachedChangesIncludeMetadataChanges = t)),
              this._cachedChanges
            );
          }
        }
        function Vl(e) {
          switch (e) {
            case 0:
              return "added";
            case 2:
            case 3:
              return "modified";
            case 1:
              return "removed";
            default:
              return y();
          }
        }
        class Bl extends kl {
          constructor(e) {
            super(), (this.firestore = e);
          }
          convertBytes(e) {
            return new Ru(e);
          }
          convertReference(e) {
            const t = this.convertDocumentKey(e, this.firestore._databaseId);
            return new Iu(this.firestore, null, t);
          }
        }
        function Ul(e, t) {
          return (function (e, t) {
            const n = new I();
            return (
              e.asyncQueue.enqueueAndForget(async () =>
                (async function (e, t, n) {
                  const r = Vc(e);
                  try {
                    const e = await (function (e, t) {
                      const n = w(e),
                        r = R.now(),
                        i = t.reduce((e, t) => e.add(t.key), Hn());
                      let s, o;
                      return n.persistence
                        .runTransaction(
                          "Locally write mutations",
                          "readwrite",
                          (e) => {
                            let a = Bn(),
                              c = Hn();
                            return n.Xi.getEntries(e, i)
                              .next((e) => {
                                (a = e),
                                  a.forEach((e, t) => {
                                    t.isValidDocument() || (c = c.add(e));
                                  });
                              })
                              .next(() =>
                                n.localDocuments.getOverlayedDocuments(e, a)
                              )
                              .next((i) => {
                                s = i;
                                const o = [];
                                for (const e of t) {
                                  const t = br(
                                    e,
                                    s.get(e.key).overlayedDocument
                                  );
                                  null != t &&
                                    o.push(
                                      new Er(
                                        e.key,
                                        t,
                                        Vt(t.value.mapValue),
                                        pr.exists(!0)
                                      )
                                    );
                                }
                                return n.mutationQueue.addMutationBatch(
                                  e,
                                  r,
                                  o,
                                  t
                                );
                              })
                              .next((t) => {
                                o = t;
                                const r = t.applyToLocalDocumentSet(s, c);
                                return n.documentOverlayCache.saveOverlays(
                                  e,
                                  t.batchId,
                                  r
                                );
                              });
                          }
                        )
                        .then(() => ({ batchId: o.batchId, changes: qn(s) }));
                    })(r.localStore, t);
                    r.sharedClientState.addPendingMutation(e.batchId),
                      (function (e, t, n) {
                        let r = e.fa[e.currentUser.toKey()];
                        r || (r = new Xe(L)),
                          (r = r.insert(t, n)),
                          (e.fa[e.currentUser.toKey()] = r);
                      })(r, e.batchId, n),
                      await xc(r, e.changes),
                      await Aa(r.remoteStore);
                  } catch (e) {
                    const t = za(e, "Failed to persist write");
                    n.reject(t);
                  }
                })(await iu(e), t, n)
              ),
              n.promise
            );
          })(ku(e), t);
        }
        function jl(e, t, n) {
          const r = n.docs.get(t._key),
            i = new Bl(e);
          return new Ml(
            e,
            i,
            t._key,
            r,
            new Pl(n.hasPendingWrites, n.fromCache),
            t.converter
          );
        }
        function ql(e, t) {
          const n = mu(e.firestore, Au),
            r = ku(n),
            i = (function (e, t) {
              const n = [];
              for (const r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  n.push(t(e[r], r));
              return n;
            })(t, (e, t) => new Or(t, e._aggregateType, e._internalFieldPath));
          return (function (e, t, n) {
            const r = new I();
            return (
              e.asyncQueue.enqueueAndForget(async () => {
                try {
                  const i = await su(e);
                  r.resolve(
                    (async function (e, t, n) {
                      var r;
                      const i = w(e),
                        { request: s, I_: o } = (function (e, t, n) {
                          const r = Ei(e, t),
                            i = {},
                            s = [];
                          let o = 0;
                          return (
                            n.forEach((e) => {
                              const t = "aggregate_" + o++;
                              (i[t] = e.alias),
                                "count" === e.Ee
                                  ? s.push({ alias: t, count: {} })
                                  : "avg" === e.Ee
                                  ? s.push({
                                      alias: t,
                                      avg: { field: Ai(e.fieldPath) },
                                    })
                                  : "sum" === e.Ee &&
                                    s.push({
                                      alias: t,
                                      sum: { field: Ai(e.fieldPath) },
                                    });
                            }),
                            {
                              request: {
                                structuredAggregationQuery: {
                                  aggregations: s,
                                  structuredQuery: r.structuredQuery,
                                },
                                parent: r.parent,
                              },
                              I_: i,
                            }
                          );
                        })(i.serializer, Cn(t), n),
                        a = s.parent;
                      i.connection.Ro || delete s.parent;
                      const c = (
                        await i.yo("RunAggregationQuery", a, s, 1)
                      ).filter((e) => !!e.result);
                      v(1 === c.length);
                      const u =
                        null === (r = c[0].result) || void 0 === r
                          ? void 0
                          : r.aggregateFields;
                      return Object.keys(u).reduce(
                        (e, t) => ((e[o[t]] = u[t]), e),
                        {}
                      );
                    })(i, t, n)
                  );
                } catch (e) {
                  r.reject(e);
                }
              }),
              r.promise
            );
          })(r, e._query, i).then((t) =>
            (function (e, t, n) {
              const r = new Bl(e);
              return new Mu(t, r, n);
            })(n, e, t)
          );
        }
        class zl {
          constructor(e) {
            (this.kind = "memory"),
              (this._onlineComponentProvider = new zc()),
              (null == e ? void 0 : e.garbageCollector)
                ? (this._offlineComponentProvider =
                    e.garbageCollector._offlineComponentProvider)
                : (this._offlineComponentProvider = new Bc());
          }
          toJSON() {
            return { kind: this.kind };
          }
        }
        class Gl {
          constructor(e) {
            let t;
            (this.kind = "persistent"),
              (null == e ? void 0 : e.tabManager)
                ? (e.tabManager._initialize(e), (t = e.tabManager))
                : ((t = Wl(void 0)), t._initialize(e)),
              (this._onlineComponentProvider = t._onlineComponentProvider),
              (this._offlineComponentProvider = t._offlineComponentProvider);
          }
          toJSON() {
            return { kind: this.kind };
          }
        }
        class Kl {
          constructor() {
            (this.kind = "memoryEager"),
              (this._offlineComponentProvider = new Bc());
          }
          toJSON() {
            return { kind: this.kind };
          }
        }
        class $l {
          constructor(e) {
            (this.kind = "memoryLru"),
              (this._offlineComponentProvider = new Uc(e));
          }
          toJSON() {
            return { kind: this.kind };
          }
        }
        class Ql {
          constructor(e) {
            (this.forceOwnership = e), (this.kind = "persistentSingleTab");
          }
          toJSON() {
            return { kind: this.kind };
          }
          _initialize(e) {
            (this._onlineComponentProvider = new zc()),
              (this._offlineComponentProvider = new jc(
                this._onlineComponentProvider,
                null == e ? void 0 : e.cacheSizeBytes,
                this.forceOwnership
              ));
          }
        }
        class Hl {
          constructor() {
            this.kind = "PersistentMultipleTab";
          }
          toJSON() {
            return { kind: this.kind };
          }
          _initialize(e) {
            (this._onlineComponentProvider = new zc()),
              (this._offlineComponentProvider = new qc(
                this._onlineComponentProvider,
                null == e ? void 0 : e.cacheSizeBytes
              ));
          }
        }
        function Wl(e) {
          return new Ql(null == e ? void 0 : e.forceOwnership);
        }
        const Jl = { maxAttempts: 5 };
        class Xl {
          constructor(e, t) {
            (this._firestore = e),
              (this._commitHandler = t),
              (this._mutations = []),
              (this._committed = !1),
              (this._dataReader = $u(e));
          }
          set(e, t, n) {
            this._verifyNotCommitted();
            const r = Yl(e, this._firestore),
              i = Nl(r.converter, t, n),
              s = Qu(
                this._dataReader,
                "WriteBatch.set",
                r._key,
                i,
                null !== r.converter,
                n
              );
            return this._mutations.push(s.toMutation(r._key, pr.none())), this;
          }
          update(e, t, n, ...r) {
            this._verifyNotCommitted();
            const i = Yl(e, this._firestore);
            let s;
            return (
              (s =
                "string" == typeof (t = o.getModularInstance(t)) ||
                t instanceof Fu
                  ? tl(this._dataReader, "WriteBatch.update", i._key, t, n, r)
                  : el(this._dataReader, "WriteBatch.update", i._key, t)),
              this._mutations.push(s.toMutation(i._key, pr.exists(!0))),
              this
            );
          }
          delete(e) {
            this._verifyNotCommitted();
            const t = Yl(e, this._firestore);
            return (
              (this._mutations = this._mutations.concat(
                new Cr(t._key, pr.none())
              )),
              this
            );
          }
          commit() {
            return (
              this._verifyNotCommitted(),
              (this._committed = !0),
              this._mutations.length > 0
                ? this._commitHandler(this._mutations)
                : Promise.resolve()
            );
          }
          _verifyNotCommitted() {
            if (this._committed)
              throw new _(
                b.FAILED_PRECONDITION,
                "A write batch can no longer be used after commit() has been called."
              );
          }
        }
        function Yl(e, t) {
          if ((e = o.getModularInstance(e)).firestore !== t)
            throw new _(
              b.INVALID_ARGUMENT,
              "Provided document reference is from a different Firestore instance."
            );
          return e;
        }
        class Zl extends class {
          constructor(e, t) {
            (this._firestore = e),
              (this._transaction = t),
              (this._dataReader = $u(e));
          }
          get(e) {
            const t = Yl(e, this._firestore),
              n = new Ol(this._firestore);
            return this._transaction.lookup([t._key]).then((e) => {
              if (!e || 1 !== e.length) return y();
              const r = e[0];
              if (r.isFoundDocument())
                return new dl(this._firestore, n, r.key, r, t.converter);
              if (r.isNoDocument())
                return new dl(this._firestore, n, t._key, null, t.converter);
              throw y();
            });
          }
          set(e, t, n) {
            const r = Yl(e, this._firestore),
              i = Nl(r.converter, t, n),
              s = Qu(
                this._dataReader,
                "Transaction.set",
                r._key,
                i,
                null !== r.converter,
                n
              );
            return this._transaction.set(r._key, s), this;
          }
          update(e, t, n, ...r) {
            const i = Yl(e, this._firestore);
            let s;
            return (
              (s =
                "string" == typeof (t = o.getModularInstance(t)) ||
                t instanceof Fu
                  ? tl(this._dataReader, "Transaction.update", i._key, t, n, r)
                  : el(this._dataReader, "Transaction.update", i._key, t)),
              this._transaction.update(i._key, s),
              this
            );
          }
          delete(e) {
            const t = Yl(e, this._firestore);
            return this._transaction.delete(t._key), this;
          }
        } {
          constructor(e, t) {
            super(e, t), (this._firestore = e);
          }
          get(e) {
            const t = Yl(e, this._firestore),
              n = new Bl(this._firestore);
            return super
              .get(e)
              .then(
                (e) =>
                  new Ml(
                    this._firestore,
                    n,
                    t._key,
                    e._document,
                    new Pl(!1, !1),
                    t.converter
                  )
              );
          }
        }
        function eh(e, t) {
          if ("string" != typeof e[t])
            throw new _(b.INVALID_ARGUMENT, "Missing string value for: " + t);
          return e[t];
        }
        !(function (e, t = !0) {
          !(function (e) {
            l = e;
          })(r.SDK_VERSION),
            r._registerComponent(
              new i.Component(
                "firestore",
                (e, { instanceIdentifier: n, options: r }) => {
                  const i = e.getProvider("app").getImmediate(),
                    s = new Au(
                      new x(e.getProvider("auth-internal")),
                      new k(e.getProvider("app-check-internal")),
                      (function (e, t) {
                        if (
                          !Object.prototype.hasOwnProperty.apply(e.options, [
                            "projectId",
                          ])
                        )
                          throw new _(
                            b.INVALID_ARGUMENT,
                            '"projectId" not provided in firebase.initializeApp.'
                          );
                        return new pt(e.options.projectId, t);
                      })(i, n),
                      i
                    );
                  return (
                    (r = Object.assign({ useFetchStreams: t }, r)),
                    s._setSettings(r),
                    s
                  );
                },
                "PUBLIC"
              ).setMultipleInstances(!0)
            ),
            r.registerVersion(c, "4.1.0", e),
            r.registerVersion(c, "4.1.0", "cjs2017");
        })(),
          (t.AbstractUserDataWriter = kl),
          (t.AggregateField = Pu),
          (t.AggregateQuerySnapshot = Mu),
          (t.Bytes = Ru),
          (t.CACHE_SIZE_UNLIMITED = -1),
          (t.CollectionReference = Eu),
          (t.DocumentReference = Iu),
          (t.DocumentSnapshot = Ml),
          (t.FieldPath = Fu),
          (t.FieldValue = Vu),
          (t.Firestore = Au),
          (t.FirestoreError = _),
          (t.GeoPoint = Bu),
          (t.LoadBundleTask = Du),
          (t.Query = _u),
          (t.QueryCompositeFilterConstraint = wl),
          (t.QueryConstraint = yl),
          (t.QueryDocumentSnapshot = Rl),
          (t.QueryEndAtConstraint = El),
          (t.QueryFieldFilterConstraint = vl),
          (t.QueryLimitConstraint = _l),
          (t.QueryOrderByConstraint = bl),
          (t.QuerySnapshot = Fl),
          (t.QueryStartAtConstraint = Il),
          (t.SnapshotMetadata = Pl),
          (t.Timestamp = R),
          (t.Transaction = Zl),
          (t.WriteBatch = Xl),
          (t._ByteString = st),
          (t._DatabaseId = pt),
          (t._DocumentKey = q),
          (t._EmptyAppCheckTokenProvider = class {
            getToken() {
              return Promise.resolve(new A(""));
            }
            invalidateToken() {}
            start(e, t) {}
            shutdown() {}
          }),
          (t._EmptyAuthCredentialsProvider = S),
          (t._FieldPath = j),
          (t._TestingHooks = Vr),
          (t._cast = mu),
          (t._debugAssert = function (e, t) {
            e || y();
          }),
          (t._isBase64Available = function () {
            return "undefined" != typeof atob;
          }),
          (t._logWarn = g),
          (t._validateIsNotUsedTogether = du),
          (t.addDoc = function (e, t) {
            const n = mu(e.firestore, Au),
              r = Su(e),
              i = Nl(e.converter, t);
            return Ul(n, [
              Qu(
                $u(e.firestore),
                "addDoc",
                r._key,
                i,
                null !== e.converter,
                {}
              ).toMutation(r._key, pr.exists(!1)),
            ]).then(() => r);
          }),
          (t.aggregateFieldEqual = function (e, t) {
            var n, r;
            return (
              e instanceof Pu &&
              t instanceof Pu &&
              e._aggregateType === t._aggregateType &&
              (null === (n = e._internalFieldPath) || void 0 === n
                ? void 0
                : n.canonicalString()) ===
                (null === (r = t._internalFieldPath) || void 0 === r
                  ? void 0
                  : r.canonicalString())
            );
          }),
          (t.aggregateQuerySnapshotEqual = function (e, t) {
            return Tu(e.query, t.query) && o.deepEqual(e.data(), t.data());
          }),
          (t.and = function (...e) {
            return e.forEach((e) => Al("and", e)), wl._create("and", e);
          }),
          (t.arrayRemove = function (...e) {
            return new Yu("arrayRemove", e);
          }),
          (t.arrayUnion = function (...e) {
            return new Xu("arrayUnion", e);
          }),
          (t.average = function (e) {
            return new Pu("avg", al("average", e));
          }),
          (t.clearIndexedDbPersistence = function (e) {
            if (e._initialized && !e._terminated)
              throw new _(
                b.FAILED_PRECONDITION,
                "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated."
              );
            const t = new I();
            return (
              e._queue.enqueueAndForgetEvenWhileRestricted(async () => {
                try {
                  await (async function (e) {
                    if (!se.v()) return Promise.resolve();
                    const t = e + "main";
                    await se.delete(t);
                  })(So(e._databaseId, e._persistenceKey)),
                    t.resolve();
                } catch (e) {
                  t.reject(e);
                }
              }),
              t.promise
            );
          }),
          (t.collection = function (e, t, ...n) {
            if (
              ((e = o.getModularInstance(e)),
              hu("collection", "path", t),
              e instanceof wu)
            ) {
              const r = B.fromString(t, ...n);
              return pu(r), new Eu(e, null, r);
            }
            {
              if (!(e instanceof Iu || e instanceof Eu))
                throw new _(
                  b.INVALID_ARGUMENT,
                  "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
                );
              const r = e._path.child(B.fromString(t, ...n));
              return pu(r), new Eu(e.firestore, null, r);
            }
          }),
          (t.collectionGroup = function (e, t) {
            if (
              ((e = mu(e, wu)),
              hu("collectionGroup", "collection id", t),
              t.indexOf("/") >= 0)
            )
              throw new _(
                b.INVALID_ARGUMENT,
                `Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`
              );
            return new _u(
              e,
              null,
              (function (e) {
                return new wn(B.emptyPath(), e);
              })(t)
            );
          }),
          (t.connectFirestoreEmulator = bu),
          (t.count = Ll),
          (t.deleteDoc = function (e) {
            return Ul(mu(e.firestore, Au), [new Cr(e._key, pr.none())]);
          }),
          (t.deleteField = function () {
            return new Hu("deleteField");
          }),
          (t.disableNetwork = function (e) {
            return (function (e) {
              return e.asyncQueue.enqueue(async () => {
                const t = await tu(e),
                  n = await ru(e);
                return (
                  t.setNetworkEnabled(!1),
                  (async function (e) {
                    const t = w(e);
                    t.y_.add(0), await ga(t), t.b_.set("Offline");
                  })(n)
                );
              });
            })(ku((e = mu(e, Au))));
          }),
          (t.doc = Su),
          (t.documentId = function () {
            return new Fu("__name__");
          }),
          (t.enableIndexedDbPersistence = function (e, t) {
            Lu((e = mu(e, Au)));
            const n = ku(e);
            if (n._uninitializedComponentsProvider)
              throw new _(
                b.FAILED_PRECONDITION,
                "SDK cache is already specified."
              );
            g(
              "enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead."
            );
            const r = e._freezeSettings(),
              i = new zc();
            return Ou(
              n,
              i,
              new jc(i, r.cacheSizeBytes, null == t ? void 0 : t.forceOwnership)
            );
          }),
          (t.enableMultiTabIndexedDbPersistence = function (e) {
            Lu((e = mu(e, Au)));
            const t = ku(e);
            if (t._uninitializedComponentsProvider)
              throw new _(
                b.FAILED_PRECONDITION,
                "SDK cache is already specified."
              );
            g(
              "enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead."
            );
            const n = e._freezeSettings(),
              r = new zc();
            return Ou(t, r, new qc(r, n.cacheSizeBytes));
          }),
          (t.enableNetwork = function (e) {
            return (function (e) {
              return e.asyncQueue.enqueue(async () => {
                const t = await tu(e),
                  n = await ru(e);
                return (
                  t.setNetworkEnabled(!0),
                  (function (e) {
                    const t = w(e);
                    return t.y_.delete(0), pa(t);
                  })(n)
                );
              });
            })(ku((e = mu(e, Au))));
          }),
          (t.endAt = function (...e) {
            return El._create("endAt", e, !0);
          }),
          (t.endBefore = function (...e) {
            return El._create("endBefore", e, !1);
          }),
          (t.ensureFirestoreConfigured = ku),
          (t.executeWrite = Ul),
          (t.getAggregateFromServer = ql),
          (t.getCountFromServer = function (e) {
            return ql(e, { count: Ll() });
          }),
          (t.getDoc = function (e) {
            e = mu(e, Iu);
            const t = mu(e.firestore, Au);
            return au(ku(t), e._key).then((n) => jl(t, e, n));
          }),
          (t.getDocFromCache = function (e) {
            e = mu(e, Iu);
            const t = mu(e.firestore, Au),
              n = ku(t),
              r = new Bl(t);
            return (function (e, t) {
              const n = new I();
              return (
                e.asyncQueue.enqueueAndForget(async () =>
                  (async function (e, t, n) {
                    try {
                      const r = await (function (e, t) {
                        const n = w(e);
                        return n.persistence.runTransaction(
                          "read document",
                          "readonly",
                          (e) => n.localDocuments.getDocument(e, t)
                        );
                      })(e, t);
                      r.isFoundDocument()
                        ? n.resolve(r)
                        : r.isNoDocument()
                        ? n.resolve(null)
                        : n.reject(
                            new _(
                              b.UNAVAILABLE,
                              "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                            )
                          );
                    } catch (e) {
                      const r = za(
                        e,
                        `Failed to get document '${t} from cache`
                      );
                      n.reject(r);
                    }
                  })(await nu(e), t, n)
                ),
                n.promise
              );
            })(n, e._key).then(
              (n) =>
                new Ml(
                  t,
                  r,
                  e._key,
                  n,
                  new Pl(null !== n && n.hasLocalMutations, !0),
                  e.converter
                )
            );
          }),
          (t.getDocFromServer = function (e) {
            e = mu(e, Iu);
            const t = mu(e.firestore, Au);
            return au(ku(t), e._key, { source: "server" }).then((n) =>
              jl(t, e, n)
            );
          }),
          (t.getDocs = function (e) {
            e = mu(e, _u);
            const t = mu(e.firestore, Au),
              n = ku(t),
              r = new Bl(t);
            return (
              gl(e._query), cu(n, e._query).then((n) => new Fl(t, r, e, n))
            );
          }),
          (t.getDocsFromCache = function (e) {
            e = mu(e, _u);
            const t = mu(e.firestore, Au),
              n = ku(t),
              r = new Bl(t);
            return (function (e, t) {
              const n = new I();
              return (
                e.asyncQueue.enqueueAndForget(async () =>
                  (async function (e, t, n) {
                    try {
                      const r = await Mo(e, t, !0),
                        i = new ac(t, r.ss),
                        s = i.sa(r.documents),
                        o = i.applyChanges(s, !1);
                      n.resolve(o.snapshot);
                    } catch (e) {
                      const r = za(
                        e,
                        `Failed to execute query '${t} against cache`
                      );
                      n.reject(r);
                    }
                  })(await nu(e), t, n)
                ),
                n.promise
              );
            })(n, e._query).then((n) => new Fl(t, r, e, n));
          }),
          (t.getDocsFromServer = function (e) {
            e = mu(e, _u);
            const t = mu(e.firestore, Au),
              n = ku(t),
              r = new Bl(t);
            return cu(n, e._query, { source: "server" }).then(
              (n) => new Fl(t, r, e, n)
            );
          }),
          (t.getFirestore = function (e, t) {
            const n = "object" == typeof e ? e : r.getApp(),
              i = "string" == typeof e ? e : t || "(default)",
              s = r
                ._getProvider(n, "firestore")
                .getImmediate({ identifier: i });
            if (!s._initialized) {
              const e = o.getDefaultEmulatorHostnameAndPort("firestore");
              e && bu(s, ...e);
            }
            return s;
          }),
          (t.increment = function (e) {
            return new Zu("increment", e);
          }),
          (t.initializeFirestore = function (e, t, n) {
            n || (n = "(default)");
            const i = r._getProvider(e, "firestore");
            if (i.isInitialized(n)) {
              const e = i.getImmediate({ identifier: n }),
                r = i.getOptions(n);
              if (o.deepEqual(r, t)) return e;
              throw new _(
                b.FAILED_PRECONDITION,
                "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance."
              );
            }
            if (void 0 !== t.cacheSizeBytes && void 0 !== t.localCache)
              throw new _(
                b.INVALID_ARGUMENT,
                "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object"
              );
            if (
              void 0 !== t.cacheSizeBytes &&
              -1 !== t.cacheSizeBytes &&
              t.cacheSizeBytes < 1048576
            )
              throw new _(
                b.INVALID_ARGUMENT,
                "cacheSizeBytes must be at least 1048576"
              );
            return i.initialize({ options: t, instanceIdentifier: n });
          }),
          (t.limit = function (e) {
            return yu("limit", e), _l._create("limit", e, "F");
          }),
          (t.limitToLast = function (e) {
            return yu("limitToLast", e), _l._create("limitToLast", e, "L");
          }),
          (t.loadBundle = function (e, t) {
            const n = ku((e = mu(e, Au))),
              r = new Du();
            return (
              (function (e, t, n, r) {
                const i = (function (e, t) {
                  let n;
                  return (
                    (n = "string" == typeof e ? Ur().encode(e) : e),
                    (function (e, t) {
                      return new $c(e, t);
                    })(
                      (function (e, t) {
                        if (e instanceof Uint8Array) return Gc(e, t);
                        if (e instanceof ArrayBuffer)
                          return Gc(new Uint8Array(e), t);
                        if (e instanceof ReadableStream) return e.getReader();
                        throw new Error(
                          "Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream"
                        );
                      })(n),
                      t
                    )
                  );
                })(n, oa(t));
                e.asyncQueue.enqueueAndForget(async () => {
                  !(function (e, t, n) {
                    const r = w(e);
                    (async function (e, t, n) {
                      try {
                        const r = await t.getMetadata();
                        if (
                          await (function (e, t) {
                            const n = w(e),
                              r = ui(t.createTime);
                            return n.persistence
                              .runTransaction(
                                "hasNewerBundle",
                                "readonly",
                                (e) => n.Qr.getBundleMetadata(e, t.id)
                              )
                              .then(
                                (e) => !!e && e.createTime.compareTo(r) >= 0
                              );
                          })(e.localStore, r)
                        )
                          return (
                            await t.close(),
                            n._completeWith(
                              (function (e) {
                                return {
                                  taskState: "Success",
                                  documentsLoaded: e.totalDocuments,
                                  bytesLoaded: e.totalBytes,
                                  totalDocuments: e.totalDocuments,
                                  totalBytes: e.totalBytes,
                                };
                              })(r)
                            ),
                            Promise.resolve(new Set())
                          );
                        n._updateProgress(ic(r));
                        const i = new rc(r, e.localStore, t.serializer);
                        let s = await t.ba();
                        for (; s; ) {
                          const e = await i.H_(s);
                          e && n._updateProgress(e), (s = await t.ba());
                        }
                        const o = await i.complete();
                        return (
                          await xc(e, o.Z_, void 0),
                          await (function (e, t) {
                            const n = w(e);
                            return n.persistence.runTransaction(
                              "Save bundle",
                              "readwrite",
                              (e) => n.Qr.saveBundleMetadata(e, t)
                            );
                          })(e.localStore, r),
                          n._completeWith(o.progress),
                          Promise.resolve(o.Y_)
                        );
                      } catch (e) {
                        return (
                          g("SyncEngine", `Loading bundle failed with ${e}`),
                          n._failWith(e),
                          Promise.resolve(new Set())
                        );
                      }
                    })(r, t, n).then((e) => {
                      r.sharedClientState.notifyBundleLoaded(e);
                    });
                  })(await iu(e), i, r);
                });
              })(n, e._databaseId, t, r),
              r
            );
          }),
          (t.memoryEagerGarbageCollector = function () {
            return new Kl();
          }),
          (t.memoryLocalCache = function (e) {
            return new zl(e);
          }),
          (t.memoryLruGarbageCollector = function (e) {
            return new $l(null == e ? void 0 : e.cacheSizeBytes);
          }),
          (t.namedQuery = function (e, t) {
            return (function (e, t) {
              return e.asyncQueue.enqueue(async () =>
                (function (e, t) {
                  const n = w(e);
                  return n.persistence.runTransaction(
                    "Get named query",
                    "readonly",
                    (e) => n.Qr.getNamedQuery(e, t)
                  );
                })(await nu(e), t)
              );
            })(ku((e = mu(e, Au))), t).then((t) =>
              t ? new _u(e, null, t.query) : null
            );
          }),
          (t.onSnapshot = function (e, ...t) {
            var n, r, i;
            e = o.getModularInstance(e);
            let s = { includeMetadataChanges: !1 },
              a = 0;
            "object" != typeof t[a] || Cu(t[a]) || ((s = t[a]), a++);
            const c = { includeMetadataChanges: s.includeMetadataChanges };
            if (Cu(t[a])) {
              const e = t[a];
              (t[a] =
                null === (n = e.next) || void 0 === n ? void 0 : n.bind(e)),
                (t[a + 1] =
                  null === (r = e.error) || void 0 === r ? void 0 : r.bind(e)),
                (t[a + 2] =
                  null === (i = e.complete) || void 0 === i
                    ? void 0
                    : i.bind(e));
            }
            let u, l, h;
            if (e instanceof Iu)
              (l = mu(e.firestore, Au)),
                (h = _n(e._key.path)),
                (u = {
                  next: (n) => {
                    t[a] && t[a](jl(l, e, n));
                  },
                  error: t[a + 1],
                  complete: t[a + 2],
                });
            else {
              const n = mu(e, _u);
              (l = mu(n.firestore, Au)), (h = n._query);
              const r = new Bl(l);
              (u = {
                next: (e) => {
                  t[a] && t[a](new Fl(l, r, n, e));
                },
                error: t[a + 1],
                complete: t[a + 2],
              }),
                gl(e._query);
            }
            return (function (e, t, n, r) {
              const i = new Kc(r),
                s = new ec(t, i, n);
              return (
                e.asyncQueue.enqueueAndForget(async () => Wa(await ou(e), s)),
                () => {
                  i.Ca(),
                    e.asyncQueue.enqueueAndForget(async () =>
                      Ja(await ou(e), s)
                    );
                }
              );
            })(ku(l), h, c, u);
          }),
          (t.onSnapshotsInSync = function (e, t) {
            return (function (e, t) {
              const n = new Kc(t);
              return (
                e.asyncQueue.enqueueAndForget(async () =>
                  (function (e, t) {
                    w(e).O_.add(t), t.next();
                  })(await ou(e), n)
                ),
                () => {
                  n.Ca(),
                    e.asyncQueue.enqueueAndForget(async () =>
                      (function (e, t) {
                        w(e).O_.delete(t);
                      })(await ou(e), n)
                    );
                }
              );
            })(ku((e = mu(e, Au))), Cu(t) ? t : { next: t });
          }),
          (t.or = function (...e) {
            return e.forEach((e) => Al("or", e)), wl._create("or", e);
          }),
          (t.orderBy = function (e, t = "asc") {
            const n = t,
              r = pl("orderBy", e);
            return bl._create(r, n);
          }),
          (t.persistentLocalCache = function (e) {
            return new Gl(e);
          }),
          (t.persistentMultipleTabManager = function () {
            return new Hl();
          }),
          (t.persistentSingleTabManager = Wl),
          (t.query = function (e, t, ...n) {
            let r = [];
            t instanceof ml && r.push(t),
              (r = r.concat(n)),
              (function (e) {
                const t = e.filter((e) => e instanceof wl).length,
                  n = e.filter((e) => e instanceof vl).length;
                if (t > 1 || (t > 0 && n > 0))
                  throw new _(
                    b.INVALID_ARGUMENT,
                    "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."
                  );
              })(r);
            for (const t of r) e = t._apply(e);
            return e;
          }),
          (t.queryEqual = Tu),
          (t.refEqual = function (e, t) {
            return (
              (e = o.getModularInstance(e)),
              (t = o.getModularInstance(t)),
              (e instanceof Iu || e instanceof Eu) &&
                (t instanceof Iu || t instanceof Eu) &&
                e.firestore === t.firestore &&
                e.path === t.path &&
                e.converter === t.converter
            );
          }),
          (t.runTransaction = function (e, t, n) {
            e = mu(e, Au);
            const r = Object.assign(Object.assign({}, Jl), n);
            return (
              (function (e) {
                if (e.maxAttempts < 1)
                  throw new _(
                    b.INVALID_ARGUMENT,
                    "Max attempts must be at least 1"
                  );
              })(r),
              (function (e, t, n) {
                const r = new I();
                return (
                  e.asyncQueue.enqueueAndForget(async () => {
                    const i = await su(e);
                    new Hc(e.asyncQueue, i, n, t, r).run();
                  }),
                  r.promise
                );
              })(ku(e), (n) => t(new Zl(e, n)), r)
            );
          }),
          (t.serverTimestamp = function () {
            return new Ju("serverTimestamp");
          }),
          (t.setDoc = function (e, t, n) {
            e = mu(e, Iu);
            const r = mu(e.firestore, Au),
              i = Nl(e.converter, t, n);
            return Ul(r, [
              Qu(
                $u(r),
                "setDoc",
                e._key,
                i,
                null !== e.converter,
                n
              ).toMutation(e._key, pr.none()),
            ]);
          }),
          (t.setIndexConfiguration = function (e, t) {
            var n;
            const r = ku((e = mu(e, Au)));
            if (
              !r._uninitializedComponentsProvider ||
              "memory" ===
                (null === (n = r._uninitializedComponentsProvider) ||
                void 0 === n
                  ? void 0
                  : n._offlineKind)
            )
              return (
                g("Cannot enable indexes when persistence is disabled"),
                Promise.resolve()
              );
            const i = (function (e) {
              const t =
                  "string" == typeof e
                    ? (function (e) {
                        try {
                          return JSON.parse(e);
                        } catch (e) {
                          throw new _(
                            b.INVALID_ARGUMENT,
                            "Failed to parse JSON: " +
                              (null == e ? void 0 : e.message)
                          );
                        }
                      })(e)
                    : e,
                n = [];
              if (Array.isArray(t.indexes))
                for (const e of t.indexes) {
                  const t = eh(e, "collectionGroup"),
                    r = [];
                  if (Array.isArray(e.fields))
                    for (const t of e.fields) {
                      const e = ul("setIndexConfiguration", eh(t, "fieldPath"));
                      "CONTAINS" === t.arrayConfig
                        ? r.push(new Q(e, 2))
                        : "ASCENDING" === t.order
                        ? r.push(new Q(e, 0))
                        : "DESCENDING" === t.order && r.push(new Q(e, 1));
                    }
                  n.push(new z(z.UNKNOWN_ID, t, r, W.empty()));
                }
              return n;
            })(t);
            return (function (e, t) {
              return e.asyncQueue.enqueue(async () =>
                (async function (e, t) {
                  const n = w(e),
                    r = n.indexManager,
                    i = [];
                  return n.persistence.runTransaction(
                    "Configure indexes",
                    "readwrite",
                    (e) =>
                      r
                        .getFieldIndexes(e)
                        .next((n) =>
                          (function (e, t, n, r, i) {
                            (e = [...e]), (t = [...t]), e.sort(n), t.sort(n);
                            const s = e.length,
                              o = t.length;
                            let a = 0,
                              c = 0;
                            for (; a < o && c < s; ) {
                              const s = n(e[c], t[a]);
                              s < 0
                                ? i(e[c++])
                                : s > 0
                                ? r(t[a++])
                                : (a++, c++);
                            }
                            for (; a < o; ) r(t[a++]);
                            for (; c < s; ) i(e[c++]);
                          })(
                            n,
                            t,
                            $,
                            (t) => {
                              i.push(r.addFieldIndex(e, t));
                            },
                            (t) => {
                              i.push(r.deleteFieldIndex(e, t));
                            }
                          )
                        )
                        .next(() => re.waitFor(i))
                  );
                })(await nu(e), t)
              );
            })(r, i);
          }),
          (t.setLogLevel = function (e) {
            h.setLogLevel(e);
          }),
          (t.snapshotEqual = function (e, t) {
            return e instanceof Ml && t instanceof Ml
              ? e._firestore === t._firestore &&
                  e._key.isEqual(t._key) &&
                  (null === e._document
                    ? null === t._document
                    : e._document.isEqual(t._document)) &&
                  e._converter === t._converter
              : e instanceof Fl &&
                  t instanceof Fl &&
                  e._firestore === t._firestore &&
                  Tu(e.query, t.query) &&
                  e.metadata.isEqual(t.metadata) &&
                  e._snapshot.isEqual(t._snapshot);
          }),
          (t.startAfter = function (...e) {
            return Il._create("startAfter", e, !1);
          }),
          (t.startAt = function (...e) {
            return Il._create("startAt", e, !0);
          }),
          (t.sum = function (e) {
            return new Pu("sum", al("sum", e));
          }),
          (t.terminate = function (e) {
            return (
              r._removeServiceInstance(
                e.app,
                "firestore",
                e._databaseId.database
              ),
              e._delete()
            );
          }),
          (t.updateDoc = function (e, t, n, ...r) {
            e = mu(e, Iu);
            const i = mu(e.firestore, Au),
              s = $u(i);
            let a;
            return (
              (a =
                "string" == typeof (t = o.getModularInstance(t)) ||
                t instanceof Fu
                  ? tl(s, "updateDoc", e._key, t, n, r)
                  : el(s, "updateDoc", e._key, t)),
              Ul(i, [a.toMutation(e._key, pr.exists(!0))])
            );
          }),
          (t.waitForPendingWrites = function (e) {
            return (function (e) {
              const t = new I();
              return (
                e.asyncQueue.enqueueAndForget(async () =>
                  (async function (e, t) {
                    const n = w(e);
                    Ia(n.remoteStore) ||
                      f(
                        "SyncEngine",
                        "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                      );
                    try {
                      const e = await (function (e) {
                        const t = w(e);
                        return t.persistence.runTransaction(
                          "Get highest unacknowledged batch id",
                          "readonly",
                          (e) =>
                            t.mutationQueue.getHighestUnacknowledgedBatchId(e)
                        );
                      })(n.localStore);
                      if (-1 === e) return void t.resolve();
                      const r = n.ga.get(e) || [];
                      r.push(t), n.ga.set(e, r);
                    } catch (e) {
                      const n = za(
                        e,
                        "Initialization of waitForPendingWrites() operation failed"
                      );
                      t.reject(n);
                    }
                  })(await iu(e), t)
                ),
                t.promise
              );
            })(ku((e = mu(e, Au))));
          }),
          (t.where = function (e, t, n) {
            const r = t,
              i = pl("where", e);
            return vl._create(i, r, n);
          }),
          (t.writeBatch = function (e) {
            return ku((e = mu(e, Au))), new Xl(e, (t) => Ul(e, t));
          });
      },
      664: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r,
          i,
          s = n(556),
          o = [];
        (t.LogLevel = void 0),
          ((i = t.LogLevel || (t.LogLevel = {}))[(i.DEBUG = 0)] = "DEBUG"),
          (i[(i.VERBOSE = 1)] = "VERBOSE"),
          (i[(i.INFO = 2)] = "INFO"),
          (i[(i.WARN = 3)] = "WARN"),
          (i[(i.ERROR = 4)] = "ERROR"),
          (i[(i.SILENT = 5)] = "SILENT");
        var a = {
            debug: t.LogLevel.DEBUG,
            verbose: t.LogLevel.VERBOSE,
            info: t.LogLevel.INFO,
            warn: t.LogLevel.WARN,
            error: t.LogLevel.ERROR,
            silent: t.LogLevel.SILENT,
          },
          c = t.LogLevel.INFO,
          u =
            (((r = {})[t.LogLevel.DEBUG] = "log"),
            (r[t.LogLevel.VERBOSE] = "log"),
            (r[t.LogLevel.INFO] = "info"),
            (r[t.LogLevel.WARN] = "warn"),
            (r[t.LogLevel.ERROR] = "error"),
            r),
          l = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
              n[r - 2] = arguments[r];
            if (!(t < e.logLevel)) {
              var i = new Date().toISOString(),
                o = u[t];
              if (!o)
                throw new Error(
                  "Attempted to log a message with an invalid logType (value: ".concat(
                    t,
                    ")"
                  )
                );
              console[o].apply(
                console,
                s.__spreadArray(
                  ["[".concat(i, "]  ").concat(e.name, ":")],
                  n,
                  !1
                )
              );
            }
          },
          h = (function () {
            function e(e) {
              (this.name = e),
                (this._logLevel = c),
                (this._logHandler = l),
                (this._userLogHandler = null),
                o.push(this);
            }
            return (
              Object.defineProperty(e.prototype, "logLevel", {
                get: function () {
                  return this._logLevel;
                },
                set: function (e) {
                  if (!(e in t.LogLevel))
                    throw new TypeError(
                      'Invalid value "'.concat(e, '" assigned to `logLevel`')
                    );
                  this._logLevel = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.setLogLevel = function (e) {
                this._logLevel = "string" == typeof e ? a[e] : e;
              }),
              Object.defineProperty(e.prototype, "logHandler", {
                get: function () {
                  return this._logHandler;
                },
                set: function (e) {
                  if ("function" != typeof e)
                    throw new TypeError(
                      "Value assigned to `logHandler` must be a function"
                    );
                  this._logHandler = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "userLogHandler", {
                get: function () {
                  return this._userLogHandler;
                },
                set: function (e) {
                  this._userLogHandler = e;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.debug = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                this._userLogHandler &&
                  this._userLogHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.DEBUG], e, !1)
                  ),
                  this._logHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.DEBUG], e, !1)
                  );
              }),
              (e.prototype.log = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                this._userLogHandler &&
                  this._userLogHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.VERBOSE], e, !1)
                  ),
                  this._logHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.VERBOSE], e, !1)
                  );
              }),
              (e.prototype.info = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                this._userLogHandler &&
                  this._userLogHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.INFO], e, !1)
                  ),
                  this._logHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.INFO], e, !1)
                  );
              }),
              (e.prototype.warn = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                this._userLogHandler &&
                  this._userLogHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.WARN], e, !1)
                  ),
                  this._logHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.WARN], e, !1)
                  );
              }),
              (e.prototype.error = function () {
                for (var e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n];
                this._userLogHandler &&
                  this._userLogHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.ERROR], e, !1)
                  ),
                  this._logHandler.apply(
                    this,
                    s.__spreadArray([this, t.LogLevel.ERROR], e, !1)
                  );
              }),
              e
            );
          })();
        (t.Logger = h),
          (t.setLogLevel = function (e) {
            o.forEach(function (t) {
              t.setLogLevel(e);
            });
          }),
          (t.setUserLogHandler = function (e, n) {
            for (
              var r = function (r) {
                  var i = null;
                  n && n.level && (i = a[n.level]),
                    (r.userLogHandler =
                      null === e
                        ? null
                        : function (n, r) {
                            for (var s = [], o = 2; o < arguments.length; o++)
                              s[o - 2] = arguments[o];
                            var a = s
                              .map(function (e) {
                                if (null == e) return null;
                                if ("string" == typeof e) return e;
                                if (
                                  "number" == typeof e ||
                                  "boolean" == typeof e
                                )
                                  return e.toString();
                                if (e instanceof Error) return e.message;
                                try {
                                  return JSON.stringify(e);
                                } catch (e) {
                                  return null;
                                }
                              })
                              .filter(function (e) {
                                return e;
                              })
                              .join(" ");
                            r >= (null != i ? i : n.logLevel) &&
                              e({
                                level: t.LogLevel[r].toLowerCase(),
                                message: a,
                                args: s,
                                type: n.name,
                              });
                          });
                },
                i = 0,
                s = o;
              i < s.length;
              i++
            )
              r(s[i]);
          });
      },
      766: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = {
            NODE_CLIENT: !1,
            NODE_ADMIN: !1,
            SDK_VERSION: "${JSCORE_VERSION}",
          },
          i = function (e, t) {
            if (!e) throw s(t);
          },
          s = function (e) {
            return new Error(
              "Firebase Database (" +
                r.SDK_VERSION +
                ") INTERNAL ASSERT FAILED: " +
                e
            );
          },
          o = function (e) {
            const t = [];
            let n = 0;
            for (let r = 0; r < e.length; r++) {
              let i = e.charCodeAt(r);
              i < 128
                ? (t[n++] = i)
                : i < 2048
                ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
                : 55296 == (64512 & i) &&
                  r + 1 < e.length &&
                  56320 == (64512 & e.charCodeAt(r + 1))
                ? ((i =
                    65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
                  (t[n++] = (i >> 18) | 240),
                  (t[n++] = ((i >> 12) & 63) | 128),
                  (t[n++] = ((i >> 6) & 63) | 128),
                  (t[n++] = (63 & i) | 128))
                : ((t[n++] = (i >> 12) | 224),
                  (t[n++] = ((i >> 6) & 63) | 128),
                  (t[n++] = (63 & i) | 128));
            }
            return t;
          },
          a = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + "+/=";
            },
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + "-_.";
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray(e, t) {
              if (!Array.isArray(e))
                throw Error("encodeByteArray takes an array as a parameter");
              this.init_();
              const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                r = [];
              for (let t = 0; t < e.length; t += 3) {
                const i = e[t],
                  s = t + 1 < e.length,
                  o = s ? e[t + 1] : 0,
                  a = t + 2 < e.length,
                  c = a ? e[t + 2] : 0,
                  u = i >> 2,
                  l = ((3 & i) << 4) | (o >> 4);
                let h = ((15 & o) << 2) | (c >> 6),
                  d = 63 & c;
                a || ((d = 64), s || (h = 64)), r.push(n[u], n[l], n[h], n[d]);
              }
              return r.join("");
            },
            encodeString(e, t) {
              return this.HAS_NATIVE_SUPPORT && !t
                ? btoa(e)
                : this.encodeByteArray(o(e), t);
            },
            decodeString(e, t) {
              return this.HAS_NATIVE_SUPPORT && !t
                ? atob(e)
                : (function (e) {
                    const t = [];
                    let n = 0,
                      r = 0;
                    for (; n < e.length; ) {
                      const i = e[n++];
                      if (i < 128) t[r++] = String.fromCharCode(i);
                      else if (i > 191 && i < 224) {
                        const s = e[n++];
                        t[r++] = String.fromCharCode(
                          ((31 & i) << 6) | (63 & s)
                        );
                      } else if (i > 239 && i < 365) {
                        const s =
                          (((7 & i) << 18) |
                            ((63 & e[n++]) << 12) |
                            ((63 & e[n++]) << 6) |
                            (63 & e[n++])) -
                          65536;
                        (t[r++] = String.fromCharCode(55296 + (s >> 10))),
                          (t[r++] = String.fromCharCode(56320 + (1023 & s)));
                      } else {
                        const s = e[n++],
                          o = e[n++];
                        t[r++] = String.fromCharCode(
                          ((15 & i) << 12) | ((63 & s) << 6) | (63 & o)
                        );
                      }
                    }
                    return t.join("");
                  })(this.decodeStringToByteArray(e, t));
            },
            decodeStringToByteArray(e, t) {
              this.init_();
              const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                r = [];
              for (let t = 0; t < e.length; ) {
                const i = n[e.charAt(t++)],
                  s = t < e.length ? n[e.charAt(t)] : 0;
                ++t;
                const o = t < e.length ? n[e.charAt(t)] : 64;
                ++t;
                const a = t < e.length ? n[e.charAt(t)] : 64;
                if ((++t, null == i || null == s || null == o || null == a))
                  throw new c();
                const u = (i << 2) | (s >> 4);
                if ((r.push(u), 64 !== o)) {
                  const e = ((s << 4) & 240) | (o >> 2);
                  if ((r.push(e), 64 !== a)) {
                    const e = ((o << 6) & 192) | a;
                    r.push(e);
                  }
                }
              }
              return r;
            },
            init_() {
              if (!this.byteToCharMap_) {
                (this.byteToCharMap_ = {}),
                  (this.charToByteMap_ = {}),
                  (this.byteToCharMapWebSafe_ = {}),
                  (this.charToByteMapWebSafe_ = {});
                for (let e = 0; e < this.ENCODED_VALS.length; e++)
                  (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                    (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                    (this.byteToCharMapWebSafe_[e] =
                      this.ENCODED_VALS_WEBSAFE.charAt(e)),
                    (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                      e),
                    e >= this.ENCODED_VALS_BASE.length &&
                      ((this.charToByteMap_[
                        this.ENCODED_VALS_WEBSAFE.charAt(e)
                      ] = e),
                      (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                        e));
              }
            },
          };
        class c extends Error {
          constructor() {
            super(...arguments), (this.name = "DecodeBase64StringError");
          }
        }
        const u = function (e) {
            const t = o(e);
            return a.encodeByteArray(t, !0);
          },
          l = function (e) {
            return u(e).replace(/\./g, "");
          },
          h = function (e) {
            try {
              return a.decodeString(e, !0);
            } catch (e) {
              console.error("base64Decode failed: ", e);
            }
            return null;
          };
        function d(e, t) {
          if (!(t instanceof Object)) return t;
          switch (t.constructor) {
            case Date:
              return new Date(t.getTime());
            case Object:
              void 0 === e && (e = {});
              break;
            case Array:
              e = [];
              break;
            default:
              return t;
          }
          for (const n in t)
            t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = d(e[n], t[n]));
          return e;
        }
        function f() {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== n.g) return n.g;
          throw new Error("Unable to locate global object.");
        }
        const p = () => {
            try {
              return (
                f().__FIREBASE_DEFAULTS__ ||
                (() => {
                  if ("undefined" == typeof process || void 0 === process.env)
                    return;
                  const e = process.env.__FIREBASE_DEFAULTS__;
                  return e ? JSON.parse(e) : void 0;
                })() ||
                (() => {
                  if ("undefined" == typeof document) return;
                  let e;
                  try {
                    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
                  } catch (e) {
                    return;
                  }
                  const t = e && h(e[1]);
                  return t && JSON.parse(t);
                })()
              );
            } catch (e) {
              return void console.info(
                `Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`
              );
            }
          },
          g = (e) => {
            var t, n;
            return null ===
              (n =
                null === (t = p()) || void 0 === t
                  ? void 0
                  : t.emulatorHosts) || void 0 === n
              ? void 0
              : n[e];
          };
        class m {
          constructor() {
            (this.reject = () => {}),
              (this.resolve = () => {}),
              (this.promise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          wrapCallback(e) {
            return (t, n) => {
              t ? this.reject(t) : this.resolve(n),
                "function" == typeof e &&
                  (this.promise.catch(() => {}),
                  1 === e.length ? e(t) : e(t, n));
            };
          }
        }
        function y() {
          return "undefined" != typeof navigator &&
            "string" == typeof navigator.userAgent
            ? navigator.userAgent
            : "";
        }
        function v() {
          var e;
          const t =
            null === (e = p()) || void 0 === e ? void 0 : e.forceEnvironment;
          if ("node" === t) return !0;
          if ("browser" === t) return !1;
          try {
            return (
              "[object process]" === Object.prototype.toString.call(n.g.process)
            );
          } catch (e) {
            return !1;
          }
        }
        class w extends Error {
          constructor(e, t, n) {
            super(t),
              (this.code = e),
              (this.customData = n),
              (this.name = "FirebaseError"),
              Object.setPrototypeOf(this, w.prototype),
              Error.captureStackTrace &&
                Error.captureStackTrace(this, b.prototype.create);
          }
        }
        class b {
          constructor(e, t, n) {
            (this.service = e), (this.serviceName = t), (this.errors = n);
          }
          create(e, ...t) {
            const n = t[0] || {},
              r = `${this.service}/${e}`,
              i = this.errors[e],
              s = i
                ? (function (e, t) {
                    return e.replace(_, (e, n) => {
                      const r = t[n];
                      return null != r ? String(r) : `<${n}?>`;
                    });
                  })(i, n)
                : "Error",
              o = `${this.serviceName}: ${s} (${r}).`;
            return new w(r, o, n);
          }
        }
        const _ = /\{\$([^}]+)}/g;
        function I(e) {
          return JSON.parse(e);
        }
        const E = function (e) {
          let t = {},
            n = {},
            r = {},
            i = "";
          try {
            const s = e.split(".");
            (t = I(h(s[0]) || "")),
              (n = I(h(s[1]) || "")),
              (i = s[2]),
              (r = n.d || {}),
              delete n.d;
          } catch (e) {}
          return { header: t, claims: n, data: r, signature: i };
        };
        function S(e) {
          return null !== e && "object" == typeof e;
        }
        class T {
          constructor(e, t) {
            (this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = Promise.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = t),
              this.task
                .then(() => {
                  e(this);
                })
                .catch((e) => {
                  this.error(e);
                });
          }
          next(e) {
            this.forEachObserver((t) => {
              t.next(e);
            });
          }
          error(e) {
            this.forEachObserver((t) => {
              t.error(e);
            }),
              this.close(e);
          }
          complete() {
            this.forEachObserver((e) => {
              e.complete();
            }),
              this.close();
          }
          subscribe(e, t, n) {
            let r;
            if (void 0 === e && void 0 === t && void 0 === n)
              throw new Error("Missing Observer.");
            (r = (function (e, t) {
              if ("object" != typeof e || null === e) return !1;
              for (const t of ["next", "error", "complete"])
                if (t in e && "function" == typeof e[t]) return !0;
              return !1;
            })(e)
              ? e
              : { next: e, error: t, complete: n }),
              void 0 === r.next && (r.next = x),
              void 0 === r.error && (r.error = x),
              void 0 === r.complete && (r.complete = x);
            const i = this.unsubscribeOne.bind(this, this.observers.length);
            return (
              this.finalized &&
                this.task.then(() => {
                  try {
                    this.finalError ? r.error(this.finalError) : r.complete();
                  } catch (e) {}
                }),
              this.observers.push(r),
              i
            );
          }
          unsubscribeOne(e) {
            void 0 !== this.observers &&
              void 0 !== this.observers[e] &&
              (delete this.observers[e],
              (this.observerCount -= 1),
              0 === this.observerCount &&
                void 0 !== this.onNoObservers &&
                this.onNoObservers(this));
          }
          forEachObserver(e) {
            if (!this.finalized)
              for (let t = 0; t < this.observers.length; t++)
                this.sendOne(t, e);
          }
          sendOne(e, t) {
            this.task.then(() => {
              if (void 0 !== this.observers && void 0 !== this.observers[e])
                try {
                  t(this.observers[e]);
                } catch (e) {
                  "undefined" != typeof console &&
                    console.error &&
                    console.error(e);
                }
            });
          }
          close(e) {
            this.finalized ||
              ((this.finalized = !0),
              void 0 !== e && (this.finalError = e),
              this.task.then(() => {
                (this.observers = void 0), (this.onNoObservers = void 0);
              }));
          }
        }
        function x() {}
        function C(e, t) {
          return `${e} failed: ${t} argument `;
        }
        const D = 144e5;
        (t.CONSTANTS = r),
          (t.DecodeBase64StringError = c),
          (t.Deferred = m),
          (t.ErrorFactory = b),
          (t.FirebaseError = w),
          (t.MAX_VALUE_MILLIS = D),
          (t.RANDOM_FACTOR = 0.5),
          (t.Sha1 = class {
            constructor() {
              (this.chain_ = []),
                (this.buf_ = []),
                (this.W_ = []),
                (this.pad_ = []),
                (this.inbuf_ = 0),
                (this.total_ = 0),
                (this.blockSize = 64),
                (this.pad_[0] = 128);
              for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
              this.reset();
            }
            reset() {
              (this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0);
            }
            compress_(e, t) {
              t || (t = 0);
              const n = this.W_;
              if ("string" == typeof e)
                for (let r = 0; r < 16; r++)
                  (n[r] =
                    (e.charCodeAt(t) << 24) |
                    (e.charCodeAt(t + 1) << 16) |
                    (e.charCodeAt(t + 2) << 8) |
                    e.charCodeAt(t + 3)),
                    (t += 4);
              else
                for (let r = 0; r < 16; r++)
                  (n[r] =
                    (e[t] << 24) |
                    (e[t + 1] << 16) |
                    (e[t + 2] << 8) |
                    e[t + 3]),
                    (t += 4);
              for (let e = 16; e < 80; e++) {
                const t = n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16];
                n[e] = 4294967295 & ((t << 1) | (t >>> 31));
              }
              let r,
                i,
                s = this.chain_[0],
                o = this.chain_[1],
                a = this.chain_[2],
                c = this.chain_[3],
                u = this.chain_[4];
              for (let e = 0; e < 80; e++) {
                e < 40
                  ? e < 20
                    ? ((r = c ^ (o & (a ^ c))), (i = 1518500249))
                    : ((r = o ^ a ^ c), (i = 1859775393))
                  : e < 60
                  ? ((r = (o & a) | (c & (o | a))), (i = 2400959708))
                  : ((r = o ^ a ^ c), (i = 3395469782));
                const t =
                  (((s << 5) | (s >>> 27)) + r + u + i + n[e]) & 4294967295;
                (u = c),
                  (c = a),
                  (a = 4294967295 & ((o << 30) | (o >>> 2))),
                  (o = s),
                  (s = t);
              }
              (this.chain_[0] = (this.chain_[0] + s) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + o) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + a) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + c) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + u) & 4294967295);
            }
            update(e, t) {
              if (null == e) return;
              void 0 === t && (t = e.length);
              const n = t - this.blockSize;
              let r = 0;
              const i = this.buf_;
              let s = this.inbuf_;
              for (; r < t; ) {
                if (0 === s)
                  for (; r <= n; ) this.compress_(e, r), (r += this.blockSize);
                if ("string" == typeof e) {
                  for (; r < t; )
                    if (
                      ((i[s] = e.charCodeAt(r)), ++s, ++r, s === this.blockSize)
                    ) {
                      this.compress_(i), (s = 0);
                      break;
                    }
                } else
                  for (; r < t; )
                    if (((i[s] = e[r]), ++s, ++r, s === this.blockSize)) {
                      this.compress_(i), (s = 0);
                      break;
                    }
              }
              (this.inbuf_ = s), (this.total_ += t);
            }
            digest() {
              const e = [];
              let t = 8 * this.total_;
              this.inbuf_ < 56
                ? this.update(this.pad_, 56 - this.inbuf_)
                : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
              for (let e = this.blockSize - 1; e >= 56; e--)
                (this.buf_[e] = 255 & t), (t /= 256);
              this.compress_(this.buf_);
              let n = 0;
              for (let t = 0; t < 5; t++)
                for (let r = 24; r >= 0; r -= 8)
                  (e[n] = (this.chain_[t] >> r) & 255), ++n;
              return e;
            }
          }),
          (t.areCookiesEnabled = function () {
            return !(
              "undefined" == typeof navigator || !navigator.cookieEnabled
            );
          }),
          (t.assert = i),
          (t.assertionError = s),
          (t.async = function (e, t) {
            return (...n) => {
              Promise.resolve(!0)
                .then(() => {
                  e(...n);
                })
                .catch((e) => {
                  t && t(e);
                });
            };
          }),
          (t.base64 = a),
          (t.base64Decode = h),
          (t.base64Encode = u),
          (t.base64urlEncodeWithoutPadding = l),
          (t.calculateBackoffMillis = function (e, t = 1e3, n = 2) {
            const r = t * Math.pow(n, e),
              i = Math.round(0.5 * r * (Math.random() - 0.5) * 2);
            return Math.min(D, r + i);
          }),
          (t.contains = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.createMockUserToken = function (e, t) {
            if (e.uid)
              throw new Error(
                'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
              );
            const n = t || "demo-project",
              r = e.iat || 0,
              i = e.sub || e.user_id;
            if (!i)
              throw new Error(
                "mockUserToken must contain 'sub' or 'user_id' field!"
              );
            const s = Object.assign(
              {
                iss: `https://securetoken.google.com/${n}`,
                aud: n,
                iat: r,
                exp: r + 3600,
                auth_time: r,
                sub: i,
                user_id: i,
                firebase: { sign_in_provider: "custom", identities: {} },
              },
              e
            );
            return [
              l(JSON.stringify({ alg: "none", type: "JWT" })),
              l(JSON.stringify(s)),
              "",
            ].join(".");
          }),
          (t.createSubscribe = function (e, t) {
            const n = new T(e, t);
            return n.subscribe.bind(n);
          }),
          (t.decode = E),
          (t.deepCopy = function (e) {
            return d(void 0, e);
          }),
          (t.deepEqual = function e(t, n) {
            if (t === n) return !0;
            const r = Object.keys(t),
              i = Object.keys(n);
            for (const s of r) {
              if (!i.includes(s)) return !1;
              const r = t[s],
                o = n[s];
              if (S(r) && S(o)) {
                if (!e(r, o)) return !1;
              } else if (r !== o) return !1;
            }
            for (const e of i) if (!r.includes(e)) return !1;
            return !0;
          }),
          (t.deepExtend = d),
          (t.errorPrefix = C),
          (t.extractQuerystring = function (e) {
            const t = e.indexOf("?");
            if (!t) return "";
            const n = e.indexOf("#", t);
            return e.substring(t, n > 0 ? n : void 0);
          }),
          (t.getDefaultAppConfig = () => {
            var e;
            return null === (e = p()) || void 0 === e ? void 0 : e.config;
          }),
          (t.getDefaultEmulatorHost = g),
          (t.getDefaultEmulatorHostnameAndPort = (e) => {
            const t = g(e);
            if (!t) return;
            const n = t.lastIndexOf(":");
            if (n <= 0 || n + 1 === t.length)
              throw new Error(
                `Invalid host ${t} with no separate hostname and port!`
              );
            const r = parseInt(t.substring(n + 1), 10);
            return "[" === t[0]
              ? [t.substring(1, n - 1), r]
              : [t.substring(0, n), r];
          }),
          (t.getDefaults = p),
          (t.getExperimentalSetting = (e) => {
            var t;
            return null === (t = p()) || void 0 === t ? void 0 : t[`_${e}`];
          }),
          (t.getGlobal = f),
          (t.getModularInstance = function (e) {
            return e && e._delegate ? e._delegate : e;
          }),
          (t.getUA = y),
          (t.isAdmin = function (e) {
            const t = E(e).claims;
            return "object" == typeof t && !0 === t.admin;
          }),
          (t.isBrowser = function () {
            return "object" == typeof self && self.self === self;
          }),
          (t.isBrowserExtension = function () {
            const e =
              "object" == typeof chrome
                ? chrome.runtime
                : "object" == typeof browser
                ? browser.runtime
                : void 0;
            return "object" == typeof e && void 0 !== e.id;
          }),
          (t.isElectron = function () {
            return y().indexOf("Electron/") >= 0;
          }),
          (t.isEmpty = function (e) {
            for (const t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0;
          }),
          (t.isIE = function () {
            const e = y();
            return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
          }),
          (t.isIndexedDBAvailable = function () {
            try {
              return "object" == typeof indexedDB;
            } catch (e) {
              return !1;
            }
          }),
          (t.isMobileCordova = function () {
            return (
              "undefined" != typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())
            );
          }),
          (t.isNode = v),
          (t.isNodeSdk = function () {
            return !0 === r.NODE_CLIENT || !0 === r.NODE_ADMIN;
          }),
          (t.isReactNative = function () {
            return (
              "object" == typeof navigator &&
              "ReactNative" === navigator.product
            );
          }),
          (t.isSafari = function () {
            return (
              !v() &&
              navigator.userAgent.includes("Safari") &&
              !navigator.userAgent.includes("Chrome")
            );
          }),
          (t.isUWP = function () {
            return y().indexOf("MSAppHost/") >= 0;
          }),
          (t.isValidFormat = function (e) {
            const t = E(e).claims;
            return !!t && "object" == typeof t && t.hasOwnProperty("iat");
          }),
          (t.isValidTimestamp = function (e) {
            const t = E(e).claims,
              n = Math.floor(new Date().getTime() / 1e3);
            let r = 0,
              i = 0;
            return (
              "object" == typeof t &&
                (t.hasOwnProperty("nbf")
                  ? (r = t.nbf)
                  : t.hasOwnProperty("iat") && (r = t.iat),
                (i = t.hasOwnProperty("exp") ? t.exp : r + 86400)),
              !!n && !!r && !!i && n >= r && n <= i
            );
          }),
          (t.issuedAtTime = function (e) {
            const t = E(e).claims;
            return "object" == typeof t && t.hasOwnProperty("iat")
              ? t.iat
              : null;
          }),
          (t.jsonEval = I),
          (t.map = function (e, t, n) {
            const r = {};
            for (const i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                (r[i] = t.call(n, e[i], i, e));
            return r;
          }),
          (t.ordinal = function (e) {
            return Number.isFinite(e)
              ? e +
                  (function (e) {
                    const t = (e = Math.abs(e)) % 100;
                    if (t >= 10 && t <= 20) return "th";
                    const n = e % 10;
                    return 1 === n
                      ? "st"
                      : 2 === n
                      ? "nd"
                      : 3 === n
                      ? "rd"
                      : "th";
                  })(e)
              : `${e}`;
          }),
          (t.promiseWithTimeout = function (e, t = 2e3) {
            const n = new m();
            return (
              setTimeout(() => n.reject("timeout!"), t),
              e.then(n.resolve, n.reject),
              n.promise
            );
          }),
          (t.querystring = function (e) {
            const t = [];
            for (const [n, r] of Object.entries(e))
              Array.isArray(r)
                ? r.forEach((e) => {
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
                  })
                : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
            return t.length ? "&" + t.join("&") : "";
          }),
          (t.querystringDecode = function (e) {
            const t = {};
            return (
              e
                .replace(/^\?/, "")
                .split("&")
                .forEach((e) => {
                  if (e) {
                    const [n, r] = e.split("=");
                    t[decodeURIComponent(n)] = decodeURIComponent(r);
                  }
                }),
              t
            );
          }),
          (t.safeGet = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
          }),
          (t.stringLength = function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e.charCodeAt(n);
              r < 128
                ? t++
                : r < 2048
                ? (t += 2)
                : r >= 55296 && r <= 56319
                ? ((t += 4), n++)
                : (t += 3);
            }
            return t;
          }),
          (t.stringToByteArray = function (e) {
            const t = [];
            let n = 0;
            for (let r = 0; r < e.length; r++) {
              let s = e.charCodeAt(r);
              if (s >= 55296 && s <= 56319) {
                const t = s - 55296;
                r++,
                  i(r < e.length, "Surrogate pair missing trail surrogate."),
                  (s = 65536 + (t << 10) + (e.charCodeAt(r) - 56320));
              }
              s < 128
                ? (t[n++] = s)
                : s < 2048
                ? ((t[n++] = (s >> 6) | 192), (t[n++] = (63 & s) | 128))
                : s < 65536
                ? ((t[n++] = (s >> 12) | 224),
                  (t[n++] = ((s >> 6) & 63) | 128),
                  (t[n++] = (63 & s) | 128))
                : ((t[n++] = (s >> 18) | 240),
                  (t[n++] = ((s >> 12) & 63) | 128),
                  (t[n++] = ((s >> 6) & 63) | 128),
                  (t[n++] = (63 & s) | 128));
            }
            return t;
          }),
          (t.stringify = function (e) {
            return JSON.stringify(e);
          }),
          (t.uuidv4 = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              (e) => {
                const t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (t.validateArgCount = function (e, t, n, r) {
            let i;
            if (
              (r < t
                ? (i = "at least " + t)
                : r > n && (i = 0 === n ? "none" : "no more than " + n),
              i)
            )
              throw new Error(
                e +
                  " failed: Was called with " +
                  r +
                  (1 === r ? " argument." : " arguments.") +
                  " Expects " +
                  i +
                  "."
              );
          }),
          (t.validateCallback = function (e, t, n, r) {
            if ((!r || n) && "function" != typeof n)
              throw new Error(C(e, t) + "must be a valid function.");
          }),
          (t.validateContextObject = function (e, t, n, r) {
            if ((!r || n) && ("object" != typeof n || null === n))
              throw new Error(C(e, t) + "must be a valid context object.");
          }),
          (t.validateIndexedDBOpenable = function () {
            return new Promise((e, t) => {
              try {
                let n = !0;
                const r =
                    "validate-browser-context-for-indexeddb-analytics-module",
                  i = self.indexedDB.open(r);
                (i.onsuccess = () => {
                  i.result.close(),
                    n || self.indexedDB.deleteDatabase(r),
                    e(!0);
                }),
                  (i.onupgradeneeded = () => {
                    n = !1;
                  }),
                  (i.onerror = () => {
                    var e;
                    t(
                      (null === (e = i.error) || void 0 === e
                        ? void 0
                        : e.message) || ""
                    );
                  });
              } catch (e) {
                t(e);
              }
            });
          }),
          (t.validateNamespace = function (e, t, n) {
            if ((!n || t) && "string" != typeof t)
              throw new Error(
                C(e, "namespace") + "must be a valid firebase namespace."
              );
          });
      },
      921: (e, t, n) => {
        (function () {
          var t;
          function r(e) {
            var t = 0;
            return function () {
              return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
            };
          }
          function i(e) {
            var t =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              e[Symbol.iterator];
            if (t) return t.call(e);
            if ("number" == typeof e.length) return { next: r(e) };
            throw Error(String(e) + " is not an iterable or ArrayLike");
          }
          var s,
            o =
              "function" == typeof Object.create
                ? Object.create
                : function (e) {
                    function t() {}
                    return (t.prototype = e), new t();
                  },
            a =
              "function" == typeof Object.defineProperties
                ? Object.defineProperty
                : function (e, t, n) {
                    return (
                      e == Array.prototype ||
                        e == Object.prototype ||
                        (e[t] = n.value),
                      e
                    );
                  },
            c = (function (e) {
              e = [
                "object" == typeof globalThis && globalThis,
                e,
                "object" == typeof window && window,
                "object" == typeof self && self,
                "object" == typeof n.g && n.g,
              ];
              for (var t = 0; t < e.length; ++t) {
                var r = e[t];
                if (r && r.Math == Math) return r;
              }
              throw Error("Cannot find global object");
            })(this);
          function u(e, t) {
            if (t)
              e: {
                var n = c;
                e = e.split(".");
                for (var r = 0; r < e.length - 1; r++) {
                  var i = e[r];
                  if (!(i in n)) break e;
                  n = n[i];
                }
                (t = t((r = n[(e = e[e.length - 1])]))) != r &&
                  null != t &&
                  a(n, e, { configurable: !0, writable: !0, value: t });
              }
          }
          if ("function" == typeof Object.setPrototypeOf)
            s = Object.setPrototypeOf;
          else {
            var l;
            e: {
              var h = {};
              try {
                (h.__proto__ = { a: !0 }), (l = h.a);
                break e;
              } catch (j) {}
              l = !1;
            }
            s = l
              ? function (e, t) {
                  if (((e.__proto__ = t), e.__proto__ !== t))
                    throw new TypeError(e + " is not extensible");
                  return e;
                }
              : null;
          }
          var d = s;
          function f(e) {
            return (
              ((e = { next: e })[Symbol.iterator] = function () {
                return this;
              }),
              e
            );
          }
          function p(e, t) {
            e instanceof String && (e += "");
            var n = 0,
              r = !1,
              i = {
                next: function () {
                  if (!r && n < e.length) {
                    var i = n++;
                    return { value: t(i, e[i]), done: !1 };
                  }
                  return (r = !0), { done: !0, value: void 0 };
                },
              };
            return (
              (i[Symbol.iterator] = function () {
                return i;
              }),
              i
            );
          }
          function g(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          u("Symbol", function (e) {
            function t(e, t) {
              (this.g = e),
                a(this, "description", {
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
            }
            if (e) return e;
            t.prototype.toString = function () {
              return this.g;
            };
            var n = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
              r = 0;
            return function e(i) {
              if (this instanceof e)
                throw new TypeError("Symbol is not a constructor");
              return new t(n + (i || "") + "_" + r++, i);
            };
          }),
            u("Symbol.iterator", function (e) {
              if (e) return e;
              e = Symbol("Symbol.iterator");
              for (
                var t =
                    "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
                      " "
                    ),
                  n = 0;
                n < t.length;
                n++
              ) {
                var i = c[t[n]];
                "function" == typeof i &&
                  "function" != typeof i.prototype[e] &&
                  a(i.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                      return f(r(this));
                    },
                  });
              }
              return e;
            }),
            u("Promise", function (e) {
              function t(e) {
                (this.g = 0), (this.i = void 0), (this.h = []), (this.o = !1);
                var t = this.j();
                try {
                  e(t.resolve, t.reject);
                } catch (e) {
                  t.reject(e);
                }
              }
              function n() {
                this.g = null;
              }
              function r(e) {
                return e instanceof t
                  ? e
                  : new t(function (t) {
                      t(e);
                    });
              }
              if (e) return e;
              n.prototype.h = function (e) {
                if (null == this.g) {
                  this.g = [];
                  var t = this;
                  this.i(function () {
                    t.l();
                  });
                }
                this.g.push(e);
              };
              var s = c.setTimeout;
              (n.prototype.i = function (e) {
                s(e, 0);
              }),
                (n.prototype.l = function () {
                  for (; this.g && this.g.length; ) {
                    var e = this.g;
                    this.g = [];
                    for (var t = 0; t < e.length; ++t) {
                      var n = e[t];
                      e[t] = null;
                      try {
                        n();
                      } catch (e) {
                        this.j(e);
                      }
                    }
                  }
                  this.g = null;
                }),
                (n.prototype.j = function (e) {
                  this.i(function () {
                    throw e;
                  });
                }),
                (t.prototype.j = function () {
                  function e(e) {
                    return function (r) {
                      n || ((n = !0), e.call(t, r));
                    };
                  }
                  var t = this,
                    n = !1;
                  return { resolve: e(this.B), reject: e(this.l) };
                }),
                (t.prototype.B = function (e) {
                  if (e === this)
                    this.l(new TypeError("A Promise cannot resolve to itself"));
                  else if (e instanceof t) this.D(e);
                  else {
                    e: switch (typeof e) {
                      case "object":
                        var n = null != e;
                        break e;
                      case "function":
                        n = !0;
                        break e;
                      default:
                        n = !1;
                    }
                    n ? this.A(e) : this.m(e);
                  }
                }),
                (t.prototype.A = function (e) {
                  var t = void 0;
                  try {
                    t = e.then;
                  } catch (e) {
                    return void this.l(e);
                  }
                  "function" == typeof t ? this.G(t, e) : this.m(e);
                }),
                (t.prototype.l = function (e) {
                  this.s(2, e);
                }),
                (t.prototype.m = function (e) {
                  this.s(1, e);
                }),
                (t.prototype.s = function (e, t) {
                  if (0 != this.g)
                    throw Error(
                      "Cannot settle(" +
                        e +
                        ", " +
                        t +
                        "): Promise already settled in state" +
                        this.g
                    );
                  (this.g = e),
                    (this.i = t),
                    2 === this.g && this.C(),
                    this.u();
                }),
                (t.prototype.C = function () {
                  var e = this;
                  s(function () {
                    if (e.v()) {
                      var t = c.console;
                      void 0 !== t && t.error(e.i);
                    }
                  }, 1);
                }),
                (t.prototype.v = function () {
                  if (this.o) return !1;
                  var e = c.CustomEvent,
                    t = c.Event,
                    n = c.dispatchEvent;
                  return (
                    void 0 === n ||
                    ("function" == typeof e
                      ? (e = new e("unhandledrejection", { cancelable: !0 }))
                      : "function" == typeof t
                      ? (e = new t("unhandledrejection", { cancelable: !0 }))
                      : (e =
                          c.document.createEvent(
                            "CustomEvent"
                          )).initCustomEvent("unhandledrejection", !1, !0, e),
                    (e.promise = this),
                    (e.reason = this.i),
                    n(e))
                  );
                }),
                (t.prototype.u = function () {
                  if (null != this.h) {
                    for (var e = 0; e < this.h.length; ++e) o.h(this.h[e]);
                    this.h = null;
                  }
                });
              var o = new n();
              return (
                (t.prototype.D = function (e) {
                  var t = this.j();
                  e.la(t.resolve, t.reject);
                }),
                (t.prototype.G = function (e, t) {
                  var n = this.j();
                  try {
                    e.call(t, n.resolve, n.reject);
                  } catch (e) {
                    n.reject(e);
                  }
                }),
                (t.prototype.then = function (e, n) {
                  function r(e, t) {
                    return "function" == typeof e
                      ? function (t) {
                          try {
                            i(e(t));
                          } catch (e) {
                            s(e);
                          }
                        }
                      : t;
                  }
                  var i,
                    s,
                    o = new t(function (e, t) {
                      (i = e), (s = t);
                    });
                  return this.la(r(e, i), r(n, s)), o;
                }),
                (t.prototype.catch = function (e) {
                  return this.then(void 0, e);
                }),
                (t.prototype.la = function (e, t) {
                  function n() {
                    switch (r.g) {
                      case 1:
                        e(r.i);
                        break;
                      case 2:
                        t(r.i);
                        break;
                      default:
                        throw Error("Unexpected state: " + r.g);
                    }
                  }
                  var r = this;
                  null == this.h ? o.h(n) : this.h.push(n), (this.o = !0);
                }),
                (t.resolve = r),
                (t.reject = function (e) {
                  return new t(function (t, n) {
                    n(e);
                  });
                }),
                (t.race = function (e) {
                  return new t(function (t, n) {
                    for (var s = i(e), o = s.next(); !o.done; o = s.next())
                      r(o.value).la(t, n);
                  });
                }),
                (t.all = function (e) {
                  var n = i(e),
                    s = n.next();
                  return s.done
                    ? r([])
                    : new t(function (e, t) {
                        function i(t) {
                          return function (n) {
                            (o[t] = n), 0 == --a && e(o);
                          };
                        }
                        var o = [],
                          a = 0;
                        do {
                          o.push(void 0),
                            a++,
                            r(s.value).la(i(o.length - 1), t),
                            (s = n.next());
                        } while (!s.done);
                      });
                }),
                t
              );
            }),
            u("Array.prototype.values", function (e) {
              return (
                e ||
                function () {
                  return p(this, function (e, t) {
                    return t;
                  });
                }
              );
            }),
            u("Array.prototype.keys", function (e) {
              return (
                e ||
                function () {
                  return p(this, function (e) {
                    return e;
                  });
                }
              );
            }),
            u("WeakMap", function (e) {
              function t(e) {
                if (((this.g = (u += Math.random() + 1).toString()), e)) {
                  e = i(e);
                  for (var t; !(t = e.next()).done; )
                    (t = t.value), this.set(t[0], t[1]);
                }
              }
              function n() {}
              function r(e) {
                var t = typeof e;
                return ("object" === t && null !== e) || "function" === t;
              }
              function s(e) {
                if (!g(e, c)) {
                  var t = new n();
                  a(e, c, { value: t });
                }
              }
              function o(e) {
                var t = Object[e];
                t &&
                  (Object[e] = function (e) {
                    return e instanceof n
                      ? e
                      : (Object.isExtensible(e) && s(e), t(e));
                  });
              }
              if (
                (function () {
                  if (!e || !Object.seal) return !1;
                  try {
                    var t = Object.seal({}),
                      n = Object.seal({}),
                      r = new e([
                        [t, 2],
                        [n, 3],
                      ]);
                    return (
                      2 == r.get(t) &&
                      3 == r.get(n) &&
                      (r.delete(t), r.set(n, 4), !r.has(t) && 4 == r.get(n))
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              )
                return e;
              var c = "$jscomp_hidden_" + Math.random();
              o("freeze"), o("preventExtensions"), o("seal");
              var u = 0;
              return (
                (t.prototype.set = function (e, t) {
                  if (!r(e)) throw Error("Invalid WeakMap key");
                  if ((s(e), !g(e, c))) throw Error("WeakMap key fail: " + e);
                  return (e[c][this.g] = t), this;
                }),
                (t.prototype.get = function (e) {
                  return r(e) && g(e, c) ? e[c][this.g] : void 0;
                }),
                (t.prototype.has = function (e) {
                  return r(e) && g(e, c) && g(e[c], this.g);
                }),
                (t.prototype.delete = function (e) {
                  return (
                    !!(r(e) && g(e, c) && g(e[c], this.g)) &&
                    delete e[c][this.g]
                  );
                }),
                t
              );
            }),
            u("Map", function (e) {
              function t() {
                var e = {};
                return (e.V = e.next = e.head = e);
              }
              function n(e, t) {
                var n = e.g;
                return f(function () {
                  if (n) {
                    for (; n.head != e.g; ) n = n.V;
                    for (; n.next != n.head; )
                      return (n = n.next), { done: !1, value: t(n) };
                    n = null;
                  }
                  return { done: !0, value: void 0 };
                });
              }
              function r(e, t) {
                var n = t && typeof t;
                "object" == n || "function" == n
                  ? o.has(t)
                    ? (n = o.get(t))
                    : ((n = "" + ++a), o.set(t, n))
                  : (n = "p_" + t);
                var r = e.h[n];
                if (r && g(e.h, n))
                  for (e = 0; e < r.length; e++) {
                    var i = r[e];
                    if ((t != t && i.key != i.key) || t === i.key)
                      return { id: n, list: r, index: e, K: i };
                  }
                return { id: n, list: r, index: -1, K: void 0 };
              }
              function s(e) {
                if (((this.h = {}), (this.g = t()), (this.size = 0), e)) {
                  e = i(e);
                  for (var n; !(n = e.next()).done; )
                    (n = n.value), this.set(n[0], n[1]);
                }
              }
              if (
                (function () {
                  if (
                    !e ||
                    "function" != typeof e ||
                    !e.prototype.entries ||
                    "function" != typeof Object.seal
                  )
                    return !1;
                  try {
                    var t = Object.seal({ x: 4 }),
                      n = new e(i([[t, "s"]]));
                    if (
                      "s" != n.get(t) ||
                      1 != n.size ||
                      n.get({ x: 4 }) ||
                      n.set({ x: 4 }, "t") != n ||
                      2 != n.size
                    )
                      return !1;
                    var r = n.entries(),
                      s = r.next();
                    return (
                      !s.done &&
                      s.value[0] == t &&
                      "s" == s.value[1] &&
                      !(
                        (s = r.next()).done ||
                        4 != s.value[0].x ||
                        "t" != s.value[1] ||
                        !r.next().done
                      )
                    );
                  } catch (e) {
                    return !1;
                  }
                })()
              )
                return e;
              var o = new WeakMap();
              (s.prototype.set = function (e, t) {
                var n = r(this, (e = 0 === e ? 0 : e));
                return (
                  n.list || (n.list = this.h[n.id] = []),
                  n.K
                    ? (n.K.value = t)
                    : ((n.K = {
                        next: this.g,
                        V: this.g.V,
                        head: this.g,
                        key: e,
                        value: t,
                      }),
                      n.list.push(n.K),
                      (this.g.V.next = n.K),
                      (this.g.V = n.K),
                      this.size++),
                  this
                );
              }),
                (s.prototype.delete = function (e) {
                  return !(
                    !(e = r(this, e)).K ||
                    !e.list ||
                    (e.list.splice(e.index, 1),
                    e.list.length || delete this.h[e.id],
                    (e.K.V.next = e.K.next),
                    (e.K.next.V = e.K.V),
                    (e.K.head = null),
                    this.size--,
                    0)
                  );
                }),
                (s.prototype.clear = function () {
                  (this.h = {}), (this.g = this.g.V = t()), (this.size = 0);
                }),
                (s.prototype.has = function (e) {
                  return !!r(this, e).K;
                }),
                (s.prototype.get = function (e) {
                  return (e = r(this, e).K) && e.value;
                }),
                (s.prototype.entries = function () {
                  return n(this, function (e) {
                    return [e.key, e.value];
                  });
                }),
                (s.prototype.keys = function () {
                  return n(this, function (e) {
                    return e.key;
                  });
                }),
                (s.prototype.values = function () {
                  return n(this, function (e) {
                    return e.value;
                  });
                }),
                (s.prototype.forEach = function (e, t) {
                  for (var n, r = this.entries(); !(n = r.next()).done; )
                    (n = n.value), e.call(t, n[1], n[0], this);
                }),
                (s.prototype[Symbol.iterator] = s.prototype.entries);
              var a = 0;
              return s;
            }),
            u("Array.prototype.find", function (e) {
              return (
                e ||
                function (e, t) {
                  e: {
                    var n = this;
                    n instanceof String && (n = String(n));
                    for (var r = n.length, i = 0; i < r; i++) {
                      var s = n[i];
                      if (e.call(t, s, i, n)) {
                        e = s;
                        break e;
                      }
                    }
                    e = void 0;
                  }
                  return e;
                }
              );
            }),
            u("Array.prototype.entries", function (e) {
              return (
                e ||
                function () {
                  return p(this, function (e, t) {
                    return [e, t];
                  });
                }
              );
            }),
            u("Array.from", function (e) {
              return (
                e ||
                function (e, t, n) {
                  t =
                    null != t
                      ? t
                      : function (e) {
                          return e;
                        };
                  var r = [],
                    i =
                      "undefined" != typeof Symbol &&
                      Symbol.iterator &&
                      e[Symbol.iterator];
                  if ("function" == typeof i) {
                    e = i.call(e);
                    for (var s = 0; !(i = e.next()).done; )
                      r.push(t.call(n, i.value, s++));
                  } else
                    for (i = e.length, s = 0; s < i; s++)
                      r.push(t.call(n, e[s], s));
                  return r;
                }
              );
            }),
            u("Set", function (e) {
              function t(e) {
                if (((this.g = new Map()), e)) {
                  e = i(e);
                  for (var t; !(t = e.next()).done; ) this.add(t.value);
                }
                this.size = this.g.size;
              }
              return (function () {
                if (
                  !e ||
                  "function" != typeof e ||
                  !e.prototype.entries ||
                  "function" != typeof Object.seal
                )
                  return !1;
                try {
                  var t = Object.seal({ x: 4 }),
                    n = new e(i([t]));
                  if (
                    !n.has(t) ||
                    1 != n.size ||
                    n.add(t) != n ||
                    1 != n.size ||
                    n.add({ x: 4 }) != n ||
                    2 != n.size
                  )
                    return !1;
                  var r = n.entries(),
                    s = r.next();
                  return (
                    !s.done &&
                    s.value[0] == t &&
                    s.value[1] == t &&
                    !(s = r.next()).done &&
                    s.value[0] != t &&
                    4 == s.value[0].x &&
                    s.value[1] == s.value[0] &&
                    r.next().done
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? e
                : ((t.prototype.add = function (e) {
                    return (
                      (e = 0 === e ? 0 : e),
                      this.g.set(e, e),
                      (this.size = this.g.size),
                      this
                    );
                  }),
                  (t.prototype.delete = function (e) {
                    return (e = this.g.delete(e)), (this.size = this.g.size), e;
                  }),
                  (t.prototype.clear = function () {
                    this.g.clear(), (this.size = 0);
                  }),
                  (t.prototype.has = function (e) {
                    return this.g.has(e);
                  }),
                  (t.prototype.entries = function () {
                    return this.g.entries();
                  }),
                  (t.prototype.values = function () {
                    return this.g.values();
                  }),
                  (t.prototype.keys = t.prototype.values),
                  (t.prototype[Symbol.iterator] = t.prototype.values),
                  (t.prototype.forEach = function (e, t) {
                    var n = this;
                    this.g.forEach(function (r) {
                      return e.call(t, r, r, n);
                    });
                  }),
                  t);
            });
          var m = m || {},
            y = this || self;
          function v(e) {
            var t = typeof e;
            return (
              "array" ==
                (t =
                  "object" != t
                    ? t
                    : e
                    ? Array.isArray(e)
                      ? "array"
                      : t
                    : "null") ||
              ("object" == t && "number" == typeof e.length)
            );
          }
          function w(e) {
            var t = typeof e;
            return ("object" == t && null != e) || "function" == t;
          }
          function b(e) {
            return (
              (Object.prototype.hasOwnProperty.call(e, _) && e[_]) ||
              (e[_] = ++I)
            );
          }
          var _ = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
            I = 0;
          function E(e, t, n) {
            return e.call.apply(e.bind, arguments);
          }
          function S(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
              var r = Array.prototype.slice.call(arguments, 2);
              return function () {
                var n = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(n, r), e.apply(t, n);
              };
            }
            return function () {
              return e.apply(t, arguments);
            };
          }
          function T(e, t, n) {
            return (T =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf("native code")
                ? E
                : S).apply(null, arguments);
          }
          function x(e, t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function () {
              var t = n.slice();
              return t.push.apply(t, arguments), e.apply(this, t);
            };
          }
          function C(e, t) {
            function n() {}
            (n.prototype = t.prototype),
              (e.Z = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e),
              (e.dc = function (e, n, r) {
                for (
                  var i = Array(arguments.length - 2), s = 2;
                  s < arguments.length;
                  s++
                )
                  i[s - 2] = arguments[s];
                return t.prototype[n].apply(e, i);
              });
          }
          function D() {
            0 != A && (k[b(this)] = this), (this.s = this.s), (this.o = this.o);
          }
          var A = 0,
            k = {};
          (D.prototype.s = !1),
            (D.prototype.va = function () {
              if (!this.s && ((this.s = !0), this.O(), 0 != A)) {
                var e = b(this);
                if (0 != A && this.o && 0 < this.o.length)
                  throw Error(
                    this +
                      " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
                  );
                delete k[e];
              }
            }),
            (D.prototype.O = function () {
              if (this.o) for (; this.o.length; ) this.o.shift()();
            });
          var N = Array.prototype.indexOf
            ? function (e, t) {
                return Array.prototype.indexOf.call(e, t, void 0);
              }
            : function (e, t) {
                if ("string" == typeof e)
                  return "string" != typeof t || 1 != t.length
                    ? -1
                    : e.indexOf(t, 0);
                for (var n = 0; n < e.length; n++)
                  if (n in e && e[n] === t) return n;
                return -1;
              };
          function O(e) {
            var t = e.length;
            if (0 < t) {
              for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
              return n;
            }
            return [];
          }
          function L(e, t) {
            for (var n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              if (v(r)) {
                var i = e.length || 0,
                  s = r.length || 0;
                e.length = i + s;
                for (var o = 0; o < s; o++) e[i + o] = r[o];
              } else e.push(r);
            }
          }
          function P(e, t) {
            (this.type = e),
              (this.g = this.target = t),
              (this.defaultPrevented = !1);
          }
          P.prototype.h = function () {
            this.defaultPrevented = !0;
          };
          var M = (function () {
            if (!y.addEventListener || !Object.defineProperty) return !1;
            var e = !1,
              t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
            try {
              y.addEventListener("test", function () {}, t),
                y.removeEventListener("test", function () {}, t);
            } catch (e) {}
            return e;
          })();
          function R(e) {
            return /^[\s\xa0]*$/.test(e);
          }
          function F() {
            var e = y.navigator;
            return e && (e = e.userAgent) ? e : "";
          }
          function V(e) {
            return -1 != F().indexOf(e);
          }
          function B(e) {
            return B[" "](e), e;
          }
          B[" "] = function () {};
          var U,
            j,
            q,
            z = V("Opera"),
            G = V("Trident") || V("MSIE"),
            K = V("Edge"),
            $ = K || G,
            Q =
              V("Gecko") &&
              !(-1 != F().toLowerCase().indexOf("webkit") && !V("Edge")) &&
              !(V("Trident") || V("MSIE")) &&
              !V("Edge"),
            H = -1 != F().toLowerCase().indexOf("webkit") && !V("Edge");
          function W() {
            var e = y.document;
            return e ? e.documentMode : void 0;
          }
          e: {
            var J = "",
              X =
                ((j = F()),
                Q
                  ? /rv:([^\);]+)(\)|;)/.exec(j)
                  : K
                  ? /Edge\/([\d\.]+)/.exec(j)
                  : G
                  ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j)
                  : H
                  ? /WebKit\/(\S+)/.exec(j)
                  : z
                  ? /(?:Version)[ \/]?(\S+)/.exec(j)
                  : void 0);
            if ((X && (J = X ? X[1] : ""), G)) {
              var Y = W();
              if (null != Y && Y > parseFloat(J)) {
                U = String(Y);
                break e;
              }
            }
            U = J;
          }
          y.document && G
            ? (q = W() || parseInt(U, 10) || void 0)
            : (q = void 0);
          var Z = q;
          function ee(e, t) {
            if (
              (P.call(this, e ? e.type : ""),
              (this.relatedTarget = this.g = this.target = null),
              (this.button =
                this.screenY =
                this.screenX =
                this.clientY =
                this.clientX =
                  0),
              (this.key = ""),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.state = null),
              (this.pointerId = 0),
              (this.pointerType = ""),
              (this.i = null),
              e)
            ) {
              var n = (this.type = e.type),
                r =
                  e.changedTouches && e.changedTouches.length
                    ? e.changedTouches[0]
                    : null;
              if (
                ((this.target = e.target || e.srcElement),
                (this.g = t),
                (t = e.relatedTarget))
              ) {
                if (Q) {
                  e: {
                    try {
                      B(t.nodeName);
                      var i = !0;
                      break e;
                    } catch (e) {}
                    i = !1;
                  }
                  i || (t = null);
                }
              } else
                "mouseover" == n
                  ? (t = e.fromElement)
                  : "mouseout" == n && (t = e.toElement);
              (this.relatedTarget = t),
                r
                  ? ((this.clientX =
                      void 0 !== r.clientX ? r.clientX : r.pageX),
                    (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                    (this.screenX = r.screenX || 0),
                    (this.screenY = r.screenY || 0))
                  : ((this.clientX =
                      void 0 !== e.clientX ? e.clientX : e.pageX),
                    (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                    (this.screenX = e.screenX || 0),
                    (this.screenY = e.screenY || 0)),
                (this.button = e.button),
                (this.key = e.key || ""),
                (this.ctrlKey = e.ctrlKey),
                (this.altKey = e.altKey),
                (this.shiftKey = e.shiftKey),
                (this.metaKey = e.metaKey),
                (this.pointerId = e.pointerId || 0),
                (this.pointerType =
                  "string" == typeof e.pointerType
                    ? e.pointerType
                    : te[e.pointerType] || ""),
                (this.state = e.state),
                (this.i = e),
                e.defaultPrevented && ee.Z.h.call(this);
            }
          }
          C(ee, P);
          var te = { 2: "touch", 3: "pen", 4: "mouse" };
          ee.prototype.h = function () {
            ee.Z.h.call(this);
            var e = this.i;
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
          };
          var ne = "closure_listenable_" + ((1e6 * Math.random()) | 0),
            re = 0;
          function ie(e, t, n, r, i) {
            (this.listener = e),
              (this.proxy = null),
              (this.src = t),
              (this.type = n),
              (this.capture = !!r),
              (this.oa = i),
              (this.key = ++re),
              (this.ha = this.ka = !1);
          }
          function se(e) {
            (e.ha = !0),
              (e.listener = null),
              (e.proxy = null),
              (e.src = null),
              (e.oa = null);
          }
          function oe(e, t, n) {
            for (var r in e) t.call(n, e[r], r, e);
          }
          function ae(e) {
            var t,
              n = {};
            for (t in e) n[t] = e[t];
            return n;
          }
          var ce =
            "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
              " "
            );
          function ue(e, t) {
            for (var n, r, i = 1; i < arguments.length; i++) {
              for (n in (r = arguments[i])) e[n] = r[n];
              for (var s = 0; s < ce.length; s++)
                (n = ce[s]),
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
          }
          function le(e) {
            (this.src = e), (this.g = {}), (this.h = 0);
          }
          function he(e, t) {
            var n = t.type;
            if (n in e.g) {
              var r,
                i = e.g[n],
                s = N(i, t);
              (r = 0 <= s) && Array.prototype.splice.call(i, s, 1),
                r && (se(t), 0 == e.g[n].length && (delete e.g[n], e.h--));
            }
          }
          function de(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
              var s = e[i];
              if (!s.ha && s.listener == t && s.capture == !!n && s.oa == r)
                return i;
            }
            return -1;
          }
          le.prototype.add = function (e, t, n, r, i) {
            var s = e.toString();
            (e = this.g[s]) || ((e = this.g[s] = []), this.h++);
            var o = de(e, t, r, i);
            return (
              -1 < o
                ? ((t = e[o]), n || (t.ka = !1))
                : (((t = new ie(t, this.src, s, !!r, i)).ka = n), e.push(t)),
              t
            );
          };
          var fe = "closure_lm_" + ((1e6 * Math.random()) | 0),
            pe = {};
          function ge(e, t, n, r, i) {
            if (r && r.once) return ye(e, t, n, r, i);
            if (Array.isArray(t)) {
              for (var s = 0; s < t.length; s++) ge(e, t[s], n, r, i);
              return null;
            }
            return (
              (n = Se(n)),
              e && e[ne]
                ? e.P(t, n, w(r) ? !!r.capture : !!r, i)
                : me(e, t, n, !1, r, i)
            );
          }
          function me(e, t, n, r, i, s) {
            if (!t) throw Error("Invalid event type");
            var o = w(i) ? !!i.capture : !!i,
              a = Ie(e);
            if (
              (a || (e[fe] = a = new le(e)), (n = a.add(t, n, r, o, s)).proxy)
            )
              return n;
            if (
              ((r = (function () {
                var e = _e;
                return function t(n) {
                  return e.call(t.src, t.listener, n);
                };
              })()),
              (n.proxy = r),
              (r.src = e),
              (r.listener = n),
              e.addEventListener)
            )
              M || (i = o),
                void 0 === i && (i = !1),
                e.addEventListener(t.toString(), r, i);
            else if (e.attachEvent) e.attachEvent(be(t.toString()), r);
            else {
              if (!e.addListener || !e.removeListener)
                throw Error(
                  "addEventListener and attachEvent are unavailable."
                );
              e.addListener(r);
            }
            return n;
          }
          function ye(e, t, n, r, i) {
            if (Array.isArray(t)) {
              for (var s = 0; s < t.length; s++) ye(e, t[s], n, r, i);
              return null;
            }
            return (
              (n = Se(n)),
              e && e[ne]
                ? e.R(t, n, w(r) ? !!r.capture : !!r, i)
                : me(e, t, n, !0, r, i)
            );
          }
          function ve(e, t, n, r, i) {
            if (Array.isArray(t))
              for (var s = 0; s < t.length; s++) ve(e, t[s], n, r, i);
            else
              (r = w(r) ? !!r.capture : !!r),
                (n = Se(n)),
                e && e[ne]
                  ? ((e = e.i),
                    (t = String(t).toString()) in e.g &&
                      -1 < (n = de((s = e.g[t]), n, r, i)) &&
                      (se(s[n]),
                      Array.prototype.splice.call(s, n, 1),
                      0 == s.length && (delete e.g[t], e.h--)))
                  : e &&
                    (e = Ie(e)) &&
                    ((t = e.g[t.toString()]),
                    (e = -1),
                    t && (e = de(t, n, r, i)),
                    (n = -1 < e ? t[e] : null) && we(n));
          }
          function we(e) {
            if ("number" != typeof e && e && !e.ha) {
              var t = e.src;
              if (t && t[ne]) he(t.i, e);
              else {
                var n = e.type,
                  r = e.proxy;
                t.removeEventListener
                  ? t.removeEventListener(n, r, e.capture)
                  : t.detachEvent
                  ? t.detachEvent(be(n), r)
                  : t.addListener && t.removeListener && t.removeListener(r),
                  (n = Ie(t))
                    ? (he(n, e), 0 == n.h && ((n.src = null), (t[fe] = null)))
                    : se(e);
              }
            }
          }
          function be(e) {
            return e in pe ? pe[e] : (pe[e] = "on" + e);
          }
          function _e(e, t) {
            if (e.ha) e = !0;
            else {
              t = new ee(t, this);
              var n = e.listener,
                r = e.oa || e.src;
              e.ka && we(e), (e = n.call(r, t));
            }
            return e;
          }
          function Ie(e) {
            return (e = e[fe]) instanceof le ? e : null;
          }
          var Ee = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
          function Se(e) {
            return "function" == typeof e
              ? e
              : (e[Ee] ||
                  (e[Ee] = function (t) {
                    return e.handleEvent(t);
                  }),
                e[Ee]);
          }
          function Te() {
            D.call(this),
              (this.i = new le(this)),
              (this.T = this),
              (this.J = null);
          }
          function xe(e, t) {
            var n,
              r = e.J;
            if (r) for (n = []; r; r = r.J) n.push(r);
            if (((e = e.T), (r = t.type || t), "string" == typeof t))
              t = new P(t, e);
            else if (t instanceof P) t.target = t.target || e;
            else {
              var i = t;
              ue((t = new P(r, e)), i);
            }
            if (((i = !0), n))
              for (var s = n.length - 1; 0 <= s; s--) {
                var o = (t.g = n[s]);
                i = Ce(o, r, !0, t) && i;
              }
            if (
              ((i = Ce((o = t.g = e), r, !0, t) && i),
              (i = Ce(o, r, !1, t) && i),
              n)
            )
              for (s = 0; s < n.length; s++)
                i = Ce((o = t.g = n[s]), r, !1, t) && i;
          }
          function Ce(e, t, n, r) {
            if (!(t = e.i.g[String(t)])) return !0;
            t = t.concat();
            for (var i = !0, s = 0; s < t.length; ++s) {
              var o = t[s];
              if (o && !o.ha && o.capture == n) {
                var a = o.listener,
                  c = o.oa || o.src;
                o.ka && he(e.i, o), (i = !1 !== a.call(c, r) && i);
              }
            }
            return i && !r.defaultPrevented;
          }
          C(Te, D),
            (Te.prototype[ne] = !0),
            (Te.prototype.removeEventListener = function (e, t, n, r) {
              ve(this, e, t, n, r);
            }),
            (Te.prototype.O = function () {
              if ((Te.Z.O.call(this), this.i)) {
                var e,
                  t = this.i;
                for (e in t.g) {
                  for (var n = t.g[e], r = 0; r < n.length; r++) se(n[r]);
                  delete t.g[e], t.h--;
                }
              }
              this.J = null;
            }),
            (Te.prototype.P = function (e, t, n, r) {
              return this.i.add(String(e), t, !1, n, r);
            }),
            (Te.prototype.R = function (e, t, n, r) {
              return this.i.add(String(e), t, !0, n, r);
            });
          var De = y.JSON.stringify;
          function Ae(e, t) {
            (this.i = e), (this.j = t), (this.h = 0), (this.g = null);
          }
          function ke() {
            this.h = this.g = null;
          }
          function Ne() {
            var e = Ve,
              t = null;
            return (
              e.g &&
                ((t = e.g),
                (e.g = e.g.next),
                e.g || (e.h = null),
                (t.next = null)),
              t
            );
          }
          (Ae.prototype.get = function () {
            if (0 < this.h) {
              this.h--;
              var e = this.g;
              (this.g = e.next), (e.next = null);
            } else e = this.i();
            return e;
          }),
            (ke.prototype.add = function (e, t) {
              var n = Oe.get();
              n.set(e, t),
                this.h ? (this.h.next = n) : (this.g = n),
                (this.h = n);
            });
          var Oe = new Ae(
            function () {
              return new Le();
            },
            function (e) {
              return e.reset();
            }
          );
          function Le() {
            this.next = this.g = this.h = null;
          }
          function Pe(e) {
            var t = 1;
            e = e.split(":");
            for (var n = []; 0 < t && e.length; ) n.push(e.shift()), t--;
            return e.length && n.push(e.join(":")), n;
          }
          function Me(e) {
            y.setTimeout(function () {
              throw e;
            }, 0);
          }
          (Le.prototype.set = function (e, t) {
            (this.h = e), (this.g = t), (this.next = null);
          }),
            (Le.prototype.reset = function () {
              this.next = this.g = this.h = null;
            });
          var Re,
            Fe = !1,
            Ve = new ke();
          function Be(e, t) {
            Re ||
              (function () {
                var e = y.Promise.resolve(void 0);
                Re = function () {
                  e.then(Ue);
                };
              })(),
              Fe || (Re(), (Fe = !0)),
              Ve.add(e, t);
          }
          function Ue() {
            for (var e; (e = Ne()); ) {
              try {
                e.h.call(e.g);
              } catch (e) {
                Me(e);
              }
              var t = Oe;
              t.j(e), 100 > t.h && (t.h++, (e.next = t.g), (t.g = e));
            }
            Fe = !1;
          }
          function je(e, t) {
            Te.call(this),
              (this.h = e || 1),
              (this.g = t || y),
              (this.j = T(this.tb, this)),
              (this.l = Date.now());
          }
          function qe(e) {
            (e.ia = !1), e.U && (e.g.clearTimeout(e.U), (e.U = null));
          }
          function ze(e, t, n) {
            if ("function" == typeof e) n && (e = T(e, n));
            else {
              if (!e || "function" != typeof e.handleEvent)
                throw Error("Invalid listener argument");
              e = T(e.handleEvent, e);
            }
            return 2147483647 < Number(t) ? -1 : y.setTimeout(e, t || 0);
          }
          function Ge(e, t, n) {
            D.call(this),
              (this.m = null != n ? e.bind(n) : e),
              (this.j = t),
              (this.h = null),
              (this.i = !1),
              (this.g = null);
          }
          if (
            (C(je, Te),
            ((t = je.prototype).ia = !1),
            (t.U = null),
            (t.tb = function () {
              if (this.ia) {
                var e = Date.now() - this.l;
                0 < e && e < 0.8 * this.h
                  ? (this.U = this.g.setTimeout(this.j, this.h - e))
                  : (this.U && (this.g.clearTimeout(this.U), (this.U = null)),
                    xe(this, "tick"),
                    this.ia && (qe(this), this.start()));
              }
            }),
            (t.start = function () {
              (this.ia = !0),
                this.U ||
                  ((this.U = this.g.setTimeout(this.j, this.h)),
                  (this.l = Date.now()));
            }),
            (t.O = function () {
              je.Z.O.call(this), qe(this), delete this.g;
            }),
            (Ge.prototype = o(D.prototype)),
            (Ge.prototype.constructor = Ge),
            d)
          )
            d(Ge, D);
          else
            for (var Ke in D)
              if ("prototype" != Ke)
                if (Object.defineProperties) {
                  var $e = Object.getOwnPropertyDescriptor(D, Ke);
                  $e && Object.defineProperty(Ge, Ke, $e);
                } else Ge[Ke] = D[Ke];
          function Qe(e) {
            e.g = ze(function () {
              (e.g = null), e.i && ((e.i = !1), Qe(e));
            }, e.j);
            var t = e.h;
            (e.h = null), e.m.apply(null, t);
          }
          function He(e) {
            D.call(this), (this.h = e), (this.g = {});
          }
          (Ge.Z = D.prototype),
            (Ge.prototype.l = function (e) {
              (this.h = arguments), this.g ? (this.i = !0) : Qe(this);
            }),
            (Ge.prototype.O = function () {
              D.prototype.O.call(this),
                this.g &&
                  (y.clearTimeout(this.g),
                  (this.g = null),
                  (this.i = !1),
                  (this.h = null));
            }),
            C(He, D);
          var We = [];
          function Je(e, t, n, r) {
            Array.isArray(n) || (n && (We[0] = n.toString()), (n = We));
            for (var i = 0; i < n.length; i++) {
              var s = ge(t, n[i], r || e.handleEvent, !1, e.h || e);
              if (!s) break;
              e.g[s.key] = s;
            }
          }
          function Xe(e) {
            oe(
              e.g,
              function (e, t) {
                this.g.hasOwnProperty(t) && we(e);
              },
              e
            ),
              (e.g = {});
          }
          function Ye() {
            this.g = !0;
          }
          function Ze(e, t, n, r) {
            e.info(function () {
              return (
                "XMLHTTP TEXT (" +
                t +
                "): " +
                (function (e, t) {
                  if (!e.g) return t;
                  if (!t) return null;
                  try {
                    var n = JSON.parse(t);
                    if (n)
                      for (e = 0; e < n.length; e++)
                        if (Array.isArray(n[e])) {
                          var r = n[e];
                          if (!(2 > r.length)) {
                            var i = r[1];
                            if (Array.isArray(i) && !(1 > i.length)) {
                              var s = i[0];
                              if ("noop" != s && "stop" != s && "close" != s)
                                for (var o = 1; o < i.length; o++) i[o] = "";
                            }
                          }
                        }
                    return De(n);
                  } catch (e) {
                    return t;
                  }
                })(e, n) +
                (r ? " " + r : "")
              );
            });
          }
          (He.prototype.O = function () {
            He.Z.O.call(this), Xe(this);
          }),
            (He.prototype.handleEvent = function () {
              throw Error("EventHandler.handleEvent not implemented");
            }),
            (Ye.prototype.Ha = function () {
              this.g = !1;
            }),
            (Ye.prototype.info = function () {});
          var et = {},
            tt = null;
          function nt() {
            return (tt = tt || new Te());
          }
          function rt(e) {
            P.call(this, et.Wa, e);
          }
          function it(e) {
            var t = nt();
            xe(t, new rt(t, e));
          }
          function st(e, t) {
            P.call(this, et.STAT_EVENT, e), (this.stat = t);
          }
          function ot(e) {
            var t = nt();
            xe(t, new st(t, e));
          }
          function at(e, t) {
            P.call(this, et.Xa, e), (this.size = t);
          }
          function ct(e, t) {
            if ("function" != typeof e)
              throw Error("Fn must not be null and must be a function");
            return y.setTimeout(function () {
              e();
            }, t);
          }
          (et.Wa = "serverreachability"),
            C(rt, P),
            (et.STAT_EVENT = "statevent"),
            C(st, P),
            (et.Xa = "timingevent"),
            C(at, P);
          var ut = {
              NO_ERROR: 0,
              ub: 1,
              Hb: 2,
              Gb: 3,
              Bb: 4,
              Fb: 5,
              Ib: 6,
              Ta: 7,
              TIMEOUT: 8,
              Lb: 9,
            },
            lt = {
              zb: "complete",
              Vb: "success",
              Ua: "error",
              Ta: "abort",
              Nb: "ready",
              Ob: "readystatechange",
              TIMEOUT: "timeout",
              Jb: "incrementaldata",
              Mb: "progress",
              Cb: "downloadprogress",
              cc: "uploadprogress",
            };
          function ht() {}
          function dt(e) {
            return e.h || (e.h = e.i());
          }
          function ft() {}
          ht.prototype.h = null;
          var pt,
            gt = { OPEN: "a", yb: "b", Ua: "c", Kb: "d" };
          function mt() {
            P.call(this, "d");
          }
          function yt() {
            P.call(this, "c");
          }
          function vt() {}
          function wt(e, t, n, r) {
            (this.l = e),
              (this.j = t),
              (this.m = n),
              (this.Y = r || 1),
              (this.W = new He(this)),
              (this.R = _t),
              (e = $ ? 125 : void 0),
              (this.X = new je(e)),
              (this.I = null),
              (this.i = !1),
              (this.s =
                this.A =
                this.v =
                this.M =
                this.G =
                this.aa =
                this.B =
                  null),
              (this.D = []),
              (this.g = null),
              (this.C = 0),
              (this.o = this.u = null),
              (this.ea = -1),
              (this.J = !1),
              (this.P = 0),
              (this.N = null),
              (this.da = this.L = this.ca = this.T = !1),
              (this.h = new bt());
          }
          function bt() {
            (this.i = null), (this.g = ""), (this.h = !1);
          }
          C(mt, P),
            C(yt, P),
            C(vt, ht),
            (vt.prototype.g = function () {
              return new XMLHttpRequest();
            }),
            (vt.prototype.i = function () {
              return {};
            }),
            (pt = new vt());
          var _t = 45e3,
            It = {},
            Et = {};
          function St(e, t, n) {
            (e.M = 1), (e.v = zt(Vt(t))), (e.s = n), (e.T = !0), Tt(e, null);
          }
          function Tt(e, t) {
            (e.G = Date.now()), At(e), (e.A = Vt(e.v));
            var n = e.A,
              r = e.Y;
            Array.isArray(r) || (r = [String(r)]),
              nn(n.i, "t", r),
              (e.C = 0),
              (n = e.l.J),
              (e.h = new bt()),
              (e.g = ir(e.l, n ? t : null, !e.s)),
              0 < e.P && (e.N = new Ge(T(e.Sa, e, e.g), e.P)),
              Je(e.W, e.g, "readystatechange", e.qb),
              (t = e.I ? ae(e.I) : {}),
              e.s
                ? (e.u || (e.u = "POST"),
                  (t["Content-Type"] = "application/x-www-form-urlencoded"),
                  e.g.ja(e.A, e.u, e.s, t))
                : ((e.u = "GET"), e.g.ja(e.A, e.u, null, t)),
              it(1),
              (function (e, t, n, r, i, s) {
                e.info(function () {
                  if (e.g)
                    if (s)
                      for (
                        var o = "", a = s.split("&"), c = 0;
                        c < a.length;
                        c++
                      ) {
                        var u = a[c].split("=");
                        if (1 < u.length) {
                          var l = u[0];
                          u = u[1];
                          var h = l.split("_");
                          o =
                            2 <= h.length && "type" == h[1]
                              ? o + (l + "=") + u + "&"
                              : o + (l + "=redacted&");
                        }
                      }
                    else o = null;
                  else o = s;
                  return (
                    "XMLHTTP REQ (" +
                    r +
                    ") [attempt " +
                    i +
                    "]: " +
                    t +
                    "\n" +
                    n +
                    "\n" +
                    o
                  );
                });
              })(e.j, e.u, e.A, e.m, e.Y, e.s);
          }
          function xt(e) {
            return !!e.g && "GET" == e.u && 2 != e.M && e.l.Ka;
          }
          function Ct(e, t, n) {
            for (var r, i = !0; !e.J && e.C < n.length; ) {
              if ((r = Dt(e, n)) == Et) {
                4 == t && ((e.o = 4), ot(14), (i = !1)),
                  Ze(e.j, e.m, null, "[Incomplete Response]");
                break;
              }
              if (r == It) {
                (e.o = 4), ot(15), Ze(e.j, e.m, n, "[Invalid Chunk]"), (i = !1);
                break;
              }
              Ze(e.j, e.m, r, null), Pt(e, r);
            }
            xt(e) && r != Et && r != It && ((e.h.g = ""), (e.C = 0)),
              4 != t || 0 != n.length || e.h.h || ((e.o = 1), ot(16), (i = !1)),
              (e.i = e.i && i),
              i
                ? 0 < n.length &&
                  !e.da &&
                  ((e.da = !0),
                  (t = e.l).g == e &&
                    t.ea &&
                    !t.N &&
                    (t.l.info(
                      "Great, no buffering proxy detected. Bytes received: " +
                        n.length
                    ),
                    Jn(t),
                    (t.N = !0),
                    ot(11)))
                : (Ze(e.j, e.m, n, "[Invalid Chunked Response]"), Lt(e), Ot(e));
          }
          function Dt(e, t) {
            var n = e.C,
              r = t.indexOf("\n", n);
            return -1 == r
              ? Et
              : ((n = Number(t.substring(n, r))),
                isNaN(n)
                  ? It
                  : (r += 1) + n > t.length
                  ? Et
                  : ((t = t.slice(r, r + n)), (e.C = r + n), t));
          }
          function At(e) {
            (e.aa = Date.now() + e.R), kt(e, e.R);
          }
          function kt(e, t) {
            if (null != e.B) throw Error("WatchDog timer not null");
            e.B = ct(T(e.ob, e), t);
          }
          function Nt(e) {
            e.B && (y.clearTimeout(e.B), (e.B = null));
          }
          function Ot(e) {
            0 == e.l.H || e.J || Zn(e.l, e);
          }
          function Lt(e) {
            Nt(e);
            var t = e.N;
            t && "function" == typeof t.va && t.va(),
              (e.N = null),
              qe(e.X),
              Xe(e.W),
              e.g && ((t = e.g), (e.g = null), t.abort(), t.va());
          }
          function Pt(e, t) {
            try {
              var n = e.l;
              if (0 != n.H && (n.g == e || hn(n.i, e)))
                if (!e.L && hn(n.i, e) && 3 == n.H) {
                  try {
                    var r = n.Ma.g.parse(t);
                  } catch (e) {
                    r = null;
                  }
                  if (Array.isArray(r) && 3 == r.length) {
                    var i = r;
                    if (0 == i[0]) {
                      e: if (!n.u) {
                        if (n.g) {
                          if (!(n.g.G + 3e3 < e.G)) break e;
                          Yn(n), qn(n);
                        }
                        Wn(n), ot(18);
                      }
                    } else
                      (n.Ia = i[1]),
                        0 < n.Ia - n.X &&
                          37500 > i[2] &&
                          n.G &&
                          0 == n.A &&
                          !n.v &&
                          (n.v = ct(T(n.lb, n), 6e3));
                    if (1 >= ln(n.i) && n.ra) {
                      try {
                        n.ra();
                      } catch (e) {}
                      n.ra = void 0;
                    }
                  } else tr(n, 11);
                } else if (((e.L || n.g == e) && Yn(n), !R(t)))
                  for (i = n.Ma.g.parse(t), t = 0; t < i.length; t++) {
                    var s = i[t];
                    if (((n.X = s[0]), (s = s[1]), 2 == n.H))
                      if ("c" == s[0]) {
                        (n.L = s[1]), (n.sa = s[2]);
                        var o = s[3];
                        null != o && ((n.ua = o), n.l.info("VER=" + n.ua));
                        var a = s[4];
                        null != a && ((n.Ja = a), n.l.info("SVER=" + n.Ja));
                        var c = s[5];
                        null != c &&
                          "number" == typeof c &&
                          0 < c &&
                          ((r = 1.5 * c),
                          (n.M = r),
                          n.l.info("backChannelRequestTimeoutMs_=" + r)),
                          (r = n);
                        var u = e.g;
                        if (u) {
                          var l = u.g
                            ? u.g.getResponseHeader("X-Client-Wire-Protocol")
                            : null;
                          if (l) {
                            var h = r.i;
                            h.g ||
                              (-1 == l.indexOf("spdy") &&
                                -1 == l.indexOf("quic") &&
                                -1 == l.indexOf("h2")) ||
                              ((h.j = h.l),
                              (h.g = new Set()),
                              h.h && (dn(h, h.h), (h.h = null)));
                          }
                          if (r.D) {
                            var d = u.g
                              ? u.g.getResponseHeader("X-HTTP-Session-Id")
                              : null;
                            d && ((r.Ga = d), qt(r.I, r.D, d));
                          }
                        }
                        (n.H = 3),
                          n.h && n.h.Ea(),
                          n.ea &&
                            ((n.T = Date.now() - e.G),
                            n.l.info("Handshake RTT: " + n.T + "ms"));
                        var f = e;
                        if (
                          (((r = n).za = rr(r, r.J ? r.sa : null, r.aa)), f.L)
                        ) {
                          fn(r.i, f);
                          var p = f,
                            g = r.M;
                          g && p.setTimeout(g),
                            p.B && (Nt(p), At(p)),
                            (r.g = f);
                        } else Hn(r);
                        0 < n.j.length && Gn(n);
                      } else ("stop" != s[0] && "close" != s[0]) || tr(n, 7);
                    else
                      3 == n.H &&
                        ("stop" == s[0] || "close" == s[0]
                          ? "stop" == s[0]
                            ? tr(n, 7)
                            : jn(n)
                          : "noop" != s[0] && n.h && n.h.Da(s),
                        (n.A = 0));
                  }
              it(4);
            } catch (e) {}
          }
          function Mt(e, t) {
            if (e.forEach && "function" == typeof e.forEach)
              e.forEach(t, void 0);
            else if (v(e) || "string" == typeof e)
              Array.prototype.forEach.call(e, t, void 0);
            else
              for (
                var n = (function (e) {
                    if (e.wa && "function" == typeof e.wa) return e.wa();
                    if (!e.ba || "function" != typeof e.ba) {
                      if ("undefined" != typeof Map && e instanceof Map)
                        return Array.from(e.keys());
                      if (!("undefined" != typeof Set && e instanceof Set)) {
                        if (v(e) || "string" == typeof e) {
                          var t = [];
                          e = e.length;
                          for (var n = 0; n < e; n++) t.push(n);
                          return t;
                        }
                        for (var r in ((t = []), (n = 0), e)) t[n++] = r;
                        return t;
                      }
                    }
                  })(e),
                  r = (function (e) {
                    if (e.ba && "function" == typeof e.ba) return e.ba();
                    if (
                      ("undefined" != typeof Map && e instanceof Map) ||
                      ("undefined" != typeof Set && e instanceof Set)
                    )
                      return Array.from(e.values());
                    if ("string" == typeof e) return e.split("");
                    if (v(e)) {
                      for (var t = [], n = e.length, r = 0; r < n; r++)
                        t.push(e[r]);
                      return t;
                    }
                    for (r in ((t = []), (n = 0), e)) t[n++] = e[r];
                    return t;
                  })(e),
                  i = r.length,
                  s = 0;
                s < i;
                s++
              )
                t.call(void 0, r[s], n && n[s], e);
          }
          ((t = wt.prototype).setTimeout = function (e) {
            this.R = e;
          }),
            (t.qb = function (e) {
              e = e.target;
              var t = this.N;
              t && 3 == Mn(e) ? t.l() : this.Sa(e);
            }),
            (t.Sa = function (e) {
              try {
                if (e == this.g)
                  e: {
                    var t = Mn(this.g),
                      n = this.g.La(),
                      r = this.g.fa();
                    if (
                      !(3 > t) &&
                      (3 != t ||
                        $ ||
                        (this.g && (this.h.h || this.g.ma() || Rn(this.g))))
                    ) {
                      this.J ||
                        4 != t ||
                        7 == n ||
                        it(8 == n || 0 >= r ? 3 : 2),
                        Nt(this);
                      var i = this.g.fa();
                      this.ea = i;
                      t: if (xt(this)) {
                        var s = Rn(this.g);
                        e = "";
                        var o = s.length,
                          a = 4 == Mn(this.g);
                        if (!this.h.i) {
                          if ("undefined" == typeof TextDecoder) {
                            Lt(this), Ot(this);
                            var c = "";
                            break t;
                          }
                          this.h.i = new y.TextDecoder();
                        }
                        for (n = 0; n < o; n++)
                          (this.h.h = !0),
                            (e += this.h.i.decode(s[n], {
                              stream: a && n == o - 1,
                            }));
                        s.splice(0, o),
                          (this.h.g += e),
                          (this.C = 0),
                          (c = this.h.g);
                      } else c = this.g.ma();
                      if (
                        ((this.i = 200 == i),
                        (function (e, t, n, r, i, s, o) {
                          e.info(function () {
                            return (
                              "XMLHTTP RESP (" +
                              r +
                              ") [ attempt " +
                              i +
                              "]: " +
                              t +
                              "\n" +
                              n +
                              "\n" +
                              s +
                              " " +
                              o
                            );
                          });
                        })(this.j, this.u, this.A, this.m, this.Y, t, i),
                        this.i)
                      ) {
                        if (this.ca && !this.L) {
                          t: {
                            if (this.g) {
                              var u,
                                l = this.g;
                              if (
                                (u = l.g
                                  ? l.g.getResponseHeader(
                                      "X-HTTP-Initial-Response"
                                    )
                                  : null) &&
                                !R(u)
                              ) {
                                var h = u;
                                break t;
                              }
                            }
                            h = null;
                          }
                          if (!(i = h)) {
                            (this.i = !1),
                              (this.o = 3),
                              ot(12),
                              Lt(this),
                              Ot(this);
                            break e;
                          }
                          Ze(
                            this.j,
                            this.m,
                            i,
                            "Initial handshake response via X-HTTP-Initial-Response"
                          ),
                            (this.L = !0),
                            Pt(this, i);
                        }
                        this.T
                          ? (Ct(this, t, c),
                            $ &&
                              this.i &&
                              3 == t &&
                              (Je(this.W, this.X, "tick", this.pb),
                              this.X.start()))
                          : (Ze(this.j, this.m, c, null), Pt(this, c)),
                          4 == t && Lt(this),
                          this.i &&
                            !this.J &&
                            (4 == t
                              ? Zn(this.l, this)
                              : ((this.i = !1), At(this)));
                      } else
                        (function (e) {
                          var t = {};
                          e = (
                            (e.g &&
                              2 <= Mn(e) &&
                              e.g.getAllResponseHeaders()) ||
                            ""
                          ).split("\r\n");
                          for (var n = 0; n < e.length; n++)
                            if (!R(e[n])) {
                              var r = Pe(e[n]),
                                i = r[0];
                              if ("string" == typeof (r = r[1])) {
                                r = r.trim();
                                var s = t[i] || [];
                                (t[i] = s), s.push(r);
                              }
                            }
                          !(function (e, t) {
                            for (var n in e) t.call(void 0, e[n], n, e);
                          })(t, function (e) {
                            return e.join(", ");
                          });
                        })(this.g),
                          400 == i && 0 < c.indexOf("Unknown SID")
                            ? ((this.o = 3), ot(12))
                            : ((this.o = 0), ot(13)),
                          Lt(this),
                          Ot(this);
                    }
                  }
              } catch (e) {}
            }),
            (t.pb = function () {
              if (this.g) {
                var e = Mn(this.g),
                  t = this.g.ma();
                this.C < t.length &&
                  (Nt(this), Ct(this, e, t), this.i && 4 != e && At(this));
              }
            }),
            (t.cancel = function () {
              (this.J = !0), Lt(this);
            }),
            (t.ob = function () {
              this.B = null;
              var e = Date.now();
              0 <= e - this.aa
                ? ((function (e, t) {
                    e.info(function () {
                      return "TIMEOUT: " + t;
                    });
                  })(this.j, this.A),
                  2 != this.M && (it(3), ot(17)),
                  Lt(this),
                  (this.o = 2),
                  Ot(this))
                : kt(this, this.aa - e);
            });
          var Rt = RegExp(
            "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
          );
          function Ft(e) {
            var t;
            (this.g = this.s = this.j = ""),
              (this.o = null),
              (this.m = this.h = ""),
              (this.l = !1),
              e instanceof Ft
                ? ((this.l = e.l),
                  Bt(this, e.j),
                  (this.s = e.s),
                  (this.g = e.g),
                  Ut(this, e.o),
                  (this.h = e.h),
                  jt(this, rn(e.i)),
                  (this.m = e.m))
                : e && (t = String(e).match(Rt))
                ? ((this.l = !1),
                  Bt(this, t[1] || "", !0),
                  (this.s = Gt(t[2] || "")),
                  (this.g = Gt(t[3] || "", !0)),
                  Ut(this, t[4]),
                  (this.h = Gt(t[5] || "", !0)),
                  jt(this, t[6] || "", !0),
                  (this.m = Gt(t[7] || "")))
                : ((this.l = !1), (this.i = new Yt(null, this.l)));
          }
          function Vt(e) {
            return new Ft(e);
          }
          function Bt(e, t, n) {
            (e.j = n ? Gt(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
          }
          function Ut(e, t) {
            if (t) {
              if (((t = Number(t)), isNaN(t) || 0 > t))
                throw Error("Bad port number " + t);
              e.o = t;
            } else e.o = null;
          }
          function jt(e, t, n) {
            t instanceof Yt
              ? ((e.i = t),
                (function (e, t) {
                  t &&
                    !e.j &&
                    (Zt(e),
                    (e.i = null),
                    e.g.forEach(function (e, t) {
                      var n = t.toLowerCase();
                      t != n && (en(this, t), nn(this, n, e));
                    }, e)),
                    (e.j = t);
                })(e.i, e.l))
              : (n || (t = Kt(t, Jt)), (e.i = new Yt(t, e.l)));
          }
          function qt(e, t, n) {
            e.i.set(t, n);
          }
          function zt(e) {
            return (
              qt(
                e,
                "zx",
                Math.floor(2147483648 * Math.random()).toString(36) +
                  Math.abs(
                    Math.floor(2147483648 * Math.random()) ^ Date.now()
                  ).toString(36)
              ),
              e
            );
          }
          function Gt(e, t) {
            return e
              ? t
                ? decodeURI(e.replace(/%25/g, "%2525"))
                : decodeURIComponent(e)
              : "";
          }
          function Kt(e, t, n) {
            return "string" == typeof e
              ? ((e = encodeURI(e).replace(t, $t)),
                n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                e)
              : null;
          }
          function $t(e) {
            return (
              "%" +
              (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & e).toString(16)
            );
          }
          (Ft.prototype.toString = function () {
            var e = [],
              t = this.j;
            t && e.push(Kt(t, Qt, !0), ":");
            var n = this.g;
            return (
              (n || "file" == t) &&
                (e.push("//"),
                (t = this.s) && e.push(Kt(t, Qt, !0), "@"),
                e.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    "%$1"
                  )
                ),
                null != (n = this.o) && e.push(":", String(n))),
              (n = this.h) &&
                (this.g && "/" != n.charAt(0) && e.push("/"),
                e.push(Kt(n, "/" == n.charAt(0) ? Wt : Ht, !0))),
              (n = this.i.toString()) && e.push("?", n),
              (n = this.m) && e.push("#", Kt(n, Xt)),
              e.join("")
            );
          }),
            (Ft.prototype.resolve = function (e) {
              var t = Vt(this),
                n = !!e.j;
              n ? Bt(t, e.j) : (n = !!e.s),
                n ? (t.s = e.s) : (n = !!e.g),
                n ? (t.g = e.g) : (n = null != e.o);
              var r = e.h;
              if (n) Ut(t, e.o);
              else if ((n = !!e.h)) {
                if ("/" != r.charAt(0))
                  if (this.g && !this.h) r = "/" + r;
                  else {
                    var i = t.h.lastIndexOf("/");
                    -1 != i && (r = t.h.slice(0, i + 1) + r);
                  }
                if (".." == (i = r) || "." == i) r = "";
                else if (-1 != i.indexOf("./") || -1 != i.indexOf("/.")) {
                  (r = 0 == i.lastIndexOf("/", 0)), (i = i.split("/"));
                  for (var s = [], o = 0; o < i.length; ) {
                    var a = i[o++];
                    "." == a
                      ? r && o == i.length && s.push("")
                      : ".." == a
                      ? ((1 < s.length || (1 == s.length && "" != s[0])) &&
                          s.pop(),
                        r && o == i.length && s.push(""))
                      : (s.push(a), (r = !0));
                  }
                  r = s.join("/");
                } else r = i;
              }
              return (
                n ? (t.h = r) : (n = "" !== e.i.toString()),
                n ? jt(t, rn(e.i)) : (n = !!e.m),
                n && (t.m = e.m),
                t
              );
            });
          var Qt = /[#\/\?@]/g,
            Ht = /[#\?:]/g,
            Wt = /[#\?]/g,
            Jt = /[#\?@]/g,
            Xt = /#/g;
          function Yt(e, t) {
            (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
          }
          function Zt(e) {
            e.g ||
              ((e.g = new Map()),
              (e.h = 0),
              e.i &&
                (function (e, t) {
                  if (e) {
                    e = e.split("&");
                    for (var n = 0; n < e.length; n++) {
                      var r = e[n].indexOf("="),
                        i = null;
                      if (0 <= r) {
                        var s = e[n].substring(0, r);
                        i = e[n].substring(r + 1);
                      } else s = e[n];
                      t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
                    }
                  }
                })(e.i, function (t, n) {
                  e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
                }));
          }
          function en(e, t) {
            Zt(e),
              (t = sn(e, t)),
              e.g.has(t) &&
                ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
          }
          function tn(e, t) {
            return Zt(e), (t = sn(e, t)), e.g.has(t);
          }
          function nn(e, t, n) {
            en(e, t),
              0 < n.length &&
                ((e.i = null), e.g.set(sn(e, t), O(n)), (e.h += n.length));
          }
          function rn(e) {
            var t = new Yt();
            return (t.i = e.i), e.g && ((t.g = new Map(e.g)), (t.h = e.h)), t;
          }
          function sn(e, t) {
            return (t = String(t)), e.j && (t = t.toLowerCase()), t;
          }
          function on(e, t) {
            (this.g = e), (this.map = t);
          }
          function an(e) {
            (this.l = e || cn),
              (e = y.PerformanceNavigationTiming
                ? 0 <
                    (e = y.performance.getEntriesByType("navigation")).length &&
                  ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol)
                : !!(y.g && y.g.Na && y.g.Na() && y.g.Na().ic)),
              (this.j = e ? this.l : 1),
              (this.g = null),
              1 < this.j && (this.g = new Set()),
              (this.h = null),
              (this.i = []);
          }
          ((t = Yt.prototype).add = function (e, t) {
            Zt(this), (this.i = null), (e = sn(this, e));
            var n = this.g.get(e);
            return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
          }),
            (t.forEach = function (e, t) {
              Zt(this),
                this.g.forEach(function (n, r) {
                  n.forEach(function (n) {
                    e.call(t, n, r, this);
                  }, this);
                }, this);
            }),
            (t.wa = function () {
              Zt(this);
              for (
                var e = Array.from(this.g.values()),
                  t = Array.from(this.g.keys()),
                  n = [],
                  r = 0;
                r < t.length;
                r++
              )
                for (var i = e[r], s = 0; s < i.length; s++) n.push(t[r]);
              return n;
            }),
            (t.ba = function (e) {
              Zt(this);
              var t = [];
              if ("string" == typeof e)
                tn(this, e) && (t = t.concat(this.g.get(sn(this, e))));
              else {
                e = Array.from(this.g.values());
                for (var n = 0; n < e.length; n++) t = t.concat(e[n]);
              }
              return t;
            }),
            (t.set = function (e, t) {
              return (
                Zt(this),
                (this.i = null),
                tn(this, (e = sn(this, e))) && (this.h -= this.g.get(e).length),
                this.g.set(e, [t]),
                (this.h += 1),
                this
              );
            }),
            (t.get = function (e, t) {
              return e && 0 < (e = this.ba(e)).length ? String(e[0]) : t;
            }),
            (t.toString = function () {
              if (this.i) return this.i;
              if (!this.g) return "";
              for (
                var e = [], t = Array.from(this.g.keys()), n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n],
                  i = encodeURIComponent(String(r));
                r = this.ba(r);
                for (var s = 0; s < r.length; s++) {
                  var o = i;
                  "" !== r[s] && (o += "=" + encodeURIComponent(String(r[s]))),
                    e.push(o);
                }
              }
              return (this.i = e.join("&"));
            });
          var cn = 10;
          function un(e) {
            return !!e.h || (!!e.g && e.g.size >= e.j);
          }
          function ln(e) {
            return e.h ? 1 : e.g ? e.g.size : 0;
          }
          function hn(e, t) {
            return e.h ? e.h == t : !!e.g && e.g.has(t);
          }
          function dn(e, t) {
            e.g ? e.g.add(t) : (e.h = t);
          }
          function fn(e, t) {
            e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
          }
          function pn(e) {
            if (null != e.h) return e.i.concat(e.h.D);
            if (null != e.g && 0 !== e.g.size) {
              for (
                var t = e.i, n = (e = i(e.g.values())).next();
                !n.done;
                n = e.next()
              )
                t = t.concat(n.value.D);
              return t;
            }
            return O(e.i);
          }
          function gn() {}
          function mn() {
            this.g = new gn();
          }
          function yn(e, t, n) {
            var r = n || "";
            try {
              Mt(e, function (e, n) {
                var i = e;
                w(e) && (i = De(e)),
                  t.push(r + n + "=" + encodeURIComponent(i));
              });
            } catch (e) {
              throw (t.push(r + "type=" + encodeURIComponent("_badmap")), e);
            }
          }
          function vn(e, t, n, r, i) {
            try {
              (t.onload = null),
                (t.onerror = null),
                (t.onabort = null),
                (t.ontimeout = null),
                i(r);
            } catch (e) {}
          }
          function wn(e) {
            (this.l = e.jc || null), (this.j = e.rb || !1);
          }
          function bn(e, t) {
            Te.call(this),
              (this.D = e),
              (this.u = t),
              (this.m = void 0),
              (this.readyState = _n),
              (this.status = 0),
              (this.responseType =
                this.responseText =
                this.response =
                this.statusText =
                  ""),
              (this.onreadystatechange = null),
              (this.v = new Headers()),
              (this.h = null),
              (this.C = "GET"),
              (this.B = ""),
              (this.g = !1),
              (this.A = this.j = this.l = null);
          }
          (an.prototype.cancel = function () {
            if (((this.i = pn(this)), this.h)) this.h.cancel(), (this.h = null);
            else if (this.g && 0 !== this.g.size) {
              for (
                var e = i(this.g.values()), t = e.next();
                !t.done;
                t = e.next()
              )
                t.value.cancel();
              this.g.clear();
            }
          }),
            (gn.prototype.stringify = function (e) {
              return y.JSON.stringify(e, void 0);
            }),
            (gn.prototype.parse = function (e) {
              return y.JSON.parse(e, void 0);
            }),
            C(wn, ht),
            (wn.prototype.g = function () {
              return new bn(this.l, this.j);
            }),
            (wn.prototype.i = (function (e) {
              return function () {
                return e;
              };
            })({})),
            C(bn, Te);
          var _n = 0;
          function In(e) {
            e.j.read().then(e.$a.bind(e)).catch(e.na.bind(e));
          }
          function En(e) {
            (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), Sn(e);
          }
          function Sn(e) {
            e.onreadystatechange && e.onreadystatechange.call(e);
          }
          ((t = bn.prototype).open = function (e, t) {
            if (this.readyState != _n)
              throw (this.abort(), Error("Error reopening a connection"));
            (this.C = e), (this.B = t), (this.readyState = 1), Sn(this);
          }),
            (t.send = function (e) {
              if (1 != this.readyState)
                throw (this.abort(), Error("need to call open() first. "));
              this.g = !0;
              var t = {
                headers: this.v,
                method: this.C,
                credentials: this.m,
                cache: void 0,
              };
              e && (t.body = e),
                (this.D || y)
                  .fetch(new Request(this.B, t))
                  .then(this.cb.bind(this), this.na.bind(this));
            }),
            (t.abort = function () {
              (this.response = this.responseText = ""),
                (this.v = new Headers()),
                (this.status = 0),
                this.j &&
                  this.j.cancel("Request was aborted.").catch(function () {}),
                1 <= this.readyState &&
                  this.g &&
                  4 != this.readyState &&
                  ((this.g = !1), En(this)),
                (this.readyState = _n);
            }),
            (t.cb = function (e) {
              if (
                this.g &&
                ((this.l = e),
                this.h ||
                  ((this.status = this.l.status),
                  (this.statusText = this.l.statusText),
                  (this.h = e.headers),
                  (this.readyState = 2),
                  Sn(this)),
                this.g && ((this.readyState = 3), Sn(this), this.g))
              )
                if ("arraybuffer" === this.responseType)
                  e.arrayBuffer().then(this.ab.bind(this), this.na.bind(this));
                else if (void 0 !== y.ReadableStream && "body" in e) {
                  if (((this.j = e.body.getReader()), this.u)) {
                    if (this.responseType)
                      throw Error(
                        'responseType must be empty for "streamBinaryChunks" mode responses.'
                      );
                    this.response = [];
                  } else
                    (this.response = this.responseText = ""),
                      (this.A = new TextDecoder());
                  In(this);
                } else e.text().then(this.bb.bind(this), this.na.bind(this));
            }),
            (t.$a = function (e) {
              if (this.g) {
                if (this.u && e.value) this.response.push(e.value);
                else if (!this.u) {
                  var t = e.value ? e.value : new Uint8Array(0);
                  (t = this.A.decode(t, { stream: !e.done })) &&
                    (this.response = this.responseText += t);
                }
                e.done ? En(this) : Sn(this), 3 == this.readyState && In(this);
              }
            }),
            (t.bb = function (e) {
              this.g && ((this.response = this.responseText = e), En(this));
            }),
            (t.ab = function (e) {
              this.g && ((this.response = e), En(this));
            }),
            (t.na = function () {
              this.g && En(this);
            }),
            (t.setRequestHeader = function (e, t) {
              this.v.append(e, t);
            }),
            (t.getResponseHeader = function (e) {
              return (this.h && this.h.get(e.toLowerCase())) || "";
            }),
            (t.getAllResponseHeaders = function () {
              if (!this.h) return "";
              for (var e = [], t = this.h.entries(), n = t.next(); !n.done; )
                (n = n.value), e.push(n[0] + ": " + n[1]), (n = t.next());
              return e.join("\r\n");
            }),
            Object.defineProperty(bn.prototype, "withCredentials", {
              get: function () {
                return "include" === this.m;
              },
              set: function (e) {
                this.m = e ? "include" : "same-origin";
              },
            });
          var Tn = y.JSON.parse;
          function xn(e) {
            Te.call(this),
              (this.headers = new Map()),
              (this.u = e || null),
              (this.h = !1),
              (this.C = this.g = null),
              (this.I = ""),
              (this.m = 0),
              (this.j = ""),
              (this.l = this.G = this.v = this.D = !1),
              (this.B = 0),
              (this.A = null),
              (this.L = Cn),
              (this.M = this.N = !1);
          }
          C(xn, Te);
          var Cn = "",
            Dn = /^https?$/i,
            An = ["POST", "PUT"];
          function kn(e, t) {
            (e.h = !1),
              e.g && ((e.l = !0), e.g.abort(), (e.l = !1)),
              (e.j = t),
              (e.m = 5),
              Nn(e),
              Ln(e);
          }
          function Nn(e) {
            e.D || ((e.D = !0), xe(e, "complete"), xe(e, "error"));
          }
          function On(e) {
            if (e.h && void 0 !== m && (!e.C[1] || 4 != Mn(e) || 2 != e.fa()))
              if (e.v && 4 == Mn(e)) ze(e.Oa, 0, e);
              else if ((xe(e, "readystatechange"), 4 == Mn(e))) {
                e.h = !1;
                try {
                  var t,
                    n = e.fa();
                  e: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                  if (!(t = r)) {
                    var i;
                    if ((i = 0 === n)) {
                      var s = String(e.I).match(Rt)[1] || null;
                      !s &&
                        y.self &&
                        y.self.location &&
                        (s = y.self.location.protocol.slice(0, -1)),
                        (i = !Dn.test(s ? s.toLowerCase() : ""));
                    }
                    t = i;
                  }
                  if (t) xe(e, "complete"), xe(e, "success");
                  else {
                    e.m = 6;
                    try {
                      var o = 2 < Mn(e) ? e.g.statusText : "";
                    } catch (e) {
                      o = "";
                    }
                    (e.j = o + " [" + e.fa() + "]"), Nn(e);
                  }
                } finally {
                  Ln(e);
                }
              }
          }
          function Ln(e, t) {
            if (e.g) {
              Pn(e);
              var n = e.g,
                r = e.C[0] ? function () {} : null;
              (e.g = null), (e.C = null), t || xe(e, "ready");
              try {
                n.onreadystatechange = r;
              } catch (e) {}
            }
          }
          function Pn(e) {
            e.g && e.M && (e.g.ontimeout = null),
              e.A && (y.clearTimeout(e.A), (e.A = null));
          }
          function Mn(e) {
            return e.g ? e.g.readyState : 0;
          }
          function Rn(e) {
            try {
              if (!e.g) return null;
              if ("response" in e.g) return e.g.response;
              switch (e.L) {
                case Cn:
                case "text":
                  return e.g.responseText;
                case "arraybuffer":
                  if ("mozResponseArrayBuffer" in e.g)
                    return e.g.mozResponseArrayBuffer;
              }
              return null;
            } catch (e) {
              return null;
            }
          }
          function Fn(e) {
            var t = "";
            return (
              oe(e, function (e, n) {
                (t += n), (t += ":"), (t += e), (t += "\r\n");
              }),
              t
            );
          }
          function Vn(e, t, n) {
            e: {
              for (r in n) {
                var r = !1;
                break e;
              }
              r = !0;
            }
            r ||
              ((n = Fn(n)),
              "string" == typeof e
                ? (encodeURIComponent(String(t)),
                  null != n && encodeURIComponent(String(n)))
                : qt(e, t, n));
          }
          function Bn(e, t, n) {
            return (
              (n && n.internalChannelParams && n.internalChannelParams[e]) || t
            );
          }
          function Un(e) {
            (this.Ja = 0),
              (this.j = []),
              (this.l = new Ye()),
              (this.sa =
                this.za =
                this.I =
                this.aa =
                this.g =
                this.Ga =
                this.D =
                this.qa =
                this.o =
                this.W =
                this.s =
                  null),
              (this.ib = this.Y = 0),
              (this.gb = Bn("failFast", !1, e)),
              (this.G = this.v = this.u = this.m = this.h = null),
              (this.ca = !0),
              (this.Ia = this.X = -1),
              (this.da = this.A = this.C = 0),
              (this.eb = Bn("baseRetryDelayMs", 5e3, e)),
              (this.kb = Bn("retryDelaySeedMs", 1e4, e)),
              (this.hb = Bn("forwardChannelMaxRetries", 2, e)),
              (this.Aa = Bn("forwardChannelRequestTimeoutMs", 2e4, e)),
              (this.ya = (e && e.xmlHttpFactory) || void 0),
              (this.Ka = (e && e.hc) || !1),
              (this.M = void 0),
              (this.J = (e && e.supportsCrossDomainXhr) || !1),
              (this.L = ""),
              (this.i = new an(e && e.concurrentRequestLimit)),
              (this.Ma = new mn()),
              (this.R = (e && e.fastHandshake) || !1),
              (this.P = (e && e.encodeInitMessageHeaders) || !1),
              this.R && this.P && (this.P = !1),
              (this.fb = (e && e.ec) || !1),
              e && e.Ha && this.l.Ha(),
              e && e.forceLongPolling && (this.ca = !1),
              (this.ea =
                (!this.R && this.ca && e && e.detectBufferingProxy) || !1),
              (this.ta = void 0),
              e &&
                e.longPollingTimeout &&
                0 < e.longPollingTimeout &&
                (this.ta = e.longPollingTimeout),
              (this.ra = void 0),
              (this.T = 0),
              (this.N = !1),
              (this.pa = this.B = null);
          }
          function jn(e) {
            if ((zn(e), 3 == e.H)) {
              var t = e.Y++,
                n = Vt(e.I);
              if (
                (qt(n, "SID", e.L),
                qt(n, "RID", t),
                qt(n, "TYPE", "terminate"),
                $n(e, n),
                ((t = new wt(e, e.l, t)).M = 2),
                (t.v = zt(Vt(n))),
                (n = !1),
                y.navigator && y.navigator.sendBeacon)
              )
                try {
                  n = y.navigator.sendBeacon(t.v.toString(), "");
                } catch (e) {}
              !n && y.Image && ((new Image().src = t.v), (n = !0)),
                n || ((t.g = ir(t.l, null)), t.g.ja(t.v)),
                (t.G = Date.now()),
                At(t);
            }
            nr(e);
          }
          function qn(e) {
            e.g && (Jn(e), e.g.cancel(), (e.g = null));
          }
          function zn(e) {
            qn(e),
              e.u && (y.clearTimeout(e.u), (e.u = null)),
              Yn(e),
              e.i.cancel(),
              e.m &&
                ("number" == typeof e.m && y.clearTimeout(e.m), (e.m = null));
          }
          function Gn(e) {
            un(e.i) || e.m || ((e.m = !0), Be(e.Qa, e), (e.C = 0));
          }
          function Kn(e, t) {
            var n;
            n = t ? t.m : e.Y++;
            var r = Vt(e.I);
            qt(r, "SID", e.L),
              qt(r, "RID", n),
              qt(r, "AID", e.X),
              $n(e, r),
              e.o && e.s && Vn(r, e.o, e.s),
              (n = new wt(e, e.l, n, e.C + 1)),
              null === e.o && (n.I = e.s),
              t && (e.j = t.D.concat(e.j)),
              (t = Qn(e, n, 1e3)),
              n.setTimeout(
                Math.round(0.5 * e.Aa) + Math.round(0.5 * e.Aa * Math.random())
              ),
              dn(e.i, n),
              St(n, r, t);
          }
          function $n(e, t) {
            e.qa &&
              oe(e.qa, function (e, n) {
                qt(t, n, e);
              }),
              e.h &&
                Mt({}, function (e, n) {
                  qt(t, n, e);
                });
          }
          function Qn(e, t, n) {
            n = Math.min(e.j.length, n);
            var r = e.h ? T(e.h.Ya, e.h, e) : null;
            e: for (var i = e.j, s = -1; ; ) {
              var o = ["count=" + n];
              -1 == s
                ? 0 < n
                  ? ((s = i[0].g), o.push("ofs=" + s))
                  : (s = 0)
                : o.push("ofs=" + s);
              for (var a = !0, c = 0; c < n; c++) {
                var u = i[c].g,
                  l = i[c].map;
                if (0 > (u -= s)) (s = Math.max(0, i[c].g - 100)), (a = !1);
                else
                  try {
                    yn(l, o, "req" + u + "_");
                  } catch (e) {
                    r && r(l);
                  }
              }
              if (a) {
                r = o.join("&");
                break e;
              }
            }
            return (e = e.j.splice(0, n)), (t.D = e), r;
          }
          function Hn(e) {
            e.g || e.u || ((e.da = 1), Be(e.Pa, e), (e.A = 0));
          }
          function Wn(e) {
            return !(
              e.g ||
              e.u ||
              3 <= e.A ||
              (e.da++, (e.u = ct(T(e.Pa, e), er(e, e.A))), e.A++, 0)
            );
          }
          function Jn(e) {
            null != e.B && (y.clearTimeout(e.B), (e.B = null));
          }
          function Xn(e) {
            (e.g = new wt(e, e.l, "rpc", e.da)),
              null === e.o && (e.g.I = e.s),
              (e.g.P = 0);
            var t = Vt(e.za);
            qt(t, "RID", "rpc"),
              qt(t, "SID", e.L),
              qt(t, "AID", e.X),
              qt(t, "CI", e.G ? "0" : "1"),
              !e.G && e.ta && qt(t, "TO", e.ta),
              qt(t, "TYPE", "xmlhttp"),
              $n(e, t),
              e.o && e.s && Vn(t, e.o, e.s),
              e.M && e.g.setTimeout(e.M);
            var n = e.g;
            (e = e.sa),
              (n.M = 1),
              (n.v = zt(Vt(t))),
              (n.s = null),
              (n.T = !0),
              Tt(n, e);
          }
          function Yn(e) {
            null != e.v && (y.clearTimeout(e.v), (e.v = null));
          }
          function Zn(e, t) {
            var n = null;
            if (e.g == t) {
              Yn(e), Jn(e), (e.g = null);
              var r = 2;
            } else {
              if (!hn(e.i, t)) return;
              (n = t.D), fn(e.i, t), (r = 1);
            }
            if (0 != e.H)
              if (t.i)
                if (1 == r) {
                  (n = t.s ? t.s.length : 0), (t = Date.now() - t.G);
                  var i = e.C;
                  xe((r = nt()), new at(r, n, t, i)), Gn(e);
                } else Hn(e);
              else if (
                3 == (i = t.o) ||
                (0 == i && 0 < t.ea) ||
                !(
                  (1 == r &&
                    (function (e, t) {
                      return !(
                        ln(e.i) >= e.i.j - (e.m ? 1 : 0) ||
                        (e.m
                          ? ((e.j = t.D.concat(e.j)), 0)
                          : 1 == e.H ||
                            2 == e.H ||
                            e.C >= (e.gb ? 0 : e.hb) ||
                            ((e.m = ct(T(e.Qa, e, t), er(e, e.C))), e.C++, 0))
                      );
                    })(e, t)) ||
                  (2 == r && Wn(e))
                )
              )
                switch (
                  (n && 0 < n.length && ((t = e.i), (t.i = t.i.concat(n))), i)
                ) {
                  case 1:
                    tr(e, 5);
                    break;
                  case 4:
                    tr(e, 10);
                    break;
                  case 3:
                    tr(e, 6);
                    break;
                  default:
                    tr(e, 2);
                }
          }
          function er(e, t) {
            var n = e.eb + Math.floor(Math.random() * e.kb);
            return e.isActive() || (n *= 2), n * t;
          }
          function tr(e, t) {
            if ((e.l.info("Error code " + t), 2 == t)) {
              var n = null;
              e.h && (n = null);
              var r = T(e.sb, e);
              n ||
                ((n = new Ft("//www.google.com/images/cleardot.gif")),
                (y.location && "http" == y.location.protocol) || Bt(n, "https"),
                zt(n)),
                (function (e, t) {
                  var n = new Ye();
                  if (y.Image) {
                    var r = new Image();
                    (r.onload = x(vn, n, r, "TestLoadImage: loaded", !0, t)),
                      (r.onerror = x(vn, n, r, "TestLoadImage: error", !1, t)),
                      (r.onabort = x(vn, n, r, "TestLoadImage: abort", !1, t)),
                      (r.ontimeout = x(
                        vn,
                        n,
                        r,
                        "TestLoadImage: timeout",
                        !1,
                        t
                      )),
                      y.setTimeout(function () {
                        r.ontimeout && r.ontimeout();
                      }, 1e4),
                      (r.src = e);
                  } else t(!1);
                })(n.toString(), r);
            } else ot(2);
            (e.H = 0), e.h && e.h.Ca(t), nr(e), zn(e);
          }
          function nr(e) {
            if (((e.H = 0), (e.pa = []), e.h)) {
              var t = pn(e.i);
              (0 == t.length && 0 == e.j.length) ||
                (L(e.pa, t),
                L(e.pa, e.j),
                (e.i.i.length = 0),
                O(e.j),
                (e.j.length = 0)),
                e.h.Ba();
            }
          }
          function rr(e, t, n) {
            var r = n instanceof Ft ? Vt(n) : new Ft(n);
            if ("" != r.g) t && (r.g = t + "." + r.g), Ut(r, r.o);
            else {
              var i = y.location;
              (r = i.protocol),
                (t = t ? t + "." + i.hostname : i.hostname),
                (i = +i.port);
              var s = new Ft(null);
              r && Bt(s, r),
                t && (s.g = t),
                i && Ut(s, i),
                n && (s.h = n),
                (r = s);
            }
            return (
              (n = e.D),
              (t = e.Ga),
              n && t && qt(r, n, t),
              qt(r, "VER", e.ua),
              $n(e, r),
              r
            );
          }
          function ir(e, t, n) {
            if (t && !e.J)
              throw Error(
                "Can't create secondary domain capable XhrIo object."
              );
            return (
              (t =
                n && e.Ka && !e.ya
                  ? new xn(new wn({ rb: !0 }))
                  : new xn(e.ya)).Ra(e.J),
              t
            );
          }
          function sr() {}
          function or() {
            if (G && !(10 <= Number(Z)))
              throw Error("Environmental error: no available transport.");
          }
          function ar(e, t) {
            Te.call(this),
              (this.g = new Un(t)),
              (this.l = e),
              (this.h = (t && t.messageUrlParams) || null),
              (e = (t && t.messageHeaders) || null),
              t &&
                t.clientProtocolHeaderRequired &&
                (e
                  ? (e["X-Client-Protocol"] = "webchannel")
                  : (e = { "X-Client-Protocol": "webchannel" })),
              (this.g.s = e),
              (e = (t && t.initMessageHeaders) || null),
              t &&
                t.messageContentType &&
                (e
                  ? (e["X-WebChannel-Content-Type"] = t.messageContentType)
                  : (e = {
                      "X-WebChannel-Content-Type": t.messageContentType,
                    })),
              t &&
                t.Fa &&
                (e
                  ? (e["X-WebChannel-Client-Profile"] = t.Fa)
                  : (e = { "X-WebChannel-Client-Profile": t.Fa })),
              (this.g.W = e),
              (e = t && t.fc) && !R(e) && (this.g.o = e),
              (this.A = (t && t.supportsCrossDomainXhr) || !1),
              (this.v = (t && t.sendRawJson) || !1),
              (t = t && t.httpSessionIdParam) &&
                !R(t) &&
                ((this.g.D = t),
                null !== (e = this.h) &&
                  t in e &&
                  t in (e = this.h) &&
                  delete e[t]),
              (this.j = new lr(this));
          }
          function cr(e) {
            mt.call(this),
              e.__headers__ &&
                ((this.headers = e.__headers__),
                (this.statusCode = e.__status__),
                delete e.__headers__,
                delete e.__status__);
            var t = e.__sm__;
            if (t) {
              e: {
                for (var n in t) {
                  e = n;
                  break e;
                }
                e = void 0;
              }
              (this.i = e) &&
                ((e = this.i), (t = null !== t && e in t ? t[e] : void 0)),
                (this.data = t);
            } else this.data = e;
          }
          function ur() {
            yt.call(this), (this.status = 1);
          }
          function lr(e) {
            this.g = e;
          }
          function hr() {
            (this.blockSize = -1),
              (this.blockSize = 64),
              (this.g = Array(4)),
              (this.m = Array(this.blockSize)),
              (this.i = this.h = 0),
              this.reset();
          }
          function dr(e, t, n) {
            n || (n = 0);
            var r = Array(16);
            if ("string" == typeof t)
              for (var i = 0; 16 > i; ++i)
                r[i] =
                  t.charCodeAt(n++) |
                  (t.charCodeAt(n++) << 8) |
                  (t.charCodeAt(n++) << 16) |
                  (t.charCodeAt(n++) << 24);
            else
              for (i = 0; 16 > i; ++i)
                r[i] = t[n++] | (t[n++] << 8) | (t[n++] << 16) | (t[n++] << 24);
            (t = e.g[0]), (n = e.g[1]), (i = e.g[2]);
            var s = e.g[3],
              o = (t + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
            (o =
              ((n =
                (i =
                  (s =
                    (t =
                      (n =
                        (i =
                          (s =
                            (t =
                              (n =
                                (i =
                                  (s =
                                    (t =
                                      (n =
                                        (i =
                                          (s =
                                            (t =
                                              (n =
                                                (i =
                                                  (s =
                                                    (t =
                                                      (n =
                                                        (i =
                                                          (s =
                                                            (t =
                                                              (n =
                                                                (i =
                                                                  (s =
                                                                    (t =
                                                                      (n =
                                                                        (i =
                                                                          (s =
                                                                            (t =
                                                                              (n =
                                                                                (i =
                                                                                  (s =
                                                                                    (t =
                                                                                      (n =
                                                                                        (i =
                                                                                          (s =
                                                                                            (t =
                                                                                              (n =
                                                                                                (i =
                                                                                                  (s =
                                                                                                    (t =
                                                                                                      (n =
                                                                                                        (i =
                                                                                                          (s =
                                                                                                            (t =
                                                                                                              (n =
                                                                                                                (i =
                                                                                                                  (s =
                                                                                                                    (t =
                                                                                                                      (n =
                                                                                                                        (i =
                                                                                                                          (s =
                                                                                                                            (t =
                                                                                                                              (n =
                                                                                                                                (i =
                                                                                                                                  (s =
                                                                                                                                    (t =
                                                                                                                                      n +
                                                                                                                                      (((o <<
                                                                                                                                        7) &
                                                                                                                                        4294967295) |
                                                                                                                                        (o >>>
                                                                                                                                          25))) +
                                                                                                                                    ((((o =
                                                                                                                                      (s +
                                                                                                                                        (i ^
                                                                                                                                          (t &
                                                                                                                                            (n ^
                                                                                                                                              i))) +
                                                                                                                                        r[1] +
                                                                                                                                        3905402710) &
                                                                                                                                      4294967295) <<
                                                                                                                                      12) &
                                                                                                                                      4294967295) |
                                                                                                                                      (o >>>
                                                                                                                                        20))) +
                                                                                                                                  ((((o =
                                                                                                                                    (i +
                                                                                                                                      (n ^
                                                                                                                                        (s &
                                                                                                                                          (t ^
                                                                                                                                            n))) +
                                                                                                                                      r[2] +
                                                                                                                                      606105819) &
                                                                                                                                    4294967295) <<
                                                                                                                                    17) &
                                                                                                                                    4294967295) |
                                                                                                                                    (o >>>
                                                                                                                                      15))) +
                                                                                                                                ((((o =
                                                                                                                                  (n +
                                                                                                                                    (t ^
                                                                                                                                      (i &
                                                                                                                                        (s ^
                                                                                                                                          t))) +
                                                                                                                                    r[3] +
                                                                                                                                    3250441966) &
                                                                                                                                  4294967295) <<
                                                                                                                                  22) &
                                                                                                                                  4294967295) |
                                                                                                                                  (o >>>
                                                                                                                                    10))) +
                                                                                                                              ((((o =
                                                                                                                                (t +
                                                                                                                                  (s ^
                                                                                                                                    (n &
                                                                                                                                      (i ^
                                                                                                                                        s))) +
                                                                                                                                  r[4] +
                                                                                                                                  4118548399) &
                                                                                                                                4294967295) <<
                                                                                                                                7) &
                                                                                                                                4294967295) |
                                                                                                                                (o >>>
                                                                                                                                  25))) +
                                                                                                                            ((((o =
                                                                                                                              (s +
                                                                                                                                (i ^
                                                                                                                                  (t &
                                                                                                                                    (n ^
                                                                                                                                      i))) +
                                                                                                                                r[5] +
                                                                                                                                1200080426) &
                                                                                                                              4294967295) <<
                                                                                                                              12) &
                                                                                                                              4294967295) |
                                                                                                                              (o >>>
                                                                                                                                20))) +
                                                                                                                          ((((o =
                                                                                                                            (i +
                                                                                                                              (n ^
                                                                                                                                (s &
                                                                                                                                  (t ^
                                                                                                                                    n))) +
                                                                                                                              r[6] +
                                                                                                                              2821735955) &
                                                                                                                            4294967295) <<
                                                                                                                            17) &
                                                                                                                            4294967295) |
                                                                                                                            (o >>>
                                                                                                                              15))) +
                                                                                                                        ((((o =
                                                                                                                          (n +
                                                                                                                            (t ^
                                                                                                                              (i &
                                                                                                                                (s ^
                                                                                                                                  t))) +
                                                                                                                            r[7] +
                                                                                                                            4249261313) &
                                                                                                                          4294967295) <<
                                                                                                                          22) &
                                                                                                                          4294967295) |
                                                                                                                          (o >>>
                                                                                                                            10))) +
                                                                                                                      ((((o =
                                                                                                                        (t +
                                                                                                                          (s ^
                                                                                                                            (n &
                                                                                                                              (i ^
                                                                                                                                s))) +
                                                                                                                          r[8] +
                                                                                                                          1770035416) &
                                                                                                                        4294967295) <<
                                                                                                                        7) &
                                                                                                                        4294967295) |
                                                                                                                        (o >>>
                                                                                                                          25))) +
                                                                                                                    ((((o =
                                                                                                                      (s +
                                                                                                                        (i ^
                                                                                                                          (t &
                                                                                                                            (n ^
                                                                                                                              i))) +
                                                                                                                        r[9] +
                                                                                                                        2336552879) &
                                                                                                                      4294967295) <<
                                                                                                                      12) &
                                                                                                                      4294967295) |
                                                                                                                      (o >>>
                                                                                                                        20))) +
                                                                                                                  ((((o =
                                                                                                                    (i +
                                                                                                                      (n ^
                                                                                                                        (s &
                                                                                                                          (t ^
                                                                                                                            n))) +
                                                                                                                      r[10] +
                                                                                                                      4294925233) &
                                                                                                                    4294967295) <<
                                                                                                                    17) &
                                                                                                                    4294967295) |
                                                                                                                    (o >>>
                                                                                                                      15))) +
                                                                                                                ((((o =
                                                                                                                  (n +
                                                                                                                    (t ^
                                                                                                                      (i &
                                                                                                                        (s ^
                                                                                                                          t))) +
                                                                                                                    r[11] +
                                                                                                                    2304563134) &
                                                                                                                  4294967295) <<
                                                                                                                  22) &
                                                                                                                  4294967295) |
                                                                                                                  (o >>>
                                                                                                                    10))) +
                                                                                                              ((((o =
                                                                                                                (t +
                                                                                                                  (s ^
                                                                                                                    (n &
                                                                                                                      (i ^
                                                                                                                        s))) +
                                                                                                                  r[12] +
                                                                                                                  1804603682) &
                                                                                                                4294967295) <<
                                                                                                                7) &
                                                                                                                4294967295) |
                                                                                                                (o >>>
                                                                                                                  25))) +
                                                                                                            ((((o =
                                                                                                              (s +
                                                                                                                (i ^
                                                                                                                  (t &
                                                                                                                    (n ^
                                                                                                                      i))) +
                                                                                                                r[13] +
                                                                                                                4254626195) &
                                                                                                              4294967295) <<
                                                                                                              12) &
                                                                                                              4294967295) |
                                                                                                              (o >>>
                                                                                                                20))) +
                                                                                                          ((((o =
                                                                                                            (i +
                                                                                                              (n ^
                                                                                                                (s &
                                                                                                                  (t ^
                                                                                                                    n))) +
                                                                                                              r[14] +
                                                                                                              2792965006) &
                                                                                                            4294967295) <<
                                                                                                            17) &
                                                                                                            4294967295) |
                                                                                                            (o >>>
                                                                                                              15))) +
                                                                                                        ((((o =
                                                                                                          (n +
                                                                                                            (t ^
                                                                                                              (i &
                                                                                                                (s ^
                                                                                                                  t))) +
                                                                                                            r[15] +
                                                                                                            1236535329) &
                                                                                                          4294967295) <<
                                                                                                          22) &
                                                                                                          4294967295) |
                                                                                                          (o >>>
                                                                                                            10))) +
                                                                                                      ((((o =
                                                                                                        (t +
                                                                                                          (i ^
                                                                                                            (s &
                                                                                                              (n ^
                                                                                                                i))) +
                                                                                                          r[1] +
                                                                                                          4129170786) &
                                                                                                        4294967295) <<
                                                                                                        5) &
                                                                                                        4294967295) |
                                                                                                        (o >>>
                                                                                                          27))) +
                                                                                                    ((((o =
                                                                                                      (s +
                                                                                                        (n ^
                                                                                                          (i &
                                                                                                            (t ^
                                                                                                              n))) +
                                                                                                        r[6] +
                                                                                                        3225465664) &
                                                                                                      4294967295) <<
                                                                                                      9) &
                                                                                                      4294967295) |
                                                                                                      (o >>>
                                                                                                        23))) +
                                                                                                  ((((o =
                                                                                                    (i +
                                                                                                      (t ^
                                                                                                        (n &
                                                                                                          (s ^
                                                                                                            t))) +
                                                                                                      r[11] +
                                                                                                      643717713) &
                                                                                                    4294967295) <<
                                                                                                    14) &
                                                                                                    4294967295) |
                                                                                                    (o >>>
                                                                                                      18))) +
                                                                                                ((((o =
                                                                                                  (n +
                                                                                                    (s ^
                                                                                                      (t &
                                                                                                        (i ^
                                                                                                          s))) +
                                                                                                    r[0] +
                                                                                                    3921069994) &
                                                                                                  4294967295) <<
                                                                                                  20) &
                                                                                                  4294967295) |
                                                                                                  (o >>>
                                                                                                    12))) +
                                                                                              ((((o =
                                                                                                (t +
                                                                                                  (i ^
                                                                                                    (s &
                                                                                                      (n ^
                                                                                                        i))) +
                                                                                                  r[5] +
                                                                                                  3593408605) &
                                                                                                4294967295) <<
                                                                                                5) &
                                                                                                4294967295) |
                                                                                                (o >>>
                                                                                                  27))) +
                                                                                            ((((o =
                                                                                              (s +
                                                                                                (n ^
                                                                                                  (i &
                                                                                                    (t ^
                                                                                                      n))) +
                                                                                                r[10] +
                                                                                                38016083) &
                                                                                              4294967295) <<
                                                                                              9) &
                                                                                              4294967295) |
                                                                                              (o >>>
                                                                                                23))) +
                                                                                          ((((o =
                                                                                            (i +
                                                                                              (t ^
                                                                                                (n &
                                                                                                  (s ^
                                                                                                    t))) +
                                                                                              r[15] +
                                                                                              3634488961) &
                                                                                            4294967295) <<
                                                                                            14) &
                                                                                            4294967295) |
                                                                                            (o >>>
                                                                                              18))) +
                                                                                        ((((o =
                                                                                          (n +
                                                                                            (s ^
                                                                                              (t &
                                                                                                (i ^
                                                                                                  s))) +
                                                                                            r[4] +
                                                                                            3889429448) &
                                                                                          4294967295) <<
                                                                                          20) &
                                                                                          4294967295) |
                                                                                          (o >>>
                                                                                            12))) +
                                                                                      ((((o =
                                                                                        (t +
                                                                                          (i ^
                                                                                            (s &
                                                                                              (n ^
                                                                                                i))) +
                                                                                          r[9] +
                                                                                          568446438) &
                                                                                        4294967295) <<
                                                                                        5) &
                                                                                        4294967295) |
                                                                                        (o >>>
                                                                                          27))) +
                                                                                    ((((o =
                                                                                      (s +
                                                                                        (n ^
                                                                                          (i &
                                                                                            (t ^
                                                                                              n))) +
                                                                                        r[14] +
                                                                                        3275163606) &
                                                                                      4294967295) <<
                                                                                      9) &
                                                                                      4294967295) |
                                                                                      (o >>>
                                                                                        23))) +
                                                                                  ((((o =
                                                                                    (i +
                                                                                      (t ^
                                                                                        (n &
                                                                                          (s ^
                                                                                            t))) +
                                                                                      r[3] +
                                                                                      4107603335) &
                                                                                    4294967295) <<
                                                                                    14) &
                                                                                    4294967295) |
                                                                                    (o >>>
                                                                                      18))) +
                                                                                ((((o =
                                                                                  (n +
                                                                                    (s ^
                                                                                      (t &
                                                                                        (i ^
                                                                                          s))) +
                                                                                    r[8] +
                                                                                    1163531501) &
                                                                                  4294967295) <<
                                                                                  20) &
                                                                                  4294967295) |
                                                                                  (o >>>
                                                                                    12))) +
                                                                              ((((o =
                                                                                (t +
                                                                                  (i ^
                                                                                    (s &
                                                                                      (n ^
                                                                                        i))) +
                                                                                  r[13] +
                                                                                  2850285829) &
                                                                                4294967295) <<
                                                                                5) &
                                                                                4294967295) |
                                                                                (o >>>
                                                                                  27))) +
                                                                            ((((o =
                                                                              (s +
                                                                                (n ^
                                                                                  (i &
                                                                                    (t ^
                                                                                      n))) +
                                                                                r[2] +
                                                                                4243563512) &
                                                                              4294967295) <<
                                                                              9) &
                                                                              4294967295) |
                                                                              (o >>>
                                                                                23))) +
                                                                          ((((o =
                                                                            (i +
                                                                              (t ^
                                                                                (n &
                                                                                  (s ^
                                                                                    t))) +
                                                                              r[7] +
                                                                              1735328473) &
                                                                            4294967295) <<
                                                                            14) &
                                                                            4294967295) |
                                                                            (o >>>
                                                                              18))) +
                                                                        ((((o =
                                                                          (n +
                                                                            (s ^
                                                                              (t &
                                                                                (i ^
                                                                                  s))) +
                                                                            r[12] +
                                                                            2368359562) &
                                                                          4294967295) <<
                                                                          20) &
                                                                          4294967295) |
                                                                          (o >>>
                                                                            12))) +
                                                                      ((((o =
                                                                        (t +
                                                                          (n ^
                                                                            i ^
                                                                            s) +
                                                                          r[5] +
                                                                          4294588738) &
                                                                        4294967295) <<
                                                                        4) &
                                                                        4294967295) |
                                                                        (o >>>
                                                                          28))) +
                                                                    ((((o =
                                                                      (s +
                                                                        (t ^
                                                                          n ^
                                                                          i) +
                                                                        r[8] +
                                                                        2272392833) &
                                                                      4294967295) <<
                                                                      11) &
                                                                      4294967295) |
                                                                      (o >>>
                                                                        21))) +
                                                                  ((((o =
                                                                    (i +
                                                                      (s ^
                                                                        t ^
                                                                        n) +
                                                                      r[11] +
                                                                      1839030562) &
                                                                    4294967295) <<
                                                                    16) &
                                                                    4294967295) |
                                                                    (o >>>
                                                                      16))) +
                                                                ((((o =
                                                                  (n +
                                                                    (i ^
                                                                      s ^
                                                                      t) +
                                                                    r[14] +
                                                                    4259657740) &
                                                                  4294967295) <<
                                                                  23) &
                                                                  4294967295) |
                                                                  (o >>> 9))) +
                                                              ((((o =
                                                                (t +
                                                                  (n ^ i ^ s) +
                                                                  r[1] +
                                                                  2763975236) &
                                                                4294967295) <<
                                                                4) &
                                                                4294967295) |
                                                                (o >>> 28))) +
                                                            ((((o =
                                                              (s +
                                                                (t ^ n ^ i) +
                                                                r[4] +
                                                                1272893353) &
                                                              4294967295) <<
                                                              11) &
                                                              4294967295) |
                                                              (o >>> 21))) +
                                                          ((((o =
                                                            (i +
                                                              (s ^ t ^ n) +
                                                              r[7] +
                                                              4139469664) &
                                                            4294967295) <<
                                                            16) &
                                                            4294967295) |
                                                            (o >>> 16))) +
                                                        ((((o =
                                                          (n +
                                                            (i ^ s ^ t) +
                                                            r[10] +
                                                            3200236656) &
                                                          4294967295) <<
                                                          23) &
                                                          4294967295) |
                                                          (o >>> 9))) +
                                                      ((((o =
                                                        (t +
                                                          (n ^ i ^ s) +
                                                          r[13] +
                                                          681279174) &
                                                        4294967295) <<
                                                        4) &
                                                        4294967295) |
                                                        (o >>> 28))) +
                                                    ((((o =
                                                      (s +
                                                        (t ^ n ^ i) +
                                                        r[0] +
                                                        3936430074) &
                                                      4294967295) <<
                                                      11) &
                                                      4294967295) |
                                                      (o >>> 21))) +
                                                  ((((o =
                                                    (i +
                                                      (s ^ t ^ n) +
                                                      r[3] +
                                                      3572445317) &
                                                    4294967295) <<
                                                    16) &
                                                    4294967295) |
                                                    (o >>> 16))) +
                                                ((((o =
                                                  (n +
                                                    (i ^ s ^ t) +
                                                    r[6] +
                                                    76029189) &
                                                  4294967295) <<
                                                  23) &
                                                  4294967295) |
                                                  (o >>> 9))) +
                                              ((((o =
                                                (t +
                                                  (n ^ i ^ s) +
                                                  r[9] +
                                                  3654602809) &
                                                4294967295) <<
                                                4) &
                                                4294967295) |
                                                (o >>> 28))) +
                                            ((((o =
                                              (s +
                                                (t ^ n ^ i) +
                                                r[12] +
                                                3873151461) &
                                              4294967295) <<
                                              11) &
                                              4294967295) |
                                              (o >>> 21))) +
                                          ((((o =
                                            (i +
                                              (s ^ t ^ n) +
                                              r[15] +
                                              530742520) &
                                            4294967295) <<
                                            16) &
                                            4294967295) |
                                            (o >>> 16))) +
                                        ((((o =
                                          (n +
                                            (i ^ s ^ t) +
                                            r[2] +
                                            3299628645) &
                                          4294967295) <<
                                          23) &
                                          4294967295) |
                                          (o >>> 9))) +
                                      ((((o =
                                        (t +
                                          (i ^ (n | ~s)) +
                                          r[0] +
                                          4096336452) &
                                        4294967295) <<
                                        6) &
                                        4294967295) |
                                        (o >>> 26))) +
                                    ((((o =
                                      (s + (n ^ (t | ~i)) + r[7] + 1126891415) &
                                      4294967295) <<
                                      10) &
                                      4294967295) |
                                      (o >>> 22))) +
                                  ((((o =
                                    (i + (t ^ (s | ~n)) + r[14] + 2878612391) &
                                    4294967295) <<
                                    15) &
                                    4294967295) |
                                    (o >>> 17))) +
                                ((((o =
                                  (n + (s ^ (i | ~t)) + r[5] + 4237533241) &
                                  4294967295) <<
                                  21) &
                                  4294967295) |
                                  (o >>> 11))) +
                              ((((o =
                                (t + (i ^ (n | ~s)) + r[12] + 1700485571) &
                                4294967295) <<
                                6) &
                                4294967295) |
                                (o >>> 26))) +
                            ((((o =
                              (s + (n ^ (t | ~i)) + r[3] + 2399980690) &
                              4294967295) <<
                              10) &
                              4294967295) |
                              (o >>> 22))) +
                          ((((o =
                            (i + (t ^ (s | ~n)) + r[10] + 4293915773) &
                            4294967295) <<
                            15) &
                            4294967295) |
                            (o >>> 17))) +
                        ((((o =
                          (n + (s ^ (i | ~t)) + r[1] + 2240044497) &
                          4294967295) <<
                          21) &
                          4294967295) |
                          (o >>> 11))) +
                      ((((o =
                        (t + (i ^ (n | ~s)) + r[8] + 1873313359) &
                        4294967295) <<
                        6) &
                        4294967295) |
                        (o >>> 26))) +
                    ((((o =
                      (s + (n ^ (t | ~i)) + r[15] + 4264355552) & 4294967295) <<
                      10) &
                      4294967295) |
                      (o >>> 22))) +
                  ((((o =
                    (i + (t ^ (s | ~n)) + r[6] + 2734768916) & 4294967295) <<
                    15) &
                    4294967295) |
                    (o >>> 17))) +
                ((((o =
                  (n + (s ^ (i | ~t)) + r[13] + 1309151649) & 4294967295) <<
                  21) &
                  4294967295) |
                  (o >>> 11))) +
                ((s =
                  (t =
                    n +
                    ((((o =
                      (t + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295) <<
                      6) &
                      4294967295) |
                      (o >>> 26))) +
                  ((((o =
                    (s + (n ^ (t | ~i)) + r[11] + 3174756917) & 4294967295) <<
                    10) &
                    4294967295) |
                    (o >>> 22))) ^
                  ((i =
                    s +
                    ((((o =
                      (i + (t ^ (s | ~n)) + r[2] + 718787259) & 4294967295) <<
                      15) &
                      4294967295) |
                      (o >>> 17))) |
                    ~t)) +
                r[9] +
                3951481745) &
              4294967295),
              (e.g[0] = (e.g[0] + t) & 4294967295),
              (e.g[1] =
                (e.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) &
                4294967295),
              (e.g[2] = (e.g[2] + i) & 4294967295),
              (e.g[3] = (e.g[3] + s) & 4294967295);
          }
          function fr(e, t) {
            this.h = t;
            for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
              var s = 0 | e[i];
              (r && s == t) || ((n[i] = s), (r = !1));
            }
            this.g = n;
          }
          ((t = xn.prototype).Ra = function (e) {
            this.N = e;
          }),
            (t.ja = function (e, t, n, r) {
              if (this.g)
                throw Error(
                  "[goog.net.XhrIo] Object is active with another request=" +
                    this.I +
                    "; newUri=" +
                    e
                );
              (t = t ? t.toUpperCase() : "GET"),
                (this.I = e),
                (this.j = ""),
                (this.m = 0),
                (this.D = !1),
                (this.h = !0),
                (this.g = this.u ? this.u.g() : pt.g()),
                (this.C = this.u ? dt(this.u) : dt(pt)),
                (this.g.onreadystatechange = T(this.Oa, this));
              try {
                (this.G = !0), this.g.open(t, String(e), !0), (this.G = !1);
              } catch (e) {
                return void kn(this, e);
              }
              if (((e = n || ""), (n = new Map(this.headers)), r))
                if (Object.getPrototypeOf(r) === Object.prototype)
                  for (var s in r) n.set(s, r[s]);
                else {
                  if ("function" != typeof r.keys || "function" != typeof r.get)
                    throw Error(
                      "Unknown input type for opt_headers: " + String(r)
                    );
                  for (var o = (s = i(r.keys())).next(); !o.done; o = s.next())
                    (o = o.value), n.set(o, r.get(o));
                }
              for (
                r = Array.from(n.keys()).find(function (e) {
                  return "content-type" == e.toLowerCase();
                }),
                  s = y.FormData && e instanceof y.FormData,
                  !(0 <= N(An, t)) ||
                    r ||
                    s ||
                    n.set(
                      "Content-Type",
                      "application/x-www-form-urlencoded;charset=utf-8"
                    ),
                  r = (t = i(n)).next();
                !r.done;
                r = t.next()
              )
                (r = (n = i(r.value)).next().value),
                  (n = n.next().value),
                  this.g.setRequestHeader(r, n);
              this.L && (this.g.responseType = this.L),
                "withCredentials" in this.g &&
                  this.g.withCredentials !== this.N &&
                  (this.g.withCredentials = this.N);
              try {
                Pn(this),
                  0 < this.B &&
                    ((this.M = (function (e) {
                      return (
                        G &&
                        "number" == typeof e.timeout &&
                        void 0 !== e.ontimeout
                      );
                    })(this.g))
                      ? ((this.g.timeout = this.B),
                        (this.g.ontimeout = T(this.xa, this)))
                      : (this.A = ze(this.xa, this.B, this))),
                  (this.v = !0),
                  this.g.send(e),
                  (this.v = !1);
              } catch (e) {
                kn(this, e);
              }
            }),
            (t.xa = function () {
              void 0 !== m &&
                this.g &&
                ((this.j = "Timed out after " + this.B + "ms, aborting"),
                (this.m = 8),
                xe(this, "timeout"),
                this.abort(8));
            }),
            (t.abort = function (e) {
              this.g &&
                this.h &&
                ((this.h = !1),
                (this.l = !0),
                this.g.abort(),
                (this.l = !1),
                (this.m = e || 7),
                xe(this, "complete"),
                xe(this, "abort"),
                Ln(this));
            }),
            (t.O = function () {
              this.g &&
                (this.h &&
                  ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
                Ln(this, !0)),
                xn.Z.O.call(this);
            }),
            (t.Oa = function () {
              this.s || (this.G || this.v || this.l ? On(this) : this.nb());
            }),
            (t.nb = function () {
              On(this);
            }),
            (t.isActive = function () {
              return !!this.g;
            }),
            (t.fa = function () {
              try {
                return 2 < Mn(this) ? this.g.status : -1;
              } catch (e) {
                return -1;
              }
            }),
            (t.ma = function () {
              try {
                return this.g ? this.g.responseText : "";
              } catch (e) {
                return "";
              }
            }),
            (t.Za = function (e) {
              if (this.g) {
                var t = this.g.responseText;
                return (
                  e && 0 == t.indexOf(e) && (t = t.substring(e.length)), Tn(t)
                );
              }
            }),
            (t.La = function () {
              return this.m;
            }),
            (t.Va = function () {
              return "string" == typeof this.j ? this.j : String(this.j);
            }),
            ((t = Un.prototype).ua = 8),
            (t.H = 1),
            (t.Qa = function (e) {
              if (this.m)
                if (((this.m = null), 1 == this.H)) {
                  if (!e) {
                    (this.Y = Math.floor(1e5 * Math.random())), (e = this.Y++);
                    var t,
                      n = new wt(this, this.l, e),
                      r = this.s;
                    if (
                      (this.W && (r ? ue((r = ae(r)), this.W) : (r = this.W)),
                      null !== this.o || this.P || ((n.I = r), (r = null)),
                      this.R)
                    )
                      e: {
                        for (var i = (t = 0); i < this.j.length; i++) {
                          var s = this.j[i];
                          if (
                            void 0 ===
                            (s =
                              "__data__" in s.map &&
                              "string" == typeof (s = s.map.__data__)
                                ? s.length
                                : void 0)
                          )
                            break;
                          if (4096 < (t += s)) {
                            t = i;
                            break e;
                          }
                          if (4096 === t || i === this.j.length - 1) {
                            t = i + 1;
                            break e;
                          }
                        }
                        t = 1e3;
                      }
                    else t = 1e3;
                    (t = Qn(this, n, t)),
                      qt((i = Vt(this.I)), "RID", e),
                      qt(i, "CVER", 22),
                      this.D && qt(i, "X-HTTP-Session-Id", this.D),
                      $n(this, i),
                      r &&
                        (this.P
                          ? (t =
                              "headers=" +
                              encodeURIComponent(String(Fn(r))) +
                              "&" +
                              t)
                          : this.o && Vn(i, this.o, r)),
                      dn(this.i, n),
                      this.fb && qt(i, "TYPE", "init"),
                      this.R
                        ? (qt(i, "$req", t),
                          qt(i, "SID", "null"),
                          (n.ca = !0),
                          St(n, i, null))
                        : St(n, i, t),
                      (this.H = 2);
                  }
                } else
                  3 == this.H &&
                    (e
                      ? Kn(this, e)
                      : 0 == this.j.length || un(this.i) || Kn(this));
            }),
            (t.Pa = function () {
              if (
                ((this.u = null),
                Xn(this),
                this.ea && !(this.N || null == this.g || 0 >= this.T))
              ) {
                var e = 2 * this.T;
                this.l.info("BP detection timer enabled: " + e),
                  (this.B = ct(T(this.mb, this), e));
              }
            }),
            (t.mb = function () {
              this.B &&
                ((this.B = null),
                this.l.info("BP detection timeout reached."),
                this.l.info(
                  "Buffering proxy detected and switch to long-polling!"
                ),
                (this.G = !1),
                (this.N = !0),
                ot(10),
                qn(this),
                Xn(this));
            }),
            (t.lb = function () {
              null != this.v && ((this.v = null), qn(this), Wn(this), ot(19));
            }),
            (t.sb = function (e) {
              e
                ? (this.l.info("Successfully pinged google.com"), ot(2))
                : (this.l.info("Failed to ping google.com"), ot(1));
            }),
            (t.isActive = function () {
              return !!this.h && this.h.isActive(this);
            }),
            ((t = sr.prototype).Ea = function () {}),
            (t.Da = function () {}),
            (t.Ca = function () {}),
            (t.Ba = function () {}),
            (t.isActive = function () {
              return !0;
            }),
            (t.Ya = function () {}),
            (or.prototype.g = function (e, t) {
              return new ar(e, t);
            }),
            C(ar, Te),
            (ar.prototype.m = function () {
              (this.g.h = this.j), this.A && (this.g.J = !0);
              var e = this.g,
                t = this.l,
                n = this.h || void 0;
              ot(0),
                (e.aa = t),
                (e.qa = n || {}),
                (e.G = e.ca),
                (e.I = rr(e, null, e.aa)),
                Gn(e);
            }),
            (ar.prototype.close = function () {
              jn(this.g);
            }),
            (ar.prototype.u = function (e) {
              var t = this.g;
              if ("string" == typeof e) {
                var n = {};
                (n.__data__ = e), (e = n);
              } else this.v && (((n = {}).__data__ = De(e)), (e = n));
              t.j.push(new on(t.ib++, e)), 3 == t.H && Gn(t);
            }),
            (ar.prototype.O = function () {
              (this.g.h = null),
                delete this.j,
                jn(this.g),
                delete this.g,
                ar.Z.O.call(this);
            }),
            C(cr, mt),
            C(ur, yt),
            C(lr, sr),
            (lr.prototype.Ea = function () {
              xe(this.g, "a");
            }),
            (lr.prototype.Da = function (e) {
              xe(this.g, new cr(e));
            }),
            (lr.prototype.Ca = function (e) {
              xe(this.g, new ur(e));
            }),
            (lr.prototype.Ba = function () {
              xe(this.g, "b");
            }),
            C(hr, function () {
              this.blockSize = -1;
            }),
            (hr.prototype.reset = function () {
              (this.g[0] = 1732584193),
                (this.g[1] = 4023233417),
                (this.g[2] = 2562383102),
                (this.g[3] = 271733878),
                (this.i = this.h = 0);
            }),
            (hr.prototype.j = function (e, t) {
              void 0 === t && (t = e.length);
              for (
                var n = t - this.blockSize, r = this.m, i = this.h, s = 0;
                s < t;

              ) {
                if (0 == i)
                  for (; s <= n; ) dr(this, e, s), (s += this.blockSize);
                if ("string" == typeof e) {
                  for (; s < t; )
                    if (((r[i++] = e.charCodeAt(s++)), i == this.blockSize)) {
                      dr(this, r), (i = 0);
                      break;
                    }
                } else
                  for (; s < t; )
                    if (((r[i++] = e[s++]), i == this.blockSize)) {
                      dr(this, r), (i = 0);
                      break;
                    }
              }
              (this.h = i), (this.i += t);
            }),
            (hr.prototype.l = function () {
              var e = Array(
                (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
              );
              e[0] = 128;
              for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
              var n = 8 * this.i;
              for (t = e.length - 8; t < e.length; ++t)
                (e[t] = 255 & n), (n /= 256);
              for (this.j(e), e = Array(16), t = n = 0; 4 > t; ++t)
                for (var r = 0; 32 > r; r += 8)
                  e[n++] = (this.g[t] >>> r) & 255;
              return e;
            });
          var pr = {};
          function gr(e) {
            return -128 <= e && 128 > e
              ? (function (e, t) {
                  var n = pr;
                  return Object.prototype.hasOwnProperty.call(n, e)
                    ? n[e]
                    : (n[e] = (function (e) {
                        return new fr([0 | e], 0 > e ? -1 : 0);
                      })(e));
                })(e)
              : new fr([0 | e], 0 > e ? -1 : 0);
          }
          function mr(e) {
            if (isNaN(e) || !isFinite(e)) return vr;
            if (0 > e) return Er(mr(-e));
            for (var t = [], n = 1, r = 0; e >= n; r++)
              (t[r] = (e / n) | 0), (n *= yr);
            return new fr(t, 0);
          }
          var yr = 4294967296,
            vr = gr(0),
            wr = gr(1),
            br = gr(16777216);
          function _r(e) {
            if (0 != e.h) return !1;
            for (var t = 0; t < e.g.length; t++) if (0 != e.g[t]) return !1;
            return !0;
          }
          function Ir(e) {
            return -1 == e.h;
          }
          function Er(e) {
            for (var t = e.g.length, n = [], r = 0; r < t; r++) n[r] = ~e.g[r];
            return new fr(n, ~e.h).add(wr);
          }
          function Sr(e, t) {
            return e.add(Er(t));
          }
          function Tr(e, t) {
            for (; (65535 & e[t]) != e[t]; )
              (e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++;
          }
          function xr(e, t) {
            (this.g = e), (this.h = t);
          }
          function Cr(e, t) {
            if (_r(t)) throw Error("division by zero");
            if (_r(e)) return new xr(vr, vr);
            if (Ir(e)) return (t = Cr(Er(e), t)), new xr(Er(t.g), Er(t.h));
            if (Ir(t)) return (t = Cr(e, Er(t))), new xr(Er(t.g), t.h);
            if (30 < e.g.length) {
              if (Ir(e) || Ir(t))
                throw Error("slowDivide_ only works with positive integers.");
              for (var n = wr, r = t; 0 >= r.$(e); ) (n = Dr(n)), (r = Dr(r));
              var i = Ar(n, 1),
                s = Ar(r, 1);
              for (r = Ar(r, 2), n = Ar(n, 2); !_r(r); ) {
                var o = s.add(r);
                0 >= o.$(e) && ((i = i.add(n)), (s = o)),
                  (r = Ar(r, 1)),
                  (n = Ar(n, 1));
              }
              return (t = Sr(e, i.S(t))), new xr(i, t);
            }
            for (i = vr; 0 <= e.$(t); ) {
              for (
                n = Math.max(1, Math.floor(e.ga() / t.ga())),
                  r =
                    48 >= (r = Math.ceil(Math.log(n) / Math.LN2))
                      ? 1
                      : Math.pow(2, r - 48),
                  o = (s = mr(n)).S(t);
                Ir(o) || 0 < o.$(e);

              )
                o = (s = mr((n -= r))).S(t);
              _r(s) && (s = wr), (i = i.add(s)), (e = Sr(e, o));
            }
            return new xr(i, e);
          }
          function Dr(e) {
            for (var t = e.g.length + 1, n = [], r = 0; r < t; r++)
              n[r] = (e.F(r) << 1) | (e.F(r - 1) >>> 31);
            return new fr(n, e.h);
          }
          function Ar(e, t) {
            var n = t >> 5;
            t %= 32;
            for (var r = e.g.length - n, i = [], s = 0; s < r; s++)
              i[s] =
                0 < t
                  ? (e.F(s + n) >>> t) | (e.F(s + n + 1) << (32 - t))
                  : e.F(s + n);
            return new fr(i, e.h);
          }
          ((t = fr.prototype).ga = function () {
            if (Ir(this)) return -Er(this).ga();
            for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
              var r = this.F(n);
              (e += (0 <= r ? r : yr + r) * t), (t *= yr);
            }
            return e;
          }),
            (t.toString = function (e) {
              if (2 > (e = e || 10) || 36 < e)
                throw Error("radix out of range: " + e);
              if (_r(this)) return "0";
              if (Ir(this)) return "-" + Er(this).toString(e);
              for (var t = mr(Math.pow(e, 6)), n = this, r = ""; ; ) {
                var i = Cr(n, t).g,
                  s = (
                    (0 < (n = Sr(n, i.S(t))).g.length ? n.g[0] : n.h) >>> 0
                  ).toString(e);
                if (_r((n = i))) return s + r;
                for (; 6 > s.length; ) s = "0" + s;
                r = s + r;
              }
            }),
            (t.F = function (e) {
              return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
            }),
            (t.$ = function (e) {
              return Ir((e = Sr(this, e))) ? -1 : _r(e) ? 0 : 1;
            }),
            (t.abs = function () {
              return Ir(this) ? Er(this) : this;
            }),
            (t.add = function (e) {
              for (
                var t = Math.max(this.g.length, e.g.length),
                  n = [],
                  r = 0,
                  i = 0;
                i <= t;
                i++
              ) {
                var s = r + (65535 & this.F(i)) + (65535 & e.F(i)),
                  o = (s >>> 16) + (this.F(i) >>> 16) + (e.F(i) >>> 16);
                (r = o >>> 16),
                  (s &= 65535),
                  (o &= 65535),
                  (n[i] = (o << 16) | s);
              }
              return new fr(n, -2147483648 & n[n.length - 1] ? -1 : 0);
            }),
            (t.S = function (e) {
              if (_r(this) || _r(e)) return vr;
              if (Ir(this))
                return Ir(e) ? Er(this).S(Er(e)) : Er(Er(this).S(e));
              if (Ir(e)) return Er(this.S(Er(e)));
              if (0 > this.$(br) && 0 > e.$(br)) return mr(this.ga() * e.ga());
              for (
                var t = this.g.length + e.g.length, n = [], r = 0;
                r < 2 * t;
                r++
              )
                n[r] = 0;
              for (r = 0; r < this.g.length; r++)
                for (var i = 0; i < e.g.length; i++) {
                  var s = this.F(r) >>> 16,
                    o = 65535 & this.F(r),
                    a = e.F(i) >>> 16,
                    c = 65535 & e.F(i);
                  (n[2 * r + 2 * i] += o * c),
                    Tr(n, 2 * r + 2 * i),
                    (n[2 * r + 2 * i + 1] += s * c),
                    Tr(n, 2 * r + 2 * i + 1),
                    (n[2 * r + 2 * i + 1] += o * a),
                    Tr(n, 2 * r + 2 * i + 1),
                    (n[2 * r + 2 * i + 2] += s * a),
                    Tr(n, 2 * r + 2 * i + 2);
                }
              for (r = 0; r < t; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
              for (r = t; r < 2 * t; r++) n[r] = 0;
              return new fr(n, 0);
            }),
            (t.jb = function (e) {
              return Cr(this, e).h;
            }),
            (t.and = function (e) {
              for (
                var t = Math.max(this.g.length, e.g.length), n = [], r = 0;
                r < t;
                r++
              )
                n[r] = this.F(r) & e.F(r);
              return new fr(n, this.h & e.h);
            }),
            (t.or = function (e) {
              for (
                var t = Math.max(this.g.length, e.g.length), n = [], r = 0;
                r < t;
                r++
              )
                n[r] = this.F(r) | e.F(r);
              return new fr(n, this.h | e.h);
            }),
            (t.xor = function (e) {
              for (
                var t = Math.max(this.g.length, e.g.length), n = [], r = 0;
                r < t;
                r++
              )
                n[r] = this.F(r) ^ e.F(r);
              return new fr(n, this.h ^ e.h);
            }),
            (or.prototype.createWebChannel = or.prototype.g),
            (ar.prototype.send = ar.prototype.u),
            (ar.prototype.open = ar.prototype.m),
            (ar.prototype.close = ar.prototype.close),
            (ut.NO_ERROR = 0),
            (ut.TIMEOUT = 8),
            (ut.HTTP_ERROR = 6),
            (lt.COMPLETE = "complete"),
            (ft.EventType = gt),
            (gt.OPEN = "a"),
            (gt.CLOSE = "b"),
            (gt.ERROR = "c"),
            (gt.MESSAGE = "d"),
            (Te.prototype.listen = Te.prototype.P),
            (xn.prototype.listenOnce = xn.prototype.R),
            (xn.prototype.getLastError = xn.prototype.Va),
            (xn.prototype.getLastErrorCode = xn.prototype.La),
            (xn.prototype.getStatus = xn.prototype.fa),
            (xn.prototype.getResponseJson = xn.prototype.Za),
            (xn.prototype.getResponseText = xn.prototype.ma),
            (xn.prototype.send = xn.prototype.ja),
            (xn.prototype.setWithCredentials = xn.prototype.Ra),
            (hr.prototype.digest = hr.prototype.l),
            (hr.prototype.reset = hr.prototype.reset),
            (hr.prototype.update = hr.prototype.j),
            (fr.prototype.add = fr.prototype.add),
            (fr.prototype.multiply = fr.prototype.S),
            (fr.prototype.modulo = fr.prototype.jb),
            (fr.prototype.compare = fr.prototype.$),
            (fr.prototype.toNumber = fr.prototype.ga),
            (fr.prototype.toString = fr.prototype.toString),
            (fr.prototype.getBits = fr.prototype.F),
            (fr.fromNumber = mr),
            (fr.fromString = function e(t, n) {
              if (0 == t.length)
                throw Error("number format error: empty string");
              if (2 > (n = n || 10) || 36 < n)
                throw Error("radix out of range: " + n);
              if ("-" == t.charAt(0)) return Er(e(t.substring(1), n));
              if (0 <= t.indexOf("-"))
                throw Error('number format error: interior "-" character');
              for (
                var r = mr(Math.pow(n, 8)), i = vr, s = 0;
                s < t.length;
                s += 8
              ) {
                var o = Math.min(8, t.length - s),
                  a = parseInt(t.substring(s, s + o), n);
                8 > o
                  ? ((o = mr(Math.pow(n, o))), (i = i.S(o).add(mr(a))))
                  : (i = (i = i.S(r)).add(mr(a)));
              }
              return i;
            }),
            (e.exports.createWebChannelTransport = function () {
              return new or();
            }),
            (e.exports.getStatEventTarget = function () {
              return nt();
            }),
            (e.exports.ErrorCode = ut),
            (e.exports.EventType = lt),
            (e.exports.Event = et),
            (e.exports.Stat = {
              Ab: 0,
              Db: 1,
              Eb: 2,
              Xb: 3,
              bc: 4,
              Zb: 5,
              $b: 6,
              Yb: 7,
              Wb: 8,
              ac: 9,
              PROXY: 10,
              NOPROXY: 11,
              Ub: 12,
              Qb: 13,
              Rb: 14,
              Pb: 15,
              Sb: 16,
              Tb: 17,
              wb: 18,
              vb: 19,
              xb: 20,
            }),
            (e.exports.FetchXmlHttpFactory = wn),
            (e.exports.WebChannel = ft),
            (e.exports.XhrIo = xn),
            (e.exports.Md5 = hr),
            (e.exports.Integer = fr);
        }).apply(
          void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        );
      },
      497: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(583);
        r.registerVersion("firebase", "10.1.0", "app"),
          Object.keys(r).forEach(function (e) {
            "default" === e ||
              t.hasOwnProperty(e) ||
              Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                  return r[e];
                },
              });
          });
      },
      90: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(654);
        Object.keys(r).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            });
        });
      },
      987: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            deleteDB: () => m,
            openDB: () => g,
            unwrap: () => p,
            wrap: () => f,
          });
        const r = (e, t) => t.some((t) => e instanceof t);
        let i, s;
        const o = new WeakMap(),
          a = new WeakMap(),
          c = new WeakMap(),
          u = new WeakMap(),
          l = new WeakMap();
        let h = {
          get(e, t, n) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return a.get(e);
              if ("objectStoreNames" === t)
                return e.objectStoreNames || c.get(e);
              if ("store" === t)
                return n.objectStoreNames[1]
                  ? void 0
                  : n.objectStore(n.objectStoreNames[0]);
            }
            return f(e[t]);
          },
          set: (e, t, n) => ((e[t] = n), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
        function d(e) {
          return "function" == typeof e
            ? (t = e) !== IDBDatabase.prototype.transaction ||
              "objectStoreNames" in IDBTransaction.prototype
              ? (
                  s ||
                  (s = [
                    IDBCursor.prototype.advance,
                    IDBCursor.prototype.continue,
                    IDBCursor.prototype.continuePrimaryKey,
                  ])
                ).includes(t)
                ? function (...e) {
                    return t.apply(p(this), e), f(o.get(this));
                  }
                : function (...e) {
                    return f(t.apply(p(this), e));
                  }
              : function (e, ...n) {
                  const r = t.call(p(this), e, ...n);
                  return c.set(r, e.sort ? e.sort() : [e]), f(r);
                }
            : (e instanceof IDBTransaction &&
                (function (e) {
                  if (a.has(e)) return;
                  const t = new Promise((t, n) => {
                    const r = () => {
                        e.removeEventListener("complete", i),
                          e.removeEventListener("error", s),
                          e.removeEventListener("abort", s);
                      },
                      i = () => {
                        t(), r();
                      },
                      s = () => {
                        n(
                          e.error ||
                            new DOMException("AbortError", "AbortError")
                        ),
                          r();
                      };
                    e.addEventListener("complete", i),
                      e.addEventListener("error", s),
                      e.addEventListener("abort", s);
                  });
                  a.set(e, t);
                })(e),
              r(
                e,
                i ||
                  (i = [
                    IDBDatabase,
                    IDBObjectStore,
                    IDBIndex,
                    IDBCursor,
                    IDBTransaction,
                  ])
              )
                ? new Proxy(e, h)
                : e);
          var t;
        }
        function f(e) {
          if (e instanceof IDBRequest)
            return (function (e) {
              const t = new Promise((t, n) => {
                const r = () => {
                    e.removeEventListener("success", i),
                      e.removeEventListener("error", s);
                  },
                  i = () => {
                    t(f(e.result)), r();
                  },
                  s = () => {
                    n(e.error), r();
                  };
                e.addEventListener("success", i),
                  e.addEventListener("error", s);
              });
              return (
                t
                  .then((t) => {
                    t instanceof IDBCursor && o.set(t, e);
                  })
                  .catch(() => {}),
                l.set(t, e),
                t
              );
            })(e);
          if (u.has(e)) return u.get(e);
          const t = d(e);
          return t !== e && (u.set(e, t), l.set(t, e)), t;
        }
        const p = (e) => l.get(e);
        function g(
          e,
          t,
          { blocked: n, upgrade: r, blocking: i, terminated: s } = {}
        ) {
          const o = indexedDB.open(e, t),
            a = f(o);
          return (
            r &&
              o.addEventListener("upgradeneeded", (e) => {
                r(f(o.result), e.oldVersion, e.newVersion, f(o.transaction), e);
              }),
            n &&
              o.addEventListener("blocked", (e) =>
                n(e.oldVersion, e.newVersion, e)
              ),
            a
              .then((e) => {
                s && e.addEventListener("close", () => s()),
                  i &&
                    e.addEventListener("versionchange", (e) =>
                      i(e.oldVersion, e.newVersion, e)
                    );
              })
              .catch(() => {}),
            a
          );
        }
        function m(e, { blocked: t } = {}) {
          const n = indexedDB.deleteDatabase(e);
          return (
            t && n.addEventListener("blocked", (e) => t(e.oldVersion, e)),
            f(n).then(() => {})
          );
        }
        const y = ["get", "getKey", "getAll", "getAllKeys", "count"],
          v = ["put", "add", "delete", "clear"],
          w = new Map();
        function b(e, t) {
          if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
            return;
          if (w.get(t)) return w.get(t);
          const n = t.replace(/FromIndex$/, ""),
            r = t !== n,
            i = v.includes(n);
          if (
            !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
            (!i && !y.includes(n))
          )
            return;
          const s = async function (e, ...t) {
            const s = this.transaction(e, i ? "readwrite" : "readonly");
            let o = s.store;
            return (
              r && (o = o.index(t.shift())),
              (await Promise.all([o[n](...t), i && s.done]))[0]
            );
          };
          return w.set(t, s), s;
        }
        var _;
        (_ = h),
          (h = {
            ..._,
            get: (e, t, n) => b(e, t) || _.get(e, t, n),
            has: (e, t) => !!b(e, t) || _.has(e, t),
          });
      },
      556: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            __addDisposableResource: () => P,
            __assign: () => s,
            __asyncDelegator: () => T,
            __asyncGenerator: () => S,
            __asyncValues: () => x,
            __await: () => E,
            __awaiter: () => p,
            __classPrivateFieldGet: () => N,
            __classPrivateFieldIn: () => L,
            __classPrivateFieldSet: () => O,
            __createBinding: () => m,
            __decorate: () => a,
            __disposeResources: () => R,
            __esDecorate: () => u,
            __exportStar: () => y,
            __extends: () => i,
            __generator: () => g,
            __importDefault: () => k,
            __importStar: () => A,
            __makeTemplateObject: () => C,
            __metadata: () => f,
            __param: () => c,
            __propKey: () => h,
            __read: () => w,
            __rest: () => o,
            __runInitializers: () => l,
            __setFunctionName: () => d,
            __spread: () => b,
            __spreadArray: () => I,
            __spreadArrays: () => _,
            __values: () => v,
            default: () => F,
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var s = function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            s.apply(this, arguments)
          );
        };
        function o(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            s = arguments.length,
            o =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
          return s > 3 && o && Object.defineProperty(t, n, o), o;
        }
        function c(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function u(e, t, n, r, i, s) {
          function o(e) {
            if (void 0 !== e && "function" != typeof e)
              throw new TypeError("Function expected");
            return e;
          }
          for (
            var a,
              c = r.kind,
              u = "getter" === c ? "get" : "setter" === c ? "set" : "value",
              l = !t && e ? (r.static ? e : e.prototype) : null,
              h = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}),
              d = !1,
              f = n.length - 1;
            f >= 0;
            f--
          ) {
            var p = {};
            for (var g in r) p[g] = "access" === g ? {} : r[g];
            for (var g in r.access) p.access[g] = r.access[g];
            p.addInitializer = function (e) {
              if (d)
                throw new TypeError(
                  "Cannot add initializers after decoration has completed"
                );
              s.push(o(e || null));
            };
            var m = (0, n[f])(
              "accessor" === c ? { get: h.get, set: h.set } : h[u],
              p
            );
            if ("accessor" === c) {
              if (void 0 === m) continue;
              if (null === m || "object" != typeof m)
                throw new TypeError("Object expected");
              (a = o(m.get)) && (h.get = a),
                (a = o(m.set)) && (h.set = a),
                (a = o(m.init)) && i.unshift(a);
            } else (a = o(m)) && ("field" === c ? i.unshift(a) : (h[u] = a));
          }
          l && Object.defineProperty(l, r.name, h), (d = !0);
        }
        function l(e, t, n) {
          for (var r = arguments.length > 2, i = 0; i < t.length; i++)
            n = r ? t[i].call(e, n) : t[i].call(e);
          return r ? n : void 0;
        }
        function h(e) {
          return "symbol" == typeof e ? e : "".concat(e);
        }
        function d(e, t, n) {
          return (
            "symbol" == typeof t &&
              (t = t.description ? "[".concat(t.description, "]") : ""),
            Object.defineProperty(e, "name", {
              configurable: !0,
              value: n ? "".concat(n, " ", t) : t,
            })
          );
        }
        function f(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function p(e, t, n, r) {
          return new (n || (n = Promise))(function (i, s) {
            function o(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function a(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(o, a);
            }
            c((r = r.apply(e, t || [])).next());
          });
        }
        function g(e, t) {
          var n,
            r,
            i,
            s,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function a(a) {
            return function (c) {
              return (function (a) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s && ((s = 0), a[0] && (o = 0)), o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, a[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                      case 0:
                      case 1:
                        i = a;
                        break;
                      case 4:
                        return o.label++, { value: a[1], done: !1 };
                      case 5:
                        o.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = o.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== a[0] && 2 !== a[0])
                          )
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          o.label = a[1];
                          break;
                        }
                        if (6 === a[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = a);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(a);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    a = t.call(e, o);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, c]);
            };
          }
        }
        var m = Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (i &&
                !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            };
        function y(e, t) {
          for (var n in e)
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              m(t, e, n);
        }
        function v(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function w(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            s = n.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
              o.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = s.return) && n.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        }
        function b() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(w(arguments[t]));
          return e;
        }
        function _() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
              r[i] = s[o];
          return r;
        }
        function I(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, s = t.length; i < s; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        function E(e) {
          return this instanceof E ? ((this.v = e), this) : new E(e);
        }
        function S(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            s = [];
          return (
            (r = {}),
            o("next"),
            o("throw"),
            o("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function o(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  s.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof E
                ? Promise.resolve(n.value.v).then(c, u)
                : l(s[0][2], n);
            } catch (e) {
              l(s[0][3], e);
            }
            var n;
          }
          function c(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function T(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: E(e[r](t)), done: !1 }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function x(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = v(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function C(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        var D = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            };
        function A(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                m(t, e, n);
          return D(t, e), t;
        }
        function k(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function N(e, t, n, r) {
          if ("a" === n && !r)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function O(e, t, n, r, i) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        }
        function L(e, t) {
          if (null === t || ("object" != typeof t && "function" != typeof t))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof e ? t === e : e.has(t);
        }
        function P(e, t, n) {
          if (null != t) {
            if ("object" != typeof t && "function" != typeof t)
              throw new TypeError("Object expected.");
            var r;
            if (n) {
              if (!Symbol.asyncDispose)
                throw new TypeError("Symbol.asyncDispose is not defined.");
              r = t[Symbol.asyncDispose];
            }
            if (void 0 === r) {
              if (!Symbol.dispose)
                throw new TypeError("Symbol.dispose is not defined.");
              r = t[Symbol.dispose];
            }
            if ("function" != typeof r)
              throw new TypeError("Object not disposable.");
            e.stack.push({ value: t, dispose: r, async: n });
          } else n && e.stack.push({ async: !0 });
          return t;
        }
        var M =
          "function" == typeof SuppressedError
            ? SuppressedError
            : function (e, t, n) {
                var r = new Error(n);
                return (
                  (r.name = "SuppressedError"),
                  (r.error = e),
                  (r.suppressed = t),
                  r
                );
              };
        function R(e) {
          function t(t) {
            (e.error = e.hasError
              ? new M(t, e.error, "An error was suppressed during disposal.")
              : t),
              (e.hasError = !0);
          }
          return (function n() {
            for (; e.stack.length; ) {
              var r = e.stack.pop();
              try {
                var i = r.dispose && r.dispose.call(r.value);
                if (r.async)
                  return Promise.resolve(i).then(n, function (e) {
                    return t(e), n();
                  });
              } catch (e) {
                t(e);
              }
            }
            if (e.hasError) throw e.error;
          })();
        }
        const F = {
          __extends: i,
          __assign: s,
          __rest: o,
          __decorate: a,
          __param: c,
          __metadata: f,
          __awaiter: p,
          __generator: g,
          __createBinding: m,
          __exportStar: y,
          __values: v,
          __read: w,
          __spread: b,
          __spreadArrays: _,
          __spreadArray: I,
          __await: E,
          __asyncGenerator: S,
          __asyncDelegator: T,
          __asyncValues: x,
          __makeTemplateObject: C,
          __importStar: A,
          __importDefault: k,
          __classPrivateFieldGet: N,
          __classPrivateFieldSet: O,
          __classPrivateFieldIn: L,
          __addDisposableResource: P,
          __disposeResources: R,
        };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      const e = n(497);
      n(90),
        e.initializeApp({
          apiKey: "AIzaSyD8oDcmAz1I2bb7i_SRCxlBvXvS2KQRjsc",
          authDomain: "twitter-acb56.firebaseapp.com",
          projectId: "twitter-acb56",
        }),
        addEventListener("scheduled", (t) => {
          t.waitUntil(
            (async function () {
              try {
                const t = e.firestore().collection("YOUR_FIRESTORE_COLLECTION");
                return (
                  await (async function (t) {
                    const n = await t.get(),
                      r = n.size;
                    if (0 === r) return;
                    let i = e.firestore().batch(),
                      s = 0;
                    return (
                      n.forEach((e) => {
                        if ((i.delete(e.ref), s++, s % 500 == 0 || s === r))
                          return i.commit();
                      }),
                      null
                    );
                  })(t),
                  new Response("Firestore database deleted successfully.", {
                    status: 200,
                  })
                );
              } catch (e) {
                return (
                  console.error("Error deleting Firestore database:", e),
                  new Response("Error deleting Firestore database.", {
                    status: 500,
                  })
                );
              }
            })()
          );
        });
    })();
})();
