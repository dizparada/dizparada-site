import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import { G as t, S as n, Y as r } from "./framer.BQfDiYYl.mjs";
import { i, t as a } from "./PmFmTH0v9.C5XWGSGf.mjs";
function o(e, t) {
  let n = e?.Sv0j4mVcd,
    r = e?.K9HUhzqVL,
    i = e?.s_lBuaFJ7;
  return {
    breakpoints: [
      { hash: `95xtmi`, mediaQuery: `(min-width: 1200px)` },
      { hash: `18lsqjd`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `xzt0zz`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{K9HUhzqVL}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-P6c5z`,
    socialImage: u(i),
    title: `${n === void 0 ? `{{Sv0j4mVcd}}` : l(n)} - Nyx`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new n(),
    s = {
      from: { alias: `eenHqF5o7`, data: a, type: `Collection` },
      select: [
        { collection: `eenHqF5o7`, name: `Sv0j4mVcd`, type: `Identifier` },
        { collection: `eenHqF5o7`, name: `K9HUhzqVL`, type: `Identifier` },
        { collection: `eenHqF5o7`, name: `s_lBuaFJ7`, type: `Identifier` },
      ],
      where: t(e, `eenHqF5o7`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `eenHqF5o7`, data: a, type: `Collection` },
      select: [
        { collection: `eenHqF5o7`, name: `Sv0j4mVcd`, type: `Identifier` },
        { collection: `eenHqF5o7`, name: `K9HUhzqVL`, type: `Identifier` },
        { collection: `eenHqF5o7`, name: `s_lBuaFJ7`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `eenHqF5o7`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f,
  p = e(() => {
    (r(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=eenHqF5o7.C8JjUxI9.mjs.map
