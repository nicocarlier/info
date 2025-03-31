(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [708],
  {
    714: (e, a, t) => {
      Promise.resolve().then(t.t.bind(t, 3063, 23)),
        Promise.resolve().then(t.bind(t, 6883));
    },
    6883: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => d });
      var r = t(5155),
        s = t(6634),
        i = t(6874),
        n = t.n(i),
        l = t(172);
      let o = (0, s.d)(n(), {
          variants: {
            variant: {
              primary: 'bg-blue-600 text-white hover:bg-blue-700',
              secondary: 'bg-coal-800 text-white hover:bg-coal-700',
            },
            isDisabled: {
              true: 'opacity-50 cursor-not-allowed pointer-events-none',
              false: 'opacity-100',
            },
            size: {
              sm: 'px-3 py-1.5 text-sm',
              md: 'px-4 py-2',
              lg: 'px-6 py-3 text-lg',
            },
          },
          defaultVariants: { variant: 'primary', size: 'md', isDisabled: !1 },
          compoundVariants: [{ isDisabled: !0, class: 'hover:bg-none' }],
        }),
        d = (e) => {
          let {
              href: a,
              children: t,
              variant: s = 'primary',
              size: i = 'md',
              isDisabled: n = !1,
              className: d = '',
              ...c
            } = e,
            b = (0, r.jsx)(o, {
              href: a,
              variant: s,
              size: i,
              isDisabled: n,
              className: 'rounded-md '.concat(d),
              ...c,
              children: t,
            });
          return n
            ? (0, r.jsx)(l.I, {
                content: (0, r.jsx)('div', {
                  className:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                  children: 'App is currently not being hosted',
                }),
                classNames: {
                  content:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                },
                children: (0, r.jsx)('div', { className: 'flex', children: b }),
              })
            : b;
        };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [874, 523, 535, 441, 684, 358], () => a(714)), (_N_E = e.O());
  },
]);
