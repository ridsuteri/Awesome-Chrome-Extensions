!(function (e) {
  function t(t) {
    for (
      var i, o, a = t[0], l = t[1], c = t[2], d = 0, h = [];
      d < a.length;
      d++
    )
      (o = a[d]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]),
        (r[o] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    for (u && u(t); h.length; ) h.shift()();
    return n.push.apply(n, c || []), s();
  }
  function s() {
    for (var e, t = 0; t < n.length; t++) {
      for (var s = n[t], i = !0, a = 1; a < s.length; a++) {
        var l = s[a];
        0 !== r[l] && (i = !1);
      }
      i && (n.splice(t--, 1), (e = o((o.s = s[0]))));
    }
    return e;
  }
  var i = {},
    r = { 4: 0 },
    n = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var s = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
  }
  (o.m = e),
    (o.c = i),
    (o.d = function (e, t, s) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (o.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          o.d(
            s,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return s;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    l = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var u = l;
  n.push([7, 0]), s();
})([
  ,
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = s(3);
    (t.fetchDomainString = i.fetchDomainString),
      (t.fetchUrlString = i.fetchUrlString),
      (t.isUrlInList = i.isUrlInList),
      (t.isEmpty = i.isEmpty),
      (t.isSystemDarkMode = i.isSystemDarkMode);
    var r = s(4);
    t.permission = r.permission;
    var n = s(5);
    t.runtime = n.runtime;
    var o = s(6);
    t.tabs = o.tabs;
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.config = {
      cssFilePath: "app/app.css",
      storageDomainList: "domainList",
      storageExcludedUrlList: "excludedUrlList",
      domainList: [],
      excludedUrlList: [],
      defaultDomainList: ["github.com", "gist.github.com"],
      defaultExcludedUrlList: ["github.com/marketplace"],
      useSystemPrefersScheme: !1,
      uninstallQuestionnaire:
        "https://github.com/ridsuteri/Awesome-Chrome-Extensions/issues/439",
    };
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.fetchDomainString = (e) => {
      if (!e) return "";
      let t = e.match(
        /([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?/g
      );
      return null === t ? "" : t[0];
    };
    t.fetchUrlString = (e) => {
      if (!e) return "";
      let t = e.match(
        /([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\/.*)?$/g
      );
      return null === t ? "" : t[0];
    };
    t.isUrlInList = (e, t, s = !1) => {
      var i = !1;
      return (
        t.forEach((t) => {
          let r = new RegExp(`^${t}${s ? "\\w*" : "(/+|$)"}`, "g");
          i = !(!i && !e.match(r));
        }),
        i
      );
    };
    t.isEmpty = (e) => null == e || 0 === Object.getOwnPropertyNames(e).length;
    t.isSystemDarkMode = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = s(0),
      r = {
        set: (e, t, s) => {
          s ||
            (s = (s) => {
              console.log(`${e} set ${t} is ${s ? "granted" : "not granted"}.`);
            }),
            i.browser.permissions
              .request({ origins: [e], permissions: [t] })
              .then(s);
        },
        remove: (e, t, s) => {
          s ||
            (s = (s) => {
              console.log(
                `${e} set '${t}' permission is ${
                  s ? "removed" : "not removed"
                }.`
              );
            }),
            i.browser.permissions
              .remove({ origins: [e], permissions: [t] })
              .then(s);
        },
        isSupport: (e, t, s) => {
          s ||
            (s = (s) => {
              console.log(`${s ? "Yes" : "Not"}, ${e} has '${t}' permission.`);
            }),
            i.browser.permissions
              .contains({ origins: [e], permissions: [t] })
              .then(s);
        },
        print: () => {
          i.browser.permissions.getAll().then((e) => console.table(e));
        },
      };
    t.permission = r;
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = s(0),
      r = {
        setUninstallURL: (e) => {
          i.browser.runtime.setUninstallURL(e).then(() => {
            console.log("We are sorry to see you go! :(");
          });
        },
      };
    t.runtime = r;
  },
  function (e, t, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const i = s(0),
      r = {
        getCurrentTab: () =>
          i.browser.tabs
            .query({ active: !0, currentWindow: !0 })
            .then((e) => e[0]),
        addTab: (e) => {
          i.browser.tabs.create({ active: !0, url: "http://" + e });
        },
      };
    t.tabs = r;
  },
  function (e, t, s) {
    "use strict";
    var i =
      (this && this.__awaiter) ||
      function (e, t, s, i) {
        return new (s || (s = Promise))(function (r, n) {
          function o(e) {
            try {
              l(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })).then(o, a);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = s(8),
      n = s(0),
      o = s(2),
      a = s(1),
      l = s(1);
    var c;
    !(function (e) {
      class t {
        constructor(e) {
          (this.hasPermissions = !!n.browser.storage),
            (this.init = () => {
              n.browser.storage.sync
                .get([
                  o.config.storageDomainList,
                  o.config.storageExcludedUrlList,
                ])
                .then((e) => {
                  (this.domainList = e.domainList),
                    (this.excludedUrlList = e.excludedUrlList),
                    console.log(this.domainList);
                })
                .catch((e) => {
                  (this.domainList = ["ERROR"]),
                    console.log(this.domainList),
                    console.log(e);
                })
                .finally(() => {
                  this.scope.$apply();
                });
            }),
            (this.add = () => {
              l.tabs.getCurrentTab().then((e) => {
                let t = this.yourDomain ? this.yourDomain : e.url,
                  s = a.fetchDomainString(t);
                (this.yourDomain = ""),
                  "" !== s &&
                    (this.domainList.includes(s) ||
                      (this.domainList.push(s),
                      n.browser.storage.sync.set({
                        domainList: this.domainList,
                      })));
              });
            }),
            (this.remove = (e) => {
              (this.domainList = [...this.domainList.filter((t) => t !== e)]),
                n.browser.storage.sync.set({ domainList: this.domainList });
            }),
            (this.addExcludedUrl = () => {
              l.tabs.getCurrentTab().then((e) => {
                let t = this.yourExcludedDomain
                    ? this.yourExcludedDomain
                    : e.url,
                  s = a.fetchUrlString(t);
                (this.yourExcludedDomain = ""),
                  "" !== s &&
                    (this.excludedUrlList.includes(s) ||
                      (this.excludedUrlList.push(s),
                      n.browser.storage.sync.set({
                        excludedUrlList: this.excludedUrlList,
                      })));
              });
            }),
            (this.removeExcludedUrl = (e) => {
              (this.excludedUrlList = [
                ...this.excludedUrlList.filter((t) => t !== e),
              ]),
                n.browser.storage.sync.set({
                  excludedUrlList: this.excludedUrlList,
                });
            }),
            (this.reset = () => {
              (this.domainList = o.config.defaultDomainList),
                (this.excludedUrlList = o.config.defaultExcludedUrlList),
                n.browser.storage.sync.clear().then(() => {
                  n.browser.storage.sync.set({
                    domainList: o.config.defaultDomainList,
                  }),
                    n.browser.storage.sync.set({
                      excludedUrlList: o.config.defaultExcludedUrlList,
                    });
                });
            }),
            (this.navigate = (e) => {
              l.tabs.addTab(e);
            }),
            (this.toggleDarkTheme = (e) =>
              i(this, void 0, void 0, function* () {
                this.useDarkTheme = e;
              })),
            (this.scope = e),
            this.init();
        }
      }
      (t.$inject = ["$scope"]),
        r.module("app", []).controller("popupController", t);
    })(c || (c = {}));
  },
]);
