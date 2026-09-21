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
import { S as l, r as ne, t as u } from "./motion.CLjJX74m.mjs";
import {
  B as d,
  Ct as re,
  Et as f,
  H as p,
  N as m,
  O as h,
  St as g,
  T as _,
  Y as v,
  a as y,
  bt as ie,
  d as b,
  dt as ae,
  ft as x,
  gt as oe,
  ht as se,
  l as ce,
  o as S,
  st as le,
  u as C,
  ut as ue,
  w as de,
  x as w,
} from "./framer.BQfDiYYl.mjs";
import { a as fe, c as T, o as pe, s as E } from "./shared-lib.DjXQ4AZU.mjs";
import { i as me, n as he, r as ge, t as _e } from "./YqEpde0dB.D0X_SpJn.mjs";
import { n as ve, t as D } from "./CXVDk4iXl.tTc9sygM.mjs";
import { n as ye, t as O } from "./EiSctT0o2.DmqrOrly.mjs";
import { n as be, t as k } from "./NIVshdPum.CYPuXDhP.mjs";
import { i as xe, n as A, r as j, t as Se } from "./fmOVsh00u.BOfh2ixt.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./qclvMG6mW.CcOdxI0M.mjs";
import { n as M, t as De } from "./yceyBWNmE.CkHdzxWa.mjs";
import { n as Oe, r as ke } from "./JRRZ10Fay.wVwCi-Zo.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    u(),
    n(),
    ve(),
    ye(),
    be(),
    De(),
    xe(),
    T(),
    Ce(),
    me(),
    Oe(),
    (N = f(l.div)),
    (P = d(O)),
    (F = d(k)),
    (I = d(D)),
    (L = re(l.div)),
    (R = d(M)),
    (z = {
      cajFwxXYy: `(min-width: 1200px)`,
      K5ICaNU9l: `(min-width: 810px) and (max-width: 1199.98px)`,
      QzPSCntpS: `(max-width: 809.98px)`,
    }),
    (B = `framer-edmTf`),
    (V = {
      cajFwxXYy: `framer-v-1s3wd42`,
      K5ICaNU9l: `framer-v-1uf0cb5`,
      QzPSCntpS: `framer-v-5d0xc9`,
    }),
    (H = { bounce: 0.2, delay: 0, duration: 1.5, type: `spring` }),
    (U = {
      opacity: 1,
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
    (W = {
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
    (G = {
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
    (K = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: H,
      x: 0,
      y: 80,
    }),
    (q = (e, t, n) => {
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
    (J = ({ value: e }) =>
      x()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Y = { Desktop: `cajFwxXYy`, Phone: `QzPSCntpS`, Tablet: `K5ICaNU9l` }),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `cajFwxXYy`,
    })),
    (Z = g(
      o(function (e, n) {
        let o = r(null),
          c = n ?? o,
          u = te(),
          { activeLocale: d, setLocale: re } = se(),
          f = le(),
          { style: p, className: h, layoutId: g, variant: v, ...x } = X(e);
        oe(t(() => ke({}, d), [d]));
        let [T, pe] = ae(v, z, !1),
          E = m(B, Ee, fe, Se, _e);
        return (
          ie(),
          ue({}),
          a(b.Provider, {
            value: { primaryVariantId: `cajFwxXYy`, variantClassNames: V },
            children: s(ne, {
              id: g ?? u,
              children: [
                a(J, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                a(l.div, {
                  ...x,
                  className: m(E, `framer-1s3wd42`, h),
                  ref: c,
                  style: { ...p },
                  children: a(`section`, {
                    className: `framer-3lh4os`,
                    "data-framer-name": `Hero`,
                    children: a(`div`, {
                      className: `framer-1530ba1`,
                      "data-framer-name": `Container`,
                      children: s(`div`, {
                        className: `framer-zyygcv`,
                        "data-framer-name": `Content`,
                        children: [
                          a(`div`, {
                            className: `framer-11rswgv`,
                            "data-framer-name": `Headline`,
                            children: s(N, {
                              animate: U,
                              className: `framer-gxesev`,
                              "data-framer-appear-id": `gxesev`,
                              "data-framer-name": `Title`,
                              initial: W,
                              optimized: !0,
                              children: [
                                a(_, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`h1`, {
                                      className: `framer-styles-preset-xwy58e`,
                                      "data-styles-preset": `qclvMG6mW`,
                                      children: `Let's Talk`,
                                    }),
                                  }),
                                  className: `framer-4265eq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(_, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`p`, {
                                      className: `framer-styles-preset-dr60wz`,
                                      "data-styles-preset": `PKAGe55xO`,
                                      children: `Let’s bring your vision to life! Let's talk!`,
                                    }),
                                  }),
                                  className: `framer-18hwbsk`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          s(L, {
                            __framer__animate: { transition: H },
                            __framer__animateOnce: !0,
                            __framer__enter: G,
                            __framer__exit: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-6dtvi4`,
                            "data-framer-name": `Info`,
                            children: [
                              a(de, {
                                links: [
                                  {
                                    href: { webPageId: `JRRZ10Fay` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `JRRZ10Fay` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `JRRZ10Fay` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  a(y, {
                                    height: 54,
                                    children: a(S, {
                                      className: `framer-17vlc03-container`,
                                      nodeId: `hLwIuB31V`,
                                      scopeId: `JRRZ10Fay`,
                                      children: a(w, {
                                        breakpoint: T,
                                        overrides: {
                                          K5ICaNU9l: { xLMsDJR23: e[1] },
                                          QzPSCntpS: { xLMsDJR23: e[2] },
                                        },
                                        children: a(O, {
                                          height: `100%`,
                                          id: `hLwIuB31V`,
                                          layoutId: `hLwIuB31V`,
                                          Sg1kz8pun: `Book a Call`,
                                          t_K2Y1BU0: `CalendarCheck`,
                                          variant: `fXEa8wn09`,
                                          width: `100%`,
                                          xLMsDJR23: e[0],
                                          XzlCbXnL2: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              a(`div`, { className: `framer-14f98s7`, "data-framer-name": `Line` }),
                              a(y, {
                                height: 27,
                                children: a(S, {
                                  className: `framer-d4w9dy-container`,
                                  nodeId: `EMFZ3qp50`,
                                  scopeId: `JRRZ10Fay`,
                                  children: a(k, {
                                    fRGF_dpe1: `Chat`,
                                    height: `100%`,
                                    id: `EMFZ3qp50`,
                                    layoutId: `EMFZ3qp50`,
                                    Nve9M28HB: `mailto:hello@david.design`,
                                    sHHzugcQV: `dizparada@gmail.com`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              a(`div`, { className: `framer-b9ugi1`, "data-framer-name": `Line` }),
                              a(`div`, { className: `framer-rfs7d2`, "data-framer-name": `Line` }),
                              s(`div`, {
                                className: `framer-rsk0x2`,
                                "data-framer-name": `Socials`,
                                children: [
                                  a(w, {
                                    breakpoint: T,
                                    overrides: { QzPSCntpS: { height: 22, width: `22px` } },
                                    children: a(y, {
                                      height: 24,
                                      width: `24px`,
                                      children: a(S, {
                                        className: `framer-1suyqgf-container`,
                                        nodeId: `ZsaonmX8r`,
                                        scopeId: `JRRZ10Fay`,
                                        children: a(D, {
                                          AIGpMiTbN: `XLogo`,
                                          height: `100%`,
                                          id: `ZsaonmX8r`,
                                          layoutId: `ZsaonmX8r`,
                                          nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                          style: { height: `100%`, width: `100%` },
                                          width: `100%`,
                                          xLMsDJR23: `x.com`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-1z3rhi`,
                                    "data-framer-name": `Dot`,
                                  }),
                                  a(w, {
                                    breakpoint: T,
                                    overrides: { QzPSCntpS: { height: 22, width: `22px` } },
                                    children: a(y, {
                                      height: 24,
                                      width: `24px`,
                                      children: a(S, {
                                        className: `framer-6v1fpm-container`,
                                        nodeId: `EJdyBxL4S`,
                                        scopeId: `JRRZ10Fay`,
                                        children: a(D, {
                                          AIGpMiTbN: `InstagramLogo`,
                                          height: `100%`,
                                          id: `EJdyBxL4S`,
                                          layoutId: `EJdyBxL4S`,
                                          nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                          style: { height: `100%`, width: `100%` },
                                          width: `100%`,
                                          xLMsDJR23: `instagram.com`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  a(`div`, {
                                    className: `framer-1cbjqby`,
                                    "data-framer-name": `Dot`,
                                  }),
                                  a(w, {
                                    breakpoint: T,
                                    overrides: { QzPSCntpS: { height: 22, width: `22px` } },
                                    children: a(y, {
                                      height: 24,
                                      width: `24px`,
                                      children: a(S, {
                                        className: `framer-9b0g86-container`,
                                        nodeId: `Ht8YtJn1E`,
                                        scopeId: `JRRZ10Fay`,
                                        children: a(D, {
                                          AIGpMiTbN: `LinkedinLogo`,
                                          height: `100%`,
                                          id: `Ht8YtJn1E`,
                                          layoutId: `Ht8YtJn1E`,
                                          nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
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
                          s(L, {
                            __framer__animate: { transition: H },
                            __framer__animateOnce: !0,
                            __framer__enter: G,
                            __framer__exit: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1egpy7w`,
                            "data-framer-name": `Contact form`,
                            children: [
                              a(`div`, {
                                className: `framer-1kpsx96`,
                                "data-framer-name": `Title`,
                                children: a(_, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: s(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: [
                                        `Reach out, `,
                                        a(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                          },
                                          children: `and let’s create something amazing together.`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1czxtyr`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(ce, {
                                action: `https://api.framer.com/forms/v1/forms/57404bc9-2b64-4481-86b6-f927affb6047/submit`,
                                className: `framer-e9tw3d`,
                                "data-framer-name": `Contact form`,
                                nodeId: `h__WEiGJ1`,
                                children: (e) =>
                                  s(ee, {
                                    children: [
                                      s(`label`, {
                                        className: `framer-1l3fb3g`,
                                        "data-framer-name": `Name`,
                                        children: [
                                          a(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-d9dxvl`,
                                                "data-styles-preset": `YqEpde0dB`,
                                                children: `Name*`,
                                              }),
                                            }),
                                            className: `framer-aezojj`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            className: `framer-cpajlz`,
                                            "data-framer-name": `Name`,
                                            inputName: `Name`,
                                            placeholder: `John`,
                                            required: !0,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-1nqxsz`,
                                        "data-framer-name": `Email`,
                                        children: [
                                          a(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-d9dxvl`,
                                                "data-styles-preset": `YqEpde0dB`,
                                                children: `Email*`,
                                              }),
                                            }),
                                            className: `framer-1pby09r`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            className: `framer-qw1i71`,
                                            "data-framer-name": `Email`,
                                            inputName: `Email`,
                                            placeholder: `contact@gmail.com`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                      s(`label`, {
                                        className: `framer-17a8gv8`,
                                        "data-framer-name": `Message`,
                                        children: [
                                          a(_, {
                                            __fromCanvasComponent: !0,
                                            children: a(i, {
                                              children: a(`p`, {
                                                className: `framer-styles-preset-d9dxvl`,
                                                "data-styles-preset": `YqEpde0dB`,
                                                children: `Message*`,
                                              }),
                                            }),
                                            className: `framer-qhbill`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            className: `framer-158v7cd`,
                                            "data-framer-name": `Message`,
                                            inputName: `Message`,
                                            placeholder: `Project inquiry...`,
                                            required: !0,
                                            type: `textarea`,
                                          }),
                                        ],
                                      }),
                                      a(w, {
                                        breakpoint: T,
                                        overrides: {
                                          QzPSCntpS: {
                                            width: `max(min(${f?.width || `100vw`}, 1440px), 1px)`,
                                          },
                                        },
                                        children: a(y, {
                                          height: 54,
                                          width: `max((max(min(max(${f?.width || `100vw`}, 1px), 1440px), 1px) - 54px) / 2, 1px)`,
                                          children: a(S, {
                                            className: `framer-aiv832-container`,
                                            nodeId: `Z2XjOGuGh`,
                                            scopeId: `JRRZ10Fay`,
                                            children: a(M, {
                                              AJEDie39b: `Send Message`,
                                              height: `100%`,
                                              id: `Z2XjOGuGh`,
                                              layoutId: `Z2XjOGuGh`,
                                              style: { height: `100%`, width: `100%` },
                                              type: `submit`,
                                              variant: q(
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
                        ],
                      }),
                    }),
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-edmTf.framer-1n75ytz, .framer-edmTf .framer-1n75ytz { display: block; }`,
        `.framer-edmTf.framer-1s3wd42 { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-edmTf .framer-3lh4os { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-edmTf .framer-1530ba1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-edmTf .framer-zyygcv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-edmTf .framer-11rswgv { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-gxesev { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-edmTf .framer-4265eq, .framer-edmTf .framer-1czxtyr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-18hwbsk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-6dtvi4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-17vlc03-container, .framer-edmTf .framer-d4w9dy-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-edmTf .framer-14f98s7, .framer-edmTf .framer-b9ugi1, .framer-edmTf .framer-rfs7d2 { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-edmTf .framer-rsk0x2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-edmTf .framer-1suyqgf-container, .framer-edmTf .framer-6v1fpm-container, .framer-edmTf .framer-9b0g86-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-edmTf .framer-1z3rhi, .framer-edmTf .framer-1cbjqby { background-color: var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, #82ff1c); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 3px; overflow: hidden; position: relative; width: 3px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-edmTf .framer-1egpy7w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-1kpsx96, .framer-edmTf .framer-e9tw3d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-edmTf .framer-1l3fb3g, .framer-edmTf .framer-1nqxsz, .framer-edmTf .framer-17a8gv8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-aezojj, .framer-edmTf .framer-1pby09r, .framer-edmTf .framer-qhbill { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-edmTf .framer-cpajlz, .framer-edmTf .framer-qw1i71 { --framer-input-background: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); --framer-input-border-radius-bottom-left: 30px; --framer-input-border-radius-bottom-right: 30px; --framer-input-border-radius-top-left: 30px; --framer-input-border-radius-top-right: 30px; --framer-input-focused-border-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 16px 24px 16px 24px; --framer-input-placeholder-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-158v7cd { --framer-input-background: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); --framer-input-border-radius-bottom-left: 30px; --framer-input-border-radius-bottom-right: 30px; --framer-input-border-radius-top-left: 30px; --framer-input-border-radius-top-right: 30px; --framer-input-focused-border-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 24px; --framer-input-placeholder-color: var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, #8a8a8a); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 220px; position: relative; width: 100%; }`,
        `.framer-edmTf .framer-aiv832-container { flex: none; height: 54px; position: relative; width: 100%; }`,
        ...we,
        ...pe,
        ...A,
        ...he,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-edmTf.framer-1s3wd42 { width: 810px; } .framer-edmTf .framer-zyygcv { gap: 80px; }}`,
        `@media (max-width: 809.98px) { .framer-edmTf.framer-1s3wd42 { width: 390px; } .framer-edmTf .framer-3lh4os { flex-direction: column; } .framer-edmTf .framer-1530ba1 { flex: none; padding: 0px 0px 60px 0px; width: 100%; } .framer-edmTf .framer-zyygcv { gap: 60px; } .framer-edmTf .framer-6dtvi4 { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-edmTf .framer-14f98s7, .framer-edmTf .framer-b9ugi1, .framer-edmTf .framer-rfs7d2, .framer-edmTf .framer-1kpsx96, .framer-edmTf .framer-e9tw3d { flex: none; width: 100%; } .framer-edmTf .framer-1suyqgf-container, .framer-edmTf .framer-6v1fpm-container, .framer-edmTf .framer-9b0g86-container { height: 22px; width: 22px; } .framer-edmTf .framer-1egpy7w { flex-direction: column; gap: 32px; }}`,
      ],
      `framer-edmTf`
    )),
    (Q = Z),
    (Z.displayName = `About`),
    (Z.defaultProps = { height: 2793, width: 1200 }),
    h(
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
        ...P,
        ...F,
        ...I,
        ...R,
        ...p(Te),
        ...p(E),
        ...p(j),
        ...p(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJRRZ10Fay`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `2793`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"K5ICaNU9l":{"layout":["fixed","auto"]},"QzPSCntpS":{"layout":["fixed","auto"]}}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=8T3z6fnvW09_DeGIINwRcRG08FRk8K5n7fzKdnByyns.CCx-1Jb4.mjs.map
