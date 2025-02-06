(self.webpackChunkapp = self.webpackChunkapp || []).push([
            [9935], {
                7810: function(t, e, n) {
                    "use strict";
                    n.d(e, {
                        A: function() {
                            return u
                        }
                    });
                    var o = n(3320),
                        i = n(1956),
                        a = n(1971),
                        s = n(8073),
                        r = n(3608);
                    let c = {};
                    const l = {
                        logLevel: "localhost:3000" === window.location.host ? "debug" : "error",
                        protocol: "actioncable-v1-protobuf",
                        encoder: new a.a
                    };
                    class u {#
                        t;
                        constructor(t, e) {
                            const n = {
                                cable: void 0,
                                channelName: null,
                                debug: !1
                            };
                            void 0 === e && logger.error("ActionCableObserver switcher is not defined: ", this.config.channelId), this.#t = e, this.config = { ...n,
                                ...t
                            }, this.config.websocketUrl = this.config.websocketUrl || (0, s.b8)(this.config);
                            let a = this.config.channelName;
                            if (this.channel = {
                                    channel: a,
                                    id: this.config.channelId
                                }, this.observers = [], this.#t) {
                                if (this.config.cable) this.cable = this.config.cable;
                                else {
                                    if (!c[this.config.websocketUrl]) {
                                        this.logger("INIT CABLE: ", this.config.channelName);
                                        const t = r.A.get("ta_debug"),
                                            e = t ? i.Be : o.Be,
                                            n = t ? void 0 : l;
                                        c[this.config.websocketUrl] = e(this.config.websocketUrl, n)
                                    }
                                    this.cable = c[this.config.websocketUrl]
                                }
                                this.cable.subscriptions.create(this.channel, {
                                    connected: () => {
                                        this.logger("CONNECTED: ", this.config.channelName), this.config.onConnect && this.config.onConnect()
                                    },
                                    disconnected: () => {
                                        this.logger("DISCONNECTED: ", this.config.channelName)
                                    },
                                    received: t => {
                                        this.logger(`received ${this.config.channelName}`, t), this.broadcast(t)
                                    },
                                    rejected: () => {
                                        this.logger("REJECTED: ", this.config.channelName)
                                    }
                                })
                            } else this.logger(`${this.config.channelName} is disabled`)
                        }
                        logger(...t) {
                            this.config.debug && logger.log(...t)
                        }
                        subscribe(t) {
                            this.#t && this.observers.push(t)
                        }
                        unsubscribe(t) {
                            this.#t && (this.observers = this.observers.filter((e => e !== t)))
                        }
                        broadcast(t) {
                            this.#t && this.observers.forEach((e => e(t)))
                        }
                    }
                },
                6145: function(t, e, n) {
                    "use strict";
                    n.d(e, {
                        Dy: function() {
                            return v
                        },
                        R_: function() {
                            return k
                        },
                        Xx: function() {
                            return _
                        },
                        ew: function() {
                            return x
                        },
                        tf: function() {
                            return $
                        }
                    });
                    var o = n(7810),
                        i = n(1580),
                        a = n(8073),
                        s = n(3435),
                        r = n(5479),
                        c = n.n(r),
                        l = n(37),
                        u = n.n(l),
                        d = (n(7983), n(707)),
                        f = n(4330),
                        h = n.n(f);
                    let m = {};
                    window.finishedTasks = m;
                    let p = !1;
                    const g = t => {
                        if (!t.data) return;
                        const e = c()(".js-task-table");
                        if (!e.length) return;
                        const {
                            purchases: n = []
                        } = t.data;
                        n.forEach((t => {
                            if (!t.id || "auto" !== t.kind) return;
                            const n = e.find(`.js-task-table__row[data-id="${t.id}"]`),
                                o = c()((({
                                    symbol: t,
                                    address: e,
                                    status: n = "",
                                    amount: o,
                                    txHash: s,
                                    poolId: r,
                                    id: c
                                }) => {
                                    const l = "executing" === n ? "active" : n;
                                    return `\n    <div class="c-task-table__tr js-task-table__row" data-id="${c}">\n      <div class="c-task-table__td u-color-primary-ltr">\n        <a href="${r?(0,i.VV)(null,r):`${(0,a.o1)()}/account/${e}`}" target="_blank">\n          ${t||(0,i.Wr)(e)||""}\n        </a>\n      </div>\n\n      <div class="c-task-table__td u-d-flex u-align-content-center u-color-light-alt">\n        <span class="c-icon c-icon--base c-icon--net-symbol u-mr-xxs"></span>\n        ${o?(0,i.M2)(o,5):0}\n      </div>\n\n      <div class="c-task-table__td u-d-flex u-justify-content-between u-align-content-center" data-status="${l}">\n        ${l}\n        <div class="l-row l-row-gap--s u-align-content-center">\n          <div class="l-col-auto">\n            ${s?`\n                <a href="${(0,a.o1)()}/tx/${s}" target="_blank">\n                  <span class="c-icon c-icon--solscan c-task-table__icon"></span>\n                </a>\n              `:'<span class="c-icon c-icon--solscan is-disabled c-task-table__icon"></span>'}\n          </div>\n\n\n          <div class="l-col-auto">\n            <span class="c-icon c-icon--trash c-task-table__icon js-task-table__remove" data-id="${c}"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  `
                                })(t));
                            n.length && n.replaceWith(o)
                        }))
                    };
                    async function w(t = 3) {
                        let e, n;
                        const o = c()(".js-generated-balance").text();
                        if (t <= 0)[e, n] = await (0, i.MK)();
                        else {
                            (0, a.cq)() && ([e, n] = await (0, i.MK)())
                        }
                        t > 0 && e && o && parseFloat(o) == e ? setTimeout((function() {
                            w(t - 1)
                        }), 1500) : `${e}` && ((0, a.CI)({
                            showQuoteBalance: e
                        }), c()(".js-generated-balance").html((0, i.M2)(e || 0, 4)))
                    }
                    window.updateEthBalance = w;
                    const b = async t => {
                            const e = await fetch(`/api/lp/refresh_p_l?pool_id=${t}`, {
                                cache: "no-store"
                            }).then((t => t.json()));
                            return e && e.plObj && ((0, i.IZ)(e.plObj, null, !0), c()("#js-token-show-portfolio").removeClass("is-hidden")), !0
                        },
                        y = async t => {
                            if (!t || !t.id) return;
                            const e = m[t.id];
                            if (!0 === e) return;
                            "number" === typeof e ? (m[t.id] = !0, clearTimeout(e)) : m[t.id] = !0;
                            const n = `${t.pool_id}` == (0, a.Lx)(),
                                {
                                    status: o,
                                    txHash: r,
                                    symbol: l,
                                    amount: f,
                                    amountIn: h,
                                    amountOut: g,
                                    dir: b,
                                    privateNode: y,
                                    errorMsg: _,
                                    token_amount: v,
                                    token_decimals: $,
                                    id: x,
                                    generatedWallet: k,
                                    address: j
                                } = t,
                                E = document.querySelector(`.iziToast#flash-${x}`);
                            if (E && u().hide({
                                    transitionOut: "fadeOutUp"
                                }, E), "success" === o) {
                                let e = function({
                                    dir: t,
                                    symbol: e,
                                    amount: n,
                                    amountIn: o,
                                    amountOut: a,
                                    token_amount: s,
                                    generatedWallet: r
                                }) {
                                    let c = "";
                                    if (["sell", "buy"].includes(t) && r) {
                                        c = `${window._genWallets?.find((({generated_wallet:t})=>t===r))?.name||(0,i.Wr)(r)} - `
                                    }
                                    if ("sell" === t) {
                                        let t;
                                        return a && (t = (0, i.aI)(parseFloat((a / Math.pow(10, i.Iq)).toFixed(8)).toString())), t ? i18n.t("notification.success_sold_with_val", {
                                            amt: t,
                                            symbol: e,
                                            prefix: c
                                        }) : i18n.t("notification.success_sold_without_val", {
                                            symbol: e,
                                            prefix: c
                                        })
                                    }
                                    if ("buy" === t) {
                                        let t;
                                        return o ? t = (0, i.aI)(parseFloat((o / Math.pow(10, i.Iq)).toFixed(8)).toString()) : n && (t = (0, i.aI)(parseFloat(n.toFixed(8)).toString())), t ? i18n.t("notification.success_bought_with_val", {
                                            amt: t,
                                            symbol: e,
                                            prefix: c
                                        }) : i18n.t("notification.success_bought_without_val", {
                                            symbol: e,
                                            prefix: c
                                        })
                                    }
                                    if ("deposit" === t) return i18n.t("notification.success_deposit", {
                                        amount: n
                                    });
                                    if ("withdraw" === t) return i18n.t("notification.success_withdraw", {
                                        amount: n
                                    });
                                    if ("close_accs" === t) {
                                        const t = (0, i.aI)(parseFloat((a / Math.pow(10, i.Iq)).toFixed(8)).toString());
                                        return i18n.t("notification.success_close_accs", {
                                            amount: t
                                        })
                                    }
                                    return i18n.t("notification.success_transaction")
                                }({
                                    dir: b,
                                    symbol: l,
                                    amount: f,
                                    amountIn: h,
                                    amountOut: g,
                                    token_amount: v,
                                    generatedWallet: k
                                });
                                if ((0, s.ag)({
                                        id: x,
                                        timeout: 3e3,
                                        closeOnClick: !1,
                                        message: r ? `<a href="${(0,a.o1)()}/tx/${r}" target="_blank">${e}</a>` : e
                                    }), ["buy", "sell", "deposit", "withdraw", "close_accs"].indexOf(b) >= 0 && (document.hidden ? p = !0 : setTimeout((() => {
                                        try {
                                            w(3)
                                        } catch (t) {
                                            logger.log("Balance update failed", t)
                                        }
                                    }), 2e3)), n && ["buy", "sell"].indexOf(b) >= 0) {
                                    let e = parseInt((0, a.Oy)());
                                    if (e += 1, (0, a.CI)({
                                            showPurchasesCount: String(e)
                                        }), c()(document).trigger("datafeed:confirm", {
                                            type: "confirm",
                                            item: t
                                        }), c()(".js-tabs__content .js-sell-first-option").each((function() {
                                            const t = c()(this).closest(".js-tabs__content"),
                                                n = t.find(".js-wdd"),
                                                o = t.find(".js-sell-first-option"),
                                                a = n[0]._walletsDropdown.getSelectedAddresses(),
                                                {
                                                    investedEth: s
                                                } = (0, d.pw)(a);
                                            1 === e && s > 0 && a.length <= 1 ? o.attr("data-value", "initial").find(".js-price-form__btn__label").text("initial") : o.each((function() {
                                                const t = c()(this).attr("data-preset");
                                                if ((0, i.gD)(t)) return;
                                                const e = window.gasSettings.buy_sell_amts[`preset${t}`].sell[0];
                                                c()(this).attr("data-value", `${e}`).find(".js-price-form__btn__label").text(`${e}%`)
                                            }))
                                        })), (0, a.Lx)()) {
                                        const t = (0, d.ZH)();
                                        t && await t.fetchPL((0, a.Lx)(), k), await (0, i.VH)({
                                            tokenAddress: j,
                                            tokenDecimals: $,
                                            wallets: k,
                                            is_program_2022: (0, a.OW)()
                                        })
                                    }
                                }
                            } else if ("failed" === o) {
                                let t = function({
                                    dir: t,
                                    symbol: e,
                                    errorMsg: n,
                                    privateNode: o,
                                    amount: a,
                                    txHash: s,
                                    generatedWallet: r
                                }) {
                                    let c = "",
                                        l = "";
                                    if (["sell", "buy"].includes(t) && r) {
                                        l = `${window._genWallets?.find((({generated_wallet:t})=>t===r))?.name||(0,i.Wr)(r)} - `
                                    }
                                    let u = {};
                                    if ("deposit" === t) return {
                                        msgTxt: i18n.t("notification.deposit_failed", {
                                            amount: a
                                        }),
                                        data: u
                                    };
                                    if ("withdraw" === t) return {
                                        msgTxt: i18n.t("notification.withdraw_failed", {
                                            amount: a
                                        }),
                                        data: u
                                    };
                                    n && (n.indexOf("frozen") >= 0 ? c = " Account frozen by dev" : n.indexOf("insufficient") >= 0 ? c = " Insufficient fund" : (n.indexOf("slippage") >= 0 || n.indexOf("Slippage") >= 0) && (c = " Exceeds desired slippage limit"));
                                    if (e) return {
                                        msgTxt: i18n.t("notification.tr_fail", {
                                            symbol: e,
                                            reason: c,
                                            prefix: l
                                        }),
                                        data: u
                                    };
                                    if (n) return {
                                        msgTxt: `${l}${n}`,
                                        data: u
                                    };
                                    return {
                                        msgTxt: i18n.t("notification.error"),
                                        data: u
                                    }
                                }({
                                    dir: b,
                                    symbol: l,
                                    errorMsg: _,
                                    privateNode: y,
                                    amount: f,
                                    txHash: r,
                                    generatedWallet: k
                                });
                                console.log(t);
                                let e, {
                                    msgTxt: n,
                                    data: o
                                } = { ...t
                                };
                                o && o.insufficientGasDetails && o.insufficientGasDetails.tx_cost ? (e = "/en/wallets?tab=1", n = `<div class="u-lh-normal">\n                    <div class="u-mb-xxs" >${n}</div>\n\n                    <table class="u-m-0">\n                      <tr>\n                        <td>${i18n.t("notification.tx_val_with_gas")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.tx_cost} SOL</td>\n                      </tr>\n                      <tr>\n                        <td>${i18n.t("notification.wallet_balance")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.balance} SOL</td>\n                      </tr>\n                      <tr>\n                        <td>${i18n.t("notification.still_require")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.overshot} SOL</td>\n                      </tr>\n                    </table>\n\n                    <div class="u-mt-xxs"><b>${i18n.t("notification.deposit_more_eth")}.</b></div>\n                  </div>\n                  `) : !y && r && (e = `${(0,a.o1)()}/tx/${r}`), (0, s.F8)({
                                    id: x,
                                    timeout: 3e3,
                                    closeOnClick: !0,
                                    message: e ? `<a href="${e}" target="_blank">${n}</a>` : n
                                })
                            }
                            c()(document).trigger("purchase:receiveEvent", [{
                                data: t
                            }])
                        };
                    const _ = async (t, {
                            onFinished: e,
                            onFailed: n,
                            onSuccess: o
                        } = {}) => {
                            try {
                                if (!t) return;
                                async function a(t, i) {
                                    if (i > 2) return;
                                    const s = await fetch(`/api/users/recheck_st?id=${t}`, {
                                        method: "GET",
                                        cache: "no-store"
                                    }).then((t => t.json()));
                                    return s && s.task && ["success", "failed"].includes(s.task.status) && !0 !== m[s.task.id] ? (y(s.task), e && e(s.task), "success" === s.task.status && o && o(s.task), "failed" === s.task.status && n && n(s.task)) : m[t] = setTimeout((async function() {
                                        await a(t, i + 1)
                                    }), 5e3), s
                                }
                                m[t] = setTimeout((async function() {
                                    await a(t, 0)
                                }), 5e3)
                            } catch (i) {
                                console.error(i)
                            }
                        },
                        v = (t, {
                            timeoutMsg: e,
                            disableWatcher: n,
                            disableCountdown: o
                        } = {}) => {
                            if (t.ignored) return;
                            let a = t.ids;
                            a || (0, i.gD)(t.id) || (a = [t.id]);
                            let r = t.successWallets || {};
                            a.forEach((t => {
                                let a = r[t],
                                    c = "";
                                if (a) {
                                    c = `${window._genWallets?.find((({generated_wallet:t})=>t===a))?.name||(0,i.Wr)(a)} - `
                                }
                                o || (0, s.OA)({
                                    message: i18n.t("tr_executing", {
                                        prefix: c
                                    }),
                                    id: t,
                                    timeout: e || i.hj
                                }), n || _(t)
                            })), t.failedWallets && t.failedWallets.length > 0 && (0, i.Xe)(t.failedWallets)
                        },
                        $ = t => {
                            try {
                                const e = window._submitMap[t.requestId];
                                if (!e) return;
                                t.failedWallets ? .length && t.failedWallets.forEach((n => {
                                    (0, s._b)(e[n.wallet]), delete window._submitMap[t.requestId][n.wallet]
                                })), t.success || (Object.values(e).forEach((t => {
                                    (0, s._b)(t)
                                })), delete window._submitMap[t.requestId]), t.successWallets && Object.entries(t.successWallets).forEach((([t, n]) => {
                                    const o = e[n];
                                    o && (e[n] = t, c()(`.flash-${o}`).attr("id", `flash-${t}`))
                                }))
                            } catch (e) {
                                console.error(e)
                            }
                        },
                        x = (t, e) => {
                            try {
                                e.forEach((e => {
                                    const n = h()();
                                    window._submitMap[t][e] = n
                                }));
                                const n = Object.entries(window._submitMap[t]).reduce(((t, [e, n]) => ({ ...t,
                                    [n]: e
                                })), {});
                                v({
                                    ids: Object.keys(n),
                                    successWallets: n
                                }, {
                                    disableWatcher: !0
                                })
                            } catch (n) {
                                console.error(n)
                            }
                        };
                    window.TxSuccessCallback = v, window.watchTxProcess = _;
                    const k = t => (window._userChannel || (window._userChannel = window._userChannel || new o.A({
                        channelId: t,
                        channelName: "UsersChannel"
                    }, (0, a.gL)())), window._userChannel);
                    e.Ay = ({
                        id: t,
                        type: e
                    }) => {
                        if (window._userChannel) return window._userChannel;
                        const n = k(t);
                        return window._userChannel = n, n.subscribe(((t = {}) => {
                            if ((0, a.Lx)() && t.portfolioNew ? .data ? .poolId === (0, a.Lx)() && c()(document).trigger("portfolio:fetchPL", [{
                                    poolId: (0, a.Lx)()
                                }]), "dashboard" === e && g(t), "show" === e && (t => {
                                    if (!t.data) return;
                                    const {
                                        watch: e = []
                                    } = t.data, n = new Intl.NumberFormat("en-US", {
                                        style: "percent",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }), o = new Intl.NumberFormat("en-US", {
                                        style: "percent",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0
                                    });
                                    e.forEach((async t => {
                                        let e = t.poolId,
                                            a = t.fiveMChange,
                                            s = c()(`.js-watch-token[data-pool-id=${e}]`);
                                        if (s) {
                                            let e, r;
                                            if (isNaN(parseFloat(a))) e = "", a = "N/A";
                                            else if (0 == parseFloat(a)) e = "";
                                            else {
                                                let t = "";
                                                parseFloat(a) > 0 && (t = "+"), a = a > 1e3 ? o.format(a / 100) : n.format(a / 100), a = `${t}${a}`, e = parseFloat(a) > 0 ? "u-color-green" : "u-color-red"
                                            }
                                            r = isNaN(parseFloat(t.mktCap)) ? "N/A" : (0, i.gp)({
                                                numb: t.mktCap,
                                                fractionLength: 2,
                                                unit: "$"
                                            }), s.find(".js-mktcap-watch").text(r);
                                            let c = s.find("span.js-fivem-watch");
                                            c.removeClass("u-color-green u-color-red").addClass(e), c.text(a)
                                        }
                                    }))
                                })(t), t && t.refresh_holdings)(async t => {
                                if (!t.data) return;
                                const e = t.data || [],
                                    n = (0, a.Lx)();
                                if (n)
                                    for (let o = 0; o < e.length; o++) {
                                        const t = e[o];
                                        if (t && t.id && `${t.pool_id}` == n) {
                                            await b(n);
                                            break
                                        }
                                    }
                            })(t.refresh_holdings);
                            else if (t && t.portfolio_cleaning && window.location.pathname.indexOf("my_holdings") >= 0) c()(".js-cleaning-progress-warning").addClass("is-hidden");
                            else if ((async t => {
                                    if (!t.data) return;
                                    const {
                                        purchases: e = []
                                    } = t.data;
                                    for (let n = 0; n < e.length; n++) await y(e[n])
                                })(t), ((t = {}) => {
                                    const {
                                        genNotification: e
                                    } = t;
                                    if (!e) return;
                                    let {
                                        action: n,
                                        msg: o,
                                        variables: a
                                    } = e;
                                    const s = c()(".js-top-banner");
                                    if ("show" === n) {
                                        if (!(0, i.gD)(o)) {
                                            if (a)
                                                for (let [t, e] of Object.entries(a)) {
                                                    if ("timestamp" === t) {
                                                        let t = new Date(1e3 * e);
                                                        e = `${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`
                                                    }
                                                    o = o.replaceAll(`{${t}}`, e)
                                                }
                                            s.html(o)
                                        }
                                        s.removeClass("is-hidden")
                                    } else "hide" === n && s.addClass("is-hidden")
                                })(t), ((t = {}) => {
                                    const {
                                        alertNotif: e
                                    } = t;
                                    e && e.data && e.data.forEach((t => {
                                        let {
                                            content: e,
                                            timeout: n,
                                            url: o,
                                            icon_color: i,
                                            icon: a,
                                            img: r,
                                            id: c,
                                            handle: l
                                        } = t;
                                        (0, s.Th)({
                                            alertId: c,
                                            iconPosition: "session" === l ? "center" : "",
                                            message: e,
                                            link: o,
                                            icon: a,
                                            iconColor: i,
                                            img: r,
                                            timeout: n
                                        })
                                    }))
                                })(t), (t => {
                                    t.orders && t.orders.data && t.orders.data.forEach((t => {
                                        if (t.attributes && "executing" === t.attributes.status) {
                                            let e;
                                            switch (t.attributes.kind) {
                                                case "take_profit":
                                                    e = `${i18n.t("take_profit")} `;
                                                    break;
                                                case "stop_loss":
                                                    e = `${i18n.t("stop_loss")} `;
                                                    break;
                                                case "buy_dip":
                                                    e = `${i18n.t("buy_dip")} `;
                                                    break;
                                                default:
                                                    e = ""
                                            }(0, s.ag)({
                                                timeout: 3e3,
                                                closeOnClick: !1,
                                                message: i18n.t("notification.order_triggered", {
                                                    kind_name: e,
                                                    symbol: t.attributes.symbol
                                                })
                                            })
                                        }
                                    }))
                                })(t), "pincode" === e && window.location.href.indexOf("/mobile_login") >= 0 && t && t.data && t.data.pincode) {
                                const t = c()("#js-pin-code");
                                let e = t.attr("data-pin");
                                t.text(e)
                            }
                        })), window.document.onvisibilitychange = t => {
                            if (!document.hidden && p) {
                                p = !1;
                                try {
                                    w(3)
                                } catch (e) {
                                    logger.log("Balance update failed", e)
                                }
                            }
                        }, n
                    }
                },
                1580: function(t, e, n) {
                        "use strict";
                        n.d(e, {
                            AF: function() {
                                return kt
                            },
                            An: function() {
                                return P
                            },
                            Az: function() {
                                return h
                            },
                            D1: function() {
                                return X
                            },
                            Dk: function() {
                                return ft
                            },
                            E1: function() {
                                return Pt
                            },
                            EG: function() {
                                return k
                            },
                            Em: function() {
                                return Ct
                            },
                            Er: function() {
                                return j
                            },
                            Ex: function() {
                                return x
                            },
                            HT: function() {
                                return jt
                            },
                            IZ: function() {
                                return rt
                            },
                            I_: function() {
                                return p
                            },
                            Im: function() {
                                return it
                            },
                            Iq: function() {
                                return v
                            },
                            Kg: function() {
                                return R
                            },
                            LD: function() {
                                return ht
                            },
                            LG: function() {
                                return Ut
                            },
                            Le: function() {
                                return Dt
                            },
                            M2: function() {
                                return Z
                            },
                            MK: function() {
                                return xt
                            },
                            O0: function() {
                                return Tt
                            },
                            Ok: function() {
                                return Gt
                            },
                            PE: function() {
                                return M
                            },
                            Pu: function() {
                                return G
                            },
                            Q1: function() {
                                return D
                            },
                            Ro: function() {
                                return K
                            },
                            SH: function() {
                                return _
                            },
                            ST: function() {
                                return Nt
                            },
                            SW: function() {
                                return F
                            },
                            Sr: function() {
                                return b
                            },
                            St: function() {
                                return St
                            },
                            U9: function() {
                                return $
                            },
                            Uu: function() {
                                return bt
                            },
                            VH: function() {
                                return $t
                            },
                            VV: function() {
                                return nt
                            },
                            Vl: function() {
                                return m
                            },
                            Wr: function() {
                                return A
                            },
                            Xe: function() {
                                return _t
                            },
                            Xm: function() {
                                return st
                            },
                            Xq: function() {
                                return C
                            },
                            YQ: function() {
                                return z
                            },
                            ZH: function() {
                                return Lt
                            },
                            ZN: function() {
                                return S
                            },
                            aI: function() {
                                return H
                            },
                            aj: function() {
                                return It
                            },
                            dm: function() {
                                return W
                            },
                            fL: function() {
                                return y
                            },
                            fp: function() {
                                return et
                            },
                            gD: function() {
                                return Y
                            },
                            gp: function() {
                                return Q
                            },
                            hU: function() {
                                return Vt
                            },
                            hj: function() {
                                return g
                            },
                            kb: function() {
                                return wt
                            },
                            lW: function() {
                                return pt
                            },
                            lb: function() {
                                return T
                            },
                            m3: function() {
                                return V
                            },
                            m5: function() {
                                return w
                            },
                            mN: function() {
                                return qt
                            },
                            nG: function() {
                                return Wt
                            },
                            px: function() {
                                return vt
                            },
                            q2: function() {
                                return E
                            },
                            qE: function() {
                                return O
                            },
                            qW: function() {
                                return Et
                            },
                            qr: function() {
                                return U
                            },
                            rr: function() {
                                return I
                            },
                            s2: function() {
                                return lt
                            },
                            sA: function() {
                                return dt
                            },
                            sJ: function() {
                                return ct
                            },
                            sg: function() {
                                return ot
                            },
                            sv: function() {
                                return Ot
                            },
                            t2: function() {
                                return Mt
                            },
                            t_: function() {
                                return B
                            },
                            v1: function() {
                                return ut
                            },
                            vC: function() {
                                return Ft
                            },
                            wk: function() {
                                return q
                            },
                            xQ: function() {
                                return J
                            },
                            xq: function() {
                                return At
                            },
                            z9: function() {
                                return Ht
                            }
                        });
                        var o = n(5479),
                            i = n.n(o),
                            a = n(8951),
                            s = n(3435),
                            r = n(8073),
                            c = n(3617),
                            l = n(5353),
                            u = n(6145),
                            d = n(6680);
                        const {
                            PublicKey: f
                        } = n(7515), h = 999e15, m = .01, p = 3e4, g = 16e3, w = 168, b = 1e9, y = 5e-6, _ = {
                            raydium_amm: 0,
                            raydium_clmm: 1,
                            orca_whirlpool: 2,
                            meteora_amm: 3,
                            meteora_dlmm: 4,
                            raydium_cpmm: 5,
                            pump: 6,
                            moonshot: 7,
                            makenow: 9,
                            memelive: 10
                        }, v = 9, $ = t => new c.A(t).dividedBy(new c.A(1e9)).toNumber(), x = {
                            discover: 1,
                            trending: 2,
                            memescope: 3,
                            clipboard: 4
                        };
                        let k = new Intl.NumberFormat("en-US", {
                                minimumFractionDigits: 6,
                                maximumFractionDigits: 6
                            }),
                            j = new Intl.NumberFormat("en-US", {
                                minimumFractionDigits: 4,
                                maximumFractionDigits: 4
                            }),
                            E = new Intl.NumberFormat("en-US", {
                                style: "percent",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            });
                        const C = t => {
                                let {
                                    prefix: e,
                                    url: n
                                } = t;
                                return e && (n = (0, l.A)(e, n)), (0, l.A)("/", (0, r.JK)(), n)
                            },
                            T = () => window.innerWidth < 920,
                            F = (t, e, n = !1) => {
                                const o = n ? "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb" : "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                                if (!t || !e) return null;
                                try {
                                    return `${(0,d.Xt)(new f(e),new f(t),!1,new f(o))}`
                                } catch (i) {
                                    return console.error(i), null
                                }
                            },
                            O = (t, e, n = !1) => {
                                if (!t || !e) return null;
                                try {
                                    return t.map((t => F(t, e, n)))
                                } catch (o) {
                                    return console.error(o), null
                                }
                            },
                            I = () => /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            A = (t = "", e = 6, n = 4) => t && t.length > e + n ? `${t.slice(0,e)}...${t.slice(-n)}` : t,
                            M = () => document.head.querySelector("meta[name=csrf-token]") ? .content,
                            D = async () => {
                                if (window.newAlerts) {
                                    let t = await fetch("/api/alerts", {
                                        cache: "no-store"
                                    }).then((t => t.json()));
                                    t && t.data && t.data.forEach((t => {
                                        let e = t.attributes || t;
                                        (0, s.Th)({
                                            alertId: e.id,
                                            iconPosition: "session" === e.handle ? "center" : "",
                                            message: e.content,
                                            link: e.url,
                                            icon: e.icon,
                                            iconColor: e.iconColor,
                                            img: e.img,
                                            timeout: e.timeout
                                        })
                                    }))
                                }
                            };
                        async function S(t) {
                            return await xt()
                        }

                        function P() {
                            i()(".js-timestamp").each(((t, e) => {
                                let n = i()(e),
                                    o = parseInt(n.data("timestamp")),
                                    a = new Date(1e3 * o),
                                    s = String(a.getMinutes()).padStart(2, "0"),
                                    r = String(a.getHours()).padStart(2, "0"),
                                    c = String(a.getMonth() + 1).padStart(2, "0"),
                                    l = String(a.getDate()).padStart(2, "0");
                                n.text(`${a.getFullYear()}-${c}-${l}@${r}:${s}`)
                            }))
                        }
                        const L = (t, e) => {
                                let n;
                                return n = 12 * (e.getFullYear() - t.getFullYear()), n -= t.getMonth(), n += e.getMonth(), e.getDate() < t.getDate() && (n -= 1), n <= 0 ? 0 : n
                            },
                            N = ({
                                start: t,
                                end: e
                            } = {}) => {
                                const n = t instanceof Date ? t : new Date(t),
                                    o = e instanceof Date ? e : new Date(e),
                                    i = o.getTime() - n.getTime();
                                return {
                                    years: o.getFullYear() - n.getFullYear(),
                                    months: L(n, o),
                                    days: Math.floor(i / 864e5),
                                    hours: Math.floor(i / 36e5),
                                    minutes: Math.floor(i / 6e4),
                                    seconds: Math.floor(i / 1e3)
                                }
                            },
                            W = t => {
                                let e = N({
                                    start: t,
                                    end: (new Date).getTime()
                                });
                                0 === Math.floor(e.days / 365) && e.years >= 1 && (e.years -= 1);
                                const n = [
                                    ["y", e.years],
                                    ["mo", e.months],
                                    ["d", e.days],
                                    ["h", e.hours],
                                    ["m", e.minutes],
                                    ["s", e.seconds]
                                ];
                                let o = n.findLastIndex((([t, e]) => 0 === e));
                                if (5 === o) return i18n.t("time.just_now");
                                const i = n.slice(o + 1, 6);
                                let a = [];
                                return i.forEach((t => {
                                    if (!(a.length >= 2) && ("h" === t[0] && (t[1] = t[1] % 24), "m" === t[0] && (t[1] = t[1] % 60), "s" === t[0] && (t[1] = t[1] % 60), "d" === t[0] && (t[1] = t[1] - 365 * e.years - Math.floor(30.44 * e.months)), "mo" === t[0] && (t[1] = t[1] % 12), t[1] > 0)) {
                                        let e = i18n.t(`time.${t[0]}`);
                                        a.push(`${t[1]}${e}`)
                                    }
                                })), a.join(" ")
                            },
                            B = t => {
                                const e = (new Date).getTime() - t;
                                let n = Math.floor(e / 6e4),
                                    o = Math.floor(e / 36e5),
                                    i = Math.floor(e / 1e3);
                                const a = [
                                    ["d", Math.floor(e / 864e5)],
                                    ["h", o],
                                    ["m", n],
                                    ["s", i]
                                ];
                                let s = a.findLastIndex((([t, e]) => 0 === e));
                                if (3 === s) return i18n.t("time.just_now");
                                const r = a[s + 1];
                                n %= 60, o %= 24;
                                const c = i18n.t(`time.${r[0]}`);
                                return "d" === r[0] && o > 0 ? `${r[1]}${c} ${o}${i18n.t("time.h")}` : "h" === r[0] && n > 0 ? `${r[1]}${c} ${n}${i18n.t("time.m")}` : `${r[1]}${c}`
                            },
                            U = (t, e = (new Date).getTime(), {
                                disablePrefix: n,
                                double: o
                            } = {}) => {
                                const i = e > t || n ? "" : i18n.t("time.ago"),
                                    a = {
                                        seconds: `${i18n.t("time.s")}${i}`,
                                        minutes: `${i18n.t("time.m")}${i}`,
                                        hours: `${i18n.t("time.h")}${i}`,
                                        days: `${i18n.t("time.d")}${i}`,
                                        months: `${i18n.t("time.mth")}${i}`,
                                        years: `${i18n.t("time.y")}${i}`
                                    },
                                    s = N({
                                        start: t,
                                        end: e
                                    }),
                                    r = Object.entries(s);
                                let c = r.findLastIndex((([t, e]) => 0 === e));
                                if (-1 === c && (c = 0), c === r.length - 1) return i18n.t("time.just_now");
                                const l = r[c + 1];
                                let u = `${l[1]}${a[l[0]]}`;
                                if (r[c + 2] && o) {
                                    const t = r[c + 2];
                                    u += `${u}${t[1]}${a[t[0]]}`
                                }
                                return u
                            },
                            q = t => Intl.NumberFormat("en", {
                                notation: "compact"
                            }).format(t),
                            H = t => {
                                let e = "";
                                "-" == (t += "").charAt(0) && (t = t.substring(1), e = "-");
                                let n = t.split(/[e]/gi);
                                if (n.length < 2) return e + t;
                                let o = ".",
                                    i = n[0],
                                    a = +n[1],
                                    s = (i = i.replace(/^0+/, "")).replace(o, ""),
                                    r = i.split(o)[1] ? i.indexOf(o) + a : s.length + a,
                                    c = r - s.length,
                                    l = "" + BigInt(`${s}`);
                                return s = a >= 0 ? c >= 0 ? l + "0".repeat(c) : u() : r <= 0 ? "0." + "0".repeat(Math.abs(r)) + l : u(), c = s.split(o), (0 == c[0] && 0 == c[1] || 0 == +s && 0 == +l) && (s = 0), e + s;

                                function u() {
                                    return s.replace(new RegExp(`^(.{${r}})(.)`), `$1${o}$2`)
                                }
                            },
                            V = (t, {
                                fractionLength: e = 5
                            } = {}) => parseFloat(t) > 1e3 ? (t = parseFloat(t)) > h ? ">999Q" : `${q(t)}` : `${R(t,e)}`,
                            G = (t, e) => {
                                (0, r.gL)() && fetch("/api/users/update_show_page_conf", {
                                    method: "POST",
                                    headers: {
                                        "x-csrf-token": M(),
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        key: t,
                                        value: e
                                    }),
                                    credentials: "same-origin"
                                }).then((t => t.json()))
                            },
                            z = (t, e) => {
                                if (!(0, r.gL)() || !t && "myHoldings" !== e) return;
                                const n = {
                                    memescope: "/api/memescope/update_selected_wallets",
                                    myHoldings: "/api/my_holdings/update_selected_wallets",
                                    default: "/api/users/update_selected_wallets"
                                };
                                fetch(e && n[e] ? n[e] : n.default, {
                                    method: "POST",
                                    headers: {
                                        "x-csrf-token": M(),
                                        "content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        wallets: Array.isArray(t) ? t.join(",") : t
                                    }),
                                    credentials: "same-origin"
                                }).then((t => t.json()))
                            },
                            Q = ({
                                numb: t,
                                defaultVal: e,
                                unit: n,
                                fractionLength: o
                            }) => {
                                Y(o) && (o = 7), n || = "";
                                let i = "$" == n ? n : "",
                                    a = "$" != n ? n : "";
                                return e || = "N/A", Y(t) || isNaN(t) ? e : parseFloat(t) > 1e3 ? (t = parseFloat(t)) > h ? ">999Q" : `${i}${q(t)}${a}` : `${i}${R(t,o)}${a}`
                            },
                            J = ({
                                numb: t,
                                defaultVal: e,
                                unit: n,
                                fractionLength: o
                            }) => {
                                Y(o) && (o = 2), e || = "N/A", n || = "";
                                let i = "$" == n ? n : "",
                                    a = "$" != n ? n : "";
                                if (Y(t) || isNaN(t)) return e; {
                                    let e;
                                    switch (`${H(parseInt(t))}`.length) {
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                            e = tt(t, o);
                                            break;
                                        case 4:
                                        case 5:
                                        case 6:
                                            e = `${tt(t/1e3,o)}K`;
                                            break;
                                        case 7:
                                        case 8:
                                        case 9:
                                            e = `${tt(t/1e6,o)}M`;
                                            break;
                                        case 10:
                                        case 11:
                                        case 12:
                                            e = `${tt(t/1e9,o)}B`;
                                            break;
                                        case 13:
                                        case 14:
                                        case 15:
                                            e = `${tt(t/1e12,o)}T`;
                                            break;
                                        case 16:
                                        case 17:
                                        case 18:
                                            e = `${tt(t/1e15,o)}Q`;
                                            break;
                                        default:
                                            e = ">999Q"
                                    }
                                    return `${i}${e}${a}`
                                }
                            },
                            K = t => "number" === typeof t && t.toString().length < 13 ? 1e3 * t : t,
                            R = (t, e = 7) => {
                                const n = {
                                    0: "\u2080",
                                    1: "\u2081",
                                    2: "\u2082",
                                    3: "\u2083",
                                    4: "\u2084",
                                    5: "\u2085",
                                    6: "\u2086",
                                    7: "\u2087",
                                    8: "\u2088",
                                    9: "\u2089",
                                    10: "\u2081\u2080",
                                    11: "\u2081\u2081",
                                    12: "\u2081\u2082",
                                    13: "\u2081\u2083",
                                    14: "\u2081\u2084",
                                    15: "\u2081\u2085",
                                    16: "\u2081\u2086",
                                    17: "\u2081\u2087",
                                    18: "\u2081\u2088",
                                    19: "\u2081\u2089"
                                };
                                if (!t) return t;
                                let o, i;
                                if (t = "string" === typeof t ? parseFloat(t) : t, t = H(parseFloat(t.toFixed(18)).toString()), [o, i] = t.split("."), i && i.length > 2) {
                                    let t = "";
                                    return i.match(/([0-9])\1*/g).forEach((e => {
                                        let o = e.length;
                                        t = o > 2 ? t.concat(`${e[0]}${n[o]}`) : t.concat(e)
                                    })), i = t.slice(0, e), e > 0 ? `${o}.${i}` : `${o}`
                                }
                                return t
                            },
                            Y = t => null == t,
                            X = (t, e, {
                                formatter: n,
                                container: o,
                                triggerUpdate: a = !0
                            } = {}) => {
                                if (void 0 !== e) {
                                    (o || i()(document)).find(`[data-cable-val="${t}"]`).each((function() {
                                        let n = e;
                                        const {
                                            prefix: o,
                                            suffix: a
                                        } = i()(this).data();
                                        let s;
                                        s = ["mktCapVal"].indexOf(t) >= 0 ? J({
                                            numb: n,
                                            fractionLength: 2,
                                            unit: o || a
                                        }) : Q({
                                            numb: n,
                                            fractionLength: 6,
                                            unit: o || a
                                        }), i()(this).attr("data-value", e), i()(this).html(s)
                                    })), a && i()(document).trigger("cableValue:update", [{
                                        [t]: e
                                    }])
                                }
                            },
                            Z = (t, e = 6) => Y(t) ? t : parseFloat(parseFloat(t).toFixed(e)),
                            tt = (t, e = 6) => {
                                if (Y(t)) return t; {
                                    let n = Math.trunc(t * Math.pow(10, e)) / Math.pow(10, e);
                                    return parseFloat(n).toFixed(e)
                                }
                            },
                            et = (t, e) => {
                                const n = e || (0, r.Dr)();
                                return (0, l.A)(`https://photon${(0,r.YG)()?"-staging":""}${n&&"eth"!==n?`-${n}`:""}.tinyastro.io`, t || "")
                            },
                            nt = (t, e) => e ? `/${(0,r.JK)()}/lp/pool_redirect?id=${e}` : t ? `/${(0,r.JK)()}/lp/${t}?handle=${(0,r.ay)()}` : void 0;

                        function ot(t, e = 300) {
                            let n;
                            return (...o) => {
                                clearTimeout(n), n = setTimeout((() => {
                                    t.apply(this, o)
                                }), e)
                            }
                        }
                        const it = t => 0 === Object.keys(t).length,
                            at = t => null !== t && "object" === typeof t,
                            st = (t, {
                                removeFalsy: e,
                                keepZero: n,
                                removeEmptyArray: o
                            } = {}) => {
                                try {
                                    return Object.entries(t).reduce(((t, [i, a]) => at(a) && it(a) || e && !a && (!n || 0 !== a) || void 0 === a || null === a || o && Array.isArray(a) && 0 === a.length ? t : { ...t,
                                        [i]: a
                                    }), {})
                                } catch (i) {
                                    return logger.error(i), t
                                }
                            },
                            rt = (t, e, n = !0) => {
                                let o, a, s, r, c = i()("#js-portfolio-config"),
                                    l = i()("#js-token-show-portfolio"),
                                    u = !0,
                                    d = !1;
                                if (n && t && (parseFloat(t.invested_eth) > 0 || parseFloat(t.remaining) > 0)) {
                                    o = t.remaining_eth, a = t.pl, s = t.pl_eth;
                                    let e = t.sold_eth;
                                    r = t.invested_eth, c.attr("data-portfolio-invested-eth", r), c.attr("data-portfolio-sold-eth", e), c.attr("data-portfolio-remaining", t.remaining), l.find(".js-invested-eth").text(k.format(r)), d = !0, l.find(".js-sold-eth").text(k.format(e))
                                } else {
                                    r = parseFloat(c.attr("data-portfolio-invested-eth"));
                                    let t = parseFloat(c.attr("data-portfolio-remaining"));
                                    if (r > 0 || t > 0)
                                        if (t > 0) {
                                            o = parseFloat(e * t);
                                            let n = parseFloat(c.attr("data-portfolio-sold-eth"));
                                            r > 0 && (s = n + o - r, a = s / r * 100)
                                        } else u = !1;
                                    else u = !1
                                }
                                if (u) {
                                    void 0 !== o && (c.attr("data-portfolio-remaining-eth", o), d = !0), void 0 !== a && c.attr("data-portfolio-pl", a), void 0 !== s && c.attr("data-portfolio-pl-eth", s), l.find(".js-remaininig-eth").text(k.format(o));
                                    let t = l.find(".js-pl");
                                    if (void 0 !== a && (t.text(E.format(a / 100)), a >= 0 ? t.addClass("u-color-green").removeClass("u-color-red") : t.addClass("u-color-red").removeClass("u-color-green")), void 0 !== s) {
                                        let t = l.find(".js-pl-eth");
                                        parseFloat(s) >= 0 ? t.addClass("u-color-green").removeClass("u-color-red") : t.addClass("u-color-red").removeClass("u-color-green"), t.text(`(${parseFloat(s)>=0?"+":""}${j.format(s)})`)
                                    }
                                    d && i()(document).trigger("portfolio:update", [{
                                        remainingEth: o,
                                        investedEth: r,
                                        afterPurchase: n
                                    }])
                                }
                            },
                            ct = ({
                                invested: t = 0,
                                remaining: e = 0,
                                sold: n = 0
                            }) => {
                                const o = t > 0 ? n + e - t : 0,
                                    i = t > 0 ? o / t * 100 : null;
                                return {
                                    pl: {
                                        value: i,
                                        label: Y(i) ? "N/A" : `${i>=0?"+":""}${E.format(i/100)}`
                                    },
                                    plEth: {
                                        value: o,
                                        label: `${parseFloat(o)>=0?"+":""}${j.format(o||0)}`
                                    }
                                }
                            };
                        window.calulatePnL = ct;
                        const lt = ({
                                selector: t,
                                offset: e = 0
                            }) => {
                                const n = "string" === typeof t ? i()(t).first() : t;
                                n[0].getBoundingClientRect().top, window.pageYOffset;
                                i()("html, body").animate({
                                    scrollTop: n.offset().top + e
                                }, 700)
                            },
                            ut = {
                                theme: "astro2",
                                zIndex: 99999999,
                                allowHTML: !0,
                                onMount: t => {
                                    i()(t.reference).data("initDisabled") && t.disable()
                                }
                            },
                            dt = (t, e) => {
                                (t || i()(document)).find("[data-tippy-content]").each((function() {
                                    e && this._tippy ? this._tippy.destroy() : this._tippy || (0, a.Ay)(this, ut)
                                }))
                            },
                            ft = t => {
                                let e = i()(".js-top-banner");
                                if (e.length > 0 && "true" === e.attr("data-ismm")) {
                                    var n = document.createElement("input");
                                    document.body.appendChild(n), n.setAttribute("id", "copyTxtTmpField"), document.getElementById("copyTxtTmpField").value = t, n.select(), document.execCommand("copy"), document.body.removeChild(n), setTimeout((function() {
                                        window.dispatchEvent(new Event("copyManually"))
                                    }), 20)
                                } else navigator.clipboard && navigator.clipboard.writeText(t).then((function() {
                                    (0, s.ag)({
                                        message: i18n.t("notification.success_copy"),
                                        timeout: 1e3
                                    }), setTimeout((function() {
                                        window.dispatchEvent(new Event("copyManually"))
                                    }), 20)
                                }), (function(t) {
                                    (0, s.F8)({
                                        message: i18n.t("notification.error_clipboard"),
                                        timeout: 1e3
                                    })
                                }))
                            },
                            ht = () => {
                                try {
                                    navigator && navigator.permissions && !I() && (window.addEventListener("load", (async () => {
                                        mt()
                                    })), window.addEventListener("copyManually", (async () => {
                                        mt()
                                    })), window.addEventListener("copy", (async () => {
                                        mt()
                                    })), window.addEventListener("focus", (async () => {
                                        mt()
                                    })))
                                } catch (t) {}
                            },
                            mt = async () => {
                                navigator.permissions.query({
                                        name: "clipboard-read"
                                    }).then((async function(t) {
                                                if (t && t.state)
                                                    if ("granted" === t.state) {
                                                        let t;
                                                        try {
                                                            t = await navigator.clipboard.readText()
                                                        } catch (e) {
                                                            console.error(e)
                                                        }
                                                        const n = i()(".js-header__cb");
                                                        if (t && t.length >= 32 && t.length <= 44 && t.match(/^[0-9a-zA-Z]*$/) && t !== window.clipboardAddress) {
                                                            window.clipboardAddress = t;
                                                            let e = await fetch(`/cba?q=${t}`, {
                                                                cache: "no-store"
                                                            }).then((t => t.json()));
                                                            if (e && e.success && e.address) {
                                                                if (window.location && window.location.origin) {
                                                                    let t = e.symbol || "Symbol";
                                                                    const o = e.img_src;
                                                                    let i = `${window.location.origin}/${(0,r.JK)()}/lp/${e.address}`;
                                                                    const s = e.buy_data ? .amount || 0,
                                                                        c = e.buy_data ? .preset,
                                                                        l = e.buy_data ? .wallets || [];
                                                                    n.find(".js-header__cb__empty").toggleClass("is-hidden", !!o), n.find(".js-header__cb__img").toggleClass("is-hidden", !o).attr("src", o), n.find(".js-header__cb__link").attr("href", i), n.find(".js-header__cb__symbol").html(`$${t}`), n.find(".js-header__cb__wallets").html(l ? .length || 0), n.find(".js-header__cb__btn").attr("data-amount", s).attr("data-preset", c).attr("data-wallets", l ? .join(",") || "").attr("data-id", e.id), n.find(".js-header__cb__val").text(Z(l ? .length * e.buy_data ? .amount) || 0), n.removeClass("is-hidden");
                                                                    const u = n.find(".js-header__cb__security");
                                                                    if (u.length) {
                                                                        let t;
                                                                        const n = () => {
                                                                            const n = e.from_meme_dex,
                                                                                o = e.dex_i,
                                                                                i = Nt(n, "pump"),
                                                                                a = Nt(n, "moonshot"),
                                                                                s = Nt(n, "memelive"),
                                                                                r = !Y(n);
                                                                            let c;
                                                                            switch (o) {
                                                                                case 0:
                                                                                case 1:
                                                                                case 5:
                                                                                    c = "raydium";
                                                                                    break;
                                                                                case 3:
                                                                                case 4:
                                                                                    c = "meteora";
                                                                                    break;
                                                                                default:
                                                                                    c = ""
                                                                            }
                                                                            const l = r ? `\n                          <div class="u-d-inline-flex u-align-items-center u-ml-xxs">\n                            ${a?'<div class="c-icon c-icon--moonshot c-icon--12 p-show__moonshot"></div>':""}\n                            ${i?'<div class="c-pump c-pump--md"></div>':""}\n                            ${s?'<div class="c-memelive"></div>':""}\n\n                            <span class="c-icon c-icon--migrate c-icon--3xs u-mx-4xs"></span>\n\n                            <span class="c-icon c-icon--3xs c-icon--${c}"></span>\n                          </div>\n                        ` : "",
                                                                                u = {
                                                                                    dex: {
                                                                                        label: "Dex Name",
                                                                                        value: `<div class="u-d-flex u-align-items-center">\n                              ${Bt(e.dex_i)}\n\n                              ${l}\n                            </div>`
                                                                                    },
                                                                                    ma: {
                                                                                        label: i18n.t("mint_authority"),
                                                                                        value: Y(e.ma) ? "-" : e.ma ? i18n.t("enabled") : i18n.t("disabled"),
                                                                                        color: Y(e.ma) ? "grey" : e.ma ? "red" : "green"
                                                                                    },
                                                                                    fa: {
                                                                                        label: i18n.t("freeze_authority"),
                                                                                        value: Y(e.fa) ? "-" : e.fa ? i18n.t("enabled") : i18n.t("disabled"),
                                                                                        color: Y(e.fa) ? "grey" : e.fa ? "red" : "green"
                                                                                    },
                                                                                    lpb: {
                                                                                        label: i18n.t("lp_burned"),
                                                                                        value: Y(e.lpb) ? "-" : E.format(e.lpb / 100),
                                                                                        color: Y(e.lpb) ? "grey" : e.lpb < 50 ? "red" : "green"
                                                                                    },
                                                                                    ps: {
                                                                                        label: "Pooled SOL",
                                                                                        value: Y(e.ps) ? "-" : `\n                              ${Q({numb:parseFloat(e.ps),fractionLength:2})} ${Q({numb:parseFloat(e.ps)*window.solUsdPrice,fractionLength:2,unit:"$"})}\n                            `,
                                                                                        color: "light-lt"
                                                                                    },
                                                                                    tax: {
                                                                                        label: "Tax",
                                                                                        isHidden: void 0 === e.tax,
                                                                                        value: Y(e.tax) ? "-" : `${parseFloat(e.tax)}%`,
                                                                                        color: "light-lt"
                                                                                    }
                                                                                };
                                                                            return t = ![u.ma.color, u.fa.color, u.lpb.color].find((t => ["grey", "red"].includes(t))), `\n                          <div class="p-show__security__list p-show__security__list--lg">\n                            ${Object.values(u).filter((({isHidden:t})=>!t)).map((({label:t,value:e,color:n})=>`\
                                                                            n < div class = "l-row no-gutters u-justify-content-between p-show__security__row" > \n < div class = "l-col" > $ {
                                                                                t
                                                                            } < /div>\n                                  <div class="l-col-auto p-show__security__value ${n?`u-color-${n}`:""}">\n                                    ${"red"===n?'\n                                      <div class="c-icon c-icon--attention p-show__widget__issues__icon"></div > \n ':""}\n                                    ${e}\n                                  </div>\n                                </div>\n                              `)).join("")}\n                          </div>\n                        `};u[0]._tippy&&u[0]._tippy.destroy(),(0,a.Ay)(u[0],{...ut,plugins:[Tt],content:n}),u.toggleClass("u-color-red",!t).toggleClass("u-color-green",t)}}}else n.addClass("is-hidden")}else t!==window.clipboardAddress&&(n.addClass("is-hidden"),window.clipboardAddress=t)}else"prompt"===t.state&&setTimeout((async()=>{try{await navigator.clipboard.readText()}catch(t){}}),500)}))},pt=(t,e)=>{const n=function(t){let n=i()(this).attr(`data-${e}`),o=i()(".js-top-banner");if(o.length>0&&"true"===o.attr("data-ismm")){var a=document.createElement("input");document.body.appendChild(a),a.setAttribute("id","copyTxtTmpField"),document.getElementById("copyTxtTmpField").value=n,a.select(),document.execCommand("copy"),document.body.removeChild(a),setTimeout((function(){window.dispatchEvent(new Event("copyManually"))}),20)}else navigator.clipboard&&navigator.clipboard.writeText(n).then((function(){(0,s.ag)({message:i18n.t("notification.success_copy"),timeout:1e3}),setTimeout((function(){window.dispatchEvent(new Event("copyManually"))}),20)}),(function(t){var e=document.createElement("input");document.body.appendChild(e),e.setAttribute("id","copyTxtTmpField"),document.getElementById("copyTxtTmpField").value=n,e.select(),document.execCommand("copy"),document.body.removeChild(e)}))};"string"===typeof t?i()(document).on("click",t,n):t.click(n)};let gt={};const wt=(t,e,n)=>{if(t){let a=e&&gt[t]?(o=gt[t],i=e,at(o)?!o||Y(i)?o:Object.entries(o).reduce(((t,[e,n])=>{let a=!1;return a=Array.isArray(i)?i.includes(e):"function"===typeof i?i(e,n,o):e===i,a?{...t,[e]:n}:t}),{}):(console.error("Incorrect type: ",typeof o),null)):gt[t];return n&&!Y(a)?Object.values(a).reduce(((t,e)=>t+e),0):a}var o,i;return gt},bt=async({tokenAddress:t,tokenDecimals:e,wallets:n,total:o,forceFetch:i,is_program_2022:a}={})=>{try{if(!t)return;let s=n||window._genWallets?.map((({generated_wallet:t})=>t))||[],r=wt(t,s,o);return(i||Y(r)||s&&!((t,e)=>{try{if(!t||!e)return;let n=wt(t);return!!n&&(n=Object.keys(n),(Array.isArray(e)?e:[e]).reduce(((t,e)=>t&&n.includes(e)),!0))}catch(n){console.error(n)}})(t,s))&&(await $t({tokenAddress:t,tokenDecimals:e,wallets:s,is_program_2022:a}),r=wt(t,s,o)),r}catch(s){console.error(s)}};window._getTokenBalance=wt;const yt=(t,e)=>{if(!t)return;const n={...gt[t]||{},...e};gt=Object.freeze({...gt,[t]:n});const o={type:"token",data:{[t]:e},tokenAddress:t,allBalances:gt};"string"===typeof t&&(o.tokenAddress=t,o.balances=n),i()(document).trigger("wallets:retrieveBalances",[o])};function _t(t){const e=[];t.forEach((t=>{const n=t.wallet,o=window._genWallets?.find((({generated_wallet:t})=>t===n))?.name||A(n);e.push(`${o} - ${t.error}`)})),(0,s.F8)({message:e.join("</br>"),timeout:4e3,closeOnClick:!0})}async function vt(t){return(await fetch("/api/wallets/is_program_2022",{method:"POST",headers:{"x-csrf-token":M(),"content-type":"application/json"},body:JSON.stringify({address:t}),credentials:"same-origin"}).then((t=>t.json()))).success}async function $t({tokenAddress:t,tokenDecimals:e,wallets:n="",is_program_2022:o=!1}={}){let a={success:!1,totalBalance:0,balances:{}};if(t){i()(document).trigger("wallets:startRetrieveBalances");const r={token_address:t,token_decimals:e,wallets:Array.isArray(n)?n.join(","):n};if(""!==n){let e=O(Array.isArray(n)?n:[n],t,o);e&&(r.associated_accs=e.join(","))}a=await fetch("/api/token_balances",{method:"POST",headers:{"x-csrf-token":M(),"content-type":"application/json"},body:JSON.stringify(r),credentials:"same-origin"}).then((t=>t.json())),i()(document).trigger("wallets:endRetrieveBalances"),yt(t,a.balances),a&&a.success||(0,s.F8)({message:"Something went wrong, please reload the page and try again.",timeout:2e3})}else(0,s.F8)({message:"Something went wrong, please reload the page and try again.",timeout:2e3});return a}async function xt(){let t=await fetch("/sol_balance",{method:"GET",mode:"cors",cache:"no-store"}).then((t=>t.json()));return t&&t.success?(window.walletBalances=t.balances,i()(document).trigger("wallets:retrieveBalances",[{type:"quote",balances:t.balances}]),[Z(t.solBalance,7),t.balances]):[null,{}]}const kt=["0x000000000000000000000000000000000000dead","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000001","0x0000000000000000000000000000000000000002","0x0000000000000000000000000000000000000003","0x0000000000000000000000000000000000000004","0x0000000000000000000000000000000000000005","0x0000000000000000000000000000000000000006","0x0000000000000000000000000000000000000007","0x0000000000000000000000000000000000000008","0x0000000000000000000000000000000000000009","0x00000000000000000000045261d4ee77acdb3286","0x0123456789012345678901234567890123456789","0x1111111111111111111111111111111111111111","0x1234567890123456789012345678901234567890","0x2222222222222222222222222222222222222222","0x3333333333333333333333333333333333333333","0x4444444444444444444444444444444444444444","0x6666666666666666666666666666666666666666","0x8888888888888888888888888888888888888888","0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb","0xdead000000000000000042069420694206942069","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0xffffffffffffffffffffffffffffffffffffffff","0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],jt=(t,e)=>{try{const n=((t,e)=>{const n=e-t,o=6e4,i=36e5,a=24*i;return{days:Math.floor(n/a),hours:Math.floor(n%a/i),minutes:Math.floor(n%i/o),seconds:Math.floor(n%o/1e3)}})(K(t),K(e));let o=["seconds"];return n.days?o=["days","hours"]:n.hours?o=["hours","minutes"]:n.minutes&&(o=["minutes","seconds"]),o.map((t=>{let e=n[t];if(Y(e))return null;{let e;return e=["days","hours"].indexOf(t)>=0?n[t]:`${n[t]}`.padStart(2,"0"),`${e}${i18n.t(`time.${t[0]}`)}`}})).filter((t=>!!t)).join(" ")}catch(n){return console.error(n),""}},Et=(t,{onTick:e,onStart:n,onFinished:o})=>{if(!t)return;let i=!1;const a=6e4,s=36e5,r=24*s,c=new Date(t).getTime(),l=setInterval((()=>{const t=(new Date).getTime(),u=c-t,d={days:Math.floor(u/r),hours:Math.floor(u%r/s),minutes:Math.floor(u%s/a),seconds:Math.floor(u%a/1e3)};if(u<0)return o&&o(),void clearInterval(l);e&&e(d),n&&!i&&(n(),i=!0)}),1e3)},Ct=(t,e)=>{if(!e)return;let n=e.split(".");"attributes"!==n[0]||t.attributes||(n=n.slice(1));let o=t;return n.forEach((t=>{o=o[t]})),o},Tt={fn:t=>({onShow(){"function"===typeof t.props.content&&t.setContent(t.props.content(t.reference))}})},Ft=(t,e)=>{try{if(!t||"string"!==typeof t&&"number"!==typeof t)return t;let n=t.toString().replace(/,/g,".").replace(/[^0-9.]/g,""),o=n.split(".");return n=o.shift()+(o.length?".":"")+o.join(""),e?parseFloat(n):n}catch(n){return console.error(n),t}},Ot=t=>t&&"string"===typeof t?t.replace(/[^0-9]/g,""):t;function It(t){return t.replace(/[&<>"'
                                                                            `]/gi,"")}const At=(t,e,n=!0)=>{const o=i()(t);n&&(i()(".js-modal").addClass("is-hidden"),i()("html").removeClass("modal-open")),e&&o.length?(o.removeClass("is-hidden"),i()("html").addClass("modal-open")):(o.addClass("is-hidden"),i()("html").removeClass("modal-open"))},Mt=()=>{const t=i()(".js-modal--signup");t.length&&(i()(".js-modal").addClass("is-hidden"),t.removeClass("is-hidden"),i()("html").addClass("modal-open"))};function Dt(t,e,...n){return function(t,e){return(...n)=>(0,r.gL)()?t.apply(this,n):(Mt(),e?e.apply(this,n):void 0)}(t,e)(...n)}const St=()=>window.solana||window.solflare,Pt=async({amount:t,txHash:e,wallets:n,moonpay:o})=>{const i=await fetch("/api/transfer_funds/deposit_track",{method:"POST",headers:{"x-csrf-token":M(),"content-type":"application/json"},body:JSON.stringify({amount:t,tx_hash:e,wallets:n,moonpay:o}),credentials:"same-origin"}).then((t=>t.json()));o||(i&&i.success?(0,u.Dy)(i,{timeoutMsg:p}):(0,s.F8)({message:i18n.t("notification.tracking_failed"),timeout:2e3}))},Lt=t=>{try{return t?t.toString().split(" ").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" "):t}catch(e){return console.error(e),t}},Nt=(t,e)=>!Y(t)&&parseInt(t)===_[e],Wt=t=>{if(Y(t))return"";return Object.keys(_).find((e=>_[e]===parseInt(t)))||""},Bt=t=>{const e=Wt(t);return e?{raydium_amm:"Raydium V4",raydium_clmm:"Raydium CLMM",orca_whirlpool:"Orca",meteora_amm:"Meteora DYN",meteora_dlmm:"Meteora DLMM",raydium_cpmm:"Raydium CPMM",pump:"Pump.fun",moonshot:"Moonshot",makenow:"Makenow",memelive:"Memelive"}[e]:""},Ut=(t,e)=>!Y(t)&&at(t)&&e?Object.entries(t).reduce(((t,[n,o])=>({...t,[n]:e(o,n)})),{}):t,qt=(t,e)=>!Y(t)&&at(t)&&e?Object.entries(t).reduce(((t,[n,o])=>e(o,n)?{...t,[n]:o}:t),{}):t,Ht=t=>"string"===typeof t&&t.length>=32&&t.length<=44&&t.match(/^[0-9a-zA-Z]*$/),Vt=(t,e)=>{try{if(Y(t)||Y(e))return!1;const n=e.toString().toLowerCase();return!!t?.toString().toLowerCase()?.split(" ").find((t=>t.startsWith(n)))}catch(n){return console.error(n),!1}};function Gt(t,e){return t?Object.fromEntries(Object.entries(t).map((([t,n])=>{try{if(at(e[t])){const{parentKey:o,...i}=e[t];return[o||t,Gt(n,i)]}return[e[t]||t,n]}catch(o){return console.error(o),[t,n]}}))):t}},8073:function(t,e,n){"use strict";n.d(e,{AC:function(){return U},B2:function(){return E},CI:function(){return b},Dr:function(){return Dt},EP:function(){return ht},Ej:function(){return L},FP:function(){return J},Fj:function(){return A},GZ:function(){return ot},HG:function(){return F},Hc:function(){return O},Hm:function(){return M},Ij:function(){return I},J2:function(){return Q},JK:function(){return j},JU:function(){return C},Jc:function(){return H},Km:function(){return dt},LM:function(){return G},Lq:function(){return B},Lx:function(){return V},M8:function(){return u},OW:function(){return ft},O_:function(){return c},Ou:function(){return R},Oy:function(){return S},PL:function(){return nt},QI:function(){return $},Qf:function(){return Et},Rw:function(){return $t},Rx:function(){return gt},S_:function(){return Mt},Tc:function(){return yt},Vg:function(){return y},XI:function(){return W},Xx:function(){return kt},YG:function(){return l},Yz:function(){return tt},ay:function(){return x},b8:function(){return d},cG:function(){return vt},cq:function(){return _},d8:function(){return at},dI:function(){return xt},eU:function(){return pt},eX:function(){return ut},fh:function(){return Tt},gL:function(){return St},gY:function(){return Ft},hF:function(){return mt},iP:function(){return T},j8:function(){return N},jL:function(){return wt},jx:function(){return et},l2:function(){return Z},o1:function(){return v},o7:function(){return jt},p1:function(){return it},pw:function(){return p},r2:function(){return K},rI:function(){return D},ri:function(){return Ot},sE:function(){return bt},sG:function(){return P},sq:function(){return k},t9:function(){return It},tI:function(){return Ct},tw:function(){return z},wu:function(){return q},xV:function(){return At},xb:function(){return _t},z9:function(){return Y}});var o=n(5479),i=n.n(o),a=n(1580),s=n(7439),r=n.n(s);n(844);const c=()=>"photon-sol.tinyastro.io"===window.location.host,l=()=>"photon-staging-sol.tinyastro.io"===window.location.host,u=()=>"localhost:3000"===window.location.host,d=({channelName:t}={})=>"DiscoverLpChannel"===t?c()?"wss://ws-sol-disc-lb.tinyastro.io/cable":l()?"wss://ws-sol-disc-staging.tinyastro.io/cable":"ws://localhost:8080/cable":c()?"wss://ws-token-sol-lb.tinyastro.io/cable":l()?"wss://ws-token-staging-sol.tinyastro.io/cable":"ws://localhost:8080/cable";let f;const h=()=>{const t=window.taConfig||{};return Object.entries(t).reduce(((t,[e,n])=>{if(null===(o=n)||"object"!==typeof o||Array.isArray(n))return{...t,[r()(e)]:n};{const o=((t,e)=>{if(t)return Object.entries(t).reduce(((t,[n,o])=>({...t,[r()(e?`
                                                                            $ {
                                                                                e
                                                                            } - $ {
                                                                                n
                                                                            }
                                                                            `:n)]:o})),{})})(n,e);return{...t,...o}}var o}),{})},m=()=>{f||(window.taConfig?((u()||l())&&console.log("Copy from taConfig"),f=Object.freeze(h())):(console.log("config callbalck"),(()=>{const t=i()("#js-config").data(),e=i()("#js-page-config").data();f=Object.freeze({...t,...e})})()))},p=()=>{f||(window.taConfig?f=Object.freeze(h()):window.addEventListener("DOMContentLoaded",(function(){m()})))};p();const g=()=>(f||m(),f||{}),w=(t,e)=>()=>{const n=g()[t];return(0,a.gD)(n)?n:"float"===e?parseFloat(n):"int"===e?parseInt(n):"bool"===e?"true"===n||!0===n:n};window._getConfig=()=>({...g()});const b=t=>{(t=>{f=Object.freeze({...f,...t})})(t)},y="5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",_=(w("ppk"),w("genWallet")),v=w("explorerDomain"),$=w("wallet"),x=(w("tradeCtr"),w("uhandle")),k=w("activeUser"),j=(w("isMobile"),w("locale")),E=w("moonkey"),C=w("signupstep"),T=(w("memeLiveWallets"),w("showAmountIndex")),F=(w("showApprovedBalance"),w("showCirculatingSupply"),w("showCreatedAt")),O=(w("showFromPump"),w("showPumpPoolId")),I=w("showMoonshotPoolId"),A=w("showMoonshotPoolId"),M=w("showLastEventTimestamp"),D=w("showFirstEventTimestamp"),S=w("showPurchasesCount"),P=w("showDecimals"),L=w("showOwnerWallet"),N=w("showDeployerWallet"),W=w("showCaDeployerWallet"),B=w("showLpDeployerWallet"),U=w("showDefaultInterval"),q=w("showQuoteBalance"),H=w("showPoolFactoryName"),V=w("showPoolId"),G=w("showIsWatching"),z=w("showTokenAddress"),Q=w("showTokenBalance"),J=w("showTokenSymbol"),K=w("showTotalSupply"),R=w("showHumanTotalSupply"),Y=(w("showChartHeight"),w("showTokenApproved"),w("showPriceUsd")),X=w("showPriceQuote"),Z=(w("showIsInternalWallet"),w("showChartCurrency")),tt=w("showPoolAddress"),et=w("showMeteoraVaultAddress"),nt=w("showTxDateAge"),ot=w("showTxSort"),it=w("showDex"),at=w("showQuoteToken0","bool"),st=w("showReserve0"),rt=w("showReserve1"),ct=w("showReserve0Tr"),lt=w("showReserve1Tr"),ut=w("showChartType"),dt=w("showMinliq","float"),ft=w("showIs2022","bool"),ht=w("showJitoTips"),mt=w("showMigratedAddress"),pt=w("showIgnored"),gt=w("showOutliers"),wt=w("showOldPool"),bt=w("showTokenId"),yt=(w("showDefaultBribery","float"),w("showMyTrades")),_t=(w("showDevTrades"),w("showOtherTrades")),vt=w("showSnipers"),$t=w("showInsiders"),xt=w("showAvgPriceLine"),kt=w("showOrderLines"),jt=(w("showPreset"),w("showWallets")),Et=w("showAllowMigrationOrders"),Ct=w("showCurveType"),Tt=w("showMigratingTarget"),Ft=w("showTxsCount","int"),Ot=w("showCommitmentLevel"),It=()=>"processed"===Ot(),At=w("dashboardWelcomeTourPassed"),Mt=(w("discoverWelcomeTourPassed"),w("discoverIsInternalWallet"),()=>({poolId:V(),poolFactoryName:it(),tokenAddress:z(),tokenDecimals:P(),is_program_2022:ft(),poolData:{decimals:P(),priceQuote:X(),quoteToken0:at(),reserve0:st(),reserve1:rt(),reserve0Tr:ct()||st(),reserve1Tr:lt()||rt(),is_program_2022:ft()}})),Dt=w("blockchain"),St=(w("blockchainName"),w("blockchainScanUrl"),()=>!!k())},707:function(t,e,n){"use strict";n.d(e,{K8:function(){return d},ZH:function(){return h},pw:function(){return l}});var o=n(6434),i=n(1580),a=n(4330),s=n.n(a),r=n(5479),c=n.n(r);const l=t=>{const e=window._portfolioState.calculateAverage(t),{investedEth:n,remainingEth:o}=e;return{investedEth:parseFloat(n)||0,remainingEth:parseFloat(o)||0}},u=t=>(0,i.LG)(t,(t=>t&&!isNaN(Number(t))?parseFloat(t):t));class d{constructor(t={}){const{wallets:e=[],positions:n=[],type:a,poolId:r,onInit:l}=t;this.uid=s()(),this.config={...t};const u={wallets:(0,o.A)(e).reduce(((t,e)=>({...t,[e.generatedWallet]:e})),{})};this.state=u,this.setPositionsData(n);const d=this;c()(document).on("config:update",(function(t,{showPriceQuote:e}){const n={};"show"===a&&e&&(n.poolPriceQuote=e),(0,i.Im)(n)||d.updatePositions(n)})),c()(document).on("portfolio:fetchPL",(async function(t,{poolId:e,wallets:n}){await d.fetchPL(e,n)})),l&&l(this)}async fetchPL(t,e){const n=this;try{if(t!==n.config.poolId)return;let i=` / api / lp / refresh_p_l ? pool_id = $ {
                                                                                t
                                                                            }
                                                                            `;e&&(i+=` & wallet = $ {
                                                                                Array.isArray(e) ? e.join(",") : e
                                                                            }
                                                                            `);const a=await fetch(i,{cache:"no-store"}).then((t=>t.json()));return a&&a.plObj&&((0,o.A)(a.plObj).forEach((t=>{const e=n.state.wallets[t.generatedWallet];e&&(e.pos=u(t),c()(document).trigger(`
                                                                            portfolio: updateWallet.$ {
                                                                                n.uid
                                                                            }
                                                                            `,[{wallet:e,state:n.state,instance:n,action:"fetch"}]))})),n.state.average=n.calculateAverage(),n.checkVisibility(),n.broadcastUpdate({action:"fetch"})),!0}catch(i){console.error(i)}}broadcastUpdate(t={}){c()(document).trigger(`
                                                                            portfolio: updateState.$ {
                                                                                this.uid
                                                                            }
                                                                            `,[{poolId:this.config.poolId,type:this.config.type,state:this.state,instance:this,...t}]),this.config.onStateUpdate&&this.config.onStateUpdate()}setPoolId(t,e){return this.config.poolId=t,this.setPositionsData(e||[]),this.broadcastUpdate(),this}setPositionsData(t){this.state.wallets=(0,i.LG)(this.state.wallets,(t=>({...t,pos:null}))),(0,o.A)(t).forEach((t=>{const{generatedWallet:e}=t;e&&this.state.wallets[e]&&(this.state.wallets[e].pos=u(t))})),this.state.average=this.calculateAverage(),this.checkVisibility()}setDataByWallet(t,e){try{const n=this.state.wallets[t];if(!n||!e)return;const o={...n,...e};o.pos=this.refreshPosition(o.pos),this.state.wallets[t]=o,this.state.average=this.calculateAverage(),this.checkVisibility(),c()(document).trigger(`
                                                                            portfolio: updateWallet.$ {
                                                                                this.uid
                                                                            }
                                                                            `,[{poolId:this.config.poolId,type:this.config.type,wallet:newWallet,state:this.state,instance:this}]),instance.broadcastUpdate()}catch(n){console.error(n)}}checkVisibility(){return this.state.isVisible=!(0,i.Im)(this.getPositions()),this.state.isVisible}refreshPosition(t,e={}){try{if(!t)return t;const n={...t},{poolPriceQuote:o}=e,a=parseFloat(t.remainingTokens||0);if((parseFloat(t.investedEth||0)>0||a>0)&&a>0){if(!(0,i.gD)(o)){let t=parseFloat(o*a);n.remainingEth=t}const t=(0,i.sJ)({invested:n.investedEth,remaining:n.remainingEth,sold:n.soldEth});n.pl=t.pl.value,n.plEth=t.plEth.value}return this.checkVisibility(),n}catch(n){return console.error(n),t}}updatePositions(t){try{this.state.wallets=(0,i.LG)(this.state.wallets,(e=>({...e,pos:e.pos?this.refreshPosition(e.pos,t):null}))),this.state.average=this.calculateAverage(),this.checkVisibility(),this.broadcastUpdate()}catch(e){console.error(e)}}getPositions(){return(0,i.mN)(this.state.wallets,(t=>!!t.pos))}getPlViewProps(t){try{if(!t)return null;const t="string"===typeof t?this.state.wallets[t]:t,e=t?t.pos:null;if(!e)return null;const{pl:n,plEth:o}=e;return((t=0,e=0)=>{try{return{pl:{value:parseFloat(t)||0,label:(0,i.gD)(t)?"N/A":`
                                                                            $ {
                                                                                t >= 0 ? "+" : ""
                                                                            }
                                                                            $ {
                                                                                i.q2.format(t / 100)
                                                                            }
                                                                            `,color:parseFloat(t)>=0?"green":"red"},plEth:{value:parseFloat(e)||0,label:`
                                                                            $ {
                                                                                parseFloat(e) >= 0 ? "+" : ""
                                                                            }
                                                                            $ {
                                                                                i.Er.format(e || 0)
                                                                            }
                                                                            `,color:parseFloat(e)>=0?"green":"red"}}}catch(n){return console.error(n),null}})(n,o)}catch(e){return null}}calculateAverage(t){const e=this.getPositions(),n=t?t.map((t=>e[t])).filter((t=>t&&!!t.pos)):Object.values(e),o={investedEth:0,investedTokens:0,remainingEth:0,remainingTokens:0,soldEth:0,soldTokens:0};n.forEach((t=>{Object.keys(o).forEach((e=>{const n=t.pos&&!(0,i.gD)(t.pos[e])&&parseFloat(t.pos[e])||0;o[e]=(o[e]||0)+n}))}));const a=(0,i.sJ)({invested:o.investedEth,remaining:o.remainingEth,sold:o.soldEth});return o.pl=a.pl.value,o.plEth=a.plEth.value,o}formatData(t){if(!t)return{};const{generatedWallet:e,investedEth:n,remainingEth:o,soldEth:a,pl:s,plEth:r}=t,c={...t,generatedWallet:(0,i.Wr)(e||""),investedEth:i.EG.format(n),remainingEth:i.EG.format(o),soldEth:i.EG.format(a),pl:(0,i.gD)(s)?"N/A":`
                                                                            $ {
                                                                                s >= 0 ? "+" : ""
                                                                            }
                                                                            $ {
                                                                                i.q2.format(s / 100)
                                                                            }
                                                                            `,plEth:0!==r?`
                                                                            $ {
                                                                                parseFloat(r) >= 0 ? "+" : ""
                                                                            }
                                                                            $ {
                                                                                i.Er.format(r || 0)
                                                                            }
                                                                            `:""};return c.plHtml=`\
                                                                            n < span class = "${parseFloat(s)>0?"
                                                                            u - color - green ":"
                                                                            u - color - red "}" > \n $ {
                                                                                c.pl
                                                                            }
                                                                            $ {
                                                                                c.plEth ? `(${c.plEth})` : ""
                                                                            }\
                                                                            n < /span>\n    `,c}}let f;const h=()=>f;e.Ay=t=>(f||(f=new d(t)),f)},7983:function(t,e,n){"use strict";n.d(e,{s:function(){return i}});var o=n(1580);const i=async()=>{let t;const e=(0,o.St)();if(e)try{t=e}catch(n){logger.error("catch in getProvider"),logger.error(n)}if(t){window.provider=t;try{await e.connect({onlyIfTrusted:!0})}catch(n){}return t}return window.noProvider=!0,!1}},3435:function(t,e,n){"use strict";n.d(e,{F8:function(){return m},OA:function(){return h},Th:function(){return p},_b:function(){return d},ag:function(){return f}});var o=n(37),i=n.n(o),a=n(1580),s=n(4330),r=n.n(s),c=n(5479),l=n.n(c);const u={progressBar:!1,position:"topCenter",icon:null,transitionIn:"fadeInDown",transitionOut:"fadeOutUp",animateInside:!1,drag:!1,timeout:5e3,closeOnClick:!0},d=t=>{if(!t)return;const e=l()(`.flash-${t}`);e.length&&i().hide({transitionOut:"fadeOutUp"},e[0])};function f({message:t,id:e,showOnHidden:n,...o}){if(e&&d(e),n||!document.hidden)return i().success({message:t,...u,...o,id:`flash-${e}`})}function h(t){const{message:e,timeout:n,id:o,showOnHidden:i,...s}=t,c=`flash-${o||r()()}`,u=`.${c}`;if(!t.timeout||!i&&document.hidden)return;let d;f({message:`${e} <span class="js-izitoast__countdown u-color-green"> (${n/
                                                                            1e3
                                                                        }) < /span>`,timeout:n,id:o,...s,class:c});const h=n===a.hj,m=n/
                                                                    1e3;
                                                                    let p = m;
                                                                    const g = h ? 5 : m / 2,
                                                                        w = h ? 10 : m / 6;
                                                                    d = setInterval((function() {
                                                                        if (p <= 0 || !l()(u).length) return void clearInterval(d);
                                                                        const t = l()(u).find(".iziToast-message");
                                                                        let e = "green";
                                                                        p < g ? e = "red" : p < w && (e = "yellow"), t.find(".js-izitoast__countdown").remove(), t.append(`<span class="js-izitoast__countdown u-color-${e}"> (${p})</span>`), p--
                                                                    }), 1e3)
                                                                }

                                                                function m({
                                                                    message: t,
                                                                    id: e,
                                                                    showOnHidden: n,
                                                                    ...o
                                                                }) {
                                                                    if (e) {
                                                                        const t = l()(`.flash-${e}, #flash-${e}`);
                                                                        t.length && i().hide({
                                                                            transitionOut: "fadeOutUp"
                                                                        }, t[0])
                                                                    }
                                                                    if (n || !document.hidden) return i().error({
                                                                        message: t,
                                                                        ...u,
                                                                        ...o
                                                                    })
                                                                }

                                                                function p({
                                                                    alertId: t,
                                                                    iconPosition: e,
                                                                    message: n,
                                                                    link: o,
                                                                    icon: a = "attention",
                                                                    iconColor: s,
                                                                    img: r,
                                                                    ...c
                                                                }) {
                                                                    const l = { ...u,
                                                                        timeout: 4e3,
                                                                        position: "topRight",
                                                                        class: "c-alert",
                                                                        progressBar: !0,
                                                                        ...c
                                                                    };
                                                                    l.timeout || (l.progressBar = !1, l.closeOnClick = !1);
                                                                    const d = o ? "a" : "div",
                                                                        f = `\n    <${d} class="c-alert__inner" ${t?`data-alert-id="${t}"`:""} ${o?`href="${o}"`:""}>\n      ${a||r?`\n    <div class="l-row l-row-gap--xxs">\n      <div class="l-col-auto ${"center"===e?"u-d-flex u-align-items-center":""}">\n        ${r?`\n          <img src="${r}" class="c-alert__img" />\n        `:`\n          <span class="c-icon c-icon--${a} c-alert__icon ${s?`u-color-${s}`:""}"></span>\n        `}\n        \n      </div>\n      <div class="l-col">\n        ${n}\n      </div>\n\n      ${l.timeout?"":'\n          <div class="l-col-auto u-d-flex u-align-items-center">\n            <div class="c-icon c-icon--x c-icon--base c-alert__close u-pointer js-flash-alert__close"></div>\n          </div>\n        '}\n    </div>\n  `:n}\n    </${d}>\n  `;
                                                                    return l.timeout && g(t), i().success({
                                                                        message: f,
                                                                        ...l
                                                                    })
                                                                }

                                                                function g(t, e = !0) {
                                                                    const n = Math.floor(2501 * Math.random() + 500),
                                                                        o = () => fetch("/api/alerts/mark_as_viewed", {
                                                                            method: "POST",
                                                                            headers: {
                                                                                "x-csrf-token": (0, a.PE)(),
                                                                                "content-type": "application/json"
                                                                            },
                                                                            body: JSON.stringify({
                                                                                id: t
                                                                            }),
                                                                            credentials: "same-origin"
                                                                        }).then((t => t.json()));
                                                                    e ? setTimeout(o, n) : o()
                                                                }
                                                                window.flashAlert = p, l()(document).ready((function() {
                                                                    l()(document).on("click", ".js-flash-alert__close", (function() {
                                                                        const t = l()(this).closest("[data-alert-id]").data("alertId");
                                                                        t && g(t, !1), i().hide({
                                                                            transitionOut: "fadeOutUp"
                                                                        }, l()(this).closest(".iziToast")[0])
                                                                    }))
                                                                }))
                                                            }, 3283: function() {}, 8338: function() {}, 5899: function() {}
                                                        }]);
                                            //# sourceMappingURL=9935-d1e0beb2496b86c85bec.js.map