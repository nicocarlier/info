'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [523],
  {
    175: (e, t, n) => {
      n.d(t, { Q: () => i });
      let r = [
        'animate',
        'circle',
        'defs',
        'desc',
        'ellipse',
        'g',
        'image',
        'line',
        'filter',
        'marker',
        'mask',
        'metadata',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'rect',
        'stop',
        'switch',
        'symbol',
        'svg',
        'text',
        'tspan',
        'use',
        'view',
      ];
      function i(e) {
        if ('string' != typeof e || e.includes('-'));
        else if (r.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    600: (e, t, n) => {
      n.d(t, { e: () => r });
      function r(e, { style: t, vars: n }, r, i) {
        for (let a in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(a, n[a]);
      }
    },
    621: (e, t, n) => {
      n.d(t, { H: () => r });
      function r(e, t) {
        try {
          t.dimensions =
            'function' == typeof e.getBBox
              ? e.getBBox()
              : e.getBoundingClientRect();
        } catch (e) {
          t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
    },
    637: (e, t, n) => {
      n.d(t, { $: () => a, H: () => i });
      var r = n(3676);
      let i = {};
      function a(e) {
        for (let t in e)
          (i[t] = e[t]), (0, r.j)(t) && (i[t].isCSSVariable = !0);
      }
    },
    760: (e, t, n) => {
      n.d(t, { N: () => v });
      var r = n(5155),
        i = n(2115),
        a = n(869),
        o = n(2885),
        s = n(7494),
        l = n(845),
        u = n(1508);
      class d extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              n = (e instanceof HTMLElement && e.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            (r.height = t.offsetHeight || 0),
              (r.width = t.offsetWidth || 0),
              (r.top = t.offsetTop),
              (r.left = t.offsetLeft),
              (r.right = n - r.width - r.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(e) {
        let { children: t, isPresent: n, anchorX: a } = e,
          o = (0, i.useId)(),
          s = (0, i.useRef)(null),
          l = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, i.useContext)(u.Q);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: t, top: r, left: i, right: u } = l.current;
            if (n || !s.current || !e || !t) return;
            s.current.dataset.motionPopId = o;
            let d = document.createElement('style');
            return (
              c && (d.nonce = c),
              document.head.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, 'px !important;\n            height: ')
                    .concat(t, 'px !important;\n            ')
                    .concat(
                      'left' === a ? 'left: '.concat(i) : 'right: '.concat(u),
                      'px !important;\n            top: '
                    )
                    .concat(r, 'px !important;\n          }\n        ')
                ),
              () => {
                document.head.removeChild(d);
              }
            );
          }, [n]),
          (0, r.jsx)(d, {
            isPresent: n,
            childRef: s,
            sizeRef: l,
            children: i.cloneElement(t, { ref: s }),
          })
        );
      }
      let f = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: a,
            onExitComplete: s,
            custom: u,
            presenceAffectsLayout: d,
            mode: f,
            anchorX: h,
          } = e,
          m = (0, o.M)(p),
          g = (0, i.useId)(),
          v = (0, i.useCallback)(
            (e) => {
              for (let t of (m.set(e, !0), m.values())) if (!t) return;
              s && s();
            },
            [m, s]
          ),
          y = (0, i.useMemo)(
            () => ({
              id: g,
              initial: n,
              isPresent: a,
              custom: u,
              onExitComplete: v,
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }),
            d ? [Math.random(), v] : [a, v]
          );
        return (
          (0, i.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1));
          }, [a]),
          i.useEffect(() => {
            a || m.size || !s || s();
          }, [a]),
          'popLayout' === f &&
            (t = (0, r.jsx)(c, { isPresent: a, anchorX: h, children: t })),
          (0, r.jsx)(l.t.Provider, { value: y, children: t })
        );
      };
      function p() {
        return new Map();
      }
      var h = n(2082);
      let m = (e) => e.key || '';
      function g(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let v = (e) => {
        let {
            children: t,
            custom: n,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: d = !0,
            mode: c = 'sync',
            propagate: p = !1,
            anchorX: v = 'left',
          } = e,
          [y, x] = (0, h.xQ)(p),
          w = (0, i.useMemo)(() => g(t), [t]),
          b = p && !y ? [] : w.map(m),
          E = (0, i.useRef)(!0),
          C = (0, i.useRef)(w),
          S = (0, o.M)(() => new Map()),
          [P, A] = (0, i.useState)(w),
          [j, M] = (0, i.useState)(w);
        (0, s.E)(() => {
          (E.current = !1), (C.current = w);
          for (let e = 0; e < j.length; e++) {
            let t = m(j[e]);
            b.includes(t) ? S.delete(t) : !0 !== S.get(t) && S.set(t, !1);
          }
        }, [j, b.length, b.join('-')]);
        let _ = [];
        if (w !== P) {
          let e = [...w];
          for (let t = 0; t < j.length; t++) {
            let n = j[t],
              r = m(n);
            b.includes(r) || (e.splice(t, 0, n), _.push(n));
          }
          return 'wait' === c && _.length && (e = _), M(g(e)), A(w), null;
        }
        let { forceRender: O } = (0, i.useContext)(a.L);
        return (0, r.jsx)(r.Fragment, {
          children: j.map((e) => {
            let t = m(e),
              i = (!p || !!y) && (w === j || b.includes(t));
            return (0, r.jsx)(
              f,
              {
                isPresent: i,
                initial: (!E.current || !!l) && void 0,
                custom: n,
                presenceAffectsLayout: d,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!S.has(t)) return;
                      S.set(t, !0);
                      let e = !0;
                      S.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == O || O(),
                          M(C.current),
                          p && (null == x || x()),
                          u && u());
                    },
                anchorX: v,
                children: e,
              },
              t
            );
          }),
        });
      };
    },
    797: (e, t, n) => {
      n.d(t, { N: () => r });
      let r = (0, n(2115).createContext)({});
    },
    802: (e, t, n) => {
      n.d(t, { W: () => l });
      var r = n(3082),
        i = n(5471);
      let a = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
        },
        o = {
          rotate: i.uj,
          rotateX: i.uj,
          rotateY: i.uj,
          rotateZ: i.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: i.uj,
          skewX: i.uj,
          skewY: i.uj,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.X4,
          originX: i.gQ,
          originY: i.gQ,
          originZ: i.px,
        },
        s = { ...r.ai, transform: Math.round },
        l = {
          ...a,
          ...o,
          zIndex: s,
          size: i.px,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: s,
        };
    },
    845: (e, t, n) => {
      n.d(t, { t: () => r });
      let r = (0, n(2115).createContext)(null);
    },
    869: (e, t, n) => {
      n.d(t, { L: () => r });
      let r = (0, n(2115).createContext)({});
    },
    901: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'RouterContext', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8229)._(n(2115)).default.createContext(null);
    },
    1193: (e, t) => {
      function n(e) {
        var t;
        let { config: n, src: r, width: i, quality: a } = e,
          o =
            a ||
            (null == (t = n.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          n.path +
          '?url=' +
          encodeURIComponent(r) +
          '&w=' +
          i +
          '&q=' +
          o +
          (r.startsWith('/_next/static/media/'), '')
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    1212: (e, t, n) => {
      n.d(t, { C: () => H });
      var r = n(5155);
      n(4331);
      var i = n(2115),
        a = n(869),
        o = n(2833),
        s = n(1508);
      let l = (0, i.createContext)({});
      var u = n(9253),
        d = n(5305);
      function c(e) {
        return Array.isArray(e) ? e.join(' ') : e;
      }
      var f = n(8972),
        p = n(6642),
        h = n(9480);
      let m = Symbol.for('motionComponentSymbol');
      var g = n(3991),
        v = n(2128),
        y = n(1788),
        x = n(845),
        w = n(797),
        b = n(7494),
        E = n(3055),
        C = n(4570),
        S = n(6169);
      let P = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function A(e, t, n) {
        for (let r in t) (0, C.S)(t[r]) || (0, E.z)(r, n) || (e[r] = t[r]);
      }
      let j = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'custom',
        'inherit',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'globalTapTarget',
        'ignoreStrict',
        'viewport',
      ]);
      function M(e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          e.startsWith('onLayout') ||
          j.has(e)
        );
      }
      let _ = (e) => !M(e);
      try {
        !(function (e) {
          e && (_ = (t) => (t.startsWith('on') ? !M(t) : e(t)));
        })(require('@emotion/is-prop-valid').default);
      } catch (e) {}
      var O = n(175),
        T = n(7914);
      let k = () => ({ ...P(), attrs: {} });
      var R = n(3095),
        L = n(6340),
        I = n(2735),
        z = n(2885),
        W = n(5902);
      let B = (e) => (t, n) => {
          let r = (0, i.useContext)(l),
            a = (0, i.useContext)(x.t),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onUpdate: n,
                },
                r,
                i,
                a
              ) {
                let o = {
                  latestValues: (function (e, t, n, r) {
                    let i = {},
                      a = r(e, {});
                    for (let e in a) i[e] = (0, W.u)(a[e]);
                    let { initial: o, animate: s } = e,
                      l = (0, u.e)(e),
                      d = (0, u.O)(e);
                    t &&
                      d &&
                      !l &&
                      !1 !== e.inherit &&
                      (void 0 === o && (o = t.initial),
                      void 0 === s && (s = t.animate));
                    let c = !!n && !1 === n.initial,
                      f = (c = c || !1 === o) ? s : o;
                    if (f && 'boolean' != typeof f && !(0, L.N)(f)) {
                      let t = Array.isArray(f) ? f : [f];
                      for (let n = 0; n < t.length; n++) {
                        let r = (0, I.a)(e, t[n]);
                        if (r) {
                          let { transitionEnd: e, transition: t, ...n } = r;
                          for (let e in n) {
                            let t = n[e];
                            if (Array.isArray(t)) {
                              let e = c ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (i[e] = t);
                          }
                          for (let t in e) i[t] = e[t];
                        }
                      }
                    }
                    return i;
                  })(r, i, a, e),
                  renderState: t(),
                };
                return (
                  n &&
                    ((o.onMount = (e) => n({ props: r, current: e, ...o })),
                    (o.onUpdate = (e) => n(e))),
                  o
                );
              })(e, t, r, a);
          return n ? o() : (0, z.M)(o);
        },
        V = {
          useVisualState: B({
            scrapeMotionValuesFromProps: n(8609).x,
            createRenderState: P,
          }),
        };
      var N = n(7387),
        F = n(621),
        D = n(3869),
        U = n(4527);
      let X = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
        $ = {
          useVisualState: B({
            scrapeMotionValuesFromProps: U.x,
            createRenderState: k,
            onUpdate: ({
              props: e,
              prevProps: t,
              current: n,
              renderState: r,
              latestValues: i,
            }) => {
              if (!n) return;
              let a = !!e.drag;
              if (!a) {
                for (let e in i)
                  if (N.f.has(e)) {
                    a = !0;
                    break;
                  }
              }
              if (!a) return;
              let o = !t;
              if (t)
                for (let n = 0; n < X.length; n++) {
                  let r = X[n];
                  e[r] !== t[r] && (o = !0);
                }
              o &&
                v.Gt.read(() => {
                  (0, F.H)(n, r),
                    v.Gt.render(() => {
                      (0, T.B)(r, i, (0, R.n)(n.tagName), e.transformTemplate),
                        (0, D.d)(n, r);
                    });
                });
            },
          }),
        };
      function H(e, t) {
        return function (
          n,
          { forwardMotionProps: E } = { forwardMotionProps: !1 }
        ) {
          return (function (e) {
            var t, n;
            let {
              preloadedFeatures: E,
              createVisualElement: C,
              useRender: S,
              useVisualState: P,
              Component: A,
            } = e;
            function j(e, t) {
              var n, h, m;
              let E;
              let j = {
                  ...(0, i.useContext)(s.Q),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      n = (0, i.useContext)(a.L).id;
                    return n && void 0 !== t ? n + '-' + t : t;
                  })(e),
                },
                { isStatic: M } = j,
                _ = (function (e) {
                  let { initial: t, animate: n } = (function (e, t) {
                    if ((0, u.e)(e)) {
                      let { initial: t, animate: n } = e;
                      return {
                        initial: !1 === t || (0, d.w)(t) ? t : void 0,
                        animate: (0, d.w)(n) ? n : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, i.useContext)(l));
                  return (0, i.useMemo)(
                    () => ({ initial: t, animate: n }),
                    [c(t), c(n)]
                  );
                })(e),
                O = P(e, M);
              if (!M && f.B) {
                (h = 0), (m = 0), (0, i.useContext)(o.Y).strict;
                let e = (function (e) {
                  let { drag: t, layout: n } = p.B;
                  if (!t && !n) return {};
                  let r = { ...t, ...n };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == n ? void 0 : n.isEnabled(e))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(j);
                (E = e.MeasureLayout),
                  (_.visualElement = (function (e, t, n, r, a) {
                    var u, d;
                    let { visualElement: c } = (0, i.useContext)(l),
                      f = (0, i.useContext)(o.Y),
                      p = (0, i.useContext)(x.t),
                      h = (0, i.useContext)(s.Q).reducedMotion,
                      m = (0, i.useRef)(null);
                    (r = r || f.renderer),
                      !m.current &&
                        r &&
                        (m.current = r(e, {
                          visualState: t,
                          parent: c,
                          props: n,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: h,
                        }));
                    let E = m.current,
                      C = (0, i.useContext)(w.N);
                    E &&
                      !E.projection &&
                      a &&
                      ('html' === E.type || 'svg' === E.type) &&
                      (function (e, t, n, r) {
                        let {
                          layoutId: i,
                          layout: a,
                          drag: o,
                          dragConstraints: s,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = t;
                        (e.projection = new n(
                          e.latestValues,
                          t['data-framer-portal-id']
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: i,
                            layout: a,
                            alwaysMeasureLayout: !!o || (s && (0, g.X)(s)),
                            visualElement: e,
                            animationType: 'string' == typeof a ? a : 'both',
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(m.current, n, a, C);
                    let S = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                      E && S.current && E.update(n, p);
                    });
                    let P = n[y.n],
                      A = (0, i.useRef)(
                        !!P &&
                          !(null === (u = window.MotionHandoffIsComplete) ||
                          void 0 === u
                            ? void 0
                            : u.call(window, P)) &&
                          (null === (d = window.MotionHasOptimisedAnimation) ||
                          void 0 === d
                            ? void 0
                            : d.call(window, P))
                      );
                    return (
                      (0, b.E)(() => {
                        E &&
                          ((S.current = !0),
                          (window.MotionIsMounted = !0),
                          E.updateFeatures(),
                          v.k2.render(E.render),
                          A.current &&
                            E.animationState &&
                            E.animationState.animateChanges());
                      }),
                      (0, i.useEffect)(() => {
                        E &&
                          (!A.current &&
                            E.animationState &&
                            E.animationState.animateChanges(),
                          A.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, P);
                            }),
                            (A.current = !1)));
                      }),
                      E
                    );
                  })(A, O, j, C, e.ProjectionNode));
              }
              return (0, r.jsxs)(l.Provider, {
                value: _,
                children: [
                  E && _.visualElement
                    ? (0, r.jsx)(E, { visualElement: _.visualElement, ...j })
                    : null,
                  S(
                    A,
                    e,
                    ((n = _.visualElement),
                    (0, i.useCallback)(
                      (e) => {
                        e && O.onMount && O.onMount(e),
                          n && (e ? n.mount(e) : n.unmount()),
                          t &&
                            ('function' == typeof t
                              ? t(e)
                              : (0, g.X)(t) && (t.current = e));
                      },
                      [n]
                    )),
                    O,
                    M,
                    _.visualElement
                  ),
                ],
              });
            }
            E && (0, h.Y)(E),
              (j.displayName = 'motion.'.concat(
                'string' == typeof A
                  ? A
                  : 'create('.concat(
                      null !==
                        (n =
                          null !== (t = A.displayName) && void 0 !== t
                            ? t
                            : A.name) && void 0 !== n
                        ? n
                        : '',
                      ')'
                    )
              ));
            let M = (0, i.forwardRef)(j);
            return (M[m] = A), M;
          })({
            ...((0, O.Q)(n) ? $ : V),
            preloadedFeatures: e,
            useRender: (function (e = !1) {
              return (t, n, r, { latestValues: a }, o) => {
                let s = (
                    (0, O.Q)(t)
                      ? function (e, t, n, r) {
                          let a = (0, i.useMemo)(() => {
                            let n = k();
                            return (
                              (0, T.B)(n, t, (0, R.n)(r), e.transformTemplate),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            A(t, e.style, e), (a.style = { ...t, ...a.style });
                          }
                          return a;
                        }
                      : function (e, t) {
                          let n = {},
                            r = (function (e, t) {
                              let n = e.style || {},
                                r = {};
                              return (
                                A(r, n, e),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, i.useMemo)(() => {
                                      let n = P();
                                      return (
                                        (0, S.O)(n, t, e),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                r
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((n.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  'none'),
                              (r.touchAction =
                                !0 === e.drag
                                  ? 'none'
                                  : `pan-${'x' === e.drag ? 'y' : 'x'}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = r),
                            n
                          );
                        }
                  )(n, a, o, t),
                  l = (function (e, t, n) {
                    let r = {};
                    for (let i in e)
                      ('values' !== i || 'object' != typeof e.values) &&
                        (_(i) ||
                          (!0 === n && M(i)) ||
                          (!t && !M(i)) ||
                          (e.draggable && i.startsWith('onDrag'))) &&
                        (r[i] = e[i]);
                    return r;
                  })(n, 'string' == typeof t, e),
                  u = t !== i.Fragment ? { ...l, ...s, ref: r } : {},
                  { children: d } = n,
                  c = (0, i.useMemo)(() => ((0, C.S)(d) ? d.get() : d), [d]);
                return (0, i.createElement)(t, { ...u, children: c });
              };
            })(E),
            createVisualElement: t,
            Component: n,
          });
        };
      }
    },
    1508: (e, t, n) => {
      n.d(t, { Q: () => r });
      let r = (0, n(2115).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: 'never',
      });
    },
    1788: (e, t, n) => {
      n.d(t, { n: () => r });
      let r = 'data-' + (0, n(8450).I)('framerAppearId');
    },
    2082: (e, t, n) => {
      n.d(t, { xQ: () => a });
      var r = n(2115),
        i = n(845);
      function a(e = !0) {
        let t = (0, r.useContext)(i.t);
        if (null === t) return [!0, null];
        let { isPresent: n, onExitComplete: o, register: s } = t,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (e) return s(l);
        }, [e]);
        let u = (0, r.useCallback)(() => e && o && o(l), [l, o, e]);
        return !n && o ? [!1, u] : [!0];
      }
    },
    2128: (e, t, n) => {
      let r;
      n.d(t, {
        P6: () => s,
        qU: () => X,
        vG: () => f,
        tu: () => d,
        WG: () => S,
        Gt: () => C,
        uv: () => P,
        PP: () => A,
        KZ: () => g,
        rU: () => l,
        PT: () => L,
        DW: () => p,
        WH: () => c,
        Mc: () => z,
        yL: () => v,
        TU: () =>
          function e(t, n) {
            if (t)
              return 'function' == typeof t && m()
                ? g(t, n)
                : p(t)
                  ? y(t)
                  : Array.isArray(t)
                    ? t.map((t) => e(t, n) || x.easeOut)
                    : x[t];
          },
        YE: () => u,
        k2: () => j,
        OQ: () => K,
        c$: () => U,
        Wp: () => T,
        Qu: () => b,
        nL: () => m,
        kB: () => _,
      });
      var i = n(4331);
      let a = (0, i.ph)(() => void 0 !== window.ScrollTimeline);
      class o {
        constructor(e) {
          (this.stop = () => this.runAll('stop')),
            (this.animations = e.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((e) => ('finished' in e ? e.finished : e))
          );
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let n = 0; n < this.animations.length; n++)
            this.animations[n][e] = t;
        }
        attachTimeline(e, t) {
          let n = this.animations.map((n) =>
            a() && n.attachTimeline
              ? n.attachTimeline(e)
              : 'function' == typeof t
                ? t(n)
                : void 0
          );
          return () => {
            n.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(e) {
          this.setAll('time', e);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(e) {
          this.setAll('speed', e);
        }
        get startTime() {
          return this.getAll('startTime');
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll('flatten');
        }
        play() {
          this.runAll('play');
        }
        pause() {
          this.runAll('pause');
        }
        cancel() {
          this.runAll('cancel');
        }
        complete() {
          this.runAll('complete');
        }
      }
      class s extends o {
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
      }
      function l(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      let u = 2e4;
      function d(e) {
        let t = 0,
          n = e.next(t);
        for (; !n.done && t < u; ) (t += 50), (n = e.next(t));
        return t >= u ? 1 / 0 : t;
      }
      function c(e) {
        return 'function' == typeof e;
      }
      function f(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let p = (e) => Array.isArray(e) && 'number' == typeof e[0],
        h = { linearEasing: void 0 },
        m = (function (e, t) {
          let n = (0, i.ph)(e);
          return () => {
            var e;
            return null !== (e = h[t]) && void 0 !== e ? e : n();
          };
        })(() => {
          try {
            document
              .createElement('div')
              .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
          } catch (e) {
            return !1;
          }
          return !0;
        }, 'linearEasing'),
        g = (e, t, n = 10) => {
          let r = '',
            a = Math.max(Math.round(t / n), 2);
          for (let t = 0; t < a; t++) r += e((0, i.qB)(0, a - 1, t)) + ', ';
          return `linear(${r.substring(0, r.length - 2)})`;
        };
      function v(e) {
        return !!(
          ('function' == typeof e && m()) ||
          !e ||
          ('string' == typeof e && (e in x || m())) ||
          p(e) ||
          (Array.isArray(e) && e.every(v))
        );
      }
      let y = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
        x = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        w = [
          'read',
          'resolveKeyframes',
          'update',
          'preRender',
          'render',
          'postRender',
        ],
        b = { value: null, addProjectionMetrics: null };
      function E(e, t) {
        let n = !1,
          r = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (n = !0),
          s = w.reduce(
            (e, n) => (
              (e[n] = (function (e, t) {
                let n = new Set(),
                  r = new Set(),
                  i = !1,
                  a = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(t) {
                  o.has(t) && (d.schedule(t), e()), l++, t(s);
                }
                let d = {
                  schedule: (e, t = !1, a = !1) => {
                    let s = a && i ? n : r;
                    return t && o.add(e), s.has(e) || s.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), o.delete(e);
                  },
                  process: (e) => {
                    if (((s = e), i)) {
                      a = !0;
                      return;
                    }
                    (i = !0),
                      ([n, r] = [r, n]),
                      n.forEach(u),
                      t && b.value && b.value.frameloop[t].push(l),
                      (l = 0),
                      n.clear(),
                      (i = !1),
                      a && ((a = !1), d.process(e));
                  },
                };
                return d;
              })(o, t ? n : void 0)),
              e
            ),
            {}
          ),
          {
            read: l,
            resolveKeyframes: u,
            update: d,
            preRender: c,
            render: f,
            postRender: p,
          } = s,
          h = () => {
            let o = i.W9.useManualTiming ? a.timestamp : performance.now();
            (n = !1),
              i.W9.useManualTiming ||
                (a.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(o - a.timestamp, 40), 1)),
              (a.timestamp = o),
              (a.isProcessing = !0),
              l.process(a),
              u.process(a),
              d.process(a),
              c.process(a),
              f.process(a),
              p.process(a),
              (a.isProcessing = !1),
              n && t && ((r = !1), e(h));
          },
          m = () => {
            (n = !0), (r = !0), a.isProcessing || e(h);
          };
        return {
          schedule: w.reduce((e, t) => {
            let r = s[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < w.length; t++) s[w[t]].cancel(e);
          },
          state: a,
          steps: s,
        };
      }
      let {
          schedule: C,
          cancel: S,
          state: P,
          steps: A,
        } = E(
          'undefined' != typeof requestAnimationFrame
            ? requestAnimationFrame
            : i.lQ,
          !0
        ),
        { schedule: j } = E(queueMicrotask, !1);
      function M() {
        r = void 0;
      }
      let _ = {
          now: () => (
            void 0 === r &&
              _.set(
                P.isProcessing || i.W9.useManualTiming
                  ? P.timestamp
                  : performance.now()
              ),
            r
          ),
          set: (e) => {
            (r = e), queueMicrotask(M);
          },
        },
        O = { x: !1, y: !1 };
      function T(e) {
        return 'x' === e || 'y' === e
          ? O[e]
            ? null
            : ((O[e] = !0),
              () => {
                O[e] = !1;
              })
          : O.x || O.y
            ? null
            : ((O.x = O.y = !0),
              () => {
                O.x = O.y = !1;
              });
      }
      function k(e, t) {
        let n = (function (e, t, n) {
            var r;
            if (e instanceof EventTarget) return [e];
            if ('string' == typeof e) {
              let t = document,
                n = ((r = void 0), t.querySelectorAll(e));
              return n ? Array.from(n) : [];
            }
            return Array.from(e);
          })(e),
          r = new AbortController();
        return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
      }
      function R(e) {
        return !('touch' === e.pointerType || O.x || O.y);
      }
      function L(e, t, n = {}) {
        let [r, i, a] = k(e, n),
          o = (e) => {
            if (!R(e)) return;
            let { target: n } = e,
              r = t(n, e);
            if ('function' != typeof r || !n) return;
            let a = (e) => {
              R(e) && (r(e), n.removeEventListener('pointerleave', a));
            };
            n.addEventListener('pointerleave', a, i);
          };
        return (
          r.forEach((e) => {
            e.addEventListener('pointerenter', o, i);
          }),
          a
        );
      }
      let I = (e, t) => !!t && (e === t || I(e, t.parentElement)),
        z = (e) =>
          'mouse' === e.pointerType
            ? 'number' != typeof e.button || e.button <= 0
            : !1 !== e.isPrimary,
        W = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
        B = new WeakSet();
      function V(e) {
        return (t) => {
          'Enter' === t.key && e(t);
        };
      }
      function N(e, t) {
        e.dispatchEvent(
          new PointerEvent('pointer' + t, { isPrimary: !0, bubbles: !0 })
        );
      }
      let F = (e, t) => {
        let n = e.currentTarget;
        if (!n) return;
        let r = V(() => {
          if (B.has(n)) return;
          N(n, 'down');
          let e = V(() => {
            N(n, 'up');
          });
          n.addEventListener('keyup', e, t),
            n.addEventListener('blur', () => N(n, 'cancel'), t);
        });
        n.addEventListener('keydown', r, t),
          n.addEventListener(
            'blur',
            () => n.removeEventListener('keydown', r),
            t
          );
      };
      function D(e) {
        return z(e) && !(O.x || O.y);
      }
      function U(e, t, n = {}) {
        let [r, i, a] = k(e, n),
          o = (e) => {
            let r = e.currentTarget;
            if (!D(e) || B.has(r)) return;
            B.add(r);
            let a = t(r, e),
              o = (e, t) => {
                window.removeEventListener('pointerup', s),
                  window.removeEventListener('pointercancel', l),
                  D(e) &&
                    B.has(r) &&
                    (B.delete(r),
                    'function' == typeof a && a(e, { success: t }));
              },
              s = (e) => {
                o(
                  e,
                  r === window ||
                    r === document ||
                    n.useGlobalTarget ||
                    I(r, e.target)
                );
              },
              l = (e) => {
                o(e, !1);
              };
            window.addEventListener('pointerup', s, i),
              window.addEventListener('pointercancel', l, i);
          };
        return (
          r.forEach((e) => {
            if (
              ((n.useGlobalTarget ? window : e).addEventListener(
                'pointerdown',
                o,
                i
              ),
              e instanceof HTMLElement)
            )
              e.addEventListener('focus', (e) => F(e, i)),
                !W.has(e.tagName) &&
                  -1 === e.tabIndex &&
                  null === e.tabIndex &&
                  (e.tabIndex = 0);
          }),
          a
        );
      }
      let X = { layout: 0, mainThread: 0, waapi: 0 };
      function $() {
        let { value: e } = statsBuffer;
        if (null === e) {
          cancelFrame($);
          return;
        }
        e.frameloop.rate.push(frameData.delta),
          e.animations.mainThread.push(activeAnimations.mainThread),
          e.animations.waapi.push(activeAnimations.waapi),
          e.animations.layout.push(activeAnimations.layout);
      }
      function H(e) {
        return e.reduce((e, t) => e + t, 0) / e.length;
      }
      function q(e, t = H) {
        return 0 === e.length
          ? { min: 0, max: 0, avg: 0 }
          : { min: Math.min(...e), max: Math.max(...e), avg: t(e) };
      }
      let Y = (e) => Math.round(1e3 / e),
        Q = (e) => !isNaN(parseFloat(e)),
        G = { current: void 0 };
      class Z {
        constructor(e, t = {}) {
          (this.version = '12.6.1'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let n = _.now();
              this.updatedAt !== n && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = _.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = Q(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on('change', e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new i.vY());
          let n = this.events[e].add(t);
          return 'change' === e
            ? () => {
                n(),
                  C.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, n) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - n);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return G.current && G.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = _.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.fj)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function K(e, t) {
        return new Z(e, t);
      }
      let J = null,
        ee = null;
    },
    2464: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'AmpStateContext', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(8229)._(n(2115)).default.createContext({});
    },
    2735: (e, t, n) => {
      function r(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, n) => {
              (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
          t
        );
      }
      function i(e, t, n, i) {
        if ('function' == typeof t) {
          let [a, o] = r(i);
          t = t(void 0 !== n ? n : e.custom, a, o);
        }
        if (
          ('string' == typeof t && (t = e.variants && e.variants[t]),
          'function' == typeof t)
        ) {
          let [a, o] = r(i);
          t = t(void 0 !== n ? n : e.custom, a, o);
        }
        return t;
      }
      n.d(t, { a: () => i });
    },
    2833: (e, t, n) => {
      n.d(t, { Y: () => r });
      let r = (0, n(2115).createContext)({ strict: !1 });
    },
    2885: (e, t, n) => {
      n.d(t, { M: () => i });
      var r = n(2115);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    3055: (e, t, n) => {
      n.d(t, { z: () => a });
      var r = n(637),
        i = n(7387);
      function a(e, { layout: t, layoutId: n }) {
        return (
          i.f.has(e) ||
          e.startsWith('origin') ||
          ((t || void 0 !== n) && (!!r.H[e] || 'opacity' === e))
        );
      }
    },
    3063: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Image', {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(8229),
        i = n(6966),
        a = n(5155),
        o = i._(n(2115)),
        s = r._(n(7650)),
        l = r._(n(5564)),
        u = n(8883),
        d = n(5840),
        c = n(6752);
      n(3230);
      let f = n(901),
        p = r._(n(1193)),
        h = n(6654),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function g(e, t, n, r, i, a, o) {
        let s = null == e ? void 0 : e.src;
        e &&
          e['data-loaded-src'] !== s &&
          ((e['data-loaded-src'] = s),
          ('decode' in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (('empty' !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event('load');
                  Object.defineProperty(t, 'target', {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function v(e) {
        return o.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, o.forwardRef)((e, t) => {
        let {
            src: n,
            srcSet: r,
            sizes: i,
            height: s,
            width: l,
            decoding: u,
            className: d,
            style: c,
            fetchPriority: f,
            placeholder: p,
            loading: m,
            unoptimized: y,
            fill: x,
            onLoadRef: w,
            onLoadingCompleteRef: b,
            setBlurComplete: E,
            setShowAltText: C,
            sizesInput: S,
            onLoad: P,
            onError: A,
            ...j
          } = e,
          M = (0, o.useCallback)(
            (e) => {
              e && (A && (e.src = e.src), e.complete && g(e, p, w, b, E, y, S));
            },
            [n, p, w, b, E, A, y, S]
          ),
          _ = (0, h.useMergedRef)(t, M);
        return (0, a.jsx)('img', {
          ...j,
          ...v(f),
          loading: m,
          width: l,
          height: s,
          decoding: u,
          'data-nimg': x ? 'fill' : '1',
          className: d,
          style: c,
          sizes: i,
          srcSet: r,
          src: n,
          ref: _,
          onLoad: (e) => {
            g(e.currentTarget, p, w, b, E, y, S);
          },
          onError: (e) => {
            C(!0), 'empty' !== p && E(!0), A && A(e);
          },
        });
      });
      function x(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: 'image',
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(n.src, r), null)
          : (0, a.jsx)(l.default, {
              children: (0, a.jsx)(
                'link',
                { rel: 'preload', href: n.srcSet ? void 0 : n.src, ...r },
                '__nimg-' + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let w = (0, o.forwardRef)((e, t) => {
        let n = (0, o.useContext)(f.RouterContext),
          r = (0, o.useContext)(c.ImageConfigContext),
          i = (0, o.useMemo)(() => {
            var e;
            let t = m || r || d.imageConfigDefault,
              n = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              i = t.deviceSizes.sort((e, t) => e - t),
              a = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: n, deviceSizes: i, qualities: a };
          }, [r]),
          { onLoad: s, onLoadingComplete: l } = e,
          h = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          h.current = s;
        }, [s]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [v, w] = (0, o.useState)(!1),
          [b, E] = (0, o.useState)(!1),
          { props: C, meta: S } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: v,
            showAltText: b,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(y, {
              ...C,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            S.priority
              ? (0, a.jsx)(x, { isAppRouter: !n, imgAttributes: C })
              : null,
          ],
        });
      });
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3082: (e, t, n) => {
      n.d(t, { X4: () => a, ai: () => i, hs: () => o });
      var r = n(7782);
      let i = {
          test: (e) => 'number' == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        a = { ...i, transform: (e) => (0, r.q)(0, 1, e) },
        o = { ...i, default: 1 };
    },
    3095: (e, t, n) => {
      n.d(t, { n: () => r });
      let r = (e) => 'string' == typeof e && 'svg' === e.toLowerCase();
    },
    3676: (e, t, n) => {
      n.d(t, { j: () => i, p: () => o });
      let r = (e) => (t) => 'string' == typeof t && t.startsWith(e),
        i = r('--'),
        a = r('var(--'),
        o = (e) => !!a(e) && s.test(e.split('/*')[0].trim()),
        s =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    3869: (e, t, n) => {
      n.d(t, { d: () => o });
      var r = n(8450),
        i = n(600),
        a = n(6381);
      function o(e, t, n, o) {
        for (let n in ((0, i.e)(e, t, void 0, o), t.attrs))
          e.setAttribute(a.e.has(n) ? n : (0, r.I)(n), t.attrs[n]);
      }
    },
    3991: (e, t, n) => {
      n.d(t, { X: () => r });
      function r(e) {
        return (
          e &&
          'object' == typeof e &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        );
      }
    },
    4060: (e, t, n) => {
      function r(e) {
        if ('undefined' == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (n, r) =>
            'create' === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
        });
      }
      n.d(t, { I: () => r }), n(4331);
    },
    4331: (e, t, n) => {
      function r(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      n.d(t, {
        W9: () => l,
        vY: () => c,
        Kq: () => r,
        V1: () => s,
        ph: () => u,
        Xu: () => p,
        lQ: () => a,
        qB: () => d,
        Ai: () => i,
        fD: () => f,
        fj: () => h,
        $e: () => o,
      });
      let a = (e) => e,
        o = a,
        s = a,
        l = { skipAnimations: !1, useManualTiming: !1 };
      function u(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let d = (e, t, n) => {
        let r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      };
      class c {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return r(this.subscriptions, e), () => i(this.subscriptions, e);
        }
        notify(e, t, n) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](e, t, n);
            else
              for (let i = 0; i < r; i++) {
                let r = this.subscriptions[i];
                r && r(e, t, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let f = (e) => 1e3 * e,
        p = (e) => e / 1e3;
      function h(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
    },
    4379: (e, t, n) => {
      n.d(t, { B: () => i, K: () => a });
      var r = n(5910);
      let i = (e) => !!(e && 'object' == typeof e && e.mix && e.toValue),
        a = (e) => ((0, r.p)(e) ? e[e.length - 1] || 0 : e);
    },
    4527: (e, t, n) => {
      n.d(t, { x: () => o });
      var r = n(4570),
        i = n(7387),
        a = n(8609);
      function o(e, t, n) {
        let o = (0, a.x)(e, t, n);
        for (let n in e)
          ((0, r.S)(e[n]) || (0, r.S)(t[n])) &&
            (o[
              -1 !== i.U.indexOf(n)
                ? 'attr' + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return o;
      }
    },
    4570: (e, t, n) => {
      n.d(t, { S: () => r });
      let r = (e) => !!(e && e.getVelocity);
    },
    5029: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(2115),
        i = r.useLayoutEffect,
        a = r.useEffect;
      function o(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function o() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = o),
              () => {
                t && (t._pendingUpdate = o);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    5100: (e, t) => {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: a,
            objectFit: o,
          } = e,
          s = r ? 40 * r : t,
          l = i ? 40 * i : n,
          u = s && l ? "viewBox='0 0 " + s + ' ' + l + "'" : '';
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? 'none'
            : 'contain' === o
              ? 'xMidYMid'
              : 'cover' === o
                ? 'xMidYMid slice'
                : 'none') +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    5305: (e, t, n) => {
      n.d(t, { w: () => r });
      function r(e) {
        return 'string' == typeof e || Array.isArray(e);
      }
    },
    5471: (e, t, n) => {
      n.d(t, {
        KN: () => a,
        gQ: () => u,
        px: () => o,
        uj: () => i,
        vh: () => s,
        vw: () => l,
      });
      let r = (e) => ({
          test: (t) =>
            'string' == typeof t && t.endsWith(e) && 1 === t.split(' ').length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        i = r('deg'),
        a = r('%'),
        o = r('px'),
        s = r('vh'),
        l = r('vw'),
        u = {
          ...a,
          parse: (e) => a.parse(e) / 100,
          transform: (e) => a.transform(100 * e),
        };
    },
    5564: (e, t, n) => {
      var r = n(9509);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return f;
          },
        });
      let i = n(8229),
        a = n(6966),
        o = n(5155),
        s = a._(n(2115)),
        l = i._(n(5029)),
        u = n(2464),
        d = n(2830),
        c = n(7544);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)('meta', { charSet: 'utf-8' }, 'charset')];
        return (
          e ||
            t.push(
              (0, o.jsx)(
                'meta',
                { name: 'viewport', content: 'width=device-width' },
                'viewport'
              )
            ),
          t
        );
      }
      function p(e, t) {
        return 'string' == typeof t || 'number' == typeof t
          ? e
          : t.type === s.default.Fragment
            ? e.concat(
                s.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    'string' == typeof t || 'number' == typeof t
                      ? e
                      : e.concat(t),
                  []
                )
              )
            : e.concat(t);
      }
      n(3230);
      let h = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let a = !0,
                  o = !1;
                if (
                  i.key &&
                  'number' != typeof i.key &&
                  i.key.indexOf('$') > 0
                ) {
                  o = !0;
                  let t = i.key.slice(i.key.indexOf('$') + 1);
                  e.has(t) ? (a = !1) : e.add(t);
                }
                switch (i.type) {
                  case 'title':
                  case 'base':
                    t.has(i.type) ? (a = !1) : t.add(i.type);
                    break;
                  case 'meta':
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ('charSet' === t) n.has(t) ? (a = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ('name' !== t || !o) && n.has(e)
                            ? (a = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !n &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t['data-href'] = t.href),
                (t.href = void 0),
                (t['data-optimized-fonts'] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, s.useContext)(u.AmpStateContext),
          r = (0, s.useContext)(d.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5840: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'attachment',
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    5902: (e, t, n) => {
      n.d(t, { u: () => a });
      var r = n(4379),
        i = n(4570);
      function a(e) {
        let t = (0, i.S)(e) ? e.get() : e;
        return (0, r.B)(t) ? t.toValue() : t;
      }
    },
    5910: (e, t, n) => {
      n.d(t, { p: () => r });
      let r = (e) => Array.isArray(e);
    },
    6169: (e, t, n) => {
      n.d(t, { O: () => u });
      var r = n(3676);
      let i = (e, t) => (t && 'number' == typeof e ? t.transform(e) : e);
      var a = n(802),
        o = n(7387);
      let s = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        l = o.U.length;
      function u(e, t, n) {
        let { style: u, vars: d, transformOrigin: c } = e,
          f = !1,
          p = !1;
        for (let e in t) {
          let n = t[e];
          if (o.f.has(e)) {
            f = !0;
            continue;
          }
          if ((0, r.j)(e)) {
            d[e] = n;
            continue;
          }
          {
            let t = i(n, a.W[e]);
            e.startsWith('origin') ? ((p = !0), (c[e] = t)) : (u[e] = t);
          }
        }
        if (
          (!t.transform &&
            (f || n
              ? (u.transform = (function (e, t, n) {
                  let r = '',
                    u = !0;
                  for (let d = 0; d < l; d++) {
                    let l = o.U[d],
                      c = e[l];
                    if (void 0 === c) continue;
                    let f = !0;
                    if (
                      !(f =
                        'number' == typeof c
                          ? c === +!!l.startsWith('scale')
                          : 0 === parseFloat(c)) ||
                      n
                    ) {
                      let e = i(c, a.W[l]);
                      if (!f) {
                        u = !1;
                        let t = s[l] || l;
                        r += `${t}(${e}) `;
                      }
                      n && (t[l] = e);
                    }
                  }
                  return (
                    (r = r.trim()),
                    n ? (r = n(t, u ? '' : r)) : u && (r = 'none'),
                    r
                  );
                })(t, e.transform, n))
              : u.transform && (u.transform = 'none')),
          p)
        ) {
          let { originX: e = '50%', originY: t = '50%', originZ: n = 0 } = c;
          u.transformOrigin = `${e} ${t} ${n}`;
        }
      }
    },
    6340: (e, t, n) => {
      n.d(t, { N: () => r });
      function r(e) {
        return (
          null !== e && 'object' == typeof e && 'function' == typeof e.start
        );
      }
    },
    6381: (e, t, n) => {
      n.d(t, { e: () => r });
      let r = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ]);
    },
    6642: (e, t, n) => {
      n.d(t, { B: () => i });
      let r = {
          animation: [
            'animate',
            'variants',
            'whileHover',
            'whileTap',
            'exit',
            'whileInView',
            'whileFocus',
            'whileDrag',
          ],
          exit: ['exit'],
          drag: ['drag', 'dragControls'],
          focus: ['whileFocus'],
          hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
          tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
          pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
          inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
          layout: ['layout', 'layoutId'],
        },
        i = {};
      for (let e in r) i[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
    },
    6752: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ImageConfigContext', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(8229)._(n(2115)),
        i = n(5840),
        a = r.default.createContext(i.imageConfigDefault);
    },
    7387: (e, t, n) => {
      n.d(t, { U: () => r, f: () => i });
      let r = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        i = new Set(r);
    },
    7494: (e, t, n) => {
      n.d(t, { E: () => i });
      var r = n(2115);
      let i = n(8972).B ? r.useLayoutEffect : r.useEffect;
    },
    7544: (e, t) => {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isInAmpMode', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    7782: (e, t, n) => {
      n.d(t, { q: () => r });
      let r = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    7914: (e, t, n) => {
      n.d(t, { B: () => l });
      var r = n(6169),
        i = n(5471);
      let a = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        o = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function s(e, t, n) {
        return 'string' == typeof e ? e : i.px.transform(t + n * e);
      }
      function l(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: l,
          originX: u,
          originY: d,
          pathLength: c,
          pathSpacing: f = 1,
          pathOffset: p = 0,
          ...h
        },
        m,
        g
      ) {
        if (((0, r.O)(e, h, g), m)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: y, dimensions: x } = e;
        v.transform && (x && (y.transform = v.transform), delete v.transform),
          x &&
            (void 0 !== u || void 0 !== d || y.transform) &&
            (y.transformOrigin = (function (e, t, n) {
              let r = s(t, e.x, e.width),
                i = s(n, e.y, e.height);
              return `${r} ${i}`;
            })(x, void 0 !== u ? u : 0.5, void 0 !== d ? d : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== n && (v.y = n),
          void 0 !== l && (v.scale = l),
          void 0 !== c &&
            (function (e, t, n = 1, r = 0, s = !0) {
              e.pathLength = 1;
              let l = s ? a : o;
              e[l.offset] = i.px.transform(-r);
              let u = i.px.transform(t),
                d = i.px.transform(n);
              e[l.array] = `${u} ${d}`;
            })(v, c, f, p, !1);
      }
    },
    8312: (e, t, n) => {
      n.d(t, { U: () => r, _: () => i });
      let r = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        i = ['initial', ...r];
    },
    8450: (e, t, n) => {
      n.d(t, { I: () => r });
      let r = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase();
    },
    8609: (e, t, n) => {
      n.d(t, { x: () => a });
      var r = n(3055),
        i = n(4570);
      function a(e, t, n) {
        var a;
        let { style: o } = e,
          s = {};
        for (let l in o)
          ((0, i.S)(o[l]) ||
            (t.style && (0, i.S)(t.style[l])) ||
            (0, r.z)(l, e) ||
            (null === (a = null == n ? void 0 : n.getValue(l)) || void 0 === a
              ? void 0
              : a.liveStyle) !== void 0) &&
            (s[l] = o[l]);
        return s;
      }
    },
    8883: (e, t, n) => {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImgProps', {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        n(3230);
      let r = n(5100),
        i = n(5840);
      function a(e) {
        return void 0 !== e.default;
      }
      function o(e) {
        return void 0 === e
          ? e
          : 'number' == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : 'string' == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function s(e, t) {
        var n, s;
        let l,
          u,
          d,
          {
            src: c,
            sizes: f,
            unoptimized: p = !1,
            priority: h = !1,
            loading: m,
            className: g,
            quality: v,
            width: y,
            height: x,
            fill: w = !1,
            style: b,
            overrideSrc: E,
            onLoad: C,
            onLoadingComplete: S,
            placeholder: P = 'empty',
            blurDataURL: A,
            fetchPriority: j,
            decoding: M = 'async',
            layout: _,
            objectFit: O,
            objectPosition: T,
            lazyBoundary: k,
            lazyRoot: R,
            ...L
          } = e,
          { imgConf: I, showAltText: z, blurComplete: W, defaultLoader: B } = t,
          V = I || i.imageConfigDefault;
        if ('allSizes' in V) l = V;
        else {
          let e = [...V.deviceSizes, ...V.imageSizes].sort((e, t) => e - t),
            t = V.deviceSizes.sort((e, t) => e - t),
            r = null == (n = V.qualities) ? void 0 : n.sort((e, t) => e - t);
          l = { ...V, allSizes: e, deviceSizes: t, qualities: r };
        }
        if (void 0 === B)
          throw Object.defineProperty(
            Error(
              'images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'
            ),
            '__NEXT_ERROR_CODE',
            { value: 'E163', enumerable: !1, configurable: !0 }
          );
        let N = L.loader || B;
        delete L.loader, delete L.srcSet;
        let F = '__next_img_default' in N;
        if (F) {
          if ('custom' === l.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  c +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E252', enumerable: !1, configurable: !0 }
            );
        } else {
          let e = N;
          N = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (_) {
          'fill' === _ && (w = !0);
          let e = {
            intrinsic: { maxWidth: '100%', height: 'auto' },
            responsive: { width: '100%', height: 'auto' },
          }[_];
          e && (b = { ...b, ...e });
          let t = { responsive: '100vw', fill: '100vw' }[_];
          t && !f && (f = t);
        }
        let D = '',
          U = o(y),
          X = o(x);
        if ((s = c) && 'object' == typeof s && (a(s) || void 0 !== s.src)) {
          let e = a(c) ? c.default : c;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                  JSON.stringify(e)
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E460', enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                  JSON.stringify(e)
              ),
              '__NEXT_ERROR_CODE',
              { value: 'E48', enumerable: !1, configurable: !0 }
            );
          if (
            ((u = e.blurWidth),
            (d = e.blurHeight),
            (A = A || e.blurDataURL),
            (D = e.src),
            !w)
          ) {
            if (U || X) {
              if (U && !X) {
                let t = U / e.width;
                X = Math.round(e.height * t);
              } else if (!U && X) {
                let t = X / e.height;
                U = Math.round(e.width * t);
              }
            } else (U = e.width), (X = e.height);
          }
        }
        let $ = !h && ('lazy' === m || void 0 === m);
        (!(c = 'string' == typeof c ? c : D) ||
          c.startsWith('data:') ||
          c.startsWith('blob:')) &&
          ((p = !0), ($ = !1)),
          l.unoptimized && (p = !0),
          F &&
            !l.dangerouslyAllowSVG &&
            c.split('?', 1)[0].endsWith('.svg') &&
            (p = !0);
        let H = o(v),
          q = Object.assign(
            w
              ? {
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: T,
                }
              : {},
            z ? {} : { color: 'transparent' },
            b
          ),
          Y =
            W || 'empty' === P
              ? null
              : 'blur' === P
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, r.getImageBlurSvg)({
                    widthInt: U,
                    heightInt: X,
                    blurWidth: u,
                    blurHeight: d,
                    blurDataURL: A || '',
                    objectFit: q.objectFit,
                  }) +
                  '")'
                : 'url("' + P + '")',
          Q = Y
            ? {
                backgroundSize: q.objectFit || 'cover',
                backgroundPosition: q.objectPosition || '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: Y,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: a,
              sizes: o,
              loader: s,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: 'w',
                    };
                  }
                  return { widths: i, kind: 'w' };
                }
                return 'number' != typeof t
                  ? { widths: r, kind: 'w' }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: 'x',
                    };
              })(t, i, o),
              d = l.length - 1;
            return {
              sizes: o || 'w' !== u ? o : '100vw',
              srcSet: l
                .map(
                  (e, r) =>
                    s({ config: t, src: n, quality: a, width: e }) +
                    ' ' +
                    ('w' === u ? e : r + 1) +
                    u
                )
                .join(', '),
              src: s({ config: t, src: n, quality: a, width: l[d] }),
            };
          })({
            config: l,
            src: c,
            unoptimized: p,
            width: U,
            quality: H,
            sizes: f,
            loader: N,
          });
        return {
          props: {
            ...L,
            loading: $ ? 'lazy' : m,
            fetchPriority: j,
            width: U,
            height: X,
            decoding: M,
            className: g,
            style: { ...q, ...Q },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: E || G.src,
          },
          meta: { unoptimized: p, priority: h, placeholder: P, fill: w },
        };
      }
    },
    8972: (e, t, n) => {
      n.d(t, { B: () => r });
      let r = 'undefined' != typeof window;
    },
    9253: (e, t, n) => {
      n.d(t, { O: () => s, e: () => o });
      var r = n(6340),
        i = n(5305),
        a = n(8312);
      function o(e) {
        return (0, r.N)(e.animate) || a._.some((t) => (0, i.w)(e[t]));
      }
      function s(e) {
        return !!(o(e) || e.variants);
      }
    },
    9480: (e, t, n) => {
      n.d(t, { Y: () => i });
      var r = n(6642);
      function i(e) {
        for (let t in e) r.B[t] = { ...r.B[t], ...e[t] };
      }
    },
  },
]);
