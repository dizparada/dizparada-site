import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  h as o,
  l as s,
  o as c,
  s as ee,
  v as te,
} from "./react.BUXbFMJS.mjs";
import { S as l, r as ne, t as re } from "./motion.CLjJX74m.mjs";
import {
  B as u,
  Ct as ie,
  Et as d,
  G as ae,
  H as f,
  N as p,
  O as m,
  St as h,
  T as g,
  U as oe,
  V as _,
  Y as v,
  _ as se,
  a as y,
  b as ce,
  bt as le,
  ct as ue,
  d as de,
  dt as fe,
  ft as b,
  gt as pe,
  ht as me,
  i as he,
  mt as ge,
  n as _e,
  o as x,
  p as ve,
  st as ye,
  ut as be,
  w as S,
  x as C,
  yt as w,
} from "./framer.BQfDiYYl.mjs";
import { i as T, n as E, r as xe, t as Se } from "./F_pPBFm64.R_TR2zCX.mjs";
import { a as Ce, c as we, o as D, s as O } from "./shared-lib.DjXQ4AZU.mjs";
import { i as Te, n as Ee, r as k, t as De } from "./YqEpde0dB.D0X_SpJn.mjs";
import { i as Oe, n as ke, r as A, t as Ae } from "./krsRuWvBk.CcHb3Ain.mjs";
import { n as je, t as j } from "./GDe4cfswB.DR20MxBb.mjs";
import { n as Me, t as M } from "./Gr0wzHBa6.DFGbWtn0.mjs";
import { n as N, t as Ne } from "./mN1qGB_I6.Cv6MNdwY.mjs";
import { i as Pe, t as P } from "./PmFmTH0v9.C5XWGSGf.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./fmOVsh00u.BOfh2ixt.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./qclvMG6mW.CcOdxI0M.mjs";
import {
  A as Ue,
  C as We,
  D as Ge,
  E as Ke,
  F,
  M as qe,
  N as I,
  O as Je,
  P as Ye,
  S as Xe,
  T as Ze,
  _ as Qe,
  a as $e,
  b as et,
  c as tt,
  d as nt,
  f as rt,
  g as it,
  h as at,
  i as ot,
  j as st,
  k as ct,
  l as lt,
  m as ut,
  n as dt,
  o as ft,
  p as pt,
  r as mt,
  s as ht,
  t as gt,
  u as _t,
  v as vt,
  w as yt,
  x as bt,
  y as xt,
} from "./XhlkaSBeI.M3fhvO10.mjs";
import { a as St, i as Ct } from "./eenHqF5o7.C8JjUxI9.mjs";
var L, R, z, B, V, H, U, W, wt, G, Tt, K, Et, Dt, q, J, Ot, Y, X, Z, kt, At, jt, Mt, Q, Nt, $;
e(() => {
  (c(),
    v(),
    re(),
    n(),
    je(),
    Me(),
    Ne(),
    Pe(),
    Ye(),
    qe(),
    Je(),
    T(),
    Fe(),
    yt(),
    et(),
    Oe(),
    it(),
    we(),
    ze(),
    rt(),
    tt(),
    ot(),
    Te(),
    Ct(),
    (L = u(M)),
    (R = d(l.div)),
    (z = d(g)),
    (B = u(j)),
    (V = ie(l.div)),
    (H = u(N)),
    (U = {
      AZhxNJBOv: `(max-width: 809.98px)`,
      FPtrvPFcc: `(min-width: 1200px)`,
      R7PTRXmt1: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (W = `framer-P6c5z`),
    (wt = {
      AZhxNJBOv: `framer-v-xzt0zz`,
      FPtrvPFcc: `framer-v-95xtmi`,
      R7PTRXmt1: `framer-v-18lsqjd`,
    }),
    (G = { bounce: 0.2, delay: 0, duration: 1.5, type: `spring` }),
    (Tt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (K = {
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
    (Et = (e, t, n) => {
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
    (Dt = { dateStyle: `medium`, timeZone: `UTC` }),
    (q = (e, t) => Et(e, Dt, t)),
    (J = {
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
    (Ot = {
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
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = {
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
    (Z = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 80,
    }),
    (kt = ({ query: e, pageSize: t, children: n }) => n(w(e))),
    (At = ({ value: e }) =>
      b()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (jt = { Desktop: `FPtrvPFcc`, Phone: `AZhxNJBOv`, Tablet: `R7PTRXmt1` }),
    (Mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: jt[r.variant] ?? r.variant ?? `FPtrvPFcc`,
    })),
    (Q = h(
      o(function (e, n) {
        let o = r(null),
          c = n ?? o,
          re = te(),
          { activeLocale: u, setLocale: ie } = me(),
          d = ye(),
          f = ue(),
          [m] = w({
            from: { alias: `eenHqF5o7`, data: P, type: `Collection` },
            select: [
              { collection: `eenHqF5o7`, name: `Sv0j4mVcd`, type: `Identifier` },
              { collection: `eenHqF5o7`, name: `lXOtCG9B3`, type: `Identifier` },
              { collection: `eenHqF5o7`, name: `Xqeoq3vai`, type: `Identifier` },
              { collection: `eenHqF5o7`, name: `K9HUhzqVL`, type: `Identifier` },
              { collection: `eenHqF5o7`, name: `s_lBuaFJ7`, type: `Identifier` },
              { collection: `eenHqF5o7`, name: `HXF3vunRg`, type: `Identifier` },
            ],
            where: ae(f, `eenHqF5o7`),
          }),
          h = (e) => {
            if (!m) throw new se(`No data matches path variables: ${JSON.stringify(f)}`);
            return m[e];
          },
          {
            style: _,
            className: v,
            layoutId: b,
            variant: T,
            Sv0j4mVcd: E = h(`Sv0j4mVcd`) ?? ``,
            lXOtCG9B3: xe = h(`lXOtCG9B3`),
            Xqeoq3vai: we = h(`Xqeoq3vai`) ?? ``,
            K9HUhzqVL: D = h(`K9HUhzqVL`) ?? ``,
            s_lBuaFJ7: O = h(`s_lBuaFJ7`),
            HXF3vunRg: Te = h(`HXF3vunRg`) ?? ``,
            ...Ee
          } = Mt(e);
        pe(t(() => St({ K9HUhzqVL: D, s_lBuaFJ7: O, Sv0j4mVcd: E }, u), [O, E, D, u]));
        let [k, Oe] = fe(T, U, !1),
          ke = p(W, De, Se, Ce, He, Re, $e, Ze, pt, gt, Ae, ct, lt, bt, Qe),
          A = ge();
        return (
          le(),
          be({}),
          a(de.Provider, {
            value: { primaryVariantId: `FPtrvPFcc`, variantClassNames: wt },
            children: s(ne, {
              id: b ?? re,
              children: [
                a(At, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                s(l.div, {
                  ...Ee,
                  className: p(ke, `framer-95xtmi`, v),
                  ref: c,
                  style: { ..._ },
                  children: [
                    a(`section`, {
                      className: `framer-1r32jgs`,
                      "data-framer-name": `Project title`,
                      children: a(`div`, {
                        className: `framer-yragog`,
                        "data-framer-name": `Container`,
                        children: a(`div`, {
                          className: `framer-1ox0yd`,
                          "data-framer-name": `Content`,
                          children: s(`div`, {
                            className: `framer-1pt6zv3`,
                            "data-framer-name": `Headline`,
                            children: [
                              s(R, {
                                animate: Tt,
                                className: `framer-ulek5a`,
                                "data-framer-appear-id": `ulek5a`,
                                "data-framer-name": `Date`,
                                initial: K,
                                optimized: !0,
                                children: [
                                  a(C, {
                                    breakpoint: k,
                                    overrides: {
                                      AZhxNJBOv: {
                                        y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 42,
                                      },
                                    },
                                    children: a(y, {
                                      height: 21,
                                      y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 42,
                                      children: a(x, {
                                        className: `framer-8slbub-container`,
                                        nodeId: `BYBkUpAZa`,
                                        scopeId: `eenHqF5o7`,
                                        children: a(M, {
                                          fviPiX_DE: `Calendar`,
                                          height: `100%`,
                                          id: `BYBkUpAZa`,
                                          layoutId: `BYBkUpAZa`,
                                          ldb9kzWDh: `10+`,
                                          variant: `IS3qh851o`,
                                          width: `100%`,
                                          xhMKtzNep: q(xe, A),
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(`div`, { className: `framer-129vf6e` }),
                                  a(g, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        className: `framer-styles-preset-d9dxvl`,
                                        "data-styles-preset": `YqEpde0dB`,
                                        style: {
                                          "--framer-text-color": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        },
                                        children: `6 min read`,
                                      }),
                                    }),
                                    className: `framer-16wj68s`,
                                    fonts: [`Inter`],
                                    text: we,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(z, {
                                __fromCanvasComponent: !0,
                                animate: J,
                                children: a(i, {
                                  children: a(`h1`, {
                                    className: `framer-styles-preset-1tmv4lr`,
                                    "data-styles-preset": `F_pPBFm64`,
                                    children: `Web Design Trends to Watch in 2025`,
                                  }),
                                }),
                                className: `framer-8i8fnl`,
                                "data-framer-appear-id": `8i8fnl`,
                                fonts: [`Inter`],
                                initial: K,
                                optimized: !0,
                                text: E,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(z, {
                                __fromCanvasComponent: !0,
                                animate: J,
                                children: a(i, {
                                  children: a(`p`, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    children: `Discover the latest web design trends shaping 2025, from AI-driven design to immersive experiences, and how they can elevate your brand’s online presence.`,
                                  }),
                                }),
                                className: `framer-nh9y1s`,
                                "data-framer-appear-id": `nh9y1s`,
                                fonts: [`Inter`],
                                initial: K,
                                optimized: !0,
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    a(`section`, {
                      className: `framer-oxoo`,
                      "data-framer-name": `Gallery & Details`,
                      children: a(`div`, {
                        className: `framer-1taam88`,
                        "data-framer-name": `Container`,
                        children: s(R, {
                          animate: Ot,
                          className: `framer-1uj44op`,
                          "data-framer-appear-id": `1uj44op`,
                          "data-framer-name": `Content`,
                          initial: K,
                          optimized: !0,
                          children: [
                            a(C, {
                              breakpoint: k,
                              overrides: {
                                AZhxNJBOv: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: oe((d?.y || 0) + 0 + 360 + 0 + 0 + 60 + 0 + 0),
                                    pixelHeight: 2160,
                                    pixelWidth: 4308,
                                    sizes: `max(min(${d?.width || `100vw`}, 1440px), 1px)`,
                                    ...Y(O),
                                  },
                                },
                              },
                              children: a(ve, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: oe((d?.y || 0) + 0 + 360 + 0 + 60 + 0 + 0),
                                  pixelHeight: 2160,
                                  pixelWidth: 4308,
                                  sizes: `max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px)`,
                                  ...Y(O),
                                },
                                className: `framer-h8x5hx`,
                                "data-framer-name": `Preview Image`,
                              }),
                            }),
                            a(he, {
                              presets: {
                                "module:0sWquksFr1YDkaIgrl9Z/UT4NRwjlZHMvmo1AsSka/Vimeo.js:default":
                                  F.mFwtDiA95,
                                "module:NEd4VmDdsxM3StIUbddO/4sbLnuatuUfmOTwFGSJM/YouTube.js:Youtube":
                                  F.HnWsd3LQ0,
                                "module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":
                                  F.bnkvK7CuS,
                              },
                              children: a(g, {
                                __fromCanvasComponent: !0,
                                children: Te,
                                className: `framer-1m98bhu`,
                                fonts: [`Inter`],
                                stylesPresetsClassNames: {
                                  a: `framer-styles-preset-1d6nlyh`,
                                  blockquote: `framer-styles-preset-3lkr40`,
                                  code: `framer-styles-preset-1r78cp`,
                                  h1: `framer-styles-preset-xwy58e`,
                                  h2: `framer-styles-preset-nizf32`,
                                  h3: `framer-styles-preset-18jeajt`,
                                  h4: `framer-styles-preset-8e29y`,
                                  h5: `framer-styles-preset-113e1dd`,
                                  h6: `framer-styles-preset-1o70l46`,
                                  img: `framer-styles-preset-11kbgic`,
                                  p: `framer-styles-preset-dr60wz`,
                                  table: `framer-styles-preset-dvu9ea`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    a(`section`, {
                      className: `framer-197sq1g`,
                      "data-framer-name": `Journal`,
                      children: a(`div`, {
                        className: `framer-137wj90`,
                        "data-framer-name": `Container`,
                        children: s(`div`, {
                          className: `framer-1ferbde`,
                          "data-framer-name": `Content`,
                          children: [
                            s(V, {
                              __framer__animate: { transition: G },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1l4sw2v`,
                              "data-framer-name": `Title`,
                              children: [
                                a(g, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: `Read More Articles`,
                                    }),
                                  }),
                                  className: `framer-qu6lvs`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(`div`, {
                                  className: `framer-1yi3vn5`,
                                  "data-framer-name": `Line`,
                                }),
                                a(S, {
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
                                    a(C, {
                                      breakpoint: k,
                                      overrides: {
                                        AZhxNJBOv: {
                                          y: (d?.y || 0) + 0 + 1286 + 0 + 0 + 60 + 0 + 0 + 0 + 81,
                                        },
                                      },
                                      children: a(y, {
                                        height: 41,
                                        y: (d?.y || 0) + 0 + 1326 + 0 + 100 + 0 + 0 + 3.5,
                                        children: a(x, {
                                          className: `framer-fjb9r1-container`,
                                          nodeId: `yBBizVQ7c`,
                                          scopeId: `eenHqF5o7`,
                                          children: a(C, {
                                            breakpoint: k,
                                            overrides: {
                                              AZhxNJBOv: { xLMsDJR23: e[2] },
                                              R7PTRXmt1: { xLMsDJR23: e[1] },
                                            },
                                            children: a(j, {
                                              height: `100%`,
                                              id: `yBBizVQ7c`,
                                              layoutId: `yBBizVQ7c`,
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
                            a(V, {
                              __framer__animate: { transition: G },
                              __framer__animateOnce: !0,
                              __framer__enter: X,
                              __framer__exit: Z,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1qiz8tf`,
                              "data-framer-name": `Articles`,
                              children: a(`div`, {
                                className: `framer-lah76d`,
                                children: a(_e, {
                                  children: a(kt, {
                                    query: {
                                      from: { alias: `GDdLfN1tj`, data: P, type: `Collection` },
                                      limit: { type: `LiteralValue`, value: 3 },
                                      select: [
                                        {
                                          collection: `GDdLfN1tj`,
                                          name: `s_lBuaFJ7`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `GDdLfN1tj`,
                                          name: `Sv0j4mVcd`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `GDdLfN1tj`,
                                          name: `Xqeoq3vai`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `GDdLfN1tj`,
                                          name: `lXOtCG9B3`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `GDdLfN1tj`,
                                          name: `aHMwj0hdy`,
                                          type: `Identifier`,
                                        },
                                        { collection: `GDdLfN1tj`, name: `id`, type: `Identifier` },
                                      ],
                                      where: {
                                        operator: `not`,
                                        type: `UnaryOperation`,
                                        value: {
                                          left: {
                                            collection: `GDdLfN1tj`,
                                            name: `Sv0j4mVcd`,
                                            type: `Identifier`,
                                          },
                                          operator: `==`,
                                          right: { type: `LiteralValue`, value: E },
                                          type: `BinaryOperation`,
                                        },
                                      },
                                    },
                                    children: (e, t, n) =>
                                      a(ee, {
                                        children: e?.map(
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
                                              ne,
                                              {
                                                id: `GDdLfN1tj-${t}`,
                                                children: a(ce.Provider, {
                                                  value: { aHMwj0hdy: e },
                                                  children: a(S, {
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
                                                      a(C, {
                                                        breakpoint: k,
                                                        overrides: {
                                                          AZhxNJBOv: {
                                                            width: `max(min(${d?.width || `100vw`}, 1440px), 1px)`,
                                                            y:
                                                              (d?.y || 0) +
                                                              0 +
                                                              1286 +
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
                                                        children: a(y, {
                                                          height: 132,
                                                          width: `max(min(max(${d?.width || `100vw`}, 1px), 1440px), 1px)`,
                                                          y:
                                                            (d?.y || 0) +
                                                            0 +
                                                            1326 +
                                                            0 +
                                                            100 +
                                                            0 +
                                                            102 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0,
                                                          children: a(x, {
                                                            className: `framer-jdurvy-container`,
                                                            nodeId: `oywhzVXE0`,
                                                            scopeId: `eenHqF5o7`,
                                                            children: a(C, {
                                                              breakpoint: k,
                                                              overrides: {
                                                                AZhxNJBOv: {
                                                                  Ft55JIHYO: e[2],
                                                                  variant: `fsdq4cRit`,
                                                                },
                                                                R7PTRXmt1: {
                                                                  Ft55JIHYO: e[1],
                                                                  variant: `TX1TXGkA4`,
                                                                },
                                                              },
                                                              children: a(N, {
                                                                Ft55JIHYO: e[0],
                                                                height: `100%`,
                                                                hm_R5PIpP: Y(r),
                                                                id: `oywhzVXE0`,
                                                                jDoZ1smJx: i,
                                                                layoutId: `oywhzVXE0`,
                                                                style: { width: `100%` },
                                                                ukAvuT1Cr: q(n, A),
                                                                variant: `EEiOIR5U0`,
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-P6c5z.framer-19940uy, .framer-P6c5z .framer-19940uy { display: block; }`,
        `.framer-P6c5z.framer-95xtmi { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-P6c5z .framer-1r32jgs, .framer-P6c5z .framer-197sq1g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-P6c5z .framer-yragog { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-1ox0yd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-1pt6zv3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-P6c5z .framer-ulek5a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-P6c5z .framer-8slbub-container, .framer-P6c5z .framer-fjb9r1-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-P6c5z .framer-129vf6e { aspect-ratio: 1 / 1; background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 15px; border-top-right-radius: 15px; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: hidden; position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-P6c5z .framer-16wj68s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-8i8fnl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-P6c5z .framer-nh9y1s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-P6c5z .framer-oxoo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-P6c5z .framer-1taam88 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 60px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-1uj44op { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-P6c5z .framer-h8x5hx { aspect-ratio: 1.7230769230769232 / 1; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: var(--framer-aspect-ratio-supported, 650px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-P6c5z .framer-1m98bhu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-P6c5z .framer-137wj90 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-1ferbde { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-P6c5z .framer-1l4sw2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-P6c5z .framer-qu6lvs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-P6c5z .framer-1yi3vn5 { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
        `.framer-P6c5z .framer-1qiz8tf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-P6c5z .framer-lah76d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-P6c5z .framer-jdurvy-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Ee,
        ...E,
        ...D,
        ...Be,
        ...Ie,
        ...ft,
        ...Ke,
        ...ut,
        ...dt,
        ...ke,
        ...Ue,
        ..._t,
        ...Xe,
        ...vt,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-P6c5z.framer-95xtmi { width: 810px; } .framer-P6c5z .framer-h8x5hx { height: var(--framer-aspect-ratio-supported, 435px); }}`,
        `@media (max-width: 809.98px) { .framer-P6c5z.framer-95xtmi { width: 390px; } .framer-P6c5z .framer-1r32jgs, .framer-P6c5z .framer-oxoo, .framer-P6c5z .framer-197sq1g { flex-direction: column; } .framer-P6c5z .framer-yragog, .framer-P6c5z .framer-1yi3vn5 { flex: none; width: 100%; } .framer-P6c5z .framer-1taam88, .framer-P6c5z .framer-137wj90 { flex: none; padding: 60px 0px 60px 0px; width: 100%; } .framer-P6c5z .framer-h8x5hx { height: var(--framer-aspect-ratio-supported, 208px); } .framer-P6c5z .framer-1l4sw2v { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: wrap; }}`,
      ],
      `framer-P6c5z`
    )),
    (Nt = Q),
    (Q.displayName = `Blog`),
    (Q.defaultProps = { height: 3624, width: 1200 }),
    m(
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
        ...L,
        ...B,
        ...H,
        ...f(k),
        ...f(xe),
        ...f(O),
        ...f(Ve),
        ...f(Le),
        ...f(ht),
        ...f(Ge),
        ...f(at),
        ...f(mt),
        ...f(A),
        ...f(st),
        ...f(nt),
        ...f(We),
        ...f(xt),
        ...(I.HnWsd3LQ0 ? _(I.HnWsd3LQ0) : []),
        ...(I.bnkvK7CuS ? _(I.bnkvK7CuS) : []),
        ...(I.mFwtDiA95 ? _(I.mFwtDiA95) : []),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramereenHqF5o7`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"R7PTRXmt1":{"layout":["fixed","auto"]},"AZhxNJBOv":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `3624`,
            framerScrollSections: `* @framerResponsiveScreen`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Nt as default };
//# sourceMappingURL=B7JQa2DRSQdUkEYbU4waoQQIXCAA7pWwaDQ_p8_nMDk.BFfGjkSf.mjs.map
