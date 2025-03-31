(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    347: () => {},
    1090: (e, r, a) => {
      'use strict';
      a.d(r, { default: () => m });
      var t = a(5155);
      a(2115);
      var s = a(6874),
        l = a.n(s),
        n = a(2945),
        c = a(351),
        o = a(3125);
      let i = [
          { name: '\uD83C\uDFE0  Fairbnb (Airbnb clone)', slug: 'fairbnb' },
          { name: '♟️  Chess App', slug: 'chess-app' },
          { name: "\uD83D\uDCAA  Reps 'N Recipes", slug: 'reps-n-recipes' },
        ],
        d = () =>
          (0, t.jsx)(c.Wh$, {
            className: 'w-5 h-5 text-gray-800 dark:text-gray-200',
          }),
        h = () =>
          (0, t.jsx)(c.hkc, {
            className: 'w-5 h-5 text-gray-800 dark:text-gray-200',
          }),
        m = () => {
          let { theme: e, toggleTheme: r } = (0, o.D)();
          return (0, t.jsx)(n.bL, {
            className:
              'MenubarRoot flex justify-center border-b border-gray-200 dark:border-coal-800 bg-white/50 dark:bg-coal-900/50 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300',
            children: (0, t.jsx)('div', {
              className: 'max-w-screen-md w-full px-4 md:px-0',
              children: (0, t.jsxs)('div', {
                className: 'flex items-center h-14',
                children: [
                  (0, t.jsx)(n.W1, {
                    children: (0, t.jsx)(l(), {
                      href: '/',
                      className:
                        'MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100',
                      children: 'About',
                    }),
                  }),
                  (0, t.jsxs)(n.W1, {
                    children: [
                      (0, t.jsx)(n.l9, {
                        className:
                          'MenubarTrigger text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100',
                        children: 'Projects',
                      }),
                      (0, t.jsx)(n.ZL, {
                        children: (0, t.jsxs)(n.UC, {
                          className: 'MenubarContent',
                          align: 'start',
                          sideOffset: 5,
                          alignOffset: -3,
                          children: [
                            i.map((e) =>
                              (0, t.jsx)(
                                l(),
                                {
                                  href: '/projects/'.concat(e.slug),
                                  className: 'block',
                                  children: (0, t.jsx)(n.q7, {
                                    className: 'MenubarItem',
                                    children: e.name,
                                  }),
                                },
                                e.slug
                              )
                            ),
                            (0, t.jsx)(n.wv, { className: 'MenubarSeparator' }),
                            (0, t.jsx)(l(), {
                              href: '/projects',
                              className: 'block',
                              children: (0, t.jsx)(n.q7, {
                                className: 'MenubarItem',
                                children: 'View All',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)('div', {
                    className: 'flex items-center ml-auto space-x-4',
                    children: [
                      (0, t.jsx)('a', {
                        href: 'https://github.com/nicocarlier',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100',
                        children: 'GitHub',
                      }),
                      (0, t.jsx)('a', {
                        href: 'https://www.linkedin.com/in/nicholas-carlier/',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'MenubarTrigger px-3 text-gray-700 dark:text-coal-300 hover:text-gray-900 dark:hover:text-coal-100',
                        children: 'LinkedIn',
                      }),
                      (0, t.jsx)('button', {
                        onClick: r,
                        className:
                          'p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300',
                        'aria-label': 'Toggle theme',
                        children:
                          'dark' === e ? (0, t.jsx)(d, {}) : (0, t.jsx)(h, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    3125: (e, r, a) => {
      'use strict';
      a.d(r, { D: () => c, ThemeProvider: () => n });
      var t = a(5155),
        s = a(2115);
      let l = (0, s.createContext)({ theme: null, toggleTheme: () => null });
      function n(e) {
        let { children: r } = e,
          [a, n] = (0, s.useState)(!1),
          [c, o] = (0, s.useState)('dark');
        return ((0, s.useEffect)(() => {
          n(!0);
          let e = localStorage.getItem('theme') || 'dark';
          o(e), (document.documentElement.className = e);
        }, []),
        a)
          ? (0, t.jsx)(l.Provider, {
              value: {
                theme: c,
                toggleTheme: () => {
                  let e = 'dark' === c ? 'light' : 'dark';
                  o(e),
                    localStorage.setItem('theme', e),
                    (document.documentElement.className = e);
                },
              },
              children: r,
            })
          : (0, t.jsx)(t.Fragment, { children: r });
      }
      function c() {
        let e = (0, s.useContext)(l);
        if (!e) throw Error('useTheme must be used within ThemeProvider');
        return e;
      }
    },
    3640: (e, r, a) => {
      Promise.resolve().then(a.t.bind(a, 8346, 23)),
        Promise.resolve().then(a.bind(a, 3125)),
        Promise.resolve().then(a.t.bind(a, 347, 23)),
        Promise.resolve().then(a.t.bind(a, 7917, 23)),
        Promise.resolve().then(a.bind(a, 1090));
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [838, 244, 844, 874, 117, 441, 684, 358], () => r(3640)),
      (_N_E = e.O());
  },
]);
