import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import { G as t, S as n, Y as r } from "./framer.BQfDiYYl.mjs";
import { a as i, r as a } from "./yR6ljnT0S.BQABhoK5.mjs";
function o(e, t) {
  let n = e?.dKH75txM2,
    r = e?.RrL9MZUlt,
    i = e?.G_atTEKXu;
  return {
    breakpoints: [
      { hash: `g96oz3`, mediaQuery: `(min-width: 1200px)` },
      { hash: `feoucj`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `88pn9u`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{RrL9MZUlt}}` : c(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-wh1z3`,
    socialImage: l(i),
    title: `${n === void 0 ? `{{dKH75txM2}}` : c(n)} - Nyx`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let a = new n(),
    s = {
      from: { alias: `et1aPrJnV`, data: i, type: `Collection` },
      select: [
        { collection: `et1aPrJnV`, name: `dKH75txM2`, type: `Identifier` },
        { collection: `et1aPrJnV`, name: `RrL9MZUlt`, type: `Identifier` },
        { collection: `et1aPrJnV`, name: `G_atTEKXu`, type: `Identifier` },
      ],
      where: t(e, `et1aPrJnV`),
    },
    c = await a.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
var c,
  l,
  u,
  d,
  f = e(() => {
    (r(),
      a(),
      (c = (e) => (typeof e == `string` ? e : String(e))),
      (l = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (u = 1),
      (d = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { u as a, o as i, s as n, f as r, d as t };
//# sourceMappingURL=et1aPrJnV.DpLcL6jz.mjs.map
