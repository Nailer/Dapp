"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [9057], {
        5385: function(e, n, s) {
            s.d(n, {
                i: function() {
                    return l
                }
            });
            var t = s(1580),
                o = s(7983),
                i = s(5479),
                c = s.n(i),
                a = s(3435),
                r = s(7515);
            const l = async e => {
                    const n = (e ? e.closest(".js-login-wrapper") : c()(document)).find("#error, .js-login__error"),
                        s = await (0, o.s)();
                    if (s && await (0, t.St)().connect(), s && s.isConnected) {
                        let e = await fetch("/api/users/get_verify_number", {
                            method: "GET",
                            cache: "no-store"
                        }).then((e => e.json()));
                        if (e && e.verify_numb) {
                            let t = d(e.verify_numb);
                            try {
                                s.signMessage((new TextEncoder).encode(t), "utf8").then((async ({
                                    signature: e,
                                    publicKey: s
                                }) => {
                                    await u(Object.values(e), s, n)
                                }), (() => {}))
                            } catch (i) {}
                        } else(0, a.F8)({
                            message: i18n.t("notification.aut_verify_numb")
                        })
                    } else if (s && !s.isConnected) try {
                        await s.connect()
                    } catch (i) {} else if ("true" === c()("#js-config").attr("data-is-mobile")) {
                        if ((0, t.lb)() && (c()(".js-bbar__buy.is-opened, .js-bbar__sell.is-opened, .js-bbar.is-opened, .js-bbar__toggle.is-opened").removeClass("is-opened"), !c()(".js-modal--signup").hasClass("is-hidden"))) {
                            c()(".js-modal--signup .js-modal__close").click();
                            let e = await fetch("/api/users/init_phantom_connect", {
                                method: "GET",
                                cache: "no-store"
                            }).then((e => e.json()));
                            if (e && e.success && e.url) window.location = e.url;
                            else {
                                let n = e.error || i18n.t("notification.error");
                                (0, a.F8)({
                                    message: n
                                })
                            }
                        }
                    } else(0, a.F8)({
                        message: i18n.t("notification.no_provider")
                    })
                },
                d = e => i18n.t("verify_msg", {
                    number: e
                }),
                u = async (e, n, s) => {
                    if (n) {
                        const o = new r.PublicKey(n),
                            i = await fetch("/api/users/auth", {
                                method: "POST",
                                headers: {
                                    "x-csrf-token": (0, t.PE)(),
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    sig: e,
                                    signed_wallet_arr: Object.values(o.toBytes()),
                                    locale: i18n._locale
                                }),
                                credentials: "same-origin"
                            }).then((e => e.json()));
                        if (i && i.success) i.redirectTo ? window.location = i.redirectTo : window.location = (0, t.Xq)({
                            url: "/signup/welcome"
                        });
                        else {
                            let e = i18n.t("notification.error");
                            i.msg && (e = i.msg), s.html(e), (0, a.F8)({
                                message: e
                            })
                        }
                    } else(0, a.F8)({
                        message: i18n.t("notification.no_signer")
                    }), logger.log("smth wrong with signer ?")
                };
            c()(document).off("change", ".js-connect-terms").on("change", ".js-connect-terms", (function() {
                c()(this).is(":checked") ? c()(".js-connect-terms").prop("checked", !0) : c()(".js-connect-terms").removeAttr("checked")
            })), c()(document).off("click", ".js-login__btn").on("click", ".js-login__btn", (async function(e) {
                const n = c()(".js-connect-terms");
                if (n.length && !n.is(":checked")) return (0, a.F8)({
                    message: i18n.t("notification.accept_terms")
                }), void(void 0 !== c()(this).data("scrollToTop") && (0, t.s2)({
                    selector: "body"
                }));
                l(c()(this))
            })), c()(document).off("click", ".js-login-deeplink").on("click", ".js-login-deeplink", (async function(e) {
                const n = c()(".js-connect-terms");
                if (n.length && !n.is(":checked")) return (0, a.F8)({
                    message: i18n.t("notification.accept_terms")
                }), void(void 0 !== c()(this).data("scrollToTop") && (0, t.s2)({
                    selector: "body"
                }));
                let s = await fetch("/api/users/init_phantom_connect", {
                    method: "GET",
                    cache: "no-store"
                }).then((e => e.json()));
                if (s && s.success && s.url) window.location = s.url;
                else {
                    let e = s.error || i18n.t("notification.error");
                    (0, a.F8)({
                        message: e
                    })
                }
            })), window.solana || window.solflare || (c()(".js-signup__install").removeClass("u-d-none"), c()(".js-login__btn, .js-share__login").remove(), (0, t.lb)() ? c()(".js-login-deeplink").removeClass("u-d-none") : c()(".js-install-phantom").removeClass("u-d-none"))
        }
    },
    function(e) {
        e.O(0, [5479, 7934, 9935], (function() {
            return n = 5385, e(e.s = n);
            var n
        }));
        e.O()
    }
]);
//# sourceMappingURL=connect_wallet-d85202dd1ed132a2976b.js.map