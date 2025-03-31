(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [117],
  {
    2945: (e, t, n) => {
      'use strict';
      n.d(t, {
        UC: () => rU,
        q7: () => rz,
        W1: () => rK,
        ZL: () => rH,
        bL: () => rW,
        wv: () => rV,
        l9: () => rB,
      });
      var r,
        o,
        i = n(2115),
        a = n.t(i, 2),
        l = n(5155);
      function u(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => i.createContext(e));
            return function (n) {
              let r = n?.[e] || t;
              return i.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let o = i.createContext(r),
                a = n.length;
              n = [...n, r];
              let u = (t) => {
                let { scope: n, children: r, ...u } = t,
                  c = n?.[e]?.[a] || o,
                  s = i.useMemo(() => u, Object.values(u));
                return (0, l.jsx)(c.Provider, { value: s, children: r });
              };
              return (
                (u.displayName = t + 'Provider'),
                [
                  u,
                  function (n, l) {
                    let u = l?.[e]?.[a] || o,
                      c = i.useContext(u);
                    if (c) return c;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return i.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }
      function c(e, t) {
        if ('function' == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function s(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = c(e, t);
              return n || 'function' != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                'function' == typeof n ? n() : c(e[t], null);
              }
            };
        };
      }
      function d(...e) {
        return i.useCallback(s(...e), e);
      }
      var f = i.forwardRef((e, t) => {
        let { children: n, ...r } = e,
          o = i.Children.toArray(n),
          a = o.find(m);
        if (a) {
          let e = a.props.children,
            n = o.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : i.isValidElement(e)
                    ? e.props.children
                    : null
            );
          return (0, l.jsx)(p, {
            ...r,
            ref: t,
            children: i.isValidElement(e) ? i.cloneElement(e, void 0, n) : null,
          });
        }
        return (0, l.jsx)(p, { ...r, ref: t, children: n });
      });
      f.displayName = 'Slot';
      var p = i.forwardRef((e, t) => {
        let { children: n, ...r } = e;
        if (i.isValidElement(n)) {
          let e = (function (e) {
              let t = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
                n = t && 'isReactWarning' in t && t.isReactWarning;
              return n
                ? e.ref
                : (n =
                      (t = Object.getOwnPropertyDescriptor(e, 'ref')?.get) &&
                      'isReactWarning' in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(n),
            o = (function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : 'style' === r
                    ? (n[r] = { ...o, ...i })
                    : 'className' === r &&
                      (n[r] = [o, i].filter(Boolean).join(' '));
              }
              return { ...e, ...n };
            })(r, n.props);
          return (
            n.type !== i.Fragment && (o.ref = t ? s(t, e) : e),
            i.cloneElement(n, o)
          );
        }
        return i.Children.count(n) > 1 ? i.Children.only(null) : null;
      });
      p.displayName = 'SlotClone';
      var v = ({ children: e }) => (0, l.jsx)(l.Fragment, { children: e });
      function m(e) {
        return i.isValidElement(e) && e.type === v;
      }
      function h(e) {
        let t = e + 'CollectionProvider',
          [n, r] = u(t),
          [o, a] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = (e) => {
            let { scope: t, children: n } = e,
              r = i.useRef(null),
              a = i.useRef(new Map()).current;
            return (0, l.jsx)(o, {
              scope: t,
              itemMap: a,
              collectionRef: r,
              children: n,
            });
          };
        c.displayName = t;
        let s = e + 'CollectionSlot',
          p = i.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = d(t, a(s, n).collectionRef);
            return (0, l.jsx)(f, { ref: o, children: r });
          });
        p.displayName = s;
        let v = e + 'CollectionItemSlot',
          m = 'data-radix-collection-item',
          h = i.forwardRef((e, t) => {
            let { scope: n, children: r, ...o } = e,
              u = i.useRef(null),
              c = d(t, u),
              s = a(v, n);
            return (
              i.useEffect(
                () => (
                  s.itemMap.set(u, { ref: u, ...o }),
                  () => void s.itemMap.delete(u)
                )
              ),
              (0, l.jsx)(f, { [m]: '', ref: c, children: r })
            );
          });
        return (
          (h.displayName = v),
          [
            { Provider: c, Slot: p, ItemSlot: h },
            function (t) {
              let n = a(e + 'CollectionConsumer', t);
              return i.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll('['.concat(m, ']')));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ]
        );
      }
      var g = i.createContext(void 0);
      function y(e) {
        let t = i.useContext(g);
        return e || t || 'ltr';
      }
      function w(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      var b = globalThis?.document ? i.useLayoutEffect : () => {},
        x = a['useId'.toString()] || (() => void 0),
        E = 0;
      function R(e) {
        let [t, n] = i.useState(x());
        return (
          b(() => {
            e || n((e) => e ?? String(E++));
          }, [e]),
          e || (t ? `radix-${t}` : '')
        );
      }
      var C = n(7650),
        S = [
          'a',
          'button',
          'div',
          'form',
          'h2',
          'h3',
          'img',
          'input',
          'label',
          'li',
          'nav',
          'ol',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce((e, t) => {
          let n = i.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              i = r ? f : t;
            return (
              'undefined' != typeof window &&
                (window[Symbol.for('radix-ui')] = !0),
              (0, l.jsx)(i, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function M(e, t) {
        e && C.flushSync(() => e.dispatchEvent(t));
      }
      function O(e) {
        let t = i.useRef(e);
        return (
          i.useEffect(() => {
            t.current = e;
          }),
          i.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var P = 'dismissableLayer.update',
        A = i.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        j = i.forwardRef((e, t) => {
          var n, o;
          let {
              disableOutsidePointerEvents: a = !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: s,
              onInteractOutside: f,
              onDismiss: p,
              ...v
            } = e,
            m = i.useContext(A),
            [h, g] = i.useState(null),
            y =
              null !== (o = null == h ? void 0 : h.ownerDocument) &&
              void 0 !== o
                ? o
                : null === (n = globalThis) || void 0 === n
                  ? void 0
                  : n.document,
            [, b] = i.useState({}),
            x = d(t, (e) => g(e)),
            E = Array.from(m.layers),
            [R] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
            C = E.indexOf(R),
            M = h ? E.indexOf(h) : -1,
            j = m.layersWithOutsidePointerEventsDisabled.size > 0,
            k = M >= C,
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = O(e),
                o = i.useRef(!1),
                a = i.useRef(() => {});
              return (
                i.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            N('dismissableLayer.pointerDownOutside', r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        'touch' === e.pointerType
                          ? (n.removeEventListener('click', a.current),
                            (a.current = t),
                            n.addEventListener('click', a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener('click', a.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener('pointerdown', e),
                      n.removeEventListener('click', a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...m.branches].some((e) => e.contains(t));
              !k ||
                n ||
                (null == c || c(e),
                null == f || f(e),
                e.defaultPrevented || null == p || p());
            }, y),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                      ? void 0
                      : t.document,
                r = O(e),
                o = i.useRef(!1);
              return (
                i.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      N(
                        'dismissableLayer.focusOutside',
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener('focusin', e),
                    () => n.removeEventListener('focusin', e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...m.branches].some((e) => e.contains(t)) ||
                (null == s || s(e),
                null == f || f(e),
                e.defaultPrevented || null == p || p());
            }, y);
          return (
            !(function (e, t = globalThis?.document) {
              let n = O(e);
              i.useEffect(() => {
                let e = (e) => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e, { capture: !0 }),
                  () => t.removeEventListener('keydown', e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              M === m.layers.size - 1 &&
                (null == u || u(e),
                !e.defaultPrevented && p && (e.preventDefault(), p()));
            }, y),
            i.useEffect(() => {
              if (h)
                return (
                  a &&
                    (0 === m.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = y.body.style.pointerEvents),
                      (y.body.style.pointerEvents = 'none')),
                    m.layersWithOutsidePointerEventsDisabled.add(h)),
                  m.layers.add(h),
                  T(),
                  () => {
                    a &&
                      1 === m.layersWithOutsidePointerEventsDisabled.size &&
                      (y.body.style.pointerEvents = r);
                  }
                );
            }, [h, y, a, m]),
            i.useEffect(
              () => () => {
                h &&
                  (m.layers.delete(h),
                  m.layersWithOutsidePointerEventsDisabled.delete(h),
                  T());
              },
              [h, m]
            ),
            i.useEffect(() => {
              let e = () => b({});
              return (
                document.addEventListener(P, e),
                () => document.removeEventListener(P, e)
              );
            }, []),
            (0, l.jsx)(S.div, {
              ...v,
              ref: x,
              style: {
                pointerEvents: j ? (k ? 'auto' : 'none') : void 0,
                ...e.style,
              },
              onFocusCapture: w(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: w(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: w(
                e.onPointerDownCapture,
                L.onPointerDownCapture
              ),
            })
          );
        });
      function T() {
        let e = new CustomEvent(P);
        document.dispatchEvent(e);
      }
      function N(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? M(i, a) : i.dispatchEvent(a);
      }
      (j.displayName = 'DismissableLayer'),
        (i.forwardRef((e, t) => {
          let n = i.useContext(A),
            r = i.useRef(null),
            o = d(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, l.jsx)(S.div, { ...e, ref: o })
          );
        }).displayName = 'DismissableLayerBranch');
      var k = 0;
      function L() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.outline = 'none'),
          (e.style.opacity = '0'),
          (e.style.position = 'fixed'),
          (e.style.pointerEvents = 'none'),
          e
        );
      }
      var D = 'focusScope.autoFocusOnMount',
        I = 'focusScope.autoFocusOnUnmount',
        F = { bubbles: !1, cancelable: !0 },
        _ = i.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...u
            } = e,
            [c, s] = i.useState(null),
            f = O(o),
            p = O(a),
            v = i.useRef(null),
            m = d(t, (e) => s(e)),
            h = i.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          i.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (h.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (v.current = t)
                    : B(v.current, { select: !0 });
                },
                t = function (e) {
                  if (h.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || B(v.current, { select: !0 });
                };
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && B(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, h.paused]),
            i.useEffect(() => {
              if (c) {
                H.add(h);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(D, F);
                  c.addEventListener(D, f),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (B(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        W(c).filter((e) => 'A' !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && B(c));
                }
                return () => {
                  c.removeEventListener(D, f),
                    setTimeout(() => {
                      let t = new CustomEvent(I, F);
                      c.addEventListener(I, p),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          B(null != e ? e : document.body, { select: !0 }),
                        c.removeEventListener(I, p),
                        H.remove(h);
                    }, 0);
                };
              }
            }, [c, f, p, h]);
          let g = i.useCallback(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = W(e);
                    return [K(t, e), K(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && B(i, { select: !0 }))
                    : (e.preventDefault(), n && B(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, h.paused]
          );
          return (0, l.jsx)(S.div, {
            tabIndex: -1,
            ...u,
            ref: m,
            onKeyDown: g,
          });
        });
      function W(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function K(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function B(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select();
        }
      }
      _.displayName = 'FocusScope';
      var H = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = U(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null === (n = (e = U(e, t))[0]) || void 0 === n || n.resume();
          },
        };
      })();
      function U(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let z = ['top', 'right', 'bottom', 'left'],
        V = Math.min,
        X = Math.max,
        G = Math.round,
        Y = Math.floor,
        $ = (e) => ({ x: e, y: e }),
        q = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        Z = { start: 'end', end: 'start' };
      function J(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function Q(e) {
        return e.split('-')[0];
      }
      function ee(e) {
        return e.split('-')[1];
      }
      function et(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function en(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function er(e) {
        return ['top', 'bottom'].includes(Q(e)) ? 'y' : 'x';
      }
      function eo(e) {
        return e.replace(/start|end/g, (e) => Z[e]);
      }
      function ei(e) {
        return e.replace(/left|right|bottom|top/g, (e) => q[e]);
      }
      function ea(e) {
        return 'number' != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function el(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function eu(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          a = er(t),
          l = et(er(t)),
          u = en(l),
          c = Q(t),
          s = 'y' === a,
          d = o.x + o.width / 2 - i.width / 2,
          f = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (c) {
          case 'top':
            r = { x: d, y: o.y - i.height };
            break;
          case 'bottom':
            r = { x: d, y: o.y + o.height };
            break;
          case 'right':
            r = { x: o.x + o.width, y: f };
            break;
          case 'left':
            r = { x: o.x - i.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (ee(t)) {
          case 'start':
            r[l] -= p * (n && s ? -1 : 1);
            break;
          case 'end':
            r[l] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let ec = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: i = [],
            platform: a,
          } = n,
          l = i.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = eu(c, r, u),
          f = r,
          p = {},
          v = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: i, fn: m } = l[n],
            {
              x: h,
              y: g,
              data: y,
              reset: w,
            } = await m({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (s = null != h ? h : s),
            (d = null != g ? g : d),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              v <= 50 &&
              (v++,
              'object' == typeof w &&
                (w.placement && (f = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: d } = eu(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function es(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: a, elements: l, strategy: u } = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: d = 'floating',
            altBoundary: f = !1,
            padding: p = 0,
          } = J(t, e),
          v = ea(p),
          m = l[f ? ('floating' === d ? 'reference' : 'floating') : d],
          h = el(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          g =
            'floating' === d
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(l.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = el(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g
          );
        return {
          top: (h.top - b.top + v.top) / w.y,
          bottom: (b.bottom - h.bottom + v.bottom) / w.y,
          left: (h.left - b.left + v.left) / w.x,
          right: (b.right - h.right + v.right) / w.x,
        };
      }
      function ed(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function ef(e) {
        return z.some((t) => e[t] >= 0);
      }
      async function ep(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          a = Q(n),
          l = ee(n),
          u = 'y' === er(n),
          c = ['left', 'top'].includes(a) ? -1 : 1,
          s = i && u ? -1 : 1,
          d = J(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: v,
          } = 'number' == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          l && 'number' == typeof v && (p = 'end' === l ? -1 * v : v),
          u ? { x: p * s, y: f * c } : { x: f * c, y: p * s }
        );
      }
      function ev() {
        return 'undefined' != typeof window;
      }
      function em(e) {
        return ey(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function eh(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function eg(e) {
        var t;
        return null ==
          (t = (ey(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function ey(e) {
        return !!ev() && (e instanceof Node || e instanceof eh(e).Node);
      }
      function ew(e) {
        return !!ev() && (e instanceof Element || e instanceof eh(e).Element);
      }
      function eb(e) {
        return (
          !!ev() && (e instanceof HTMLElement || e instanceof eh(e).HTMLElement)
        );
      }
      function ex(e) {
        return (
          !!ev() &&
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof eh(e).ShadowRoot)
        );
      }
      function eE(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = eO(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !['inline', 'contents'].includes(o)
        );
      }
      function eR(e) {
        return [':popover-open', ':modal'].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eC(e) {
        let t = eS(),
          n = ew(e) ? eO(e) : e;
        return (
          ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(
            (e) => !!n[e] && 'none' !== n[e]
          ) ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          [
            'transform',
            'translate',
            'scale',
            'rotate',
            'perspective',
            'filter',
          ].some((e) => (n.willChange || '').includes(e)) ||
          ['paint', 'layout', 'strict', 'content'].some((e) =>
            (n.contain || '').includes(e)
          )
        );
      }
      function eS() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function eM(e) {
        return ['html', 'body', '#document'].includes(em(e));
      }
      function eO(e) {
        return eh(e).getComputedStyle(e);
      }
      function eP(e) {
        return ew(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function eA(e) {
        if ('html' === em(e)) return e;
        let t = e.assignedSlot || e.parentNode || (ex(e) && e.host) || eg(e);
        return ex(t) ? t.host : t;
      }
      function ej(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = eA(t);
            return eM(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eb(n) && eE(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = eh(o);
        if (i) {
          let e = eT(a);
          return t.concat(
            a,
            a.visualViewport || [],
            eE(o) ? o : [],
            e && n ? ej(e) : []
          );
        }
        return t.concat(o, ej(o, [], n));
      }
      function eT(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function eN(e) {
        let t = eO(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = eb(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          l = G(n) !== i || G(r) !== a;
        return l && ((n = i), (r = a)), { width: n, height: r, $: l };
      }
      function ek(e) {
        return ew(e) ? e : e.contextElement;
      }
      function eL(e) {
        let t = ek(e);
        if (!eb(t)) return $(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = eN(t),
          a = (i ? G(n.width) : n.width) / r,
          l = (i ? G(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let eD = $(0);
      function eI(e) {
        let t = eh(e);
        return eS() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eD;
      }
      function eF(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          a = ek(e),
          l = $(1);
        t && (r ? ew(r) && (l = eL(r)) : (l = eL(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === eh(a)) && o)
            ? eI(a)
            : $(0),
          c = (i.left + u.x) / l.x,
          s = (i.top + u.y) / l.y,
          d = i.width / l.x,
          f = i.height / l.y;
        if (a) {
          let e = eh(a),
            t = r && ew(r) ? eh(r) : r,
            n = e,
            o = eT(n);
          for (; o && r && t !== n; ) {
            let e = eL(o),
              t = o.getBoundingClientRect(),
              r = eO(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += i),
              (s += a),
              (o = eT((n = eh(o))));
          }
        }
        return el({ width: d, height: f, x: c, y: s });
      }
      function e_(e, t) {
        let n = eP(e).scrollLeft;
        return t ? t.left + n : eF(eg(e)).left + n;
      }
      function eW(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : e_(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function eK(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            let n = eh(e),
              r = eg(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              (i = o.width), (a = o.height);
              let e = eS();
              (!e || (e && 'fixed' === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: a, x: l, y: u };
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            let t = eg(e),
              n = eP(e),
              r = e.ownerDocument.body,
              o = X(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = X(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + e_(e),
              l = -n.scrollTop;
            return (
              'rtl' === eO(r).direction &&
                (a += X(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: l }
            );
          })(eg(e));
        else if (ew(t))
          r = (function (e, t) {
            let n = eF(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = eb(e) ? eL(e) : $(1),
              a = e.clientWidth * i.x,
              l = e.clientHeight * i.y;
            return { width: a, height: l, x: o * i.x, y: r * i.y };
          })(t, n);
        else {
          let n = eI(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return el(r);
      }
      function eB(e) {
        return 'static' === eO(e).position;
      }
      function eH(e, t) {
        if (!eb(e) || 'fixed' === eO(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return eg(e) === n && (n = n.ownerDocument.body), n;
      }
      function eU(e, t) {
        let n = eh(e);
        if (eR(e)) return n;
        if (!eb(e)) {
          let t = eA(e);
          for (; t && !eM(t); ) {
            if (ew(t) && !eB(t)) return t;
            t = eA(t);
          }
          return n;
        }
        let r = eH(e, t);
        for (; r && ['table', 'td', 'th'].includes(em(r)) && eB(r); )
          r = eH(r, t);
        return r && eM(r) && eB(r) && !eC(r)
          ? n
          : r ||
              (function (e) {
                let t = eA(e);
                for (; eb(t) && !eM(t); ) {
                  if (eC(t)) return t;
                  if (eR(t)) break;
                  t = eA(t);
                }
                return null;
              })(e) ||
              n;
      }
      let ez = async function (e) {
          let t = this.getOffsetParent || eU,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = eb(t),
                o = eg(t),
                i = 'fixed' === n,
                a = eF(e, !0, i, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                u = $(0);
              if (r || (!r && !i)) {
                if ((('body' !== em(t) || eE(o)) && (l = eP(t)), r)) {
                  let e = eF(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = e_(o));
              }
              let c = !o || r || i ? $(0) : eW(o, l);
              return {
                x: a.left + l.scrollLeft - u.x - c.x,
                y: a.top + l.scrollTop - u.y - c.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eV = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = 'fixed' === o,
              a = eg(r),
              l = !!t && eR(t.floating);
            if (r === a || (l && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = $(1),
              s = $(0),
              d = eb(r);
            if (
              (d || (!d && !i)) &&
              (('body' !== em(r) || eE(a)) && (u = eP(r)), eb(r))
            ) {
              let e = eF(r);
              (c = eL(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            let f = !a || d || i ? $(0) : eW(a, u, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y + f.y,
            };
          },
          getDocumentElement: eg,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...('clippingAncestors' === n
                  ? eR(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = ej(e, [], !1).filter(
                            (e) => ew(e) && 'body' !== em(e)
                          ),
                          o = null,
                          i = 'fixed' === eO(e).position,
                          a = i ? eA(e) : e;
                        for (; ew(a) && !eM(a); ) {
                          let t = eO(a),
                            n = eC(a);
                          n || 'fixed' !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    'static' === t.position &&
                                    !!o &&
                                    ['absolute', 'fixed'].includes(
                                      o.position
                                    )) ||
                                  (eE(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = eA(t);
                                      return (
                                        !(r === n || !ew(r) || eM(r)) &&
                                        ('fixed' === eO(r).position || e(r, n))
                                      );
                                    })(e, a))
                            )
                              ? (r = r.filter((e) => e !== a))
                              : (o = t),
                            (a = eA(a));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = i[0],
              l = i.reduce(
                (e, n) => {
                  let r = eK(t, n, o);
                  return (
                    (e.top = X(r.top, e.top)),
                    (e.right = V(r.right, e.right)),
                    (e.bottom = V(r.bottom, e.bottom)),
                    (e.left = X(r.left, e.left)),
                    e
                  );
                },
                eK(t, a, o)
              );
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: eU,
          getElementRects: ez,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = eN(e);
            return { width: t, height: n };
          },
          getScale: eL,
          isElement: ew,
          isRTL: function (e) {
            return 'rtl' === eO(e).direction;
          },
        };
      function eX(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eG = (e) => ({
          name: 'arrow',
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: l,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = J(e, t) || {};
            if (null == c) return {};
            let d = ea(s),
              f = { x: n, y: r },
              p = et(er(o)),
              v = en(p),
              m = await a.getDimensions(c),
              h = 'y' === p,
              g = h ? 'clientHeight' : 'clientWidth',
              y = i.reference[v] + i.reference[p] - f[p] - i.floating[v],
              w = f[p] - i.reference[p],
              b = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              x = b ? b[g] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
              (x = l.floating[g] || i.floating[v]);
            let E = x / 2 - m[v] / 2 - 1,
              R = V(d[h ? 'top' : 'left'], E),
              C = V(d[h ? 'bottom' : 'right'], E),
              S = x - m[v] - C,
              M = x / 2 - m[v] / 2 + (y / 2 - w / 2),
              O = X(R, V(M, S)),
              P =
                !u.arrow &&
                null != ee(o) &&
                M !== O &&
                i.reference[v] / 2 - (M < R ? R : C) - m[v] / 2 < 0,
              A = P ? (M < R ? M - R : M - S) : 0;
            return {
              [p]: f[p] + A,
              data: {
                [p]: O,
                centerOffset: M - O - A,
                ...(P && { alignmentOffset: A }),
              },
              reset: P,
            };
          },
        }),
        eY = (e, t, n) => {
          let r = new Map(),
            o = { platform: eV, ...n },
            i = { ...o.platform, _c: r };
          return ec(e, t, { ...o, platform: i });
        };
      var e$ = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
      function eq(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eq(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !eq(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eZ(e) {
        return 'undefined' == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eJ(e, t) {
        let n = eZ(e);
        return Math.round(t * n) / n;
      }
      function eQ(e) {
        let t = i.useRef(e);
        return (
          e$(() => {
            t.current = e;
          }),
          t
        );
      }
      let e0 = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let { element: n, padding: r } = 'function' == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, 'current')
              ? null != n.current
                ? eG({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? eG({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        e1 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: 'offset',
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: i, placement: a, middlewareData: l } = t,
                    u = await ep(t, e);
                  return a ===
                    (null == (n = l.offset) ? void 0 : n.placement) &&
                    null != (r = l.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + u.x, y: i + u.y, data: { ...u, placement: a } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e2 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'shift',
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: i = !0,
                      crossAxis: a = !1,
                      limiter: l = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...u
                    } = J(e, t),
                    c = { x: n, y: r },
                    s = await es(t, u),
                    d = er(Q(o)),
                    f = et(d),
                    p = c[f],
                    v = c[d];
                  if (i) {
                    let e = 'y' === f ? 'top' : 'left',
                      t = 'y' === f ? 'bottom' : 'right',
                      n = p + s[e],
                      r = p - s[t];
                    p = X(n, V(p, r));
                  }
                  if (a) {
                    let e = 'y' === d ? 'top' : 'left',
                      t = 'y' === d ? 'bottom' : 'right',
                      n = v + s[e],
                      r = v - s[t];
                    v = X(n, V(v, r));
                  }
                  let m = l.fn({ ...t, [f]: p, [d]: v });
                  return {
                    ...m,
                    data: {
                      x: m.x - n,
                      y: m.y - r,
                      enabled: { [f]: i, [d]: a },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e5 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      middlewareData: a,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: u = !0,
                      crossAxis: c = !0,
                    } = J(e, t),
                    s = { x: n, y: r },
                    d = er(o),
                    f = et(d),
                    p = s[f],
                    v = s[d],
                    m = J(l, t),
                    h =
                      'number' == typeof m
                        ? { mainAxis: m, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...m };
                  if (u) {
                    let e = 'y' === f ? 'height' : 'width',
                      t = i.reference[f] - i.floating[e] + h.mainAxis,
                      n = i.reference[f] + i.reference[e] - h.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var g, y;
                    let e = 'y' === f ? 'width' : 'height',
                      t = ['top', 'left'].includes(Q(o)),
                      n =
                        i.reference[d] -
                        i.floating[e] +
                        ((t && (null == (g = a.offset) ? void 0 : g[d])) || 0) +
                        (t ? 0 : h.crossAxis),
                      r =
                        i.reference[d] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (y = a.offset) ? void 0 : y[d]) || 0) -
                        (t ? h.crossAxis : 0);
                    v < n ? (v = n) : v > r && (v = r);
                  }
                  return { [f]: p, [d]: v };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e3 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'flip',
                options: e,
                async fn(t) {
                  var n, r, o, i, a;
                  let {
                      placement: l,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: s,
                      platform: d,
                      elements: f,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: v = !0,
                      fallbackPlacements: m,
                      fallbackStrategy: h = 'bestFit',
                      fallbackAxisSideDirection: g = 'none',
                      flipAlignment: y = !0,
                      ...w
                    } = J(e, t);
                  if (null != (n = u.arrow) && n.alignmentOffset) return {};
                  let b = Q(l),
                    x = er(s),
                    E = Q(s) === s,
                    R = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                    C =
                      m ||
                      (E || !y
                        ? [ei(s)]
                        : (function (e) {
                            let t = ei(e);
                            return [eo(e), t, eo(t)];
                          })(s)),
                    S = 'none' !== g;
                  !m &&
                    S &&
                    C.push(
                      ...(function (e, t, n, r) {
                        let o = ee(e),
                          i = (function (e, t, n) {
                            let r = ['left', 'right'],
                              o = ['right', 'left'];
                            switch (e) {
                              case 'top':
                              case 'bottom':
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case 'left':
                              case 'right':
                                return t
                                  ? ['top', 'bottom']
                                  : ['bottom', 'top'];
                              default:
                                return [];
                            }
                          })(Q(e), 'start' === n, r);
                        return (
                          o &&
                            ((i = i.map((e) => e + '-' + o)),
                            t && (i = i.concat(i.map(eo)))),
                          i
                        );
                      })(s, y, g, R)
                    );
                  let M = [s, ...C],
                    O = await es(t, w),
                    P = [],
                    A = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                  if ((p && P.push(O[b]), v)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = ee(e),
                        o = et(er(e)),
                        i = en(o),
                        a =
                          'x' === o
                            ? r === (n ? 'end' : 'start')
                              ? 'right'
                              : 'left'
                            : 'start' === r
                              ? 'bottom'
                              : 'top';
                      return (
                        t.reference[i] > t.floating[i] && (a = ei(a)),
                        [a, ei(a)]
                      );
                    })(l, c, R);
                    P.push(O[e[0]], O[e[1]]);
                  }
                  if (
                    ((A = [...A, { placement: l, overflows: P }]),
                    !P.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = M[e];
                    if (t)
                      return {
                        data: { index: e, overflows: A },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (i = A.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : i.placement;
                    if (!n)
                      switch (h) {
                        case 'bestFit': {
                          let e =
                            null ==
                            (a = A.filter((e) => {
                              if (S) {
                                let t = er(e.placement);
                                return t === x || 'y' === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : a[0];
                          e && (n = e);
                          break;
                        }
                        case 'initialPlacement':
                          n = s;
                      }
                    if (l !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e7 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'size',
                options: e,
                async fn(t) {
                  var n, r;
                  let o, i;
                  let { placement: a, rects: l, platform: u, elements: c } = t,
                    { apply: s = () => {}, ...d } = J(e, t),
                    f = await es(t, d),
                    p = Q(a),
                    v = ee(a),
                    m = 'y' === er(a),
                    { width: h, height: g } = l.floating;
                  'top' === p || 'bottom' === p
                    ? ((o = p),
                      (i =
                        v ===
                        ((await (null == u.isRTL
                          ? void 0
                          : u.isRTL(c.floating)))
                          ? 'start'
                          : 'end')
                          ? 'left'
                          : 'right'))
                    : ((i = p), (o = 'end' === v ? 'top' : 'bottom'));
                  let y = g - f.top - f.bottom,
                    w = h - f.left - f.right,
                    b = V(g - f[o], y),
                    x = V(h - f[i], w),
                    E = !t.middlewareData.shift,
                    R = b,
                    C = x;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (C = w),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (R = y),
                    E && !v)
                  ) {
                    let e = X(f.left, 0),
                      t = X(f.right, 0),
                      n = X(f.top, 0),
                      r = X(f.bottom, 0);
                    m
                      ? (C =
                          h -
                          2 * (0 !== e || 0 !== t ? e + t : X(f.left, f.right)))
                      : (R =
                          g -
                          2 *
                            (0 !== n || 0 !== r ? n + r : X(f.top, f.bottom)));
                  }
                  await s({ ...t, availableWidth: C, availableHeight: R });
                  let S = await u.getDimensions(c.floating);
                  return h !== S.width || g !== S.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e9 = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: 'hide',
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = 'referenceHidden', ...o } = J(e, t);
                  switch (r) {
                    case 'referenceHidden': {
                      let e = ed(
                        await es(t, { ...o, elementContext: 'reference' }),
                        n.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: ef(e),
                        },
                      };
                    }
                    case 'escaped': {
                      let e = ed(
                        await es(t, { ...o, altBoundary: !0 }),
                        n.floating
                      );
                      return { data: { escapedOffsets: e, escaped: ef(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e4 = (e, t) => ({ ...e0(e), options: [e, t] });
      var e6 = i.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, l.jsx)(S.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: '0 0 30 10',
          preserveAspectRatio: 'none',
          children: e.asChild
            ? n
            : (0, l.jsx)('polygon', { points: '0,0 30,0 15,10' }),
        });
      });
      e6.displayName = 'Arrow';
      var e8 = 'Popper',
        [te, tt] = u(e8),
        [tn, tr] = te(e8),
        to = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = i.useState(null);
          return (0, l.jsx)(tn, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n,
          });
        };
      to.displayName = e8;
      var ti = 'PopperAnchor',
        ta = i.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            a = tr(ti, n),
            u = i.useRef(null),
            c = d(t, u);
          return (
            i.useEffect(() => {
              a.onAnchorChange((null == r ? void 0 : r.current) || u.current);
            }),
            r ? null : (0, l.jsx)(S.div, { ...o, ref: c })
          );
        });
      ta.displayName = ti;
      var tl = 'PopperContent',
        [tu, tc] = te(tl),
        ts = i.forwardRef((e, t) => {
          var n, r, o, a, u, c, s, f;
          let {
              __scopePopper: p,
              side: v = 'bottom',
              sideOffset: m = 0,
              align: h = 'center',
              alignOffset: g = 0,
              arrowPadding: y = 0,
              avoidCollisions: w = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: R = 'partial',
              hideWhenDetached: M = !1,
              updatePositionStrategy: P = 'optimized',
              onPlaced: A,
              ...j
            } = e,
            T = tr(tl, p),
            [N, k] = i.useState(null),
            L = d(t, (e) => k(e)),
            [D, I] = i.useState(null),
            F = (function (e) {
              let [t, n] = i.useState(void 0);
              return (
                b(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ('borderBoxSize' in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: 'border-box' }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(D),
            _ =
              null !== (s = null == F ? void 0 : F.width) && void 0 !== s
                ? s
                : 0,
            W =
              null !== (f = null == F ? void 0 : F.height) && void 0 !== f
                ? f
                : 0,
            K =
              'number' == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            B = Array.isArray(x) ? x : [x],
            H = B.length > 0,
            U = { padding: K, boundary: B.filter(tv), altBoundary: H },
            {
              refs: z,
              floatingStyles: G,
              placement: $,
              isPositioned: q,
              middlewareData: Z,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: r = [],
                  platform: o,
                  elements: { reference: a, floating: l } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [d, f] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, v] = i.useState(r);
              eq(p, r) || v(r);
              let [m, h] = i.useState(null),
                [g, y] = i.useState(null),
                w = i.useCallback((e) => {
                  e !== R.current && ((R.current = e), h(e));
                }, []),
                b = i.useCallback((e) => {
                  e !== S.current && ((S.current = e), y(e));
                }, []),
                x = a || m,
                E = l || g,
                R = i.useRef(null),
                S = i.useRef(null),
                M = i.useRef(d),
                O = null != c,
                P = eQ(c),
                A = eQ(o),
                j = eQ(s),
                T = i.useCallback(() => {
                  if (!R.current || !S.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  A.current && (e.platform = A.current),
                    eY(R.current, S.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== j.current };
                      N.current &&
                        !eq(M.current, t) &&
                        ((M.current = t),
                        C.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, A, j]);
              e$(() => {
                !1 === s &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let N = i.useRef(!1);
              e$(
                () => (
                  (N.current = !0),
                  () => {
                    N.current = !1;
                  }
                ),
                []
              ),
                e$(() => {
                  if ((x && (R.current = x), E && (S.current = E), x && E)) {
                    if (P.current) return P.current(x, E, T);
                    T();
                  }
                }, [x, E, T, P, O]);
              let k = i.useMemo(
                  () => ({
                    reference: R,
                    floating: S,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b]
                ),
                L = i.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                D = i.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!L.floating) return e;
                  let t = eJ(L.floating, d.x),
                    r = eJ(L.floating, d.y);
                  return u
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(eZ(L.floating) >= 1.5 && {
                          willChange: 'transform',
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, L.floating, d.x, d.y]);
              return i.useMemo(
                () => ({
                  ...d,
                  update: T,
                  refs: k,
                  elements: L,
                  floatingStyles: D,
                }),
                [d, T, k, L, D]
              );
            })({
              strategy: 'fixed',
              placement: v + ('center' !== h ? '-' + h : ''),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: a = !0,
                      elementResize: l = 'function' == typeof ResizeObserver,
                      layoutShift: u = 'function' ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = ek(e),
                    d = i || a ? [...(s ? ej(s) : []), ...ej(t)] : [];
                  d.forEach((e) => {
                    i && e.addEventListener('scroll', n, { passive: !0 }),
                      a && e.addEventListener('resize', n);
                  });
                  let f =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = eg(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function a(l, u) {
                                void 0 === l && (l = !1),
                                  void 0 === u && (u = 1),
                                  i();
                                let c = e.getBoundingClientRect(),
                                  { left: s, top: d, width: f, height: p } = c;
                                if ((l || t(), !f || !p)) return;
                                let v = Y(d),
                                  m = Y(o.clientWidth - (s + f)),
                                  h = {
                                    rootMargin:
                                      -v +
                                      'px ' +
                                      -m +
                                      'px ' +
                                      -Y(o.clientHeight - (d + p)) +
                                      'px ' +
                                      -Y(s) +
                                      'px',
                                    threshold: X(0, V(1, u)) || 1,
                                  },
                                  g = !0;
                                function y(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== u) {
                                    if (!g) return a();
                                    r
                                      ? a(!1, r)
                                      : (n = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    eX(c, e.getBoundingClientRect()) ||
                                    a(),
                                    (g = !1);
                                }
                                try {
                                  r = new IntersectionObserver(y, {
                                    ...h,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(y, h);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    v = null;
                  l &&
                    ((v = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === s &&
                        v &&
                        (v.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = v) || e.observe(t);
                        }))),
                        n();
                    })),
                    s && !c && v.observe(s),
                    v.observe(t));
                  let m = c ? eF(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = eF(e);
                        m && !eX(m, r) && n(),
                          (m = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        i && e.removeEventListener('scroll', n),
                          a && e.removeEventListener('resize', n);
                      }),
                        null == f || f(),
                        null == (e = v) || e.disconnect(),
                        (v = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: 'always' === P });
              },
              elements: { reference: T.anchor },
              middleware: [
                e1({ mainAxis: m + W, alignmentAxis: g }),
                w &&
                  e2({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === R ? e5() : void 0,
                    ...U,
                  }),
                w && e3({ ...U }),
                e7({
                  ...U,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: a } = n.reference,
                      l = t.floating.style;
                    l.setProperty(
                      '--radix-popper-available-width',
                      ''.concat(r, 'px')
                    ),
                      l.setProperty(
                        '--radix-popper-available-height',
                        ''.concat(o, 'px')
                      ),
                      l.setProperty(
                        '--radix-popper-anchor-width',
                        ''.concat(i, 'px')
                      ),
                      l.setProperty(
                        '--radix-popper-anchor-height',
                        ''.concat(a, 'px')
                      );
                  },
                }),
                D && e4({ element: D, padding: y }),
                tm({ arrowWidth: _, arrowHeight: W }),
                M && e9({ strategy: 'referenceHidden', ...U }),
              ],
            }),
            [J, Q] = th($),
            ee = O(A);
          b(() => {
            q && (null == ee || ee());
          }, [q, ee]);
          let et = null === (n = Z.arrow) || void 0 === n ? void 0 : n.x,
            en = null === (r = Z.arrow) || void 0 === r ? void 0 : r.y,
            er =
              (null === (o = Z.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            [eo, ei] = i.useState();
          return (
            b(() => {
              N && ei(window.getComputedStyle(N).zIndex);
            }, [N]),
            (0, l.jsx)('div', {
              ref: z.setFloating,
              'data-radix-popper-content-wrapper': '',
              style: {
                ...G,
                transform: q ? G.transform : 'translate(0, -200%)',
                minWidth: 'max-content',
                zIndex: eo,
                '--radix-popper-transform-origin': [
                  null === (a = Z.transformOrigin) || void 0 === a
                    ? void 0
                    : a.x,
                  null === (u = Z.transformOrigin) || void 0 === u
                    ? void 0
                    : u.y,
                ].join(' '),
                ...((null === (c = Z.hide) || void 0 === c
                  ? void 0
                  : c.referenceHidden) && {
                  visibility: 'hidden',
                  pointerEvents: 'none',
                }),
              },
              dir: e.dir,
              children: (0, l.jsx)(tu, {
                scope: p,
                placedSide: J,
                onArrowChange: I,
                arrowX: et,
                arrowY: en,
                shouldHideArrow: er,
                children: (0, l.jsx)(S.div, {
                  'data-side': J,
                  'data-align': Q,
                  ...j,
                  ref: L,
                  style: { ...j.style, animation: q ? void 0 : 'none' },
                }),
              }),
            })
          );
        });
      ts.displayName = tl;
      var td = 'PopperArrow',
        tf = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
        tp = i.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = tc(td, n),
            i = tf[o.placedSide];
          return (0, l.jsx)('span', {
            ref: o.onArrowChange,
            style: {
              position: 'absolute',
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: '',
                right: '0 0',
                bottom: 'center 0',
                left: '100% 0',
              }[o.placedSide],
              transform: {
                top: 'translateY(100%)',
                right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                bottom: 'rotate(180deg)',
                left: 'translateY(50%) rotate(-90deg) translateX(50%)',
              }[o.placedSide],
              visibility: o.shouldHideArrow ? 'hidden' : void 0,
            },
            children: (0, l.jsx)(e6, {
              ...r,
              ref: t,
              style: { ...r.style, display: 'block' },
            }),
          });
        });
      function tv(e) {
        return null !== e;
      }
      tp.displayName = td;
      var tm = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: l, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, v] = th(l),
            m = { start: '0%', center: '50%', end: '100%' }[v],
            h =
              (null !==
                (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (a = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            y = '',
            w = '';
          return (
            'bottom' === p
              ? ((y = s ? m : ''.concat(h, 'px')), (w = ''.concat(-f, 'px')))
              : 'top' === p
                ? ((y = s ? m : ''.concat(h, 'px')),
                  (w = ''.concat(u.floating.height + f, 'px')))
                : 'right' === p
                  ? ((y = ''.concat(-f, 'px')),
                    (w = s ? m : ''.concat(g, 'px')))
                  : 'left' === p &&
                    ((y = ''.concat(u.floating.width + f, 'px')),
                    (w = s ? m : ''.concat(g, 'px'))),
            { data: { x: y, y: w } }
          );
        },
      });
      function th(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      var tg = i.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [u, c] = i.useState(!1);
        b(() => c(!0), []);
        let s =
          o ||
          (u &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
        return s
          ? C.createPortal((0, l.jsx)(S.div, { ...a, ref: t }), s)
          : null;
      });
      tg.displayName = 'Portal';
      var ty = (e) => {
        let { present: t, children: n } = e,
          r = (function (e) {
            var t, n;
            let [r, o] = i.useState(),
              a = i.useRef({}),
              l = i.useRef(e),
              u = i.useRef('none'),
              [c, s] =
                ((t = e ? 'mounted' : 'unmounted'),
                (n = {
                  mounted: {
                    UNMOUNT: 'unmounted',
                    ANIMATION_OUT: 'unmountSuspended',
                  },
                  unmountSuspended: {
                    MOUNT: 'mounted',
                    ANIMATION_END: 'unmounted',
                  },
                  unmounted: { MOUNT: 'mounted' },
                }),
                i.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              i.useEffect(() => {
                let e = tw(a.current);
                u.current = 'mounted' === c ? e : 'none';
              }, [c]),
              b(() => {
                let t = a.current,
                  n = l.current;
                if (n !== e) {
                  let r = u.current,
                    o = tw(t);
                  e
                    ? s('MOUNT')
                    : 'none' === o ||
                        (null == t ? void 0 : t.display) === 'none'
                      ? s('UNMOUNT')
                      : n && r !== o
                        ? s('ANIMATION_OUT')
                        : s('UNMOUNT'),
                    (l.current = e);
                }
              }, [e, s]),
              b(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = tw(a.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (s('ANIMATION_END'), !l.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = 'forwards'),
                          (t = n.setTimeout(() => {
                            'forwards' === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    i = (e) => {
                      e.target === r && (u.current = tw(a.current));
                    };
                  return (
                    r.addEventListener('animationstart', i),
                    r.addEventListener('animationcancel', o),
                    r.addEventListener('animationend', o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener('animationstart', i),
                        r.removeEventListener('animationcancel', o),
                        r.removeEventListener('animationend', o);
                    }
                  );
                }
                s('ANIMATION_END');
              }, [r, s]),
              {
                isPresent: ['mounted', 'unmountSuspended'].includes(c),
                ref: i.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), o(e);
                }, []),
              }
            );
          })(t),
          o =
            'function' == typeof n
              ? n({ present: r.isPresent })
              : i.Children.only(n),
          a = d(
            r.ref,
            (function (e) {
              var t, n;
              let r =
                  null ===
                    (t = Object.getOwnPropertyDescriptor(e.props, 'ref')) ||
                  void 0 === t
                    ? void 0
                    : t.get,
                o = r && 'isReactWarning' in r && r.isReactWarning;
              return o
                ? e.ref
                : (o =
                      (r =
                        null ===
                          (n = Object.getOwnPropertyDescriptor(e, 'ref')) ||
                        void 0 === n
                          ? void 0
                          : n.get) &&
                      'isReactWarning' in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(o)
          );
        return 'function' == typeof n || r.isPresent
          ? i.cloneElement(o, { ref: a })
          : null;
      };
      function tw(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      function tb({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [r, o] = (function ({ defaultProp: e, onChange: t }) {
            let n = i.useState(e),
              [r] = n,
              o = i.useRef(r),
              a = O(t);
            return (
              i.useEffect(() => {
                o.current !== r && (a(r), (o.current = r));
              }, [r, o, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          l = a ? e : r,
          u = O(n);
        return [
          l,
          i.useCallback(
            (t) => {
              if (a) {
                let n = 'function' == typeof t ? t(e) : t;
                n !== e && u(n);
              } else o(t);
            },
            [a, e, o, u]
          ),
        ];
      }
      ty.displayName = 'Presence';
      var tx = 'rovingFocusGroup.onEntryFocus',
        tE = { bubbles: !1, cancelable: !0 },
        tR = 'RovingFocusGroup',
        [tC, tS, tM] = h(tR),
        [tO, tP] = u(tR, [tM]),
        [tA, tj] = tO(tR),
        tT = i.forwardRef((e, t) =>
          (0, l.jsx)(tC.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, l.jsx)(tC.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, l.jsx)(tN, { ...e, ref: t }),
            }),
          })
        );
      tT.displayName = tR;
      var tN = i.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: r,
              loop: o = !1,
              dir: a,
              currentTabStopId: u,
              defaultCurrentTabStopId: c,
              onCurrentTabStopIdChange: s,
              onEntryFocus: f,
              preventScrollOnEntryFocus: p = !1,
              ...v
            } = e,
            m = i.useRef(null),
            h = d(t, m),
            g = y(a),
            [b = null, x] = tb({ prop: u, defaultProp: c, onChange: s }),
            [E, R] = i.useState(!1),
            C = O(f),
            M = tS(n),
            P = i.useRef(!1),
            [A, j] = i.useState(0);
          return (
            i.useEffect(() => {
              let e = m.current;
              if (e)
                return (
                  e.addEventListener(tx, C), () => e.removeEventListener(tx, C)
                );
            }, [C]),
            (0, l.jsx)(tA, {
              scope: n,
              orientation: r,
              dir: g,
              loop: o,
              currentTabStopId: b,
              onItemFocus: i.useCallback((e) => x(e), [x]),
              onItemShiftTab: i.useCallback(() => R(!0), []),
              onFocusableItemAdd: i.useCallback(() => j((e) => e + 1), []),
              onFocusableItemRemove: i.useCallback(() => j((e) => e - 1), []),
              children: (0, l.jsx)(S.div, {
                tabIndex: E || 0 === A ? -1 : 0,
                'data-orientation': r,
                ...v,
                ref: h,
                style: { outline: 'none', ...e.style },
                onMouseDown: w(e.onMouseDown, () => {
                  P.current = !0;
                }),
                onFocus: w(e.onFocus, (e) => {
                  let t = !P.current;
                  if (e.target === e.currentTarget && t && !E) {
                    let t = new CustomEvent(tx, tE);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = M().filter((e) => e.focusable);
                      tI(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === b),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        p
                      );
                    }
                  }
                  P.current = !1;
                }),
                onBlur: w(e.onBlur, () => R(!1)),
              }),
            })
          );
        }),
        tk = 'RovingFocusGroupItem',
        tL = i.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: r = !0,
              active: o = !1,
              tabStopId: a,
              ...u
            } = e,
            c = R(),
            s = a || c,
            d = tj(tk, n),
            f = d.currentTabStopId === s,
            p = tS(n),
            { onFocusableItemAdd: v, onFocusableItemRemove: m } = d;
          return (
            i.useEffect(() => {
              if (r) return v(), () => m();
            }, [r, v, m]),
            (0, l.jsx)(tC.ItemSlot, {
              scope: n,
              id: s,
              focusable: r,
              active: o,
              children: (0, l.jsx)(S.span, {
                tabIndex: f ? 0 : -1,
                'data-orientation': d.orientation,
                ...u,
                ref: t,
                onMouseDown: w(e.onMouseDown, (e) => {
                  r ? d.onItemFocus(s) : e.preventDefault();
                }),
                onFocus: w(e.onFocus, () => d.onItemFocus(s)),
                onKeyDown: w(e.onKeyDown, (e) => {
                  if ('Tab' === e.key && e.shiftKey) {
                    d.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      'rtl' !== n
                        ? r
                        : 'ArrowLeft' === r
                          ? 'ArrowRight'
                          : 'ArrowRight' === r
                            ? 'ArrowLeft'
                            : r);
                    if (
                      !(
                        'vertical' === t &&
                        ['ArrowLeft', 'ArrowRight'].includes(o)
                      ) &&
                      !(
                        'horizontal' === t &&
                        ['ArrowUp', 'ArrowDown'].includes(o)
                      )
                    )
                      return tD[o];
                  })(e, d.orientation, d.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let n = p()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ('last' === t) n.reverse();
                    else if ('prev' === t || 'next' === t) {
                      'prev' === t && n.reverse();
                      let r = n.indexOf(e.currentTarget);
                      n = d.loop
                        ? (function (e, t) {
                            return e.map((n, r) => e[(t + r) % e.length]);
                          })(n, r + 1)
                        : n.slice(r + 1);
                    }
                    setTimeout(() => tI(n));
                  }
                }),
              }),
            })
          );
        });
      tL.displayName = tk;
      var tD = {
        ArrowLeft: 'prev',
        ArrowUp: 'prev',
        ArrowRight: 'next',
        ArrowDown: 'next',
        PageUp: 'first',
        Home: 'first',
        PageDown: 'last',
        End: 'last',
      };
      function tI(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let r of e)
          if (
            r === n ||
            (r.focus({ preventScroll: t }), document.activeElement !== n)
          )
            return;
      }
      var tF = function (e) {
          return 'undefined' == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        t_ = new WeakMap(),
        tW = new WeakMap(),
        tK = {},
        tB = 0,
        tH = function (e) {
          return e && (e.host || tH(e.parentNode));
        },
        tU = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = tH(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing'
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tK[n] || (tK[n] = new WeakMap());
          var i = tK[n],
            a = [],
            l = new Set(),
            u = new Set(o),
            c = function (e) {
              !(!e || l.has(e)) && (l.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !(!e || u.has(e)) &&
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && 'false' !== t,
                      u = (t_.get(e) || 0) + 1,
                      c = (i.get(e) || 0) + 1;
                    t_.set(e, u),
                      i.set(e, c),
                      a.push(e),
                      1 === u && o && tW.set(e, !0),
                      1 === c && e.setAttribute(n, 'true'),
                      o || e.setAttribute(r, 'true');
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            s(t),
            l.clear(),
            tB++,
            function () {
              a.forEach(function (e) {
                var t = t_.get(e) - 1,
                  o = i.get(e) - 1;
                t_.set(e, t),
                  i.set(e, o),
                  t || (tW.has(e) || e.removeAttribute(r), tW.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --tB ||
                  ((t_ = new WeakMap()),
                  (t_ = new WeakMap()),
                  (tW = new WeakMap()),
                  (tK = {}));
            }
          );
        },
        tz = function (e, t, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || tF(e);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
              tU(r, o, n, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        tV = function () {
          return (tV =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function tX(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var tG =
          ('function' == typeof SuppressedError && SuppressedError,
          'right-scroll-bar-position'),
        tY = 'width-before-scroll-bar';
      function t$(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var tq = 'undefined' != typeof window ? i.useLayoutEffect : i.useEffect,
        tZ = new WeakMap();
      function tJ(e) {
        return e;
      }
      var tQ = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            i =
              ((t = null),
              void 0 === n && (n = tJ),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (r = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (i.options = tV({ async: !0, ssr: !1 }, e)), i;
        })(),
        t0 = function () {},
        t1 = i.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a,
            l = i.useRef(null),
            u = i.useState({
              onScrollCapture: t0,
              onWheelCapture: t0,
              onTouchMoveCapture: t0,
            }),
            c = u[0],
            s = u[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            w = e.inert,
            b = e.allowPinchZoom,
            x = e.as,
            E = e.gapMode,
            R = tX(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
              'gapMode',
            ]),
            C =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return t$(t, e);
                });
              }),
              ((o = (0, i.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (a = o.facade),
              tq(
                function () {
                  var e = tZ.get(a);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = a.current;
                    t.forEach(function (e) {
                      r.has(e) || t$(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || t$(e, o);
                      });
                  }
                  tZ.set(a, n);
                },
                [n]
              ),
              a),
            S = tV(tV({}, R), c);
          return i.createElement(
            i.Fragment,
            null,
            m &&
              i.createElement(g, {
                sideCar: tQ,
                removeScrollBar: v,
                shards: h,
                noIsolation: y,
                inert: w,
                setCallbacks: s,
                allowPinchZoom: !!b,
                lockRef: l,
                gapMode: E,
              }),
            d
              ? i.cloneElement(i.Children.only(f), tV(tV({}, S), { ref: C }))
              : i.createElement(
                  void 0 === x ? 'div' : x,
                  tV({}, S, { className: p, ref: C }),
                  f
                )
          );
        });
      (t1.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (t1.classNames = { fullWidth: tY, zeroRight: tG });
      var t2 = function (e) {
        var t = e.sideCar,
          n = tX(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car'
          );
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return i.createElement(r, tV({}, n));
      };
      t2.isSideCarExport = !0;
      var t5 = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = o || n.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        t3 = function () {
          var e = t5();
          return function (t, n) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        t7 = function () {
          var e = t3();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        t9 = { left: 0, top: 0, right: 0, gap: 0 },
        t4 = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        t6 = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [t4(n), t4(r), t4(o)];
        },
        t8 = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return t9;
          var t = t6(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        ne = t7(),
        nt = 'data-scroll-locked',
        nn = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat(nt, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(i, 'px;\n    padding-right: ')
                      .concat(
                        a,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                      )
                      .concat(l, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n &&
                    'padding-right: '.concat(l, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat(tG, ' {\n    right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tY, ' {\n    margin-right: ')
              .concat(l, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tG, ' .')
              .concat(tG, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tY, ' .')
              .concat(tY, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat(nt, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(l, 'px;\n  }\n')
          );
        },
        nr = function () {
          var e = parseInt(document.body.getAttribute(nt) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        no = function () {
          i.useEffect(function () {
            return (
              document.body.setAttribute(nt, (nr() + 1).toString()),
              function () {
                var e = nr() - 1;
                e <= 0
                  ? document.body.removeAttribute(nt)
                  : document.body.setAttribute(nt, e.toString());
              }
            );
          }, []);
        },
        ni = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? 'margin' : r;
          no();
          var a = i.useMemo(
            function () {
              return t8(o);
            },
            [o]
          );
          return i.createElement(ne, {
            styles: nn(a, !t, o, n ? '' : '!important'),
          });
        },
        na = !1;
      if ('undefined' != typeof window)
        try {
          var nl = Object.defineProperty({}, 'passive', {
            get: function () {
              return (na = !0), !0;
            },
          });
          window.addEventListener('test', nl, nl),
            window.removeEventListener('test', nl, nl);
        } catch (e) {
          na = !1;
        }
      var nu = !!na && { passive: !1 },
        nc = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            (n.overflowY !== n.overflowX ||
              'TEXTAREA' === e.tagName ||
              'visible' !== n[t])
          );
        },
        ns = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              nd(e, r))
            ) {
              var o = nf(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        nd = function (e, t) {
          return 'v' === e ? nc(t, 'overflowY') : nc(t, 'overflowX');
        },
        nf = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        np = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === i ? -1 : 1),
            l = a * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            var v = nf(e, u),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && nd(e, u) && ((f += h), (p += m)),
              (u = u instanceof ShadowRoot ? u.host : u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        nv = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        nm = function (e) {
          return [e.deltaX, e.deltaY];
        },
        nh = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        ng = 0,
        ny = [];
      let nw =
        (tQ.useMedium(function (e) {
          var t = i.useRef([]),
            n = i.useRef([0, 0]),
            r = i.useRef(),
            o = i.useState(ng++)[0],
            a = i.useState(t7)[0],
            l = i.useRef(e);
          i.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            i.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add('block-interactivity-'.concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(nh), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add('allow-interactivity-'.concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        'block-interactivity-'.concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            'allow-interactivity-'.concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = i.useCallback(function (e, t) {
              if (
                ('touches' in e && 2 === e.touches.length) ||
                ('wheel' === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = nv(e),
                a = n.current,
                u = 'deltaX' in e ? e.deltaX : a[0] - i[0],
                c = 'deltaY' in e ? e.deltaY : a[1] - i[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(c) ? 'h' : 'v';
              if ('touches' in e && 'h' === d && 'range' === s.type) return !1;
              var f = ns(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = ns(d, s))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  'changedTouches' in e &&
                  (u || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return np(p, t, e, 'h' === p ? u : c, !0);
            }, []),
            c = i.useCallback(function (e) {
              if (ny.length && ny[ny.length - 1] === a) {
                var n = 'deltaY' in e ? nm(e) : nv(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(nh)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = i.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = i.useCallback(function (e) {
              (n.current = nv(e)), (r.current = void 0);
            }, []),
            f = i.useCallback(function (t) {
              s(t.type, nm(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = i.useCallback(function (t) {
              s(t.type, nv(t), t.target, u(t, e.lockRef.current));
            }, []);
          i.useEffect(function () {
            return (
              ny.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener('wheel', c, nu),
              document.addEventListener('touchmove', c, nu),
              document.addEventListener('touchstart', d, nu),
              function () {
                (ny = ny.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener('wheel', c, nu),
                  document.removeEventListener('touchmove', c, nu),
                  document.removeEventListener('touchstart', d, nu);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return i.createElement(
            i.Fragment,
            null,
            m
              ? i.createElement(a, {
                  styles: '\n  .block-interactivity-'
                    .concat(
                      o,
                      ' {pointer-events: none;}\n  .allow-interactivity-'
                    )
                    .concat(o, ' {pointer-events: all;}\n'),
                })
              : null,
            v ? i.createElement(ni, { gapMode: e.gapMode }) : null
          );
        }),
        t2);
      var nb = i.forwardRef(function (e, t) {
        return i.createElement(t1, tV({}, e, { ref: t, sideCar: nw }));
      });
      nb.classNames = t1.classNames;
      var nx = ['Enter', ' '],
        nE = ['ArrowUp', 'PageDown', 'End'],
        nR = ['ArrowDown', 'PageUp', 'Home', ...nE],
        nC = { ltr: [...nx, 'ArrowRight'], rtl: [...nx, 'ArrowLeft'] },
        nS = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
        nM = 'Menu',
        [nO, nP, nA] = h(nM),
        [nj, nT] = u(nM, [nA, tt, tP]),
        nN = tt(),
        nk = tP(),
        [nL, nD] = nj(nM),
        [nI, nF] = nj(nM),
        n_ = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: o,
              onOpenChange: a,
              modal: u = !0,
            } = e,
            c = nN(t),
            [s, d] = i.useState(null),
            f = i.useRef(!1),
            p = O(a),
            v = y(o);
          return (
            i.useEffect(() => {
              let e = () => {
                  (f.current = !0),
                    document.addEventListener('pointerdown', t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener('pointermove', t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (f.current = !1);
              return (
                document.addEventListener('keydown', e, { capture: !0 }),
                () => {
                  document.removeEventListener('keydown', e, { capture: !0 }),
                    document.removeEventListener('pointerdown', t, {
                      capture: !0,
                    }),
                    document.removeEventListener('pointermove', t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, l.jsx)(to, {
              ...c,
              children: (0, l.jsx)(nL, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: s,
                onContentChange: d,
                children: (0, l.jsx)(nI, {
                  scope: t,
                  onClose: i.useCallback(() => p(!1), [p]),
                  isUsingKeyboardRef: f,
                  dir: v,
                  modal: u,
                  children: r,
                }),
              }),
            })
          );
        };
      n_.displayName = nM;
      var nW = i.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = nN(n);
        return (0, l.jsx)(ta, { ...o, ...r, ref: t });
      });
      nW.displayName = 'MenuAnchor';
      var nK = 'MenuPortal',
        [nB, nH] = nj(nK, { forceMount: void 0 }),
        nU = (e) => {
          let { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
            i = nD(nK, t);
          return (0, l.jsx)(nB, {
            scope: t,
            forceMount: n,
            children: (0, l.jsx)(ty, {
              present: n || i.open,
              children: (0, l.jsx)(tg, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      nU.displayName = nK;
      var nz = 'MenuContent',
        [nV, nX] = nj(nz),
        nG = i.forwardRef((e, t) => {
          let n = nH(nz, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            i = nD(nz, e.__scopeMenu),
            a = nF(nz, e.__scopeMenu);
          return (0, l.jsx)(nO.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ty, {
              present: r || i.open,
              children: (0, l.jsx)(nO.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, l.jsx)(nY, { ...o, ref: t })
                  : (0, l.jsx)(n$, { ...o, ref: t }),
              }),
            }),
          });
        }),
        nY = i.forwardRef((e, t) => {
          let n = nD(nz, e.__scopeMenu),
            r = i.useRef(null),
            o = d(t, r);
          return (
            i.useEffect(() => {
              let e = r.current;
              if (e) return tz(e);
            }, []),
            (0, l.jsx)(nq, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: n.open,
              disableOutsideScroll: !0,
              onFocusOutside: w(e.onFocusOutside, (e) => e.preventDefault(), {
                checkForDefaultPrevented: !1,
              }),
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        n$ = i.forwardRef((e, t) => {
          let n = nD(nz, e.__scopeMenu);
          return (0, l.jsx)(nq, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1),
          });
        }),
        nq = i.forwardRef((e, t) => {
          let {
              __scopeMenu: n,
              loop: r = !1,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: u,
              disableOutsidePointerEvents: c,
              onEntryFocus: s,
              onEscapeKeyDown: p,
              onPointerDownOutside: v,
              onFocusOutside: m,
              onInteractOutside: h,
              onDismiss: g,
              disableOutsideScroll: y,
              ...b
            } = e,
            x = nD(nz, n),
            E = nF(nz, n),
            R = nN(n),
            C = nk(n),
            S = nP(n),
            [M, O] = i.useState(null),
            P = i.useRef(null),
            A = d(t, P, x.onContentChange),
            T = i.useRef(0),
            N = i.useRef(''),
            D = i.useRef(0),
            I = i.useRef(null),
            F = i.useRef('right'),
            W = i.useRef(0),
            K = y ? nb : i.Fragment,
            B = y ? { as: f, allowPinchZoom: !0 } : void 0,
            H = (e) => {
              var t, n;
              let r = N.current + e,
                o = S().filter((e) => !e.disabled),
                i = document.activeElement,
                a =
                  null === (t = o.find((e) => e.ref.current === i)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                l = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    i =
                      ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
                      e.map((t, n) => e[(r + n) % e.length]));
                  1 === o.length && (i = i.filter((e) => e !== n));
                  let a = i.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return a !== n ? a : void 0;
                })(
                  o.map((e) => e.textValue),
                  r,
                  a
                ),
                u =
                  null === (n = o.find((e) => e.textValue === l)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (N.current = t),
                  window.clearTimeout(T.current),
                  '' !== t && (T.current = window.setTimeout(() => e(''), 1e3));
              })(r),
                u && setTimeout(() => u.focus());
            };
          i.useEffect(() => () => window.clearTimeout(T.current), []),
            i.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = n[0]) && void 0 !== e ? e : L()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = n[1]) && void 0 !== t ? t : L()
                ),
                k++,
                () => {
                  1 === k &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    k--;
                }
              );
            }, []);
          let U = i.useCallback((e) => {
            var t, n;
            return (
              F.current ===
                (null === (t = I.current) || void 0 === t ? void 0 : t.side) &&
              (function (e, t) {
                return (
                  !!t &&
                  (function (e, t) {
                    let { x: n, y: r } = e,
                      o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      let a = t[e].x,
                        l = t[e].y,
                        u = t[i].x,
                        c = t[i].y;
                      l > r != c > r &&
                        n < ((u - a) * (r - l)) / (c - l) + a &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t)
                );
              })(e, null === (n = I.current) || void 0 === n ? void 0 : n.area)
            );
          }, []);
          return (0, l.jsx)(nV, {
            scope: n,
            searchRef: N,
            onItemEnter: i.useCallback(
              (e) => {
                U(e) && e.preventDefault();
              },
              [U]
            ),
            onItemLeave: i.useCallback(
              (e) => {
                var t;
                U(e) ||
                  (null === (t = P.current) || void 0 === t || t.focus(),
                  O(null));
              },
              [U]
            ),
            onTriggerLeave: i.useCallback(
              (e) => {
                U(e) && e.preventDefault();
              },
              [U]
            ),
            pointerGraceTimerRef: D,
            onPointerGraceIntentChange: i.useCallback((e) => {
              I.current = e;
            }, []),
            children: (0, l.jsx)(K, {
              ...B,
              children: (0, l.jsx)(_, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: w(a, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = P.current) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: u,
                children: (0, l.jsx)(j, {
                  asChild: !0,
                  disableOutsidePointerEvents: c,
                  onEscapeKeyDown: p,
                  onPointerDownOutside: v,
                  onFocusOutside: m,
                  onInteractOutside: h,
                  onDismiss: g,
                  children: (0, l.jsx)(tT, {
                    asChild: !0,
                    ...C,
                    dir: E.dir,
                    orientation: 'vertical',
                    loop: r,
                    currentTabStopId: M,
                    onCurrentTabStopIdChange: O,
                    onEntryFocus: w(s, (e) => {
                      E.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, l.jsx)(ts, {
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'data-state': rp(x.open),
                      'data-radix-menu-content': '',
                      dir: E.dir,
                      ...R,
                      ...b,
                      ref: A,
                      style: { outline: 'none', ...b.style },
                      onKeyDown: w(b.onKeyDown, (e) => {
                        let t =
                            e.target.closest('[data-radix-menu-content]') ===
                            e.currentTarget,
                          n = e.ctrlKey || e.altKey || e.metaKey,
                          r = 1 === e.key.length;
                        t &&
                          ('Tab' === e.key && e.preventDefault(),
                          !n && r && H(e.key));
                        let o = P.current;
                        if (e.target !== o || !nR.includes(e.key)) return;
                        e.preventDefault();
                        let i = S()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        nE.includes(e.key) && i.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let n of e)
                              if (
                                n === t ||
                                (n.focus(), document.activeElement !== t)
                              )
                                return;
                          })(i);
                      }),
                      onBlur: w(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(T.current), (N.current = ''));
                      }),
                      onPointerMove: w(
                        e.onPointerMove,
                        rh((e) => {
                          let t = e.target,
                            n = W.current !== e.clientX;
                          e.currentTarget.contains(t) &&
                            n &&
                            ((F.current =
                              e.clientX > W.current ? 'right' : 'left'),
                            (W.current = e.clientX));
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      nG.displayName = nz;
      var nZ = i.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(S.div, { role: 'group', ...r, ref: t });
      });
      nZ.displayName = 'MenuGroup';
      var nJ = i.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(S.div, { ...r, ref: t });
      });
      nJ.displayName = 'MenuLabel';
      var nQ = 'MenuItem',
        n0 = 'menu.itemSelect',
        n1 = i.forwardRef((e, t) => {
          let { disabled: n = !1, onSelect: r, ...o } = e,
            a = i.useRef(null),
            u = nF(nQ, e.__scopeMenu),
            c = nX(nQ, e.__scopeMenu),
            s = d(t, a),
            f = i.useRef(!1);
          return (0, l.jsx)(n2, {
            ...o,
            ref: s,
            disabled: n,
            onClick: w(e.onClick, () => {
              let e = a.current;
              if (!n && e) {
                let t = new CustomEvent(n0, { bubbles: !0, cancelable: !0 });
                e.addEventListener(n0, (e) => (null == r ? void 0 : r(e)), {
                  once: !0,
                }),
                  M(e, t),
                  t.defaultPrevented ? (f.current = !1) : u.onClose();
              }
            }),
            onPointerDown: (t) => {
              var n;
              null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                (f.current = !0);
            },
            onPointerUp: w(e.onPointerUp, (e) => {
              var t;
              f.current ||
                null === (t = e.currentTarget) ||
                void 0 === t ||
                t.click();
            }),
            onKeyDown: w(e.onKeyDown, (e) => {
              let t = '' !== c.searchRef.current;
              !n &&
                (!t || ' ' !== e.key) &&
                nx.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      n1.displayName = nQ;
      var n2 = i.forwardRef((e, t) => {
          let { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e,
            u = nX(nQ, n),
            c = nk(n),
            s = i.useRef(null),
            f = d(t, s),
            [p, v] = i.useState(!1),
            [m, h] = i.useState('');
          return (
            i.useEffect(() => {
              let e = s.current;
              if (e) {
                var t;
                h(
                  (null !== (t = e.textContent) && void 0 !== t ? t : '').trim()
                );
              }
            }, [a.children]),
            (0, l.jsx)(nO.ItemSlot, {
              scope: n,
              disabled: r,
              textValue: null != o ? o : m,
              children: (0, l.jsx)(tL, {
                asChild: !0,
                ...c,
                focusable: !r,
                children: (0, l.jsx)(S.div, {
                  role: 'menuitem',
                  'data-highlighted': p ? '' : void 0,
                  'aria-disabled': r || void 0,
                  'data-disabled': r ? '' : void 0,
                  ...a,
                  ref: f,
                  onPointerMove: w(
                    e.onPointerMove,
                    rh((e) => {
                      r
                        ? u.onItemLeave(e)
                        : (u.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: w(
                    e.onPointerLeave,
                    rh((e) => u.onItemLeave(e))
                  ),
                  onFocus: w(e.onFocus, () => v(!0)),
                  onBlur: w(e.onBlur, () => v(!1)),
                }),
              }),
            })
          );
        }),
        n5 = i.forwardRef((e, t) => {
          let { checked: n = !1, onCheckedChange: r, ...o } = e;
          return (0, l.jsx)(rt, {
            scope: e.__scopeMenu,
            checked: n,
            children: (0, l.jsx)(n1, {
              role: 'menuitemcheckbox',
              'aria-checked': rv(n) ? 'mixed' : n,
              ...o,
              ref: t,
              'data-state': rm(n),
              onSelect: w(
                o.onSelect,
                () => (null == r ? void 0 : r(!!rv(n) || !n)),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      n5.displayName = 'MenuCheckboxItem';
      var n3 = 'MenuRadioGroup',
        [n7, n9] = nj(n3, { value: void 0, onValueChange: () => {} }),
        n4 = i.forwardRef((e, t) => {
          let { value: n, onValueChange: r, ...o } = e,
            i = O(r);
          return (0, l.jsx)(n7, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: i,
            children: (0, l.jsx)(nZ, { ...o, ref: t }),
          });
        });
      n4.displayName = n3;
      var n6 = 'MenuRadioItem',
        n8 = i.forwardRef((e, t) => {
          let { value: n, ...r } = e,
            o = n9(n6, e.__scopeMenu),
            i = n === o.value;
          return (0, l.jsx)(rt, {
            scope: e.__scopeMenu,
            checked: i,
            children: (0, l.jsx)(n1, {
              role: 'menuitemradio',
              'aria-checked': i,
              ...r,
              ref: t,
              'data-state': rm(i),
              onSelect: w(
                r.onSelect,
                () => {
                  var e;
                  return null === (e = o.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(o, n);
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      n8.displayName = n6;
      var re = 'MenuItemIndicator',
        [rt, rn] = nj(re, { checked: !1 }),
        rr = i.forwardRef((e, t) => {
          let { __scopeMenu: n, forceMount: r, ...o } = e,
            i = rn(re, n);
          return (0, l.jsx)(ty, {
            present: r || rv(i.checked) || !0 === i.checked,
            children: (0, l.jsx)(S.span, {
              ...o,
              ref: t,
              'data-state': rm(i.checked),
            }),
          });
        });
      rr.displayName = re;
      var ro = i.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e;
        return (0, l.jsx)(S.div, {
          role: 'separator',
          'aria-orientation': 'horizontal',
          ...r,
          ref: t,
        });
      });
      ro.displayName = 'MenuSeparator';
      var ri = i.forwardRef((e, t) => {
        let { __scopeMenu: n, ...r } = e,
          o = nN(n);
        return (0, l.jsx)(tp, { ...o, ...r, ref: t });
      });
      ri.displayName = 'MenuArrow';
      var ra = 'MenuSub',
        [rl, ru] = nj(ra),
        rc = 'MenuSubTrigger',
        rs = i.forwardRef((e, t) => {
          let n = nD(rc, e.__scopeMenu),
            r = nF(rc, e.__scopeMenu),
            o = ru(rc, e.__scopeMenu),
            a = nX(rc, e.__scopeMenu),
            u = i.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: d } = a,
            f = { __scopeMenu: e.__scopeMenu },
            p = i.useCallback(() => {
              u.current && window.clearTimeout(u.current), (u.current = null);
            }, []);
          return (
            i.useEffect(() => p, [p]),
            i.useEffect(() => {
              let e = c.current;
              return () => {
                window.clearTimeout(e), d(null);
              };
            }, [c, d]),
            (0, l.jsx)(nW, {
              asChild: !0,
              ...f,
              children: (0, l.jsx)(n2, {
                id: o.triggerId,
                'aria-haspopup': 'menu',
                'aria-expanded': n.open,
                'aria-controls': o.contentId,
                'data-state': rp(n.open),
                ...e,
                ref: s(t, o.onTriggerChange),
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                },
                onPointerMove: w(
                  e.onPointerMove,
                  rh((t) => {
                    a.onItemEnter(t),
                      t.defaultPrevented ||
                        e.disabled ||
                        n.open ||
                        u.current ||
                        (a.onPointerGraceIntentChange(null),
                        (u.current = window.setTimeout(() => {
                          n.onOpenChange(!0), p();
                        }, 100)));
                  })
                ),
                onPointerLeave: w(
                  e.onPointerLeave,
                  rh((e) => {
                    var t, r;
                    p();
                    let o =
                      null === (t = n.content) || void 0 === t
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t =
                          null === (r = n.content) || void 0 === r
                            ? void 0
                            : r.dataset.side,
                        i = 'right' === t,
                        l = o[i ? 'left' : 'right'],
                        u = o[i ? 'right' : 'left'];
                      a.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (i ? -5 : 5), y: e.clientY },
                          { x: l, y: o.top },
                          { x: u, y: o.top },
                          { x: u, y: o.bottom },
                          { x: l, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => a.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                      a.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: w(e.onKeyDown, (t) => {
                  let o = '' !== a.searchRef.current;
                  if (
                    !e.disabled &&
                    (!o || ' ' !== t.key) &&
                    nC[r.dir].includes(t.key)
                  ) {
                    var i;
                    n.onOpenChange(!0),
                      null === (i = n.content) || void 0 === i || i.focus(),
                      t.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      rs.displayName = rc;
      var rd = 'MenuSubContent',
        rf = i.forwardRef((e, t) => {
          let n = nH(nz, e.__scopeMenu),
            { forceMount: r = n.forceMount, ...o } = e,
            a = nD(nz, e.__scopeMenu),
            u = nF(nz, e.__scopeMenu),
            c = ru(rd, e.__scopeMenu),
            s = i.useRef(null),
            f = d(t, s);
          return (0, l.jsx)(nO.Provider, {
            scope: e.__scopeMenu,
            children: (0, l.jsx)(ty, {
              present: r || a.open,
              children: (0, l.jsx)(nO.Slot, {
                scope: e.__scopeMenu,
                children: (0, l.jsx)(nq, {
                  id: c.contentId,
                  'aria-labelledby': c.triggerId,
                  ...o,
                  ref: f,
                  align: 'start',
                  side: 'rtl' === u.dir ? 'left' : 'right',
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var t;
                    u.isUsingKeyboardRef.current &&
                      (null === (t = s.current) || void 0 === t || t.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: w(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && a.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: w(e.onEscapeKeyDown, (e) => {
                    u.onClose(), e.preventDefault();
                  }),
                  onKeyDown: w(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      n = nS[u.dir].includes(e.key);
                    if (t && n) {
                      var r;
                      a.onOpenChange(!1),
                        null === (r = c.trigger) || void 0 === r || r.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function rp(e) {
        return e ? 'open' : 'closed';
      }
      function rv(e) {
        return 'indeterminate' === e;
      }
      function rm(e) {
        return rv(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function rh(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      rf.displayName = rd;
      var rg = 'Menubar',
        [ry, rw, rb] = h(rg),
        [rx, rE] = u(rg, [rb, tP]),
        rR = nT(),
        rC = tP(),
        [rS, rM] = rx(rg),
        rO = i.forwardRef((e, t) => {
          let {
              __scopeMenubar: n,
              value: r,
              onValueChange: o,
              defaultValue: a,
              loop: u = !0,
              dir: c,
              ...s
            } = e,
            d = y(c),
            f = rC(n),
            [p = '', v] = tb({ prop: r, onChange: o, defaultProp: a }),
            [m, h] = i.useState(null);
          return (0, l.jsx)(rS, {
            scope: n,
            value: p,
            onMenuOpen: i.useCallback(
              (e) => {
                v(e), h(e);
              },
              [v]
            ),
            onMenuClose: i.useCallback(() => v(''), [v]),
            onMenuToggle: i.useCallback(
              (e) => {
                v((t) => (t ? '' : e)), h(e);
              },
              [v]
            ),
            dir: d,
            loop: u,
            children: (0, l.jsx)(ry.Provider, {
              scope: n,
              children: (0, l.jsx)(ry.Slot, {
                scope: n,
                children: (0, l.jsx)(tT, {
                  asChild: !0,
                  ...f,
                  orientation: 'horizontal',
                  loop: u,
                  dir: d,
                  currentTabStopId: m,
                  onCurrentTabStopIdChange: h,
                  children: (0, l.jsx)(S.div, {
                    role: 'menubar',
                    ...s,
                    ref: t,
                  }),
                }),
              }),
            }),
          });
        });
      rO.displayName = rg;
      var rP = 'MenubarMenu',
        [rA, rj] = rx(rP),
        rT = (e) => {
          let { __scopeMenubar: t, value: n, ...r } = e,
            o = R(),
            a = n || o || 'LEGACY_REACT_AUTO_VALUE',
            u = rM(rP, t),
            c = rR(t),
            s = i.useRef(null),
            d = i.useRef(!1),
            f = u.value === a;
          return (
            i.useEffect(() => {
              f || (d.current = !1);
            }, [f]),
            (0, l.jsx)(rA, {
              scope: t,
              value: a,
              triggerId: R(),
              triggerRef: s,
              contentId: R(),
              wasKeyboardTriggerOpenRef: d,
              children: (0, l.jsx)(n_, {
                ...c,
                open: f,
                onOpenChange: (e) => {
                  e || u.onMenuClose();
                },
                modal: !1,
                dir: u.dir,
                ...r,
              }),
            })
          );
        };
      rT.displayName = rP;
      var rN = 'MenubarTrigger',
        rk = i.forwardRef((e, t) => {
          let { __scopeMenubar: n, disabled: r = !1, ...o } = e,
            a = rC(n),
            u = rR(n),
            c = rM(rN, n),
            s = rj(rN, n),
            f = i.useRef(null),
            p = d(t, f, s.triggerRef),
            [v, m] = i.useState(!1),
            h = c.value === s.value;
          return (0, l.jsx)(ry.ItemSlot, {
            scope: n,
            value: s.value,
            disabled: r,
            children: (0, l.jsx)(tL, {
              asChild: !0,
              ...a,
              focusable: !r,
              tabStopId: s.value,
              children: (0, l.jsx)(nW, {
                asChild: !0,
                ...u,
                children: (0, l.jsx)(S.button, {
                  type: 'button',
                  role: 'menuitem',
                  id: s.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': h,
                  'aria-controls': h ? s.contentId : void 0,
                  'data-highlighted': v ? '' : void 0,
                  'data-state': h ? 'open' : 'closed',
                  'data-disabled': r ? '' : void 0,
                  disabled: r,
                  ...o,
                  ref: p,
                  onPointerDown: w(e.onPointerDown, (e) => {
                    r ||
                      0 !== e.button ||
                      !1 !== e.ctrlKey ||
                      (c.onMenuOpen(s.value), h || e.preventDefault());
                  }),
                  onPointerEnter: w(e.onPointerEnter, () => {
                    if (c.value && !h) {
                      var e;
                      c.onMenuOpen(s.value),
                        null === (e = f.current) || void 0 === e || e.focus();
                    }
                  }),
                  onKeyDown: w(e.onKeyDown, (e) => {
                    !r &&
                      (['Enter', ' '].includes(e.key) &&
                        c.onMenuToggle(s.value),
                      'ArrowDown' === e.key && c.onMenuOpen(s.value),
                      ['Enter', ' ', 'ArrowDown'].includes(e.key) &&
                        ((s.wasKeyboardTriggerOpenRef.current = !0),
                        e.preventDefault()));
                  }),
                  onFocus: w(e.onFocus, () => m(!0)),
                  onBlur: w(e.onBlur, () => m(!1)),
                }),
              }),
            }),
          });
        });
      rk.displayName = rN;
      var rL = (e) => {
        let { __scopeMenubar: t, ...n } = e,
          r = rR(t);
        return (0, l.jsx)(nU, { ...r, ...n });
      };
      rL.displayName = 'MenubarPortal';
      var rD = 'MenubarContent',
        rI = i.forwardRef((e, t) => {
          let { __scopeMenubar: n, align: r = 'start', ...o } = e,
            a = rR(n),
            u = rM(rD, n),
            c = rj(rD, n),
            s = rw(n),
            d = i.useRef(!1);
          return (0, l.jsx)(nG, {
            id: c.contentId,
            'aria-labelledby': c.triggerId,
            'data-radix-menubar-content': '',
            ...a,
            ...o,
            ref: t,
            align: r,
            onCloseAutoFocus: w(e.onCloseAutoFocus, (e) => {
              if (!u.value && !d.current) {
                var t;
                null === (t = c.triggerRef.current) ||
                  void 0 === t ||
                  t.focus();
              }
              (d.current = !1), e.preventDefault();
            }),
            onFocusOutside: w(e.onFocusOutside, (e) => {
              let t = e.target;
              s().some((e) => {
                var n;
                return null === (n = e.ref.current) || void 0 === n
                  ? void 0
                  : n.contains(t);
              }) && e.preventDefault();
            }),
            onInteractOutside: w(e.onInteractOutside, () => {
              d.current = !0;
            }),
            onEntryFocus: (e) => {
              c.wasKeyboardTriggerOpenRef.current || e.preventDefault();
            },
            onKeyDown: w(
              e.onKeyDown,
              (e) => {
                if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
                  let t = e.target,
                    n = t.hasAttribute('data-radix-menubar-subtrigger'),
                    r =
                      t.closest('[data-radix-menubar-content]') !==
                      e.currentTarget,
                    o =
                      ('rtl' === u.dir ? 'ArrowRight' : 'ArrowLeft') === e.key;
                  if ((!o && n) || (r && o)) return;
                  let i = s()
                    .filter((e) => !e.disabled)
                    .map((e) => e.value);
                  o && i.reverse();
                  let a = i.indexOf(c.value),
                    [l] = (i = u.loop
                      ? (function (e, t) {
                          return e.map((n, r) => e[(t + r) % e.length]);
                        })(i, a + 1)
                      : i.slice(a + 1));
                  l && u.onMenuOpen(l);
                }
              },
              { checkForDefaultPrevented: !1 }
            ),
            style: {
              ...e.style,
              '--radix-menubar-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-menubar-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-menubar-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-menubar-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-menubar-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          });
        });
      (rI.displayName = rD),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(nZ, { ...o, ...r, ref: t });
        }).displayName = 'MenubarGroup'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(nJ, { ...o, ...r, ref: t });
        }).displayName = 'MenubarLabel');
      var rF = i.forwardRef((e, t) => {
        let { __scopeMenubar: n, ...r } = e,
          o = rR(n);
        return (0, l.jsx)(n1, { ...o, ...r, ref: t });
      });
      (rF.displayName = 'MenubarItem'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(n5, { ...o, ...r, ref: t });
        }).displayName = 'MenubarCheckboxItem'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(n4, { ...o, ...r, ref: t });
        }).displayName = 'MenubarRadioGroup'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(n8, { ...o, ...r, ref: t });
        }).displayName = 'MenubarRadioItem'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(rr, { ...o, ...r, ref: t });
        }).displayName = 'MenubarItemIndicator');
      var r_ = i.forwardRef((e, t) => {
        let { __scopeMenubar: n, ...r } = e,
          o = rR(n);
        return (0, l.jsx)(ro, { ...o, ...r, ref: t });
      });
      (r_.displayName = 'MenubarSeparator'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(ri, { ...o, ...r, ref: t });
        }).displayName = 'MenubarArrow'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(rs, {
            'data-radix-menubar-subtrigger': '',
            ...o,
            ...r,
            ref: t,
          });
        }).displayName = 'MenubarSubTrigger'),
        (i.forwardRef((e, t) => {
          let { __scopeMenubar: n, ...r } = e,
            o = rR(n);
          return (0, l.jsx)(rf, {
            ...o,
            'data-radix-menubar-content': '',
            ...r,
            ref: t,
            style: {
              ...e.style,
              '--radix-menubar-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-menubar-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-menubar-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-menubar-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-menubar-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          });
        }).displayName = 'MenubarSubContent');
      var rW = rO,
        rK = rT,
        rB = rk,
        rH = rL,
        rU = rI,
        rz = rF,
        rV = r_;
    },
    4436: (e, t, n) => {
      'use strict';
      n.d(t, { k5: () => s });
      var r = n(2115),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = r.createContext && r.createContext(o),
        a = ['attr', 'size', 'title'];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                var r, o, i;
                (r = e),
                  (o = t),
                  (i = n[t]),
                  (o = (function (e) {
                    var t = (function (e, t) {
                      if ('object' != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || 'default');
                        if ('object' != typeof r) return r;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === t ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof t ? t : t + '';
                  })(o)) in r
                    ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function s(e) {
        return (t) =>
          r.createElement(
            d,
            l({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, n) =>
                  r.createElement(t.tag, c({ key: n }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function d(e) {
        var t = (t) => {
          var n,
            { attr: o, size: i, title: u } = e,
            s = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                      if (t.indexOf(r) >= 0) continue;
                      n[r] = e[r];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                  (n = i[r]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]);
              }
              return o;
            })(e, a),
            d = i || t.size || '1em';
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + ' ' : '') + e.className),
            r.createElement(
              'svg',
              l(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                o,
                s,
                {
                  className: n,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              u && r.createElement('title', null, u),
              e.children
            )
          );
        };
        return void 0 !== i
          ? r.createElement(i.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
    7917: () => {},
    8346: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_d65c78',
      };
    },
  },
]);
