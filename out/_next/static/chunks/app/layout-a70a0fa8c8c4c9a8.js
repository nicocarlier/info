(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    3125: (e, r, t) => {
      'use strict';
      t.d(r, { D: () => o, ThemeProvider: () => n });
      var a = t(5155),
        s = t(2115);
      let l = (0, s.createContext)({ theme: null, toggleTheme: () => null });
      function n(e) {
        let { children: r } = e,
          [t, n] = (0, s.useState)(!1),
          [o, i] = (0, s.useState)('dark');
        return ((0, s.useEffect)(() => {
          n(!0);
          let e = localStorage.getItem('theme') || 'dark';
          i(e), (document.documentElement.className = e);
        }, []),
        t)
          ? (0, a.jsx)(l.Provider, {
              value: {
                theme: o,
                toggleTheme: () => {
                  let e = 'dark' === o ? 'light' : 'dark';
                  i(e),
                    localStorage.setItem('theme', e),
                    (document.documentElement.className = e);
                },
              },
              children: r,
            })
          : (0, a.jsx)(a.Fragment, { children: r });
      }
      function o() {
        let e = (0, s.useContext)(l);
        if (!e) throw Error('useTheme must be used within ThemeProvider');
        return e;
      }
    },
    4005: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 9243, 23)),
        Promise.resolve().then(t.t.bind(t, 8346, 23)),
        Promise.resolve().then(t.t.bind(t, 7917, 23)),
        Promise.resolve().then(t.bind(t, 3125)),
        Promise.resolve().then(t.t.bind(t, 347, 23)),
        Promise.resolve().then(t.bind(t, 5494));
    },
    5494: (e, r, t) => {
      'use strict';
      t.d(r, { default: () => m });
      var a = t(5155);
      t(2115);
      var s = t(6874),
        l = t.n(s),
        n = t(5695),
        o = t(2945),
        i = t(351),
        c = t(3125);
      let d = () =>
          (0, a.jsx)(i.Wh$, {
            className: 'w-5 h-5 text-gray-800 dark:text-gray-200',
          }),
        h = () =>
          (0, a.jsx)(i.hkc, {
            className: 'w-5 h-5 text-gray-800 dark:text-gray-200',
          }),
        m = () => {
          let { theme: e, toggleTheme: r } = (0, c.D)(),
            t = (0, n.usePathname)(),
            s = (e) => {
              let r = t === e || ('/' !== e && t.startsWith(e));
              return 'MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100 transition-all duration-200 '.concat(
                r
                  ? 'text-gray-900 dark:text-coal-100 border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-700 dark:text-coal-300'
              );
            };
          return (0, a.jsx)(o.bL, {
            className:
              'MenubarRoot flex justify-center border-b border-gray-200 dark:border-coal-800 bg-white/50 dark:bg-coal-900/50 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300',
            children: (0, a.jsxs)('div', {
              className:
                'max-w-screen-md w-full px-4 md:px-0 flex items-center h-14 text-gray-700 dark:text-coal-300 ',
              children: [
                (0, a.jsx)(o.W1, {
                  children: (0, a.jsx)(l(), {
                    href: '/',
                    className: s('/'),
                    children: 'About',
                  }),
                }),
                (0, a.jsx)(o.W1, {
                  children: (0, a.jsx)(l(), {
                    href: '/projects',
                    className: s('/projects'),
                    children: 'Projects',
                  }),
                }),
                (0, a.jsx)(o.W1, {
                  children: (0, a.jsx)(l(), {
                    href: '/life',
                    className: s('/life'),
                    children: 'Life',
                  }),
                }),
                (0, a.jsxs)('div', {
                  className: 'flex items-center ml-auto space-x-4',
                  children: [
                    (0, a.jsxs)('a', {
                      href: 'https://github.com/nicocarlier',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100 flex items-center gap-1',
                      'aria-label': 'GitHub (opens in new tab)',
                      children: [
                        'GitHub',
                        (0, a.jsx)(i.HaR, { className: 'w-4 h-4' }),
                      ],
                    }),
                    (0, a.jsxs)('a', {
                      href: 'https://www.linkedin.com/in/nicholas-carlier/',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'MenubarTrigger px-3 hover:text-gray-900 dark:hover:text-coal-100 flex items-center gap-1',
                      'aria-label': 'LinkedIn (opens in new tab)',
                      children: [
                        'LinkedIn',
                        (0, a.jsx)(i.HaR, { className: 'w-4 h-4' }),
                      ],
                    }),
                    (0, a.jsx)('button', {
                      onClick: r,
                      className:
                        'p-2 rounded-lg dark:bg-gray-700 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300',
                      'aria-label': 'Toggle theme',
                      children:
                        'dark' === e ? (0, a.jsx)(d, {}) : (0, a.jsx)(h, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [191, 244, 690, 844, 874, 130, 441, 684, 358], () => r(4005)),
      (_N_E = e.O());
  },
]);
