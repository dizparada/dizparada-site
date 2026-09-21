import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  M as i,
  N as a,
  P as o,
  c as s,
  h as c,
  k as l,
  l as u,
  o as d,
  v as f,
} from "./react.BUXbFMJS.mjs";
import { S as p, a as m, r as h, t as g } from "./motion.CLjJX74m.mjs";
import {
  B as _,
  Ct as v,
  D as ee,
  Et as y,
  H as b,
  N as x,
  O as S,
  P as C,
  St as w,
  T,
  U as te,
  Y as E,
  a as D,
  bt as O,
  d as k,
  dt as A,
  ft as j,
  g as M,
  gt as ne,
  ht as N,
  k as P,
  o as F,
  p as re,
  s as I,
  st as L,
  ut as ie,
  w as ae,
  x as R,
  xt as oe,
} from "./framer.BQfDiYYl.mjs";
import { i as se, r as z } from "./shared-lib.DjXQ4AZU.mjs";
import { n as ce, t as le } from "./EiSctT0o2.DmqrOrly.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./PKAGe55xO.C9cvoNFs.mjs";
import { i as me, n as he, r as ge, t as _e } from "./YqEpde0dB.C7QC1g4X.mjs";
import { n as ve, t as B } from "./Gr0wzHBa6.DFGbWtn0.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./fmOVsh00u.BOfh2ixt.mjs";
import { n as Ce, r as we } from "./urTt7Hepx.Ig8hiXSf.mjs";
function V({
  timezone: e,
  is24HourFormat: t,
  showSeconds: n,
  font: r,
  fontSize: a,
  textColor: c,
  dateSettings: { showDate: l, dateFormat: u, datePosition: d, monthFormat: f },
  prefixSuffixSettings: { usePrefixSuffix: p, text: m },
}) {
  let [h, g] = o(``),
    [_, v] = o(!0);
  return (
    i(() => {
      function r() {
        try {
          let r = new Date(),
            i = {
              hour: `2-digit`,
              minute: `2-digit`,
              second: n ? `2-digit` : void 0,
              timeZone: e,
              hour12: !t,
            },
            a = {
              year: u.includes(`Y`) ? `numeric` : void 0,
              month: u.includes(`M`) ? (f === `text` ? `long` : `2-digit`) : void 0,
              day: u.includes(`D`) ? `2-digit` : void 0,
            },
            o = new Intl.DateTimeFormat(`en-US`, i),
            s = new Intl.DateTimeFormat(`en-US`, a),
            c = o.format(r),
            d = l ? s.format(r) : ``,
            h = d ? `${d} - ${c}` : c;
          (p === `prefix` && m ? (h = `${m} ${h}`) : p === `suffix` && m && (h = `${h} ${m}`),
            g(h),
            v(!0));
        } catch (e) {
          (console.error(`Error with timezone: `, e), v(!1));
        }
      }
      r();
      let i = setInterval(r, 1e3);
      return () => clearInterval(i);
    }, [e, t, n, l, u, d, f, c, r, a, p, m]),
    s(`div`, {
      style: {
        fontSize: `${a}px`,
        fontFeatureSettings: `'tnum'`,
        fontVariantNumeric: `lining-nums`,
        color: c,
        ...r,
      },
      children: h,
    })
  );
}
var Te = e(() => {
    (d(),
      n(),
      E(),
      (V.defaultProps = {
        timezone: `America/New_York`,
        is24HourFormat: !0,
        showSeconds: !1,
        dateSettings: {
          showDate: !1,
          dateFormat: `DMY`,
          datePosition: `prefix`,
          monthFormat: `number`,
        },
        prefixSuffixSettings: { usePrefixSuffix: `none`, text: ``, fontSize: 16 },
        textColor: `#999999`,
        fontSize: 24,
      }),
      P(V, {
        timezone: {
          type: I.String,
          title: `Timezone`,
          defaultValue: `America/New_York`,
          description: `Use a timezone identifier ie: 'America/Los_Angeles' [Full list here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)`,
        },
        font: { type: I.Font, title: `Font`, defaultValue: `Inter`, controls: `extended` },
        textColor: { type: I.Color, title: `Color`, defaultValue: `#999999` },
        is24HourFormat: {
          type: I.Boolean,
          title: `Format`,
          defaultValue: !0,
          enabledTitle: `24h`,
          disabledTitle: `12h`,
        },
        showSeconds: {
          type: I.Boolean,
          title: `Seconds`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        prefixSuffixSettings: {
          type: I.Object,
          title: `Prefix/Suffix`,
          controls: {
            usePrefixSuffix: {
              type: I.SegmentedEnum,
              title: `Use`,
              options: [`none`, `prefix`, `suffix`],
              optionTitles: [`None`, `Pref.`, `Suff.`],
              defaultValue: `none`,
            },
            text: {
              type: I.String,
              title: `Text`,
              defaultValue: ``,
              description: `include your divider directly here, ie: - , :`,
            },
          },
        },
        dateSettings: {
          type: I.Object,
          title: `Date`,
          controls: {
            showDate: { type: I.Boolean, title: `Show Date` },
            dateFormat: {
              type: I.Enum,
              title: `Format`,
              options: [`D`, `M`, `DM`, `DMY`],
              optionTitles: [`Only Day`, `Only Month`, `Day and Month`, `Day, Month and Year`],
            },
            datePosition: {
              type: I.SegmentedEnum,
              title: `Position`,
              options: [`prefix`, `suffix`],
              optionTitles: [`Front`, `End`],
            },
            monthFormat: {
              type: I.SegmentedEnum,
              title: `Month Format`,
              options: [`number`, `text`],
              optionTitles: [`Numeric`, `Text`],
            },
          },
        },
      }));
  }),
  H,
  U,
  W,
  Ee = e(() => {
    (E(),
      C.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (H = [
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
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (U = [
        `.framer-g4ng7 .framer-styles-preset-8e29y:not(.rich-text-wrapper), .framer-g4ng7 .framer-styles-preset-8e29y.rich-text-wrapper h4 { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-g4ng7 .framer-styles-preset-8e29y:not(.rich-text-wrapper), .framer-g4ng7 .framer-styles-preset-8e29y.rich-text-wrapper h4 { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-g4ng7 .framer-styles-preset-8e29y:not(.rich-text-wrapper), .framer-g4ng7 .framer-styles-preset-8e29y.rich-text-wrapper h4 { --framer-font-family: "Inter", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (W = `framer-g4ng7`));
  }),
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  G,
  K,
  Pe = e(() => {
    (d(),
      E(),
      g(),
      n(),
      Ee(),
      ue(),
      me(),
      (De = `framer-zNDIh`),
      (Oe = { sgwKDSEdR: `framer-v-13wn3sa` }),
      (ke = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ae = ({ value: e, children: n }) => {
        let r = l(m),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(m.Provider, { value: a, children: n });
      }),
      (je = p.create(a)),
      (Me = ({
        company: e,
        description: t,
        height: n,
        id: r,
        position: i,
        width: a,
        years: o,
        ...s
      }) => ({
        ...s,
        EWZrRoAFN: t ?? s.EWZrRoAFN ?? `Description`,
        l3ljIiqFZ: i ?? s.l3ljIiqFZ ?? `Position`,
        O3LJFMByd: e ?? s.O3LJFMByd ?? `Company`,
        zIgs_TZYX: o ?? s.zIgs_TZYX ?? `Years`,
      })),
      (Ne = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = w(
        c(function (e, t) {
          let { activeLocale: n, setLocale: i } = N(),
            {
              style: o,
              className: c,
              layoutId: l,
              variant: d,
              O3LJFMByd: m,
              l3ljIiqFZ: g,
              EWZrRoAFN: _,
              zIgs_TZYX: v,
              ...ee
            } = Me(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: te,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = oe({ defaultVariant: `sgwKDSEdR`, variant: d, variantClassNames: Oe }),
            k = Ne(e, O),
            A = x(De, W, pe, _e),
            j = r(null),
            M = f();
          return (
            L(),
            s(h, {
              id: l ?? M,
              children: s(je, {
                animate: O,
                initial: !1,
                children: s(Ae, {
                  value: ke,
                  children: u(p.div, {
                    ...ee,
                    ...C,
                    className: x(A, `framer-13wn3sa`, c, b),
                    "data-framer-name": `Variant 1`,
                    layoutDependency: k,
                    layoutId: `sgwKDSEdR`,
                    ref: t ?? j,
                    style: { ...o },
                    children: [
                      u(p.div, {
                        className: `framer-mu1j3j`,
                        "data-framer-name": `Info`,
                        layoutDependency: k,
                        layoutId: `uXZk1tnV7`,
                        children: [
                          u(p.div, {
                            className: `framer-1mweprm`,
                            "data-framer-name": `Title`,
                            layoutDependency: k,
                            layoutId: `jDa9gI7_O`,
                            children: [
                              s(T, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(p.h4, {
                                    className: `framer-styles-preset-8e29y`,
                                    "data-styles-preset": `EPtgv8oXQ`,
                                    children: `Company`,
                                  }),
                                }),
                                className: `framer-10he94h`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `hDyPdkyCx`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: m,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(p.div, {
                                className: `framer-1as1159`,
                                "data-framer-name": `Dot`,
                                layoutDependency: k,
                                layoutId: `cmIU9DFhj`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                              s(T, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(p.p, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                    },
                                    children: `Position`,
                                  }),
                                }),
                                className: `framer-nh7sal`,
                                fonts: [`Inter`],
                                layoutDependency: k,
                                layoutId: `PGuVRSA9C`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(p.div, {
                            className: `framer-1weutig`,
                            "data-framer-name": `Line`,
                            layoutDependency: k,
                            layoutId: `tFYZ_XN4i`,
                            style: {
                              backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                            },
                          }),
                          s(T, {
                            __fromCanvasComponent: !0,
                            children: s(a, {
                              children: s(p.p, {
                                className: `framer-styles-preset-d9dxvl`,
                                "data-styles-preset": `YqEpde0dB`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                },
                                children: `Years`,
                              }),
                            }),
                            className: `framer-1rp0i94`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `JlGwgLtnJ`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      s(T, {
                        __fromCanvasComponent: !0,
                        children: s(a, {
                          children: s(p.p, {
                            className: `framer-styles-preset-d9dxvl`,
                            "data-styles-preset": `YqEpde0dB`,
                            children: `Description`,
                          }),
                        }),
                        className: `framer-qwolvr`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `AOFrM7mnu`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: _,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-zNDIh.framer-12bs6yz, .framer-zNDIh .framer-12bs6yz { display: block; }`,
          `.framer-zNDIh.framer-13wn3sa { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1120px; }`,
          `.framer-zNDIh .framer-mu1j3j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-zNDIh .framer-1mweprm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-zNDIh .framer-10he94h, .framer-zNDIh .framer-nh7sal, .framer-zNDIh .framer-1rp0i94 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-zNDIh .framer-1as1159 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: hidden; position: relative; width: 4px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-zNDIh .framer-1weutig { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
          `.framer-zNDIh .framer-qwolvr { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zNDIh.framer-13wn3sa, .framer-zNDIh .framer-mu1j3j, .framer-zNDIh .framer-1mweprm { gap: 0px; } .framer-zNDIh.framer-13wn3sa > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-zNDIh.framer-13wn3sa > :first-child { margin-top: 0px; } .framer-zNDIh.framer-13wn3sa > :last-child { margin-bottom: 0px; } .framer-zNDIh .framer-mu1j3j > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-zNDIh .framer-mu1j3j > :first-child, .framer-zNDIh .framer-1mweprm > :first-child { margin-left: 0px; } .framer-zNDIh .framer-mu1j3j > :last-child, .framer-zNDIh .framer-1mweprm > :last-child { margin-right: 0px; } .framer-zNDIh .framer-1mweprm > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }`,
          ...U,
          ...de,
          ...he,
        ],
        `framer-zNDIh`
      )),
      (K = G),
      (G.displayName = `Cards/Experience`),
      (G.defaultProps = { height: 55, width: 1120 }),
      P(G, {
        O3LJFMByd: {
          defaultValue: `Company`,
          displayTextArea: !1,
          title: `Company`,
          type: I.String,
        },
        l3ljIiqFZ: {
          defaultValue: `Position`,
          displayTextArea: !1,
          title: `Position`,
          type: I.String,
        },
        EWZrRoAFN: {
          defaultValue: `Description`,
          displayTextArea: !0,
          title: `Description`,
          type: I.String,
        },
        zIgs_TZYX: { defaultValue: `Years`, displayTextArea: !1, title: `Years`, type: I.String },
      }),
      S(
        G,
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
          ...b(H),
          ...b(fe),
          ...b(ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Fe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  q,
  J,
  Ge = e(() => {
    (d(),
      E(),
      g(),
      n(),
      se(),
      Ee(),
      ue(),
      me(),
      (Ie = _(z)),
      (Le = { Fsyfqc046: { hover: !0 } }),
      (Re = `framer-u3jwc`),
      (ze = { Fsyfqc046: `framer-v-12e7r3f` }),
      (Be = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ve = ({ value: e, children: n }) => {
        let r = l(m),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(m.Provider, { value: a, children: n });
      }),
      (He = p.create(a)),
      (Ue = ({ description: e, height: t, id: n, link: r, title: i, width: a, year: o, ...s }) => ({
        ...s,
        Hazkr7qlw: r ?? s.Hazkr7qlw,
        l3ljIiqFZ: e ?? s.l3ljIiqFZ ?? `Description`,
        O3LJFMByd: i ?? s.O3LJFMByd ?? `Title`,
        zIgs_TZYX: o ?? s.zIgs_TZYX ?? `Year`,
      })),
      (We = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = w(
        c(function (e, t) {
          let { activeLocale: n, setLocale: i } = N(),
            {
              style: o,
              className: c,
              layoutId: l,
              variant: d,
              O3LJFMByd: m,
              l3ljIiqFZ: g,
              zIgs_TZYX: _,
              Hazkr7qlw: v,
              ...y
            } = Ue(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: te,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = oe({
              defaultVariant: `Fsyfqc046`,
              enabledGestures: Le,
              variant: d,
              variantClassNames: ze,
            }),
            j = We(e, A),
            ne = x(Re, W, pe, _e),
            P = r(null),
            F = f();
          return (
            L(),
            s(h, {
              id: l ?? F,
              children: s(He, {
                animate: A,
                initial: !1,
                children: s(Ve, {
                  value: Be,
                  children: s(M, {
                    href: v,
                    motionChild: !0,
                    nodeId: `Fsyfqc046`,
                    children: s(p.a, {
                      ...y,
                      ...w,
                      className: `${x(ne, `framer-12e7r3f`, c, S)} framer-15xz593`,
                      "data-framer-name": `Variant 1`,
                      layoutDependency: j,
                      layoutId: `Fsyfqc046`,
                      ref: t ?? P,
                      style: { ...o },
                      ...Fe({ "Fsyfqc046-hover": { "data-framer-name": void 0 } }, b, te),
                      children: u(p.div, {
                        className: `framer-62e4l9`,
                        "data-framer-name": `Info`,
                        layoutDependency: j,
                        layoutId: `e_qRpeePA`,
                        children: [
                          u(p.div, {
                            className: `framer-esyufb`,
                            "data-framer-name": `Title`,
                            layoutDependency: j,
                            layoutId: `faLCb9rGK`,
                            children: [
                              s(T, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(p.h4, {
                                    className: `framer-styles-preset-8e29y`,
                                    "data-styles-preset": `EPtgv8oXQ`,
                                    children: `Title`,
                                  }),
                                }),
                                className: `framer-1ugl2ua`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `eBY4yuFI2`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: m,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(p.div, {
                                className: `framer-z8h85c`,
                                "data-framer-name": `Dot`,
                                layoutDependency: j,
                                layoutId: `s_kV_EvRC`,
                                style: {
                                  backgroundColor: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                              s(T, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(p.p, {
                                    className: `framer-styles-preset-dr60wz`,
                                    "data-styles-preset": `PKAGe55xO`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                    },
                                    children: `Description`,
                                  }),
                                }),
                                className: `framer-bxxwvt`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `nCHmz5Z2D`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: g,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          s(p.div, {
                            className: `framer-17sm20w`,
                            "data-framer-name": `Line`,
                            layoutDependency: j,
                            layoutId: `ys_DkwFFn`,
                            style: {
                              backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                            },
                            variants: {
                              "Fsyfqc046-hover": {
                                backgroundColor: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                              },
                            },
                          }),
                          u(p.div, {
                            className: `framer-oizwfp`,
                            layoutDependency: j,
                            layoutId: `PIwjRtNj5`,
                            children: [
                              s(T, {
                                __fromCanvasComponent: !0,
                                children: s(a, {
                                  children: s(p.p, {
                                    className: `framer-styles-preset-d9dxvl`,
                                    "data-styles-preset": `YqEpde0dB`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194)))`,
                                    },
                                    children: `Year`,
                                  }),
                                }),
                                className: `framer-lrdzor`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `dT4iJwzmv`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: _,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(p.div, {
                                className: `framer-o8ax36`,
                                "data-framer-name": `Dot`,
                                layoutDependency: j,
                                layoutId: `Z5D23ezMv`,
                                style: {
                                  backgroundColor: `var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, rgb(38, 38, 38))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                                variants: {
                                  "Fsyfqc046-hover": {
                                    backgroundColor: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
                                  },
                                },
                              }),
                              s(D, {
                                children: s(ee, {
                                  className: `framer-fs5rew-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: j,
                                  layoutId: `APkFIFT22-container`,
                                  nodeId: `APkFIFT22`,
                                  rendersWithMotion: !0,
                                  scopeId: `rGEmWHAmT`,
                                  style: { rotate: 0 },
                                  variants: { "Fsyfqc046-hover": { rotate: 45 } },
                                  children: s(z, {
                                    color: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                    height: `100%`,
                                    iconSearch: `House`,
                                    iconSelection: `ArrowUpRight`,
                                    id: `APkFIFT22`,
                                    layoutId: `APkFIFT22`,
                                    mirrored: !1,
                                    selectByList: !0,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `regular`,
                                    width: `100%`,
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
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-u3jwc.framer-15xz593, .framer-u3jwc .framer-15xz593 { display: block; }`,
          `.framer-u3jwc.framer-12e7r3f { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 1120px; }`,
          `.framer-u3jwc .framer-62e4l9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-u3jwc .framer-esyufb, .framer-u3jwc .framer-oizwfp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-u3jwc .framer-1ugl2ua, .framer-u3jwc .framer-bxxwvt, .framer-u3jwc .framer-lrdzor { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-u3jwc .framer-z8h85c, .framer-u3jwc .framer-o8ax36 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: hidden; position: relative; width: 4px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-u3jwc .framer-17sm20w { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
          `.framer-u3jwc .framer-fs5rew-container { flex: none; height: 18px; position: relative; width: 18px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-u3jwc.framer-12e7r3f, .framer-u3jwc .framer-62e4l9, .framer-u3jwc .framer-esyufb, .framer-u3jwc .framer-oizwfp { gap: 0px; } .framer-u3jwc.framer-12e7r3f > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-u3jwc.framer-12e7r3f > :first-child { margin-top: 0px; } .framer-u3jwc.framer-12e7r3f > :last-child { margin-bottom: 0px; } .framer-u3jwc .framer-62e4l9 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-u3jwc .framer-62e4l9 > :first-child, .framer-u3jwc .framer-esyufb > :first-child, .framer-u3jwc .framer-oizwfp > :first-child { margin-left: 0px; } .framer-u3jwc .framer-62e4l9 > :last-child, .framer-u3jwc .framer-esyufb > :last-child, .framer-u3jwc .framer-oizwfp > :last-child { margin-right: 0px; } .framer-u3jwc .framer-esyufb > *, .framer-u3jwc .framer-oizwfp > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }`,
          ...U,
          ...de,
          ...he,
        ],
        `framer-u3jwc`
      )),
      (J = q),
      (q.displayName = `Awards`),
      (q.defaultProps = { height: 28, width: 1120 }),
      P(q, {
        O3LJFMByd: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: I.String },
        l3ljIiqFZ: {
          defaultValue: `Description`,
          displayTextArea: !1,
          title: `Description`,
          type: I.String,
        },
        zIgs_TZYX: { defaultValue: `Year`, displayTextArea: !1, title: `Year`, type: I.String },
        Hazkr7qlw: { title: `Link`, type: I.Link },
      }),
      S(
        q,
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
          ...Ie,
          ...b(H),
          ...b(fe),
          ...b(ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Y,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  X,
  it,
  at,
  Z,
  Q,
  ot,
  st,
  ct,
  $,
  lt,
  ut;
e(() => {
  (d(),
    E(),
    g(),
    n(),
    Te(),
    se(),
    Pe(),
    ce(),
    ve(),
    Ge(),
    ye(),
    Ce(),
    (Ke = y(p.div)),
    (qe = y(re)),
    (Je = _(B)),
    (Ye = _(z)),
    (Xe = _(V)),
    (Ze = _(le)),
    (Y = v(p.div)),
    (Qe = _(K)),
    ($e = _(J)),
    (et = {
      nSnTKzOm3: `(min-width: 810px) and (max-width: 1199.98px)`,
      nVbKh10Fx: `(max-width: 809.98px)`,
      wJ8jKWAL3: `(min-width: 1200px)`,
    }),
    (tt = `framer-alNG3`),
    (nt = {
      nSnTKzOm3: `framer-v-p4onei`,
      nVbKh10Fx: `framer-v-metcbx`,
      wJ8jKWAL3: `framer-v-1ui5brl`,
    }),
    (rt = (e, t, n) => (e && t ? `position` : n)),
    (X = { bounce: 0.2, delay: 0, duration: 1.5, type: `spring` }),
    (it = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 0,
    }),
    (at = {
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
    (Z = {
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
    (Q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 80,
    }),
    (ot = ({ value: e }) =>
      j()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (st = { Desktop: `wJ8jKWAL3`, Phone: `nVbKh10Fx`, Tablet: `nSnTKzOm3` }),
    (ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: st[r.variant] ?? r.variant ?? `wJ8jKWAL3`,
    })),
    ($ = w(
      c(function (e, n) {
        let i = r(null),
          o = n ?? i,
          c = f(),
          { activeLocale: d, setLocale: g } = N(),
          _ = L(),
          { style: v, className: ee, layoutId: y, variant: b, ...S } = ct(e);
        ne(t(() => we({}, d), [d]));
        let [C, w] = A(b, et, !1),
          E = x(tt, Se),
          j = l(k)?.isLayoutTemplate,
          M = rt(j, !!l(m)?.transition?.layout);
        return (
          O(),
          ie({}),
          s(k.Provider, {
            value: { primaryVariantId: `wJ8jKWAL3`, variantClassNames: nt },
            children: u(h, {
              id: y ?? c,
              children: [
                s(ot, {
                  value: `html body { background: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, rgb(15, 15, 15)); }`,
                }),
                u(p.div, {
                  ...S,
                  className: x(E, `framer-1ui5brl`, ee),
                  ref: o,
                  style: { ...v },
                  children: [
                    s(p.section, {
                      className: `framer-pzv1bn`,
                      "data-framer-name": `Hero`,
                      layout: M,
                      children: s(`div`, {
                        className: `framer-1m3rtc`,
                        "data-framer-name": `Container`,
                        children: u(`div`, {
                          className: `framer-xeihlw`,
                          "data-framer-name": `Content`,
                          children: [
                            u(`div`, {
                              className: `framer-xaf94g`,
                              "data-framer-name": `Headline`,
                              children: [
                                s(Ke, {
                                  animate: it,
                                  className: `framer-1t5rr3t`,
                                  "data-framer-appear-id": `1t5rr3t`,
                                  "data-framer-name": `Title`,
                                  initial: at,
                                  optimized: !0,
                                  children: s(T, {
                                    __fromCanvasComponent: !0,
                                    children: u(a, {
                                      children: [
                                        u(`h1`, {
                                          className: `framer-styles-preset-nizf32`,
                                          "data-styles-preset": `fmOVsh00u`,
                                          children: [
                                            `Hi, I’m Ana Parada `,
                                            s(`br`, {}),
                                            `a Product Designer with a`,
                                            s(`br`, {}),
                                            `dedicated work ethic.`,
                                          ],
                                        }),
                                        u(`h1`, {
                                          className: `framer-styles-preset-nizf32`,
                                          "data-styles-preset": `fmOVsh00u`,
                                          children: [
                                            s(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(110, 110, 110)`,
                                              },
                                              children: `Throughout my career I’ve always been part of early stage teams and products. In some cases the product did not exist yet, and in others it needed to be reinvented. This is the most important factor to keep in mind when reading through my skill set and experience.`,
                                            }),
                                            s(`br`, {}),
                                            s(`span`, {
                                              style: {
                                                "--framer-text-color": `rgb(110, 110, 110)`,
                                              },
                                              children: `Fundamentally, it means that I have had to develop a more rounded, than usual, skillset as I’ve had to be a UI designer, UX designer, Researcher, Product Manager, and Front-end Developer when needed. I’ve designed and built products from their beginning to their release, to post-release.`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    className: `framer-hxfw5`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nVbKh10Fx: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1200,
                                        intrinsicWidth: 904,
                                        loading: te(
                                          (_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 196
                                        ),
                                        pixelHeight: 1333,
                                        pixelWidth: 2e3,
                                        sizes: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                        src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                        srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                      },
                                    },
                                  },
                                  children: s(qe, {
                                    animate: it,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1200,
                                      intrinsicWidth: 904,
                                      loading: te((_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0),
                                      pixelHeight: 1333,
                                      pixelWidth: 2e3,
                                      sizes: `max((max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px) - 60px) / 3, 1px)`,
                                      src: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg`,
                                      srcSet: `../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo.jpg 512w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-04799d.jpg 1024w,../../assets/images/0MshVJpoobck4c9PXR7ne8hkHo-c2bd22.jpg 2000w`,
                                    },
                                    className: `framer-ob74up`,
                                    "data-framer-appear-id": `ob74up`,
                                    "data-framer-name": `Avatar`,
                                    initial: at,
                                    optimized: !0,
                                  }),
                                }),
                              ],
                            }),
                            u(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-c323ro`,
                              "data-framer-name": `Info`,
                              children: [
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nVbKh10Fx: {
                                      y: (_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 616 + 0 + 0,
                                    },
                                  },
                                  children: s(D, {
                                    height: 21,
                                    y: (_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 460 + 16.5,
                                    children: s(F, {
                                      className: `framer-10jytsv-container`,
                                      nodeId: `O1qswn8Gl`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(B, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `O1qswn8Gl`,
                                        layoutId: `O1qswn8Gl`,
                                        ldb9kzWDh: `10+`,
                                        variant: `IS3qh851o`,
                                        width: `100%`,
                                        xhMKtzNep: `Based in Lisbon`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(`div`, {
                                  className: `framer-1x2taxn`,
                                  "data-framer-name": `Line`,
                                }),
                                u(`div`, {
                                  className: `framer-4c1ahj`,
                                  children: [
                                    s(D, {
                                      children: s(F, {
                                        className: `framer-2682us-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `liNVioRsY`,
                                        scopeId: `urTt7Hepx`,
                                        children: s(z, {
                                          color: `var(--token-0805a32f-5cc3-4482-9c5a-cc418ccbbc52, rgb(130, 255, 28))`,
                                          height: `100%`,
                                          iconSearch: `House`,
                                          iconSelection: `Clock`,
                                          id: `liNVioRsY`,
                                          layoutId: `liNVioRsY`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: { height: `100%`, width: `100%` },
                                          weight: `fill`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    s(D, {
                                      children: s(F, {
                                        className: `framer-1qrhbaa-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `uCzG5u24p`,
                                        scopeId: `urTt7Hepx`,
                                        children: s(V, {
                                          dateSettings: {
                                            dateFormat: `DMY`,
                                            datePosition: `prefix`,
                                            monthFormat: `number`,
                                            showDate: !1,
                                          },
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.2em`,
                                          },
                                          height: `100%`,
                                          id: `uCzG5u24p`,
                                          is24HourFormat: !1,
                                          layoutId: `uCzG5u24p`,
                                          prefixSuffixSettings: {
                                            text: ``,
                                            usePrefixSuffix: `none`,
                                          },
                                          showSeconds: !0,
                                          style: { width: `100%` },
                                          textColor: `var(--token-18734214-9196-4b95-8316-3f14c4f2d288, rgb(194, 194, 194))`,
                                          timezone: `Lisbon/Portugal`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-19xl1ua`,
                                  "data-framer-name": `Line`,
                                }),
                                s(ae, {
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
                                    s(R, {
                                      breakpoint: C,
                                      overrides: {
                                        nVbKh10Fx: {
                                          y: (_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 616 + 0 + 136,
                                        },
                                      },
                                      children: s(D, {
                                        height: 54,
                                        y: (_?.y || 0) + 0 + 0 + 0 + 0 + 0 + 460 + 0,
                                        children: s(F, {
                                          className: `framer-fqfi9h-container`,
                                          nodeId: `MoVUDOyUT`,
                                          scopeId: `urTt7Hepx`,
                                          children: s(R, {
                                            breakpoint: C,
                                            overrides: {
                                              nSnTKzOm3: { xLMsDJR23: e[1] },
                                              nVbKh10Fx: { xLMsDJR23: e[2] },
                                            },
                                            children: s(le, {
                                              height: `100%`,
                                              id: `MoVUDOyUT`,
                                              layoutId: `MoVUDOyUT`,
                                              Sg1kz8pun: `Let's Talk`,
                                              t_K2Y1BU0: `ArrowRight`,
                                              variant: `nzlXRtqUW`,
                                              width: `100%`,
                                              xLMsDJR23: e[0],
                                              XzlCbXnL2: !0,
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
                    s(p.section, {
                      className: `framer-1sx61om`,
                      "data-framer-name": `Experience`,
                      layout: M,
                      children: s(`div`, {
                        className: `framer-1wv60cy`,
                        "data-framer-name": `Container`,
                        children: u(`div`, {
                          className: `framer-v87zof`,
                          "data-framer-name": `Content`,
                          children: [
                            u(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-103dngk`,
                              "data-framer-name": `Title`,
                              children: [
                                s(T, {
                                  __fromCanvasComponent: !0,
                                  children: s(a, {
                                    children: s(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: `My Experience`,
                                    }),
                                  }),
                                  className: `framer-aa41rq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(`div`, {
                                  className: `framer-h6tvyx`,
                                  "data-framer-name": `Line`,
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 0 + 13.5,
                                    },
                                    nVbKh10Fx: {
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 0 + 0 + 81,
                                    },
                                  },
                                  children: s(D, {
                                    height: 21,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 0 + 13.5,
                                    children: s(F, {
                                      className: `framer-19rizpb-container`,
                                      nodeId: `DS0uh1qSR`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(B, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `DS0uh1qSR`,
                                        layoutId: `DS0uh1qSR`,
                                        ldb9kzWDh: `10+`,
                                        variant: `VEKXQeDHX`,
                                        width: `100%`,
                                        xhMKtzNep: `Years of Experience`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            u(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-yvy9wz`,
                              "data-framer-name": `Experience`,
                              children: [
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 0,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 0,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 0,
                                    children: s(F, {
                                      className: `framer-lwzzba-container`,
                                      nodeId: `JlOX57Qzx`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: ``,
                                        height: `100%`,
                                        id: `JlOX57Qzx`,
                                        l3ljIiqFZ: `Staff Product Designer for Emerging Technologies`,
                                        layoutId: `JlOX57Qzx`,
                                        O3LJFMByd: `Snyk`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2026 – Present`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 87,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 87,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 87,
                                    children: s(F, {
                                      className: `framer-1tj8533-container`,
                                      nodeId: `FjeeggPIS`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `At PagerDuty, my focus has been on pioneering AI-driven product design, integrating Generative AI into our product specifically imrpoving end-to-end incident management capabilities. Designed AI-UX patterns to be adopted across all pagerduty product. PagerDuty Advance showcases my expertise, where I've led the design of Advance AI Agents, significantly enhancing Enterprise Incident Management efficiency. `,
                                        height: `100%`,
                                        id: `FjeeggPIS`,
                                        l3ljIiqFZ: `Staff Product Designer for AI-First (PagerDuty Advance)`,
                                        layoutId: `FjeeggPIS`,
                                        O3LJFMByd: `PagerDuty`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2023 – 2026`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 174,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 174,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 174,
                                    children: s(F, {
                                      className: `framer-3st0ru-container`,
                                      nodeId: `biLEBXlR0`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `In my role as Design Lead/Manager at Cozero, I was responsible for defining design metrics and OKRs to measure impact and future opportunities. I led the product design role definition and career development for the design team, creating and maintaining core design systems' components to streamline design processes.`,
                                        height: `100%`,
                                        id: `biLEBXlR0`,
                                        l3ljIiqFZ: `Design Lead Manager`,
                                        layoutId: `biLEBXlR0`,
                                        O3LJFMByd: `Cozero IO`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2021 – 2023`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 261,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 261,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 261,
                                    children: s(F, {
                                      className: `framer-eavxjq-container`,
                                      nodeId: `CHy6ryRAo`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `December'19 until April '20 I was working on the Retail Panel which was our main SaaS for boutiques.
April'20 started working on B2C, by improving trouva.com and creating new products like:
- https://www.trouva.com/frames
- https://www.trouva.com/stories`,
                                        height: `100%`,
                                        id: `CHy6ryRAo`,
                                        l3ljIiqFZ: `Lead Product Designer`,
                                        layoutId: `CHy6ryRAo`,
                                        O3LJFMByd: `Trouva`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2019 – 2021`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 348,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 348,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 348,
                                    children: s(F, {
                                      className: `framer-gvz2in-container`,
                                      nodeId: `UyMxkoP7G`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `In my position as Head of Design at Leadzai, I spearheaded the definition of product strategy through usability tests and user interviews. I successfully validated proto personas and created product personas to drive targeted user experience. Additionally, I designed high-fidelity mockups and built prototypes to support product development efforts.`,
                                        height: `100%`,
                                        id: `UyMxkoP7G`,
                                        l3ljIiqFZ: `Lead Product Designer`,
                                        layoutId: `UyMxkoP7G`,
                                        O3LJFMByd: `Leadzai (former Advertio)`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2017 – 2019`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 435,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 435,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 435,
                                    children: s(F, {
                                      className: `framer-u3glyd-container`,
                                      nodeId: `Ve8XwmK9c`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `In my role as a Product Manager at 360imprimir in Lisboa, I oversaw A&B Testing, Personalisation, and CRO efforts to enhance the website's performance and user engagement. I also played a key role in defining Product Specifications and collaborating with IT teams using SCRUM Sprints Methodology for project execution.`,
                                        height: `100%`,
                                        id: `Ve8XwmK9c`,
                                        l3ljIiqFZ: `Product Manager (CRO)`,
                                        layoutId: `Ve8XwmK9c`,
                                        O3LJFMByd: `Bizay (360 Imprimir)`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2017 – 2018`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 522,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 522,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 522,
                                    children: s(F, {
                                      className: `framer-1a3xc0q-container`,
                                      nodeId: `AaASasiFu`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `I played a key role in the remote redesign of the Moviepass app for IOS, working closely with stakeholders to enhance user experience through high fidelity mockups and user flow optimization. Utilizing Zeplin and Flinto, I facilitated remote design handoff, ensuring a smooth transition from ideation to validation.`,
                                        height: `100%`,
                                        id: `AaASasiFu`,
                                        l3ljIiqFZ: `MoviePass logo Product Designer Remote (Contractor)`,
                                        layoutId: `AaASasiFu`,
                                        O3LJFMByd: `Moviepass`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2017 – 2018`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 609,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 609,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 609,
                                    children: s(F, {
                                      className: `framer-1yxrfll-container`,
                                      nodeId: `obunDPSrX`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `Designed UX & UI for NOS.pt and clienteNOS projects at NOS SGPS.
Collaborated with the User Experience team to enhance user experience.
Implemented innovative design solutions to improve customer engagement.
Utilized skills in UX design, UI design, and project management.`,
                                        height: `100%`,
                                        id: `obunDPSrX`,
                                        l3ljIiqFZ: `Product Designer`,
                                        layoutId: `obunDPSrX`,
                                        O3LJFMByd: `NOS SGPS `,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2015 – 2016`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 696,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 696,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 696,
                                    children: s(F, {
                                      className: `framer-tzrxrf-container`,
                                      nodeId: `hFotY8Pyh`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `Consultant for clients such as:
Caixa Geral de Depósitos, SIBS, Comboios de Portugal, Victoria Seguros, Portuguese Paralympic Committee,  La Caixa, SAREB`,
                                        height: `100%`,
                                        id: `hFotY8Pyh`,
                                        l3ljIiqFZ: `UX/UI , Front-end Developer`,
                                        layoutId: `hFotY8Pyh`,
                                        O3LJFMByd: `VILT Group`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2013 – 2015`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 514 + 0 + 100 + 0 + 102 + 0 + 783,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 806 + 0 + 0 + 60 + 0 + 156 + 0 + 783,
                                    },
                                  },
                                  children: s(D, {
                                    height: 55,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 519 + 0 + 100 + 0 + 102 + 0 + 783,
                                    children: s(F, {
                                      className: `framer-11eiqkq-container`,
                                      nodeId: `uPfzbnLNy`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(K, {
                                        EWZrRoAFN: `UI Designer (Adobe Flash, Photoshop , Illustrator) Frontend Developer ( jQuery , Javascript) Backend Developer ( PHP + MYSQL)

Projects: Conimbriga Construções, Borrelho wines, Scoutness Wordpress blog, SDT Soluções Integradas SA, Vodafone DHU)`,
                                        height: `100%`,
                                        id: `uPfzbnLNy`,
                                        l3ljIiqFZ: `UX/UI , Front-end Developer Contractor`,
                                        layoutId: `uPfzbnLNy`,
                                        O3LJFMByd: `dizparada.com`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2013 – 2015`,
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
                    s(p.section, {
                      className: `framer-4ykxm9`,
                      "data-framer-name": `Awards`,
                      layout: M,
                      children: s(`div`, {
                        className: `framer-1dc00p9`,
                        "data-framer-name": `Container`,
                        children: u(`div`, {
                          className: `framer-18vnoj1`,
                          "data-framer-name": `Content`,
                          children: [
                            u(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-zwngkm`,
                              "data-framer-name": `Title`,
                              children: [
                                s(T, {
                                  __fromCanvasComponent: !0,
                                  children: s(a, {
                                    children: s(`h2`, {
                                      className: `framer-styles-preset-nizf32`,
                                      "data-styles-preset": `fmOVsh00u`,
                                      children: `My Awards`,
                                    }),
                                  }),
                                  className: `framer-7rdf40`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(`div`, {
                                  className: `framer-1objguz`,
                                  "data-framer-name": `Line`,
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 1654 + 0 + 100 + 0 + 0 + 13.5,
                                    },
                                    nVbKh10Fx: {
                                      y: (_?.y || 0) + 0 + 1920 + 0 + 0 + 60 + 0 + 0 + 0 + 81,
                                    },
                                  },
                                  children: s(D, {
                                    height: 21,
                                    y: (_?.y || 0) + 0 + 1659 + 0 + 100 + 0 + 0 + 13.5,
                                    children: s(F, {
                                      className: `framer-j7d1qe-container`,
                                      nodeId: `iXsQ2k95i`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(B, {
                                        fviPiX_DE: `MapPin`,
                                        height: `100%`,
                                        id: `iXsQ2k95i`,
                                        layoutId: `iXsQ2k95i`,
                                        ldb9kzWDh: `6`,
                                        variant: `VEKXQeDHX`,
                                        width: `100%`,
                                        xhMKtzNep: `Awards & Recognitions`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            u(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Z,
                              __framer__exit: Q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-es2coy`,
                              "data-framer-name": `Awards`,
                              children: [
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 1654 + 0 + 100 + 0 + 102 + 0 + 0,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 1920 + 0 + 0 + 60 + 0 + 156 + 0 + 0,
                                    },
                                  },
                                  children: s(D, {
                                    height: 28,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 1659 + 0 + 100 + 0 + 102 + 0 + 0,
                                    children: s(F, {
                                      className: `framer-1izfjh5-container`,
                                      nodeId: `tl1LmqsFJ`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(J, {
                                        height: `100%`,
                                        id: `tl1LmqsFJ`,
                                        l3ljIiqFZ: `Issued by Pagerduty · Mar 2025`,
                                        layoutId: `tl1LmqsFJ`,
                                        O3LJFMByd: ` Pagerduty Champion`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2025`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 1654 + 0 + 100 + 0 + 102 + 0 + 60,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 1920 + 0 + 0 + 60 + 0 + 156 + 0 + 60,
                                    },
                                  },
                                  children: s(D, {
                                    height: 28,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 1659 + 0 + 100 + 0 + 102 + 0 + 60,
                                    children: s(F, {
                                      className: `framer-ohcbb7-container`,
                                      nodeId: `Y63DA4Gn7`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(J, {
                                        height: `100%`,
                                        id: `Y63DA4Gn7`,
                                        l3ljIiqFZ: `Issued by Trouva`,
                                        layoutId: `Y63DA4Gn7`,
                                        O3LJFMByd: ` Trouva Award`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2020`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 1654 + 0 + 100 + 0 + 102 + 0 + 120,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 1920 + 0 + 0 + 60 + 0 + 156 + 0 + 120,
                                    },
                                  },
                                  children: s(D, {
                                    height: 28,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 1659 + 0 + 100 + 0 + 102 + 0 + 120,
                                    children: s(F, {
                                      className: `framer-rqlmv1-container`,
                                      nodeId: `NgTmTfvKI`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(J, {
                                        height: `100%`,
                                        id: `NgTmTfvKI`,
                                        l3ljIiqFZ: `Issued by VILT`,
                                        layoutId: `NgTmTfvKI`,
                                        O3LJFMByd: ` VILT Award`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2013`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  breakpoint: C,
                                  overrides: {
                                    nSnTKzOm3: {
                                      y: (_?.y || 0) + 0 + 1654 + 0 + 100 + 0 + 102 + 0 + 180,
                                    },
                                    nVbKh10Fx: {
                                      width: `max(min(${_?.width || `100vw`}, 1440px), 1px)`,
                                      y: (_?.y || 0) + 0 + 1920 + 0 + 0 + 60 + 0 + 156 + 0 + 180,
                                    },
                                  },
                                  children: s(D, {
                                    height: 28,
                                    width: `max(min(max(${_?.width || `100vw`}, 1px), 1440px), 1px)`,
                                    y: (_?.y || 0) + 0 + 1659 + 0 + 100 + 0 + 102 + 0 + 180,
                                    children: s(F, {
                                      className: `framer-1lcs944-container`,
                                      nodeId: `MNwtJJMlB`,
                                      scopeId: `urTt7Hepx`,
                                      children: s(J, {
                                        height: `100%`,
                                        id: `MNwtJJMlB`,
                                        l3ljIiqFZ: `Issued by Sapo Labs`,
                                        layoutId: `MNwtJJMlB`,
                                        O3LJFMByd: ` Template available on Sapo Blogs`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                        zIgs_TZYX: `2009`,
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
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-alNG3.framer-11c6txp, .framer-alNG3 .framer-11c6txp { display: block; }`,
        `.framer-alNG3.framer-1ui5brl { align-content: center; align-items: center; background-color: var(--token-8e8e89f4-b914-432c-8fed-dad01a5f9ac6, #0f0f0f); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-alNG3 .framer-pzv1bn, .framer-alNG3 .framer-1sx61om, .framer-alNG3 .framer-4ykxm9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-alNG3 .framer-1m3rtc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 0px 5px 0px; position: relative; width: 1px; }`,
        `.framer-alNG3 .framer-xeihlw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-alNG3 .framer-xaf94g { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-alNG3 .framer-1t5rr3t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-alNG3 .framer-hxfw5 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-alNG3 .framer-ob74up { aspect-ratio: 0.9805555555555555 / 1; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: 0.5 0 0px; height: var(--framer-aspect-ratio-supported, 361px); overflow: visible; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-alNG3 .framer-c323ro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-alNG3 .framer-10jytsv-container, .framer-alNG3 .framer-fqfi9h-container, .framer-alNG3 .framer-19rizpb-container, .framer-alNG3 .framer-j7d1qe-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-alNG3 .framer-1x2taxn, .framer-alNG3 .framer-19xl1ua { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-alNG3 .framer-4c1ahj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 17px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-alNG3 .framer-2682us-container { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-alNG3 .framer-1qrhbaa-container { flex: none; height: auto; position: relative; width: 103px; }`,
        `.framer-alNG3 .framer-1wv60cy, .framer-alNG3 .framer-1dc00p9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-alNG3 .framer-v87zof, .framer-alNG3 .framer-18vnoj1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-alNG3 .framer-103dngk, .framer-alNG3 .framer-zwngkm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-alNG3 .framer-aa41rq, .framer-alNG3 .framer-7rdf40 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-alNG3 .framer-h6tvyx, .framer-alNG3 .framer-1objguz { background-color: var(--token-90aeac59-b63b-4654-ad65-d29b67fece14, #262626); flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 1px; z-index: 1; }`,
        `.framer-alNG3 .framer-yvy9wz, .framer-alNG3 .framer-es2coy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-alNG3 .framer-lwzzba-container, .framer-alNG3 .framer-1tj8533-container, .framer-alNG3 .framer-3st0ru-container, .framer-alNG3 .framer-eavxjq-container, .framer-alNG3 .framer-gvz2in-container, .framer-alNG3 .framer-u3glyd-container, .framer-alNG3 .framer-1a3xc0q-container, .framer-alNG3 .framer-1yxrfll-container, .framer-alNG3 .framer-tzrxrf-container, .framer-alNG3 .framer-11eiqkq-container, .framer-alNG3 .framer-1izfjh5-container, .framer-alNG3 .framer-ohcbb7-container, .framer-alNG3 .framer-rqlmv1-container, .framer-alNG3 .framer-1lcs944-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...be,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-alNG3.framer-1ui5brl { width: 810px; } .framer-alNG3 .framer-1m3rtc { padding: 0px; } .framer-alNG3 .framer-ob74up { height: var(--framer-aspect-ratio-supported, 235px); }}`,
        `@media (max-width: 809.98px) { .framer-alNG3.framer-1ui5brl { width: 390px; } .framer-alNG3 .framer-pzv1bn, .framer-alNG3 .framer-xaf94g, .framer-alNG3 .framer-1sx61om, .framer-alNG3 .framer-4ykxm9 { flex-direction: column; } .framer-alNG3 .framer-1m3rtc { flex: none; padding: 0px; width: 100%; } .framer-alNG3 .framer-xeihlw { gap: 60px; } .framer-alNG3 .framer-1t5rr3t, .framer-alNG3 .framer-1x2taxn, .framer-alNG3 .framer-19xl1ua, .framer-alNG3 .framer-h6tvyx, .framer-alNG3 .framer-1objguz { flex: none; width: 100%; } .framer-alNG3 .framer-ob74up { flex: none; height: var(--framer-aspect-ratio-supported, 365px); width: 100%; } .framer-alNG3 .framer-c323ro { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; } .framer-alNG3 .framer-1wv60cy, .framer-alNG3 .framer-1dc00p9 { flex: none; padding: 60px 0px 60px 0px; width: 100%; } .framer-alNG3 .framer-103dngk, .framer-alNG3 .framer-zwngkm { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-alNG3 .framer-aa41rq, .framer-alNG3 .framer-7rdf40 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }}`,
      ],
      `framer-alNG3`
    )),
    (lt = $),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 4195, width: 1200 }),
    S(
      $,
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Je,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...$e,
        ...b(xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ut = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerurTt7Hepx`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerIntrinsicHeight: `4195`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nSnTKzOm3":{"layout":["fixed","auto"]},"nVbKh10Fx":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ut as __FramerMetadata__, lt as default };
//# sourceMappingURL=5xjmGozagIuxhco2AnLNCiYplVN3CNCEl_19kKko8AA.DxK6zqR5.mjs.map
