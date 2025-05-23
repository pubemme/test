/* prebid-universal-creative v1.15.0
Updated : 2023-01-19 */
!function(n) {
    var r = {};
    function o(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t.exports
    }
    o.m = n,
    o.c = r,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 2)
}([function(e, t, n) {
    "use strict";
    t.b = function(t) {
        var n = {
            hb_adid: "adId",
            hb_cache_host: "cacheHost",
            hb_cache_path: "cachePath",
            hb_cache_id: "uuid",
            hb_format: "mediaType",
            hb_env: "env",
            hb_size: "size",
            hb_pb: "hbPb"
        };
        function e(e) {
            return !(!t[e] || !(function(e) {
                return a(e, "Object")
            }(t[e]) && 0 < Object.keys(t[e]).length || i(t[e]) && "" !== t[e]))
        }
        var r = {}
          , o = {};
        e("targetingMap") ? o = function(t) {
            var n = {};
            return Object.keys(t).forEach(function(e) {
                Array.isArray(t[e]) && 0 < t[e].length && (n[e] = t[e][0])
            }),
            n
        }(t.targetingMap) : e("targetingKeywords") && (o = function(e) {
            var o = {}
              , t = e.split(",");
            return 0 < t.length && t.forEach(function(e) {
                var t = e.split(":");
                if (2 === t.length) {
                    var n = t[0]
                      , r = t[1];
                    o[n] = r
                }
            }),
            o
        }(t.targetingKeywords));
        return function(t) {
            Object.keys(t).forEach(function(e) {
                r[n[e] || e] = t[e]
            })
        }(o),
        Object.keys(t).forEach(function(e) {
            "targetingMap" !== e && "targetingKeywords" !== e && i(t[e]) && "" !== t[e] && (r[e] = t[e])
        }),
        r
    }
    ,
    t.a = function(e) {
        var t = document.createElement("a");
        return t.href = decodeURIComponent(e),
        {
            href: t.href,
            protocol: (t.protocol || "").replace(/:$/, ""),
            hostname: t.hostname,
            port: +t.port,
            pathname: t.pathname.replace(/^(?!\/)/, "/"),
            hash: (t.hash || "").replace(/^#/, ""),
            host: (t.host || window.location.host).replace(/:(443|80)$/, "")
        }
    }
    ;
    n(1);
    function a(e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]"
    }
    function i(e) {
        return a(e, "String")
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        var n = document.createElement("iframe");
        return n.setAttribute("frameborder", 0),
        n.setAttribute("scrolling", "no"),
        n.setAttribute("marginheight", 0),
        n.setAttribute("marginwidth", 0),
        n.setAttribute("TOPMARGIN", 0),
        n.setAttribute("LEFTMARGIN", 0),
        n.setAttribute("allowtransparency", "true"),
        n.setAttribute("width", t),
        n.setAttribute("height", e),
        n
    }
    ,
    t.b = function(e, t, n) {
        var r;
        t = t || document,
        r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
        try {
            (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
        } catch (e) {}
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(3);
    window.ucTag = window.ucTag || {},
    window.ucTag.renderAd = r.a
}
, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        var n = Object(r.b)(t);
        Object(o.a)(window) ? function(e, t) {
            for (var n = window, r = 0; r < 10; r++)
                if ((n = n.parent).pbjsPM)
                    try {
                        n.pbjsPM.renderAd(e, t);
                        break
                    } catch (e) {
                        continue
                    }
        }(e, n.adId) : function(l, f) {
            var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ""
              , t = 3 < arguments.length ? arguments[3] : void 0
              , n = l.location
              , r = e || l.location.hostname
              , o = n.protocol + "//" + r
              , g = Object(i.a)(t, l);
            function a(e) {
                var t = e.message ? "message" : "data"
                  , n = {};
                try {
                    n = JSON.parse(e[t])
                } catch (e) {
                    return
                }
                if (n.message && "Prebid Response" === n.message && n.adId === f)
                    try {
                        var r = l.document.body
                          , o = n.ad
                          , a = n.adUrl
                          , i = n.width
                          , c = n.height;
                        if ("video" === n.mediaType)
                            d(!1, {
                                reason: "preventWritingOnMainDocument",
                                message: "Cannot render video ad ".concat(f)
                            }),
                            console.log("Error trying to write ad.");
                        else if (o) {
                            var s = Object(h.a)(n.height, n.width);
                            r.appendChild(s),
                            s.contentDocument.open(),
                            s.contentDocument.write(o),
                            s.contentDocument.close(),
                            d(!0)
                        } else if (a) {
                            var u = Object(h.a)(c, i);
                            u.style.display = "inline",
                            u.style.overflow = "hidden",
                            u.src = a,
                            Object(h.b)(u, document, "body"),
                            d(!0)
                        } else
                            d(!1, {
                                reason: "noAd",
                                message: "No ad for ".concat(f)
                            }),
                            console.log("Error trying to write ad. No ad markup or adUrl for ".concat(f))
                    } catch (e) {
                        d(!1, {
                            reason: "exception",
                            message: e.message
                        }),
                        console.log("Error in rendering ad", e)
                    }
                function d(e, t) {
                    var n = 1 < arguments.length && void 0 !== t ? t : {}
                      , r = n.reason
                      , o = n.message
                      , a = {
                        message: "Prebid Event",
                        adId: f,
                        event: e ? "adRenderSucceeded" : "adRenderFailed"
                    };
                    e || (a.info = {
                        reason: r,
                        message: o
                    }),
                    g(a)
                }
            }
            g({
                message: "Prebid Request",
                adId: f,
                adServerDomain: o
            }, a)
        }(window, n.adId, n.adServerDomain, n.pubUrl)
    }
    ;
    var r = n(0)
      , o = n(4)
      , h = n(1)
      , i = n(5)
}
, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        var t = !1
          , n = e;
        for (; !t; ) {
            try {
                if (n.pbjsPM) {
                    t = !0;
                    break
                }
            } catch (e) {}
            if (n === window.top)
                break;
            n = n.parent
        }
        return t
    }
}
, function(e, t, n) {
    "use strict";
    t.a = function(t) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window
          , i = function() {
            if (null == t)
                return null;
            var e = Object(r.a)(t);
            return e.protocol + "://" + e.host
        }();
        return function(e, t) {
            if (null == i)
                throw new Error("Missing pubUrl");
            var n;
            if (e = JSON.stringify(e),
            null == t)
                a.parent.postMessage(e, i);
            else {
                var r = new MessageChannel;
                (n = r.port1).onmessage = t,
                a.addEventListener("message", o),
                a.parent.postMessage(e, i, [r.port2])
            }
            return function() {
                null != n && (a.removeEventListener("message", o),
                n.onmessage = null,
                n = null)
            }
            ;
            function o(e) {
                (e.origin || e.originalEvent && e.originalEvent.origin) === i && t(e)
            }
        }
    }
    ;
    var r = n(0)
}
]);
