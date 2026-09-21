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
  H as h,
  N as g,
  O as _,
  St as v,
  T as y,
  U as b,
  Y as x,
  g as S,
  ht as C,
  k as w,
  p as T,
  s as E,
  st as D,
  xt as O,
} from "./framer.BQfDiYYl.mjs";
import { a as k, c as A, o as j, s as M } from "./shared-lib.DjXQ4AZU.mjs";
import { i as N, n as P, r as F, t as I } from "./YqEpde0dB.D0X_SpJn.mjs";
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
  X,
  Z = e(() => {
    (l(),
      x(),
      m(),
      n(),
      A(),
      N(),
      (R = { Y36jKbY_6: { hover: !0 } }),
      (z = [`Y36jKbY_6`, `W_OJHzQo_`]),
      (B = `framer-1Ehaa`),
      (V = { W_OJHzQo_: `framer-v-k5wb23`, Y36jKbY_6: `framer-v-n3ck5x` }),
      (H = { bounce: 0.1, delay: 0, duration: 0.9, type: `spring` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (G = d.create(i)),
      (K = { "Tablet/Phone": `W_OJHzQo_`, Desktop: `Y36jKbY_6` }),
      (q = ({
        bGColor: e,
        description: t,
        height: n,
        id: r,
        image: i,
        link: a,
        projectTitle: o,
        showInfo: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Bzxl0uQQi: t ?? l.Bzxl0uQQi ?? `Description`,
        HUD3zaNVo: a ?? l.HUD3zaNVo,
        KuE4w6YON: s ?? l.KuE4w6YON ?? !0,
        KzaKtxXOR: o ?? l.KzaKtxXOR ?? `Project Name`,
        variant: K[l.variant] ?? l.variant ?? `Y36jKbY_6`,
        wCJXJmccQ: i ??
          l.wCJXJmccQ ?? {
            alt: ``,
            pixelHeight: 1243,
            pixelWidth: 1419,
            positionX: `50.3%`,
            positionY: `0%`,
            src: `https://framerusercontent.com/images/V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?scale-down-to=1024&width=1419&height=1243`,
            srcSet: `https://framerusercontent.com/images/V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?scale-down-to=512&width=1419&height=1243 512w,https://framerusercontent.com/images/V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?scale-down-to=1024&width=1419&height=1243 1024w,https://framerusercontent.com/images/V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?width=1419&height=1243 1419w`,
          },
        yoW0fqNPk: e ?? l.yoW0fqNPk ?? `rgb(0, 184, 216)`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = v(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = C(),
            m = D(),
            {
              style: h,
              className: _,
              layoutId: v,
              variant: x,
              wCJXJmccQ: w,
              yoW0fqNPk: E,
              KzaKtxXOR: A,
              Bzxl0uQQi: j,
              KuE4w6YON: M,
              HUD3zaNVo: N,
              ...P
            } = q(e),
            {
              baseVariant: F,
              classNames: K,
              clearLoadingGesture: Y,
              gestureHandlers: X,
              gestureVariant: Z,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: Q,
            } = O({
              cycleOrder: z,
              defaultVariant: `Y36jKbY_6`,
              enabledGestures: R,
              ref: o,
              variant: x,
              variantClassNames: V,
            }),
            $ = J(e, Q),
            re = g(B, k, I);
          return a(p, {
            id: v ?? s,
            children: a(G, {
              animate: Q,
              initial: !1,
              children: a(W, {
                value: H,
                children: a(S, {
                  href: N,
                  motionChild: !0,
                  nodeId: `Y36jKbY_6`,
                  scopeId: `d0pe_w6n8`,
                  smoothScroll: !0,
                  children: c(d.a, {
                    ...P,
                    ...X,
                    className: `${g(re, `framer-n3ck5x`, _, K)} framer-1uxzzw8`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `Y36jKbY_6`,
                    ref: o,
                    style: { ...h },
                    ...L(
                      {
                        "Y36jKbY_6-hover": { "data-framer-name": void 0 },
                        W_OJHzQo_: { "data-framer-name": `Tablet/Phone` },
                      },
                      F,
                      Z
                    ),
                    children: [
                      a(d.div, {
                        className: `framer-1uij3uz`,
                        "data-framer-name": `Image`,
                        layoutDependency: $,
                        layoutId: `MEZ4sFSqA`,
                        style: {
                          backgroundColor: E,
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                        children: a(d.div, {
                          className: `framer-pvwrfc`,
                          "data-framer-name": `Container`,
                          layoutDependency: $,
                          layoutId: `wtCfu2Yqp`,
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                          children: a(T, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1243,
                              intrinsicWidth: 1419,
                              loading: b(
                                (m?.y || 0) +
                                  0 +
                                  ((m?.height || 449) - 0 - 414 + 0 + 0) +
                                  0 +
                                  9.5 +
                                  0
                              ),
                              pixelHeight: 1243,
                              pixelWidth: 1419,
                              sizes: `max(${m?.width || `100vw`}, 1px)`,
                              ...U(w),
                            },
                            className: `framer-1s36fdo`,
                            "data-framer-name": `Image`,
                            fitImageDimension: `height`,
                            layoutDependency: $,
                            layoutId: `I2FU9C_iC`,
                            style: {
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              boxShadow: `none`,
                            },
                            variants: {
                              "Y36jKbY_6-hover": {
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: `0px 0.6021873017743928px 1.8065619053231785px 0px rgba(0, 0, 0, 0.02), 0px 2.288533303243457px 6.8655999097303715px 0px rgba(0, 0, 0, 0.08), 0px 10px 30px 0px rgba(0, 0, 0, 0.35)`,
                              },
                              W_OJHzQo_: {
                                borderBottomLeftRadius: 6,
                                borderBottomRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 6,
                              },
                            },
                            ...L(
                              {
                                "Y36jKbY_6-hover": {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1243,
                                    intrinsicWidth: 1419,
                                    loading: b(
                                      (m?.y || 0) +
                                        0 +
                                        ((m?.height || 449) - 0 - 414 + 0 + 0) +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1243,
                                    pixelWidth: 1419,
                                    sizes: `max(${m?.width || `100vw`} * 2, 1px)`,
                                    ...U(w),
                                  },
                                },
                                W_OJHzQo_: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1243,
                                    intrinsicWidth: 1419,
                                    loading: b(
                                      (m?.y || 0) +
                                        0 +
                                        ((m?.height || 324) - 0 - 414 + 0 + 0) +
                                        20 +
                                        -10.5 +
                                        0
                                    ),
                                    pixelHeight: 1243,
                                    pixelWidth: 1419,
                                    sizes: `max(${m?.width || `100vw`} - 40px, 1px)`,
                                    ...U(w),
                                  },
                                },
                              },
                              F,
                              Z
                            ),
                          }),
                        }),
                      }),
                      M &&
                        a(d.div, {
                          className: `framer-nim1x`,
                          "data-framer-name": `Details`,
                          layoutDependency: $,
                          layoutId: `grpixNEUr`,
                          children: c(d.div, {
                            className: `framer-mdkufg`,
                            "data-framer-name": `Title`,
                            layoutDependency: $,
                            layoutId: `qAHmuIzip`,
                            children: [
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(d.p, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255)))`,
                                    },
                                    children: `Project Name`,
                                  }),
                                }),
                                className: `framer-19q903u`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `Vajxw4z0X`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: A,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(d.div, {
                                className: `framer-1hlorv1`,
                                "data-framer-name": `Dot`,
                                layoutDependency: $,
                                layoutId: `T5VO5OfBA`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                              a(y, {
                                __fromCanvasComponent: !0,
                                children: a(i, {
                                  children: a(d.p, {
                                    className: `framer-styles-preset-d9dxvl`,
                                    "data-styles-preset": `YqEpde0dB`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                    },
                                    children: `Description`,
                                  }),
                                }),
                                className: `framer-nhq01c`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `od24aJI29`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: j,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
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
          `.framer-1Ehaa.framer-1uxzzw8, .framer-1Ehaa .framer-1uxzzw8 { display: block; }`,
          `.framer-1Ehaa.framer-n3ck5x { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 516px; }`,
          `.framer-1Ehaa .framer-1uij3uz { align-content: center; align-items: center; aspect-ratio: 1.2463768115942029 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 414px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-1Ehaa .framer-pvwrfc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 0; }`,
          `.framer-1Ehaa .framer-1s36fdo { flex: 1 0 0px; height: auto; overflow: visible; position: relative; width: 1px; z-index: 1; }`,
          `.framer-1Ehaa .framer-nim1x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1Ehaa .framer-mdkufg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-1Ehaa .framer-19q903u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-1Ehaa .framer-1hlorv1 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: hidden; position: relative; width: 4px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-1Ehaa .framer-nhq01c { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-1Ehaa.framer-v-k5wb23.framer-n3ck5x { align-content: flex-end; align-items: flex-end; cursor: unset; width: 360px; }`,
          `.framer-1Ehaa.framer-v-k5wb23 .framer-1uij3uz { height: var(--framer-aspect-ratio-supported, 289px); padding: 20px; }`,
          `.framer-1Ehaa.framer-v-n3ck5x.hover .framer-pvwrfc { flex: 2 0 0px; height: 1px; width: 200%; }`,
          `.framer-1Ehaa.framer-v-n3ck5x.hover .framer-1s36fdo { flex: 0.65 0 0px; }`,
          ...j,
          ...P,
        ],
        `framer-1Ehaa`
      )),
      (X = Y),
      (Y.displayName = `Cards/Project`),
      (Y.defaultProps = { height: 449, width: 516 }),
      w(Y, {
        variant: {
          options: [`Y36jKbY_6`, `W_OJHzQo_`],
          optionTitles: [`Desktop`, `Tablet/Phone`],
          title: `Variant`,
          type: E.Enum,
        },
        wCJXJmccQ: {
          __defaultAssetReference: `data:framer/asset-reference,V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?originalFilename=Screenshot+2025-02-12+084432.png&preferredSize=auto`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,V2JqCyHRC7EUq5w2txfRJ3FfuoY.png?originalFilename=Screenshot+2025-02-12+084432.png&preferredSize=auto`,
            positionX: `50.3%`,
            positionY: `0%`,
          },
          description: `Use Focal Point to adjust what part of the image gets the focus ( eg. 0%,0%)`,
          title: `Image`,
          type: E.ResponsiveImage,
        },
        yoW0fqNPk: { defaultValue: `rgb(0, 184, 216)`, title: `BG color`, type: E.Color },
        KzaKtxXOR: {
          defaultValue: `Project Name`,
          displayTextArea: !1,
          title: `Project title`,
          type: E.String,
        },
        Bzxl0uQQi: {
          defaultValue: `Description`,
          displayTextArea: !1,
          title: `Description`,
          type: E.String,
        },
        KuE4w6YON: { defaultValue: !0, title: `Show info`, type: E.Boolean },
        HUD3zaNVo: { title: `Link`, type: E.Link },
      }),
      _(
        Y,
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
          ...h(M),
          ...h(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Z as n, X as t };
//# sourceMappingURL=d0pe_w6n8.DYFf_PrJ.mjs.map
