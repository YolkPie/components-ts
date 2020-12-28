// 埋点方法初始化
export const init = function(config = {}) {
  window.jap = {
    autoLogPv: false,
    siteId: "JA2017_411819",
    anchorpvflag: true,
    ...config
  };
  window.jdpts = {
    _st: new Date().getTime()
  };
  const ScriptStartTime = new Date();
  try {
    /* eslint-disable no-unused-expressions */
    /* eslint-disable no-sequences */
    (window.fingerprint = {}),
      /* eslint-disable no-undef */
      (fingerprint.config = {
        fpb_send_data:
          'body={"appname": "jdwebm_hf","jdkey": "","whwswswws": "","businness": "","body": {}}',
        api: { canvas_spendtime: 0 },
        unionwsws_param: {
          iOS: {
            routerURL:
              "router://JDUnionFingerprintModule/getUnionFingerprintForH5",
            callBackName: "fingerprint.webview.fingerPrintCallback"
          },
          android: {
            businessType: "unionFingerPrint",
            callBackName: "fingerprint.webview.fingerPrintCallback"
          }
        }
      }),
      (fingerprint.broswer = {
        getNavigatorPlatform() {
          return navigator.platform ? navigator.platform : "unknown";
        },
        getDeviceMemory() {
          return navigator.deviceMemory ? navigator.deviceMemory : 0;
        },
        rB() {
          const e = [];
          const t = [
            "__webdriver_evaluate",
            "__selenium_evaluate",
            "__webdriver_script_function",
            "__webdriver_script_func",
            "__webdriver_script_fn",
            "__fxdriver_evaluate",
            "__driver_unwrapped",
            "__webdriver_unwrapped",
            "__driver_evaluate",
            "__selenium_unwrapped",
            "__fxdriver_unwrapped"
          ];
          let r = [
            "_phantom",
            "__nightmare",
            "_selenium",
            "callPhantom",
            "callSelenium",
            "_Selenium_IDE_Recorder"
          ];
          for (const o in r) {
            const i = r[o];
            window[i] && e.push({ key: "window", value: i });
          }
          for (const a in t)
            (r = t[a]),
              window.document[r] &&
                e.push({ key: "window_document", value: r });
          for (const n in window.document)
            n.match(/\$[a-z]dc_/) &&
              window.document[n].cache_ &&
              e.push({ key: "document", value: n });
          return (
            window.external &&
              JSON.stringify(window.external) &&
              /* eslint-disable eqeqeq */
              JSON.stringify(window.external).indexOf("Sequentum") != -1 &&
              e.push({ key: "window_external", value: 1 }),
            window.document.documentElement.getAttribute("selenium") &&
              e.push({ key: "document_selenium", value: 1 }),
            window.document.documentElement.getAttribute("webdriver") &&
              e.push({ key: "document_webdriver", value: 1 }),
            window.document.documentElement.getAttribute("driver") &&
              e.push({ key: "document_driver", value: 1 }),
            e
          );
        },
        getHeadless() {
          return this.rB().length > 0
            ? 1
            : navigator.userAgent.toLocaleLowerCase().indexOf("headless") > -1
            ? 1
            : 0;
        },
        getLocation() {
          /* eslint-disable no-restricted-globals */
          return fingerprint.util.MD5.hex_md5(location.href.split("?")[0]);
        },
        getUserAgent() {
          return fingerprint.util.MD5.hex_md5(navigator.userAgent);
        },
        getCanvas() {
          try {
            const e = new Date();
            const t = [];
            const r = document.createElement("canvas");
            (r.width = 2e3), (r.height = 200), (r.style.display = "inline");
            const o = r.getContext("2d");
            return (
              o.rect(0, 0, 10, 10),
              o.rect(2, 2, 6, 6),
              t.push(
                `canvas winding:${
                  !1 === o.isPointInPath(5, 5, "evenodd") ? "yes" : "no"
                }`
              ),
              (o.textBaseline = "alphabetic"),
              (o.fillStyle = "#f60"),
              o.fillRect(125, 1, 62, 20),
              (o.fillStyle = "#069"),
              (o.font = "11pt no-real-font-123"),
              o.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 2, 15),
              (o.fillStyle = "rgba(102, 204, 0, 0.2)"),
              (o.font = "18pt Arial"),
              o.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 4, 45),
              (o.globalCompositeOperation = "multiply"),
              (o.fillStyle = "rgb(255,0,255)"),
              o.beginPath(),
              o.arc(50, 50, 50, 0, 2 * Math.PI, !0),
              o.closePath(),
              o.fill(),
              (o.fillStyle = "rgb(0,255,255)"),
              o.beginPath(),
              o.arc(100, 50, 50, 0, 2 * Math.PI, !0),
              o.closePath(),
              o.fill(),
              (o.fillStyle = "rgb(255,255,0)"),
              o.beginPath(),
              o.arc(75, 100, 50, 0, 2 * Math.PI, !0),
              o.closePath(),
              o.fill(),
              (o.fillStyle = "rgb(255,0,255)"),
              o.arc(75, 75, 75, 0, 2 * Math.PI, !0),
              o.arc(75, 75, 25, 0, 2 * Math.PI, !0),
              o.fill("evenodd"),
              t.push(
                `canvas fp:${fingerprint.util.MD5.hex_md5(r.toDataURL())}`
              ),
              (fingerprint.config.api.canvas_spendtime =
                new Date().getTime() - e.getTime()),
              t.join("~")
            );
          } catch (i) {
            return "";
          }
        },
        getPluginName() {
          let e = "";
          if (navigator.plugins.length > 0)
            for (let i = 0; i < navigator.plugins.length; i++)
              e += `${navigator.plugins[i].name};`;
          return e;
        },
        getPluginNum() {
          return navigator.plugins.length;
        },
        getHasLiedLanguages() {
          if (typeof navigator.languages != "undefined")
            try {
              if (
                navigator.languages[0].substr(0, 2) !==
                navigator.language.substr(0, 2)
              )
                return !0;
            } catch (e) {
              return !0;
            }
          return !1;
        },
        getResolution() {
          return `${window.screen.width};${window.screen.height}`;
        },
        getHasLiedResolution() {
          return (
            window.screen.width < window.screen.availWidth ||
            window.screen.height < window.screen.availHeight
          );
        },
        getHasLiedOs() {
          let e;
          const t = navigator.userAgent.toLowerCase();
          let r = navigator.oscpu;
          const o = navigator.platform.toLowerCase();
          if (
            ((e =
              t.indexOf("windows phone") >= 0
                ? "Windows Phone"
                : t.indexOf("win") >= 0
                ? "Windows"
                : t.indexOf("android") >= 0
                ? "Android"
                : t.indexOf("linux") >= 0
                ? "Linux"
                : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0
                ? "iOS"
                : t.indexOf("mac") >= 0
                ? "Mac"
                : "Other"),
            ("ontouchstart" in window ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0) &&
              e !== "Windows Phone" &&
              e !== "Android" &&
              e !== "iOS" &&
              e !== "Other")
          )
            return !0;
          if (void 0 !== r) {
            if (
              (r = r.toLowerCase()).indexOf("win") >= 0 &&
              e !== "Windows" &&
              e !== "Windows Phone"
            )
              return !0;
            if (r.indexOf("linux") >= 0 && e !== "Linux" && e !== "Android")
              return !0;
            if (r.indexOf("mac") >= 0 && e !== "Mac" && e !== "iOS") return !0;
            if (
              (r.indexOf("win") === -1 &&
                r.indexOf("linux") === -1 &&
                r.indexOf("mac") === -1) !=
              (e === "Other")
            )
              return !0;
          }
          return (
            (o.indexOf("win") >= 0 &&
              e !== "Windows" &&
              e !== "Windows Phone") ||
            ((o.indexOf("linux") >= 0 ||
              o.indexOf("android") >= 0 ||
              o.indexOf("pike") >= 0) &&
              e !== "Linux" &&
              e !== "Android") ||
            ((o.indexOf("mac") >= 0 ||
              o.indexOf("ipad") >= 0 ||
              o.indexOf("ipod") >= 0 ||
              o.indexOf("iphone") >= 0) &&
              e !== "Mac" &&
              e !== "iOS") ||
            (o.indexOf("win") === -1 &&
              o.indexOf("linux") === -1 &&
              o.indexOf("mac") === -1) !=
              (e === "Other") ||
            (typeof navigator.plugins == "undefined" &&
              e !== "Windows" &&
              e !== "Windows Phone")
          );
        },
        getHasLiedBrowser() {
          let e;
          const t = navigator.userAgent.toLowerCase();
          const r = navigator.productSub;
          if (
            ((e =
              t.indexOf("firefox") >= 0
                ? "Firefox"
                : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0
                ? "Opera"
                : t.indexOf("chrome") >= 0
                ? "Chrome"
                : t.indexOf("safari") >= 0
                ? "Safari"
                : t.indexOf("trident") >= 0
                ? "Internet Explorer"
                : "Other") == "Chrome" ||
              e === "Safari" ||
              e === "Opera") &&
            r !== "20030107"
          )
            return !0;
          let o;
          /* eslint-disable no-eval */
          const i = eval.toString().length;
          if (i === 37 && e !== "Safari" && e !== "Firefox" && e !== "Other")
            return !0;
          if (i === 39 && e !== "Internet Explorer" && e !== "Other") return !0;
          if (i === 33 && e !== "Chrome" && e !== "Opera" && e !== "Other")
            return !0;
          try {
            /* eslint-disable no-throw-literal */
            throw "a";
          } catch (a) {
            try {
              a.toSource(), (o = !0);
            } catch (n) {
              o = !1;
            }
          }
          return !(!o || e === "Firefox" || e === "Other");
        },
        getTimezoneOffset() {
          return new Date().getTimezoneOffset();
        },
        getTimeZone() {
          return window.Intl && window.Intl.DateTimeFormat
            ? new window.Intl.DateTimeFormat().resolvedOptions().timeZone
            : undefined;
        }
      }),
      (fingerprint.webview = {
        getIosFingerprint() {
          navigator.userAgent.indexOf("jdapp") == 0 &&
            (navigator.userAgent.indexOf("supportJDSHWK/1") != -1 ||
            window._is_jdsh_wkwebview == 1
              ? window.webkit.messageHandlers.JDAppUnite.postMessage({
                  method: "callSyncRouterModuleWithParams",
                  params: JSON.stringify(fingerprint.config.unionwsws_param.iOS)
                })
              : window.JDAppUnite.callRouterModuleWithParams(
                  JSON.stringify(fingerprint.config.unionwsws_param.iOS)
                ));
        },
        getAndroidFingerprint() {
          this.isWKWebView()
            ? window.webkit.messageHandlers.JDAppUnite.postMessage({
                method: "notifyMessageToNative",
                params: JSON.stringify(
                  fingerprint.config.unionwsws_param.android
                )
              })
            : window.JdAndroid &&
              window.JdAndroid.notifyMessageToNative(
                JSON.stringify(fingerprint.config.unionwsws_param.android)
              );
        },
        fingerPrintCallback(e) {
          try {
            (e = JSON.parse(e)).status == 0 &&
              fingerprint.util.setStorage("unionwsws", e.data);
          } catch (t) {}
        },
        getAppFingerprint() {
          try {
            const e = navigator.userAgent.toLowerCase();
            /iphone|ipad|ios|ipod/.test(e)
              ? this.getIosFingerprint()
              : /android/.test(e) && this.getAndroidFingerprint();
          } catch (t) {}
          return fingerprint.util.getStorage("unionwsws");
        },
        isWKWebView() {
          return !(
            !navigator.userAgent.match(/supportJDSHWK/i) &&
            window._is_jdsh_wkwebview != 1
          );
        }
      }),
      (fingerprint.util = {
        G: "",
        getCookie(e) {
          let t;
          const r = new RegExp(`(^| )${e}=([^;]*)(;|$)`);
          /* eslint-disable no-cond-assign */
          return (t = document.cookie.match(r)) ? unescape(t[2]) : "";
        },
        getStorage(e) {
          if (
            window.Storage &&
            window.localStorage &&
            window.localStorage instanceof Storage
          )
            return JSON.parse(localStorage.getItem(e));
        },
        setStorage(e, t) {
          window.Storage &&
            window.localStorage &&
            window.localStorage instanceof Storage &&
            localStorage.setItem(e, JSON.stringify(t));
        },
        getFpb(e) {
          let t;
          let r = "";
          if (window.navigator.cookieEnabled) {
            let o = window.document.cookie.indexOf(`${e}=`);
            if (o != -1) {
              const i = e.length + 1;
              o += i;
              let a = window.document.cookie.indexOf(";", o);
              a == -1 && (a = window.document.cookie.length);
              try {
                t =
                  decodeURIComponent(window.document.cookie.substring(o, a)) ||
                  "";
              } catch (n) {
                t = window.document.cookie.substring(o, a) || "";
              }
              r || (r = t);
            }
          }
          try {
            window.localStorage &&
              ((t = window.localStorage.getItem(e) || ""), r || (r = t));
          } catch (n) {}
          try {
            window.sessionStorage &&
              ((t = window.sessionStorage.getItem(e) || ""), r || (r = t));
          } catch (d) {}
          return (t = window.name), r || (r = t), r || (r = t), r || "";
        },
        getDateFormat(e, t) {
          const r = {
            "M+": e.getMonth() + 1,
            "d+": e.getDate(),
            "h+": e.getHours(),
            "m+": e.getMinutes(),
            "s+": e.getSeconds(),
            "q+": Math.floor((e.getMonth() + 3) / 3),
            S: e.getMilliseconds()
          };
          /(y+)/.test(t) &&
            (t = t.replace(
              RegExp.$1,
              `${e.getFullYear()}`.substr(4 - RegExp.$1.length)
            ));
          for (const o in r)
            new RegExp(`(${o})`).test(t) &&
              (t = t.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                  ? r[o]
                  : `00${r[o]}`.substr(`${r[o]}`.length)
              ));
          return t;
        },
        MD5: {
          chrsz: 8,
          G: "",
          hex_md5(e) {
            return this.binl2hex(
              this.core_md5(this.str2binl(e), e.length * this.chrsz)
            );
          },
          core_md5(e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
            for (
              var r = 1732584193,
                o = -271733879,
                i = -1732584194,
                a = 271733878,
                n = 0;
              n < e.length;
              n += 16
            ) {
              const d = r;
              const l = o;
              const c = i;
              const s = a;
              (r = this.md5_ff(r, o, i, a, e[n + 0], 7, -680876936)),
                (a = this.md5_ff(a, r, o, i, e[n + 1], 12, -389564586)),
                (i = this.md5_ff(i, a, r, o, e[n + 2], 17, 606105819)),
                (o = this.md5_ff(o, i, a, r, e[n + 3], 22, -1044525330)),
                (r = this.md5_ff(r, o, i, a, e[n + 4], 7, -176418897)),
                (a = this.md5_ff(a, r, o, i, e[n + 5], 12, 1200080426)),
                (i = this.md5_ff(i, a, r, o, e[n + 6], 17, -1473231341)),
                (o = this.md5_ff(o, i, a, r, e[n + 7], 22, -45705983)),
                (r = this.md5_ff(r, o, i, a, e[n + 8], 7, 1770035416)),
                (a = this.md5_ff(a, r, o, i, e[n + 9], 12, -1958414417)),
                (i = this.md5_ff(i, a, r, o, e[n + 10], 17, -42063)),
                (o = this.md5_ff(o, i, a, r, e[n + 11], 22, -1990404162)),
                (r = this.md5_ff(r, o, i, a, e[n + 12], 7, 1804603682)),
                (a = this.md5_ff(a, r, o, i, e[n + 13], 12, -40341101)),
                (i = this.md5_ff(i, a, r, o, e[n + 14], 17, -1502002290)),
                (o = this.md5_ff(o, i, a, r, e[n + 15], 22, 1236535329)),
                (r = this.md5_gg(r, o, i, a, e[n + 1], 5, -165796510)),
                (a = this.md5_gg(a, r, o, i, e[n + 6], 9, -1069501632)),
                (i = this.md5_gg(i, a, r, o, e[n + 11], 14, 643717713)),
                (o = this.md5_gg(o, i, a, r, e[n + 0], 20, -373897302)),
                (r = this.md5_gg(r, o, i, a, e[n + 5], 5, -701558691)),
                (a = this.md5_gg(a, r, o, i, e[n + 10], 9, 38016083)),
                (i = this.md5_gg(i, a, r, o, e[n + 15], 14, -660478335)),
                (o = this.md5_gg(o, i, a, r, e[n + 4], 20, -405537848)),
                (r = this.md5_gg(r, o, i, a, e[n + 9], 5, 568446438)),
                (a = this.md5_gg(a, r, o, i, e[n + 14], 9, -1019803690)),
                (i = this.md5_gg(i, a, r, o, e[n + 3], 14, -187363961)),
                (o = this.md5_gg(o, i, a, r, e[n + 8], 20, 1163531501)),
                (r = this.md5_gg(r, o, i, a, e[n + 13], 5, -1444681467)),
                (a = this.md5_gg(a, r, o, i, e[n + 2], 9, -51403784)),
                (i = this.md5_gg(i, a, r, o, e[n + 7], 14, 1735328473)),
                (o = this.md5_gg(o, i, a, r, e[n + 12], 20, -1926607734)),
                (r = this.md5_hh(r, o, i, a, e[n + 5], 4, -378558)),
                (a = this.md5_hh(a, r, o, i, e[n + 8], 11, -2022574463)),
                (i = this.md5_hh(i, a, r, o, e[n + 11], 16, 1839030562)),
                (o = this.md5_hh(o, i, a, r, e[n + 14], 23, -35309556)),
                (r = this.md5_hh(r, o, i, a, e[n + 1], 4, -1530992060)),
                (a = this.md5_hh(a, r, o, i, e[n + 4], 11, 1272893353)),
                (i = this.md5_hh(i, a, r, o, e[n + 7], 16, -155497632)),
                (o = this.md5_hh(o, i, a, r, e[n + 10], 23, -1094730640)),
                (r = this.md5_hh(r, o, i, a, e[n + 13], 4, 681279174)),
                (a = this.md5_hh(a, r, o, i, e[n + 0], 11, -358537222)),
                (i = this.md5_hh(i, a, r, o, e[n + 3], 16, -722521979)),
                (o = this.md5_hh(o, i, a, r, e[n + 6], 23, 76029189)),
                (r = this.md5_hh(r, o, i, a, e[n + 9], 4, -640364487)),
                (a = this.md5_hh(a, r, o, i, e[n + 12], 11, -421815835)),
                (i = this.md5_hh(i, a, r, o, e[n + 15], 16, 530742520)),
                (o = this.md5_hh(o, i, a, r, e[n + 2], 23, -995338651)),
                (r = this.md5_ii(r, o, i, a, e[n + 0], 6, -198630844)),
                (a = this.md5_ii(a, r, o, i, e[n + 7], 10, 1126891415)),
                (i = this.md5_ii(i, a, r, o, e[n + 14], 15, -1416354905)),
                (o = this.md5_ii(o, i, a, r, e[n + 5], 21, -57434055)),
                (r = this.md5_ii(r, o, i, a, e[n + 12], 6, 1700485571)),
                (a = this.md5_ii(a, r, o, i, e[n + 3], 10, -1894986606)),
                (i = this.md5_ii(i, a, r, o, e[n + 10], 15, -1051523)),
                (o = this.md5_ii(o, i, a, r, e[n + 1], 21, -2054922799)),
                (r = this.md5_ii(r, o, i, a, e[n + 8], 6, 1873313359)),
                (a = this.md5_ii(a, r, o, i, e[n + 15], 10, -30611744)),
                (i = this.md5_ii(i, a, r, o, e[n + 6], 15, -1560198380)),
                (o = this.md5_ii(o, i, a, r, e[n + 13], 21, 1309151649)),
                (r = this.md5_ii(r, o, i, a, e[n + 4], 6, -145523070)),
                (a = this.md5_ii(a, r, o, i, e[n + 11], 10, -1120210379)),
                (i = this.md5_ii(i, a, r, o, e[n + 2], 15, 718787259)),
                (o = this.md5_ii(o, i, a, r, e[n + 9], 21, -343485551)),
                (r = this.safe_add(r, d)),
                (o = this.safe_add(o, l)),
                (i = this.safe_add(i, c)),
                (a = this.safe_add(a, s));
            }
            /* eslint-disable  no-array-constructor */
            return Array(r, o, i, a);
          },
          md5_cmn(e, t, r, o, i, a) {
            return this.safe_add(
              this.bit_rol(
                this.safe_add(this.safe_add(t, e), this.safe_add(o, a)),
                i
              ),
              r
            );
          },
          md5_ff(e, t, r, o, i, a, n) {
            return this.md5_cmn((t & r) | (~t & o), e, t, i, a, n);
          },
          md5_gg(e, t, r, o, i, a, n) {
            return this.md5_cmn((t & o) | (r & ~o), e, t, i, a, n);
          },
          md5_hh(e, t, r, o, i, a, n) {
            return this.md5_cmn(t ^ r ^ o, e, t, i, a, n);
          },
          md5_ii(e, t, r, o, i, a, n) {
            return this.md5_cmn(r ^ (t | ~o), e, t, i, a, n);
          },
          safe_add(e, t) {
            const r = (65535 & e) + (65535 & t);
            return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
          },
          bit_rol(e, t) {
            return (e << t) | (e >>> (32 - t));
          },
          str2binl(e) {
            for (
              var t = Array(), r = (1 << this.chrsz) - 1, o = 0;
              o < e.length * this.chrsz;
              o += this.chrsz
            )
              t[o >> 5] |= (e.charCodeAt(o / this.chrsz) & r) << o % 32;
            return t;
          },
          binl2hex(e) {
            for (
              var t = "0123456789abcdef", r = "", o = 0;
              o < 4 * e.length;
              o++
            )
              r +=
                t.charAt((e[o >> 2] >> ((o % 4) * 8 + 4)) & 15) +
                t.charAt((e[o >> 2] >> ((o % 4) * 8)) & 15);
            return r;
          }
        },
        Base64: {
          _keyStr:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          encode(e) {
            let t;
            let r;
            let o;
            let i;
            let a;
            let n;
            let d;
            let l = "";
            let c = 0;
            for (e = this._utf8_encode(e); c < e.length; )
              (i = (t = e.charCodeAt(c++)) >> 2),
                (a = ((3 & t) << 4) | ((r = e.charCodeAt(c++)) >> 4)),
                (n = ((15 & r) << 2) | ((o = e.charCodeAt(c++)) >> 6)),
                (d = 63 & o),
                isNaN(r) ? (n = d = 64) : isNaN(o) && (d = 64),
                (l =
                  l +
                  this._keyStr.charAt(i) +
                  this._keyStr.charAt(a) +
                  this._keyStr.charAt(n) +
                  this._keyStr.charAt(d));
            return l;
          },
          _utf8_encode(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", r = 0; r < e.length; r++) {
              const o = e.charCodeAt(r);
              o < 128
                ? (t += String.fromCharCode(o))
                : o > 127 && o < 2048
                ? ((t += String.fromCharCode((o >> 6) | 192)),
                  (t += String.fromCharCode((63 & o) | 128)))
                : ((t += String.fromCharCode((o >> 12) | 224)),
                  (t += String.fromCharCode(((o >> 6) & 63) | 128)),
                  (t += String.fromCharCode((63 & o) | 128)));
            }
            return t;
          }
        }
      }),
      (window.getFingerprint = function() {
        try {
          return `v001${fingerprint.util.Base64.encode(
            JSON.stringify({
              a: fingerprint.webview.getAppFingerprint(),
              b: fingerprint.util.getCookie("shshshfpa"),
              c: fingerprint.util.getFpb("shshshfpb"),
              d: fingerprint.broswer.getNavigatorPlatform(),
              f: fingerprint.broswer.getDeviceMemory(),
              g: fingerprint.broswer.getHeadless(),
              h: fingerprint.broswer.getCanvas(),
              i: fingerprint.config.api.canvas_spendtime,
              j: fingerprint.util.getDateFormat(
                new Date(),
                "yyyy-MM-dd hh:mm:ss"
              ),
              k: fingerprint.broswer.getLocation(),
              l: fingerprint.broswer.getUserAgent(),
              m:
                fingerprint.util.getCookie("pin") ||
                fingerprint.util.getCookie("pt_pin"),
              n: fingerprint.broswer.getPluginName(),
              o: fingerprint.broswer.getPluginNum(),
              p: fingerprint.broswer.getTimezoneOffset(),
              q: fingerprint.broswer.getTimeZone(),
              r: fingerprint.broswer.getHasLiedLanguages(),
              s: fingerprint.broswer.getHasLiedResolution(),
              t: fingerprint.broswer.getHasLiedOs(),
              u: fingerprint.broswer.getHasLiedBrowser(),
              v: fingerprint.broswer.getResolution()
            })
          )}`;
        } catch (e) {
          return `error :${e}`;
        }
      }),
      fingerprint.webview.getAppFingerprint();
  } catch (e) {
    window.getFingerprint = function() {
      return `error :${e}`;
    };
  }
  const fingerprintScriptTime = new Date() - ScriptStartTime;
  const JA = {};
  const lr = {};
  function isSpider() {
    const e = navigator.userAgent;
    return /Googlebot|Feedfetcher-Google|Mediapartners-Google|Adsbot-Google|Sogou\s{1}web\s{1}spider|Sogou\s{1}inst\s{1}spider|Sogou\s{1}inst\s{1}spider\/4\.0|HaoSouSpider|360Spider|Baiduspider|bingbot|qihoobot|YoudaoBot|Sosospider|Sogou\s{1}web\s{1}spider|iaskspider|msnbot|Yahoo!\s{1}Slurp|Yahoo!\s{1}Slurp\s{1}China|yisouspider|msnbot|YandexBot/.test(
      e
    );
  }
  /* eslint-disable no-unused-vars */
  function namespace(name) {
    for (let arr = name.split(","), r = 0, len = arr.length; r < len; r++)
      for (var i = 0, k, n = arr[r].split("."), parent = {}; (k = n[i]); i++)
        i === 0
          ? eval(`(typeof ${k})==="undefined"?(${k}={}):"";parent=${k}`)
          : (parent = parent[k] = parent[k] || {});
  }
  function isJdLog() {
    return (navigator.userAgent || "").indexOf(";jdlog;") > -1;
  }
  function isEmbedded() {
    return (navigator.userAgent || "").indexOf("jdapp;") > -1 || isJdLog();
  }
  function getSeparatedUrl(e) {
    const t = e.split("#");
    const r = t[0].split("?");
    if (lr && lr.anchorToUri && t[1]) {
      const o = t[1].split("?");
      const i = ((e = r[0].replace(/\/$/, "")), o[0].replace(/^\//, ""));
      (r[0] = `${e}/${i}`), o[1] && (r[1] = r[1] ? `${r[1]}&${o[1]}` : o[1]);
    }
    return r;
  }
  function genHash(e) {
    let t;
    let r = 1;
    let o = 0;
    if (e)
      for (r = 0, t = e.length - 1; t >= 0; t--)
        r =
          (o =
            266338304 &
            (r =
              ((r << 6) & 268435455) + (o = e.charCodeAt(t)) + (o << 14))) !== 0
            ? r ^ (o >> 21)
            : r;
    return r;
  }
  function joinArrayBySeparator(e, t) {
    if ((t || (t = "|||"), e instanceof Array)) {
      let r;
      let o;
      let i = "";
      for (r = 0, o = e.length; r < o; r++) i += e[r] + (r === o - 1 ? "" : t);
      return i;
    }
    return e;
  }
  function joinJsonBySeparator(e, t) {
    let r = "";
    t || (t = "$");
    for (const o in e) r += `${o}=${e[o]}$`;
    return (r = r.substring(0, r.length - 1));
  }
  function jsonExtend(e, t, r) {
    let o;
    if (t instanceof Array)
      for (let o = 0, len = t.length; o < len; o++) jsonExtend(e, t[o], r);
    for (o in t) (!r && o in e) || (e[o] = t[o]);
    return e;
  }
  function setCookie(e, t, r, o) {
    if (e) {
      let i = "";
      if (o) {
        const a = new Date();
        a.setTime(a.getTime() + o), (i = `;expires=${a.toGMTString()}`);
      }
      document.cookie = `${e}=${t}${i};path=/;domain=${r};`;
    }
  }
  function getCookie(e, t) {
    const r = document.cookie.match(new RegExp(`(^| )${e}=([^;]*)(;|$)`));
    return r !== null ? (t ? r[2] : decodeURIComponent(r[2])) : "";
  }
  function delCookie(e, t, r, o) {
    const i = new Date();
    i.setMinutes(i.getMinutes() - 1e3),
      (t = t || "/"),
      (document.cookie = `${e}=;expires=${i.toGMTString()}${
        t ? `;path=${t}` : ""
      }${r ? `;domain=${r}` : ""}${o ? ";secure" : ""}`);
  }
  function flashChecker() {
    let e;
    let t = "";
    return (
      navigator.plugins &&
        navigator.plugins.length > 0 &&
        (e = navigator.plugins["Shockwave Flash"]) &&
        (t = e.description.split(" ")) &&
        t.length >= 4 &&
        (t = `${t[2]} ${t[3]}`),
      t
    );
  }
  function getParameter(e, t) {
    const r = t || document.location.href;
    const o = new RegExp(`(?:^|&|[?]|[/])${e}=([^&]*)`).exec(r);
    return o ? decodeURIComponent(o[1]) : null;
  }
  function getUrlParam(e, t) {
    t === undefined && (t = window.location.href);
    const r = new RegExp(`(^|&)${e}=([^&]*)(&|$)`, "i");
    const o = t.substr(t.indexOf("?") + 1).match(r);
    return o != null ? o[2] : "";
  }
  function getSkuid() {
    let e;
    return (
      typeof pageConfig != "undefined" &&
        (e = pageConfig.product ? pageConfig.product.skuid : 0),
      e || ""
    );
  }
  function getShopid() {
    let e;
    return (
      typeof pageConfig != "undefined" &&
        (e = pageConfig.product ? pageConfig.product.shopId : 0),
      e || ""
    );
  }
  function getOrderid() {
    return (
      (typeof SucInfo_OrderId != "undefined"
        ? SucInfo_OrderId
        : getParameter("suc_orderid")) || ""
    );
  }
  function getHashDomain() {
    return genHash(document.domain.replace(/.*?(\w+\.\w+)$/, "$1"));
  }
  function genUuid() {
    return `${new Date().getTime()}${parseInt(2147483647 * Math.random())}`;
  }
  function getCurTime() {
    return `${new Date().valueOf()}`;
  }
  function getBrowserInfo() {
    let e;
    let t;
    let r;
    const o = { name: "other", version: "0" };
    const i = navigator.userAgent.toLowerCase();
    for (
      t = [
        ["WeiXin", /micromessenger\/([^\s]+)/],
        ["QQ", /qq\/([^\s]+)/],
        ["QQBrowser", /(?:qqbrowser|qqlivebrowser)\/([^\s]+)/],
        ["JDAPP", /jdapp;/],
        ["QIHU", /qihu|360se/],
        /* eslint-disable no-useless-escape */
        ["LieBao", /(?:lbbrowser|liebaofast)\/?([\d\.]+)?/],
        ["Sogou", /(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/],
        ["Opera", /(?:opera|opr|oupeng)\/([\d\.]+)/],
        ["BaiduBrowser", /(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/],
        ["BaiduBox", /baiduboxapp|baiduboxpad/],
        ["UC", /(?:ucweb|ucbrowser)\/?([\d\.]+)/],
        ["Maxthon", /maxthon\/([\d\.]+)/],
        ["Samsung", /samsungbrowser\/([\d\.]+)/],
        ["Dolphin", /aphone|apad/],
        ["2345", /2345/],
        ["Miui", /miuibrowser\/([\d\.]+)/],
        ["OppoBrowser", /oppobrowser\/([\d\.]+)/],
        ["MeiZu", /mz-/],
        ["Weibo", /weibo/],
        ["Youku", /youku/],
        ["NewsApp", /newsapp/],
        ["AliApp", /aliapp/],
        ["Firefox", /firefox\/([\d\.\w]+)/],
        ["Chrome", /chrome\/([\d\.]+)/],
        ["IE", /msie[ ](\d+\.\d+)/],
        ["Safari", /safari\/([\d\.]+)/]
      ],
        e = 0;
      e < t.length;
      e++
    )
      if ((r = i.match(t[e][1]))) {
        (o.name = t[e][0]), (o.version = r[1] || "0");
        break;
      }
    return o;
  }
  function getCommonData(e) {
    let t;
    const r = {};
    const o = e.logType;
    for (
      r.pin_sid = getParameter("sid") || getCookie("sid") || "",
        r.report_ts = getCurTime(),
        r.scr = lr.resolution,
        r.token = lr.hex_md5(r.report_ts + lr.md5Key),
        r.ut = "s",
        r.clt = "web",
        r.jvr = lr.jvr || "3.0.5",
        r.std = lr.siteId,
        r.tpc = `${e.topic || lr.topic}.${
          o === lr.logType.pv ? "pv" : o === lr.logType.cl ? "cl" : "ot"
        }`,
        r.uuid = lr.uuid,
        t = 0;
      t < lr.getCommonDataF.length;
      t++
    )
      lr.getCommonDataF[t](e, r);
    return r;
  }
  function getJdv() {
    let e = getCookie(lr.ckJdv || "__jdv", 1);
    let t = getHashDomain();
    let r = "direct";
    let o = "none";
    let i = "-";
    let a = "-";
    let n = new Date().getTime();
    return (
      e && e.indexOf("|") < 0 && (e = urlDecode(e)),
      (e = e.split("|")).length == 6 &&
        ((t = e[0]),
        (r = e[1]),
        (i = e[2]),
        (o = e[3]),
        (a = e[4]),
        (n = e[5])),
      {
        jdv: (e = [t, r, i, o, a, n].join("|")),
        hash: t,
        source: r,
        campaign: i,
        medium: o,
        term: a,
        time: n
      }
    );
  }
  function setJdv(e, t) {
    let r = "";
    r =
      isPrey(10) && (!e || e.length > 400)
        ? `${t}|direct|-|none|-|${new Date().getTime()}`
        : e;
    const o = isEmbedded() ? lr.ckJdvEmbeddedExp : lr.ckJdvExp;
    setCookie(lr.ckJdv || "__jdv", r, lr.ckDomain, o);
  }
  function isWX() {
    return (
      !!(
        ",wq.jd.com,wqs.jd.com,wqitem.jd.com,wqcoss.jd.com,wqsou.jd.com,wqdeal1.jd.com,wqdeal2.jd.com,wqsitem.jd.com,wqitem.jd.hk,wqitem.jdworldwide.com,".indexOf(
          `,${window.location.host},`
        ) >= 0
      ) || !!getParameter("debugIsWQ")
    );
  }
  function isWxapp() {
    const e = navigator.userAgent.toLowerCase();
    return (
      /miniprogram/gi.test(e) || window.__wxjs_environment === "miniprogram"
    );
  }
  function getLogid() {
    return `${new Date().getTime()}.${Math.round(2147483647 * Math.random())}`;
  }
  function isObject(e) {
    return {}.toString.call(e) === "[object Object]";
  }
  function extend(e, t) {
    e = e || {};
    for (const r in t) e[r] = t[r];
    return e;
  }
  (lr.getCommonDataF = []),
    (lr.updateCookieF = []),
    (lr.initBF = []),
    (lr.initAF = []),
    (lr.getPrivateDataF = []),
    (lr.clickCBF = []),
    (lr.logOldF = []),
    (lr.data_version = "0.1"),
    (lr.refCls = "");
  const businessDomain = (function() {
    for (
      var e = ".jd.com",
        t = document.domain.toLowerCase(),
        r = ["jd.ru", "joybuy.com", "joybuy.es"],
        o = 0;
      o < r.length;
      o++
    ) {
      const i = r[o];
      if (t.substr(t.length - i.length) === i) {
        e = ".joybuy.com";
        break;
      }
    }
    return e;
  })();
  const isJoybuy = businessDomain === ".joybuy.com";
  function hasTransmitFunc() {
    return (
      !(!window.JDMAUnifyBridge || !window.JDMAUnifyBridge.JDMAGetMPageParam) ||
      !!window.JDMAGetMPageParam ||
      !!(
        window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.JDMASetMPageParam
      )
    );
  }
  function getPageParamFromSdk() {
    let t;
    let r;
    try {
      window.JDMAUnifyBridge && window.JDMAUnifyBridge.JDMAGetMPageParam
        ? (r = JDMAUnifyBridge.JDMAGetMPageParam())
        : window.JDMAGetMPageParam
        ? (r = JDMAGetMPageParam())
        : window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.JDMASetMPageParam &&
          (r = window.prompt("JDMAGetMPageParam", "")),
        r && (t = JSON.parse(r));
    } catch (e) {}
    return t;
  }
  function setPageParamForSdk(e) {
    window.JDMAUnifyBridge && window.JDMAUnifyBridge.JDMASetMPageParam
      ? JDMAUnifyBridge.JDMASetMPageParam(e)
      : window.JDMASetMPageParam
      ? JDMASetMPageParam(e)
      : window.webkit &&
        window.webkit.messageHandlers &&
        window.webkit.messageHandlers.JDMASetMPageParam &&
        window.webkit.messageHandlers.JDMASetMPageParam.postMessage(e);
  }
  const urlEncode = encodeURIComponent;
  var urlDecode = decodeURIComponent;
  const getOsInfo = function(e) {
    e = e || navigator.userAgent;
    for (
      var t = { os: "other", ver: "" },
        r = [
          ["android", /Android;?[\s\/]+([\d.]+)?/],
          ["android", /jdapp;android;[\d.]+;([\d.]+);/],
          ["android", /[aA]ndroid;/],
          ["ipad", /iPad;.*?OS\s([\d_]+)/],
          ["ipod", /iPod(?:\stouch)?;.*?\sOS\s([\d_]+)?/],
          ["iphone", /CPU\siPhone\s(?:OS\s)?([\d_]+)/],
          ["windows", /Windows NT/],
          ["mac", /Macintosh;.*?Mac OS X\s([\d._]+)/],
          ["windows phone", /Windows Phone\s([\d.]+)?/],
          ["symbianos", /SymbianOS\/([\d.]+)?/],
          ["bb", /BlackBerry|BB10|RIM Tablet OS\s([\d.]+)?/],
          ["linux", /linux/i]
        ],
        o = 0;
      o < r.length;
      o++
    ) {
      const i = r[o];
      const a = e.match(i[1]);
      if (a) {
        (t.os = i[0]), (t.ver = (a[1] || "").replace(/_/g, "."));
        break;
      }
    }
    return t;
  };
  const osInfo = getOsInfo();
  let a585;
  let a586;
  let a587;
  let a588;
  let a582;
  let a579;
  let a578;
  let a574;
  let a570;
  let a571;
  let a545;
  let a546;
  let a547;
  let a548;
  let a549;
  let a550;
  function isPrey(e) {
    if (e >= 100) return !0;
    const t = lr.uuid;
    const r = t.substr(t.length - 2);
    return !!r && 1 * r < e;
  }
  if (isWxapp()) {
    const cookie = getCookie(lr.ckWxAppCk);
    if (cookie) {
      const ckArray = cookie.split(".");
      ckArray.length >= 2 &&
        ((lr.wxAppUuid = ckArray[0]),
        (lr.wxAppSiteId = ckArray[1]),
        (lr.wxAppAppid = ckArray[2]),
        (lr.wxAppAppkey = ckArray[3]));
    }
    const url = document.location.href;
    const paramName = "wxappSeries";
    const begin = url.indexOf(`${paramName}=`);
    if (begin > -1 && begin + paramName.length + 1 < url.length - 1) {
      const end = url.indexOf("&", begin + paramName.length + 1);
      if (end === -1 || end > begin) {
        const seriesStr = decodeURIComponent(
          url.substring(
            begin + paramName.length + 1,
            end > -1 ? end : url.length
          )
        );
        let series = null;
        try {
          if (((series = JSON.parse(seriesStr)), series)) {
            if (
              ((lr.wxAppUuid = series.uuid),
              (lr.wxAppSiteId = series.std),
              (lr.wxAppAppid = series.appid),
              (lr.wxAppAppkey = series.appkey),
              lr.wxAppUuid || lr.wxAppSiteId)
            ) {
              const wxAppCk = [
                lr.wxAppUuid,
                lr.wxAppSiteId,
                lr.wxAppAppid,
                lr.wxAppAppkey
              ];
              setCookie(
                lr.ckWxAppCk,
                wxAppCk.join("."),
                lr.ckDomain,
                lr.ckWxAppCkExp
              );
            }
            (series.vts || series.seq) &&
              (lr.wxAppSidSeq = `${series.vts}.${series.seq}`);
          }
        } catch (e) {}
      }
    }
  }
  function compare(e, t) {
    const r = e.split(".");
    const o = t.split(".");
    const i = parseFloat(r[0]);
    const a = parseFloat(r[1]);
    const n = parseFloat(o[0]);
    const d = parseFloat(o[1]);
    return i > n ? e : i === n && a >= d ? e : t;
  }
  function compareAndUpdateCookie(e, t) {
    let r;
    let o;
    if (getCookie(lr.ckmba_sid)) r = getCookie(lr.ckmba_sid);
    else {
      const i = getCookie(lr.ckmba_muid).split(".");
      if (i.length === 3) {
        const a = i[1];
        const n = parseInt(i[2]);
        r =
          new Date().getTime() - n > lr.ckmba_sidExp
            ? [1 * a + 1, 0].join(".")
            : [a, 0].join(".");
      } else r = "1.0";
    }
    (o = compare(e, r)),
      (lr._mbaSidSeq[0] = o.split(".")[0]),
      (lr._mbaSidSeq[1] =
        1 * (o.split(".")[1] ? o.split(".")[1] : 0) + (t ? 1 : 0)),
      (lr._mbaMuidSeq[1] = lr._mbaSidSeq[0]),
      (lr._mbaMuidSeq[2] = new Date().getTime()),
      setCookie(
        lr.ckmba_sid,
        encodeURI(lr._mbaSidSeq.join(".")),
        lr.ckDomain,
        lr.ckmba_sidExp
      ),
      setCookie(
        lr.ckmba_muid,
        encodeURI(lr._mbaMuidSeq.join(".")),
        lr.ckDomain,
        lr.ckmba_muidExp
      );
  }
  function updateEMSid(e) {
    let t;
    const r = /(?:^|;)pv\/(.+?)(?:;|$)/;
    const o = navigator.userAgent.match(r);
    if (o) {
      if (((t = o[1]), lr.EmbeddedUA)) {
        const i = lr.EmbeddedUA.match(r);
        i && (t = compare(t, i[1]));
      }
    } else t = "1.0";
    compareAndUpdateCookie(t, e);
  }
  function updateWxappSid(e) {
    let t = (lr.wxAppSidSeq || "").split(".");
    t.length === 2
      ? ((t[0] = parseInt(t[0])), (t[1] = parseInt(t[1])))
      : (t = [1, 0]),
      compareAndUpdateCookie(t.join("."), e);
  }
  function updateMSid(e) {
    isEmbedded()
      ? updateEMSid(e)
      : isWxapp()
      ? updateWxappSid(e)
      : (getCookie(lr.ckmba_sid)
          ? ((lr._mbaSidSeq = getCookie(lr.ckmba_sid).split(".")),
            (lr._mbaSidSeq[1] =
              1 * (lr._mbaSidSeq[1] === undefined ? 1 : lr._mbaSidSeq[1]) +
              (e ? 1 : 0)))
          : ((lr._mbaSidSeq[0] = `${new Date().getTime()}${parseInt(
              1e16 * Math.random()
            )}`),
            (lr._mbaSidSeq[1] = e ? 1 : 0)),
        setCookie(
          lr.ckmba_sid,
          encodeURI(lr._mbaSidSeq.join(".")),
          lr.ckDomain,
          lr.ckmba_sidExp
        ));
  }
  function updateMuid() {
    getCookie(lr.ckmba_muid)
      ? (lr._mbaMuidSeq[0] = getCookie(lr.ckmba_muid).split(".")[0])
      : (lr._mbaMuidSeq[0] = `${lr.uuid}`),
      setCookie(
        lr.ckmba_muid,
        encodeURI(lr._mbaMuidSeq.join(".")),
        lr.ckDomain,
        lr.ckmba_muidExp
      );
  }
  function getMSidSeq() {
    let e;
    updateMSid(), (e = (lr._mbaSidSeq || []).slice(0));
    for (let t = 0; t < e.length; t++) e[t] = `${e[t]}`;
    return e;
  }
  function getReservedCookies() {
    for (
      var e = [
          lr.ckJda,
          lr.ckJdv,
          lr.ckJdb,
          lr.ckJdu,
          lr.ckJdb,
          "mu_subsite",
          "mt_xid",
          "unpl"
        ],
        t = [],
        r = 0,
        o = e.length;
      r < o;
      r++
    )
      t.push(getCookie(e[r]));
    return t.join("_").replace(/\|/g, "_");
  }
  function getMuid() {
    return updateMuid(), lr._mbaMuidSeq[0];
  }
  function updateMFLSeries(e) {
    if (isEmbedded()) {
      const t = e.event_id;
      const r = e.event_level || (t && lr.MPEventsMap[t]);
      r &&
        ((lr.eventSeries.event_id = t),
        (lr.eventSeries.event_level = parseInt(r)),
        (lr.eventSeries.event_param = e.event_param),
        (lr.eventSeries.page_name = e.page_name),
        (lr.eventSeries.page_param = e.page_param));
    }
  }
  function keysMap(e) {
    const t = { client: "cli", channel: "chf" };
    return t[e] ? t[e] : e;
  }
  function quickClick(e, t) {
    let r = !0;
    return (
      isWX() && (r = !1),
      typeof window.ontouchstart == "undefined" || r
        ? (e.addEventListener(
            "click",
            function(e) {
              t(e);
            },
            !1
          ),
          !0)
        : new QuickClick(e, t)
    );
  }
  function QuickClick(e, t) {
    this.opts = {
      trackingClick: !1,
      trackingClickStart: 0,
      targetElement: null,
      touchStartX: 0,
      touchStartY: 0,
      touchBoundary: 10,
      tapDelay: 200,
      tapTimeout: 700,
      lastClickTime: 0,
      touchPos: {},
      callback: t
    };
    for (
      let r = ["onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
        o = 0,
        i = r.length;
      o < i;
      o++
    )
      this[r[o]] = bind(this[r[o]], this);
    e.addEventListener("touchstart", this.onTouchStart, !1),
      e.addEventListener("touchmove", this.onTouchMove, !1),
      e.addEventListener("touchend", this.onTouchEnd, !1),
      e.addEventListener("touchcancel", this.onTouchCancel, !1);
  }
  function bind(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  if (
    (lr.getCommonDataF.push(function(e, t) {
      let r;
      const o = {
        IOS_M: { UAname: "iPhone", value: "IOS-M" },
        ANDROID_M: { UAname: "android", value: "ANDROID-M" },
        IPAD_M: { UAname: "iPad", value: "iPad-M" },
        MICRO_M: { UAname: "MicroMessenger", value: "WEIXIN-M" },
        MM: { UAname: "MM", value: "M-M" }
      };
      const i = navigator.userAgent;
      let a = [];
      isJdLog()
        ? ((a = i.split(";"))[2].toLowerCase() === o.IOS_M.UAname.toLowerCase()
            ? (t.cli = o.IOS_M.value)
            : a[2].toLowerCase() === o.ANDROID_M.UAname.toLowerCase()
            ? (t.cli = o.ANDROID_M.value)
            : a[2].toLowerCase() === o.IPAD_M.UAname.toLowerCase() &&
              (t.cli = o.IPAD_M.value),
          (lr.appv = a[3]),
          (t.osv = a[4]),
          (t.uid = a[5]))
        : isEmbedded()
        ? ((a = i.split(";"))[1].toLowerCase() === o.IOS_M.UAname.toLowerCase()
            ? (t.cli = o.IOS_M.value)
            : a[1].toLowerCase() === o.ANDROID_M.UAname.toLowerCase()
            ? (t.cli = o.ANDROID_M.value)
            : a[1].toLowerCase() === o.IPAD_M.UAname.toLowerCase() &&
              (t.cli = o.IPAD_M.value),
          (lr.appv = a[2]),
          (t.osv = a[3]),
          (t.uid = a[4]))
        : i.indexOf(o.MICRO_M.UAname) > -1
        ? (t.cli = o.MICRO_M.value)
        : (t.cli = o.MM.value);
      for (r in lr.commonData)
        lr.commonData[r] && r !== "page_id" && (t[r] = lr.commonData[r]);
      (t.biz = lr.Biz),
        (t.mba_muid = lr._mbaMuidSeq[0]),
        (t.mba_sid = lr._mbaSidSeq[0]),
        (t.proj_id = "3"),
        (t.reserved3 = getReservedCookies()),
        (t.osp = lr.os),
        lr.uid && (t.uid = lr.uid);
    }),
    (QuickClick.prototype.onTouchStart = function(e) {
      let t;
      const r = this.opts;
      return (
        e.targetTouches.length > 1 ||
        ((r.trackingClick = !0),
        (r.trackingClickStart = e.timeStamp),
        (r.targetElement = e.target),
        (t = e.targetTouches[0]),
        (r.touchPos = t),
        (r.touchStartX = t.pageX),
        (r.touchStartY = t.pageY),
        !0)
      );
    }),
    (QuickClick.prototype.touchHasMoved = function(e) {
      const t = e.changedTouches[0];
      const r = this.opts;
      const o = r.touchBoundary;
      return (
        Math.abs(t.pageX - r.touchStartX) > o ||
        Math.abs(t.pageY - r.touchStartY) > o
      );
    }),
    (QuickClick.prototype.onTouchMove = function(e) {
      const t = this.opts;
      return (
        !t.trackingClick ||
        ((t.targetElement !== e.target || this.touchHasMoved(e)) &&
          ((t.trackingClick = !1), (t.targetElement = null)),
        !0)
      );
    }),
    (QuickClick.prototype.onTouchEnd = function(e) {
      const t = this.opts;
      return (
        !t.trackingClick ||
        e.timeStamp - t.lastClickTime < t.tapDelay ||
        e.timeStamp - t.trackingClickStart > t.tapTimeout ||
        ((e.clientX = 0 | t.touchPos.clientX),
        (e.clientY = 0 | t.touchPos.clientY),
        (e.pageX = 0 | t.touchPos.pageX),
        (e.pageY = 0 | t.touchPos.pageY),
        t.callback(e),
        (t.lastClickTime = e.timeStamp),
        (t.trackingClick = !1),
        (t.trackingClickStart = 0),
        !1)
      );
    }),
    (QuickClick.prototype.onTouchCancel = function() {
      (this.opts.trackingClick = !1), (this.opts.targetElement = null);
    }),
    lr.initBF.push(function() {
      (lr.siteId = lr.siteId || "MO-J2011-1"), (lr.jvr = "3.0.5");
    }),
    lr.initAF.push(function() {
      (lr.ckmba_sid = "mba_sid"),
        (lr.ckmba_muid = "mba_muid"),
        (lr.ckmba_sidExp = 18e5),
        (lr.ckmba_muidExp = 15552e6),
        (lr._mbaMuidSeq = []),
        (lr._mbaSidSeq = []),
        (lr.eventSeries = {}),
        (lr.ProjectId = "3"),
        (lr.Biz = "mba"),
        (lr.md5Key = "5YT%aC89$22OI@pQ"),
        (lr.autoLogPv = lr.autoLogPv || !1),
        (lr.commonData = { page_id: "", cli: "", chf: "" });
    }),
    (function() {
      let e;
      const t = window.screen;
      const r = window.navigator;
      if (typeof jap == "object") {
        jap.noConflict && (jap.noConflict = JA);
        for (e in jap) jap.hasOwnProperty(e) && (lr[e] = jap[e]);
      }
      if (typeof jaq != "undefined" && jaq instanceof Array)
        for (e = 0; e < jaq.length; e++)
          jaq[e][0] === "account" && (lr.siteId = jaq[e][1]);
      for (
        (function() {
          let e = "";
          if (document.currentScript) e = document.currentScript.src;
          else if (document.scripts) {
            let t;
            for (t = 0; t < document.scripts.length; t++)
              if (document.scripts[t].readyState === "interactive") {
                e = document.scripts[t].src;
                break;
              }
          }
          e.match("/wl.js")
            ? (JA.isWl = !0)
            : e.match("/joya.js")
            ? (JA.isJoya = !0)
            : e.match("/ja.js")
            ? (JA.isJa = !0)
            : e.toLowerCase().match("/mping.min.js") && (JA.isMping = !0);
        })(),
          e = 0;
        e < lr.initBF.length;
        e++
      )
        lr.initBF[e]();
      (lr.isWQ = lr.isWQ || 0),
        (lr.rpDomain =
          lr.rpDomain || (lr.isWQ == "1" ? "rockets.jd.com" : "uranus.jd.com")),
        (lr.logUrl = `//${lr.rpDomain}/log/m`),
        (lr.logType = {
          pv: "1",
          pf: "2",
          cl: "3",
          od: "4",
          pd: "5",
          hm: "6",
          magic: "000001"
        }),
        lr.noConflict || (window.JA = JA),
        lr.useTmpCookie
          ? ((lr.ckJda = "__tra"),
            (lr.ckJdb = "__trb"),
            (lr.ckJdc = "__trc"),
            (lr.ckJdu = "__tru"))
          : ((lr.ckJda = "__jda"),
            (lr.ckJdb = "__jdb"),
            (lr.ckJdc = "__jdc"),
            (lr.ckJdu = "__jdu")),
        (lr.ckJdv = "__jdv"),
        (lr.ckWxAppCk = "__jdwxapp"),
        (lr.ckRefCls = "__jd_ref_cls"),
        (lr.ckJdaExp = 15552e6),
        (lr.ckJdbExp = 18e5),
        (lr.ckJduExp = 15552e6),
        (lr.ckJdvExp = 1296e6),
        (lr.ckJdvEmbeddedExp = 864e5),
        (lr.ckWxAppCkExp = 15552e6),
        (lr.mtSubsiteExp = 31536e6),
        (lr.skuId = lr.skuid || lr.skuId || getSkuid()),
        (lr.shopId = lr.shopid || lr.shopId || getShopid()),
        (lr.orderId = lr.orderid || lr.orderId || getOrderid()),
        (lr.flash_ver = flashChecker()),
        (lr.resolution = window.screen
          ? `${window.screen.width}x${window.screen.height}`
          : "-"),
        (lr.color = t ? `${t.colorDepth}-bit` : ""),
        (lr.language = (
          (r && (r.language || r.browserLanguage)) ||
          ""
        ).toLowerCase()),
        (lr.javaEnabled = r && r.javaEnabled() ? 1 : 0),
        (lr.characterSet = document.characterSet || document.charset || ""),
        (lr.topic = lr.topic || "traffic-jdm"),
        (lr.pinId = getCookie("pinId") || getCookie("pinid") || ""),
        (lr.account && lr.account !== "-") ||
          (lr.pin
            ? (lr.account = lr.pin)
            : JA.isMping
            ? (lr.account = getCookie("pwdt_id") || getCookie("pt_pin"))
            : (lr.account = getCookie("pin")),
          (lr.account = lr.account || "-")),
        (lr.ckDomain = document.domain.replace(/.*?(\w+\.\w+)$/, "$1")),
        (lr.title = document.title),
        (lr.refUrl = document.referrer),
        (lr.curUrl = document.location.href),
        (lr.browser = getBrowserInfo()),
        (lr.os = osInfo.os),
        (lr.jdpts = typeof jdpts != "undefined" ? jdpts : {}),
        (lr.seo = [
          "i.easou.com:q",
          "m.baidu.com:word",
          "m.sm.cn:q",
          "m.so.com:q",
          "wap.sogou.com:keyword",
          "m.sogou.com:keyword",
          "wap.sogo.com:keyword",
          "m.sogo.com:keyword",
          "page.roboo.com:q",
          "ask.com:q",
          "baidu:word",
          "baidu:wd",
          "bing:q",
          "easou:q",
          "google:q",
          "roboo:word",
          "roboo:q",
          "sm.cn:q",
          "so.com:q",
          "sogou:keyword",
          "sogou:query",
          "sogo.com:keyword",
          "sogo.com:query",
          "yahoo:p",
          "yandex:text",
          "yicha:key"
        ]),
        (lr.codeVer = "0.1"),
        (lr.clickEvent = "touchstart" in window ? "touchstart" : "click"),
        (lr.clickType = { Clstag: 1, Jtag: 2 }),
        lr.adsCookieName && (lr.ads = getCookie(lr.adsCookieName)),
        (lr.getRequest = !1);
      for (e = 0; e < lr.initAF.length; e++) lr.initAF[e]();
      (lr.PPRD_PCCookieName = lr.PPRD_PCCookieName || "__jd_PPRD_P"),
        (lr.rvurlCookieName = lr.rvurlCookieName || "__jd_rvurl");
    })(),
    lr.updateCookieF.push(function() {
      updateMuid(), updateMSid(!0);
    }),
    (function() {
      let e;
      let t;
      let r;
      let o;
      const i = (getCookie(lr.ckJda) || "").split(".");
      const a = (getCookie(lr.ckJdb) || "").split(".");
      const n = (getCookie(lr.ckJdv) || "").split("|");
      const d = getCookie(lr.ckJdc) || "";
      let l = parseInt(new Date().getTime() / 1e3);
      let c = 0;
      let s = 1;
      let u = "direct";
      let p = "-";
      let g = "none";
      let m = "-";
      if (i.length > 3)
        for (var _ = 2; _ < 5 && _ < i.length; _++) {
          const h = i[_];
          h.length > 10 && (i[_] = h.substr(0, 10));
        }
      i.length > 5
        ? ((r = i[0]),
          (o = i[1]),
          (e = parseInt(i[2], 10)),
          (t = parseInt(i[3], 10)),
          (l = parseInt(i[4], 10)),
          (s = parseInt(i[5], 10) || s))
        : ((o = genUuid()), (e = l), (t = l)),
        (lr.uuid = o),
        a.length > 3 && (r || (r = a[0]), (c = parseInt(a[1], 10) || 0)),
        n.length > 4 &&
          (r || (r = n[0]), (u = n[1]), (p = n[2]), (g = n[3]), (m = n[4])),
        d && d !== "" && (r || (r = d));
      let f;
      const M = [];
      const S = a.length < 4;
      const w = getParameter("utm_source");
      let v = !1;
      if (w) {
        const P = getParameter("utm_campaign");
        const y = getParameter("utm_medium");
        const C = getParameter("utm_term");
        M.push(w || u),
          M.push(P || p),
          M.push(y || g),
          M.push(C || m),
          (m = M[3]),
          (v = !0);
      } else {
        let k;
        const b = lr.refUrl && lr.refUrl.split("/")[2];
        let T = !1;
        if (b && b.indexOf(lr.ckDomain) < 0) {
          for (k = lr.seo, _ = 0; _ < k.length; _++) {
            const A = k[_].split(":");
            if (
              b.indexOf(A[0].toLowerCase()) > -1 &&
              lr.refUrl.indexOf(`${A[1]}=`.toLowerCase()) > -1
            ) {
              let D = getParameter(A[1], lr.refUrl);
              /* eslint-disable no-control-regex */
              /[^\x00-\xff]/.test(D) && (D = encodeURIComponent(D)),
                M.push(A[0]),
                M.push("-"),
                M.push("organic"),
                M.push(D || "not set"),
                (m = M[3]),
                (T = !0);
              break;
            }
          }
          T ||
            (b.indexOf("zol.com.cn") > -1
              ? (M.push("zol.com.cn"),
                M.push("-"),
                M.push("cpc"),
                M.push("not set"))
              : (M.push(b), M.push("-"), M.push("referral"), M.push("-")));
        }
      }
      if (lr.isWQ == 1 && (M.length === 0 || M[0] === "direct")) {
        const x = (function() {
          const e = {
            17007: ["direct", "weixin", "t_1000072660_17007_001"],
            17003: ["direct", "weixin", "t_1000072661_17003_001"],
            17020: ["direct", "weixin", "t_1000072661_17003_001"],
            17005: ["weixin", "weixin", "t_1000072662_17005_001"],
            17048: ["weixin", "weixin", "t_1000072663_17048_001"],
            17012: ["direct", "shouq", "t_1000072675_17012_001"],
            17008: ["direct", "shouq", "t_1000072676_17008_001"],
            17006: ["shouq", "shouq", "t_1000072677_17006_001"],
            17064: ["shouq", "shouq", "t_1000072647_17064_001"],
            17036: ["weixin", "weixin", "t_1000072670_17036_001"],
            17060: ["weixin", "weixin", "t_1000072670_17036_001"],
            17027: ["shouq", "shouq", "t_1000072641_17027_001"],
            17050: ["shouq", "shouq", "t_1000072643_17050_001"]
          };
          const t = getUrlParam("ptag") || getUrlParam("PTAG");
          const r = getUrlParam("mp_channel");
          const o = getUrlParam("mp_sourceid");
          let i = null;
          if (t) {
            const a = /(\d+)\.(\d+)\.(\d+)/gi.exec(t);
            a && a[1] && e[a[1]] && (i = e[a[1]]);
          } else (r || o) && (i = e[17064]);
          return i;
        })();
        x && x.length && ((M[0] = x[0]), (M[1] = x[1]), (M[2] = x[2]));
      }
      (f =
        M.length > 0 &&
        (M[0] !== u || M[1] !== p || M[2] !== g) &&
        M[2] !== "referral"),
        S || (!S && f)
          ? ((u = M[0] || u),
            (p = M[1] || p),
            (g = M[2] || g),
            (m = M[3] || m),
            i.length > 5
              ? ((e = parseInt(i[2], 10)),
                (t = parseInt(i[4], 10)),
                (l = parseInt(new Date().getTime() / 1e3)),
                s++,
                (c = 1))
              : ((s = 1), (c = 1)))
          : c++;
      const O = getPageParamFromSdk();
      if (O && O.vts) {
        const I = 1 * O.vts;
        const J = 1 * O.seq;
        (I > s || (I === s && J >= c)) && ((s = I), (c = J + 1));
      }
      if (
        (r || (r = getHashDomain()),
        setCookie(
          lr.ckJda,
          [r, o, e, t, l, s || 1].join("."),
          lr.ckDomain,
          lr.ckJdaExp
        ),
        setCookie(
          lr.ckJdb,
          [r, c, `${o}|${s}`, l].join("."),
          lr.ckDomain,
          lr.ckJdbExp
        ),
        v || f || n.length < 5)
      ) {
        let B = [
          r,
          u || "direct",
          p || "-",
          g || "none",
          m || "-",
          new Date().getTime()
        ].join("|");
        setJdv((B = urlEncode(B)), r);
      }
      for (
        setCookie(lr.ckJdc, r, lr.ckDomain),
          lr.utm_source = u,
          lr.utm_campaign = p,
          lr.utm_medium = g,
          lr.utm_term = m,
          lr.sequenceNum = c,
          lr.firSesTime = e,
          lr.preSesTime = t,
          lr.curSesTime = l,
          lr.visitTimes = s,
          lr.hashDomain = r,
          _ = 0;
        _ < lr.updateCookieF.length;
        _++
      )
        lr.updateCookieF[_]();
    })(),
    lr.getPrivateDataF.push(function(t, r) {
      if (t.logType === lr.logType.od)
        (r.mba_seq = String(lr._mbaSidSeq[1])),
          (r.prod_id = String(t.prod_id)),
          lr.appv && (r.apv = lr.appv);
      else if ((lr.appv && (r.apv = lr.appv), t.logType === lr.logType.pv)) {
        r.mba_seq = String(lr._mbaSidSeq[1]);
        try {
          const o = new Date();
          (r.mba_finger = String(window.getFingerprint())),
            (r.fpstime = fingerprintScriptTime),
            (r.fpftime = new Date() - o);
        } catch (e) {}
        lr.preSession && (r.psn = lr.preSession),
          lr.preSeqnum && (r.psq = lr.preSeqnum);
      } else
        t.logType === lr.logType.cl
          ? ((r.mba_seq = String(lr._mbaSidSeq[1])),
            (r.event_id = t.event_id),
            t.event_param && (r.event_param = t.event_param),
            t.event_level && (r.event_level = t.event_level))
          : t.logType === lr.logType.hm || (t.logType, lr.logType.pd);
      if (
        (lr.commonData.page_id && (r.page_id = lr.commonData.page_id),
        t.request)
      ) {
        let i;
        const a = t.request;
        for (i in a)
          typeof a[i] != "function" &&
            a[i] !== t &&
            (r[i] = a[i] ? `${a[i]}` : "");
      }
      isEmbedded() &&
        ((r.pv_sid = String(lr._mbaSidSeq[0])),
        (r.pv_seq = String(lr._mbaSidSeq[1])));
    }),
    lr.isWQ == 1 || (lr.isWQ == 2 && isPrey(100)))
  ) {
    const getTpc = function(e) {
      let t = "";
      return (
        e.logType === lr.logType.pv
          ? (t = "wg_wx.000000")
          : e.logType === lr.logType.cl && (t = "wg_wx.000001"),
        e.request && (e.request.t || e.request.hitType)
          ? (t = e.request.t || e.request.hitType)
          : e.pdsvj &&
            e.pdsvj.p0 &&
            e.pdsvj.p0.hitType &&
            (t = e.pdsvj.p0.hitType),
        t === "user_share" && (t = "wg_wx.000007"),
        t
      );
    };
    const isItemPage =
      ((a545 = /(\/\/wq\.jd\.(com|hk)\/m?item\/view|\/\/wqs\.jd\.com\/app\/item\/style10\/detail\.shtml)/.test(
        location.href
      )),
      (a546 = /\/\/wqm?item\.jd\.(hk|com)\/m?item\/(ad)?view/.test(
        location.href
      )),
      (a547 = /\/\/wqs\.jd\.com\/qiangbao\/detail/.test(location.href)),
      (a548 = /\/\/wqs\.jd\.com\/my\/pingou\/buy\.shtml/.test(location.href)),
      (a549 = /\/\/wqs\.jd\.com\/pingou\/item\.shtml/.test(location.href)),
      (a550 = location.href.indexOf("isTestItemPage=1") > -1),
      a545 || a546 || a547 || a548 || a549 || a550);
    let load_sec;
    const calcLoadTime = function() {
      if (
        window.JD &&
        window.JD.GLOBAL_CONFIG &&
        window.JD.GLOBAL_CONFIG.NOW &&
        !load_sec
      ) {
        const e = window.JD.GLOBAL_CONFIG.NOW.getTime();
        const t = new Date().getTime();
        load_sec = t - e;
      }
      return load_sec || 1;
    };
    const channelType = (function() {
      const e = navigator.userAgent.toLowerCase();
      let t = "mobile";
      const r = {
        wxwork: /wxwork/gi,
        weixin: /micromessenger/gi,
        qq: /qq\/([\d\.]+)*/gi,
        jdapp: /jdapp/gi,
        skapp: /skapp/gi,
        jzyc: /jzyc\/\d\.\d/gi,
        jxj: /jxj\/([.\d])*/gi,
        jdjr: /jdjr/gi
      };
      for (const o in r)
        if (r[o].test(e)) {
          t = o;
          break;
        }
      const i = document.domain;
      t === "jdapp" ||
        t === "skapp" ||
        (getUrlParam("sceneval") != 2 &&
          i != "shop.m.jd.com" &&
          i != "coupon.m.jd.com" &&
          i != "s.m.jd.com" &&
          i != "so.m.jd.com" &&
          i != "p.m.jd.com" &&
          i != "home.m.jd.com" &&
          i != "item.m.jd.com" &&
          i != "m.yiyaojd.com" &&
          i != "mitem.jd.hk" &&
          i != "mitem.jdworldwide.com") ||
        (t = "jdmobile");
      const a = getCookie("wxapp_type");
      const n = getUrlParam("wxappver");
      (isWxapp() || a || n) && (t = "xcx");
      const d = location.hostname + location.pathname || "";
      d && d.indexOf("wqs.jd.com/dataproduct") !== -1 && (t = "gx");
      const l = getCookie("source") || "";
      return /^3_[0-9]+$/.test(l) && (t = "kpl"), t;
    })();
    var chanType =
      {
        weixin: 1,
        qq: 2,
        mobile: 3,
        jzyc: 4,
        jdapp: 6,
        jdmobile: 7,
        wxwork: 8,
        xcx: 5,
        jdjr: 9,
        kpl: 10,
        skapp: 11,
        gx: 22
      }[channelType] || 3;
    var netType =
      ((a570 = getCookie("network")),
      (a571 = 99),
      /wifi/i.test(a570)
        ? (a571 = 1)
        : /4g|3g+/i.test(a570)
        ? (a571 = 4)
        : /3g/i.test(a570)
        ? (a571 = 3)
        : /2g/i.test(a570) && (a571 = 2),
      a571);
    const sessionrefer =
      ((a574 = ""),
      window.sessionStorage &&
        sessionStorage.getItem("refer") &&
        ((a574 = sessionStorage.getItem("refer")),
        sessionStorage.removeItem("refer")),
      a574);
    var openId =
      ((a578 = channelType == "weixin" ? "open_id" : "sq_open_id"),
      window.localStorage &&
        (a579 = localStorage.getItem(`_tj_${a578}`) || getCookie(a578) || ""),
      a579 && localStorage.setItem(`_tj_${a578}`, a579),
      a579 || "");
    const wqOsInfo =
      ((a582 = osInfo.os),
      a582 === "android" ||
      a582 === "iphone" ||
      a582 === "ipad" ||
      a582 === "ipod"
        ? osInfo
        : { os: "other", ver: "" });
    const wqSid =
      ((a585 = (a585 = getCookie("__wga")) ? a585.split(".") : []),
      (a586 = new Date().getTime()),
      (a587 = a585[0] && a586 - a585[0] <= 18e5),
      (a588 = a585[5] ? (a587 ? a585[5] : 1 * a585[5] + 1) : 1),
      `${getCookie("visitkey")}|${a588}`);
    const initPvData = function(e, t) {
      if (isItemPage || (t.sku_id && t.sku_id > 0)) {
        setPPRD_PValue("LOGID", logid);
        const r = getCookie("wq_logid") || "";
        if (((t.wq_logid = r), (t.is_item = 1), !window.__logid)) {
          window.__logid = logid;
          const o = window._itemDetail || window._itemDeatail;
          o && o.setShareConfig();
        }
      }
      window._SHOP_DATA && (t.vender_id = window._SHOP_DATA.venderId);
      const i = getCookie(lr.rvurlCookieName);
      if ((i && (t.rvurl = i), t.vurl)) {
        const a = /[&?]ptag=([^&#]*)/gi.exec(t.vurl);
        a && (t.ptag = a[1]),
          (t.vurl =
            window.location.protocol + t.vurl.replace(/^http[s]{0,1}\:/, "")),
          setCookie(
            lr.rvurlCookieName,
            encodeURIComponent(t.vurl),
            lr.ckDomain,
            18e5
          ),
          (vurl = t.vurl);
      }
      vurl || delCookie(lr.rvurlCookieName, "/", lr.ckDomain),
        t.ptag && setCookiePtag(t.ptag),
        (t.cookie_ptag = getCookiePtag()),
        (t.ldt = calcLoadTime());
      const n = (getCookie(lr.ckJda) || "").split(".");
      n && n.length > 2 && setPPRD_PValue("UUID", n[1]);
    };
    var logid = getLogid();
    let pvCount = 0;
    let vurl;
    lr.getPrivateDataF.push(function(e, t) {
      if (e.logType !== lr.logType.magic) {
        if (
          (pvCount > 0 && (logid = getLogid()),
          (t.t = getTpc(e)),
          e.logType === lr.logType.pv)
        )
          pvCount++, initPvData(e, t);
        else if (e.logType === lr.logType.cl)
          t.ptag && ((t.target = t.ptag), delete t.ptag),
            (t.cookie_ptag = getCookiePtag()),
            (vurl || window._vurl) && (t.vurl = vurl || window._vurl);
        else if (e.topic === "exp_log.100000" && e.logType === lr.logType.pd) {
          let r = {};
          t.sfj && t.sfj.p0 && ((r = t.sfj.p0), delete t.sfj.p0.hitType),
            (t.t !== "wg_wx.000002" &&
              t.t !== "wg_wx.000003" &&
              t.t !== "wg_wx.000004") ||
              (t.cookie_ptag = getCookiePtag()),
            t.t == "wg_wx.000005" && r.action == 1 && (t.nextPageReport = !0),
            t.t == "wg_wx.000003" &&
              (r.ptag && ((t.target = r.ptag), delete r.ptag),
              (vurl || window._vurl) && (t.vurl = vurl || window._vurl));
        }
        delete t.hitType,
          (t.logid = logid),
          (t.chan_type = chanType),
          (t.net_type = netType),
          (t.wq_refer =
            document.referrer || getUrlParam("wdref") || sessionrefer),
          (t.buy_uin = getCookie("buy_uin") || ""),
          (t.wq_unionid = getCookie("wq_unionid") || ""),
          (t.ptag_uuid = getPPRD_PValue("UUID") || ""),
          (t.openid = openId),
          t.t !== "wg_wx.000002" && (t.device_type = wqOsInfo.os),
          (t.wxapp_type = getCookie("wxapp_type") || ""),
          (t.is_wq = lr.isWQ || 0),
          (t.wxapp_uuid = getCookie("wxapp_uuid") || ""),
          (t.user_type_gx =
            (window.localStorage && localStorage.getItem("accountType")) || ""),
          (t.wq_sid = wqSid),
          (t.wq_os = `${wqOsInfo.os}/${wqOsInfo.ver}`);
      }
    });
  }
  function logByGet(e, t, r) {
    const o = encodeURIComponent(JSON.stringify(t));
    const i = `${(document.location.protocol === "https:"
      ? "https:"
      : "http:") + e}&data=${o}`;
    let a = new Image(1, 1);
    (a.onload = function() {
      (a.onload = null), (a = null), r && r();
    }),
      (a.src = i);
  }
  function logByPost(e, t, r) {
    let o = new window.XMLHttpRequest();
    o.open(
      "POST",
      (document.location.protocol === "https:" ? "https:" : "http:") + e,
      !0
    ),
      o.setRequestHeader("Content-Type", "text/plain"),
      (o.timeout = r ? 200 : 1e4),
      (o.onreadystatechange = function() {
        o.readyState === 4 && (r && r(), (o = null));
      }),
      o.send(JSON.stringify(t));
  }
  function logCmd(t) {
    if (t && !isSpider()) {
      let r;
      const o = getCommonData(t);
      const i = {};
      (o.data = []),
        lr.anchorpvflag &&
          t.logType === lr.logType.pv &&
          lr.curUrl !== document.location.href &&
          ((lr.refUrl = lr.curUrl), (lr.curUrl = document.location.href));
      let a = getSeparatedUrl(lr.refUrl);
      a[0] && (i.ref = a[0]), a[1] && (i.rpr = a[1]), (i.ctm = getCurTime());
      const n = getCookie("pwdt_id") || getCookie("pin") || getCookie("pt_pin");
      lr.account && lr.account !== "-"
        ? (i.pin = lr.account)
        : n && (i.pin = n),
        lr.pinId && (i.pid = lr.pinId),
        (a = getSeparatedUrl(lr.curUrl)),
        (i.ctp = t.page_name || a[0]),
        (i.par = t.page_param || a[1]);
      const d = getJdv();
      (i.usc = d.source),
        (i.umd = d.medium),
        (i.utr = d.term),
        (i.ucp = d.campaign),
        (i.jdv = d.jdv),
        (i.vts = lr.visitTimes),
        (i.seq = lr.sequenceNum),
        lr.adsCookieName && (i.adk = lr.adsCookieName),
        lr.ads && (i.ads = lr.ads),
        lr.jdpts &&
          lr.jdpts._st &&
          (i.ldt = new Date().valueOf() - lr.jdpts._st),
        (i.browser_ver = lr.browser.version),
        (i.browser = lr.browser.name),
        (i.fst = lr.firSesTime),
        (i.pst = lr.preSesTime),
        (i.vct = lr.curSesTime),
        (i.clr = lr.color),
        (i.bsl = lr.language),
        (i.bsc = lr.characterSet),
        (i.jav = lr.javaEnabled),
        (i.flv = lr.flash_ver),
        (i.tit = lr.title),
        (i.hash = encodeURIComponent(document.location.hash) || ""),
        (i.tad = document.cookie ? "1" : "0"),
        (i.dataver = lr.data_version),
        getCookie("_mjdcl") && (i.mjdcl = getCookie("_mjdcl")),
        lr.rpd && (i.rpd = lr.rpd),
        lr.app_device && (i.app_device = lr.app_device),
        lr.pre_app && (i.pap = lr.pre_app);
      const l = getParameter("wjfrom") || "";
      const c = getParameter("wjwxpubid") || "";
      const s = getParameter("wjunionid") || "";
      const u = getParameter("wjopenid") || "";
      if (
        ((l || c || s || u) &&
          ((i.wjfrom = l),
          (i.wjwxpubid = c),
          (i.wjunionid = s),
          (i.wjopenid = u)),
        lr.wxAppUuid && (i.wxapp_uuid = lr.wxAppUuid),
        lr.wxAppSiteId && (i.wxapp_siteid = lr.wxAppSiteId),
        lr.wxAppAppid && (i.wxapp_appid = lr.wxAppAppid),
        lr.wxAppAppkey && (i.wxapp_appkey = lr.wxAppAppkey),
        t.logType === lr.logType.pv)
      ) {
        (i.typ = "pv"),
          (i.lgt = "pv"),
          lr.skuId && (i.sku = lr.skuId),
          lr.orderId && (i.ord = lr.orderId),
          lr.shopId && (i.shp = lr.shopId),
          (i.ext = lr.extParams);
        const p = getCookie(lr.ckRefCls);
        const g = lr.refCls || p;
        p && setCookie(lr.ckRefCls, "", lr.ckDomain, -1e4),
          g && (i.ref_cls = g);
      } else if (t.logType === lr.logType.cl) {
        (i.typ = "cl"),
          (i.lgt = "cl"),
          (i.tar = t.tarUrl || ""),
          t.cls && (i.cls = t.cls),
          (lr.refCls = t.event_id || t.cls || ""),
          setCookie(lr.ckRefCls, encodeURIComponent(lr.refCls), lr.ckDomain);
        try {
          setPageParamForSdk(MPing.EventSeries.getSeries());
        } catch (e) {}
      } else
        t.logType === lr.logType.hm
          ? ((i.typ = "sr"),
            (i.lts = "hm"),
            (i.lgt = "hm"),
            t.cls && (i.cls = t.cls),
            t.x && (i.x = String(t.x)),
            t.y && (i.y = String(t.y)),
            document.body.scrollWidth &&
              (i.scw = String(document.body.scrollWidth)),
            document.body.scrollHeight &&
              (i.sch = String(document.body.scrollHeight)),
            t.offset_left && (i.ofl = String(t.offset_left)))
          : t.logType === lr.logType.pd
          ? ((i.typ = "sr"),
            (i.lts = "ot"),
            (i.lgt = t.pdlogType),
            t.lgv && (i.lgv = t.lgv),
            t.pdsvj && (i.sfj = t.pdsvj))
          : t.logType === lr.logType.magic
          ? ((i.typ = "mg"),
            (i.lts = "ot"),
            (i.lgt = "mg"),
            t.pdsvj && (i.sfj = t.pdsvj))
          : t.logType === lr.logType.od && ((i.typ = "sr"), (i.lts = "od"));
      for (r = 0; r < lr.getPrivateDataF.length; r++)
        lr.getPrivateDataF[r](t, i);
      (t.logType !== lr.logType.cl &&
        t.logType !== lr.logType.od &&
        t.logType !== lr.logType.pv) ||
        (i.unpl = getCookie("unpl")),
        (t.logType !== lr.logType.cl && t.logType !== lr.logType.pv) ||
          (i.mjds = getCookie("_mjds")),
        lr.debugId &&
          ((i.originStd = o.std),
          (i.debugId = lr.debugId),
          (o.std = lr.debugStd)),
        o.data.push(i);
      let m = lr.logUrl;
      let _ = lr.siteId;
      lr.debugId &&
        ((m = `//${lr.debugReportDomain}/log/m`), (_ = lr.debugStd));
      const h = o.data[0] && o.data[0].nextPageReport;
      if (lr.getRequest) {
        var f = `${m}/log.gif?std=${lr.siteId}`;
        h
          ? (delete o.data[0].nextPageReport,
            StorageBridge.set("npr", { addr: f, method: "GET", data: o }),
            t.callback && t.callback())
          : logByGet(f, o, t.callback);
      } else {
        f = `${m}?std=${_}`;
        h
          ? (delete o.data[0].nextPageReport,
            StorageBridge.set("npr", { addr: f, method: "POST", data: o }),
            t.callback && t.callback())
          : logByPost(f, o, t.callback);
      }
    }
  }
  function lg(e, t, r) {
    const o = {};
    (o.pdsvj = {}),
      arguments.length === 2 && typeof arguments[1] == "object"
        ? (o.pdsvj = arguments[1])
        : arguments.length === 3 &&
          typeof arguments[2] == "object" &&
          (o.pdsvj = arguments[2]),
      typeof t != "object" && (o.lgv = t),
      (o.logType = lr.logType.pd),
      (o.pdlogType = e),
      logCmd(o);
  }
  function logPv() {
    const e = {};
    (e.logType = lr.logType.pv), logCmd(e);
  }
  function MPing(e) {
    if (typeof e == "function") {
      this.ready = e;
    }
  }
  function Request(e) {
    this.cmdParam = {};
  }
  function PV(e) {
    Request.call(this, "PV", null),
      (this.cmdParam.logType = lr.logType.pv),
      this.setPageId(e);
  }
  function Click(e) {
    Request.call(this, "Click", null),
      (this.cmdParam.logType = lr.logType.cl),
      (this.cmdParam.clickType = lr.clickType.Jtag),
      (this.cmdParam.event_id = e);
    const t = getSeparatedUrl(document.location.href);
    (this.page_name = t[0]), (this.page_param = t[1]);
  }
  function Order(e) {
    Request.call(this, "Order", null),
      (this.cmdParam.logType = lr.logType.od),
      (this.cmdParam.prod_id = e);
  }
  function AddCart(e, t) {
    Click.call(this, e, null), this.reportAsOrder(t, e);
  }
  function RmCart(e, t) {
    Click.call(this, e, null);
  }
  (window.lg = lg),
    (JA.lg = lg),
    (window.lgPv = logPv),
    (JA.lgPv = logPv),
    (MPing.prototype.send = function(e, t) {
      e &&
        e.cmdParam &&
        ((e.cmdParam.callback = t),
        (e.cmdParam.request = e),
        updateMuid(),
        updateMSid(),
        logCmd(e.cmdParam));
    }),
    (MPing.prototype.ready = function() {}),
    (MPing.prototype.initUid = function() {}),
    (MPing.prototype.sendByRequest = function(e, t) {
      this.send(e, t);
    }),
    (MPing.prototype.sendByImg = function() {
      this.send(request, callback);
    }),
    (MPing.prototype.getReportData = function() {}),
    (MPing.prototype.isSpider = isSpider),
    (MPing.prototype.options = {}),
    (MPing.prototype.privates = {}),
    (window.MPing = MPing),
    (MPing.Request = Request),
    (Request.prototype.getReportObj = function() {}),
    (Request.prototype.getTime = function() {}),
    (Request.prototype.setTs = function() {}),
    (Request.prototype.setPageParam = function() {}),
    (Request.prototype.getUrlInfo = function() {}),
    (PV.prototype = new Request()),
    (PV.prototype.setSourceParam = function() {}),
    (PV.prototype.setPvParams = function() {}),
    (PV.prototype.setPageId = function(e) {
      let t;
      if (typeof e == "string" || typeof e == "number")
        this.cmdParam.page_id = e;
      else if (e && typeof e == "object") {
        for (t in e) this.cmdParam[keysMap(t)] = e[t];
        this.cmdParam.cli && (this.cmdParam.cli += "-M");
      }
      for (t in lr.commonData)
        this.cmdParam[t] && (lr.commonData[t] = this.cmdParam[t]);
    }),
    (Click.prototype = new Request()),
    (Click.prototype.updateEventSeries = function() {
      (this.cmdParam.event_param = this.event_param),
        (this.cmdParam.page_name = this.page_name),
        (this.cmdParam.page_param = this.page_param),
        (this.cmdParam.event_level = this.event_level),
        updateMFLSeries(this.cmdParam);
    }),
    (Click.prototype.setPageId = function() {}),
    (Click.attachEvent = function(e) {
      Click.attachedEvent ||
        ((lr.cClass = e || "J_ping"), (Click.attachedEvent = !0));
    }),
    (Order.prototype = new Request()),
    (Order.prototype.deleteSeries = function() {}),
    (Order.prototype.setPageParam = function() {}),
    (Order.prototype.setParams = function() {}),
    (AddCart.prototype = new Click()),
    (AddCart.prototype.addSeries = function() {}),
    (AddCart.prototype.reportAsOrder = function(e, t) {
      if (e) {
        const r = new Order(e);
        t && (r.event_id = t), new MPing().send(r);
      }
    }),
    (RmCart.prototype = new Click()),
    (RmCart.prototype.deleteSeries = function() {}),
    (MPing.inputs = {}),
    (MPing.inputs.PV = PV),
    (MPing.inputs.Click = Click),
    (MPing.inputs.AddCart = AddCart),
    (MPing.inputs.RmCart = RmCart),
    (MPing.inputs.Order = Order),
    (MPing.EventSeries = {
      getSeries() {
        const e = getMSidSeq();
        const t = getJdv();
        const r = {
          m_source: isEmbedded() ? "1" : "0",
          event_series: lr.eventSeries,
          jda: getCookie(lr.ckJda),
          usc: t.source,
          ucp: t.campaign,
          umd: t.medium,
          utr: t.term,
          jdv: t.jdv,
          ref: encodeURIComponent(lr.curUrl),
          psn: `${lr.uuid}|${lr.visitTimes}`,
          psq: lr.sequenceNum,
          adk: lr.adsCookieName,
          ads: lr.ads,
          unpl: getCookie("unpl"),
          pc_source: getParameter("pc_source") || ""
        };
        isEmbedded()
          ? ((r.pv_sid = `${e[0]}`),
            (r.pv_seq = `${e[1]}`),
            (r.pv_timestamp = `${new Date().getTime()}`))
          : ((r.mba_muid = getMuid()), (r.mba_sid = `${e[0]}`));
        const o = getParameter("wjfrom") || "";
        const i = getParameter("wjwxpubid") || "";
        const a = getParameter("wjunionid") || "";
        const n = getParameter("wjopenid") || "";
        (o || i || a || n) &&
          ((r.wjfrom = o),
          (r.wjwxpubid = i),
          (r.wjunionid = a),
          (r.wjopenid = n)),
          (r.std = lr.siteId);
        const d = getSeparatedUrl(lr.curUrl);
        return (
          (r.par = encodeURIComponent(d[1] || "")),
          (r.event_id = lr.refCls),
          JSON.stringify(r)
        );
      },
      androidSeries() {
        const t = this.getSeries();
        try {
          window.AndriodPing.setSeries(t);
        } catch (e) {}
      },
      updateUA(e) {
        isEmbedded() && ((lr.EmbeddedUA = e), updateMSid(!0));
      },
      writeSeries() {},
      updateSeries() {},
      addSeries() {},
      deleteSeries() {},
      subCookieParts() {},
      getCookiePart() {},
      setCookiePart() {},
      getAllSubCookies() {},
      setSubCookieValue() {},
      getDomain() {},
      param() {},
      wxappSeries() {
        const e = {};
        const t = getMSidSeq();
        return (
          (e.pv_sid = `${t[0]}`), (e.pv_seq = `${t[1]}`), JSON.stringify(e)
        );
      }
    }),
    (function() {
      let e;
      let t;
      let r;
      let o;
      let i = navigator.userAgent;
      if (hasTransmitFunc()) {
        const a = getPageParamFromSdk();
        if (a) {
          lr.uid = a.uid || "";
          var n = a.jdv || "";
          var d = new Date().getTime();
          if (n)
            /* eslint-disable no-use-before-define */
            (u = decodeURIComponent(n).split("|")).length > 5 &&
              ((r = lr.utm_source = u[1]),
              (lr.utm_campaign = u[2]),
              (lr.utm_medium = u[3]),
              (lr.utm_term = u[4]),
              u[5] && (d = u[5].length < 13 ? 1e3 * u[5] : u[5])),
              r &&
                setCookie(
                  lr.ckJdv,
                  [
                    lr.hashDomain,
                    lr.utm_source || "direct",
                    lr.utm_campaign || "-",
                    lr.utm_medium || "none",
                    lr.utm_term || "-",
                    d
                  ].join("|"),
                  lr.ckDomain,
                  lr.ckJdvEmbeddedExp
                );
          a.std && (lr.pre_app = a.std),
            !lr.refUrl &&
              a.ctp &&
              (a.par ? (lr.refUrl = `${a.ctp}?${a.par}`) : (lr.refUrl = a.ctp)),
            a.event_id && (lr.refCls = a.event_id),
            a.debugId &&
              ((lr.debugId = a.debugId),
              (lr.debugStd = a.debugSiteId),
              (lr.debugReportDomain = a.debugReportDomain));
        }
      } else if (
        i &&
        (isEmbedded() || i.indexOf("Android") >= 0 || i.indexOf("iPhone") >= 0)
      ) {
        let l;
        let c;
        const s = function(e) {
          const t = `${e}/`;
          let r = i.indexOf(t);
          let o = 0;
          let a = "";
          return (
            r >= 0 &&
              (r += t.length) < (o = i.indexOf(";", r)) &&
              (a = i.substring(r, o)),
            a
          );
        };
        (i += ";").indexOf("psn/") >= 0 &&
          (l = i.indexOf("psn/") + 4) <= (c = i.indexOf(";", l)) &&
          (e = i.substring(l, c)),
          i.indexOf("psq/") >= 0 &&
            (l = i.indexOf("psq/") + 4) <= (c = i.indexOf(";", l)) &&
            (t = i.substring(l, c)),
          i.indexOf("ref/") >= 0 &&
            (l = i.indexOf("ref/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.refUrl = decodeURIComponent(i.substring(l, c))),
          i.indexOf("pap/") >= 0 &&
            (l = i.indexOf("pap/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.pre_app = i.substring(l, c));
        var u;
        let p = !0;
        (n = s("jdv")), (d = new Date().getTime());
        if (n)
          (u = decodeURIComponent(n).split("|")).length > 5 &&
            ((r = lr.utm_source = u[1]),
            (lr.utm_campaign = u[2]),
            (lr.utm_medium = u[3]),
            (lr.utm_term = u[4]),
            u[5] && (d = u[5].length < 13 ? 1e3 * u[5] : u[5]),
            (p = !1));
        if (
          (p &&
            i.indexOf("usc/") >= 0 &&
            (l = i.indexOf("usc/") + 4) <= (c = i.indexOf(";", l)) &&
            (r = lr.utm_source = i.substring(l, c)),
          p &&
            i.indexOf("ucp/") >= 0 &&
            (l = i.indexOf("ucp/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.utm_campaign = i.substring(l, c)),
          p &&
            i.indexOf("umd/") >= 0 &&
            (l = i.indexOf("umd/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.utm_medium = i.substring(l, c)),
          p &&
            i.indexOf("utr/") >= 0 &&
            (l = i.indexOf("utr/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.utm_term = i.substring(l, c)),
          i.indexOf("adk/") >= 0 &&
            (l = i.indexOf("adk/") + 4) <= (c = i.indexOf(";", l)) &&
            (lr.adsCookieName = i.substring(l, c)),
          i.indexOf("ads/") >= 0 &&
            (l = i.indexOf("ads/") + 4) <= (c = i.indexOf(";", l)) &&
            (o = i.substring(l, c)),
          e && t
            ? (setCookie("pre_session", e, lr.ckDomain),
              setCookie("pre_seq", t, lr.ckDomain))
            : ((e = getCookie("pre_session") || ""),
              (t = getCookie("pre_seq") || "")),
          (lr.preSession = e),
          (lr.preSeqnum = t),
          r)
        ) {
          let g = [
            lr.hashDomain,
            lr.utm_source || "direct",
            lr.utm_campaign || "-",
            lr.utm_medium || "none",
            lr.utm_term || "-",
            d
          ].join("|");
          setJdv((g = urlEncode(g, lr.hashDomain)), lr.hashDomain);
        }
        o &&
          ((lr.ads = o),
          setCookie(lr.adsCookieName, lr.ads, lr.ckDomain, lr.mtSubsiteExp));
        const m = s("apprpd");
        m && (lr.rpd = m), (lr.app_device = s("app_device"));
        let _ = s("log-debug");
        _ &&
          (_ = _.split("|")).length > 2 &&
          ((lr.debugId = _[0]),
          (lr.debugStd = _[1]),
          (lr.debugReportDomain = _[2]));
      }
    })(),
    lr.clickCBF.push(function(e) {
      if (Click.attachedEvent) {
        for (
          var t,
            r = {},
            o = e.srcElement || e.target,
            i = document.querySelector("body");
          o !== i;

        ) {
          let a = o.className || "";
          if (
            (a && a.baseVal && (a = a.baseVal), a && a.indexOf(lr.cClass) > -1)
          ) {
            t = o;
            break;
          }
          o = o.parentNode || i;
        }
        if (t) {
          const n = t.getAttribute("href");
          const d = t.getAttribute("report-eventid") || "";
          const l = t.getAttribute("report-eventlevel") || "";
          const c = t.getAttribute("report-pagename") || "";
          const s = t.getAttribute("report-pageparam") || "";
          const u = t.getAttribute("report-eventparam") || "";
          if (d) {
            const p = getSeparatedUrl(document.location.href);
            (r.logType = lr.logType.cl),
              (r.clickType = lr.clickType.Jtag),
              (r.event_id = d),
              (r.event_level = l),
              (r.page_name = c || p[0] || ""),
              (r.page_param = s || p[1] || ""),
              (r.event_param = u),
              (r.tarUrl = n),
              updateMFLSeries(r),
              logCmd(r);
          }
          n &&
            /^(http:\/\/|https:\/\/|\/\/).*/.exec(n) &&
            t.getAttribute("target") !== "_blank" &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            setTimeout(function() {
              window.location.href = n;
            }, 200));
        }
      }
    }),
    lr.clickCBF.push(function(e) {
      if (isWX()) {
        for (
          var t = {}, r = e.srcElement || e.target, o = "", i = "";
          r && r.nodeName != "BODY" && r.getAttribute;

        ) {
          if ((i = r.getAttribute("ptag") || r.getAttribute("PTAG"))) {
            o = "";
            break;
          }
          if (
            (o =
              r.getAttribute("data-url") ||
              r.getAttribute("data-tourl") ||
              r.getAttribute("data-href") ||
              r.getAttribute("tourl") ||
              r.getAttribute("target_href") ||
              r.href) &&
            (i = getUrlParam("ptag", o))
          )
            break;
          r = r.parentNode;
        }
        if (i) {
          const a = `wq_${i.replace(/\./g, "_")}`;
          const n = i;
          if (a) {
            const d = getSeparatedUrl(document.location.href);
            (t.logType = lr.logType.cl),
              (t.clickType = lr.clickType.Jtag),
              (t.event_id = a),
              (t.event_level = ""),
              (t.page_name = d[0] || ""),
              (t.page_param = d[1] || ""),
              (t.event_param = n),
              (t.tarUrl = o),
              updateMFLSeries(t),
              logCmd(t);
          }
          if (
            o &&
            /^(http:\/\/|https:\/\/|\/\/).*/.exec(o) &&
            r &&
            r.nodeName === "A" &&
            r.getAttribute("target") !== "_blank"
          )
            for (
              let l = new Date().getTime() + 100;
              new Date().getTime() < l;

            );
        }
      }
    });
  const getAbsoluteXPath = function(e) {
    for (var t = ""; e && e.nodeType == 1; e = e.parentNode) {
      for (
        var r = e.parentNode.childNodes, o = "", i = 0, a = 0, n = r.length;
        i < n;
        i++
      ) {
        const d = r[i];
        e.tagName === d.tagName && a++, e == d && (o = a > 1 ? `[${a}]` : "");
      }
      t = `/${e.tagName.toLowerCase()}${o}${t}`;
    }
    return t;
  };
  const getXPath = function(e) {
    for (var t = ""; e && e.nodeType == 1; e = e.parentNode) {
      if (e.id !== "") {
        t = `//*[@id="${e.id}"]${t}`;
        break;
      }
      for (
        var r = e.parentNode.childNodes, o = "", i = 0, a = 0, n = r.length;
        i < n;
        i++
      ) {
        const d = r[i];
        e.tagName === d.tagName && a++, e == d && (o = a > 1 ? `[${a}]` : "");
      }
      t = `/${e.tagName.toLowerCase()}${o}${t}`;
    }
    return t;
  };
  const isLeafElemt = function(e) {
    let t = !0;
    return e.children.length > 0 && (t = !1), t;
  };
  const isReportElement = function(e) {
    let t = !1;
    if (e && e.tagName) {
      const r = e.tagName.toLowerCase();
      t =
        !(
          r === "html" ||
          r === "body" ||
          (e.id && e.id === "tol_selected_xelemts_area") ||
          (e.parentElement.id &&
            e.parentElement.id === "tol_selected_xelemts_area")
        ) &&
        (!!haveTag(e) || r === "a" || isLeafElemt(e));
    }
    return t;
  };
  let cltvalue = "";
  function haveTag(e) {
    for (
      cltvalue = e.getAttribute("clstag");
      !cltvalue && (e = e.parentNode) && e.nodeName != "BODY";

    )
      cltvalue = e.getAttribute("clstag");
    return !!cltvalue;
  }
  function subUrl(e) {
    let t = 0;
    return (
      e && e.length > 500 && (t = e.indexOf("?")) && (e = e.substring(0, t)), e
    );
  }
  function mouseX(e) {
    return e.pageX
      ? e.pageX
      : e.clientX
      ? e.clientX +
        (document.documentElement.scrollLeft
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft)
      : -1;
  }
  function mouseY(e) {
    return e.pageY
      ? e.pageY
      : e.clientY
      ? e.clientY +
        (document.documentElement.scrollTop
          ? document.documentElement.scrollTop
          : document.body.scrollTop)
      : -1;
  }
  function pageOffsetLeft() {
    const e = (document.body.scrollWidth - document.body.clientWidth) / 2;
    return parseInt(e);
  }
  document.getElementsByClassName ||
    (document.getElementsByClassName = function(e) {
      for (
        var t = document.getElementsByTagName("*"), r = [], o = 0;
        o < t.length;
        o++
      )
        for (let i = t[o], a = i.className.split(" "), n = 0; n < a.length; n++)
          if (a[n] == e) {
            r.push(i);
            break;
          }
      return r;
    });
  const coordinateInfo = function(e) {
    const t = {};
    return (
      (t.scrollWidth = document.body.scrollWidth),
      (t.scrollHeight = document.body.scrollHeight),
      (t.offsetLeft = pageOffsetLeft()),
      (t.x = parseInt(mouseX(e))),
      (t.y = parseInt(mouseY(e))),
      t.offsetLeft > 0 && (t.x = parseInt(t.x - t.offsetLeft)),
      t
    );
  };
  const xpathReport = function(e) {
    try {
      const t = e.target || e.srcElement;
      if (isReportElement(t)) {
        for (
          var r = coordinateInfo(e),
            o = t,
            i = t.tagName.toLowerCase(),
            a = getXPath(t) || "-",
            n = t.parentNode ? getXPath(t.parentNode) : "-",
            d = t.parentNode ? `${getAbsoluteXPath(t.parentNode)}/` : "-",
            l = getAbsoluteXPath(t) || "-",
            c = l ? l.split("/").length : 1,
            s = document.body.clientWidth,
            u = s > 0 ? (r.x / s).toFixed(4) : 0,
            p = r.scrollHeight > 0 ? (r.y / r.scrollHeight).toFixed(4) : 0,
            g = o.tagName.toLowerCase();
          g != "a" && (o = o.parentNode) && o.nodeName != "BODY";

        )
          g = o.tagName.toLowerCase();
        let m = "-";
        let _ = "-";
        if (cltvalue) {
          const h = cltvalue.split("|");
          (m = h[2]), (_ = h[3]);
        }
        const f = o && o.href ? subUrl(o.href) : "-";
        let M = t.innerText.substring(0.2) || "-";
        const S = t.src ? subUrl(t.src) : "-";
        i !== "a" || isLeafElemt(t) || (M = "-"),
          magictreelog(
            "magictree",
            "Z",
            encodeURIComponent(a),
            encodeURIComponent(n),
            encodeURIComponent(d),
            c,
            `${r.x}x${r.y}`,
            `${r.scrollWidth}x${r.scrollHeight}`,
            r.offsetLeft,
            u,
            p,
            m,
            _,
            encodeURIComponent(f),
            encodeURIComponent(M),
            encodeURIComponent(S)
          );
      }
    } catch (w) {
      magictreelog("ERROR", "AT_xpathReport");
    }
  };
  const loadJS = function(e) {
    const t = document.createElement("script");
    (t.type = "application/javascript"),
      (t.src = e),
      (t.charset = "UTF-8"),
      document.body
        ? document.body.appendChild(t)
        : document.getElementsByTagName("head")[0].appendChild(t);
  };
  const loadCSS = function(e) {
    const t = document.createElement("link");
    (t.type = "text/css"),
      (t.rel = "stylesheet"),
      (t.href = e),
      document.getElementsByTagName("head")[0].appendChild(t);
  };
  function magictreelog(e, t) {
    const r = {};
    let o = Array.prototype.slice.call(arguments);
    (o = o && o.slice(2)),
      (r.pdsvj = {}),
      (r.logType = lr.logType.magic),
      (r.pdsvj.t1 = e),
      (r.pdsvj.t2 = t),
      (r.pdsvj.p0 = encodeURIComponent(joinArrayBySeparator(o))),
      logCmd(r);
  }
  const typepar = getParameter("typepar");
  let a1121;
  let a1122;
  if (typepar && (typepar === "query" || typepar === "apply"))
    try {
      loadCSS("//magicforest.jd.com/x.css"),
        loadJS("//magicforest.jd.com/tol2.min.js");
    } catch (e) {
      magictreelog("ERROR", "AT_loadCSS_OR_loadJS");
    }
  function initMagicModel() {
    try {
      loadJS("//magicforest.jd.com/magicapp.js");
    } catch (e) {
      magictreelog("ERROR", "AT_MagicappJS");
    }
  }
  function isMeta(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return !0;
    const t = e.which;
    const r = e.button;
    return t || r === undefined
      ? t === 2 || r === 2
      : 1 & !r && 2 & !r && 4 & r;
  }
  function logClstag(e, t, r) {
    if (e && t) {
      const o = {};
      (o.logType = lr.logType.cl),
        (o.clickType = lr.clickType.Clstag),
        (o.cls = `${e}|${t}`),
        (o.tarUrl = r || ""),
        logCmd(o);
    }
  }
  function getUnionSeriesJsonObj() {
    const e = getJdv();
    return {
      psn: `${lr.uuid}|${lr.visitTimes}`,
      psq: lr.sequenceNum,
      ref: encodeURIComponent(lr.curUrl),
      usc: e.source,
      ucp: e.campaign,
      umd: e.medium,
      utr: e.term,
      adk: lr.adsCookieName,
      ads: lr.ads,
      ext: lr.extParams
    };
  }
  function getUnionSeries() {
    const e = getJdv();
    const t = {
      psn: `${lr.uuid}|${lr.visitTimes}`,
      psq: lr.sequenceNum,
      ref: encodeURIComponent(lr.curUrl),
      usc: e.source,
      ucp: e.campaign,
      umd: e.medium,
      utr: e.term,
      adk: lr.adsCookieName,
      ads: lr.ads
    };
    return JSON.stringify(t);
  }
  function getAndroidUnionSeries() {
    const t = getUnionSeries();
    try {
      window.AndriodPing.setSeriesUnion(t);
    } catch (e) {}
  }
  function isDegrade(t, r, o, i) {
    const a = {
      "traffic-jdm.ot-mg-ot": 20,
      "traffic-jdm.ot-sr-hm": 0,
      "traffic-jdm.ot-sr-ot": 0,
      "exp_log.100000.ot-sr-ot": 0
    };
    const n = new Date(2018, 5, 16).getTime();
    const d = new Date(2018, 5, 20).getTime();
    const l = new Date().getTime();
    if (l < n || l > d) return !1;
    let c = a[`${t}-${r}-${o}`];
    return (
      c === undefined && (c = a[`${t}-${r}`]),
      c === undefined && (c = a[t]),
      (function(t) {
        try {
          let r = i;
          const o = r.length;
          return (r = parseInt(r.substr(o - 2, o))) < t;
        } catch (e) {}
        return !1;
      })((c = c || 0))
    );
  }
  function log(e, t) {
    const r = {};
    let o = Array.prototype.slice.call(arguments);
    (o = o && o.slice(2)),
      (r.pdsvj = {}),
      (r.logType = lr.logType.pd),
      (r.pdsvj.t1 = e),
      (r.pdsvj.t2 = t),
      (r.pdsvj.p0 = encodeURIComponent(joinArrayBySeparator(o))),
      logCmd(r);
  }
  function logJSON(e, t, r) {
    const o = {};
    (o.logType = lr.logType.pd),
      (o.isByJson = !0),
      (o.pdsvj = { t1: e, t2: t, p0: r }),
      (o.toWarriors = !0),
      logCmd(o);
  }
  function nlog(e, t) {
    const r = {};
    (r.logType = lr.logType.pd), (r.pdsvj = t), (r.topic = e), logCmd(r);
  }
  function expLogJSON(e, t, r) {
    const o = {};
    (o.topic = "exp_log.100000"),
      (o.logType = lr.logType.pd),
      (o.isByJson = !0),
      (o.pdsvj = { t1: e, t2: t, p0: isObject(r) ? JSON.stringify(r) : r }),
      (o.toWarriors = !0),
      logCmd(o);
  }
  (window.initMagicModel = initMagicModel),
    document.location.href.indexOf("__clsData=") > -1 &&
      (loadCSS("//magicforest.jd.com/cls.css"),
      loadJS("//magicforest.jd.com/cls.js")),
    quickClick(
      document,
      function(e) {
        let t;
        const r = {};
        let o = e.srcElement || e.target;
        const i = o;
        let a = o.getAttribute("clstag");
        const n = e || event;
        if (n.clientX || n.clientY || n.pageX || n.pageY) {
          try {
            xpathReport(n);
          } catch (e) {
            log("ERROR", "AT_Document_Onclick");
          }
          for (
            ;
            !a &&
            o.nodeName !== "BODY" &&
            o.nodeName !== "HTML" &&
            (o = o.parentNode) &&
            (o.nodeName !== "BODY" || o.nodeName === "HTML");

          )
            a = o.getAttribute("clstag");
          let d;
          if (a) {
            const l = a.split("|");
            const c = l[1];
            const s = l[2];
            const u = l[3];
            if (c === "keycount") {
              d = `${s}|${u}`;
              const p = i.getAttribute("href");
              (r.logType = lr.logType.cl),
                (r.clickType = lr.clickType.Clstag),
                (r.cls = d),
                (r.tarUrl = p),
                logCmd(r),
                p &&
                  /^(http:\/\/|https:\/\/|\/\/).*/.exec(p) &&
                  i.getAttribute("target") !== "_blank" &&
                  !isMeta(e) &&
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                  setTimeout(function() {
                    window.location.href = p;
                  }, 200));
            }
          }
          const g = window.location.hostname.toLowerCase();
          if (
            lr.heatmapEnable ||
            /(sale|mall|jmall|pop|bdp).(jd|360buy).com/.test(g)
          ) {
            let m = 0;
            let _ = 0;
            e.pageX || e.pageY
              ? ((m = e.pageX), (_ = e.pageY))
              : ((m =
                  e.clientX +
                  document.body.scrollLeft -
                  document.body.clientLeft),
                (_ =
                  e.clientY +
                  document.body.scrollTop -
                  document.body.clientTop));
            const h = window.screen.width >= 1210 ? 1210 : 990;
            const f =
              document.body.clientWidth > h
                ? Math.round((document.body.clientWidth - h) / 2)
                : 0;
            (r.logType = lr.logType.hm),
              (r.cls = d || "-"),
              (r.x = m),
              (r.y = _),
              (r.offset_left = f),
              logCmd(r);
          }
          for (t = 0; t < lr.clickCBF.length; t++) lr.clickCBF[t](e);
        }
      },
      !1
    ),
    (window.logClstag = logClstag),
    (lr.MPEventsMap = {
      MTimeLimitDiscount_TopTab: 3,
      MTimeLimitDiscount_TopTabSlide: 4,
      MTimeLimitDiscount_TabExpand: 4,
      MTimeLimitDiscount_Activity: 4,
      MTimeLimitDiscount_JumpToNext: 4,
      MTimeLimitDiscount_ToTop: 4,
      MOneForAll_TopBanner: 3,
      MOneForAll_HotProduct: 3,
      MOneForAll_SoonFull: 3,
      MOneForAll_PopularOutbreak: 4,
      MOneForAll_Product: 4,
      MOneForAll_ADollarGrabTreasure: 4,
      MOneForAll_ParticipationRecord: 4,
      MOneForAll_ClassificationTab: 3,
      MOneForAll_ClassificationTabSlide: 4,
      MOneForAll_ClassificationProduct: 4,
      MOneForAll_GrabTreasure: 4,
      MOneForAll_PicSlide: 4,
      MOneForAll_Pic: 4,
      MOneForAll_Details: 4,
      MOneForAll_Past: 4,
      MOneForAll_FastSelect: 4,
      MOneForAll_Confirm: 4,
      MOneForAll_AllNum: 4,
      MOneForAll_Next: 4,
      MOneForAll_PastProduct: 4,
      MOneForAll_ScreenSlideUp: 4,
      MOneForAll_MoreLottery: 4,
      MOneForAll_Balance: 4,
      MOneForAll_JingBean: 4,
      MOneForAll_Coupon: 4,
      MOneForAll_Pay: 4,
      MOneForAll_Order: 4,
      MOneForAll_ContinueBuy: 4,
      MOneForAll_OrderTracking: 4,
      MOneForAll_LogisticsDetails: 4,
      MOneForAll_ReceivingInformation: 4,
      MOneForAll_AllRecords: 4,
      MOneForAll_ContinueToGrabTreasure: 4,
      MAuction_TopBanner: 4,
      MAuction_Classification: 4,
      MAuction_PopularCategory: 4,
      MAuction_BottomTab: 4,
      MAuction_TodaySpecial: 4,
      MAuction_FirstLevelNavigation: 4,
      MAuction_ClassificationJump: 4,
      MAuction_TwoCategory: 4,
      MAuction_MyAuction: 4,
      MAuction_MyProduct: 4,
      MAuction_MyBond: 4,
      MAuction_MyCommodity: 4,
      MAuction_Rule: 4,
      MAuction_TimeSelect: 4,
      MAuction_SecondCategory: 4,
      MAuction_Commodity: 4,
      MAuction_CommodityDescription: 4,
      MAuction_CustomerService: 4,
      MAuction_BidRecord: 4,
      MAuction_MarginRule: 4,
      MAuction_SellerCommitment: 4,
      MAuction_GoToMyAuction: 4,
      MGroupPurchase_BottomNavigation: 3,
      MProductdetail_Promotion: 5,
      MProductdetail_CommentBackToTop: 5,
      MProductdetail_ConsultationBackToTop: 5,
      MProductdetail_DetailViewGoods: 5,
      MProductdetail_ProductTab: 5,
      MProductdetail_DetailTab: 5,
      MProductdetail_CommentTab: 5,
      MProductdetail_ProductTabSlide: 5,
      MProductdetail_DetailTabSlide: 5,
      MProductdetail_CommentTabSlide: 5,
      MProductdetail_PriceNotice: 5,
      MProductdetail_SpecificationsPackUp: 5,
      MProductdetail_PicComment: 5,
      MProductdetail_OnlyComment: 5,
      MProductdetail_MobileAccessory: 5,
      MProductdetail_ContactJIMI: 5,
      MProductdetail_ArrivalNotice: 5,
      MProductdetail_Similar: 5,
      MProductdetail_DepreciatePriceInput: 5,
      MProductdetail_DepreciateNumInput: 5,
      MProductdetail_DepreciateCancel: 5,
      MProductdetail_DepreciateConfirm: 5,
      MProductdetail_DepreciateMask: 5,
      MProductdetail_ArrivalNumInput: 5,
      MProductdetail_ArrivalCancel: 5,
      MProductdetail_ArrivalConfirm: 5,
      MProductdetail_ArrivalMask: 5,
      MProductdetail_EnergySaving: 5,
      MJingDouHome_ShopActivity: 2,
      Mrecommendation_Product: 3,
      MHome_FocusPic: 1,
      Mhome_Classification: 1,
      Mhome_Cart: 1,
      MRecharge_Recharge: 1,
      MHome_Lottery: 1,
      MHome_MyJD: 1,
      MHome_HandSeckill: 1,
      MHome_ActivitiesInFloors: 1,
      MHome_ThemeHall: 1,
      MHome_Searchthi: 2,
      MHome_Search: 1,
      MHome_SearchDropDownAssociationalWords: 1,
      MHome_SearchDropDownHistoryWords: 1,
      MHome_AirTicket: 1,
      MHome_Icons: 1,
      MHomeGuessYouLike_Login: 1,
      MHomeGuessYouLike_Products: 1,
      MHomeGuessYouLike_Similarities: 1,
      MHomeSimilarities_Products: 1,
      MHome_FloatEntrance: 1,
      MHome_BacktoTop: 1,
      MVirtual_ProductDetail_Expose: 1,
      MProductList_Search: 2,
      MSearch_Search: 2,
      MSearch_SearchButton: 2,
      MSearch_Searchthi: 2,
      MSearch_SearchDropDownAssociationalWords: 2,
      MSearch_HistoryRecords: 2,
      MSearch_HotWords: 2,
      MSearch_Productid: 3,
      MCommonHead_NavigateButton: 1,
      MCommonHead_home: 1,
      MCommonHead_CategorySearch: 1,
      MCommonHead_Cart: 1,
      MCommonHead_MYJD: 1,
      MCommonHTail_Account: 1,
      MCommonHTail_ToTop: 1,
      MCommonHTail_ClientApp: 1,
      MDownLoadFloat_OpenNow: 1,
      MGroupBuy_ChannelIcons: 2,
      MJingDouHome_Activity: 2,
      MJingDouHome_JindouExCoupon: 2,
      MJingDouHome_JingdouBuyLottery: 2,
      MJingDouHome_Jump: 2,
      MJingDouHome_Cut: 2,
      MJingDouHome_ProductPic: 2,
      MJingDouShare_GetMyJingdou: 2,
      MJingDouJigsaw_Jigsaw_Expose: 2,
      MMyJDOrders_Categories: 2,
      MMyJDFollowed_Commodities: 2,
      MMyJDFollowed_Shops: 2,
      MMyJDFollowed_Commodity: 2,
      MMyJDFollowed_Shop: 2,
      MMyJDBrowsedHistory_Commodites: 2,
      MMyJDService_Categories: 2,
      MMyJDAccountManage_Categories: 2,
      MMyJD_Ordersnotpay: 2,
      MMyJD_Ordersnotreceiving: 2,
      MMyJD_MyMessages: 2,
      MMyJD_FuntionMenus: 2,
      MMyJD_GuessYouLike: 2,
      MHandSecKill_Commodity: 2,
      MHandSecKill_GotoAPPA: 2,
      Jshop_FocusPic: 4,
      Jshop_ProductID: 4,
      Jshop_CategoryTab: 4,
      Jshop_ProductID_Category: 4,
      Jshop_Navigation: 4,
      Jshop_CountDown: 4,
      Jshop_Lottery: 4,
      Jshop_GroupBuy: 4,
      Jshop_ShopRec: 4,
      Jshop_PromoRec: 4,
      Jshop_PromoTurns: 4,
      Jshop_PreSale: 4,
      Jshop_Html_Content: 4,
      Jshop_ImgWord: 4,
      Jshop_PullDown: 4,
      Jshop_PullDown_ProductID: 4,
      Jshop_AddtoCart: 4,
      MProductShow_ProductSku: 4,
      MMCDDownLoad_DownloadNow: 4,
      MobileWare_TreasureBoxEntrance: 4,
      MMobileWareLocate_Search: 4,
      MMobileWareLocate_Searchthi: 4,
      MMobileWareLocate_Locating: 4,
      MMobileWareLocate_HistoryAddr: 4,
      MMobileWareLocate_AssociateAddr: 4,
      MMobileWareCommonHead_GoToCart: 4,
      MMobileWareCommonHead_ChangeAddr: 4,
      MMobileWareProductList_BackToTop: 4,
      MMobileWareProductList_Product: 4,
      MMobileWareProductDetail_ProductMsg: 4,
      MMobileWareProductDetail_ProductIntroduction: 4,
      MMobileWareProductDetail_ProductSpecification: 4,
      MMobileWareProductDetail_ProductPackage: 4,
      MMobileWareProductDetail_AddToCart: 4,
      MMobileWareProductDetail_DeliveryAddr: 4,
      MMobileWareCart_DeleteProduct: 4,
      MMobileWareCart_NumIncrease: 4,
      MMobileWareCart_NumDecrease: 4,
      MMobileWareCart_SelectAll: 4,
      MMobileWareCart_CheckOut: 4,
      MMobileWareCheckout_ChangeAddr: 4,
      MMobileWareCheckout_MapCoordinate: 4,
      MMobileWareCheckout_OrderSubmit: 4,
      MMobileWareCheckout_PaperInvoice: 4,
      Shopcart_Productid: 5,
      Shopcart_Stroll: 5,
      Shopcart_Label: 5,
      Shopcart_Getresent: 5,
      Shopcart_Warranty: 5,
      Shopcart_Pay: 5,
      Shopcart_AddtoCart: 5,
      Shopcart_Present: 5,
      MProductdetail_Photo: 5,
      MProductdetail_Productinfo: 5,
      MProductdetail_Saleinfo: 5,
      MProductdetail_Shopid: 5,
      MProductdetail_GuessYouLike: 5,
      MProductdetail_Addtocart: 5,
      MProductdetail_Easybuy: 5,
      MProductdetail_GotoCart: 5,
      MProductdetail_AddtoFollowed: 5,
      MNeworder_Submit: 5,
      MNeworder_Function: 5,
      MNeworder_Address: 5,
      MNeworder_PayType: 5,
      MNeworder_ProdictList: 5,
      MHome_OrderSubmit: 5,
      MPayFinish_HomeMain: 5,
      MLOCOffLineProductDetail_BuyNow: 2,
      MLOCShopList_Call: 3,
      MLOCCheckOut_Submit: 4,
      LOCOffLineProductDetail_BuyNow: 2,
      LOCOnLineProductDetail_BuyNow: 2,
      MLOCOnLineProductDetail_BuyNow: 2,
      MLOCShopList_CallMap: 3,
      MFlashbuy_NewArrival: 2,
      MFlashbuy_LastSale: 2,
      MFlashbuy_ActivityForecast: 2,
      Mflashbuy_FocusPic: 2,
      MFlashbuy_NewArrivalFloor: 2,
      MFlashbuy_LastSaleFloor: 2,
      MFlashbuy_ActivityForecastFloor: 2,
      MFlashbuy_ProductPic: 3,
      MPresell_GetFreshFloor: 2,
      MTopic_FocusPic: 2,
      MTopic_SecKill: 2,
      MTopic_Floors: 2,
      MTopic_Products: 2,
      MTopic_Menus: 2,
      MTopic_Classify: 2,
      MTopic_recommend: 2,
      MTopic_brand: 2,
      Jshop_AD_button: 4,
      "Jshop_AD_TopCarousel ": 4,
      Jshop_AD_Tab: 4,
      Jshop_AD_Picture: 4,
      Jshop_AD_Rolled: 4,
      Jshop_AD_Close: 4,
      Jshop_Hot_Tab: 4,
      Jshop_Hot_ProductID: 4,
      "Jshop_Commended_ProductID ": 4,
      Jshop_Commended_GotoShop: 4,
      Jshop_Commended_Pic: 4,
      Jshop_Commended_Url: 4,
      MShopCheckIn_Pic: 2,
      MShopCheckIn_CheckInGetGift: 2,
      MShopCheckIn_RecommendShopid: 2,
      MShopCheckIn_MoreShops: 2,
      ShopHome_CheckInGetGift: 3,
      ShopCheckIn_Productid: 4,
      MJingDouHome_CouponCenter: 1,
      MWidget_Sign: 1,
      Widget_Operate: 1,
      Widget_Commodity: 1,
      Widget_More: 1,
      MJingDouHome_Checkin: 2,
      MSeckill_OrderSubmit: 5,
      MMyJD_MyPurse: 2,
      MMyJD_MyFollows: 2,
      MMyJD_BrowserHistory: 2,
      MMyJD_ServiceManager: 2,
      MMyJD_AccountManager: 2,
      MMyJD_MyAppointment: 2,
      MMyJD_ApplicationRecommend: 2,
      MMyJD_JCode: 2,
      MNeworder_Coupons: 5,
      MNeworder_Jdcard: 5,
      MNeworder_JdBean: 5,
      MNeworder_Invoice: 5,
      MNeworder_RestAccount: 5,
      MNeworder_GuessYouLike: 5,
      MNeworder_UnavaliableCoupons: 5,
      MMyJD_AllOrders: 2,
      MSaleBDCoupon_BannerPic: 3,
      MSaleBDCouponResult_BannerPic: 3,
      MShopcart_Productid: 4,
      MShopcart_EditAmount: 5,
      MShopcart_Amount: 5,
      MShopcart_Stroll: 4,
      MShopcart_CheckProd: 4,
      MShopcart_CheckAll: 4,
      MShopcart_Label: 4,
      MShopcart_Getresent: 5,
      MShopcart_Warranty: 5,
      MShopcart_Delete: 5,
      MShopcart_Pay: 5,
      MShopcart_Present: 5,
      MShopcartDeleteProduct_Sure: 5,
      MShopcartDeleteProduct_Cancel: 5,
      MShopcart_Login: 5,
      MShopcart_ShopEntrance: 5,
      MShopcart_GuessYouLikeFold: 5,
      MShopcart_GuessYouLike: 4,
      MShopcart_SimilaritiesEntrance: 5,
      MShopcart_SimilaritiesProductList: 4,
      MCategory_1st: 2,
      MCategory_3rd: 2,
      MCategory_Banner: 2,
      MCategory_Recommend: 2,
      MList_AdProducts: 3,
      MListFilter_Brand: 3,
      MListFilter_Back: 3,
      MListFilter_Address: 3,
      MShopLIst_JDShop: 3,
      MShopLIst_POPShop: 3,
      MShopcart_LoginEmptyCart: 5,
      MShopcart_LoginFullCart: 5,
      MJDMembersHome_SecKillProducts: 3,
      MJDMembersSecKill_Products: 4,
      MJDMembersHome_MemberProducts: 3,
      MJDMembersHome_MemberProductsToCart: 3,
      MJDMembersHome_AllMemberProducts: 3,
      MJDMembersSpecialSale_Categories: 4,
      MJDMembersSpecialSale_Products: 4,
      MJDMembers_FocusPic: 3,
      MJDMembers_Shopid: 3,
      MJDMembers_GetCoupon: 3,
      MVacationHonme_banner: 3,
      MVacationHonme_Destinations: 3,
      MVacationHonme_More: 3,
      MVacationHonme_HotDestinations: 3,
      MVacationHonme_SetOutCity: 3,
      MVacationHonme_SearchBox: 3,
      MVacationHonme_RecommendedProducts: 3,
      MVacationSearch_HotWord: 4,
      MVacationSearchResult_SearchBox: 4,
      MVacationSearchResult_Synthesize: 4,
      MVacationSearchResult_SalesVolume: 4,
      MVacationSearchResult_Price: 4,
      MVacationSearchResult_Fliter: 4,
      MVacationSearchResult_Lines: 4,
      MVacationProductDetail_Calendar: 5,
      MVacationProductDetail_ProductPoint: 5,
      MVacationProductDetail_Schedule: 5,
      MVacationProductDetail_Comment: 5,
      MVacationProductDetail_Costs: 5,
      MVacationProductDetail_ReserveNotice: 5,
      MVacationProductDetail_VisaInfo: 5,
      MVacationProductDetail_ContactService: 5,
      MVacationProductDetail_Call: 5,
      MVacationProductDetail_ReserveNow: 5,
      MJingDouHome_ShopCheckin: 2,
      MJingDouHome_GetJBean: 2,
      MJingDouHome_Topic: 2,
      MProductdetail_Specification: 5,
      MProductdetail_ProductdetailEntrance: 5,
      MProductdetail_Address: 5,
      MProductdetail_FirstAddress: 5,
      MProductdetail_SecondAddress: 5,
      MProductdetail_ThirdAddress: 5,
      MProductdetail_AskServiceEntrance: 5,
      MProductdetail_ProductCommentEntrance: 5,
      MProductdetail_ProductShowEntrance: 5,
      MProductdetail_ServiceInfo: 5,
      MProductdetail_Advert: 5,
      MProductdetail_ConsultEntrance: 5,
      MSearch_ClearHistory: 1,
      MProductdetail_Insurances: 5,
      MSearch_ChangeKeyWords: 1,
      MHome_SearchButton: 2,
      MProductdetail_SalesPromotion: 5,
      MProductdetail_Back: 5,
      MProductdetail_PreferentialPackage: 5,
      MProductdetail_PackageAddToCart: 5,
      MProductdetail_InsurancesSelect: 5,
      MProductdetail_FourthAddress: 5,
      MTicketsProductdetail_Tab: 5,
      MTicketsSearchResult_Fliter: 4,
      MTicketsProductdetail_TicketBomb: 5,
      MTicketsProductdetail_MoreTickets: 5,
      MTicketsSearchResult_SightSpot: 4,
      MTicketsHome_Theme: 3,
      MTicketsProductdetail_ReserveNow: 5,
      MTicketsSearchResult_SearchBox: 4,
      MTicketsHome_SightSpot: 3,
      MTicketsHome_Banner: 3,
      MTicketsHome_Location: 3,
      MTicketsThemes_Theme: 4,
      MTicketsSearch_Hotword: 4,
      MTicketsProductdetail_Map: 5,
      MTicketsHome_More: 3,
      MFlashbuy_CategoryBeautyFloor: 2,
      MTwelve_Play: 4,
      MProductdetail_ad: 3,
      MProductdetail_Comment: 5,
      MProductdetail_CommentPhoto: 5,
      MProductdetail_CouponSlide: 5,
      MProductdetail_Coupon: 5,
      MProductdetail_IdentifyingCodeInput: 5,
      MProductdetail_IdentifyingCodeImage: 5,
      MProductdetail_IdentifyingCodeCancel: 5,
      MProductdetail_IdentifyingCodeConfirm: 5,
      MProductdetail_IdentifyingCodeClose: 5,
      MProductdetail_ChooseSpecifications: 5,
      MProductdetail_ChooseInsurance: 5,
      MProductdetail_EnterShop: 5,
      MProductdetail_BackToTop: 5,
      MProductdetail_SubscribeImmediately: 5,
      MProductdetail_PurchaseImmediately: 5,
      MProductdetail_OrderImmediately: 5,
      MProductdetail_ShoppingCodeBuy: 5,
      MProductdetail_DetailProductIntroduction: 5,
      MProductdetail_DetailParameter: 5,
      MProductdetail_DetailCustomerService: 5,
      MProductdetail_DetailBackToTop: 5,
      MProductdetail_CommentAllTab: 5,
      MProductdetail_CommentFavorableTab: 5,
      MProductdetail_CommentMediumTab: 5,
      MProductdetail_CommentPoorTab: 5,
      MProductdetail_CommentPictureTab: 5,
      MProductdetail_CommentLikebutton: 5,
      MProductdetail_CommentReply: 5,
      MProductdetail_CommentAll: 5,
      MProductdetail_ReplyCommentInput: 5,
      MProductdetail_ReplyCommentSend: 5,
      MProductdetail_ReplyCommentReply: 5,
      MBMobileWareProductDetail_ProductMsg: 4,
      MBMobileWareProductDetail_ProductIntroduction: 4,
      MBMobileWareProductDetail_ProductSpecification: 4,
      MBMobileWareProductDetail_ProductPackage: 4,
      MBMobileWareProductDetail_AddToCart: 4,
      MBMobileWareProductDetail_DeliveryAddr: 4,
      MBProductdetail_Photo: 5,
      MBProductdetail_Productinfo: 5,
      MBProductdetail_Saleinfo: 5,
      MBProductdetail_Shopid: 5,
      MBProductdetail_GuessYouLike: 5,
      MBProductdetail_Addtocart: 5,
      MBProductdetail_Easybuy: 5,
      MBProductdetail_GotoCart: 5,
      MBProductdetail_AddtoFollowed: 5,
      MBProductdetail_Advert: 5,
      MBProductdetail_SalesPromotion: 5,
      MBProductdetail_PreferentialPackage: 5,
      MBProductdetail_Specification: 5,
      MBProductdetail_Address: 5,
      MBProductdetail_ServiceInfo: 5,
      MBProductdetail_Insurances: 5,
      MBProductdetail_InsurancesSelect: 5,
      MBProductdetail_ProductdetailEntrance: 5,
      MBProductdetail_ProductCommentEntrance: 5,
      MBProductdetail_ProductShowEntrance: 5,
      MBProductdetail_ConsultEntrance: 5,
      MBProductdetail_AskServiceEntrance: 5,
      MRecharge_PhoneBillTab: 4,
      MRecharge_PhoneTrafficTab: 4,
      MRecharge_Product: 4,
      MRecharge_ViewRechargeRecords: 4,
      MRecharge_ImmediateRecharge: 4,
      MRecharge_Coupons: 4,
      MRecharge_JDBeans: 4,
      MRecharge_ConfirmThePayment: 4,
      MRecharge_TrafficOrder: 4,
      MRecharge_TelephoneBill: 4,
      MRecharge_OrderBuyAgain: 4,
      MRecharge_OrderGoToPay: 4,
      MRecharge_Order: 4,
      MRecharge_OrderDetailBuyAgain: 4,
      MRecharge_OrderDetailGoToPay: 4,
      MGroupPurchase_TopClassification: 4,
      MGroupPurchase_Search: 4,
      MGroupPurchase_FocusPic: 4,
      MGroupPurchase_TimeSlotProduct: 4,
      MGroupPurchase_TimeSlot: 4,
      MGroupPurchase_1Plus2AdPosition: 4,
      MGroupPurchase_TodayProduct: 4,
      MGroupPurchase_BrandProduct: 4,
      MGroupPurchase_BrandSearch: 4,
      MGroupPurchase_LifeLocation: 4,
      MGroupPurchase_LifeSearch: 4,
      MGroupPurchase_LifeFocusPic: 4,
      MGroupPurchase_LifeClassificationIcon: 4,
      MGroupPurchase_Life1Plus2AdPosition: 4,
      MGroupPurchase_LifeYouLikeProduct: 4,
      MProductCoupon_GetSpecialcoupon: 2,
      MProductCoupon_Get: 2,
      MList_Comprehensive: 1,
      MSearch_Banner: 3,
      MExplosionPurchase_Qualification: 4,
      MExplosionPurchase_Purchase: 4,
      MDoubleElevenStrategy_RemindMe: 4,
      MShake_GoToProductDetail: 4,
      MJingDouHome_Exclusive: 2,
      MJingDouHome_Rank: 2,
      MTopic_Search: 2,
      MTopic_TopFocusPic: 2,
      MTopic_AdvancedFocusPic: 2,
      MTopic_Words: 2,
      MTopic_SecKillProduct: 2,
      MTopic_HighFocusPic: 2,
      MTopic_SingleRecommendProduct: 2,
      MTopic_DoubleRecommendProduct: 2,
      MTopic_LongPicProduct: 2,
      MTopic_SecondMenus: 2,
      MShopcartShare_AddtoMyShopcart: 2,
      MHandSecKill_Morespecialslae: 2,
      MHandSecKill_Preferential: 2,
      MHandSecKill_Banner: 2,
      MAuction_PreProduct: 4,
      MJingDouHome_Ad: 2,
      MJingDouHome_TopicProduct: 4,
      MProductdetail_ImmediatelyBuy: 5,
      MCashierPay_RecommendProduct: 3,
      MMyJD_MyCommodityCard: 4,
      MMarket_Eight: 4,
      MMarket_Twelve: 4,
      MMarket_Twenty: 4,
      MMarket_BuyNow: 4,
      MMarket_Product: 4,
      MMarket_ShopCart: 4,
      MCarSteward_TireShop: 4,
      MCarSteward_TireChange: 4,
      MCarSteward_TireAddress: 4,
      MCarSteward_TireConfirmUnlogin: 4,
      MCarSteward_TireTelNum: 4,
      MCarSteward_TireConfirmLogin: 4,
      MSpringPurchase_Strategy: 4,
      MSpringPurchase_RedBag: 4,
      MSpringPurchase_SecKillTime: 3,
      MSpringPurchase_SecKillProduct: 4,
      MSpringPurchase_SellingTabProduct: 3,
      MSpringPurchase_MainSubField: 3,
      MSpringPurchase_SubField: 3,
      MSpringPurchase_FieldProduct: 4,
      MSpringPurchase_SellingTab: 3,
      MSpringPurchaseNavigation_AllTheMeeting: 3,
      MSpringPurchaseNavigation_FirstClassDirectory: 3,
      MSpringPurchaseNavigation_SecondClassDirectory: 3,
      MSpringPurchaseNavigation_FieldProduct: 4,
      MSpringPurchaseNavigation_NavigationBottomTab: 3,
      MSpringPurchase_MemberActivity: 3,
      MSpringPurchase_BIField: 3,
      MCarSteward_Accessory: 4,
      MCarSteward_Maintenance: 4,
      MCarSteward_Models: 4,
      MCarStewardModels_BrandLetter: 4,
      MCarStewardModels_Models: 4,
      MCarSteward_AccessoryType: 4,
      MCarSteward_QueryAccessory: 4,
      MCarSteward_QueryMaintenance: 4,
      MCarSteward_Product: 4,
      MCarSteward_Check: 4,
      MCarSteward_Change: 4,
      MCarStewardChange_SalesVolume: 4,
      MCarStewardChange_Price: 4,
      MCarStewardChange_Popularity: 4,
      MCarStewardChange_Product: 4,
      MCarStewardChange_Selection: 4,
      MCarSteward_ShoppingCart: 4,
      MDonotClose_Banner: 3,
      MDonotClose_SubField: 3,
      MDonotClose_WBanner: 3,
      MDonotClose_WSubField: 3,
      Babel_HtmlContent: 4,
      Babel_CodeContent: 4,
      MFlashbuy_TopTab: 3,
      MFlashbuy_FocusPic: 3,
      MFlashbuy_RecommendLeft: 3,
      MFlashbuy_RecommendRightUp: 3,
      MFlashbuy_RecommendRightDownLeft: 3,
      MFlashbuy_RecommendRightDownRight: 3,
      MFlashbuy_ValueRush: 4,
      MFlashbuy_Brand: 3,
      MFlashbuy_BrandProduct: 4,
      MList_BSelfProduct: 4,
      MList_BPopProduct: 4,
      MList_Product: 4,
      Morder_Allorders_Cancel: 4,
      Morder_Cancelorder_Buy: 5,
      Morder_Orderdetailed_Buy: 5,
      Morder_Allorders_Buy: 5,
      MLifeTravel_Banner: 3,
      MLifeTravel_PlaneTicket: 3,
      MLifeTravel_Hotel: 3,
      MLifeTravel_Vacation: 3,
      MLifeTravel_AdmissionTicket: 3,
      MLifeTravel_Popular: 4,
      MLifeTravel_SecKill: 4,
      MLifeTravel_CharacteristicUL: 3,
      MLifeTravel_CharacteristicUR: 3,
      MLifeTravel_CharacteristicDL: 3,
      MLifeTravel_CharacteristicDM: 3,
      MLifeTravel_CharacteristicDR: 3,
      MLifeTravel_Travel: 3,
      MLifeTravel_Selected: 4,
      MSeaStore_Banner: 3,
      MSeaStore_SubField: 3,
      MSeaStore_WBanner: 3,
      MSeaStore_WSubField: 3,
      MHotel_Banner: 3,
      MHotel_HotelNear: 3,
      MHotel_Search: 3,
      MHotel_ListHotel: 4,
      MHotel_DetailOrder: 5,
      MHotel_OrderOrderAgain: 5,
      MHotel_OrderDetailOrderAgain: 5,
      MShopcartShare_Product: 2,
      MHome_Floor: 1,
      MBuyer_Banner: 3,
      MBuyer_InfoSpecial: 3,
      MBuyer_DetailPic: 4,
      MBuyer_CoDetailProduct: 4,
      MSeaGroup_Product: 4,
      MSeaGroup_MyGroupProduct: 4,
      MSeaGroup_GroupPurchase: 4,
      MSeaGroup_Friend: 4,
      MSeaGroup_Purchase: 4,
      MSeaGroup_LaunchPurchase: 4,
      MSeaGroup_WMyGroupProduct: 4,
      MSeaGroup_WProduct: 4,
      MSeaGroup_WGroupPurchase: 4,
      MSeaGroup_WParticipate: 4,
      MSeaGroup_WLaunchPurchase: 4,
      MSpringThunder_SecTabProduct: 4,
      MSpringThunder_SubField: 3,
      MSpringThunder_ClassificationTab: 3,
      MSpringThunder_ClassificationTabProduct: 4,
      MSpringThunder_AllFieldTab: 3,
      MSpringThunder_ClassificationOne: 3,
      MSpringThunder_ClassificationTwo: 3,
      MSpringThunder_MoreProduct: 3,
      MShopcartsale_JoinProduct: 4,
      MShopcartsale_AllClassification: 4,
      MShopcartsale_SecondClassification: 4,
      MShopcartsale_HotSale: 4,
      MShopcartsale_SecKill: 4,
      MShopcart_BProductid: 4,
      MShopcart_BStroll: 4,
      MShopcart_BCheckProd: 4,
      MShopcart_BCheckAll: 4,
      MShopcart_BLabel: 4,
      MShopcart_BPay: 5,
      MShopcart_BGuessYouLike: 4,
      MShopcart_BSimilaritiesEntrance: 5,
      MShopcart_BSimilaritiesProductList: 4,
      MShopcart_BCoupon: 4,
      MShopcart_BFreightnote: 4,
      MShopcart_BShopEntrance: 5,
      MSeaGroup_WFriend: 4,
      MSeaGroup_WPurchase: 4,
      MKProductDetail_AddtoShoppingCart: 2,
      MKProductDetail_BuyNow: 2,
      MKShoppingCart_RecommendSku: 1,
      MKShoppingCart_GotoBuy: 3,
      MKCheckOut_GotoBuy: 4,
      MMobileVip_Banner: 3,
      MMobileVip_SecKill: 4,
      MMobileVip_Tab: 3,
      MMobileVip_Product: 4,
      MGlobalPurchase_Zero: 3,
      MGlobalPurchase_Sixteen: 3,
      MGlobalPurchase_BuyNow: 4,
      MGlobalPurchase_Product: 4,
      MGlobalPurchase_ShopCart: 5,
      MNewPeople_RecProduct: 4,
      MNewPeople_Tab: 3,
      MNewPeople_Product: 4,
      MShop_AllProduct: 4,
      MShop_Update: 4,
      MShop_Promotion: 4,
      MShop_Coupon: 4,
      MShop_Banner: 4,
      MShop_Activity: 4,
      MShop_Product: 4,
      MProductSale_Product: 4,
      MProductSale_LookMore: 4,
      MSameShopSale_Product: 5,
      ShopBrandCelebration_HeadLine: 2,
      ShopBrandCelebration_Shop: 2,
      ShopBrandCelebration_BottomButton: 2,
      ShopBrandCelebration_ShopStreet: 2,
      MNewFunctionNavigation_QuickEntrance: 1,
      MStarDesign_Article: 3,
      MProductdetail_WindowMask: 4,
      MProductdetail_WindowClose: 4,
      MProductdetail_WindowProduct: 4,
      MProductdetail_WindowStroll: 4,
      MProductdetail_WindowShopCart: 5,
      MProductdetail_MoreYouLike: 3,
      MStarDesign_DetailPic: 4,
      MStarDesign_CoDetailProduct: 4,
      MStarDesign_Banner: 3,
      MStarDesign_SpecialLT: 3,
      MStarDesign_SpecialLB: 3,
      MStarDesign_SpecialRT: 3,
      MStarDesign_SpecialRB: 3,
      MJingDouBuy_Product: 4,
      MJingDouBuy_AddToCart: 5,
      MFlashbuy_KillProduct: 4,
      MKCheckOut_Confirm: 4,
      MNewPeople_BottomBanner: 3,
      MTopic_TimeLimitSeckillMore: 2,
      MTopic_TimeLimitSeckillTab: 2,
      MTopic_TimeLimitSeckillProduct: 2,
      MTopic_TimeLimitSeckillBuy: 2,
      MTopic_TryTab: 2,
      MTopic_TryProduct: 2,
      MTopic_TryPayPostageApply: 2,
      MTopic_TryCouponApply: 2,
      MTopic_IntelligentSale: 2,
      MTopic_ForumMessagesFstTab: 2,
      MTopic_ForumMessagesScdTab: 2,
      MTopic_ForumMessagesProduct: 2,
      MTopic_ForumMessagesBuyNow: 2,
      MTopic_ForumMessagesArticle: 2,
      MTopic_BuyPerDayPic: 2,
      MHandSecKill_Brand: 2,
      MHandSecKill_BrandProduct: 4,
      MHandSecKill_BrandDetailProduct: 4
    }),
    (function() {
      const e = 0;
      function t(e) {
        return o(r(i(e)));
      }
      function r(e) {
        return n(d(a(e), 8 * e.length));
      }
      function o(t) {
        for (
          var r, o = e ? "0123456789ABCDEF" : "0123456789abcdef", i = "", a = 0;
          a < t.length;
          a++
        )
          (r = t.charCodeAt(a)),
            (i += o.charAt((r >>> 4) & 15) + o.charAt(15 & r));
        return i;
      }
      function i(e) {
        for (var t, r, o = "", i = -1; ++i < e.length; )
          (t = e.charCodeAt(i)),
            (r = i + 1 < e.length ? e.charCodeAt(i + 1) : 0),
            t >= 55296 &&
              t <= 56319 &&
              r >= 56320 &&
              r <= 57343 &&
              ((t = 65536 + ((1023 & t) << 10) + (1023 & r)), i++),
            t <= 127
              ? (o += String.fromCharCode(t))
              : t <= 2047
              ? (o += String.fromCharCode(
                  192 | ((t >>> 6) & 31),
                  128 | (63 & t)
                ))
              : t <= 65535
              ? (o += String.fromCharCode(
                  224 | ((t >>> 12) & 15),
                  128 | ((t >>> 6) & 63),
                  128 | (63 & t)
                ))
              : t <= 2097151 &&
                (o += String.fromCharCode(
                  240 | ((t >>> 18) & 7),
                  128 | ((t >>> 12) & 63),
                  128 | ((t >>> 6) & 63),
                  128 | (63 & t)
                ));
        return o;
      }
      function a(e) {
        let t;
        const r = Array(e.length >> 2);
        for (t = 0; t < r.length; t++) r[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)
          r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return r;
      }
      function n(e) {
        for (var t = "", r = 0; r < 32 * e.length; r += 8)
          t += String.fromCharCode((e[r >> 5] >>> r % 32) & 255);
        return t;
      }
      function d(e, t) {
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        for (
          var r = 1732584193,
            o = -271733879,
            i = -1732584194,
            a = 271733878,
            n = 0;
          n < e.length;
          n += 16
        ) {
          const d = r;
          const l = o;
          const m = i;
          const _ = a;
          (o = p(
            (o = p(
              (o = p(
                (o = p(
                  (o = u(
                    (o = u(
                      (o = u(
                        (o = u(
                          (o = s(
                            (o = s(
                              (o = s(
                                (o = s(
                                  (o = c(
                                    (o = c(
                                      (o = c(
                                        (o = c(
                                          o,
                                          (i = c(
                                            i,
                                            (a = c(
                                              a,
                                              (r = c(
                                                r,
                                                o,
                                                i,
                                                a,
                                                e[n + 0],
                                                7,
                                                -680876936
                                              )),
                                              o,
                                              i,
                                              e[n + 1],
                                              12,
                                              -389564586
                                            )),
                                            r,
                                            o,
                                            e[n + 2],
                                            17,
                                            606105819
                                          )),
                                          a,
                                          r,
                                          e[n + 3],
                                          22,
                                          -1044525330
                                        )),
                                        (i = c(
                                          i,
                                          (a = c(
                                            a,
                                            (r = c(
                                              r,
                                              o,
                                              i,
                                              a,
                                              e[n + 4],
                                              7,
                                              -176418897
                                            )),
                                            o,
                                            i,
                                            e[n + 5],
                                            12,
                                            1200080426
                                          )),
                                          r,
                                          o,
                                          e[n + 6],
                                          17,
                                          -1473231341
                                        )),
                                        a,
                                        r,
                                        e[n + 7],
                                        22,
                                        -45705983
                                      )),
                                      (i = c(
                                        i,
                                        (a = c(
                                          a,
                                          (r = c(
                                            r,
                                            o,
                                            i,
                                            a,
                                            e[n + 8],
                                            7,
                                            1770035416
                                          )),
                                          o,
                                          i,
                                          e[n + 9],
                                          12,
                                          -1958414417
                                        )),
                                        r,
                                        o,
                                        e[n + 10],
                                        17,
                                        -42063
                                      )),
                                      a,
                                      r,
                                      e[n + 11],
                                      22,
                                      -1990404162
                                    )),
                                    (i = c(
                                      i,
                                      (a = c(
                                        a,
                                        (r = c(
                                          r,
                                          o,
                                          i,
                                          a,
                                          e[n + 12],
                                          7,
                                          1804603682
                                        )),
                                        o,
                                        i,
                                        e[n + 13],
                                        12,
                                        -40341101
                                      )),
                                      r,
                                      o,
                                      e[n + 14],
                                      17,
                                      -1502002290
                                    )),
                                    a,
                                    r,
                                    e[n + 15],
                                    22,
                                    1236535329
                                  )),
                                  (i = s(
                                    i,
                                    (a = s(
                                      a,
                                      (r = s(
                                        r,
                                        o,
                                        i,
                                        a,
                                        e[n + 1],
                                        5,
                                        -165796510
                                      )),
                                      o,
                                      i,
                                      e[n + 6],
                                      9,
                                      -1069501632
                                    )),
                                    r,
                                    o,
                                    e[n + 11],
                                    14,
                                    643717713
                                  )),
                                  a,
                                  r,
                                  e[n + 0],
                                  20,
                                  -373897302
                                )),
                                (i = s(
                                  i,
                                  (a = s(
                                    a,
                                    (r = s(
                                      r,
                                      o,
                                      i,
                                      a,
                                      e[n + 5],
                                      5,
                                      -701558691
                                    )),
                                    o,
                                    i,
                                    e[n + 10],
                                    9,
                                    38016083
                                  )),
                                  r,
                                  o,
                                  e[n + 15],
                                  14,
                                  -660478335
                                )),
                                a,
                                r,
                                e[n + 4],
                                20,
                                -405537848
                              )),
                              (i = s(
                                i,
                                (a = s(
                                  a,
                                  (r = s(r, o, i, a, e[n + 9], 5, 568446438)),
                                  o,
                                  i,
                                  e[n + 14],
                                  9,
                                  -1019803690
                                )),
                                r,
                                o,
                                e[n + 3],
                                14,
                                -187363961
                              )),
                              a,
                              r,
                              e[n + 8],
                              20,
                              1163531501
                            )),
                            (i = s(
                              i,
                              (a = s(
                                a,
                                (r = s(r, o, i, a, e[n + 13], 5, -1444681467)),
                                o,
                                i,
                                e[n + 2],
                                9,
                                -51403784
                              )),
                              r,
                              o,
                              e[n + 7],
                              14,
                              1735328473
                            )),
                            a,
                            r,
                            e[n + 12],
                            20,
                            -1926607734
                          )),
                          (i = u(
                            i,
                            (a = u(
                              a,
                              (r = u(r, o, i, a, e[n + 5], 4, -378558)),
                              o,
                              i,
                              e[n + 8],
                              11,
                              -2022574463
                            )),
                            r,
                            o,
                            e[n + 11],
                            16,
                            1839030562
                          )),
                          a,
                          r,
                          e[n + 14],
                          23,
                          -35309556
                        )),
                        (i = u(
                          i,
                          (a = u(
                            a,
                            (r = u(r, o, i, a, e[n + 1], 4, -1530992060)),
                            o,
                            i,
                            e[n + 4],
                            11,
                            1272893353
                          )),
                          r,
                          o,
                          e[n + 7],
                          16,
                          -155497632
                        )),
                        a,
                        r,
                        e[n + 10],
                        23,
                        -1094730640
                      )),
                      (i = u(
                        i,
                        (a = u(
                          a,
                          (r = u(r, o, i, a, e[n + 13], 4, 681279174)),
                          o,
                          i,
                          e[n + 0],
                          11,
                          -358537222
                        )),
                        r,
                        o,
                        e[n + 3],
                        16,
                        -722521979
                      )),
                      a,
                      r,
                      e[n + 6],
                      23,
                      76029189
                    )),
                    (i = u(
                      i,
                      (a = u(
                        a,
                        (r = u(r, o, i, a, e[n + 9], 4, -640364487)),
                        o,
                        i,
                        e[n + 12],
                        11,
                        -421815835
                      )),
                      r,
                      o,
                      e[n + 15],
                      16,
                      530742520
                    )),
                    a,
                    r,
                    e[n + 2],
                    23,
                    -995338651
                  )),
                  (i = p(
                    i,
                    (a = p(
                      a,
                      (r = p(r, o, i, a, e[n + 0], 6, -198630844)),
                      o,
                      i,
                      e[n + 7],
                      10,
                      1126891415
                    )),
                    r,
                    o,
                    e[n + 14],
                    15,
                    -1416354905
                  )),
                  a,
                  r,
                  e[n + 5],
                  21,
                  -57434055
                )),
                (i = p(
                  i,
                  (a = p(
                    a,
                    (r = p(r, o, i, a, e[n + 12], 6, 1700485571)),
                    o,
                    i,
                    e[n + 3],
                    10,
                    -1894986606
                  )),
                  r,
                  o,
                  e[n + 10],
                  15,
                  -1051523
                )),
                a,
                r,
                e[n + 1],
                21,
                -2054922799
              )),
              (i = p(
                i,
                (a = p(
                  a,
                  (r = p(r, o, i, a, e[n + 8], 6, 1873313359)),
                  o,
                  i,
                  e[n + 15],
                  10,
                  -30611744
                )),
                r,
                o,
                e[n + 6],
                15,
                -1560198380
              )),
              a,
              r,
              e[n + 13],
              21,
              1309151649
            )),
            (i = p(
              i,
              (a = p(
                a,
                (r = p(r, o, i, a, e[n + 4], 6, -145523070)),
                o,
                i,
                e[n + 11],
                10,
                -1120210379
              )),
              r,
              o,
              e[n + 2],
              15,
              718787259
            )),
            a,
            r,
            e[n + 9],
            21,
            -343485551
          )),
            (r = g(r, d)),
            (o = g(o, l)),
            (i = g(i, m)),
            (a = g(a, _));
        }
        return Array(r, o, i, a);
      }
      function l(e, t, r, o, i, a) {
        return g(((n = g(g(t, e), g(o, a))) << (d = i)) | (n >>> (32 - d)), r);
        let n;
        let d;
      }
      function c(e, t, r, o, i, a, n) {
        return l((t & r) | (~t & o), e, t, i, a, n);
      }
      function s(e, t, r, o, i, a, n) {
        return l((t & o) | (r & ~o), e, t, i, a, n);
      }
      function u(e, t, r, o, i, a, n) {
        return l(t ^ r ^ o, e, t, i, a, n);
      }
      function p(e, t, r, o, i, a, n) {
        return l(r ^ (t | ~o), e, t, i, a, n);
      }
      function g(e, t) {
        const r = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
      }
      lr.hex_md5 = t;
    })(),
    (function() {
      const e = lr.provinceId || lr.provinceid || "";
      const t = lr.cityId || lr.cityid || "";
      const r = lr.countryId || lr.countryid || "";
      const o = lr.townId || lr.townid || "";
      const i = lr.skuId || lr.skuid || "";
      let a = lr.skuPrice || lr.skuprice || "";
      const n = lr.stockState || lr.stockstate || "";
      const d = {};
      const l = {};
      if (e && t && r && i && a && n) {
        let c;
        let s;
        let u = -1;
        let p = -1;
        let g = -1;
        const m = {};
        (m.pdsvj = {}),
          n === "æœ‰è´§"
            ? ((u = 1), (p = 5), (g = 33))
            : n.indexOf("æœ‰è´§") === 0
            ? ((u = 2), (p = 5), (g = 39))
            : n.indexOf("é¢„å®š") > -1
            ? ((u = 3), (p = 5), (g = 36))
            : n === "æ— è´§"
            ? ((u = 4), (p = 5), (g = 34))
            : n.indexOf("çŽ°è´§") > -1
            ? ((u = 7), (p = 5), (g = 33))
            : n.indexOf("æš‚ä¸æ”¯æŒé…é€") > -1 && ((u = 8), (p = 6), (g = 40)),
          isNaN(a) && (a = -1),
          (c = `${e}_${t}_${r}_${o}`),
          (s = [i, a, u, p, g]),
          (d.area = c),
          (d.sku = [s]),
          (l.t1 = "pv_stock"),
          (l.t2 = "sku"),
          (l.p0 = d),
          (m.logType = lr.logType.pd),
          (m.pdsvj = l),
          (m.isByJson = !0),
          (m.toWarriors = !0),
          logCmd(m);
      }
    })(),
    (window.getUnionSeries = getUnionSeries),
    (window.getAndroidUnionSeries = getAndroidUnionSeries),
    (window.getUnionSeriesJsonObj = getUnionSeriesJsonObj),
    (typeof lr.autoLogPv == "undefined" || lr.autoLogPv) &&
      (logPv(),
      lr.anchorpvflag &&
        (window.history
          ? ((a1121 = window.history),
            (a1122 = a1121.pushState),
            (a1121.pushState = function(e) {
              return (
                typeof a1121.onpushstate == "function" &&
                  a1121.onpushstate({ state: e }),
                a1122.apply(a1121, arguments)
              );
            }),
            (lr.account =
              typeof lr.account != "undefined" ? lr.account : getCookie("pin")),
            (window.onpopstate = history.onpushstate = function(e) {
              setTimeout(function() {
                (lr.refUrl = lr.curUrl),
                  (lr.curUrl = document.location.href),
                  logPv();
              }, 0);
            }))
          : window.addEventListener("hashchange", function() {
              (lr.refUrl = lr.curUrl),
                (lr.curUrl = document.location.href),
                (lr.account =
                  typeof lr.account != "undefined"
                    ? lr.account
                    : getCookie("pin")),
                logPv();
            }))),
    (JA.util = {
      join(e) {
        return joinArrayBySeparator(e);
      },
      getParameter(e, t) {
        return getParameter(t, e);
      },
      Wv(e, t, r, o) {
        setCookie(e, t, r, o);
      },
      Vv(e) {
        return getCookie(e);
      }
    }),
    (JA.tracker = {
      sendNew(e, t) {},
      ngloader(e, t) {},
      ngaloader(e, t, r) {},
      ngloaderJSON(e, t) {},
      bloading(e, t, r) {},
      sendOld() {},
      loading() {},
      aloading() {},
      aloadingJSON() {}
    }),
    (window.log = log),
    (window.logJSON = logJSON),
    (window.nlog = nlog),
    (window.expLogJSON = expLogJSON);
  try {
    setPageParamForSdk(MPing.EventSeries.getSeries());
  } catch (e) {}
  function setPPRD_PValue(e, t) {
    const r = `${e}.${t}`;
    let o = getCookie(lr.PPRD_PCCookieName) || getCookie("PPRD_P") || "";
    const i = {
      EA: /EA\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,
      IA: /IA\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,
      CT: /CT\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,
      PD: /PD\.(\d+)\.(\d+)\.(\d+)(\D?)/gim,
      DAP: /DAP\.([^-]*)(-?)/gim,
      FOCUS: /FOCUS\.([^-]*)(-?)/gim,
      MART: /MART\.([^-]*)(-?)/gim,
      QZGDT: /QZGDT\.([^\.\-]+)(-?)/gim,
      QZZTC: /QZZTC\.([^\.\-]+)(-?)/gim,
      ADKEY: /ADKEY\.([^\.\-]+)(-?)/gim,
      UUID: /UUID\.([^\.\-]+)(-?)/gim,
      WDSTAG: /WDSTAG\.([^-]*)(-?)/gim,
      WQVERSION: /WQVERSION\.([^\.\-]+)(-?)/gim,
      GROUP: /GROUP\.([^\.\-]+)(-?)/gim,
      LOGID: /LOGID\.([^-]*)(-?)/gim,
      WQLOGID: /WQLOGID\.([^-]*)(-?)/gim
    }[e];
    i.test(o)
      ? (o =
          e == "EA" || e == "IA" || e == "CT" || e == "PD"
            ? o.replace(i, `${r}$4`)
            : o.replace(i, `${r}$2`))
      : (o += o.length == 0 ? r : `-${r}`),
      (o = o
        .replace(/-?UUID\.-/g, "-")
        .replace(/^-|-UUID\.$/g, "")
        .replace(/-+/g, "-")),
      setCookie(lr.PPRD_PCCookieName, o, lr.ckDomain, 2592e5);
  }
  function setCookiePtag(e) {
    let t;
    let r;
    let o = "";
    const i = /PTAG[=,](\d+)\.(\d+)\.(\d+)\D?/gim.exec(
      (e && `ptag=${e}`) || location.href.toString()
    );
    if (!(i == null || i.length != 4 || i[1] < 0 || i[2] < 0 || i[3] < 0)) {
      switch (((t = i[1] % 1e5), (r = `${i[1]}.${i[2]}.${i[3]}`), !0)) {
        case t >= 17001 && t < 2e4:
          o = "EA";
          break;
        case t >= 27001 && t < 3e4:
          o = "IA";
          break;
        case t >= 37001 && t < 4e4:
          o = "CT";
          break;
        case t >= 47001 && t < 5e4:
          o = "PD";
          break;
        default:
          o = "";
      }
      o && setPPRD_PValue(o, r);
    }
  }
  function getCookiePtag() {
    let e = "";
    const t = [];
    let r = "";
    const o = getCookie(lr.PPRD_PCCookieName) || "";
    const i = {
      EA: /EA\.(\d+)\.(\d+)\.(\d+)/gim,
      IA: /IA\.(\d+)\.(\d+)\.(\d+)/gim,
      CT: /CT\.(\d+)\.(\d+)\.(\d+)/gim,
      PD: /PD\.(\d+)\.(\d+)\.(\d+)/gim
    };
    if (o.length) {
      for (const a in i)
        (e = i[a]), (r = o.match(e)) && r.length && t.push(r[0]);
      return t.join("-");
    }
    return "";
  }
  function getPPRD_PValue(e) {
    const t = {
      QZGDT: /QZGDT\.([^\.\-]+)/gim,
      QZZTC: /QZZTC\.([^\.\-]+)/gim,
      ADKEY: /ADKEY\.([^\.\-]+)/gim,
      UUID: /UUID\.([^\.\-]+)/gim,
      WQVERSION: /WQVERSION\.([^\.\-]+)/gim,
      JZTK: /JZTK\.([^\.\-]+)/gim,
      EA: /EA\.((\d+)\.(\d+)\.(\d+))(\D?)/gim
    };
    const r = getCookie(lr.PPRD_PCCookieName) || "";
    const o = Array.isArray(e);
    const i = {};
    return (
      (e = o ? e : [e]),
      r &&
        e.forEach(function(e) {
          t[e] && t[e].test(r) && (i[e] = RegExp.$1 || "");
        }),
      o ? i : i[e[0]]
    );
  }
  window.wa && wa("define", "unify");
  var StorageBridge = {
    _iframe: null,
    _queries: [],
    _queryID: 0,
    _bridgeDomain: "https://wl.jd.com",
    _init() {
      if (
        !StorageBridge._iframe &&
        window.JSON &&
        window.localStorage &&
        window.postMessage &&
        window.sessionStorage &&
        document.body
      ) {
        const e = document.createElement("iframe");
        (e.style.cssText =
          "position:absolute;width:1px;height:1px;left:-9999px;"),
          document.body.appendChild(e),
          window.addEventListener &&
            (e.addEventListener(
              "load",
              function() {
                (StorageBridge._iframe = e), StorageBridge._onIframeLoad();
              },
              !1
            ),
            window.addEventListener("message", StorageBridge._onMessage, !1)),
          (e.src = `${this._bridgeDomain}/storagebridge.html`);
      }
    },
    _onMessage(e) {
      if (!(e.origin.indexOf(StorageBridge._bridgeDomain) < 0)) {
        const t = JSON.parse(e.data);
        const r = StorageBridge._queries[t.id];
        r &&
          r.callback &&
          (delete StorageBridge._queries[t.id],
          r.callback && r.callback(t.value));
      }
    },
    _onIframeLoad() {
      for (const e in this._queries)
        StorageBridge._postMessage(this._queries[e]);
    },
    _postMessage(t) {
      if (this._iframe)
        try {
          this._iframe.contentWindow.postMessage(
            JSON.stringify(t),
            this._bridgeDomain
          );
        } catch (e) {}
    },
    set(e, t, r) {
      const o = { key: e, value: t, op: "S", id: this._queryID++, callback: r };
      (this._queries[o.id] = o), StorageBridge._postMessage(o);
    },
    get(e, t) {
      const r = { key: e, op: "G", id: this._queryID++, callback: t };
      (this._queries[r.id] = r), StorageBridge._postMessage(r);
    },
    remove(e, t) {
      const r = { key: e, op: "R", id: this._queryID++, callback: t };
      (this._queries[r.id] = r), StorageBridge._postMessage(r);
    }
  };
  function logByImg(e) {
    let t = new Image(1, 1);
    (t.onload = function() {
      (t.onload = null), (t = null);
    }),
      (t.src = e);
  }
  isWX() &&
    !isWxapp() &&
    (document.readyState === "loading"
      ? document.addEventListener(
          "DOMContentLoaded",
          function() {
            StorageBridge._init();
          },
          !1
        )
      : StorageBridge._init()),
    StorageBridge.get("npr", function(e) {
      e &&
        (StorageBridge.remove("npr"),
        e.method == "POST"
          ? logByPost(e.addr, e.data)
          : logByGet(e.addr, e.data));
    });
  const unifyRecoReport = function(_data) {
    const serverAddr = "//knicks.jd.com/log/server";
    const data = extend({}, _data);
    const vArray = [];
    const sceneMap = { weixin: 0, qq: 1, jdm: 5, mobile: 5 };
    let scene = 0;
    window.JD && (scene = sceneMap[JD.device.scene || "weixin"]);
    const sid = `${lr.uuid}|${lr.visitTimes}`;
    const _params = {
      m: "MO_J2011-2",
      url: encodeURIComponent(window.location.href || ""),
      ref: encodeURIComponent(document.referrer || getUrlParam("wdref") || ""),
      hitType: scene,
      sid
    };
    if (data.impr || data.clk) {
      for (var key in _params) vArray.push(`${key}=${_params[key]}`);
      let content = data.impr ? data.impr : data.clk;
      let extraVParamStr = vArray.join("$");
      if (content.indexOf("mercury") !== -1) {
        extraVParamStr += "$";
        const contentArr = content.split("v=");
        contentArr.length > 1 &&
          (content = `${contentArr[0]}v=${extraVParamStr}${contentArr[1]}`);
      } else
        (extraVParamStr = `$${extraVParamStr}`), (content += extraVParamStr);
      data.clk ? StorageBridge.set("npr-reco", content) : logByImg(content);
    } else {
      const basicData = {
        chan_type: chanType,
        net_type: netType,
        os: lr.os,
        openid: openId,
        user_type: lr.pinId ? 1 : 0
      };
      extend(data, basicData),
        (data.t = data.action == "0" ? "rec_common_exp" : "rec_common_clk"),
        (data.rm = new Date().getTime()),
        data.pin ||
          (data.pin = eval(`'${unescape(getCookie("jdpin") || "-")}'`)),
        data.uuid || (data.uuid = lr.uuid),
        data.sid || (data.sid = sid),
        data.type || (data.type = `rec.${data.p || ""}`);
      /* eslint-disable no-redeclare */
      for (var key in data) key !== "t" && vArray.push(`${key}=${data[key]}`);
      const url = `${serverAddr}?t=${data.t}&v=${vArray.join("$")}`;
      data.action == 1 ? StorageBridge.set("npr-reco", url) : logByImg(url);
    }
  };
  StorageBridge.get("npr-reco", function(e) {
    e && (StorageBridge.remove("npr-reco"), logByImg(e));
  }),
    (window.unifyRecoReport = unifyRecoReport);
};

// 埋点点击事件
export const logClick = (eventId, event_param, event_level, skuId) => {
  try {
    const click = new MPing.inputs.Click(eventId); // 构造click请求
    let url_params = window.location.href; // 页面路径后面的参数
    url_params = getUrlVars(url_params); // 将参数转换成json键值对格式
    click.event_param = event_param; // 设置click的参数
    click.event_level = event_level; // 设置事件等级
    click.skuId = skuId; // 商品ID
    click.description = "click上报埋点";
    click.updateEventSeries(); // 更新事件串

    const mping = new MPing(); // 构造上报实例
    mping.send(click); // 上报click
  } catch (e) {
    console.log(e);
  }
};

/*
 * 转换url参数为json方法
 * some=params&over=here => {"some":"params","over":"here"}
 */
function getUrlVars(url) {
  let hash;
  const myJson = {};
  if (!!url && url.indexOf("?") > -1) {
    let hashes = url.slice(url.indexOf("?") + 1);
    if (url.indexOf("&") > -1) {
      hashes = hashes.split("&");
    } else {
      hashes = [hashes];
    }

    for (let i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      myJson[hash[0]] = hash[1];
    }
  }
  return myJson;
}

// 埋点上报PV
export const logPv = (param = {}, skuId = "") => {
  try {
    if (!param.page_id) return;
    const pv = new MPing.inputs.PV(param); // 构造pv 请求,可选参数为pageId，可以为数字、字符串、或者{page_id: "1212"}；如埋点方案未要求或者未提到pageid，请忽略，即 var pv = new MPing.inputs.PV();
    let url_params = window.location.href; // 页面路径后面的参数
    url_params = getUrlVars(url_params); // 将参数转换成json键值对格式

    Object.keys(param).forEach(key => {
      // ctp 域名
      pv.ctp = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

      pv.event_param = JSON.stringify({
        description: "pv上报埋点",
        page_id: param.page_id,
        page_name: param.page_name,
        page_param: url_params
      });

      pv[key] =
        typeof param[key] === "object"
          ? JSON.stringify(param[key])
          : param[key];
    });
    // 商品详情页上报埋点需要skuId
    if (skuId) {
      pv.sku = skuId;
    }
    pv.page_param = url_params ? JSON.stringify(url_params) : "";
    const mping = new MPing(); // 构造上报实例
    mping.send(pv); // 上报pv
  } catch (e) {
    console.log(e);
  }
};

export default {
  init,
  logPv,
  logClick
};
