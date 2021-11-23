/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */
!(function (n, t) {
  "function" == typeof define && define.amd
    ? define(function () {
        return t(n, n.document, undefined);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t(n, n.document, undefined))
    : t(n, n.document, undefined);
})("undefined" != typeof window ? window : this, function (vi, hi, di) {
  "use strict";
  var o,
    l,
    a,
    u,
    pi = "object",
    bi = "function",
    mi = "array",
    gi = "string",
    wi = "boolean",
    yi = "number",
    f = "undefined",
    n = "null",
    xi = {
      c: "class",
      s: "style",
      i: "id",
      l: "length",
      p: "prototype",
      ti: "tabindex",
      oH: "offsetHeight",
      cH: "clientHeight",
      sH: "scrollHeight",
      oW: "offsetWidth",
      cW: "clientWidth",
      sW: "scrollWidth",
      hOP: "hasOwnProperty",
      bCR: "getBoundingClientRect",
    },
    _i =
      ((o = {}),
      (l = {}),
      {
        e: (a = ["-webkit-", "-moz-", "-o-", "-ms-"]),
        u: (u = ["WebKit", "Moz", "O", "MS"]),
        v: function (n) {
          var t = l[n];
          if (l[xi.hOP](n)) return t;
          for (
            var r, e, i, o = c(n), u = hi.createElement("div")[xi.s], f = 0;
            f < a.length;
            f++
          )
            for (
              i = a[f].replace(/-/g, ""),
                r = [n, a[f] + n, i + o, c(i) + o],
                e = 0;
              e < r[xi.l];
              e++
            )
              if (u[r[e]] !== di) {
                t = r[e];
                break;
              }
          return (l[n] = t);
        },
        d: function (n, t, r) {
          var e = n + " " + t,
            i = l[e];
          if (l[xi.hOP](e)) return i;
          for (
            var o,
              u = hi.createElement("div")[xi.s],
              f = t.split(" "),
              a = r || "",
              c = 0,
              s = -1;
            c < f[xi.l];
            c++
          )
            for (; s < _i.e[xi.l]; s++)
              if (
                ((o = s < 0 ? f[c] : _i.e[s] + f[c]),
                (u.cssText = n + ":" + o + a),
                u[xi.l])
              ) {
                i = o;
                break;
              }
          return (l[e] = i);
        },
        m: function (n, t, r) {
          var e = 0,
            i = o[n];
          if (!o[xi.hOP](n)) {
            for (i = vi[n]; e < u[xi.l]; e++)
              i = i || vi[(t ? u[e] : u[e].toLowerCase()) + c(n)];
            o[n] = i;
          }
          return i || r;
        },
      });
  function c(n) {
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
  var Oi = {
    wW: r(t, 0, !0),
    wH: r(t, 0),
    mO: r(_i.m, 0, "MutationObserver", !0),
    rO: r(_i.m, 0, "ResizeObserver", !0),
    rAF: r(_i.m, 0, "requestAnimationFrame", !1, function (n) {
      return vi.setTimeout(n, 1e3 / 60);
    }),
    cAF: r(_i.m, 0, "cancelAnimationFrame", !1, function (n) {
      return vi.clearTimeout(n);
    }),
    now: function () {
      return (Date.now && Date.now()) || new Date().getTime();
    },
    stpP: function (n) {
      n.stopPropagation ? n.stopPropagation() : (n.cancelBubble = !0);
    },
    prvD: function (n) {
      n.preventDefault && n.cancelable
        ? n.preventDefault()
        : (n.returnValue = !1);
    },
    page: function (n) {
      var t =
          ((n = n.originalEvent || n).target || n.srcElement || hi)
            .ownerDocument || hi,
        r = t.documentElement,
        e = t.body;
      if (n.touches === di)
        return !n.pageX && n.clientX && null != n.clientX
          ? {
              x:
                n.clientX +
                ((r && r.scrollLeft) || (e && e.scrollLeft) || 0) -
                ((r && r.clientLeft) || (e && e.clientLeft) || 0),
              y:
                n.clientY +
                ((r && r.scrollTop) || (e && e.scrollTop) || 0) -
                ((r && r.clientTop) || (e && e.clientTop) || 0),
            }
          : { x: n.pageX, y: n.pageY };
      var i = n.touches[0];
      return { x: i.pageX, y: i.pageY };
    },
    mBtn: function (n) {
      var t = n.button;
      return n.which || t === di
        ? n.which
        : 1 & t
        ? 1
        : 2 & t
        ? 3
        : 4 & t
        ? 2
        : 0;
    },
    inA: function (n, t) {
      for (var r = 0; r < t[xi.l]; r++)
        try {
          if (t[r] === n) return r;
        } catch (e) {}
      return -1;
    },
    isA: function (n) {
      var t = Array.isArray;
      return t ? t(n) : this.type(n) == mi;
    },
    type: function (n) {
      return n === di || null === n
        ? n + ""
        : Object[xi.p].toString
            .call(n)
            .replace(/^\[object (.+)\]$/, "$1")
            .toLowerCase();
    },
    bind: r,
  };
  function t(n) {
    return n
      ? vi.innerWidth || hi.documentElement[xi.cW] || hi.body[xi.cW]
      : vi.innerHeight || hi.documentElement[xi.cH] || hi.body[xi.cH];
  }
  function r(n, t) {
    if (typeof n != bi) throw "Can't bind function!";
    var r = xi.p,
      e = Array[r].slice.call(arguments, 2),
      i = function () {},
      o = function () {
        return n.apply(
          this instanceof i ? this : t,
          e.concat(Array[r].slice.call(arguments))
        );
      };
    return n[r] && (i[r] = n[r]), (o[r] = new i()), o;
  }
  var s,
    v,
    h,
    k,
    I,
    T,
    d,
    p,
    Si = Math,
    zi = vi.jQuery,
    A =
      ((s = {
        p: Si.PI,
        c: Si.cos,
        s: Si.sin,
        w: Si.pow,
        t: Si.sqrt,
        n: Si.asin,
        a: Si.abs,
        o: 1.70158,
      }),
      {
        swing: function (n, t, r, e, i) {
          return 0.5 - s.c(n * s.p) / 2;
        },
        linear: function (n, t, r, e, i) {
          return n;
        },
        easeInQuad: function (n, t, r, e, i) {
          return e * (t /= i) * t + r;
        },
        easeOutQuad: function (n, t, r, e, i) {
          return -e * (t /= i) * (t - 2) + r;
        },
        easeInOutQuad: function (n, t, r, e, i) {
          return (t /= i / 2) < 1
            ? (e / 2) * t * t + r
            : (-e / 2) * (--t * (t - 2) - 1) + r;
        },
        easeInCubic: function (n, t, r, e, i) {
          return e * (t /= i) * t * t + r;
        },
        easeOutCubic: function (n, t, r, e, i) {
          return e * ((t = t / i - 1) * t * t + 1) + r;
        },
        easeInOutCubic: function (n, t, r, e, i) {
          return (t /= i / 2) < 1
            ? (e / 2) * t * t * t + r
            : (e / 2) * ((t -= 2) * t * t + 2) + r;
        },
        easeInQuart: function (n, t, r, e, i) {
          return e * (t /= i) * t * t * t + r;
        },
        easeOutQuart: function (n, t, r, e, i) {
          return -e * ((t = t / i - 1) * t * t * t - 1) + r;
        },
        easeInOutQuart: function (n, t, r, e, i) {
          return (t /= i / 2) < 1
            ? (e / 2) * t * t * t * t + r
            : (-e / 2) * ((t -= 2) * t * t * t - 2) + r;
        },
        easeInQuint: function (n, t, r, e, i) {
          return e * (t /= i) * t * t * t * t + r;
        },
        easeOutQuint: function (n, t, r, e, i) {
          return e * ((t = t / i - 1) * t * t * t * t + 1) + r;
        },
        easeInOutQuint: function (n, t, r, e, i) {
          return (t /= i / 2) < 1
            ? (e / 2) * t * t * t * t * t + r
            : (e / 2) * ((t -= 2) * t * t * t * t + 2) + r;
        },
        easeInSine: function (n, t, r, e, i) {
          return -e * s.c((t / i) * (s.p / 2)) + e + r;
        },
        easeOutSine: function (n, t, r, e, i) {
          return e * s.s((t / i) * (s.p / 2)) + r;
        },
        easeInOutSine: function (n, t, r, e, i) {
          return (-e / 2) * (s.c((s.p * t) / i) - 1) + r;
        },
        easeInExpo: function (n, t, r, e, i) {
          return 0 == t ? r : e * s.w(2, 10 * (t / i - 1)) + r;
        },
        easeOutExpo: function (n, t, r, e, i) {
          return t == i ? r + e : e * (1 - s.w(2, (-10 * t) / i)) + r;
        },
        easeInOutExpo: function (n, t, r, e, i) {
          return 0 == t
            ? r
            : t == i
            ? r + e
            : (t /= i / 2) < 1
            ? (e / 2) * s.w(2, 10 * (t - 1)) + r
            : (e / 2) * (2 - s.w(2, -10 * --t)) + r;
        },
        easeInCirc: function (n, t, r, e, i) {
          return -e * (s.t(1 - (t /= i) * t) - 1) + r;
        },
        easeOutCirc: function (n, t, r, e, i) {
          return e * s.t(1 - (t = t / i - 1) * t) + r;
        },
        easeInOutCirc: function (n, t, r, e, i) {
          return (t /= i / 2) < 1
            ? (-e / 2) * (s.t(1 - t * t) - 1) + r
            : (e / 2) * (s.t(1 - (t -= 2) * t) + 1) + r;
        },
        easeInElastic: function (n, t, r, e, i) {
          var o = s.o,
            u = 0,
            f = e;
          return 0 == t
            ? r
            : 1 == (t /= i)
            ? r + e
            : ((u = u || 0.3 * i),
              (o =
                f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)),
              -(f * s.w(2, 10 * --t) * s.s(((t * i - o) * (2 * s.p)) / u)) + r);
        },
        easeOutElastic: function (n, t, r, e, i) {
          var o = s.o,
            u = 0,
            f = e;
          return 0 == t
            ? r
            : 1 == (t /= i)
            ? r + e
            : ((u = u || 0.3 * i),
              (o =
                f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)),
              f * s.w(2, -10 * t) * s.s(((t * i - o) * (2 * s.p)) / u) + e + r);
        },
        easeInOutElastic: function (n, t, r, e, i) {
          var o = s.o,
            u = 0,
            f = e;
          return 0 == t
            ? r
            : 2 == (t /= i / 2)
            ? r + e
            : ((u = u || i * (0.3 * 1.5)),
              (o =
                f < s.a(e) ? ((f = e), u / 4) : (u / (2 * s.p)) * s.n(e / f)),
              t < 1
                ? f *
                    s.w(2, 10 * --t) *
                    s.s(((t * i - o) * (2 * s.p)) / u) *
                    -0.5 +
                  r
                : f *
                    s.w(2, -10 * --t) *
                    s.s(((t * i - o) * (2 * s.p)) / u) *
                    0.5 +
                  e +
                  r);
        },
        easeInBack: function (n, t, r, e, i, o) {
          return e * (t /= i) * t * (((o = o || s.o) + 1) * t - o) + r;
        },
        easeOutBack: function (n, t, r, e, i, o) {
          return (
            e * ((t = t / i - 1) * t * (((o = o || s.o) + 1) * t + o) + 1) + r
          );
        },
        easeInOutBack: function (n, t, r, e, i, o) {
          return (
            (o = o || s.o),
            (t /= i / 2) < 1
              ? (e / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + r
              : (e / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + r
          );
        },
        easeInBounce: function (n, t, r, e, i) {
          return e - this.easeOutBounce(n, i - t, 0, e, i) + r;
        },
        easeOutBounce: function (n, t, r, e, i) {
          var o = 7.5625;
          return (t /= i) < 1 / 2.75
            ? e * (o * t * t) + r
            : t < 2 / 2.75
            ? e * (o * (t -= 1.5 / 2.75) * t + 0.75) + r
            : t < 2.5 / 2.75
            ? e * (o * (t -= 2.25 / 2.75) * t + 0.9375) + r
            : e * (o * (t -= 2.625 / 2.75) * t + 0.984375) + r;
        },
        easeInOutBounce: function (n, t, r, e, i) {
          return t < i / 2
            ? 0.5 * this.easeInBounce(n, 2 * t, 0, e, i) + r
            : 0.5 * this.easeOutBounce(n, 2 * t - i, 0, e, i) + 0.5 * e + r;
        },
      }),
    Ci =
      ((v = /[^\x20\t\r\n\f]+/g),
      (h = " "),
      (k = "scrollLeft"),
      (I = "scrollTop"),
      (T = []),
      (d = Oi.type),
      (p = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      }),
      (M[xi.p] = {
        on: function (t, r) {
          var e,
            i = (t = (t || "").match(v) || [""])[xi.l],
            o = 0;
          return this.each(function () {
            e = this;
            try {
              if (e.addEventListener)
                for (; o < i; o++) e.addEventListener(t[o], r);
              else if (e.detachEvent)
                for (; o < i; o++) e.attachEvent("on" + t[o], r);
            } catch (n) {}
          });
        },
        off: function (t, r) {
          var e,
            i = (t = (t || "").match(v) || [""])[xi.l],
            o = 0;
          return this.each(function () {
            e = this;
            try {
              if (e.removeEventListener)
                for (; o < i; o++) e.removeEventListener(t[o], r);
              else if (e.detachEvent)
                for (; o < i; o++) e.detachEvent("on" + t[o], r);
            } catch (n) {}
          });
        },
        one: function (n, i) {
          return (
            (n = (n || "").match(v) || [""]),
            this.each(function () {
              var e = M(this);
              M.each(n, function (n, t) {
                var r = function (n) {
                  i.call(this, n), e.off(t, r);
                };
                e.on(t, r);
              });
            })
          );
        },
        trigger: function (n) {
          var t, r;
          return this.each(function () {
            (t = this),
              hi.createEvent
                ? ((r = hi.createEvent("HTMLEvents")).initEvent(n, !0, !1),
                  t.dispatchEvent(r))
                : t.fireEvent("on" + n);
          });
        },
        append: function (n) {
          return this.each(function () {
            i(this, "beforeend", n);
          });
        },
        prepend: function (n) {
          return this.each(function () {
            i(this, "afterbegin", n);
          });
        },
        before: function (n) {
          return this.each(function () {
            i(this, "beforebegin", n);
          });
        },
        after: function (n) {
          return this.each(function () {
            i(this, "afterend", n);
          });
        },
        remove: function () {
          return this.each(function () {
            var n = this.parentNode;
            null != n && n.removeChild(this);
          });
        },
        unwrap: function () {
          var n,
            t,
            r,
            e = [];
          for (
            this.each(function () {
              -1 === H((r = this.parentNode), e) && e.push(r);
            }),
              n = 0;
            n < e[xi.l];
            n++
          ) {
            for (t = e[n], r = t.parentNode; t.firstChild; )
              r.insertBefore(t.firstChild, t);
            r.removeChild(t);
          }
          return this;
        },
        wrapAll: function (n) {
          for (
            var t,
              r = this,
              e = M(n)[0],
              i = e,
              o = r[0].parentNode,
              u = r[0].previousSibling;
            0 < i.childNodes[xi.l];

          )
            i = i.childNodes[0];
          for (t = 0; r[xi.l] - t; i.firstChild === r[0] && t++)
            i.appendChild(r[t]);
          var f = u ? u.nextSibling : o.firstChild;
          return o.insertBefore(e, f), this;
        },
        wrapInner: function (r) {
          return this.each(function () {
            var n = M(this),
              t = n.contents();
            t[xi.l] ? t.wrapAll(r) : n.append(r);
          });
        },
        wrap: function (n) {
          return this.each(function () {
            M(this).wrapAll(n);
          });
        },
        css: function (n, t) {
          var r,
            e,
            i,
            o = vi.getComputedStyle;
          return d(n) == gi
            ? t === di
              ? ((r = this[0]),
                (i = o ? o(r, null) : r.currentStyle[n]),
                o ? (null != i ? i.getPropertyValue(n) : r[xi.s][n]) : i)
              : this.each(function () {
                  y(this, n, t);
                })
            : this.each(function () {
                for (e in n) y(this, e, n[e]);
              });
        },
        hasClass: function (n) {
          for (var t, r, e = 0, i = h + n + h; (t = this[e++]); ) {
            if ((r = t.classList) && r.contains(n)) return !0;
            if (
              1 === t.nodeType &&
              -1 < (h + g(t.className + "") + h).indexOf(i)
            )
              return !0;
          }
          return !1;
        },
        addClass: function (n) {
          var t,
            r,
            e,
            i,
            o,
            u,
            f,
            a,
            c = 0,
            s = 0;
          if (n)
            for (t = n.match(v) || []; (r = this[c++]); )
              if (((a = r.classList), f === di && (f = a !== di), f))
                for (; (o = t[s++]); ) a.add(o);
              else if (
                ((i = r.className + ""), (e = 1 === r.nodeType && h + g(i) + h))
              ) {
                for (; (o = t[s++]); ) e.indexOf(h + o + h) < 0 && (e += o + h);
                i !== (u = g(e)) && (r.className = u);
              }
          return this;
        },
        removeClass: function (n) {
          var t,
            r,
            e,
            i,
            o,
            u,
            f,
            a,
            c = 0,
            s = 0;
          if (n)
            for (t = n.match(v) || []; (r = this[c++]); )
              if (((a = r.classList), f === di && (f = a !== di), f))
                for (; (o = t[s++]); ) a.remove(o);
              else if (
                ((i = r.className + ""), (e = 1 === r.nodeType && h + g(i) + h))
              ) {
                for (; (o = t[s++]); )
                  for (; -1 < e.indexOf(h + o + h); )
                    e = e.replace(h + o + h, h);
                i !== (u = g(e)) && (r.className = u);
              }
          return this;
        },
        hide: function () {
          return this.each(function () {
            this[xi.s].display = "none";
          });
        },
        show: function () {
          return this.each(function () {
            this[xi.s].display = "block";
          });
        },
        attr: function (n, t) {
          for (var r, e = 0; (r = this[e++]); ) {
            if (t === di) return r.getAttribute(n);
            r.setAttribute(n, t);
          }
          return this;
        },
        removeAttr: function (n) {
          return this.each(function () {
            this.removeAttribute(n);
          });
        },
        offset: function () {
          var n = this[0][xi.bCR](),
            t = vi.pageXOffset || hi.documentElement[k],
            r = vi.pageYOffset || hi.documentElement[I];
          return { top: n.top + r, left: n.left + t };
        },
        position: function () {
          var n = this[0];
          return { top: n.offsetTop, left: n.offsetLeft };
        },
        scrollLeft: function (n) {
          for (var t, r = 0; (t = this[r++]); ) {
            if (n === di) return t[k];
            t[k] = n;
          }
          return this;
        },
        scrollTop: function (n) {
          for (var t, r = 0; (t = this[r++]); ) {
            if (n === di) return t[I];
            t[I] = n;
          }
          return this;
        },
        val: function (n) {
          var t = this[0];
          return n ? ((t.value = n), this) : t.value;
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (n) {
          return M(this[0 <= n ? n : this[xi.l] + n]);
        },
        find: function (t) {
          var r,
            e = [];
          return (
            this.each(function () {
              var n = this.querySelectorAll(t);
              for (r = 0; r < n[xi.l]; r++) e.push(n[r]);
            }),
            M(e)
          );
        },
        children: function (n) {
          var t,
            r,
            e,
            i = [];
          return (
            this.each(function () {
              for (r = this.children, e = 0; e < r[xi.l]; e++)
                (t = r[e]),
                  (!n || (t.matches && t.matches(n)) || w(t, n)) && i.push(t);
            }),
            M(i)
          );
        },
        parent: function (n) {
          var t,
            r = [];
          return (
            this.each(function () {
              (t = this.parentNode), (n && !M(t).is(n)) || r.push(t);
            }),
            M(r)
          );
        },
        is: function (n) {
          var t, r;
          for (r = 0; r < this[xi.l]; r++) {
            if (((t = this[r]), ":visible" === n)) return _(t);
            if (":hidden" === n) return !_(t);
            if ((t.matches && t.matches(n)) || w(t, n)) return !0;
          }
          return !1;
        },
        contents: function () {
          var n,
            t,
            r = [];
          return (
            this.each(function () {
              for (n = this.childNodes, t = 0; t < n[xi.l]; t++) r.push(n[t]);
            }),
            M(r)
          );
        },
        each: function (n) {
          return e(this, n);
        },
        animate: function (n, t, r, e) {
          return this.each(function () {
            x(this, n, t, r, e);
          });
        },
        stop: function (n, t) {
          return this.each(function () {
            !(function f(n, t, r) {
              for (var e, i, o, u = 0; u < T[xi.l]; u++)
                if ((e = T[u]).el === n) {
                  if (0 < e.q[xi.l]) {
                    if (
                      (((i = e.q[0]).stop = !0),
                      Oi.cAF()(i.frame),
                      e.q.splice(0, 1),
                      r)
                    )
                      for (o in i.props) W(n, o, i.props[o]);
                    t ? (e.q = []) : N(e, !1);
                  }
                  break;
                }
            })(this, n, t);
          });
        },
      }),
      b(M, {
        extend: b,
        inArray: H,
        isEmptyObject: L,
        isPlainObject: R,
        each: e,
      }),
      M);
  function b() {
    var n,
      t,
      r,
      e,
      i,
      o,
      u = arguments[0] || {},
      f = 1,
      a = arguments[xi.l],
      c = !1;
    for (
      d(u) == wi && ((c = u), (u = arguments[1] || {}), (f = 2)),
        d(u) != pi && !d(u) == bi && (u = {}),
        a === f && ((u = M), --f);
      f < a;
      f++
    )
      if (null != (i = arguments[f]))
        for (e in i)
          (n = u[e]),
            u !== (r = i[e]) &&
              (c && r && (R(r) || (t = Oi.isA(r)))
                ? ((o = t
                    ? ((t = !1), n && Oi.isA(n) ? n : [])
                    : n && R(n)
                    ? n
                    : {}),
                  (u[e] = b(c, o, r)))
                : r !== di && (u[e] = r));
    return u;
  }
  function H(n, t, r) {
    for (var e = r || 0; e < t[xi.l]; e++) if (t[e] === n) return e;
    return -1;
  }
  function E(n) {
    return d(n) == bi;
  }
  function L(n) {
    for (var t in n) return !1;
    return !0;
  }
  function R(n) {
    if (!n || d(n) != pi) return !1;
    var t,
      r = xi.p,
      e = Object[r].hasOwnProperty,
      i = e.call(n, "constructor"),
      o =
        n.constructor &&
        n.constructor[r] &&
        e.call(n.constructor[r], "isPrototypeOf");
    if (n.constructor && !i && !o) return !1;
    for (t in n);
    return d(t) == f || e.call(n, t);
  }
  function e(n, t) {
    var r = 0;
    if (m(n)) for (; r < n[xi.l] && !1 !== t.call(n[r], r, n[r]); r++);
    else for (r in n) if (!1 === t.call(n[r], r, n[r])) break;
    return n;
  }
  function m(n) {
    var t = !!n && [xi.l] in n && n[xi.l],
      r = d(n);
    return !E(r) && (r == mi || 0 === t || (d(t) == yi && 0 < t && t - 1 in n));
  }
  function g(n) {
    return (n.match(v) || []).join(h);
  }
  function w(n, t) {
    for (
      var r = (n.parentNode || hi).querySelectorAll(t) || [], e = r[xi.l];
      e--;

    )
      if (r[e] == n) return 1;
  }
  function i(n, t, r) {
    if (Oi.isA(r)) for (var e = 0; e < r[xi.l]; e++) i(n, t, r[e]);
    else
      d(r) == gi
        ? n.insertAdjacentHTML(t, r)
        : n.insertAdjacentElement(t, r.nodeType ? r : r[0]);
  }
  function y(n, t, r) {
    try {
      n[xi.s][t] !== di &&
        (n[xi.s][t] = (function e(n, t) {
          p[n.toLowerCase()] || d(t) != yi || (t += "px");
          return t;
        })(t, r));
    } catch (i) {}
  }
  function N(n, t) {
    var r, e;
    !1 !== t && n.q.splice(0, 1),
      0 < n.q[xi.l]
        ? ((e = n.q[0]), x(n.el, e.props, e.duration, e.easing, e.complete, !0))
        : -1 < (r = H(n, T)) && T.splice(r, 1);
  }
  function W(n, t, r) {
    t === k || t === I ? (n[t] = r) : y(n, t, r);
  }
  function x(n, t, r, e, i, o) {
    var u,
      f,
      a,
      c,
      s,
      l,
      v = R(r),
      h = {},
      d = {},
      p = 0;
    for (
      l = v
        ? ((e = r.easing),
          r.start,
          (a = r.progress),
          (c = r.step),
          (s = r.specialEasing),
          (i = r.complete),
          r.duration)
        : r,
        s = s || {},
        l = l || 400,
        e = e || "swing",
        o = o || !1;
      p < T[xi.l];
      p++
    )
      if (T[p].el === n) {
        f = T[p];
        break;
      }
    for (u in (f || ((f = { el: n, q: [] }), T.push(f)), t))
      h[u] = u === k || u === I ? n[u] : M(n).css(u);
    for (u in h) h[u] !== t[u] && t[u] !== di && (d[u] = t[u]);
    if (L(d)) o && N(f);
    else {
      var b,
        m,
        g,
        w,
        y,
        x,
        _,
        O,
        S,
        z = o ? 0 : H(C, f.q),
        C = { props: d, duration: v ? r : l, easing: e, complete: i };
      if ((-1 === z && ((z = f.q[xi.l]), f.q.push(C)), 0 === z))
        if (0 < l)
          (_ = Oi.now()),
            (O = function () {
              for (u in ((b = Oi.now()),
              (S = b - _),
              (m = C.stop || l <= S),
              (g = 1 - (Si.max(0, _ + l - b) / l || 0)),
              d))
                (w = parseFloat(h[u])),
                  (y = parseFloat(d[u])),
                  (x = (y - w) * A[s[u] || e](g, g * l, 0, 1, l) + w),
                  W(n, u, x),
                  E(c) &&
                    c(x, {
                      elem: n,
                      prop: u,
                      start: w,
                      now: x,
                      end: y,
                      pos: g,
                      options: {
                        easing: e,
                        speacialEasing: s,
                        duration: l,
                        complete: i,
                        step: c,
                      },
                      startTime: _,
                    });
              E(a) && a({}, g, Si.max(0, l - S)),
                m ? (N(f), E(i) && i()) : (C.frame = Oi.rAF()(O));
            }),
            (C.frame = Oi.rAF()(O));
        else {
          for (u in d) W(n, u, d[u]);
          N(f);
        }
    }
  }
  function _(n) {
    return !!(n[xi.oW] || n[xi.oH] || n.getClientRects()[xi.l]);
  }
  function M(n) {
    if (0 === arguments[xi.l]) return this;
    var t,
      r,
      e = new M(),
      i = n,
      o = 0;
    if (d(n) == gi)
      for (
        i = [],
          t =
            "<" === n.charAt(0)
              ? (((r = hi.createElement("div")).innerHTML = n), r.children)
              : hi.querySelectorAll(n);
        o < t[xi.l];
        o++
      )
        i.push(t[o]);
    if (i) {
      for (
        d(i) == gi || (m(i) && i !== vi && i !== i.self) || (i = [i]), o = 0;
        o < i[xi.l];
        o++
      )
        e[o] = i[o];
      e[xi.l] = i[xi.l];
    }
    return e;
  }
  var O,
    S,
    ki,
    z,
    C,
    D,
    F,
    P,
    j,
    B,
    Q,
    U,
    V,
    $,
    Ii,
    Ti =
      ((O = []),
      (S = "__overlayScrollbars__"),
      function (n, t) {
        var r = arguments[xi.l];
        if (r < 1) return O;
        if (t) (n[S] = t), O.push(n);
        else {
          var e = Oi.inA(n, O);
          if (-1 < e) {
            if (!(1 < r)) return O[e][S];
            delete n[S], O.splice(e, 1);
          }
        }
      }),
    q =
      (($ = []),
      (D = Oi.type),
      (U = {
        className: ["os-theme-dark", [n, gi]],
        resize: ["none", "n:none b:both h:horizontal v:vertical"],
        sizeAutoCapable: (P = [!0, wi]),
        clipAlways: P,
        normalizeRTL: P,
        paddingAbsolute: (j = [!(F = [wi, yi, gi, mi, pi, bi, n]), wi]),
        autoUpdate: [null, [n, wi]],
        autoUpdateInterval: [33, yi],
        updateOnLoad: [["img"], [gi, mi, n]],
        nativeScrollbarsOverlaid: { showNativeScrollbars: j, initialize: P },
        overflowBehavior: {
          x: [
            "scroll",
            (Q = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden"),
          ],
          y: ["scroll", Q],
        },
        scrollbars: {
          visibility: ["auto", "v:visible h:hidden a:auto"],
          autoHide: ["never", "n:never s:scroll l:leave m:move"],
          autoHideDelay: [800, yi],
          dragScrolling: P,
          clickScrolling: j,
          touchSupport: P,
          snapHandle: j,
        },
        textarea: {
          dynWidth: j,
          dynHeight: j,
          inheritedAttrs: [
            ["style", "class"],
            [gi, mi, n],
          ],
        },
        callbacks: {
          onInitialized: (B = [null, [n, bi]]),
          onInitializationWithdrawn: B,
          onDestroyed: B,
          onScrollStart: B,
          onScroll: B,
          onScrollStop: B,
          onOverflowChanged: B,
          onOverflowAmountChanged: B,
          onDirectionChanged: B,
          onContentSizeChanged: B,
          onHostSizeChanged: B,
          onUpdated: B,
        },
      }),
      (Ii = {
        g: (V = function (i) {
          var o = function (n) {
            var t, r, e;
            for (t in n)
              n[xi.hOP](t) &&
                ((r = n[t]),
                (e = D(r)) == mi
                  ? (n[t] = r[i ? 1 : 0])
                  : e == pi && (n[t] = o(r)));
            return n;
          };
          return o(Ci.extend(!0, {}, U));
        })(),
        _: V(!0),
        O: function (n, t, I, r) {
          var e = {},
            i = {},
            o = Ci.extend(!0, {}, n),
            T = Ci.inArray,
            A = Ci.isEmptyObject,
            H = function (n, t, r, e, i, o) {
              for (var u in t)
                if (t[xi.hOP](u) && n[xi.hOP](u)) {
                  var f,
                    a,
                    c,
                    s,
                    l,
                    v,
                    h,
                    d,
                    p = !1,
                    b = !1,
                    m = t[u],
                    g = D(m),
                    w = g == pi,
                    y = Oi.isA(m) ? m : [m],
                    x = r[u],
                    _ = n[u],
                    O = D(_),
                    S = o ? o + "." : "",
                    z = 'The option "' + S + u + "\" wasn't set, because",
                    C = [],
                    k = [];
                  if (((x = x === di ? {} : x), w && O == pi))
                    (e[u] = {}),
                      (i[u] = {}),
                      H(_, m, x, e[u], i[u], S + u),
                      Ci.each([n, e, i], function (n, t) {
                        A(t[u]) && delete t[u];
                      });
                  else if (!w) {
                    for (v = 0; v < y[xi.l]; v++)
                      if (
                        ((l = y[v]), (c = (g = D(l)) == gi && -1 === T(l, F)))
                      )
                        for (
                          C.push(gi), f = l.split(" "), k = k.concat(f), h = 0;
                          h < f[xi.l];
                          h++
                        ) {
                          for (
                            s = (a = f[h].split(":"))[0], d = 0;
                            d < a[xi.l];
                            d++
                          )
                            if (_ === a[d]) {
                              p = !0;
                              break;
                            }
                          if (p) break;
                        }
                      else if ((C.push(l), O === l)) {
                        p = !0;
                        break;
                      }
                    p
                      ? ((b = _ !== x) && (e[u] = _),
                        (c ? T(x, a) < 0 : b) && (i[u] = c ? s : _))
                      : I &&
                        console.warn(
                          z +
                            " it doesn't accept the type [ " +
                            O.toUpperCase() +
                            ' ] with the value of "' +
                            _ +
                            '".\r\nAccepted types are: [ ' +
                            C.join(", ").toUpperCase() +
                            " ]." +
                            (0 < k[length]
                              ? "\r\nValid strings are: [ " +
                                k.join(", ").split(":").join(", ") +
                                " ]."
                              : "")
                        ),
                      delete n[u];
                  }
                }
            };
          return (
            H(o, t, r || {}, e, i),
            !A(o) &&
              I &&
              console.warn(
                "The following options are discarded due to invalidity:\r\n" +
                  vi.JSON.stringify(o, null, 2)
              ),
            { S: e, z: i }
          );
        },
      }),
      ((ki = vi.OverlayScrollbars =
        function (n, r, e) {
          if (0 === arguments[xi.l]) return this;
          var i,
            t,
            o = [],
            u = Ci.isPlainObject(r);
          return n
            ? ((n = n[xi.l] != di ? n : [n[0] || n]),
              X(),
              0 < n[xi.l] &&
                (u
                  ? Ci.each(n, function (n, t) {
                      (i = t) !== di && o.push(K(i, r, e, z, C));
                    })
                  : Ci.each(n, function (n, t) {
                      (i = Ti(t)),
                        (("!" === r && ki.valid(i)) ||
                          (Oi.type(r) == bi && r(t, i)) ||
                          r === di) &&
                          o.push(i);
                    }),
                (t = 1 === o[xi.l] ? o[0] : o)),
              t)
            : u || !r
            ? t
            : o;
        }).globals = function () {
        X();
        var n = Ci.extend(!0, {}, z);
        return delete n.msie, n;
      }),
      (ki.defaultOptions = function (n) {
        X();
        var t = z.defaultOptions;
        if (n === di) return Ci.extend(!0, {}, t);
        z.defaultOptions = Ci.extend(!0, {}, t, Ii.O(n, Ii._, !0, t).S);
      }),
      (ki.valid = function (n) {
        return n instanceof ki && !n.getState().destroyed;
      }),
      (ki.extension = function (n, t, r) {
        var e = Oi.type(n) == gi,
          i = arguments[xi.l],
          o = 0;
        if (i < 1 || !e) return Ci.extend(!0, { length: $[xi.l] }, $);
        if (e)
          if (Oi.type(t) == bi)
            $.push({ name: n, extensionFactory: t, defaultOptions: r });
          else
            for (; o < $[xi.l]; o++)
              if ($[o].name === n) {
                if (!(1 < i)) return Ci.extend(!0, {}, $[o]);
                $.splice(o, 1);
              }
      }),
      ki);
  function X() {
    (z = z || new Y(Ii.g)), (C = C || new G(z));
  }
  function Y(n) {
    var _ = this,
      i = "overflow",
      O = Ci("body"),
      S = Ci('<div id="os-dummy-scrollbar-size"><div></div></div>'),
      o = S[0],
      e = Ci(S.children("div").eq(0));
    O.append(S), S.hide().show();
    var t,
      r,
      u,
      f,
      a,
      c,
      s,
      l,
      v,
      h = z(o),
      d = { x: 0 === h.x, y: 0 === h.y },
      p =
        ((r = vi.navigator.userAgent),
        (f = "substring"),
        (a = r[(u = "indexOf")]("MSIE ")),
        (c = r[u]("Trident/")),
        (s = r[u]("Edge/")),
        (l = r[u]("rv:")),
        (v = parseInt),
        0 < a
          ? (t = v(r[f](a + 5, r[u](".", a)), 10))
          : 0 < c
          ? (t = v(r[f](l + 3, r[u](".", l)), 10))
          : 0 < s && (t = v(r[f](s + 5, r[u](".", s)), 10)),
        t);
    function z(n) {
      return { x: n[xi.oH] - n[xi.cH], y: n[xi.oW] - n[xi.cW] };
    }
    Ci.extend(_, {
      defaultOptions: n,
      msie: p,
      autoUpdateLoop: !1,
      autoUpdateRecommended: !Oi.mO(),
      nativeScrollbarSize: h,
      nativeScrollbarIsOverlaid: d,
      nativeScrollbarStyling: (function () {
        var n = !1;
        S.addClass("os-viewport-native-scrollbars-invisible");
        try {
          n =
            ("none" === S.css("scrollbar-width") && (9 < p || !p)) ||
            "none" ===
              vi
                .getComputedStyle(o, "::-webkit-scrollbar")
                .getPropertyValue("display");
        } catch (t) {}
        return n;
      })(),
      overlayScrollbarDummySize: { x: 30, y: 30 },
      cssCalc: _i.d("width", "calc", "(1px)") || null,
      restrictedMeasuring: (function () {
        S.css(i, "hidden");
        var n = o[xi.sW],
          t = o[xi.sH];
        S.css(i, "visible");
        var r = o[xi.sW],
          e = o[xi.sH];
        return n - r != 0 || t - e != 0;
      })(),
      rtlScrollBehavior: (function () {
        S.css({
          "overflow-y": "hidden",
          "overflow-x": "scroll",
          direction: "rtl",
        }).scrollLeft(0);
        var n = S.offset(),
          t = e.offset();
        S.scrollLeft(-999);
        var r = e.offset();
        return { i: n.left === t.left, n: t.left !== r.left };
      })(),
      supportTransform: !!_i.v("transform"),
      supportTransition: !!_i.v("transition"),
      supportPassiveEvents: (function () {
        var n = !1;
        try {
          vi.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function () {
                n = !0;
              },
            })
          );
        } catch (t) {}
        return n;
      })(),
      supportResizeObserver: !!Oi.rO(),
      supportMutationObserver: !!Oi.mO(),
    }),
      S.removeAttr(xi.s).remove(),
      (function () {
        if (!d.x || !d.y) {
          var m = Si.abs,
            g = Oi.wW(),
            w = Oi.wH(),
            y = x();
          Ci(vi).on("resize", function () {
            if (0 < Ti().length) {
              var n = Oi.wW(),
                t = Oi.wH(),
                r = n - g,
                e = t - w;
              if (0 == r && 0 == e) return;
              var i,
                o = Si.round(n / (g / 100)),
                u = Si.round(t / (w / 100)),
                f = m(r),
                a = m(e),
                c = m(o),
                s = m(u),
                l = x(),
                v = 2 < f && 2 < a,
                h = !(function b(n, t) {
                  var r = m(n),
                    e = m(t);
                  return r !== e && r + 1 !== e && r - 1 !== e;
                })(c, s),
                d = v && h && l !== y && 0 < y,
                p = _.nativeScrollbarSize;
              d &&
                (O.append(S),
                (i = _.nativeScrollbarSize = z(S[0])),
                S.remove(),
                (p.x === i.x && p.y === i.y) ||
                  Ci.each(Ti(), function () {
                    Ti(this) && Ti(this).update("zoom");
                  })),
                (g = n),
                (w = t),
                (y = l);
            }
          });
        }
        function x() {
          var n = vi.screen.deviceXDPI || 0,
            t = vi.screen.logicalXDPI || 1;
          return vi.devicePixelRatio || n / t;
        }
      })();
  }
  function G(r) {
    var c,
      e = Ci.inArray,
      s = Oi.now,
      l = "autoUpdate",
      v = xi.l,
      h = [],
      d = [],
      p = !1,
      b = 33,
      m = s(),
      g = function () {
        if (0 < h[v] && p) {
          c = Oi.rAF()(function () {
            g();
          });
          var n,
            t,
            r,
            e,
            i,
            o,
            u = s(),
            f = u - m;
          if (b < f) {
            (m = u - (f % b)), (n = 33);
            for (var a = 0; a < h[v]; a++)
              (t = h[a]) !== di &&
                ((e = (r = t.options())[l]),
                (i = Si.max(1, r.autoUpdateInterval)),
                (o = s()),
                (!0 === e || null === e) &&
                  o - d[a] > i &&
                  (t.update("auto"), (d[a] = new Date((o += i)))),
                (n = Si.max(1, Si.min(n, i))));
            b = n;
          }
        } else b = 33;
      };
    (this.add = function (n) {
      -1 === e(n, h) &&
        (h.push(n),
        d.push(s()),
        0 < h[v] && !p && ((p = !0), (r.autoUpdateLoop = p), g()));
    }),
      (this.remove = function (n) {
        var t = e(n, h);
        -1 < t &&
          (d.splice(t, 1),
          h.splice(t, 1),
          0 === h[v] &&
            p &&
            ((p = !1),
            (r.autoUpdateLoop = p),
            c !== di && (Oi.cAF()(c), (c = -1))));
      });
  }
  function K(r, n, t, xt, _t) {
    var cn = Oi.type,
      sn = Ci.inArray,
      h = Ci.each,
      Ot = new ki(),
      e = Ci[xi.p];
    if (ht(r)) {
      if (Ti(r)) {
        var i = Ti(r);
        return i.options(n), i;
      }
      var St,
        zt,
        Ct,
        kt,
        D,
        It,
        Tt,
        At,
        F,
        ln,
        w,
        T,
        d,
        Ht,
        Et,
        Lt,
        Rt,
        y,
        p,
        Nt,
        Wt,
        Mt,
        Dt,
        Ft,
        Pt,
        jt,
        Bt,
        Qt,
        Ut,
        o,
        u,
        Vt,
        $t,
        qt,
        f,
        P,
        c,
        j,
        Xt,
        Yt,
        Gt,
        Kt,
        Jt,
        Zt,
        nr,
        tr,
        rr,
        er,
        ir,
        a,
        s,
        l,
        v,
        b,
        m,
        x,
        A,
        or,
        ur,
        fr,
        H,
        ar,
        cr,
        sr,
        lr,
        vr,
        hr,
        dr,
        pr,
        br,
        mr,
        gr,
        wr,
        yr,
        xr,
        _r,
        E,
        Or,
        Sr,
        zr,
        Cr,
        kr,
        Ir,
        Tr,
        Ar,
        g,
        _,
        Hr,
        Er,
        Lr,
        Rr,
        Nr,
        Wr,
        Mr,
        Dr,
        Fr,
        Pr,
        jr,
        Br,
        Qr,
        Ur,
        O,
        S,
        z,
        C,
        Vr,
        $r,
        k,
        I,
        qr,
        Xr,
        Yr,
        Gr,
        Kr,
        B,
        Q,
        Jr,
        Zr,
        ne,
        te,
        re = {},
        vn = {},
        hn = {},
        ee = {},
        ie = {},
        L = "-hidden",
        oe = "margin-",
        ue = "padding-",
        fe = "border-",
        ae = "top",
        ce = "right",
        se = "bottom",
        le = "left",
        ve = "min-",
        he = "max-",
        de = "width",
        pe = "height",
        be = "float",
        me = "",
        ge = "auto",
        dn = "sync",
        we = "scroll",
        ye = "100%",
        pn = "x",
        bn = "y",
        R = ".",
        xe = " ",
        N = "scrollbar",
        W = "-horizontal",
        M = "-vertical",
        _e = we + "Left",
        Oe = we + "Top",
        U = "mousedown touchstart",
        V = "mouseup touchend touchcancel",
        $ = "mousemove touchmove",
        q = "mouseenter",
        X = "mouseleave",
        Y = "keydown",
        G = "keyup",
        K = "selectstart",
        J = "transitionend webkitTransitionEnd oTransitionEnd",
        Z = "__overlayScrollbarsRO__",
        nn = "os-",
        tn = "os-html",
        rn = "os-host",
        en = rn + "-foreign",
        on = rn + "-textarea",
        un = rn + "-" + N + W + L,
        fn = rn + "-" + N + M + L,
        an = rn + "-transition",
        Se = rn + "-rtl",
        ze = rn + "-resize-disabled",
        Ce = rn + "-scrolling",
        ke = rn + "-overflow",
        Ie = (ke = rn + "-overflow") + "-x",
        Te = ke + "-y",
        mn = "os-textarea",
        gn = mn + "-cover",
        wn = "os-padding",
        yn = "os-viewport",
        Ae = yn + "-native-scrollbars-invisible",
        xn = yn + "-native-scrollbars-overlaid",
        _n = "os-content",
        He = "os-content-arrange",
        Ee = "os-content-glue",
        Le = "os-size-auto-observer",
        On = "os-resize-observer",
        Sn = "os-resize-observer-item",
        zn = Sn + "-final",
        Cn = "os-text-inherit",
        kn = nn + N,
        In = kn + "-track",
        Tn = In + "-off",
        An = kn + "-handle",
        Hn = An + "-off",
        En = kn + "-unusable",
        Ln = kn + "-" + ge + L,
        Rn = kn + "-corner",
        Re = Rn + "-resize",
        Ne = Re + "-both",
        We = Re + W,
        Me = Re + M,
        Nn = kn + W,
        Wn = kn + M,
        Mn = "os-dragging",
        De = "os-theme-none",
        Dn = [Ae, xn, Tn, Hn, En, Ln, Re, Ne, We, Me, Mn].join(xe),
        Fn = [],
        Pn = [xi.ti],
        jn = {},
        Fe = {},
        Pe = 42,
        Bn = "load",
        Qn = [],
        Un = {},
        Vn = ["wrap", "cols", "rows"],
        $n = [xi.i, xi.c, xi.s, "open"].concat(Pn),
        qn = [];
      return (
        (Ot.sleep = function () {
          Ut = !0;
        }),
        (Ot.update = function (n) {
          var t, r, e, i, o;
          if (!Et)
            return (
              cn(n) == gi
                ? n === ge
                  ? ((t = (function u() {
                      if (!Ut && !Vr) {
                        var r,
                          e,
                          i,
                          o = [],
                          n = [
                            { C: Yt, k: $n.concat(":visible") },
                            { C: Lt ? Xt : di, k: Vn },
                          ];
                        return (
                          h(n, function (n, t) {
                            (r = t.C) &&
                              h(t.k, function (n, t) {
                                (e = ":" === t.charAt(0) ? r.is(t) : r.attr(t)),
                                  (i = Un[t]),
                                  fi(e, i) && o.push(t),
                                  (Un[t] = e);
                              });
                          }),
                          it(o),
                          0 < o[xi.l]
                        );
                      }
                    })()),
                    (r = (function a() {
                      if (Ut) return !1;
                      var n,
                        t,
                        r,
                        e,
                        i = oi(),
                        o = Lt && br && !Fr ? Xt.val().length : 0,
                        u = !Vr && br && !Lt,
                        f = {};
                      return (
                        u &&
                          ((n = nr.css(be)),
                          (f[be] = Qt ? ce : le),
                          (f[de] = ge),
                          nr.css(f)),
                        (e = { w: i[xi.sW] + o, h: i[xi.sH] + o }),
                        u && ((f[be] = n), (f[de] = ye), nr.css(f)),
                        (t = Ve()),
                        (r = fi(e, g)),
                        (g = e),
                        r || t
                      );
                    })()),
                    (e = t || r) && qe({ I: r, T: Ht ? di : Vt }))
                  : n === dn
                  ? Vr
                    ? ((i = z(O.takeRecords())), (o = C(S.takeRecords())))
                    : (i = Ot.update(ge))
                  : "zoom" === n && qe({ A: !0, I: !0 })
                : ((n = Ut || n),
                  (Ut = !1),
                  (Ot.update(dn) && !n) || qe({ H: n })),
              Xe(),
              e || i || o
            );
        }),
        (Ot.options = function (n, t) {
          var r,
            e = {};
          if (Ci.isEmptyObject(n) || !Ci.isPlainObject(n)) {
            if (cn(n) != gi) return u;
            if (!(1 < arguments.length)) return bt(u, n);
            !(function a(n, t, r) {
              for (
                var e = t.split(R), i = e.length, o = 0, u = {}, f = u;
                o < i;
                o++
              )
                u = u[e[o]] = o + 1 < i ? {} : r;
              Ci.extend(n, f, !0);
            })(e, n, t),
              (r = ot(e));
          } else r = ot(n);
          Ci.isEmptyObject(r) || qe({ T: r });
        }),
        (Ot.destroy = function () {
          if (!Et) {
            for (var n in (_t.remove(Ot), Qe(), je(Kt), je(Gt), jn))
              Ot.removeExt(n);
            for (; 0 < qn[xi.l]; ) qn.pop()();
            Ue(!0),
              rr && gt(rr),
              tr && gt(tr),
              Wt && gt(Gt),
              at(!0),
              st(!0),
              ut(!0);
            for (var t = 0; t < Qn[xi.l]; t++) Ci(Qn[t]).off(Bn, rt);
            (Qn = di), (Ut = Et = !0), Ti(r, 0), ti("onDestroyed");
          }
        }),
        (Ot.scroll = function (n, t, r, e) {
          if (0 === arguments.length || n === di) {
            var i = Wr && Qt && Ct.i,
              o = Wr && Qt && Ct.n,
              u = vn.L,
              f = vn.R,
              a = vn.N;
            return (
              (f = i ? 1 - f : f),
              (u = i ? a - u : u),
              (a *= o ? -1 : 1),
              {
                position: { x: (u *= o ? -1 : 1), y: hn.L },
                ratio: { x: f, y: hn.R },
                max: { x: a, y: hn.N },
                handleOffset: { x: vn.W, y: hn.W },
                handleLength: { x: vn.M, y: hn.M },
                handleLengthRatio: { x: vn.D, y: hn.D },
                trackLength: { x: vn.F, y: hn.F },
                snappedHandleOffset: { x: vn.P, y: hn.P },
                isRTL: Qt,
                isRTLNormalized: Wr,
              }
            );
          }
          Ot.update(dn);
          var c,
            s,
            l,
            v,
            h,
            g,
            w,
            d,
            p,
            y = Wr,
            b = [pn, le, "l"],
            m = [bn, ae, "t"],
            x = ["+=", "-=", "*=", "/="],
            _ = cn(t) == pi,
            O = _ ? t.complete : e,
            S = {},
            z = {},
            C = "begin",
            k = "nearest",
            I = "never",
            T = "ifneeded",
            A = xi.l,
            H = [pn, bn, "xy", "yx"],
            E = [C, "end", "center", k],
            L = ["always", I, T],
            R = n[xi.hOP]("el"),
            N = R ? n.el : n,
            W = !!(N instanceof Ci || zi) && N instanceof zi,
            M = !W && ht(N),
            D = function () {
              s && Je(!0), l && Je(!1);
            },
            F =
              cn(O) != bi
                ? di
                : function () {
                    D(), O();
                  };
          function P(n, t) {
            for (c = 0; c < t[A]; c++) if (n === t[c]) return 1;
          }
          function j(n, t) {
            var r = n ? b : m;
            if (((t = cn(t) == gi || cn(t) == yi ? [t, t] : t), Oi.isA(t)))
              return n ? t[0] : t[1];
            if (cn(t) == pi)
              for (c = 0; c < r[A]; c++) if (r[c] in t) return t[r[c]];
          }
          function B(n, t) {
            var r,
              e,
              i,
              o,
              u = cn(t) == gi,
              f = n ? vn : hn,
              a = f.L,
              c = f.N,
              s = Qt && n,
              l = s && Ct.n && !y,
              v = "replace",
              h = eval;
            if (
              (e = u
                ? (2 < t[A] && ((o = t.substr(0, 2)), -1 < sn(o, x) && (r = o)),
                  (t = (t = r ? t.substr(2) : t)
                    [v](/min/g, 0)
                    [v](/</g, 0)
                    [v](/max/g, (l ? "-" : me) + ye)
                    [v](/>/g, (l ? "-" : me) + ye)
                    [v](/px/g, me)
                    [v](/%/g, " * " + (c * (s && Ct.n ? -1 : 1)) / 100)
                    [v](/vw/g, " * " + ee.w)
                    [v](/vh/g, " * " + ee.h)),
                  ii(isNaN(t) ? ii(h(t), !0).toFixed() : t))
                : t) !== di &&
              !isNaN(e) &&
              cn(e) == yi
            ) {
              var d = y && s,
                p = a * (d && Ct.n ? -1 : 1),
                b = d && Ct.i,
                m = d && Ct.n;
              switch (((p = b ? c - p : p), r)) {
                case "+=":
                  i = p + e;
                  break;
                case "-=":
                  i = p - e;
                  break;
                case "*=":
                  i = p * e;
                  break;
                case "/=":
                  i = p / e;
                  break;
                default:
                  i = e;
              }
              (i = b ? c - i : i),
                (i *= m ? -1 : 1),
                (i =
                  s && Ct.n
                    ? Si.min(0, Si.max(c, i))
                    : Si.max(0, Si.min(c, i)));
            }
            return i === a ? di : i;
          }
          function Q(n, t, r, e) {
            var i,
              o,
              u = [r, r],
              f = cn(n);
            if (f == t) n = [n, n];
            else if (f == mi) {
              if (2 < (i = n[A]) || i < 1) n = u;
              else
                for (1 === i && (n[1] = r), c = 0; c < i; c++)
                  if (((o = n[c]), cn(o) != t || !P(o, e))) {
                    n = u;
                    break;
                  }
            } else n = f == pi ? [n[pn] || r, n[bn] || r] : u;
            return { x: n[0], y: n[1] };
          }
          function U(n) {
            var t,
              r,
              e = [],
              i = [ae, ce, se, le];
            for (c = 0; c < n[A] && c !== i[A]; c++)
              (t = n[c]),
                (r = cn(t)) == wi
                  ? e.push(t ? ii(p.css(oe + i[c])) : 0)
                  : e.push(r == yi ? t : 0);
            return e;
          }
          if (W || M) {
            var V,
              $ = R ? n.margin : 0,
              q = R ? n.axis : 0,
              X = R ? n.scroll : 0,
              Y = R ? n.block : 0,
              G = [0, 0, 0, 0],
              K = cn($);
            if (0 < (p = W ? N : Ci(N))[A]) {
              ($ =
                K == yi || K == wi
                  ? U([$, $, $, $])
                  : K == mi
                  ? 2 === (V = $[A])
                    ? U([$[0], $[1], $[0], $[1]])
                    : 4 <= V
                    ? U($)
                    : G
                  : K == pi
                  ? U([$[ae], $[ce], $[se], $[le]])
                  : G),
                (h = P(q, H) ? q : "xy"),
                (g = Q(X, gi, "always", L)),
                (w = Q(Y, gi, C, E)),
                (d = $);
              var J = vn.L,
                Z = hn.L,
                nn = Jt.offset(),
                tn = p.offset(),
                rn = { x: g.x == I || h == bn, y: g.y == I || h == pn };
              (tn[ae] -= d[0]), (tn[le] -= d[3]);
              var en = {
                x: Si.round(tn[le] - nn[le] + J),
                y: Si.round(tn[ae] - nn[ae] + Z),
              };
              if (
                (Qt &&
                  (Ct.n || Ct.i || (en.x = Si.round(nn[le] - tn[le] + J)),
                  Ct.n && y && (en.x *= -1),
                  Ct.i && y && (en.x = Si.round(nn[le] - tn[le] + (vn.N - J)))),
                w.x != C || w.y != C || g.x == T || g.y == T || Qt)
              ) {
                var on = p[0],
                  un = ln
                    ? on[xi.bCR]()
                    : { width: on[xi.oW], height: on[xi.oH] },
                  fn = { w: un[de] + d[3] + d[1], h: un[pe] + d[0] + d[2] },
                  an = function (n) {
                    var t = ni(n),
                      r = t.j,
                      e = t.B,
                      i = t.Q,
                      o = w[i] == (n && Qt ? C : "end"),
                      u = "center" == w[i],
                      f = w[i] == k,
                      a = g[i] == I,
                      c = g[i] == T,
                      s = ee[r],
                      l = nn[e],
                      v = fn[r],
                      h = tn[e],
                      d = u ? 2 : 1,
                      p = h + v / 2,
                      b = l + s / 2,
                      m = v <= s && l <= h && h + v <= l + s;
                    a
                      ? (rn[i] = !0)
                      : rn[i] ||
                        ((f || c) &&
                          ((rn[i] = c && m), (o = v < s ? b < p : p < b)),
                        (en[i] -=
                          o || u
                            ? (s / d - v / d) * (n && Qt && y ? -1 : 1)
                            : 0));
                  };
                an(!0), an(!1);
              }
              rn.y && delete en.y, rn.x && delete en.x, (n = en);
            }
          }
          (S[_e] = B(!0, j(!0, n))),
            (S[Oe] = B(!1, j(!1, n))),
            (s = S[_e] !== di),
            (l = S[Oe] !== di),
            (s || l) && (0 < t || _)
              ? _
                ? ((t.complete = F), Zt.animate(S, t))
                : ((v = { duration: t, complete: F }),
                  Oi.isA(r) || Ci.isPlainObject(r)
                    ? ((z[_e] = r[0] || r.x),
                      (z[Oe] = r[1] || r.y),
                      (v.specialEasing = z))
                    : (v.easing = r),
                  Zt.animate(S, v))
              : (s && Zt[_e](S[_e]), l && Zt[Oe](S[Oe]), D());
        }),
        (Ot.scrollStop = function (n, t, r) {
          return Zt.stop(n, t, r), Ot;
        }),
        (Ot.getElements = function (n) {
          var t = {
            target: or,
            host: ur,
            padding: ar,
            viewport: cr,
            content: sr,
            scrollbarHorizontal: { scrollbar: a[0], track: s[0], handle: l[0] },
            scrollbarVertical: { scrollbar: v[0], track: b[0], handle: m[0] },
            scrollbarCorner: ir[0],
          };
          return cn(n) == gi ? bt(t, n) : t;
        }),
        (Ot.getState = function (n) {
          function t(n) {
            if (!Ci.isPlainObject(n)) return n;
            var r = ai({}, n),
              t = function (n, t) {
                r[xi.hOP](n) && ((r[t] = r[n]), delete r[n]);
              };
            return t("w", de), t("h", pe), delete r.c, r;
          }
          var r = {
            destroyed: !!t(Et),
            sleeping: !!t(Ut),
            autoUpdate: t(!Vr),
            widthAuto: t(br),
            heightAuto: t(mr),
            padding: t(wr),
            overflowAmount: t(kr),
            hideOverflow: t(pr),
            hasOverflow: t(dr),
            contentScrollSize: t(vr),
            viewportSize: t(ee),
            hostSize: t(lr),
            documentMixed: t(y),
          };
          return cn(n) == gi ? bt(r, n) : r;
        }),
        (Ot.ext = function (n) {
          var t,
            r = "added removed on contract".split(" "),
            e = 0;
          if (cn(n) == gi) {
            if (jn[xi.hOP](n))
              for (t = ai({}, jn[n]); e < r.length; e++) delete t[r[e]];
          } else for (e in ((t = {}), jn)) t[e] = ai({}, Ot.ext(e));
          return t;
        }),
        (Ot.addExt = function (n, t) {
          var r,
            e,
            i,
            o,
            u = ki.extension(n),
            f = !0;
          if (u) {
            if (jn[xi.hOP](n)) return Ot.ext(n);
            if (
              (r = u.extensionFactory.call(
                Ot,
                ai({}, u.defaultOptions),
                Ci,
                Oi
              )) &&
              ((i = r.contract),
              cn(i) == bi && ((o = i(vi)), (f = cn(o) == wi ? o : f)),
              f)
            )
              return (e = (jn[n] = r).added), cn(e) == bi && e(t), Ot.ext(n);
          } else
            console.warn(
              'A extension with the name "' + n + "\" isn't registered."
            );
        }),
        (Ot.removeExt = function (n) {
          var t,
            r = jn[n];
          return !!r && (delete jn[n], (t = r.removed), cn(t) == bi && t(), !0);
        }),
        ki.valid(
          (function yt(n, t, r) {
            var e, i;
            return (
              (o = xt.defaultOptions),
              (It = xt.nativeScrollbarStyling),
              (At = ai({}, xt.nativeScrollbarSize)),
              (St = ai({}, xt.nativeScrollbarIsOverlaid)),
              (zt = ai({}, xt.overlayScrollbarDummySize)),
              (Ct = ai({}, xt.rtlScrollBehavior)),
              ot(ai({}, o, t)),
              (Tt = xt.cssCalc),
              (D = xt.msie),
              (kt = xt.autoUpdateRecommended),
              (F = xt.supportTransition),
              (ln = xt.supportTransform),
              (w = xt.supportPassiveEvents),
              (T = xt.supportResizeObserver),
              (d = xt.supportMutationObserver),
              xt.restrictedMeasuring,
              (P = Ci(n.ownerDocument)),
              (A = P[0]),
              (f = Ci(A.defaultView || A.parentWindow)),
              (x = f[0]),
              (c = wt(P, "html")),
              (j = wt(c, "body")),
              (Xt = Ci(n)),
              (or = Xt[0]),
              (Lt = Xt.is("textarea")),
              (Rt = Xt.is("body")),
              (y = A !== hi),
              (p = Lt
                ? Xt.hasClass(mn) && Xt.parent().hasClass(_n)
                : Xt.hasClass(rn) && Xt.children(R + wn)[xi.l]),
              St.x && St.y && !Vt.nativeScrollbarsOverlaid.initialize
                ? (ti("onInitializationWithdrawn"),
                  p && (ut(!0), at(!0), st(!0)),
                  (Ut = Et = !0))
                : (Rt &&
                    (((e = {}).l = Si.max(Xt[_e](), c[_e](), f[_e]())),
                    (e.t = Si.max(Xt[Oe](), c[Oe](), f[Oe]())),
                    (i = function () {
                      Zt.removeAttr(xi.ti), Xn(Zt, U, i, !0, !0);
                    })),
                  ut(),
                  at(),
                  st(),
                  ft(),
                  ct(!0),
                  ct(!1),
                  (function s() {
                    var r,
                      t = x.top !== x,
                      e = {},
                      i = {},
                      o = {};
                    function u(n) {
                      if (a(n)) {
                        var t = c(n),
                          r = {};
                        (ne || Zr) && (r[de] = i.w + (t.x - e.x) * o.x),
                          (te || Zr) && (r[pe] = i.h + (t.y - e.y) * o.y),
                          Yt.css(r),
                          Oi.stpP(n);
                      } else f(n);
                    }
                    function f(n) {
                      var t = n !== di;
                      Xn(P, [K, $, V], [tt, u, f], !0),
                        si(j, Mn),
                        ir.releaseCapture && ir.releaseCapture(),
                        t && (r && Be(), Ot.update(ge)),
                        (r = !1);
                    }
                    function a(n) {
                      var t = (n.originalEvent || n).touches !== di;
                      return !Ut && !Et && (1 === Oi.mBtn(n) || t);
                    }
                    function c(n) {
                      return D && t
                        ? { x: n.screenX, y: n.screenY }
                        : Oi.page(n);
                    }
                    Yn(ir, U, function (n) {
                      a(n) &&
                        !Jr &&
                        (Vr && ((r = !0), Qe()),
                        (e = c(n)),
                        (i.w = ur[xi.oW] - (Nt ? 0 : Mt)),
                        (i.h = ur[xi.oH] - (Nt ? 0 : Dt)),
                        (o = vt()),
                        Xn(P, [K, $, V], [tt, u, f]),
                        ci(j, Mn),
                        ir.setCapture && ir.setCapture(),
                        Oi.prvD(n),
                        Oi.stpP(n));
                    });
                  })(),
                  Gn(),
                  je(Kt, Kn),
                  Rt &&
                    (Zt[_e](e.l)[Oe](e.t),
                    hi.activeElement == n &&
                      cr.focus &&
                      (Zt.attr(xi.ti, "-1"), cr.focus(), Xn(Zt, U, i, !1, !0))),
                  Ot.update(ge),
                  (Ht = !0),
                  ti("onInitialized"),
                  h(Fn, function (n, t) {
                    ti(t.n, t.a);
                  }),
                  (Fn = []),
                  cn(r) == gi && (r = [r]),
                  Oi.isA(r)
                    ? h(r, function (n, t) {
                        Ot.addExt(t);
                      })
                    : Ci.isPlainObject(r) &&
                      h(r, function (n, t) {
                        Ot.addExt(n, t);
                      }),
                  setTimeout(function () {
                    F && !Et && ci(Yt, an);
                  }, 333)),
              Ot
            );
          })(r, n, t)
        ) && Ti(r, Ot),
        Ot
      );
    }
    function Xn(n, t, r, e, i) {
      var o = Oi.isA(t) && Oi.isA(r),
        u = e ? "removeEventListener" : "addEventListener",
        f = e ? "off" : "on",
        a = !o && t.split(xe),
        c = 0,
        s = Ci.isPlainObject(i),
        l = (w && (s ? i.U : i)) || !1,
        v = s && (i.V || !1),
        h = w ? { passive: l, capture: v } : v;
      if (o) for (; c < t[xi.l]; c++) Xn(n, t[c], r[c], e, i);
      else for (; c < a[xi.l]; c++) w ? n[0][u](a[c], r, h) : n[f](a[c], r);
    }
    function Yn(n, t, r, e) {
      Xn(n, t, r, !1, e), qn.push(Oi.bind(Xn, 0, n, t, r, !0, e));
    }
    function je(n, t) {
      if (n) {
        var r = Oi.rO(),
          e =
            "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart",
          i = "childNodes",
          o = 3333333,
          u = function () {
            n[Oe](o)[_e](Qt ? (Ct.n ? -o : Ct.i ? 0 : o) : o), t();
          };
        if (t) {
          if (T)
            ((k = n.addClass("observed").append(ui(On)).contents()[0])[Z] =
              new r(u)).observe(k);
          else if (9 < D || !kt) {
            n.prepend(
              ui(
                On,
                ui(
                  { c: Sn, dir: "ltr" },
                  ui(Sn, ui(zn)) +
                    ui(Sn, ui({ c: zn, style: "width: 200%; height: 200%" }))
                )
              )
            );
            var f,
              a,
              c,
              s,
              l = n[0][i][0][i][0],
              v = Ci(l[i][1]),
              h = Ci(l[i][0]),
              d = Ci(h[0][i][0]),
              p = l[xi.oW],
              b = l[xi.oH],
              m = xt.nativeScrollbarSize,
              g = function () {
                h[_e](o)[Oe](o), v[_e](o)[Oe](o);
              },
              w = function () {
                (a = 0), f && ((p = c), (b = s), u());
              },
              y = function (n) {
                return (
                  (c = l[xi.oW]),
                  (s = l[xi.oH]),
                  (f = c != p || s != b),
                  n && f && !a ? (Oi.cAF()(a), (a = Oi.rAF()(w))) : n || w(),
                  g(),
                  n && (Oi.prvD(n), Oi.stpP(n)),
                  !1
                );
              },
              x = {},
              _ = {};
            ri(_, me, [-2 * (m.y + 1), -2 * m.x, -2 * m.y, -2 * (m.x + 1)]),
              Ci(l).css(_),
              h.on(we, y),
              v.on(we, y),
              n.on(e, function () {
                y(!1);
              }),
              (x[de] = o),
              (x[pe] = o),
              d.css(x),
              g();
          } else {
            var O = A.attachEvent,
              S = D !== di;
            if (O)
              n.prepend(ui(On)), wt(n, R + On)[0].attachEvent("onresize", u);
            else {
              var z = A.createElement(pi);
              z.setAttribute(xi.ti, "-1"),
                z.setAttribute(xi.c, On),
                (z.onload = function () {
                  var n = this.contentDocument.defaultView;
                  n.addEventListener("resize", u),
                    (n.document.documentElement.style.display = "none");
                }),
                (z.type = "text/html"),
                S && n.prepend(z),
                (z.data = "about:blank"),
                S || n.prepend(z),
                n.on(e, u);
            }
          }
          if (n[0] === H) {
            var C = function () {
              var n = Yt.css("direction"),
                t = {},
                r = 0,
                e = !1;
              return (
                n !== E &&
                  ((r =
                    "ltr" === n
                      ? ((t[le] = 0), (t[ce] = ge), o)
                      : ((t[le] = ge), (t[ce] = 0), Ct.n ? -o : Ct.i ? 0 : o)),
                  Kt.children().eq(0).css(t),
                  Kt[_e](r)[Oe](o),
                  (E = n),
                  (e = !0)),
                e
              );
            };
            C(),
              Yn(n, we, function (n) {
                return C() && qe(), Oi.prvD(n), Oi.stpP(n), !1;
              });
          }
        } else if (T) {
          var k,
            I = (k = n.contents()[0])[Z];
          I && (I.disconnect(), delete k[Z]);
        } else gt(n.children(R + On).eq(0));
      }
    }
    function Gn() {
      if (d) {
        var o,
          u,
          f,
          a,
          c,
          s,
          r,
          e,
          i,
          l,
          n = Oi.mO(),
          v = Oi.now();
        (C = function (n) {
          var t = !1;
          return (
            Ht &&
              !Ut &&
              (h(n, function () {
                return !(t = (function o(n) {
                  var t = n.attributeName,
                    r = n.target,
                    e = n.type,
                    i = "closest";
                  if (r === sr) return null === t;
                  if ("attributes" === e && (t === xi.c || t === xi.s) && !Lt) {
                    if (t === xi.c && Ci(r).hasClass(rn))
                      return et(n.oldValue, r.className);
                    if (typeof r[i] != bi) return !0;
                    if (
                      null !== r[i](R + On) ||
                      null !== r[i](R + kn) ||
                      null !== r[i](R + Rn)
                    )
                      return !1;
                  }
                  return !0;
                })(this));
              }),
              t &&
                ((e = Oi.now()),
                (i = mr || br),
                (l = function () {
                  Et || ((v = e), Lt && $e(), i ? qe() : Ot.update(ge));
                }),
                clearTimeout(r),
                11 < e - v || !i ? l() : (r = setTimeout(l, 11)))),
            t
          );
        }),
          (O = new n(
            (z = function (n) {
              var t,
                r = !1,
                e = !1,
                i = [];
              return (
                Ht &&
                  !Ut &&
                  (h(n, function () {
                    (o = (t = this).target),
                      (u = t.attributeName),
                      (f = u === xi.c),
                      (a = t.oldValue),
                      (c = o.className),
                      p &&
                        f &&
                        !e &&
                        -1 < a.indexOf(en) &&
                        c.indexOf(en) < 0 &&
                        ((s = lt(!0)),
                        (ur.className = c
                          .split(xe)
                          .concat(
                            a.split(xe).filter(function (n) {
                              return n.match(s);
                            })
                          )
                          .join(xe)),
                        (r = e = !0)),
                      (r =
                        r ||
                        (f ? et(a, c) : u !== xi.s || a !== o[xi.s].cssText)),
                      i.push(u);
                  }),
                  it(i),
                  r && Ot.update(e || ge)),
                r
              );
            })
          )),
          (S = new n(C));
      }
    }
    function Be() {
      d &&
        !Vr &&
        (O.observe(ur, {
          attributes: !0,
          attributeOldValue: !0,
          attributeFilter: $n,
        }),
        S.observe(Lt ? or : sr, {
          attributes: !0,
          attributeOldValue: !0,
          subtree: !Lt,
          childList: !Lt,
          characterData: !Lt,
          attributeFilter: Lt ? Vn : $n,
        }),
        (Vr = !0));
    }
    function Qe() {
      d && Vr && (O.disconnect(), S.disconnect(), (Vr = !1));
    }
    function Kn() {
      if (!Ut) {
        var n,
          t = { w: H[xi.sW], h: H[xi.sH] };
        (n = fi(t, _)), (_ = t), n && qe({ A: !0 });
      }
    }
    function Jn() {
      Kr && Ge(!0);
    }
    function Zn() {
      Kr && !j.hasClass(Mn) && Ge(!1);
    }
    function nt() {
      Gr &&
        (Ge(!0),
        clearTimeout(I),
        (I = setTimeout(function () {
          Gr && !Et && Ge(!1);
        }, 100)));
    }
    function tt(n) {
      return Oi.prvD(n), !1;
    }
    function rt(n) {
      var r = Ci(n.target);
      mt(function (n, t) {
        r.is(t) && qe({ I: !0 });
      });
    }
    function Ue(n) {
      n || Ue(!0),
        Xn(Yt, $.split(xe)[0], nt, !Gr || n, !0),
        Xn(Yt, [q, X], [Jn, Zn], !Kr || n, !0),
        Ht || n || Yt.one("mouseover", Jn);
    }
    function Ve() {
      var n = {};
      return (
        Rt &&
          tr &&
          ((n.w = ii(tr.css(ve + de))),
          (n.h = ii(tr.css(ve + pe))),
          (n.c = fi(n, Ur)),
          (n.f = !0)),
        !!(Ur = n).c
      );
    }
    function et(n, t) {
      var r,
        e,
        i = typeof t == gi ? t.split(xe) : [],
        o = (function f(n, t) {
          var r,
            e,
            i = [],
            o = [];
          for (r = 0; r < n.length; r++) i[n[r]] = !0;
          for (r = 0; r < t.length; r++)
            i[t[r]] ? delete i[t[r]] : (i[t[r]] = !0);
          for (e in i) o.push(e);
          return o;
        })(typeof n == gi ? n.split(xe) : [], i),
        u = sn(De, o);
      if ((-1 < u && o.splice(u, 1), 0 < o[xi.l]))
        for (e = lt(!0, !0), r = 0; r < o.length; r++)
          if (!o[r].match(e)) return !0;
      return !1;
    }
    function it(n) {
      h((n = n || Pn), function (n, t) {
        if (-1 < Oi.inA(t, Pn)) {
          var r = Xt.attr(t);
          cn(r) == gi ? Zt.attr(t, r) : Zt.removeAttr(t);
        }
      });
    }
    function $e() {
      if (!Ut) {
        var n,
          t,
          r,
          e,
          i = !Fr,
          o = ee.w,
          u = ee.h,
          f = {},
          a = br || i;
        return (
          (f[ve + de] = me),
          (f[ve + pe] = me),
          (f[de] = ge),
          Xt.css(f),
          (n = or[xi.oW]),
          (t = a ? Si.max(n, or[xi.sW] - 1) : 1),
          (f[de] = br ? ge : ye),
          (f[ve + de] = ye),
          (f[pe] = ge),
          Xt.css(f),
          (r = or[xi.oH]),
          (e = Si.max(r, or[xi.sH] - 1)),
          (f[de] = t),
          (f[pe] = e),
          er.css(f),
          (f[ve + de] = o),
          (f[ve + pe] = u),
          Xt.css(f),
          { $: n, X: r, Y: t, G: e }
        );
      }
    }
    function qe(n) {
      clearTimeout(qt),
        (n = n || {}),
        (Fe.A |= n.A),
        (Fe.I |= n.I),
        (Fe.H |= n.H);
      var t,
        r = Oi.now(),
        e = !!Fe.A,
        i = !!Fe.I,
        o = !!Fe.H,
        u = n.T,
        f = 0 < Pe && Ht && !Et && !o && !u && r - $t < Pe && !mr && !br;
      if (
        (f && (qt = setTimeout(qe, Pe)),
        !(
          Et ||
          f ||
          (Ut && !u) ||
          (Ht && !o && (t = Yt.is(":hidden"))) ||
          "inline" === Yt.css("display")
        ))
      ) {
        ($t = r),
          (Fe = {}),
          !It || (St.x && St.y)
            ? (At = ai({}, xt.nativeScrollbarSize))
            : ((At.x = 0), (At.y = 0)),
          (ie = {
            x: 3 * (At.x + (St.x ? 0 : 3)),
            y: 3 * (At.y + (St.y ? 0 : 3)),
          }),
          (u = u || {});
        var a = function () {
            return fi.apply(this, [].slice.call(arguments).concat([o]));
          },
          c = { x: Zt[_e](), y: Zt[Oe]() },
          s = Vt.scrollbars,
          l = Vt.textarea,
          v = s.visibility,
          h = a(v, Hr),
          d = s.autoHide,
          p = a(d, Er),
          b = s.clickScrolling,
          m = a(b, Lr),
          g = s.dragScrolling,
          w = a(g, Rr),
          y = Vt.className,
          x = a(y, Mr),
          _ = Vt.resize,
          O = a(_, Nr) && !Rt,
          S = Vt.paddingAbsolute,
          z = a(S, Or),
          C = Vt.clipAlways,
          k = a(C, Sr),
          I = Vt.sizeAutoCapable && !Rt,
          T = a(I, Ar),
          A = Vt.nativeScrollbarsOverlaid.showNativeScrollbars,
          H = a(A, Ir),
          E = Vt.autoUpdate,
          L = a(E, Tr),
          R = Vt.overflowBehavior,
          N = a(R, Cr, o),
          W = l.dynWidth,
          M = a(Qr, W),
          D = l.dynHeight,
          F = a(Br, D);
        if (
          ((Xr = "n" === d),
          (Yr = "s" === d),
          (Gr = "m" === d),
          (Kr = "l" === d),
          (qr = s.autoHideDelay),
          (Dr = Mr),
          (Jr = "n" === _),
          (Zr = "b" === _),
          (ne = "h" === _),
          (te = "v" === _),
          (Wr = Vt.normalizeRTL),
          (A = A && St.x && St.y),
          (Hr = v),
          (Er = d),
          (Lr = b),
          (Rr = g),
          (Mr = y),
          (Nr = _),
          (Or = S),
          (Sr = C),
          (Ar = I),
          (Ir = A),
          (Tr = E),
          (Cr = ai({}, R)),
          (Qr = W),
          (Br = D),
          (dr = dr || { x: !1, y: !1 }),
          x &&
            (si(Yt, Dr + xe + De),
            ci(Yt, y !== di && null !== y && 0 < y.length ? y : De)),
          L &&
            (!0 === E || (null === E && kt)
              ? (Qe(), _t.add(Ot))
              : (_t.remove(Ot), Be())),
          T)
        )
          if (I)
            if ((rr ? rr.show() : ((rr = Ci(ui(Ee))), Jt.before(rr)), Wt))
              Gt.show();
            else {
              (Gt = Ci(ui(Le))), (fr = Gt[0]), rr.before(Gt);
              var P = { w: -1, h: -1 };
              je(Gt, function () {
                var n = { w: fr[xi.oW], h: fr[xi.oH] };
                fi(n, P) &&
                  ((Ht && mr && 0 < n.h) ||
                    (br && 0 < n.w) ||
                    (Ht && !mr && 0 === n.h) ||
                    (!br && 0 === n.w)) &&
                  qe(),
                  (P = n);
              }),
                (Wt = !0),
                null !== Tt && Gt.css(pe, Tt + "(100% + 1px)");
            }
          else Wt && Gt.hide(), rr && rr.hide();
        o && (Kt.find("*").trigger(we), Wt && Gt.find("*").trigger(we)),
          (t = t === di ? Yt.is(":hidden") : t);
        var j,
          B = !!Lt && "off" !== Xt.attr("wrap"),
          Q = a(B, Fr),
          U = Yt.css("direction"),
          V = a(U, _r),
          $ = Yt.css("box-sizing"),
          q = a($, gr),
          X = ei(ue);
        try {
          j = Wt ? fr[xi.bCR]() : null;
        } catch (wt) {
          return;
        }
        Nt = "border-box" === $;
        var Y = (Qt = "rtl" === U) ? le : ce,
          G = Qt ? ce : le,
          K = !1,
          J =
            !(!Wt || "none" === Yt.css(be)) &&
            0 === Si.round(j.right - j.left) &&
            (!!S || 0 < ur[xi.cW] - Mt);
        if (I && !J) {
          var Z = ur[xi.oW],
            nn = rr.css(de);
          rr.css(de, ge);
          var tn = ur[xi.oW];
          rr.css(de, nn),
            (K = Z !== tn) ||
              (rr.css(de, Z + 1),
              (tn = ur[xi.oW]),
              rr.css(de, nn),
              (K = Z !== tn));
        }
        var rn = (J || K) && I && !t,
          en = a(rn, br),
          on = !rn && br,
          un = !(!Wt || !I || t) && 0 === Si.round(j.bottom - j.top),
          fn = a(un, mr),
          an = !un && mr,
          cn = ei(fe, "-" + de, !((rn && Nt) || !Nt), !((un && Nt) || !Nt)),
          sn = ei(oe),
          ln = {},
          vn = {},
          hn = function () {
            return { w: ur[xi.cW], h: ur[xi.cH] };
          },
          dn = function () {
            return {
              w: ar[xi.oW] + Si.max(0, sr[xi.cW] - sr[xi.sW]),
              h: ar[xi.oH] + Si.max(0, sr[xi.cH] - sr[xi.sH]),
            };
          },
          pn = (Mt = X.l + X.r),
          bn = (Dt = X.t + X.b);
        if (
          ((pn *= S ? 1 : 0),
          (bn *= S ? 1 : 0),
          (X.c = a(X, wr)),
          (Ft = cn.l + cn.r),
          (Pt = cn.t + cn.b),
          (cn.c = a(cn, yr)),
          (jt = sn.l + sn.r),
          (Bt = sn.t + sn.b),
          (sn.c = a(sn, xr)),
          (Fr = B),
          (_r = U),
          (gr = $),
          (br = rn),
          (mr = un),
          (wr = X),
          (yr = cn),
          (xr = sn),
          V && Wt && Gt.css(be, G),
          X.c || V || z || en || fn || q || T)
        ) {
          var mn = {},
            gn = {},
            wn = [X.t, X.r, X.b, X.l];
          ri(vn, oe, [-X.t, -X.r, -X.b, -X.l]),
            S
              ? (ri(mn, me, wn), ri(Lt ? gn : ln, ue))
              : (ri(mn, me), ri(Lt ? gn : ln, ue, wn)),
            Jt.css(mn),
            Xt.css(gn);
        }
        ee = dn();
        var yn = !!Lt && $e(),
          xn = Lt && a(yn, jr),
          _n = Lt && yn ? { w: W ? yn.Y : yn.$, h: D ? yn.G : yn.X } : {};
        if (
          ((jr = yn),
          un && (fn || z || q || X.c || cn.c)
            ? (ln[pe] = ge)
            : (fn || z) && (ln[pe] = ye),
          rn && (en || z || q || X.c || cn.c || V)
            ? ((ln[de] = ge), (vn[he + de] = ye))
            : (en || z) && ((ln[de] = ye), (ln[be] = me), (vn[he + de] = me)),
          rn
            ? ((vn[de] = ge),
              (ln[de] = _i.d(de, "max-content intrinsic") || ge),
              (ln[be] = G))
            : (vn[de] = me),
          (vn[pe] = un ? _n.h || sr[xi.cH] : me),
          I && rr.css(vn),
          nr.css(ln),
          (ln = {}),
          (vn = {}),
          e ||
            i ||
            xn ||
            V ||
            q ||
            z ||
            en ||
            rn ||
            fn ||
            un ||
            H ||
            N ||
            k ||
            O ||
            h ||
            p ||
            w ||
            m ||
            M ||
            F ||
            Q)
        ) {
          var On = "overflow",
            Sn = On + "-x",
            zn = On + "-y";
          if (!It) {
            var Cn = {},
              kn = dr.y && pr.ys && !A ? (St.y ? Zt.css(Y) : -At.y) : 0,
              In = dr.x && pr.xs && !A ? (St.x ? Zt.css(se) : -At.x) : 0;
            ri(Cn, me), Zt.css(Cn);
          }
          var Tn = oi(),
            An = { w: _n.w || Tn[xi.cW], h: _n.h || Tn[xi.cH] },
            Hn = Tn[xi.sW],
            En = Tn[xi.sH];
          It || ((Cn[se] = an ? me : In), (Cn[Y] = on ? me : kn), Zt.css(Cn)),
            (ee = dn());
          var Ln = hn(),
            Rn = {
              w: Ln.w - jt - Ft - (Nt ? 0 : Mt),
              h: Ln.h - Bt - Pt - (Nt ? 0 : Dt),
            },
            Nn = {
              w: Si.max((rn ? An.w : Hn) + pn, Rn.w),
              h: Si.max((un ? An.h : En) + bn, Rn.h),
            };
          if (((Nn.c = a(Nn, zr)), (zr = Nn), I)) {
            (Nn.c || un || rn) &&
              ((vn[de] = Nn.w),
              (vn[pe] = Nn.h),
              Lt || (An = { w: Tn[xi.cW], h: Tn[xi.cH] }));
            var Wn = {},
              Mn = function (n) {
                var t = ni(n),
                  r = t.j,
                  e = t.K,
                  i = n ? rn : un,
                  o = n ? Ft : Pt,
                  u = n ? Mt : Dt,
                  f = n ? jt : Bt,
                  a = ee[r] - o - f - (Nt ? 0 : u);
                (i && (i || !cn.c)) || (vn[e] = Rn[r] - 1),
                  !(i && An[r] < a) ||
                    (n && Lt && B) ||
                    (Lt && (Wn[e] = ii(er.css(e)) - 1), --vn[e]),
                  0 < An[r] && (vn[e] = Si.max(1, vn[e]));
              };
            Mn(!0), Mn(!1), Lt && er.css(Wn), rr.css(vn);
          }
          rn && (ln[de] = ye),
            !rn || Nt || Vr || (ln[be] = "none"),
            nr.css(ln),
            (ln = {});
          var Dn = { w: Tn[xi.sW], h: Tn[xi.sH] };
          (Dn.c = i = a(Dn, vr)),
            (vr = Dn),
            (ee = dn()),
            (e = a((Ln = hn()), lr)),
            (lr = Ln);
          var Fn = Lt && (0 === ee.w || 0 === ee.h),
            Pn = kr,
            jn = {},
            Bn = {},
            Qn = {},
            Un = {},
            Vn = {},
            $n = {},
            qn = {},
            Xn = ar[xi.bCR](),
            Yn = function (n) {
              var t = ni(n),
                r = ni(!n).Q,
                e = t.Q,
                i = t.j,
                o = t.K,
                u = we + t.J + "Max",
                f = Xn[o] ? Si.abs(Xn[o] - ee[i]) : 0,
                a = Pn && 0 < Pn[e] && 0 === cr[u];
              (jn[e] = "v-s" === R[e]),
                (Bn[e] = "v-h" === R[e]),
                (Qn[e] = "s" === R[e]),
                (Un[e] = Si.max(0, Si.round(100 * (Dn[i] - ee[i])) / 100)),
                (Un[e] *= Fn || (a && 0 < f && f < 1) ? 0 : 1),
                (Vn[e] = 0 < Un[e]),
                ($n[e] = jn[e] || Bn[e] ? Vn[r] && !jn[r] && !Bn[r] : Vn[e]),
                ($n[e + "s"] = !!$n[e] && (Qn[e] || jn[e])),
                (qn[e] = Vn[e] && $n[e + "s"]);
            };
          if (
            (Yn(!0),
            Yn(!1),
            (Un.c = a(Un, kr)),
            (kr = Un),
            (Vn.c = a(Vn, dr)),
            (dr = Vn),
            ($n.c = a($n, pr)),
            (pr = $n),
            St.x || St.y)
          ) {
            var Gn,
              Kn = {},
              Jn = {},
              Zn = o;
            (Vn.x || Vn.y) &&
              ((Jn.w = St.y && Vn.y ? Dn.w + zt.y : me),
              (Jn.h = St.x && Vn.x ? Dn.h + zt.x : me),
              (Zn = a(Jn, hr)),
              (hr = Jn)),
              (Vn.c || $n.c || Dn.c || V || en || fn || rn || un || H) &&
                ((ln[oe + G] = ln[fe + G] = me),
                (Gn = function (n) {
                  var t = ni(n),
                    r = ni(!n),
                    e = t.Q,
                    i = n ? se : Y,
                    o = n ? un : rn;
                  St[e] && Vn[e] && $n[e + "s"]
                    ? ((ln[oe + i] = !o || A ? me : zt[e]),
                      (ln[fe + i] =
                        (n && o) || A ? me : zt[e] + "px solid transparent"))
                    : ((Jn[r.j] = ln[oe + i] = ln[fe + i] = me), (Zn = !0));
                }),
                It ? li(Zt, Ae, !A) : (Gn(!0), Gn(!1))),
              A && ((Jn.w = Jn.h = me), (Zn = !0)),
              Zn &&
                !It &&
                ((Kn[de] = $n.y ? Jn.w : me),
                (Kn[pe] = $n.x ? Jn.h : me),
                tr || ((tr = Ci(ui(He))), Zt.prepend(tr)),
                tr.css(Kn)),
              nr.css(ln);
          }
          var nt,
            tt = {};
          mn = {};
          if (
            (e || Vn.c || $n.c || Dn.c || N || q || H || V || k || fn) &&
            ((tt[G] = me),
            (nt = function (n) {
              var t = ni(n),
                r = ni(!n),
                e = t.Q,
                i = t.Z,
                o = n ? se : Y,
                u = function () {
                  (tt[o] = me), (re[r.j] = 0);
                };
              Vn[e] && $n[e + "s"]
                ? ((tt[On + i] = we),
                  A || It
                    ? u()
                    : ((tt[o] = -(St[e] ? zt[e] : At[e])),
                      (re[r.j] = St[e] ? zt[r.Q] : 0)))
                : ((tt[On + i] = me), u());
            })(!0),
            nt(!1),
            !It &&
            (ee.h < ie.x || ee.w < ie.y) &&
            ((Vn.x && $n.x && !St.x) || (Vn.y && $n.y && !St.y))
              ? ((tt[ue + ae] = ie.x),
                (tt[oe + ae] = -ie.x),
                (tt[ue + G] = ie.y),
                (tt[oe + G] = -ie.y))
              : (tt[ue + ae] = tt[oe + ae] = tt[ue + G] = tt[oe + G] = me),
            (tt[ue + Y] = tt[oe + Y] = me),
            (Vn.x && $n.x) || (Vn.y && $n.y) || Fn
              ? Lt && Fn && (mn[Sn] = mn[zn] = "hidden")
              : (!C || Bn.x || jn.x || Bn.y || jn.y) &&
                (Lt && (mn[Sn] = mn[zn] = me), (tt[Sn] = tt[zn] = "visible")),
            Jt.css(mn),
            Zt.css(tt),
            (tt = {}),
            (Vn.c || q || en || fn) && (!St.x || !St.y))
          ) {
            var rt = sr[xi.s];
            (rt.webkitTransform = "scale(1)"),
              (rt.display = "run-in"),
              sr[xi.oH],
              (rt.display = me),
              (rt.webkitTransform = me);
          }
          if (((ln = {}), V || en || fn))
            if (Qt && rn) {
              var et = nr.css(be),
                it = Si.round(nr.css(be, me).css(le, me).position().left);
              nr.css(be, et),
                it !== Si.round(nr.position().left) && (ln[le] = it);
            } else ln[le] = me;
          if ((nr.css(ln), Lt && i)) {
            var ot = (function yt() {
              var n = or.selectionStart;
              if (n === di) return;
              var t,
                r,
                e = Xt.val(),
                i = e[xi.l],
                o = e.split("\n"),
                u = o[xi.l],
                f = e.substr(0, n).split("\n"),
                a = 0,
                c = 0,
                s = f[xi.l],
                l = f[f[xi.l] - 1][xi.l];
              for (r = 0; r < o[xi.l]; r++)
                (t = o[r][xi.l]), c < t && ((a = r + 1), (c = t));
              return { nn: s, tn: l, rn: u, en: c, in: a, un: n, an: i };
            })();
            if (ot) {
              var ut = Pr === di || ot.rn !== Pr.rn,
                ft = ot.nn,
                at = ot.tn,
                ct = ot["in"],
                st = ot.rn,
                lt = ot.en,
                vt = ot.un,
                ht = ot.an <= vt && $r,
                dt = {
                  x: B || at !== lt || ft !== ct ? -1 : kr.x,
                  y: (
                    B
                      ? ht || (ut && Pn && c.y === Pn.y)
                      : (ht || ut) && ft === st
                  )
                    ? kr.y
                    : -1,
                };
              (c.x = -1 < dt.x ? (Qt && Wr && Ct.i ? 0 : dt.x) : c.x),
                (c.y = -1 < dt.y ? dt.y : c.y);
            }
            Pr = ot;
          }
          Qt && Ct.i && St.y && Vn.x && Wr && (c.x += re.w || 0),
            rn && Yt[_e](0),
            un && Yt[Oe](0),
            Zt[_e](c.x)[Oe](c.y);
          var pt = "v" === v,
            bt = "h" === v,
            mt = "a" === v,
            gt = function (n, t) {
              (t = t === di ? n : t), Ye(!0, n, qn.x), Ye(!1, t, qn.y);
            };
          li(Yt, ke, $n.x || $n.y),
            li(Yt, Ie, $n.x),
            li(Yt, Te, $n.y),
            V && !Rt && li(Yt, Se, Qt),
            Rt && ci(Yt, ze),
            O &&
              (li(Yt, ze, Jr),
              li(ir, Re, !Jr),
              li(ir, Ne, Zr),
              li(ir, We, ne),
              li(ir, Me, te)),
            (h || N || $n.c || Vn.c || H) &&
              (A
                ? H && (si(Yt, Ce), A && gt(!1))
                : mt
                ? gt(qn.x, qn.y)
                : pt
                ? gt(!0)
                : bt && gt(!1)),
            (p || H) && (Ue(!Kr && !Gr), Ge(Xr, !Xr)),
            (e || Un.c || fn || en || O || q || z || H || V) &&
              (Ke(!0), Je(!0), Ke(!1), Je(!1)),
            m && Ze(!0, b),
            w && Ze(!1, g),
            ti("onDirectionChanged", { isRTL: Qt, dir: U }, V),
            ti("onHostSizeChanged", { width: lr.w, height: lr.h }, e),
            ti("onContentSizeChanged", { width: vr.w, height: vr.h }, i),
            ti(
              "onOverflowChanged",
              {
                x: Vn.x,
                y: Vn.y,
                xScrollable: $n.xs,
                yScrollable: $n.ys,
                clipped: $n.x || $n.y,
              },
              Vn.c || $n.c
            ),
            ti("onOverflowAmountChanged", { x: Un.x, y: Un.y }, Un.c);
        }
        Rt &&
          Ur &&
          (dr.c || Ur.c) &&
          (Ur.f || Ve(),
          St.y && dr.x && nr.css(ve + de, Ur.w + zt.y),
          St.x && dr.y && nr.css(ve + pe, Ur.h + zt.x),
          (Ur.c = !1)),
          Ht && u.updateOnLoad && Xe(),
          ti("onUpdated", { forced: o });
      }
    }
    function Xe() {
      Lt ||
        mt(function (n, t) {
          nr.find(t).each(function (n, t) {
            Oi.inA(t, Qn) < 0 && (Qn.push(t), Ci(t).off(Bn, rt).on(Bn, rt));
          });
        });
    }
    function ot(n) {
      var t = Ii.O(n, Ii._, !0, u);
      return (u = ai({}, u, t.S)), (Vt = ai({}, Vt, t.z)), t.z;
    }
    function ut(e) {
      var n = "parent",
        t = mn + xe + Cn,
        r = Lt ? xe + Cn : me,
        i = Vt.textarea.inheritedAttrs,
        o = {},
        u = function () {
          var r = e ? Xt : Yt;
          h(o, function (n, t) {
            cn(t) == gi && (n == xi.c ? r.addClass(t) : r.attr(n, t));
          });
        },
        f = [
          rn,
          en,
          on,
          ze,
          Se,
          un,
          fn,
          an,
          Ce,
          ke,
          Ie,
          Te,
          De,
          mn,
          Cn,
          Mr,
        ].join(xe),
        a = {};
      (Yt = Yt || (Lt ? (p ? Xt[n]()[n]()[n]()[n]() : Ci(ui(on))) : Xt)),
        (nr = nr || pt(_n + r)),
        (Zt = Zt || pt(yn + r)),
        (Jt = Jt || pt(wn + r)),
        (Kt = Kt || pt("os-resize-observer-host")),
        (er = er || (Lt ? pt(gn) : di)),
        p && ci(Yt, en),
        e && si(Yt, f),
        (i = cn(i) == gi ? i.split(xe) : i),
        Oi.isA(i) &&
          Lt &&
          h(i, function (n, t) {
            cn(t) == gi && (o[t] = e ? Yt.attr(t) : Xt.attr(t));
          }),
        e
          ? (p && Ht
              ? (Kt.children().remove(),
                h([Jt, Zt, nr, er], function (n, t) {
                  t && si(t.removeAttr(xi.s), Dn);
                }),
                ci(Yt, Lt ? on : rn))
              : (gt(Kt),
                nr.contents().unwrap().unwrap().unwrap(),
                Lt && (Xt.unwrap(), gt(Yt), gt(er), u())),
            Lt && Xt.removeAttr(xi.s),
            Rt && si(c, tn))
          : (Lt &&
              (Vt.sizeAutoCapable ||
                ((a[de] = Xt.css(de)), (a[pe] = Xt.css(pe))),
              p || Xt.addClass(Cn).wrap(Yt),
              (Yt = Xt[n]().css(a))),
            p ||
              (ci(Xt, Lt ? t : rn),
              Yt.wrapInner(nr).wrapInner(Zt).wrapInner(Jt).prepend(Kt),
              (nr = wt(Yt, R + _n)),
              (Zt = wt(Yt, R + yn)),
              (Jt = wt(Yt, R + wn)),
              Lt && (nr.prepend(er), u())),
            It && ci(Zt, Ae),
            St.x && St.y && ci(Zt, xn),
            Rt && ci(c, tn),
            (H = Kt[0]),
            (ur = Yt[0]),
            (ar = Jt[0]),
            (cr = Zt[0]),
            (sr = nr[0]),
            it());
    }
    function ft() {
      var r,
        t,
        e = [
          112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38,
          39, 40, 16, 17, 18, 19, 20, 144,
        ],
        i = [],
        n = "focus";
      function o(n) {
        $e(), Ot.update(ge), n && kt && clearInterval(r);
      }
      Lt
        ? (9 < D || !kt
            ? Yn(Xt, "input", o)
            : Yn(
                Xt,
                [Y, G],
                [
                  function u(n) {
                    var t = n.keyCode;
                    sn(t, e) < 0 &&
                      (i[xi.l] || (o(), (r = setInterval(o, 1e3 / 60))),
                      sn(t, i) < 0 && i.push(t));
                  },
                  function f(n) {
                    var t = n.keyCode,
                      r = sn(t, i);
                    sn(t, e) < 0 &&
                      (-1 < r && i.splice(r, 1), i[xi.l] || o(!0));
                  },
                ]
              ),
          Yn(
            Xt,
            [we, "drop", n, n + "out"],
            [
              function a(n) {
                return (
                  Xt[_e](Ct.i && Wr ? 9999999 : 0),
                  Xt[Oe](0),
                  Oi.prvD(n),
                  Oi.stpP(n),
                  !1
                );
              },
              function c(n) {
                setTimeout(function () {
                  Et || o();
                }, 50);
              },
              function s() {
                ($r = !0), ci(Yt, n);
              },
              function l() {
                ($r = !1), (i = []), si(Yt, n), o(!0);
              },
            ]
          ))
        : Yn(nr, J, function v(n) {
            !0 !== Tr &&
              (function l(n) {
                if (!Ht) return 1;
                var t = "flex-grow",
                  r = "flex-shrink",
                  e = "flex-basis",
                  i = [
                    de,
                    ve + de,
                    he + de,
                    oe + le,
                    oe + ce,
                    le,
                    ce,
                    "font-weight",
                    "word-spacing",
                    t,
                    r,
                    e,
                  ],
                  o = [ue + le, ue + ce, fe + le + de, fe + ce + de],
                  u = [
                    pe,
                    ve + pe,
                    he + pe,
                    oe + ae,
                    oe + se,
                    ae,
                    se,
                    "line-height",
                    t,
                    r,
                    e,
                  ],
                  f = [ue + ae, ue + se, fe + ae + de, fe + se + de],
                  a = "s" === Cr.x || "v-s" === Cr.x,
                  c = !1,
                  s = function (n, t) {
                    for (var r = 0; r < n[xi.l]; r++) if (n[r] === t) return !0;
                    return !1;
                  };
                return (
                  ("s" === Cr.y || "v-s" === Cr.y) &&
                    ((c = s(u, n)) || Nt || (c = s(f, n))),
                  a && !c && ((c = s(i, n)) || Nt || (c = s(o, n))),
                  c
                );
              })((n = n.originalEvent || n).propertyName) &&
              Ot.update(ge);
          }),
        Yn(
          Zt,
          we,
          function h(n) {
            Ut ||
              (t !== di
                ? clearTimeout(t)
                : ((Yr || Gr) && Ge(!0),
                  dt() || ci(Yt, Ce),
                  ti("onScrollStart", n)),
              Q || (Je(!0), Je(!1)),
              ti("onScroll", n),
              (t = setTimeout(function () {
                Et ||
                  (clearTimeout(t),
                  (t = di),
                  (Yr || Gr) && Ge(!1),
                  dt() || si(Yt, Ce),
                  ti("onScrollStop", n));
              }, 175)));
          },
          !0
        );
    }
    function at(i) {
      var n,
        t,
        o = function (n) {
          var t = pt(kn + xe + (n ? Nn : Wn), !0),
            r = pt(In, t),
            e = pt(An, t);
          return p || i || (t.append(r), r.append(e)), { cn: t, sn: r, ln: e };
        };
      function r(n) {
        var t = ni(n),
          r = t.cn,
          e = t.sn,
          i = t.ln;
        p && Ht
          ? h([r, e, i], function (n, t) {
              si(t.removeAttr(xi.s), Dn);
            })
          : gt(r || o(n).cn);
      }
      i
        ? (r(!0), r())
        : ((n = o(!0)),
          (t = o()),
          (a = n.cn),
          (s = n.sn),
          (l = n.ln),
          (v = t.cn),
          (b = t.sn),
          (m = t.ln),
          p || (Jt.after(v), Jt.after(a)));
    }
    function ct(S) {
      var z,
        i,
        C,
        k,
        e = ni(S),
        I = e.vn,
        t = x.top !== x,
        T = e.Q,
        r = e.Z,
        A = we + e.J,
        o = "active",
        u = "snapHandle",
        f = "click",
        H = 1,
        a = [16, 17];
      function c(n) {
        return D && t ? n["screen" + r] : Oi.page(n)[T];
      }
      function s(n) {
        return Vt.scrollbars[n];
      }
      function l() {
        H = 0.5;
      }
      function v() {
        H = 1;
      }
      function h(n) {
        Oi.stpP(n);
      }
      function E(n) {
        -1 < sn(n.keyCode, a) && l();
      }
      function L(n) {
        -1 < sn(n.keyCode, a) && v();
      }
      function R(n) {
        var t = (n.originalEvent || n).touches !== di;
        return (
          !(Ut || Et || dt() || !Rr || (t && !s("touchSupport"))) &&
          (1 === Oi.mBtn(n) || t)
        );
      }
      function d(n) {
        if (R(n)) {
          var t = I.F,
            r = I.M,
            e = I.N * (((c(n) - C) * k) / (t - r));
          (e = isFinite(e) ? e : 0),
            Qt && S && !Ct.i && (e *= -1),
            Zt[A](Si.round(i + e)),
            Q && Je(S, i + e),
            w || Oi.prvD(n);
        } else N(n);
      }
      function N(n) {
        if (
          ((n = n || n.originalEvent),
          Xn(P, [$, V, Y, G, K], [d, N, E, L, tt], !0),
          Oi.rAF()(function () {
            Xn(P, f, h, !0, { V: !0 });
          }),
          Q && Je(S, !0),
          (Q = !1),
          si(j, Mn),
          si(e.ln, o),
          si(e.sn, o),
          si(e.cn, o),
          (k = 1),
          v(),
          z !== (C = i = di) && (Ot.scrollStop(), clearTimeout(z), (z = di)),
          n)
        ) {
          var t = ur[xi.bCR]();
          (n.clientX >= t.left &&
            n.clientX <= t.right &&
            n.clientY >= t.top &&
            n.clientY <= t.bottom) ||
            Zn(),
            (Yr || Gr) && Ge(!1);
        }
      }
      function W(n) {
        (i = Zt[A]()),
          (i = isNaN(i) ? 0 : i),
          ((Qt && S && !Ct.n) || !Qt) && (i = i < 0 ? 0 : i),
          (k = vt()[T]),
          (C = c(n)),
          (Q = !s(u)),
          ci(j, Mn),
          ci(e.ln, o),
          ci(e.cn, o),
          Xn(P, [$, V, K], [d, N, tt]),
          Oi.rAF()(function () {
            Xn(P, f, h, !1, { V: !0 });
          }),
          (!D && y) || Oi.prvD(n),
          Oi.stpP(n);
      }
      Yn(e.ln, U, function p(n) {
        R(n) && W(n);
      }),
        Yn(
          e.sn,
          [U, q, X],
          [
            function M(n) {
              if (R(n)) {
                var h,
                  t =
                    e.vn.M / Math.round(Si.min(1, ee[e.j] / vr[e.j]) * e.vn.F),
                  d = Si.round(ee[e.j] * t),
                  p = 270 * t,
                  b = 400 * t,
                  m = e.sn.offset()[e.B],
                  r = n.ctrlKey,
                  g = n.shiftKey,
                  w = g && r,
                  y = !0,
                  x = function (n) {
                    Q && Je(S, n);
                  },
                  _ = function () {
                    x(), W(n);
                  },
                  O = function () {
                    if (!Et) {
                      var n = (C - m) * k,
                        t = I.W,
                        r = I.F,
                        e = I.M,
                        i = I.N,
                        o = I.L,
                        u = p * H,
                        f = y ? Si.max(b, u) : u,
                        a = i * ((n - e / 2) / (r - e)),
                        c = Qt && S && ((!Ct.i && !Ct.n) || Wr),
                        s = c ? t < n : n < t,
                        l = {},
                        v = {
                          easing: "linear",
                          step: function (n) {
                            Q && (Zt[A](n), Je(S, n));
                          },
                        };
                      (a = isFinite(a) ? a : 0),
                        (a = Qt && S && !Ct.i ? i - a : a),
                        g
                          ? (Zt[A](a),
                            w
                              ? ((a = Zt[A]()),
                                Zt[A](o),
                                (a = c && Ct.i ? i - a : a),
                                (a = c && Ct.n ? -a : a),
                                (l[T] = a),
                                Ot.scroll(
                                  l,
                                  ai(v, { duration: 130, complete: _ })
                                ))
                              : _())
                          : ((h = y ? s : h),
                            (
                              c
                                ? h
                                  ? n <= t + e
                                  : t <= n
                                : h
                                ? t <= n
                                : n <= t + e
                            )
                              ? (clearTimeout(z),
                                Ot.scrollStop(),
                                (z = di),
                                x(!0))
                              : ((z = setTimeout(O, f)),
                                (l[T] = (h ? "-=" : "+=") + d),
                                Ot.scroll(l, ai(v, { duration: u }))),
                            (y = !1));
                    }
                  };
                r && l(),
                  (k = vt()[T]),
                  (C = Oi.page(n)[T]),
                  (Q = !s(u)),
                  ci(j, Mn),
                  ci(e.sn, o),
                  ci(e.cn, o),
                  Xn(P, [V, Y, G, K], [N, E, L, tt]),
                  O(),
                  Oi.prvD(n),
                  Oi.stpP(n);
              }
            },
            function b(n) {
              (B = !0), (Yr || Gr) && Ge(!0);
            },
            function m(n) {
              (B = !1), (Yr || Gr) && Ge(!1);
            },
          ]
        ),
        Yn(e.cn, U, function g(n) {
          Oi.stpP(n);
        }),
        F &&
          Yn(e.cn, J, function (n) {
            n.target === e.cn[0] && (Ke(S), Je(S));
          });
    }
    function Ye(n, t, r) {
      var e = n ? a : v;
      li(Yt, n ? un : fn, !t), li(e, En, !r);
    }
    function Ge(n, t) {
      if ((clearTimeout(k), n)) si(a, Ln), si(v, Ln);
      else {
        var r,
          e = function () {
            B ||
              Et ||
              (!(r = l.hasClass("active") || m.hasClass("active")) &&
                (Yr || Gr || Kr) &&
                ci(a, Ln),
              !r && (Yr || Gr || Kr) && ci(v, Ln));
          };
        0 < qr && !0 !== t ? (k = setTimeout(e, qr)) : e();
      }
    }
    function Ke(n) {
      var t = {},
        r = ni(n),
        e = r.vn,
        i = Si.min(1, ee[r.j] / vr[r.j]);
      (t[r.K] = Si.floor(100 * i * 1e6) / 1e6 + "%"),
        dt() || r.ln.css(t),
        (e.M = r.ln[0]["offset" + r.hn]),
        (e.D = i);
    }
    function Je(n, t) {
      var r,
        e,
        i = cn(t) == wi,
        o = Qt && n,
        u = ni(n),
        f = u.vn,
        a = "translate(",
        c = _i.v("transform"),
        s = _i.v("transition"),
        l = n ? Zt[_e]() : Zt[Oe](),
        v = t === di || i ? l : t,
        h = f.M,
        d = u.sn[0]["offset" + u.hn],
        p = d - h,
        b = {},
        m = (cr[we + u.hn] - cr["client" + u.hn]) * (Ct.n && o ? -1 : 1),
        g = function (n) {
          return isNaN(n / m) ? 0 : Si.max(0, Si.min(1, n / m));
        },
        w = function (n) {
          var t = p * n;
          return (
            (t = isNaN(t) ? 0 : t),
            (t = o && !Ct.i ? d - h - t : t),
            (t = Si.max(0, t))
          );
        },
        y = g(l),
        x = w(g(v)),
        _ = w(y);
      (f.N = m),
        (f.L = l),
        (f.R = y),
        ln
          ? ((r = o ? -(d - h - x) : x),
            (e = n ? a + r + "px, 0)" : a + "0, " + r + "px)"),
            (b[c] = e),
            F &&
              (b[s] =
                i && 1 < Si.abs(x - f.W)
                  ? (function O(n) {
                      var t = _i.v("transition"),
                        r = n.css(t);
                      if (r) return r;
                      for (
                        var e,
                          i,
                          o,
                          u = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*",
                          f = new RegExp(u),
                          a = new RegExp("^(" + u + ")+$"),
                          c = "property duration timing-function delay".split(
                            " "
                          ),
                          s = [],
                          l = 0,
                          v = function (n) {
                            if (((e = []), !n.match(a))) return n;
                            for (; n.match(f); )
                              e.push(RegExp.$1), (n = n.replace(f, me));
                            return e;
                          };
                        l < c[xi.l];
                        l++
                      )
                        for (
                          i = v(n.css(t + "-" + c[l])), o = 0;
                          o < i[xi.l];
                          o++
                        )
                          s[o] = (s[o] ? s[o] + xe : me) + i[o];
                      return s.join(", ");
                    })(u.ln) +
                    ", " +
                    (c + xe + 250) +
                    "ms"
                  : me))
          : (b[u.B] = x),
        dt() ||
          (u.ln.css(b),
          ln &&
            F &&
            i &&
            u.ln.one(J, function () {
              Et || u.ln.css(s, me);
            })),
        (f.W = x),
        (f.P = _),
        (f.F = d);
    }
    function Ze(n, t) {
      var r = t ? "removeClass" : "addClass",
        e = n ? b : m,
        i = n ? Tn : Hn;
      (n ? s : l)[r](i), e[r](i);
    }
    function ni(n) {
      return {
        K: n ? de : pe,
        hn: n ? "Width" : "Height",
        B: n ? le : ae,
        J: n ? "Left" : "Top",
        Q: n ? pn : bn,
        Z: n ? "X" : "Y",
        j: n ? "w" : "h",
        dn: n ? "l" : "t",
        sn: n ? s : b,
        ln: n ? l : m,
        cn: n ? a : v,
        vn: n ? vn : hn,
      };
    }
    function st(n) {
      (ir = ir || pt(Rn, !0)),
        n
          ? p && Ht
            ? si(ir.removeAttr(xi.s), Dn)
            : gt(ir)
          : p || Yt.append(ir);
    }
    function ti(n, t, r) {
      if (!1 !== r)
        if (Ht) {
          var e,
            i = Vt.callbacks[n],
            o = n;
          "on" === o.substr(0, 2) &&
            (o = o.substr(2, 1).toLowerCase() + o.substr(3)),
            cn(i) == bi && i.call(Ot, t),
            h(jn, function () {
              cn((e = this).on) == bi && e.on(o, t);
            });
        } else Et || Fn.push({ n: n, a: t });
    }
    function ri(n, t, r) {
      (r = r || [me, me, me, me]),
        (n[(t = t || me) + ae] = r[0]),
        (n[t + ce] = r[1]),
        (n[t + se] = r[2]),
        (n[t + le] = r[3]);
    }
    function ei(n, t, r, e) {
      return (
        (t = t || me),
        (n = n || me),
        {
          t: e ? 0 : ii(Yt.css(n + ae + t)),
          r: r ? 0 : ii(Yt.css(n + ce + t)),
          b: e ? 0 : ii(Yt.css(n + se + t)),
          l: r ? 0 : ii(Yt.css(n + le + t)),
        }
      );
    }
    function lt(n, t) {
      var r,
        e,
        i,
        o = function (n, t) {
          if (((i = ""), t && typeof n == gi))
            for (e = n.split(xe), r = 0; r < e[xi.l]; r++)
              i += "|" + e[r] + "$";
          return i;
        };
      return new RegExp("(^" + rn + "([-_].+|)$)" + o(Mr, n) + o(Dr, t), "g");
    }
    function vt() {
      var n = ar[xi.bCR]();
      return {
        x: (ln && 1 / (Si.round(n.width) / ar[xi.oW])) || 1,
        y: (ln && 1 / (Si.round(n.height) / ar[xi.oH])) || 1,
      };
    }
    function ht(n) {
      var t = "ownerDocument",
        r = "HTMLElement",
        e = (n && n[t] && n[t].parentWindow) || vi;
      return typeof e[r] == pi
        ? n instanceof e[r]
        : n &&
            typeof n == pi &&
            null !== n &&
            1 === n.nodeType &&
            typeof n.nodeName == gi;
    }
    function ii(n, t) {
      var r = t ? parseFloat(n) : parseInt(n, 10);
      return isNaN(r) ? 0 : r;
    }
    function dt() {
      return Ir && St.x && St.y;
    }
    function oi() {
      return Lt ? er[0] : sr;
    }
    function ui(r, n) {
      return (
        "<div " +
        (r
          ? cn(r) == gi
            ? 'class="' + r + '"'
            : (function () {
                var n,
                  t = me;
                if (Ci.isPlainObject(r))
                  for (n in r)
                    t += ("c" === n ? "class" : n) + '="' + r[n] + '" ';
                return t;
              })()
          : me) +
        ">" +
        (n || me) +
        "</div>"
      );
    }
    function pt(n, t) {
      var r = cn(t) == wi,
        e = (!r && t) || Yt;
      return p && !e[xi.l]
        ? null
        : p
        ? e[r ? "children" : "find"](R + n.replace(/\s/g, R)).eq(0)
        : Ci(ui(n));
    }
    function bt(n, t) {
      for (var r, e = t.split(R), i = 0; i < e.length; i++) {
        if (!n[xi.hOP](e[i])) return;
        (r = n[e[i]]), i < e.length && cn(r) == pi && (n = r);
      }
      return r;
    }
    function mt(n) {
      var t = Vt.updateOnLoad;
      (t = cn(t) == gi ? t.split(xe) : t), Oi.isA(t) && !Et && h(t, n);
    }
    function fi(n, t, r) {
      if (r) return r;
      if (cn(n) != pi || cn(t) != pi) return n !== t;
      for (var e in n)
        if ("c" !== e) {
          if (!n[xi.hOP](e) || !t[xi.hOP](e)) return !0;
          if (fi(n[e], t[e])) return !0;
        }
      return !1;
    }
    function ai() {
      return Ci.extend.apply(this, [!0].concat([].slice.call(arguments)));
    }
    function ci(n, t) {
      return e.addClass.call(n, t);
    }
    function si(n, t) {
      return e.removeClass.call(n, t);
    }
    function li(n, t, r) {
      return (r ? ci : si)(n, t);
    }
    function gt(n) {
      return e.remove.call(n);
    }
    function wt(n, t) {
      return e.find.call(n, t).eq(0);
    }
  }
  return (
    zi &&
      zi.fn &&
      (zi.fn.overlayScrollbars = function (n, t) {
        return zi.isPlainObject(n)
          ? (zi.each(this, function () {
              q(this, n, t);
            }),
            this)
          : q(this, n);
      }),
    q
  );
});
