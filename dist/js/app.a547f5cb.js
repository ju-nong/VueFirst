(function () {
    "use strict";
    var t = {
            1210: function (t, e, n) {
                var o = n(9242),
                    r = n(3396);
                function i(t, e, n, o, i, l) {
                    const c = (0, r.up)("HelloWorld");
                    return (
                        (0, r.wg)(),
                        (0, r.j4)(c, { msg: "Welcome to Your Vue.js App" })
                    );
                }
                var l = n(7139);
                const c = { class: "wrap" },
                    u = ["onClick"],
                    a = ["onClick"],
                    s = ["onClick"];
                function p(t, e, n, i, p, f) {
                    const d = (0, r.up)("Header"),
                        v = (0, r.up)("Footer");
                    return (
                        (0, r.wg)(),
                        (0, r.iD)(
                            r.HY,
                            null,
                            [
                                (0, r.Wm)(d),
                                (0, r._)("div", c, [
                                    (0, r._)("nav", null, [
                                        (0, r.wy)(
                                            (0, r._)(
                                                "input",
                                                {
                                                    type: "text",
                                                    placeholder:
                                                        "주제를 입력해주세요",
                                                    ref: "lblTopic",
                                                    "onUpdate:modelValue":
                                                        e[0] ||
                                                        (e[0] = (t) =>
                                                            (i.state.txtTopic =
                                                                t)),
                                                },
                                                null,
                                                512
                                            ),
                                            [[o.nr, i.state.txtTopic]]
                                        ),
                                        (0, r._)(
                                            "button",
                                            {
                                                onClick:
                                                    e[1] ||
                                                    (e[1] = (t) =>
                                                        i.addTopic()),
                                            },
                                            "추가"
                                        ),
                                    ]),
                                    (0, r._)("ul", null, [
                                        ((0, r.wg)(!0),
                                        (0, r.iD)(
                                            r.HY,
                                            null,
                                            (0, r.Ko)(
                                                i.state.topicList,
                                                (t, e) => (
                                                    (0, r.wg)(),
                                                    (0, r.iD)(
                                                        "li",
                                                        { key: e },
                                                        [
                                                            (0, r._)(
                                                                "h3",
                                                                null,
                                                                (0, l.zw)(
                                                                    t.label
                                                                ),
                                                                1
                                                            ),
                                                            (0, r._)(
                                                                "button",
                                                                {
                                                                    class: "removeBtn",
                                                                    onClick: (
                                                                        t
                                                                    ) =>
                                                                        i.removeTopic(
                                                                            e
                                                                        ),
                                                                },
                                                                " X ",
                                                                8,
                                                                u
                                                            ),
                                                            (0, r._)(
                                                                "input",
                                                                {
                                                                    type: "text",
                                                                    ref_for: !0,
                                                                    ref: "lblItem",
                                                                    placeholder:
                                                                        "항목을 입력해주세요",
                                                                },
                                                                null,
                                                                512
                                                            ),
                                                            (0, r._)(
                                                                "button",
                                                                {
                                                                    onClick: (
                                                                        n
                                                                    ) =>
                                                                        i.addItem(
                                                                            t,
                                                                            e
                                                                        ),
                                                                },
                                                                "추가",
                                                                8,
                                                                a
                                                            ),
                                                            (0, r._)(
                                                                "ul",
                                                                null,
                                                                [
                                                                    ((0, r.wg)(
                                                                        !0
                                                                    ),
                                                                    (0, r.iD)(
                                                                        r.HY,
                                                                        null,
                                                                        (0,
                                                                        r.Ko)(
                                                                            t.list,
                                                                            (
                                                                                e,
                                                                                n
                                                                            ) => (
                                                                                (0,
                                                                                r.wg)(),
                                                                                (0,
                                                                                r.iD)(
                                                                                    "li",
                                                                                    {
                                                                                        key: n,
                                                                                        onClick:
                                                                                            (
                                                                                                e
                                                                                            ) =>
                                                                                                i.removeItem(
                                                                                                    t,
                                                                                                    n
                                                                                                ),
                                                                                    },
                                                                                    (0,
                                                                                    l.zw)(
                                                                                        e
                                                                                    ),
                                                                                    9,
                                                                                    s
                                                                                )
                                                                            )
                                                                        ),
                                                                        128
                                                                    )),
                                                                ]
                                                            ),
                                                        ]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                ]),
                                (0, r.Wm)(v),
                            ],
                            64
                        )
                    );
                }
                const f = { class: "basic" };
                function d(t, e, n, o, i, l) {
                    return (0, r.wg)(), (0, r.iD)("header", f, "Header");
                }
                var v = {},
                    b = n(89);
                const m = (0, b.Z)(v, [
                    ["render", d],
                    ["__scopeId", "data-v-ecd68854"],
                ]);
                var _ = m;
                const h = { class: "basic" };
                function w(t, e, n, o, i, l) {
                    return (0, r.wg)(), (0, r.iD)("footer", h, "Footer");
                }
                var g = {};
                const k = (0, b.Z)(g, [
                    ["render", w],
                    ["__scopeId", "data-v-43bd2ac1"],
                ]);
                var T = k,
                    y = n(4870),
                    x = {
                        components: { Header: _, Footer: T },
                        setup() {
                            const t = (0, y.iH)(),
                                e = (0, y.iH)(),
                                n = (0, y.qj)({
                                    txtTopic: "",
                                    topicList: [
                                        {
                                            label: "좋아하는 음식",
                                            list: ["치킨", "피자", "탕수육"],
                                        },
                                    ],
                                }),
                                o = () => {
                                    t.value.focus(),
                                        "" != n.txtTopic
                                            ? (n.topicList.push({
                                                  label: n.txtTopic,
                                                  list: [],
                                              }),
                                              (n.txtTopic = ""))
                                            : alert("주제를 입력해주세요");
                                },
                                r = (t) => {
                                    n.topicList.splice(t, 1);
                                },
                                i = (t, n) => {
                                    const o = e._value[n];
                                    o.focus();
                                    const r = o.value;
                                    "" != r
                                        ? (t["list"].push(r), (o.value = ""))
                                        : alert("항목을 입력해주세요");
                                },
                                l = (t, e) => {
                                    t["list"].splice(e, 1);
                                };
                            return {
                                lblTopic: t,
                                lblItem: e,
                                state: n,
                                addTopic: o,
                                removeTopic: r,
                                addItem: i,
                                removeItem: l,
                            };
                        },
                    };
                const O = (0, b.Z)(x, [
                    ["render", p],
                    ["__scopeId", "data-v-08c91396"],
                ]);
                var H = O,
                    j = { name: "App", components: { HelloWorld: H } };
                const C = (0, b.Z)(j, [["render", i]]);
                var I = C;
                (0, o.ri)(I).mount("#app");
            },
        },
        e = {};
    function n(o) {
        var r = e[o];
        if (void 0 !== r) return r.exports;
        var i = (e[o] = { exports: {} });
        return t[o](i, i.exports, n), i.exports;
    }
    (n.m = t),
        (function () {
            var t = [];
            n.O = function (e, o, r, i) {
                if (!o) {
                    var l = 1 / 0;
                    for (s = 0; s < t.length; s++) {
                        (o = t[s][0]), (r = t[s][1]), (i = t[s][2]);
                        for (var c = !0, u = 0; u < o.length; u++)
                            (!1 & i || l >= i) &&
                            Object.keys(n.O).every(function (t) {
                                return n.O[t](o[u]);
                            })
                                ? o.splice(u--, 1)
                                : ((c = !1), i < l && (l = i));
                        if (c) {
                            t.splice(s--, 1);
                            var a = r();
                            void 0 !== a && (e = a);
                        }
                    }
                    return e;
                }
                i = i || 0;
                for (var s = t.length; s > 0 && t[s - 1][2] > i; s--)
                    t[s] = t[s - 1];
                t[s] = [o, r, i];
            };
        })(),
        (function () {
            n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t["default"];
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, { a: e }), e;
            };
        })(),
        (function () {
            n.d = function (t, e) {
                for (var o in e)
                    n.o(e, o) &&
                        !n.o(t, o) &&
                        Object.defineProperty(t, o, {
                            enumerable: !0,
                            get: e[o],
                        });
            };
        })(),
        (function () {
            n.g = (function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (t) {
                    if ("object" === typeof window) return window;
                }
            })();
        })(),
        (function () {
            n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            };
        })(),
        (function () {
            var t = { 143: 0 };
            n.O.j = function (e) {
                return 0 === t[e];
            };
            var e = function (e, o) {
                    var r,
                        i,
                        l = o[0],
                        c = o[1],
                        u = o[2],
                        a = 0;
                    if (
                        l.some(function (e) {
                            return 0 !== t[e];
                        })
                    ) {
                        for (r in c) n.o(c, r) && (n.m[r] = c[r]);
                        if (u) var s = u(n);
                    }
                    for (e && e(o); a < l.length; a++)
                        (i = l[a]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
                    return n.O(s);
                },
                o = (self["webpackChunkdouble_list"] =
                    self["webpackChunkdouble_list"] || []);
            o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
        })();
    var o = n.O(void 0, [998], function () {
        return n(1210);
    });
    o = n.O(o);
})();
//# sourceMappingURL=app.a547f5cb.js.map
