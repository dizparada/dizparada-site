import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  L as i,
  M as a,
  N as o,
  P as s,
  R as c,
  a as l,
  c as u,
  g as d,
  h as f,
  i as p,
  j as m,
  k as h,
  l as g,
  m as _,
  n as v,
  o as y,
  r as ee,
  t as b,
  u as x,
  v as te,
  x as ne,
  z as S,
} from "./react.BUXbFMJS.mjs";
import { S as C, a as w, r as re, t as T } from "./motion.CLjJX74m.mjs";
import {
  $ as E,
  B as D,
  C as O,
  Ct as ie,
  D as k,
  Dt as ae,
  H as A,
  J as oe,
  N as j,
  O as M,
  Ot as se,
  P as ce,
  St as le,
  T as N,
  U as P,
  X as ue,
  Y as F,
  Z as I,
  a as L,
  at as de,
  bt as fe,
  c as pe,
  d as me,
  dt as he,
  f as ge,
  ft as _e,
  g as R,
  h as ve,
  ht as z,
  k as ye,
  lt as be,
  m as xe,
  o as Se,
  ot as Ce,
  p as we,
  q as Te,
  rt as Ee,
  s as B,
  st as De,
  tt as Oe,
  ut as ke,
  v as Ae,
  w as je,
  x as V,
  xt as Me,
  y as Ne,
} from "./framer.BQfDiYYl.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./F_pPBFm64.R_TR2zCX.mjs";
import { a as Re, c as ze, o as Be, s as Ve } from "./shared-lib.DjXQ4AZU.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./YqEpde0dB.D0X_SpJn.mjs";
import { n as Ke, t as H } from "./CXVDk4iXl.tTc9sygM.mjs";
import { n as qe, t as Je } from "./EiSctT0o2.DmqrOrly.mjs";
import { n as Ye, t as Xe } from "./NIVshdPum.CYPuXDhP.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./krsRuWvBk.CcHb3Ain.mjs";
import { n as tt, t as nt } from "./GDe4cfswB.DR20MxBb.mjs";
function U(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  W,
  gt,
  _t = e(() => {
    (y(),
      F(),
      T(),
      n(),
      Pe(),
      ze(),
      He(),
      Ke(),
      qe(),
      Ye(),
      (rt = D(Je)),
      (it = D(H)),
      (at = D(Xe)),
      (ot = ie(C.div)),
      (st = [`gqgcIzAQo`, `NV15iBjDw`, `HCOoEWk0C`]),
      (ct = `framer-KhYBa`),
      (lt = {
        gqgcIzAQo: `framer-v-shmkie`,
        HCOoEWk0C: `framer-v-hx3r41`,
        NV15iBjDw: `framer-v-w5aqlr`,
      }),
      (ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dt = ({ value: e, children: n }) => {
        let r = h(w),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(w.Provider, { value: a, children: n });
      }),
      (ft = C.create(o)),
      (pt = { Desktop: `gqgcIzAQo`, Phone: `HCOoEWk0C`, Tablet: `NV15iBjDw` }),
      (mt = ({ height: e, id: t, showCTA: n, width: r, ...i }) => ({
        ...i,
        o4GIKRAZG: n ?? i.o4GIKRAZG ?? !0,
        variant: pt[i.variant] ?? i.variant ?? `gqgcIzAQo`,
      })),
      (ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = le(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: s, setLocale: c } = z(),
            l = De(),
            { style: d, className: f, layoutId: p, variant: m, o4GIKRAZG: h, ..._ } = mt(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ne,
              setGestureState: S,
              setVariant: w,
              variants: T,
            } = Me({
              cycleOrder: st,
              defaultVariant: `gqgcIzAQo`,
              ref: i,
              variant: m,
              variantClassNames: lt,
            }),
            E = ht(e, T),
            D = j(ct, Re, Le, Ge),
            O = () => v !== `HCOoEWk0C`;
          return (
            fe(),
            u(re, {
              id: p ?? a,
              children: u(ft, {
                animate: T,
                initial: !1,
                children: u(dt, {
                  value: ut,
                  children: u(C.footer, {
                    ..._,
                    ...b,
                    className: j(D, `framer-shmkie`, f, y),
                    "data-framer-name": `Desktop`,
                    layoutDependency: E,
                    layoutId: `gqgcIzAQo`,
                    ref: i,
                    style: { ...d },
                    ...U(
                      {
                        HCOoEWk0C: { "data-framer-name": `Phone` },
                        NV15iBjDw: { "data-framer-name": `Tablet` },
                      },
                      v,
                      x
                    ),
                    children: u(C.div, {
                      className: `framer-cqrinw`,
                      "data-framer-name": `Container`,
                      layoutDependency: E,
                      layoutId: `JevBBviCw`,
                      children: g(ot, {
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 100,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onInView`,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-l31go3`,
                        "data-framer-name": `Content`,
                        layoutDependency: E,
                        layoutId: `EF4yOHZrC`,
                        children: [
                          g(C.div, {
                            className: `framer-17hd1gu`,
                            "data-framer-name": `About`,
                            layoutDependency: E,
                            layoutId: `M_zY48Hup`,
                            children: [
                              u(we, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: P(
                                    (l?.y || 0) +
                                      (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 1333,
                                  pixelWidth: 2e3,
                                  sizes: `65px`,
                                  src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                  srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                },
                                className: `framer-z7r863`,
                                layoutDependency: E,
                                layoutId: `ozzZ7KuVc`,
                                style: {
                                  borderBottomLeftRadius: 50,
                                  borderBottomRightRadius: 50,
                                  borderTopLeftRadius: 50,
                                  borderTopRightRadius: 50,
                                },
                                ...U(
                                  {
                                    HCOoEWk0C: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: P(
                                          (l?.y || 0) +
                                            (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 1333,
                                        pixelWidth: 2e3,
                                        sizes: `65px`,
                                        src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                        srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                      },
                                    },
                                  },
                                  v,
                                  x
                                ),
                              }),
                              u(N, {
                                __fromCanvasComponent: !0,
                                children: u(o, {
                                  children: g(C.p, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    children: [
                                      u(C.span, {
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255)))`,
                                        },
                                        children: `I’m Ana Parada,`,
                                      }),
                                      ` a Product Designer with a dedicated work ethic.`,
                                    ],
                                  }),
                                }),
                                className: `framer-zv3njw`,
                                fonts: [`Inter`],
                                layoutDependency: E,
                                layoutId: `zYvPKF5fe`,
                                style: {
                                  "--extracted-1w3ko1f": `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          h &&
                            g(C.div, {
                              className: `framer-1fa3210`,
                              "data-framer-name": `CTA`,
                              layoutDependency: E,
                              layoutId: `gmaXmd1Ro`,
                              children: [
                                u(N, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(C.p, {
                                      className: `framer-styles-preset-1tmv4lr`,
                                      "data-styles-preset": `F_pPBFm64`,
                                      children: `Let's Work Together!`,
                                    }),
                                  }),
                                  className: `framer-j3aqkl`,
                                  fonts: [`Inter`],
                                  layoutDependency: E,
                                  layoutId: `F5kXc4FIb`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                O() &&
                                  u(C.div, {
                                    className: `framer-fr6oa6`,
                                    "data-framer-name": `Line`,
                                    layoutDependency: E,
                                    layoutId: `iZVl54Fm0`,
                                    style: {
                                      backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                    },
                                  }),
                                u(je, {
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
                                    u(L, {
                                      height: 54,
                                      y:
                                        (l?.y || 0) +
                                        (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                        0 +
                                        0 +
                                        296 +
                                        9,
                                      ...U(
                                        {
                                          HCOoEWk0C: {
                                            y:
                                              (l?.y || 0) +
                                              (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                              0 +
                                              0 +
                                              288 +
                                              0 +
                                              104,
                                          },
                                        },
                                        v,
                                        x
                                      ),
                                      children: u(k, {
                                        className: `framer-1lb2w9p-container`,
                                        layoutDependency: E,
                                        layoutId: `sWKmXOaJi-container`,
                                        nodeId: `sWKmXOaJi`,
                                        rendersWithMotion: !0,
                                        scopeId: `mmTmWijFW`,
                                        children: u(Je, {
                                          height: `100%`,
                                          id: `sWKmXOaJi`,
                                          layoutId: `sWKmXOaJi`,
                                          Sg1kz8pun: `Let's Talk`,
                                          t_K2Y1BU0: `ArrowRight`,
                                          variant: `nzlXRtqUW`,
                                          width: `100%`,
                                          xLMsDJR23: e[0],
                                          XzlCbXnL2: !0,
                                          ...U(
                                            {
                                              HCOoEWk0C: { xLMsDJR23: e[2] },
                                              NV15iBjDw: { xLMsDJR23: e[1] },
                                            },
                                            v,
                                            x
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          g(C.div, {
                            className: `framer-6r91ud`,
                            "data-framer-name": `Contact info`,
                            layoutDependency: E,
                            layoutId: `yjbkAhOuh`,
                            children: [
                              g(C.div, {
                                className: `framer-7lymim`,
                                "data-framer-name": `Socials`,
                                layoutDependency: E,
                                layoutId: `EcW17iMhe`,
                                children: [
                                  u(L, {
                                    height: 24,
                                    width: `24px`,
                                    y:
                                      (l?.y || 0) +
                                      (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                      0 +
                                      0 +
                                      296 +
                                      1.5 +
                                      0,
                                    ...U(
                                      {
                                        HCOoEWk0C: {
                                          y:
                                            (l?.y || 0) +
                                            (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                            0 +
                                            0 +
                                            288 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      v,
                                      x
                                    ),
                                    children: u(k, {
                                      className: `framer-2m5jep-container`,
                                      layoutDependency: E,
                                      layoutId: `P7wW_yEsf-container`,
                                      nodeId: `P7wW_yEsf`,
                                      rendersWithMotion: !0,
                                      scopeId: `mmTmWijFW`,
                                      children: u(H, {
                                        AIGpMiTbN: `XLogo`,
                                        height: `100%`,
                                        id: `P7wW_yEsf`,
                                        layoutId: `P7wW_yEsf`,
                                        nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                        xLMsDJR23: `https://x.com/Dizparada`,
                                      }),
                                    }),
                                  }),
                                  u(C.div, {
                                    className: `framer-o7ovs3`,
                                    "data-framer-name": `Dot`,
                                    layoutDependency: E,
                                    layoutId: `QoMji40UW`,
                                    style: {
                                      backgroundColor: `rgb(255, 71, 142)`,
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                  }),
                                  u(L, {
                                    height: 24,
                                    width: `24px`,
                                    y:
                                      (l?.y || 0) +
                                      (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                      0 +
                                      0 +
                                      296 +
                                      1.5 +
                                      0,
                                    ...U(
                                      {
                                        HCOoEWk0C: {
                                          y:
                                            (l?.y || 0) +
                                            (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                            0 +
                                            0 +
                                            288 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      v,
                                      x
                                    ),
                                    children: u(k, {
                                      className: `framer-1azrxak-container`,
                                      layoutDependency: E,
                                      layoutId: `ICRPrpipi-container`,
                                      nodeId: `ICRPrpipi`,
                                      rendersWithMotion: !0,
                                      scopeId: `mmTmWijFW`,
                                      children: u(H, {
                                        AIGpMiTbN: `InstagramLogo`,
                                        height: `100%`,
                                        id: `ICRPrpipi`,
                                        layoutId: `ICRPrpipi`,
                                        nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                        xLMsDJR23: `https://www.instagram.com/dizparada`,
                                      }),
                                    }),
                                  }),
                                  u(C.div, {
                                    className: `framer-oml030`,
                                    "data-framer-name": `Dot`,
                                    layoutDependency: E,
                                    layoutId: `hSReQC4Mu`,
                                    style: {
                                      backgroundColor: `rgb(255, 71, 142)`,
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                  }),
                                  u(L, {
                                    height: 24,
                                    width: `24px`,
                                    y:
                                      (l?.y || 0) +
                                      (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                      0 +
                                      0 +
                                      296 +
                                      1.5 +
                                      0,
                                    ...U(
                                      {
                                        HCOoEWk0C: {
                                          y:
                                            (l?.y || 0) +
                                            (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                            0 +
                                            0 +
                                            288 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      v,
                                      x
                                    ),
                                    children: u(k, {
                                      className: `framer-119vwu0-container`,
                                      layoutDependency: E,
                                      layoutId: `QXryfUpgp-container`,
                                      nodeId: `QXryfUpgp`,
                                      rendersWithMotion: !0,
                                      scopeId: `mmTmWijFW`,
                                      children: u(H, {
                                        AIGpMiTbN: `LinkedinLogo`,
                                        height: `100%`,
                                        id: `QXryfUpgp`,
                                        layoutId: `QXryfUpgp`,
                                        nD6_0qOiV: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                        xLMsDJR23: `https://www.linkedin.com/in/ancparada`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              u(C.div, {
                                className: `framer-frh9hz`,
                                "data-framer-name": `Line`,
                                layoutDependency: E,
                                layoutId: `b2kzVnxgx`,
                                style: {
                                  backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                },
                              }),
                              u(C.div, {
                                className: `framer-1hgy2u5`,
                                "data-framer-name": `Line`,
                                layoutDependency: E,
                                layoutId: `c_qhnjJR5`,
                                style: {
                                  backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                },
                              }),
                              u(L, {
                                height: 27,
                                y:
                                  (l?.y || 0) +
                                  (100 + ((l?.height || 608) - 120 - 596) / 2) +
                                  0 +
                                  0 +
                                  296 +
                                  0,
                                ...U(
                                  {
                                    HCOoEWk0C: {
                                      y:
                                        (l?.y || 0) +
                                        (100 + ((l?.height || 200) - 120 - 816) / 2) +
                                        0 +
                                        0 +
                                        288 +
                                        0 +
                                        74,
                                    },
                                  },
                                  v,
                                  x
                                ),
                                children: u(k, {
                                  className: `framer-v9nte1-container`,
                                  layoutDependency: E,
                                  layoutId: `SDV1yj8Z2-container`,
                                  nodeId: `SDV1yj8Z2`,
                                  rendersWithMotion: !0,
                                  scopeId: `mmTmWijFW`,
                                  children: u(Xe, {
                                    fRGF_dpe1: `Chat`,
                                    height: `100%`,
                                    id: `SDV1yj8Z2`,
                                    layoutId: `SDV1yj8Z2`,
                                    Nve9M28HB: `mailto:hello@david.design`,
                                    sHHzugcQV: `dizparada@gmail.com`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          u(C.div, {
                            className: `framer-1wmfamt`,
                            "data-border": !0,
                            "data-framer-name": `Copyright`,
                            layoutDependency: E,
                            layoutId: `MjoAREJk5`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                            },
                            children: u(N, {
                              __fromCanvasComponent: !0,
                              children: u(o, {
                                children: u(C.p, {
                                  className: `framer-styles-preset-d9dxvl`,
                                  "data-styles-preset": `YqEpde0dB`,
                                  children: `© Copyright 2025`,
                                }),
                              }),
                              className: `framer-1ac56mt`,
                              fonts: [`Inter`],
                              layoutDependency: E,
                              layoutId: `GA199Egrj`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...U(
                                {
                                  HCOoEWk0C: {
                                    children: u(o, {
                                      children: u(C.p, {
                                        className: `framer-styles-preset-d9dxvl`,
                                        "data-styles-preset": `YqEpde0dB`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `© Copyright 2025`,
                                      }),
                                    }),
                                  },
                                },
                                v,
                                x
                              ),
                            }),
                          }),
                        ],
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
          `.framer-KhYBa.framer-bsi05b, .framer-KhYBa .framer-bsi05b { display: block; }`,
          `.framer-KhYBa.framer-shmkie { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 20px 0px; position: relative; width: 1120px; }`,
          `.framer-KhYBa .framer-cqrinw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-KhYBa .framer-l31go3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-KhYBa .framer-17hd1gu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KhYBa .framer-z7r863 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 65px); overflow: hidden; position: relative; width: 65px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KhYBa .framer-zv3njw { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
          `.framer-KhYBa .framer-1fa3210 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 8px 0px; position: relative; width: 100%; }`,
          `.framer-KhYBa .framer-j3aqkl { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KhYBa .framer-fr6oa6, .framer-KhYBa .framer-frh9hz, .framer-KhYBa .framer-1hgy2u5 { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
          `.framer-KhYBa .framer-1lb2w9p-container, .framer-KhYBa .framer-v9nte1-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KhYBa .framer-6r91ud { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-KhYBa .framer-7lymim { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-KhYBa .framer-2m5jep-container, .framer-KhYBa .framer-1azrxak-container, .framer-KhYBa .framer-119vwu0-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-KhYBa .framer-o7ovs3, .framer-KhYBa .framer-oml030 { flex: none; height: 3px; overflow: hidden; position: relative; width: 3px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KhYBa .framer-1wmfamt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-KhYBa .framer-1ac56mt { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-KhYBa.framer-v-w5aqlr.framer-shmkie { width: 810px; }`,
          `.framer-KhYBa.framer-v-hx3r41.framer-shmkie { width: 360px; }`,
          `.framer-KhYBa.framer-v-hx3r41 .framer-l31go3 { gap: 72px; }`,
          `.framer-KhYBa.framer-v-hx3r41 .framer-1fa3210 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; }`,
          `.framer-KhYBa.framer-v-hx3r41 .framer-6r91ud, .framer-KhYBa.framer-v-hx3r41 .framer-1wmfamt { align-content: flex-start; align-items: flex-start; flex-direction: column; }`,
          `.framer-KhYBa.framer-v-hx3r41 .framer-frh9hz, .framer-KhYBa.framer-v-hx3r41 .framer-1hgy2u5 { flex: none; width: 100%; }`,
          `.framer-KhYBa.framer-v-hx3r41 .framer-1ac56mt { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Be,
          ...Fe,
          ...Ue,
          `.framer-KhYBa[data-border="true"]::after, .framer-KhYBa [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-KhYBa`
      )),
      (gt = W),
      (W.displayName = `Footer`),
      (W.defaultProps = { height: 608, width: 1120 }),
      ye(W, {
        variant: {
          options: [`gqgcIzAQo`, `NV15iBjDw`, `HCOoEWk0C`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: B.Enum,
        },
        o4GIKRAZG: { defaultValue: !0, title: `Show CTA`, type: B.Boolean },
      }),
      M(
        W,
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
          ...rt,
          ...it,
          ...at,
          ...A(Ve),
          ...A(Ie),
          ...A(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  vt,
  yt,
  bt,
  xt = e(() => {
    (F(),
      ce.loadFonts([`Inter-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-MediumItalic`]),
      (vt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ksvR4VsLksjpSwnC2fPgHRNMw.woff2`,
              weight: `500`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (yt = [
        `.framer-49XHt .framer-styles-preset-1720a97:not(.rich-text-wrapper), .framer-49XHt .framer-styles-preset-1720a97.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.01em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: inherit; }`,
      ]),
      (bt = `framer-49XHt`));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  K,
  Mt,
  Nt = e(() => {
    (y(),
      F(),
      T(),
      n(),
      xt(),
      Ze(),
      tt(),
      (St = D(nt)),
      (Ct = [`K5z5u7a7_`, `hlRrO1Dnd`, `q8lIlmqAS`]),
      (wt = `framer-6dPBq`),
      (Tt = {
        hlRrO1Dnd: `framer-v-1j2dbyd`,
        K5z5u7a7_: `framer-v-14qbt53`,
        q8lIlmqAS: `framer-v-1iflv33`,
      }),
      (Et = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Dt = ({ value: e, children: n }) => {
        let r = h(w),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(w.Provider, { value: a, children: n });
      }),
      (Ot = C.create(o)),
      (kt = { "Desktop/Tablet": `K5z5u7a7_`, "Phone/Open": `q8lIlmqAS`, Phone: `hlRrO1Dnd` }),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kt[r.variant] ?? r.variant ?? `K5z5u7a7_`,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = le(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = te(),
            { activeLocale: s, setLocale: c } = z(),
            l = De(),
            { style: d, className: f, layoutId: p, variant: m, ...h } = At(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ne,
              setVariant: S,
              variants: w,
            } = Me({
              cycleOrder: Ct,
              defaultVariant: `K5z5u7a7_`,
              ref: i,
              variant: m,
              variantClassNames: Tt,
            }),
            T = jt(e, w),
            { activeVariantCallback: E, delay: D } = Ce(_),
            O = E(async (...e) => {
              S(`hlRrO1Dnd`);
            }),
            ie = E(async (...e) => {
              S(`q8lIlmqAS`);
            }),
            ae = E(async (...e) => {
              S(`hlRrO1Dnd`);
            }),
            A = j(wt, bt, et),
            oe = () => !![`hlRrO1Dnd`, `q8lIlmqAS`].includes(_),
            M = () => _ !== `hlRrO1Dnd`;
          return (
            fe(),
            u(re, {
              id: p ?? a,
              children: u(Ot, {
                animate: w,
                initial: !1,
                children: u(Dt, {
                  value: Et,
                  children: u(C.header, {
                    ...h,
                    ...ee,
                    className: j(A, `framer-14qbt53`, f, v),
                    "data-framer-name": `Desktop/Tablet`,
                    layoutDependency: T,
                    layoutId: `K5z5u7a7_`,
                    ref: i,
                    style: { ...d },
                    ...G(
                      {
                        hlRrO1Dnd: { "data-framer-name": `Phone` },
                        q8lIlmqAS: { "data-framer-name": `Phone/Open` },
                      },
                      _,
                      b
                    ),
                    children: g(C.nav, {
                      className: `framer-ogvusc`,
                      "data-framer-name": `Nav`,
                      layoutDependency: T,
                      layoutId: `Mlad5qlrh`,
                      style: { backgroundColor: `rgb(26, 26, 26)` },
                      children: [
                        g(C.div, {
                          className: `framer-15k8bct`,
                          "data-framer-name": `Top`,
                          layoutDependency: T,
                          layoutId: `X1SkQ4Awi`,
                          children: [
                            u(R, {
                              href: { webPageId: `augiA20Il` },
                              motionChild: !0,
                              nodeId: `ZTcZxJtko`,
                              openInNewTab: !1,
                              scopeId: `noGwRtSlj`,
                              children: u(C.a, {
                                "aria-label": `Logo/home button`,
                                className: `framer-17vhd21 framer-dss481`,
                                "data-framer-name": `Logo`,
                                layoutDependency: T,
                                layoutId: `ZTcZxJtko`,
                                style: {
                                  borderBottomLeftRadius: 30,
                                  borderBottomRightRadius: 30,
                                  borderTopLeftRadius: 30,
                                  borderTopRightRadius: 30,
                                },
                                ...G({ q8lIlmqAS: { "data-highlight": !0, onTap: O } }, _, b),
                                children: u(we, {
                                  background: {
                                    alt: `Dizparada Logo`,
                                    fit: `fill`,
                                    intrinsicHeight: 80,
                                    intrinsicWidth: 613,
                                    loading: P(
                                      (l?.y || 0) +
                                        (0 + ((l?.height || 82) - 0 - 82) / 2) +
                                        16 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 146,
                                    pixelWidth: 110,
                                    sizes: `38px`,
                                    src: `../../assets/images/Uu24M4FW3uJfL5hObJCibQ6tJaM.png`,
                                  },
                                  className: `framer-u1m7s`,
                                  "data-framer-name": `Logo`,
                                  layoutDependency: T,
                                  layoutId: `woWpjjXUz`,
                                  ...G(
                                    {
                                      hlRrO1Dnd: {
                                        background: {
                                          alt: `Dizparada Logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 80,
                                          intrinsicWidth: 613,
                                          loading: P(
                                            (l?.y || 0) +
                                              0 +
                                              ((l?.height || 200) - 0 - 66 + 0 + 0) +
                                              8 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 146,
                                          pixelWidth: 110,
                                          sizes: `38px`,
                                          src: `../../assets/images/Uu24M4FW3uJfL5hObJCibQ6tJaM.png`,
                                        },
                                      },
                                      q8lIlmqAS: {
                                        background: {
                                          alt: `Dizparada Logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 80,
                                          intrinsicWidth: 613,
                                          loading: P((l?.y || 0) + 0 + 0 + 8 + 0 + 0 + 0),
                                          pixelHeight: 146,
                                          pixelWidth: 110,
                                          sizes: `38px`,
                                          src: `../../assets/images/Uu24M4FW3uJfL5hObJCibQ6tJaM.png`,
                                        },
                                      },
                                    },
                                    _,
                                    b
                                  ),
                                }),
                              }),
                            }),
                            oe() &&
                              g(C.div, {
                                className: `framer-xz6x5t`,
                                "data-framer-name": `Icon`,
                                layoutDependency: T,
                                layoutId: `H2CW7hVM1`,
                                ...G(
                                  {
                                    hlRrO1Dnd: { "data-highlight": !0, onTap: ie },
                                    q8lIlmqAS: { "data-highlight": !0, onTap: O },
                                  },
                                  _,
                                  b
                                ),
                                children: [
                                  u(C.div, {
                                    className: `framer-fkt88l`,
                                    "data-framer-name": `Bottom`,
                                    layoutDependency: T,
                                    layoutId: `zP2ygBLeL`,
                                    style: {
                                      backgroundColor: `rgb(153, 153, 153)`,
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                      rotate: 0,
                                    },
                                    variants: {
                                      hlRrO1Dnd: {
                                        backgroundColor: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                      },
                                      q8lIlmqAS: {
                                        backgroundColor: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        rotate: -45,
                                      },
                                    },
                                  }),
                                  u(C.div, {
                                    className: `framer-1v1cq1b`,
                                    "data-framer-name": `Top`,
                                    layoutDependency: T,
                                    layoutId: `YrqUjEFUu`,
                                    style: {
                                      backgroundColor: `rgb(153, 153, 153)`,
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                      rotate: 0,
                                    },
                                    variants: {
                                      hlRrO1Dnd: {
                                        backgroundColor: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                      },
                                      q8lIlmqAS: {
                                        backgroundColor: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                        rotate: 45,
                                      },
                                    },
                                  }),
                                ],
                              }),
                          ],
                        }),
                        M() &&
                          g(C.div, {
                            className: `framer-qbswoc`,
                            "data-framer-name": `Links`,
                            layoutDependency: T,
                            layoutId: `akF5TZvfK`,
                            children: [
                              u(N, {
                                __fromCanvasComponent: !0,
                                children: u(o, {
                                  children: u(C.p, {
                                    className: `framer-styles-preset-1720a97`,
                                    "data-styles-preset": `cXfJIwga0`,
                                    children: u(R, {
                                      href: { webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `itn3xBxVF`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `noGwRtSlj`,
                                      smoothScroll: !1,
                                      children: u(C.a, {
                                        className: `framer-styles-preset-1d6nlyh`,
                                        "data-styles-preset": `krsRuWvBk`,
                                        children: `Home`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-65m4pe`,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `itn3xBxVF`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...G(
                                  {
                                    q8lIlmqAS: {
                                      "data-highlight": !0,
                                      children: u(o, {
                                        children: u(C.p, {
                                          className: `framer-styles-preset-1720a97`,
                                          "data-styles-preset": `cXfJIwga0`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: u(R, {
                                            href: { webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `itn3xBxVF`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `noGwRtSlj`,
                                            smoothScroll: !1,
                                            children: u(C.a, {
                                              className: `framer-styles-preset-1d6nlyh`,
                                              "data-styles-preset": `krsRuWvBk`,
                                              children: `Home`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: O,
                                    },
                                  },
                                  _,
                                  b
                                ),
                              }),
                              u(N, {
                                __fromCanvasComponent: !0,
                                children: u(o, {
                                  children: u(C.p, {
                                    className: `framer-styles-preset-1720a97`,
                                    "data-styles-preset": `cXfJIwga0`,
                                    children: u(R, {
                                      href: { webPageId: `urTt7Hepx` },
                                      motionChild: !0,
                                      nodeId: `KgEchxVo1`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `noGwRtSlj`,
                                      smoothScroll: !1,
                                      children: u(C.a, {
                                        className: `framer-styles-preset-1d6nlyh`,
                                        "data-styles-preset": `krsRuWvBk`,
                                        children: `About`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-79y0ny`,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `KgEchxVo1`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              u(N, {
                                __fromCanvasComponent: !0,
                                children: u(o, {
                                  children: u(C.p, {
                                    className: `framer-styles-preset-1720a97`,
                                    "data-styles-preset": `cXfJIwga0`,
                                    children: u(R, {
                                      href: { webPageId: `G6F1BEvP2` },
                                      motionChild: !0,
                                      nodeId: `Mh6rTz9kA`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `noGwRtSlj`,
                                      smoothScroll: !1,
                                      children: u(C.a, {
                                        className: `framer-styles-preset-1d6nlyh`,
                                        "data-styles-preset": `krsRuWvBk`,
                                        children: `Blog`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-qrsdm5`,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `Mh6rTz9kA`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...G(
                                  {
                                    q8lIlmqAS: {
                                      "data-highlight": !0,
                                      children: u(o, {
                                        children: u(C.p, {
                                          className: `framer-styles-preset-1720a97`,
                                          "data-styles-preset": `cXfJIwga0`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: u(R, {
                                            href: { webPageId: `G6F1BEvP2` },
                                            motionChild: !0,
                                            nodeId: `Mh6rTz9kA`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `noGwRtSlj`,
                                            smoothScroll: !1,
                                            children: u(C.a, {
                                              className: `framer-styles-preset-1d6nlyh`,
                                              "data-styles-preset": `krsRuWvBk`,
                                              children: `Blog`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: O,
                                    },
                                  },
                                  _,
                                  b
                                ),
                              }),
                              u(je, {
                                links: [
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
                                  u(L, {
                                    height: 41,
                                    y:
                                      (l?.y || 0) +
                                      (0 + ((l?.height || 82) - 0 - 82) / 2) +
                                      20.5 +
                                      0,
                                    ...G(
                                      {
                                        q8lIlmqAS: { y: (l?.y || 0) + 0 + 0 + 8 + 50 + 32 + 280.8 },
                                      },
                                      _,
                                      b
                                    ),
                                    children: u(k, {
                                      className: `framer-1tllwi5-container`,
                                      layoutDependency: T,
                                      layoutId: `FAvDbfOzj-container`,
                                      nodeId: `FAvDbfOzj`,
                                      rendersWithMotion: !0,
                                      scopeId: `noGwRtSlj`,
                                      children: u(nt, {
                                        height: `100%`,
                                        id: `FAvDbfOzj`,
                                        layoutId: `FAvDbfOzj`,
                                        ncD0ncSLi: !1,
                                        Sg1kz8pun: `Contact me`,
                                        V8_5xRbqy: `ArrowRight`,
                                        width: `100%`,
                                        xLMsDJR23: e[0],
                                        ...G(
                                          { q8lIlmqAS: { xLMsDJR23: e[1], XTZcZ7phx: ae } },
                                          _,
                                          b
                                        ),
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
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6dPBq.framer-dss481, .framer-6dPBq .framer-dss481 { display: block; }`,
          `.framer-6dPBq.framer-14qbt53 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-6dPBq .framer-ogvusc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1520px; overflow: visible; padding: 16px 40px 16px 40px; position: relative; width: 1px; }`,
          `.framer-6dPBq .framer-15k8bct { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-6dPBq .framer-17vhd21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-6dPBq .framer-u1m7s { flex: none; height: 50px; overflow: visible; position: relative; width: 38px; }`,
          `.framer-6dPBq .framer-xz6x5t { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }`,
          `.framer-6dPBq .framer-fkt88l { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6dPBq .framer-1v1cq1b { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6dPBq .framer-qbswoc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-6dPBq .framer-65m4pe, .framer-6dPBq .framer-79y0ny, .framer-6dPBq .framer-qrsdm5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-6dPBq .framer-1tllwi5-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-6dPBq.framer-v-1j2dbyd.framer-14qbt53 { flex-direction: column; gap: 0px; justify-content: flex-end; width: 390px; }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-ogvusc { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 0px; padding: 8px 10px 8px 10px; width: 100%; }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-15k8bct, .framer-6dPBq.framer-v-1iflv33 .framer-15k8bct { gap: unset; justify-content: space-between; order: 0; padding: 0px 0px 0px 8px; width: 100%; }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-17vhd21 { order: 0; }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-xz6x5t, .framer-6dPBq.framer-v-1iflv33 .framer-xz6x5t { cursor: pointer; height: 44px; order: 1; width: 44px; }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-fkt88l { height: 1px; top: calc(61.36363636363639% - 1px / 2); }`,
          `.framer-6dPBq.framer-v-1j2dbyd .framer-1v1cq1b { height: 1px; top: calc(38.636363636363654% - 1px / 2); }`,
          `.framer-6dPBq.framer-v-1iflv33.framer-14qbt53 { flex-direction: column; gap: 0px; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); width: 390px; }`,
          `.framer-6dPBq.framer-v-1iflv33 .framer-ogvusc { flex: none; flex-direction: column; gap: 0px; order: 0; padding: 8px 10px 0px 10px; width: 100%; }`,
          `.framer-6dPBq.framer-v-1iflv33 .framer-17vhd21 { cursor: pointer; order: 0; }`,
          `.framer-6dPBq.framer-v-1iflv33 .framer-fkt88l, .framer-6dPBq.framer-v-1iflv33 .framer-1v1cq1b { height: 1px; top: calc(50.00000000000002% - 1px / 2); }`,
          `.framer-6dPBq.framer-v-1iflv33 .framer-qbswoc { flex: none; flex-direction: column; gap: 32px; justify-content: flex-start; order: 1; padding: 32px 20px 32px 20px; width: 100%; }`,
          `.framer-6dPBq.framer-v-1iflv33 .framer-65m4pe, .framer-6dPBq.framer-v-1iflv33 .framer-qrsdm5 { cursor: pointer; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...yt,
          ...Qe,
        ],
        `framer-6dPBq`
      )),
      (Mt = K),
      (K.displayName = `Navigation`),
      (K.defaultProps = { height: 82, width: 1200 }),
      ye(K, {
        variant: {
          options: [`K5z5u7a7_`, `hlRrO1Dnd`, `q8lIlmqAS`],
          optionTitles: [`Desktop/Tablet`, `Phone`, `Phone/Open`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      M(
        K,
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
          ...St,
          ...A(vt),
          ...A($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  q,
  zt,
  Bt,
  J,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  Y,
  qt,
  Jt = e(() => {
    (y(),
      F(),
      T(),
      n(),
      _t(),
      Nt(),
      (Pt = D(Mt)),
      (Ft = D(gt)),
      (It = {
        JUVcaABPA: `(min-width: 1200px)`,
        ue7qNCYDA: `(max-width: 809.98px)`,
        xsQnrBhSn: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Lt = `framer-OgZqR`),
      (Rt = {
        JUVcaABPA: `framer-v-1650flh`,
        ue7qNCYDA: `framer-v-13481wm`,
        xsQnrBhSn: `framer-v-zezwym`,
      }),
      (q = {
        ue7qNCYDA: [
          `.framer-OgZqR.framer-1650flh { padding: 100px 16px 0px 16px; }`,
          `.framer-OgZqR .framer-uf9400-container { position: var(--framer-canvas-fixed-position, fixed); }`,
        ],
        xsQnrBhSn: [`.framer-OgZqR.framer-1650flh { padding: 120px 30px 0px 30px; }`],
      }),
      (zt = Object.keys(q)),
      (Bt = { ue7qNCYDA: `.framer-13481wm-override`, xsQnrBhSn: `.framer-zezwym-override` }),
      (J = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-OgZqR.framer-1b4wacr, .framer-OgZqR .framer-1b4wacr { display: block; }`,
        `.framer-OgZqR.framer-1650flh { --selection-background-color: var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, #82ff1c) /* {"name":"Accent"} */; --selection-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0d0d0d) /* {"name":"Black"} */; align-content: center; align-items: center; background-color: #1a1a1a; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 160px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-OgZqR .framer-uf9400-container { flex: none; height: auto; left: 0px; order: -1000; position: absolute; right: 0px; top: 0px; z-index: 10; }`,
        `.framer-OgZqR .framer-1pbkl2j { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-OgZqR .framer-qh906k-container { flex: none; height: auto; max-width: 1440px; order: 1002; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        `.framer-OgZqR[data-selection="true"] * ::selection, .framer-OgZqR [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
      ]),
      (Vt = {
        JUVcaABPA: `(min-width: 1200px)`,
        ue7qNCYDA: `(max-width: 809.98px)`,
        xsQnrBhSn: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Ht = ({ value: e }) =>
        _e()
          ? null
          : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Ut = { Desktop: `JUVcaABPA`, Phone: `ue7qNCYDA`, Tablet: `xsQnrBhSn` }),
      (Wt = ({ height: e, id: t, showCTAInFooter: n, width: r, ...i }) => ({
        ...i,
        GwOJm_NIK: n ?? i.GwOJm_NIK ?? !0,
        variant: Ut[i.variant] ?? i.variant ?? `JUVcaABPA`,
      })),
      (Gt = f(function (e, t) {
        let n = r(null),
          i = t ?? n,
          a = te(),
          { activeLocale: o, setLocale: s } = z(),
          {
            style: c,
            className: l,
            layoutId: d,
            variant: f,
            GwOJm_NIK: p,
            children: m,
            ...h
          } = Wt(e),
          [_, v] = he(f, It, !1),
          y = j(Lt);
        return (
          ke({}),
          u(me.Provider, {
            value: { isLayoutTemplate: !0, primaryVariantId: `JUVcaABPA`, variantClassNames: Rt },
            children: g(re, {
              id: d ?? a,
              children: [
                u(Ht, { value: `:root body { background: rgb(26, 26, 26); }` }),
                g(C.div, {
                  ...h,
                  className: j(y, `framer-1650flh`, l),
                  "data-layout-template": !0,
                  "data-selection": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    u(L, {
                      height: 82,
                      width: `100vw`,
                      y: 0,
                      children: u(V, {
                        breakpoint: _,
                        overrides: { ue7qNCYDA: { layoutScroll: !0 } },
                        children: u(Se, {
                          className: `framer-uf9400-container`,
                          nodeId: `yYoJ22wH6`,
                          scopeId: `MG0dpgeJP`,
                          children: u(V, {
                            breakpoint: _,
                            overrides: { ue7qNCYDA: { variant: `hlRrO1Dnd` } },
                            children: u(Mt, {
                              height: `100%`,
                              id: `yYoJ22wH6`,
                              layoutId: `yYoJ22wH6`,
                              style: { width: `100%` },
                              variant: `K5z5u7a7_`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    m,
                    u(`div`, { className: `framer-1pbkl2j` }),
                    u(V, {
                      breakpoint: _,
                      overrides: {
                        ue7qNCYDA: { width: `min(100vw - 32px, 1440px)`, y: 1100 },
                        xsQnrBhSn: { width: `min(100vw - 60px, 1440px)`, y: 1120 },
                      },
                      children: u(L, {
                        height: 608,
                        width: `min(100vw - 80px, 1440px)`,
                        y: 1160,
                        children: u(Se, {
                          className: `framer-qh906k-container`,
                          nodeId: `QRBDI9VBs`,
                          scopeId: `MG0dpgeJP`,
                          children: u(V, {
                            breakpoint: _,
                            overrides: {
                              ue7qNCYDA: { variant: `HCOoEWk0C` },
                              xsQnrBhSn: { variant: `NV15iBjDw` },
                            },
                            children: u(gt, {
                              height: `100%`,
                              id: `QRBDI9VBs`,
                              layoutId: `QRBDI9VBs`,
                              o4GIKRAZG: p,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: `gqgcIzAQo`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Kt = (e) =>
        e === O.canvas || e === O.export
          ? [
              ...J,
              ...zt.flatMap((e) => {
                let t = Bt[e];
                return q[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...J, ...zt.map((e) => `@media ${Vt[e]} { ${q[e].join(` `)} }`)]),
      (Y = le(Gt, Kt, `framer-OgZqR`)),
      (qt = Y),
      (Y.displayName = `Main (Nav + Footer)`),
      (Y.defaultProps = { height: 1e3, width: 1200 }),
      ye(Y, { GwOJm_NIK: { defaultValue: !0, title: `Show CTA in Footer`, type: B.Boolean } }),
      M(Y, [{ explicitInter: !0, fonts: [] }, ...Pt, ...Ft], { supportsExplicitInterCodegen: !0 }));
  });
function Yt({ webPageId: e, children: t, style: n, ...r }) {
  let i = { GwOJm_NIK: !0 },
    a =
      {
        AALeOQBWx: i,
        augiA20Il: i,
        eenHqF5o7: i,
        et1aPrJnV: i,
        G6F1BEvP2: i,
        JRRZ10Fay: { ...i, GwOJm_NIK: !1 },
        rbZGh3QEk: i,
        urTt7Hepx: i,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `AALeOQBWx`:
    case `urTt7Hepx`:
    case `JRRZ10Fay`:
    case `rbZGh3QEk`:
    case `G6F1BEvP2`:
    case `et1aPrJnV`:
    case `eenHqF5o7`:
      return x(qt, { ...a, key: `MainNavFooter`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Xt(e) {
  switch (e) {
    case `augiA20Il`:
    case `AALeOQBWx`:
    case `urTt7Hepx`:
    case `JRRZ10Fay`:
    case `rbZGh3QEk`:
    case `G6F1BEvP2`:
    case `et1aPrJnV`:
    case `eenHqF5o7`:
      return [
        { hash: `1650flh`, mediaQuery: `(min-width: 1200px)` },
        { hash: `zezwym`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `13481wm`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function Zt({ routeId: e, pathVariables: t, localeId: n, collectionItemId: i }) {
  let c = X[e].page.preload(),
    l = x(Ae, {
      children: x(ge, {
        children: x(ve, {
          children: x(Ne, {
            isWebsite: !0,
            environment: `site`,
            routeId: e,
            pathVariables: t,
            routes: X,
            collectionUtils: Q,
            framerSiteId: en,
            notFoundPage: I(
              () => import("./C6dglYCO0RbKxOBwBqqmr6EXogwAe9YjQVVCRu3MKTk.rOD7BHFd.mjs")
            ),
            isReducedMotion: void 0,
            localeId: n,
            locales: Z,
            preserveQueryParams: !0,
            siteCanonicalURL: `https://dizparada.com`,
            EditorBar:
              S === void 0
                ? void 0
                : (() => {
                    if (tn) {
                      console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                      return;
                    }
                    return I(async () => {
                      S.__framer_editorBarDependencies = {
                        __version: 3,
                        framer: { useCurrentRoute: be, useLocaleInfo: z, useRouter: fe },
                        react: {
                          createElement: x,
                          Fragment: o,
                          memo: _,
                          useCallback: m,
                          useEffect: a,
                          useRef: r,
                          useState: s,
                          useLayoutEffect: ne,
                        },
                        "react-dom": { createPortal: p },
                      };
                      let { createEditorBar: e } = await import(
                        `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                      );
                      return { default: e() };
                    });
                  })(),
            adaptLayoutToTextDirection: !1,
            LayoutTemplate: Yt,
            loadSnippetsModule: new xe(
              () => import("./t93tsvmMsjhMHShP75TfnhvC7G3UOk-OA7lbEmuzAGA.BltXZAZ-.mjs")
            ),
            initialCollectionItemId: i,
          }),
          value: {
            autobahnNavigation: !0,
            disableCustomCode: !1,
            editorBarDisableFrameAncestorsSecurity: !1,
            motionDivToDiv: !1,
            onPageLocalizationSupport: !0,
            onPageMoveTool: !0,
            synchronousNavigationOnDesktop: !1,
            yieldOnTap: !1,
          },
        }),
      }),
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await c, l);
}
function Qt() {
  $ && S.__framer_events.push(arguments);
}
async function $t(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || S.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Qt(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = Oe(X, r)));
    else {
      Oe(X, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = Te(X, decodeURIComponent(location.pathname), !0, Z);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = Zt({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    S !== void 0 &&
      (async () => {
        let e = X[r],
          t = Z.find(({ id: e }) => (i ? e === i : e === `default`)).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Q) {
          let r = await Q[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          S.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: en ?? null,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: S.location.href,
              hostname: S.location.hostname || null,
              pathname: S.location.pathname || null,
              hash: S.location.hash || null,
              search: S.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await se({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (ae(`framer-rewrite-breakpoints`, () => {
          (Ee(o), S.__framer_onRewriteBreakpoints?.(o));
        }),
        (tn ? (e) => e() : d)(() => {
          (E(), de(), b(t, l, { onRecoverableError: n }));
        }))
      : ee(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var X, Z, Q, en, $, tn;
e(() => {
  if (
    (i(),
    F(),
    n(),
    l(),
    v(),
    Jt(),
    (X = {
      augiA20Il: {
        elements: {},
        page: I(() => import("./8ci0Aw9gYMZrnZYRBL5B5A_js4xszaaHpXi3xem6y_0.CvxnOcFo.mjs")),
        path: `/`,
      },
      AALeOQBWx: {
        elements: {},
        page: I(() => import("./C6dglYCO0RbKxOBwBqqmr6EXogwAe9YjQVVCRu3MKTk.rOD7BHFd.mjs")),
        path: `/404`,
      },
      urTt7Hepx: {
        elements: {},
        page: I(() => import("./5xjmGozagIuxhco2AnLNCiYplVN3CNCEl_19kKko8AA.DxK6zqR5.mjs")),
        path: `/about`,
      },
      JRRZ10Fay: {
        elements: {},
        page: I(() => import("./8T3z6fnvW09_DeGIINwRcRG08FRk8K5n7fzKdnByyns.CCx-1Jb4.mjs")),
        path: `/contact`,
      },
      G6F1BEvP2: {
        elements: {},
        page: I(() => import("./UlApcjYDdGuF7blQRz0sNu8dg1SvpJNDlHlQzzLNXwM.CvIQO7Ev.mjs")),
        path: `/blog`,
      },
      et1aPrJnV: {
        collectionId: `yR6ljnT0S`,
        elements: {},
        page: I(() => import("./jNrw-wXRxvMExsBbhkGq7nYsnfnBMqpg6L0PcZLWUnU.BsEQmjof.mjs")),
        path: `/work/:UQ200SfMv`,
      },
      eenHqF5o7: {
        collectionId: `PmFmTH0v9`,
        elements: {},
        page: I(() => import("./B7JQa2DRSQdUkEYbU4waoQQIXCAA7pWwaDQ_p8_nMDk.BFfGjkSf.mjs")),
        path: `/blog/:aHMwj0hdy`,
      },
      o0r7Z8ZnW: { page: I(() => import("./o0r7Z8ZnW.fri7jDzV.mjs")) },
    }),
    (Z = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Q = {
      PmFmTH0v9: async () =>
        (await import("./vRMZ3hPaGVD0vbemfzi6laLNFPT54sr6INizVg0uyGs.ZjDMOJQ-.mjs"))?.utils,
      yR6ljnT0S: async () =>
        (await import("./I1mrdRuJUZfk77RdTMjHk9IIHU7o8BP4FpHr6zdcmyM.Dja8-Q9Z.mjs"))?.utils,
    }),
    (en = `787a24b793e2b389f6142f4a94bd76527fa888d539d15f12d477b43947e19ebc`),
    ($ = typeof document < `u`),
    (tn = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    $)
  ) {
    ((S.__framer_importFromPackage = (e, t) => () =>
      x(pe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (S.__framer_events = S.__framer_events || []),
      oe(),
      ue());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? $t(!0, e) : $t(!1, e);
  }
})();
export { Xt as getLayoutTemplateBreakpoints, Zt as getPageRoot };
//# sourceMappingURL=script_main.fpi6V_b7.mjs.map
