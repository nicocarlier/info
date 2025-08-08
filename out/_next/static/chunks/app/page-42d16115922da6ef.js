(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1469: (e, a, t) => {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        !(function (e, a) {
          for (var t in a)
            Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
        })(a, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return n;
          },
        });
      let s = t(8229),
        r = t(8883),
        i = t(3063),
        l = s._(t(1193));
      function n(e) {
        let { props: a } = (0, r.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/info/_next/image/',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, t] of Object.entries(a)) void 0 === t && delete a[e];
        return { props: a };
      }
      let c = i.Image;
    },
    3125: (e, a, t) => {
      'use strict';
      t.d(a, { D: () => n, ThemeProvider: () => l });
      var s = t(5155),
        r = t(2115);
      let i = (0, r.createContext)({ theme: null, toggleTheme: () => null });
      function l(e) {
        let { children: a } = e,
          [t, l] = (0, r.useState)(!1),
          [n, c] = (0, r.useState)('dark');
        return ((0, r.useEffect)(() => {
          l(!0);
          let e = localStorage.getItem('theme') || 'dark';
          c(e), (document.documentElement.className = e);
        }, []),
        t)
          ? (0, s.jsx)(i.Provider, {
              value: {
                theme: n,
                toggleTheme: () => {
                  let e = 'dark' === n ? 'light' : 'dark';
                  c(e),
                    localStorage.setItem('theme', e),
                    (document.documentElement.className = e);
                },
              },
              children: a,
            })
          : (0, s.jsx)(s.Fragment, { children: a });
      }
      function n() {
        let e = (0, r.useContext)(i);
        if (!e) throw Error('useTheme must be used within ThemeProvider');
        return e;
      }
    },
    4436: (e, a, t) => {
      'use strict';
      t.d(a, { k5: () => d });
      var s = t(2115),
        r = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = s.createContext && s.createContext(r),
        l = ['attr', 'size', 'title'];
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                for (var s in t)
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function c(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          a &&
            (s = s.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, s);
        }
        return t;
      }
      function o(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? c(Object(t), !0).forEach(function (a) {
                var s, r, i;
                (s = e),
                  (r = a),
                  (i = t[a]),
                  (r = (function (e) {
                    var a = (function (e, a) {
                      if ('object' != typeof e || !e) return e;
                      var t = e[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var s = t.call(e, a || 'default');
                        if ('object' != typeof s) return s;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return ('string' === a ? String : Number)(e);
                    })(e, 'string');
                    return 'symbol' == typeof a ? a : a + '';
                  })(r)) in s
                    ? Object.defineProperty(s, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (s[r] = i);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : c(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
        }
        return e;
      }
      function d(e) {
        return (a) =>
          s.createElement(
            m,
            n({ attr: o({}, e.attr) }, a),
            (function e(a) {
              return (
                a &&
                a.map((a, t) =>
                  s.createElement(a.tag, o({ key: t }, a.attr), e(a.child))
                )
              );
            })(e.child)
          );
      }
      function m(e) {
        var a = (a) => {
          var t,
            { attr: r, size: i, title: c } = e,
            d = (function (e, a) {
              if (null == e) return {};
              var t,
                s,
                r = (function (e, a) {
                  if (null == e) return {};
                  var t = {};
                  for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                      if (a.indexOf(s) >= 0) continue;
                      t[s] = e[s];
                    }
                  return t;
                })(e, a);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (s = 0; s < i.length; s++)
                  (t = i[s]),
                    !(a.indexOf(t) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (r[t] = e[t]);
              }
              return r;
            })(e, l),
            m = i || a.size || '1em';
          return (
            a.className && (t = a.className),
            e.className && (t = (t ? t + ' ' : '') + e.className),
            s.createElement(
              'svg',
              n(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                a.attr,
                r,
                d,
                {
                  className: t,
                  style: o(o({ color: e.color || a.color }, a.style), e.style),
                  height: m,
                  width: m,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              c && s.createElement('title', null, c),
              e.children
            )
          );
        };
        return void 0 !== i
          ? s.createElement(i.Consumer, null, (e) => a(e))
          : a(r);
      }
    },
    6766: (e, a, t) => {
      'use strict';
      t.d(a, { default: () => r.a });
      var s = t(1469),
        r = t.n(s);
    },
    7699: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 8511));
    },
    8511: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { default: () => f });
      var s = t(5155),
        r = t(6874),
        i = t.n(r),
        l = t(6766);
      let n = [
          {
            name: 'Fairbnb',
            slug: 'fairbnb',
            description:
              'A full-stack Airbnb clone built with React, Redux, and Ruby on Rails, featuring interactive maps and a robust booking system.',
            tags: [
              'React',
              'Redux',
              'Ruby on Rails',
              'PostgreSQL',
              'AWS S3',
              'Google Maps API',
            ],
            thumbnail: '\uD83C\uDFE0',
          },
          {
            name: 'NextChess',
            slug: 'chess-app',
            description:
              'A responsive chess platform with custom move validation engine, multiplayer capabilities via WebSockets, and AI opponents.',
            tags: [
              'Next.js',
              'TypeScript',
              'Redux',
              'WebSocket',
              'Tailwind CSS',
            ],
            thumbnail: '♟️',
          },
          {
            name: "Reps 'N Recipes",
            slug: 'reps-n-recipes',
            description:
              'A comprehensive fitness app that integrates workout tracking and nutrition management with data visualization for health goals.',
            tags: [
              'MongoDB',
              'Express',
              'React',
              'Node.js',
              'Chart.js',
              'Spoonacular API',
            ],
            thumbnail: '\uD83D\uDCAA',
          },
        ],
        c = (e) => '/info'.concat(e),
        o = [
          {
            title: 'Rework',
            authors: 'David Heinemeier Hansson & Jason Fried',
            cover: '\uD83D\uDCDA',
            category: 'Business',
            coverImage: c('/books/rework.jpeg'),
          },
          {
            title: 'Deep Work',
            authors: 'Cal Newport',
            cover: '\uD83E\uDDE0',
            category: 'Productivity',
            coverImage: c('/books/deep-work.jpeg'),
          },
          {
            title: "Ender's Game",
            authors: 'Orson Scott Card',
            cover: '\uD83D\uDE80',
            category: 'Science Fiction',
            coverImage: c('/books/enders-game.jpeg'),
          },
          {
            title: 'Zero to One',
            authors: 'Peter Thiel',
            cover: '\uD83D\uDCA1',
            category: 'Business',
            coverImage: c('/books/zero-to-one.png'),
          },
          {
            title: 'The Complacent Class',
            authors: 'Tyler Cowen',
            cover: '\uD83D\uDCCA',
            category: 'Economics',
            coverImage: c('/books/the-complacent-class.jpeg'),
          },
          {
            title: 'The Catcher in the Rye',
            authors: 'J. D. Salinger',
            cover: '\uD83C\uDF3E',
            category: 'Fiction',
            coverImage: c('/books/the-catcher-in-the-rye.jpeg'),
          },
          {
            title: 'Sapiens',
            authors: 'Yuval Noah Harari',
            category: 'History',
            coverImage: c('/books/sapiens.jpeg'),
          },
          {
            title: 'The Magic of Reality',
            authors: 'Richard Dawkins',
            cover: '\uD83D\uDD2E',
            category: 'Science',
            coverImage: c('/books/magic-of-reality.jpeg'),
          },
        ];
      c('/books/superintellegence.jpeg');
      let d = [
          {
            date: '26 Dec',
            location: 'Bali, Indonesia',
            flag: '\uD83C\uDDEE\uD83C\uDDE9',
          },
          {
            date: '21 Dec',
            location: 'Yasawa Islands, Fiji',
            flag: '\uD83C\uDDEB\uD83C\uDDEF',
          },
          {
            date: '3 Dec',
            location: 'Auckland, New Zealand',
            flag: '\uD83C\uDDF3\uD83C\uDDFF',
          },
        ],
        m = [
          { name: 'Tennis', emoji: '\uD83C\uDFBE' },
          { name: 'Hockey', emoji: '\uD83C\uDFD1' },
          { name: 'Rock Climbing', emoji: '\uD83E\uDDD7‍♂️' },
          { name: 'Swimming', emoji: '\uD83C\uDFCA‍♂️' },
          { name: 'Skiing', emoji: '⛷️' },
          { name: 'Chess', emoji: '♟️' },
          { name: 'Gym', emoji: '\uD83C\uDFCB️‍♂️' },
        ];
      var x = t(2115);
      let h = new Date('December 26, 2000 14:00:00'),
        p = () => {
          let [e, a] = (0, x.useState)(''),
            [t, r] = (0, x.useState)(null);
          return (
            (0, x.useEffect)(() => {
              let e = () => {
                let e = new Date(),
                  t = e.getTime() - h.getTime(),
                  s = Math.floor(t / 36e5),
                  i = Math.floor(t / 864e5),
                  l = Math.floor(i / 365.25),
                  n = Math.floor((i % 365.25) / 30.44);
                r({
                  years: l,
                  months: n,
                  days: Math.floor((i % 365.25) % 30.44),
                  hours: s % 24,
                  minutes: Math.floor((t % 36e5) / 6e4),
                  seconds: Math.floor((t % 6e4) / 1e3),
                });
                let c = e.getFullYear(),
                  o = new Date(h);
                o.setFullYear(c), e > o && o.setFullYear(c + 1);
                let d = Math.round((o.getTime() - e.getTime()) / 2630016e3);
                a('in '.concat(d, ' months'));
              };
              e();
              let t = setInterval(e, 1e3);
              return () => clearInterval(t);
            }, []),
            (0, s.jsxs)('div', {
              className: 'flex space-x-3',
              children: [
                (0, s.jsx)('span', {
                  'aria-hidden': 'true',
                  children: '\uD83C\uDF82',
                }),
                (0, s.jsxs)('div', {
                  children: [
                    (0, s.jsxs)('p', {
                      className: 'text-gray-900 dark:text-coal-100',
                      children: [
                        null == t ? void 0 : t.years,
                        ' years, ',
                        null == t ? void 0 : t.months,
                        ' months,',
                        ' ',
                        null == t ? void 0 : t.days,
                        ' days, ',
                        null == t ? void 0 : t.hours,
                        ' hours,',
                        ' ',
                        null == t ? void 0 : t.minutes,
                        ' minutes, ',
                        null == t ? void 0 : t.seconds,
                        ' seconds',
                        ' ',
                      ],
                    }),
                    (0, s.jsxs)('p', {
                      className: 'text-sm text-gray-600 dark:text-coal-300',
                      children: ['Next birthday ', e],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var u = t(351);
      let g = () => {
        let [e, a] = (0, x.useState)('');
        return (
          (0, x.useEffect)(() => {
            let e = () => {
              a(new Date().toLocaleTimeString('en-US'));
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t);
          }, []),
          (0, s.jsxs)('div', {
            className:
              'flex items-center space-x-2 text-gray-700 dark:text-gray-300',
            children: [
              (0, s.jsx)(u.Ohp, { className: 'w-4 h-4' }),
              (0, s.jsxs)('div', {
                className: 'flex items-center space-x-2',
                children: [
                  (0, s.jsxs)('span', {
                    className: 'text-gray-900 dark:text-coal-100',
                    children: ['My local time:', ' '],
                  }),
                  (0, s.jsx)('span', {
                    className: 'text-sm text-gray-600 dark:text-coal-300',
                    children: e,
                  }),
                ],
              }),
            ],
          })
        );
      };
      var j = t(3125);
      function f() {
        let { theme: e } = (0, j.D)();
        return (0, s.jsxs)('main', {
          className: 'max-w-screen-md px-4 mx-auto space-y-16 md:px-0 py-8',
          children: [
            (0, s.jsxs)('section', {
              className: 'grid-cols-2 gap-16 sm:grid',
              children: [
                (0, s.jsx)('div', {
                  className: 'items-start justify-center sm:flex',
                  children: (0, s.jsxs)('figure', {
                    children: [
                      (0, s.jsx)(l.default, {
                        priority: !0,
                        alt: 'Portrait photo of Nico',
                        src: ''.concat('/info', '/portrait.webp'),
                        className:
                          'object-contain object-bottom w-full rounded-xl shadow',
                        width: 1067,
                        height: 1317,
                        loading: 'eager',
                      }),
                      (0, s.jsx)('figcaption', {
                        className:
                          'text-center text-walnut text-xs mt-2 inline-flex items-center justify-center w-full',
                        children: (0, s.jsx)('span', {
                          children: 'Taken in Nadi, Fiji - 2023',
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)('div', {
                  className: 'space-y-5 ',
                  children: [
                    (0, s.jsxs)('h2', {
                      className:
                        'space-x-3 text-3xl font-semibold font-display',
                      children: [
                        (0, s.jsxs)('span', {
                          className: 'wave inline-block animate-wave',
                          'aria-hidden': 'true',
                          children: ['\uD83D\uDC4B', ' '],
                        }),
                        (0, s.jsx)('span', { children: "Hi, I'm Nico" }),
                      ],
                    }),
                    (0, s.jsx)('p', {
                      className: '',
                      children:
                        'Full-stack engineer at Inventive AI, where I build AI-powered platforms to automate sales workflows and streamline RFP responses. I specialize in React, Next.js, TypeScript, and Django, delivering performant knowledge systems and real-time collaboration tools.',
                    }),
                    (0, s.jsx)('p', {
                      className: '',
                      children:
                        'My journey started in mechanical engineering before transitioning to software development. I’m passionate about creating AI-driven products, optimizing complex systems, and architecting scalable web applications. Based in the San Francisco Bay Area, I love tackling technical challenges that push me to grow.',
                    }),
                    (0, s.jsx)('p', {
                      className: '',
                      children:
                        'Outside of work, you’ll find me hiking Bay Area trails, playing tennis and rugby, or diving into sci-fi and tech books.',
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)('section', {
              className: 'grid-cols-2 gap-16 sm:grid space-y-8 sm:space-y-0',
              children: [
                (0, s.jsxs)('div', {
                  className: 'space-y-12',
                  children: [
                    (0, s.jsxs)('article', {
                      className: 'space-y-4',
                      children: [
                        (0, s.jsxs)('header', {
                          className: 'space-y-1',
                          children: [
                            (0, s.jsxs)('h2', {
                              className:
                                'flex items-center space-x-3 text-xl font-semibold font-display',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '\uD83C\uDFAF',
                                }),
                                (0, s.jsx)('div', {
                                  children: 'Goals for 2025',
                                }),
                              ],
                            }),
                            (0, s.jsx)('p', {
                              className: 'opacity-60',
                              children:
                                'Annual focus that shapes my projects and decisions',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className:
                            'relative space-y-4 rounded shadow-sm backdrop-blur-sm',
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'pl-2',
                              children: [
                                (0, s.jsxs)('p', {
                                  className: 'text-lg',
                                  children: ['->', ' Work'],
                                }),
                                (0, s.jsxs)('div', {
                                  className: 'space-y-3 pl-2',
                                  children: [
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '⚡️',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children:
                                                'Performance Optimization',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Master React performance, TypeScript patterns, and advanced state management for robust, scalable apps',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83D\uDE80',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'AI Integration',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Build smarter products by integrating AI/ML APIs and enhancing user experiences with async workflows',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83E\uDD1D',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'Collaboration',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Level up teamwork and communication with cross-functional teams to deliver product features from 0-to-1',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83D\uDEE0️',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'Developer Velocity',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Optimize workflows and codebases with better testing, CI/CD, and deployment strategies',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className: 'pt-3 dark:border-coal-700',
                              children: [
                                (0, s.jsxs)('p', {
                                  className: 'text-lg mb-2',
                                  children: ['->', ' Personal'],
                                }),
                                (0, s.jsxs)('div', {
                                  className: 'space-y-3 pl-2',
                                  children: [
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83C\uDFBE',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'Tennis',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Improve consistency and advance NTRP ranking',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83D\uDCAA',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'Strength',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Hit new targets: 130kg squat, 90kg bench, 55kg OHP',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)('div', {
                                      className: 'flex space-x-3',
                                      children: [
                                        (0, s.jsx)('span', {
                                          'aria-hidden': 'true',
                                          children: '\uD83D\uDCCA',
                                        }),
                                        (0, s.jsxs)('div', {
                                          children: [
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-gray-900 dark:text-coal-100',
                                              children: 'Body Composition',
                                            }),
                                            (0, s.jsx)('p', {
                                              className:
                                                'text-sm text-gray-600 dark:text-coal-300',
                                              children:
                                                'Reach sub 10% body fat for at least one milestone measurement',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('article', {
                      className: 'space-y-4',
                      children: [
                        (0, s.jsxs)('header', {
                          className: 'space-y-1',
                          children: [
                            (0, s.jsxs)('h2', {
                              className:
                                'flex items-center space-x-3 text-xl font-semibold font-display',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '\uD83D\uDCBB',
                                }),
                                (0, s.jsx)(i(), {
                                  href: '/projects',
                                  className: 'hover:underline',
                                  children: 'Projects',
                                }),
                              ],
                            }),
                            (0, s.jsx)('p', {
                              className: 'opacity-60',
                              children: 'My current and favorite work pieces',
                            }),
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className: 'space-y-3',
                          children: n.map((e) =>
                            (0, s.jsxs)(
                              i(),
                              {
                                href: '/projects/'.concat(e.slug),
                                className:
                                  'group flex items-center gap-4 p-3 bg-gray-100 dark:bg-coal-800/50 rounded-xl shadow backdrop-blur-sm hover:scale-[1.02] transition-transform',
                                children: [
                                  (0, s.jsx)('span', {
                                    className: 'text-2xl',
                                    'aria-hidden': 'true',
                                    children: e.thumbnail,
                                  }),
                                  (0, s.jsxs)('div', {
                                    className: 'flex-1 min-w-0',
                                    children: [
                                      (0, s.jsx)('div', {
                                        className: 'flex items-center gap-2',
                                        children: (0, s.jsx)('h3', {
                                          className:
                                            'font-medium text-coal-800 dark:text-coal-100',
                                          children: e.name,
                                        }),
                                      }),
                                      (0, s.jsx)('p', {
                                        className:
                                          'text-sm text-coal-600 dark:text-coal-300 line-clamp-1',
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.slug
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'space-y-12',
                  children: [
                    (0, s.jsxs)('article', {
                      className: 'space-y-4 flex flex-col',
                      children: [
                        (0, s.jsxs)('header', {
                          className: 'space-y-1',
                          children: [
                            (0, s.jsxs)('h2', {
                              className:
                                'flex items-center space-x-3 text-xl font-semibold font-display',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '\uD83E\uDDEC',
                                }),
                                (0, s.jsx)('div', { children: 'Life' }),
                              ],
                            }),
                            (0, s.jsx)('p', {
                              className: 'opacity-60',
                              children: 'Tracking my life data in real time',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className:
                            'p-4 rounded shadow-sm backdrop-blur-sm sm:flex sm:flex-col sm:justify-between space-y-4',
                          children: [
                            (0, s.jsx)(p, {}),
                            (0, s.jsx)(g, {}),
                            (0, s.jsxs)('div', {
                              className: 'flex space-x-3',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '\uD83C\uDFCB️‍♂️',
                                }),
                                (0, s.jsxs)('div', {
                                  children: [
                                    (0, s.jsx)('p', {
                                      className:
                                        'text-gray-900 dark:text-coal-100',
                                      children: 'Favorite activities',
                                    }),
                                    (0, s.jsx)('p', {
                                      className:
                                        'text-sm text-gray-600 dark:text-coal-300',
                                      children: m
                                        .map((e) =>
                                          ''.concat(e.emoji, ' ').concat(e.name)
                                        )
                                        .join(', '),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className: 'flex space-x-3',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '✈️',
                                }),
                                (0, s.jsxs)('div', {
                                  className: 'space-y-2',
                                  children: [
                                    (0, s.jsx)('p', {
                                      className:
                                        'text-gray-900 dark:text-coal-100',
                                      children: 'Most Recent Travels',
                                    }),
                                    (0, s.jsx)('div', {
                                      className: 'space-y-1.5',
                                      children: d.map((e) =>
                                        (0, s.jsxs)(
                                          'p',
                                          {
                                            className:
                                              'text-sm text-gray-600 dark:text-coal-300',
                                            children: [
                                              e.date,
                                              ': ',
                                              e.location,
                                              ' ',
                                              e.flag,
                                            ],
                                          },
                                          e.date
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className: 'space-y-2 ',
                              children: [
                                (0, s.jsxs)('div', {
                                  className: 'flex space-x-3 ',
                                  children: [
                                    (0, s.jsx)('span', {
                                      'aria-hidden': 'true',
                                      children: '\uD83D\uDCBC',
                                    }),
                                    (0, s.jsx)('p', {
                                      className:
                                        'text-gray-900 dark:text-coal-100 ',
                                      children: 'Professional Profile',
                                    }),
                                  ],
                                }),
                                (0, s.jsx)('div', {
                                  className:
                                    'badge-base LI-profile-badge bg-transparent',
                                  'data-locale': 'en_US',
                                  'data-size': 'medium',
                                  'data-theme':
                                    'light' === e ? 'light' : 'dark',
                                  'data-type': 'VERTICAL',
                                  'data-vanity': 'nicholas-carlier',
                                  'data-version': 'v1',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)('article', {
                      className: 'space-y-4',
                      children: [
                        (0, s.jsxs)('header', {
                          className: 'space-y-1',
                          children: [
                            (0, s.jsxs)('h2', {
                              className:
                                'flex items-center space-x-3 text-xl font-semibold font-display',
                              children: [
                                (0, s.jsx)('span', {
                                  'aria-hidden': 'true',
                                  children: '\uD83D\uDCDA',
                                }),
                                (0, s.jsx)('div', {
                                  children: 'Books I Enjoyed',
                                }),
                              ],
                            }),
                            (0, s.jsx)('p', {
                              className: 'opacity-60',
                              children:
                                'A collection of books that have influenced my thinking',
                            }),
                          ],
                        }),
                        (0, s.jsx)('div', {
                          className:
                            'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4',
                          children: o.map((e) =>
                            (0, s.jsxs)(
                              'div',
                              {
                                className:
                                  'aspect-[2/3] rounded-lg shadow overflow-hidden group relative',
                                children: [
                                  (0, s.jsx)(l.default, {
                                    src: e.coverImage,
                                    alt: 'Cover of '.concat(e.title),
                                    fill: !0,
                                    sizes: '(max-width: 768px) 100vw, 33vw',
                                    className:
                                      'object-cover transition-transform group-hover:scale-105',
                                  }),
                                  (0, s.jsx)('div', {
                                    className:
                                      'absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4',
                                    children: (0, s.jsxs)('div', {
                                      className: 'text-white text-center',
                                      children: [
                                        (0, s.jsx)('p', {
                                          className: 'font-semibold text-sm',
                                          children: e.title,
                                        }),
                                        (0, s.jsx)('p', {
                                          className:
                                            'text-xs mt-1 text-gray-300',
                                          children: e.authors,
                                        }),
                                        (0, s.jsx)('p', {
                                          className:
                                            'text-[10px] mt-1 text-gray-400',
                                          children: e.category,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.title
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [844, 63, 874, 441, 684, 358], () => a(7699)), (_N_E = e.O());
  },
]);
