!(function (e) {
  function t(t) {
    for (
      var s, i, a = t[0], l = t[1], c = t[2], d = 0, f = [];
      d < a.length;
      d++
    )
      (i = a[d]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && f.push(n[i][0]),
        (n[i] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    for (u && u(t); f.length; ) f.shift()();
    return o.push.apply(o, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], s = !0, a = 1; a < r.length; a++) {
        var l = r[a];
        0 !== n[l] && (s = !1);
      }
      s && (o.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var s = {},
    n = { 1: 0 },
    o = [];
  function i(t) {
    if (s[t]) return s[t].exports;
    var r = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = s),
    (i.d = function (e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          i.d(
            r,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return r;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    l = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var u = l;
  o.push([12, 0]), r();
})([
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = r(3);
    (t.fetchDomainString = s.fetchDomainString),
      (t.fetchUrlString = s.fetchUrlString),
      (t.isUrlInList = s.isUrlInList),
      (t.isEmpty = s.isEmpty),
      (t.isSystemDarkMode = s.isSystemDarkMode);
    var n = r(4);
    t.permission = n.permission;
    var o = r(5);
    t.runtime = o.runtime;
    var i = r(6);
    t.tabs = i.tabs;
  },
  function (e, t, r) {
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
        "",
    };
  },
  function (e, t, r) {
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
    t.isUrlInList = (e, t, r = !1) => {
      var s = !1;
      return (
        t.forEach((t) => {
          let n = new RegExp(`^${t}${r ? "\\w*" : "(/+|$)"}`, "g");
          s = !(!s && !e.match(n));
        }),
        s
      );
    };
    t.isEmpty = (e) => null == e || 0 === Object.getOwnPropertyNames(e).length;
    t.isSystemDarkMode = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = r(0),
      n = {
        set: (e, t, r) => {
          r ||
            (r = (r) => {
              console.log(`${e} set ${t} is ${r ? "granted" : "not granted"}.`);
            }),
            s.browser.permissions
              .request({ origins: [e], permissions: [t] })
              .then(r);
        },
        remove: (e, t, r) => {
          r ||
            (r = (r) => {
              console.log(
                `${e} set '${t}' permission is ${
                  r ? "removed" : "not removed"
                }.`
              );
            }),
            s.browser.permissions
              .remove({ origins: [e], permissions: [t] })
              .then(r);
        },
        isSupport: (e, t, r) => {
          r ||
            (r = (r) => {
              console.log(`${r ? "Yes" : "Not"}, ${e} has '${t}' permission.`);
            }),
            s.browser.permissions
              .contains({ origins: [e], permissions: [t] })
              .then(r);
        },
        print: () => {
          s.browser.permissions.getAll().then((e) => console.table(e));
        },
      };
    t.permission = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = r(0),
      n = {
        setUninstallURL: (e) => {
          s.browser.runtime.setUninstallURL(e).then(() => {
            console.log("We are sorry to see you go! :(");
          });
        },
      };
    t.runtime = n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = r(0),
      n = {
        getCurrentTab: () =>
          s.browser.tabs
            .query({ active: !0, currentWindow: !0 })
            .then((e) => e[0]),
        addTab: (e) => {
          s.browser.tabs.create({ active: !0, url: "http://" + e });
        },
      };
    t.tabs = n;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    const s = r(2),
      n = r(1),
      o = r(0);
    r(13);
    const i = () => {
      o.browser.tabs.onUpdated.addListener((e, t, r) => {
        if ("loading" === t.status) {
          if (navigator.userAgent.includes("Firefox") && !t.url) return;
          o.browser.storage.sync
            .get([s.config.storageDomainList, s.config.storageExcludedUrlList])
            .then((e) => {
              if (!r) return;
              if (!r.url) return;
              if (n.isUrlInList(n.fetchUrlString(r.url), e.excludedUrlList))
                return;
              console.clear(),
                console.log("Current URL: " + r.url),
                console.log("Domain List:"),
                console.table(e.domainList),
                console.log("Excluded URL List:"),
                console.table(e.excludedUrlList);
              e.themeBasedOn;
              n.isUrlInList(n.fetchDomainString(r.url), e.domainList) &&
                o.browser.tabs.insertCSS(r.id, {
                  file: s.config.cssFilePath,
                  runAt: "document_start",
                });
            });
        }
      });
    };
    n.runtime.setUninstallURL(s.config.uninstallQuestionnaire),
      o.browser.storage
        ? (console.log("Storage Mode"),
          o.browser.storage.sync
            .get([s.config.storageDomainList, s.config.storageExcludedUrlList])
            .then((e) => {
              if (!n.isEmpty(e)) return e;
              o.browser.storage.sync.set({
                domainList: s.config.defaultDomainList,
                excludedUrlList: s.config.defaultExcludedUrlList,
              });
            })
            .then(i))
        : (console.log("ContentScripts Mode"),
          o.browser.contentScripts
            .register({
              matches: ['"https://github.com/*', "https://gist.github.com/*"],
              runAt: "document_start",
              js: [
                { file: "app/content_script.js" },
                { file: "app/vendor.js" },
              ],
              css: [{ file: "app/app.css" }],
            })
            .catch((e) => console.log(e)));
  },
]);
