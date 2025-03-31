(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [367],
  {
    1633: (t, e, i) => {
      'use strict';
      e.A = void 0;
      var s = n(i(2115)),
        o = n(i(8637)),
        r = n(i(9300));
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      let a = ({
        animate: t = !0,
        className: e = '',
        layout: i = '2-columns',
        lineColor: o = '#FFF',
        children: n,
      }) => (
        'object' == typeof window &&
          document.documentElement.style.setProperty('--line-color', o),
        s.default.createElement(
          'div',
          {
            className: (0, r.default)(e, 'vertical-timeline', {
              'vertical-timeline--animate': t,
              'vertical-timeline--two-columns': '2-columns' === i,
              'vertical-timeline--one-column-left':
                '1-column' === i || '1-column-left' === i,
              'vertical-timeline--one-column-right': '1-column-right' === i,
            }),
          },
          n
        )
      );
      (a.propTypes = {
        children: o.default.oneOfType([
          o.default.arrayOf(o.default.node),
          o.default.node,
        ]).isRequired,
        className: o.default.string,
        animate: o.default.bool,
        layout: o.default.oneOf([
          '1-column-left',
          '1-column',
          '2-columns',
          '1-column-right',
        ]),
        lineColor: o.default.string,
      }),
        (e.A = a);
    },
    1891: (t, e, i) => {
      'use strict';
      i.r(e),
        i.d(e, {
          InView: () => m,
          default: () => m,
          defaultFallbackInView: () => u,
          observe: () => c,
          useInView: () => f,
        });
      var s = i(2115);
      function o() {
        return (o =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
            }
            return t;
          }).apply(this, arguments);
      }
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      var n = new Map(),
        a = new WeakMap(),
        l = 0,
        h = void 0;
      function u(t) {
        h = t;
      }
      function c(t, e, i, s) {
        if (
          (void 0 === i && (i = {}),
          void 0 === s && (s = h),
          void 0 === window.IntersectionObserver && void 0 !== s)
        ) {
          var o = t.getBoundingClientRect();
          return (
            e(s, {
              isIntersecting: s,
              target: t,
              intersectionRatio:
                'number' == typeof i.threshold ? i.threshold : 0,
              time: 0,
              boundingClientRect: o,
              intersectionRect: o,
              rootBounds: o,
            }),
            function () {}
          );
        }
        var r = (function (t) {
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
              i = n.get(e);
            if (!i) {
              var s,
                o = new Map(),
                r = new IntersectionObserver(function (e) {
                  e.forEach(function (e) {
                    var i,
                      r =
                        e.isIntersecting &&
                        s.some(function (t) {
                          return e.intersectionRatio >= t;
                        });
                    t.trackVisibility &&
                      void 0 === e.isVisible &&
                      (e.isVisible = r),
                      null == (i = o.get(e.target)) ||
                        i.forEach(function (t) {
                          t(r, e);
                        });
                  });
                }, t);
              (s =
                r.thresholds ||
                (Array.isArray(t.threshold)
                  ? t.threshold
                  : [t.threshold || 0])),
                (i = { id: e, observer: r, elements: o }),
                n.set(e, i);
            }
            return i;
          })(i),
          u = r.id,
          c = r.observer,
          d = r.elements,
          p = d.get(t) || [];
        return (
          d.has(t) || d.set(t, p),
          p.push(e),
          c.observe(t),
          function () {
            p.splice(p.indexOf(e), 1),
              0 === p.length && (d.delete(t), c.unobserve(t)),
              0 === d.size && (c.disconnect(), n.delete(u));
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
          r(e, t);
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
                s = t.rootMargin,
                o = t.trackVisibility,
                r = t.delay,
                n = t.fallbackInView;
              this._unobserveCb = c(
                this.node,
                this.handleChange,
                {
                  threshold: e,
                  root: i,
                  rootMargin: s,
                  trackVisibility: o,
                  delay: r,
                },
                n
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
            var r = this.props,
              n = r.children,
              a = r.as,
              l = (function (t, e) {
                if (null == t) return {};
                var i,
                  s,
                  o = {},
                  r = Object.keys(t);
                for (s = 0; s < r.length; s++)
                  (i = r[s]), e.indexOf(i) >= 0 || (o[i] = t[i]);
                return o;
              })(r, d);
            return s.createElement(
              a || 'div',
              o({ ref: this.handleNode }, l),
              n
            );
          }),
          e
        );
      })(s.Component);
      function f(t) {
        var e = void 0 === t ? {} : t,
          i = e.threshold,
          o = e.delay,
          r = e.trackVisibility,
          n = e.rootMargin,
          a = e.root,
          l = e.triggerOnce,
          h = e.skip,
          u = e.initialInView,
          d = e.fallbackInView,
          p = s.useRef(),
          m = s.useState({ inView: !!u }),
          f = m[0],
          v = m[1],
          g = s.useCallback(
            function (t) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                !h &&
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
                      rootMargin: n,
                      threshold: i,
                      trackVisibility: r,
                      delay: o,
                    },
                    d
                  ));
            },
            [Array.isArray(i) ? i.toString() : i, a, n, l, h, r, d, o]
          );
        (0, s.useEffect)(function () {
          p.current || !f.entry || l || h || v({ inView: !!u });
        });
        var y = [g, f.inView, f.entry];
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y;
      }
      (m.displayName = 'InView'),
        (m.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
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
      var s = a(i(2115)),
        o = a(i(8637)),
        r = a(i(9300)),
        n = i(1891);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      let l = ({
        children: t = '',
        className: e = '',
        contentArrowStyle: i = null,
        contentStyle: o = null,
        date: a = '',
        dateClassName: l = '',
        icon: h = null,
        iconClassName: u = '',
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
        shadowSize: P = 'small',
      }) =>
        s.default.createElement(n.InView, y, ({ inView: n, ref: y }) =>
          s.default.createElement(
            'div',
            {
              ref: y,
              id: m,
              className: (0, r.default)(e, 'vertical-timeline-element', {
                'vertical-timeline-element--left': 'left' === f,
                'vertical-timeline-element--right': 'right' === f,
                'vertical-timeline-element--no-children': '' === t,
              }),
              style: v,
            },
            s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(
                'span',
                {
                  style: p,
                  onClick: c,
                  className: (0, r.default)(
                    u,
                    'vertical-timeline-element-icon',
                    `shadow-size-${P}`,
                    { 'bounce-in': n || x, 'is-hidden': !(n || x) }
                  ),
                },
                h
              ),
              s.default.createElement(
                'div',
                {
                  style: o,
                  onClick: d,
                  className: (0, r.default)(
                    g,
                    'vertical-timeline-element-content',
                    { 'bounce-in': n || x, 'is-hidden': !(n || x) }
                  ),
                },
                s.default.createElement('div', {
                  style: i,
                  className: 'vertical-timeline-element-content-arrow',
                }),
                t,
                s.default.createElement(
                  'span',
                  {
                    className: (0, r.default)(
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
        children: o.default.oneOfType([
          o.default.arrayOf(o.default.node),
          o.default.node,
        ]),
        className: o.default.string,
        contentArrowStyle: o.default.shape({}),
        contentStyle: o.default.shape({}),
        date: o.default.node,
        dateClassName: o.default.string,
        icon: o.default.element,
        iconClassName: o.default.string,
        iconStyle: o.default.shape({}),
        iconOnClick: o.default.func,
        onTimelineElementClick: o.default.func,
        id: o.default.string,
        position: o.default.string,
        style: o.default.shape({}),
        textClassName: o.default.string,
        visible: o.default.bool,
        shadowSize: o.default.string,
        intersectionObserverProps: o.default.shape({
          root: o.default.object,
          rootMargin: o.default.string,
          threshold: o.default.number,
          triggerOnce: o.default.bool,
        }),
      }),
        (e.A = l);
    },
    4436: (t, e, i) => {
      'use strict';
      i.d(e, { k5: () => u });
      var s = i(2115),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        r = s.createContext && s.createContext(o),
        n = ['attr', 'size', 'title'];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var s, o, r;
                (s = t),
                  (o = e),
                  (r = i[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ('object' != typeof t || !t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var s = i.call(t, e || 'default');
                        if ('object' != typeof s) return s;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === e ? String : Number)(t);
                    })(t, 'string');
                    return 'symbol' == typeof e ? e : e + '';
                  })(o)) in s
                    ? Object.defineProperty(s, o, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (s[o] = r);
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
      function u(t) {
        return (e) =>
          s.createElement(
            c,
            a({ attr: h({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  s.createElement(e.tag, h({ key: i }, e.attr), t(e.child))
                )
              );
            })(t.child)
          );
      }
      function c(t) {
        var e = (e) => {
          var i,
            { attr: o, size: r, title: l } = t,
            u = (function (t, e) {
              if (null == t) return {};
              var i,
                s,
                o = (function (t, e) {
                  if (null == t) return {};
                  var i = {};
                  for (var s in t)
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                      if (e.indexOf(s) >= 0) continue;
                      i[s] = t[s];
                    }
                  return i;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                for (s = 0; s < r.length; s++)
                  (i = r[s]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (o[i] = t[i]);
              }
              return o;
            })(t, n),
            c = r || e.size || '1em';
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + ' ' : '') + t.className),
            s.createElement(
              'svg',
              a(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                e.attr,
                o,
                u,
                {
                  className: i,
                  style: h(h({ color: t.color || e.color }, e.style), t.style),
                  height: c,
                  width: c,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              l && s.createElement('title', null, l),
              t.children
            )
          );
        };
        return void 0 !== r
          ? s.createElement(r.Consumer, null, (t) => e(t))
          : e(o);
      }
    },
    6129: (t, e, i) => {
      'use strict';
      i.d(e, { P: () => ea });
      var s = i(4060),
        o = i(5457),
        r = i(2290),
        n = i(4331),
        a = i(2128),
        l = i(4228),
        h = i(1442),
        u = i(1586);
      function c(t, e, i, s) {
        return (0, h.k)(t, e, (0, u.F)(i), s);
      }
      var d = i(8588),
        p = i(1109);
      function m(t) {
        return t.max - t.min;
      }
      function f(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = (0, p.k)(e.min, e.max, t.origin)),
          (t.scale = m(i) / m(e)),
          (t.translate = (0, p.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function v(t, e, i, s) {
        f(t.x, e.x, i.x, s ? s.originX : void 0),
          f(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function g(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + m(e));
      }
      function y(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + m(e));
      }
      function x(t, e, i) {
        y(t.x, e.x, i.x), y(t.y, e.y, i.y);
      }
      var P = i(1786);
      function T(t) {
        return [t('x'), t('y')];
      }
      var b = i(3757);
      let D = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var w = i(3991),
        E = i(5471),
        S = i(6333);
      let k = (t, e) => Math.abs(t - e);
      var j = i(7007);
      class A {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: o = !1,
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
              let t = O(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(k(t.x, e.x) ** 2 + k(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: o } = a.uv;
              this.history.push({ ...s, timestamp: o });
              let { onStart: r, onMove: n } = this.handlers;
              e ||
                (r && r(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                n && n(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = R(e, this.transformPagePoint)),
                a.Gt.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: o,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && o && o(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = O(
                'pointercancel' === t.type
                  ? this.lastMoveEventInfo
                  : R(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !(0, a.Mc)(t))
          )
            return;
          (this.dragSnapToOrigin = o),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = R((0, u.e)(t), this.transformPagePoint),
            { point: n } = r,
            { timestamp: l } = a.uv;
          this.history = [{ ...n, timestamp: l }];
          let { onSessionStart: h } = e;
          h && h(t, O(r, this.history)),
            (this.removeListeners = (0, j.F)(
              c(this.contextWindow, 'pointermove', this.handlePointerMove),
              c(this.contextWindow, 'pointerup', this.handlePointerUp),
              c(this.contextWindow, 'pointercancel', this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, a.WG)(this.updatePoint);
        }
      }
      function R(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function V(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function O({ point: t }, e) {
        return {
          point: t,
          delta: V(t, C(e)),
          offset: V(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              o = C(t);
            for (
              ;
              i >= 0 &&
              ((s = t[i]), !(o.timestamp - s.timestamp > (0, n.fD)(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = (0, n.Xu)(o.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let a = { x: (o.x - s.x) / r, y: (o.y - s.y) / r };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0.1),
        };
      }
      function C(t) {
        return t[t.length - 1];
      }
      var L = i(7782);
      function B(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function M(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function U(t, e, i) {
        return { min: F(t, e), max: F(t, i) };
      }
      function F(t, e) {
        return 'number' == typeof t ? t : t[e] || 0;
      }
      let N = new WeakMap();
      class I {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, P.ge)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new A(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor((0, u.e)(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: o,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, a.Wp)(i)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  T((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (E.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        s && (e = m(s) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  o && a.Gt.postRender(() => o(t, e)),
                  (0, S.g)(this.visualElement, 'transform');
                let { animationState: r } = this.visualElement;
                r && r.setActive('whileDrag', !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: o,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: n } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = 'y')
                        : Math.abs(t.x) > e && (i = 'x'),
                      i
                    );
                  })(n)),
                    null !== this.currentDirection &&
                      o &&
                      o(this.currentDirection);
                  return;
                }
                this.updateAxis('x', e.point, n),
                  this.updateAxis('y', e.point, n),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                T((t) => {
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
              dragSnapToOrigin: s,
              contextWindow: D(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && a.Gt.postRender(() => o(t, e));
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
          let { drag: s } = this.getProps();
          if (!i || !W(t, s, this.currentDirection)) return;
          let o = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? (0, p.k)(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? (0, p.k)(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            o.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            o = this.constraints;
          e && (0, w.X)(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: s, right: o }
                ) {
                  return { x: B(t.x, i, o), y: B(t.y, e, s) };
                })(s.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: U(t, 'left', 'right'), y: U(t, 'top', 'bottom') }
              );
            })(i)),
            o !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              T((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !(0, w.X)(e)) return !1;
          let s = e.current;
          (0, n.V1)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let r = (0, b.L)(
              s,
              o.root,
              this.visualElement.getTransformPagePoint()
            ),
            a = { x: M((t = o.layout.layoutBox).x, r.x), y: M(t.y, r.y) };
          if (i) {
            let t = i((0, d.pA)(a));
            (this.hasMutatedConstraints = !!t), t && (a = (0, d.FY)(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: o,
              dragSnapToOrigin: r,
              onDragTransitionEnd: n,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            T((n) => {
              if (!W(n, e, this.currentDirection)) return;
              let l = (a && a[n]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: 'inertia',
                velocity: i ? t[n] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l,
              };
              return this.startAxisValueAnimation(n, h);
            })
          ).then(n);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, S.g)(this.visualElement, t),
            i.start((0, l.f)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          T((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          T((t) => {
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
          T((e) => {
            let { drag: i } = this.getProps();
            if (!W(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              o = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              o.set(t[e] - (0, p.k)(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!(0, w.X)(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          T((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = m(t),
                  o = m(e);
                return (
                  o > s
                    ? (i = (0, n.qB)(e.min, e.max - s, t.min))
                    : s > o && (i = (0, n.qB)(t.min, t.max - o, e.min)),
                  (0, L.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            T((e) => {
              if (!W(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: o, max: r } = this.constraints[e];
              i.set((0, p.k)(o, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          N.set(this.visualElement, this);
          let t = c(this.visualElement.current, 'pointerdown', (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              (0, w.X)(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener('measure', e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            a.Gt.read(e);
          let o = (0, h.k)(window, 'resize', () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              'didUpdate',
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (T((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: o = !1,
              dragElastic: r = 0.35,
              dragMomentum: n = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: n,
          };
        }
      }
      function W(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class _ extends r.X {
        constructor(t) {
          super(t),
            (this.removeGroupControls = n.lQ),
            (this.removeListeners = n.lQ),
            (this.controls = new I(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || n.lQ);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let G = (t) => (e, i) => {
        t && a.Gt.postRender(() => t(e, i));
      };
      class $ extends r.X {
        constructor() {
          super(...arguments), (this.removePointerDownListener = n.lQ);
        }
        onPointerDown(t) {
          this.session = new A(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: D(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: G(t),
            onStart: G(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && a.Gt.postRender(() => s(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = c(
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
      var z = i(5155),
        H = i(2115),
        Q = i(2082),
        q = i(869),
        X = i(797);
      let Y = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function K(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let Z = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ('string' == typeof t) {
            if (!E.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = K(t, e.target.x),
            s = K(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      var J = i(3013),
        tt = i(637);
      class te extends H.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: o } = t;
          (0, tt.$)(ts),
            o &&
              (e.group && e.group.add(o),
              i && i.register && s && i.register(o),
              o.root.didUpdate(),
              o.addEventListener('animationComplete', () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (Y.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: o,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = o),
              s || t.layoutDependency !== e || void 0 === e || t.isPresent !== o
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === o ||
                (o
                  ? r.promote()
                  : r.relegate() ||
                    a.Gt.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            a.k2.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ti(t) {
        let [e, i] = (0, Q.xQ)(),
          s = (0, H.useContext)(q.L);
        return (0, z.jsx)(te, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, H.useContext)(X.N),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let ts = {
        borderRadius: {
          ...Z,
          applyTo: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
          ],
        },
        borderTopLeftRadius: Z,
        borderTopRightRadius: Z,
        borderBottomLeftRadius: Z,
        borderBottomRightRadius: Z,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = J.f.parse(t);
            if (s.length > 5) return t;
            let o = J.f.createTransformer(t),
              r = +('number' != typeof s[0]),
              n = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (s[0 + r] /= n), (s[1 + r] /= a);
            let l = (0, p.k)(n, a, 0.5);
            return (
              'number' == typeof s[2 + r] && (s[2 + r] /= l),
              'number' == typeof s[3 + r] && (s[3 + r] /= l),
              o(s)
            );
          },
        },
      };
      var to = i(4570),
        tr = i(6926);
      let tn = (t, e) => t.depth - e.depth;
      class ta {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, n.Kq)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, n.Ai)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tn),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tl = i(5902),
        th = i(9282);
      let tu = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        tc = tu.length,
        td = (t) => ('string' == typeof t ? parseFloat(t) : t),
        tp = (t) => 'number' == typeof t || E.px.test(t);
      function tm(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tf = tg(0, 0.5, th.yT),
        tv = tg(0.5, 0.95, n.lQ);
      function tg(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i((0, n.qB)(t, e, s)));
      }
      function ty(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function tx(t, e) {
        ty(t.x, e.x), ty(t.y, e.y);
      }
      function tP(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      var tT = i(6147);
      function tb(t, e, i, s, o) {
        return (
          (t -= e),
          (t = (0, tT.hq)(t, 1 / i, s)),
          void 0 !== o && (t = (0, tT.hq)(t, 1 / o, s)),
          t
        );
      }
      function tD(t, e, [i, s, o], r, n) {
        !(function (t, e = 0, i = 1, s = 0.5, o, r = t, n = t) {
          if (
            (E.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, p.k)(n.min, n.max, e / 100) - n.min)),
            'number' != typeof e)
          )
            return;
          let a = (0, p.k)(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = tb(t.min, e, i, a, o)),
            (t.max = tb(t.max, e, i, a, o));
        })(t, e[i], e[s], e[o], e.scale, r, n);
      }
      let tw = ['x', 'scaleX', 'originX'],
        tE = ['y', 'scaleY', 'originY'];
      function tS(t, e, i, s) {
        tD(t.x, e, tw, i ? i.x : void 0, s ? s.x : void 0),
          tD(t.y, e, tE, i ? i.y : void 0, s ? s.y : void 0);
      }
      function tk(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function tj(t) {
        return tk(t.x) && tk(t.y);
      }
      function tA(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function tR(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function tV(t, e) {
        return tR(t.x, e.x) && tR(t.y, e.y);
      }
      function tO(t) {
        return m(t.x) / m(t.y);
      }
      function tC(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class tL {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, n.Kq)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, n.Ai)(this.members, t),
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
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
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
      var tB = i(2662);
      let tM = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        tU = ['', 'X', 'Y', 'Z'],
        tF = { visibility: 'hidden' },
        tN = 0;
      function tI(t, e, i, s) {
        let { latestValues: o } = e;
        o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function tW({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: o,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = tN++),
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
                  a.Qu.value &&
                    (tM.nodes =
                      tM.calculatedTargetDeltas =
                      tM.calculatedProjections =
                        0),
                  this.nodes.forEach(t$),
                  this.nodes.forEach(tK),
                  this.nodes.forEach(tZ),
                  this.nodes.forEach(tz),
                  a.Qu.addProjectionMetrics && a.Qu.addProjectionMetrics(tM);
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
            this.root === this && (this.nodes = new ta());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new n.vY()),
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
            let { layoutId: s, layout: o, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (o || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = a.kB.now(),
                      s = ({ timestamp: o }) => {
                        let r = o - i;
                        r >= 250 && ((0, a.WG)(s), t(r - e));
                      };
                    return a.Gt.read(s, !0), () => (0, a.WG)(s);
                  })(s, 250)),
                  Y.hasAnimatedSinceResize &&
                    ((Y.hasAnimatedSinceResize = !1), this.nodes.forEach(tY));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || o) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let o =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        t5,
                      {
                        onLayoutAnimationStart: n,
                        onLayoutAnimationComplete: l,
                      } = r.getProps(),
                      h = !this.targetLayout || !tV(this.targetLayout, s),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (h || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, a.rU)(o, 'layout'),
                        onPlay: n,
                        onComplete: l,
                      };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || tY(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
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
              (0, a.WG)(this.updateProjection);
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
              this.nodes && this.nodes.forEach(tJ),
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
                  let s = (0, tr.P)(i);
                  if (window.MotionHasOptimisedAnimation(s, 'transform')) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      'transform',
                      a.Gt,
                      !(t || i)
                    );
                  }
                  let { parent: o } = e;
                  o && !o.hasCheckedOptimisedAppear && t(o);
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
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, '')
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners('willUpdate');
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(tQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(tq),
              (this.isUpdating = !1),
              this.nodes.forEach(tX),
              this.nodes.forEach(t_),
              this.nodes.forEach(tG),
              this.clearAllSnapshots();
            let t = a.kB.now();
            (a.uv.delta = (0, L.q)(0, 1e3 / 60, t - a.uv.timestamp)),
              (a.uv.timestamp = t),
              (a.uv.isProcessing = !0),
              a.PP.update.process(a.uv),
              a.PP.preRender.process(a.uv),
              a.PP.render.process(a.uv),
              (a.uv.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), a.k2.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(tH), this.sharedNodes.forEach(t0);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              a.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            a.Gt.postRender(() => {
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
                m(this.snapshot.measuredBox.x) ||
                m(this.snapshot.measuredBox.y) ||
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
              (this.layoutCorrected = (0, P.ge)()),
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
              let e = s(this.instance);
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
            if (!o) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !tj(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, '') : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || (0, tB.HD)(this.latestValues) || r) &&
              (o(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              t7((e = s).x),
              t7(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return (0, P.ge)();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(t8)
              )
            ) {
              let { scroll: t } = this.root;
              t && ((0, tT.Ql)(i.x, t.offset.x), (0, tT.Ql)(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = (0, P.ge)();
            if (
              (tx(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e],
                { scroll: o, options: r } = s;
              s !== this.root &&
                o &&
                r.layoutScroll &&
                (o.wasRoot && tx(i, t),
                (0, tT.Ql)(i.x, o.offset.x),
                (0, tT.Ql)(i.y, o.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = (0, P.ge)();
            tx(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, tT.Ww)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, tB.HD)(s.latestValues) && (0, tT.Ww)(i, s.latestValues);
            }
            return (
              (0, tB.HD)(this.latestValues) && (0, tT.Ww)(i, this.latestValues),
              i
            );
          }
          removeTransform(t) {
            let e = (0, P.ge)();
            tx(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !(0, tB.HD)(i.latestValues)) continue;
              (0, tB.vk)(i.latestValues) && i.updateSnapshot();
              let s = (0, P.ge)();
              tx(s, i.measurePageBox()),
                tS(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return (0, tB.HD)(this.latestValues) && tS(e, this.latestValues), e;
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
              this.relativeParent.resolvedRelativeTargetAt !== a.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, o;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let n = !!this.resumingFrom || this !== r;
            if (
              !(
                t ||
                (n && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: l, layoutId: h } = this.options;
            if (this.layout && (l || h)) {
              if (
                ((this.resolvedRelativeTargetAt = a.uv.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, P.ge)()),
                    (this.relativeTargetOrigin = (0, P.ge)()),
                    x(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    tx(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, P.ge)()),
                    (this.targetWithTransforms = (0, P.ge)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (o = this.relativeParent.target),
                      g(i.x, s.x, o.x),
                      g(i.y, s.y, o.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox
                            ))
                          : tx(this.target, this.layout.layoutBox),
                        (0, tT.o4)(this.target, this.targetDelta))
                      : tx(this.target, this.layout.layoutBox),
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
                      (this.relativeTarget = (0, P.ge)()),
                      (this.relativeTargetOrigin = (0, P.ge)()),
                      x(this.relativeTargetOrigin, this.target, t.target),
                      tx(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                a.Qu.value && tM.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, tB.vk)(this.parent.latestValues) ||
              (0, tB.vF)(this.parent.latestValues)
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
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === a.uv.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: o, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || r))
            )
              return;
            tx(this.layoutCorrected, this.layout.layoutBox);
            let n = this.treeScale.x,
              l = this.treeScale.y;
            (0, tT.OU)(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = (0, P.ge)()));
            let { target: h } = e;
            if (!h) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (tP(this.prevProjectionDelta.x, this.projectionDelta.x),
                tP(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              v(
                this.projectionDelta,
                this.layoutCorrected,
                h,
                this.latestValues
              ),
              (this.treeScale.x === n &&
                this.treeScale.y === l &&
                tC(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                tC(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', h)),
              a.Qu.value && tM.calculatedProjections++;
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
            (this.prevProjectionDelta = (0, P.xU)()),
              (this.projectionDelta = (0, P.xU)()),
              (this.projectionDeltaWithTransform = (0, P.xU)());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              o = s ? s.latestValues : {},
              r = { ...this.latestValues },
              n = (0, P.xU)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, P.ge)(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              c = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(t3)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (t1(n.x, t.x, s),
                  t1(n.y, t.y, s),
                  this.setTargetDelta(n),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, d, m, f, v, g;
                  if (
                    (x(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (m = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (v = a),
                    (g = s),
                    t2(m.x, f.x, v.x, g),
                    t2(m.y, f.y, v.y, g),
                    i &&
                      ((h = this.relativeTarget),
                      (d = i),
                      tA(h.x, d.x) && tA(h.y, d.y)))
                  )
                    this.isProjectionDirty = !1;
                  i || (i = (0, P.ge)()), tx(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, o, r) {
                    o
                      ? ((t.opacity = (0, p.k)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tf(s)
                        )),
                        (t.opacityExit = (0, p.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          tv(s)
                        )))
                      : r &&
                        (t.opacity = (0, p.k)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let o = 0; o < tc; o++) {
                      let r = `border${tu[o]}Radius`,
                        n = tm(e, r),
                        a = tm(i, r);
                      (void 0 !== n || void 0 !== a) &&
                        (n || (n = 0),
                        a || (a = 0),
                        0 === n || 0 === a || tp(n) === tp(a)
                          ? ((t[r] = Math.max((0, p.k)(td(n), td(a), s), 0)),
                            (E.KN.test(a) || E.KN.test(n)) && (t[r] += '%'))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, p.k)(e.rotate || 0, i.rotate || 0, s));
                  })(r, o, this.latestValues, s, c, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
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
                ((0, a.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = a.Gt.update(() => {
                (Y.hasAnimatedSinceResize = !0),
                  a.qU.layout++,
                  (this.currentAnimation = (function (t, e, i) {
                    let s = (0, to.S)(0) ? 0 : (0, a.OQ)(t);
                    return s.start((0, l.f)('', s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      a.qU.layout--;
                    },
                    onComplete: () => {
                      a.qU.layout--,
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
                layout: s,
                latestValues: o,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                t4(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || (0, P.ge)();
                let e = m(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = m(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              tx(e, i),
                (0, tT.Ww)(e, o),
                v(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  o
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new tL()),
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
            let s = this.getStack();
            s && s.promote(this, i),
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
            let s = {};
            i.z && tI('z', t, s, this.animationValues);
            for (let e = 0; e < tU.length; e++)
              tI(`rotate${tU[e]}`, t, s, this.animationValues),
                tI(`skew${tU[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return tF;
            let s = { visibility: '' },
              o = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ''),
                (s.pointerEvents =
                  (0, tl.u)(null == t ? void 0 : t.pointerEvents) || ''),
                (s.transform = o ? o(this.latestValues, '') : 'none'),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    (0, tl.u)(null == t ? void 0 : t.pointerEvents) || '')),
                this.hasProjected &&
                  !(0, tB.HD)(this.latestValues) &&
                  ((e.transform = o ? o({}, '') : 'none'),
                  (this.hasProjected = !1)),
                e
              );
            }
            let n = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = (function (t, e, i) {
                let s = '',
                  o = t.x.translate / e.x,
                  r = t.y.translate / e.y,
                  n = (null == i ? void 0 : i.z) || 0;
                if (
                  ((o || r || n) &&
                    (s = `translate3d(${o}px, ${r}px, ${n}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: o,
                    rotateY: r,
                    skewX: n,
                    skewY: a,
                  } = i;
                  t && (s = `perspective(${t}px) ${s}`),
                    e && (s += `rotate(${e}deg) `),
                    o && (s += `rotateX(${o}deg) `),
                    r && (s += `rotateY(${r}deg) `),
                    n && (s += `skewX(${n}deg) `),
                    a && (s += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                  s || 'none'
                );
              })(this.projectionDeltaWithTransform, this.treeScale, n)),
              o && (s.transform = o(n, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = n.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : n.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ''
                    : void 0 !== n.opacityExit
                      ? n.opacityExit
                      : 0),
            tt.H)) {
              if (void 0 === n[t]) continue;
              let { correct: e, applyTo: i, isCSSVariable: o } = tt.H[t],
                a = 'none' === s.transform ? n[t] : e(n[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = a;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (s[t] = a);
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? (0, tl.u)(null == t ? void 0 : t.pointerEvents) || ''
                    : 'none'),
              s
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
              this.root.nodes.forEach(tQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function t_(t) {
        t.updateLayout();
      }
      function tG(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: o } = t.options,
            r = i.source !== t.layout.source;
          'size' === o
            ? T((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  o = m(s);
                (s.min = e[t].min), (s.max = s.min + o);
              })
            : t4(o, i.layoutBox, e) &&
              T((s) => {
                let o = r ? i.measuredBox[s] : i.layoutBox[s],
                  n = m(e[s]);
                (o.max = o.min + n),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + n));
              });
          let n = (0, P.xU)();
          v(n, e, i.layoutBox);
          let a = (0, P.xU)();
          r
            ? v(a, t.applyTransform(s, !0), i.measuredBox)
            : v(a, e, i.layoutBox);
          let l = !tj(n),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: o, layout: r } = s;
              if (o && r) {
                let n = (0, P.ge)();
                x(n, i.layoutBox, o.layoutBox);
                let a = (0, P.ge)();
                x(a, e, r.layoutBox),
                  tV(n, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = n),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners('didUpdate', {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: n,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function t$(t) {
        a.Qu.value && tM.nodes++,
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
      function tz(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function tH(t) {
        t.clearSnapshot();
      }
      function tQ(t) {
        t.clearMeasurements();
      }
      function tq(t) {
        t.isLayoutDirty = !1;
      }
      function tX(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify('BeforeLayoutMeasure'),
          t.resetTransform();
      }
      function tY(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function tK(t) {
        t.resolveTargetDelta();
      }
      function tZ(t) {
        t.calcProjection();
      }
      function tJ(t) {
        t.resetSkewAndRotation();
      }
      function t0(t) {
        t.removeLeadSnapshot();
      }
      function t1(t, e, i) {
        (t.translate = (0, p.k)(e.translate, 0, i)),
          (t.scale = (0, p.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function t2(t, e, i, s) {
        (t.min = (0, p.k)(e.min, i.min, s)),
          (t.max = (0, p.k)(e.max, i.max, s));
      }
      function t3(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let t5 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        t9 = (t) =>
          'undefined' != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        t6 = t9('applewebkit/') && !t9('chrome/') ? Math.round : n.lQ;
      function t7(t) {
        (t.min = t6(t.min)), (t.max = t6(t.max));
      }
      function t4(t, e, i) {
        return (
          'position' === t ||
          ('preserve-aspect' === t && !(0.2 >= Math.abs(tO(e) - tO(i))))
        );
      }
      function t8(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let et = tW({
          attachResizeListener: (t, e) => (0, h.k)(t, 'resize', e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ee = { current: void 0 },
        ei = tW({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ee.current) {
              let t = new et({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ee.current = t);
            }
            return ee.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: (t) =>
            'fixed' === window.getComputedStyle(t).position,
        });
      var es = i(5646),
        eo = i(1212),
        er = i(1710);
      let en = (0, eo.C)(
          {
            ...o.W,
            ...es.n,
            pan: { Feature: $ },
            drag: { Feature: _, ProjectionNode: ei, MeasureLayout: ti },
            layout: { ProjectionNode: ei, MeasureLayout: ti },
          },
          er.J
        ),
        ea = (0, s.I)(en);
    },
    7917: () => {},
    8637: (t, e, i) => {
      t.exports = i(9399)();
    },
    9300: (t, e) => {
      var i;
      !(function () {
        'use strict';
        var s = {}.hasOwnProperty;
        function o() {
          for (var t = '', e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            i &&
              (t = r(
                t,
                (function (t) {
                  if ('string' == typeof t || 'number' == typeof t) return t;
                  if ('object' != typeof t) return '';
                  if (Array.isArray(t)) return o.apply(null, t);
                  if (
                    t.toString !== Object.prototype.toString &&
                    !t.toString.toString().includes('[native code]')
                  )
                    return t.toString();
                  var e = '';
                  for (var i in t) s.call(t, i) && t[i] && (e = r(e, i));
                  return e;
                })(i)
              ));
          }
          return t;
        }
        function r(t, e) {
          return e ? (t ? t + ' ' + e : t + e) : t;
        }
        t.exports
          ? ((o.default = o), (t.exports = o))
          : void 0 !==
              (i = function () {
                return o;
              }.apply(e, [])) && (t.exports = i);
      })();
    },
    9399: (t, e, i) => {
      'use strict';
      var s = i(2948);
      function o() {}
      function r() {}
      (r.resetWarningCache = o),
        (t.exports = function () {
          function t(t, e, i, o, r, n) {
            if (n !== s) {
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
            checkPropTypes: r,
            resetWarningCache: o,
          };
          return (i.PropTypes = i), i;
        });
    },
  },
]);
