'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [943],
  {
    567: (t, e, i) => {
      i.d(e, { V: () => r });
      let r = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    1070: (t, e, i) => {
      i.d(e, { $: () => r });
      let r = new Set([
        'width',
        'height',
        'top',
        'left',
        'right',
        'bottom',
        ...i(7387).U,
      ]);
    },
    1109: (t, e, i) => {
      i.d(e, { k: () => r });
      let r = (t, e, i) => t + (e - t) * i;
    },
    1442: (t, e, i) => {
      i.d(e, { k: () => r });
      function r(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
    },
    1586: (t, e, i) => {
      i.d(e, { F: () => s, e: () => n });
      var r = i(2128);
      function n(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let s = (t) => (e) => (0, r.Mc)(e) && t(e, n(e));
    },
    1710: (t, e, i) => {
      i.d(e, { J: () => H });
      var r = i(2115),
        n = i(3757),
        s = i(4570),
        a = i(2128),
        o = i(4331),
        l = i(6642),
        u = i(1786),
        h = i(3870),
        d = i(6440),
        p = i(8972);
      let c = { current: null },
        m = { current: !1 };
      var f = i(3013),
        v = i(9780),
        y = i(2897),
        g = i(9067),
        b = i(1987);
      let S = [...g.T, y.y, f.f],
        w = (t) => S.find((0, b.w)(t));
      var V = i(7387);
      let x = new WeakMap();
      var M = i(9253),
        T = i(8203),
        A = i(2735);
      let P = [
        'AnimationStart',
        'AnimationComplete',
        'Update',
        'BeforeLayoutMeasure',
        'LayoutMeasure',
        'LayoutAnimationStart',
        'LayoutAnimationComplete',
      ];
      class k {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: o,
          },
          l = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = T.h),
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
              let t = a.kB.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                a.Gt.render(this.render, !1, !0));
            });
          let { latestValues: u, renderState: h, onUpdate: d } = o;
          (this.onUpdate = d),
            (this.latestValues = u),
            (this.baseTarget = { ...u }),
            (this.initialValues = e.initial ? { ...u } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = l),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = (0, M.e)(e)),
            (this.isVariantNode = (0, M.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: p, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== u[t] && (0, s.S)(e) && e.set(u[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            x.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            m.current ||
              (function () {
                if (((m.current = !0), p.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia('(prefers-reduced-motion)'),
                      e = () => (c.current = t.matches);
                    t.addListener(e), e();
                  } else c.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || c.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, a.WG)(this.notifyUpdate),
          (0, a.WG)(this.render),
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
          let r = V.f.has(t);
          r && this.onBindTransform && this.onBindTransform();
          let n = e.on('change', (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && a.Gt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on('renderRequest', this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
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
          for (t in l.B) {
            let e = l.B[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
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
            : (0, u.ge)();
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
          for (let e = 0; e < P.length; e++) {
            let i = P[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t['on' + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                o = i[r];
              if ((0, s.S)(n)) t.addValue(r, n);
              else if ((0, s.S)(o)) t.addValue(r, (0, a.OQ)(n, { owner: t }));
              else if (o !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, a.OQ)(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
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
              ((i = (0, a.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ('string' == typeof r && ((0, h.i)(r) || (0, d.$)(r))
                ? (r = parseFloat(r))
                : !w(r) && f.f.test(e) && (r = (0, v.J)(t, e)),
              this.setBaseTarget(t, (0, s.S)(r) ? r.get() : r)),
            (0, s.S)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ('string' == typeof r || 'object' == typeof r) {
            let n = (0, A.a)(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, s.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new o.vY()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var C = i(3796);
      class F extends k {
        constructor() {
          super(...arguments), (this.KeyframeResolver = C.K);
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
          (0, s.S)(t) &&
            (this.childSubscription = t.on('change', (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var D = i(3676),
        I = i(6169),
        B = i(4576),
        E = i(600),
        O = i(8609);
      class R extends F {
        constructor() {
          super(...arguments),
            (this.type = 'html'),
            (this.renderInstance = E.e);
        }
        readValueFromInstance(t, e) {
          if (V.f.has(e)) return (0, B.I)(t, e);
          {
            let i = window.getComputedStyle(t),
              r = ((0, D.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return 'string' == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, n.m)(t, e);
        }
        build(t, e, i) {
          (0, I.O)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, O.x)(t, e, i);
        }
      }
      var $ = i(8450),
        K = i(2217),
        N = i(7914),
        q = i(6381),
        X = i(3095),
        U = i(621),
        G = i(3869),
        j = i(4527);
      class W extends F {
        constructor() {
          super(...arguments),
            (this.type = 'svg'),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = u.ge),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                (0, U.H)(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (V.f.has(e)) {
            let t = (0, K.D)(e);
            return (t && t.default) || 0;
          }
          return (e = q.e.has(e) ? e : (0, $.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, j.x)(t, e, i);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            a.Gt.postRender(this.updateDimensions);
        }
        build(t, e, i) {
          (0, N.B)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          (0, G.d)(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = (0, X.n)(t.tagName)), super.mount(t);
        }
      }
      var Y = i(175);
      let H = (t, e) =>
        (0, Y.Q)(t)
          ? new W(e)
          : new R(e, { allowProjection: t !== r.Fragment });
    },
    1786: (t, e, i) => {
      i.d(e, { ge: () => a, xU: () => n });
      let r = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n = () => ({ x: r(), y: r() }),
        s = () => ({ min: 0, max: 0 }),
        a = () => ({ x: s(), y: s() });
    },
    1987: (t, e, i) => {
      i.d(e, { w: () => r });
      let r = (t) => (e) => e.test(t);
    },
    2083: (t, e, i) => {
      i.d(e, { V: () => o });
      var r = i(3082),
        n = i(5471),
        s = i(2282),
        a = i(7219);
      let o = {
        test: (0, a.$)('hsl', 'hue'),
        parse: (0, a.q)('hue', 'saturation', 'lightness'),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: a = 1 }) =>
          'hsla(' +
          Math.round(t) +
          ', ' +
          n.KN.transform((0, s.a)(e)) +
          ', ' +
          n.KN.transform((0, s.a)(i)) +
          ', ' +
          (0, s.a)(r.X4.transform(a)) +
          ')',
      };
    },
    2217: (t, e, i) => {
      i.d(e, { D: () => a });
      var r = i(2897),
        n = i(3492);
      let s = {
          ...i(802).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: n.p,
          WebkitFilter: n.p,
        },
        a = (t) => s[t];
    },
    2282: (t, e, i) => {
      i.d(e, { a: () => r });
      let r = (t) => Math.round(1e5 * t) / 1e5;
    },
    2290: (t, e, i) => {
      i.d(e, { X: () => r });
      class r {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    2662: (t, e, i) => {
      function r(t) {
        return void 0 === t || 1 === t;
      }
      function n({ scale: t, scaleX: e, scaleY: i }) {
        return !r(t) || !r(e) || !r(i);
      }
      function s(t) {
        return (
          n(t) ||
          a(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function a(t) {
        var e, i;
        return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
      }
      i.d(e, { HD: () => s, vF: () => a, vk: () => n });
    },
    2897: (t, e, i) => {
      i.d(e, { y: () => a });
      var r = i(7730),
        n = i(2083),
        s = i(4935);
      let a = {
        test: (t) => s.B.test(t) || r.u.test(t) || n.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : n.V.test(t)
              ? n.V.parse(t)
              : r.u.parse(t),
        transform: (t) =>
          'string' == typeof t
            ? t
            : t.hasOwnProperty('red')
              ? s.B.transform(t)
              : n.V.transform(t),
      };
    },
    3013: (t, e, i) => {
      i.d(e, { V: () => h, f: () => m });
      var r = i(2897);
      let n =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(6479),
        a = i(2282);
      let o = 'number',
        l = 'color',
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                r.y.test(t)
                  ? (n.color.push(a), s.push(l), i.push(r.y.parse(t)))
                  : t.startsWith('var(')
                    ? (n.var.push(a), s.push('var'), i.push(t))
                    : (n.number.push(a), s.push(o), i.push(parseFloat(t))),
                ++a,
                '${}'
              )
            )
            .split('${}');
        return { values: i, split: h, indexes: n, types: s };
      }
      function d(t) {
        return h(t).values;
      }
      function p(t) {
        let { split: e, types: i } = h(t),
          n = e.length;
        return (t) => {
          let s = '';
          for (let u = 0; u < n; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === o
                ? (s += (0, a.a)(t[u]))
                : e === l
                  ? (s += r.y.transform(t[u]))
                  : (s += t[u]);
            }
          return s;
        };
      }
      let c = (t) => ('number' == typeof t ? 0 : t),
        m = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              'string' == typeof t &&
              ((null === (e = t.match(s.S)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(n)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = d(t);
            return p(t)(e.map(c));
          },
        };
    },
    3492: (t, e, i) => {
      i.d(e, { p: () => l });
      var r = i(3013),
        n = i(6479);
      let s = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function a(t) {
        let [e, i] = t.slice(0, -1).split('(');
        if ('drop-shadow' === e) return t;
        let [r] = i.match(n.S) || [];
        if (!r) return t;
        let a = i.replace(r, ''),
          o = +!!s.has(e);
        return r !== i && (o *= 100), e + '(' + o + a + ')';
      }
      let o = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.f,
          getAnimatableNone: (t) => {
            let e = t.match(o);
            return e ? e.map(a).join(' ') : t;
          },
        };
    },
    3757: (t, e, i) => {
      i.d(e, { L: () => a, m: () => s });
      var r = i(8588),
        n = i(6147);
      function s(t, e) {
        return (0, r.FY)((0, r.bS)(t.getBoundingClientRect(), e));
      }
      function a(t, e, i) {
        let r = s(t, i),
          { scroll: a } = e;
        return a && ((0, n.Ql)(r.x, a.offset.x), (0, n.Ql)(r.y, a.offset.y)), r;
      }
    },
    3796: (t, e, i) => {
      i.d(e, { K: () => f });
      var r = i(6440),
        n = i(1070),
        s = i(3013),
        a = i(9780);
      let o = new Set(['auto', 'none', '0']);
      var l = i(8203),
        u = i(4331),
        h = i(3870),
        d = i(3676);
      let p = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var c = i(9280),
        m = i(9067);
      class f extends l.h {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ('string' == typeof r && ((r = r.trim()), (0, d.p)(r))) {
              let n = (function t(e, i, r = 1) {
                (0, u.V1)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, s] = (function (t) {
                  let e = p.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!n) return;
                let a = window.getComputedStyle(i).getPropertyValue(n);
                if (a) {
                  let t = a.trim();
                  return (0, h.i)(t) ? parseFloat(t) : t;
                }
                return (0, d.p)(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !n.$.has(i) || 2 !== t.length))
            return;
          let [r, s] = t,
            a = (0, m.n)(r),
            o = (0, m.n)(s);
          if (a !== o) {
            if ((0, c.E4)(a) && (0, c.E4)(o))
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
              : null === n || 'none' === n || '0' === n || (0, r.$)(n)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                'string' == typeof e &&
                  !o.has(e) &&
                  (0, s.V)(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = (0, a.J)(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          'height' === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = c.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            a = r[s];
          (r[s] = c.Hr[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    3870: (t, e, i) => {
      i.d(e, { i: () => r });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    4228: (t, e, i) => {
      i.d(e, { f: () => tb });
      var r = i(2128),
        n = i(4331);
      let s = { current: !1 },
        a = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function o(t, e, i, r) {
        if (t === e && i === r) return n.lQ;
        let s = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let l = 0;
            do (s = a((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++l < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : a(s(t), e, r));
      }
      var l = i(567),
        u = i(6498);
      let h = o(0.33, 1.53, 0.69, 0.99),
        d = (0, u.G)(h),
        p = (0, l.V)(d),
        c = (t) =>
          (t *= 2) < 1 ? 0.5 * d(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var m = i(9282),
        f = i(3796),
        v = i(8203),
        y = i(3013);
      let g = (t, e) =>
          'zIndex' !== e &&
          !!(
            'number' == typeof t ||
            Array.isArray(t) ||
            ('string' == typeof t &&
              (y.f.test(t) || '0' === t) &&
              !t.startsWith('url('))
          ),
        b = (t) => null !== t;
      function S(t, { repeat: e, repeatType: i = 'loop' }, r) {
        let n = t.filter(b),
          s = e && 'loop' !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      class w {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = 'keyframes',
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: a = 'loop',
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = r.kB.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: a,
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
            this._resolved || this.hasAttemptedResolve || (0, v.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = r.kB.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: a,
            velocity: o,
            delay: l,
            onComplete: u,
            onUpdate: h,
            isGenerator: d,
          } = this.options;
          if (
            !d &&
            !(function (t, e, i, s) {
              let a = t[0];
              if (null === a) return !1;
              if ('display' === e || 'visibility' === e) return !0;
              let o = t[t.length - 1],
                l = g(a, e),
                u = g(o, e);
              return (
                (0, n.$e)(
                  l === u,
                  `You are trying to animate ${e} from "${a}" to "${o}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (('spring' === i || (0, r.WH)(i)) && s))
              );
            })(t, i, a, o)
          ) {
            if (s.current || !l) {
              h && h(S(t, this.options, e)),
                u && u(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(t, e);
          !1 !== p &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...p }),
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
      var V = i(7782),
        x = i(1109);
      function M(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var T = i(7730),
        A = i(4935),
        P = i(2083);
      function k(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let C = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        F = [T.u, A.B, P.V],
        D = (t) => F.find((e) => e.test(t));
      function I(t) {
        let e = D(t);
        if (
          ((0, n.$e)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === P.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                a = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - r;
                (n = M(o, r, t + 1 / 3)),
                  (s = M(o, r, t)),
                  (a = M(o, r, t - 1 / 3));
              } else n = s = a = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let B = (t, e) => {
        let i = I(t),
          r = I(e);
        if (!i || !r) return k(t, e);
        let n = { ...i };
        return (t) => (
          (n.red = C(i.red, r.red, t)),
          (n.green = C(i.green, r.green, t)),
          (n.blue = C(i.blue, r.blue, t)),
          (n.alpha = (0, x.k)(i.alpha, r.alpha, t)),
          A.B.transform(n)
        );
      };
      var E = i(7007),
        O = i(2897),
        R = i(3676);
      let $ = new Set(['none', 'hidden']);
      function K(t, e) {
        return (i) => (0, x.k)(t, e, i);
      }
      function N(t) {
        return 'number' == typeof t
          ? K
          : 'string' == typeof t
            ? (0, R.p)(t)
              ? k
              : O.y.test(t)
                ? B
                : U
            : Array.isArray(t)
              ? q
              : 'object' == typeof t
                ? O.y.test(t)
                  ? B
                  : X
                : k;
      }
      function q(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => N(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function X(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = N(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let U = (t, e) => {
        let i = y.f.createTransformer(e),
          r = (0, y.V)(t),
          s = (0, y.V)(e);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? ($.has(t) && !s.values.length) || ($.has(e) && !r.values.length)
            ? (function (t, e) {
                return $.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, E.F)(
                q(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let a = e.types[s],
                        o = t.indexes[a][n[a]],
                        l = null !== (i = t.values[o]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[a]++;
                    }
                    return r;
                  })(r, s),
                  s.values
                ),
                i
              )
          : ((0, n.$e)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            k(t, e));
      };
      function G(t, e, i) {
        return 'number' == typeof t &&
          'number' == typeof e &&
          'number' == typeof i
          ? (0, x.k)(t, e, i)
          : N(t)(t, e);
      }
      function j(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.fj)(i - t(r), e - r);
      }
      let W = {
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
      function Y(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let H = ['duration', 'bounce'],
        Q = ['stiffness', 'damping', 'mass'];
      function _(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function L(t = W.visualDuration, e = W.bounce) {
        let i;
        let s =
            'object' != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: a, restDelta: o } = s,
          l = s.keyframes[0],
          u = s.keyframes[s.keyframes.length - 1],
          h = { done: !1, value: l },
          {
            stiffness: d,
            damping: p,
            mass: c,
            duration: m,
            velocity: f,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: W.velocity,
              stiffness: W.stiffness,
              damping: W.damping,
              mass: W.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!_(t, Q) && _(t, H)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  n = 2 * (0, V.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: W.mass, stiffness: r, damping: n };
              } else {
                let i = (function ({
                  duration: t = W.duration,
                  bounce: e = W.bounce,
                  velocity: i = W.velocity,
                  mass: r = W.mass,
                }) {
                  let s, a;
                  (0, n.$e)(
                    t <= (0, n.fD)(W.maxDuration),
                    'Spring duration must be 10 seconds or less'
                  );
                  let o = 1 - e;
                  (o = (0, V.q)(W.minDamping, W.maxDamping, o)),
                    (t = (0, V.q)(W.minDuration, W.maxDuration, (0, n.Xu)(t))),
                    o < 1
                      ? ((s = (e) => {
                          let r = e * o,
                            n = r * t;
                          return 0.001 - ((r - i) / Y(e, o)) * Math.exp(-n);
                        }),
                        (a = (e) => {
                          let r = e * o * t,
                            n = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-r),
                            l = Y(Math.pow(e, 2), o);
                          return (
                            ((r * i + i - n) *
                              a *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (a = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let l = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(s, a, 5 / t);
                  if (((t = (0, n.fD)(t)), isNaN(l)))
                    return {
                      stiffness: W.stiffness,
                      damping: W.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: W.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...s, velocity: -(0, n.Xu)(s.velocity || 0) }),
          y = f || 0,
          g = p / (2 * Math.sqrt(d * c)),
          b = u - l,
          S = (0, n.Xu)(Math.sqrt(d / c)),
          w = 5 > Math.abs(b);
        if (
          (a || (a = w ? W.restSpeed.granular : W.restSpeed.default),
          o || (o = w ? W.restDelta.granular : W.restDelta.default),
          g < 1)
        ) {
          let t = Y(S, g);
          i = (e) =>
            u -
            Math.exp(-g * S * e) *
              (((y + g * S * b) / t) * Math.sin(t * e) + b * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => u - Math.exp(-S * t) * (b + (y + S * b) * t);
        else {
          let t = S * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * S * e),
              r = Math.min(t * e, 300);
            return (
              u -
              (i * ((y + g * S * b) * Math.sinh(r) + t * b * Math.cosh(r))) / t
            );
          };
        }
        let x = {
          calculatedDuration: (v && m) || null,
          next: (t) => {
            let e = i(t);
            if (v) h.done = t >= m;
            else {
              let r = 0;
              g < 1 && (r = 0 === t ? (0, n.fD)(y) : j(i, t, e));
              let s = Math.abs(u - e) <= o;
              h.done = Math.abs(r) <= a && s;
            }
            return (h.value = h.done ? u : e), h;
          },
          toString: () => {
            let t = Math.min((0, r.tu)(x), r.YE),
              e = (0, r.KZ)((e) => x.next(t * e).value, t, 30);
            return t + 'ms ' + e;
          },
        };
        return x;
      }
      function z({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, p;
        let c = t[0],
          m = { done: !1, value: c },
          f = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === o
              ? l
              : void 0 === l
                ? o
                : Math.abs(o - t) < Math.abs(l - t)
                  ? o
                  : l,
          y = i * e,
          g = c + y,
          b = void 0 === a ? g : a(g);
        b !== g && (y = b - c);
        let S = (t) => -y * Math.exp(-t / r),
          w = (t) => b + S(t),
          V = (t) => {
            let e = S(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : i);
          },
          x = (t) => {
            f(m.value) &&
              ((d = t),
              (p = L({
                keyframes: [m.value, v(m.value)],
                velocity: j(w, t, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          x(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== d || ((e = !0), V(t), x(t)),
              void 0 !== d && t >= d)
                ? p.next(t - d)
                : (e || V(t), m);
            },
          }
        );
      }
      let J = o(0.42, 0, 1, 1),
        Z = o(0, 0, 0.58, 1),
        tt = o(0.42, 0, 0.58, 1),
        te = (t) => Array.isArray(t) && 'number' != typeof t[0],
        ti = {
          linear: n.lQ,
          easeIn: J,
          easeInOut: tt,
          easeOut: Z,
          circIn: m.po,
          circInOut: m.tn,
          circOut: m.yT,
          backIn: d,
          backInOut: p,
          backOut: h,
          anticipate: c,
        },
        tr = (t) => {
          if ((0, r.DW)(t)) {
            (0, n.V1)(
              4 === t.length,
              'Cubic bezier arrays must contain four numerical values.'
            );
            let [e, i, r, s] = t;
            return o(e, i, r, s);
          }
          return 'string' == typeof t
            ? ((0, n.V1)(void 0 !== ti[t], `Invalid easing type '${t}'`), ti[t])
            : t;
        };
      function tn({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = 'easeInOut',
      }) {
        let s = te(r) ? r.map(tr) : tr(r),
          a = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: r, mixer: s } = {}) {
            let a = t.length;
            if (
              ((0, n.V1)(
                a === e.length,
                'Both input and output ranges must be the same length'
              ),
              1 === a)
            )
              return () => e[0];
            if (2 === a && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[a - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let l = (function (t, e, i) {
                let r = [],
                  s = i || G,
                  a = t.length - 1;
                for (let i = 0; i < a; i++) {
                  let a = s(t[i], t[i + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[i] || n.lQ : e;
                    a = (0, E.F)(t, a);
                  }
                  r.push(a);
                }
                return r;
              })(e, r, s),
              u = l.length,
              h = (i) => {
                if (o && i < t[0]) return e[0];
                let r = 0;
                if (u > 1) for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                let s = (0, n.qB)(t[r], t[r + 1], i);
                return l[r](s);
              };
            return i ? (e) => h((0, V.q)(t[0], t[a - 1], e)) : h;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let s = (0, n.qB)(0, e, r);
                        t.push((0, x.k)(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || tt).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((a.value = o(e)), (a.done = e >= t), a),
        };
      }
      let ts = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => r.Gt.update(e, !0),
            stop: () => (0, r.WG)(e),
            now: () => (r.uv.isProcessing ? r.uv.timestamp : r.kB.now()),
          };
        },
        ta = { decay: z, inertia: z, tween: tn, keyframes: tn, spring: L },
        to = (t) => t / 100;
      class tl extends w {
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
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || v.h;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
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
              repeat: s = 0,
              repeatDelay: a = 0,
              repeatType: o,
              velocity: l = 0,
            } = this.options,
            u = (0, r.WH)(n) ? n : ta[n] || tn;
          u !== tn &&
            'number' != typeof t[0] &&
            ((e = (0, E.F)(to, G(t[0], t[1]))), (t = [0, 100]));
          let h = u({ ...this.options, keyframes: t });
          'mirror' === o &&
            (i = u({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -l,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, r.tu)(h));
          let { calculatedDuration: d } = h,
            p = d + a;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: d,
            resolvedDuration: p,
            totalDuration: p * (s + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          r.qU.mainThread++,
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
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: o,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: c,
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
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            'finished' === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let g = this.currentTime,
            b = n;
          if (p) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ('reverse' === c
                  ? ((i = 1 - i), m && (i -= m / h))
                  : 'mirror' === c && (b = s)),
              (g = (0, V.q)(0, 1, i) * h);
          }
          let w = y ? { done: !1, value: o[0] } : b.next(g);
          a && (w.value = a(w.value));
          let { done: x } = w;
          y ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let M =
            null === this.holdTime &&
            ('finished' === this.state || ('running' === this.state && x));
          return (
            M && void 0 !== r && (w.value = S(o, this.options, r)),
            f && f(w.value),
            M && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, n.Xu)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, n.Xu)(this.currentTime);
        }
        set time(t) {
          (t = (0, n.fD)(t)),
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
          (this.playbackSpeed = t),
            e && (this.time = (0, n.Xu)(this.currentTime));
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
          let { driver: t = ts, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
              ? 'finished' === this.state && (this.startTime = r)
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
            r.qU.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let tu = new Set(['opacity', 'clipPath', 'filter', 'transform']),
        th = (0, n.ph)(() =>
          Object.hasOwnProperty.call(Element.prototype, 'animate')
        ),
        td = { anticipate: c, backInOut: p, circInOut: m.tn };
      class tp extends w {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new f.K(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: n = 300,
            times: s,
            ease: a,
            type: o,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ('string' == typeof a && (0, r.nL)() && a in td && (a = td[a]),
            (i = this.options),
            (0, r.WH)(i.type) || 'spring' === i.type || !(0, r.yL)(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tl({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: 'linear',
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (s = h.times),
              (a = h.ease),
              (o = 'keyframes');
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: a = 0,
              repeatType: o = 'loop',
              ease: l = 'easeInOut',
              times: u,
            } = {}
          ) {
            let h = { [e]: i };
            u && (h.offset = u);
            let d = (0, r.TU)(l, s);
            Array.isArray(d) && (h.easing = d), r.Qu.value && r.qU.waapi++;
            let p = t.animate(h, {
              delay: n,
              duration: s,
              easing: Array.isArray(d) ? 'linear' : d,
              fill: 'both',
              iterations: a + 1,
              direction: 'reverse' === o ? 'alternate' : 'normal',
            });
            return (
              r.Qu.value &&
                p.finished.finally(() => {
                  r.qU.waapi--;
                }),
              p
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: a,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, r.vG)(d, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(S(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: n,
              times: s,
              type: o,
              ease: a,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, n.Xu)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, n.Xu)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, n.fD)(t);
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
            if (!e) return n.lQ;
            let { animation: i } = e;
            (0, r.vG)(i, t);
          } else this.pendingTimeline = t;
          return n.lQ;
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
            duration: r,
            type: s,
            ease: a,
            times: o,
          } = t;
          if ('idle' === e.playState || 'finished' === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              d = new tl({
                ...h,
                keyframes: i,
                duration: r,
                type: s,
                ease: a,
                times: o,
                isGenerator: !0,
              }),
              p = (0, n.fD)(this.time);
            t.setWithVelocity(d.sample(p - 10).value, d.sample(p).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
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
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: a,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
          return (
            th() &&
            i &&
            tu.has(i) &&
            ('transform' !== i || !l) &&
            !o &&
            !r &&
            'mirror' !== n &&
            0 !== s &&
            'inertia' !== a
          );
        }
      }
      var tc = i(7387);
      let tm = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
        tf = (t) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tv = { type: 'keyframes', duration: 0.8 },
        ty = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tg = (t, { keyframes: e }) =>
          e.length > 2
            ? tv
            : tc.f.has(t)
              ? t.startsWith('scale')
                ? tf(e[1])
                : tm
              : ty,
        tb =
          (t, e, i, a = {}, o, l) =>
          (u) => {
            let h = (0, r.rU)(a, t) || {},
              d = h.delay || a.delay || 0,
              { elapsed: p = 0 } = a;
            p -= (0, n.fD)(d);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: 'easeOut',
              velocity: e.getVelocity(),
              ...h,
              delay: -p,
              onUpdate: (t) => {
                e.set(t), h.onUpdate && h.onUpdate(t);
              },
              onComplete: () => {
                u(), h.onComplete && h.onComplete();
              },
              name: t,
              motionValue: e,
              element: l ? void 0 : o,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(h) && (c = { ...c, ...tg(t, c) }),
              c.duration && (c.duration = (0, n.fD)(c.duration)),
              c.repeatDelay && (c.repeatDelay = (0, n.fD)(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let m = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (m = !0)),
              (s.current || n.W9.skipAnimations) &&
                ((m = !0), (c.duration = 0), (c.delay = 0)),
              (c.allowFlatten = !h.type && !h.ease),
              m && !l && void 0 !== e.get())
            ) {
              let t = S(c.keyframes, h);
              if (void 0 !== t)
                return (
                  r.Gt.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new r.P6([])
                );
            }
            return !l && tp.supports(c) ? new tp(c) : new tl(c);
          };
    },
    4576: (t, e, i) => {
      i.d(e, { I: () => p, r: () => d });
      let r = (t) => (180 * t) / Math.PI,
        n = (t) => a(r(Math.atan2(t[1], t[0]))),
        s = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: n,
          rotateZ: n,
          skewX: (t) => r(Math.atan(t[1])),
          skewY: (t) => r(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        a = (t) => ((t %= 360) < 0 && (t += 360), t),
        o = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        l = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        u = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: o,
          scaleY: l,
          scale: (t) => (o(t) + l(t)) / 2,
          rotateX: (t) => a(r(Math.atan2(t[6], t[5]))),
          rotateY: (t) => a(r(Math.atan2(-t[2], t[0]))),
          rotateZ: n,
          rotate: n,
          skewX: (t) => r(Math.atan(t[4])),
          skewY: (t) => r(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function h(t) {
        return +!!t.includes('scale');
      }
      function d(t, e) {
        let i, r;
        if (!t || 'none' === t) return h(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (i = u), (r = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = s), (r = e);
        }
        if (!r) return h(e);
        let a = i[e],
          o = r[1].split(',').map(c);
        return 'function' == typeof a ? a(o) : o[a];
      }
      let p = (t, e) => {
        let { transform: i = 'none' } = getComputedStyle(t);
        return d(i, e);
      };
      function c(t) {
        return parseFloat(t.trim());
      }
    },
    4935: (t, e, i) => {
      i.d(e, { B: () => u });
      var r = i(7782),
        n = i(3082),
        s = i(2282),
        a = i(7219);
      let o = (t) => (0, r.q)(0, 255, t),
        l = { ...n.ai, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.$)('rgb', 'red'),
          parse: (0, a.q)('red', 'green', 'blue'),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            'rgba(' +
            l.transform(t) +
            ', ' +
            l.transform(e) +
            ', ' +
            l.transform(i) +
            ', ' +
            (0, s.a)(n.X4.transform(r)) +
            ')',
        };
    },
    5457: (t, e, i) => {
      i.d(e, { W: () => k });
      var r = i(6340),
        n = i(2735);
      function s(t, e, i) {
        let r = t.getProps();
        return (0, n.a)(r, e, void 0 !== i ? i : r.custom, t);
      }
      var a = i(2128),
        o = i(1070),
        l = i(4379),
        u = i(6333),
        h = i(6926),
        d = i(4228);
      function p(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        var c;
        let {
          transition: m = t.getDefaultTransition(),
          transitionEnd: f,
          ...v
        } = e;
        r && (m = r);
        let y = [],
          g = n && t.animationState && t.animationState.getState()[n];
        for (let e in v) {
          let r = t.getValue(
              e,
              null !== (c = t.latestValues[e]) && void 0 !== c ? c : null
            ),
            n = v[e];
          if (
            void 0 === n ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(g, e))
          )
            continue;
          let s = { delay: i, ...(0, a.rU)(m || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, h.P)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, a.Gt);
              null !== t && ((s.startTime = t), (l = !0));
            }
          }
          (0, u.g)(t, e),
            r.start(
              (0, d.f)(
                e,
                r,
                n,
                t.shouldReduceMotion && o.$.has(e) ? { type: !1 } : s,
                t,
                l
              )
            );
          let p = r.animation;
          p && y.push(p);
        }
        return (
          f &&
            Promise.all(y).then(() => {
              a.Gt.update(() => {
                f &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = s(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = (0, l.K)(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, a.OQ)(i));
                    }
                  })(t, f);
              });
            }),
          y
        );
      }
      function c(t, e, i = {}) {
        var r;
        let n = s(
            t,
            e,
            'exit' === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: a = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (a = i.transitionOverride);
        let o = n ? () => Promise.all(p(t, n, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: s,
                    staggerDirection: o,
                  } = a;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => o - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(m)
                        .forEach((t, r) => {
                          t.notify('AnimationStart', e),
                            a.push(
                              c(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify('AnimationComplete', e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, n + r, s, o, i);
                }
              : () => Promise.resolve(),
          { when: u } = a;
        if (!u) return Promise.all([o(), l(i.delay)]);
        {
          let [t, e] = 'beforeChildren' === u ? [o, l] : [l, o];
          return t().then(() => e());
        }
      }
      function m(t, e) {
        return t.sortNodePosition(e);
      }
      var f = i(5910);
      function v(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var y = i(5305),
        g = i(8312);
      let b = g._.length,
        S = [...g.U].reverse(),
        w = g.U.length;
      function V(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function x() {
        return {
          animate: V(!0),
          whileInView: V(),
          whileHover: V(),
          whileTap: V(),
          whileDrag: V(),
          whileFocus: V(),
          exit: V(),
        };
      }
      var M = i(2290);
      class T extends M.X {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify('AnimationStart', e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => c(t, e, i)));
                          else if ('string' == typeof e) r = c(t, e, i);
                          else {
                            let n =
                              'function' == typeof e ? s(t, e, i.custom) : e;
                            r = Promise.all(p(t, n, i));
                          }
                          return r.then(() => {
                            t.notify('AnimationComplete', e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = x(),
                  n = !0,
                  a = (e) => (i, r) => {
                    var n;
                    let a = s(
                      t,
                      r,
                      'exit' === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (a) {
                      let { transition: t, transitionEnd: e, ...r } = a;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: l } = t,
                    u =
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
                        for (let t = 0; t < b; t++) {
                          let r = g._[t],
                            n = e.props[r];
                          ((0, y.w)(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    p = {},
                    c = 1 / 0;
                  for (let e = 0; e < w; e++) {
                    var m, V;
                    let s = S[e],
                      g = i[s],
                      b = void 0 !== l[s] ? l[s] : u[s],
                      w = (0, y.w)(b),
                      x = s === o ? g.isActive : null;
                    !1 === x && (c = e);
                    let M = b === u[s] && b !== l[s] && w;
                    if (
                      (M && n && t.manuallyAnimateOnMount && (M = !1),
                      (g.protectedKeys = { ...p }),
                      (!g.isActive && null === x) ||
                        (!b && !g.prevProp) ||
                        (0, r.N)(b) ||
                        'boolean' == typeof b)
                    )
                      continue;
                    let T =
                        ((m = g.prevProp),
                        'string' == typeof (V = b)
                          ? V !== m
                          : !!Array.isArray(V) && !v(V, m)),
                      A =
                        T || (s === o && g.isActive && !M && w) || (e > c && w),
                      P = !1,
                      k = Array.isArray(b) ? b : [b],
                      C = k.reduce(a(s), {});
                    !1 === x && (C = {});
                    let { prevResolvedValues: F = {} } = g,
                      D = { ...F, ...C },
                      I = (e) => {
                        (A = !0),
                          d.has(e) && ((P = !0), d.delete(e)),
                          (g.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in D) {
                      let e = C[t],
                        i = F[t];
                      if (p.hasOwnProperty(t)) continue;
                      let r = !1;
                      ((0, f.p)(e) && (0, f.p)(i) ? v(e, i) : e === i)
                        ? void 0 !== e && d.has(t)
                          ? I(t)
                          : (g.protectedKeys[t] = !0)
                        : null != e
                          ? I(t)
                          : d.add(t);
                    }
                    (g.prevProp = b),
                      (g.prevResolvedValues = C),
                      g.isActive && (p = { ...p, ...C }),
                      n && t.blockInitialAnimation && (A = !1);
                    let B = !(M && T) || P;
                    A &&
                      B &&
                      h.push(
                        ...k.map((t) => ({
                          animation: t,
                          options: { type: s },
                        }))
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ('boolean' != typeof l.initial) {
                      let i = s(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    d.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      h.push({ animation: e });
                  }
                  let x = !!h.length;
                  return (
                    n &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (x = !1),
                    (n = !1),
                    x ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = x()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, r.N)(t) && (this.unmountControls = t.subscribe(this.node));
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
      let A = 0;
      class P extends M.X {
        constructor() {
          super(...arguments), (this.id = A++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive('exit', !t);
          e &&
            !t &&
            r.then(() => {
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
      let k = { animation: { Feature: T }, exit: { Feature: P } };
    },
    5646: (t, e, i) => {
      i.d(e, { n: () => b });
      var r = i(2128),
        n = i(1586),
        s = i(2290);
      function a(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileHover &&
          t.animationState.setActive('whileHover', 'Start' === i);
        let a = s['onHover' + i];
        a && r.Gt.postRender(() => a(e, (0, n.e)(e)));
      }
      class o extends s.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, r.PT)(
              t,
              (t, e) => (
                a(this.node, e, 'Start'), (t) => a(this.node, t, 'End')
              )
            ));
        }
        unmount() {}
      }
      var l = i(1442),
        u = i(7007);
      class h extends s.X {
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
          this.unmount = (0, u.F)(
            (0, l.k)(this.node.current, 'focus', () => this.onFocus()),
            (0, l.k)(this.node.current, 'blur', () => this.onBlur())
          );
        }
        unmount() {}
      }
      function d(t, e, i) {
        let { props: s } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          s.whileTap &&
          t.animationState.setActive('whileTap', 'Start' === i);
        let a = s['onTap' + ('End' === i ? '' : i)];
        a && r.Gt.postRender(() => a(e, (0, n.e)(e)));
      }
      class p extends s.X {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, r.c$)(
              t,
              (t, e) => (
                d(this.node, e, 'Start'),
                (t, { success: e }) => d(this.node, t, e ? 'End' : 'Cancel')
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let c = new WeakMap(),
        m = new WeakMap(),
        f = (t) => {
          let e = c.get(t.target);
          e && e(t);
        },
        v = (t) => {
          t.forEach(f);
        },
        y = { some: 0, all: 1 };
      class g extends s.X {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = 'some', once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: 'number' == typeof r ? r : y[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              m.has(i) || m.set(i, {});
              let r = m.get(i),
                n = JSON.stringify(e);
              return (
                r[n] || (r[n] = new IntersectionObserver(v, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              c.set(t, i),
              r.observe(t),
              () => {
                c.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive('whileInView', e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
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
      let b = {
        inView: { Feature: g },
        tap: { Feature: p },
        focus: { Feature: h },
        hover: { Feature: o },
      };
    },
    6147: (t, e, i) => {
      i.d(e, {
        OU: () => u,
        Ql: () => h,
        Ww: () => p,
        hq: () => s,
        o4: () => l,
      });
      var r = i(1109),
        n = i(2662);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function a(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function o(t, e = 0, i = 1, r, n) {
        (t.min = a(t.min, e, i, r, n)), (t.max = a(t.max, e, i, r, n));
      }
      function l(t, { x: e, y: i }) {
        o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, r = !1) {
        let s, a;
        let o = i.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (s = i[u]).projectionDelta;
            let { visualElement: o } = s.options;
            (!o || !o.props.style || 'contents' !== o.props.style.display) &&
              (r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                p(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              r && (0, n.HD)(s.latestValues) && p(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, i, n, s = 0.5) {
        let a = (0, r.k)(t.min, t.max, s);
        o(t, e, i, a, n);
      }
      function p(t, e) {
        d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    6333: (t, e, i) => {
      i.d(e, { g: () => n });
      var r = i(4570);
      function n(t, e) {
        let i = t.getValue('willChange');
        if ((0, r.S)(i) && i.add) return i.add(e);
      }
    },
    6440: (t, e, i) => {
      i.d(e, { $: () => r });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    6479: (t, e, i) => {
      i.d(e, { S: () => r });
      let r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    6498: (t, e, i) => {
      i.d(e, { G: () => r });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    6926: (t, e, i) => {
      i.d(e, { P: () => n });
      var r = i(1788);
      function n(t) {
        return t.props[r.n];
      }
    },
    7007: (t, e, i) => {
      i.d(e, { F: () => n });
      let r = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(r);
    },
    7219: (t, e, i) => {
      i.d(e, { $: () => s, q: () => a });
      var r = i(6479);
      let n =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ('string' == typeof i && n.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        a = (t, e, i) => (n) => {
          if ('string' != typeof n) return n;
          let [s, a, o, l] = n.match(r.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    7730: (t, e, i) => {
      i.d(e, { u: () => n });
      var r = i(4935);
      let n = {
        test: (0, i(7219).$)('#'),
        parse: function (t) {
          let e = '',
            i = '',
            r = '',
            n = '';
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: r.B.transform,
      };
    },
    8203: (t, e, i) => {
      i.d(e, { h: () => d, q: () => h });
      var r = i(2128),
        n = i(9280);
      let s = new Set(),
        a = !1,
        o = !1;
      function l() {
        if (o) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, n.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (o = !1), (a = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (o = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                a || ((a = !0), r.Gt.read(u), r.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    8588: (t, e, i) => {
      function r({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function n({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          r = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: r.y, right: r.x };
      }
      i.d(e, { FY: () => r, bS: () => s, pA: () => n });
    },
    9067: (t, e, i) => {
      i.d(e, { T: () => a, n: () => o });
      var r = i(3082),
        n = i(5471),
        s = i(1987);
      let a = [
          r.ai,
          n.px,
          n.KN,
          n.uj,
          n.vw,
          n.vh,
          { test: (t) => 'auto' === t, parse: (t) => t },
        ],
        o = (t) => a.find((0, s.w)(t));
    },
    9280: (t, e, i) => {
      i.d(e, { E4: () => o, Hr: () => d, W9: () => h });
      var r = i(3082),
        n = i(5471),
        s = i(7387),
        a = i(4576);
      let o = (t) => t === r.ai || t === n.px,
        l = new Set(['x', 'y', 'z']),
        u = s.U.filter((t) => !l.has(t));
      function h(t) {
        let e = [];
        return (
          u.forEach((i) => {
            let r = t.getValue(i);
            void 0 !== r &&
              (e.push([i, r.get()]), r.set(+!!i.startsWith('scale')));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = '0', paddingRight: i = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = '0', paddingBottom: i = '0' }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: (t, { transform: e }) => (0, a.r)(e, 'x'),
        y: (t, { transform: e }) => (0, a.r)(e, 'y'),
      };
      (d.translateX = d.x), (d.translateY = d.y);
    },
    9282: (t, e, i) => {
      i.d(e, { po: () => s, tn: () => o, yT: () => a });
      var r = i(567),
        n = i(6498);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, n.G)(s),
        o = (0, r.V)(s);
    },
    9780: (t, e, i) => {
      i.d(e, { J: () => a });
      var r = i(3013),
        n = i(3492),
        s = i(2217);
      function a(t, e) {
        let i = (0, s.D)(t);
        return (
          i !== n.p && (i = r.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
  },
]);
