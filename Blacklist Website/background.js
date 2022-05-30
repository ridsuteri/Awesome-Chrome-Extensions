(() => {
  var e = {
      949: () => {
        chrome.runtime.onInstalled.addListener(function () {
          chrome.storage.sync.set(
            { toggleSitesActive: !1, toggleSitesList: "example.com" },
            function () {}
          );
        });
        var e = !1,
          t = "example.com";
        chrome.storage.sync.get(
          ["toggleSitesActive", "toggleSitesList"],
          function (n) {
            (e = n.toggleSitesActive), (t = n.toggleSitesList);
          }
        ),
          chrome.webRequest.onBeforeRequest.addListener(
            function (n) {
              return e
                ? {
                    cancel: t.split(/\n/).some(function (e) {
                      var t = new URL(n.url);
                      return Boolean(-1 !== t.hostname.indexOf(e));
                    }),
                  }
                : { cancel: !1 };
            },
            { urls: ["<all_urls>"] },
            ["blocking"]
          ),
          chrome.storage.onChanged.addListener(function (n, o) {
            "sync" === o &&
              (n.toggleSitesActive && (e = n.toggleSitesActive.newValue),
              n.toggleSitesList && (t = n.toggleSitesList.newValue));
          });
      },
      366: () => {},
    },
    t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { exports: {} });
    return e[o](r, r.exports, n), r.exports;
  }
  (n.m = e),
    (n.x = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 248: 0 },
        t = [[949], [366]],
        o = (e) => {},
        r = (r, s) => {
          for (var i, l, [c, a, g, u] = s, h = 0, f = []; h < c.length; h++)
            (l = c[h]), n.o(e, l) && e[l] && f.push(e[l][0]), (e[l] = 0);
          for (i in a) n.o(a, i) && (n.m[i] = a[i]);
          for (g && g(n), r && r(s); f.length; ) f.shift()();
          return u && t.push.apply(t, u), o();
        },
        s = (self.webpackChunk = self.webpackChunk || []);
      function i() {
        for (var o, r = 0; r < t.length; r++) {
          for (var s = t[r], i = !0, l = 1; l < s.length; l++) {
            var c = s[l];
            0 !== e[c] && (i = !1);
          }
          i && (t.splice(r--, 1), (o = n((n.s = s[0]))));
        }
        return 0 === t.length && (n.x(), (n.x = (e) => {})), o;
      }
      s.forEach(r.bind(null, 0)), (s.push = r.bind(null, s.push.bind(s)));
      var l = n.x;
      n.x = () => ((n.x = l || ((e) => {})), (o = i)());
    })(),
    n.x();
})();
