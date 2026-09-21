import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import { A as t, C as n, L as r } from "./react.BUXbFMJS.mjs";
import { C as i, Y as a, s as o } from "./framer.BQfDiYYl.mjs";
var s,
  c,
  l,
  u = e(() => {
    (a(),
      (s = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (c = {
        ...s,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (l = {
        onClick: { type: o.EventHandler },
        onMouseEnter: { type: o.EventHandler },
        onMouseLeave: { type: o.EventHandler },
      }),
      o.Number,
      o.Boolean,
      o.String,
      o.Enum);
  }),
  d = e(() => {
    (a(), n());
  }),
  f = e(() => {
    n();
  }),
  p = e(() => {
    a();
  }),
  m = e(() => {
    a();
  }),
  h = e(() => {
    n();
  }),
  g = e(() => {
    a();
  }),
  _ = e(() => {
    (r(), n());
  }),
  v = e(() => {
    (n(), m());
  }),
  y = e(() => {
    (n(), a(), m(), f());
  }),
  b = e(() => {
    (a(), n(), u());
  });
function x() {
  return t(() => i.current() === i.canvas, []);
}
var S = e(() => {
    (n(), a());
  }),
  C = e(() => {
    n();
  });
function w(e) {
  let {
    borderRadius: n,
    isMixedBorderRadius: r,
    topLeftRadius: i,
    topRightRadius: a,
    bottomRightRadius: o,
    bottomLeftRadius: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${n}px`), [n, r, i, a, o, s]);
}
function T(e) {
  let {
    padding: n,
    paddingPerSide: r,
    paddingTop: i,
    paddingRight: a,
    paddingBottom: o,
    paddingLeft: s,
  } = e;
  return t(() => (r ? `${i}px ${a}px ${o}px ${s}px` : n), [n, r, i, a, o, s]);
}
var E,
  D,
  O = e(() => {
    (n(),
      a(),
      (E = {
        borderRadius: {
          title: `Radius`,
          type: o.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (D = {
        padding: {
          type: o.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }),
  k = e(() => {
    (u(), d(), f(), p(), m(), h(), g(), _(), v(), y(), b(), S(), C(), O());
  }),
  A = e(() => {
    k();
  });
export { w as a, l as c, T as i, c as l, E as n, x as o, D as r, s, A as t };
//# sourceMappingURL=default-utils.js@_0.45.BIBXjq3o.mjs.map
