import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  L as i,
  M as a,
  N as o,
  O as s,
  P as c,
  c as l,
  g as u,
  h as d,
  j as f,
  k as p,
  l as m,
  o as h,
  s as ee,
  v as g,
  w as _,
  x as te,
  z as v,
} from "./react.BUXbFMJS.mjs";
import {
  I as y,
  N as ne,
  R as re,
  S as b,
  U as x,
  a as S,
  f as C,
  h as w,
  r as T,
  t as E,
} from "./motion.CLjJX74m.mjs";
import {
  B as D,
  C as ie,
  Ct as O,
  D as k,
  E as A,
  Et as ae,
  H as j,
  N as M,
  O as N,
  St as P,
  T as F,
  U as oe,
  Y as I,
  a as L,
  b as se,
  bt as ce,
  d as R,
  dt as le,
  ft as ue,
  gt as z,
  ht as B,
  k as V,
  mt as de,
  n as fe,
  nt as pe,
  o as H,
  p as U,
  s as W,
  st as G,
  ut as K,
  w as q,
  x as J,
  xt as me,
  yt as he,
} from "./framer.BQfDiYYl.mjs";
import { i as Y, n as ge, r as _e, t as ve } from "./F_pPBFm64.R_TR2zCX.mjs";
import { a as ye, c as be, i as xe, o as Se, r as Ce, s as we } from "./shared-lib.DjXQ4AZU.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./YqEpde0dB.D0X_SpJn.mjs";
import { n as ke, t as X } from "./CXVDk4iXl.tTc9sygM.mjs";
import { n as Ae, t as Z } from "./GDe4cfswB.DR20MxBb.mjs";
import { n as Q, t as je } from "./d0pe_w6n8.DYFf_PrJ.mjs";
import { i as Me, r as Ne, t as Pe } from "./default-utils.js__0.45.BIBXjq3o.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./PKAGe55xO.C9cvoNFs.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./YqEpde0dB.C7QC1g4X.mjs";
import { n as Ue, t as We } from "./Gr0wzHBa6.DFGbWtn0.mjs";
import { n as Ge, t as Ke } from "./mN1qGB_I6.Cv6MNdwY.mjs";
import { i as qe, t as Je } from "./PmFmTH0v9.C5XWGSGf.mjs";
import { a as Ye, r as Xe } from "./yR6ljnT0S.BQABhoK5.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./fmOVsh00u.BOfh2ixt.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./l3HElOeOb.BCd9AhIb.mjs";
import { i as at, n as ot, r as st, t as ct } from "./qclvMG6mW.CcOdxI0M.mjs";
import { n as lt, r as ut } from "./augiA20Il.BRztf7k8.mjs";
function dt(e, t) {
  return vt(e) ? e[yt(0, e.length, t)] : e;
}
function ft(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = St(0, t, r);
    e.push(bt(n, 1, i));
  }
}
function pt(e) {
  let t = [0];
  return (ft(t, e - 1), t);
}
function mt(e, t = pt(e.length), n = xt) {
  let r = e.length,
    i = r - t.length;
  return (
    i > 0 && ft(t, i),
    (i) => {
      let a = 0;
      for (; a < r - 2 && !(i < t[a + 1]); a++);
      let o = gt(0, 1, St(t[a], t[a + 1], i));
      return ((o = dt(n, a)(o)), bt(e[a], e[a + 1], o));
    }
  );
}
function ht(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt = e(() => {
    ((gt = (e, t, n) => Math.min(Math.max(n, e), t)),
      (_t = (e) => typeof e == `number`),
      (vt = (e) => Array.isArray(e) && !_t(e[0])),
      (yt = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (bt = (e, t, n) => -n * e + n * t + e),
      (xt = (e) => e),
      (St = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e))),
      (Ct = (e) => typeof e == `string`));
  }),
  Tt = e(() => {
    wt();
  }),
  Et = e(() => {
    Tt();
  });
function Dt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Ot = e(() => {}),
  kt,
  At = e(() => {
    ((kt = {}),
      Object.defineProperty(kt, `__esModule`, { value: !0 }),
      (kt.warning = function () {}),
      (kt.invariant = function () {}),
      kt.__esModule,
      kt.warning,
      kt.invariant);
  }),
  jt = e(() => {
    wt();
  });
function Mt(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Nt(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Mt(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : fn[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Pt(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Ft({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = pn.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Pt(e, n);
        },
      });
    });
}
function It(e) {
  e.forEach(Ft);
}
function Lt() {
  typeof ResizeObserver < `u` && (mn = new ResizeObserver(It));
}
function Rt(e, t) {
  mn || Lt();
  let n = Mt(e);
  return (
    n.forEach((e) => {
      let n = pn.get(e);
      (n || ((n = new Set()), pn.set(e, n)), n.add(t), mn?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = pn.get(e);
        (n?.delete(t), (n != null && n.size) || mn == null || mn.unobserve(e));
      });
    }
  );
}
function zt() {
  ((gn = () => {
    let e = { width: v.innerWidth, height: v.innerHeight },
      t = { target: v, size: e, contentSize: e };
    hn.forEach((e) => e(t));
  }),
    v.addEventListener(`resize`, gn));
}
function Bt(e) {
  return (
    hn.add(e),
    gn || zt(),
    () => {
      (hn.delete(e), !hn.size && gn && (gn = void 0));
    }
  );
}
function Vt(e, t) {
  return typeof e == `function` ? Bt(e) : Rt(e, t);
}
function Ht(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = bn[t],
    s = i.current,
    c = n.time;
  ((i.current = e[`scroll` + o]),
    (i.scrollLength = e[`scroll` + a] - e[`client` + a]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = St(0, i.scrollLength, i.current)));
  let l = r - c;
  i.velocity = l > _n ? 0 : ht(i.current - s, l);
}
function Ut(e, t, n) {
  (Ht(e, `x`, t, n), Ht(e, `y`, t, n), (t.time = n));
}
function Wt(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t;)
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r instanceof SVGGraphicsElement && `getBBox` in r) {
      let { top: e, left: t } = r.getBBox();
      for (n.x += t, n.y += e; r && r.tagName !== `svg`;) r = r.parentNode;
    }
  return n;
}
function Gt(e, t, n = 0) {
  let r = 0;
  if ((Sn[e] !== void 0 && (e = Sn[e]), Ct(e))) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (_t(e) && (r = t * e), n + r);
}
function Kt(e, t, n, r) {
  let i = Array.isArray(e) ? e : Cn,
    a = 0,
    o = 0;
  return (
    _t(e)
      ? (i = [e, e])
      : Ct(e) && ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, Sn[e] ? e : `0`])),
    (a = Gt(i[0], n, r)),
    (o = Gt(i[1], t)),
    a - o
  );
}
function qt(e, t, n) {
  let { offset: r = xn.All } = n,
    { target: i = e, axis: a = `y` } = n,
    o = a === `y` ? `height` : `width`,
    s = i === e ? wn : Wt(i, e),
    c =
      i === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: i.clientWidth, height: i.clientHeight },
    l = { width: e.clientWidth, height: e.clientHeight };
  t[a].offset.length = 0;
  let u = !t[a].interpolate,
    d = r.length;
  for (let e = 0; e < d; e++) {
    let n = Kt(r[e], l[o], c[o], s[a]);
    (u || n === t[a].interpolatorOffsets[e] || (u = !0), (t[a].offset[e] = n));
  }
  (u &&
    ((t[a].interpolate = mt(pt(d), t[a].offset)), (t[a].interpolatorOffsets = [...t[a].offset])),
    (t[a].progress = t[a].interpolate(t[a].current)));
}
function Jt(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r != e;)
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function Yt(e, t, n, r = {}) {
  let i = r.axis || `y`;
  return {
    measure: () => Jt(e, r.target, n),
    update: (t) => {
      (Ut(e, n, t), (r.offset || r.target) && qt(e, n, r));
    },
    notify: typeof t == `function` ? () => t(n) : Xt(t, n[i]),
  };
}
function Xt(e, t) {
  return (
    e.pause(),
    e.forEachNative((e, { easing: t }) => {
      var n, r;
      if (e.updateDuration) (t || (e.easing = xt), e.updateDuration(1));
      else {
        let i = { duration: 1e3 };
        (t || (i.easing = `linear`), (r = (n = e.effect)?.updateTiming) == null || r.call(n, i));
      }
    }),
    () => {
      e.currentTime = t.progress;
    }
  );
}
function Zt(e, t = {}) {
  var { container: n = document.documentElement } = t,
    r = Dt(t, [`container`]);
  let i = Dn.get(n);
  i || ((i = new Set()), Dn.set(n, i));
  let a = Yt(n, e, yn(), r);
  if ((i.add(a), !Tn.has(n))) {
    let e = () => {
      let e = performance.now();
      for (let e of i) e.measure();
      for (let t of i) t.update(e);
      for (let e of i) e.notify();
    };
    Tn.set(n, e);
    let t = On(n);
    (v.addEventListener(`resize`, e, { passive: !0 }),
      n !== document.documentElement && En.set(n, Vt(n, e)),
      t.addEventListener(`scroll`, e, { passive: !0 }));
  }
  let o = Tn.get(n),
    s = requestAnimationFrame(o);
  return () => {
    var t;
    (typeof e != `function` && e.stop(), cancelAnimationFrame(s));
    let r = Dn.get(n);
    if (!r || (r.delete(a), r.size)) return;
    let i = Tn.get(n);
    (Tn.delete(n),
      i &&
        (On(n).removeEventListener(`scroll`, i),
        (t = En.get(n)) == null || t(),
        v.removeEventListener(`resize`, i)));
  };
}
function Qt(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function $t(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn = e(() => {
    for (let e in (i(),
    wt(),
    Et(),
    Ot(),
    At(),
    jt(),
    (en = [``, `X`, `Y`, `Z`]),
    (tn = [`translate`, `scale`, `rotate`, `skew`]),
    (nn = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (rn = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: nn,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: xt },
      skew: nn,
    }),
    (an = new Map()),
    (on = (e) => `--motion-${e}`),
    (sn = [`x`, `y`, `z`]),
    tn.forEach((e) => {
      en.forEach((t) => {
        (sn.push(e + t), an.set(on(e + t), rn[e]));
      });
    }),
    new Set(sn),
    (cn = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
    (ln = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          cn({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!cn({ opacity: [0, 1] }).finished,
    }),
    (un = {}),
    (dn = {}),
    ln))
      dn[e] = () => (un[e] === void 0 && (un[e] = ln[e]()), un[e]);
    ((fn = { any: 0, all: 1 }),
      (pn = new WeakMap()),
      (hn = new Set()),
      (_n = 50),
      (vn = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (yn = () => ({ time: 0, x: vn(), y: vn() })),
      (bn = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (xn = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (Sn = { start: 0, center: 0.5, end: 1 }),
      (Cn = [0, 0]),
      (wn = { x: 0, y: 0 }),
      (Tn = new WeakMap()),
      (En = new WeakMap()),
      (Dn = new WeakMap()),
      (On = (e) => (e === document.documentElement ? v : e)),
      (kn = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Nt(
            e,
            (r) => {
              if ((t(), $t(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), $t(e, `viewleave`, t));
                };
            },
            Dt(r, [`once`])
          );
        },
      }),
      (An = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), Qt(e, t, r));
      }),
      (jn = {
        inView: kn,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = An(e, `hoverstart`, t),
              i = An(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), Qt(e, `pressend`, t), v.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), Qt(e, `pressstart`, n), v.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), v.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(jn)]);
  }),
  Nn,
  Pn = e(() => {
    Nn = (e, t, n) => Math.min(Math.max(n, e), t);
  });
function Fn([e, t]) {
  return e + (100 - e) * (t / 100) * 0.5;
}
function In() {
  let [e, t] = c(!1);
  return (
    te(() => {
      t(v.matchMedia(`(pointer:fine)`).matches);
    }, []),
    e
  );
}
function Ln(e, t, { edgeOpacity: n, moreItems: r, buttonRef: i }, a) {
  r.current && e === t
    ? ((r.current = !1), C(n, 1, a), i.current.setAttribute(`disabled`, ``))
    : !r.current &&
      e !== t &&
      ((r.current = !0), C(n, 0, a), i.current.removeAttribute(`disabled`));
}
function Rn(e, t) {
  let n = r(e),
    i = y(n.current ? 0 : 1),
    a = x(i, [0, 1], [t || 0, 1]),
    o = x(i, (e) => 1 - e),
    s = r(null),
    c = x(o, (e) => (e > 0.2 ? `auto` : `none`)),
    l = x(c, (e) => (e === `auto` ? `pointer` : `default`));
  return {
    moreItems: n,
    fadeOpacity: a,
    edgeOpacity: i,
    buttonStyle: { ...Zn, opacity: o, pointerEvents: c, cursor: l },
    buttonRef: s,
  };
}
function zn({ element: e }) {
  e.setAttribute(`aria-hidden`, !1);
}
function Bn(e, t, n, r, i, o, s) {
  a(() => {
    if (!e.current) return;
    let a = Zt(
        (e) => {
          ((n.current = e[t]),
            e[t].current === i.current && (i.current = void 0),
            r(e[t].current),
            o());
        },
        { container: e.current, axis: t }
      ),
      c = Vt(e.current, () => {
        (s(), o());
      });
    return () => {
      (a(), c());
    };
  }, [o, s]);
}
function Vn({
  slots: e,
  gap: t,
  axis: n,
  align: i,
  sizingObject: o,
  fadeObject: d,
  arrowObject: p,
  snapObject: h,
  progressObject: ee,
  ariaLabel: g,
  borderRadius: te,
  effectsObject: v,
  ...ne
}) {
  let S = e.filter(Boolean),
    C = _.count(S),
    w = ie.current() === ie.canvas,
    T = Me(ne),
    E = n ? `x` : `y`,
    { fadeContent: D, fadeWidth: O, fadeInset: k, fadeTransition: A, fadeAlpha: ae } = d,
    { snap: j, snapEdge: M, fluid: N } = h,
    {
      widthType: P,
      widthInset: F,
      widthColumns: oe,
      heightType: I,
      heightInset: L,
      heightRows: se,
    } = o,
    {
      showScrollbar: ce,
      showProgressDots: R,
      dotSize: le,
      dotsInset: ue,
      dotsRadius: z,
      dotsPadding: B,
      dotsGap: V,
      dotsFill: de,
      dotsBackground: fe,
      dotsActiveOpacity: pe,
      dotsOpacity: H,
      dotsBlur: U,
    } = ee,
    {
      showMouseControls: W,
      arrowSize: G,
      arrowRadius: K,
      arrowFill: q,
      leftArrow: J,
      rightArrow: me,
      arrowPadding: he,
    } = p,
    Y = r(void 0),
    ge = r(void 0),
    _e = y(0),
    ve = (e) => {
      _e.set(ge.current === void 0 ? e : ge.current);
    },
    ye = In(),
    be = Rn(!1, ae),
    xe = Rn(!0, ae),
    Se = y(k * 0.5),
    Ce = x(Se, (e) => 100 - e),
    we = y(O),
    Te = x([Se, we], Fn),
    Ee = x(Te, (e) => 100 - e),
    De = y(n ? `right` : `bottom`),
    Oe = x(
      [De, be.fadeOpacity, Se, Te, xe.fadeOpacity, Ce, Ee],
      (e) =>
        `linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`
    ),
    ke = r(null),
    [X, Ae] = c(w ? 4 : 1),
    Z = { scrollSnapAlign: M, flexShrink: 0 },
    Q = {};
  (i === `stretch` &&
    (n ? ((Q.height = `100%`), (Z.height = `auto`)) : ((Q.width = `100%`), (Z.width = `auto`))),
    N || (Z.scrollSnapStop = `always`),
    P === `stretch`
      ? ((Z.width = `calc(100% - ${F || 0}px)`), (Q.width = `100%`))
      : P === `columns` &&
        ((Z.width = `calc(${100 / oe}% - ${t}px + ${t / oe}px)`), (Q.width = `100%`)),
    I === `stretch`
      ? ((Z.height = `calc(100% - ${L || 0}px)`), (Q.height = `100%`))
      : I === `rows` &&
        ((Z.height = `calc(${100 / se}% - ${t}px + ${t / se}px)`), (Q.height = `100%`)));
  let je = w ? `hidden` : `auto`,
    Ne = { ...Yn, padding: T },
    Pe = {
      ...Xn,
      gap: t,
      alignItems: i,
      flexDirection: n ? `row` : `column`,
      overflowX: n ? je : `hidden`,
      overflowY: n ? `hidden` : je,
      scrollSnapType: j ? `${E} mandatory` : void 0,
      WebkitOverflowScrolling: `touch`,
      WebkitMaskImage: D ? Oe : void 0,
      maskImage: D ? Oe : void 0,
      borderRadius: te,
    },
    Fe = { "aria-roledescription": `carousel` };
  g && (Fe[`aria-title`] = g);
  let Ie = {};
  if (
    (i === `stretch` && ((Ie[`aria-role`] = `group`), (Ie[`aria-roledescription`] = `slide`)), !w)
  ) {
    let e = r([]);
    Bn(
      ke,
      E,
      Y,
      ve,
      ge,
      f(() => {
        if (!Y.current) return;
        let { targetLength: t, containerLength: n, scrollLength: r } = Y.current,
          i = _e.get();
        if (!t && !n) return;
        if (t > n) {
          (Ln(i, 0, be, A), Ln(i, r, xe, A));
          for (let t = 0; t < e.current.length; t++) {
            let { element: r, start: a, end: o } = e.current[t];
            o < i || a > i + n
              ? r.setAttribute(`aria-hidden`, !0)
              : r.setAttribute(`aria-hidden`, !1);
          }
        } else (Ln(0, 0, be, A), Ln(1, 1, xe, A), e.current.forEach(zn));
        let a = Math.ceil(t / n);
        isNaN(a) || (a / C > 0.65 && (a = C), a !== X && Ae(a));
      }, [X]),
      f(() => {
        ke.current &&
          (e.current = Array.from(ke.current.children).map((e) =>
            n
              ? { element: e, start: e.offsetLeft, end: e.offsetLeft + e.offsetWidth }
              : { element: e, start: e.offsetTop, end: e.offsetTop + e.offsetHeight }
          ));
      }, [])
    );
  }
  w &&
    (a(() => {
      we.set(O);
    }, [O]),
    a(() => {
      Se.set(k * 0.5);
    }, [k]),
    a(() => {
      De.set(n ? `right` : `bottom`);
    }, [n]));
  let Le = re(),
    Re = (e) => {
      ge.current = e;
      let t = n ? { left: e } : { top: e };
      ke.current.scrollTo({ ...t, behavior: Le ? `auto` : `smooth` });
    },
    ze = (e, t = 0) => {
      if (!Y.current) return;
      let { scrollLength: n } = Y.current,
        r = n / (X - 1);
      Re(e * r + t * r);
    },
    Be = (e) => () => {
      if (!Y.current) return;
      let { containerLength: t, scrollLength: n } = Y.current,
        r = _e.get(),
        i = n / X,
        a = Nn(0, X - 1, Math.floor(r / i)),
        o = 0;
      (j && (M === `start` || M === `end`) && e >= 1 && (o = 0.4), ze(a + e, o));
    };
  if (C === 0) return l(Un, {});
  let Ve = [],
    He = {};
  if (X > 1 && R && !ce) {
    for (let e = 0; e < X; e++) {
      let t = (w && !e) || !1;
      Ve.push(
        l(Hn, {
          dotStyle: { ...er, width: le, height: le, backgroundColor: de },
          buttonStyle: Zn,
          isSelected: t,
          selectedOpacity: pe,
          opacity: H,
          onClick: () => u(() => ze(e)),
          currentScroll: _e,
          scrollInfo: Y,
          total: X,
          index: e,
          gap: V,
          padding: B,
          axis: n,
        })
      );
    }
    U && (He.backdropFilter = He.WebkitBackdropFilter = `blur(${U}px)`);
  }
  return m(`section`, {
    style: Ne,
    ...Fe,
    children: [
      l(b.ul, {
        ref: ke,
        style: Pe,
        className: `framer--carousel`,
        "data-show-scrollbar": ce,
        "aria-atomic": `false`,
        "aria-live": `polite`,
        onWheel: () => (ge.current = void 0),
        children: _.map(S, (e, t) =>
          l(`li`, {
            style: Z,
            ...Ie,
            "aria-label": `${t + 1} of ${C}`,
            children: s(e, { ...e.props, style: { ...e.props?.style, ...Q } }),
          })
        ),
      }),
      m(`fieldset`, {
        style: { ...Qn, padding: he, display: `flex`, flexDirection: n ? `row` : `column` },
        "aria-label": `Carousel pagination controls`,
        className: `framer--carousel-controls`,
        "data-show-mouse-controls": W,
        children: [
          ye &&
            l(b.button, {
              ref: be.buttonRef,
              type: `button`,
              style: {
                ...be.buttonStyle,
                backgroundColor: q,
                width: G,
                height: G,
                borderRadius: K,
                rotate: n ? 0 : 90,
                display: W ? `block` : `none`,
              },
              onClick: Be(-1),
              "aria-label": `Previous`,
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: l(`img`, {
                decoding: `async`,
                alt: ``,
                width: G,
                height: G,
                src: J || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
              }),
            }),
          ye &&
            l(b.button, {
              ref: xe.buttonRef,
              type: `button`,
              style: {
                ...xe.buttonStyle,
                backgroundColor: q,
                width: G,
                height: G,
                borderRadius: K,
                rotate: n ? 0 : 90,
                display: W ? `block` : `none`,
              },
              onClick: Be(1),
              "aria-label": `Next`,
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: l(`img`, {
                decoding: `async`,
                alt: ``,
                width: G,
                height: G,
                src: me || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
              }),
            }),
          Ve.length > 1
            ? l(`div`, {
                style: {
                  ...$n,
                  left: n ? `50%` : ue,
                  top: n ? `unset` : `50%`,
                  transform: n ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: n ? `row` : `column`,
                  bottom: n ? ue : `unset`,
                  borderRadius: z,
                  backgroundColor: fe,
                  ...He,
                },
                children: Ve,
              })
            : null,
        ],
      }),
      l(Wn, {}),
    ],
  });
}
function Hn({
  currentScroll: e,
  scrollInfo: t,
  isSelected: n,
  selectedOpacity: r,
  opacity: i,
  total: a,
  index: o,
  dotStyle: s,
  buttonStyle: c,
  gap: u,
  padding: d,
  axis: f,
  ...p
}) {
  let m = x(e, (e) => {
      if (!t.current?.scrollLength) return o === 0 ? r : i;
      let n = t.current?.scrollLength / a,
        s = n * o,
        c = s + n;
      return e >= s && (o < a - 1 ? e < c : o === a - 1) ? r : i;
    }),
    h = u / 2,
    ee = !f && o > 0 ? h : d,
    g = !f && o !== a - 1 ? h : d,
    _ = f && o !== a - 1 ? h : d,
    te = f && o > 0 ? h : d;
  return l(`button`, {
    "aria-label": `Scroll to page ${o + 1}`,
    type: `button`,
    ...p,
    style: { ...c, padding: `${ee}px ${_}px ${g}px ${te}px` },
    children: l(b.div, { style: { ...s, opacity: m } }),
  });
}
function Un() {
  return m(`section`, {
    style: Gn,
    children: [
      l(`div`, { style: Kn, children: `✨` }),
      l(`p`, { style: qn, children: `Connect to Content` }),
      l(`p`, { style: Jn, children: `Add layers or components to swipe between.` }),
    ],
  });
}
function Wn() {
  return l(`div`, {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
var Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = e(() => {
    (i(),
      h(),
      n(),
      I(),
      Mn(),
      Pn(),
      E(),
      Pe(),
      (Vn.defaultProps = {
        gap: 10,
        padding: 10,
        progressObject: { showScrollbar: !1, showProgressDots: !1 },
        sizingObject: {
          widthType: `auto`,
          widthOffset: 0,
          widthColumns: 2,
          heightType: `auto`,
          heightOffset: 0,
          heightRows: 2,
        },
        borderRadius: 0,
      }),
      V(Vn, {
        slots: { type: W.Array, title: `Children`, control: { type: W.ComponentInstance } },
        axis: {
          type: W.Enum,
          title: `Direction`,
          options: [!0, !1],
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          displaySegmentedControl: !0,
        },
        align: {
          type: W.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            axis: {
              true: [`align-top`, `align-middle`, `align-bottom`],
              false: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: W.Number, title: `Gap` },
        ...Ne,
        sizingObject: {
          type: W.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: W.Enum,
              title: `Width`,
              options: [`auto`, `stretch`, `columns`],
              optionTitles: [`Auto`, `Stretch`, `Columns`],
              defaultValue: `auto`,
            },
            widthInset: {
              type: W.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.widthType !== `stretch`,
            },
            widthColumns: {
              type: W.Number,
              title: `Columns`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.widthType !== `columns`,
            },
            heightType: {
              type: W.Enum,
              title: `Height`,
              options: [`auto`, `stretch`, `rows`],
              optionTitles: [`Auto`, `Stretch`, `Rows`],
              defaultValue: `auto`,
            },
            heightInset: {
              type: W.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.heightType !== `stretch`,
            },
            heightRows: {
              type: W.Number,
              title: `Rows`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.heightType !== `rows`,
            },
          },
        },
        snapObject: {
          type: W.Object,
          title: `Snapping`,
          controls: {
            snap: { type: W.Boolean, title: `Enable` },
            snapEdge: {
              type: W.Enum,
              title: `Edge`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              defaultValue: `center`,
              hidden: (e) => !e.snap,
            },
            fluid: { type: W.Boolean, title: `Fluid`, defaultValue: !1, hidden: (e) => !e.snap },
          },
        },
        fadeObject: {
          type: W.Object,
          title: `Fading`,
          controls: {
            fadeContent: { type: W.Boolean, title: `Enable`, defaultValue: !1 },
            fadeWidth: {
              type: W.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeInset: {
              type: W.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeAlpha: {
              type: W.Number,
              title: `Opacity`,
              hidden: (e) => !e.fadeContent,
              min: 0,
              max: 1,
              step: 0.05,
              defaultValue: 0,
            },
            fadeTransition: {
              type: W.Transition,
              title: `Transition`,
              hidden: (e) => !e.fadeContent,
            },
          },
        },
        progressObject: {
          type: W.Object,
          title: `Progress`,
          controls: {
            showScrollbar: { type: W.Boolean, title: `Scroll Bar`, defaultValue: !1 },
            showProgressDots: {
              type: W.Boolean,
              title: `Dots`,
              defaultValue: !1,
              hidden: (e) => e.showScrollbar,
            },
            dotSize: {
              type: W.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: W.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: W.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: W.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: W.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: W.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: W.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: W.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: W.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: W.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 4,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
        arrowObject: {
          type: W.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: { type: W.Boolean, title: `Show`, defaultValue: !0 },
            arrowFill: {
              type: W.Color,
              title: `Fill`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showMouseControls,
            },
            leftArrow: { type: W.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: W.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: W.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: W.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPadding: {
              type: W.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls,
            },
          },
        },
        ariaLabel: { type: W.String, title: `Aria Label`, placeholder: `Movies...` },
        borderRadius: {
          type: W.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
      }),
      (Gn = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Kn = { fontSize: 32, marginBottom: 10 }),
      (qn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Jn = { margin: 0, opacity: 0.7, maxWidth: 130, lineHeight: 1.5, textAlign: `center` }),
      (Yn = {
        display: `flex`,
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        position: `relative`,
      }),
      (Xn = {
        padding: 0,
        margin: 0,
        listStyle: `none`,
        position: `relative`,
        display: `flex`,
        flex: `1 1 100%`,
        width: `100%`,
        height: `100%`,
      }),
      (Zn = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Qn = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: `none`,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      ($n = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (er = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  }),
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    (h(),
      I(),
      E(),
      n(),
      xe(),
      Fe(),
      ze(),
      (nr = D(Ce)),
      (rr = `framer-7tod1`),
      (ir = { d8MtrGJUD: `framer-v-x2o0n8` }),
      (ar = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (or = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (sr = ({ value: e, children: n }) => {
        let r = p(S),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(S.Provider, { value: a, children: n });
      }),
      (cr = b.create(o)),
      (lr = ({
        clientName: e,
        company: t,
        height: n,
        id: r,
        photo: i,
        review: a,
        score: o,
        width: s,
        ...c
      }) => ({
        ...c,
        hPkj0mJjf: t ?? c.hPkj0mJjf ?? `Company`,
        laa3Gbj0g: o ?? c.laa3Gbj0g ?? `5/5`,
        NdQTeZS83: i ?? c.NdQTeZS83,
        rnfws75FX: a ?? c.rnfws75FX ?? `Review`,
        YfbUpWj6a: e ?? c.YfbUpWj6a ?? `Client Name`,
      })),
      (ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (dr = P(
        d(function (e, t) {
          let { activeLocale: n, setLocale: i } = B(),
            {
              style: a,
              className: s,
              layoutId: c,
              variant: u,
              rnfws75FX: d,
              NdQTeZS83: f,
              YfbUpWj6a: p,
              hPkj0mJjf: h,
              laa3Gbj0g: ee,
              ..._
            } = lr(e),
            {
              baseVariant: te,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: ne,
              gestureVariant: re,
              isLoading: x,
              setGestureState: S,
              setVariant: C,
              variants: w,
            } = me({ defaultVariant: `d8MtrGJUD`, variant: u, variantClassNames: ir }),
            E = ur(e, w),
            D = M(rr, Re, He),
            ie = r(null),
            O = g(),
            A = G();
          return l(T, {
            id: c ?? O,
            children: l(cr, {
              animate: w,
              initial: !1,
              children: l(sr, {
                value: ar,
                children: m(b.div, {
                  ..._,
                  ...ne,
                  className: M(D, `framer-x2o0n8`, s, v),
                  "data-framer-name": `Default`,
                  layoutDependency: E,
                  layoutId: `d8MtrGJUD`,
                  ref: t ?? ie,
                  style: {
                    backgroundColor: `var(--token-90ea0318-5e3c-4695-8567-61be672731e1, rgb(18, 18, 18))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...a,
                  },
                  children: [
                    l(b.div, {
                      className: `framer-1firmbn`,
                      layoutDependency: E,
                      layoutId: `qA7CYBvcm`,
                      children: l(F, {
                        __fromCanvasComponent: !0,
                        children: l(o, {
                          children: l(b.p, {
                            className: `framer-styles-preset-dr60wz`,
                            "data-styles-preset": `PKAGe55xO`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                            },
                            children: `Review`,
                          }),
                        }),
                        className: `framer-vlptcy`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `Dg040znKD`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: d,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    m(b.div, {
                      className: `framer-12kr4q`,
                      "data-framer-name": `Info`,
                      layoutDependency: E,
                      layoutId: `DSy3QQ9F4`,
                      children: [
                        l(U, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: oe(
                              (A?.y || 0) +
                                24 +
                                (0 + Math.max(0, ((A?.height || 267) - 48 - 158) / 1) * 1 + 24) +
                                41
                            ),
                            sizes: `52px`,
                            ...or(f),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-7bc989`,
                          "data-framer-name": `Photo`,
                          layoutDependency: E,
                          layoutId: `xUU1NXiqb`,
                          style: {
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                          },
                        }),
                        m(b.div, {
                          className: `framer-sz4dg6`,
                          layoutDependency: E,
                          layoutId: `EpMbvjmpF`,
                          children: [
                            m(b.div, {
                              className: `framer-o67fi3`,
                              "data-framer-name": `Name`,
                              layoutDependency: E,
                              layoutId: `rj0d3vn3p`,
                              children: [
                                l(F, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(b.p, {
                                      className: `framer-styles-preset-dr60wz`,
                                      "data-styles-preset": `PKAGe55xO`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255)))`,
                                      },
                                      children: `Client Name`,
                                    }),
                                  }),
                                  className: `framer-t32a82`,
                                  fonts: [`Inter`],
                                  layoutDependency: E,
                                  layoutId: `YWeix9Nx6`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: p,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(b.div, {
                                  className: `framer-18ne9sz`,
                                  "data-framer-name": `Line`,
                                  layoutDependency: E,
                                  layoutId: `TOZlz8Uf1`,
                                  style: {
                                    backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                  },
                                }),
                                m(b.div, {
                                  className: `framer-1by8qzc`,
                                  "data-framer-name": `Stars`,
                                  layoutDependency: E,
                                  layoutId: `dkSZC6D95`,
                                  children: [
                                    l(F, {
                                      __fromCanvasComponent: !0,
                                      children: l(o, {
                                        children: l(b.p, {
                                          className: `framer-styles-preset-d9dxvl`,
                                          "data-styles-preset": `YqEpde0dB`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                          },
                                          children: `5/5`,
                                        }),
                                      }),
                                      className: `framer-16zm002`,
                                      fonts: [`Inter`],
                                      layoutDependency: E,
                                      layoutId: `fawyHQtQO`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: ee,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(L, {
                                      children: l(k, {
                                        className: `framer-e9t0df-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        layoutDependency: E,
                                        layoutId: `AIDSMkVs3-container`,
                                        nodeId: `AIDSMkVs3`,
                                        rendersWithMotion: !0,
                                        scopeId: `deDgFsWHj`,
                                        style: { opacity: 0.8 },
                                        children: l(Ce, {
                                          color: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                          height: `100%`,
                                          iconSearch: `House`,
                                          iconSelection: `Star`,
                                          id: `AIDSMkVs3`,
                                          layoutId: `AIDSMkVs3`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: { height: `100%`, width: `100%` },
                                          weight: `fill`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            l(F, {
                              __fromCanvasComponent: !0,
                              children: l(o, {
                                children: l(b.p, {
                                  className: `framer-styles-preset-d9dxvl`,
                                  "data-styles-preset": `YqEpde0dB`,
                                  children: `Company`,
                                }),
                              }),
                              className: `framer-kr2wxt`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `R8psbrQbO`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7tod1.framer-1knkerv, .framer-7tod1 .framer-1knkerv { display: block; }`,
          `.framer-7tod1.framer-x2o0n8 { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 267px; justify-content: flex-start; overflow: hidden; padding: 24px; position: relative; width: 421px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-7tod1 .framer-1firmbn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-7tod1 .framer-vlptcy { flex: 1 0 0px; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7tod1 .framer-12kr4q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-7tod1 .framer-7bc989 { flex: none; height: 52px; overflow: visible; position: relative; width: 52px; }`,
          `.framer-7tod1 .framer-sz4dg6 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-7tod1 .framer-o67fi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-7tod1 .framer-t32a82, .framer-7tod1 .framer-16zm002 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-7tod1 .framer-18ne9sz { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 1px; }`,
          `.framer-7tod1 .framer-1by8qzc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-7tod1 .framer-e9t0df-container { flex: none; height: 14px; position: relative; width: 14px; }`,
          `.framer-7tod1 .framer-kr2wxt { flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7tod1.framer-x2o0n8, .framer-7tod1 .framer-1firmbn, .framer-7tod1 .framer-12kr4q, .framer-7tod1 .framer-sz4dg6, .framer-7tod1 .framer-o67fi3, .framer-7tod1 .framer-1by8qzc { gap: 0px; } .framer-7tod1.framer-x2o0n8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-7tod1.framer-x2o0n8 > :first-child, .framer-7tod1 .framer-sz4dg6 > :first-child { margin-top: 0px; } .framer-7tod1.framer-x2o0n8 > :last-child, .framer-7tod1 .framer-sz4dg6 > :last-child { margin-bottom: 0px; } .framer-7tod1 .framer-1firmbn > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-7tod1 .framer-1firmbn > :first-child, .framer-7tod1 .framer-12kr4q > :first-child, .framer-7tod1 .framer-o67fi3 > :first-child, .framer-7tod1 .framer-1by8qzc > :first-child { margin-left: 0px; } .framer-7tod1 .framer-1firmbn > :last-child, .framer-7tod1 .framer-12kr4q > :last-child, .framer-7tod1 .framer-o67fi3 > :last-child, .framer-7tod1 .framer-1by8qzc > :last-child { margin-right: 0px; } .framer-7tod1 .framer-12kr4q > *, .framer-7tod1 .framer-o67fi3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-7tod1 .framer-sz4dg6 > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-7tod1 .framer-1by8qzc > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } }`,
          ...Ie,
          ...Be,
        ],
        `framer-7tod1`
      )),
      (fr = dr),
      (dr.displayName = `Card`),
      (dr.defaultProps = { height: 267, width: 421 }),
      V(dr, {
        rnfws75FX: { defaultValue: `Review`, displayTextArea: !0, title: `Review`, type: W.String },
        NdQTeZS83: { title: `Photo`, type: W.ResponsiveImage },
        YfbUpWj6a: {
          defaultValue: `Client Name`,
          displayTextArea: !1,
          title: `Client Name`,
          type: W.String,
        },
        hPkj0mJjf: {
          defaultValue: `Company`,
          displayTextArea: !1,
          title: `Company`,
          type: W.String,
        },
        laa3Gbj0g: { defaultValue: `5/5`, displayTextArea: !1, title: `Score`, type: W.String },
      }),
      N(
        dr,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...nr,
          ...j(Le),
          ...j(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function mr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr = e(() => {
    (h(),
      I(),
      E(),
      n(),
      tr(),
      pr(),
      (hr = D(fr)),
      (gr = D(Vn)),
      (_r = [`wByIw3CqH`, `kCF2z10F1`, `AF4mRuezI`]),
      (vr = `framer-d7fgt`),
      (yr = {
        AF4mRuezI: `framer-v-mf01xc`,
        kCF2z10F1: `framer-v-nxfmvs`,
        wByIw3CqH: `framer-v-129pq1j`,
      }),
      (br = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (xr = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Sr = ({ value: e, children: n }) => {
        let r = p(S),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(S.Provider, { value: a, children: n });
      }),
      (Cr = b.create(o)),
      (wr = { Desktop: `wByIw3CqH`, Phone: `AF4mRuezI`, Tablet: `kCF2z10F1` }),
      (Tr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: wr[r.variant] ?? r.variant ?? `wByIw3CqH`,
      })),
      (Er = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dr = P(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: o, setLocale: s } = B();
          G();
          let { style: c, className: u, layoutId: d, variant: f, ...p } = Tr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: te,
              isLoading: v,
              setGestureState: y,
              setVariant: ne,
              variants: re,
            } = me({
              cycleOrder: _r,
              defaultVariant: `wByIw3CqH`,
              ref: i,
              variant: f,
              variantClassNames: yr,
            }),
            x = Er(e, re),
            S = M(vr);
          return l(T, {
            id: d ?? a,
            children: l(Cr, {
              animate: re,
              initial: !1,
              children: l(Sr, {
                value: br,
                children: l(b.div, {
                  ...p,
                  ..._,
                  className: M(S, `framer-129pq1j`, u, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: x,
                  layoutId: `wByIw3CqH`,
                  ref: i,
                  style: { ...c },
                  ...mr(
                    {
                      AF4mRuezI: { "data-framer-name": `Phone` },
                      kCF2z10F1: { "data-framer-name": `Tablet` },
                    },
                    m,
                    te
                  ),
                  children: l(L, {
                    children: l(k, {
                      className: `framer-1acaf4o-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: x,
                      layoutId: `Zr9QFWiRI-container`,
                      nodeId: `Zr9QFWiRI`,
                      rendersWithMotion: !0,
                      scopeId: `GAplRGEMg`,
                      children: l(Vn, {
                        align: `center`,
                        ariaLabel: ``,
                        arrowObject: {
                          arrowFill: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                          arrowPadding: 16,
                          arrowRadius: 40,
                          arrowSize: 40,
                          showMouseControls: !0,
                        },
                        axis: !0,
                        borderRadius: 0,
                        fadeObject: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeTransition: {
                            damping: 60,
                            delay: 0,
                            mass: 1,
                            stiffness: 500,
                            type: `spring`,
                          },
                          fadeWidth: 20,
                        },
                        gap: 24,
                        height: `100%`,
                        id: `Zr9QFWiRI`,
                        layoutId: `Zr9QFWiRI`,
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        progressObject: {
                          dotsActiveOpacity: 1,
                          dotsBackground: `rgba(0, 0, 0, 0.2)`,
                          dotsBlur: 4,
                          dotsFill: `rgb(255, 255, 255)`,
                          dotsGap: 10,
                          dotsInset: 10,
                          dotSize: 10,
                          dotsOpacity: 0.5,
                          dotsPadding: 10,
                          dotsRadius: 50,
                          showProgressDots: !1,
                          showScrollbar: !1,
                        },
                        sizingObject: {
                          heightInset: 0,
                          heightRows: 2,
                          heightType: `stretch`,
                          widthColumns: 3,
                          widthInset: 0,
                          widthType: `columns`,
                        },
                        slots: [
                          l(L, {
                            height: 350,
                            width: `512px`,
                            children: l(k, {
                              className: `framer-15rwrao-container`,
                              "data-framer-name": `1`,
                              inComponentSlot: !0,
                              layoutDependency: x,
                              layoutId: `FUq_Z5mH7-container`,
                              name: `1`,
                              nodeId: `FUq_Z5mH7`,
                              rendersWithMotion: !0,
                              scopeId: `GAplRGEMg`,
                              children: l(fr, {
                                height: `100%`,
                                hPkj0mJjf: ` User Experience Manager at NOS Technology`,
                                id: `FUq_Z5mH7`,
                                laa3Gbj0g: `4.9/5`,
                                layoutId: `FUq_Z5mH7`,
                                name: `1`,
                                NdQTeZS83: xr(
                                  {
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    src: `../../assets/images/XNTcz7siWfp3QSdctdc2XeePl8.png`,
                                  },
                                  ``
                                ),
                                rnfws75FX: `"I've had the pleasure of leading Ana Parada, and let me tell you, she's a rockstar UX/UI Designer. From the day I hired her, I knew we'd struck gold. Ana's not just about making things look pretty - she digs deep to solve real problems for users. What I love about Ana is how she puts her heart into every project. She's always thinking about how to make things easier and more fun for the people using our products. Ana's designs are clean, easy to use, and look great too. But it's not just her design skills that impress me. Ana's a team player all the way. She's super organized, works well on her own, and always aims for the best quality. When the team needs help or ideas, Ana's right there, ready to pitch in. If you're looking to level up your product or UX team, Ana's the person you want. She'd be a fantastic addition to any crew lucky enough to have her!"`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                                YfbUpWj6a: `Hugo Neves da Silva`,
                              }),
                            }),
                          }),
                          l(L, {
                            height: 350,
                            width: `512px`,
                            children: l(k, {
                              className: `framer-nixbi7-container`,
                              "data-framer-name": `2`,
                              inComponentSlot: !0,
                              layoutDependency: x,
                              layoutId: `CrePpRsG2-container`,
                              name: `2`,
                              nodeId: `CrePpRsG2`,
                              rendersWithMotion: !0,
                              scopeId: `GAplRGEMg`,
                              children: l(fr, {
                                height: `100%`,
                                hPkj0mJjf: `Design and Product Leader (2022)`,
                                id: `CrePpRsG2`,
                                laa3Gbj0g: `4.9/5`,
                                layoutId: `CrePpRsG2`,
                                name: `2`,
                                NdQTeZS83: xr(
                                  {
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    src: `../../assets/images/bhj9D5tnKASAc7ZZL0As3f07fAc.png`,
                                  },
                                  ``
                                ),
                                rnfws75FX: `"I thoroughly enjoyed having Ana on my design team at Trouva. She a multi-talented product designer who always dug deep into user motivations and then created thoughtful and beautiful UI that solved their problems. She is also humble, keen to constantly improve and always had time to help other designers. I'd consider myself fortunate to work with her again!"`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                                YfbUpWj6a: `Mike Nagle`,
                              }),
                            }),
                          }),
                          l(L, {
                            height: 350,
                            width: `512px`,
                            children: l(k, {
                              className: `framer-h82is3-container`,
                              "data-framer-name": `3`,
                              inComponentSlot: !0,
                              layoutDependency: x,
                              layoutId: `kbitDdSBQ-container`,
                              name: `3`,
                              nodeId: `kbitDdSBQ`,
                              rendersWithMotion: !0,
                              scopeId: `GAplRGEMg`,
                              children: l(fr, {
                                height: `100%`,
                                hPkj0mJjf: `Digital Product Designer`,
                                id: `kbitDdSBQ`,
                                laa3Gbj0g: `4.9/5`,
                                layoutId: `kbitDdSBQ`,
                                name: `3`,
                                NdQTeZS83: xr(
                                  {
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    src: `../../assets/images/9CY4XYCp5mf6IgIApTwvpymjbk.png`,
                                  },
                                  ``
                                ),
                                rnfws75FX: `"Ana is an extremely gifted and well-rounded designer, with a very solid knowledge of front-end technologies and practices. She helped us propel big projects to new heights and definitely left her mark on the team, at both professional and personal levels. I wouldn't hesitate to work with Ana again."`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                                YfbUpWj6a: `Tiago Duarte`,
                              }),
                            }),
                          }),
                          l(L, {
                            height: 350,
                            width: `512px`,
                            children: l(k, {
                              className: `framer-1nxtcmd-container`,
                              "data-framer-name": `4`,
                              inComponentSlot: !0,
                              layoutDependency: x,
                              layoutId: `O1iq1mJwV-container`,
                              name: `4`,
                              nodeId: `O1iq1mJwV`,
                              rendersWithMotion: !0,
                              scopeId: `GAplRGEMg`,
                              children: l(fr, {
                                height: `100%`,
                                hPkj0mJjf: `Associate Professor with Habilitation at FEUP / Senior researcher at INESC TEC`,
                                id: `O1iq1mJwV`,
                                laa3Gbj0g: `4.9/5`,
                                layoutId: `O1iq1mJwV`,
                                name: `4`,
                                NdQTeZS83: xr(
                                  {
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    src: `../../assets/images/93Cd03JoWnuaJTakyTOZdNqZ3uI.png`,
                                  },
                                  ``
                                ),
                                rnfws75FX: `"Ana is very committed to the tasks appointed to her and assures that the proposed goals are reached. During the course that I have lectured – Games – she revealed good team work and creativity in developing the assignments and the final project.
"`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                                YfbUpWj6a: `António Fernando Coelho`,
                              }),
                            }),
                          }),
                          l(L, {
                            height: 350,
                            width: `512px`,
                            children: l(k, {
                              className: `framer-7aq6hb-container`,
                              "data-framer-name": `5`,
                              inComponentSlot: !0,
                              layoutDependency: x,
                              layoutId: `uX6LRDP69-container`,
                              name: `5`,
                              nodeId: `uX6LRDP69`,
                              rendersWithMotion: !0,
                              scopeId: `GAplRGEMg`,
                              children: l(fr, {
                                height: `100%`,
                                hPkj0mJjf: `Digital Marketing Strategist`,
                                id: `uX6LRDP69`,
                                laa3Gbj0g: `4.9/5`,
                                layoutId: `uX6LRDP69`,
                                name: `5`,
                                NdQTeZS83: xr(
                                  {
                                    pixelHeight: 150,
                                    pixelWidth: 150,
                                    src: `../../assets/images/47BcwTmv33ZKSyqUtqMKP2Lh8vo.png`,
                                  },
                                  ``
                                ),
                                rnfws75FX: `"I had the opportunity to work with Ana at 360 imprimir. I was on the CRM and CRO team in digital marketing. We had to work together several times, especially in customizing the website to receive traffic from marketing channels during campaigns. Technically very competent, available, proactive, always looking for new solutions. She adds value to any team. I would love to work with her again.
"`,
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                                YfbUpWj6a: `Cláudia Valente`,
                              }),
                            }),
                          }),
                        ],
                        snapObject: { fluid: !0, snap: !0, snapEdge: `center` },
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                        ...mr(
                          {
                            AF4mRuezI: {
                              arrowObject: {
                                arrowFill: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                arrowPadding: 8,
                                arrowRadius: 40,
                                arrowSize: 32,
                                showMouseControls: !0,
                              },
                              fadeObject: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeTransition: {
                                  damping: 60,
                                  delay: 0,
                                  mass: 1,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                fadeWidth: 0,
                              },
                              sizingObject: {
                                heightInset: 0,
                                heightRows: 2,
                                heightType: `stretch`,
                                widthColumns: 1,
                                widthInset: 0,
                                widthType: `columns`,
                              },
                            },
                            kCF2z10F1: {
                              sizingObject: {
                                heightInset: 0,
                                heightRows: 2,
                                heightType: `stretch`,
                                widthColumns: 2,
                                widthInset: 0,
                                widthType: `columns`,
                              },
                            },
                          },
                          m,
                          te
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-d7fgt.framer-vlrlof, .framer-d7fgt .framer-vlrlof { display: block; }`,
          `.framer-d7fgt.framer-129pq1j { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-d7fgt .framer-1acaf4o-container { flex: 1 0 0px; height: 795px; position: relative; width: 1px; }`,
          `.framer-d7fgt .framer-15rwrao-container, .framer-d7fgt .framer-nixbi7-container, .framer-d7fgt .framer-h82is3-container, .framer-d7fgt .framer-1nxtcmd-container, .framer-d7fgt .framer-7aq6hb-container { height: 350px; position: relative; width: 512px; }`,
          `.framer-d7fgt.framer-v-nxfmvs.framer-129pq1j { width: 810px; }`,
          `.framer-d7fgt.framer-v-mf01xc.framer-129pq1j { width: 420px; }`,
        ],
        `framer-d7fgt`
      )),
      (Or = Dr),
      (Dr.displayName = `Carousel`),
      (Dr.defaultProps = { height: 795, width: 1200 }),
      V(Dr, {
        variant: {
          options: [`wByIw3CqH`, `kCF2z10F1`, `AF4mRuezI`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      N(Dr, [{ explicitInter: !0, fonts: [] }, ...hr, ...gr], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Ar(e) {
  let {
      slots: n = [],
      gap: i,
      padding: o,
      paddingPerSide: u,
      paddingTop: d,
      paddingRight: p,
      paddingBottom: h,
      paddingLeft: ee,
      speed: g,
      hoverFactor: v,
      direction: S,
      alignment: C,
      sizingOptions: E,
      fadeOptions: D,
      style: O,
    } = e,
    { fadeContent: k, overflow: A, fadeWidth: ae, fadeInset: j, fadeAlpha: M } = D,
    { widthType: N, heightType: P } = E,
    F = u ? `${d}px ${p}px ${h}px ${ee}px` : `${o}px`,
    oe = ie.current(),
    I = oe === ie.canvas || oe === ie.export,
    L = n.filter(Boolean),
    se = _.count(L),
    ce = se > 0;
  S === !0 && (S = `left`);
  let R = S === `left` || S === `right`,
    le = y(0),
    ue = Mr[S];
  x(le, ue);
  let z = r(null),
    B = t(() => [{ current: null }, { current: null }], []),
    [V, de] = c({ parent: null, children: null }),
    fe = null,
    pe = [],
    H = 0,
    U = 0;
  (I && ((H = se ? Math.floor(10 / se) : 0), (U = 1)),
    !I &&
      ce &&
      V.parent &&
      ((H = Math.round((V.parent / V.children) * 2) + 1), (H = Math.min(H, jr)), (U = 1)));
  let W = f(() => {
      if (ce && z.current) {
        let e = R ? z.current.offsetWidth : z.current.offsetHeight,
          t = B[0].current ? (R ? B[0].current.offsetLeft : B[0].current.offsetTop) : 0;
        de({
          parent: e,
          children:
            (B[1].current
              ? R
                ? B[1].current.offsetLeft + B[1].current.offsetWidth
                : B[1].current.offsetTop + B[1].current.offsetHeight
              : 0) -
            t +
            i,
        });
      }
    }, []),
    G = I ? { contentVisibility: `auto` } : {};
  if (ce) {
    if (!I) {
      let e = r(!0);
      te(
        () => (
          w.read(W, !1, !0),
          Vt(z.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && w.read(W, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    fe = _.map(L, (e, t) => {
      let n;
      (t === 0 && (n = B[0]), t === L.length - 1 && (n = B[1]));
      let r = { width: N ? e.props?.width : `100%`, height: P ? e.props?.height : `100%` };
      return l(T, {
        inherit: `id`,
        children: l(`li`, {
          ref: n,
          style: r,
          children: s(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...G },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let K = I ? !0 : ne(z);
  if (!I)
    for (let e = 0; e < H; e++)
      pe = pe.concat(
        _.map(L, (t, n) =>
          l(
            T,
            {
              inherit: `id`,
              children: l(
                `li`,
                {
                  style: {
                    width: N ? t.props?.width : `100%`,
                    height: P ? t.props?.height : `100%`,
                    willChange: K ? `transform` : void 0,
                  },
                  "aria-hidden": !0,
                  children: s(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: N ? t.props?.width : `100%`,
                        height: P ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...G,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          )
        )
      );
  let q = V.children + V.children * Math.round(V.parent / V.children);
  (r(null), r(null), r(0));
  let J = r(!1),
    me = re(),
    he = r(null),
    Y = r(null);
  if (!I) {
    a(() => {
      if (!(me || !q || !g))
        return (
          (Y.current = he.current.animate(
            { transform: [ue(0), ue(q)] },
            { duration: (Math.abs(q) / g) * 1e3, iterations: 1 / 0, easing: `linear` }
          )),
          () => Y.current.cancel()
        );
    }, [v, q, g]);
    let e = f(() => {
      if (!Y.current) return;
      let e = document.hidden;
      K && !e && Y.current.playState === `paused`
        ? Y.current.play()
        : (!K || e) && Y.current.playState === `running` && Y.current.pause();
    }, [K]);
    (a(() => {
      e();
    }, [K, v, q, g]),
      a(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let ge = R ? `to right` : `to bottom`,
    _e = ae / 2,
    ve = 100 - ae / 2,
    ye = `linear-gradient(${ge}, rgba(0, 0, 0, ${M}) ${Rr(j, 0, _e)}%, rgba(0, 0, 0, 1) ${_e}%, rgba(0, 0, 0, 1) ${ve}%, rgba(0, 0, 0, ${M}) ${100 - j}%)`;
  return ce
    ? l(`section`, {
        style: {
          ...Nr,
          opacity: U,
          WebkitMaskImage: k ? ye : void 0,
          maskImage: k ? ye : void 0,
          overflow: A ? `visible` : `hidden`,
          padding: F,
        },
        ref: z,
        children: m(b.ul, {
          ref: he,
          style: {
            ...Nr,
            gap: i,
            top: S === `bottom` && zr(q) ? -q : void 0,
            left: S === `right` && zr(q) ? -q : void 0,
            placeItems: C,
            position: `relative`,
            flexDirection: R ? `row` : `column`,
            ...O,
            willChange: I || !K ? `auto` : `transform`,
            transform: ue(0),
          },
          onMouseEnter: () => {
            ((J.current = !0), Y.current && (Y.current.playbackRate = v));
          },
          onMouseLeave: () => {
            ((J.current = !1), Y.current && (Y.current.playbackRate = 1));
          },
          children: [fe, pe],
        }),
      })
    : m(`section`, {
        style: Pr,
        children: [
          l(`div`, { style: Fr, children: `✨` }),
          l(`p`, { style: Ir, children: `Connect to Content` }),
          l(`p`, {
            style: Lr,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br = e(() => {
    (h(),
      n(),
      I(),
      E(),
      Mn(),
      (jr = 100),
      (Mr = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Ar.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      V(Ar, {
        slots: { type: W.Array, title: `Children`, control: { type: W.ComponentInstance } },
        speed: {
          type: W.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: W.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: W.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: W.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: W.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: W.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: W.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: W.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: W.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: W.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: W.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: W.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: W.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: W.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: W.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Nr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Pr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Fr = { fontSize: 32, marginBottom: 10 }),
      (Ir = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Lr = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Rr = (e, t, n) => Math.min(Math.max(e, t), n)),
      (zr = (e) => typeof e == `number` && !isNaN(e)));
  }),
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr = e(() => {
    (h(),
      I(),
      E(),
      n(),
      Br(),
      (Vr = D(Ar)),
      (Hr = `framer-AQdlX`),
      (Ur = { s90EHNEc1: `framer-v-12xraqj` }),
      (Wr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Gr = ({ value: e, children: n }) => {
        let r = p(S),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(S.Provider, { value: a, children: n });
      }),
      (Kr = b.create(o)),
      (qr = ({ height: e, id: t, speed: n, width: r, ...i }) => ({
        ...i,
        tmaswPCjz: n ?? i.tmaswPCjz ?? 30,
      })),
      (Jr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Yr = P(
        d(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = g(),
            { activeLocale: o, setLocale: s } = B();
          G();
          let { style: c, className: u, layoutId: d, variant: f, tmaswPCjz: p, ...h } = qr(e),
            {
              baseVariant: ee,
              classNames: _,
              clearLoadingGesture: te,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: ne,
              setGestureState: re,
              setVariant: x,
              variants: S,
            } = me({ defaultVariant: `s90EHNEc1`, ref: i, variant: f, variantClassNames: Ur }),
            C = Jr(e, S),
            w = M(Hr);
          return l(T, {
            id: d ?? a,
            children: l(Kr, {
              animate: S,
              initial: !1,
              children: l(Gr, {
                value: Wr,
                children: l(b.div, {
                  ...h,
                  ...v,
                  className: M(w, `framer-12xraqj`, u, _),
                  "data-framer-name": `Default`,
                  layoutDependency: C,
                  layoutId: `s90EHNEc1`,
                  ref: i,
                  style: { ...c },
                  children: l(L, {
                    children: l(k, {
                      className: `framer-5wjs9c-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: C,
                      layoutId: `x7s6JswDt-container`,
                      nodeId: `x7s6JswDt`,
                      rendersWithMotion: !0,
                      scopeId: `uxXUfMCSX`,
                      children: l(Ar, {
                        alignment: `center`,
                        direction: `left`,
                        fadeOptions: {
                          fadeAlpha: 0,
                          fadeContent: !0,
                          fadeInset: 0,
                          fadeWidth: 25,
                          overflow: !1,
                        },
                        gap: 16,
                        height: `100%`,
                        hoverFactor: 1,
                        id: `x7s6JswDt`,
                        layoutId: `x7s6JswDt`,
                        padding: 0,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingPerSide: !1,
                        paddingRight: 0,
                        paddingTop: 0,
                        sizingOptions: { heightType: !0, widthType: !0 },
                        slots: [
                          m(b.div, {
                            className: `framer-1j07cm4`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `x3l40upxs`,
                            children: [
                              l(b.div, {
                                className: `framer-1wyfz7u`,
                                layoutDependency: C,
                                layoutId: `i04izgzTV`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              l(A, {
                                className: `framer-qgape5`,
                                layoutDependency: C,
                                layoutId: `VCoOjZDhG`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 24" overflow="visible"><g><g><g><g transform="translate(18.266 5.083)"><path d="M 25.872 11.275 L 24.052 8.152 L 23.867 8.152 L 23.867 11.275 L 21.595 11.275 L 21.595 3.508 L 23.867 0 L 23.867 7.255 C 24.319 6.711 25.839 4.637 25.839 4.637 L 28.637 4.637 L 25.985 7.415 L 28.734 11.291 Z M 18.66 4.653 L 20.907 4.653 L 18.272 11.259 C 17.488 13.245 16.364 14.591 14.69 14.591 C 14.043 14.591 13.502 14.422 13.219 14.27 L 14.124 12.893 C 14.262 12.909 14.399 12.917 14.537 12.917 C 15.313 12.917 15.895 12.172 16.267 11.291 L 13.502 4.669 L 16.04 4.669 L 17.035 7.624 C 17.229 8.184 17.366 9.257 17.366 9.257 C 17.366 9.257 17.544 8.224 17.73 7.656 Z M 10.882 11.275 L 10.882 7.487 C 10.882 6.623 10.494 6.214 9.758 6.214 C 9.395 6.214 9.023 6.318 8.764 6.47 L 8.764 11.275 L 6.492 11.275 L 6.492 4.717 L 8.715 4.533 L 8.659 5.606 L 8.732 5.606 C 9.209 4.965 10.025 4.484 10.987 4.484 C 12.152 4.484 13.154 5.197 13.154 6.879 L 13.154 11.275 Z M 2.425 11.419 C 1.455 11.419 0.671 11.251 0 10.939 L 0.202 9.409 C 0.914 9.754 1.714 9.922 2.385 9.922 C 2.87 9.922 3.194 9.754 3.194 9.465 C 3.194 8.625 0.137 8.825 0.137 6.639 C 0.137 5.237 1.439 4.501 3.064 4.501 C 3.873 4.501 4.713 4.717 5.255 4.909 L 5.037 6.414 C 4.471 6.198 3.695 5.998 3.048 5.998 C 2.652 5.998 2.328 6.134 2.328 6.39 C 2.328 7.215 5.449 7.055 5.449 9.193 C 5.457 10.603 4.18 11.419 2.425 11.419 Z" fill="rgb(198, 198, 198)"></path></g><g><path d="M 13.332 6.334 L 2.045 6.334 C 2.045 5.638 3.064 3.524 5.102 0 L 5.95 5.574 L 9.395 5.574 L 10.244 0 C 12.297 3.572 13.332 5.678 13.332 6.334 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 24 L 0 18.683 L 0 6.27 C 0 6.27 2.838 5.237 7.681 5.237 C 12.523 5.237 15.345 6.27 15.345 6.27 L 15.345 18.683 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 23.255 L 0.493 18.298 L 0.493 6.775 C 0.493 6.775 3.177 5.814 7.673 5.814 Z" fill="rgb(219,219,219)"></path><path d="M 7.681 5.814 L 7.673 5.814 L 7.673 23.239 L 14.787 18.298 L 14.787 6.775 C 14.787 6.775 12.176 5.814 7.681 5.814 Z" fill="rgb(198,198,198)"></path><path d="M 11.553 20.541 L 10.947 15.335 L 7.624 15.335 L 7.624 23.263 L 7.673 23.311 C 8.966 22.438 10.26 21.518 11.553 20.541 Z" fill="rgb(59,59,99)"></path><path d="M 3.784 20.589 L 7.673 23.311 L 7.673 15.183 L 4.309 15.183 Z" fill="rgb(83,83,122)"></path><path d="M 9.33 19.043 C 9.33 19.94 8.473 20.38 7.689 20.38 C 6.904 20.38 6.023 19.94 6.023 19.043" fill="rgb(188,147,117)"></path><path d="M 7.681 19.508 C 7.05 19.508 6.743 19.059 6.743 18.13 L 7.042 18.13 C 7.042 19.219 7.47 19.219 7.681 19.219 C 7.891 19.219 8.319 19.219 8.319 18.13 L 8.618 18.13 C 8.618 19.059 8.311 19.508 7.681 19.508 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 18.354 C 7.867 18.851 8.247 19.099 8.796 19.099 C 9.338 19.099 9.912 18.819 10.171 18.13 C 10.535 17.161 10.526 15.816 10.526 15.816 C 10.526 15.816 12.135 13.854 12.135 13.189 L 7.664 13.189 L 7.664 18.354 Z" fill="rgb(196,154,126)"></path><path d="M 3.137 13.197 C 3.137 13.966 4.73 15.824 4.73 15.824 C 4.73 15.824 4.73 17.169 5.085 18.138 C 5.344 18.827 5.91 19.107 6.46 19.107 C 7.018 19.107 7.422 18.859 7.664 18.362 L 7.664 13.205 L 3.137 13.205 Z" fill="rgb(216,183,160)"></path><path d="M 11.949 8.785 C 10.712 7.544 10.397 4.965 10.397 4.965 C 10.163 5.782 9.661 8.176 9.661 8.176 C 9.661 8.176 8.683 7.872 7.632 7.864 C 7.6 7.864 7.6 11.091 7.632 17.554 L 8.635 16.849 L 8.821 13.429 L 9.888 14.615 L 11.262 15.007 C 11.262 15.007 11.78 14.647 11.78 14.655 C 11.998 14.358 12.071 14.102 12.127 13.974 C 12.321 13.493 11.893 9.834 11.893 9.834 C 11.731 9.514 11.949 8.785 11.949 8.785 Z" fill="rgb(59,59,99)"></path><path d="M 5.708 8.176 C 5.708 8.176 5.207 5.782 4.972 4.965 C 4.972 4.965 4.665 7.544 3.42 8.785 C 3.42 8.785 3.638 9.522 3.485 9.826 C 3.485 9.826 3.056 13.485 3.25 13.966 C 3.307 14.094 3.379 14.35 3.598 14.647 L 4.115 14.999 L 5.49 14.607 L 6.557 13.421 L 6.743 16.841 L 7.681 17.53 L 7.681 7.848 C 6.613 7.848 5.708 8.176 5.708 8.176 Z" fill="rgb(83,83,122)"></path><path d="M 11.076 2.571 C 11.278 2.947 13.049 6.398 13.049 7.592 L 12.265 9.674 C 12.394 10.851 12.661 13.397 12.459 13.894 C 12.338 14.198 11.869 14.839 11.464 15.351 L 12.014 20.22 L 11.27 20.741 L 10.858 17.177 C 10.801 17.538 10.712 17.922 10.583 18.274 C 10.413 18.731 10.106 19.083 9.718 19.283 C 9.694 20.38 8.651 20.973 7.673 20.973 C 6.686 20.973 5.635 20.38 5.611 19.283 C 5.223 19.075 4.916 18.731 4.746 18.274 C 4.625 17.938 4.536 17.57 4.479 17.225 L 4.083 20.805 L 3.339 20.276 L 3.881 15.359 C 3.476 14.847 2.999 14.198 2.878 13.886 C 2.676 13.389 2.935 10.835 3.064 9.666 L 2.231 7.512 L 2.231 7.447 C 2.231 6.254 4.051 2.947 4.253 2.571 L 4.843 1.522 C 5.199 3.948 5.376 5.165 5.376 5.165 L 5.667 7.135 L 6.047 7.744 C 6.411 7.624 7.034 7.455 7.664 7.455 C 8.295 7.455 8.918 7.624 9.29 7.744 L 9.67 7.135 L 10.494 1.522 Z M 7.689 20.196 C 8.125 20.196 8.74 20.004 8.893 19.5 L 8.845 19.5 C 8.764 19.5 8.683 19.491 8.602 19.483 C 8.376 19.788 8.028 19.876 7.673 19.876 C 7.317 19.876 6.969 19.78 6.751 19.483 C 6.67 19.491 6.597 19.5 6.508 19.5 L 6.46 19.5 C 6.622 20.004 7.244 20.196 7.689 20.196 Z M 7.179 19.363 C 7.317 19.459 7.479 19.516 7.681 19.516 C 7.875 19.516 8.044 19.459 8.182 19.363 C 8.077 19.315 7.98 19.259 7.891 19.203 C 7.81 19.227 7.737 19.227 7.681 19.227 C 7.624 19.227 7.551 19.227 7.47 19.203 C 7.381 19.259 7.284 19.315 7.179 19.363 Z M 10.268 15.584 C 10.801 14.935 11.602 13.902 11.723 13.614 C 11.812 13.317 11.658 11.331 11.472 9.666 L 11.464 9.57 L 11.618 9.153 C 11.101 8.617 10.737 7.88 10.486 7.183 L 10.454 7.399 L 9.637 8.713 L 9.314 8.577 C 9.306 8.577 8.473 8.232 7.681 8.232 C 6.88 8.232 6.064 8.569 6.056 8.577 L 5.732 8.713 L 4.916 7.399 L 4.891 7.231 C 4.641 7.92 4.277 8.649 3.759 9.169 L 3.913 9.562 L 3.905 9.658 C 3.711 11.323 3.565 13.301 3.654 13.614 C 3.768 13.894 4.568 14.935 5.102 15.584 L 5.19 15.688 L 5.19 15.824 C 5.19 15.84 5.19 17.113 5.522 18.002 C 5.765 18.643 6.298 18.715 6.516 18.715 C 7.066 18.715 7.301 18.218 7.309 18.202 C 7.438 17.954 7.503 17.546 7.503 16.985 L 7.834 16.985 C 7.834 17.441 7.907 17.85 8.044 18.21 C 8.053 18.226 8.295 18.723 8.845 18.723 C 9.063 18.723 9.597 18.651 9.839 18.01 C 10.171 17.121 10.171 15.848 10.171 15.832 L 10.171 15.696 Z" fill="rgb(51,49,82)"></path><path d="M 10.171 12.116 L 8.562 12.116 L 8.562 12.132 C 8.562 12.677 9.047 13.117 9.613 13.117 C 10.179 13.117 10.664 12.677 10.664 12.132 L 10.664 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 8.966 12.116 L 8.966 12.132 C 8.966 12.46 9.233 12.717 9.572 12.717 C 9.912 12.717 10.179 12.452 10.179 12.132 L 10.179 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 9.475 12.116 C 9.475 12.116 9.467 12.116 9.475 12.116 C 9.5 12.124 9.524 12.204 9.516 12.252 C 9.508 12.332 9.435 12.388 9.354 12.388 C 9.378 12.492 9.459 12.573 9.581 12.589 C 9.726 12.613 9.864 12.509 9.88 12.372 C 9.896 12.268 9.839 12.116 9.758 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 6.298 12.116 L 4.689 12.116 L 4.689 12.132 C 4.689 12.677 5.174 13.117 5.74 13.117 C 6.306 13.117 6.791 12.677 6.791 12.132 L 6.791 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 5.093 12.116 L 5.093 12.132 C 5.093 12.46 5.36 12.717 5.692 12.717 C 6.023 12.717 6.298 12.452 6.298 12.132 L 6.298 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 5.878 12.116 L 5.587 12.116 C 5.619 12.124 5.643 12.204 5.635 12.252 C 5.627 12.332 5.554 12.388 5.473 12.388 C 5.498 12.492 5.587 12.573 5.7 12.589 C 5.845 12.613 5.983 12.509 5.999 12.372 C 6.015 12.268 5.967 12.116 5.878 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 10.049 11.652 C 10.114 11.58 10.688 10.947 9.92 10.947 C 9.225 10.947 8.732 11.491 8.594 11.652 Z" fill="rgb(196,154,126)"></path><path d="M 6.751 11.652 C 6.622 11.491 6.12 10.947 5.425 10.947 C 4.657 10.947 5.231 11.58 5.296 11.652 Z" fill="rgb(216,183,160)"></path><path d="M 3.064 7.383 C 3.113 6.767 3.776 5.277 4.406 4.028 L 4.576 5.173 C 4.511 5.598 4.22 7.279 3.428 8.336 Z" fill="rgb(216,183,160)"></path><path d="M 10.793 5.085 L 10.947 4.028 C 11.578 5.277 12.24 6.767 12.289 7.383 L 11.933 8.312 C 11.084 7.151 10.818 5.253 10.793 5.085 Z" fill="rgb(196,154,126)"></path><g transform="translate(6.492 16.408)"><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></g></g></g></g></g></svg>`,
                                withExternalLayout: !0,
                                children: l(A, {
                                  className: `framer-16wz4v2`,
                                  layoutDependency: C,
                                  layoutId: `j1UqaUMCV`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 24" overflow="visible"><g><g><g transform="translate(18.266 5.083)"><path d="M 25.872 11.275 L 24.052 8.152 L 23.867 8.152 L 23.867 11.275 L 21.595 11.275 L 21.595 3.508 L 23.867 0 L 23.867 7.255 C 24.319 6.711 25.839 4.637 25.839 4.637 L 28.637 4.637 L 25.985 7.415 L 28.734 11.291 Z M 18.66 4.653 L 20.907 4.653 L 18.272 11.259 C 17.488 13.245 16.364 14.591 14.69 14.591 C 14.043 14.591 13.502 14.422 13.219 14.27 L 14.124 12.893 C 14.262 12.909 14.399 12.917 14.537 12.917 C 15.313 12.917 15.895 12.172 16.267 11.291 L 13.502 4.669 L 16.04 4.669 L 17.035 7.624 C 17.229 8.184 17.366 9.257 17.366 9.257 C 17.366 9.257 17.544 8.224 17.73 7.656 Z M 10.882 11.275 L 10.882 7.487 C 10.882 6.623 10.494 6.214 9.758 6.214 C 9.395 6.214 9.023 6.318 8.764 6.47 L 8.764 11.275 L 6.492 11.275 L 6.492 4.717 L 8.715 4.533 L 8.659 5.606 L 8.732 5.606 C 9.209 4.965 10.025 4.484 10.987 4.484 C 12.152 4.484 13.154 5.197 13.154 6.879 L 13.154 11.275 Z M 2.425 11.419 C 1.455 11.419 0.671 11.251 0 10.939 L 0.202 9.409 C 0.914 9.754 1.714 9.922 2.385 9.922 C 2.87 9.922 3.194 9.754 3.194 9.465 C 3.194 8.625 0.137 8.825 0.137 6.639 C 0.137 5.237 1.439 4.501 3.064 4.501 C 3.873 4.501 4.713 4.717 5.255 4.909 L 5.037 6.414 C 4.471 6.198 3.695 5.998 3.048 5.998 C 2.652 5.998 2.328 6.134 2.328 6.39 C 2.328 7.215 5.449 7.055 5.449 9.193 C 5.457 10.603 4.18 11.419 2.425 11.419 Z" fill="rgb(198, 198, 198)"></path></g><g><path d="M 13.332 6.334 L 2.045 6.334 C 2.045 5.638 3.064 3.524 5.102 0 L 5.95 5.574 L 9.395 5.574 L 10.244 0 C 12.297 3.572 13.332 5.678 13.332 6.334 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 24 L 0 18.683 L 0 6.27 C 0 6.27 2.838 5.237 7.681 5.237 C 12.523 5.237 15.345 6.27 15.345 6.27 L 15.345 18.683 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 23.255 L 0.493 18.298 L 0.493 6.775 C 0.493 6.775 3.177 5.814 7.673 5.814 Z" fill="rgb(219,219,219)"></path><path d="M 7.681 5.814 L 7.673 5.814 L 7.673 23.239 L 14.787 18.298 L 14.787 6.775 C 14.787 6.775 12.176 5.814 7.681 5.814 Z" fill="rgb(198,198,198)"></path><path d="M 11.553 20.541 L 10.947 15.335 L 7.624 15.335 L 7.624 23.263 L 7.673 23.311 C 8.966 22.438 10.26 21.518 11.553 20.541 Z" fill="rgb(59,59,99)"></path><path d="M 3.784 20.589 L 7.673 23.311 L 7.673 15.183 L 4.309 15.183 Z" fill="rgb(83,83,122)"></path><path d="M 9.33 19.043 C 9.33 19.94 8.473 20.38 7.689 20.38 C 6.904 20.38 6.023 19.94 6.023 19.043" fill="rgb(188,147,117)"></path><path d="M 7.681 19.508 C 7.05 19.508 6.743 19.059 6.743 18.13 L 7.042 18.13 C 7.042 19.219 7.47 19.219 7.681 19.219 C 7.891 19.219 8.319 19.219 8.319 18.13 L 8.618 18.13 C 8.618 19.059 8.311 19.508 7.681 19.508 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 18.354 C 7.867 18.851 8.247 19.099 8.796 19.099 C 9.338 19.099 9.912 18.819 10.171 18.13 C 10.535 17.161 10.526 15.816 10.526 15.816 C 10.526 15.816 12.135 13.854 12.135 13.189 L 7.664 13.189 L 7.664 18.354 Z" fill="rgb(196,154,126)"></path><path d="M 3.137 13.197 C 3.137 13.966 4.73 15.824 4.73 15.824 C 4.73 15.824 4.73 17.169 5.085 18.138 C 5.344 18.827 5.91 19.107 6.46 19.107 C 7.018 19.107 7.422 18.859 7.664 18.362 L 7.664 13.205 L 3.137 13.205 Z" fill="rgb(216,183,160)"></path><path d="M 11.949 8.785 C 10.712 7.544 10.397 4.965 10.397 4.965 C 10.163 5.782 9.661 8.176 9.661 8.176 C 9.661 8.176 8.683 7.872 7.632 7.864 C 7.6 7.864 7.6 11.091 7.632 17.554 L 8.635 16.849 L 8.821 13.429 L 9.888 14.615 L 11.262 15.007 C 11.262 15.007 11.78 14.647 11.78 14.655 C 11.998 14.358 12.071 14.102 12.127 13.974 C 12.321 13.493 11.893 9.834 11.893 9.834 C 11.731 9.514 11.949 8.785 11.949 8.785 Z" fill="rgb(59,59,99)"></path><path d="M 5.708 8.176 C 5.708 8.176 5.207 5.782 4.972 4.965 C 4.972 4.965 4.665 7.544 3.42 8.785 C 3.42 8.785 3.638 9.522 3.485 9.826 C 3.485 9.826 3.056 13.485 3.25 13.966 C 3.307 14.094 3.379 14.35 3.598 14.647 L 4.115 14.999 L 5.49 14.607 L 6.557 13.421 L 6.743 16.841 L 7.681 17.53 L 7.681 7.848 C 6.613 7.848 5.708 8.176 5.708 8.176 Z" fill="rgb(83,83,122)"></path><path d="M 11.076 2.571 C 11.278 2.947 13.049 6.398 13.049 7.592 L 12.265 9.674 C 12.394 10.851 12.661 13.397 12.459 13.894 C 12.338 14.198 11.869 14.839 11.464 15.351 L 12.014 20.22 L 11.27 20.741 L 10.858 17.177 C 10.801 17.538 10.712 17.922 10.583 18.274 C 10.413 18.731 10.106 19.083 9.718 19.283 C 9.694 20.38 8.651 20.973 7.673 20.973 C 6.686 20.973 5.635 20.38 5.611 19.283 C 5.223 19.075 4.916 18.731 4.746 18.274 C 4.625 17.938 4.536 17.57 4.479 17.225 L 4.083 20.805 L 3.339 20.276 L 3.881 15.359 C 3.476 14.847 2.999 14.198 2.878 13.886 C 2.676 13.389 2.935 10.835 3.064 9.666 L 2.231 7.512 L 2.231 7.447 C 2.231 6.254 4.051 2.947 4.253 2.571 L 4.843 1.522 C 5.199 3.948 5.376 5.165 5.376 5.165 L 5.667 7.135 L 6.047 7.744 C 6.411 7.624 7.034 7.455 7.664 7.455 C 8.295 7.455 8.918 7.624 9.29 7.744 L 9.67 7.135 L 10.494 1.522 Z M 7.689 20.196 C 8.125 20.196 8.74 20.004 8.893 19.5 L 8.845 19.5 C 8.764 19.5 8.683 19.491 8.602 19.483 C 8.376 19.788 8.028 19.876 7.673 19.876 C 7.317 19.876 6.969 19.78 6.751 19.483 C 6.67 19.491 6.597 19.5 6.508 19.5 L 6.46 19.5 C 6.622 20.004 7.244 20.196 7.689 20.196 Z M 7.179 19.363 C 7.317 19.459 7.479 19.516 7.681 19.516 C 7.875 19.516 8.044 19.459 8.182 19.363 C 8.077 19.315 7.98 19.259 7.891 19.203 C 7.81 19.227 7.737 19.227 7.681 19.227 C 7.624 19.227 7.551 19.227 7.47 19.203 C 7.381 19.259 7.284 19.315 7.179 19.363 Z M 10.268 15.584 C 10.801 14.935 11.602 13.902 11.723 13.614 C 11.812 13.317 11.658 11.331 11.472 9.666 L 11.464 9.57 L 11.618 9.153 C 11.101 8.617 10.737 7.88 10.486 7.183 L 10.454 7.399 L 9.637 8.713 L 9.314 8.577 C 9.306 8.577 8.473 8.232 7.681 8.232 C 6.88 8.232 6.064 8.569 6.056 8.577 L 5.732 8.713 L 4.916 7.399 L 4.891 7.231 C 4.641 7.92 4.277 8.649 3.759 9.169 L 3.913 9.562 L 3.905 9.658 C 3.711 11.323 3.565 13.301 3.654 13.614 C 3.768 13.894 4.568 14.935 5.102 15.584 L 5.19 15.688 L 5.19 15.824 C 5.19 15.84 5.19 17.113 5.522 18.002 C 5.765 18.643 6.298 18.715 6.516 18.715 C 7.066 18.715 7.301 18.218 7.309 18.202 C 7.438 17.954 7.503 17.546 7.503 16.985 L 7.834 16.985 C 7.834 17.441 7.907 17.85 8.044 18.21 C 8.053 18.226 8.295 18.723 8.845 18.723 C 9.063 18.723 9.597 18.651 9.839 18.01 C 10.171 17.121 10.171 15.848 10.171 15.832 L 10.171 15.696 Z" fill="rgb(51,49,82)"></path><path d="M 10.171 12.116 L 8.562 12.116 L 8.562 12.132 C 8.562 12.677 9.047 13.117 9.613 13.117 C 10.179 13.117 10.664 12.677 10.664 12.132 L 10.664 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 8.966 12.116 L 8.966 12.132 C 8.966 12.46 9.233 12.717 9.572 12.717 C 9.912 12.717 10.179 12.452 10.179 12.132 L 10.179 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 9.475 12.116 C 9.475 12.116 9.467 12.116 9.475 12.116 C 9.5 12.124 9.524 12.204 9.516 12.252 C 9.508 12.332 9.435 12.388 9.354 12.388 C 9.378 12.492 9.459 12.573 9.581 12.589 C 9.726 12.613 9.864 12.509 9.88 12.372 C 9.896 12.268 9.839 12.116 9.758 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 6.298 12.116 L 4.689 12.116 L 4.689 12.132 C 4.689 12.677 5.174 13.117 5.74 13.117 C 6.306 13.117 6.791 12.677 6.791 12.132 L 6.791 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 5.093 12.116 L 5.093 12.132 C 5.093 12.46 5.36 12.717 5.692 12.717 C 6.023 12.717 6.298 12.452 6.298 12.132 L 6.298 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 5.878 12.116 L 5.587 12.116 C 5.619 12.124 5.643 12.204 5.635 12.252 C 5.627 12.332 5.554 12.388 5.473 12.388 C 5.498 12.492 5.587 12.573 5.7 12.589 C 5.845 12.613 5.983 12.509 5.999 12.372 C 6.015 12.268 5.967 12.116 5.878 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 10.049 11.652 C 10.114 11.58 10.688 10.947 9.92 10.947 C 9.225 10.947 8.732 11.491 8.594 11.652 Z" fill="rgb(196,154,126)"></path><path d="M 6.751 11.652 C 6.622 11.491 6.12 10.947 5.425 10.947 C 4.657 10.947 5.231 11.58 5.296 11.652 Z" fill="rgb(216,183,160)"></path><path d="M 3.064 7.383 C 3.113 6.767 3.776 5.277 4.406 4.028 L 4.576 5.173 C 4.511 5.598 4.22 7.279 3.428 8.336 Z" fill="rgb(216,183,160)"></path><path d="M 10.793 5.085 L 10.947 4.028 C 11.578 5.277 12.24 6.767 12.289 7.383 L 11.933 8.312 C 11.084 7.151 10.818 5.253 10.793 5.085 Z" fill="rgb(196,154,126)"></path><g transform="translate(6.492 16.408)"><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></g></g></g></g></svg>`,
                                  withExternalLayout: !0,
                                  children: m(A, {
                                    className: `framer-17xdoh8`,
                                    layoutDependency: C,
                                    layoutId: `gIGRace3b`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 24" overflow="visible"><g><g transform="translate(18.266 5.083)"><path d="M 25.872 11.275 L 24.052 8.152 L 23.867 8.152 L 23.867 11.275 L 21.595 11.275 L 21.595 3.508 L 23.867 0 L 23.867 7.255 C 24.319 6.711 25.839 4.637 25.839 4.637 L 28.637 4.637 L 25.985 7.415 L 28.734 11.291 Z M 18.66 4.653 L 20.907 4.653 L 18.272 11.259 C 17.488 13.245 16.364 14.591 14.69 14.591 C 14.043 14.591 13.502 14.422 13.219 14.27 L 14.124 12.893 C 14.262 12.909 14.399 12.917 14.537 12.917 C 15.313 12.917 15.895 12.172 16.267 11.291 L 13.502 4.669 L 16.04 4.669 L 17.035 7.624 C 17.229 8.184 17.366 9.257 17.366 9.257 C 17.366 9.257 17.544 8.224 17.73 7.656 Z M 10.882 11.275 L 10.882 7.487 C 10.882 6.623 10.494 6.214 9.758 6.214 C 9.395 6.214 9.023 6.318 8.764 6.47 L 8.764 11.275 L 6.492 11.275 L 6.492 4.717 L 8.715 4.533 L 8.659 5.606 L 8.732 5.606 C 9.209 4.965 10.025 4.484 10.987 4.484 C 12.152 4.484 13.154 5.197 13.154 6.879 L 13.154 11.275 Z M 2.425 11.419 C 1.455 11.419 0.671 11.251 0 10.939 L 0.202 9.409 C 0.914 9.754 1.714 9.922 2.385 9.922 C 2.87 9.922 3.194 9.754 3.194 9.465 C 3.194 8.625 0.137 8.825 0.137 6.639 C 0.137 5.237 1.439 4.501 3.064 4.501 C 3.873 4.501 4.713 4.717 5.255 4.909 L 5.037 6.414 C 4.471 6.198 3.695 5.998 3.048 5.998 C 2.652 5.998 2.328 6.134 2.328 6.39 C 2.328 7.215 5.449 7.055 5.449 9.193 C 5.457 10.603 4.18 11.419 2.425 11.419 Z" fill="rgb(198, 198, 198)"></path></g><g><path d="M 13.332 6.334 L 2.045 6.334 C 2.045 5.638 3.064 3.524 5.102 0 L 5.95 5.574 L 9.395 5.574 L 10.244 0 C 12.297 3.572 13.332 5.678 13.332 6.334 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 24 L 0 18.683 L 0 6.27 C 0 6.27 2.838 5.237 7.681 5.237 C 12.523 5.237 15.345 6.27 15.345 6.27 L 15.345 18.683 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 23.255 L 0.493 18.298 L 0.493 6.775 C 0.493 6.775 3.177 5.814 7.673 5.814 Z" fill="rgb(219,219,219)"></path><path d="M 7.681 5.814 L 7.673 5.814 L 7.673 23.239 L 14.787 18.298 L 14.787 6.775 C 14.787 6.775 12.176 5.814 7.681 5.814 Z" fill="rgb(198,198,198)"></path><path d="M 11.553 20.541 L 10.947 15.335 L 7.624 15.335 L 7.624 23.263 L 7.673 23.311 C 8.966 22.438 10.26 21.518 11.553 20.541 Z" fill="rgb(59,59,99)"></path><path d="M 3.784 20.589 L 7.673 23.311 L 7.673 15.183 L 4.309 15.183 Z" fill="rgb(83,83,122)"></path><path d="M 9.33 19.043 C 9.33 19.94 8.473 20.38 7.689 20.38 C 6.904 20.38 6.023 19.94 6.023 19.043" fill="rgb(188,147,117)"></path><path d="M 7.681 19.508 C 7.05 19.508 6.743 19.059 6.743 18.13 L 7.042 18.13 C 7.042 19.219 7.47 19.219 7.681 19.219 C 7.891 19.219 8.319 19.219 8.319 18.13 L 8.618 18.13 C 8.618 19.059 8.311 19.508 7.681 19.508 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 18.354 C 7.867 18.851 8.247 19.099 8.796 19.099 C 9.338 19.099 9.912 18.819 10.171 18.13 C 10.535 17.161 10.526 15.816 10.526 15.816 C 10.526 15.816 12.135 13.854 12.135 13.189 L 7.664 13.189 L 7.664 18.354 Z" fill="rgb(196,154,126)"></path><path d="M 3.137 13.197 C 3.137 13.966 4.73 15.824 4.73 15.824 C 4.73 15.824 4.73 17.169 5.085 18.138 C 5.344 18.827 5.91 19.107 6.46 19.107 C 7.018 19.107 7.422 18.859 7.664 18.362 L 7.664 13.205 L 3.137 13.205 Z" fill="rgb(216,183,160)"></path><path d="M 11.949 8.785 C 10.712 7.544 10.397 4.965 10.397 4.965 C 10.163 5.782 9.661 8.176 9.661 8.176 C 9.661 8.176 8.683 7.872 7.632 7.864 C 7.6 7.864 7.6 11.091 7.632 17.554 L 8.635 16.849 L 8.821 13.429 L 9.888 14.615 L 11.262 15.007 C 11.262 15.007 11.78 14.647 11.78 14.655 C 11.998 14.358 12.071 14.102 12.127 13.974 C 12.321 13.493 11.893 9.834 11.893 9.834 C 11.731 9.514 11.949 8.785 11.949 8.785 Z" fill="rgb(59,59,99)"></path><path d="M 5.708 8.176 C 5.708 8.176 5.207 5.782 4.972 4.965 C 4.972 4.965 4.665 7.544 3.42 8.785 C 3.42 8.785 3.638 9.522 3.485 9.826 C 3.485 9.826 3.056 13.485 3.25 13.966 C 3.307 14.094 3.379 14.35 3.598 14.647 L 4.115 14.999 L 5.49 14.607 L 6.557 13.421 L 6.743 16.841 L 7.681 17.53 L 7.681 7.848 C 6.613 7.848 5.708 8.176 5.708 8.176 Z" fill="rgb(83,83,122)"></path><path d="M 11.076 2.571 C 11.278 2.947 13.049 6.398 13.049 7.592 L 12.265 9.674 C 12.394 10.851 12.661 13.397 12.459 13.894 C 12.338 14.198 11.869 14.839 11.464 15.351 L 12.014 20.22 L 11.27 20.741 L 10.858 17.177 C 10.801 17.538 10.712 17.922 10.583 18.274 C 10.413 18.731 10.106 19.083 9.718 19.283 C 9.694 20.38 8.651 20.973 7.673 20.973 C 6.686 20.973 5.635 20.38 5.611 19.283 C 5.223 19.075 4.916 18.731 4.746 18.274 C 4.625 17.938 4.536 17.57 4.479 17.225 L 4.083 20.805 L 3.339 20.276 L 3.881 15.359 C 3.476 14.847 2.999 14.198 2.878 13.886 C 2.676 13.389 2.935 10.835 3.064 9.666 L 2.231 7.512 L 2.231 7.447 C 2.231 6.254 4.051 2.947 4.253 2.571 L 4.843 1.522 C 5.199 3.948 5.376 5.165 5.376 5.165 L 5.667 7.135 L 6.047 7.744 C 6.411 7.624 7.034 7.455 7.664 7.455 C 8.295 7.455 8.918 7.624 9.29 7.744 L 9.67 7.135 L 10.494 1.522 Z M 7.689 20.196 C 8.125 20.196 8.74 20.004 8.893 19.5 L 8.845 19.5 C 8.764 19.5 8.683 19.491 8.602 19.483 C 8.376 19.788 8.028 19.876 7.673 19.876 C 7.317 19.876 6.969 19.78 6.751 19.483 C 6.67 19.491 6.597 19.5 6.508 19.5 L 6.46 19.5 C 6.622 20.004 7.244 20.196 7.689 20.196 Z M 7.179 19.363 C 7.317 19.459 7.479 19.516 7.681 19.516 C 7.875 19.516 8.044 19.459 8.182 19.363 C 8.077 19.315 7.98 19.259 7.891 19.203 C 7.81 19.227 7.737 19.227 7.681 19.227 C 7.624 19.227 7.551 19.227 7.47 19.203 C 7.381 19.259 7.284 19.315 7.179 19.363 Z M 10.268 15.584 C 10.801 14.935 11.602 13.902 11.723 13.614 C 11.812 13.317 11.658 11.331 11.472 9.666 L 11.464 9.57 L 11.618 9.153 C 11.101 8.617 10.737 7.88 10.486 7.183 L 10.454 7.399 L 9.637 8.713 L 9.314 8.577 C 9.306 8.577 8.473 8.232 7.681 8.232 C 6.88 8.232 6.064 8.569 6.056 8.577 L 5.732 8.713 L 4.916 7.399 L 4.891 7.231 C 4.641 7.92 4.277 8.649 3.759 9.169 L 3.913 9.562 L 3.905 9.658 C 3.711 11.323 3.565 13.301 3.654 13.614 C 3.768 13.894 4.568 14.935 5.102 15.584 L 5.19 15.688 L 5.19 15.824 C 5.19 15.84 5.19 17.113 5.522 18.002 C 5.765 18.643 6.298 18.715 6.516 18.715 C 7.066 18.715 7.301 18.218 7.309 18.202 C 7.438 17.954 7.503 17.546 7.503 16.985 L 7.834 16.985 C 7.834 17.441 7.907 17.85 8.044 18.21 C 8.053 18.226 8.295 18.723 8.845 18.723 C 9.063 18.723 9.597 18.651 9.839 18.01 C 10.171 17.121 10.171 15.848 10.171 15.832 L 10.171 15.696 Z" fill="rgb(51,49,82)"></path><path d="M 10.171 12.116 L 8.562 12.116 L 8.562 12.132 C 8.562 12.677 9.047 13.117 9.613 13.117 C 10.179 13.117 10.664 12.677 10.664 12.132 L 10.664 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 8.966 12.116 L 8.966 12.132 C 8.966 12.46 9.233 12.717 9.572 12.717 C 9.912 12.717 10.179 12.452 10.179 12.132 L 10.179 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 9.475 12.116 C 9.475 12.116 9.467 12.116 9.475 12.116 C 9.5 12.124 9.524 12.204 9.516 12.252 C 9.508 12.332 9.435 12.388 9.354 12.388 C 9.378 12.492 9.459 12.573 9.581 12.589 C 9.726 12.613 9.864 12.509 9.88 12.372 C 9.896 12.268 9.839 12.116 9.758 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 6.298 12.116 L 4.689 12.116 L 4.689 12.132 C 4.689 12.677 5.174 13.117 5.74 13.117 C 6.306 13.117 6.791 12.677 6.791 12.132 L 6.791 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 5.093 12.116 L 5.093 12.132 C 5.093 12.46 5.36 12.717 5.692 12.717 C 6.023 12.717 6.298 12.452 6.298 12.132 L 6.298 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 5.878 12.116 L 5.587 12.116 C 5.619 12.124 5.643 12.204 5.635 12.252 C 5.627 12.332 5.554 12.388 5.473 12.388 C 5.498 12.492 5.587 12.573 5.7 12.589 C 5.845 12.613 5.983 12.509 5.999 12.372 C 6.015 12.268 5.967 12.116 5.878 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 10.049 11.652 C 10.114 11.58 10.688 10.947 9.92 10.947 C 9.225 10.947 8.732 11.491 8.594 11.652 Z" fill="rgb(196,154,126)"></path><path d="M 6.751 11.652 C 6.622 11.491 6.12 10.947 5.425 10.947 C 4.657 10.947 5.231 11.58 5.296 11.652 Z" fill="rgb(216,183,160)"></path><path d="M 3.064 7.383 C 3.113 6.767 3.776 5.277 4.406 4.028 L 4.576 5.173 C 4.511 5.598 4.22 7.279 3.428 8.336 Z" fill="rgb(216,183,160)"></path><path d="M 10.793 5.085 L 10.947 4.028 C 11.578 5.277 12.24 6.767 12.289 7.383 L 11.933 8.312 C 11.084 7.151 10.818 5.253 10.793 5.085 Z" fill="rgb(196,154,126)"></path><g transform="translate(6.492 16.408)"><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></g></g></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-1gr3q4d`,
                                        layoutDependency: C,
                                        layoutId: `J8xONf_X0`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.734 14.591" overflow="visible"><g><path d="M 25.872 11.275 L 24.052 8.152 L 23.867 8.152 L 23.867 11.275 L 21.595 11.275 L 21.595 3.508 L 23.867 0 L 23.867 7.255 C 24.319 6.711 25.839 4.637 25.839 4.637 L 28.637 4.637 L 25.985 7.415 L 28.734 11.291 Z M 18.66 4.653 L 20.907 4.653 L 18.272 11.259 C 17.488 13.245 16.364 14.591 14.69 14.591 C 14.043 14.591 13.502 14.422 13.219 14.27 L 14.124 12.893 C 14.262 12.909 14.399 12.917 14.537 12.917 C 15.313 12.917 15.895 12.172 16.267 11.291 L 13.502 4.669 L 16.04 4.669 L 17.035 7.624 C 17.229 8.184 17.366 9.257 17.366 9.257 C 17.366 9.257 17.544 8.224 17.73 7.656 Z M 10.882 11.275 L 10.882 7.487 C 10.882 6.623 10.494 6.214 9.758 6.214 C 9.395 6.214 9.023 6.318 8.764 6.47 L 8.764 11.275 L 6.492 11.275 L 6.492 4.717 L 8.715 4.533 L 8.659 5.606 L 8.732 5.606 C 9.209 4.965 10.025 4.484 10.987 4.484 C 12.152 4.484 13.154 5.197 13.154 6.879 L 13.154 11.275 Z M 2.425 11.419 C 1.455 11.419 0.671 11.251 0 10.939 L 0.202 9.409 C 0.914 9.754 1.714 9.922 2.385 9.922 C 2.87 9.922 3.194 9.754 3.194 9.465 C 3.194 8.625 0.137 8.825 0.137 6.639 C 0.137 5.237 1.439 4.501 3.064 4.501 C 3.873 4.501 4.713 4.717 5.255 4.909 L 5.037 6.414 C 4.471 6.198 3.695 5.998 3.048 5.998 C 2.652 5.998 2.328 6.134 2.328 6.39 C 2.328 7.215 5.449 7.055 5.449 9.193 C 5.457 10.603 4.18 11.419 2.425 11.419 Z" fill="rgb(198, 198, 198)"></path></g></svg>`,
                                        withExternalLayout: !0,
                                        children: m(A, {
                                          className: `framer-1wom6if`,
                                          layoutDependency: C,
                                          layoutId: `AoBhFAt2Y`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28.734 14.591" overflow="visible"><path d="M 25.872 11.275 L 24.052 8.152 L 23.867 8.152 L 23.867 11.275 L 21.595 11.275 L 21.595 3.508 L 23.867 0 L 23.867 7.255 C 24.319 6.711 25.839 4.637 25.839 4.637 L 28.637 4.637 L 25.985 7.415 L 28.734 11.291 Z M 18.66 4.653 L 20.907 4.653 L 18.272 11.259 C 17.488 13.245 16.364 14.591 14.69 14.591 C 14.043 14.591 13.502 14.422 13.219 14.27 L 14.124 12.893 C 14.262 12.909 14.399 12.917 14.537 12.917 C 15.313 12.917 15.895 12.172 16.267 11.291 L 13.502 4.669 L 16.04 4.669 L 17.035 7.624 C 17.229 8.184 17.366 9.257 17.366 9.257 C 17.366 9.257 17.544 8.224 17.73 7.656 Z M 10.882 11.275 L 10.882 7.487 C 10.882 6.623 10.494 6.214 9.758 6.214 C 9.395 6.214 9.023 6.318 8.764 6.47 L 8.764 11.275 L 6.492 11.275 L 6.492 4.717 L 8.715 4.533 L 8.659 5.606 L 8.732 5.606 C 9.209 4.965 10.025 4.484 10.987 4.484 C 12.152 4.484 13.154 5.197 13.154 6.879 L 13.154 11.275 Z M 2.425 11.419 C 1.455 11.419 0.671 11.251 0 10.939 L 0.202 9.409 C 0.914 9.754 1.714 9.922 2.385 9.922 C 2.87 9.922 3.194 9.754 3.194 9.465 C 3.194 8.625 0.137 8.825 0.137 6.639 C 0.137 5.237 1.439 4.501 3.064 4.501 C 3.873 4.501 4.713 4.717 5.255 4.909 L 5.037 6.414 C 4.471 6.198 3.695 5.998 3.048 5.998 C 2.652 5.998 2.328 6.134 2.328 6.39 C 2.328 7.215 5.449 7.055 5.449 9.193 C 5.457 10.603 4.18 11.419 2.425 11.419 Z" fill="rgb(198, 198, 198)"></path></svg>`,
                                          withExternalLayout: !0,
                                          children: [
                                            l(A, {
                                              className: `framer-et55a2`,
                                              layoutDependency: C,
                                              layoutId: `WqwmU9ahH`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.139 11.291" overflow="visible"><path d="M 4.277 11.275 L 2.458 8.152 L 2.272 8.152 L 2.272 11.275 L 0 11.275 L 0 3.508 L 2.272 0 L 2.272 7.255 C 2.725 6.711 4.245 4.637 4.245 4.637 L 7.042 4.637 L 4.39 7.415 L 7.139 11.291 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(A, {
                                              className: `framer-pyso1a`,
                                              layoutDependency: C,
                                              layoutId: `YSMvD5z2h`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.689 9.938" overflow="visible"><path d="M 5.441 0 L 7.689 0 L 5.053 6.607 C 4.269 8.593 3.145 9.938 1.471 9.938 C 0.825 9.938 0.283 9.77 0 9.618 L 0.906 8.24 C 1.043 8.256 1.18 8.264 1.318 8.264 C 2.094 8.264 2.676 7.52 3.048 6.639 L 0.283 0.016 L 2.822 0.016 L 3.816 2.971 C 4.01 3.532 4.148 4.605 4.148 4.605 C 4.148 4.605 4.325 3.572 4.511 3.003 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(A, {
                                              className: `framer-9omi39`,
                                              layoutDependency: C,
                                              layoutId: `Nl902KrFL`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.662 6.791" overflow="visible"><path d="M 4.39 6.791 L 4.39 3.003 C 4.39 2.138 4.002 1.73 3.266 1.73 C 2.902 1.73 2.531 1.834 2.272 1.986 L 2.272 6.791 L 0 6.791 L 0 0.232 L 2.223 0.048 L 2.167 1.121 L 2.24 1.121 C 2.717 0.48 3.533 0 4.495 0 C 5.659 0 6.662 0.713 6.662 2.394 L 6.662 6.791 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            l(A, {
                                              className: `framer-geevuy`,
                                              layoutDependency: C,
                                              layoutId: `Giddf8BvS`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.449 6.919" overflow="visible"><path d="M 2.425 6.919 C 1.455 6.919 0.671 6.751 0 6.438 L 0.202 4.909 C 0.914 5.253 1.714 5.421 2.385 5.421 C 2.87 5.421 3.194 5.253 3.194 4.965 C 3.194 4.124 0.137 4.324 0.137 2.138 C 0.137 0.737 1.439 0 3.064 0 C 3.873 0 4.713 0.216 5.255 0.408 L 5.037 1.914 C 4.471 1.698 3.695 1.497 3.048 1.497 C 2.652 1.497 2.328 1.634 2.328 1.89 C 2.328 2.715 5.449 2.555 5.449 4.693 C 5.457 6.102 4.18 6.919 2.425 6.919 Z" fill="transparent"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      m(A, {
                                        className: `framer-vbb568`,
                                        layoutDependency: C,
                                        layoutId: `Ri8qhsJ5X`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.345 24" overflow="visible"><g><path d="M 13.332 6.334 L 2.045 6.334 C 2.045 5.638 3.064 3.524 5.102 0 L 5.95 5.574 L 9.395 5.574 L 10.244 0 C 12.297 3.572 13.332 5.678 13.332 6.334 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 24 L 0 18.683 L 0 6.27 C 0 6.27 2.838 5.237 7.681 5.237 C 12.523 5.237 15.345 6.27 15.345 6.27 L 15.345 18.683 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 23.255 L 0.493 18.298 L 0.493 6.775 C 0.493 6.775 3.177 5.814 7.673 5.814 Z" fill="rgb(219,219,219)"></path><path d="M 7.681 5.814 L 7.673 5.814 L 7.673 23.239 L 14.787 18.298 L 14.787 6.775 C 14.787 6.775 12.176 5.814 7.681 5.814 Z" fill="rgb(198,198,198)"></path><path d="M 11.553 20.541 L 10.947 15.335 L 7.624 15.335 L 7.624 23.263 L 7.673 23.311 C 8.966 22.438 10.26 21.518 11.553 20.541 Z" fill="rgb(59,59,99)"></path><path d="M 3.784 20.589 L 7.673 23.311 L 7.673 15.183 L 4.309 15.183 Z" fill="rgb(83,83,122)"></path><path d="M 9.33 19.043 C 9.33 19.94 8.473 20.38 7.689 20.38 C 6.904 20.38 6.023 19.94 6.023 19.043" fill="rgb(188,147,117)"></path><path d="M 7.681 19.508 C 7.05 19.508 6.743 19.059 6.743 18.13 L 7.042 18.13 C 7.042 19.219 7.47 19.219 7.681 19.219 C 7.891 19.219 8.319 19.219 8.319 18.13 L 8.618 18.13 C 8.618 19.059 8.311 19.508 7.681 19.508 Z" fill="rgb(255,255,255)"></path><path d="M 7.673 18.354 C 7.867 18.851 8.247 19.099 8.796 19.099 C 9.338 19.099 9.912 18.819 10.171 18.13 C 10.535 17.161 10.526 15.816 10.526 15.816 C 10.526 15.816 12.135 13.854 12.135 13.189 L 7.664 13.189 L 7.664 18.354 Z" fill="rgb(196,154,126)"></path><path d="M 3.137 13.197 C 3.137 13.966 4.73 15.824 4.73 15.824 C 4.73 15.824 4.73 17.169 5.085 18.138 C 5.344 18.827 5.91 19.107 6.46 19.107 C 7.018 19.107 7.422 18.859 7.664 18.362 L 7.664 13.205 L 3.137 13.205 Z" fill="rgb(216,183,160)"></path><path d="M 11.949 8.785 C 10.712 7.544 10.397 4.965 10.397 4.965 C 10.163 5.782 9.661 8.176 9.661 8.176 C 9.661 8.176 8.683 7.872 7.632 7.864 C 7.6 7.864 7.6 11.091 7.632 17.554 L 8.635 16.849 L 8.821 13.429 L 9.888 14.615 L 11.262 15.007 C 11.262 15.007 11.78 14.647 11.78 14.655 C 11.998 14.358 12.071 14.102 12.127 13.974 C 12.321 13.493 11.893 9.834 11.893 9.834 C 11.731 9.514 11.949 8.785 11.949 8.785 Z" fill="rgb(59,59,99)"></path><path d="M 5.708 8.176 C 5.708 8.176 5.207 5.782 4.972 4.965 C 4.972 4.965 4.665 7.544 3.42 8.785 C 3.42 8.785 3.638 9.522 3.485 9.826 C 3.485 9.826 3.056 13.485 3.25 13.966 C 3.307 14.094 3.379 14.35 3.598 14.647 L 4.115 14.999 L 5.49 14.607 L 6.557 13.421 L 6.743 16.841 L 7.681 17.53 L 7.681 7.848 C 6.613 7.848 5.708 8.176 5.708 8.176 Z" fill="rgb(83,83,122)"></path><path d="M 11.076 2.571 C 11.278 2.947 13.049 6.398 13.049 7.592 L 12.265 9.674 C 12.394 10.851 12.661 13.397 12.459 13.894 C 12.338 14.198 11.869 14.839 11.464 15.351 L 12.014 20.22 L 11.27 20.741 L 10.858 17.177 C 10.801 17.538 10.712 17.922 10.583 18.274 C 10.413 18.731 10.106 19.083 9.718 19.283 C 9.694 20.38 8.651 20.973 7.673 20.973 C 6.686 20.973 5.635 20.38 5.611 19.283 C 5.223 19.075 4.916 18.731 4.746 18.274 C 4.625 17.938 4.536 17.57 4.479 17.225 L 4.083 20.805 L 3.339 20.276 L 3.881 15.359 C 3.476 14.847 2.999 14.198 2.878 13.886 C 2.676 13.389 2.935 10.835 3.064 9.666 L 2.231 7.512 L 2.231 7.447 C 2.231 6.254 4.051 2.947 4.253 2.571 L 4.843 1.522 C 5.199 3.948 5.376 5.165 5.376 5.165 L 5.667 7.135 L 6.047 7.744 C 6.411 7.624 7.034 7.455 7.664 7.455 C 8.295 7.455 8.918 7.624 9.29 7.744 L 9.67 7.135 L 10.494 1.522 Z M 7.689 20.196 C 8.125 20.196 8.74 20.004 8.893 19.5 L 8.845 19.5 C 8.764 19.5 8.683 19.491 8.602 19.483 C 8.376 19.788 8.028 19.876 7.673 19.876 C 7.317 19.876 6.969 19.78 6.751 19.483 C 6.67 19.491 6.597 19.5 6.508 19.5 L 6.46 19.5 C 6.622 20.004 7.244 20.196 7.689 20.196 Z M 7.179 19.363 C 7.317 19.459 7.479 19.516 7.681 19.516 C 7.875 19.516 8.044 19.459 8.182 19.363 C 8.077 19.315 7.98 19.259 7.891 19.203 C 7.81 19.227 7.737 19.227 7.681 19.227 C 7.624 19.227 7.551 19.227 7.47 19.203 C 7.381 19.259 7.284 19.315 7.179 19.363 Z M 10.268 15.584 C 10.801 14.935 11.602 13.902 11.723 13.614 C 11.812 13.317 11.658 11.331 11.472 9.666 L 11.464 9.57 L 11.618 9.153 C 11.101 8.617 10.737 7.88 10.486 7.183 L 10.454 7.399 L 9.637 8.713 L 9.314 8.577 C 9.306 8.577 8.473 8.232 7.681 8.232 C 6.88 8.232 6.064 8.569 6.056 8.577 L 5.732 8.713 L 4.916 7.399 L 4.891 7.231 C 4.641 7.92 4.277 8.649 3.759 9.169 L 3.913 9.562 L 3.905 9.658 C 3.711 11.323 3.565 13.301 3.654 13.614 C 3.768 13.894 4.568 14.935 5.102 15.584 L 5.19 15.688 L 5.19 15.824 C 5.19 15.84 5.19 17.113 5.522 18.002 C 5.765 18.643 6.298 18.715 6.516 18.715 C 7.066 18.715 7.301 18.218 7.309 18.202 C 7.438 17.954 7.503 17.546 7.503 16.985 L 7.834 16.985 C 7.834 17.441 7.907 17.85 8.044 18.21 C 8.053 18.226 8.295 18.723 8.845 18.723 C 9.063 18.723 9.597 18.651 9.839 18.01 C 10.171 17.121 10.171 15.848 10.171 15.832 L 10.171 15.696 Z" fill="rgb(51,49,82)"></path><path d="M 10.171 12.116 L 8.562 12.116 L 8.562 12.132 C 8.562 12.677 9.047 13.117 9.613 13.117 C 10.179 13.117 10.664 12.677 10.664 12.132 L 10.664 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 8.966 12.116 L 8.966 12.132 C 8.966 12.46 9.233 12.717 9.572 12.717 C 9.912 12.717 10.179 12.452 10.179 12.132 L 10.179 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 9.475 12.116 C 9.475 12.116 9.467 12.116 9.475 12.116 C 9.5 12.124 9.524 12.204 9.516 12.252 C 9.508 12.332 9.435 12.388 9.354 12.388 C 9.378 12.492 9.459 12.573 9.581 12.589 C 9.726 12.613 9.864 12.509 9.88 12.372 C 9.896 12.268 9.839 12.116 9.758 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 6.298 12.116 L 4.689 12.116 L 4.689 12.132 C 4.689 12.677 5.174 13.117 5.74 13.117 C 6.306 13.117 6.791 12.677 6.791 12.132 L 6.791 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 5.093 12.116 L 5.093 12.132 C 5.093 12.46 5.36 12.717 5.692 12.717 C 6.023 12.717 6.298 12.452 6.298 12.132 L 6.298 12.116 Z" fill="rgb(255,255,255)"></path><path d="M 5.878 12.116 L 5.587 12.116 C 5.619 12.124 5.643 12.204 5.635 12.252 C 5.627 12.332 5.554 12.388 5.473 12.388 C 5.498 12.492 5.587 12.573 5.7 12.589 C 5.845 12.613 5.983 12.509 5.999 12.372 C 6.015 12.268 5.967 12.116 5.878 12.116 Z" fill="rgb(51,49,82)"></path><path d="M 10.049 11.652 C 10.114 11.58 10.688 10.947 9.92 10.947 C 9.225 10.947 8.732 11.491 8.594 11.652 Z" fill="rgb(196,154,126)"></path><path d="M 6.751 11.652 C 6.622 11.491 6.12 10.947 5.425 10.947 C 4.657 10.947 5.231 11.58 5.296 11.652 Z" fill="rgb(216,183,160)"></path><path d="M 3.064 7.383 C 3.113 6.767 3.776 5.277 4.406 4.028 L 4.576 5.173 C 4.511 5.598 4.22 7.279 3.428 8.336 Z" fill="rgb(216,183,160)"></path><path d="M 10.793 5.085 L 10.947 4.028 C 11.578 5.277 12.24 6.767 12.289 7.383 L 11.933 8.312 C 11.084 7.151 10.818 5.253 10.793 5.085 Z" fill="rgb(196,154,126)"></path><g transform="translate(6.492 16.408)"><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></g></g></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          l(A, {
                                            className: `framer-i3xrxe`,
                                            layoutDependency: C,
                                            layoutId: `q8E4aECKV`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.286 6.334" overflow="visible"><path d="M 11.286 6.334 L 0 6.334 C 0 5.638 1.019 3.524 3.056 0 L 3.905 5.574 L 7.349 5.574 L 8.198 0 C 10.252 3.572 11.286 5.678 11.286 6.334 Z" fill="rgb(255,255,255)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-8u420z`,
                                            layoutDependency: C,
                                            layoutId: `bR9xodkcA`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.345 18.763" overflow="visible"><path d="M 7.673 18.763 L 0 13.445 L 0 1.033 C 0 1.033 2.838 0 7.681 0 C 12.523 0 15.345 1.033 15.345 1.033 L 15.345 13.445 Z" fill="rgb(255,255,255)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1i09i2q`,
                                            layoutDependency: C,
                                            layoutId: `lv77bU1Cb`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.179 17.441" overflow="visible"><path d="M 7.179 17.441 L 0 12.484 L 0 0.961 C 0 0.961 2.684 0 7.179 0 Z" fill="rgb(219,219,219)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1uedwco`,
                                            layoutDependency: C,
                                            layoutId: `YiF_j9ZXQ`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.115 17.425" overflow="visible"><path d="M 0.008 0 L 0 0 L 0 17.425 L 7.115 12.484 L 7.115 0.961 C 7.115 0.961 4.503 0 0.008 0 Z" fill="rgb(198,198,198)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-3syftn`,
                                            layoutDependency: C,
                                            layoutId: `ZpfMGP44a`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.929 7.976" overflow="visible"><path d="M 3.929 5.205 L 3.323 0 L 0 0 L 0 7.928 L 0.049 7.976 C 1.342 7.103 2.636 6.182 3.929 5.205 Z" fill="rgb(59,59,99)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-k2zjie`,
                                            layoutDependency: C,
                                            layoutId: `Ob9Ixpw4Q`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.889 8.128" overflow="visible"><path d="M 0 5.405 L 3.889 8.128 L 3.889 0 L 0.526 0 Z" fill="rgb(83,83,122)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-b5blo0`,
                                            layoutDependency: C,
                                            layoutId: `hjxW8nUQZ`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.307 1.337" overflow="visible"><path d="M 3.307 0 C 3.307 0.897 2.45 1.337 1.665 1.337 C 0.881 1.337 0 0.897 0 0" fill="rgb(188,147,117)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1gyfjiq`,
                                            layoutDependency: C,
                                            layoutId: `LRKoYslmv`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.876 1.377" overflow="visible"><path d="M 0.938 1.377 C 0.307 1.377 0 0.929 0 0 L 0.299 0 C 0.299 1.089 0.728 1.089 0.938 1.089 C 1.148 1.089 1.577 1.089 1.577 0 L 1.876 0 C 1.876 0.929 1.568 1.377 0.938 1.377 Z" fill="rgb(255,255,255)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-8gt3lz`,
                                            layoutDependency: C,
                                            layoutId: `V5wpv_P2x`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.471 5.91" overflow="visible"><path d="M 0.008 5.165 C 0.202 5.662 0.582 5.91 1.132 5.91 C 1.674 5.91 2.248 5.63 2.506 4.941 C 2.87 3.972 2.862 2.627 2.862 2.627 C 2.862 2.627 4.471 0.665 4.471 0 L 0 0 L 0 5.165 Z" fill="rgb(196,154,126)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-13bs8no`,
                                            layoutDependency: C,
                                            layoutId: `tAU4lYoET`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.528 5.91" overflow="visible"><path d="M 0 0 C 0 0.769 1.593 2.627 1.593 2.627 C 1.593 2.627 1.593 3.972 1.948 4.941 C 2.207 5.63 2.773 5.91 3.323 5.91 C 3.881 5.91 4.285 5.662 4.528 5.165 L 4.528 0.008 L 0 0.008 Z" fill="rgb(216,183,160)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1h3aq12`,
                                            layoutDependency: C,
                                            layoutId: `bcLbmUIPK`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.57 12.589" overflow="visible"><path d="M 4.342 3.82 C 3.105 2.579 2.789 0 2.789 0 C 2.555 0.817 2.054 3.211 2.054 3.211 C 2.054 3.211 1.075 2.907 0.024 2.899 C -0.008 2.899 -0.008 6.126 0.024 12.589 L 1.027 11.884 L 1.213 8.464 L 2.28 9.65 L 3.654 10.042 C 3.654 10.042 4.172 9.682 4.172 9.69 C 4.39 9.393 4.463 9.137 4.519 9.009 C 4.713 8.529 4.285 4.869 4.285 4.869 C 4.123 4.549 4.342 3.82 4.342 3.82 Z" fill="rgb(59,59,99)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-op5wgu`,
                                            layoutDependency: C,
                                            layoutId: `KPgGnukvz`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.481 12.565" overflow="visible"><path d="M 2.508 3.211 C 2.508 3.211 2.007 0.817 1.773 0 C 1.773 0 1.465 2.579 0.22 3.82 C 0.22 3.82 0.439 4.557 0.285 4.861 C 0.285 4.861 -0.144 8.521 0.05 9.001 C 0.107 9.129 0.18 9.385 0.398 9.682 L 0.916 10.034 L 2.29 9.642 L 3.357 8.456 L 3.543 11.876 L 4.481 12.565 L 4.481 2.883 C 3.414 2.883 2.508 3.211 2.508 3.211 Z" fill="rgb(83,83,122)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          m(A, {
                                            className: `framer-xwqmuy`,
                                            layoutDependency: C,
                                            layoutId: `twhzCmmiW`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.818 19.451" overflow="visible"><path d="M 8.845 1.049 C 9.047 1.425 10.818 4.877 10.818 6.07 L 10.033 8.152 C 10.163 9.329 10.429 11.876 10.227 12.372 C 10.106 12.677 9.637 13.317 9.233 13.83 L 9.783 18.699 L 9.039 19.219 L 8.627 15.656 C 8.57 16.016 8.481 16.4 8.352 16.753 C 8.182 17.209 7.875 17.562 7.487 17.762 C 7.462 18.859 6.419 19.451 5.441 19.451 C 4.455 19.451 3.404 18.859 3.379 17.762 C 2.991 17.554 2.684 17.209 2.514 16.753 C 2.393 16.416 2.304 16.048 2.248 15.704 L 1.851 19.283 L 1.108 18.755 L 1.649 13.838 C 1.245 13.325 0.768 12.677 0.647 12.364 C 0.445 11.868 0.703 9.313 0.833 8.144 L 0 5.99 L 0 5.926 C 0 4.733 1.819 1.425 2.021 1.049 L 2.611 0 C 2.967 2.426 3.145 3.644 3.145 3.644 L 3.436 5.614 L 3.816 6.222 C 4.18 6.102 4.802 5.934 5.433 5.934 C 6.064 5.934 6.686 6.102 7.058 6.222 L 7.438 5.614 L 8.263 0 Z M 5.457 18.675 C 5.894 18.675 6.508 18.482 6.662 17.978 L 6.613 17.978 C 6.533 17.978 6.452 17.97 6.371 17.962 C 6.144 18.266 5.797 18.354 5.441 18.354 C 5.085 18.354 4.738 18.258 4.519 17.962 C 4.439 17.97 4.366 17.978 4.277 17.978 L 4.228 17.978 C 4.39 18.482 5.013 18.675 5.457 18.675 Z M 4.948 17.842 C 5.085 17.938 5.247 17.994 5.449 17.994 C 5.643 17.994 5.813 17.938 5.95 17.842 C 5.845 17.794 5.748 17.738 5.659 17.682 C 5.579 17.706 5.506 17.706 5.449 17.706 C 5.393 17.706 5.32 17.706 5.239 17.682 C 5.15 17.738 5.053 17.794 4.948 17.842 Z M 8.036 14.062 C 8.57 13.413 9.37 12.38 9.492 12.092 C 9.581 11.796 9.427 9.81 9.241 8.144 L 9.233 8.048 L 9.387 7.632 C 8.869 7.095 8.505 6.358 8.255 5.662 L 8.222 5.878 L 7.406 7.191 L 7.082 7.055 C 7.074 7.055 6.242 6.711 5.449 6.711 C 4.649 6.711 3.832 7.047 3.824 7.055 L 3.501 7.191 L 2.684 5.878 L 2.66 5.71 C 2.409 6.398 2.045 7.127 1.528 7.648 L 1.682 8.04 L 1.674 8.136 C 1.48 9.802 1.334 11.78 1.423 12.092 C 1.536 12.372 2.337 13.413 2.87 14.062 L 2.959 14.166 L 2.959 14.302 C 2.959 14.318 2.959 15.592 3.291 16.48 C 3.533 17.121 4.067 17.193 4.285 17.193 C 4.835 17.193 5.069 16.697 5.077 16.681 C 5.207 16.432 5.271 16.024 5.271 15.463 L 5.603 15.463 C 5.603 15.92 5.676 16.328 5.813 16.689 C 5.821 16.705 6.064 17.201 6.613 17.201 C 6.832 17.201 7.365 17.129 7.608 16.488 C 7.939 15.6 7.939 14.326 7.939 14.31 L 7.939 14.174 Z" fill="rgb(51,49,82)"></path></svg>`,
                                            withExternalLayout: !0,
                                            children: [
                                              l(A, {
                                                className: `framer-mr5q3y`,
                                                layoutDependency: C,
                                                layoutId: `Uofs9QaZe`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.818 19.451" overflow="visible"><path d="M 8.845 1.049 C 9.047 1.425 10.818 4.877 10.818 6.07 L 10.033 8.152 C 10.163 9.329 10.429 11.876 10.227 12.372 C 10.106 12.677 9.637 13.317 9.233 13.83 L 9.783 18.699 L 9.039 19.219 L 8.627 15.656 C 8.57 16.016 8.481 16.4 8.352 16.753 C 8.182 17.209 7.875 17.562 7.487 17.762 C 7.462 18.859 6.419 19.451 5.441 19.451 C 4.455 19.451 3.404 18.859 3.379 17.762 C 2.991 17.554 2.684 17.209 2.514 16.753 C 2.393 16.416 2.304 16.048 2.248 15.704 L 1.851 19.283 L 1.108 18.755 L 1.649 13.838 C 1.245 13.325 0.768 12.677 0.647 12.364 C 0.445 11.868 0.703 9.313 0.833 8.144 L 0 5.99 L 0 5.926 C 0 4.733 1.819 1.425 2.021 1.049 L 2.611 0 C 2.967 2.426 3.145 3.644 3.145 3.644 L 3.436 5.614 L 3.816 6.222 C 4.18 6.102 4.802 5.934 5.433 5.934 C 6.064 5.934 6.686 6.102 7.058 6.222 L 7.438 5.614 L 8.263 0 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              l(A, {
                                                className: `framer-12pzmh5`,
                                                layoutDependency: C,
                                                layoutId: `UEmnTp92z`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.434 1" overflow="visible"><path d="M 1.229 0.713 C 1.665 0.713 2.28 0.521 2.434 0.016 L 2.385 0.016 C 2.304 0.016 2.223 0.008 2.142 0 C 1.916 0.304 1.568 0.392 1.213 0.392 C 0.857 0.392 0.509 0.296 0.291 0 C 0.21 0.008 0.137 0.016 0.049 0.016 L 0 0.016 C 0.162 0.521 0.784 0.713 1.229 0.713 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              l(A, {
                                                className: `framer-1vtg2a7`,
                                                layoutDependency: C,
                                                layoutId: `UvIarmXRX`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.003 1" overflow="visible"><path d="M 0 0.16 C 0.137 0.256 0.299 0.312 0.501 0.312 C 0.695 0.312 0.865 0.256 1.003 0.16 C 0.897 0.112 0.8 0.056 0.711 0 C 0.631 0.024 0.558 0.024 0.501 0.024 C 0.445 0.024 0.372 0.024 0.291 0 C 0.202 0.056 0.105 0.112 0 0.16 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                              l(A, {
                                                className: `framer-1hblzc8`,
                                                layoutDependency: C,
                                                layoutId: `tiZiRk3Ap`,
                                                requiresOverflowVisible: !1,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.121 11.54" overflow="visible"><path d="M 6.64 8.4 C 7.174 7.752 7.974 6.719 8.095 6.43 C 8.184 6.134 8.031 4.148 7.845 2.482 L 7.837 2.386 L 7.99 1.97 C 7.473 1.433 7.109 0.697 6.858 0 L 6.826 0.216 L 6.01 1.53 L 5.686 1.393 C 5.678 1.393 4.845 1.049 4.053 1.049 C 3.253 1.049 2.436 1.385 2.428 1.393 L 2.105 1.53 L 1.288 0.216 L 1.264 0.048 C 1.013 0.737 0.649 1.465 0.132 1.986 L 0.285 2.378 L 0.277 2.474 C 0.083 4.14 -0.062 6.118 0.027 6.43 C 0.14 6.711 0.94 7.752 1.474 8.4 L 1.563 8.505 L 1.563 8.641 C 1.563 8.657 1.563 9.93 1.894 10.819 C 2.137 11.459 2.67 11.532 2.889 11.532 C 3.439 11.532 3.673 11.035 3.681 11.019 C 3.81 10.771 3.875 10.362 3.875 9.802 L 4.207 9.802 C 4.207 10.258 4.279 10.667 4.417 11.027 C 4.425 11.043 4.667 11.54 5.217 11.54 C 5.436 11.54 5.969 11.467 6.212 10.827 C 6.543 9.938 6.543 8.665 6.543 8.649 L 6.543 8.513 Z" fill="transparent"></path></svg>`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          l(A, {
                                            className: `framer-1lkxtk6`,
                                            layoutDependency: C,
                                            layoutId: `oHs28OHGs`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.102 1.001" overflow="visible"><path d="M 1.609 0 L 0 0 L 0 0.016 C 0 0.561 0.485 1.001 1.051 1.001 C 1.617 1.001 2.102 0.561 2.102 0.016 L 2.102 0 Z" fill="rgb(51,49,82)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1m7t4nv`,
                                            layoutDependency: C,
                                            layoutId: `Ar2q2BwbL`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.213 1" overflow="visible"><path d="M 0 0 L 0 0.016 C 0 0.344 0.267 0.601 0.606 0.601 C 0.946 0.601 1.213 0.336 1.213 0.016 L 1.213 0 Z" fill="rgb(255,255,255)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-l5a505`,
                                            layoutDependency: C,
                                            layoutId: `fBbxMvU4I`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.121 0 C 0.121 0 0.113 0 0.121 0 C 0.146 0.008 0.17 0.088 0.162 0.136 C 0.154 0.216 0.081 0.272 0 0.272 C 0.024 0.376 0.105 0.456 0.226 0.472 C 0.372 0.496 0.509 0.392 0.526 0.256 C 0.542 0.152 0.485 0 0.404 0 Z" fill="rgb(51,49,82)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-t3vrw8`,
                                            layoutDependency: C,
                                            layoutId: `p4JmXeQSJ`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.102 1.001" overflow="visible"><path d="M 1.609 0 L 0 0 L 0 0.016 C 0 0.561 0.485 1.001 1.051 1.001 C 1.617 1.001 2.102 0.561 2.102 0.016 L 2.102 0 Z" fill="rgb(51,49,82)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-19vu6ut`,
                                            layoutDependency: C,
                                            layoutId: `Y_FKHDeGN`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.205 1" overflow="visible"><path d="M 0 0 L 0 0.016 C 0 0.344 0.267 0.601 0.598 0.601 C 0.93 0.601 1.205 0.336 1.205 0.016 L 1.205 0 Z" fill="rgb(255,255,255)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1uqfyt9`,
                                            layoutDependency: C,
                                            layoutId: `Kw2L37fYw`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.404 0 L 0.113 0 C 0.146 0.008 0.17 0.088 0.162 0.136 C 0.154 0.216 0.081 0.272 0 0.272 C 0.024 0.376 0.113 0.456 0.226 0.472 C 0.372 0.496 0.509 0.392 0.526 0.256 C 0.542 0.152 0.493 0 0.404 0 Z" fill="rgb(51,49,82)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-n6h1x5`,
                                            layoutDependency: C,
                                            layoutId: `st3nIyBvA`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.722 1" overflow="visible"><path d="M 1.455 0.705 C 1.52 0.633 2.094 0 1.326 0 C 0.631 0 0.137 0.545 0 0.705 Z" fill="rgb(196,154,126)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1w3ucpf`,
                                            layoutDependency: C,
                                            layoutId: `K8LFxOAGc`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.722 1" overflow="visible"><path d="M 1.722 0.705 C 1.593 0.545 1.091 0 0.396 0 C -0.372 0 0.202 0.633 0.267 0.705 Z" fill="rgb(216,183,160)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-jir4qs`,
                                            layoutDependency: C,
                                            layoutId: `JAPcN8E8c`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.512 4.308" overflow="visible"><path d="M 0 3.355 C 0.049 2.739 0.711 1.249 1.342 0 L 1.512 1.145 C 1.447 1.57 1.156 3.251 0.364 4.308 Z" fill="rgb(216,183,160)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-4z856d`,
                                            layoutDependency: C,
                                            layoutId: `wgvOd2GUq`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.496 4.284" overflow="visible"><path d="M 0 1.057 L 0.154 0 C 0.784 1.249 1.447 2.739 1.496 3.355 L 1.14 4.284 C 0.291 3.123 0.024 1.225 0 1.057 Z" fill="rgb(196,154,126)"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-12p9gsa`,
                                            layoutDependency: C,
                                            layoutId: `DcJJMWpJE`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.385 1.65" overflow="visible"><g><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></g></svg>`,
                                            withExternalLayout: !0,
                                            children: l(A, {
                                              className: `framer-qq6doe`,
                                              layoutDependency: C,
                                              layoutId: `vS6C2PBxW`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.385 1.65" overflow="visible"><path d="M 0.598 1.273 C 0.299 1.057 0 0.777 0 0.569 C 0 0.432 0.251 0 0.251 0 L 2.134 0 C 2.134 0 2.385 0.384 2.385 0.569 C 2.385 0.769 2.078 1.033 1.771 1.257 C 1.665 1.081 1.536 1.049 1.471 1.193 C 1.439 1.265 1.431 1.369 1.447 1.473 C 1.277 1.578 1.156 1.65 1.156 1.65 C 1.156 1.65 1.059 1.594 0.93 1.514 C 0.954 1.393 0.946 1.281 0.914 1.201 C 0.849 1.065 0.72 1.097 0.614 1.273 C 0.598 1.257 0.598 1.265 0.598 1.273 Z" fill="rgb(51,49,82)"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-x0abnc`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `s_uhMR0dw`,
                            children: [
                              l(b.div, {
                                className: `framer-halaya`,
                                layoutDependency: C,
                                layoutId: `LlLSB_bZi`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-1atwrsc`,
                                layoutDependency: C,
                                layoutId: `HH07WlcjP`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 115.969 23.99" overflow="visible"><g><path d="M 113.078 5.026 L 110.461 12.511 C 109.985 13.854 109.747 14.622 109.307 15.918 L 109.259 15.918 C 108.914 14.802 108.605 13.902 108.153 12.583 L 105.607 5.014 L 102.561 5.014 L 107.831 18.904 C 107.713 19.204 107.594 19.516 107.463 19.84 C 107.023 20.92 105.976 21.627 104.822 21.627 L 103.513 21.627 L 103.513 23.99 L 104.857 23.99 C 107.034 23.99 108.997 22.659 109.806 20.608 C 111.484 16.373 114.339 9.164 115.969 5.026 Z" fill="rgb(6,172,56)"></path><path d="M 39.997 16.241 C 39.997 21.267 37.712 23.99 33.097 23.99 C 29.658 23.99 27.588 22.167 26.851 19.42 L 29.635 19.42 C 30.11 20.692 31.098 21.831 33.144 21.831 C 36.297 21.831 37.415 19.852 37.415 16.086 C 37.391 16.086 37.391 16.062 37.367 16.062 C 36.689 17.249 35.167 18.305 32.752 18.305 C 28.873 18.305 26.399 15.474 26.399 11.503 C 26.399 7.377 29.075 4.594 32.775 4.594 C 35.167 4.594 36.606 5.626 37.391 6.765 C 37.367 6.477 37.367 6.178 37.367 5.89 L 37.367 5.014 L 39.997 5.014 Z M 29.29 11.479 C 29.29 14.178 30.789 16.11 33.358 16.11 C 35.666 16.11 37.451 14.466 37.451 11.395 C 37.451 8.673 35.88 6.849 33.358 6.849 C 30.836 6.849 29.29 8.673 29.29 11.479 Z" fill="rgb(6,172,56)"></path><path d="M 44.339 12.667 C 44.446 15.102 45.993 17.033 48.669 17.033 C 50.561 17.033 51.477 16.134 52.179 14.946 L 54.832 14.946 C 54.047 17.453 51.87 19.252 48.562 19.252 C 44.315 19.252 41.662 16.373 41.662 12.031 C 41.662 7.689 44.422 4.63 48.562 4.63 C 53.047 4.63 55.117 8.073 55.117 11.803 L 55.117 12.679 L 44.339 12.679 Z M 52.357 10.556 C 52.119 8.361 50.751 6.801 48.503 6.801 C 46.349 6.801 44.696 8.229 44.434 10.556 Z" fill="rgb(6,172,56)"></path><path d="M 59.364 5.026 L 59.364 6.801 C 59.805 5.506 61.149 4.69 62.695 4.69 C 63.041 4.69 63.195 4.714 63.374 4.738 L 63.374 7.173 C 63.136 7.125 62.743 7.089 62.458 7.089 C 59.971 7.089 59.495 8.936 59.495 11.719 L 59.495 18.916 L 56.842 18.916 L 56.842 7.521 C 56.842 6.645 56.842 5.878 56.819 5.038 L 59.364 5.038 Z" fill="rgb(6,172,56)"></path><path d="M 90.617 16.925 C 89.903 18.113 88.571 19.252 86.239 19.252 C 83.039 19.252 81.468 17.273 81.468 13.675 L 81.468 5.026 L 84.11 5.026 L 84.11 12.667 C 84.11 15.39 85.002 17.033 87.155 17.033 C 89.986 17.033 90.486 14.442 90.486 11.395 L 90.486 5.026 L 93.139 5.026 L 93.139 16.817 C 93.139 17.537 93.139 18.221 93.163 18.904 L 90.617 18.904 Z" fill="rgb(6,172,56)"></path><path d="M 99.099 5.026 L 101.669 5.026 L 101.669 7.089 L 99.099 7.089 L 99.099 15.426 C 99.099 16.745 99.754 17.141 100.777 17.141 C 100.955 17.141 101.276 17.117 101.431 17.093 L 101.431 19.072 C 101.038 19.12 100.753 19.18 100.408 19.18 C 97.969 19.18 96.423 18.365 96.423 15.582 L 96.423 7.089 L 94.353 7.089 L 94.353 5.026 L 96.423 5.026 L 96.423 1.271 L 99.099 1.271 Z" fill="rgb(6,172,56)"></path><g><path d="M 0 13.866 L 2.748 13.866 L 2.748 18.904 L 0 18.904 Z" fill="rgb(6,172,56)"></path><path d="M 10.35 0.924 C 8.875 0.132 7.852 0 5.437 0 L 0 0 L 0 11.467 L 5.413 11.467 C 7.566 11.467 9.172 11.335 10.588 10.388 C 12.135 9.356 12.932 7.641 12.932 5.662 C 12.932 3.515 11.944 1.799 10.35 0.924 Z M 6.044 9.068 L 2.748 9.068 L 2.748 2.459 L 5.853 2.435 C 8.685 2.399 10.1 3.407 10.1 5.686 C 10.1 8.133 8.351 9.068 6.044 9.068 Z" fill="rgb(6,172,56)"></path></g><path d="M 64.992 0 L 69.584 0 C 76.46 0.048 79.767 3.431 79.791 9.5 C 79.815 14.67 77.162 18.844 70.036 18.916 L 65.003 18.916 L 65.003 0 Z M 67.775 16.553 L 69.381 16.553 C 74.366 16.553 76.972 14.634 76.972 9.488 C 76.96 4.966 74.378 2.375 69.643 2.375 C 68.727 2.375 67.775 2.399 67.775 2.399 Z" fill="rgb(6,172,56)"></path><path d="M 22.568 18.916 C 22.485 18.365 22.485 18.017 22.437 17.009 C 21.39 18.521 19.998 19.18 17.797 19.18 C 14.907 19.18 12.813 17.753 12.813 15.162 C 12.813 12.175 15.644 11.192 19.32 10.688 C 20.236 10.556 21.259 10.448 22.152 10.376 C 22.152 7.629 20.641 6.801 19.058 6.801 C 17.476 6.801 16.322 7.917 16.322 9.38 L 13.753 9.38 C 13.753 6.561 15.953 4.666 19.118 4.666 C 22.282 4.666 24.721 5.986 24.721 11.072 L 24.721 13.77 C 24.721 16.014 24.828 17.657 25.066 18.928 L 22.568 18.928 Z M 15.668 15.126 C 15.668 16.421 16.715 17.237 18.392 17.237 C 20.855 17.237 22.175 15.726 22.175 13.027 C 22.175 12.679 22.175 12.439 22.199 12.283 C 17.714 12.751 15.668 13.195 15.668 15.126 Z" fill="rgb(6,172,56)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  l(A, {
                                    className: `framer-1893jm6`,
                                    layoutDependency: C,
                                    layoutId: `Ui94LtDzS`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.408 18.976" overflow="visible"><path d="M 10.517 0.012 L 7.899 7.497 C 7.424 8.84 7.186 9.608 6.745 10.904 L 6.698 10.904 C 6.353 9.788 6.044 8.888 5.591 7.569 L 3.046 0 L 0 0 L 5.27 13.89 C 5.151 14.19 5.032 14.502 4.901 14.826 C 4.461 15.906 3.414 16.613 2.26 16.613 L 0.952 16.613 L 0.952 18.976 L 2.296 18.976 C 4.473 18.976 6.436 17.645 7.245 15.594 C 8.923 11.359 11.778 4.15 13.408 0.012 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1v577fi`,
                                    layoutDependency: C,
                                    layoutId: `BdLNrj453`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.598 19.396" overflow="visible"><path d="M 13.598 11.647 C 13.598 16.673 11.314 19.396 6.698 19.396 C 3.26 19.396 1.19 17.573 0.452 14.826 L 3.236 14.826 C 3.712 16.098 4.699 17.237 6.745 17.237 C 9.898 17.237 11.016 15.258 11.016 11.491 C 10.993 11.491 10.993 11.467 10.969 11.467 C 10.291 12.655 8.768 13.71 6.353 13.71 C 2.475 13.71 0 10.88 0 6.909 C 0 2.783 2.677 0 6.377 0 C 8.768 0 10.207 1.032 10.993 2.171 C 10.969 1.883 10.969 1.583 10.969 1.295 L 10.969 0.42 L 13.598 0.42 Z M 2.891 6.885 C 2.891 9.584 4.39 11.515 6.96 11.515 C 9.268 11.515 11.052 9.872 11.052 6.801 C 11.052 4.078 9.482 2.255 6.96 2.255 C 4.437 2.255 2.891 4.078 2.891 6.885 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-16k04g9`,
                                        layoutDependency: C,
                                        layoutId: `SyOvaqms_`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.598 19.396" overflow="visible"><path d="M 13.598 11.647 C 13.598 16.673 11.314 19.396 6.698 19.396 C 3.26 19.396 1.19 17.573 0.452 14.826 L 3.236 14.826 C 3.712 16.098 4.699 17.237 6.745 17.237 C 9.898 17.237 11.016 15.258 11.016 11.491 C 10.993 11.491 10.993 11.467 10.969 11.467 C 10.291 12.655 8.768 13.71 6.353 13.71 C 2.475 13.71 0 10.88 0 6.909 C 0 2.783 2.677 0 6.377 0 C 8.768 0 10.207 1.032 10.993 2.171 C 10.969 1.883 10.969 1.583 10.969 1.295 L 10.969 0.42 L 13.598 0.42 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-zr1yrg`,
                                        layoutDependency: C,
                                        layoutId: `XCpjbOmS_`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.161 9.26" overflow="visible"><path d="M 0 4.63 C 0 7.329 1.499 9.26 4.069 9.26 C 6.377 9.26 8.161 7.617 8.161 4.546 C 8.161 1.823 6.591 0 4.069 0 C 1.547 0 0 1.823 0 4.63 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  m(A, {
                                    className: `framer-rr0b2p`,
                                    layoutDependency: C,
                                    layoutId: `pfyWj33ln`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.455 14.622" overflow="visible"><path d="M 2.677 8.037 C 2.784 10.472 4.33 12.403 7.007 12.403 C 8.899 12.403 9.815 11.503 10.517 10.316 L 13.17 10.316 C 12.384 12.823 10.207 14.622 6.9 14.622 C 2.653 14.622 0 11.743 0 7.401 C 0 3.059 2.76 0 6.9 0 C 11.385 0 13.455 3.443 13.455 7.173 L 13.455 8.049 L 2.677 8.049 Z M 10.695 5.926 C 10.457 3.73 9.089 2.171 6.841 2.171 C 4.687 2.171 3.034 3.599 2.772 5.926 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-vg3boj`,
                                        layoutDependency: C,
                                        layoutId: `fwp0Zl0gi`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.455 14.622" overflow="visible"><path d="M 2.677 8.037 C 2.784 10.472 4.33 12.403 7.007 12.403 C 8.899 12.403 9.815 11.503 10.517 10.316 L 13.17 10.316 C 12.384 12.823 10.207 14.622 6.9 14.622 C 2.653 14.622 0 11.743 0 7.401 C 0 3.059 2.76 0 6.9 0 C 11.385 0 13.455 3.443 13.455 7.173 L 13.455 8.049 L 2.677 8.049 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1kkbuiq`,
                                        layoutDependency: C,
                                        layoutId: `PuciChU2A`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.923 3.754" overflow="visible"><path d="M 7.923 3.754 C 7.685 1.559 6.317 0 4.069 0 C 1.915 0 0.262 1.427 0 3.754 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(A, {
                                    className: `framer-1yjm8dd`,
                                    layoutDependency: C,
                                    layoutId: `D8lIHd9nT`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.555 14.226" overflow="visible"><path d="M 2.546 0.336 L 2.546 2.111 C 2.986 0.816 4.33 0 5.877 0 C 6.222 0 6.377 0.024 6.555 0.048 L 6.555 2.483 C 6.317 2.435 5.925 2.399 5.639 2.399 C 3.153 2.399 2.677 4.246 2.677 7.029 L 2.677 14.226 L 0.024 14.226 L 0.024 2.831 C 0.024 1.955 0.024 1.188 0 0.348 L 2.546 0.348 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-p6ot8`,
                                    layoutDependency: C,
                                    layoutId: `x9NT9L_4t`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.694 14.226" overflow="visible"><path d="M 9.149 11.899 C 8.435 13.087 7.102 14.226 4.771 14.226 C 1.57 14.226 0 12.247 0 8.649 L 0 0 L 2.641 0 L 2.641 7.641 C 2.641 10.364 3.533 12.007 5.687 12.007 C 8.518 12.007 9.018 9.416 9.018 6.369 L 9.018 0 L 11.671 0 L 11.671 11.791 C 11.671 12.511 11.671 13.195 11.694 13.878 L 9.149 13.878 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-i4qtpq`,
                                    layoutDependency: C,
                                    layoutId: `NvDZCSY29`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.316 17.909" overflow="visible"><path d="M 4.747 3.754 L 7.316 3.754 L 7.316 5.818 L 4.747 5.818 L 4.747 14.154 C 4.747 15.474 5.401 15.87 6.424 15.87 C 6.603 15.87 6.924 15.846 7.079 15.822 L 7.079 17.801 C 6.686 17.849 6.4 17.909 6.055 17.909 C 3.617 17.909 2.07 17.093 2.07 14.31 L 2.07 5.818 L 0 5.818 L 0 3.754 L 2.07 3.754 L 2.07 0 L 4.747 0 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1313mfo`,
                                    layoutDependency: C,
                                    layoutId: `Km6vPPXeh`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.932 18.904" overflow="visible"><g><path d="M 0 13.866 L 2.748 13.866 L 2.748 18.904 L 0 18.904 Z" fill="rgb(6,172,56)"></path><path d="M 10.35 0.924 C 8.875 0.132 7.852 0 5.437 0 L 0 0 L 0 11.467 L 5.413 11.467 C 7.566 11.467 9.172 11.335 10.588 10.388 C 12.135 9.356 12.932 7.641 12.932 5.662 C 12.932 3.515 11.944 1.799 10.35 0.924 Z M 6.044 9.068 L 2.748 9.068 L 2.748 2.459 L 5.853 2.435 C 8.685 2.399 10.1 3.407 10.1 5.686 C 10.1 8.133 8.351 9.068 6.044 9.068 Z" fill="rgb(6,172,56)"></path></g></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-qmnfjf`,
                                        layoutDependency: C,
                                        layoutId: `LvMX34Sw7`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.748 5.038" overflow="visible"><path d="M 0 0 L 2.748 0 L 2.748 5.038 L 0 5.038 Z" fill="rgb(6,172,56)"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      m(A, {
                                        className: `framer-1qjeshf`,
                                        layoutDependency: C,
                                        layoutId: `x8Z4N5XP5`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.932 11.467" overflow="visible"><path d="M 10.35 0.924 C 8.875 0.132 7.852 0 5.437 0 L 0 0 L 0 11.467 L 5.413 11.467 C 7.566 11.467 9.172 11.335 10.588 10.388 C 12.135 9.356 12.932 7.641 12.932 5.662 C 12.932 3.515 11.944 1.799 10.35 0.924 Z M 6.044 9.068 L 2.748 9.068 L 2.748 2.459 L 5.853 2.435 C 8.685 2.399 10.1 3.407 10.1 5.686 C 10.1 8.133 8.351 9.068 6.044 9.068 Z" fill="rgb(6,172,56)"></path></svg>`,
                                        withExternalLayout: !0,
                                        children: [
                                          l(A, {
                                            className: `framer-1cxfcer`,
                                            layoutDependency: C,
                                            layoutId: `qWvlKviyp`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.932 11.467" overflow="visible"><path d="M 10.35 0.924 C 8.875 0.132 7.852 0 5.437 0 L 0 0 L 0 11.467 L 5.413 11.467 C 7.566 11.467 9.172 11.335 10.588 10.388 C 12.135 9.356 12.932 7.641 12.932 5.662 C 12.932 3.515 11.944 1.799 10.35 0.924 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                          l(A, {
                                            className: `framer-1hd2rcn`,
                                            layoutDependency: C,
                                            layoutId: `QwgqHd6LL`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.352 6.634" overflow="visible"><path d="M 3.295 6.634 L 0 6.634 L 0 0.025 L 3.105 0.001 C 5.936 -0.035 7.352 0.973 7.352 3.252 C 7.352 5.699 5.603 6.634 3.295 6.634 Z" fill="transparent"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m(A, {
                                    className: `framer-ez8jib`,
                                    layoutDependency: C,
                                    layoutId: `QNyZPsq8e`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.8 18.916" overflow="visible"><path d="M 0 0 L 4.592 0 C 11.468 0.048 14.776 3.431 14.799 9.5 C 14.823 14.67 12.17 18.844 5.044 18.916 L 0.012 18.916 L 0.012 0 Z M 2.784 16.553 L 4.39 16.553 C 9.375 16.553 11.98 14.634 11.98 9.488 C 11.968 4.966 9.386 2.375 4.652 2.375 C 3.736 2.375 2.784 2.399 2.784 2.399 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-1soicvi`,
                                        layoutDependency: C,
                                        layoutId: `miwnuiEv4`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.8 18.916" overflow="visible"><path d="M 0 0 L 4.592 0 C 11.468 0.048 14.776 3.431 14.799 9.5 C 14.823 14.67 12.17 18.844 5.044 18.916 L 0.012 18.916 L 0.012 0 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-o2dqoa`,
                                        layoutDependency: C,
                                        layoutId: `w8y8KUiLa`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.196 14.178" overflow="visible"><path d="M 0 14.178 L 1.606 14.178 C 6.591 14.178 9.196 12.259 9.196 7.113 C 9.184 2.591 6.603 0 1.868 0 C 0.952 0 0 0.024 0 0.024 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  m(A, {
                                    className: `framer-1ap7nwl`,
                                    layoutDependency: C,
                                    layoutId: `GfDhADtUg`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.254 14.514" overflow="visible"><path d="M 9.755 14.25 C 9.672 13.698 9.672 13.351 9.624 12.343 C 8.578 13.854 7.186 14.514 4.985 14.514 C 2.094 14.514 0 13.087 0 10.496 C 0 7.509 2.831 6.525 6.507 6.022 C 7.424 5.89 8.447 5.782 9.339 5.71 C 9.339 2.963 7.828 2.135 6.246 2.135 C 4.663 2.135 3.51 3.251 3.51 4.714 L 0.94 4.714 C 0.94 1.895 3.141 0 6.305 0 C 9.47 0 11.909 1.319 11.909 6.405 L 11.909 9.104 C 11.909 11.347 12.016 12.991 12.254 14.262 L 9.755 14.262 Z M 2.855 10.46 C 2.855 11.755 3.902 12.571 5.58 12.571 C 8.042 12.571 9.363 11.06 9.363 8.361 C 9.363 8.013 9.363 7.773 9.386 7.617 C 4.901 8.085 2.855 8.529 2.855 10.46 Z" fill="rgb(6,172,56)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-1pxi6o0`,
                                        layoutDependency: C,
                                        layoutId: `gwmDUydoe`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.254 14.514" overflow="visible"><path d="M 9.755 14.25 C 9.672 13.698 9.672 13.351 9.624 12.343 C 8.578 13.854 7.186 14.514 4.985 14.514 C 2.094 14.514 0 13.087 0 10.496 C 0 7.509 2.831 6.525 6.507 6.022 C 7.424 5.89 8.447 5.782 9.339 5.71 C 9.339 2.963 7.828 2.135 6.246 2.135 C 4.663 2.135 3.51 3.251 3.51 4.714 L 0.94 4.714 C 0.94 1.895 3.141 0 6.305 0 C 9.47 0 11.909 1.319 11.909 6.405 L 11.909 9.104 C 11.909 11.347 12.016 12.991 12.254 14.262 L 9.755 14.262 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-r6vcj`,
                                        layoutDependency: C,
                                        layoutId: `mRhqOhlJX`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.531 4.954" overflow="visible"><path d="M 0 2.843 C 0 4.138 1.047 4.954 2.724 4.954 C 5.187 4.954 6.507 3.443 6.507 0.744 C 6.507 0.396 6.507 0.156 6.531 0 C 2.046 0.468 0 0.912 0 2.843 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-y0t5s2`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `TNPnGDu77`,
                            children: [
                              l(b.div, {
                                className: `framer-1gmqpaq`,
                                layoutDependency: C,
                                layoutId: `CnXbR8UxL`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-i6ne8i`,
                                layoutDependency: C,
                                layoutId: `Q9IdBXyCR`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88 24" overflow="visible"><g><path d="M 0 0 L 88 0 L 88 24 L 0 24 Z" fill="transparent"></path><path d="M 28.17 12.964 C 28.17 9.94 30.295 7.758 33.24 7.758 C 35.449 7.758 37.394 9.25 37.88 11.293 L 36.644 11.459 C 36.283 9.954 34.852 8.863 33.24 8.863 C 31.018 8.863 29.434 10.588 29.434 12.964 C 29.434 15.352 31.031 17.078 33.24 17.078 C 34.824 17.078 36.254 16.015 36.657 14.58 L 37.866 14.814 C 37.38 16.761 35.435 18.183 33.24 18.183 C 30.295 18.183 28.156 15.988 28.17 12.964 Z M 39.153 12.964 C 39.153 9.926 41.348 7.758 44.445 7.758 C 47.543 7.758 49.738 9.926 49.738 12.964 C 49.738 16.028 47.543 18.183 44.445 18.183 C 41.348 18.183 39.153 16.028 39.153 12.964 Z M 48.46 12.964 C 48.46 10.575 46.793 8.863 44.445 8.863 C 42.099 8.863 40.417 10.575 40.417 12.964 C 40.417 15.352 42.098 17.078 44.445 17.078 C 46.793 17.078 48.46 15.352 48.46 12.964 Z M 50.346 17.258 L 56.097 9.347 L 56.097 9.208 L 50.484 9.208 L 50.484 8.103 L 57.958 8.103 L 57.958 8.669 L 52.207 16.595 L 52.207 16.733 L 58.097 16.733 L 58.097 17.837 L 50.346 17.837 Z M 59.716 8.103 L 66.439 8.103 L 66.439 9.208 L 60.994 9.208 L 60.994 12.245 L 65.884 12.245 L 65.884 13.35 L 60.995 13.35 L 60.995 16.733 L 66.578 16.733 L 66.578 17.837 L 59.716 17.837 L 59.716 8.104 Z M 68.329 8.103 L 72.594 8.103 C 74.719 8.103 76.123 9.263 76.123 11.059 C 76.123 12.716 74.816 13.875 72.997 13.957 L 72.83 13.957 L 76.386 17.837 L 74.789 17.837 L 71.399 14.027 L 69.594 14.027 L 69.594 17.837 L 68.33 17.837 L 68.33 8.104 Z M 72.594 12.923 C 73.997 12.923 74.859 12.204 74.859 11.059 C 74.859 9.926 73.996 9.208 72.594 9.208 L 69.594 9.208 L 69.594 12.923 Z M 77.415 12.964 C 77.415 9.926 79.611 7.758 82.708 7.758 C 85.805 7.758 88 9.926 88 12.964 C 88 16.028 85.805 18.183 82.708 18.183 C 79.61 18.183 77.415 16.028 77.415 12.964 Z M 86.722 12.964 C 86.722 10.575 85.055 8.863 82.708 8.863 C 80.361 8.863 78.679 10.575 78.679 12.964 C 78.679 15.352 80.36 17.078 82.708 17.078 C 85.055 17.078 86.722 15.352 86.722 12.964 Z" fill="rgb(248,250,248)"></path><path d="M 15.276 0.468 L 13.842 7.86 C 13.839 7.873 13.831 7.885 13.819 7.892 C 13.807 7.899 13.793 7.902 13.78 7.899 C 13.606 7.855 13.429 7.822 13.252 7.798 C 13.237 7.797 13.225 7.789 13.216 7.778 C 13.208 7.766 13.205 7.752 13.207 7.739 L 14.651 0.302 C 14.653 0.288 14.662 0.276 14.674 0.268 C 14.686 0.261 14.701 0.259 14.715 0.262 C 14.892 0.307 15.068 0.354 15.24 0.407 C 15.265 0.415 15.28 0.441 15.276 0.467 Z" fill="rgb(92,198,60)" opacity="0.92"></path><path d="M 17.486 1.504 L 14.789 8.199 C 14.784 8.212 14.773 8.223 14.76 8.228 C 14.747 8.233 14.732 8.233 14.719 8.227 C 14.557 8.151 14.39 8.085 14.221 8.028 C 14.2 8.021 14.186 8.002 14.185 7.98 C 14.185 7.973 14.186 7.966 14.189 7.96 L 16.919 1.184 C 16.925 1.17 16.936 1.16 16.95 1.155 C 16.964 1.15 16.98 1.151 16.993 1.158 C 17.154 1.248 17.313 1.341 17.467 1.441 C 17.487 1.454 17.496 1.48 17.487 1.503 Z" fill="rgb(92,198,60)" opacity="0.84"></path><path d="M 19.311 3.057 L 15.655 8.711 C 15.644 8.729 15.622 8.738 15.601 8.733 C 15.594 8.732 15.588 8.729 15.582 8.724 C 15.437 8.62 15.286 8.524 15.13 8.436 C 15.118 8.429 15.109 8.417 15.105 8.403 C 15.102 8.39 15.104 8.375 15.112 8.364 L 18.837 2.601 C 18.846 2.588 18.86 2.579 18.876 2.578 C 18.891 2.576 18.907 2.581 18.918 2.592 C 19.053 2.723 19.181 2.856 19.307 2.994 C 19.322 3.011 19.324 3.037 19.311 3.057 Z" fill="rgb(92,198,60)" opacity="0.76"></path><path d="M 20.637 4.967 L 16.409 9.376 C 16.399 9.386 16.386 9.392 16.372 9.392 C 16.358 9.392 16.344 9.386 16.334 9.376 C 16.21 9.246 16.078 9.122 15.941 9.005 C 15.93 8.996 15.924 8.983 15.923 8.969 C 15.923 8.955 15.928 8.941 15.938 8.931 L 20.285 4.404 C 20.302 4.385 20.33 4.381 20.351 4.395 C 20.358 4.399 20.363 4.405 20.367 4.412 C 20.465 4.573 20.558 4.739 20.646 4.908 C 20.656 4.927 20.652 4.951 20.637 4.967 Z" fill="rgb(92,198,60)" opacity="0.68"></path><path d="M 21.435 7.045 L 21.435 7.048 L 17.021 10.172 C 17.01 10.18 16.996 10.183 16.982 10.18 C 16.968 10.177 16.956 10.169 16.949 10.157 C 16.853 10.006 16.749 9.861 16.637 9.722 C 16.628 9.711 16.624 9.697 16.626 9.683 C 16.628 9.669 16.635 9.657 16.646 9.649 L 21.197 6.426 C 21.211 6.417 21.228 6.414 21.244 6.419 C 21.26 6.425 21.272 6.437 21.277 6.452 C 21.339 6.647 21.391 6.845 21.435 7.045 Z" fill="rgb(92,198,60)" opacity="0.6"></path><path d="M 21.671 9.093 L 21.671 9.164 L 17.472 11.068 C 17.459 11.074 17.444 11.075 17.431 11.069 C 17.418 11.064 17.408 11.053 17.403 11.04 C 17.338 10.874 17.264 10.712 17.181 10.555 C 17.171 10.535 17.174 10.512 17.189 10.496 C 17.194 10.491 17.199 10.487 17.205 10.484 L 21.581 8.498 C 21.596 8.491 21.614 8.492 21.629 8.501 C 21.643 8.51 21.653 8.525 21.654 8.542 C 21.665 8.724 21.67 8.908 21.67 9.093 Z" fill="rgb(92,198,60)" opacity="0.48"></path><path d="M 21.557 10.524 C 21.526 10.721 21.487 10.917 21.442 11.111 C 21.437 11.13 21.423 11.145 21.404 11.149 L 17.745 12.033 C 17.724 12.038 17.702 12.029 17.69 12.011 C 17.686 12.005 17.683 11.999 17.682 11.992 C 17.65 11.816 17.608 11.642 17.557 11.471 C 17.553 11.458 17.555 11.443 17.562 11.431 C 17.569 11.419 17.58 11.411 17.594 11.407 L 21.493 10.465 C 21.511 10.461 21.529 10.466 21.541 10.478 C 21.554 10.49 21.56 10.507 21.557 10.524 Z" fill="rgb(92,198,60)" opacity="0.35"></path><path d="M 21.082 12.304 C 21.013 12.492 20.935 12.677 20.851 12.86 C 20.842 12.878 20.825 12.89 20.805 12.891 L 17.773 13.033 C 17.776 12.836 17.768 12.639 17.749 12.443 C 17.748 12.429 17.752 12.416 17.761 12.405 C 17.77 12.395 17.783 12.388 17.797 12.388 L 21.03 12.235 C 21.057 12.234 21.08 12.253 21.085 12.279 C 21.086 12.288 21.085 12.297 21.082 12.304 Z" fill="rgb(92,198,60)" opacity="0.25"></path><path d="M 20.335 13.824 C 20.231 13.995 20.12 14.162 20.004 14.324 C 19.992 14.341 19.973 14.349 19.954 14.347 L 17.723 14.029 C 17.708 14.027 17.696 14.02 17.687 14.008 C 17.679 13.997 17.676 13.983 17.678 13.969 C 17.712 13.793 17.737 13.616 17.752 13.437 C 17.753 13.423 17.76 13.41 17.771 13.401 C 17.782 13.393 17.797 13.389 17.811 13.391 L 20.298 13.746 C 20.315 13.748 20.33 13.759 20.338 13.774 C 20.345 13.79 20.344 13.809 20.335 13.824 Z" fill="rgb(92,198,60)" opacity="0.12"></path><path d="M 19.417 15.068 C 19.287 15.217 19.151 15.361 19.012 15.501 C 18.998 15.515 18.977 15.52 18.958 15.514 L 17.425 14.986 C 17.404 14.979 17.39 14.96 17.389 14.939 C 17.389 14.932 17.391 14.925 17.394 14.918 C 17.461 14.753 17.519 14.585 17.568 14.413 C 17.572 14.4 17.582 14.389 17.595 14.382 C 17.607 14.376 17.621 14.374 17.635 14.379 L 19.395 14.985 C 19.411 14.991 19.423 15.004 19.428 15.021 C 19.432 15.038 19.428 15.055 19.417 15.068 Z" fill="rgb(92,198,60)" opacity="0.05"></path><path d="M 12.848 0.056 L 12.848 7.703 C 12.849 7.718 12.843 7.732 12.832 7.741 C 12.821 7.751 12.807 7.756 12.793 7.755 C 12.614 7.745 12.435 7.745 12.256 7.755 C 12.234 7.756 12.214 7.744 12.205 7.724 C 12.203 7.717 12.201 7.71 12.201 7.703 L 12.201 0.056 C 12.201 0.042 12.206 0.029 12.215 0.02 C 12.224 0.01 12.237 0.004 12.251 0.004 C 12.433 -0.001 12.615 -0.001 12.797 0.004 C 12.811 0.004 12.824 0.009 12.834 0.019 C 12.843 0.029 12.848 0.042 12.848 0.056 Z M 22.039 21.587 L 16.316 16.656 C 16.305 16.647 16.299 16.634 16.298 16.62 C 16.298 16.606 16.303 16.592 16.313 16.582 C 16.437 16.454 16.555 16.319 16.664 16.179 C 16.673 16.167 16.686 16.16 16.7 16.159 C 16.714 16.157 16.728 16.161 16.739 16.171 L 22.495 21.131 C 22.506 21.14 22.512 21.153 22.513 21.167 C 22.513 21.182 22.508 21.195 22.498 21.205 C 22.372 21.335 22.242 21.463 22.109 21.585 C 22.089 21.603 22.059 21.603 22.039 21.586 Z" fill="rgb(92,198,60)"></path><path d="M 20.03 22.972 L 15.546 17.301 C 15.537 17.29 15.533 17.276 15.535 17.262 C 15.538 17.248 15.546 17.236 15.557 17.228 C 15.704 17.125 15.845 17.015 15.981 16.898 C 15.991 16.888 16.005 16.883 16.019 16.884 C 16.033 16.886 16.046 16.893 16.054 16.904 L 20.592 22.643 C 20.607 22.661 20.608 22.686 20.595 22.705 C 20.59 22.711 20.584 22.716 20.578 22.719 C 20.42 22.813 20.259 22.902 20.095 22.986 C 20.073 22.997 20.046 22.991 20.03 22.972 Z" fill="rgb(92,198,60)" opacity="0.84"></path><path d="M 17.765 23.867 L 14.667 17.891 C 14.66 17.878 14.659 17.863 14.664 17.85 C 14.669 17.837 14.679 17.826 14.692 17.82 C 14.855 17.748 15.015 17.666 15.17 17.576 C 15.182 17.569 15.196 17.567 15.21 17.571 C 15.224 17.575 15.235 17.584 15.242 17.596 L 18.399 23.685 C 18.41 23.707 18.405 23.733 18.387 23.748 C 18.381 23.753 18.374 23.757 18.366 23.759 C 18.186 23.809 18.005 23.854 17.822 23.892 C 17.799 23.897 17.776 23.886 17.765 23.866 Z" fill="rgb(92,198,60)" opacity="0.76"></path><path d="M 15.437 23.952 L 13.71 18.107 C 13.707 18.093 13.708 18.079 13.716 18.067 C 13.723 18.055 13.735 18.046 13.749 18.043 C 13.924 18.001 14.097 17.949 14.268 17.891 C 14.288 17.883 14.311 17.889 14.325 17.906 C 14.329 17.911 14.332 17.917 14.333 17.924 L 16.105 23.931 C 16.109 23.946 16.106 23.963 16.096 23.975 C 16.087 23.988 16.072 23.996 16.056 23.997 C 15.867 24 15.676 23.997 15.485 23.988 C 15.462 23.987 15.443 23.973 15.437 23.951 Z" fill="rgb(92,198,60)" opacity="0.68"></path><path d="M 13.228 23.599 L 13.226 23.597 L 12.711 18.237 C 12.71 18.223 12.714 18.209 12.724 18.198 C 12.733 18.187 12.747 18.181 12.761 18.18 C 12.94 18.174 13.118 18.157 13.294 18.13 C 13.308 18.127 13.323 18.131 13.334 18.139 C 13.346 18.148 13.353 18.161 13.355 18.175 L 13.886 23.704 C 13.888 23.721 13.881 23.737 13.869 23.748 C 13.856 23.759 13.839 23.764 13.822 23.76 C 13.622 23.715 13.423 23.661 13.228 23.599 Z" fill="rgb(92,198,60)" opacity="0.6"></path><path d="M 11.325 22.778 L 11.265 22.742 L 11.705 18.176 C 11.706 18.162 11.713 18.149 11.725 18.14 C 11.736 18.132 11.751 18.129 11.765 18.132 C 11.941 18.158 12.12 18.176 12.298 18.183 C 12.312 18.184 12.325 18.19 12.335 18.2 C 12.344 18.211 12.349 18.225 12.348 18.239 L 11.89 22.998 C 11.888 23.025 11.866 23.045 11.839 23.045 C 11.831 23.046 11.822 23.044 11.814 23.04 C 11.649 22.957 11.486 22.869 11.325 22.778 Z" fill="rgb(92,198,60)" opacity="0.48"></path><path d="M 10.135 21.964 C 9.98 21.839 9.829 21.708 9.682 21.572 C 9.667 21.559 9.662 21.538 9.668 21.519 L 10.728 17.928 C 10.734 17.908 10.753 17.893 10.774 17.892 C 10.781 17.892 10.789 17.892 10.796 17.895 C 10.965 17.955 11.136 18.005 11.311 18.047 C 11.332 18.052 11.348 18.07 11.35 18.092 C 11.35 18.098 11.35 18.105 11.349 18.111 L 10.219 21.939 C 10.213 21.955 10.2 21.968 10.184 21.973 C 10.167 21.978 10.149 21.975 10.135 21.964 Z" fill="rgb(92,198,60)" opacity="0.35"></path><path d="M 8.822 20.665 C 8.693 20.511 8.571 20.351 8.454 20.188 C 8.443 20.172 8.441 20.151 8.45 20.134 L 9.843 17.452 C 10.013 17.553 10.188 17.645 10.368 17.727 C 10.381 17.733 10.39 17.744 10.395 17.757 C 10.399 17.77 10.398 17.784 10.392 17.796 L 8.909 20.655 C 8.901 20.671 8.886 20.682 8.869 20.684 C 8.851 20.686 8.834 20.679 8.822 20.666 Z" fill="rgb(92,198,60)" opacity="0.25"></path><path d="M 7.872 19.262 C 7.776 19.087 7.686 18.908 7.602 18.726 C 7.594 18.709 7.596 18.688 7.608 18.673 L 9 16.91 C 9.004 16.905 9.01 16.9 9.016 16.897 C 9.035 16.886 9.058 16.889 9.075 16.903 C 9.211 17.02 9.353 17.13 9.501 17.232 C 9.512 17.24 9.52 17.252 9.522 17.266 C 9.524 17.28 9.521 17.295 9.512 17.306 L 7.959 19.27 C 7.948 19.284 7.931 19.291 7.914 19.289 C 7.896 19.288 7.881 19.278 7.872 19.263 Z" fill="rgb(92,198,60)" opacity="0.12"></path><path d="M 7.248 17.85 C 7.183 17.663 7.125 17.475 7.073 17.284 C 7.068 17.265 7.074 17.244 7.089 17.231 L 8.316 16.176 C 8.321 16.172 8.327 16.168 8.333 16.166 C 8.34 16.164 8.347 16.163 8.354 16.164 C 8.368 16.165 8.381 16.172 8.389 16.183 C 8.5 16.324 8.617 16.459 8.742 16.586 C 8.757 16.601 8.76 16.624 8.751 16.644 C 8.749 16.65 8.745 16.656 8.74 16.66 L 7.332 17.873 C 7.318 17.884 7.301 17.887 7.284 17.883 C 7.267 17.878 7.254 17.866 7.248 17.85 Z" fill="rgb(92,198,60)" opacity="0.05"></path><path d="M 23.612 19.703 L 16.949 15.878 C 16.936 15.871 16.928 15.86 16.924 15.846 C 16.921 15.832 16.923 15.818 16.931 15.806 C 17.029 15.657 17.119 15.502 17.2 15.343 C 17.206 15.33 17.218 15.321 17.231 15.316 C 17.245 15.312 17.26 15.314 17.272 15.322 L 23.935 19.146 C 23.959 19.16 23.968 19.191 23.955 19.215 C 23.868 19.374 23.777 19.531 23.682 19.686 C 23.667 19.71 23.636 19.718 23.612 19.703 Z" fill="rgb(92,198,60)"></path><path d="M 0.258 16.847 L 7.414 14.386 C 7.428 14.381 7.443 14.383 7.455 14.389 C 7.468 14.396 7.477 14.407 7.481 14.42 C 7.53 14.592 7.589 14.76 7.657 14.924 C 7.665 14.945 7.66 14.968 7.644 14.982 C 7.638 14.987 7.632 14.991 7.626 14.993 L 0.427 17.467 C 0.413 17.471 0.398 17.47 0.386 17.463 C 0.373 17.457 0.363 17.446 0.359 17.432 C 0.309 17.258 0.264 17.083 0.223 16.907 C 0.217 16.881 0.232 16.854 0.258 16.846 Z" fill="rgb(92,198,60)" opacity="0.92"></path><path d="M 0.055 14.425 L 7.237 13.401 C 7.251 13.399 7.265 13.403 7.277 13.412 C 7.288 13.42 7.295 13.433 7.296 13.447 C 7.311 13.625 7.337 13.802 7.373 13.977 C 7.375 13.991 7.372 14.005 7.364 14.016 C 7.356 14.028 7.343 14.035 7.329 14.037 L 0.061 15.074 C 0.046 15.076 0.031 15.071 0.019 15.062 C 0.008 15.052 0.001 15.038 0.001 15.023 C -0.002 14.839 0.001 14.656 0.01 14.474 C 0.011 14.449 0.03 14.428 0.055 14.425 Z" fill="rgb(92,198,60)" opacity="0.84"></path><path d="M 0.496 12.078 L 7.251 12.399 C 7.265 12.4 7.278 12.406 7.287 12.417 C 7.297 12.428 7.301 12.442 7.3 12.456 C 7.282 12.634 7.273 12.812 7.273 12.989 C 7.273 13.003 7.268 13.017 7.258 13.027 C 7.248 13.036 7.234 13.042 7.22 13.041 L 0.336 12.714 C 0.321 12.713 0.306 12.705 0.297 12.693 C 0.288 12.68 0.284 12.664 0.288 12.649 C 0.334 12.468 0.386 12.291 0.444 12.114 C 0.451 12.091 0.473 12.077 0.497 12.078 Z" fill="rgb(92,198,60)" opacity="0.76"></path><path d="M 1.498 9.981 L 7.453 11.419 C 7.467 11.422 7.479 11.431 7.486 11.443 C 7.493 11.455 7.495 11.469 7.491 11.483 C 7.44 11.654 7.397 11.829 7.364 12.006 C 7.361 12.02 7.353 12.032 7.341 12.04 C 7.329 12.047 7.315 12.05 7.301 12.046 L 1.182 10.567 C 1.166 10.564 1.153 10.553 1.146 10.538 C 1.14 10.523 1.141 10.506 1.149 10.492 C 1.241 10.327 1.338 10.164 1.441 10.004 C 1.453 9.985 1.476 9.976 1.497 9.981 Z" fill="rgb(92,198,60)" opacity="0.68"></path><path d="M 2.91 8.256 L 2.913 8.255 L 7.84 10.493 C 7.853 10.499 7.863 10.51 7.868 10.524 C 7.872 10.537 7.871 10.552 7.864 10.564 C 7.781 10.722 7.707 10.883 7.642 11.049 C 7.637 11.062 7.627 11.073 7.613 11.078 C 7.6 11.084 7.586 11.084 7.573 11.078 L 2.489 8.77 C 2.474 8.763 2.463 8.749 2.46 8.732 C 2.456 8.716 2.461 8.699 2.472 8.686 C 2.612 8.536 2.758 8.392 2.91 8.255 Z" fill="rgb(92,198,60)" opacity="0.6"></path><path d="M 4.578 7.029 L 4.638 6.995 L 8.397 9.657 C 8.408 9.665 8.415 9.678 8.417 9.692 C 8.419 9.706 8.415 9.72 8.406 9.731 C 8.294 9.869 8.19 10.014 8.094 10.164 C 8.087 10.177 8.075 10.185 8.061 10.188 C 8.047 10.19 8.032 10.187 8.021 10.179 L 4.103 7.405 C 4.082 7.39 4.075 7.361 4.087 7.338 C 4.092 7.33 4.098 7.324 4.105 7.32 C 4.259 7.219 4.416 7.122 4.578 7.029 Z" fill="rgb(92,198,60)" opacity="0.48"></path><path d="M 5.881 6.412 C 6.069 6.34 6.258 6.276 6.45 6.218 C 6.469 6.212 6.489 6.218 6.503 6.232 L 9.101 8.94 C 9.111 8.951 9.116 8.964 9.115 8.979 C 9.114 8.993 9.107 9.005 9.096 9.014 C 8.959 9.13 8.829 9.253 8.705 9.382 C 8.695 9.392 8.682 9.398 8.668 9.398 C 8.654 9.398 8.641 9.392 8.631 9.382 L 5.861 6.497 C 5.85 6.484 5.845 6.466 5.849 6.449 C 5.853 6.433 5.865 6.419 5.881 6.412 Z" fill="rgb(92,198,60)" opacity="0.35"></path><path d="M 7.669 5.932 C 7.868 5.898 8.069 5.872 8.269 5.853 C 8.289 5.851 8.308 5.861 8.319 5.877 L 9.959 8.417 C 9.786 8.512 9.618 8.618 9.456 8.732 C 9.445 8.74 9.431 8.743 9.417 8.74 C 9.403 8.738 9.391 8.729 9.383 8.717 L 7.634 6.012 C 7.624 5.997 7.623 5.978 7.63 5.962 C 7.637 5.946 7.652 5.934 7.669 5.932 Z" fill="rgb(92,198,60)" opacity="0.25"></path><path d="M 9.366 5.815 C 9.567 5.82 9.769 5.833 9.969 5.851 C 9.989 5.852 10.006 5.865 10.013 5.883 L 10.852 7.963 C 10.857 7.976 10.857 7.99 10.851 8.003 C 10.845 8.016 10.834 8.026 10.821 8.03 C 10.651 8.089 10.484 8.156 10.321 8.232 C 10.302 8.241 10.279 8.237 10.263 8.222 C 10.258 8.217 10.254 8.211 10.252 8.204 L 9.317 5.886 C 9.311 5.87 9.313 5.852 9.323 5.837 C 9.332 5.823 9.349 5.815 9.366 5.815 Z" fill="rgb(92,198,60)" opacity="0.12"></path><path d="M 10.909 5.984 C 11.105 6.021 11.299 6.066 11.49 6.116 C 11.509 6.121 11.524 6.137 11.528 6.156 L 11.834 7.74 C 11.837 7.753 11.834 7.768 11.825 7.779 C 11.817 7.791 11.804 7.798 11.79 7.8 C 11.613 7.824 11.437 7.859 11.263 7.902 C 11.249 7.906 11.235 7.903 11.223 7.896 C 11.211 7.888 11.203 7.876 11.2 7.862 L 10.848 6.044 C 10.845 6.028 10.851 6.01 10.863 5.998 C 10.875 5.986 10.893 5.981 10.909 5.984 Z" fill="rgb(92,198,60)" opacity="0.05"></path><path d="M 1.111 19.142 L 7.776 15.32 C 7.788 15.313 7.803 15.311 7.817 15.316 C 7.831 15.32 7.842 15.329 7.848 15.342 C 7.929 15.501 8.018 15.656 8.117 15.804 C 8.124 15.816 8.127 15.831 8.124 15.844 C 8.12 15.858 8.112 15.87 8.1 15.877 L 1.435 19.7 C 1.41 19.713 1.379 19.706 1.365 19.682 C 1.27 19.527 1.179 19.37 1.092 19.212 C 1.085 19.2 1.083 19.186 1.087 19.173 C 1.091 19.16 1.099 19.149 1.111 19.142 Z" fill="rgb(92,198,60)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  l(A, {
                                    className: `framer-12cpi8m`,
                                    layoutDependency: C,
                                    layoutId: `Wc7Wu0K2_`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 88 24" overflow="visible"><path d="M 0 0 L 88 0 L 88 24 L 0 24 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1nlk2or`,
                                    layoutDependency: C,
                                    layoutId: `YDDWDKY9K`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.83 10.425" overflow="visible"><path d="M 0 5.205 C 0 2.181 2.125 0 5.07 0 C 7.279 0 9.224 1.492 9.71 3.535 L 8.474 3.7 C 8.113 2.196 6.682 1.105 5.07 1.105 C 2.848 1.105 1.264 2.83 1.264 5.205 C 1.264 7.594 2.861 9.32 5.07 9.32 C 6.654 9.32 8.085 8.257 8.487 6.821 L 9.696 7.056 C 9.21 9.003 7.265 10.425 5.07 10.425 C 2.125 10.425 -0.014 8.229 0 5.205 Z M 10.983 5.205 C 10.983 2.168 13.179 0 16.276 0 C 19.373 0 21.568 2.168 21.568 5.205 C 21.568 8.27 19.373 10.425 16.276 10.425 C 13.178 10.425 10.983 8.27 10.983 5.205 Z M 20.29 5.205 C 20.29 2.817 18.623 1.105 16.276 1.105 C 13.929 1.105 12.247 2.817 12.247 5.205 C 12.247 7.594 13.928 9.32 16.276 9.32 C 18.623 9.32 20.29 7.594 20.29 5.205 Z M 22.176 9.5 L 27.927 1.588 L 27.927 1.45 L 22.315 1.45 L 22.315 0.345 L 29.788 0.345 L 29.788 0.911 L 24.037 8.836 L 24.037 8.975 L 29.927 8.975 L 29.927 10.079 L 22.176 10.079 Z M 31.546 0.345 L 38.269 0.345 L 38.269 1.45 L 32.824 1.45 L 32.824 4.487 L 37.714 4.487 L 37.714 5.592 L 32.825 5.592 L 32.825 8.975 L 38.408 8.975 L 38.408 10.079 L 31.546 10.079 L 31.546 0.346 Z M 40.159 0.345 L 44.424 0.345 C 46.549 0.345 47.953 1.505 47.953 3.3 C 47.953 4.957 46.646 6.116 44.828 6.199 L 44.66 6.199 L 48.216 10.079 L 46.62 10.079 L 43.229 6.268 L 41.424 6.268 L 41.424 10.079 L 40.16 10.079 L 40.16 0.346 Z M 44.424 5.164 C 45.828 5.164 46.689 4.446 46.689 3.3 C 46.689 2.168 45.827 1.45 44.424 1.45 L 41.424 1.45 L 41.424 5.164 Z M 49.245 5.205 C 49.245 2.168 51.441 0 54.538 0 C 57.636 0 59.83 2.168 59.83 5.205 C 59.83 8.27 57.636 10.425 54.538 10.425 C 51.44 10.425 49.245 8.27 49.245 5.205 Z M 58.552 5.205 C 58.552 2.817 56.885 1.105 54.538 1.105 C 52.191 1.105 50.509 2.817 50.509 5.205 C 50.509 7.594 52.19 9.32 54.538 9.32 C 56.885 9.32 58.552 7.594 58.552 5.205 Z" fill="rgb(248,250,248)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-c63ylk`,
                                        layoutDependency: C,
                                        layoutId: `rspWJ1R_K`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.71 10.425" overflow="visible"><path d="M 0 5.205 C 0 2.181 2.125 0 5.07 0 C 7.279 0 9.224 1.492 9.71 3.535 L 8.474 3.7 C 8.113 2.196 6.682 1.105 5.07 1.105 C 2.848 1.105 1.264 2.83 1.264 5.205 C 1.264 7.594 2.861 9.32 5.07 9.32 C 6.654 9.32 8.085 8.257 8.487 6.821 L 9.696 7.056 C 9.21 9.003 7.265 10.425 5.07 10.425 C 2.125 10.425 -0.014 8.229 0 5.205 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1taqc7i`,
                                        layoutDependency: C,
                                        layoutId: `dSvLZ4Xup`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.585 10.425" overflow="visible"><path d="M 0 5.205 C 0 2.168 2.196 0 5.292 0 C 8.39 0 10.585 2.168 10.585 5.205 C 10.585 8.27 8.39 10.425 5.292 10.425 C 2.195 10.425 0 8.27 0 5.205 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1eqohrz`,
                                        layoutDependency: C,
                                        layoutId: `zdP6EsYDA`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.043 8.215" overflow="visible"><path d="M 8.043 4.1 C 8.043 1.712 6.376 0 4.028 0 C 1.682 0 0 1.712 0 4.1 C 0 6.489 1.681 8.215 4.028 8.215 C 6.376 8.215 8.043 6.489 8.043 4.1 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-m2yyru`,
                                        layoutDependency: C,
                                        layoutId: `os7aLFmwC`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.751 9.734" overflow="visible"><path d="M 0 9.155 L 5.751 1.244 L 5.751 1.105 L 0.139 1.105 L 0.139 0 L 7.612 0 L 7.612 0.566 L 1.861 8.492 L 1.861 8.63 L 7.751 8.63 L 7.751 9.734 L 0 9.734 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-da67ge`,
                                        layoutDependency: C,
                                        layoutId: `nPuceOzDp`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.862 9.734" overflow="visible"><path d="M 0 0 L 6.724 0 L 6.724 1.105 L 1.278 1.105 L 1.278 4.142 L 6.168 4.142 L 6.168 5.247 L 1.279 5.247 L 1.279 8.63 L 6.862 8.63 L 6.862 9.734 L 0 9.734 L 0 0.001 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-y9tno9`,
                                        layoutDependency: C,
                                        layoutId: `XXYWwnQr3`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.057 9.734" overflow="visible"><path d="M 0 0 L 4.265 0 C 6.39 0 7.794 1.16 7.794 2.956 C 7.794 4.612 6.487 5.772 4.668 5.854 L 4.501 5.854 L 8.057 9.734 L 6.46 9.734 L 3.07 5.924 L 1.265 5.924 L 1.265 9.734 L 0.001 9.734 L 0.001 0.001 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-h0nrsr`,
                                        layoutDependency: C,
                                        layoutId: `AeWQ9DMZ0`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.265 3.715" overflow="visible"><path d="M 3 3.715 C 4.404 3.715 5.265 2.996 5.265 1.851 C 5.265 0.718 4.403 0 3 0 L 0 0 L 0 3.715 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-i53fkx`,
                                        layoutDependency: C,
                                        layoutId: `EVWBpMEML`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.585 10.425" overflow="visible"><path d="M 0 5.205 C 0 2.168 2.196 0 5.292 0 C 8.39 0 10.585 2.168 10.585 5.205 C 10.585 8.27 8.39 10.425 5.292 10.425 C 2.195 10.425 0 8.27 0 5.205 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1n4dqsy`,
                                        layoutDependency: C,
                                        layoutId: `EkzT8zcSo`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.043 8.215" overflow="visible"><path d="M 8.043 4.1 C 8.043 1.712 6.376 0 4.028 0 C 1.682 0 0 1.712 0 4.1 C 0 6.489 1.681 8.215 4.028 8.215 C 6.376 8.215 8.043 6.489 8.043 4.1 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(A, {
                                    className: `framer-6kbtn9`,
                                    layoutDependency: C,
                                    layoutId: `ckHEqL2W7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.07 7.639" overflow="visible"><path d="M 2.069 0.207 L 0.635 7.599 C 0.632 7.612 0.624 7.624 0.613 7.632 C 0.601 7.639 0.587 7.641 0.573 7.638 C 0.399 7.595 0.223 7.561 0.045 7.538 C 0.031 7.536 0.018 7.529 0.01 7.517 C 0.002 7.506 -0.002 7.492 0.001 7.478 L 1.444 0.042 C 1.447 0.028 1.455 0.015 1.467 0.008 C 1.48 0 1.494 -0.002 1.508 0.002 C 1.685 0.046 1.861 0.093 2.034 0.147 C 2.059 0.155 2.074 0.18 2.069 0.206 Z" fill="rgb(92,198,60)" opacity="0.92"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-gfyfhh`,
                                    layoutDependency: C,
                                    layoutId: `pqUae21V9`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.306 7.08" overflow="visible"><path d="M 3.301 0.352 L 0.604 7.047 C 0.599 7.061 0.588 7.071 0.575 7.076 C 0.562 7.081 0.547 7.081 0.534 7.075 C 0.372 6.999 0.205 6.933 0.036 6.876 C 0.015 6.869 0.001 6.85 0 6.829 C 0 6.822 0.001 6.815 0.004 6.808 L 2.734 0.032 C 2.74 0.019 2.751 0.008 2.765 0.003 C 2.779 -0.002 2.795 -0.001 2.808 0.007 C 2.969 0.096 3.128 0.19 3.282 0.289 C 3.302 0.303 3.311 0.328 3.302 0.351 Z" fill="rgb(92,198,60)" opacity="0.84"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-eyb85p`,
                                    layoutDependency: C,
                                    layoutId: `gSNuWC1jm`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.216 6.157" overflow="visible"><path d="M 4.207 0.479 L 0.551 6.134 C 0.54 6.152 0.518 6.161 0.497 6.156 C 0.49 6.154 0.484 6.151 0.478 6.147 C 0.333 6.043 0.182 5.946 0.026 5.858 C 0.014 5.851 0.005 5.84 0.001 5.826 C -0.002 5.812 0.001 5.798 0.008 5.786 L 3.734 0.023 C 3.742 0.01 3.756 0.002 3.772 0 C 3.787 -0.001 3.803 0.004 3.814 0.015 C 3.949 0.145 4.078 0.279 4.203 0.416 C 4.218 0.434 4.22 0.46 4.207 0.479 Z" fill="rgb(92,198,60)" opacity="0.76"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-w8gnhj`,
                                    layoutDependency: C,
                                    layoutId: `hvOsOItgH`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.729 5.005" overflow="visible"><path d="M 4.714 0.581 L 0.486 4.989 C 0.476 5 0.463 5.005 0.448 5.005 C 0.434 5.005 0.421 5 0.411 4.989 C 0.286 4.859 0.155 4.736 0.018 4.619 C 0.007 4.61 0.001 4.596 0 4.582 C -0.001 4.568 0.005 4.554 0.015 4.544 L 4.361 0.017 C 4.379 -0.002 4.407 -0.005 4.428 0.008 C 4.435 0.013 4.44 0.019 4.444 0.026 C 4.542 0.187 4.635 0.352 4.723 0.521 C 4.733 0.541 4.729 0.564 4.714 0.581 Z" fill="rgb(92,198,60)" opacity="0.68"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1dbclvm`,
                                    layoutDependency: C,
                                    layoutId: `aezHBUwLx`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.809 3.764" overflow="visible"><path d="M 4.809 0.629 L 4.809 0.631 L 0.396 3.755 C 0.385 3.763 0.37 3.766 0.357 3.763 C 0.343 3.76 0.331 3.752 0.323 3.741 C 0.228 3.59 0.123 3.444 0.011 3.305 C 0.002 3.294 -0.001 3.28 0 3.266 C 0.002 3.253 0.01 3.24 0.021 3.232 L 4.572 0.009 C 4.586 0 4.603 -0.002 4.619 0.003 C 4.634 0.008 4.647 0.02 4.652 0.036 C 4.713 0.23 4.766 0.429 4.809 0.629 Z" fill="rgb(92,198,60)" opacity="0.6"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-grmgs8`,
                                    layoutDependency: C,
                                    layoutId: `JzQsWIWo8`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.496 2.579" overflow="visible"><path d="M 4.496 0.6 L 4.496 0.67 L 0.297 2.575 C 0.284 2.581 0.269 2.581 0.256 2.576 C 0.243 2.57 0.233 2.56 0.228 2.546 C 0.163 2.381 0.089 2.219 0.005 2.061 C -0.004 2.042 -0.001 2.018 0.014 2.002 C 0.019 1.997 0.024 1.993 0.03 1.99 L 4.405 0.004 C 4.421 -0.002 4.439 -0.001 4.454 0.008 C 4.468 0.016 4.478 0.032 4.479 0.049 C 4.49 0.231 4.495 0.415 4.495 0.6 Z" fill="rgb(92,198,60)" opacity="0.48"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-utwdr2`,
                                    layoutDependency: C,
                                    layoutId: `Um4jFQtU7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.003 1.571" overflow="visible"><path d="M 4.002 0.061 C 3.97 0.258 3.932 0.453 3.887 0.647 C 3.882 0.666 3.867 0.681 3.849 0.686 L 0.19 1.569 C 0.169 1.574 0.147 1.565 0.135 1.547 C 0.131 1.541 0.128 1.535 0.127 1.528 C 0.095 1.353 0.053 1.179 0.002 1.007 C -0.002 0.994 0 0.98 0.007 0.967 C 0.014 0.956 0.025 0.947 0.039 0.943 L 3.938 0.001 C 3.956 -0.003 3.973 0.002 3.986 0.015 C 3.999 0.026 4.005 0.044 4.002 0.061 Z" fill="rgb(92,198,60)" opacity="0.35"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1otelqt`,
                                    layoutDependency: C,
                                    layoutId: `dtzXWR_LN`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.336 1" overflow="visible"><path d="M 3.333 0.069 C 3.263 0.258 3.186 0.443 3.102 0.626 C 3.093 0.643 3.076 0.655 3.056 0.656 L 0.023 0.798 C 0.027 0.601 0.019 0.404 0 0.208 C -0.001 0.195 0.003 0.181 0.012 0.171 C 0.021 0.16 0.034 0.154 0.048 0.153 L 3.281 0 C 3.308 -0.001 3.331 0.018 3.335 0.044 C 3.337 0.053 3.335 0.062 3.333 0.069 Z" fill="rgb(92,198,60)" opacity="0.25"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1351z50`,
                                    layoutDependency: C,
                                    layoutId: `A6gmqjWyU`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.665 1" overflow="visible"><path d="M 2.658 0.434 C 2.553 0.604 2.443 0.771 2.326 0.934 C 2.315 0.95 2.296 0.959 2.276 0.956 L 0.045 0.639 C 0.031 0.637 0.018 0.629 0.01 0.618 C 0.001 0.606 -0.002 0.592 0.001 0.578 C 0.035 0.402 0.06 0.226 0.075 0.047 C 0.076 0.033 0.083 0.02 0.094 0.011 C 0.105 0.002 0.119 -0.002 0.133 0.001 L 2.62 0.355 C 2.638 0.358 2.653 0.368 2.66 0.384 C 2.668 0.4 2.667 0.418 2.658 0.434 Z" fill="rgb(92,198,60)" opacity="0.12"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-ivj171`,
                                    layoutDependency: C,
                                    layoutId: `TYd8NMzq1`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.04 1.14" overflow="visible"><path d="M 2.028 0.691 C 1.898 0.841 1.762 0.985 1.622 1.125 C 1.608 1.139 1.588 1.144 1.569 1.138 L 0.036 0.61 C 0.015 0.603 0.001 0.584 0 0.562 C 0 0.555 0.002 0.549 0.004 0.542 C 0.072 0.377 0.13 0.208 0.179 0.037 C 0.183 0.024 0.193 0.012 0.205 0.006 C 0.218 0 0.232 -0.002 0.245 0.002 L 2.005 0.609 C 2.022 0.614 2.034 0.628 2.038 0.645 C 2.043 0.661 2.039 0.679 2.028 0.692 Z" fill="rgb(92,198,60)" opacity="0.05"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1mb6a8c`,
                                    layoutDependency: C,
                                    layoutId: `SGaWGt7Fi`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.312 21.598" overflow="visible"><path d="M 0.647 0.056 L 0.647 7.703 C 0.648 7.717 0.642 7.731 0.631 7.741 C 0.621 7.751 0.606 7.756 0.592 7.754 C 0.413 7.744 0.234 7.744 0.055 7.754 C 0.033 7.756 0.013 7.743 0.004 7.723 C 0.002 7.717 0 7.71 0 7.703 L 0 0.056 C 0 0.042 0.005 0.029 0.014 0.019 C 0.024 0.009 0.036 0.004 0.05 0.003 C 0.232 -0.001 0.414 -0.001 0.596 0.003 C 0.61 0.003 0.623 0.009 0.633 0.019 C 0.642 0.029 0.647 0.042 0.647 0.056 Z M 9.838 21.586 L 4.115 16.656 C 4.104 16.646 4.098 16.633 4.097 16.619 C 4.097 16.605 4.102 16.592 4.112 16.582 C 4.236 16.454 4.354 16.319 4.463 16.178 C 4.472 16.167 4.485 16.16 4.499 16.158 C 4.513 16.157 4.527 16.161 4.538 16.17 L 10.294 21.13 C 10.305 21.14 10.311 21.153 10.312 21.167 C 10.312 21.181 10.307 21.195 10.297 21.205 C 10.171 21.335 10.041 21.463 9.908 21.585 C 9.888 21.602 9.858 21.603 9.838 21.585 Z" fill="rgb(92,198,60)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-kv5z1k`,
                                        layoutDependency: C,
                                        layoutId: `p7BBJlnCE`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 7.755" overflow="visible"><path d="M 0.647 0.056 L 0.647 7.703 C 0.648 7.717 0.642 7.731 0.631 7.741 C 0.621 7.751 0.606 7.756 0.592 7.754 C 0.413 7.744 0.234 7.744 0.055 7.754 C 0.033 7.756 0.013 7.743 0.004 7.723 C 0.002 7.717 0 7.71 0 7.703 L 0 0.056 C 0 0.042 0.005 0.029 0.014 0.019 C 0.024 0.009 0.036 0.004 0.05 0.003 C 0.232 -0.001 0.414 -0.001 0.596 0.003 C 0.61 0.003 0.623 0.009 0.633 0.019 C 0.642 0.029 0.647 0.042 0.647 0.056 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-6t0aif`,
                                        layoutDependency: C,
                                        layoutId: `wjMPjgMSj`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.215 5.44" overflow="visible"><path d="M 5.741 5.428 L 0.018 0.498 C 0.007 0.488 0.001 0.475 0 0.461 C 0 0.447 0.005 0.434 0.015 0.424 C 0.14 0.296 0.257 0.161 0.366 0.02 C 0.375 0.009 0.388 0.002 0.402 0 C 0.416 -0.001 0.43 0.003 0.441 0.012 L 6.197 4.972 C 6.208 4.982 6.214 4.995 6.215 5.009 C 6.215 5.023 6.21 5.037 6.2 5.047 C 6.074 5.177 5.944 5.305 5.811 5.427 C 5.791 5.444 5.761 5.445 5.741 5.428 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(A, {
                                    className: `framer-15rpsbz`,
                                    layoutDependency: C,
                                    layoutId: `Nvr5f4uuh`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.069 6.107" overflow="visible"><path d="M 4.496 6.087 L 0.011 0.417 C 0.002 0.406 -0.001 0.392 0 0.378 C 0.003 0.364 0.011 0.351 0.023 0.343 C 0.169 0.241 0.311 0.131 0.446 0.013 C 0.456 0.004 0.47 -0.001 0.484 0 C 0.498 0.001 0.511 0.009 0.52 0.02 L 5.057 5.758 C 5.072 5.776 5.073 5.802 5.06 5.821 C 5.055 5.826 5.05 5.831 5.043 5.835 C 4.885 5.929 4.724 6.018 4.56 6.101 C 4.538 6.112 4.511 6.107 4.496 6.087 Z" fill="rgb(92,198,60)" opacity="0.84"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-dwniyu`,
                                    layoutDependency: C,
                                    layoutId: `Lwm2Brlt1`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.744 6.325" overflow="visible"><path d="M 3.104 6.298 L 0.006 0.322 C -0.001 0.309 -0.002 0.294 0.003 0.281 C 0.008 0.268 0.018 0.257 0.031 0.252 C 0.194 0.179 0.354 0.097 0.509 0.007 C 0.521 0 0.535 -0.002 0.549 0.002 C 0.563 0.006 0.574 0.015 0.581 0.028 L 3.738 6.117 C 3.749 6.138 3.744 6.164 3.726 6.18 C 3.72 6.185 3.713 6.188 3.705 6.19 C 3.526 6.241 3.344 6.285 3.161 6.324 C 3.138 6.329 3.115 6.318 3.104 6.297 Z" fill="rgb(92,198,60)" opacity="0.76"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1vla646`,
                                    layoutDependency: C,
                                    layoutId: `IMIyjMtvv`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.398 6.111" overflow="visible"><path d="M 1.728 6.064 L 0.002 0.219 C -0.002 0.206 0 0.191 0.007 0.179 C 0.014 0.167 0.026 0.158 0.04 0.155 C 0.215 0.113 0.389 0.062 0.559 0.003 C 0.579 -0.004 0.602 0.002 0.616 0.018 C 0.62 0.023 0.623 0.03 0.625 0.036 L 2.397 6.043 C 2.401 6.058 2.397 6.075 2.388 6.088 C 2.378 6.101 2.364 6.109 2.348 6.11 C 2.158 6.112 1.967 6.11 1.776 6.101 C 1.754 6.1 1.734 6.085 1.728 6.064 Z" fill="rgb(92,198,60)" opacity="0.68"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1lfvm9b`,
                                    layoutDependency: C,
                                    layoutId: `iWEk2zFG_`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.176 5.632" overflow="visible"><path d="M 0.517 5.47 L 0.515 5.468 L 0 0.108 C -0.001 0.094 0.003 0.08 0.013 0.069 C 0.022 0.058 0.036 0.052 0.05 0.051 C 0.229 0.045 0.407 0.028 0.583 0.001 C 0.597 -0.002 0.612 0.002 0.623 0.01 C 0.635 0.019 0.642 0.032 0.644 0.046 L 1.175 5.575 C 1.177 5.592 1.17 5.608 1.158 5.619 C 1.145 5.631 1.128 5.635 1.111 5.631 C 0.911 5.586 0.713 5.532 0.517 5.47 Z" fill="rgb(92,198,60)" opacity="0.6"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-gny5dw`,
                                    layoutDependency: C,
                                    layoutId: `AektJEYZL`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.083 4.915" overflow="visible"><path d="M 0.06 4.647 L 0 4.611 L 0.44 0.045 C 0.441 0.031 0.448 0.018 0.46 0.01 C 0.471 0.002 0.486 -0.002 0.5 0.001 C 0.676 0.027 0.855 0.045 1.033 0.052 C 1.047 0.053 1.06 0.059 1.07 0.07 C 1.079 0.08 1.084 0.094 1.083 0.108 L 0.625 4.867 C 0.623 4.894 0.601 4.914 0.574 4.915 C 0.566 4.915 0.557 4.913 0.549 4.909 C 0.384 4.826 0.221 4.738 0.06 4.647 Z" fill="rgb(92,198,60)" opacity="0.48"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-vnvmmz`,
                                    layoutDependency: C,
                                    layoutId: `fwcX8Zc9T`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.685 4.083" overflow="visible"><path d="M 0.47 4.072 C 0.315 3.946 0.163 3.816 0.017 3.68 C 0.002 3.666 -0.004 3.646 0.002 3.627 L 1.063 0.036 C 1.069 0.015 1.088 0.001 1.109 0 C 1.116 0 1.123 0 1.13 0.003 C 1.299 0.062 1.471 0.113 1.646 0.155 C 1.667 0.16 1.683 0.177 1.685 0.199 C 1.685 0.205 1.685 0.212 1.683 0.219 L 0.553 4.046 C 0.548 4.063 0.535 4.076 0.518 4.081 C 0.502 4.086 0.484 4.083 0.47 4.072 Z" fill="rgb(92,198,60)" opacity="0.35"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-c0t5hu`,
                                    layoutDependency: C,
                                    layoutId: `quZwAyzHT`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.953 3.232" overflow="visible"><path d="M 0.378 3.213 C 0.249 3.059 0.126 2.9 0.01 2.736 C -0.001 2.72 -0.003 2.7 0.005 2.683 L 1.398 0 C 1.568 0.101 1.743 0.193 1.923 0.276 C 1.936 0.281 1.946 0.292 1.95 0.305 C 1.955 0.318 1.954 0.333 1.947 0.345 L 0.465 3.204 C 0.457 3.219 0.441 3.23 0.424 3.232 C 0.407 3.234 0.389 3.228 0.378 3.214 Z" fill="rgb(92,198,60)" opacity="0.25"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-3cc51u`,
                                    layoutDependency: C,
                                    layoutId: `lRON4XNNh`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.926 2.399" overflow="visible"><path d="M 0.275 2.372 C 0.179 2.196 0.089 2.017 0.005 1.836 C -0.003 1.818 -0.001 1.798 0.011 1.782 L 1.403 0.02 C 1.407 0.014 1.413 0.01 1.419 0.006 C 1.438 -0.004 1.461 -0.002 1.478 0.013 C 1.614 0.13 1.756 0.239 1.903 0.342 C 1.915 0.35 1.923 0.362 1.925 0.376 C 1.927 0.39 1.924 0.404 1.915 0.415 L 0.362 2.38 C 0.351 2.393 0.334 2.4 0.317 2.399 C 0.299 2.397 0.284 2.388 0.275 2.373 Z" fill="rgb(92,198,60)" opacity="0.12"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-4sv5xw`,
                                    layoutDependency: C,
                                    layoutId: `zmwNVGML_`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.685 1.721" overflow="visible"><path d="M 0.177 1.687 C 0.112 1.5 0.054 1.312 0.002 1.121 C -0.003 1.102 0.003 1.081 0.018 1.068 L 1.245 0.013 C 1.25 0.008 1.256 0.005 1.262 0.003 C 1.269 0 1.276 -0.001 1.283 0 C 1.297 0.002 1.31 0.009 1.318 0.02 C 1.429 0.161 1.546 0.295 1.671 0.423 C 1.686 0.438 1.689 0.461 1.68 0.48 C 1.677 0.487 1.673 0.492 1.669 0.497 L 0.261 1.71 C 0.247 1.72 0.229 1.724 0.213 1.72 C 0.196 1.715 0.183 1.703 0.177 1.687 Z" fill="rgb(92,198,60)" opacity="0.05"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-4756ws`,
                                    layoutDependency: C,
                                    layoutId: `yrVEQelPs`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.038 4.396" overflow="visible"><path d="M 6.689 4.389 L 0.026 0.564 C 0.014 0.557 0.005 0.545 0.002 0.532 C -0.002 0.518 0 0.504 0.008 0.492 C 0.106 0.343 0.196 0.188 0.277 0.029 C 0.283 0.016 0.295 0.006 0.308 0.002 C 0.322 -0.002 0.337 0 0.349 0.007 L 7.012 3.831 C 7.037 3.845 7.045 3.876 7.032 3.901 C 6.945 4.06 6.854 4.217 6.759 4.372 C 6.744 4.396 6.713 4.403 6.689 4.389 Z" fill="rgb(92,198,60)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1mozpz0`,
                                    layoutDependency: C,
                                    layoutId: `MKZwan3o1`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.439 3.086" overflow="visible"><path d="M 0.036 2.464 L 7.192 0.003 C 7.206 -0.002 7.221 -0.001 7.233 0.006 C 7.246 0.013 7.255 0.024 7.259 0.037 C 7.308 0.209 7.367 0.377 7.435 0.541 C 7.444 0.561 7.438 0.585 7.422 0.599 C 7.417 0.604 7.411 0.607 7.404 0.61 L 0.205 3.083 C 0.191 3.088 0.177 3.087 0.164 3.08 C 0.151 3.074 0.141 3.062 0.137 3.049 C 0.087 2.875 0.042 2.7 0.001 2.523 C -0.005 2.497 0.01 2.471 0.036 2.463 Z" fill="rgb(92,198,60)" opacity="0.92"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-fo54pf`,
                                    layoutDependency: C,
                                    layoutId: `GVUEOnkJ2`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.373 1.674" overflow="visible"><path d="M 0.055 1.024 L 7.237 0 C 7.251 -0.001 7.265 0.003 7.277 0.011 C 7.288 0.02 7.295 0.033 7.296 0.047 C 7.311 0.224 7.337 0.401 7.373 0.576 C 7.375 0.59 7.372 0.604 7.364 0.616 C 7.356 0.627 7.343 0.635 7.329 0.637 L 0.061 1.673 C 0.046 1.675 0.031 1.671 0.019 1.661 C 0.008 1.652 0.001 1.638 0.001 1.623 C -0.002 1.439 0.001 1.256 0.01 1.073 C 0.011 1.048 0.03 1.028 0.055 1.024 Z" fill="rgb(92,198,60)" opacity="0.84"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1iqdpzp`,
                                    layoutDependency: C,
                                    layoutId: `DTEnGtn2i`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.013 1" overflow="visible"><path d="M 0.21 0 L 6.964 0.321 C 6.978 0.322 6.991 0.328 7.001 0.339 C 7.01 0.35 7.015 0.364 7.013 0.378 C 6.995 0.556 6.986 0.733 6.986 0.911 C 6.987 0.925 6.981 0.939 6.971 0.949 C 6.961 0.958 6.947 0.964 6.933 0.963 L 0.05 0.636 C 0.034 0.635 0.02 0.627 0.01 0.615 C 0.001 0.602 -0.002 0.586 0.002 0.571 C 0.048 0.389 0.099 0.213 0.157 0.036 C 0.165 0.013 0.187 -0.002 0.21 0 Z" fill="rgb(92,198,60)" opacity="0.76"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1a3qwz1`,
                                    layoutDependency: C,
                                    layoutId: `Xic2f52Nk`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.351 2.068" overflow="visible"><path d="M 0.356 0.001 L 6.311 1.439 C 6.325 1.442 6.337 1.451 6.344 1.463 C 6.351 1.475 6.353 1.489 6.349 1.503 C 6.298 1.674 6.255 1.849 6.222 2.026 C 6.219 2.04 6.211 2.052 6.199 2.06 C 6.187 2.067 6.173 2.07 6.159 2.066 L 0.04 0.587 C 0.024 0.584 0.011 0.573 0.004 0.558 C -0.002 0.543 -0.001 0.526 0.007 0.512 C 0.099 0.347 0.196 0.184 0.299 0.024 C 0.311 0.005 0.334 -0.004 0.355 0.001 Z" fill="rgb(92,198,60)" opacity="0.68"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1oylwj1`,
                                    layoutDependency: C,
                                    layoutId: `cfp7y6Qug`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.412 2.827" overflow="visible"><path d="M 0.452 0.001 L 0.454 0 L 5.382 2.238 C 5.395 2.244 5.405 2.255 5.409 2.268 C 5.414 2.282 5.413 2.297 5.406 2.309 C 5.322 2.466 5.248 2.628 5.183 2.794 C 5.178 2.807 5.168 2.818 5.155 2.823 C 5.142 2.829 5.127 2.829 5.114 2.823 L 0.03 0.515 C 0.015 0.508 0.005 0.494 0.001 0.477 C -0.002 0.461 0.002 0.444 0.014 0.431 C 0.153 0.281 0.3 0.137 0.452 0 Z" fill="rgb(92,198,60)" opacity="0.6"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-9xeohq`,
                                    layoutDependency: C,
                                    layoutId: `xLHLSl6di`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.336 3.194" overflow="visible"><path d="M 0.497 0.035 L 0.557 0 L 4.316 2.662 C 4.327 2.671 4.334 2.684 4.336 2.698 C 4.338 2.711 4.334 2.725 4.325 2.736 C 4.213 2.875 4.109 3.02 4.013 3.17 C 4.006 3.182 3.994 3.19 3.98 3.193 C 3.966 3.196 3.951 3.193 3.94 3.184 L 0.022 0.411 C 0.001 0.395 -0.006 0.366 0.006 0.343 C 0.011 0.336 0.017 0.33 0.024 0.325 C 0.178 0.224 0.335 0.127 0.497 0.035 Z" fill="rgb(92,198,60)" opacity="0.48"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-ril5d0`,
                                    layoutDependency: C,
                                    layoutId: `a7gEmQ07s`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.267 3.182" overflow="visible"><path d="M 0.033 0.196 C 0.221 0.125 0.41 0.061 0.602 0.002 C 0.621 -0.003 0.642 0.002 0.656 0.016 L 3.253 2.725 C 3.263 2.735 3.268 2.749 3.267 2.763 C 3.266 2.777 3.259 2.79 3.249 2.799 C 3.112 2.914 2.982 3.038 2.857 3.167 C 2.848 3.177 2.834 3.182 2.821 3.182 C 2.807 3.182 2.793 3.177 2.784 3.167 L 0.014 0.281 C 0.002 0.268 -0.003 0.251 0.001 0.234 C 0.005 0.217 0.017 0.203 0.033 0.197 Z" fill="rgb(92,198,60)" opacity="0.35"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-16061gk`,
                                    layoutDependency: C,
                                    layoutId: `y6ExjuQBf`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.334 2.888" overflow="visible"><path d="M 0.044 0.078 C 0.243 0.045 0.443 0.019 0.644 0 C 0.664 -0.002 0.683 0.008 0.694 0.024 L 2.334 2.564 C 2.16 2.659 1.992 2.764 1.83 2.878 C 1.819 2.887 1.805 2.89 1.791 2.887 C 1.777 2.885 1.765 2.876 1.758 2.864 L 0.008 0.158 C -0.001 0.144 -0.003 0.125 0.005 0.109 C 0.012 0.093 0.026 0.081 0.044 0.078 Z" fill="rgb(92,198,60)" opacity="0.25"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1t71kiy`,
                                    layoutDependency: C,
                                    layoutId: `fdJ7k81fs`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.542 2.422" overflow="visible"><path d="M 0.053 0 C 0.254 0.004 0.455 0.018 0.655 0.036 C 0.675 0.037 0.692 0.05 0.7 0.068 L 1.538 2.148 C 1.543 2.161 1.543 2.175 1.537 2.188 C 1.531 2.201 1.52 2.211 1.507 2.215 C 1.337 2.274 1.17 2.341 1.007 2.417 C 0.988 2.426 0.965 2.422 0.95 2.407 C 0.945 2.402 0.941 2.396 0.938 2.389 L 0.004 0.071 C -0.003 0.055 -0.001 0.037 0.009 0.022 C 0.019 0.008 0.035 0 0.053 0 Z" fill="rgb(92,198,60)" opacity="0.12"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1azy1g6`,
                                    layoutDependency: C,
                                    layoutId: `tFZ9W9zFH`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1.921" overflow="visible"><path d="M 0.062 0.001 C 0.258 0.038 0.451 0.083 0.643 0.133 C 0.662 0.138 0.677 0.154 0.681 0.173 L 0.987 1.756 C 0.989 1.77 0.986 1.785 0.978 1.796 C 0.97 1.808 0.957 1.815 0.943 1.817 C 0.766 1.841 0.59 1.875 0.416 1.919 C 0.402 1.923 0.388 1.92 0.376 1.913 C 0.364 1.905 0.356 1.893 0.353 1.879 L 0.001 0.061 C -0.002 0.044 0.003 0.027 0.016 0.015 C 0.028 0.003 0.045 -0.002 0.062 0.001 Z" fill="rgb(92,198,60)" opacity="0.05"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-l5q5dx`,
                                    layoutDependency: C,
                                    layoutId: `oxlntfukX`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.04 4.393" overflow="visible"><path d="M 0.026 3.829 L 6.691 0.007 C 6.703 0 6.718 -0.002 6.732 0.002 C 6.746 0.007 6.757 0.016 6.763 0.029 C 6.844 0.188 6.933 0.342 7.031 0.491 C 7.039 0.503 7.042 0.518 7.039 0.531 C 7.035 0.545 7.027 0.557 7.015 0.564 L 0.35 4.386 C 0.325 4.4 0.294 4.392 0.279 4.369 C 0.185 4.214 0.094 4.057 0.007 3.898 C 0 3.887 -0.002 3.873 0.002 3.86 C 0.006 3.847 0.014 3.836 0.026 3.829 Z" fill="rgb(92,198,60)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-17dndx4`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `AbbBRY5Cw`,
                            children: [
                              l(b.div, {
                                className: `framer-ytnjkz`,
                                layoutDependency: C,
                                layoutId: `Gizj_9d_J`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-194uiq2`,
                                layoutDependency: C,
                                layoutId: `GAe614bs7`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 45 24" overflow="visible"><g><path d="M 4.318 12.974 C 3.631 12.057 2.953 11.132 2.286 10.201 L 2.256 10.215 C 2.271 11.239 2.286 12.277 2.286 13.316 L 2.286 17.307 L 0 17.307 L 0 6.565 L 2.24 6.565 L 5.483 10.898 C 6.17 11.816 6.848 12.74 7.515 13.672 L 7.545 13.657 C 7.527 12.624 7.517 11.59 7.515 10.557 L 7.515 6.565 L 9.801 6.565 L 9.801 17.307 L 7.559 17.307 Z" fill="rgb(255, 255, 255)"></path><path d="M 37.71 14.36 C 38.875 15.102 40.249 15.429 41.101 15.429 C 41.967 15.429 42.61 15.087 42.61 14.286 C 42.61 13.292 41.594 13.203 40.204 12.758 C 38.711 12.269 37.366 11.542 37.366 9.673 C 37.366 7.669 38.889 6.423 41.16 6.423 C 42.22 6.423 43.52 6.69 44.461 7.194 L 44.461 9.524 C 43.312 8.812 41.982 8.485 41.146 8.485 C 40.338 8.485 39.756 8.782 39.756 9.494 C 39.756 10.443 40.756 10.518 42.056 10.948 C 43.685 11.482 45 12.238 45 14.138 C 45 16.23 43.401 17.491 41.07 17.491 C 39.995 17.491 38.696 17.224 37.71 16.734 Z" fill="rgb(255, 255, 255)"></path><path d="M 23.569 5.017 C 23.804 5.005 24.04 5.005 24.276 5.017 L 24.421 0 L 23.425 0 Z" fill="rgb(255, 255, 255)"></path><path d="M 23.569 18.983 C 23.804 18.995 24.04 18.995 24.276 18.983 L 24.421 24 L 23.425 24 Z" fill="rgb(255, 255, 255)"></path><path d="M 16.98 12.264 C 16.974 12.149 16.972 12.033 16.972 11.918 C 16.972 11.799 16.974 11.68 16.98 11.561 L 11.928 11.418 L 11.928 12.407 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.898 12.264 C 30.91 12.03 30.91 11.795 30.898 11.561 L 35.95 11.418 L 35.95 12.407 Z" fill="rgb(255, 255, 255)"></path><path d="M 22.433 5.231 C 22.546 5.205 22.659 5.182 22.774 5.163 C 22.893 5.142 23.012 5.124 23.13 5.109 L 22.395 0.143 L 21.413 0.314 Z" fill="rgb(255, 255, 255)"></path><path d="M 24.862 18.82 C 24.978 18.805 25.092 18.788 25.207 18.767 C 25.327 18.747 25.444 18.724 25.56 18.697 L 26.579 23.613 L 25.599 23.786 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.051 13.537 C 17.026 13.424 17.002 13.311 16.981 13.197 C 16.961 13.08 16.943 12.962 16.928 12.845 L 11.928 13.575 L 12.101 14.548 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.877 11.125 C 30.863 11.01 30.846 10.897 30.825 10.782 C 30.805 10.665 30.781 10.548 30.755 10.433 L 35.705 9.42 L 35.878 10.394 Z" fill="rgb(255, 255, 255)"></path><path d="M 21.264 5.575 C 21.482 5.485 21.704 5.405 21.929 5.335 L 20.337 0.571 L 19.401 0.909 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.012 18.652 C 26.237 18.582 26.458 18.502 26.676 18.412 L 28.54 23.077 L 27.605 23.415 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.541 14.647 C 17.497 14.541 17.454 14.433 17.414 14.324 C 17.372 14.212 17.335 14.1 17.3 13.987 L 12.503 15.568 L 12.843 16.497 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.566 9.933 C 30.532 9.823 30.495 9.714 30.456 9.604 C 30.414 9.493 30.37 9.382 30.324 9.273 L 35.023 7.422 L 35.363 8.351 Z" fill="rgb(255, 255, 255)"></path><path d="M 20.184 6.196 C 20.382 6.068 20.586 5.951 20.796 5.845 L 18.396 1.427 L 17.533 1.922 Z" fill="rgb(255, 255, 255)"></path><path d="M 27.162 18.192 C 27.371 18.084 27.576 17.967 27.774 17.841 L 30.426 22.114 L 29.563 22.608 Z" fill="rgb(255, 255, 255)"></path><path d="M 18.022 15.737 C 17.894 15.54 17.776 15.337 17.669 15.129 L 13.222 17.514 L 13.718 18.369 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.102 8.808 C 29.995 8.599 29.877 8.396 29.749 8.199 L 34.051 5.566 L 34.549 6.423 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.167 6.814 C 19.251 6.736 19.339 6.659 19.428 6.584 C 19.52 6.508 19.613 6.434 19.708 6.362 L 16.572 2.426 L 15.809 3.062 Z" fill="rgb(255, 255, 255)"></path><path d="M 28.168 17.579 C 28.26 17.51 28.351 17.437 28.441 17.363 C 28.533 17.286 28.622 17.208 28.71 17.127 L 32.068 20.878 L 31.305 21.514 Z" fill="rgb(255, 255, 255)"></path><path d="M 18.789 16.665 C 18.71 16.581 18.633 16.494 18.558 16.406 C 18.481 16.315 18.406 16.222 18.335 16.128 L 14.371 19.242 L 15.011 20 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.484 7.727 C 29.415 7.636 29.342 7.544 29.267 7.455 C 29.19 7.364 29.11 7.275 29.03 7.189 L 32.807 3.854 L 33.448 4.61 Z" fill="rgb(255, 255, 255)"></path><path d="M 18.335 7.727 C 18.404 7.635 18.477 7.544 18.551 7.455 C 18.629 7.364 18.708 7.275 18.789 7.189 L 15.012 3.854 L 14.371 4.611 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.03 16.666 C 29.191 16.494 29.342 16.315 29.485 16.128 L 33.449 19.243 L 32.808 20.001 Z" fill="rgb(255, 255, 255)"></path><path d="M 19.709 17.579 C 19.521 17.437 19.341 17.286 19.168 17.127 L 15.809 20.878 L 16.572 21.514 Z" fill="rgb(255, 255, 255)"></path><path d="M 28.709 6.814 C 28.536 6.654 28.356 6.504 28.168 6.362 L 31.303 2.426 L 32.067 3.062 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.668 8.808 C 17.775 8.599 17.893 8.395 18.022 8.199 L 13.718 5.566 L 13.222 6.423 Z" fill="rgb(255, 255, 255)"></path><path d="M 29.749 15.737 C 29.812 15.64 29.873 15.542 29.931 15.442 C 29.991 15.338 30.049 15.233 30.104 15.129 L 34.549 17.514 L 34.053 18.369 Z" fill="rgb(255, 255, 255)"></path><path d="M 20.797 18.192 C 20.587 18.084 20.383 17.967 20.185 17.841 L 17.533 22.113 L 18.396 22.608 Z" fill="rgb(255, 255, 255)"></path><path d="M 27.773 6.054 C 27.676 5.991 27.577 5.93 27.477 5.872 C 27.372 5.813 27.268 5.756 27.162 5.703 L 29.562 1.285 L 30.425 1.78 Z" fill="rgb(255, 255, 255)"></path><path d="M 17.299 9.932 C 17.368 9.709 17.449 9.488 17.541 9.273 L 12.842 7.422 L 12.503 8.351 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.324 14.647 C 30.367 14.542 30.41 14.434 30.451 14.325 C 30.491 14.212 30.529 14.1 30.564 13.987 L 35.361 15.568 L 35.021 16.497 Z" fill="rgb(255, 255, 255)"></path><path d="M 21.929 18.652 C 21.818 18.618 21.708 18.58 21.599 18.54 C 21.486 18.501 21.374 18.457 21.265 18.412 L 19.401 23.076 L 20.336 23.415 Z" fill="rgb(255, 255, 255)"></path><path d="M 26.677 5.575 C 26.46 5.484 26.238 5.404 26.012 5.335 L 27.604 0.571 L 28.539 0.909 Z" fill="rgb(255, 255, 255)"></path><path d="M 16.928 11.124 C 16.942 11.01 16.96 10.896 16.979 10.782 C 17.001 10.665 17.025 10.548 17.051 10.433 L 12.101 9.42 L 11.928 10.394 Z" fill="rgb(255, 255, 255)"></path><path d="M 30.755 13.537 C 30.779 13.426 30.803 13.312 30.823 13.198 C 30.845 13.08 30.862 12.963 30.877 12.845 L 35.877 13.576 L 35.705 14.549 Z" fill="rgb(255, 255, 255)"></path><path d="M 23.129 18.82 C 23.014 18.804 22.9 18.788 22.785 18.767 C 22.666 18.747 22.548 18.724 22.434 18.697 L 21.413 23.613 L 22.393 23.785 Z" fill="rgb(255, 255, 255)"></path><path d="M 25.558 5.232 C 25.445 5.206 25.332 5.183 25.217 5.162 C 25.097 5.141 24.979 5.124 24.862 5.109 L 25.596 0.143 L 26.577 0.314 Z" fill="rgb(255, 255, 255)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  l(A, {
                                    className: `framer-1hanrni`,
                                    layoutDependency: C,
                                    layoutId: `A8bGGlo1t`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.801 10.742" overflow="visible"><path d="M 4.318 6.409 C 3.631 5.491 2.953 4.567 2.286 3.635 L 2.256 3.649 C 2.271 4.674 2.286 5.712 2.286 6.751 L 2.286 10.742 L 0 10.742 L 0 0 L 2.24 0 L 5.483 4.333 C 6.17 5.25 6.848 6.175 7.515 7.107 L 7.545 7.092 C 7.527 6.058 7.517 5.025 7.515 3.991 L 7.515 0 L 9.801 0 L 9.801 10.742 L 7.559 10.742 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-16g2lvc`,
                                    layoutDependency: C,
                                    layoutId: `E6Ylmhkfy`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.634 11.068" overflow="visible"><path d="M 0.344 7.937 C 1.509 8.679 2.883 9.006 3.735 9.006 C 4.601 9.006 5.245 8.664 5.245 7.863 C 5.245 6.869 4.229 6.78 2.838 6.335 C 1.345 5.846 0 5.119 0 3.25 C 0 1.246 1.523 0 3.795 0 C 4.855 0 6.155 0.267 7.096 0.771 L 7.096 3.101 C 5.946 2.389 4.616 2.063 3.78 2.063 C 2.972 2.063 2.39 2.359 2.39 3.071 C 2.39 4.02 3.391 4.095 4.691 4.526 C 6.319 5.059 7.634 5.816 7.634 7.715 C 7.634 9.807 6.035 11.068 3.705 11.068 C 2.629 11.068 1.33 10.801 0.344 10.312 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-nhmq8z`,
                                    layoutDependency: C,
                                    layoutId: `LXcYpjl3w`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 5.017" overflow="visible"><path d="M 0.144 5.017 C 0.379 5.005 0.615 5.005 0.85 5.017 L 0.995 0 L 0 0 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1hsezv0`,
                                    layoutDependency: C,
                                    layoutId: `CxF7ZjpfH`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 5.017" overflow="visible"><path d="M 0.144 0 C 0.379 0.012 0.615 0.012 0.85 0 L 0.995 5.017 L 0 5.017 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-i742ds`,
                                    layoutDependency: C,
                                    layoutId: `JzGHv85LW`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.052 1" overflow="visible"><path d="M 5.052 0.846 C 5.046 0.731 5.044 0.615 5.044 0.499 C 5.044 0.38 5.046 0.261 5.052 0.143 L 0 0 L 0 0.988 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-2qs6tg`,
                                    layoutDependency: C,
                                    layoutId: `yysagRgQR`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.052 1" overflow="visible"><path d="M 0 0.846 C 0.011 0.612 0.011 0.377 0 0.143 L 5.052 0 L 5.052 0.988 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-bwjngz`,
                                    layoutDependency: C,
                                    layoutId: `Hs_D9WjqO`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.716 5.088" overflow="visible"><path d="M 1.019 5.088 C 1.132 5.063 1.246 5.04 1.36 5.02 C 1.48 4.999 1.598 4.981 1.716 4.966 L 0.982 0 L 0 0.172 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-4ouxbw`,
                                    layoutDependency: C,
                                    layoutId: `UBlBKZ_W_`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.716 5.088" overflow="visible"><path d="M 0 0.123 C 0.116 0.108 0.23 0.091 0.345 0.07 C 0.464 0.05 0.581 0.027 0.697 0 L 1.716 4.916 L 0.736 5.088 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-15ltqmw`,
                                    layoutDependency: C,
                                    layoutId: `UcprIWaom`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.123 1.703" overflow="visible"><path d="M 5.123 0.691 C 5.098 0.579 5.074 0.466 5.053 0.352 C 5.033 0.235 5.015 0.117 5 0 L 0 0.729 L 0.172 1.703 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-nps9iv`,
                                    layoutDependency: C,
                                    layoutId: `qh7RxDgW3`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.123 1.705" overflow="visible"><path d="M 0.123 1.705 C 0.108 1.591 0.092 1.477 0.07 1.362 C 0.051 1.245 0.026 1.128 0 1.013 L 4.95 0 L 5.123 0.974 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-oowizc`,
                                    layoutDependency: C,
                                    layoutId: `ratpTFa8_`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.527 5.004" overflow="visible"><path d="M 1.862 5.004 C 2.08 4.914 2.302 4.834 2.527 4.764 L 0.936 0 L 0 0.338 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-10j8n9h`,
                                    layoutDependency: C,
                                    layoutId: `LRH6oBsaU`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.528 5.004" overflow="visible"><path d="M 0 0.24 C 0.225 0.17 0.446 0.09 0.664 0 L 2.528 4.665 L 1.593 5.004 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-ie4hja`,
                                    layoutDependency: C,
                                    layoutId: `Nn1mgCvk7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.038 2.51" overflow="visible"><path d="M 5.038 0.659 C 4.994 0.554 4.951 0.446 4.911 0.337 C 4.869 0.225 4.832 0.113 4.797 0 L 0 1.581 L 0.34 2.51 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1tncp3a`,
                                    layoutDependency: C,
                                    layoutId: `BBkzOoCPr`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.039 2.511" overflow="visible"><path d="M 0.242 2.511 C 0.208 2.401 0.171 2.292 0.132 2.182 C 0.09 2.071 0.047 1.96 0 1.851 L 4.699 0 L 5.039 0.929 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1f2pztn`,
                                    layoutDependency: C,
                                    layoutId: `rrGCl8P9F`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.263 4.768" overflow="visible"><path d="M 2.651 4.768 C 2.849 4.641 3.053 4.524 3.263 4.418 L 0.863 0 L 0 0.494 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1sao1or`,
                                    layoutDependency: C,
                                    layoutId: `LCbPshfYA`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.264 4.767" overflow="visible"><path d="M 0 0.351 C 0.21 0.244 0.414 0.126 0.612 0 L 3.264 4.273 L 2.402 4.767 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1x260ct`,
                                    layoutDependency: C,
                                    layoutId: `vOwMY5bgg`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.801 3.24" overflow="visible"><path d="M 4.801 0.608 C 4.672 0.411 4.554 0.209 4.447 0 L 0 2.385 L 0.497 3.24 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-9t2lgu`,
                                    layoutDependency: C,
                                    layoutId: `yeyzZ9yIo`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.8 3.242" overflow="visible"><path d="M 0.353 3.242 C 0.246 3.033 0.128 2.83 0 2.633 L 4.302 0 L 4.8 0.857 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-248jat`,
                                    layoutDependency: C,
                                    layoutId: `ioV2GVSUz`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.899 4.388" overflow="visible"><path d="M 3.359 4.388 C 3.443 4.31 3.53 4.233 3.619 4.158 C 3.712 4.081 3.805 4.008 3.899 3.936 L 0.764 0 L 0 0.636 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1m36qwo`,
                                    layoutDependency: C,
                                    layoutId: `uADoxnXvb`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.901 4.386" overflow="visible"><path d="M 0 0.451 C 0.092 0.382 0.183 0.31 0.273 0.236 C 0.365 0.159 0.454 0.08 0.542 0 L 3.901 3.751 L 3.137 4.386 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-gdqb34`,
                                    layoutDependency: C,
                                    layoutId: `CtKNmVtsI`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.417 3.872" overflow="visible"><path d="M 4.417 0.537 C 4.339 0.453 4.262 0.366 4.187 0.278 C 4.109 0.187 4.035 0.094 3.963 0 L 0 3.114 L 0.64 3.872 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-48o8tv`,
                                    layoutDependency: C,
                                    layoutId: `qTzQUGN3e`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.418 3.873" overflow="visible"><path d="M 0.454 3.873 C 0.385 3.782 0.312 3.691 0.237 3.601 C 0.16 3.51 0.08 3.422 0 3.335 L 3.776 0 L 4.418 0.757 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1cc8xyj`,
                                    layoutDependency: C,
                                    layoutId: `tygfMNnpc`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.417 3.873" overflow="visible"><path d="M 3.963 3.873 C 4.033 3.781 4.106 3.691 4.18 3.601 C 4.257 3.511 4.336 3.422 4.417 3.335 L 0.641 0 L 0 0.758 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1l8xl66`,
                                    layoutDependency: C,
                                    layoutId: `BMVxUVuzt`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.418 3.873" overflow="visible"><path d="M 0 0.538 C 0.16 0.366 0.312 0.187 0.455 0 L 4.418 3.115 L 3.778 3.873 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-59hvwg`,
                                    layoutDependency: C,
                                    layoutId: `h9jbdnbxi`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.901 4.386" overflow="visible"><path d="M 3.901 0.451 C 3.713 0.31 3.532 0.159 3.359 0 L 0 3.751 L 0.764 4.386 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1fhf81d`,
                                    layoutDependency: C,
                                    layoutId: `ePi0eP88R`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.899 4.388" overflow="visible"><path d="M 0.541 4.388 C 0.368 4.228 0.188 4.077 0 3.936 L 3.135 0 L 3.899 0.636 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-s93sw6`,
                                    layoutDependency: C,
                                    layoutId: `I0TbbOkYO`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.8 3.242" overflow="visible"><path d="M 4.447 3.242 C 4.553 3.032 4.671 2.829 4.8 2.633 L 0.496 0 L 0 0.857 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-ytcf8q`,
                                    layoutDependency: C,
                                    layoutId: `s9iY4Im3N`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.801 3.24" overflow="visible"><path d="M 0 0.608 C 0.063 0.511 0.124 0.413 0.182 0.313 C 0.242 0.209 0.301 0.104 0.355 0 L 4.801 2.385 L 4.304 3.24 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-hj7qn`,
                                    layoutDependency: C,
                                    layoutId: `Oi2Rz2rLv`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.264 4.767" overflow="visible"><path d="M 3.264 0.351 C 3.054 0.244 2.85 0.127 2.652 0 L 0 4.272 L 0.862 4.767 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-t8tx7p`,
                                    layoutDependency: C,
                                    layoutId: `kQSFfJOsM`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.263 4.769" overflow="visible"><path d="M 0.611 4.769 C 0.514 4.706 0.416 4.645 0.315 4.587 C 0.21 4.528 0.106 4.472 0 4.418 L 2.4 0 L 3.263 0.495 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-t4cnv0`,
                                    layoutDependency: C,
                                    layoutId: `TBUm9kwYk`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.038 2.511" overflow="visible"><path d="M 4.796 2.511 C 4.865 2.287 4.946 2.067 5.038 1.851 L 0.339 0 L 0 0.93 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-ahsoo`,
                                    layoutDependency: C,
                                    layoutId: `l1eGk1oBJ`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.038 2.51" overflow="visible"><path d="M 0 0.66 C 0.044 0.555 0.087 0.447 0.127 0.338 C 0.168 0.225 0.206 0.113 0.241 0 L 5.038 1.581 L 4.697 2.51 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-f8qajg`,
                                    layoutDependency: C,
                                    layoutId: `DMfEXUUyk`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.528 5.004" overflow="visible"><path d="M 2.528 0.24 C 2.417 0.206 2.307 0.169 2.198 0.129 C 2.084 0.089 1.973 0.045 1.864 0 L 0 4.664 L 0.935 5.004 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1j9fmkj`,
                                    layoutDependency: C,
                                    layoutId: `rJ7a74qNQ`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.527 5.005" overflow="visible"><path d="M 0.664 5.005 C 0.447 4.913 0.226 4.833 0 4.764 L 1.591 0 L 2.527 0.338 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-16wqsbl`,
                                    layoutDependency: C,
                                    layoutId: `qYncWrXMO`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.123 1.704" overflow="visible"><path d="M 5 1.704 C 5.014 1.59 5.031 1.476 5.051 1.362 C 5.073 1.245 5.097 1.128 5.123 1.013 L 0.173 0 L 0 0.974 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-g2ghx7`,
                                    layoutDependency: C,
                                    layoutId: `a_gXX18nG`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.122 1.704" overflow="visible"><path d="M 0 0.692 C 0.025 0.58 0.049 0.466 0.068 0.353 C 0.09 0.235 0.107 0.117 0.123 0 L 5.122 0.73 L 4.95 1.704 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-6emczt`,
                                    layoutDependency: C,
                                    layoutId: `VhXbTDRS3`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.716 5.088" overflow="visible"><path d="M 1.716 0.123 C 1.601 0.107 1.486 0.091 1.372 0.07 C 1.252 0.05 1.135 0.027 1.02 0 L 0 4.916 L 0.98 5.088 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-c8379a`,
                                    layoutDependency: C,
                                    layoutId: `jpuMRbQnZ`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.715 5.089" overflow="visible"><path d="M 0.695 5.089 C 0.583 5.063 0.469 5.04 0.354 5.019 C 0.235 4.998 0.117 4.982 0 4.967 L 0.733 0 L 1.715 0.172 Z" fill="rgb(255, 255, 255)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-1xb6ycd`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `nXz1FwSRp`,
                            style: { filter: `invert(0)`, WebkitFilter: `invert(0)` },
                            children: [
                              l(b.div, {
                                className: `framer-tbhqad`,
                                layoutDependency: C,
                                layoutId: `Vcc3xrXb5`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-hkz37u`,
                                layoutDependency: C,
                                layoutId: `oS7imbl70`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 115 24" overflow="visible"><path d="M 0 0.39 L 16.754 0.39 L 16.754 4.894 L 10.869 4.894 L 10.869 23.591 L 5.866 23.591 L 5.866 4.894 L 0 4.894 Z M 24.307 15.305 L 24.307 23.591 L 19.285 23.591 L 19.285 0.39 L 27.93 0.39 C 31.707 0.39 35.598 2.613 35.598 7.857 C 35.598 11.347 33.892 13.452 31.649 14.525 L 36.634 23.61 L 31.017 23.61 L 26.914 15.324 L 24.307 15.324 Z M 27.375 4.894 L 24.307 4.894 L 24.307 10.801 L 27.375 10.801 C 29.196 10.801 30.576 9.963 30.576 7.857 C 30.576 5.732 29.196 4.894 27.375 4.894 Z M 55.573 9.319 L 55.573 14.681 C 55.573 20.12 52.18 24 46.928 24 C 41.675 24 38.301 20.12 38.301 14.681 L 38.301 9.319 C 38.301 3.88 41.694 0 46.928 0 C 52.161 0 55.573 3.88 55.573 9.319 Z M 50.57 14.213 L 50.57 9.768 C 50.57 6.258 49.228 4.504 46.947 4.504 C 44.666 4.504 43.324 6.258 43.324 9.768 L 43.324 14.213 C 43.324 17.722 44.666 19.477 46.947 19.477 C 49.228 19.496 50.57 17.742 50.57 14.213 Z M 64.085 12.653 C 64.085 17.332 64.794 19.516 67.516 19.516 C 70.238 19.516 70.948 17.332 70.948 12.653 L 70.948 0.39 L 75.97 0.39 L 75.97 14.973 C 75.97 20.452 72.769 24 67.535 24 C 62.283 24 59.101 20.452 59.101 14.973 L 59.101 0.39 L 64.123 0.39 L 64.123 12.653 Z M 78.136 0.39 L 83.408 0.39 L 87.913 16.104 L 92.418 0.39 L 97.69 0.39 L 90.52 23.591 L 85.306 23.591 Z M 101.485 19.301 L 100.239 23.61 L 94.987 23.61 L 102.386 0.409 L 107.6 0.409 L 115 23.61 L 109.747 23.61 L 108.501 19.301 Z M 107.351 15.11 L 104.993 6.96 L 102.655 15.11 Z" fill="rgb(230, 230, 230)"></path></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  l(A, {
                                    className: `framer-56om0h`,
                                    layoutDependency: C,
                                    layoutId: `i9U_CVTr2`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.754 23.201" overflow="visible"><path d="M 0 0 L 16.754 0 L 16.754 4.504 L 10.869 4.504 L 10.869 23.201 L 5.866 23.201 L 5.866 4.504 L 0 4.504 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1hmmnpn`,
                                    layoutDependency: C,
                                    layoutId: `ZO2yYySUz`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.349 23.22" overflow="visible"><path d="M 5.023 14.915 L 5.023 23.201 L 0 23.201 L 0 0 L 8.646 0 C 12.422 0 16.314 2.223 16.314 7.467 C 16.314 10.957 14.607 13.063 12.365 14.135 L 17.349 23.22 L 11.732 23.22 L 7.63 14.934 L 5.023 14.934 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-w9bcam`,
                                    layoutDependency: C,
                                    layoutId: `ofxfE_NF7`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.269 5.907" overflow="visible"><path d="M 3.067 0 L 0 0 L 0 5.907 L 3.067 5.907 C 4.888 5.907 6.269 5.069 6.269 2.963 C 6.269 0.838 4.888 0 3.067 0 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1fbqcus`,
                                    layoutDependency: C,
                                    layoutId: `yj86VeYsz`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.272 24" overflow="visible"><path d="M 17.272 9.319 L 17.272 14.681 C 17.272 20.12 13.879 24 8.626 24 C 3.374 24 0 20.12 0 14.681 L 0 9.319 C 0 3.88 3.393 0 8.626 0 C 13.86 0 17.272 3.88 17.272 9.319 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-byhlbt`,
                                    layoutDependency: C,
                                    layoutId: `krY_BJ_vo`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.246 14.973" overflow="visible"><path d="M 7.246 9.709 L 7.246 5.264 C 7.246 1.755 5.904 0 3.623 0 C 1.342 0 0 1.755 0 5.264 L 0 9.709 C 0 13.219 1.342 14.973 3.623 14.973 C 5.904 14.993 7.246 13.238 7.246 9.709 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-16zg9oh`,
                                    layoutDependency: C,
                                    layoutId: `HsFh52x_H`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.869 23.61" overflow="visible"><path d="M 4.984 12.263 C 4.984 16.942 5.693 19.126 8.416 19.126 C 11.138 19.126 11.847 16.942 11.847 12.263 L 11.847 0 L 16.869 0 L 16.869 14.583 C 16.869 20.062 13.668 23.61 8.435 23.61 C 3.182 23.61 0 20.062 0 14.583 L 0 0 L 5.023 0 L 5.023 12.263 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-1ph6kao`,
                                    layoutDependency: C,
                                    layoutId: `YMdGBEXxO`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.553 23.201" overflow="visible"><path d="M 0 0 L 5.272 0 L 9.777 15.714 L 14.282 0 L 19.553 0 L 12.384 23.201 L 7.17 23.201 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-3iqd9`,
                                    layoutDependency: C,
                                    layoutId: `tmoY5GrGX`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.013 23.201" overflow="visible"><path d="M 6.499 18.892 L 5.253 23.201 L 0 23.201 L 7.4 0 L 12.614 0 L 20.013 23.201 L 14.761 23.201 L 13.515 18.892 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  l(A, {
                                    className: `framer-uj68aq`,
                                    layoutDependency: C,
                                    layoutId: `OjlQVwvLu`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.697 8.149" overflow="visible"><path d="M 4.697 8.149 L 2.339 0 L 0 8.149 Z" fill="transparent"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-1ujqqf1`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `ueEjN5pWF`,
                            children: [
                              l(b.div, {
                                className: `framer-hgo10y`,
                                layoutDependency: C,
                                layoutId: `RMV7b56_O`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              l(U, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  pixelHeight: 361,
                                  pixelWidth: 2e3,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `127px`,
                                  src: `../../assets/images/dkyq7sTw3qsBBFg944KbTKZFs7s-d90fcb.png`,
                                  srcSet: `../../assets/images/dkyq7sTw3qsBBFg944KbTKZFs7s.png 512w,../../assets/images/dkyq7sTw3qsBBFg944KbTKZFs7s-da9d73.png 1024w,../../assets/images/dkyq7sTw3qsBBFg944KbTKZFs7s-d90fcb.png 2000w`,
                                },
                                className: `framer-6agt3`,
                                layoutDependency: C,
                                layoutId: `iSTyNKKb6`,
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-mx88b3`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `mfOBtRaMj`,
                            children: [
                              l(b.div, {
                                className: `framer-11l82fz`,
                                layoutDependency: C,
                                layoutId: `jtp3esgTZ`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-dpdram`,
                                layoutDependency: C,
                                layoutId: `B60YhjL7R`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 106.051 23.897" overflow="visible"><g><path d="M 0 20.49 L 0 0.206 L 4.587 0.206 L 4.383 18.219 C 4.383 19.097 5.096 19.819 5.962 19.819 L 14.116 19.819 L 14.116 23.69 L 3.16 23.69 C 1.427 23.69 0 22.245 0 20.49 Z" fill="rgb(255,111,97)"></path><path d="M 47.292 13.213 L 47.292 23.535 L 44.082 23.535 C 44.082 22.658 44.082 21.781 44.184 20.852 L 44.082 20.852 C 42.91 22.865 40.514 23.794 38.272 23.794 C 36.03 23.794 32.055 22.142 32.055 18.477 C 32.055 14.813 35.265 13.006 38.578 13.006 C 41.89 13.006 42.247 13.316 43.623 14.194 L 43.623 13.316 C 43.623 10.735 41.483 9.91 39.037 9.91 C 36.59 9.91 35.571 10.426 34.195 10.942 L 33.329 8.052 C 35.214 7.226 37.151 6.813 39.291 6.813 C 43.776 6.813 47.292 8.361 47.292 13.265 Z M 43.623 17.084 C 42.451 16.31 40.718 15.845 39.291 15.845 C 37.864 15.845 35.724 16.619 35.724 18.323 C 35.724 20.026 37.508 20.748 39.088 20.748 C 40.667 20.748 43.317 19.561 43.572 17.135 Z" fill="rgb(255,111,97)"></path><path d="M 49.127 15.329 C 49.127 10.116 52.49 6.71 57.077 6.71 C 61.663 6.71 61.867 8.052 62.887 9.858 L 62.683 0.206 L 66.301 0.206 L 66.301 23.535 L 62.887 23.535 L 62.887 20.852 L 62.785 20.852 C 62.02 22.452 59.829 23.897 57.077 23.897 C 52.439 23.897 49.076 20.594 49.076 15.329 Z M 62.683 15.381 C 62.683 12.232 60.644 10.013 57.739 10.013 C 54.835 10.013 52.796 12.232 52.796 15.226 C 52.796 18.219 54.835 20.594 57.688 20.594 C 60.542 20.594 62.683 18.426 62.683 15.381 Z" fill="rgb(255,111,97)"></path><path d="M 69.104 22.245 C 69.104 21.729 69.257 21.265 69.562 20.852 L 76.442 11.819 L 77.512 10.374 L 69.613 10.374 L 69.613 7.071 L 82.66 7.071 L 82.66 8.258 C 82.66 8.774 82.507 9.239 82.201 9.652 L 75.117 18.942 C 74.608 19.613 74.404 19.871 74.149 20.232 L 82.762 20.232 L 82.762 23.587 L 69.053 23.587 L 69.053 22.297 Z" fill="rgb(255,111,97)"></path><path d="M 99.171 13.213 L 99.171 23.535 L 95.961 23.535 C 95.961 22.658 95.961 21.781 96.062 20.852 L 95.961 20.852 C 94.788 22.865 92.393 23.794 90.151 23.794 C 87.909 23.794 83.934 22.142 83.934 18.477 C 83.934 14.813 87.144 13.006 90.457 13.006 C 93.769 13.006 94.126 13.316 95.502 14.194 L 95.502 13.316 C 95.502 10.735 93.362 9.91 90.915 9.91 C 88.469 9.91 87.45 10.426 86.074 10.942 L 85.208 8.052 C 87.093 7.226 89.03 6.813 91.17 6.813 C 95.655 6.813 99.171 8.361 99.171 13.265 Z M 95.502 17.084 C 94.33 16.31 92.597 15.845 91.17 15.845 C 89.743 15.845 87.603 16.619 87.603 18.323 C 87.603 20.026 89.387 20.748 90.966 20.748 C 92.546 20.748 95.196 19.561 95.451 17.135 Z M 101.362 2.323 C 101.362 0.981 102.331 0 103.707 0 C 105.083 0 106.051 0.981 106.051 2.323 C 106.051 3.665 105.083 4.594 103.707 4.594 C 102.331 4.594 101.362 3.613 101.362 2.323 Z M 101.923 7.071 L 105.592 7.071 L 105.592 23.535 L 101.923 23.535 Z" fill="rgb(255,111,97)"></path><path d="M 28.029 18.219 C 27.213 19.045 26.296 19.665 25.43 20.026 C 22.933 21.11 20.487 20.439 19.314 18.271 L 30.73 13.316 C 30.577 12.852 30.424 12.387 30.22 11.923 C 28.029 6.761 23.952 5.471 19.926 7.226 C 15.339 9.239 13.352 13.832 15.39 18.529 C 17.429 23.381 21.913 25.032 26.551 23.019 C 27.978 22.4 29.456 21.419 30.526 20.181 Z M 21.047 10.168 C 23.238 9.239 25.328 9.703 26.5 12.026 L 18.244 15.587 C 17.633 13.006 18.856 11.097 21.047 10.116 Z" fill="rgb(255,111,97)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  l(A, {
                                    className: `framer-18wt493`,
                                    layoutDependency: C,
                                    layoutId: `b_sKd2Y7r`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.116 23.484" overflow="visible"><path d="M 0 20.284 L 0 0 L 4.587 0 L 4.383 18.013 C 4.383 18.89 5.096 19.613 5.962 19.613 L 14.116 19.613 L 14.116 23.484 L 3.16 23.484 C 1.427 23.484 0 22.039 0 20.284 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1pb39ph`,
                                    layoutDependency: C,
                                    layoutId: `yQeAGD56K`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.238 16.981" overflow="visible"><path d="M 15.238 6.4 L 15.238 16.723 L 12.027 16.723 C 12.027 15.845 12.027 14.968 12.129 14.039 L 12.027 14.039 C 10.855 16.052 8.46 16.981 6.217 16.981 C 3.975 16.981 0 15.329 0 11.665 C 0 8 3.211 6.194 6.523 6.194 C 9.836 6.194 10.192 6.503 11.568 7.381 L 11.568 6.503 C 11.568 3.923 9.428 3.097 6.982 3.097 C 4.536 3.097 3.516 3.613 2.14 4.129 L 1.274 1.239 C 3.16 0.413 5.096 0 7.237 0 C 11.721 0 15.238 1.548 15.238 6.452 Z M 11.568 10.271 C 10.396 9.497 8.663 9.032 7.237 9.032 C 5.81 9.032 3.669 9.806 3.669 11.51 C 3.669 13.213 5.453 13.935 7.033 13.935 C 8.612 13.935 11.262 12.748 11.517 10.323 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-1mot1q5`,
                                        layoutDependency: C,
                                        layoutId: `QeJOV15VH`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.238 16.981" overflow="visible"><path d="M 15.238 6.4 L 15.238 16.723 L 12.027 16.723 C 12.027 15.845 12.027 14.968 12.129 14.039 L 12.027 14.039 C 10.855 16.052 8.46 16.981 6.217 16.981 C 3.975 16.981 0 15.329 0 11.665 C 0 8 3.211 6.194 6.523 6.194 C 9.836 6.194 10.192 6.503 11.568 7.381 L 11.568 6.503 C 11.568 3.923 9.428 3.097 6.982 3.097 C 4.536 3.097 3.516 3.613 2.14 4.129 L 1.274 1.239 C 3.16 0.413 5.096 0 7.237 0 C 11.721 0 15.238 1.548 15.238 6.452 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1uicekb`,
                                        layoutDependency: C,
                                        layoutId: `ljUbu4RaS`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.899 4.903" overflow="visible"><path d="M 7.899 1.239 C 6.727 0.465 4.994 0 3.567 0 C 2.14 0 0 0.774 0 2.477 C 0 4.181 1.784 4.903 3.363 4.903 C 4.943 4.903 7.593 3.716 7.848 1.29 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  m(A, {
                                    className: `framer-1pxev7r`,
                                    layoutDependency: C,
                                    layoutId: `dNfvN20ai`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.225 23.69" overflow="visible"><path d="M 0.051 15.123 C 0.051 9.91 3.414 6.503 8.001 6.503 C 12.587 6.503 12.791 7.845 13.811 9.652 L 13.607 0 L 17.225 0 L 17.225 23.329 L 13.811 23.329 L 13.811 20.645 L 13.709 20.645 C 12.944 22.245 10.753 23.69 8.001 23.69 C 3.363 23.69 0 20.387 0 15.123 Z M 13.607 15.174 C 13.607 12.026 11.568 9.806 8.663 9.806 C 5.759 9.806 3.72 12.026 3.72 15.019 C 3.72 18.013 5.759 20.387 8.613 20.387 C 11.466 20.387 13.607 18.219 13.607 15.174 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-ambwr9`,
                                        layoutDependency: C,
                                        layoutId: `fjM4HsF0Q`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.225 23.69" overflow="visible"><path d="M 0.051 15.123 C 0.051 9.91 3.414 6.503 8.001 6.503 C 12.587 6.503 12.791 7.845 13.811 9.652 L 13.607 0 L 17.225 0 L 17.225 23.329 L 13.811 23.329 L 13.811 20.645 L 13.709 20.645 C 12.944 22.245 10.753 23.69 8.001 23.69 C 3.363 23.69 0 20.387 0 15.123 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1af8q1e`,
                                        layoutDependency: C,
                                        layoutId: `ZegeRGfL0`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.887 10.581" overflow="visible"><path d="M 9.887 5.368 C 9.887 2.219 7.848 0 4.943 0 C 2.038 0 0 2.219 0 5.213 C 0 8.206 2.038 10.581 4.892 10.581 C 7.746 10.581 9.887 8.413 9.887 5.368 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(A, {
                                    className: `framer-12mmfgq`,
                                    layoutDependency: C,
                                    layoutId: `UQ1p0AT6b`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.709 16.516" overflow="visible"><path d="M 0.051 15.174 C 0.051 14.658 0.204 14.194 0.51 13.781 L 7.389 4.748 L 8.46 3.303 L 0.561 3.303 L 0.561 0 L 13.607 0 L 13.607 1.187 C 13.607 1.703 13.454 2.168 13.148 2.581 L 6.064 11.871 C 5.555 12.542 5.351 12.8 5.096 13.161 L 13.709 13.161 L 13.709 16.516 L 0 16.516 L 0 15.226 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  m(A, {
                                    className: `framer-1scr9jw`,
                                    layoutDependency: C,
                                    layoutId: `nt7xeLbaY`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.117 23.794" overflow="visible"><path d="M 15.238 13.213 L 15.238 23.535 L 12.027 23.535 C 12.027 22.658 12.027 21.781 12.129 20.852 L 12.027 20.852 C 10.855 22.865 8.46 23.794 6.217 23.794 C 3.975 23.794 0 22.142 0 18.477 C 0 14.813 3.211 13.006 6.523 13.006 C 9.836 13.006 10.192 13.316 11.568 14.194 L 11.568 13.316 C 11.568 10.735 9.428 9.91 6.982 9.91 C 4.536 9.91 3.516 10.426 2.14 10.942 L 1.274 8.052 C 3.16 7.226 5.096 6.813 7.237 6.813 C 11.721 6.813 15.238 8.361 15.238 13.265 Z M 11.568 17.084 C 10.396 16.31 8.663 15.845 7.237 15.845 C 5.81 15.845 3.669 16.619 3.669 18.323 C 3.669 20.026 5.453 20.748 7.033 20.748 C 8.612 20.748 11.262 19.561 11.517 17.135 Z M 17.429 2.323 C 17.429 0.981 18.397 0 19.773 0 C 21.149 0 22.117 0.981 22.117 2.323 C 22.117 3.665 21.149 4.594 19.773 4.594 C 18.397 4.594 17.429 3.613 17.429 2.323 Z M 17.989 7.071 L 21.659 7.071 L 21.659 23.535 L 17.989 23.535 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-tbb7ut`,
                                        layoutDependency: C,
                                        layoutId: `RKc9_Cl4d`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15.238 16.981" overflow="visible"><path d="M 15.238 6.4 L 15.238 16.723 L 12.027 16.723 C 12.027 15.845 12.027 14.968 12.129 14.039 L 12.027 14.039 C 10.855 16.052 8.46 16.981 6.217 16.981 C 3.975 16.981 0 15.329 0 11.665 C 0 8 3.211 6.194 6.523 6.194 C 9.836 6.194 10.192 6.503 11.568 7.381 L 11.568 6.503 C 11.568 3.923 9.428 3.097 6.982 3.097 C 4.536 3.097 3.516 3.613 2.14 4.129 L 1.274 1.239 C 3.16 0.413 5.096 0 7.237 0 C 11.721 0 15.238 1.548 15.238 6.452 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-v0lb4c`,
                                        layoutDependency: C,
                                        layoutId: `oQeCFmtLH`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.899 4.903" overflow="visible"><path d="M 7.899 1.239 C 6.727 0.465 4.994 0 3.567 0 C 2.14 0 0 0.774 0 2.477 C 0 4.181 1.784 4.903 3.363 4.903 C 4.943 4.903 7.593 3.716 7.848 1.29 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-idphsj`,
                                        layoutDependency: C,
                                        layoutId: `vg_1bATvU`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.688 4.594" overflow="visible"><path d="M 0 2.323 C 0 0.981 0.968 0 2.344 0 C 3.72 0 4.688 0.981 4.688 2.323 C 4.688 3.665 3.72 4.594 2.344 4.594 C 0.968 4.594 0 3.613 0 2.323 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-l9fktm`,
                                        layoutDependency: C,
                                        layoutId: `ZyBTdGqVZ`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.669 16.465" overflow="visible"><path d="M 0 0 L 3.669 0 L 3.669 16.465 L 0 16.465 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  m(A, {
                                    className: `framer-1kdngs`,
                                    layoutDependency: C,
                                    layoutId: `a3gaNJCFl`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.138 17.372" overflow="visible"><path d="M 13.437 11.733 C 12.622 12.559 11.705 13.178 10.838 13.54 C 8.341 14.624 5.895 13.953 4.723 11.785 L 16.138 6.83 C 15.986 6.366 15.833 5.901 15.629 5.437 C 13.437 0.275 9.361 -1.015 5.335 0.74 C 0.748 2.753 -1.239 7.346 0.799 12.043 C 2.837 16.895 7.322 18.546 11.96 16.533 C 13.386 15.914 14.864 14.933 15.935 13.695 Z M 6.456 3.682 C 8.647 2.753 10.736 3.217 11.909 5.54 L 3.653 9.101 C 3.041 6.52 4.264 4.611 6.456 3.63 Z" fill="rgb(255,111,97)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-9j0u2f`,
                                        layoutDependency: C,
                                        layoutId: `vhSqGoih3`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16.138 17.372" overflow="visible"><path d="M 13.437 11.733 C 12.622 12.559 11.705 13.178 10.838 13.54 C 8.341 14.624 5.895 13.953 4.723 11.785 L 16.138 6.83 C 15.986 6.366 15.833 5.901 15.629 5.437 C 13.437 0.275 9.361 -1.015 5.335 0.74 C 0.748 2.753 -1.239 7.346 0.799 12.043 C 2.837 16.895 7.322 18.546 11.96 16.533 C 13.386 15.914 14.864 14.933 15.935 13.695 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-c9wu9t`,
                                        layoutDependency: C,
                                        layoutId: `dPGoChg53`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.413 5.868" overflow="visible"><path d="M 2.96 0.449 C 5.151 -0.48 7.241 -0.016 8.413 2.307 L 0.157 5.868 C -0.454 3.287 0.769 1.378 2.96 0.397 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(b.div, {
                            className: `framer-1vkesg1`,
                            "data-framer-name": `Logo`,
                            layoutDependency: C,
                            layoutId: `wfgYGgxm5`,
                            children: [
                              l(b.div, {
                                className: `framer-1o4seuc`,
                                layoutDependency: C,
                                layoutId: `XWeHxqFad`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              }),
                              m(A, {
                                className: `framer-1cfqmdz`,
                                layoutDependency: C,
                                layoutId: `yWzBq4ctg`,
                                requiresOverflowVisible: !1,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 24" overflow="visible"><g><path d="M 23.402 3.827 L 27.316 3.827 L 27.316 24 L 23.402 24 Z M 48.28 19.97 L 48.28 24 L 35.977 24 L 35.977 3.827 L 40.078 3.827 L 40.078 19.97 L 48.28 19.97 Z M 65.275 7.864 L 60.125 7.864 L 60.125 23.999 L 55.9 23.999 L 55.9 7.864 L 50.735 7.864 L 50.735 3.853 L 65.273 3.853 L 65.273 7.864 Z M 9.792 24 L 19.014 3.827 L 14.666 3.827 L 9.475 15.538 L 4.298 3.827 L 0 3.827 L 9.184 24 Z" fill="rgb(44,56,72)"></path><path d="M 78 5.853 L 75.237 3.128 L 72.063 0 L 69.539 2.489 L 72.712 5.617 L 72.951 5.853 L 72.712 6.089 L 69.539 9.217 L 72.063 11.706 L 75.237 8.578 Z" fill="rgb(232,20,100)"></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  m(A, {
                                    className: `framer-rs9kyz`,
                                    layoutDependency: C,
                                    layoutId: `sA4LbCGVa`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65.275 20.173" overflow="visible"><path d="M 23.402 0 L 27.316 0 L 27.316 20.173 L 23.402 20.173 Z M 48.28 16.143 L 48.28 20.173 L 35.977 20.173 L 35.977 0 L 40.078 0 L 40.078 16.143 L 48.28 16.143 Z M 65.275 4.037 L 60.125 4.037 L 60.125 20.172 L 55.9 20.172 L 55.9 4.037 L 50.735 4.037 L 50.735 0.026 L 65.273 0.026 L 65.273 4.037 Z M 9.792 20.173 L 19.014 0 L 14.666 0 L 9.475 11.712 L 4.298 0 L 0 0 L 9.184 20.173 Z" fill="rgb(44,56,72)"></path></svg>`,
                                    withExternalLayout: !0,
                                    children: [
                                      l(A, {
                                        className: `framer-426wjo`,
                                        layoutDependency: C,
                                        layoutId: `knTu8Q6d3`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.914 20.173" overflow="visible"><path d="M 0 0 L 3.914 0 L 3.914 20.173 L 0 20.173 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1g0u0zb`,
                                        layoutDependency: C,
                                        layoutId: `dHlW5ajX0`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.303 20.173" overflow="visible"><path d="M 12.302 16.143 L 12.302 20.173 L 0 20.173 L 0 0 L 4.101 0 L 4.101 16.143 L 12.303 16.143 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1n3q8ip`,
                                        layoutDependency: C,
                                        layoutId: `QpwQbkBdE`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.54 20.146" overflow="visible"><path d="M 14.54 4.011 L 9.39 4.011 L 9.39 20.146 L 5.164 20.146 L 5.164 4.011 L 0 4.011 L 0 0 L 14.537 0 L 14.537 4.011 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                      l(A, {
                                        className: `framer-1mn5beu`,
                                        layoutDependency: C,
                                        layoutId: `D_2uNNAdG`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19.014 20.173" overflow="visible"><path d="M 9.792 20.173 L 19.014 0 L 14.666 0 L 9.475 11.712 L 4.298 0 L 0 0 L 9.184 20.173 Z" fill="transparent"></path></svg>`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(A, {
                                    className: `framer-83b82r`,
                                    layoutDependency: C,
                                    layoutId: `Sos2aAvWr`,
                                    requiresOverflowVisible: !1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.461 11.706" overflow="visible"><path d="M 8.461 5.853 L 5.698 3.128 L 2.524 0 L 0 2.489 L 3.174 5.617 L 3.413 5.853 L 3.174 6.089 L 0 9.217 L 2.524 11.706 L 5.698 8.578 Z" fill="rgb(232,20,100)"></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                        speed: p,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-AQdlX.framer-lkux8u, .framer-AQdlX .framer-lkux8u { display: block; }`,
          `.framer-AQdlX.framer-12xraqj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 384px; }`,
          `.framer-AQdlX .framer-5wjs9c-container { flex: 1 0 0px; height: 40px; position: relative; width: 1px; }`,
          `.framer-AQdlX .framer-1j07cm4, .framer-AQdlX .framer-x0abnc, .framer-AQdlX .framer-y0t5s2, .framer-AQdlX .framer-17dndx4, .framer-AQdlX .framer-1xb6ycd, .framer-AQdlX .framer-1ujqqf1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-AQdlX .framer-1wyfz7u, .framer-AQdlX .framer-halaya, .framer-AQdlX .framer-1gmqpaq, .framer-AQdlX .framer-ytnjkz, .framer-AQdlX .framer-tbhqad, .framer-AQdlX .framer-hgo10y, .framer-AQdlX .framer-11l82fz, .framer-AQdlX .framer-1o4seuc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: visible; position: relative; width: 5px; }`,
          `.framer-AQdlX .framer-qgape5 { height: 24px; position: relative; width: 47px; }`,
          `.framer-AQdlX .framer-16wz4v2, .framer-AQdlX .framer-17xdoh8 { height: 24px; left: 0px; position: absolute; top: 0px; width: 47px; }`,
          `.framer-AQdlX .framer-1gr3q4d { height: 15px; left: 19px; position: absolute; top: 5px; width: 29px; }`,
          `.framer-AQdlX .framer-1wom6if { height: 15px; left: 0px; position: absolute; top: 0px; width: 29px; }`,
          `.framer-AQdlX .framer-et55a2 { height: 12px; left: 22px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-AQdlX .framer-pyso1a { height: 10px; left: 13px; position: absolute; top: 5px; width: 8px; }`,
          `.framer-AQdlX .framer-9omi39 { height: 7px; left: 7px; position: absolute; top: 5px; width: 7px; }`,
          `.framer-AQdlX .framer-geevuy { height: 7px; left: 0px; position: absolute; top: 5px; width: 6px; }`,
          `.framer-AQdlX .framer-vbb568 { height: 24px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
          `.framer-AQdlX .framer-i3xrxe { height: 7px; left: 2px; position: absolute; top: 0px; width: 12px; }`,
          `.framer-AQdlX .framer-8u420z { height: 19px; left: 0px; position: absolute; top: 5px; width: 16px; }`,
          `.framer-AQdlX .framer-1i09i2q { height: 18px; left: 1px; position: absolute; top: 6px; width: 7px; }`,
          `.framer-AQdlX .framer-1uedwco { height: 18px; left: 8px; position: absolute; top: 6px; width: 7px; }`,
          `.framer-AQdlX .framer-3syftn { height: 8px; left: 8px; position: absolute; top: 16px; width: 4px; }`,
          `.framer-AQdlX .framer-k2zjie { height: 8px; left: 4px; position: absolute; top: 15px; width: 4px; }`,
          `.framer-AQdlX .framer-b5blo0 { height: 2px; left: 6px; position: absolute; top: 19px; width: 4px; }`,
          `.framer-AQdlX .framer-1gyfjiq { height: 2px; left: 7px; position: absolute; top: 18px; width: 2px; }`,
          `.framer-AQdlX .framer-8gt3lz { height: 6px; left: 8px; position: absolute; top: 13px; width: 5px; }`,
          `.framer-AQdlX .framer-13bs8no { height: 6px; left: 3px; position: absolute; top: 13px; width: 5px; }`,
          `.framer-AQdlX .framer-1h3aq12 { height: 13px; left: 8px; position: absolute; top: 5px; width: 5px; }`,
          `.framer-AQdlX .framer-op5wgu { height: 13px; left: 3px; position: absolute; top: 5px; width: 5px; }`,
          `.framer-AQdlX .framer-xwqmuy { height: 20px; left: 2px; position: absolute; top: 2px; width: 11px; }`,
          `.framer-AQdlX .framer-mr5q3y { height: 20px; left: 0px; position: absolute; top: 0px; width: 11px; }`,
          `.framer-AQdlX .framer-12pzmh5 { height: 1px; left: 4px; position: absolute; top: 18px; width: 3px; }`,
          `.framer-AQdlX .framer-1vtg2a7 { height: 1px; left: 5px; position: absolute; top: 18px; width: 1px; }`,
          `.framer-AQdlX .framer-1hblzc8 { height: 12px; left: 2px; position: absolute; top: 6px; width: 8px; }`,
          `.framer-AQdlX .framer-1lkxtk6 { height: 1px; left: 9px; position: absolute; top: 12px; width: 2px; }`,
          `.framer-AQdlX .framer-1m7t4nv { height: 1px; left: 9px; position: absolute; top: 12px; width: 1px; }`,
          `.framer-AQdlX .framer-l5a505 { height: 1px; left: 10px; position: absolute; top: 12px; width: 1px; }`,
          `.framer-AQdlX .framer-t3vrw8 { height: 1px; left: 5px; position: absolute; top: 12px; width: 2px; }`,
          `.framer-AQdlX .framer-19vu6ut { height: 1px; left: 5px; position: absolute; top: 12px; width: 1px; }`,
          `.framer-AQdlX .framer-1uqfyt9 { height: 1px; left: 6px; position: absolute; top: 12px; width: 1px; }`,
          `.framer-AQdlX .framer-n6h1x5 { height: 1px; left: 9px; position: absolute; top: 11px; width: 2px; }`,
          `.framer-AQdlX .framer-1w3ucpf { height: 1px; left: 5px; position: absolute; top: 11px; width: 2px; }`,
          `.framer-AQdlX .framer-jir4qs { height: 5px; left: 3px; position: absolute; top: 4px; width: 2px; }`,
          `.framer-AQdlX .framer-4z856d { height: 5px; left: 11px; position: absolute; top: 4px; width: 2px; }`,
          `.framer-AQdlX .framer-12p9gsa { height: 2px; left: 7px; position: absolute; top: 17px; width: 3px; }`,
          `.framer-AQdlX .framer-qq6doe { height: 2px; left: 0px; position: absolute; top: 0px; width: 3px; }`,
          `.framer-AQdlX .framer-1atwrsc { height: 24px; position: relative; width: 116px; }`,
          `.framer-AQdlX .framer-1893jm6 { height: 19px; left: 103px; position: absolute; top: 5px; width: 14px; }`,
          `.framer-AQdlX .framer-1v577fi { height: 20px; left: 27px; position: absolute; top: 5px; width: 14px; }`,
          `.framer-AQdlX .framer-16k04g9 { height: 20px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-AQdlX .framer-zr1yrg { height: 10px; left: 3px; position: absolute; top: 3px; width: 8px; }`,
          `.framer-AQdlX .framer-rr0b2p { height: 15px; left: 42px; position: absolute; top: 5px; width: 14px; }`,
          `.framer-AQdlX .framer-vg3boj { height: 15px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-AQdlX .framer-1kkbuiq { height: 4px; left: 3px; position: absolute; top: 2px; width: 8px; }`,
          `.framer-AQdlX .framer-1yjm8dd { height: 14px; left: 57px; position: absolute; top: 5px; width: 7px; }`,
          `.framer-AQdlX .framer-p6ot8 { height: 14px; left: 82px; position: absolute; top: 5px; width: 12px; }`,
          `.framer-AQdlX .framer-i4qtpq { height: 18px; left: 95px; position: absolute; top: 2px; width: 8px; }`,
          `.framer-AQdlX .framer-1313mfo { height: 19px; left: 0px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-AQdlX .framer-qmnfjf { height: 5px; left: 0px; position: absolute; top: 14px; width: 3px; }`,
          `.framer-AQdlX .framer-1qjeshf, .framer-AQdlX .framer-1cxfcer { height: 12px; left: 0px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-AQdlX .framer-1hd2rcn { height: 7px; left: 3px; position: absolute; top: 3px; width: 8px; }`,
          `.framer-AQdlX .framer-ez8jib { height: 19px; left: 65px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-AQdlX .framer-1soicvi { height: 19px; left: 0px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-AQdlX .framer-o2dqoa { height: 14px; left: 3px; position: absolute; top: 3px; width: 9px; }`,
          `.framer-AQdlX .framer-1ap7nwl { height: 15px; left: 13px; position: absolute; top: 5px; width: 13px; }`,
          `.framer-AQdlX .framer-1pxi6o0 { height: 15px; left: 0px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-AQdlX .framer-r6vcj { height: 5px; left: 3px; position: absolute; top: 8px; width: 7px; }`,
          `.framer-AQdlX .framer-i6ne8i { height: 24px; position: relative; width: 88px; }`,
          `.framer-AQdlX .framer-12cpi8m { height: 24px; left: 0px; position: absolute; top: 0px; width: 88px; }`,
          `.framer-AQdlX .framer-1nlk2or { height: 11px; left: 28px; position: absolute; top: 8px; width: 60px; }`,
          `.framer-AQdlX .framer-c63ylk { height: 11px; left: 0px; position: absolute; top: 0px; width: 10px; }`,
          `.framer-AQdlX .framer-1taqc7i { height: 11px; left: 11px; position: absolute; top: 0px; width: 11px; }`,
          `.framer-AQdlX .framer-1eqohrz { height: 8px; left: 12px; position: absolute; top: 1px; width: 8px; }`,
          `.framer-AQdlX .framer-m2yyru { height: 10px; left: 22px; position: absolute; top: 1px; width: 8px; }`,
          `.framer-AQdlX .framer-da67ge { height: 10px; left: 32px; position: absolute; top: 1px; width: 7px; }`,
          `.framer-AQdlX .framer-y9tno9 { height: 10px; left: 40px; position: absolute; top: 1px; width: 8px; }`,
          `.framer-AQdlX .framer-h0nrsr { height: 4px; left: 42px; position: absolute; top: 2px; width: 6px; }`,
          `.framer-AQdlX .framer-i53fkx { height: 11px; left: 49px; position: absolute; top: 0px; width: 11px; }`,
          `.framer-AQdlX .framer-1n4dqsy { height: 8px; left: 51px; position: absolute; top: 1px; width: 8px; }`,
          `.framer-AQdlX .framer-6kbtn9 { height: 8px; left: 13px; position: absolute; top: 1px; width: 2px; }`,
          `.framer-AQdlX .framer-gfyfhh { height: 7px; left: 14px; position: absolute; top: 1px; width: 4px; }`,
          `.framer-AQdlX .framer-eyb85p { height: 6px; left: 15px; position: absolute; top: 3px; width: 4px; }`,
          `.framer-AQdlX .framer-w8gnhj { height: 5px; left: 16px; position: absolute; top: 5px; width: 5px; }`,
          `.framer-AQdlX .framer-1dbclvm { height: 4px; left: 17px; position: absolute; top: 7px; width: 5px; }`,
          `.framer-AQdlX .framer-grmgs8 { height: 3px; left: 17px; position: absolute; top: 9px; width: 5px; }`,
          `.framer-AQdlX .framer-utwdr2 { height: 2px; left: 18px; position: absolute; top: 11px; width: 4px; }`,
          `.framer-AQdlX .framer-1otelqt { height: 1px; left: 18px; position: absolute; top: 12px; width: 4px; }`,
          `.framer-AQdlX .framer-1351z50 { height: 1px; left: 18px; position: absolute; top: 14px; width: 3px; }`,
          `.framer-AQdlX .framer-ivj171 { height: 1px; left: 18px; position: absolute; top: 15px; width: 2px; }`,
          `.framer-AQdlX .framer-1mb6a8c { height: 22px; left: 12px; position: absolute; top: 0px; width: 11px; }`,
          `.framer-AQdlX .framer-kv5z1k { height: 8px; left: 0px; position: absolute; top: 0px; width: 1px; }`,
          `.framer-AQdlX .framer-6t0aif { height: 6px; left: 4px; position: absolute; top: 16px; width: 6px; }`,
          `.framer-AQdlX .framer-15rpsbz { height: 6px; left: 16px; position: absolute; top: 17px; width: 5px; }`,
          `.framer-AQdlX .framer-dwniyu { height: 7px; left: 15px; position: absolute; top: 18px; width: 4px; }`,
          `.framer-AQdlX .framer-1vla646 { height: 6px; left: 14px; position: absolute; top: 18px; width: 3px; }`,
          `.framer-AQdlX .framer-1lfvm9b { height: 6px; left: 13px; position: absolute; top: 18px; width: 1px; }`,
          `.framer-AQdlX .framer-gny5dw { height: 5px; left: 12px; position: absolute; top: 18px; width: 1px; }`,
          `.framer-AQdlX .framer-vnvmmz { height: 4px; left: 10px; position: absolute; top: 18px; width: 2px; }`,
          `.framer-AQdlX .framer-c0t5hu { height: 3px; left: 9px; position: absolute; top: 18px; width: 2px; }`,
          `.framer-AQdlX .framer-3cc51u { height: 3px; left: 8px; position: absolute; top: 17px; width: 2px; }`,
          `.framer-AQdlX .framer-4sv5xw { height: 2px; left: 7px; position: absolute; top: 16px; width: 2px; }`,
          `.framer-AQdlX .framer-4756ws { height: 5px; left: 17px; position: absolute; top: 16px; width: 7px; }`,
          `.framer-AQdlX .framer-1mozpz0 { height: 3px; left: 0px; position: absolute; top: 15px; width: 8px; }`,
          `.framer-AQdlX .framer-fo54pf { height: 2px; left: 0px; position: absolute; top: 14px; width: 8px; }`,
          `.framer-AQdlX .framer-1iqdpzp { height: 1px; left: 1px; position: absolute; top: 12px; width: 7px; }`,
          `.framer-AQdlX .framer-1a3qwz1 { height: 2px; left: 1px; position: absolute; top: 10px; width: 7px; }`,
          `.framer-AQdlX .framer-1oylwj1 { height: 3px; left: 3px; position: absolute; top: 9px; width: 6px; }`,
          `.framer-AQdlX .framer-9xeohq { height: 3px; left: 4px; position: absolute; top: 7px; width: 5px; }`,
          `.framer-AQdlX .framer-ril5d0 { height: 3px; left: 6px; position: absolute; top: 6px; width: 4px; }`,
          `.framer-AQdlX .framer-16061gk { height: 3px; left: 8px; position: absolute; top: 6px; width: 3px; }`,
          `.framer-AQdlX .framer-1t71kiy { height: 3px; left: 10px; position: absolute; top: 6px; width: 2px; }`,
          `.framer-AQdlX .framer-1azy1g6 { height: 2px; left: 11px; position: absolute; top: 6px; width: 1px; }`,
          `.framer-AQdlX .framer-l5q5dx { height: 5px; left: 1px; position: absolute; top: 16px; width: 7px; }`,
          `.framer-AQdlX .framer-194uiq2 { height: 24px; position: relative; width: 45px; }`,
          `.framer-AQdlX .framer-1hanrni { height: 11px; left: 0px; position: absolute; top: 7px; width: 10px; }`,
          `.framer-AQdlX .framer-16g2lvc { height: 11px; left: 38px; position: absolute; top: 7px; width: 8px; }`,
          `.framer-AQdlX .framer-nhmq8z { height: 5px; left: 24px; position: absolute; top: 0px; width: 1px; }`,
          `.framer-AQdlX .framer-1hsezv0 { height: 5px; left: 24px; position: absolute; top: 19px; width: 1px; }`,
          `.framer-AQdlX .framer-i742ds { height: 1px; left: 12px; position: absolute; top: 12px; width: 5px; }`,
          `.framer-AQdlX .framer-2qs6tg { height: 1px; left: 31px; position: absolute; top: 12px; width: 5px; }`,
          `.framer-AQdlX .framer-bwjngz { height: 5px; left: 22px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-AQdlX .framer-4ouxbw { height: 5px; left: 25px; position: absolute; top: 19px; width: 2px; }`,
          `.framer-AQdlX .framer-15ltqmw { height: 2px; left: 12px; position: absolute; top: 13px; width: 5px; }`,
          `.framer-AQdlX .framer-nps9iv { height: 2px; left: 31px; position: absolute; top: 10px; width: 5px; }`,
          `.framer-AQdlX .framer-oowizc { height: 5px; left: 20px; position: absolute; top: 1px; width: 3px; }`,
          `.framer-AQdlX .framer-10j8n9h { height: 5px; left: 26px; position: absolute; top: 19px; width: 3px; }`,
          `.framer-AQdlX .framer-ie4hja { height: 3px; left: 13px; position: absolute; top: 14px; width: 5px; }`,
          `.framer-AQdlX .framer-1tncp3a { height: 3px; left: 31px; position: absolute; top: 8px; width: 5px; }`,
          `.framer-AQdlX .framer-1f2pztn { height: 5px; left: 18px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-AQdlX .framer-1sao1or { height: 5px; left: 27px; position: absolute; top: 18px; width: 4px; }`,
          `.framer-AQdlX .framer-1x260ct { height: 3px; left: 13px; position: absolute; top: 15px; width: 5px; }`,
          `.framer-AQdlX .framer-9t2lgu { height: 3px; left: 30px; position: absolute; top: 6px; width: 5px; }`,
          `.framer-AQdlX .framer-248jat { height: 5px; left: 16px; position: absolute; top: 3px; width: 4px; }`,
          `.framer-AQdlX .framer-1m36qwo { height: 5px; left: 28px; position: absolute; top: 17px; width: 4px; }`,
          `.framer-AQdlX .framer-gdqb34 { height: 4px; left: 15px; position: absolute; top: 16px; width: 5px; }`,
          `.framer-AQdlX .framer-48o8tv { height: 4px; left: 29px; position: absolute; top: 4px; width: 5px; }`,
          `.framer-AQdlX .framer-1cc8xyj { height: 4px; left: 15px; position: absolute; top: 4px; width: 5px; }`,
          `.framer-AQdlX .framer-1l8xl66 { height: 4px; left: 29px; position: absolute; top: 16px; width: 5px; }`,
          `.framer-AQdlX .framer-59hvwg { height: 5px; left: 16px; position: absolute; top: 17px; width: 4px; }`,
          `.framer-AQdlX .framer-1fhf81d { height: 5px; left: 28px; position: absolute; top: 3px; width: 4px; }`,
          `.framer-AQdlX .framer-s93sw6 { height: 3px; left: 13px; position: absolute; top: 6px; width: 5px; }`,
          `.framer-AQdlX .framer-ytcf8q { height: 3px; left: 30px; position: absolute; top: 15px; width: 5px; }`,
          `.framer-AQdlX .framer-hj7qn { height: 5px; left: 18px; position: absolute; top: 18px; width: 4px; }`,
          `.framer-AQdlX .framer-t8tx7p { height: 5px; left: 27px; position: absolute; top: 2px; width: 4px; }`,
          `.framer-AQdlX .framer-t4cnv0 { height: 3px; left: 13px; position: absolute; top: 8px; width: 5px; }`,
          `.framer-AQdlX .framer-ahsoo { height: 3px; left: 31px; position: absolute; top: 14px; width: 5px; }`,
          `.framer-AQdlX .framer-f8qajg { height: 5px; left: 20px; position: absolute; top: 19px; width: 3px; }`,
          `.framer-AQdlX .framer-1j9fmkj { height: 5px; left: 26px; position: absolute; top: 1px; width: 3px; }`,
          `.framer-AQdlX .framer-16wqsbl { height: 2px; left: 12px; position: absolute; top: 10px; width: 5px; }`,
          `.framer-AQdlX .framer-g2ghx7 { height: 2px; left: 31px; position: absolute; top: 13px; width: 5px; }`,
          `.framer-AQdlX .framer-6emczt { height: 5px; left: 22px; position: absolute; top: 19px; width: 2px; }`,
          `.framer-AQdlX .framer-c8379a { height: 5px; left: 25px; position: absolute; top: 0px; width: 2px; }`,
          `.framer-AQdlX .framer-hkz37u { height: 24px; position: relative; width: 115px; }`,
          `.framer-AQdlX .framer-56om0h { height: 23px; left: 0px; position: absolute; top: 1px; width: 17px; }`,
          `.framer-AQdlX .framer-1hmmnpn { height: 23px; left: 20px; position: absolute; top: 1px; width: 18px; }`,
          `.framer-AQdlX .framer-w9bcam { height: 6px; left: 25px; position: absolute; top: 5px; width: 7px; }`,
          `.framer-AQdlX .framer-1fbqcus { height: 24px; left: 39px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-AQdlX .framer-byhlbt { height: 15px; left: 44px; position: absolute; top: 5px; width: 7px; }`,
          `.framer-AQdlX .framer-16zg9oh { height: 24px; left: 59px; position: absolute; top: 1px; width: 17px; }`,
          `.framer-AQdlX .framer-1ph6kao { height: 23px; left: 78px; position: absolute; top: 1px; width: 20px; }`,
          `.framer-AQdlX .framer-3iqd9 { height: 23px; left: 95px; position: absolute; top: 1px; width: 20px; }`,
          `.framer-AQdlX .framer-uj68aq { height: 8px; left: 103px; position: absolute; top: 7px; width: 5px; }`,
          `.framer-AQdlX .framer-6agt3 { flex: none; height: 24px; overflow: hidden; position: relative; width: 127px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-AQdlX .framer-mx88b3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 28px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 127px; }`,
          `.framer-AQdlX .framer-dpdram { height: 24px; position: relative; width: 106px; }`,
          `.framer-AQdlX .framer-18wt493 { height: 24px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
          `.framer-AQdlX .framer-1pb39ph { height: 17px; left: 32px; position: absolute; top: 7px; width: 15px; }`,
          `.framer-AQdlX .framer-1mot1q5 { height: 17px; left: 0px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-AQdlX .framer-1uicekb { height: 5px; left: 4px; position: absolute; top: 9px; width: 8px; }`,
          `.framer-AQdlX .framer-1pxev7r { height: 24px; left: 49px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-AQdlX .framer-ambwr9 { height: 24px; left: 0px; position: absolute; top: 0px; width: 17px; }`,
          `.framer-AQdlX .framer-1af8q1e { height: 11px; left: 4px; position: absolute; top: 10px; width: 10px; }`,
          `.framer-AQdlX .framer-12mmfgq { height: 17px; left: 69px; position: absolute; top: 7px; width: 14px; }`,
          `.framer-AQdlX .framer-1scr9jw { height: 24px; left: 84px; position: absolute; top: 0px; width: 22px; }`,
          `.framer-AQdlX .framer-tbb7ut { height: 17px; left: 0px; position: absolute; top: 7px; width: 15px; }`,
          `.framer-AQdlX .framer-v0lb4c { height: 5px; left: 4px; position: absolute; top: 16px; width: 8px; }`,
          `.framer-AQdlX .framer-idphsj { height: 5px; left: 18px; position: absolute; top: 0px; width: 5px; }`,
          `.framer-AQdlX .framer-l9fktm { height: 17px; left: 18px; position: absolute; top: 7px; width: 4px; }`,
          `.framer-AQdlX .framer-1kdngs { height: 18px; left: 15px; position: absolute; top: 7px; width: 16px; }`,
          `.framer-AQdlX .framer-9j0u2f { height: 18px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
          `.framer-AQdlX .framer-c9wu9t { height: 6px; left: 4px; position: absolute; top: 3px; width: 9px; }`,
          `.framer-AQdlX .framer-1vkesg1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 28px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100px; }`,
          `.framer-AQdlX .framer-1cfqmdz { height: 24px; position: relative; width: 78px; }`,
          `.framer-AQdlX .framer-rs9kyz { height: 20px; left: 0px; position: absolute; top: 4px; width: 66px; }`,
          `.framer-AQdlX .framer-426wjo { height: 20px; left: 24px; position: absolute; top: 0px; width: 4px; }`,
          `.framer-AQdlX .framer-1g0u0zb { height: 20px; left: 36px; position: absolute; top: 0px; width: 13px; }`,
          `.framer-AQdlX .framer-1n3q8ip { height: 20px; left: 51px; position: absolute; top: 0px; width: 15px; }`,
          `.framer-AQdlX .framer-1mn5beu { height: 20px; left: 0px; position: absolute; top: 0px; width: 19px; }`,
          `.framer-AQdlX .framer-83b82r { height: 12px; left: 70px; position: absolute; top: 0px; width: 9px; }`,
        ],
        `framer-AQdlX`
      )),
      (Xr = Yr),
      (Yr.displayName = `Logos`),
      (Yr.defaultProps = { height: 40, width: 384 }),
      V(Yr, {
        tmaswPCjz: {
          defaultValue: 30,
          displayStepper: !0,
          max: 1e3,
          min: 0,
          step: 5,
          title: `Speed`,
          type: W.Number,
        },
      }),
      N(Yr, [{ explicitInter: !0, fonts: [] }, ...Vr], { supportsExplicitInterCodegen: !0 }));
  }),
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  $,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi;
e(() => {
  (h(),
    I(),
    E(),
    n(),
    ke(),
    Q(),
    kr(),
    Ae(),
    Ue(),
    Ke(),
    Zr(),
    qe(),
    Xe(),
    Y(),
    Ze(),
    tt(),
    be(),
    at(),
    Te(),
    lt(),
    (Qr = D(X)),
    ($r = ae(b.div)),
    (ei = ae(F)),
    (ti = D(je)),
    (ni = D(Z)),
    (ri = O(b.div)),
    (ii = D(Ge)),
    (ai = O(F)),
    (oi = D(We)),
    (si = D(Xr)),
    (ci = D(Or)),
    (li = {
      peBfVg8uq: `(max-width: 809.98px)`,
      S895Zagm5: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (ui = `framer-IyoW8`),
    (di = {
      peBfVg8uq: `framer-v-2jsh6j`,
      S895Zagm5: `framer-v-13txzs0`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (fi = (e, t, n) => (e && t ? `position` : n)),
    (pi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.2, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (mi = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    ($ = { bounce: 0.2, delay: 0, duration: 1.5, type: `spring` }),
    (hi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: $,
      x: 0,
      y: 0,
    }),
    (gi = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (_i = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.1, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (vi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.3, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (yi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.4, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (bi = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (xi = () => ({
      from: { alias: `zRccXdPzO`, data: Ye, type: `Collection` },
      limit: { type: `LiteralValue`, value: 6 },
      select: [
        { collection: `zRccXdPzO`, name: `G_atTEKXu`, type: `Identifier` },
        { collection: `zRccXdPzO`, name: `zlkT3LaAb`, type: `Identifier` },
        { collection: `zRccXdPzO`, name: `dKH75txM2`, type: `Identifier` },
        { collection: `zRccXdPzO`, name: `z8zuFR79K`, type: `Identifier` },
        { collection: `zRccXdPzO`, name: `UQ200SfMv`, type: `Identifier` },
        { collection: `zRccXdPzO`, name: `id`, type: `Identifier` },
      ],
    })),
    (Si = ({ query: e, pageSize: t, children: n }) => n(he(e))),
    (Ci = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (wi = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: $,
      x: 0,
      y: 80,
    }),
    (Ti = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (Ei = { dateStyle: `medium`, timeZone: `UTC` }),
    (Di = (e, t) => Ti(e, Ei, t)),
    (Oi = () => ({
      from: { alias: `juawu7D65`, data: Je, type: `Collection` },
      limit: { type: `LiteralValue`, value: 5 },
      select: [
        { collection: `juawu7D65`, name: `s_lBuaFJ7`, type: `Identifier` },
        { collection: `juawu7D65`, name: `Sv0j4mVcd`, type: `Identifier` },
        { collection: `juawu7D65`, name: `Xqeoq3vai`, type: `Identifier` },
        { collection: `juawu7D65`, name: `lXOtCG9B3`, type: `Identifier` },
        { collection: `juawu7D65`, name: `aHMwj0hdy`, type: `Identifier` },
        { collection: `juawu7D65`, name: `id`, type: `Identifier` },
      ],
    })),
    (ki = ({ value: e }) =>
      ue()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ai = { Desktop: `WQLkyLRf1`, Phone: `peBfVg8uq`, Tablet: `S895Zagm5` }),
    (ji = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ai[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (Mi = P(
      d(function (e, n) {
        let i = r(null),
          a = n ?? i,
          s = g(),
          { activeLocale: c, setLocale: u } = B(),
          d = G(),
          { style: f, className: h, layoutId: _, variant: te, ...v } = ji(e);
        z(t(() => ut({}, c), [c]));
        let [y, ne] = le(te, li, !1),
          re = M(ui, it, ct, ye, Oe, et, ve),
          x = p(R)?.isLayoutTemplate,
          C = fi(x, !!p(S)?.transition?.layout);
        ce();
        let w = de();
        return (
          K({}),
          l(R.Provider, {
            value: { primaryVariantId: `WQLkyLRf1`, variantClassNames: di },
            children: m(T, {
              id: _ ?? s,
              children: [
                l(ki, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                m(b.div, {
                  ...v,
                  className: M(re, `framer-72rtr7`, h),
                  ref: a,
                  style: { ...f },
                  children: [
                    l(b.section, {
                      className: `framer-ug04uw`,
                      "data-framer-name": `Hero`,
                      layout: C,
                      children: l(`div`, {
                        className: `framer-1b2ii4i`,
                        "data-framer-name": `Container`,
                        children: m(`div`, {
                          className: `framer-1aj2agw`,
                          "data-framer-name": `Content`,
                          children: [
                            m(`div`, {
                              className: `framer-becsms`,
                              "data-framer-name": `Headline`,
                              children: [
                                m($r, {
                                  animate: pi,
                                  className: `framer-1oez891`,
                                  "data-framer-appear-id": `1oez891`,
                                  "data-framer-name": `Avatar`,
                                  initial: mi,
                                  optimized: !0,
                                  children: [
                                    l(J, {
                                      breakpoint: y,
                                      overrides: {
                                        peBfVg8uq: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: oe(
                                              (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 51.5
                                            ),
                                            pixelHeight: 1333,
                                            pixelWidth: 2e3,
                                            sizes: `70px`,
                                            src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                            srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                          },
                                        },
                                      },
                                      children: l(U, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: oe(
                                            (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 51
                                          ),
                                          pixelHeight: 1333,
                                          pixelWidth: 2e3,
                                          sizes: `70px`,
                                          src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                          srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                        },
                                        className: `framer-d0zfmh`,
                                      }),
                                    }),
                                    m(`div`, {
                                      className: `framer-15yjxcz`,
                                      "data-framer-name": `Name`,
                                      children: [
                                        l(F, {
                                          __fromCanvasComponent: !0,
                                          children: l(o, {
                                            children: l(`p`, {
                                              className: `framer-styles-preset-c0a7ln`,
                                              "data-styles-preset": `l3HElOeOb`,
                                              children: `Ana Parada`,
                                            }),
                                          }),
                                          className: `framer-1m46w0t`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        m(`div`, {
                                          className: `framer-18od67w`,
                                          "data-framer-name": `Socials`,
                                          children: [
                                            l(J, {
                                              breakpoint: y,
                                              overrides: {
                                                peBfVg8uq: {
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    151 +
                                                    0,
                                                },
                                              },
                                              children: l(L, {
                                                height: 22,
                                                width: `22px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  151 +
                                                  0,
                                                children: l(H, {
                                                  className: `framer-1thmqh6-container`,
                                                  nodeId: `k794pESif`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(X, {
                                                    AIGpMiTbN: `XLogo`,
                                                    height: `100%`,
                                                    id: `k794pESif`,
                                                    layoutId: `k794pESif`,
                                                    nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                    xLMsDJR23: `https://x.com/Dizparada`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(J, {
                                              breakpoint: y,
                                              overrides: {
                                                peBfVg8uq: {
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    151 +
                                                    0,
                                                },
                                              },
                                              children: l(L, {
                                                height: 22,
                                                width: `22px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  151 +
                                                  0,
                                                children: l(H, {
                                                  className: `framer-1u2af9-container`,
                                                  nodeId: `XrT2B9u5q`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(X, {
                                                    AIGpMiTbN: `InstagramLogo`,
                                                    height: `100%`,
                                                    id: `XrT2B9u5q`,
                                                    layoutId: `XrT2B9u5q`,
                                                    nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                    xLMsDJR23: `https://www.instagram.com/dizparada/`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(J, {
                                              breakpoint: y,
                                              overrides: {
                                                peBfVg8uq: {
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    151 +
                                                    0,
                                                },
                                              },
                                              children: l(L, {
                                                height: 22,
                                                width: `22px`,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  151 +
                                                  0,
                                                children: l(H, {
                                                  className: `framer-xgchv1-container`,
                                                  nodeId: `JSgT5lVaW`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(X, {
                                                    AIGpMiTbN: `LinkedinLogo`,
                                                    height: `100%`,
                                                    id: `JSgT5lVaW`,
                                                    layoutId: `JSgT5lVaW`,
                                                    nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                                    style: { height: `100%`, width: `100%` },
                                                    width: `100%`,
                                                    xLMsDJR23: `https://www.linkedin.com/in/ancparada/`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l(ei, {
                                  __fromCanvasComponent: !0,
                                  animate: hi,
                                  children: l(o, {
                                    children: l(`h1`, {
                                      className: `framer-styles-preset-xwy58e`,
                                      "data-styles-preset": `qclvMG6mW`,
                                      children: `I Design Customer Centric and AI-First Digital Products .`,
                                    }),
                                  }),
                                  className: `framer-1t8pop8`,
                                  "data-framer-appear-id": `1t8pop8`,
                                  fonts: [`Inter`],
                                  initial: gi,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(ei, {
                                  __fromCanvasComponent: !0,
                                  animate: _i,
                                  children: l(o, {
                                    children: l(`p`, {
                                      className: `framer-styles-preset-dr60wz`,
                                      "data-styles-preset": `PKAGe55xO`,
                                      children: `With 12 years of experience in UX Design, I specialized in crafting visually appealing, user-friendly, and high-converting digital products.`,
                                    }),
                                  }),
                                  className: `framer-1qov39r`,
                                  "data-framer-appear-id": `1qov39r`,
                                  fonts: [`Inter`],
                                  initial: gi,
                                  optimized: !0,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            m($r, {
                              animate: vi,
                              className: `framer-tivefp`,
                              "data-framer-appear-id": `tivefp`,
                              "data-framer-name": `Buttons`,
                              initial: gi,
                              optimized: !0,
                              children: [
                                l(`div`, {
                                  className: `framer-prouab`,
                                  "data-framer-name": `Line`,
                                }),
                                m(`div`, {
                                  className: `framer-c9mi3w`,
                                  "data-framer-name": `Available`,
                                  children: [
                                    l(`div`, { className: `framer-1a39agx` }),
                                    l(F, {
                                      __fromCanvasComponent: !0,
                                      children: l(o, {
                                        children: l(`p`, {
                                          className: `framer-styles-preset-d9dxvl`,
                                          "data-styles-preset": `YqEpde0dB`,
                                          style: {
                                            "--framer-text-color": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                          },
                                          children: `Staff Product Designer at Snyk`,
                                        }),
                                      }),
                                      className: `framer-1gyx5qt`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(b.section, {
                      className: `framer-1d483lz`,
                      "data-framer-name": `Projects`,
                      layout: C,
                      children: l(`div`, {
                        className: `framer-1mpy7np`,
                        "data-framer-name": `Container`,
                        children: l($r, {
                          animate: yi,
                          className: `framer-13dmvnr`,
                          "data-framer-appear-id": `13dmvnr`,
                          "data-framer-name": `Content`,
                          initial: gi,
                          optimized: !0,
                          children: l(`div`, {
                            className: `framer-1873l2i`,
                            children: l(fe, {
                              children: l(Si, {
                                query: xi(),
                                children: (e, t, n) =>
                                  l(ee, {
                                    children: e?.map(
                                      (
                                        {
                                          dKH75txM2: e,
                                          G_atTEKXu: t,
                                          id: n,
                                          UQ200SfMv: r,
                                          z8zuFR79K: i,
                                          zlkT3LaAb: a,
                                        },
                                        o
                                      ) => (
                                        (a ??= `#09F`),
                                        (e ??= ``),
                                        (i ??= ``),
                                        (r ??= ``),
                                        l(
                                          T,
                                          {
                                            id: `zRccXdPzO-${n}`,
                                            children: l(se.Provider, {
                                              value: { UQ200SfMv: r },
                                              children: l(q, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { UQ200SfMv: r },
                                                      webPageId: `et1aPrJnV`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { UQ200SfMv: r },
                                                      webPageId: `et1aPrJnV`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { UQ200SfMv: r },
                                                      webPageId: `et1aPrJnV`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (n) =>
                                                  l(J, {
                                                    breakpoint: y,
                                                    overrides: {
                                                      peBfVg8uq: {
                                                        width: `max(min(${d?.width || `100vw`}, 1440px), 1px)`,
                                                        y:
                                                          (d?.y || 0) +
                                                          0 +
                                                          550.8 +
                                                          0 +
                                                          0 +
                                                          60 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: l(L, {
                                                      height: 449,
                                                      width: `max((max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px) - 24px) / 2, 50px)`,
                                                      y:
                                                        (d?.y || 0) +
                                                        0 +
                                                        573.8 +
                                                        0 +
                                                        100 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: l(H, {
                                                        className: `framer-1birr6y-container`,
                                                        nodeId: `KVjxRmxxO`,
                                                        scopeId: `augiA20Il`,
                                                        children: l(J, {
                                                          breakpoint: y,
                                                          overrides: {
                                                            peBfVg8uq: {
                                                              HUD3zaNVo: n[2],
                                                              variant: `W_OJHzQo_`,
                                                            },
                                                            S895Zagm5: {
                                                              HUD3zaNVo: n[1],
                                                              variant: `W_OJHzQo_`,
                                                            },
                                                          },
                                                          children: l(je, {
                                                            Bzxl0uQQi: i,
                                                            height: `100%`,
                                                            HUD3zaNVo: n[0],
                                                            id: `KVjxRmxxO`,
                                                            KuE4w6YON: !0,
                                                            KzaKtxXOR: e,
                                                            layoutId: `KVjxRmxxO`,
                                                            style: { width: `100%` },
                                                            variant: `Y36jKbY_6`,
                                                            wCJXJmccQ: bi(t),
                                                            width: `100%`,
                                                            yoW0fqNPk: a,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            }),
                                          },
                                          n
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    l(b.section, {
                      className: `framer-1htgd11`,
                      "data-framer-name": `Journal`,
                      layout: C,
                      children: l(`div`, {
                        className: `framer-uzeu5n`,
                        "data-framer-name": `Container`,
                        children: m(`div`, {
                          className: `framer-1rvrdnp`,
                          "data-framer-name": `Content`,
                          children: [
                            m(ri, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: Ci,
                              __framer__exit: wi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-s0xv1s`,
                              "data-framer-name": `Title`,
                              children: [
                                l(F, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: `My Journal`,
                                    }),
                                  }),
                                  className: `framer-ietyjv`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(`div`, {
                                  className: `framer-wncd5p`,
                                  "data-framer-name": `Line`,
                                }),
                                l(q, {
                                  links: [
                                    {
                                      href: { webPageId: `G6F1BEvP2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `G6F1BEvP2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `G6F1BEvP2` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    l(J, {
                                      breakpoint: y,
                                      overrides: {
                                        peBfVg8uq: {
                                          y: (d?.y || 0) + 0 + 1119.8 + 0 + 0 + 60 + 0 + 0 + 0 + 81,
                                        },
                                      },
                                      children: l(L, {
                                        height: 41,
                                        y: (d?.y || 0) + 0 + 1695.8 + 0 + 100 + 0 + 0 + 3.5,
                                        children: l(H, {
                                          className: `framer-32fd90-container`,
                                          nodeId: `k5faJzBTq`,
                                          scopeId: `augiA20Il`,
                                          children: l(J, {
                                            breakpoint: y,
                                            overrides: {
                                              peBfVg8uq: { xLMsDJR23: e[2] },
                                              S895Zagm5: { xLMsDJR23: e[1] },
                                            },
                                            children: l(Z, {
                                              height: `100%`,
                                              id: `k5faJzBTq`,
                                              layoutId: `k5faJzBTq`,
                                              ncD0ncSLi: !0,
                                              Sg1kz8pun: `View all`,
                                              V8_5xRbqy: `ArrowUpRight`,
                                              width: `100%`,
                                              xLMsDJR23: e[0],
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            l(ri, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: Ci,
                              __framer__exit: wi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1hpkt9d`,
                              "data-framer-name": `Articles`,
                              children: l(`div`, {
                                className: `framer-dq4wug`,
                                children: l(fe, {
                                  children: l(Si, {
                                    query: Oi(),
                                    children: (e, t, n) =>
                                      l(ee, {
                                        children: e?.map(
                                          (
                                            {
                                              aHMwj0hdy: e,
                                              id: t,
                                              lXOtCG9B3: n,
                                              s_lBuaFJ7: r,
                                              Sv0j4mVcd: i,
                                              Xqeoq3vai: a,
                                            },
                                            o
                                          ) => (
                                            (i ??= ``),
                                            (a ??= ``),
                                            (e ??= ``),
                                            l(
                                              T,
                                              {
                                                id: `juawu7D65-${t}`,
                                                children: l(se.Provider, {
                                                  value: { aHMwj0hdy: e },
                                                  children: l(q, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { aHMwj0hdy: e },
                                                          webPageId: `eenHqF5o7`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { aHMwj0hdy: e },
                                                          webPageId: `eenHqF5o7`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { aHMwj0hdy: e },
                                                          webPageId: `eenHqF5o7`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (e) =>
                                                      l(J, {
                                                        breakpoint: y,
                                                        overrides: {
                                                          peBfVg8uq: {
                                                            width: `max(min(${d?.width || `100vw`}, 1440px), 1px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              1119.8 +
                                                              0 +
                                                              0 +
                                                              60 +
                                                              0 +
                                                              176 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: l(L, {
                                                          height: 132,
                                                          width: `max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            1695.8 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            102 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                          children: l(H, {
                                                            className: `framer-lfahou-container`,
                                                            nodeId: `YhVDdCWiX`,
                                                            scopeId: `augiA20Il`,
                                                            children: l(J, {
                                                              breakpoint: y,
                                                              overrides: {
                                                                peBfVg8uq: {
                                                                  Ft55JIHYO: e[2],
                                                                  variant: `fsdq4cRit`,
                                                                },
                                                                S895Zagm5: {
                                                                  Ft55JIHYO: e[1],
                                                                  variant: `TX1TXGkA4`,
                                                                },
                                                              },
                                                              children: l(Ge, {
                                                                Ft55JIHYO: e[0],
                                                                height: `100%`,
                                                                hm_R5PIpP: bi(r),
                                                                id: `YhVDdCWiX`,
                                                                jDoZ1smJx: i,
                                                                layoutId: `YhVDdCWiX`,
                                                                style: { width: `100%` },
                                                                ukAvuT1Cr: Di(n, w),
                                                                variant: `EEiOIR5U0`,
                                                                width: `100%`,
                                                                Y2xDYuDpW: a,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              },
                                              t
                                            )
                                          )
                                        ),
                                      }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(b.section, {
                      className: `framer-c8menq`,
                      "data-framer-name": `About`,
                      layout: C,
                      children: l(`div`, {
                        className: `framer-13e02pv`,
                        "data-framer-name": `Container`,
                        children: m(`div`, {
                          className: `framer-pxpxke`,
                          "data-framer-name": `Content`,
                          children: [
                            l(`div`, {
                              className: `framer-1adyase`,
                              "data-framer-name": `Title`,
                              children: l(ai, {
                                __framer__animate: { transition: $ },
                                __framer__animateOnce: !0,
                                __framer__enter: Ci,
                                __framer__exit: wi,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: l(o, {
                                  children: m(`p`, {
                                    className: `framer-styles-preset-1tmv4lr`,
                                    "data-styles-preset": `F_pPBFm64`,
                                    children: [
                                      `I stay ahead of trends, integrating the latest design principles and technologies `,
                                      l(`span`, {
                                        style: {
                                          "--framer-text-color": `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                        },
                                        children: `to help businesses and customers to thrive together.`,
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-118p4to`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            m(ri, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: Ci,
                              __framer__exit: wi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-pouged`,
                              "data-framer-name": `Stats`,
                              children: [
                                l(J, {
                                  breakpoint: y,
                                  overrides: {
                                    peBfVg8uq: {
                                      y: (d?.y || 0) + 0 + 1547.8 + 0 + 0 + 60 + 0 + 392 + 0 + 0,
                                    },
                                  },
                                  children: l(L, {
                                    height: 21,
                                    y: (d?.y || 0) + 0 + 2129.8 + 0 + 100 + 0 + 392 + 10,
                                    children: l(H, {
                                      className: `framer-1qorzwt-container`,
                                      nodeId: `dZ7NrUjOO`,
                                      scopeId: `augiA20Il`,
                                      children: l(We, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `dZ7NrUjOO`,
                                        layoutId: `dZ7NrUjOO`,
                                        ldb9kzWDh: `10+`,
                                        variant: `VEKXQeDHX`,
                                        width: `100%`,
                                        xhMKtzNep: `Years of Experience`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(`div`, { className: `framer-4r9iw`, "data-framer-name": `Line` }),
                                l(J, {
                                  breakpoint: y,
                                  overrides: {
                                    peBfVg8uq: {
                                      y: (d?.y || 0) + 0 + 1547.8 + 0 + 0 + 60 + 0 + 392 + 0 + 54,
                                    },
                                  },
                                  children: l(L, {
                                    height: 21,
                                    y: (d?.y || 0) + 0 + 2129.8 + 0 + 100 + 0 + 392 + 10,
                                    children: l(H, {
                                      className: `framer-1ix5sjw-container`,
                                      nodeId: `yJFEjXAEP`,
                                      scopeId: `augiA20Il`,
                                      children: l(We, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `yJFEjXAEP`,
                                        layoutId: `yJFEjXAEP`,
                                        ldb9kzWDh: `20+`,
                                        variant: `VEKXQeDHX`,
                                        width: `100%`,
                                        xhMKtzNep: `Projects Completed`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(`div`, {
                                  className: `framer-1ne48se`,
                                  "data-framer-name": `Line`,
                                }),
                                l(J, {
                                  breakpoint: y,
                                  overrides: {
                                    peBfVg8uq: {
                                      y: (d?.y || 0) + 0 + 1547.8 + 0 + 0 + 60 + 0 + 392 + 0 + 108,
                                    },
                                  },
                                  children: l(L, {
                                    height: 21,
                                    y: (d?.y || 0) + 0 + 2129.8 + 0 + 100 + 0 + 392 + 10,
                                    children: l(H, {
                                      className: `framer-1ra0ww9-container`,
                                      nodeId: `xH75O7Z93`,
                                      scopeId: `augiA20Il`,
                                      children: l(We, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `xH75O7Z93`,
                                        layoutId: `xH75O7Z93`,
                                        ldb9kzWDh: `Hundreds of`,
                                        variant: `VEKXQeDHX`,
                                        width: `100%`,
                                        xhMKtzNep: `Satisfied Clients`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(`div`, {
                                  className: `framer-1dscj4w`,
                                  "data-framer-name": `Line`,
                                }),
                                l(q, {
                                  links: [
                                    {
                                      href: { webPageId: `urTt7Hepx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `urTt7Hepx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `urTt7Hepx` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    l(J, {
                                      breakpoint: y,
                                      overrides: {
                                        peBfVg8uq: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            1547.8 +
                                            0 +
                                            0 +
                                            60 +
                                            0 +
                                            392 +
                                            0 +
                                            162,
                                        },
                                      },
                                      children: l(L, {
                                        height: 41,
                                        y: (d?.y || 0) + 0 + 2129.8 + 0 + 100 + 0 + 392 + 0,
                                        children: l(H, {
                                          className: `framer-1viui2o-container`,
                                          nodeId: `Y5nft8ZOF`,
                                          scopeId: `augiA20Il`,
                                          children: l(J, {
                                            breakpoint: y,
                                            overrides: {
                                              peBfVg8uq: { xLMsDJR23: e[2] },
                                              S895Zagm5: { xLMsDJR23: e[1] },
                                            },
                                            children: l(Z, {
                                              height: `100%`,
                                              id: `Y5nft8ZOF`,
                                              layoutId: `Y5nft8ZOF`,
                                              ncD0ncSLi: !0,
                                              Sg1kz8pun: `More about me`,
                                              V8_5xRbqy: `ArrowUpRight`,
                                              width: `100%`,
                                              xLMsDJR23: e[0],
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(b.section, {
                      className: `framer-3uh1v1`,
                      "data-framer-name": `Testimonials`,
                      layout: C,
                      children: l(`div`, {
                        className: `framer-28l6dp`,
                        "data-framer-name": `Container`,
                        children: m(`div`, {
                          className: `framer-10mcdee`,
                          "data-framer-name": `Content`,
                          children: [
                            m(ri, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: Ci,
                              __framer__exit: wi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-ln0cbt`,
                              "data-framer-name": `Title`,
                              children: [
                                l(F, {
                                  __fromCanvasComponent: !0,
                                  children: l(o, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: `Hear it from my teams`,
                                    }),
                                  }),
                                  className: `framer-109l67j`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                l(`div`, {
                                  className: `framer-dybgqj`,
                                  "data-framer-name": `Line`,
                                }),
                                l(J, {
                                  breakpoint: y,
                                  overrides: {
                                    peBfVg8uq: {
                                      width: `max(min(${d?.width || `100vw`}, 1440px), 1px)`,
                                      y: (d?.y || 0) + 0 + 2262.8 + 0 + 0 + 60 + 0 + 0 + 0 + 81,
                                    },
                                  },
                                  children: l(L, {
                                    height: 40,
                                    width: `calc(max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px) * 0.4)`,
                                    y: (d?.y || 0) + 0 + 2762.8 + 0 + 100 + 0 + 0 + 4,
                                    children: l(H, {
                                      className: `framer-197xtf8-container`,
                                      nodeId: `IpTsQuRiC`,
                                      scopeId: `augiA20Il`,
                                      children: l(Xr, {
                                        height: `100%`,
                                        id: `IpTsQuRiC`,
                                        layoutId: `IpTsQuRiC`,
                                        style: { width: `100%` },
                                        tmaswPCjz: 30,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            l(ri, {
                              __framer__animate: { transition: $ },
                              __framer__animateOnce: !0,
                              __framer__enter: Ci,
                              __framer__exit: wi,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-wzwcco`,
                              "data-framer-name": `Testimonials`,
                              children: l(J, {
                                breakpoint: y,
                                overrides: {
                                  peBfVg8uq: {
                                    width: `358px`,
                                    y: (d?.y || 0) + 0 + 2262.8 + 0 + 0 + 60 + 0 + 175 + 0 + 0,
                                  },
                                },
                                children: l(L, {
                                  height: 795,
                                  width: `max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px)`,
                                  y: (d?.y || 0) + 0 + 2762.8 + 0 + 100 + 0 + 102 + 0 + 0,
                                  children: l(H, {
                                    className: `framer-1ll86vg-container`,
                                    nodeId: `QT4373Zef`,
                                    scopeId: `augiA20Il`,
                                    children: l(J, {
                                      breakpoint: y,
                                      overrides: {
                                        peBfVg8uq: { variant: `AF4mRuezI` },
                                        S895Zagm5: { variant: `kCF2z10F1` },
                                      },
                                      children: l(Or, {
                                        height: `100%`,
                                        id: `QT4373Zef`,
                                        layoutId: `QT4373Zef`,
                                        style: { width: `100%` },
                                        variant: `wByIw3CqH`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-IyoW8.framer-lux5qc, .framer-IyoW8 .framer-lux5qc { display: block; }`,
        `.framer-IyoW8.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-IyoW8 .framer-ug04uw, .framer-IyoW8 .framer-1htgd11, .framer-IyoW8 .framer-c8menq, .framer-IyoW8 .framer-3uh1v1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-IyoW8 .framer-1b2ii4i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-1aj2agw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-becsms { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-1oez891 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-IyoW8 .framer-d0zfmh { aspect-ratio: 1 / 1; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: hidden; position: relative; width: 70px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IyoW8 .framer-15yjxcz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-1m46w0t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IyoW8 .framer-18od67w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IyoW8 .framer-1thmqh6-container, .framer-IyoW8 .framer-1u2af9-container, .framer-IyoW8 .framer-xgchv1-container { flex: none; height: 22px; position: relative; width: 22px; }`,
        `.framer-IyoW8 .framer-1t8pop8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-IyoW8 .framer-1qov39r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-IyoW8 .framer-tivefp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-IyoW8 .framer-prouab, .framer-IyoW8 .framer-4r9iw, .framer-IyoW8 .framer-1ne48se, .framer-IyoW8 .framer-1dscj4w { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-c9mi3w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IyoW8 .framer-1a39agx { aspect-ratio: 1 / 1; background-color: var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, #8cff2e); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); overflow: hidden; position: relative; width: 8px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IyoW8 .framer-1gyx5qt, .framer-IyoW8 .framer-ietyjv, .framer-IyoW8 .framer-109l67j { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-IyoW8 .framer-1d483lz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-IyoW8 .framer-1mpy7np { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-13dmvnr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-IyoW8 .framer-1873l2i { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-1birr6y-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-uzeu5n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-1rvrdnp, .framer-IyoW8 .framer-10mcdee { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-s0xv1s, .framer-IyoW8 .framer-ln0cbt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-wncd5p, .framer-IyoW8 .framer-dybgqj { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
        `.framer-IyoW8 .framer-32fd90-container, .framer-IyoW8 .framer-1qorzwt-container, .framer-IyoW8 .framer-1ix5sjw-container, .framer-IyoW8 .framer-1ra0ww9-container, .framer-IyoW8 .framer-1viui2o-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-IyoW8 .framer-1hpkt9d, .framer-IyoW8 .framer-wzwcco { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-dq4wug { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-lfahou-container, .framer-IyoW8 .framer-1ll86vg-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-13e02pv, .framer-IyoW8 .framer-28l6dp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-pxpxke { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-1adyase { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 8px 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-118p4to { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-IyoW8 .framer-pouged { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IyoW8 .framer-197xtf8-container { flex: none; height: auto; position: relative; width: 40%; }`,
        ...nt,
        ...ot,
        ...Se,
        ...Ee,
        ...Qe,
        ...ge,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-IyoW8.framer-72rtr7 { width: 810px; } .framer-IyoW8 .framer-1t8pop8 { max-width: 800px; }}`,
        `@media (max-width: 809.98px) { .framer-IyoW8.framer-72rtr7 { width: 390px; } .framer-IyoW8 .framer-ug04uw, .framer-IyoW8 .framer-1d483lz, .framer-IyoW8 .framer-1htgd11, .framer-IyoW8 .framer-c8menq, .framer-IyoW8 .framer-3uh1v1 { flex-direction: column; } .framer-IyoW8 .framer-1b2ii4i, .framer-IyoW8 .framer-wncd5p, .framer-IyoW8 .framer-4r9iw, .framer-IyoW8 .framer-1ne48se, .framer-IyoW8 .framer-1dscj4w, .framer-IyoW8 .framer-dybgqj { flex: none; width: 100%; } .framer-IyoW8 .framer-1aj2agw { gap: 60px; } .framer-IyoW8 .framer-tivefp, .framer-IyoW8 .framer-pouged, .framer-IyoW8 .framer-ln0cbt { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-IyoW8 .framer-prouab { flex: none; order: 0; width: 100%; } .framer-IyoW8 .framer-c9mi3w { order: 1; width: 100%; } .framer-IyoW8 .framer-1mpy7np, .framer-IyoW8 .framer-uzeu5n, .framer-IyoW8 .framer-13e02pv, .framer-IyoW8 .framer-28l6dp { flex: none; padding: 60px 0px 60px 0px; width: 100%; } .framer-IyoW8 .framer-1873l2i { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-IyoW8 .framer-1birr6y-container { align-self: unset; } .framer-IyoW8 .framer-s0xv1s { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: wrap; } .framer-IyoW8 .framer-109l67j { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-IyoW8 .framer-197xtf8-container { width: 100%; } .framer-IyoW8 .framer-1ll86vg-container { width: 358px; }}`,
      ],
      `framer-IyoW8`
    )),
    (Ni = Mi),
    (Mi.displayName = `Home`),
    (Mi.defaultProps = { height: 5625, width: 1200 }),
    N(
      Mi,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Qr,
        ...ti,
        ...ni,
        ...ii,
        ...oi,
        ...si,
        ...ci,
        ...j(rt),
        ...j(st),
        ...j(we),
        ...j(De),
        ...j($e),
        ...j(_e),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Mi.loader = {
      load: (e, t) =>
        Promise.allSettled([pe.get(xi(), t.locale).preload(), pe.get(Oi(), t.locale).preload()]),
    }),
    (Pi = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"S895Zagm5":{"layout":["fixed","auto"]},"peBfVg8uq":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `5625`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Pi as __FramerMetadata__, Ni as default };
//# sourceMappingURL=8ci0Aw9gYMZrnZYRBL5B5A_js4xszaaHpXi3xem6y_0.CvxnOcFo.mjs.map
