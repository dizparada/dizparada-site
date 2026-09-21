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
  ht as T,
  k as E,
  s as D,
  st as O,
  xt as k,
} from "./framer.BQfDiYYl.mjs";
import { i as A, r as j } from "./shared-lib.DjXQ4AZU.mjs";
import { i as M, n as N, r as P, t as F } from "./YqEpde0dB.D0X_SpJn.mjs";
function I(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var L,
  R,
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
      A(),
      M(),
      (L = h(j)),
      (R = S(j)),
      (z = [`VEKXQeDHX`, `IS3qh851o`]),
      (B = `framer-b2VZA`),
      (V = { IS3qh851o: `framer-v-w7aztg`, VEKXQeDHX: `framer-v-jlbk2y` }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (W = d.create(i)),
      (G = { Icon: `IS3qh851o`, Text: `VEKXQeDHX` }),
      (K = ({ height: e, icon: t, id: n, number: r, text: i, width: a, ...o }) => ({
        ...o,
        fviPiX_DE: t ?? o.fviPiX_DE ?? `MapPin`,
        ldb9kzWDh: r ?? o.ldb9kzWDh ?? `10+`,
        variant: G[o.variant] ?? o.variant ?? `VEKXQeDHX`,
        xhMKtzNep: i ?? o.xhMKtzNep ?? `Years of Experience`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = b(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = T();
          O();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              ldb9kzWDh: b,
              fviPiX_DE: S,
              xhMKtzNep: C,
              ...E
            } = K(e),
            {
              baseVariant: D,
              classNames: A,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: L,
              setGestureState: R,
              setVariant: G,
              variants: J,
            } = k({
              cycleOrder: z,
              defaultVariant: `VEKXQeDHX`,
              ref: o,
              variant: y,
              variantClassNames: V,
            }),
            Y = q(e, J),
            X = v(B, F),
            Z = () => D !== `IS3qh851o`,
            Q = () => D === `IS3qh851o`;
          return a(p, {
            id: _ ?? s,
            children: a(W, {
              animate: J,
              initial: !1,
              children: a(U, {
                value: H,
                children: c(d.div, {
                  ...E,
                  ...N,
                  className: v(X, `framer-jlbk2y`, h, A),
                  "data-framer-name": `Text`,
                  layoutDependency: Y,
                  layoutId: `VEKXQeDHX`,
                  ref: o,
                  style: { ...m },
                  ...I({ IS3qh851o: { "data-framer-name": `Icon` } }, D, P),
                  children: [
                    Z() &&
                      a(x, {
                        __fromCanvasComponent: !0,
                        children: a(i, {
                          children: a(d.p, {
                            className: `framer-styles-preset-d9dxvl`,
                            "data-styles-preset": `YqEpde0dB`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28)))`,
                            },
                            children: `12+`,
                          }),
                        }),
                        className: `framer-i2f2e7`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `Ci3ASVISX`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    Q() &&
                      a(w, {
                        children: a(g, {
                          className: `framer-a8nuqe-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: Y,
                          layoutId: `qxPo0mRmT-container`,
                          nodeId: `qxPo0mRmT`,
                          rendersWithMotion: !0,
                          scopeId: `Gr0wzHBa6`,
                          children: a(j, {
                            color: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: S,
                            id: `qxPo0mRmT`,
                            layoutId: `qxPo0mRmT`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    a(x, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          className: `framer-styles-preset-d9dxvl`,
                          "data-styles-preset": `YqEpde0dB`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                          },
                          children: `Years of Experience`,
                        }),
                      }),
                      className: `framer-1wasjg3`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `lZV7xT8Qz`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: C,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-b2VZA.framer-yxwccc, .framer-b2VZA .framer-yxwccc { display: block; }`,
          `.framer-b2VZA.framer-jlbk2y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-b2VZA .framer-i2f2e7, .framer-b2VZA .framer-1wasjg3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-b2VZA .framer-a8nuqe-container { flex: none; height: 16px; position: relative; width: 16px; }`,
          ...N,
        ],
        `framer-b2VZA`
      )),
      (Y = J),
      (J.displayName = `Misc.`),
      (J.defaultProps = { height: 21, width: 163 }),
      E(J, {
        variant: {
          options: [`VEKXQeDHX`, `IS3qh851o`],
          optionTitles: [`Text`, `Icon`],
          title: `Variant`,
          type: D.Enum,
        },
        ldb9kzWDh: { defaultValue: `10+`, displayTextArea: !1, title: `Number`, type: D.String },
        fviPiX_DE: R?.iconSelection && {
          ...R.iconSelection,
          defaultValue: `MapPin`,
          description: void 0,
          hidden: void 0,
          title: `Icon`,
        },
        xhMKtzNep: {
          defaultValue: `Years of Experience`,
          displayTextArea: !1,
          title: `Text`,
          type: D.String,
        },
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
          ...L,
          ..._(P),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=Gr0wzHBa6.DFGbWtn0.mjs.map
