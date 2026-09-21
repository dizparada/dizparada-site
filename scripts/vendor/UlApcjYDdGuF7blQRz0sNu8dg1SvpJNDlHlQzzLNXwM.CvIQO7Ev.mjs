import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  h as o,
  k as s,
  l as c,
  o as l,
  s as u,
  v as d,
} from "./react.BUXbFMJS.mjs";
import { S as f, a as p, r as m, t as h } from "./motion.CLjJX74m.mjs";
import {
  B as g,
  Ct as _,
  Et as v,
  H as y,
  N as b,
  O as x,
  St as S,
  T as C,
  Tt as w,
  Y as T,
  a as E,
  b as ee,
  bt as te,
  d as ne,
  dt as re,
  ft as ie,
  gt as ae,
  ht as oe,
  k as se,
  l as ce,
  mt as le,
  n as ue,
  o as D,
  pt as O,
  s as de,
  st as k,
  u as fe,
  ut as pe,
  w as me,
  x as A,
  xt as j,
  yt as M,
} from "./framer.BQfDiYYl.mjs";
import { a as he, c as N, o as ge, s as _e } from "./shared-lib.DjXQ4AZU.mjs";
import { n as P, t as ve } from "./mN1qGB_I6.Cv6MNdwY.mjs";
import { i as ye, t as be } from "./PmFmTH0v9.C5XWGSGf.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./qclvMG6mW.CcOdxI0M.mjs";
import { n as F, t as Te } from "./yceyBWNmE.CkHdzxWa.mjs";
import { n as Ee, r as De } from "./G6F1BEvP2.B6KP_wVO.mjs";
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  Oe,
  ke,
  Ae,
  je,
  Me,
  K,
  q,
  Ne = e(() => {
    (l(),
      T(),
      h(),
      n(),
      (I = _(f.div)),
      (L = [`G47S15YSn`, `PX1MOnVXY`]),
      (R = `framer-8EaGQ`),
      (z = { G47S15YSn: `framer-v-1hbo82m`, PX1MOnVXY: `framer-v-17k3l76` }),
      (B = { duration: 0, type: `tween` }),
      (V = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (H = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (U = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: H,
        x: 0,
        y: 0,
      }),
      (W = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (G = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Oe = ({ value: e, children: n }) => {
        let r = s(p),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(p.Provider, { value: o, children: n });
      }),
      (ke = f(i)),
      (Ae = { Hidden: `PX1MOnVXY`, Loading: `G47S15YSn` }),
      (je = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ae[r.variant] ?? r.variant ?? `G47S15YSn`,
      })),
      (Me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = S(
        o(function (e, t) {
          let { activeLocale: n, setLocale: i } = oe(),
            { style: o, className: s, layoutId: c, variant: l, ...u } = je(e),
            {
              baseVariant: p,
              classNames: h,
              gestureHandlers: g,
              gestureVariant: _,
              setGestureState: v,
              setVariant: y,
              variants: x,
            } = j({ cycleOrder: L, defaultVariant: `G47S15YSn`, variant: l, variantClassNames: z }),
            S = Me(e, x),
            C = () => p !== `PX1MOnVXY`,
            w = r(null),
            T = d(),
            E = [];
          return (
            k(),
            a(m, {
              id: c ?? T,
              children: a(ke, {
                animate: x,
                initial: !1,
                children:
                  C() &&
                  a(Oe, {
                    value: B,
                    children: a(f.div, {
                      ...u,
                      ...g,
                      className: b(R, ...E, `framer-1hbo82m`, s, h),
                      "data-framer-name": `Loading`,
                      layoutDependency: S,
                      layoutId: `G47S15YSn`,
                      ref: t ?? w,
                      style: { ...o },
                      children: a(I, {
                        __framer__animate: { transition: H },
                        __framer__animateOnce: !1,
                        __framer__enter: V,
                        __framer__exit: U,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1qrc6yg`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: S,
                        layoutId: `onOQ0YrdY`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        },
                        children: a(I, {
                          __framer__loop: G,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: W,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1jivlv8`,
                          "data-framer-name": `Conic`,
                          layoutDependency: S,
                          layoutId: `rN6xsA2D3`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg)`,
                          },
                          children: a(f.div, {
                            className: `framer-m7b4s7`,
                            "data-framer-name": `Round`,
                            layoutDependency: S,
                            layoutId: `KWLYXFUsw`,
                            style: {
                              backgroundColor: `rgb(153, 153, 153)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                          }),
                        }),
                      }),
                    }),
                  }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8EaGQ.framer-xuzmjz, .framer-8EaGQ .framer-xuzmjz { display: block; }`,
          `.framer-8EaGQ.framer-1hbo82m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-8EaGQ .framer-1qrc6yg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-8EaGQ .framer-1jivlv8 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-8EaGQ .framer-m7b4s7 { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8EaGQ.framer-1hbo82m { gap: 0px; } .framer-8EaGQ.framer-1hbo82m > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-8EaGQ.framer-1hbo82m > :first-child { margin-left: 0px; } .framer-8EaGQ.framer-1hbo82m > :last-child { margin-right: 0px; } }`,
        ],
        `framer-8EaGQ`
      )),
      (q = K),
      (K.displayName = `Spinner`),
      (K.defaultProps = { height: 40, width: 40 }),
      se(K, {
        variant: {
          options: [`G47S15YSn`, `PX1MOnVXY`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: de.Enum,
        },
      }),
      x(K, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  J,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  Y,
  X,
  Z,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  Q,
  et,
  $;
e(() => {
  (l(),
    T(),
    h(),
    n(),
    Ne(),
    ve(),
    Te(),
    ye(),
    N(),
    xe(),
    Ee(),
    (J = v(C)),
    (Pe = g(F)),
    (Fe = v(ce)),
    (Ie = g(P)),
    (Le = g(q)),
    (Re = w(D)),
    (ze = v(f.div)),
    (Be = {
      hwmIDnmU2: `(min-width: 1200px)`,
      k1Lg9xqa8: `(max-width: 809.98px)`,
      whlCJTj9f: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ve = `framer-uGil9`),
    (He = {
      hwmIDnmU2: `framer-v-f2t45a`,
      k1Lg9xqa8: `framer-v-y94wqs`,
      whlCJTj9f: `framer-v-1855uio`,
    }),
    (Ue = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Y = {
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
    (X = {
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
    (Z = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
      }
    }),
    (We = {
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
    (Ge = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ke = (e, t, n) => {
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
    (qe = { dateStyle: `medium`, timeZone: `UTC` }),
    (Je = (e, t) => Ke(e, qe, t)),
    (Ye = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Xe = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = O(e, t, `oiGGjDiOv`);
      return n(M(r), i, a);
    }),
    (Ze = ({ value: e }) =>
      ie()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Qe = { Desktop: `hwmIDnmU2`, Phone: `k1Lg9xqa8`, Tablet: `whlCJTj9f` }),
    ($e = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Qe[r.variant] ?? r.variant ?? `hwmIDnmU2`,
    })),
    (Q = S(
      o(function (e, n) {
        let o = r(null),
          s = n ?? o,
          l = d(),
          { activeLocale: p, setLocale: h } = oe(),
          g = k(),
          {
            style: _,
            className: v,
            layoutId: y,
            variant: x,
            s_lBuaFJ7oiGGjDiOv: S,
            Sv0j4mVcdoiGGjDiOv: C,
            Xqeoq3vaioiGGjDiOv: w,
            lXOtCG9B3oiGGjDiOv: T,
            aHMwj0hdyoiGGjDiOv: ie,
            idoiGGjDiOv: se,
            ...ce
          } = $e(e);
        ae(t(() => De({}, p), [p]));
        let [O, de] = re(x, Be, !1),
          j = b(Ve, we, he),
          M = le();
        te();
        let N = r(null);
        return (
          pe({}),
          a(ne.Provider, {
            value: { primaryVariantId: `hwmIDnmU2`, variantClassNames: He },
            children: c(m, {
              id: y ?? l,
              children: [
                a(Ze, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                c(f.div, {
                  ...ce,
                  className: b(j, `framer-f2t45a`, v),
                  ref: s,
                  style: { ..._ },
                  children: [
                    a(`section`, {
                      className: `framer-j4tb4f`,
                      "data-framer-name": `Hero`,
                      children: a(`div`, {
                        className: `framer-q3agrp`,
                        "data-framer-name": `Container`,
                        children: a(`div`, {
                          className: `framer-fwvfd`,
                          "data-framer-name": `Content`,
                          children: c(`div`, {
                            className: `framer-1ubam3e`,
                            "data-framer-name": `Headline`,
                            children: [
                              a(J, {
                                __fromCanvasComponent: !0,
                                animate: Ue,
                                children: a(i, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-xwy58e`,
                                    "data-styles-preset": `qclvMG6mW`,
                                    children: `My Journal`,
                                  }),
                                }),
                                className: `framer-3ofp0u`,
                                "data-framer-appear-id": `3ofp0u`,
                                fonts: [`Inter`],
                                initial: Y,
                                optimized: !0,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(J, {
                                __fromCanvasComponent: !0,
                                animate: X,
                                children: a(i, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    children: `Writing allows me to express my perspectives on design, emerging trends, and methodologies, helping me stay engaged and continue evolving.`,
                                  }),
                                }),
                                className: `framer-16zw803`,
                                "data-framer-appear-id": `16zw803`,
                                fonts: [`Inter`],
                                initial: Y,
                                optimized: !0,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(Fe, {
                                action: `https://api.framer.com/forms/v1/forms/8947c7bd-cb7f-427b-a9a2-88f602eff129/submit`,
                                animate: X,
                                className: `framer-64ys4n`,
                                "data-framer-appear-id": `64ys4n`,
                                "data-framer-name": `Newsletter form`,
                                initial: Y,
                                nodeId: `trsgtQLjk`,
                                optimized: !0,
                                children: (e) =>
                                  c(u, {
                                    children: [
                                      a(`label`, {
                                        className: `framer-chmoph`,
                                        "data-framer-name": `Email`,
                                        children: a(fe, {
                                          className: `framer-1k7t3w9`,
                                          "data-framer-name": `Email`,
                                          inputName: `Email`,
                                          placeholder: `Your Email`,
                                          required: !0,
                                          type: `email`,
                                        }),
                                      }),
                                      a(A, {
                                        breakpoint: O,
                                        overrides: {
                                          k1Lg9xqa8: {
                                            width: `min(max(min(${g?.width || `100vw`}, 1440px), 1px), 500px)`,
                                            y:
                                              (g?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              279.8 +
                                              0 +
                                              70,
                                          },
                                        },
                                        children: a(E, {
                                          height: 54,
                                          width: `180px`,
                                          y: (g?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 279.8 + 0,
                                          children: a(D, {
                                            className: `framer-gbhqf-container`,
                                            nodeId: `zr5tTzZfY`,
                                            scopeId: `G6F1BEvP2`,
                                            children: a(F, {
                                              AJEDie39b: `Get Notified`,
                                              height: `100%`,
                                              id: `zr5tTzZfY`,
                                              layoutId: `zr5tTzZfY`,
                                              style: { height: `100%`, width: `100%` },
                                              type: `submit`,
                                              variant: Z(
                                                e,
                                                {
                                                  error: `IDPshA6Kn`,
                                                  pending: `pE6OaDdlG`,
                                                  success: `hK595sst5`,
                                                },
                                                `JfJC92hxi`
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    a(`section`, {
                      className: `framer-w4t9j9`,
                      "data-framer-name": `Projects`,
                      children: a(`div`, {
                        className: `framer-nqcff2`,
                        "data-framer-name": `Container`,
                        children: a(ze, {
                          animate: We,
                          className: `framer-1xuu0q0`,
                          "data-framer-appear-id": `1xuu0q0`,
                          "data-framer-name": `Content`,
                          initial: Y,
                          optimized: !0,
                          children: a(`div`, {
                            className: `framer-1seb8zh`,
                            children: a(ue, {
                              children: a(Xe, {
                                pageSize: 10,
                                query: {
                                  from: { alias: `oiGGjDiOv`, data: be, type: `Collection` },
                                  select: [
                                    {
                                      collection: `oiGGjDiOv`,
                                      name: `s_lBuaFJ7`,
                                      type: `Identifier`,
                                    },
                                    {
                                      collection: `oiGGjDiOv`,
                                      name: `Sv0j4mVcd`,
                                      type: `Identifier`,
                                    },
                                    {
                                      collection: `oiGGjDiOv`,
                                      name: `Xqeoq3vai`,
                                      type: `Identifier`,
                                    },
                                    {
                                      collection: `oiGGjDiOv`,
                                      name: `lXOtCG9B3`,
                                      type: `Identifier`,
                                    },
                                    {
                                      collection: `oiGGjDiOv`,
                                      name: `aHMwj0hdy`,
                                      type: `Identifier`,
                                    },
                                    { collection: `oiGGjDiOv`, name: `id`, type: `Identifier` },
                                  ],
                                },
                                children: (e, t, n) =>
                                  c(u, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            aHMwj0hdy: e,
                                            id: t,
                                            lXOtCG9B3: n,
                                            s_lBuaFJ7: r,
                                            Sv0j4mVcd: i,
                                            Xqeoq3vai: o,
                                          },
                                          s
                                        ) => (
                                          (i ??= ``),
                                          (o ??= ``),
                                          (e ??= ``),
                                          a(
                                            m,
                                            {
                                              id: `oiGGjDiOv-${t}`,
                                              children: a(ee.Provider, {
                                                value: { aHMwj0hdy: e },
                                                children: a(me, {
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
                                                    a(A, {
                                                      breakpoint: O,
                                                      overrides: {
                                                        k1Lg9xqa8: {
                                                          width: `max(min(${g?.width || `100vw`}, 1440px), 1px)`,
                                                          y:
                                                            (g?.y || 0) +
                                                            0 +
                                                            403.8 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: a(E, {
                                                        height: 132,
                                                        width: `max((max(min(max(${g?.width || `100vw`}, 1px), 1440px), 1px) - 24px) / 2, 50px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          0 +
                                                          333.8 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: a(D, {
                                                          className: `framer-4ar6ym-container`,
                                                          nodeId: `jASg8Qave`,
                                                          scopeId: `G6F1BEvP2`,
                                                          children: a(A, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              k1Lg9xqa8: {
                                                                Ft55JIHYO: e[2],
                                                                variant: `fsdq4cRit`,
                                                              },
                                                              whlCJTj9f: {
                                                                Ft55JIHYO: e[1],
                                                                variant: `fsdq4cRit`,
                                                              },
                                                            },
                                                            children: a(P, {
                                                              Ft55JIHYO: e[0],
                                                              height: `100%`,
                                                              hm_R5PIpP: Ge(r),
                                                              id: `jASg8Qave`,
                                                              jDoZ1smJx: i,
                                                              layoutId: `jASg8Qave`,
                                                              style: { width: `100%` },
                                                              ukAvuT1Cr: Je(n, M),
                                                              variant: `VRLZt8z4Y`,
                                                              width: `100%`,
                                                              Y2xDYuDpW: o,
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
                                      a(A, {
                                        breakpoint: O,
                                        overrides: {
                                          k1Lg9xqa8: {
                                            width: void 0,
                                            y:
                                              (g?.y || 0) +
                                              0 +
                                              403.8 +
                                              0 +
                                              0 +
                                              60 +
                                              0 +
                                              0 +
                                              132 -
                                              -10,
                                          },
                                        },
                                        children: a(E, {
                                          height: 40,
                                          width: `max((max(min(max(${g?.width || `100vw`}, 1px), 1440px), 1px) - 24px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 333.8 + 0 + 100 + 0 + 0 + 288 - -10,
                                          children: a(Re, {
                                            __loadMore: n,
                                            __paginationInfo: t,
                                            className: `framer-a4356v-container`,
                                            isModuleExternal: !0,
                                            nodeId: `ghiqtqlfe`,
                                            ref: N,
                                            scopeId: `G6F1BEvP2`,
                                            children: a(q, {
                                              height: `100%`,
                                              id: `ghiqtqlfe`,
                                              layoutId: `ghiqtqlfe`,
                                              variant: Ye(
                                                t,
                                                { disabled: `PX1MOnVXY`, loading: `G47S15YSn` },
                                                `G47S15YSn`
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-uGil9.framer-1vxj5gu, .framer-uGil9 .framer-1vxj5gu { display: block; }`,
        `.framer-uGil9.framer-f2t45a { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-uGil9 .framer-j4tb4f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-uGil9 .framer-q3agrp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-uGil9 .framer-fwvfd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-uGil9 .framer-1ubam3e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-uGil9 .framer-3ofp0u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uGil9 .framer-16zw803 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uGil9 .framer-64ys4n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uGil9 .framer-chmoph { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-uGil9 .framer-1k7t3w9 { --framer-input-background: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); --framer-input-border-radius-bottom-left: 30px; --framer-input-border-radius-bottom-right: 30px; --framer-input-border-radius-top-left: 30px; --framer-input-border-radius-top-right: 30px; --framer-input-focused-border-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 16px 24px 16px 24px; --framer-input-placeholder-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); flex: none; height: 54px; position: relative; width: 100%; }`,
        `.framer-uGil9 .framer-gbhqf-container { flex: none; height: 54px; position: relative; width: 180px; }`,
        `.framer-uGil9 .framer-w4t9j9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-uGil9 .framer-nqcff2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-uGil9 .framer-1xuu0q0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-uGil9 .framer-1seb8zh { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-uGil9 .framer-4ar6ym-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-uGil9 .framer-a4356v-container { bottom: -50px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }`,
        ...Se,
        ...ge,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-uGil9.framer-f2t45a { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-uGil9.framer-f2t45a { width: 390px; } .framer-uGil9 .framer-j4tb4f, .framer-uGil9 .framer-64ys4n, .framer-uGil9 .framer-w4t9j9 { flex-direction: column; } .framer-uGil9 .framer-q3agrp, .framer-uGil9 .framer-chmoph { flex: none; width: 100%; } .framer-uGil9 .framer-fwvfd { gap: 60px; } .framer-uGil9 .framer-gbhqf-container { width: 100%; } .framer-uGil9 .framer-nqcff2 { flex: none; padding: 60px 0px 60px 0px; width: 100%; } .framer-uGil9 .framer-1seb8zh { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-uGil9 .framer-4ar6ym-container { align-self: unset; }}`,
      ],
      `framer-uGil9`
    )),
    (et = Q),
    (Q.displayName = `Work`),
    (Q.defaultProps = { height: 2694, width: 1200 }),
    x(
      Q,
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
        ...Pe,
        ...Ie,
        ...Le,
        ...y(Ce),
        ...y(_e),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerG6F1BEvP2`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `2694`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"whlCJTj9f":{"layout":["fixed","auto"]},"k1Lg9xqa8":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `* @framerResponsiveScreen`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, et as default };
//# sourceMappingURL=UlApcjYDdGuF7blQRz0sNu8dg1SvpJNDlHlQzzLNXwM.CvIQO7Ev.mjs.map
