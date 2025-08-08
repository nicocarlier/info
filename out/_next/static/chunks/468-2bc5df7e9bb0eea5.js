(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [468],
  {
    760: (t, e, i) => {
      'use strict';
      i.d(e, { N: () => g });
      var n = i(5155),
        r = i(2115),
        s = i(869),
        o = i(2885),
        a = i(7494),
        l = i(845),
        u = i(1508);
      class h extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = (t instanceof HTMLElement && t.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = e.offsetHeight || 0),
              (n.width = e.offsetWidth || 0),
              (n.top = e.offsetTop),
              (n.left = e.offsetLeft),
              (n.right = i - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: i, anchorX: s } = t,
          o = (0, r.useId)(),
          a = (0, r.useRef)(null),
          l = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: c } = (0, r.useContext)(u.Q);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: r, right: u } = l.current;
            if (i || !a.current || !t || !e) return;
            a.current.dataset.motionPopId = o;
            let h = document.createElement('style');
            return (
              c && (h.nonce = c),
              document.head.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, 'px !important;\n            height: ')
                    .concat(e, 'px !important;\n            ')
                    .concat(
                      'left' === s ? 'left: '.concat(r) : 'right: '.concat(u),
                      'px !important;\n            top: '
                    )
                    .concat(n, 'px !important;\n          }\n        ')
                ),
              () => {
                document.head.removeChild(h);
              }
            );
          }, [i]),
          (0, n.jsx)(h, {
            isPresent: i,
            childRef: a,
            sizeRef: l,
            children: r.cloneElement(e, { ref: a }),
          })
        );
      }
      let d = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: s,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: h,
            mode: d,
            anchorX: m,
          } = t,
          f = (0, o.M)(p),
          v = (0, r.useId)(),
          g = (0, r.useCallback)(
            (t) => {
              for (let e of (f.set(t, !0), f.values())) if (!e) return;
              a && a();
            },
            [f, a]
          ),
          y = (0, r.useMemo)(
            () => ({
              id: v,
              initial: i,
              isPresent: s,
              custom: u,
              onExitComplete: g,
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            h ? [Math.random(), g] : [s, g]
          );
        return (
          (0, r.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [s]),
          r.useEffect(() => {
            s || f.size || !a || a();
          }, [s]),
          'popLayout' === d &&
            (e = (0, n.jsx)(c, { isPresent: s, anchorX: m, children: e })),
          (0, n.jsx)(l.t.Provider, { value: y, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var m = i(2082);
      let f = (t) => t.key || '';
      function v(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let g = (t) => {
        let {
            children: e,
            custom: i,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: c = 'sync',
            propagate: p = !1,
            anchorX: g = 'left',
          } = t,
          [y, x] = (0, m.xQ)(p),
          b = (0, r.useMemo)(() => v(e), [e]),
          w = p && !y ? [] : b.map(f),
          P = (0, r.useRef)(!0),
          T = (0, r.useRef)(b),
          S = (0, o.M)(() => new Map()),
          [A, M] = (0, r.useState)(b),
          [E, V] = (0, r.useState)(b);
        (0, a.E)(() => {
          (P.current = !1), (T.current = b);
          for (let t = 0; t < E.length; t++) {
            let e = f(E[t]);
            w.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1);
          }
        }, [E, w.length, w.join('-')]);
        let C = [];
        if (b !== A) {
          let t = [...b];
          for (let e = 0; e < E.length; e++) {
            let i = E[e],
              n = f(i);
            w.includes(n) || (t.splice(e, 0, i), C.push(i));
          }
          return 'wait' === c && C.length && (t = C), V(v(t)), M(b), null;
        }
        let { forceRender: k } = (0, r.useContext)(s.L);
        return (0, n.jsx)(n.Fragment, {
          children: E.map((t) => {
            let e = f(t),
              r = (!p || !!y) && (b === E || w.includes(e));
            return (0, n.jsx)(
              d,
              {
                isPresent: r,
                initial: (!P.current || !!l) && void 0,
                custom: i,
                presenceAffectsLayout: h,
                mode: c,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (!S.has(e)) return;
                      S.set(e, !0);
                      let t = !0;
                      S.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == k || k(),
                          V(T.current),
                          p && (null == x || x()),
                          u && u());
                    },
                anchorX: g,
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    845: (t, e, i) => {
      'use strict';
      i.d(e, { t: () => n });
      let n = (0, i(2115).createContext)(null);
    },
    869: (t, e, i) => {
      'use strict';
      i.d(e, { L: () => n });
      let n = (0, i(2115).createContext)({});
    },
    1508: (t, e, i) => {
      'use strict';
      i.d(e, { Q: () => n });
      let n = (0, i(2115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: 'never',
      });
    },
    1633: (t, e, i) => {
      'use strict';
      e.A = void 0;
      var n = o(i(2115)),
        r = o(i(8637)),
        s = o(i(9300));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      let a = ({
        animate: t = !0,
        className: e = '',
        layout: i = '2-columns',
        lineColor: r = '#FFF',
        children: o,
      }) => (
        'object' == typeof window &&
          document.documentElement.style.setProperty('--line-color', r),
        n.default.createElement(
          'div',
          {
            className: (0, s.default)(e, 'vertical-timeline', {
              'vertical-timeline--animate': t,
              'vertical-timeline--two-columns': '2-columns' === i,
              'vertical-timeline--one-column-left':
                '1-column' === i || '1-column-left' === i,
              'vertical-timeline--one-column-right': '1-column-right' === i,
            }),
          },
          o
        )
      );
      (a.propTypes = {
        children: r.default.oneOfType([
          r.default.arrayOf(r.default.node),
          r.default.node,
        ]).isRequired,
        className: r.default.string,
        animate: r.default.bool,
        layout: r.default.oneOf([
          '1-column-left',
          '1-column',
          '2-columns',
          '1-column-right',
        ]),
        lineColor: r.default.string,
      }),
        (e.A = a);
    },
    1891: (t, e, i) => {
      'use strict';
      i.r(e),
        i.d(e, {
          InView: () => m,
          default: () => m,
          defaultFallbackInView: () => h,
          observe: () => c,
          useInView: () => f,
        });
      var n = i(2115);
      function r() {
        return (r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          }).apply(this, arguments);
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var o = new Map(),
        a = new WeakMap(),
        l = 0,
        u = void 0;
      function h(t) {
        u = t;
      }
      function c(t, e, i, n) {
        if (
          (void 0 === i && (i = {}),
          void 0 === n && (n = u),
          void 0 === window.IntersectionObserver && void 0 !== n)
        ) {
          var r = t.getBoundingClientRect();
          return (
            e(n, {
              isIntersecting: n,
              target: t,
              intersectionRatio:
                'number' == typeof i.threshold ? i.threshold : 0,
              time: 0,
              boundingClientRect: r,
              intersectionRect: r,
              rootBounds: r,
            }),
            function () {}
          );
        }
        var s = (function (t) {
            var e = Object.keys(t)
                .sort()
                .filter(function (e) {
                  return void 0 !== t[e];
                })
                .map(function (e) {
                  var i;
                  return (
                    e +
                    '_' +
                    ('root' === e
                      ? (i = t.root)
                        ? (a.has(i) || ((l += 1), a.set(i, l.toString())),
                          a.get(i))
                        : '0'
                      : t[e])
                  );
                })
                .toString(),
              i = o.get(e);
            if (!i) {
              var n,
                r = new Map(),
                s = new IntersectionObserver(function (e) {
                  e.forEach(function (e) {
                    var i,
                      s =
                        e.isIntersecting &&
                        n.some(function (t) {
                          return e.intersectionRatio >= t;
                        });
                    t.trackVisibility &&
                      void 0 === e.isVisible &&
                      (e.isVisible = s),
                      null == (i = r.get(e.target)) ||
                        i.forEach(function (t) {
                          t(s, e);
                        });
                  });
                }, t);
              (n =
                s.thresholds ||
                (Array.isArray(t.threshold)
                  ? t.threshold
                  : [t.threshold || 0])),
                (i = { id: e, observer: s, elements: r }),
                o.set(e, i);
            }
            return i;
          })(i),
          h = s.id,
          c = s.observer,
          d = s.elements,
          p = d.get(t) || [];
        return (
          d.has(t) || d.set(t, p),
          p.push(e),
          c.observe(t),
          function () {
            p.splice(p.indexOf(e), 1),
              0 === p.length && (d.delete(t), c.unobserve(t)),
              0 === d.size && (c.disconnect(), o.delete(h));
          }
        );
      }
      var d = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ];
      function p(t) {
        return 'function' != typeof t.children;
      }
      var m = (function (t) {
        function e(e) {
          var i;
          return (
            ((i = t.call(this, e) || this).node = null),
            (i._unobserveCb = null),
            (i.handleNode = function (t) {
              !i.node ||
                (i.unobserve(),
                t ||
                  i.props.triggerOnce ||
                  i.props.skip ||
                  i.setState({
                    inView: !!i.props.initialInView,
                    entry: void 0,
                  })),
                (i.node = t || null),
                i.observeNode();
            }),
            (i.handleChange = function (t, e) {
              t && i.props.triggerOnce && i.unobserve(),
                p(i.props) || i.setState({ inView: t, entry: e }),
                i.props.onChange && i.props.onChange(t, e);
            }),
            (i.state = { inView: !!e.initialInView, entry: void 0 }),
            i
          );
        }
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          s(e, t);
        var i = e.prototype;
        return (
          (i.componentDidUpdate = function (t) {
            (t.rootMargin !== this.props.rootMargin ||
              t.root !== this.props.root ||
              t.threshold !== this.props.threshold ||
              t.skip !== this.props.skip ||
              t.trackVisibility !== this.props.trackVisibility ||
              t.delay !== this.props.delay) &&
              (this.unobserve(), this.observeNode());
          }),
          (i.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (i.observeNode = function () {
            if (this.node && !this.props.skip) {
              var t = this.props,
                e = t.threshold,
                i = t.root,
                n = t.rootMargin,
                r = t.trackVisibility,
                s = t.delay,
                o = t.fallbackInView;
              this._unobserveCb = c(
                this.node,
                this.handleChange,
                {
                  threshold: e,
                  root: i,
                  rootMargin: n,
                  trackVisibility: r,
                  delay: s,
                },
                o
              );
            }
          }),
          (i.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (i.render = function () {
            if (!p(this.props)) {
              var t = this.state,
                e = t.inView,
                i = t.entry;
              return this.props.children({
                inView: e,
                entry: i,
                ref: this.handleNode,
              });
            }
            var s = this.props,
              o = s.children,
              a = s.as,
              l = (function (t, e) {
                if (null == t) return {};
                var i,
                  n,
                  r = {},
                  s = Object.keys(t);
                for (n = 0; n < s.length; n++)
                  (i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                return r;
              })(s, d);
            return n.createElement(
              a || 'div',
              r({ ref: this.handleNode }, l),
              o
            );
          }),
          e
        );
      })(n.Component);
      function f(t) {
        var e = void 0 === t ? {} : t,
          i = e.threshold,
          r = e.delay,
          s = e.trackVisibility,
          o = e.rootMargin,
          a = e.root,
          l = e.triggerOnce,
          u = e.skip,
          h = e.initialInView,
          d = e.fallbackInView,
          p = n.useRef(),
          m = n.useState({ inView: !!h }),
          f = m[0],
          v = m[1],
          g = n.useCallback(
            function (t) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                !u &&
                  t &&
                  (p.current = c(
                    t,
                    function (t, e) {
                      v({ inView: t, entry: e }),
                        e.isIntersecting &&
                          l &&
                          p.current &&
                          (p.current(), (p.current = void 0));
                    },
                    {
                      root: a,
                      rootMargin: o,
                      threshold: i,
                      trackVisibility: s,
                      delay: r,
                    },
                    d
                  ));
            },
            [Array.isArray(i) ? i.toString() : i, a, o, l, u, s, d, r]
          );
        (0, n.useEffect)(function () {
          p.current || !f.entry || l || u || v({ inView: !!h });
        });
        var y = [g, f.inView, f.entry];
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y;
      }
      (m.displayName = 'InView'),
        (m.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
    2082: (t, e, i) => {
      'use strict';
      i.d(e, { xQ: () => s });
      var n = i(2115),
        r = i(845);
      function s(t = !0) {
        let e = (0, n.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, n.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, u] : [!0];
      }
    },
    2885: (t, e, i) => {
      'use strict';
      i.d(e, { M: () => r });
      var n = i(2115);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    2948: (t) => {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    2992: (t, e, i) => {
      'use strict';
      t.exports = {
        VerticalTimeline: i(1633).A,
        VerticalTimelineElement: i(4383).A,
      };
    },
    4383: (t, e, i) => {
      'use strict';
      e.A = void 0;
      var n = a(i(2115)),
        r = a(i(8637)),
        s = a(i(9300)),
        o = i(1891);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      let l = ({
        children: t = '',
        className: e = '',
        contentArrowStyle: i = null,
        contentStyle: r = null,
        date: a = '',
        dateClassName: l = '',
        icon: u = null,
        iconClassName: h = '',
        iconOnClick: c = null,
        onTimelineElementClick: d = null,
        iconStyle: p = null,
        id: m = '',
        position: f = '',
        style: v = null,
        textClassName: g = '',
        intersectionObserverProps: y = {
          rootMargin: '0px 0px -40px 0px',
          triggerOnce: !0,
        },
        visible: x = !1,
        shadowSize: b = 'small',
      }) =>
        n.default.createElement(o.InView, y, ({ inView: o, ref: y }) =>
          n.default.createElement(
            'div',
            {
              ref: y,
              id: m,
              className: (0, s.default)(e, 'vertical-timeline-element', {
                'vertical-timeline-element--left': 'left' === f,
                'vertical-timeline-element--right': 'right' === f,
                'vertical-timeline-element--no-children': '' === t,
              }),
              style: v,
            },
            n.default.createElement(
              n.default.Fragment,
              null,
              n.default.createElement(
                'span',
                {
                  style: p,
                  onClick: c,
                  className: (0, s.default)(
                    h,
                    'vertical-timeline-element-icon',
                    `shadow-size-${b}`,
                    { 'bounce-in': o || x, 'is-hidden': !(o || x) }
                  ),
                },
                u
              ),
              n.default.createElement(
                'div',
                {
                  style: r,
                  onClick: d,
                  className: (0, s.default)(
                    g,
                    'vertical-timeline-element-content',
                    { 'bounce-in': o || x, 'is-hidden': !(o || x) }
                  ),
                },
                n.default.createElement('div', {
                  style: i,
                  className: 'vertical-timeline-element-content-arrow',
                }),
                t,
                n.default.createElement(
                  'span',
                  {
                    className: (0, s.default)(
                      l,
                      'vertical-timeline-element-date'
                    ),
                  },
                  a
                )
              )
            )
          )
        );
      (l.propTypes = {
        children: r.default.oneOfType([
          r.default.arrayOf(r.default.node),
          r.default.node,
        ]),
        className: r.default.string,
        contentArrowStyle: r.default.shape({}),
        contentStyle: r.default.shape({}),
        date: r.default.node,
        dateClassName: r.default.string,
        icon: r.default.element,
        iconClassName: r.default.string,
        iconStyle: r.default.shape({}),
        iconOnClick: r.default.func,
        onTimelineElementClick: r.default.func,
        id: r.default.string,
        position: r.default.string,
        style: r.default.shape({}),
        textClassName: r.default.string,
        visible: r.default.bool,
        shadowSize: r.default.string,
        intersectionObserverProps: r.default.shape({
          root: r.default.object,
          rootMargin: r.default.string,
          threshold: r.default.number,
          triggerOnce: r.default.bool,
        }),
      }),
        (e.A = l);
    },
    4436: (t, e, i) => {
      'use strict';
      i.d(e, { k5: () => h });
      var n = i(2115),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = n.createContext && n.createContext(r),
        o = ['attr', 'size', 'title'];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var n, r, s;
                (n = t),
                  (r = e),
                  (s = i[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ('object' != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var n = i.call(t, e || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === e ? String : Number)(t);
                    })(t, 'string');
                    return 'symbol' == typeof e ? e : e + '';
                  })(r)) in n
                    ? Object.defineProperty(n, r, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[r] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : l(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e)
                  );
                });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          n.createElement(
            c,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  n.createElement(e.tag, u({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function c(t) {
        var e = (e) => {
          var i,
            { attr: r, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                n,
                r = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                      if (e.indexOf(n) >= 0) continue;
                      i[n] = t[n];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++)
                  (i = s[n]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (r[i] = t[i]);
              }
              return r;
            })(t, o),
            c = s || e.size || '1em';
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + ' ' : '') + t.className),
            n.createElement(
              'svg',
              a(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                e.attr,
                r,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: c,
                  width: c,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              l && n.createElement('title', null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? n.createElement(s.Consumer, null, (t) => e(t))
          : e(r);
      }
    },
    6183: (t, e, i) => {
      'use strict';
      let n;
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function s(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { P: () => sD });
      let o = (t) => t,
        a = { skipAnimations: !1, useManualTiming: !1 };
      function l(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let u = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
      class h {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return r(this.subscriptions, t), () => s(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
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
      let c = (t) => 1e3 * t,
        d = (t) => t / 1e3;
      function p(t) {
        return (
          null !== t && 'object' == typeof t && 'function' == typeof t.start
        );
      }
      function m(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function f(t, e, i, n) {
        if ('function' == typeof e) {
          let [r, s] = m(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ('string' == typeof e && (e = t.variants && t.variants[e]),
          'function' == typeof e)
        ) {
          let [r, s] = m(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function v(t, e, i) {
        let n = t.getProps();
        return f(n, e, void 0 !== i ? i : n.custom, t);
      }
      let g = l(() => void 0 !== window.ScrollTimeline);
      class y {
        constructor(t) {
          (this.stop = () => this.runAll('stop')),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ('finished' in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            g() && i.attachTimeline
              ? i.attachTimeline(t)
              : 'function' == typeof e
                ? e(i)
                : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll('time');
        }
        set time(t) {
          this.setAll('time', t);
        }
        get speed() {
          return this.getAll('speed');
        }
        set speed(t) {
          this.setAll('speed', t);
        }
        get startTime() {
          return this.getAll('startTime');
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
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
      class x extends y {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function b(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      function w(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function P(t) {
        return 'function' == typeof t;
      }
      function T(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let S = (t) => Array.isArray(t) && 'number' == typeof t[0],
        A = { linearEasing: void 0 },
        M = (function (t, e) {
          let i = l(t);
          return () => {
            var t;
            return null !== (t = A[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement('div')
              .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
          } catch (t) {
            return !1;
          }
          return !0;
        }, 'linearEasing'),
        E = (t, e, i = 10) => {
          let n = '',
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += t(u(0, r - 1, e)) + ', ';
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        V = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        C = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: V([0, 0.65, 0.55, 1]),
          circOut: V([0.55, 0, 1, 0.45]),
          backIn: V([0.31, 0.01, 0.66, -0.59]),
          backOut: V([0.33, 1.53, 0.69, 0.99]),
        },
        k = [
          'read',
          'resolveKeyframes',
          'update',
          'preRender',
          'render',
          'postRender',
        ],
        D = { value: null, addProjectionMetrics: null };
      function R(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = k.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  r = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  o.has(e) && (h.schedule(e), t()), l++, e(a);
                }
                let h = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && r ? i : n;
                    return e && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      s = !0;
                      return;
                    }
                    (r = !0),
                      ([i, n] = [n, i]),
                      i.forEach(u),
                      e && D.value && D.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (r = !1),
                      s && ((s = !1), h.process(t));
                  },
                };
                return h;
              })(s, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            read: l,
            resolveKeyframes: u,
            update: h,
            preRender: c,
            render: d,
            postRender: p,
          } = o,
          m = () => {
            let s = a.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              a.useManualTiming ||
                (r.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              l.process(r),
              u.process(r),
              h.process(r),
              c.process(r),
              d.process(r),
              p.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(m));
          },
          f = () => {
            (i = !0), (n = !0), r.isProcessing || t(m);
          };
        return {
          schedule: k.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || f(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < k.length; e++) o[k[e]].cancel(t);
          },
          state: r,
          steps: o,
        };
      }
      let {
          schedule: j,
          cancel: O,
          state: L,
          steps: F,
        } = R(
          'undefined' != typeof requestAnimationFrame
            ? requestAnimationFrame
            : o,
          !0
        ),
        { schedule: B } = R(queueMicrotask, !1);
      function I() {
        n = void 0;
      }
      let U = {
          now: () => (
            void 0 === n &&
              U.set(
                L.isProcessing || a.useManualTiming
                  ? L.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (t) => {
            (n = t), queueMicrotask(I);
          },
        },
        N = { x: !1, y: !1 };
      function $(t, e) {
        let i = (function (t, e, i) {
            var n;
            if (t instanceof EventTarget) return [t];
            if ('string' == typeof t) {
              let e = document,
                i = ((n = void 0), e.querySelectorAll(t));
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function W(t) {
        return !('touch' === t.pointerType || N.x || N.y);
      }
      let z = (t, e) => !!e && (t === e || z(t, e.parentElement)),
        Y = (t) =>
          'mouse' === t.pointerType
            ? 'number' != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        _ = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
        H = new WeakSet();
      function X(t) {
        return (e) => {
          'Enter' === e.key && t(e);
        };
      }
      function K(t, e) {
        t.dispatchEvent(
          new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let q = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = X(() => {
          if (H.has(i)) return;
          K(i, 'down');
          let t = X(() => {
            K(i, 'up');
          });
          i.addEventListener('keyup', t, e),
            i.addEventListener('blur', () => K(i, 'cancel'), e);
        });
        i.addEventListener('keydown', n, e),
          i.addEventListener(
            'blur',
            () => i.removeEventListener('keydown', n),
            e
          );
      };
      function G(t) {
        return Y(t) && !(N.x || N.y);
      }
      let Z = { layout: 0, mainThread: 0, waapi: 0 };
      function Q() {
        let { value: t } = statsBuffer;
        if (null === t) {
          cancelFrame(Q);
          return;
        }
        t.frameloop.rate.push(frameData.delta),
          t.animations.mainThread.push(activeAnimations.mainThread),
          t.animations.waapi.push(activeAnimations.waapi),
          t.animations.layout.push(activeAnimations.layout);
      }
      function J(t) {
        return t.reduce((t, e) => t + e, 0) / t.length;
      }
      function tt(t, e = J) {
        return 0 === t.length
          ? { min: 0, max: 0, avg: 0 }
          : { min: Math.min(...t), max: Math.max(...t), avg: e(t) };
      }
      let te = (t) => Math.round(1e3 / t),
        ti = (t) => !isNaN(parseFloat(t)),
        tn = { current: void 0 };
      class tr {
        constructor(t, e = {}) {
          (this.version = '12.6.1'),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = U.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = U.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = ti(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on('change', t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new h());
          let i = this.events[t].add(e);
          return 'change' === t
            ? () => {
                i(),
                  j.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return tn.current && tn.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = U.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
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
      function ts(t, e) {
        return new tr(t, e);
      }
      let to = null,
        ta = null,
        tl = [
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
        tu = new Set(tl),
        th = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          ...tl,
        ]),
        tc = (t) => Array.isArray(t),
        td = (t) => !!(t && 'object' == typeof t && t.mix && t.toValue),
        tp = (t) => (tc(t) ? t[t.length - 1] || 0 : t),
        tm = (t) => !!(t && t.getVelocity);
      function tf(t, e) {
        let i = t.getValue('willChange');
        if (tm(i) && i.add) return i.add(e);
      }
      let tv = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
        tg = 'data-' + tv('framerAppearId'),
        ty = { current: !1 },
        tx = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function tb(t, e, i, n) {
        if (t === e && i === n) return o;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = tx((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : tx(r(t), e, n));
      }
      let tw = (t) => (e) =>
          e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tP = (t) => (e) => 1 - t(1 - e),
        tT = tb(0.33, 1.53, 0.69, 0.99),
        tS = tP(tT),
        tA = tw(tS),
        tM = (t) =>
          (t *= 2) < 1 ? 0.5 * tS(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        tE = (t) => 1 - Math.sin(Math.acos(t)),
        tV = tP(tE),
        tC = tw(tE),
        tk = (t) => /^0[^.\s]+$/u.test(t),
        tD = (t, e, i) => (i > e ? e : i < t ? t : i),
        tR = {
          test: (t) => 'number' == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tj = { ...tR, transform: (t) => tD(0, 1, t) },
        tO = { ...tR, default: 1 },
        tL = (t) => Math.round(1e5 * t) / 1e5,
        tF = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tB =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tI = (t, e) => (i) =>
          !!(
            ('string' == typeof i && tB.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tU = (t, e, i) => (n) => {
          if ('string' != typeof n) return n;
          let [r, s, o, a] = n.match(tF);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tN = (t) => tD(0, 255, t),
        t$ = { ...tR, transform: (t) => Math.round(tN(t)) },
        tW = {
          test: tI('rgb', 'red'),
          parse: tU('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            'rgba(' +
            t$.transform(t) +
            ', ' +
            t$.transform(e) +
            ', ' +
            t$.transform(i) +
            ', ' +
            tL(tj.transform(n)) +
            ')',
        },
        tz = {
          test: tI('#'),
          parse: function (t) {
            let e = '',
              i = '',
              n = '',
              r = '';
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tW.transform,
        },
        tY = (t) => ({
          test: (e) =>
            'string' == typeof e && e.endsWith(t) && 1 === e.split(' ').length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        t_ = tY('deg'),
        tH = tY('%'),
        tX = tY('px'),
        tK = tY('vh'),
        tq = tY('vw'),
        tG = {
          ...tH,
          parse: (t) => tH.parse(t) / 100,
          transform: (t) => tH.transform(100 * t),
        },
        tZ = {
          test: tI('hsl', 'hue'),
          parse: tU('hue', 'saturation', 'lightness'),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            'hsla(' +
            Math.round(t) +
            ', ' +
            tH.transform(tL(e)) +
            ', ' +
            tH.transform(tL(i)) +
            ', ' +
            tL(tj.transform(n)) +
            ')',
        },
        tQ = {
          test: (t) => tW.test(t) || tz.test(t) || tZ.test(t),
          parse: (t) =>
            tW.test(t) ? tW.parse(t) : tZ.test(t) ? tZ.parse(t) : tz.parse(t),
          transform: (t) =>
            'string' == typeof t
              ? t
              : t.hasOwnProperty('red')
                ? tW.transform(t)
                : tZ.transform(t),
        },
        tJ =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        t0 = 'number',
        t1 = 'color',
        t2 =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function t5(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              t2,
              (t) => (
                tQ.test(t)
                  ? (n.color.push(s), r.push(t1), i.push(tQ.parse(t)))
                  : t.startsWith('var(')
                    ? (n.var.push(s), r.push('var'), i.push(t))
                    : (n.number.push(s), r.push(t0), i.push(parseFloat(t))),
                ++s,
                '${}'
              )
            )
            .split('${}');
        return { values: i, split: o, indexes: n, types: r };
      }
      function t3(t) {
        return t5(t).values;
      }
      function t9(t) {
        let { split: e, types: i } = t5(t),
          n = e.length;
        return (t) => {
          let r = '';
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === t0
                ? (r += tL(t[s]))
                : e === t1
                  ? (r += tQ.transform(t[s]))
                  : (r += t[s]);
            }
          return r;
        };
      }
      let t4 = (t) => ('number' == typeof t ? 0 : t),
        t8 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              'string' == typeof t &&
              ((null === (e = t.match(tF)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tJ)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: t3,
          createTransformer: t9,
          getAnimatableNone: function (t) {
            let e = t3(t);
            return t9(t)(e.map(t4));
          },
        },
        t6 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function t7(t) {
        let [e, i] = t.slice(0, -1).split('(');
        if ('drop-shadow' === e) return t;
        let [n] = i.match(tF) || [];
        if (!n) return t;
        let r = i.replace(n, ''),
          s = +!!t6.has(e);
        return n !== i && (s *= 100), e + '(' + s + r + ')';
      }
      let et = /\b([a-z-]*)\(.*?\)/gu,
        ee = {
          ...t8,
          getAnimatableNone: (t) => {
            let e = t.match(et);
            return e ? e.map(t7).join(' ') : t;
          },
        },
        ei = { ...tR, transform: Math.round },
        en = {
          borderWidth: tX,
          borderTopWidth: tX,
          borderRightWidth: tX,
          borderBottomWidth: tX,
          borderLeftWidth: tX,
          borderRadius: tX,
          radius: tX,
          borderTopLeftRadius: tX,
          borderTopRightRadius: tX,
          borderBottomRightRadius: tX,
          borderBottomLeftRadius: tX,
          width: tX,
          maxWidth: tX,
          height: tX,
          maxHeight: tX,
          top: tX,
          right: tX,
          bottom: tX,
          left: tX,
          padding: tX,
          paddingTop: tX,
          paddingRight: tX,
          paddingBottom: tX,
          paddingLeft: tX,
          margin: tX,
          marginTop: tX,
          marginRight: tX,
          marginBottom: tX,
          marginLeft: tX,
          backgroundPositionX: tX,
          backgroundPositionY: tX,
          rotate: t_,
          rotateX: t_,
          rotateY: t_,
          rotateZ: t_,
          scale: tO,
          scaleX: tO,
          scaleY: tO,
          scaleZ: tO,
          skew: t_,
          skewX: t_,
          skewY: t_,
          distance: tX,
          translateX: tX,
          translateY: tX,
          translateZ: tX,
          x: tX,
          y: tX,
          z: tX,
          perspective: tX,
          transformPerspective: tX,
          opacity: tj,
          originX: tG,
          originY: tG,
          originZ: tX,
          zIndex: ei,
          size: tX,
          fillOpacity: tj,
          strokeOpacity: tj,
          numOctaves: ei,
        },
        er = {
          ...en,
          color: tQ,
          backgroundColor: tQ,
          outlineColor: tQ,
          fill: tQ,
          stroke: tQ,
          borderColor: tQ,
          borderTopColor: tQ,
          borderRightColor: tQ,
          borderBottomColor: tQ,
          borderLeftColor: tQ,
          filter: ee,
          WebkitFilter: ee,
        },
        es = (t) => er[t];
      function eo(t, e) {
        let i = es(t);
        return (
          i !== ee && (i = t8),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let ea = new Set(['auto', 'none', '0']),
        el = (t) => (180 * t) / Math.PI,
        eu = (t) => ec(el(Math.atan2(t[1], t[0]))),
        eh = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: eu,
          rotateZ: eu,
          skewX: (t) => el(Math.atan(t[1])),
          skewY: (t) => el(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        ec = (t) => ((t %= 360) < 0 && (t += 360), t),
        ed = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        ep = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        em = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: ed,
          scaleY: ep,
          scale: (t) => (ed(t) + ep(t)) / 2,
          rotateX: (t) => ec(el(Math.atan2(t[6], t[5]))),
          rotateY: (t) => ec(el(Math.atan2(-t[2], t[0]))),
          rotateZ: eu,
          rotate: eu,
          skewX: (t) => el(Math.atan(t[4])),
          skewY: (t) => el(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function ef(t) {
        return +!!t.includes('scale');
      }
      function ev(t, e) {
        let i, n;
        if (!t || 'none' === t) return ef(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) (i = em), (n = r);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = eh), (n = e);
        }
        if (!n) return ef(e);
        let s = i[e],
          o = n[1].split(',').map(ey);
        return 'function' == typeof s ? s(o) : o[s];
      }
      let eg = (t, e) => {
        let { transform: i = 'none' } = getComputedStyle(t);
        return ev(i, e);
      };
      function ey(t) {
        return parseFloat(t.trim());
      }
      let ex = (t) => t === tR || t === tX,
        eb = new Set(['x', 'y', 'z']),
        ew = tl.filter((t) => !eb.has(t)),
        eP = {
          width: ({ x: t }, { paddingLeft: e = '0', paddingRight: i = '0' }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = '0', paddingBottom: i = '0' }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => ev(e, 'x'),
          y: (t, { transform: e }) => ev(e, 'y'),
        };
      (eP.translateX = eP.x), (eP.translateY = eP.y);
      let eT = new Set(),
        eS = !1,
        eA = !1;
      function eM() {
        if (eA) {
          let t = Array.from(eT).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ew.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]), n.set(+!!i.startsWith('scale')));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eA = !1), (eS = !1), eT.forEach((t) => t.complete()), eT.clear();
      }
      function eE() {
        eT.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eA = !0);
        });
      }
      class eV {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eT.add(this),
                eS || ((eS = !0), j.read(eE), j.resolveKeyframes(eM)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eT.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eT.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eC = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        ek = (t) => (e) => 'string' == typeof e && e.startsWith(t),
        eD = ek('--'),
        eR = ek('var(--'),
        ej = (t) => !!eR(t) && eO.test(t.split('/*')[0].trim()),
        eO =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        eL = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eF = (t) => (e) => e.test(t),
        eB = [
          tR,
          tX,
          tH,
          t_,
          tq,
          tK,
          { test: (t) => 'auto' === t, parse: (t) => t },
        ],
        eI = (t) => eB.find(eF(t));
      class eU extends eV {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ('string' == typeof n && ej((n = n.trim()))) {
              let r = (function t(e, i, n = 1) {
                o(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = eL.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let a = window.getComputedStyle(i).getPropertyValue(r);
                if (a) {
                  let t = a.trim();
                  return eC(t) ? parseFloat(t) : t;
                }
                return ej(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = eI(n),
            a = eI(r);
          if (s !== a) {
            if (ex(s) && ex(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                'string' == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ('number' == typeof (n = t[e])
              ? 0 === n
              : null === n || 'none' === n || '0' === n || tk(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                'string' == typeof e &&
                  !ea.has(e) &&
                  t5(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = eo(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          'height' === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eP[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = eP[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let eN = (t, e) =>
          'zIndex' !== e &&
          !!(
            'number' == typeof t ||
            Array.isArray(t) ||
            ('string' == typeof t &&
              (t8.test(t) || '0' === t) &&
              !t.startsWith('url('))
          ),
        e$ = (t) => null !== t;
      function eW(t, { repeat: e, repeatType: i = 'loop' }, n) {
        let r = t.filter(e$),
          s = e && 'loop' !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      class ez {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = 'keyframes',
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = 'loop',
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = U.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eE(), eM()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = U.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u,
          } = this.options;
          if (
            !u &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ('display' === e || 'visibility' === e) return !0;
              let s = t[t.length - 1],
                a = eN(r, e),
                l = eN(s, e);
              return (
                o(
                  a === l,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (('spring' === i || P(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (ty.current || !s) {
              l && l(eW(t, this.options, e)),
                a && a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let h = this.initPlayback(t, e);
          !1 !== h &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          this.options.allowFlatten &&
            ((this.options.type = 'keyframes'), (this.options.ease = 'linear'));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let eY = (t, e, i) => t + (e - t) * i;
      function e_(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function eH(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let eX = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eK = [tz, tW, tZ],
        eq = (t) => eK.find((e) => e.test(t));
      function eG(t) {
        let e = eq(t);
        if (
          (o(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tZ &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = e_(a, n, t + 1 / 3)),
                  (s = e_(a, n, t)),
                  (o = e_(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eZ = (t, e) => {
          let i = eG(t),
            n = eG(e);
          if (!i || !n) return eH(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = eX(i.red, n.red, t)),
            (r.green = eX(i.green, n.green, t)),
            (r.blue = eX(i.blue, n.blue, t)),
            (r.alpha = eY(i.alpha, n.alpha, t)),
            tW.transform(r)
          );
        },
        eQ = (t, e) => (i) => e(t(i)),
        eJ = (...t) => t.reduce(eQ),
        e0 = new Set(['none', 'hidden']);
      function e1(t, e) {
        return (i) => eY(t, e, i);
      }
      function e2(t) {
        return 'number' == typeof t
          ? e1
          : 'string' == typeof t
            ? ej(t)
              ? eH
              : tQ.test(t)
                ? eZ
                : e9
            : Array.isArray(t)
              ? e5
              : 'object' == typeof t
                ? tQ.test(t)
                  ? eZ
                  : e3
                : eH;
      }
      function e5(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => e2(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function e3(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = e2(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let e9 = (t, e) => {
        let i = t8.createTransformer(e),
          n = t5(t),
          r = t5(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (e0.has(t) && !r.values.length) || (e0.has(e) && !n.values.length)
            ? (function (t, e) {
                return e0.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : eJ(
                e5(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : (o(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eH(t, e));
      };
      function e4(t, e, i) {
        return 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof i
          ? eY(t, e, i)
          : e2(t)(t, e);
      }
      function e8(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      let e6 = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function e7(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let it = ['duration', 'bounce'],
        ie = ['stiffness', 'damping', 'mass'];
      function ii(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ir(t = e6.visualDuration, e = e6.bounce) {
        let i;
        let n =
            'object' != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          a = n.keyframes[0],
          l = n.keyframes[n.keyframes.length - 1],
          u = { done: !1, value: a },
          {
            stiffness: h,
            damping: p,
            mass: m,
            duration: f,
            velocity: v,
            isResolvedFromDuration: g,
          } = (function (t) {
            let e = {
              velocity: e6.velocity,
              stiffness: e6.stiffness,
              damping: e6.damping,
              mass: e6.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ii(t, ie) && ii(t, it)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * tD(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: e6.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = e6.duration,
                  bounce: e = e6.bounce,
                  velocity: i = e6.velocity,
                  mass: n = e6.mass,
                }) {
                  let r, s;
                  o(
                    t <= c(e6.maxDuration),
                    'Spring duration must be 10 seconds or less'
                  );
                  let a = 1 - e;
                  (a = tD(e6.minDamping, e6.maxDamping, a)),
                    (t = tD(e6.minDuration, e6.maxDuration, d(t))),
                    a < 1
                      ? ((r = (e) => {
                          let n = e * a,
                            r = n * t;
                          return 0.001 - ((n - i) / e7(e, a)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * a * t,
                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-n),
                            l = e7(Math.pow(e, 2), a);
                          return (
                            ((n * i + i - s) *
                              o *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let l = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = c(t)), isNaN(l)))
                    return {
                      stiffness: e6.stiffness,
                      damping: e6.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: e6.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -d(n.velocity || 0) }),
          y = v || 0,
          x = p / (2 * Math.sqrt(h * m)),
          b = l - a,
          P = d(Math.sqrt(h / m)),
          T = 5 > Math.abs(b);
        if (
          (r || (r = T ? e6.restSpeed.granular : e6.restSpeed.default),
          s || (s = T ? e6.restDelta.granular : e6.restDelta.default),
          x < 1)
        ) {
          let t = e7(P, x);
          i = (e) =>
            l -
            Math.exp(-x * P * e) *
              (((y + x * P * b) / t) * Math.sin(t * e) + b * Math.cos(t * e));
        } else if (1 === x)
          i = (t) => l - Math.exp(-P * t) * (b + (y + P * b) * t);
        else {
          let t = P * Math.sqrt(x * x - 1);
          i = (e) => {
            let i = Math.exp(-x * P * e),
              n = Math.min(t * e, 300);
            return (
              l -
              (i * ((y + x * P * b) * Math.sinh(n) + t * b * Math.cosh(n))) / t
            );
          };
        }
        let S = {
          calculatedDuration: (g && f) || null,
          next: (t) => {
            let e = i(t);
            if (g) u.done = t >= f;
            else {
              let n = 0;
              x < 1 && (n = 0 === t ? c(y) : e8(i, t, e));
              let o = Math.abs(l - e) <= s;
              u.done = Math.abs(n) <= r && o;
            }
            return (u.value = u.done ? l : e), u;
          },
          toString: () => {
            let t = Math.min(w(S), 2e4),
              e = E((e) => S.next(t * e).value, t, 30);
            return t + 'ms ' + e;
          },
        };
        return S;
      }
      function is({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let b = (t) => -g * Math.exp(-t / n),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          T = (t) => {
            f(m.value) &&
              ((c = t),
              (d = ir({
                keyframes: [m.value, v(m.value)],
                velocity: e8(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), P(t), T(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || P(t), m);
            },
          }
        );
      }
      let io = tb(0.42, 0, 1, 1),
        ia = tb(0, 0, 0.58, 1),
        il = tb(0.42, 0, 0.58, 1),
        iu = (t) => Array.isArray(t) && 'number' != typeof t[0],
        ih = {
          linear: o,
          easeIn: io,
          easeInOut: il,
          easeOut: ia,
          circIn: tE,
          circInOut: tC,
          circOut: tV,
          backIn: tS,
          backInOut: tA,
          backOut: tT,
          anticipate: tM,
        },
        ic = (t) => {
          if (S(t)) {
            o(
              4 === t.length,
              'Cubic bezier arrays must contain four numerical values.'
            );
            let [e, i, n, r] = t;
            return tb(e, i, n, r);
          }
          return 'string' == typeof t
            ? (o(void 0 !== ih[t], `Invalid easing type '${t}'`), ih[t])
            : t;
        };
      function id({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = 'easeInOut',
      }) {
        let r = iu(n) ? n.map(ic) : ic(n),
          s = { done: !1, value: e[0] },
          a = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (o(
                s === e.length,
                'Both input and output ranges must be the same length'
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let l = (function (t, e, i) {
                let n = [],
                  r = i || e4,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = eJ(Array.isArray(e) ? e[i] || o : e, s)), n.push(s);
                }
                return n;
              })(e, n, r),
              h = l.length,
              c = (i) => {
                if (a && i < t[0]) return e[0];
                let n = 0;
                if (h > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let r = u(t[n], t[n + 1], i);
                return l[n](r);
              };
            return i ? (e) => c(tD(t[0], t[s - 1], e)) : c;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = u(0, e, n);
                        t.push(eY(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || il).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      let ip = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => j.update(e, !0),
            stop: () => O(e),
            now: () => (L.isProcessing ? L.timestamp : U.now()),
          };
        },
        im = { decay: is, inertia: is, tween: id, keyframes: id, spring: ir },
        iv = (t) => t / 100;
      class ig extends ez {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = 'running'),
            (this.startTime = null),
            (this.state = 'idle'),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                'idle' === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || eV;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = 'keyframes',
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = P(n) ? n : im[n] || id;
          l !== id &&
            'number' != typeof t[0] &&
            ((e = eJ(iv, e4(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          'mirror' === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = w(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          Z.mainThread++,
            this.play(),
            'paused' !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            'finished' === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ('reverse' === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : 'mirror' === p && (x = s)),
              (y = tD(0, 1, i) * h);
          }
          let b = g ? { done: !1, value: a[0] } : x.next(y);
          o && (b.value = o(b.value));
          let { done: w } = b;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && w));
          return (
            P && void 0 !== n && (b.value = eW(a, this.options, n)),
            f && f(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? d(t.calculatedDuration) : 0;
        }
        get time() {
          return d(this.currentTime);
        }
        set time(t) {
          (t = c(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = d(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = 'running';
            return;
          }
          if (this.isStopped) return;
          let { driver: t = ip, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
              ? 'finished' === this.state && (this.startTime = n)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            'finished' === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = 'running'),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = 'paused';
            return;
          }
          (this.state = 'paused'),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          'running' !== this.state && this.play(),
            (this.pendingPlayState = this.state = 'finished'),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = 'finished');
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = 'idle'),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            Z.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let iy = new Set(['opacity', 'clipPath', 'filter', 'transform']),
        ix = l(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
        ib = { anticipate: tM, backInOut: tA, circInOut: tC };
      class iw extends ez {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new eU(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: n = 300,
            times: r,
            ease: s,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ('string' == typeof s && M() && s in ib && (s = ib[s]),
            P((i = this.options).type) ||
              'spring' === i.type ||
              !(function t(e) {
                return !!(
                  ('function' == typeof e && M()) ||
                  !e ||
                  ('string' == typeof e && (e in C || M())) ||
                  S(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new ig({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: 'linear',
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (s = h.ease),
              (o = 'keyframes');
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = 'loop',
              ease: a = 'easeInOut',
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return 'function' == typeof e && M()
                  ? E(e, i)
                  : S(e)
                    ? V(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || C.easeOut)
                      : C[e];
            })(a, r);
            Array.isArray(h) && (u.easing = h), D.value && Z.waapi++;
            let c = t.animate(u, {
              delay: n,
              duration: r,
              easing: Array.isArray(h) ? 'linear' : h,
              fill: 'both',
              iterations: s + 1,
              direction: 'reverse' === o ? 'alternate' : 'normal',
            });
            return (
              D.value &&
                c.finished.finally(() => {
                  Z.waapi--;
                }),
              c
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: s,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (T(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  a.set(eW(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: n,
              times: r,
              type: o,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return d(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return d(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = c(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return 'idle';
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return o;
            let { animation: i } = e;
            T(i, t);
          } else this.pendingTimeline = t;
          return o;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          'finished' === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            'idle' === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ('idle' === e.playState || 'finished' === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new ig({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              d = c(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            ix() &&
            i &&
            iy.has(i) &&
            ('transform' !== i || !l) &&
            !a &&
            !n &&
            'mirror' !== r &&
            0 !== s &&
            'inertia' !== o
          );
        }
      }
      let iP = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        iT = (t) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        iS = { type: 'keyframes', duration: 0.8 },
        iA = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        iM = (t, { keyframes: e }) =>
          e.length > 2
            ? iS
            : tu.has(t)
              ? t.startsWith('scale')
                ? iT(e[1])
                : iP
              : iA,
        iE =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let l = b(n, t) || {},
              u = l.delay || n.delay || 0,
              { elapsed: h = 0 } = n;
            h -= c(u);
            let d = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: 'easeOut',
              velocity: e.getVelocity(),
              ...l,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), l.onUpdate && l.onUpdate(t);
              },
              onComplete: () => {
                o(), l.onComplete && l.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(l) && (d = { ...d, ...iM(t, d) }),
              d.duration && (d.duration = c(d.duration)),
              d.repeatDelay && (d.repeatDelay = c(d.repeatDelay)),
              void 0 !== d.from && (d.keyframes[0] = d.from);
            let p = !1;
            if (
              ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) ||
                ((d.duration = 0), 0 !== d.delay || (p = !0)),
              (ty.current || a.skipAnimations) &&
                ((p = !0), (d.duration = 0), (d.delay = 0)),
              (d.allowFlatten = !l.type && !l.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = eW(d.keyframes, l);
              if (void 0 !== t)
                return (
                  j.update(() => {
                    d.onUpdate(t), d.onComplete();
                  }),
                  new x([])
                );
            }
            return !s && iw.supports(d) ? new iw(d) : new ig(d);
          };
      function iV(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let u = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(h, e))
          )
            continue;
          let a = { delay: i, ...b(o || {}, e) },
            c = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[tg];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, j);
              null !== t && ((a.startTime = t), (c = !0));
            }
          }
          tf(t, e),
            n.start(
              iE(
                e,
                n,
                r,
                t.shouldReduceMotion && th.has(e) ? { type: !1 } : a,
                t,
                c
              )
            );
          let d = n.animation;
          d && u.push(d);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              j.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = v(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = tp(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, ts(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function iC(t, e, i = {}) {
        var n;
        let r = v(
            t,
            e,
            'exit' === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(iV(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ik)
                        .forEach((t, n) => {
                          t.notify('AnimationStart', e),
                            o.push(
                              iC(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify('AnimationComplete', e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ik(t, e) {
        return t.sortNodePosition(e);
      }
      function iD(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function iR(t) {
        return 'string' == typeof t || Array.isArray(t);
      }
      let ij = [
          'animate',
          'whileInView',
          'whileFocus',
          'whileHover',
          'whileTap',
          'whileDrag',
          'exit',
        ],
        iO = ['initial', ...ij],
        iL = iO.length,
        iF = [...ij].reverse(),
        iB = ij.length;
      function iI(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function iU() {
        return {
          animate: iI(!0),
          whileInView: iI(),
          whileHover: iI(),
          whileTap: iI(),
          whileDrag: iI(),
          whileFocus: iI(),
          exit: iI(),
        };
      }
      class iN {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class i$ extends iN {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify('AnimationStart', e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => iC(t, e, i)));
                          else if ('string' == typeof e) n = iC(t, e, i);
                          else {
                            let r =
                              'function' == typeof e ? v(t, e, i.custom) : e;
                            n = Promise.all(iV(t, r, i));
                          }
                          return n.then(() => {
                            t.notify('AnimationComplete', e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = iU(),
                  n = !0,
                  r = (e) => (i, n) => {
                    var r;
                    let s = v(
                      t,
                      n,
                      'exit' === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let { props: o } = t,
                    a =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < iL; t++) {
                          let n = iO[t],
                            r = e.props[n];
                          (iR(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < iB; e++) {
                    var d, m;
                    let f = iF[e],
                      v = i[f],
                      g = void 0 !== o[f] ? o[f] : a[f],
                      y = iR(g),
                      x = f === s ? v.isActive : null;
                    !1 === x && (c = e);
                    let b = g === a[f] && g !== o[f] && y;
                    if (
                      (b && n && t.manuallyAnimateOnMount && (b = !1),
                      (v.protectedKeys = { ...h }),
                      (!v.isActive && null === x) ||
                        (!g && !v.prevProp) ||
                        p(g) ||
                        'boolean' == typeof g)
                    )
                      continue;
                    let w =
                        ((d = v.prevProp),
                        'string' == typeof (m = g)
                          ? m !== d
                          : !!Array.isArray(m) && !iD(m, d)),
                      P =
                        w || (f === s && v.isActive && !b && y) || (e > c && y),
                      T = !1,
                      S = Array.isArray(g) ? g : [g],
                      A = S.reduce(r(f), {});
                    !1 === x && (A = {});
                    let { prevResolvedValues: M = {} } = v,
                      E = { ...M, ...A },
                      V = (e) => {
                        (P = !0),
                          u.has(e) && ((T = !0), u.delete(e)),
                          (v.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in E) {
                      let e = A[t],
                        i = M[t];
                      if (h.hasOwnProperty(t)) continue;
                      let n = !1;
                      (tc(e) && tc(i) ? iD(e, i) : e === i)
                        ? void 0 !== e && u.has(t)
                          ? V(t)
                          : (v.protectedKeys[t] = !0)
                        : null != e
                          ? V(t)
                          : u.add(t);
                    }
                    (v.prevProp = g),
                      (v.prevResolvedValues = A),
                      v.isActive && (h = { ...h, ...A }),
                      n && t.blockInitialAnimation && (P = !1);
                    let C = !(b && w) || T;
                    P &&
                      C &&
                      l.push(
                        ...S.map((t) => ({
                          animation: t,
                          options: { type: f },
                        }))
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ('boolean' != typeof o.initial) {
                      let i = v(
                        t,
                        Array.isArray(o.initial) ? o.initial[0] : o.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      l.push({ animation: e });
                  }
                  let f = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (n = !1),
                    f ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let o = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = iU()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          p(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let iW = 0;
      class iz extends iN {
        constructor() {
          super(...arguments), (this.id = iW++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive('exit', !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function iY(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function i_(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iH = (t) => (e) => Y(e) && t(e, i_(e));
      function iX(t, e, i, n) {
        return iY(t, e, iH(i), n);
      }
      function iK({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iq(t) {
        return t.max - t.min;
      }
      function iG(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = eY(e.min, e.max, t.origin)),
          (t.scale = iq(i) / iq(e)),
          (t.translate = eY(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iZ(t, e, i, n) {
        iG(t.x, e.x, i.x, n ? n.originX : void 0),
          iG(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iQ(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iq(e));
      }
      function iJ(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iq(e));
      }
      function i0(t, e, i) {
        iJ(t.x, e.x, i.x), iJ(t.y, e.y, i.y);
      }
      let i1 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i2 = () => ({ x: i1(), y: i1() }),
        i5 = () => ({ min: 0, max: 0 }),
        i3 = () => ({ x: i5(), y: i5() });
      function i9(t) {
        return [t('x'), t('y')];
      }
      function i4(t) {
        return void 0 === t || 1 === t;
      }
      function i8({ scale: t, scaleX: e, scaleY: i }) {
        return !i4(t) || !i4(e) || !i4(i);
      }
      function i6(t) {
        return (
          i8(t) ||
          i7(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i7(t) {
        var e, i;
        return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
      }
      function nt(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function ne(t, e = 0, i = 1, n, r) {
        (t.min = nt(t.min, e, i, n, r)), (t.max = nt(t.max, e, i, n, r));
      }
      function ni(t, { x: e, y: i }) {
        ne(t.x, e.translate, e.scale, e.originPoint),
          ne(t.y, i.translate, i.scale, i.originPoint);
      }
      function nn(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nr(t, e, i, n, r = 0.5) {
        let s = eY(t.min, t.max, r);
        ne(t, e, i, s, n);
      }
      function ns(t, e) {
        nr(t.x, e.x, e.scaleX, e.scale, e.originX),
          nr(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function no(t, e) {
        return iK(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let na = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function nl(t) {
        return (
          t &&
          'object' == typeof t &&
          Object.prototype.hasOwnProperty.call(t, 'current')
        );
      }
      let nu = (t, e) => Math.abs(t - e);
      class nh {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = np(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(nu(t.x, e.x) ** 2 + nu(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = L;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = nc(e, this.transformPagePoint)),
                j.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = np(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : nc(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !Y(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = nc(i_(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = L;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, np(s, this.history)),
            (this.removeListeners = eJ(
              iX(this.contextWindow, 'pointermove', this.handlePointerMove),
              iX(this.contextWindow, 'pointerup', this.handlePointerUp),
              iX(this.contextWindow, 'pointercancel', this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), O(this.updatePoint);
        }
      }
      function nc(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function nd(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function np({ point: t }, e) {
        return {
          point: t,
          delta: nd(t, nm(e)),
          offset: nd(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = nm(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > c(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = d(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function nm(t) {
        return t[t.length - 1];
      }
      function nf(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function nv(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function ng(t, e, i) {
        return { min: ny(t, e), max: ny(t, i) };
      }
      function ny(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      let nx = new WeakMap();
      class nb {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i3()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new nh(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(i_(t).point);
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: s,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    'x' === (i = n) || 'y' === i
                      ? N[i]
                        ? null
                        : ((N[i] = !0),
                          () => {
                            N[i] = !1;
                          })
                      : N.x || N.y
                        ? null
                        : ((N.x = N.y = !0),
                          () => {
                            N.x = N.y = !1;
                          })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  i9((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tH.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = iq(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && j.postRender(() => s(t, e)),
                  tf(this.visualElement, 'transform');
                let { animationState: o } = this.visualElement;
                o && o.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = 'y')
                        : Math.abs(t.x) > e && (i = 'x'),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, o),
                  this.updateAxis('y', e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                i9((t) => {
                  var e;
                  return (
                    'paused' === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: na(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && j.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive('whileDrag', !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nw(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eY(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? eY(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          e && nl(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r }
                ) {
                  return { x: nf(t.x, i, r), y: nf(t.y, e, n) };
                })(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ng(t, 'left', 'right'), y: ng(t, 'top', 'bottom') }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i9((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !nl(e)) return !1;
          let n = e.current;
          o(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = no(t, i),
                { scroll: r } = e;
              return r && (nn(n.x, r.offset.x), nn(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            a = { x: nv((t = r.layout.layoutBox).x, s.x), y: nv(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!t), t && (a = iK(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            i9((o) => {
              if (!nw(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: 'inertia',
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            tf(this.visualElement, t),
            i.start(iE(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          i9((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          i9((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i9((e) => {
            let { drag: i } = this.getProps();
            if (!nw(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - eY(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!nl(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          i9((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iq(t),
                  r = iq(e);
                return (
                  r > n
                    ? (i = u(e.min, e.max - n, t.min))
                    : n > r && (i = u(t.min, t.max - r, e.min)),
                  tD(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i9((e) => {
              if (!nw(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(eY(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nx.set(this.visualElement, this);
          let t = iX(this.visualElement.current, 'pointerdown', (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              nl(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener('measure', e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            j.read(e);
          let r = iY(window, 'resize', () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              'didUpdate',
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i9((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nw(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class nP extends iN {
        constructor(t) {
          super(t),
            (this.removeGroupControls = o),
            (this.removeListeners = o),
            (this.controls = new nb(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || o);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nT = (t) => (e, i) => {
        t && j.postRender(() => t(e, i));
      };
      class nS extends iN {
        constructor() {
          super(...arguments), (this.removePointerDownListener = o);
        }
        onPointerDown(t) {
          this.session = new nh(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: na(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: nT(t),
            onStart: nT(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && j.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iX(
            this.node.current,
            'pointerdown',
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var nA,
        nM,
        nE = i(5155),
        nV = i(2115),
        nC = i(2082),
        nk = i(869);
      let nD = (0, nV.createContext)({}),
        nR = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nj(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nO = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ('string' == typeof t) {
              if (!tX.test(t)) return t;
              t = parseFloat(t);
            }
            let i = nj(t, e.target.x),
              n = nj(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        nL = {};
      class nF extends nV.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          !(function (t) {
            for (let e in t)
              (nL[e] = t[e]), eD(e) && (nL[e].isCSSVariable = !0);
          })(nI),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nR.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    j.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            B.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nB(t) {
        let [e, i] = (0, nC.xQ)(),
          n = (0, nV.useContext)(nk.L);
        return (0, nE.jsx)(nF, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, nV.useContext)(nD),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nI = {
          borderRadius: {
            ...nO,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: nO,
          borderTopRightRadius: nO,
          borderBottomLeftRadius: nO,
          borderBottomRightRadius: nO,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = t8.parse(t);
              if (n.length > 5) return t;
              let r = t8.createTransformer(t),
                s = +('number' != typeof n[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = eY(o, a, 0.5);
              return (
                'number' == typeof n[2 + s] && (n[2 + s] /= l),
                'number' == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nU = (t, e) => t.depth - e.depth;
      class nN {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          r(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          s(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nU),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function n$(t) {
        let e = tm(t) ? t.get() : t;
        return td(e) ? e.toValue() : e;
      }
      let nW = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        nz = nW.length,
        nY = (t) => ('string' == typeof t ? parseFloat(t) : t),
        n_ = (t) => 'number' == typeof t || tX.test(t);
      function nH(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nX = nq(0, 0.5, tV),
        nK = nq(0.5, 0.95, o);
      function nq(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(u(t, e, n)));
      }
      function nG(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nZ(t, e) {
        nG(t.x, e.x), nG(t.y, e.y);
      }
      function nQ(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nJ(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function n0(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (tH.test(e) &&
              ((e = parseFloat(e)), (e = eY(o.min, o.max, e / 100) - o.min)),
            'number' != typeof e)
          )
            return;
          let a = eY(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nJ(t.min, e, i, a, r)),
            (t.max = nJ(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let n1 = ['x', 'scaleX', 'originX'],
        n2 = ['y', 'scaleY', 'originY'];
      function n5(t, e, i, n) {
        n0(t.x, e, n1, i ? i.x : void 0, n ? n.x : void 0),
          n0(t.y, e, n2, i ? i.y : void 0, n ? n.y : void 0);
      }
      function n3(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function n9(t) {
        return n3(t.x) && n3(t.y);
      }
      function n4(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function n8(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function n6(t, e) {
        return n8(t.x, e.x) && n8(t.y, e.y);
      }
      function n7(t) {
        return iq(t.x) / iq(t.y);
      }
      function rt(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class re {
        constructor() {
          this.members = [];
        }
        add(t) {
          r(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (s(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let ri = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        rn = ['', 'X', 'Y', 'Z'],
        rr = { visibility: 'hidden' },
        rs = 0;
      function ro(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ra({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = rs++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  D.value &&
                    (ri.nodes =
                      ri.calculatedTargetDeltas =
                      ri.calculatedProjections =
                        0),
                  this.nodes.forEach(rh),
                  this.nodes.forEach(rg),
                  this.nodes.forEach(ry),
                  this.nodes.forEach(rc),
                  D.addProjectionMetrics && D.addProjectionMetrics(ri);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nN());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new h()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = U.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= 250 && (O(n), t(s - e));
                      };
                    return j.read(n, !0), () => O(n);
                  })(n, 250)),
                  nR.hasAnimatedSinceResize &&
                    ((nR.hasAnimatedSinceResize = !1), this.nodes.forEach(rv));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        rS,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !n6(this.targetLayout, n),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...b(r, 'layout'), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || rv(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              O(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rx),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[tg];
                  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      'transform',
                      j,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll('snapshot'),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, '')
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rp);
              return;
            }
            this.isUpdating || this.nodes.forEach(rm),
              (this.isUpdating = !1),
              this.nodes.forEach(rf),
              this.nodes.forEach(rl),
              this.nodes.forEach(ru),
              this.clearAllSnapshots();
            let t = U.now();
            (L.delta = tD(0, 1e3 / 60, t - L.timestamp)),
              (L.timestamp = t),
              (L.isProcessing = !0),
              F.update.process(L),
              F.preRender.process(L),
              F.render.process(L),
              (L.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), B.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rd), this.sharedNodes.forEach(rb);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              j.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            j.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                iq(this.snapshot.measuredBox.x) ||
                iq(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i3()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                'LayoutMeasure',
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = 'measure') {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !n9(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, '') : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || i6(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rE((e = n).x),
              rE(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return i3();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(rC)
              )
            ) {
              let { scroll: t } = this.root;
              t && (nn(i.x, t.offset.x), nn(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = i3();
            if (
              (nZ(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && nZ(i, t),
                nn(i.x, r.offset.x),
                nn(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = i3();
            nZ(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ns(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                i6(n.latestValues) && ns(i, n.latestValues);
            }
            return i6(this.latestValues) && ns(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i3();
            nZ(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !i6(i.latestValues)) continue;
              i8(i.latestValues) && i.updateSnapshot();
              let n = i3();
              nZ(n, i.measurePageBox()),
                n5(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return i6(this.latestValues) && n5(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== L.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = L.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i3()),
                    (this.relativeTargetOrigin = i3()),
                    i0(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nZ(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i3()), (this.targetWithTransforms = i3())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iQ(i.x, n.x, r.x),
                      iQ(i.y, n.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox
                            ))
                          : nZ(this.target, this.layout.layoutBox),
                        ni(this.target, this.targetDelta))
                      : nZ(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i3()),
                      (this.relativeTargetOrigin = i3()),
                      i0(this.relativeTargetOrigin, this.target, t.target),
                      nZ(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                D.value && ri.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              i8(this.parent.latestValues) ||
              i7(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === L.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nZ(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    'contents' !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ns(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), ni(t, s)),
                    n && i6(r.latestValues) && ns(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = i3()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nQ(this.prevProjectionDelta.x, this.projectionDelta.x),
                nQ(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iZ(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                rt(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rt(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', l)),
              D.value && ri.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = i2()),
              (this.projectionDelta = i2()),
              (this.projectionDeltaWithTransform = i2());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = i2();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = i3(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(rT)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (rw(o.x, t.x, n),
                  rw(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m, f, v;
                  if (
                    (i0(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    (f = a),
                    (v = n),
                    rP(p.x, m.x, f.x, v),
                    rP(p.y, m.y, f.y, v),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      n4(u.x, d.x) && n4(u.y, d.y)))
                  )
                    this.isProjectionDirty = !1;
                  i || (i = i3()), nZ(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = eY(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nX(n)
                        )),
                        (t.opacityExit = eY(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nK(n)
                        )))
                      : s &&
                        (t.opacity = eY(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < nz; r++) {
                      let s = `border${nW[r]}Radius`,
                        o = nH(e, s),
                        a = nH(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || n_(o) === n_(a)
                          ? ((t[s] = Math.max(eY(nY(o), nY(a), n), 0)),
                            (tH.test(a) || tH.test(o)) && (t[s] += '%'))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = eY(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners('animationStart'),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (O(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = j.update(() => {
                (nR.hasAnimatedSinceResize = !0),
                  Z.layout++,
                  (this.currentAnimation = (function (t, e, i) {
                    let n = tm(0) ? 0 : ts(t);
                    return n.start(iE('', n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      Z.layout--;
                    },
                    onComplete: () => {
                      Z.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners('animationComplete');
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rV(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || i3();
                let e = iq(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iq(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nZ(e, i),
                ns(e, r),
                iZ(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new re()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && ro('z', t, n, this.animationValues);
            for (let e = 0; e < rn.length; e++)
              ro(`rotate${rn[e]}`, t, n, this.animationValues),
                ro(`skew${rn[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rr;
            let n = { visibility: '' },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ''),
                (n.pointerEvents =
                  n$(null == t ? void 0 : t.pointerEvents) || ''),
                (n.transform = r ? r(this.latestValues, '') : 'none'),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    n$(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !i6(this.latestValues) &&
                  ((e.transform = r ? r({}, '') : 'none'),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = '',
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || 'none'
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ''
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            nL)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i, isCSSVariable: r } = nL[t],
                a = 'none' === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = a;
              } else
                r
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (n[t] = a);
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? n$(null == t ? void 0 : t.pointerEvents) || ''
                    : 'none'),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rp),
              this.root.sharedNodes.clear();
          }
        };
      }
      function rl(t) {
        t.updateLayout();
      }
      function ru(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          'size' === r
            ? i9((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iq(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rV(r, i.layoutBox, e) &&
              i9((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iq(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = i2();
          iZ(o, e, i.layoutBox);
          let a = i2();
          s
            ? iZ(a, t.applyTransform(n, !0), i.measuredBox)
            : iZ(a, e, i.layoutBox);
          let l = !n9(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = i3();
                i0(o, i.layoutBox, r.layoutBox);
                let a = i3();
                i0(a, e, s.layoutBox),
                  n6(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rh(t) {
        D.value && ri.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rc(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rd(t) {
        t.clearSnapshot();
      }
      function rp(t) {
        t.clearMeasurements();
      }
      function rm(t) {
        t.isLayoutDirty = !1;
      }
      function rf(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function rv(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rg(t) {
        t.resolveTargetDelta();
      }
      function ry(t) {
        t.calcProjection();
      }
      function rx(t) {
        t.resetSkewAndRotation();
      }
      function rb(t) {
        t.removeLeadSnapshot();
      }
      function rw(t, e, i) {
        (t.translate = eY(e.translate, 0, i)),
          (t.scale = eY(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rP(t, e, i, n) {
        (t.min = eY(e.min, i.min, n)), (t.max = eY(e.max, i.max, n));
      }
      function rT(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rA = (t) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rM = rA('applewebkit/') && !rA('chrome/') ? Math.round : o;
      function rE(t) {
        (t.min = rM(t.min)), (t.max = rM(t.max));
      }
      function rV(t, e, i) {
        return (
          'position' === t ||
          ('preserve-aspect' === t && !(0.2 >= Math.abs(n7(e) - n7(i))))
        );
      }
      function rC(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let rk = ra({
          attachResizeListener: (t, e) => iY(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rD = { current: void 0 },
        rR = ra({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rD.current) {
              let t = new rk({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rD.current = t);
            }
            return rD.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: (t) =>
            'fixed' === window.getComputedStyle(t).position,
        });
      function rj(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive('whileHover', 'Start' === i);
        let r = n['onHover' + i];
        r && j.postRender(() => r(e, i_(e)));
      }
      class rO extends iN {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = $(t, i),
                o = (t) => {
                  if (!W(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ('function' != typeof n || !i) return;
                  let s = (t) => {
                    W(t) && (n(t), i.removeEventListener('pointerleave', s));
                  };
                  i.addEventListener('pointerleave', s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener('pointerenter', o, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                rj(this.node, e, 'Start'), (t) => rj(this.node, t, 'End')
              )
            ));
        }
        unmount() {}
      }
      class rL extends iN {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(':focus-visible');
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive('whileFocus', !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eJ(
            iY(this.node.current, 'focus', () => this.onFocus()),
            iY(this.node.current, 'blur', () => this.onBlur())
          );
        }
        unmount() {}
      }
      function rF(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive('whileTap', 'Start' === i);
        let r = n['onTap' + ('End' === i ? '' : i)];
        r && j.postRender(() => r(e, i_(e)));
      }
      class rB extends iN {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = $(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!G(t) || H.has(n)) return;
                  H.add(n);
                  let s = e(n, t),
                    o = (t, e) => {
                      window.removeEventListener('pointerup', a),
                        window.removeEventListener('pointercancel', l),
                        G(t) &&
                          H.has(n) &&
                          (H.delete(n),
                          'function' == typeof s && s(t, { success: e }));
                    },
                    a = (t) => {
                      o(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          z(n, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener('pointerup', a, r),
                    window.addEventListener('pointercancel', l, r);
                };
              return (
                n.forEach((t) => {
                  if (
                    ((i.useGlobalTarget ? window : t).addEventListener(
                      'pointerdown',
                      o,
                      r
                    ),
                    t instanceof HTMLElement)
                  )
                    t.addEventListener('focus', (t) => q(t, r)),
                      !_.has(t.tagName) &&
                        -1 === t.tabIndex &&
                        null === t.tabIndex &&
                        (t.tabIndex = 0);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                rF(this.node, e, 'Start'),
                (t, { success: e }) => rF(this.node, t, e ? 'End' : 'Cancel')
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rI = new WeakMap(),
        rU = new WeakMap(),
        rN = (t) => {
          let e = rI.get(t.target);
          e && e(t);
        },
        r$ = (t) => {
          t.forEach(rN);
        },
        rW = { some: 0, all: 1 };
      class rz extends iN {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = 'some', once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: 'number' == typeof n ? n : rW[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rU.has(i) || rU.set(i, {});
              let n = rU.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(r$, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              rI.set(t, i),
              n.observe(t),
              () => {
                rI.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive('whileInView', e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ('undefined' == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ['amount', 'margin', 'root'].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rY = (0, nV.createContext)({ strict: !1 });
      var r_ = i(1508);
      let rH = (0, nV.createContext)({});
      function rX(t) {
        return p(t.animate) || iO.some((e) => iR(t[e]));
      }
      function rK(t) {
        return !!(rX(t) || t.variants);
      }
      function rq(t) {
        return Array.isArray(t) ? t.join(' ') : t;
      }
      var rG = i(8972);
      let rZ = {
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
        rQ = {};
      for (let t in rZ) rQ[t] = { isEnabled: (e) => rZ[t].some((t) => !!e[t]) };
      let rJ = Symbol.for('motionComponentSymbol');
      var r0 = i(845),
        r1 = i(7494);
      function r2(t, { layout: e, layoutId: i }) {
        return (
          tu.has(t) ||
          t.startsWith('origin') ||
          ((e || void 0 !== i) && (!!nL[t] || 'opacity' === t))
        );
      }
      let r5 = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t),
        r3 = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        r9 = tl.length;
      function r4(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (tu.has(t)) {
            o = !0;
            continue;
          }
          if (eD(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = r5(i, en[t]);
            t.startsWith('origin') ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = '',
                    r = !0;
                  for (let s = 0; s < r9; s++) {
                    let o = tl[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        'number' == typeof a
                          ? a === +!!o.startsWith('scale')
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = r5(a, en[o]);
                      if (!l) {
                        r = !1;
                        let e = r3[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? '' : n)) : r && (n = 'none'),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = 'none')),
          a)
        ) {
          let { originX: t = '50%', originY: e = '50%', originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let r8 = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function r6(t, e, i) {
        for (let n in e) tm(e[n]) || r2(n, i) || (t[n] = e[n]);
      }
      let r7 = new Set([
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
      function st(t) {
        return (
          t.startsWith('while') ||
          (t.startsWith('drag') && 'draggable' !== t) ||
          t.startsWith('layout') ||
          t.startsWith('onTap') ||
          t.startsWith('onPan') ||
          t.startsWith('onLayout') ||
          r7.has(t)
        );
      }
      let se = (t) => !st(t);
      try {
        !(function (t) {
          t && (se = (e) => (e.startsWith('on') ? !st(e) : t(e)));
        })(require('@emotion/is-prop-valid').default);
      } catch (t) {}
      let si = [
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
      function sn(t) {
        if ('string' != typeof t || t.includes('-'));
        else if (si.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let sr = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        ss = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
      function so(t, e, i) {
        return 'string' == typeof t ? t : tX.transform(e + i * t);
      }
      function sa(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c
      ) {
        if ((r4(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: m } = t;
        d.transform && (m && (p.transform = d.transform), delete d.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = so(e, t.x, t.width),
                r = so(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? sr : ss;
              t[s.offset] = tX.transform(-n);
              let o = tX.transform(e),
                a = tX.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let sl = () => ({ ...r8(), attrs: {} }),
        su = (t) => 'string' == typeof t && 'svg' === t.toLowerCase();
      var sh = i(2885);
      let sc = (t) => (e, i) => {
        let n = (0, nV.useContext)(rH),
          r = (0, nV.useContext)(r0.t),
          s = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = n$(s[t]);
                  let { initial: o, animate: a } = t,
                    l = rX(t),
                    u = rK(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    c = (h = h || !1 === o) ? a : o;
                  if (c && 'boolean' != typeof c && !p(c)) {
                    let e = Array.isArray(c) ? c : [c];
                    for (let i = 0; i < e.length; i++) {
                      let n = f(t, e[i]);
                      if (n) {
                        let { transitionEnd: t, transition: e, ...i } = n;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let e in t) r[e] = t[e];
                      }
                    }
                  }
                  return r;
                })(n, r, s, t),
                renderState: e(),
              };
              return (
                i &&
                  ((o.onMount = (t) => i({ props: n, current: t, ...o })),
                  (o.onUpdate = (t) => i(t))),
                o
              );
            })(t, e, n, r);
        return i ? s() : (0, sh.M)(s);
      };
      function sd(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (tm(r[o]) ||
            (e.style && tm(e.style[o])) ||
            r2(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      let sp = {
        useVisualState: sc({
          scrapeMotionValuesFromProps: sd,
          createRenderState: r8,
        }),
      };
      function sm(t, e) {
        try {
          e.dimensions =
            'function' == typeof t.getBBox
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch (t) {
          e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      function sf(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let sv = new Set([
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
      function sg(t, e, i, n) {
        for (let i in (sf(t, e, void 0, n), e.attrs))
          t.setAttribute(sv.has(i) ? i : tv(i), e.attrs[i]);
      }
      function sy(t, e, i) {
        let n = sd(t, e, i);
        for (let i in t)
          (tm(t[i]) || tm(e[i])) &&
            (n[
              -1 !== tl.indexOf(i)
                ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let sx = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
        sb = {
          useVisualState: sc({
            scrapeMotionValuesFromProps: sy,
            createRenderState: sl,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: n,
              latestValues: r,
            }) => {
              if (!i) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in r)
                  if (tu.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let i = 0; i < sx.length; i++) {
                  let n = sx[i];
                  t[n] !== e[n] && (o = !0);
                }
              o &&
                j.read(() => {
                  sm(i, n),
                    j.render(() => {
                      sa(n, r, su(i.tagName), t.transformTemplate), sg(i, n);
                    });
                });
            },
          }),
        },
        sw = { current: null },
        sP = { current: !1 },
        sT = [...eB, tQ, t8],
        sS = (t) => sT.find(eF(t)),
        sA = new WeakMap(),
        sM = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ];
      class sE {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eV),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = U.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), j.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = rX(e)),
            (this.isVariantNode = rK(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== a[t] && tm(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sA.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sP.current ||
              (function () {
                if (((sP.current = !0), rG.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia('(prefers-reduced-motion)'),
                      e = () => (sw.current = t.matches);
                    t.addListener(e), e();
                  } else sw.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || sw.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          O(this.notifyUpdate),
          O(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = tu.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on('change', (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && j.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on('renderRequest', this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = 'animation';
          for (t in rQ) {
            let e = rQ[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i3();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < sM.length; e++) {
            let i = sM[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t['on' + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (tm(r)) t.addValue(n, r);
              else if (tm(s)) t.addValue(n, ts(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, ts(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = ts(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ('string' == typeof n && (eC(n) || tk(n))
                ? (n = parseFloat(n))
                : !sS(n) && t8.test(e) && (n = eo(t, e)),
              this.setBaseTarget(t, tm(n) ? n.get() : n)),
            tm(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ('string' == typeof n || 'object' == typeof n) {
            let r = f(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || tm(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new h()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sV extends sE {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eU);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tm(t) &&
            (this.childSubscription = t.on('change', (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sC extends sV {
        constructor() {
          super(...arguments), (this.type = 'html'), (this.renderInstance = sf);
        }
        readValueFromInstance(t, e) {
          if (tu.has(e)) return eg(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (eD(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return 'string' == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return no(t, e);
        }
        build(t, e, i) {
          r4(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sd(t, e, i);
        }
      }
      class sk extends sV {
        constructor() {
          super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = i3),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                sm(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (tu.has(e)) {
            let t = es(e);
            return (t && t.default) || 0;
          }
          return (e = sv.has(e) ? e : tv(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return sy(t, e, i);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            j.postRender(this.updateDimensions);
        }
        build(t, e, i) {
          sa(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          sg(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = su(t.tagName)), super.mount(t);
        }
      }
      let sD = (function (t) {
        if ('undefined' == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            'create' === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((nA = {
          animation: { Feature: i$ },
          exit: { Feature: iz },
          inView: { Feature: rz },
          tap: { Feature: rB },
          focus: { Feature: rL },
          hover: { Feature: rO },
          pan: { Feature: nS },
          drag: { Feature: nP, ProjectionNode: rR, MeasureLayout: nB },
          layout: { ProjectionNode: rR, MeasureLayout: nB },
        }),
        (nM = (t, e) =>
          sn(t)
            ? new sk(e)
            : new sC(e, { allowProjection: t !== nV.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, i;
            let {
              preloadedFeatures: n,
              createVisualElement: r,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function l(t, e) {
              var i, n, l;
              let u;
              let h = {
                  ...(0, nV.useContext)(r_.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, nV.useContext)(nk.L).id;
                    return i && void 0 !== e ? i + '-' + e : e;
                  })(t),
                },
                { isStatic: c } = h,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (rX(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || iR(e) ? e : void 0,
                        animate: iR(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, nV.useContext)(rH));
                  return (0, nV.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [rq(e), rq(i)]
                  );
                })(t),
                p = o(t, c);
              if (!c && rG.B) {
                (n = 0), (l = 0), (0, nV.useContext)(rY).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = rQ;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(h);
                (u = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, n, r) {
                    var s, o;
                    let { visualElement: a } = (0, nV.useContext)(rH),
                      l = (0, nV.useContext)(rY),
                      u = (0, nV.useContext)(r0.t),
                      h = (0, nV.useContext)(r_.Q).reducedMotion,
                      c = (0, nV.useRef)(null);
                    (n = n || l.renderer),
                      !c.current &&
                        n &&
                        (c.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let d = c.current,
                      p = (0, nV.useContext)(nD);
                    d &&
                      !d.projection &&
                      r &&
                      ('html' === d.type || 'svg' === d.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e['data-framer-portal-id']
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && nl(a)),
                            visualElement: t,
                            animationType: 'string' == typeof s ? s : 'both',
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(c.current, i, r, p);
                    let m = (0, nV.useRef)(!1);
                    (0, nV.useInsertionEffect)(() => {
                      d && m.current && d.update(i, u);
                    });
                    let f = i[tg],
                      v = (0, nV.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      (0, r1.E)(() => {
                        d &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          d.updateFeatures(),
                          B.render(d.render),
                          v.current &&
                            d.animationState &&
                            d.animationState.animateChanges());
                      }),
                      (0, nV.useEffect)(() => {
                        d &&
                          (!v.current &&
                            d.animationState &&
                            d.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      d
                    );
                  })(a, p, h, r, t.ProjectionNode));
              }
              return (0, nE.jsxs)(rH.Provider, {
                value: d,
                children: [
                  u && d.visualElement
                    ? (0, nE.jsx)(u, { visualElement: d.visualElement, ...h })
                    : null,
                  s(
                    a,
                    t,
                    ((i = d.visualElement),
                    (0, nV.useCallback)(
                      (t) => {
                        t && p.onMount && p.onMount(t),
                          i && (t ? i.mount(t) : i.unmount()),
                          e &&
                            ('function' == typeof e
                              ? e(t)
                              : nl(e) && (e.current = t));
                      },
                      [i]
                    )),
                    p,
                    c,
                    d.visualElement
                  ),
                ],
              });
            }
            n &&
              (function (t) {
                for (let e in t) rQ[e] = { ...rQ[e], ...t[e] };
              })(n),
              (l.displayName = 'motion.'.concat(
                'string' == typeof a
                  ? a
                  : 'create('.concat(
                      null !==
                        (i =
                          null !== (e = a.displayName) && void 0 !== e
                            ? e
                            : a.name) && void 0 !== i
                        ? i
                        : '',
                      ')'
                    )
              ));
            let u = (0, nV.forwardRef)(l);
            return (u[rJ] = a), u;
          })({
            ...(sn(t) ? sb : sp),
            preloadedFeatures: nA,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    sn(e)
                      ? function (t, e, i, n) {
                          let r = (0, nV.useMemo)(() => {
                            let i = sl();
                            return (
                              sa(i, e, su(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            r6(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                r6(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, nV.useMemo)(() => {
                                      let i = r8();
                                      return (
                                        r4(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  'none'),
                              (n.touchAction =
                                !0 === t.drag
                                  ? 'none'
                                  : `pan-${'x' === t.drag ? 'y' : 'x'}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ('values' !== r || 'object' != typeof t.values) &&
                        (se(r) ||
                          (!0 === i && st(r)) ||
                          (!e && !st(r)) ||
                          (t.draggable && r.startsWith('onDrag'))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, 'string' == typeof e, t),
                  l = e !== nV.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, nV.useMemo)(() => (tm(u) ? u.get() : u), [u]);
                return (0, nV.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: nM,
            Component: t,
          });
        })
      );
    },
    7494: (t, e, i) => {
      'use strict';
      i.d(e, { E: () => r });
      var n = i(2115);
      let r = i(8972).B ? n.useLayoutEffect : n.useEffect;
    },
    7917: () => {},
    8637: (t, e, i) => {
      t.exports = i(9399)();
    },
    8972: (t, e, i) => {
      'use strict';
      i.d(e, { B: () => n });
      let n = 'undefined' != typeof window;
    },
    9300: (t, e) => {
      var i;
      !(function () {
        'use strict';
        var n = {}.hasOwnProperty;
        function r() {
          for (var t = '', e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            i &&
              (t = s(
                t,
                (function (t) {
                  if ('string' == typeof t || 'number' == typeof t) return t;
                  if ('object' != typeof t) return '';
                  if (Array.isArray(t)) return r.apply(null, t);
                  if (
                    t.toString !== Object.prototype.toString &&
                    !t.toString.toString().includes('[native code]')
                  )
                    return t.toString();
                  var e = '';
                  for (var i in t) n.call(t, i) && t[i] && (e = s(e, i));
                  return e;
                })(i)
              ));
          }
          return t;
        }
        function s(t, e) {
          return e ? (t ? t + ' ' + e : t + e) : t;
        }
        t.exports
          ? ((r.default = r), (t.exports = r))
          : void 0 !==
              (i = function () {
                return r;
              }.apply(e, [])) && (t.exports = i);
      })();
    },
    9399: (t, e, i) => {
      'use strict';
      var n = i(2948);
      function r() {}
      function s() {}
      (s.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, s, o) {
            if (o !== n) {
              var a = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((a.name = 'Invariant Violation'), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: s,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
  },
]);
