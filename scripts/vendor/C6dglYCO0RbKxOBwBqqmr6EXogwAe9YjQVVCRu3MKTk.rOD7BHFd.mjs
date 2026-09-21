import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as ee,
  C as t,
  D as n,
  N as r,
  c as i,
  h as a,
  l as o,
  o as s,
  v as te,
} from "./react.BUXbFMJS.mjs";
import { S as c, r as ne, t as l } from "./motion.CLjJX74m.mjs";
import {
  B as u,
  Et as d,
  H as f,
  N as p,
  O as m,
  St as h,
  T as g,
  U as _,
  Y as v,
  a as y,
  bt as re,
  d as ie,
  dt as ae,
  ft as b,
  gt as oe,
  ht as se,
  o as x,
  p as ce,
  st as le,
  ut as ue,
  w as de,
  x as S,
} from "./framer.BQfDiYYl.mjs";
import { a as fe, c as C, o as w, s as pe } from "./shared-lib.DjXQ4AZU.mjs";
import { n as T, t as E } from "./CXVDk4iXl.tTc9sygM.mjs";
import { n as D, t as O } from "./EiSctT0o2.DmqrOrly.mjs";
import { i as me, n as he, r as ge, t as k } from "./fmOVsh00u.BOfh2ixt.mjs";
import { i as _e, n as A, r as j, t as M } from "./l3HElOeOb.BCd9AhIb.mjs";
import { i as N, n as P, r as F, t as ve } from "./qclvMG6mW.CcOdxI0M.mjs";
import { n as ye, r as be } from "./AALeOQBWx.CLIatX3j.mjs";
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (s(),
    v(),
    l(),
    t(),
    T(),
    D(),
    me(),
    _e(),
    C(),
    N(),
    ye(),
    (I = u(E)),
    (L = d(c.div)),
    (R = u(O)),
    (z = d(g)),
    (B = {
      F39sV9a_j: `(min-width: 1200px)`,
      hALi0eW3i: `(min-width: 810px) and (max-width: 1199.98px)`,
      lq4MllSRi: `(max-width: 809.98px)`,
    }),
    (V = () => typeof document < `u`),
    (H = `framer-jJgEe`),
    (U = {
      F39sV9a_j: `framer-v-csszv`,
      hALi0eW3i: `framer-v-n2sqoh`,
      lq4MllSRi: `framer-v-ikgtm9`,
    }),
    (W = {
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
    (G = {
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
    (K = {
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
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.5, duration: 1.5, type: `spring` },
      x: 0,
      y: 0,
    }),
    (J = ({ value: e }) =>
      b()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Y = { Desktop: `F39sV9a_j`, Phone: `lq4MllSRi`, Tablet: `hALi0eW3i` }),
    (X = ({ height: e, id: ee, width: t, ...n }) => ({
      ...n,
      variant: Y[n.variant] ?? n.variant ?? `F39sV9a_j`,
    })),
    (Z = h(
      a(function (e, t) {
        let a = n(null),
          s = t ?? a,
          l = te(),
          { activeLocale: u, setLocale: d } = se(),
          f = le(),
          { style: m, className: h, layoutId: v, variant: b, ...C } = X(e);
        oe(ee(() => be({}, u), [u]));
        let [w, pe] = ae(b, B, !1),
          T = p(H, M, ve, k, fe),
          D = () => (V() ? w !== `lq4MllSRi` : !0);
        return (
          re(),
          ue({}),
          i(ie.Provider, {
            value: { primaryVariantId: `F39sV9a_j`, variantClassNames: U },
            children: o(ne, {
              id: v ?? l,
              children: [
                i(J, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                i(c.div, {
                  ...C,
                  className: p(T, `framer-csszv`, h),
                  ref: s,
                  style: { ...m },
                  children: i(`section`, {
                    className: `framer-1n5eo99`,
                    "data-framer-name": `Hero`,
                    children: i(`div`, {
                      className: `framer-1let1u5`,
                      "data-framer-name": `Container`,
                      children: o(`div`, {
                        className: `framer-ze0uhw`,
                        "data-framer-name": `Content`,
                        children: [
                          o(L, {
                            animate: W,
                            className: `framer-rah5rd`,
                            "data-framer-appear-id": `rah5rd`,
                            "data-framer-name": `Avatar`,
                            initial: G,
                            optimized: !0,
                            children: [
                              i(S, {
                                breakpoint: w,
                                overrides: {
                                  hALi0eW3i: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: _((f?.y || 0) + 0 + 0 + 0 + 179 + 0 + 0 + 46.5),
                                      pixelHeight: 1333,
                                      pixelWidth: 2e3,
                                      sizes: `80px`,
                                      src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                      srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                    },
                                  },
                                  lq4MllSRi: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: _((f?.y || 0) + 0 + 0 + 0 + 0 + 73.7 + 0 + 0 + 51.5),
                                      pixelHeight: 1333,
                                      pixelWidth: 2e3,
                                      sizes: `70px`,
                                      src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                      srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                    },
                                  },
                                },
                                children: i(ce, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: _((f?.y || 0) + 0 + 0 + 0 + 107.6 + 0 + 0 + 46.5),
                                    pixelHeight: 1333,
                                    pixelWidth: 2e3,
                                    sizes: `80px`,
                                    src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                    srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                  },
                                  className: `framer-bd87fz`,
                                }),
                              }),
                              o(`div`, {
                                className: `framer-stwewd`,
                                "data-framer-name": `Name`,
                                children: [
                                  i(g, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-c0a7ln`,
                                        "data-styles-preset": `l3HElOeOb`,
                                        children: `Ana Parada`,
                                      }),
                                    }),
                                    className: `framer-k8fhs4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(`div`, {
                                    className: `framer-bexh0r`,
                                    "data-framer-name": `Socials`,
                                    children: [
                                      i(S, {
                                        breakpoint: w,
                                        overrides: {
                                          hALi0eW3i: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              179 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                          lq4MllSRi: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              73.7 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                        },
                                        children: i(y, {
                                          height: 22,
                                          width: `22px`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            107.6 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            151 +
                                            0,
                                          children: i(x, {
                                            className: `framer-6ygevh-container`,
                                            nodeId: `QfO6pBzeQ`,
                                            scopeId: `AALeOQBWx`,
                                            children: i(E, {
                                              AIGpMiTbN: `XLogo`,
                                              height: `100%`,
                                              id: `QfO6pBzeQ`,
                                              layoutId: `QfO6pBzeQ`,
                                              nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                              xLMsDJR23: `x.com`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: w,
                                        overrides: {
                                          hALi0eW3i: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              179 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                          lq4MllSRi: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              73.7 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                        },
                                        children: i(y, {
                                          height: 22,
                                          width: `22px`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            107.6 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            151 +
                                            0,
                                          children: i(x, {
                                            className: `framer-lg8lls-container`,
                                            nodeId: `jXSxxNJ6j`,
                                            scopeId: `AALeOQBWx`,
                                            children: i(E, {
                                              AIGpMiTbN: `InstagramLogo`,
                                              height: `100%`,
                                              id: `jXSxxNJ6j`,
                                              layoutId: `jXSxxNJ6j`,
                                              nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                              xLMsDJR23: `instagram.com`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: w,
                                        overrides: {
                                          hALi0eW3i: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              179 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                          lq4MllSRi: {
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              73.7 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              151 +
                                              0,
                                          },
                                        },
                                        children: i(y, {
                                          height: 22,
                                          width: `22px`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            107.6 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            151 +
                                            0,
                                          children: i(x, {
                                            className: `framer-ywjv93-container`,
                                            nodeId: `i0zmNRCnl`,
                                            scopeId: `AALeOQBWx`,
                                            children: i(E, {
                                              AIGpMiTbN: `LinkedinLogo`,
                                              height: `100%`,
                                              id: `i0zmNRCnl`,
                                              layoutId: `i0zmNRCnl`,
                                              nD6_0qOiV: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                              xLMsDJR23: `linkedin.com`,
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
                          o(L, {
                            animate: K,
                            className: `framer-sm70cv`,
                            "data-framer-appear-id": `sm70cv`,
                            "data-framer-name": `Headline`,
                            initial: G,
                            optimized: !0,
                            children: [
                              i(S, {
                                breakpoint: w,
                                overrides: {
                                  hALi0eW3i: {
                                    children: i(r, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-nizf32`,
                                        "data-styles-preset": `fmOVsh00u`,
                                        children: `404`,
                                      }),
                                    }),
                                  },
                                },
                                children: i(g, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`h1`, {
                                      className: `framer-styles-preset-xwy58e`,
                                      "data-styles-preset": `qclvMG6mW`,
                                      children: `404`,
                                    }),
                                  }),
                                  className: `framer-132mknu`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              D() &&
                                i(`div`, {
                                  className: `framer-1nrsjet hidden-ikgtm9`,
                                  "data-framer-name": `Dot`,
                                }),
                              i(S, {
                                breakpoint: w,
                                overrides: {
                                  hALi0eW3i: {
                                    children: i(r, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-nizf32`,
                                        "data-styles-preset": `fmOVsh00u`,
                                        style: {
                                          "--framer-text-color": `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                        },
                                        children: `Page Not Found`,
                                      }),
                                    }),
                                  },
                                },
                                children: i(g, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`h1`, {
                                      className: `framer-styles-preset-xwy58e`,
                                      "data-styles-preset": `qclvMG6mW`,
                                      style: {
                                        "--framer-text-color": `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                      },
                                      children: `Page Not Found`,
                                    }),
                                  }),
                                  className: `framer-tol72p`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              i(`div`, { className: `framer-mbkvq4`, "data-framer-name": `Line` }),
                              i(de, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  i(S, {
                                    breakpoint: w,
                                    overrides: {
                                      hALi0eW3i: { y: (f?.y || 0) + 0 + 0 + 0 + 179 + 0 + 213 + 0 },
                                      lq4MllSRi: {
                                        y: (f?.y || 0) + 0 + 0 + 0 + 0 + 73.7 + 0 + 221 + 0 + 254.6,
                                      },
                                    },
                                    children: i(y, {
                                      height: 54,
                                      y: (f?.y || 0) + 0 + 0 + 0 + 107.6 + 0 + 213 + 21.4,
                                      children: i(x, {
                                        className: `framer-1v05i6z-container`,
                                        nodeId: `tel5uascs`,
                                        scopeId: `AALeOQBWx`,
                                        children: i(S, {
                                          breakpoint: w,
                                          overrides: {
                                            hALi0eW3i: { xLMsDJR23: e[1] },
                                            lq4MllSRi: { xLMsDJR23: e[2] },
                                          },
                                          children: i(O, {
                                            height: `100%`,
                                            id: `tel5uascs`,
                                            layoutId: `tel5uascs`,
                                            Sg1kz8pun: `Back to Home`,
                                            t_K2Y1BU0: `Lightning`,
                                            variant: `fXEa8wn09`,
                                            width: `100%`,
                                            xLMsDJR23: e[0],
                                            XzlCbXnL2: !1,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          i(z, {
                            __fromCanvasComponent: !0,
                            animate: q,
                            children: i(r, {
                              children: i(`p`, {
                                className: `framer-styles-preset-dr60wz`,
                                "data-styles-preset": `PKAGe55xO`,
                                children: `Oops! It seems like you’ve stumbled upon a page that doesn’t exist.`,
                              }),
                            }),
                            className: `framer-1n3clkr`,
                            "data-framer-appear-id": `1n3clkr`,
                            fonts: [`Inter`],
                            initial: G,
                            optimized: !0,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-jJgEe.framer-1crpl19, .framer-jJgEe .framer-1crpl19 { display: block; }`,
        `.framer-jJgEe.framer-csszv { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-jJgEe .framer-1n5eo99 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-jJgEe .framer-1let1u5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100vh; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 0px 300px 0px; position: relative; width: 1px; }`,
        `.framer-jJgEe .framer-ze0uhw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jJgEe .framer-rah5rd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-jJgEe .framer-bd87fz { aspect-ratio: 1 / 1; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; flex: none; height: var(--framer-aspect-ratio-supported, 80px); overflow: hidden; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jJgEe .framer-stwewd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-jJgEe .framer-k8fhs4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-jJgEe .framer-bexh0r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-jJgEe .framer-6ygevh-container, .framer-jJgEe .framer-lg8lls-container, .framer-jJgEe .framer-ywjv93-container { flex: none; height: 22px; position: relative; width: 22px; }`,
        `.framer-jJgEe .framer-sm70cv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-jJgEe .framer-132mknu, .framer-jJgEe .framer-tol72p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-jJgEe .framer-1nrsjet { aspect-ratio: 1 / 1; background-color: var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, #82ff1c); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: var(--framer-aspect-ratio-supported, 10px); overflow: hidden; position: relative; width: 10px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-jJgEe .framer-mbkvq4 { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-jJgEe .framer-1v05i6z-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-jJgEe .framer-1n3clkr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...A,
        ...P,
        ...he,
        ...w,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-jJgEe.framer-csszv { width: 810px; } .framer-jJgEe .framer-1let1u5 { padding: 0px 0px 200px 0px; } .framer-jJgEe .framer-1nrsjet { height: var(--framer-aspect-ratio-supported, 6px); width: 6px; }}`,
        `@media (max-width: 809.98px) { .framer-jJgEe.framer-csszv { width: 390px; } .framer-jJgEe .framer-1n5eo99 { flex-direction: column; } .framer-jJgEe .framer-1let1u5 { flex: none; padding: 0px 0px 140px 0px; width: 100%; } .framer-jJgEe .framer-ze0uhw { gap: 48px; } .framer-jJgEe .framer-bd87fz { height: var(--framer-aspect-ratio-supported, 70px); width: 70px; } .framer-jJgEe .framer-sm70cv { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; } .framer-jJgEe .framer-132mknu { order: 0; } .framer-jJgEe .framer-tol72p { order: 2; } .framer-jJgEe .framer-mbkvq4 { flex: none; order: 3; width: 100%; } .framer-jJgEe .framer-1v05i6z-container { order: 4; }}`,
      ],
      `framer-jJgEe`
    )),
    (Q = Z),
    (Z.displayName = `Home`),
    (Z.defaultProps = { height: 1697, width: 1200 }),
    m(
      Z,
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
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
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
        ...I,
        ...R,
        ...f(j),
        ...f(F),
        ...f(ge),
        ...f(pe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerAALeOQBWx`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `1697`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"hALi0eW3i":{"layout":["fixed","auto"]},"lq4MllSRi":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=C6dglYCO0RbKxOBwBqqmr6EXogwAe9YjQVVCRu3MKTk.rOD7BHFd.mjs.map
