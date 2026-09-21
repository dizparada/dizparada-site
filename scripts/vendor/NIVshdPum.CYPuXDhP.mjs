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
  v as u,
} from "./react.BUXbFMJS.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.CLjJX74m.mjs";
import {
  B as h,
  D as g,
  H as _,
  N as v,
  O as y,
  St as b,
  T as x,
  W as S,
  Y as C,
  a as w,
  g as T,
  ht as E,
  k as D,
  s as O,
  st as k,
  xt as A,
} from "./framer.BQfDiYYl.mjs";
import { a as j, c as M, i as N, o as P, r as F, s as I } from "./shared-lib.DjXQ4AZU.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X = e(() => {
    (l(),
      C(),
      m(),
      n(),
      N(),
      M(),
      (R = h(F)),
      (z = S(F)),
      (B = { F7zeDVlO5: { hover: !0 } }),
      (V = `framer-qvRmD`),
      (H = { F7zeDVlO5: `framer-v-840c48` }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (G = d.create(i)),
      (K = ({ height: e, icon: t, id: n, link: r, text: i, width: a, ...o }) => ({
        ...o,
        fRGF_dpe1: t ?? o.fRGF_dpe1 ?? `MapPin`,
        Nve9M28HB: r ?? o.Nve9M28HB,
        sHHzugcQV: i ?? o.sHHzugcQV ?? `dizparada@gmail.com`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = b(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = E();
          k();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              sHHzugcQV: b,
              fRGF_dpe1: S,
              Nve9M28HB: C,
              ...D
            } = K(e),
            {
              baseVariant: O,
              classNames: M,
              clearLoadingGesture: N,
              gestureHandlers: P,
              gestureVariant: I,
              isLoading: R,
              setGestureState: z,
              setVariant: J,
              variants: Y,
            } = A({
              defaultVariant: `F7zeDVlO5`,
              enabledGestures: B,
              ref: o,
              variant: y,
              variantClassNames: H,
            }),
            X = q(e, Y),
            Z = v(V, j);
          return a(p, {
            id: _ ?? s,
            children: a(G, {
              animate: Y,
              initial: !1,
              children: a(W, {
                value: U,
                children: a(T, {
                  href: C,
                  motionChild: !0,
                  nodeId: `F7zeDVlO5`,
                  openInNewTab: !0,
                  scopeId: `NIVshdPum`,
                  children: c(d.a, {
                    ...D,
                    ...P,
                    className: `${v(Z, `framer-840c48`, h, M)} framer-wwvrvd`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: X,
                    layoutId: `F7zeDVlO5`,
                    ref: o,
                    style: { ...m },
                    ...L({ "F7zeDVlO5-hover": { "data-framer-name": void 0 } }, O, I),
                    children: [
                      a(w, {
                        children: a(g, {
                          className: `framer-1afypy6-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: X,
                          layoutId: `Lc5acq2yD-container`,
                          nodeId: `Lc5acq2yD`,
                          rendersWithMotion: !0,
                          scopeId: `NIVshdPum`,
                          children: a(F, {
                            color: `rgb(255, 71, 142)`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: S,
                            id: `Lc5acq2yD`,
                            layoutId: `Lc5acq2yD`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                            ...L(
                              {
                                "F7zeDVlO5-hover": {
                                  color: `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                                },
                              },
                              O,
                              I
                            ),
                          }),
                        }),
                      }),
                      a(x, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-dr60wz`,
                            "data-styles-preset": `PKAGe55xO`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                            },
                            children: `hello@david.com`,
                          }),
                        }),
                        className: `framer-t8msh8`,
                        fonts: [`Inter`],
                        layoutDependency: X,
                        layoutId: `uLNR3V5Jw`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                        },
                        text: b,
                        variants: {
                          "F7zeDVlO5-hover": {
                            "--extracted-r6o4lv": `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...L(
                          {
                            "F7zeDVlO5-hover": {
                              children: a(i, {
                                children: a(d.p, {
                                  className: `framer-styles-preset-dr60wz`,
                                  "data-styles-preset": `PKAGe55xO`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255)))`,
                                  },
                                  children: `hello@david.com`,
                                }),
                              }),
                            },
                          },
                          O,
                          I
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-qvRmD.framer-wwvrvd, .framer-qvRmD .framer-wwvrvd { display: block; }`,
          `.framer-qvRmD.framer-840c48 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-qvRmD .framer-1afypy6-container { flex: none; height: 17px; position: relative; width: 17px; }`,
          `.framer-qvRmD .framer-t8msh8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...P,
        ],
        `framer-qvRmD`
      )),
      (Y = J),
      (J.displayName = `Buttons/Contact info`),
      (J.defaultProps = { height: 27, width: 205.5 }),
      D(J, {
        sHHzugcQV: {
          defaultValue: `dizparada@gmail.com`,
          displayTextArea: !1,
          title: `Text`,
          type: O.String,
        },
        fRGF_dpe1: z?.iconSelection && {
          ...z.iconSelection,
          defaultValue: `MapPin`,
          description: void 0,
          hidden: void 0,
          title: `Icon`,
        },
        Nve9M28HB: { title: `Link`, type: O.Link },
      }),
      y(
        J,
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
          ...R,
          ..._(I),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=NIVshdPum.CYPuXDhP.mjs.map
