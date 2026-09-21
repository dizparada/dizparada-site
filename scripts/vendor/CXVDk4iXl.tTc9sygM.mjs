import { t as e } from "./rolldown-runtime.hBrq4iGT.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  h as o,
  k as s,
  o as c,
  v as l,
} from "./react.BUXbFMJS.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.CLjJX74m.mjs";
import {
  B as m,
  D as h,
  N as g,
  O as _,
  St as v,
  W as y,
  Y as b,
  a as x,
  g as S,
  ht as C,
  k as w,
  s as T,
  st as E,
  xt as D,
} from "./framer.BQfDiYYl.mjs";
import { i as O, r as k } from "./shared-lib.DjXQ4AZU.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (c(),
      b(),
      p(),
      n(),
      O(),
      (j = m(k)),
      (M = y(k)),
      (N = { crCFcRWYW: { hover: !0 } }),
      (P = `framer-h36bc`),
      (F = { crCFcRWYW: `framer-v-1rk8c2q` }),
      (I = { bounce: 0.1, delay: 0, duration: 0.7, type: `spring` }),
      (L = ({ value: e, children: n }) => {
        let r = s(d),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(d.Provider, { value: o, children: n });
      }),
      (R = u.create(i)),
      (z = ({ color: e, height: t, icon: n, id: r, link: i, width: a, ...o }) => ({
        ...o,
        AIGpMiTbN: n ?? o.AIGpMiTbN ?? `XLogo`,
        nD6_0qOiV:
          e ??
          o.nD6_0qOiV ??
          `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138))`,
        xLMsDJR23: i ?? o.xLMsDJR23,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = v(
        o(function (e, t) {
          let { activeLocale: n, setLocale: i } = C(),
            {
              style: o,
              className: s,
              layoutId: c,
              variant: d,
              AIGpMiTbN: p,
              xLMsDJR23: m,
              nD6_0qOiV: _,
              ...v
            } = z(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: O,
              isLoading: j,
              setGestureState: M,
              setVariant: V,
              variants: H,
            } = D({
              defaultVariant: `crCFcRWYW`,
              enabledGestures: N,
              variant: d,
              variantClassNames: F,
            }),
            U = B(e, H),
            W = g(P),
            G = r(null),
            K = l();
          return (
            E(),
            a(f, {
              id: c ?? K,
              children: a(R, {
                animate: H,
                initial: !1,
                children: a(L, {
                  value: I,
                  children: a(S, {
                    href: m,
                    motionChild: !0,
                    nodeId: `crCFcRWYW`,
                    children: a(u.a, {
                      ...v,
                      ...T,
                      "aria-label": `Icon button`,
                      className: `${g(W, `framer-1rk8c2q`, s, b)} framer-1ls5h9t`,
                      "data-framer-name": `Default`,
                      layoutDependency: U,
                      layoutId: `crCFcRWYW`,
                      ref: t ?? G,
                      style: { ...o },
                      ...A({ "crCFcRWYW-hover": { "data-framer-name": void 0 } }, y, O),
                      children: a(x, {
                        children: a(h, {
                          className: `framer-1579m0l-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: U,
                          layoutId: `MgnX5lLGE-container`,
                          nodeId: `MgnX5lLGE`,
                          rendersWithMotion: !0,
                          scopeId: `CXVDk4iXl`,
                          children: a(k, {
                            color: _,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: p,
                            id: `MgnX5lLGE`,
                            layoutId: `MgnX5lLGE`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `regular`,
                            width: `100%`,
                            ...A(
                              {
                                "crCFcRWYW-hover": {
                                  color: `var(--token-13361758-5adb-4420-bb6a-5cb00a2062aa, rgb(255, 255, 255))`,
                                },
                              },
                              y,
                              O
                            ),
                          }),
                        }),
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
          `.framer-h36bc.framer-1ls5h9t, .framer-h36bc .framer-1ls5h9t { display: block; }`,
          `.framer-h36bc.framer-1rk8c2q { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; overflow: hidden; padding: 2px; position: relative; text-decoration: none; width: 36px; }`,
          `.framer-h36bc .framer-1579m0l-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-h36bc.framer-1rk8c2q { gap: 0px; } .framer-h36bc.framer-1rk8c2q > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-h36bc.framer-1rk8c2q > :first-child { margin-left: 0px; } .framer-h36bc.framer-1rk8c2q > :last-child { margin-right: 0px; } }`,
        ],
        `framer-h36bc`
      )),
      (H = V),
      (V.displayName = `Icons`),
      (V.defaultProps = { height: 36, width: 36 }),
      w(V, {
        AIGpMiTbN: M?.iconSelection && {
          ...M.iconSelection,
          defaultValue: `XLogo`,
          description: void 0,
          hidden: void 0,
          title: `Icon`,
        },
        xLMsDJR23: { title: `Link`, type: T.Link },
        nD6_0qOiV: {
          defaultValue: `var(--token-63ca5a6b-f322-4500-94a6-d02e48b5fa4d, rgb(138, 138, 138)) /* {"name":"Gray"} */`,
          title: `Color`,
          type: T.Color,
        },
      }),
      _(V, [{ explicitInter: !0, fonts: [] }, ...j], { supportsExplicitInterCodegen: !0 }));
  });
export { U as n, H as t };
//# sourceMappingURL=CXVDk4iXl.tTc9sygM.mjs.map
