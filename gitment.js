var Gitment = function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.i = function(t) {
        return t
    },
    e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    },
    e.n = function(t) {
        var n = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return e.d(n, "a", n),
        n
    },
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    e.p = "",
    e(e.s = 48)
} ([function(t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
},
function(t, e, n) {
    var r = n(37)("wks"),
    o = n(40),
    i = n(2).Symbol,
    a = "function" == typeof i; (t.exports = function(t) {
        return r[t] || (r[t] = a && i[t] || (a ? i: o)("Symbol." + t))
    }).store = r
},
function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window: "undefined" != typeof self && self.Math == Math ? self: Function("return this")();
    "number" == typeof __g && (__g = n)
},
function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
},
function(t, e, n) {
    t.exports = !n(11)(function() {
        return 7 != Object.defineProperty({},
        "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e, n) {
    var r = n(8),
    o = n(36);
    t.exports = n(4) ?
    function(t, e, n) {
        return r.f(t, e, o(1, n))
    }: function(t, e, n) {
        return t[e] = n,
        t
    }
},
function(t, e) {
    t.exports = {}
},
function(t, e, n) {
    var r = n(2),
    o = n(0),
    i = n(10),
    a = n(5),
    s = function(t, e, n) {
        var u, c, l, f = t & s.F,
        p = t & s.G,
        d = t & s.S,
        h = t & s.P,
        v = t & s.B,
        m = t & s.W,
        g = p ? o: o[e] || (o[e] = {}),
        y = g.prototype,
        b = p ? r: d ? r[e] : (r[e] || {}).prototype;
        p && (n = e);
        for (u in n)(c = !f && b && void 0 !== b[u]) && u in g || (l = c ? b[u] : n[u], g[u] = p && "function" != typeof b[u] ? n[u] : v && c ? i(l, r) : m && b[u] == l ?
        function(t) {
            var e = function(e, n, r) {
                if (this instanceof t) {
                    switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e);
                    case 2:
                        return new t(e, n)
                    }
                    return new t(e, n, r)
                }
                return t.apply(this, arguments)
            };
            return e.prototype = t.prototype,
            e
        } (l) : h && "function" == typeof l ? i(Function.call, l) : l, h && ((g.virtual || (g.virtual = {}))[u] = l, t & s.R && y && !y[u] && a(y, u, l)))
    };
    s.F = 1,
    s.G = 2,
    s.S = 4,
    s.P = 8,
    s.B = 16,
    s.W = 32,
    s.U = 64,
    s.R = 128,
    t.exports = s
},
function(t, e, n) {
    var r = n(3),
    o = n(64),
    i = n(86),
    a = Object.defineProperty;
    e.f = n(4) ? Object.defineProperty: function(t, e, n) {
        if (r(t), e = i(e, !0), r(n), o) try {
            return a(t, e, n)
        } catch(t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value),
        t
    }
},
function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
},
function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            };
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
},
function(t, e) {
    t.exports = function(t) {
        try {
            return !! t()
        } catch(t) {
            return ! 0
        }
    }
},
function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
},
function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t: "function" == typeof t
    }
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LS_ACCESS_TOKEN_KEY = "gitment-comments-token",
    e.LS_USER_KEY = "gitment-user-info",
    e.NOT_INITIALIZED_ERROR = new Error("Comments Not Initialized")
},
function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
},
function(t, e, n) {
    var r = n(9),
    o = n(1)("toStringTag"),
    i = "Arguments" == r(function() {
        return arguments
    } ()),
    a = function(t, e) {
        try {
            return t[e]
        } catch(t) {}
    };
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = a(e = Object(t), o)) ? n: i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments": s
    }
},
function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
},
function(t, e, n) {
    var r = n(13),
    o = n(2).document,
    i = r(o) && r(o.createElement);
    t.exports = function(t) {
        return i ? o.createElement(t) : {}
    }
},
function(t, e, n) {
    var r = n(77),
    o = n(31);
    t.exports = Object.keys ||
    function(t) {
        return r(t, o)
    }
},
function(t, e, n) {
    var r = n(8).f,
    o = n(12),
    i = n(1)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t: t.prototype, i) && r(t, i, {
            configurable: !0,
            value: e
        })
    }
},
function(t, e, n) {
    var r = n(37)("keys"),
    o = n(40);
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
},
function(t, e) {
    var n = Math.ceil,
    r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r: n)(t)
    }
},
function(t, e, n) {
    var r = n(33),
    o = n(17);
    t.exports = function(t) {
        return r(o(t))
    }
},
function(t, e, n) {
    var r = n(17);
    t.exports = function(t) {
        return Object(r(t))
    }
},
function(t, e, n) {
    "use strict";
    var r = n(84)(!0);
    n(34)(String, "String",
    function(t) {
        this._t = String(t),
        this._i = 0
    },
    function() {
        var t, e = this._t,
        n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        }: (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
},
function(t, e, n) {
    n(89);
    for (var r = n(2), o = n(5), i = n(6), a = n(1)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
        var c = s[u],
        l = r[c],
        f = l && l.prototype;
        f && !f[a] && o(f, a, c),
        i[c] = i.Array
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(55),
        __esModule: !0
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(58),
        __esModule: !0
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(59),
        __esModule: !0
    }
},
function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    e.__esModule = !0;
    var o = n(51),
    i = r(o),
    a = n(50),
    s = r(a);
    e.
default = function() {
        function t(t, e) {
            var n = [],
            r = !0,
            o = !1,
            i = void 0;
            try {
                for (var a, u = (0, s.
            default)(t); ! (r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch(t) {
                o = !0,
                i = t
            } finally {
                try { ! r && u.
                    return && u.
                    return ()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e)) return e;
            if ((0, i.
        default)(Object(e))) return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } ()
},
function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
},
function(t, e, n) {
    t.exports = n(2).document && document.documentElement
},
function(t, e, n) {
    var r = n(9);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object: function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
},
function(t, e, n) {
    "use strict";
    var r = n(35),
    o = n(7),
    i = n(81),
    a = n(5),
    s = n(12),
    u = n(6),
    c = n(68),
    l = n(20),
    f = n(76),
    p = n(1)("iterator"),
    d = !([].keys && "next" in [].keys()),
    h = function() {
        return this
    };
    t.exports = function(t, e, n, v, m, g, y) {
        c(n, e, v);
        var b, _, w, x = function(t) {
            if (!d && t in A) return A[t];
            switch (t) {
            case "keys":
            case "values":
                return function() {
                    return new n(this, t)
                }
            }
            return function() {
                return new n(this, t)
            }
        },
        O = e + " Iterator",
        S = "values" == m,
        k = !1,
        A = t.prototype,
        E = A[p] || A["@@iterator"] || m && A[m],
        j = E || x(m),
        T = m ? S ? x("entries") : j: void 0,
        I = "Array" == e ? A.entries || E: E;
        if (I && (w = f(I.call(new t))) !== Object.prototype && (l(w, O, !0), r || s(w, p) || a(w, p, h)), S && E && "values" !== E.name && (k = !0, j = function() {
            return E.call(this)
        }), r && !y || !d && !k && A[p] || a(A, p, j), u[e] = j, u[O] = h, m) if (b = {
            values: S ? j: x("values"),
            keys: g ? j: x("keys"),
            entries: T
        },
        y) for (_ in b) _ in A || i(A, _, b[_]);
        else o(o.P + o.F * (d || k), e, b);
        return b
    }
},
function(t, e) {
    t.exports = !0
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
},
function(t, e, n) {
    var r = n(2),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function(t) {
        return o[t] || (o[t] = {})
    }
},
function(t, e, n) {
    var r, o, i, a = n(10),
    s = n(65),
    u = n(32),
    c = n(18),
    l = n(2),
    f = l.process,
    p = l.setImmediate,
    d = l.clearImmediate,
    h = l.MessageChannel,
    v = 0,
    m = {},
    g = function() {
        var t = +this;
        if (m.hasOwnProperty(t)) {
            var e = m[t];
            delete m[t],
            e()
        }
    },
    y = function(t) {
        g.call(t.data)
    };
    p && d || (p = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++v] = function() {
            s("function" == typeof t ? t: Function(t), e)
        },
        r(v),
        v
    },
    d = function(t) {
        delete m[t]
    },
    "process" == n(9)(f) ? r = function(t) {
        f.nextTick(a(g, t, 1))
    }: h ? (o = new h, i = o.port2, o.port1.onmessage = y, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    },
    l.addEventListener("message", y, !1)) : r = "onreadystatechange" in c("script") ?
    function(t) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this),
            g.call(t)
        }
    }: function(t) {
        setTimeout(a(g, t, 1), 0)
    }),
    t.exports = {
        set: p,
        clear: d
    }
},
function(t, e, n) {
    var r = n(22),
    o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0
    }
},
function(t, e) {
    var n = 0,
    r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "": t, ")_", (++n + r).toString(36))
    }
},
function(t, e, n) {
    var r = n(16),
    o = n(1)("iterator"),
    i = n(6);
    t.exports = n(0).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
},
function(t, e, n) {
    "use strict";
    function r(t, e) {
        var n = t.meta,
        r = t.user,
        o = t.reactions,
        i = document.createElement("div");
        i.lang = "en-US",
        i.className = "gitment-container gitment-header-container";
        var a = document.createElement("span"),
        s = o.find(function(t) {
            return "heart" === t.content && t.user.login === r.login
        });
        a.className = "gitment-header-like-btn",
        a.innerHTML = "\n    " + l.heart + "\n    " + (s ? "Unlike": "Like") + "\n    " + (n.reactions && n.reactions.heart ? " • <strong>" + n.reactions.heart + "</strong> Liked": "") + "\n  ",
        s ? (a.classList.add("liked"), a.onclick = function() {
            return e.unlike()
        }) : (a.classList.remove("liked"), a.onclick = function() {
            return e.like()
        }),
        i.appendChild(a);
        var u = document.createElement("span");
        u.innerHTML = "\n    " + (n.comments ? " • <strong>" + n.comments + "</strong> Comments": "") + "\n  ",
        i.appendChild(u);
        var c = document.createElement("a");
        return c.className = "gitment-header-issue-link",
        c.href = n.html_url,
        c.target = "_blank",
        c.innerText = "Issue Page",
        i.appendChild(c),
        i
    }
    function o(t, e) {
        var n = t.meta,
        r = t.comments,
        o = t.commentReactions,
        i = t.currentPage,
        a = t.user,
        s = t.error,
        u = document.createElement("div");
        if (u.lang = "en-US", u.className = "gitment-container gitment-comments-container", s) {
            var c = document.createElement("div");
            if (c.className = "gitment-comments-error", s === f.NOT_INITIALIZED_ERROR && a.login && a.login.toLowerCase() === e.owner.toLowerCase()) {
                var p = document.createElement("div"),
                d = document.createElement("button");
                d.className = "gitment-comments-init-btn",
                d.onclick = function() {
                    d.setAttribute("disabled", !0),
                    e.init().
                    catch(function(t) {
                        d.removeAttribute("disabled"),
                        alert(t)
                    })
                },
                d.innerText = "Initialize Comments",
                p.appendChild(d),
                c.appendChild(p)
            } else c.innerText = s;
            return u.appendChild(c),
            u
        }
        if (void 0 === r) {
            var h = document.createElement("div");
            return h.innerText = "Loading comments...",
            h.className = "gitment-comments-loading",
            u.appendChild(h),
            u
        }
        if (!r.length) {
            var v = document.createElement("div");
            return v.className = "gitment-comments-empty",
            v.innerText = "No Comment Yet",
            u.appendChild(v),
            u
        }
        var m = document.createElement("ul");
        if (m.className = "gitment-comments-list", r.forEach(function(t) {
            var n = new Date(t.created_at),
            r = new Date(t.updated_at),
            i = document.createElement("li");
            i.className = "gitment-comment",
            i.innerHTML = '\n      <a class="gitment-comment-avatar" href="' + t.user.html_url + '" target="_blank">\n        <img class="gitment-comment-avatar-img" src="' + t.user.avatar_url + '"/>\n      </a>\n      <div class="gitment-comment-main">\n        <div class="gitment-comment-header">\n          <a class="gitment-comment-name" href="' + t.user.html_url + '" target="_blank">\n            ' + t.user.login + '\n          </a>\n          commented on\n          <span title="' + n + '">' + n.toDateString() + "</span>\n          " + (n.toString() !== r.toString() ? ' • <span title="comment was edited at ' + r + '">edited</span>': "") + '\n          <div class="gitment-comment-like-btn">' + l.heart + " " + (t.reactions.heart || "") + '</div>\n        </div>\n        <div class="gitment-comment-body gitment-markdown">' + t.body_html + "</div>\n      </div>\n    ";
            var s = i.querySelector(".gitment-comment-like-btn");
            o[t.id] && o[t.id].find(function(t) {
                return "heart" === t.content && t.user.login === a.login
            }) ? (s.classList.add("liked"), s.onclick = function() {
                return e.unlikeAComment(t.id)
            }) : (s.classList.remove("liked"), s.onclick = function() {
                return e.likeAComment(t.id)
            });
            var u = document.createElement("img"),
            c = i.querySelector(".gitment-comment-body");
            u.className = "gitment-hidden",
            u.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            u.onload = function() {
                c.clientHeight > e.maxCommentHeight && (c.classList.add("gitment-comment-body-folded"), c.style.maxHeight = e.maxCommentHeight + "px", c.title = "Click to Expand", c.onclick = function() {
                    c.classList.remove("gitment-comment-body-folded"),
                    c.style.maxHeight = "",
                    c.title = "",
                    c.onclick = null
                })
            },
            i.appendChild(u),
            m.appendChild(i)
        }), u.appendChild(m), n) {
            var g = Math.ceil(n.comments / e.perPage);
            if (g > 1) {
                var y = document.createElement("ul");
                if (y.className = "gitment-comments-pagination", i > 1) {
                    var b = document.createElement("li");
                    b.className = "gitment-comments-page-item",
                    b.innerText = "Previous",
                    b.onclick = function() {
                        return e.goto(i - 1)
                    },
                    y.appendChild(b)
                }
                for (var _ = 1; _ <= g; _++) !
                function(t) {
                    var n = document.createElement("li");
                    n.className = "gitment-comments-page-item",
                    n.innerText = t,
                    n.onclick = function() {
                        return e.goto(t)
                    },
                    i === t && n.classList.add("gitment-selected"),
                    y.appendChild(n)
                } (_);
                if (i < g) {
                    var w = document.createElement("li");
                    w.className = "gitment-comments-page-item",
                    w.innerText = "Next",
                    w.onclick = function() {
                        return e.goto(i + 1)
                    },
                    y.appendChild(w)
                }
                u.appendChild(y)
            }
        }
        return u
    }
    function i(t, e) {
        var n = t.user,
        r = t.error,
        o = document.createElement("div");
        o.lang = "en-US",
        o.className = "gitment-container gitment-editor-container";
        var i = n.login && !r ? "": "disabled",
        a = n.login ? "": "Login to Comment";
        o.innerHTML = "\n      " + (n.login ? '<a class="gitment-editor-avatar" href="' + n.html_url + '" target="_blank" style="height=44px;width=44px">\n            <img class="gitment-editor-avatar-img" src="' + n.avatar_url + '"/>\n          </a>': n.isLoggingIn ? '<div class="gitment-editor-avatar">' + l.spinner + "</div>": '<a class="gitment-editor-avatar" href="' + e.loginLink + '" title="login with GitHub">\n              ' + l.github + "\n            </a>") + '\n    </a>\n    <div class="gitment-editor-main">\n      <div class="gitment-editor-header">\n        <nav class="gitment-editor-tabs">\n          <button class="gitment-editor-tab gitment-selected">Write</button>\n          <button class="gitment-editor-tab">Preview</button>\n        </nav>\n        <div class="gitment-editor-login">\n          ' + (n.login ? '<a class="gitment-editor-logout-link">Logout</a>': n.isLoggingIn ? "Logging in...": '<a class="gitment-editor-login-link" href="' + e.loginLink + '">Login</a> with GitHub') + '\n        </div>\n      </div>\n      <div class="gitment-editor-body">\n        <div class="gitment-editor-write-field">\n          <textarea placeholder="Leave a comment" title="' + a + '" ' + i + '></textarea>\n        </div>\n        <div class="gitment-editor-preview-field gitment-hidden">\n          <div class="gitment-editor-preview gitment-markdown"></div>\n        </div>\n      </div>\n    </div>\n    <div class="gitment-editor-footer">\n      <a class="gitment-editor-footer-tip" href="https://guides.github.com/features/mastering-markdown/" target="_blank">\n        Styling with Markdown is supported\n      </a>\n      <button class="gitment-editor-submit" title="' + a + '" ' + i + ">Comment</button>\n    </div>\n  ",
        n.login && (o.querySelector(".gitment-editor-logout-link").onclick = function() {
            return e.logout()
        });
        var s = o.querySelector(".gitment-editor-write-field"),
        u = o.querySelector(".gitment-editor-preview-field"),
        f = s.querySelector("textarea");
        f.oninput = function() {
            f.style.height = "auto";
            var t = window.getComputedStyle(f, null),
            e = parseInt(t.height, 10),
            n = f.clientHeight,
            r = f.scrollHeight;
            n < r && (f.style.height = e + r - n + "px")
        };
        var p = o.querySelectorAll(".gitment-editor-tab"),
        d = (0, c.
    default)(p, 2),
        h = d[0],
        v = d[1];
        h.onclick = function() {
            h.classList.add("gitment-selected"),
            v.classList.remove("gitment-selected"),
            s.classList.remove("gitment-hidden"),
            u.classList.add("gitment-hidden"),
            f.focus()
        },
        v.onclick = function() {
            v.classList.add("gitment-selected"),
            h.classList.remove("gitment-selected"),
            u.classList.remove("gitment-hidden"),
            s.classList.add("gitment-hidden");
            var t = u.querySelector(".gitment-editor-preview"),
            n = f.value.trim();
            if (!n) return void(t.innerText = "Nothing to preview");
            t.innerText = "Loading preview...",
            e.markdown(n).then(function(e) {
                return t.innerHTML = e
            })
        };
        var m = o.querySelector(".gitment-editor-submit");
        return m.onclick = function() {
            m.innerText = "Submitting...",
            m.setAttribute("disabled", !0),
            e.post(f.value.trim()).then(function(t) {
                f.value = "",
                f.style.height = "auto",
                m.removeAttribute("disabled"),
                m.innerText = "Comment"
            }).
            catch(function(t) {
                alert(t),
                m.removeAttribute("disabled"),
                m.innerText = "Comment"
            })
        },
        o
    }
    function a() {
        var t = document.createElement("div");
        return t.lang = "en-US",
        t.className = "gitment-container gitment-footer-container",
        t.innerHTML = '\n    Powered by\n    <a class="gitment-footer-project-link" href="https://github.com/imsun/gitment" target="_blank">\n      Gitment\n    </a>\n  ',
        t
    }
    function s(t, e) {
        var n = document.createElement("div");
        return n.lang = "en-US",
        n.className = "gitment-container gitment-root-container",
        n.appendChild(e.renderHeader(t, e)),
        n.appendChild(e.renderComments(t, e)),
        n.appendChild(e.renderEditor(t, e)),
        n.appendChild(e.renderFooter(t, e)),
        n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = n(30),
    c = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (u),
    l = n(49),
    f = n(14);
    e.
default = {
        render: s,
        renderHeader: r,
        renderComments: o,
        renderEditor: i,
        renderFooter: a
    }
},
function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function o(t) {
        return t instanceof Element ? t: v(t) ? document.getElementById(t) : document.createElement("div")
    }
    function i(t) {
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://api.github.com",
            o = new XMLHttpRequest,
            i = localStorage.getItem(h.LS_ACCESS_TOKEN_KEY),
            a = "" + r + e,
            u = null;
            "GET" !== t && "DELETE" !== t || (a += m.stringify(n));
            var l = new c.
        default(function(t, e) {
                o.addEventListener("load",
                function() {
                    var n = o.getResponseHeader("content-type"),
                    r = o.responseText;
                    if (!/json/.test(n)) return void t(r);
                    var i = o.responseText ? JSON.parse(r) : {};
                    i.message ? e(new Error(i.message)) : t(i)
                }),
                o.addEventListener("error",
                function(t) {
                    return e(t)
                })
            });
            return o.open(t, a, !0),
            o.setRequestHeader("Accept", "application/vnd.github.squirrel-girl-preview, application/vnd.github.html+json"),
            i && o.setRequestHeader("Authorization", "token " + i),
            "GET" !== t && "DELETE" !== t && (u = (0, s.
        default)(n), o.setRequestHeader("Content-Type", "application/json")),
            o.send(u),
            l
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.http = e.Query = e.isString = void 0;
    var a = n(27),
    s = r(a),
    u = n(29),
    c = r(u),
    l = n(28),
    f = r(l),
    p = n(30),
    d = r(p);
    e.getTargetContainer = o;
    var h = n(14),
    v = e.isString = function(t) {
        return "[object String]" === {}.toString.call(t)
    },
    m = e.Query = {
        parse: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
            if (!t) return {};
            var e = "?" === t[0] ? t.substring(1) : t,
            n = {};
            return e.split("&").forEach(function(t) {
                var e = t.split("="),
                r = (0, d.
            default)(e, 2),
                o = r[0],
                i = r[1];
                o && (n[o] = i)
            }),
            n
        },
        stringify: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "?",
            n = (0, f.
        default)(t).map(function(e) {
                return e + "=" + encodeURIComponent(t[e] || "")
            }).join("&");
            return n ? e + n: ""
        }
    };
    e.http = {
        get: i("GET"),
        post: i("POST"),
        delete: i("DELETE"),
        put: i("PUT")
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(56),
        __esModule: !0
    }
},
function(t, e, n) {
    "use strict";
    e.__esModule = !0,
    e.
default = function(t, e) {
        if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
},
function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r = n(52),
    o = function(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    } (r);
    e.
default = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                (0, o.
            default)(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    } ()
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    function(t) {
        function r(t, e) {
            function n() {
                this.constructor = t
            }
            qe(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }
        function o(t) {
            return t.interceptors && t.interceptors.length > 0
        }
        function i(t, e) {
            var n = t.interceptors || (t.interceptors = []);
            return n.push(e),
            kt(function() {
                var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
            })
        }
        function a(t, e) {
            var n = de();
            try {
                var r = t.interceptors;
                if (r) for (var o = 0,
                i = r.length; o < i && (e = r[o](e), Ot(!e || e.type, "Intercept handlers should return nothing or a change object"), e); o++);
                return e
            } finally {
                he(n)
            }
        }
        function s(t) {
            return t.changeListeners && t.changeListeners.length > 0
        }
        function u(t, e) {
            var n = t.changeListeners || (t.changeListeners = []);
            return n.push(e),
            kt(function() {
                var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
            })
        }
        function c(t, e) {
            var n = de(),
            r = t.changeListeners;
            if (r) {
                r = r.slice();
                for (var o = 0,
                i = r.length; o < i; o++) r[o](e);
                he(n)
            }
        }
        function l() {
            return !! Nn.spyListeners.length
        }
        function f(t) {
            if (Nn.spyListeners.length) for (var e = Nn.spyListeners,
            n = 0,
            r = e.length; n < r; n++) e[n](t)
        }
        function p(t) {
            f(It({},
            t, {
                spyReportStart: !0
            }))
        }
        function d(t) {
            f(t ? It({},
            t, Xe) : Xe)
        }
        function h(t) {
            return Nn.spyListeners.push(t),
            kt(function() {
                var e = Nn.spyListeners.indexOf(t); - 1 !== e && Nn.spyListeners.splice(e, 1)
            })
        }
        function v() {
            return "function" == typeof Symbol && Symbol.iterator || "@@iterator"
        }
        function m(t) {
            Ot(!0 !== t[Qe], "Illegal state: cannot recycle array as iterator"),
            Mt(t, Qe, !0);
            var e = -1;
            return Mt(t, "next",
            function() {
                return e++,
                {
                    done: e >= this.length,
                    value: e < this.length ? this[e] : void 0
                }
            }),
            t
        }
        function g(t, e) {
            Mt(t, v(), e)
        }
        function y(t) {
            return {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return this.get(t)
                },
                set: function(e) {
                    this.set(t, e)
                }
            }
        }
        function b(t) {
            Object.defineProperty(rn.prototype, "" + t, y(t))
        }
        function _(t) {
            for (var e = tn; e < t; e++) b(e);
            tn = t
        }
        function w(t) {
            return jt(t) && an(t.$mobx)
        }
        function x(t) {
            return ln[t]
        }
        function O(t, e) {
            Ot("function" == typeof e, x("m026")),
            Ot("string" == typeof t && t.length > 0, "actions should have valid names, got: '" + t + "'");
            var n = function() {
                return S(t, e, this, arguments)
            };
            return n.originalFn = e,
            n.isMobxAction = !0,
            n
        }
        function S(t, e, n, r) {
            var o = k(t, e, n, r);
            try {
                return e.apply(n, r)
            } finally {
                A(o)
            }
        }
        function k(t, e, n, r) {
            var o = l() && !!t,
            i = 0;
            if (o) {
                i = Date.now();
                var a = r && r.length || 0,
                s = new Array(a);
                if (a > 0) for (var u = 0; u < a; u++) s[u] = r[u];
                p({
                    type: "action",
                    name: t,
                    fn: e,
                    object: n,
                    arguments: s
                })
            }
            var c = de();
            return Zt(),
            {
                prevDerivation: c,
                prevAllowStateChanges: I(!0),
                notifySpy: o,
                startTime: i
            }
        }
        function A(t) {
            C(t.prevAllowStateChanges),
            te(),
            he(t.prevDerivation),
            t.notifySpy && d({
                time: Date.now() - t.startTime
            })
        }
        function E(t) {
            Ot(null === Nn.trackingDerivation, x("m028")),
            Nn.strictMode = t,
            Nn.allowStateChanges = !t
        }
        function j() {
            return Nn.strictMode
        }
        function T(t, e) {
            var n, r = I(t);
            try {
                n = e()
            } finally {
                C(r)
            }
            return n
        }
        function I(t) {
            var e = Nn.allowStateChanges;
            return Nn.allowStateChanges = t,
            e
        }
        function C(t) {
            Nn.allowStateChanges = t
        }
        function L(t, e, n, r, o) {
            function i(i, a, s, u, c) {
                if (void 0 === c && (c = 0), Ot(o || R(arguments), "This function is a decorator, but it wasn't invoked like a decorator"), s) {
                    Ct(i, "__mobxLazyInitializers") || Lt(i, "__mobxLazyInitializers", i.__mobxLazyInitializers && i.__mobxLazyInitializers.slice() || []);
                    var l = s.value,
                    f = s.initializer;
                    return i.__mobxLazyInitializers.push(function(e) {
                        t(e, a, f ? f.call(e) : l, u, s)
                    }),
                    {
                        enumerable: r,
                        configurable: !0,
                        get: function() {
                            return ! 0 !== this.__mobxDidRunLazyInitializers && P(this),
                            e.call(this, a)
                        },
                        set: function(t) { ! 0 !== this.__mobxDidRunLazyInitializers && P(this),
                            n.call(this, a, t)
                        }
                    }
                }
                var p = {
                    enumerable: r,
                    configurable: !0,
                    get: function() {
                        return this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[a] || M(this, a, void 0, t, u, s),
                        e.call(this, a)
                    },
                    set: function(e) {
                        this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[a] ? n.call(this, a, e) : M(this, a, e, t, u, s)
                    }
                };
                return (arguments.length < 3 || 5 === arguments.length && c < 3) && Object.defineProperty(i, a, p),
                p
            }
            return o ?
            function() {
                if (R(arguments)) return i.apply(null, arguments);
                var t = arguments,
                e = arguments.length;
                return function(n, r, o) {
                    return i(n, r, o, t, e)
                }
            }: i
        }
        function M(t, e, n, r, o, i) {
            Ct(t, "__mobxInitializedProps") || Lt(t, "__mobxInitializedProps", {}),
            t.__mobxInitializedProps[e] = !0,
            r(t, e, n, o, i)
        }
        function P(t) { ! 0 !== t.__mobxDidRunLazyInitializers && t.__mobxLazyInitializers && (Lt(t, "__mobxDidRunLazyInitializers", !0), t.__mobxDidRunLazyInitializers && t.__mobxLazyInitializers.forEach(function(e) {
                return e(t)
            }))
        }
        function R(t) {
            return (2 === t.length || 3 === t.length) && "string" == typeof t[1]
        }
        function D(t) {
            return function(e, n, r) {
                return r && "function" == typeof r.value ? (r.value = O(t, r.value), r.enumerable = !1, r.configurable = !0, r) : fn(t).apply(this, arguments)
            }
        }
        function N(t, e, n) {
            var r = "string" == typeof t ? t: t.name || "<unnamed action>",
            o = "function" == typeof t ? t: e,
            i = "function" == typeof t ? e: n;
            return Ot("function" == typeof o, x("m002")),
            Ot(0 === o.length, x("m003")),
            Ot("string" == typeof r && r.length > 0, "actions should have valid names, got: '" + r + "'"),
            S(r, o, i, void 0)
        }
        function V(t) {
            return "function" == typeof t && !0 === t.isMobxAction
        }
        function U(t, e, n) {
            var r = function() {
                return S(e, n, t, arguments)
            };
            r.isMobxAction = !0,
            Lt(t, e, r)
        }
        function z(t, e) {
            return t === e
        }
        function B(t, e) {
            return ! ("number" != typeof t || "number" != typeof e || !isNaN(t) || !isNaN(e)) || Nt(t, e)
        }
        function $(t, e) {
            return ! ("number" != typeof t || "number" != typeof e || !isNaN(t) || !isNaN(e)) || z(t, e)
        }
        function H(t, e, n) {
            function r() {
                i(s)
            }
            var o, i, a;
            "string" == typeof t ? (o = t, i = e, a = n) : (o = t.name || "Autorun@" + wt(), i = t, a = e),
            Ot("function" == typeof i, x("m004")),
            Ot(!1 === V(i), x("m005")),
            a && (i = i.bind(a));
            var s = new Kn(o,
            function() {
                this.track(r)
            });
            return s.schedule(),
            s.getDisposer()
        }
        function K(t, e, n, r) {
            var o, i, a, s;
            return "string" == typeof t ? (o = t, i = e, a = n, s = r) : (o = "When@" + wt(), i = t, a = e, s = n),
            H(o,
            function(t) {
                if (i.call(s)) {
                    t.dispose();
                    var e = de();
                    a.call(s),
                    he(e)
                }
            })
        }
        function G(t, e, n, r) {
            function o() {
                a(l)
            }
            var i, a, s, u;
            "string" == typeof t ? (i = t, a = e, s = n, u = r) : (i = t.name || "AutorunAsync@" + wt(), a = t, s = e, u = n),
            Ot(!1 === V(a), x("m006")),
            void 0 === s && (s = 1),
            u && (a = a.bind(u));
            var c = !1,
            l = new Kn(i,
            function() {
                c || (c = !0, setTimeout(function() {
                    c = !1,
                    l.isDisposed || l.track(o)
                },
                s))
            });
            return l.schedule(),
            l.getDisposer()
        }
        function W(t, e, n) {
            function r() {
                if (!c.isDisposed) {
                    var n = !1;
                    c.track(function() {
                        var e = t(c);
                        n = a || !u(i, e),
                        i = e
                    }),
                    a && o.fireImmediately && e(i, c),
                    a || !0 !== n || e(i, c),
                    a && (a = !1)
                }
            }
            arguments.length > 3 && xt(x("m007")),
            lt(t) && xt(x("m008"));
            var o;
            o = "object" == typeof n ? n: {},
            o.name = o.name || t.name || e.name || "Reaction@" + wt(),
            o.fireImmediately = !0 === n || !0 === o.fireImmediately,
            o.delay = o.delay || 0,
            o.compareStructural = o.compareStructural || o.struct || !1,
            e = dn(o.name, o.context ? e.bind(o.context) : e),
            o.context && (t = t.bind(o.context));
            var i, a = !0,
            s = !1,
            u = o.equals ? o.equals: o.compareStructural || o.struct ? hn.structural: hn.
        default,
            c = new Kn(o.name,
            function() {
                a || o.delay < 1 ? r() : s || (s = !0, setTimeout(function() {
                    s = !1,
                    r()
                },
                o.delay))
            });
            return c.schedule(),
            c.getDisposer()
        }
        function q(t, e) {
            if (nt(t)) return t.$mobx;
            Ot(Object.isExtensible(t), x("m035")),
            Tt(t) || (e = (t.constructor.name || "ObservableObject") + "@" + wt()),
            e || (e = "ObservableObject@" + wt());
            var n = new gn(t, e);
            return Mt(t, "$mobx", n),
            n
        }
        function F(t, e, n, r) {
            if (t.values[e]) return Ot("value" in n, "The property " + e + " in " + t.name + " is already observable, cannot redefine it as computed property"),
            void(t.target[e] = n.value);
            if ("value" in n) if (lt(n.value)) {
                var o = n.value;
                Y(t, e, o.initialValue, o.enhancer)
            } else V(n.value) && !0 === n.value.autoBind ? U(t.target, e, n.value.originalFn) : mn(n.value) ? X(t, e, n.value) : Y(t, e, n.value, r);
            else J(t, e, n.get, n.set, hn.
        default, !0)
        }
        function Y(t, e, n, r) {
            if (Rt(t.target, e), o(t)) {
                var i = a(t, {
                    object: t.target,
                    name: e,
                    type: "add",
                    newValue: n
                });
                if (!i) return;
                n = i.newValue
            }
            n = (t.values[e] = new un(n, r, t.name + "." + e, !1)).value,
            Object.defineProperty(t.target, e, Q(e)),
            et(t, t.target, e, n)
        }
        function J(t, e, n, r, o, i) {
            i && Rt(t.target, e),
            t.values[e] = new vn(n, t.target, o, t.name + "." + e, r),
            i && Object.defineProperty(t.target, e, Z(e))
        }
        function X(t, e, n) {
            var r = t.name + "." + e;
            n.name = r,
            n.scope || (n.scope = t.target),
            t.values[e] = n,
            Object.defineProperty(t.target, e, Z(e))
        }
        function Q(t) {
            return yn[t] || (yn[t] = {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.$mobx.values[t].get()
                },
                set: function(e) {
                    tt(this, t, e)
                }
            })
        }
        function Z(t) {
            return bn[t] || (bn[t] = {
                configurable: !0,
                enumerable: !1,
                get: function() {
                    return this.$mobx.values[t].get()
                },
                set: function(e) {
                    return this.$mobx.values[t].set(e)
                }
            })
        }
        function tt(t, e, n) {
            var r = t.$mobx,
            i = r.values[e];
            if (o(r)) {
                var u = a(r, {
                    type: "update",
                    object: t,
                    name: e,
                    newValue: n
                });
                if (!u) return;
                n = u.newValue
            }
            if ((n = i.prepareNewValue(n)) !== sn) {
                var f = s(r),
                h = l(),
                u = f || h ? {
                    type: "update",
                    object: t,
                    oldValue: i.value,
                    name: e,
                    newValue: n
                }: null;
                h && p(u),
                i.setNewValue(n),
                f && c(r, u),
                h && d()
            }
        }
        function et(t, e, n, r) {
            var o = s(t),
            i = l(),
            a = o || i ? {
                type: "add",
                object: e,
                name: n,
                newValue: r
            }: null;
            i && p(a),
            o && c(t, a),
            i && d()
        }
        function nt(t) {
            return !! jt(t) && (P(t), _n(t.$mobx))
        }
        function rt(t, e) {
            if (null === t || void 0 === t) return ! 1;
            if (void 0 !== e) {
                if (w(t) || In(t)) throw new Error(x("m019"));
                if (nt(t)) {
                    var n = t.$mobx;
                    return n.values && !!n.values[e]
                }
                return ! 1
            }
            return nt(t) || !!t.$mobx || Je(t) || qn(t) || mn(t)
        }
        function ot(t) {
            return Ot( !! t, ":("),
            L(function(e, n, r, o, i) {
                Rt(e, n),
                Ot(!i || !i.get, x("m022")),
                Y(q(e, void 0), n, r, t)
            },
            function(t) {
                var e = this.$mobx.values[t];
                if (void 0 !== e) return e.get()
            },
            function(t, e) {
                tt(this, t, e)
            },
            !0, !1)
        }
        function it(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return st(t, pt, e)
        }
        function at(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return st(t, ht, e)
        }
        function st(t, e, n) {
            Ot(arguments.length >= 2, x("m014")),
            Ot("object" == typeof t, x("m015")),
            Ot(!In(t), x("m016")),
            n.forEach(function(t) {
                Ot("object" == typeof t, x("m017")),
                Ot(!rt(t), x("m018"))
            });
            for (var r = q(t), o = {},
            i = n.length - 1; i >= 0; i--) {
                var a = n[i];
                for (var s in a) if (!0 !== o[s] && Ct(a, s)) {
                    if (o[s] = !0, t === a && !Pt(t, s)) continue;
                    var u = Object.getOwnPropertyDescriptor(a, s);
                    F(r, s, u, e)
                }
            }
            return t
        }
        function ut(t) {
            if (void 0 === t && (t = void 0), "string" == typeof arguments[1]) return wn.apply(null, arguments);
            if (Ot(arguments.length <= 1, x("m021")), Ot(!lt(t), x("m020")), rt(t)) return t;
            var e = pt(t, void 0, void 0);
            return e !== t ? e: En.box(t)
        }
        function ct(t) {
            xt("Expected one or two arguments to observable." + t + ". Did you accidentally try to use observable." + t + " as decorator?")
        }
        function lt(t) {
            return "object" == typeof t && null !== t && !0 === t.isMobxModifierDescriptor
        }
        function ft(t, e) {
            return Ot(!lt(e), "Modifiers cannot be nested"),
            {
                isMobxModifierDescriptor: !0,
                initialValue: e,
                enhancer: t
            }
        }
        function pt(t, e, n) {
            return lt(t) && xt("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),
            rt(t) ? t: Array.isArray(t) ? En.array(t, n) : Tt(t) ? En.object(t, n) : Bt(t) ? En.map(t, n) : t
        }
        function dt(t, e, n) {
            return lt(t) && xt("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"),
            void 0 === t || null === t ? t: nt(t) || w(t) || In(t) ? t: Array.isArray(t) ? En.shallowArray(t, n) : Tt(t) ? En.shallowObject(t, n) : Bt(t) ? En.shallowMap(t, n) : xt("The shallow modifier / decorator can only used in combination with arrays, objects and maps")
        }
        function ht(t) {
            return t
        }
        function vt(t, e, n) {
            if (Nt(t, e)) return e;
            if (rt(t)) return t;
            if (Array.isArray(t)) return new rn(t, vt, n);
            if (Bt(t)) return new Tn(t, vt, n);
            if (Tt(t)) {
                var r = {};
                return q(r, n),
                st(r, vt, [t]),
                r
            }
            return t
        }
        function mt(t, e, n) {
            return Nt(t, e) ? e: t
        }
        function gt(t, e) {
            return void 0 === e && (e = void 0),
            St(x("m023")),
            yt.apply(void 0, arguments)
        }
        function yt(t, e) {
            return void 0 === e && (e = void 0),
            S("", t)
        }
        function bt(t) {
            return St("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"),
            En.map(t)
        }
        function _t() {
            return t
        }
        function wt() {
            return++Nn.mobxGuid
        }
        function xt(t, e) {
            throw Ot(!1, t, e),
            "X"
        }
        function Ot(t, e, n) {
            if (!t) throw new Error("[mobx] Invariant failed: " + e + (n ? " in '" + n + "'": ""))
        }
        function St(t) {
            return - 1 === Ln.indexOf(t) && (Ln.push(t), console.error("[mobx] Deprecated: " + t), !0)
        }
        function kt(t) {
            var e = !1;
            return function() {
                if (!e) return e = !0,
                t.apply(this, arguments)
            }
        }
        function At(t) {
            var e = [];
            return t.forEach(function(t) { - 1 === e.indexOf(t) && e.push(t)
            }),
            e
        }
        function Et(t, e, n) {
            return void 0 === e && (e = 100),
            void 0 === n && (n = " - "),
            t ? t.slice(0, e).join(n) + (t.length > e ? " (... and " + (t.length - e) + "more)": "") : ""
        }
        function jt(t) {
            return null !== t && "object" == typeof t
        }
        function Tt(t) {
            if (null === t || "object" != typeof t) return ! 1;
            var e = Object.getPrototypeOf(t);
            return e === Object.prototype || null === e
        }
        function It() {
            for (var t = arguments[0], e = 1, n = arguments.length; e < n; e++) {
                var r = arguments[e];
                for (var o in r) Ct(r, o) && (t[o] = r[o])
            }
            return t
        }
        function Ct(t, e) {
            return Pn.call(t, e)
        }
        function Lt(t, e, n) {
            Object.defineProperty(t, e, {
                enumerable: !1,
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        function Mt(t, e, n) {
            Object.defineProperty(t, e, {
                enumerable: !1,
                writable: !1,
                configurable: !0,
                value: n
            })
        }
        function Pt(t, e) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            return ! n || !1 !== n.configurable && !1 !== n.writable
        }
        function Rt(t, e) {
            Ot(Pt(t, e), "Cannot make property '" + e + "' observable, it is not configurable and writable in the target object")
        }
        function Dt(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        }
        function Nt(t, e) {
            if (null === t && null === e) return ! 0;
            if (void 0 === t && void 0 === e) return ! 0;
            if ("object" != typeof t) return t === e;
            var n = Ut(t),
            r = zt(t);
            if (n !== Ut(e)) return ! 1;
            if (r !== zt(e)) return ! 1;
            if (n) {
                if (t.length !== e.length) return ! 1;
                for (var o = t.length - 1; o >= 0; o--) if (!Nt(t[o], e[o])) return ! 1;
                return ! 0
            }
            if (r) {
                if (t.size !== e.size) return ! 1;
                var i = !0;
                return t.forEach(function(t, n) {
                    i = i && Nt(e.get(n), t)
                }),
                i
            }
            if ("object" == typeof t && "object" == typeof e) {
                if (null === t || null === e) return ! 1;
                if (zt(t) && zt(e)) return t.size === e.size && Nt(En.shallowMap(t).entries(), En.shallowMap(e).entries());
                if (Dt(t).length !== Dt(e).length) return ! 1;
                for (var a in t) {
                    if (! (a in e)) return ! 1;
                    if (!Nt(t[a], e[a])) return ! 1
                }
                return ! 0
            }
            return ! 1
        }
        function Vt(t, e) {
            var n = "isMobX" + t;
            return e.prototype[n] = !0,
            function(t) {
                return jt(t) && !0 === t[n]
            }
        }
        function Ut(t) {
            return Array.isArray(t) || w(t)
        }
        function zt(t) {
            return Bt(t) || In(t)
        }
        function Bt(t) {
            return void 0 !== _t().Map && t instanceof _t().Map
        }
        function $t() {
            return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
        }
        function Ht(t) {
            return null === t ? null: "object" == typeof t ? "" + t: t
        }
        function Kt() {
            Un = !0,
            _t().__mobxInstanceCount--
        }
        function Gt() {
            St("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details."),
            Vn = !0;
            var t = _t(),
            e = Nn;
            if (t.__mobservableTrackingStack || t.__mobservableViewStack) throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
            if (t.__mobxGlobal && t.__mobxGlobal.version !== e.version) throw new Error("[mobx] An incompatible version of mobx is already loaded.");
            t.__mobxGlobal ? Nn = t.__mobxGlobal: t.__mobxGlobal = e
        }
        function Wt() {
            return Nn
        }
        function qt() {
            Nn.resetId++;
            var t = new Dn;
            for (var e in t) - 1 === Rn.indexOf(e) && (Nn[e] = t[e]);
            Nn.allowStateChanges = !Nn.strictMode
        }
        function Ft(t) {
            return t.observers && t.observers.length > 0
        }
        function Yt(t) {
            return t.observers
        }
        function Jt(t, e) {
            var n = t.observers.length;
            n && (t.observersIndexes[e.__mapid] = n),
            t.observers[n] = e,
            t.lowestObserverState > e.dependenciesState && (t.lowestObserverState = e.dependenciesState)
        }
        function Xt(t, e) {
            if (1 === t.observers.length) t.observers.length = 0,
            Qt(t);
            else {
                var n = t.observers,
                r = t.observersIndexes,
                o = n.pop();
                if (o !== e) {
                    var i = r[e.__mapid] || 0;
                    i ? r[o.__mapid] = i: delete r[o.__mapid],
                    n[i] = o
                }
                delete r[e.__mapid]
            }
        }
        function Qt(t) {
            t.isPendingUnobservation || (t.isPendingUnobservation = !0, Nn.pendingUnobservations.push(t))
        }
        function Zt() {
            Nn.inBatch++
        }
        function te() {
            if (0 == --Nn.inBatch) {
                ye();
                for (var t = Nn.pendingUnobservations,
                e = 0; e < t.length; e++) {
                    var n = t[e];
                    n.isPendingUnobservation = !1,
                    0 === n.observers.length && n.onBecomeUnobserved()
                }
                Nn.pendingUnobservations = []
            }
        }
        function ee(t) {
            var e = Nn.trackingDerivation;
            null !== e ? e.runId !== t.lastAccessedBy && (t.lastAccessedBy = e.runId, e.newObserving[e.unboundDepsCount++] = t) : 0 === t.observers.length && Qt(t)
        }
        function ne(t) {
            if (t.lowestObserverState !== $n.STALE) {
                t.lowestObserverState = $n.STALE;
                for (var e = t.observers,
                n = e.length; n--;) {
                    var r = e[n];
                    r.dependenciesState === $n.UP_TO_DATE && r.onBecomeStale(),
                    r.dependenciesState = $n.STALE
                }
            }
        }
        function re(t) {
            if (t.lowestObserverState !== $n.STALE) {
                t.lowestObserverState = $n.STALE;
                for (var e = t.observers,
                n = e.length; n--;) {
                    var r = e[n];
                    r.dependenciesState === $n.POSSIBLY_STALE ? r.dependenciesState = $n.STALE: r.dependenciesState === $n.UP_TO_DATE && (t.lowestObserverState = $n.UP_TO_DATE)
                }
            }
        }
        function oe(t) {
            if (t.lowestObserverState === $n.UP_TO_DATE) {
                t.lowestObserverState = $n.POSSIBLY_STALE;
                for (var e = t.observers,
                n = e.length; n--;) {
                    var r = e[n];
                    r.dependenciesState === $n.UP_TO_DATE && (r.dependenciesState = $n.POSSIBLY_STALE, r.onBecomeStale())
                }
            }
        }
        function ie(t) {
            return t instanceof Hn
        }
        function ae(t) {
            switch (t.dependenciesState) {
            case $n.UP_TO_DATE:
                return ! 1;
            case $n.NOT_TRACKING:
            case $n.STALE:
                return ! 0;
            case $n.POSSIBLY_STALE:
                for (var e = de(), n = t.observing, r = n.length, o = 0; o < r; o++) {
                    var i = n[o];
                    if (mn(i)) {
                        try {
                            i.get()
                        } catch(t) {
                            return he(e),
                            !0
                        }
                        if (t.dependenciesState === $n.STALE) return he(e),
                        !0
                    }
                }
                return ve(t),
                he(e),
                !1
            }
        }
        function se() {
            return null !== Nn.trackingDerivation
        }
        function ue(t) {
            var e = t.observers.length > 0;
            Nn.computationDepth > 0 && e && xt(x("m031") + t.name),
            !Nn.allowStateChanges && e && xt(x(Nn.strictMode ? "m030a": "m030b") + t.name)
        }
        function ce(t, e, n) {
            ve(t),
            t.newObserving = new Array(t.observing.length + 100),
            t.unboundDepsCount = 0,
            t.runId = ++Nn.runId;
            var r = Nn.trackingDerivation;
            Nn.trackingDerivation = t;
            var o;
            try {
                o = e.call(n)
            } catch(t) {
                o = new Hn(t)
            }
            return Nn.trackingDerivation = r,
            le(t),
            o
        }
        function le(t) {
            var e = t.observing,
            n = t.observing = t.newObserving,
            r = $n.UP_TO_DATE;
            t.newObserving = null;
            for (var o = 0,
            i = t.unboundDepsCount,
            a = 0; a < i; a++) {
                var s = n[a];
                0 === s.diffValue && (s.diffValue = 1, o !== a && (n[o] = s), o++),
                s.dependenciesState > r && (r = s.dependenciesState)
            }
            for (n.length = o, i = e.length; i--;) {
                var s = e[i];
                0 === s.diffValue && Xt(s, t),
                s.diffValue = 0
            }
            for (; o--;) {
                var s = n[o];
                1 === s.diffValue && (s.diffValue = 0, Jt(s, t))
            }
            r !== $n.UP_TO_DATE && (t.dependenciesState = r, t.onBecomeStale())
        }
        function fe(t) {
            var e = t.observing;
            t.observing = [];
            for (var n = e.length; n--;) Xt(e[n], t);
            t.dependenciesState = $n.NOT_TRACKING
        }
        function pe(t) {
            var e = de(),
            n = t();
            return he(e),
            n
        }
        function de() {
            var t = Nn.trackingDerivation;
            return Nn.trackingDerivation = null,
            t
        }
        function he(t) {
            Nn.trackingDerivation = t
        }
        function ve(t) {
            if (t.dependenciesState !== $n.UP_TO_DATE) {
                t.dependenciesState = $n.UP_TO_DATE;
                for (var e = t.observing,
                n = e.length; n--;) e[n].lowestObserverState = $n.UP_TO_DATE
            }
        }
        function me(t) {
            Ot(this && this.$mobx && qn(this.$mobx), "Invalid `this`"),
            Ot(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered"),
            this.$mobx.errorHandler = t
        }
        function ge(t) {
            return Nn.globalReactionErrorHandlers.push(t),
            function() {
                var e = Nn.globalReactionErrorHandlers.indexOf(t);
                e >= 0 && Nn.globalReactionErrorHandlers.splice(e, 1)
            }
        }
        function ye() {
            Nn.inBatch > 0 || Nn.isRunningReactions || Wn(be)
        }
        function be() {
            Nn.isRunningReactions = !0;
            for (var t = Nn.pendingReactions,
            e = 0; t.length > 0;) {++e === Gn && (console.error("Reaction doesn't converge to a stable state after " + Gn + " iterations. Probably there is a cycle in the reactive function: " + t[0]), t.splice(0));
                for (var n = t.splice(0), r = 0, o = n.length; r < o; r++) n[r].runReaction()
            }
            Nn.isRunningReactions = !1
        }
        function _e(t) {
            var e = Wn;
            Wn = function(n) {
                return t(function() {
                    return e(n)
                })
            }
        }
        function we(t) {
            return St("asReference is deprecated, use observable.ref instead"),
            En.ref(t)
        }
        function xe(t) {
            return St("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."),
            En.struct(t)
        }
        function Oe(t) {
            return St("asFlat is deprecated, use observable.shallow instead"),
            En.shallow(t)
        }
        function Se(t) {
            return St("asMap is deprecated, use observable.map or observable.shallowMap instead"),
            En.map(t || {})
        }
        function ke(t) {
            return L(function(e, n, r, o, i) {
                Ot(void 0 !== i, x("m009")),
                Ot("function" == typeof i.get, x("m010")),
                J(q(e, ""), n, i.get, i.set, t, !1)
            },
            function(t) {
                var e = this.$mobx.values[t];
                if (void 0 !== e) return e.get()
            },
            function(t, e) {
                this.$mobx.values[t].set(e)
            },
            !1, !1)
        }
        function Ae(t, e) {
            if ("object" == typeof t && null !== t) {
                if (w(t)) return Ot(void 0 === e, x("m036")),
                t.$mobx.atom;
                if (In(t)) {
                    var n = t;
                    if (void 0 === e) return Ae(n._keys);
                    var r = n._data[e] || n._hasMap[e];
                    return Ot( !! r, "the entry '" + e + "' does not exist in the observable map '" + je(t) + "'"),
                    r
                }
                if (P(t), e && !t.$mobx && t[e], nt(t)) {
                    if (!e) return xt("please specify a property");
                    var r = t.$mobx.values[e];
                    return Ot( !! r, "no observable property '" + e + "' found on the observable object '" + je(t) + "'"),
                    r
                }
                if (Je(t) || mn(t) || qn(t)) return t
            } else if ("function" == typeof t && qn(t.$mobx)) return t.$mobx;
            return xt("Cannot obtain atom from " + t)
        }
        function Ee(t, e) {
            return Ot(t, "Expecting some object"),
            void 0 !== e ? Ee(Ae(t, e)) : Je(t) || mn(t) || qn(t) ? t: In(t) ? t: (P(t), t.$mobx ? t.$mobx: void Ot(!1, "Cannot obtain administration from " + t))
        }
        function je(t, e) {
            var n;
            return n = void 0 !== e ? Ae(t, e) : nt(t) || In(t) ? Ee(t) : Ae(t),
            n.name
        }
        function Te(t, e) {
            if (null === t || void 0 === t) return ! 1;
            if (void 0 !== e) {
                if (!1 === nt(t)) return ! 1;
                var n = Ae(t, e);
                return mn(n)
            }
            return mn(t)
        }
        function Ie(t, e, n, r) {
            return "function" == typeof n ? Le(t, e, n, r) : Ce(t, e, n)
        }
        function Ce(t, e, n) {
            return Ee(t).observe(e, n)
        }
        function Le(t, e, n, r) {
            return Ee(t, e).observe(n, r)
        }
        function Me(t, e, n) {
            return "function" == typeof n ? Re(t, e, n) : Pe(t, e)
        }
        function Pe(t, e) {
            return Ee(t).intercept(e)
        }
        function Re(t, e, n) {
            return Ee(t, e).intercept(n)
        }
        function De(t, e) {
            return se() || console.warn(x("m013")),
            Jn(t, {
                context: e
            }).get()
        }
        function Ne(t, e, n) {
            function r(r) {
                return e && n.push([t, r]),
                r
            }
            if (void 0 === e && (e = !0), void 0 === n && (n = []), rt(t)) {
                if (e && null === n && (n = []), e && null !== t && "object" == typeof t) for (var o = 0,
                i = n.length; o < i; o++) if (n[o][0] === t) return n[o][1];
                if (w(t)) {
                    var a = r([]),
                    s = t.map(function(t) {
                        return Ne(t, e, n)
                    });
                    a.length = s.length;
                    for (var o = 0,
                    i = s.length; o < i; o++) a[o] = s[o];
                    return a
                }
                if (nt(t)) {
                    var a = r({});
                    for (var u in t) a[u] = Ne(t[u], e, n);
                    return a
                }
                if (In(t)) {
                    var c = r({});
                    return t.forEach(function(t, r) {
                        return c[r] = Ne(t, e, n)
                    }),
                    c
                }
                if (cn(t)) return Ne(t.get(), e, n)
            }
            return t
        }
        function Ve(t, e) {
            Ot("function" == typeof t && t.length < 2, "createTransformer expects a function that accepts one argument");
            var n = {},
            o = Nn.resetId,
            i = function(o) {
                function i(e, n) {
                    var r = o.call(this,
                    function() {
                        return t(n)
                    },
                    void 0, hn.
                default, "Transformer-" + t.name + "-" + e, void 0) || this;
                    return r.sourceIdentifier = e,
                    r.sourceObject = n,
                    r
                }
                return r(i, o),
                i.prototype.onBecomeUnobserved = function() {
                    var t = this.value;
                    o.prototype.onBecomeUnobserved.call(this),
                    delete n[this.sourceIdentifier],
                    e && e(t, this.sourceObject)
                },
                i
            } (vn);
            return function(t) {
                o !== Nn.resetId && (n = {},
                o = Nn.resetId);
                var e = Ue(t),
                r = n[e];
                return r ? r.get() : (r = n[e] = new i(e, t), r.get())
            }
        }
        function Ue(t) {
            if ("string" == typeof t || "number" == typeof t) return t;
            if (null === t || "object" != typeof t) throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + t);
            var e = t.$transformId;
            return void 0 === e && (e = wt(), Lt(t, "$transformId", e)),
            e
        }
        function ze(t) {
            return console.log(t),
            t
        }
        function Be(t, e) {
            switch (arguments.length) {
            case 0:
                if (! (t = Nn.trackingDerivation)) return ze(x("m024"));
                break;
            case 2:
                t = Ae(t, e)
            }
            return t = Ae(t),
            mn(t) ? ze(t.whyRun()) : qn(t) ? ze(t.whyRun()) : xt(x("m025"))
        }
        function $e(t, e) {
            return He(Ae(t, e))
        }
        function He(t) {
            var e = {
                name: t.name
            };
            return t.observing && t.observing.length > 0 && (e.dependencies = At(t.observing).map(He)),
            e
        }
        function Ke(t, e) {
            return Ge(Ae(t, e))
        }
        function Ge(t) {
            var e = {
                name: t.name
            };
            return Ft(t) && (e.observers = Yt(t).map(Ge)),
            e
        }
        function We(t, e, n) {
            var r;
            if (In(t) || w(t) || cn(t)) r = Ee(t);
            else {
                if (!nt(t)) return xt("Expected observable map, object or array as first array");
                if ("string" != typeof e) return xt("InterceptReads can only be used with a specific property, not with an object in general");
                r = Ee(t, e)
            }
            return void 0 !== r.dehancer ? xt("An intercept reader was already established") : (r.dehancer = "function" == typeof e ? e: n,
            function() {
                r.dehancer = void 0
            })
        }
        n.d(e, "extras",
        function() {
            return Xn
        }),
        n.d(e, "Reaction",
        function() {
            return Kn
        }),
        n.d(e, "untracked",
        function() {
            return pe
        }),
        n.d(e, "IDerivationState",
        function() {
            return $n
        }),
        n.d(e, "Atom",
        function() {
            return Ye
        }),
        n.d(e, "BaseAtom",
        function() {
            return Fe
        }),
        n.d(e, "useStrict",
        function() {
            return E
        }),
        n.d(e, "isStrictModeEnabled",
        function() {
            return j
        }),
        n.d(e, "spy",
        function() {
            return h
        }),
        n.d(e, "comparer",
        function() {
            return hn
        }),
        n.d(e, "asReference",
        function() {
            return we
        }),
        n.d(e, "asFlat",
        function() {
            return Oe
        }),
        n.d(e, "asStructure",
        function() {
            return xe
        }),
        n.d(e, "asMap",
        function() {
            return Se
        }),
        n.d(e, "isModifierDescriptor",
        function() {
            return lt
        }),
        n.d(e, "isObservableObject",
        function() {
            return nt
        }),
        n.d(e, "isBoxedObservable",
        function() {
            return cn
        }),
        n.d(e, "isObservableArray",
        function() {
            return w
        }),
        n.d(e, "ObservableMap",
        function() {
            return Tn
        }),
        n.d(e, "isObservableMap",
        function() {
            return In
        }),
        n.d(e, "map",
        function() {
            return bt
        }),
        n.d(e, "transaction",
        function() {
            return gt
        }),
        n.d(e, "observable",
        function() {
            return En
        }),
        n.d(e, "IObservableFactories",
        function() {
            return An
        }),
        n.d(e, "computed",
        function() {
            return Jn
        }),
        n.d(e, "isObservable",
        function() {
            return rt
        }),
        n.d(e, "isComputed",
        function() {
            return Te
        }),
        n.d(e, "extendObservable",
        function() {
            return it
        }),
        n.d(e, "extendShallowObservable",
        function() {
            return at
        }),
        n.d(e, "observe",
        function() {
            return Ie
        }),
        n.d(e, "intercept",
        function() {
            return Me
        }),
        n.d(e, "autorun",
        function() {
            return H
        }),
        n.d(e, "autorunAsync",
        function() {
            return G
        }),
        n.d(e, "when",
        function() {
            return K
        }),
        n.d(e, "reaction",
        function() {
            return W
        }),
        n.d(e, "action",
        function() {
            return dn
        }),
        n.d(e, "isAction",
        function() {
            return V
        }),
        n.d(e, "runInAction",
        function() {
            return N
        }),
        n.d(e, "expr",
        function() {
            return De
        }),
        n.d(e, "toJS",
        function() {
            return Ne
        }),
        n.d(e, "createTransformer",
        function() {
            return Ve
        }),
        n.d(e, "whyRun",
        function() {
            return Be
        }),
        n.d(e, "isArrayLike",
        function() {
            return Ut
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var qe = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(t, e) {
            t.__proto__ = e
        } ||
        function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
        },
        Fe = function() {
            function t(t) {
                void 0 === t && (t = "Atom@" + wt()),
                this.name = t,
                this.isPendingUnobservation = !0,
                this.observers = [],
                this.observersIndexes = {},
                this.diffValue = 0,
                this.lastAccessedBy = 0,
                this.lowestObserverState = $n.NOT_TRACKING
            }
            return t.prototype.onBecomeUnobserved = function() {},
            t.prototype.reportObserved = function() {
                ee(this)
            },
            t.prototype.reportChanged = function() {
                Zt(),
                ne(this),
                te()
            },
            t.prototype.toString = function() {
                return this.name
            },
            t
        } (),
        Ye = function(t) {
            function e(e, n, r) {
                void 0 === e && (e = "Atom@" + wt()),
                void 0 === n && (n = Mn),
                void 0 === r && (r = Mn);
                var o = t.call(this, e) || this;
                return o.name = e,
                o.onBecomeObservedHandler = n,
                o.onBecomeUnobservedHandler = r,
                o.isPendingUnobservation = !1,
                o.isBeingTracked = !1,
                o
            }
            return r(e, t),
            e.prototype.reportObserved = function() {
                return Zt(),
                t.prototype.reportObserved.call(this),
                this.isBeingTracked || (this.isBeingTracked = !0, this.onBecomeObservedHandler()),
                te(),
                !!Nn.trackingDerivation
            },
            e.prototype.onBecomeUnobserved = function() {
                this.isBeingTracked = !1,
                this.onBecomeUnobservedHandler()
            },
            e
        } (Fe),
        Je = Vt("Atom", Fe),
        Xe = {
            spyReportEnd: !0
        },
        Qe = "__$$iterating",
        Ze = function() {
            var t = !1,
            e = {};
            return Object.defineProperty(e, "0", {
                set: function() {
                    t = !0
                }
            }),
            Object.create(e)[0] = 1,
            !1 === t
        } (),
        tn = 0,
        en = function() {
            function t() {}
            return t
        } (); !
        function(t, e) {
            void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, e) : void 0 !== t.prototype.__proto__ ? t.prototype.__proto__ = e: t.prototype = e
        } (en, Array.prototype);
        var nn = function() {
            function t(t, e, n, r) {
                this.array = n,
                this.owned = r,
                this.values = [],
                this.lastKnownLength = 0,
                this.interceptors = null,
                this.changeListeners = null,
                this.atom = new Fe(t || "ObservableArray@" + wt()),
                this.enhancer = function(n, r) {
                    return e(n, r, t + "[..]")
                }
            }
            return t.prototype.dehanceValue = function(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t
            },
            t.prototype.dehanceValues = function(t) {
                return void 0 !== this.dehancer ? t.map(this.dehancer) : t
            },
            t.prototype.intercept = function(t) {
                return i(this, t)
            },
            t.prototype.observe = function(t, e) {
                return void 0 === e && (e = !1),
                e && t({
                    object: this.array,
                    type: "splice",
                    index: 0,
                    added: this.values.slice(),
                    addedCount: this.values.length,
                    removed: [],
                    removedCount: 0
                }),
                u(this, t)
            },
            t.prototype.getArrayLength = function() {
                return this.atom.reportObserved(),
                this.values.length
            },
            t.prototype.setArrayLength = function(t) {
                if ("number" != typeof t || t < 0) throw new Error("[mobx.array] Out of range: " + t);
                var e = this.values.length;
                if (t !== e) if (t > e) {
                    for (var n = new Array(t - e), r = 0; r < t - e; r++) n[r] = void 0;
                    this.spliceWithArray(e, 0, n)
                } else this.spliceWithArray(t, e - t)
            },
            t.prototype.updateArrayLength = function(t, e) {
                if (t !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                this.lastKnownLength += e,
                e > 0 && t + e + 1 > tn && _(t + e + 1)
            },
            t.prototype.spliceWithArray = function(t, e, n) {
                var r = this;
                ue(this.atom);
                var i = this.values.length;
                if (void 0 === t ? t = 0 : t > i ? t = i: t < 0 && (t = Math.max(0, i + t)), e = 1 === arguments.length ? i - t: void 0 === e || null === e ? 0 : Math.max(0, Math.min(e, i - t)), void 0 === n && (n = []), o(this)) {
                    var s = a(this, {
                        object: this.array,
                        type: "splice",
                        index: t,
                        removedCount: e,
                        added: n
                    });
                    if (!s) return Cn;
                    e = s.removedCount,
                    n = s.added
                }
                n = n.map(function(t) {
                    return r.enhancer(t, void 0)
                });
                var u = n.length - e;
                this.updateArrayLength(i, u);
                var c = this.spliceItemsIntoValues(t, e, n);
                return 0 === e && 0 === n.length || this.notifyArraySplice(t, n, c),
                this.dehanceValues(c)
            },
            t.prototype.spliceItemsIntoValues = function(t, e, n) {
                if (n.length < 1e4) return (o = this.values).splice.apply(o, [t, e].concat(n));
                var r = this.values.slice(t, t + e);
                return this.values = this.values.slice(0, t).concat(n, this.values.slice(t + e)),
                r;
                var o
            }, t.prototype.notifyArrayChildUpdate = function(t, e, n) {
                var r = !this.owned && l(),
                o = s(this),
                i = o || r ? {
                    object: this.array,
                    type: "update",
                    index: t,
                    newValue: e,
                    oldValue: n
                }: null;
                r && p(i),
                this.atom.reportChanged(),
                o && c(this, i),
                r && d()
            },
            t.prototype.notifyArraySplice = function(t, e, n) {
                var r = !this.owned && l(),
                o = s(this),
                i = o || r ? {
                    object: this.array,
                    type: "splice",
                    index: t,
                    removed: n,
                    added: e,
                    removedCount: n.length,
                    addedCount: e.length
                }: null;
                r && p(i),
                this.atom.reportChanged(),
                o && c(this, i),
                r && d()
            },
            t
        } (),
        rn = function(t) {
            function e(e, n, r, o) {
                void 0 === r && (r = "ObservableArray@" + wt()),
                void 0 === o && (o = !1);
                var i = t.call(this) || this,
                a = new nn(r, n, i, o);
                return Mt(i, "$mobx", a),
                e && e.length && i.spliceWithArray(0, 0, e),
                Ze && Object.defineProperty(a.array, "0", on),
                i
            }
            return r(e, t),
            e.prototype.intercept = function(t) {
                return this.$mobx.intercept(t)
            },
            e.prototype.observe = function(t, e) {
                return void 0 === e && (e = !1),
                this.$mobx.observe(t, e)
            },
            e.prototype.clear = function() {
                return this.splice(0)
            },
            e.prototype.concat = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return this.$mobx.atom.reportObserved(),
                Array.prototype.concat.apply(this.peek(), t.map(function(t) {
                    return w(t) ? t.peek() : t
                }))
            },
            e.prototype.replace = function(t) {
                return this.$mobx.spliceWithArray(0, this.$mobx.values.length, t)
            },
            e.prototype.toJS = function() {
                return this.slice()
            },
            e.prototype.toJSON = function() {
                return this.toJS()
            },
            e.prototype.peek = function() {
                return this.$mobx.atom.reportObserved(),
                this.$mobx.dehanceValues(this.$mobx.values)
            },
            e.prototype.find = function(t, e, n) {
                void 0 === n && (n = 0);
                var r = this.findIndex.apply(this, arguments);
                return - 1 === r ? void 0 : this.get(r)
            },
            e.prototype.findIndex = function(t, e, n) {
                void 0 === n && (n = 0);
                for (var r = this.peek(), o = r.length, i = n; i < o; i++) if (t.call(e, r[i], i, this)) return i;
                return - 1
            },
            e.prototype.splice = function(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                switch (arguments.length) {
                case 0:
                    return [];
                case 1:
                    return this.$mobx.spliceWithArray(t);
                case 2:
                    return this.$mobx.spliceWithArray(t, e)
                }
                return this.$mobx.spliceWithArray(t, e, n)
            },
            e.prototype.spliceWithArray = function(t, e, n) {
                return this.$mobx.spliceWithArray(t, e, n)
            },
            e.prototype.push = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = this.$mobx;
                return n.spliceWithArray(n.values.length, 0, t),
                n.values.length
            },
            e.prototype.pop = function() {
                return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
            },
            e.prototype.shift = function() {
                return this.splice(0, 1)[0]
            },
            e.prototype.unshift = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = this.$mobx;
                return n.spliceWithArray(0, 0, t),
                n.values.length
            },
            e.prototype.reverse = function() {
                var t = this.slice();
                return t.reverse.apply(t, arguments)
            },
            e.prototype.sort = function(t) {
                var e = this.slice();
                return e.sort.apply(e, arguments)
            },
            e.prototype.remove = function(t) {
                var e = this.$mobx.dehanceValues(this.$mobx.values).indexOf(t);
                return e > -1 && (this.splice(e, 1), !0)
            },
            e.prototype.move = function(t, e) {
                function n(t) {
                    if (t < 0) throw new Error("[mobx.array] Index out of bounds: " + t + " is negative");
                    var e = this.$mobx.values.length;
                    if (t >= e) throw new Error("[mobx.array] Index out of bounds: " + t + " is not smaller than " + e)
                }
                if (n.call(this, t), n.call(this, e), t !== e) {
                    var r, o = this.$mobx.values;
                    r = t < e ? o.slice(0, t).concat(o.slice(t + 1, e + 1), [o[t]], o.slice(e + 1)) : o.slice(0, e).concat([o[t]], o.slice(e, t), o.slice(t + 1)),
                    this.replace(r)
                }
            },
            e.prototype.get = function(t) {
                var e = this.$mobx;
                if (e) {
                    if (t < e.values.length) return e.atom.reportObserved(),
                    e.dehanceValue(e.values[t]);
                    console.warn("[mobx.array] Attempt to read an array index (" + t + ") that is out of bounds (" + e.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                }
            },
            e.prototype.set = function(t, e) {
                var n = this.$mobx,
                r = n.values;
                if (t < r.length) {
                    ue(n.atom);
                    var i = r[t];
                    if (o(n)) {
                        var s = a(n, {
                            type: "update",
                            object: this,
                            index: t,
                            newValue: e
                        });
                        if (!s) return;
                        e = s.newValue
                    }
                    e = n.enhancer(e, i);
                    e !== i && (r[t] = e, n.notifyArrayChildUpdate(t, e, i))
                } else {
                    if (t !== r.length) throw new Error("[mobx.array] Index out of bounds, " + t + " is larger than " + r.length);
                    n.spliceWithArray(t, 0, [e])
                }
            },
            e
        } (en);
        g(rn.prototype,
        function() {
            return m(this.slice())
        }),
        Object.defineProperty(rn.prototype, "length", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.$mobx.getArrayLength()
            },
            set: function(t) {
                this.$mobx.setArrayLength(t)
            }
        }),
        ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function(t) {
            var e = Array.prototype[t];
            Ot("function" == typeof e, "Base function not defined on Array prototype: '" + t + "'"),
            Lt(rn.prototype, t,
            function() {
                return e.apply(this.peek(), arguments)
            })
        }),
        function(t, e) {
            for (var n = 0; n < e.length; n++) Lt(t, e[n], t[e[n]])
        } (rn.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
        var on = y(0);
        _(1e3);
        var an = Vt("ObservableArrayAdministration", nn),
        sn = {},
        un = function(t) {
            function e(e, n, r, o) {
                void 0 === r && (r = "ObservableValue@" + wt()),
                void 0 === o && (o = !0);
                var i = t.call(this, r) || this;
                return i.enhancer = n,
                i.hasUnreportedChange = !1,
                i.dehancer = void 0,
                i.value = n(e, void 0, r),
                o && l() && f({
                    type: "create",
                    object: i,
                    newValue: i.value
                }),
                i
            }
            return r(e, t),
            e.prototype.dehanceValue = function(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t
            },
            e.prototype.set = function(t) {
                var e = this.value;
                if ((t = this.prepareNewValue(t)) !== sn) {
                    var n = l();
                    n && p({
                        type: "update",
                        object: this,
                        newValue: t,
                        oldValue: e
                    }),
                    this.setNewValue(t),
                    n && d()
                }
            },
            e.prototype.prepareNewValue = function(t) {
                if (ue(this), o(this)) {
                    var e = a(this, {
                        object: this,
                        type: "update",
                        newValue: t
                    });
                    if (!e) return sn;
                    t = e.newValue
                }
                return t = this.enhancer(t, this.value, this.name),
                this.value !== t ? t: sn
            },
            e.prototype.setNewValue = function(t) {
                var e = this.value;
                this.value = t,
                this.reportChanged(),
                s(this) && c(this, {
                    type: "update",
                    object: this,
                    newValue: t,
                    oldValue: e
                })
            },
            e.prototype.get = function() {
                return this.reportObserved(),
                this.dehanceValue(this.value)
            },
            e.prototype.intercept = function(t) {
                return i(this, t)
            },
            e.prototype.observe = function(t, e) {
                return e && t({
                    object: this,
                    type: "update",
                    newValue: this.value,
                    oldValue: void 0
                }),
                u(this, t)
            },
            e.prototype.toJSON = function() {
                return this.get()
            },
            e.prototype.toString = function() {
                return this.name + "[" + this.value + "]"
            },
            e.prototype.valueOf = function() {
                return Ht(this.get())
            },
            e
        } (Fe);
        un.prototype[$t()] = un.prototype.valueOf;
        var cn = Vt("ObservableValue", un),
        ln = {
            m001: "It is not allowed to assign new values to @action fields",
            m002: "`runInAction` expects a function",
            m003: "`runInAction` expects a function without arguments",
            m004: "autorun expects a function",
            m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
            m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
            m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
            m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
            m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
            m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
            m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
            m012: "computed takes one or two arguments if used as function",
            m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
            m014: "extendObservable expected 2 or more arguments",
            m015: "extendObservable expects an object as first argument",
            m016: "extendObservable should not be used on maps, use map.merge instead",
            m017: "all arguments of extendObservable should be objects",
            m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
            m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
            m020: "modifiers can only be used for individual object properties",
            m021: "observable expects zero or one arguments",
            m022: "@observable can not be used on getters, use @computed instead",
            m023: "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
            m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
            m025: "whyRun can only be used on reactions and computed values",
            m026: "`action` can only be invoked on functions",
            m028: "It is not allowed to set `useStrict` when a derivation is running",
            m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
            m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
            m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
            m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
            m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
            m033: "`observe` doesn't support the fire immediately property for observable maps.",
            m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
            m035: "Cannot make the designated object observable; it is not extensible",
            m036: "It is not possible to get index atoms from arrays",
            m037: 'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',
            m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
        },
        fn = L(function(t, e, n, r, o) {
            var i = r && 1 === r.length ? r[0] : n.name || e || "<unnamed action>";
            Lt(t, e, dn(i, n))
        },
        function(t) {
            return this[t]
        },
        function() {
            Ot(!1, x("m001"))
        },
        !1, !0),
        pn = L(function(t, e, n) {
            U(t, e, n)
        },
        function(t) {
            return this[t]
        },
        function() {
            Ot(!1, x("m001"))
        },
        !1, !1),
        dn = function(t, e, n, r) {
            return 1 === arguments.length && "function" == typeof t ? O(t.name || "<unnamed action>", t) : 2 === arguments.length && "function" == typeof e ? O(t, e) : 1 === arguments.length && "string" == typeof t ? D(t) : D(e).apply(null, arguments)
        };
        dn.bound = function(t, e, n) {
            if ("function" == typeof t) {
                var r = O("<not yet bound action>", t);
                return r.autoBind = !0,
                r
            }
            return pn.apply(null, arguments)
        };
        var hn = {
            identity: z,
            structural: B,
        default:
            $
        },
        vn = function() {
            function t(t, e, n, r, o) {
                this.derivation = t,
                this.scope = e,
                this.equals = n,
                this.dependenciesState = $n.NOT_TRACKING,
                this.observing = [],
                this.newObserving = null,
                this.isPendingUnobservation = !1,
                this.observers = [],
                this.observersIndexes = {},
                this.diffValue = 0,
                this.runId = 0,
                this.lastAccessedBy = 0,
                this.lowestObserverState = $n.UP_TO_DATE,
                this.unboundDepsCount = 0,
                this.__mapid = "#" + wt(),
                this.value = new Hn(null),
                this.isComputing = !1,
                this.isRunningSetter = !1,
                this.name = r || "ComputedValue@" + wt(),
                o && (this.setter = O(r + "-setter", o))
            }
            return t.prototype.onBecomeStale = function() {
                oe(this)
            },
            t.prototype.onBecomeUnobserved = function() {
                fe(this),
                this.value = void 0
            },
            t.prototype.get = function() {
                Ot(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation),
                0 === Nn.inBatch ? (Zt(), ae(this) && (this.value = this.computeValue(!1)), te()) : (ee(this), ae(this) && this.trackAndCompute() && re(this));
                var t = this.value;
                if (ie(t)) throw t.cause;
                return t
            },
            t.prototype.peek = function() {
                var t = this.computeValue(!1);
                if (ie(t)) throw t.cause;
                return t
            },
            t.prototype.set = function(t) {
                if (this.setter) {
                    Ot(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"),
                    this.isRunningSetter = !0;
                    try {
                        this.setter.call(this.scope, t)
                    } finally {
                        this.isRunningSetter = !1
                    }
                } else Ot(!1, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.")
            },
            t.prototype.trackAndCompute = function() {
                l() && f({
                    object: this.scope,
                    type: "compute",
                    fn: this.derivation
                });
                var t = this.value,
                e = this.value = this.computeValue(!0);
                return ie(t) || ie(e) || !this.equals(t, e)
            },
            t.prototype.computeValue = function(t) {
                this.isComputing = !0,
                Nn.computationDepth++;
                var e;
                if (t) e = ce(this, this.derivation, this.scope);
                else try {
                    e = this.derivation.call(this.scope)
                } catch(t) {
                    e = new Hn(t)
                }
                return Nn.computationDepth--,
                this.isComputing = !1,
                e
            },
            t.prototype.observe = function(t, e) {
                var n = this,
                r = !0,
                o = void 0;
                return H(function() {
                    var i = n.get();
                    if (!r || e) {
                        var a = de();
                        t({
                            type: "update",
                            object: n,
                            newValue: i,
                            oldValue: o
                        }),
                        he(a)
                    }
                    r = !1,
                    o = i
                })
            },
            t.prototype.toJSON = function() {
                return this.get()
            },
            t.prototype.toString = function() {
                return this.name + "[" + this.derivation.toString() + "]"
            },
            t.prototype.valueOf = function() {
                return Ht(this.get())
            },
            t.prototype.whyRun = function() {
                var t = Boolean(Nn.trackingDerivation),
                e = At(this.isComputing ? this.newObserving: this.observing).map(function(t) {
                    return t.name
                }),
                n = At(Yt(this).map(function(t) {
                    return t.name
                }));
                return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (t ? "[active] the value of this computation is needed by a reaction": this.isComputing ? "[get] The value of this computed was requested outside a reaction": "[idle] not running at the moment") + "\n" + (this.dependenciesState === $n.NOT_TRACKING ? x("m032") : " * This computation will re-run if any of the following observables changes:\n    " + Et(e) + "\n    " + (this.isComputing && t ? " (... or any observable accessed during the remainder of the current run)": "") + "\n\t" + x("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + Et(n) + "\n")
            },
            t
        } ();
        vn.prototype[$t()] = vn.prototype.valueOf;
        var mn = Vt("ComputedValue", vn),
        gn = function() {
            function t(t, e) {
                this.target = t,
                this.name = e,
                this.values = {},
                this.changeListeners = null,
                this.interceptors = null
            }
            return t.prototype.observe = function(t, e) {
                return Ot(!0 !== e, "`observe` doesn't support the fire immediately property for observable objects."),
                u(this, t)
            },
            t.prototype.intercept = function(t) {
                return i(this, t)
            },
            t
        } (),
        yn = {},
        bn = {},
        _n = Vt("ObservableObjectAdministration", gn),
        wn = ot(pt),
        xn = ot(dt),
        On = ot(ht),
        Sn = ot(vt),
        kn = ot(mt),
        An = function() {
            function t() {}
            return t.prototype.box = function(t, e) {
                return arguments.length > 2 && ct("box"),
                new un(t, pt, e)
            },
            t.prototype.shallowBox = function(t, e) {
                return arguments.length > 2 && ct("shallowBox"),
                new un(t, ht, e)
            },
            t.prototype.array = function(t, e) {
                return arguments.length > 2 && ct("array"),
                new rn(t, pt, e)
            },
            t.prototype.shallowArray = function(t, e) {
                return arguments.length > 2 && ct("shallowArray"),
                new rn(t, ht, e)
            },
            t.prototype.map = function(t, e) {
                return arguments.length > 2 && ct("map"),
                new Tn(t, pt, e)
            },
            t.prototype.shallowMap = function(t, e) {
                return arguments.length > 2 && ct("shallowMap"),
                new Tn(t, ht, e)
            },
            t.prototype.object = function(t, e) {
                arguments.length > 2 && ct("object");
                var n = {};
                return q(n, e),
                it(n, t),
                n
            },
            t.prototype.shallowObject = function(t, e) {
                arguments.length > 2 && ct("shallowObject");
                var n = {};
                return q(n, e),
                at(n, t),
                n
            },
            t.prototype.ref = function() {
                return arguments.length < 2 ? ft(ht, arguments[0]) : On.apply(null, arguments)
            },
            t.prototype.shallow = function() {
                return arguments.length < 2 ? ft(dt, arguments[0]) : xn.apply(null, arguments)
            },
            t.prototype.deep = function() {
                return arguments.length < 2 ? ft(pt, arguments[0]) : wn.apply(null, arguments)
            },
            t.prototype.struct = function() {
                return arguments.length < 2 ? ft(vt, arguments[0]) : Sn.apply(null, arguments)
            },
            t
        } (),
        En = ut;
        Object.getOwnPropertyNames(An.prototype).filter(function(t) {
            return "constructor" !== t
        }).forEach(function(t) {
            return En[t] = An.prototype[t]
        }),
        En.deep.struct = En.struct,
        En.ref.struct = function() {
            return arguments.length < 2 ? ft(mt, arguments[0]) : kn.apply(null, arguments)
        };
        var jn = {},
        Tn = function() {
            function t(t, e, n) {
                void 0 === e && (e = pt),
                void 0 === n && (n = "ObservableMap@" + wt()),
                this.enhancer = e,
                this.name = n,
                this.$mobx = jn,
                this._data = Object.create(null),
                this._hasMap = Object.create(null),
                this._keys = new rn(void 0, ht, this.name + ".keys()", !0),
                this.interceptors = null,
                this.changeListeners = null,
                this.dehancer = void 0,
                this.merge(t)
            }
            return t.prototype._has = function(t) {
                return void 0 !== this._data[t]
            },
            t.prototype.has = function(t) {
                return !! this.isValidKey(t) && (t = "" + t, this._hasMap[t] ? this._hasMap[t].get() : this._updateHasMapEntry(t, !1).get())
            },
            t.prototype.set = function(t, e) {
                this.assertValidKey(t),
                t = "" + t;
                var n = this._has(t);
                if (o(this)) {
                    var r = a(this, {
                        type: n ? "update": "add",
                        object: this,
                        newValue: e,
                        name: t
                    });
                    if (!r) return this;
                    e = r.newValue
                }
                return n ? this._updateValue(t, e) : this._addValue(t, e),
                this
            },
            t.prototype.delete = function(t) {
                var e = this;
                if (this.assertValidKey(t), t = "" + t, o(this)) {
                    var n = a(this, {
                        type: "delete",
                        object: this,
                        name: t
                    });
                    if (!n) return ! 1
                }
                if (this._has(t)) {
                    var r = l(),
                    i = s(this),
                    n = i || r ? {
                        type: "delete",
                        object: this,
                        oldValue: this._data[t].value,
                        name: t
                    }: null;
                    return r && p(n),
                    yt(function() {
                        e._keys.remove(t),
                        e._updateHasMapEntry(t, !1),
                        e._data[t].setNewValue(void 0),
                        e._data[t] = void 0
                    }),
                    i && c(this, n),
                    r && d(),
                    !0
                }
                return ! 1
            },
            t.prototype._updateHasMapEntry = function(t, e) {
                var n = this._hasMap[t];
                return n ? n.setNewValue(e) : n = this._hasMap[t] = new un(e, ht, this.name + "." + t + "?", !1),
                n
            },
            t.prototype._updateValue = function(t, e) {
                var n = this._data[t];
                if ((e = n.prepareNewValue(e)) !== sn) {
                    var r = l(),
                    o = s(this),
                    i = o || r ? {
                        type: "update",
                        object: this,
                        oldValue: n.value,
                        name: t,
                        newValue: e
                    }: null;
                    r && p(i),
                    n.setNewValue(e),
                    o && c(this, i),
                    r && d()
                }
            },
            t.prototype._addValue = function(t, e) {
                var n = this;
                yt(function() {
                    var r = n._data[t] = new un(e, n.enhancer, n.name + "." + t, !1);
                    e = r.value,
                    n._updateHasMapEntry(t, !0),
                    n._keys.push(t)
                });
                var r = l(),
                o = s(this),
                i = o || r ? {
                    type: "add",
                    object: this,
                    name: t,
                    newValue: e
                }: null;
                r && p(i),
                o && c(this, i),
                r && d()
            },
            t.prototype.get = function(t) {
                return t = "" + t,
                this.has(t) ? this.dehanceValue(this._data[t].get()) : this.dehanceValue(void 0)
            },
            t.prototype.dehanceValue = function(t) {
                return void 0 !== this.dehancer ? this.dehancer(t) : t
            },
            t.prototype.keys = function() {
                return m(this._keys.slice())
            },
            t.prototype.values = function() {
                return m(this._keys.map(this.get, this))
            },
            t.prototype.entries = function() {
                var t = this;
                return m(this._keys.map(function(e) {
                    return [e, t.get(e)]
                }))
            },
            t.prototype.forEach = function(t, e) {
                var n = this;
                this.keys().forEach(function(r) {
                    return t.call(e, n.get(r), r, n)
                })
            },
            t.prototype.merge = function(t) {
                var e = this;
                return In(t) && (t = t.toJS()),
                yt(function() {
                    Tt(t) ? Object.keys(t).forEach(function(n) {
                        return e.set(n, t[n])
                    }) : Array.isArray(t) ? t.forEach(function(t) {
                        var n = t[0],
                        r = t[1];
                        return e.set(n, r)
                    }) : Bt(t) ? t.forEach(function(t, n) {
                        return e.set(n, t)
                    }) : null !== t && void 0 !== t && xt("Cannot initialize map from " + t)
                }),
                this
            },
            t.prototype.clear = function() {
                var t = this;
                yt(function() {
                    pe(function() {
                        t.keys().forEach(t.delete, t)
                    })
                })
            },
            t.prototype.replace = function(t) {
                var e = this;
                return yt(function() {
                    e.clear(),
                    e.merge(t)
                }),
                this
            },
            Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this._keys.length
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.toJS = function() {
                var t = this,
                e = {};
                return this.keys().forEach(function(n) {
                    return e[n] = t.get(n)
                }),
                e
            },
            t.prototype.toJSON = function() {
                return this.toJS()
            },
            t.prototype.isValidKey = function(t) {
                return null !== t && void 0 !== t && ("string" == typeof t || "number" == typeof t || "boolean" == typeof t)
            },
            t.prototype.assertValidKey = function(t) {
                if (!this.isValidKey(t)) throw new Error("[mobx.map] Invalid key: '" + t + "', only strings, numbers and booleans are accepted as key in observable maps.")
            },
            t.prototype.toString = function() {
                var t = this;
                return this.name + "[{ " + this.keys().map(function(e) {
                    return e + ": " + t.get(e)
                }).join(", ") + " }]"
            },
            t.prototype.observe = function(t, e) {
                return Ot(!0 !== e, x("m033")),
                u(this, t)
            },
            t.prototype.intercept = function(t) {
                return i(this, t)
            },
            t
        } ();
        g(Tn.prototype,
        function() {
            return this.entries()
        });
        var In = Vt("ObservableMap", Tn),
        Cn = [];
        Object.freeze(Cn);
        var Ln = [],
        Mn = function() {},
        Pn = Object.prototype.hasOwnProperty,
        Rn = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"],
        Dn = function() {
            function t() {
                this.version = 5,
                this.trackingDerivation = null,
                this.computationDepth = 0,
                this.runId = 0,
                this.mobxGuid = 0,
                this.inBatch = 0,
                this.pendingUnobservations = [],
                this.pendingReactions = [],
                this.isRunningReactions = !1,
                this.allowStateChanges = !0,
                this.strictMode = !1,
                this.resetId = 0,
                this.spyListeners = [],
                this.globalReactionErrorHandlers = []
            }
            return t
        } (),
        Nn = new Dn,
        Vn = !1,
        Un = !1,
        zn = !1,
        Bn = _t();
        Bn.__mobxInstanceCount ? (Bn.__mobxInstanceCount++, setTimeout(function() {
            Vn || Un || zn || (zn = !0, console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details."))
        })) : Bn.__mobxInstanceCount = 1;
        var $n; !
        function(t) {
            t[t.NOT_TRACKING = -1] = "NOT_TRACKING",
            t[t.UP_TO_DATE = 0] = "UP_TO_DATE",
            t[t.POSSIBLY_STALE = 1] = "POSSIBLY_STALE",
            t[t.STALE = 2] = "STALE"
        } ($n || ($n = {}));
        var Hn = function() {
            function t(t) {
                this.cause = t
            }
            return t
        } (),
        Kn = function() {
            function t(t, e) {
                void 0 === t && (t = "Reaction@" + wt()),
                this.name = t,
                this.onInvalidate = e,
                this.observing = [],
                this.newObserving = [],
                this.dependenciesState = $n.NOT_TRACKING,
                this.diffValue = 0,
                this.runId = 0,
                this.unboundDepsCount = 0,
                this.__mapid = "#" + wt(),
                this.isDisposed = !1,
                this._isScheduled = !1,
                this._isTrackPending = !1,
                this._isRunning = !1
            }
            return t.prototype.onBecomeStale = function() {
                this.schedule()
            },
            t.prototype.schedule = function() {
                this._isScheduled || (this._isScheduled = !0, Nn.pendingReactions.push(this), ye())
            },
            t.prototype.isScheduled = function() {
                return this._isScheduled
            },
            t.prototype.runReaction = function() {
                this.isDisposed || (Zt(), this._isScheduled = !1, ae(this) && (this._isTrackPending = !0, this.onInvalidate(), this._isTrackPending && l() && f({
                    object: this,
                    type: "scheduled-reaction"
                })), te())
            },
            t.prototype.track = function(t) {
                Zt();
                var e, n = l();
                n && (e = Date.now(), p({
                    object: this,
                    type: "reaction",
                    fn: t
                })),
                this._isRunning = !0;
                var r = ce(this, t, void 0);
                this._isRunning = !1,
                this._isTrackPending = !1,
                this.isDisposed && fe(this),
                ie(r) && this.reportExceptionInDerivation(r.cause),
                n && d({
                    time: Date.now() - e
                }),
                te()
            },
            t.prototype.reportExceptionInDerivation = function(t) {
                var e = this;
                if (this.errorHandler) return void this.errorHandler(t, this);
                var n = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this,
                r = x("m037");
                console.error(n || r, t),
                l() && f({
                    type: "error",
                    message: n,
                    error: t,
                    object: this
                }),
                Nn.globalReactionErrorHandlers.forEach(function(n) {
                    return n(t, e)
                })
            },
            t.prototype.dispose = function() {
                this.isDisposed || (this.isDisposed = !0, this._isRunning || (Zt(), fe(this), te()))
            },
            t.prototype.getDisposer = function() {
                var t = this.dispose.bind(this);
                return t.$mobx = this,
                t.onError = me,
                t
            },
            t.prototype.toString = function() {
                return "Reaction[" + this.name + "]"
            },
            t.prototype.whyRun = function() {
                var t = At(this._isRunning ? this.newObserving: this.observing).map(function(t) {
                    return t.name
                });
                return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped": this._isRunning ? "running": this.isScheduled() ? "scheduled": "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + Et(t) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)": "") + "\n\t" + x("m038") + "\n"
            },
            t
        } (),
        Gn = 100,
        Wn = function(t) {
            return t()
        },
        qn = Vt("Reaction", Kn),
        Fn = ke(hn.
    default),
        Yn = ke(hn.structural),
        Jn = function(t, e, n) {
            if ("string" == typeof e) return Fn.apply(null, arguments);
            Ot("function" == typeof t, x("m011")),
            Ot(arguments.length < 3, x("m012"));
            var r = "object" == typeof e ? e: {};
            r.setter = "function" == typeof e ? e: r.setter;
            var o = r.equals ? r.equals: r.compareStructural || r.struct ? hn.structural: hn.
        default;
            return new vn(t, r.context, o, r.name || t.name || "", r.setter)
        };
        Jn.struct = Yn,
        Jn.equals = ke;
        var Xn = {
            allowStateChanges: T,
            deepEqual: Nt,
            getAtom: Ae,
            getDebugName: je,
            getDependencyTree: $e,
            getAdministration: Ee,
            getGlobalState: Wt,
            getObserverTree: Ke,
            interceptReads: We,
            isComputingDerivation: se,
            isSpyEnabled: l,
            onReactionError: ge,
            reserveArrayBuffer: _,
            resetGlobalState: qt,
            isolateGlobalState: Kt,
            shareGlobalState: Gt,
            spyReport: f,
            spyReportEnd: d,
            spyReportStart: p,
            setReactionScheduler: _e
        },
        Qn = {
            Reaction: Kn,
            untracked: pe,
            Atom: Ye,
            BaseAtom: Fe,
            useStrict: E,
            isStrictModeEnabled: j,
            spy: h,
            comparer: hn,
            asReference: we,
            asFlat: Oe,
            asStructure: xe,
            asMap: Se,
            isModifierDescriptor: lt,
            isObservableObject: nt,
            isBoxedObservable: cn,
            isObservableArray: w,
            ObservableMap: Tn,
            isObservableMap: In,
            map: bt,
            transaction: gt,
            observable: En,
            computed: Jn,
            isObservable: rt,
            isComputed: Te,
            extendObservable: it,
            extendShallowObservable: at,
            observe: Ie,
            intercept: Me,
            autorun: H,
            autorunAsync: G,
            when: K,
            reaction: W,
            action: dn,
            isAction: V,
            runInAction: N,
            expr: De,
            toJS: Ne,
            createTransformer: Ve,
            whyRun: Be,
            isArrayLike: Ut,
            extras: Xn
        },
        Zn = !1;
        for (var tr in Qn) !
        function(t) {
            var e = Qn[t];
            Object.defineProperty(Qn, t, {
                get: function() {
                    return Zn || (Zn = !0, console.warn("Using default export (`import mobx from 'mobx'`) is deprecated and won’t work in mobx@4.0.0\nUse `import * as mobx from 'mobx'` instead")),
                    e
                }
            })
        } (tr);
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: h,
            extras: Xn
        }),
        e.
    default = Qn
    }.call(e, n(95))
},
function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t: {
        default:
            t
        }
    }
    function o(t, e) {
        t[e] = function(n) {
            var r = (0, b.getTargetContainer)(n),
            o = t.theme[e];
            return (0, g.autorun)(function() {
                var e = o(t.state, t);
                r.firstChild ? r.replaceChild(e, r.firstChild) : r.appendChild(e)
            }),
            r
        }
    }
    var i = n(27),
    a = r(i),
    s = n(29),
    u = r(s),
    c = n(28),
    l = r(c),
    f = n(44),
    p = r(f),
    d = n(45),
    h = r(d),
    v = n(46),
    m = r(v),
    g = n(47),
    y = n(14),
    b = n(43),
    _ = n(42),
    w = r(_),
    x = function() {
        function t() {
            var e = this,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; (0, h.
        default)(this, t),
            this.defaultTheme = w.
        default,
            (0, p.
        default)(this, {
                id: window.location.href,
                title: window.document.title,
                link: window.location.href,
                desc: "",
                labels: [],
                oauth: {},
                perPage: 20,
                maxCommentHeight: 250
            },
            n),
            this.theme = (0, p.
        default)({},
            w.
        default, n.theme),
            this.useTheme(this.theme);
            var r = {};
            try {
                var o = localStorage.getItem(y.LS_USER_KEY);
                this.accessToken && o && (0, p.
            default)(r, JSON.parse(o), {
                    fromCache: !0
                })
            } catch(t) {
                localStorage.removeItem(y.LS_USER_KEY)
            }
            this.state = (0, g.observable)({
                user: r,
                error: null,
                meta: {},
                comments: void 0,
                reactions: [],
                commentReactions: {},
                currentPage: 1
            });
            var i = b.Query.parse();
            if (i.code) {
                var a = this.oauth,
                s = a.client_id,
                u = a.client_secret,
                c = i.code;
                delete i.code;
                var l = b.Query.stringify(i),
                f = "" + window.location.origin + window.location.pathname + l + window.location.hash;
                history.replaceState({},
                "", f),
                (0, p.
            default)(this, {
                    id: f,
                    link: f
                },
                n),
                this.state.user.isLoggingIn = !0,
                b.http.post("https://gh-oauth.imsun.net", {
                    code: c,
                    client_id: s,
                    client_secret: u
                },
                "").then(function(t) {
                    e.accessToken = t.access_token,
                    e.update()
                }).
                catch(function(t) {
                    e.state.user.isLoggingIn = !1,
                    alert(t)
                })
            } else this.update()
        }
        return (0, m.
    default)(t, [{
            key: "accessToken",
            get: function() {
                return localStorage.getItem(y.LS_ACCESS_TOKEN_KEY)
            },
            set: function(t) {
                localStorage.setItem(y.LS_ACCESS_TOKEN_KEY, t)
            }
        },
        {
            key: "loginLink",
            get: function() {
                var t = this.oauth.redirect_uri || window.location.href,
                e = (0, p.
            default)({
                    scope:
                    "public_repo",
                    redirect_uri: t
                },
                this.oauth);
                return "https://github.com/login/oauth/authorize" + b.Query.stringify(e)
            }
        }]),
        (0, m.
    default)(t, [{
            key: "init",
            value: function() {
                var t = this;
                return this.createIssue().then(function() {
                    return t.loadComments()
                }).then(function(e) {
                    return t.state.error = null,
                    e
                })
            }
        },
        {
            key: "useTheme",
            value: function() {
                var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; (0, l.
            default)(e).forEach(function(e) {
                    return o(t, e)
                })
            }
        },
        {
            key: "update",
            value: function() {
                var t = this;
                return u.
            default.all([this.loadMeta(), this.loadUserInfo()]).then(function() {
                    return u.
                default.all([t.loadComments().then(function() {
                        return t.loadCommentReactions()
                    }), t.loadReactions()])
                }).
                catch(function(e) {
                    return t.state.error = e
                })
            }
        },
        {
            key: "markdown",
            value: function(t) {
                return b.http.post("/markdown", {
                    text: t,
                    mode: "gfm"
                })
            }
        },
        {
            key: "createIssue",
            value: function() {
                var t = this,
                e = this.id,
                n = this.owner,
                r = this.repo,
                o = this.title,
                i = this.link,
                a = this.desc,
                s = this.labels;
                return b.http.post("/repos/" + n + "/" + r + "/issues", {
                    title: o,
                    labels: s.concat(["gitment", e]),
                    body: i + "\n\n" + a
                }).then(function(e) {
                    return t.state.meta = e,
                    e
                })
            }
        },
        {
            key: "getIssue",
            value: function() {
                return this.state.meta.id ? u.
            default.resolve(this.state.meta):
                this.loadMeta()
            }
        },
        {
            key: "post",
            value: function(t) {
                var e = this;
                return this.getIssue().then(function(e) {
                    return b.http.post(e.comments_url, {
                        body: t
                    },
                    "")
                }).then(function(t) {
                    e.state.meta.comments++;
                    var n = Math.ceil(e.state.meta.comments / e.perPage);
                    return e.state.currentPage === n && e.state.comments.push(t),
                    t
                })
            }
        },
        {
            key: "loadMeta",
            value: function() {
                var t = this,
                e = this.id,
                n = this.owner,
                r = this.repo;
                return b.http.get("/repos/" + n + "/" + r + "/issues", {
                    creator: n,
                    labels: e
                }).then(function(e) {
                    return e.length ? (t.state.meta = e[0], e[0]) : u.
                default.reject(y.NOT_INITIALIZED_ERROR)
                })
            }
        },
        {
            key: "loadComments",
            value: function() {
                var t = this,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentPage;
                return this.getIssue().then(function(n) {
                    return b.http.get(n.comments_url, {
                        page: e,
                        per_page: t.perPage
                    },
                    "")
                }).then(function(e) {
                    return t.state.comments = e,
                    e
                })
            }
        },
        {
            key: "loadUserInfo",
            value: function() {
                var t = this;
                return this.accessToken ? b.http.get("/user").then(function(e) {
                    return t.state.user = e,
                    localStorage.setItem(y.LS_USER_KEY, (0, a.
                default)(e)),
                    e
                }) : (this.logout(), u.
            default.resolve({}))
            }
        },
        {
            key: "loadReactions",
            value: function() {
                var t = this;
                return this.accessToken ? this.getIssue().then(function(t) {
                    return t.reactions.total_count ? b.http.get(t.reactions.url, {},
                    "") : []
                }).then(function(e) {
                    return t.state.reactions = e,
                    e
                }) : (this.state.reactions = [], u.
            default.resolve([]))
            }
        },
        {
            key: "loadCommentReactions",
            value: function() {
                var t = this;
                if (!this.accessToken) return this.state.commentReactions = {},
                u.
            default.resolve([]);
                var e = this.state.comments,
                n = {};
                return u.
            default.all(e.map(function(e) {
                    if (!e.reactions.total_count) return [];
                    var n = t.owner,
                    r = t.repo;
                    return b.http.get("/repos/" + n + "/" + r + "/issues/comments/" + e.id + "/reactions", {})
                })).then(function(r) {
                    return e.forEach(function(t, e) {
                        n[t.id] = r[e]
                    }),
                    t.state.commentReactions = n,
                    n
                })
            }
        },
        {
            key: "login",
            value: function() {
                window.location.href = this.loginLink
            }
        },
        {
            key: "logout",
            value: function() {
                localStorage.removeItem(y.LS_ACCESS_TOKEN_KEY),
                localStorage.removeItem(y.LS_USER_KEY),
                this.state.user = {}
            }
        },
        {
            key: "goto",
            value: function(t) {
                return this.state.currentPage = t,
                this.state.comments = void 0,
                this.loadComments(t)
            }
        },
        {
            key: "like",
            value: function() {
                var t = this;
                if (!this.accessToken) return alert("Login to Like"),
                u.
            default.reject();
                var e = this.owner,
                n = this.repo;
                return b.http.post("/repos/" + e + "/" + n + "/issues/" + this.state.meta.number + "/reactions", {
                    content: "heart"
                }).then(function(e) {
                    t.state.reactions.push(e),
                    t.state.meta.reactions.heart++
                })
            }
        },
        {
            key: "unlike",
            value: function() {
                var t = this;
                if (!this.accessToken) return u.
            default.reject();
                var e = this.state,
                n = e.user,
                r = e.reactions,
                o = r.findIndex(function(t) {
                    return t.user.login === n.login
                });
                return b.http.delete("/reactions/" + r[o].id).then(function() {
                    r.splice(o, 1),
                    t.state.meta.reactions.heart--
                })
            }
        },
        {
            key: "likeAComment",
            value: function(t) {
                var e = this;
                if (!this.accessToken) return alert("Login to Like"),
                u.
            default.reject();
                var n = this.owner,
                r = this.repo,
                o = this.state.comments.find(function(e) {
                    return e.id === t
                });
                return b.http.post("/repos/" + n + "/" + r + "/issues/comments/" + t + "/reactions", {
                    content: "heart"
                }).then(function(n) {
                    e.state.commentReactions[t].push(n),
                    o.reactions.heart++
                })
            }
        },
        {
            key: "unlikeAComment",
            value: function(t) {
                if (!this.accessToken) return u.
            default.reject();
                var e = this.state.commentReactions[t],
                n = this.state.comments.find(function(e) {
                    return e.id === t
                }),
                r = this.state.user,
                o = e.findIndex(function(t) {
                    return t.user.login === r.login
                });
                return b.http.delete("/reactions/" + e[o].id).then(function() {
                    e.splice(o, 1),
                    n.reactions.heart--
                })
            }
        }]),
        t
    } ();
    t.exports = x
},
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.close = '<svg class="gitment-close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"/><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"/></svg>',
    e.github = '<svg class="gitment-github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>',
    e.heart = '<svg class="gitment-heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>',
    e.spinner = '<svg class="gitment-spinner-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>'
},
function(t, e, n) {
    t.exports = {
    default:
        n(53),
        __esModule: !0
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(54),
        __esModule: !0
    }
},
function(t, e, n) {
    t.exports = {
    default:
        n(57),
        __esModule: !0
    }
},
function(t, e, n) {
    n(26),
    n(25),
    t.exports = n(87)
},
function(t, e, n) {
    n(26),
    n(25),
    t.exports = n(88)
},
function(t, e, n) {
    var r = n(0),
    o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    t.exports = function(t) {
        return o.stringify.apply(o, arguments)
    }
},
function(t, e, n) {
    n(90),
    t.exports = n(0).Object.assign
},
function(t, e, n) {
    n(91);
    var r = n(0).Object;
    t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
    }
},
function(t, e, n) {
    n(92),
    t.exports = n(0).Object.keys
},
function(t, e, n) {
    n(93),
    n(25),
    n(26),
    n(94),
    t.exports = n(0).Promise
},
function(t, e) {
    t.exports = function() {}
},
function(t, e) {
    t.exports = function(t, e, n, r) {
        if (! (t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
},
function(t, e, n) {
    var r = n(23),
    o = n(39),
    i = n(85);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, u = r(e),
            c = o(u.length),
            l = i(a, c);
            if (t && n != n) {
                for (; c > l;) if ((s = u[l++]) != s) return ! 0
            } else for (; c > l; l++) if ((t || l in u) && u[l] === n) return t || l || 0;
            return ! t && -1
        }
    }
},
function(t, e, n) {
    var r = n(10),
    o = n(67),
    i = n(66),
    a = n(3),
    s = n(39),
    u = n(41),
    c = {},
    l = {},
    e = t.exports = function(t, e, n, f, p) {
        var d, h, v, m, g = p ?
        function() {
            return t
        }: u(t),
        y = r(n, f, e ? 2 : 1),
        b = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (i(g)) {
            for (d = s(t.length); d > b; b++) if ((m = e ? y(a(h = t[b])[0], h[1]) : y(t[b])) === c || m === l) return m
        } else for (v = g.call(t); ! (h = v.next()).done;) if ((m = o(v, y, h.value, e)) === c || m === l) return m
    };
    e.BREAK = c,
    e.RETURN = l
},
function(t, e, n) {
    t.exports = !n(4) && !n(11)(function() {
        return 7 != Object.defineProperty(n(18)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
},
function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
        case 0:
            return r ? t() : t.call(n);
        case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
        case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
        case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
        case 4:
            return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
},
function(t, e, n) {
    var r = n(6),
    o = n(1)("iterator"),
    i = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t)
    }
},
function(t, e, n) {
    var r = n(3);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch(e) {
            var i = t.
            return;
            throw void 0 !== i && r(i.call(t)),
            e
        }
    }
},
function(t, e, n) {
    "use strict";
    var r = n(73),
    o = n(36),
    i = n(20),
    a = {};
    n(5)(a, n(1)("iterator"),
    function() {
        return this
    }),
    t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: o(1, n)
        }),
        i(t, e + " Iterator")
    }
},
function(t, e, n) {
    var r = n(1)("iterator"),
    o = !1;
    try {
        var i = [7][r]();
        i.
        return = function() {
            o = !0
        },
        Array.from(i,
        function() {
            throw 2
        })
    } catch(t) {}
    t.exports = function(t, e) {
        if (!e && !o) return ! 1;
        var n = !1;
        try {
            var i = [7],
            a = i[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            },
            i[r] = function() {
                return a
            },
            t(i)
        } catch(t) {}
        return n
    }
},
function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
},
function(t, e, n) {
    var r = n(2),
    o = n(38).set,
    i = r.MutationObserver || r.WebKitMutationObserver,
    a = r.process,
    s = r.Promise,
    u = "process" == n(9)(a);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, o;
            for (u && (r = a.domain) && r.exit(); t;) {
                o = t.fn,
                t = t.next;
                try {
                    o()
                } catch(r) {
                    throw t ? n() : e = void 0,
                    r
                }
            }
            e = void 0,
            r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(c)
        };
        else if (i) {
            var l = !0,
            f = document.createTextNode("");
            new i(c).observe(f, {
                characterData: !0
            }),
            n = function() {
                f.data = l = !l
            }
        } else if (s && s.resolve) {
            var p = s.resolve();
            n = function() {
                p.then(c)
            }
        } else n = function() {
            o.call(r, c)
        };
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            e && (e.next = o),
            t || (t = o, n()),
            e = o
        }
    }
},
function(t, e, n) {
    "use strict";
    var r = n(19),
    o = n(75),
    i = n(78),
    a = n(24),
    s = n(33),
    u = Object.assign;
    t.exports = !u || n(11)(function() {
        var t = {},
        e = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
        return t[n] = 7,
        r.split("").forEach(function(t) {
            e[t] = t
        }),
        7 != u({},
        t)[n] || Object.keys(u({},
        e)).join("") != r
    }) ?
    function(t, e) {
        for (var n = a(t), u = arguments.length, c = 1, l = o.f, f = i.f; u > c;) for (var p, d = s(arguments[c++]), h = l ? r(d).concat(l(d)) : r(d), v = h.length, m = 0; v > m;) f.call(d, p = h[m++]) && (n[p] = d[p]);
        return n
    }: u
},
function(t, e, n) {
    var r = n(3),
    o = n(74),
    i = n(31),
    a = n(21)("IE_PROTO"),
    s = function() {},
    u = function() {
        var t, e = n(18)("iframe"),
        r = i.length;
        for (e.style.display = "none", n(32).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[i[r]];
        return u()
    };
    t.exports = Object.create ||
    function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(),
        void 0 === e ? n: o(n, e)
    }
},
function(t, e, n) {
    var r = n(8),
    o = n(3),
    i = n(19);
    t.exports = n(4) ? Object.defineProperties: function(t, e) {
        o(t);
        for (var n, a = i(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
},
function(t, e) {
    e.f = Object.getOwnPropertySymbols
},
function(t, e, n) {
    var r = n(12),
    o = n(24),
    i = n(21)("IE_PROTO"),
    a = Object.prototype;
    t.exports = Object.getPrototypeOf ||
    function(t) {
        return t = o(t),
        r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? a: null
    }
},
function(t, e, n) {
    var r = n(12),
    o = n(23),
    i = n(62)(!1),
    a = n(21)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
        u = 0,
        c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~i(c, n) || c.push(n));
        return c
    }
},
function(t, e) {
    e.f = {}.propertyIsEnumerable
},
function(t, e, n) {
    var r = n(7),
    o = n(0),
    i = n(11);
    t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
        a = {};
        a[t] = e(n),
        r(r.S + r.F * i(function() {
            n(1)
        }), "Object", a)
    }
},
function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e, n) {
        for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
        return t
    }
},
function(t, e, n) {
    t.exports = n(5)
},
function(t, e, n) {
    "use strict";
    var r = n(2),
    o = n(0),
    i = n(8),
    a = n(4),
    s = n(1)("species");
    t.exports = function(t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        a && e && !e[s] && i.f(e, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
},
function(t, e, n) {
    var r = n(3),
    o = n(15),
    i = n(1)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || void 0 == (n = r(a)[i]) ? e: o(n)
    }
},
function(t, e, n) {
    var r = n(22),
    o = n(17);
    t.exports = function(t) {
        return function(e, n) {
            var i, a, s = String(o(e)),
            u = r(n),
            c = s.length;
            return u < 0 || u >= c ? t ? "": void 0 : (i = s.charCodeAt(u), i < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i: t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536)
        }
    }
},
function(t, e, n) {
    var r = n(22),
    o = Math.max,
    i = Math.min;
    t.exports = function(t, e) {
        return t = r(t),
        t < 0 ? o(t + e, 0) : i(t, e)
    }
},
function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
},
function(t, e, n) {
    var r = n(3),
    o = n(41);
    t.exports = n(0).getIterator = function(t) {
        var e = o(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return r(e.call(t))
    }
},
function(t, e, n) {
    var r = n(16),
    o = n(1)("iterator"),
    i = n(6);
    t.exports = n(0).isIterable = function(t) {
        var e = Object(t);
        return void 0 !== e[o] || "@@iterator" in e || i.hasOwnProperty(r(e))
    }
},
function(t, e, n) {
    "use strict";
    var r = n(60),
    o = n(70),
    i = n(6),
    a = n(23);
    t.exports = n(34)(Array, "Array",
    function(t, e) {
        this._t = a(t),
        this._i = 0,
        this._k = e
    },
    function() {
        var t = this._t,
        e = this._k,
        n = this._i++;
        return ! t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    },
    "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
},
function(t, e, n) {
    var r = n(7);
    r(r.S + r.F, "Object", {
        assign: n(72)
    })
},
function(t, e, n) {
    var r = n(7);
    r(r.S + r.F * !n(4), "Object", {
        defineProperty: n(8).f
    })
},
function(t, e, n) {
    var r = n(24),
    o = n(19);
    n(79)("keys",
    function() {
        return function(t) {
            return o(r(t))
        }
    })
},
function(t, e) {},
function(t, e, n) {
    "use strict";
    var r, o, i, a = n(35),
    s = n(2),
    u = n(10),
    c = n(16),
    l = n(7),
    f = n(13),
    p = n(15),
    d = n(61),
    h = n(63),
    v = n(83),
    m = n(38).set,
    g = n(71)(),
    y = s.TypeError,
    b = s.process,
    _ = s.Promise,
    b = s.process,
    w = "process" == c(b),
    x = function() {},
    O = !!
    function() {
        try {
            var t = _.resolve(1),
            e = (t.constructor = {})[n(1)("species")] = function(t) {
                t(x, x)
            };
            return (w || "function" == typeof PromiseRejectionEvent) && t.then(x) instanceof e
        } catch(t) {}
    } (),
    S = function(t, e) {
        return t === e || t === _ && e === i
    },
    k = function(t) {
        var e;
        return ! (!f(t) || "function" != typeof(e = t.then)) && e
    },
    A = function(t) {
        return S(_, t) ? new E(t) : new o(t)
    },
    E = o = function(t) {
        var e, n;
        this.promise = new t(function(t, r) {
            if (void 0 !== e || void 0 !== n) throw y("Bad Promise constructor");
            e = t,
            n = r
        }),
        this.resolve = p(e),
        this.reject = p(n)
    },
    j = function(t) {
        try {
            t()
        } catch(t) {
            return {
                error: t
            }
        }
    },
    T = function(t, e) {
        if (!t._n) {
            t._n = !0;
            var n = t._c;
            g(function() {
                for (var r = t._v,
                o = 1 == t._s,
                i = 0; n.length > i;) !
                function(e) {
                    var n, i, a = o ? e.ok: e.fail,
                    s = e.resolve,
                    u = e.reject,
                    c = e.domain;
                    try {
                        a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? n = r: (c && c.enter(), n = a(r), c && c.exit()), n === e.promise ? u(y("Promise-chain cycle")) : (i = k(n)) ? i.call(n, s, u) : s(n)) : u(r)
                    } catch(t) {
                        u(t)
                    }
                } (n[i++]);
                t._c = [],
                t._n = !1,
                e && !t._h && I(t)
            })
        }
    },
    I = function(t) {
        m.call(s,
        function() {
            var e, n, r, o = t._v;
            if (C(t) && (e = j(function() {
                w ? b.emit("unhandledRejection", o, t) : (n = s.onunhandledrejection) ? n({
                    promise: t,
                    reason: o
                }) : (r = s.console) && r.error && r.error("Unhandled promise rejection", o)
            }), t._h = w || C(t) ? 2 : 1), t._a = void 0, e) throw e.error
        })
    },
    C = function(t) {
        if (1 == t._h) return ! 1;
        for (var e, n = t._a || t._c,
        r = 0; n.length > r;) if (e = n[r++], e.fail || !C(e.promise)) return ! 1;
        return ! 0
    },
    L = function(t) {
        m.call(s,
        function() {
            var e;
            w ? b.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                promise: t,
                reason: t._v
            })
        })
    },
    M = function(t) {
        var e = this;
        e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), T(e, !0))
    },
    P = function(t) {
        var e, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === t) throw y("Promise can't be resolved itself"); (e = k(t)) ? g(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        e.call(t, u(P, r, 1), u(M, r, 1))
                    } catch(t) {
                        M.call(r, t)
                    }
                }) : (n._v = t, n._s = 1, T(n, !1))
            } catch(t) {
                M.call({
                    _w: n,
                    _d: !1
                },
                t)
            }
        }
    };
    O || (_ = function(t) {
        d(this, _, "Promise", "_h"),
        p(t),
        r.call(this);
        try {
            t(u(P, this, 1), u(M, this, 1))
        } catch(t) {
            M.call(this, t)
        }
    },
    r = function(t) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    },
    r.prototype = n(80)(_.prototype, {
        then: function(t, e) {
            var n = A(v(this, _));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = w ? b.domain: void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && T(this, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), E = function() {
        var t = new r;
        this.promise = t,
        this.resolve = u(P, t, 1),
        this.reject = u(M, t, 1)
    }),
    l(l.G + l.W + l.F * !O, {
        Promise: _
    }),
    n(20)(_, "Promise"),
    n(82)("Promise"),
    i = n(0).Promise,
    l(l.S + l.F * !O, "Promise", {
        reject: function(t) {
            var e = A(this);
            return (0, e.reject)(t),
            e.promise
        }
    }),
    l(l.S + l.F * (a || !O), "Promise", {
        resolve: function(t) {
            if (t instanceof _ && S(t.constructor, this)) return t;
            var e = A(this);
            return (0, e.resolve)(t),
            e.promise
        }
    }),
    l(l.S + l.F * !(O && n(69)(function(t) {
        _.all(t).
        catch(x)
    })), "Promise", {
        all: function(t) {
            var e = this,
            n = A(e),
            r = n.resolve,
            o = n.reject,
            i = j(function() {
                var n = [],
                i = 0,
                a = 1;
                h(t, !1,
                function(t) {
                    var s = i++,
                    u = !1;
                    n.push(void 0),
                    a++,
                    e.resolve(t).then(function(t) {
                        u || (u = !0, n[s] = t, --a || r(n))
                    },
                    o)
                }),
                --a || r(n)
            });
            return i && o(i.error),
            n.promise
        },
        race: function(t) {
            var e = this,
            n = A(e),
            r = n.reject,
            o = j(function() {
                h(t, !1,
                function(t) {
                    e.resolve(t).then(n.resolve, r)
                })
            });
            return o && r(o.error),
            n.promise
        }
    })
},
function(t, e) {
    var n;
    n = function() {
        return this
    } ();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch(t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}]);
//# sourceMappingURL=gitment.browser.min.js.map
