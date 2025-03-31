(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    1469: (e, s, a) => {
      'use strict';
      Object.defineProperty(s, '__esModule', { value: !0 }),
        !(function (e, s) {
          for (var a in s)
            Object.defineProperty(e, a, { enumerable: !0, get: s[a] });
        })(s, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return r;
          },
        });
      let t = a(8229),
        i = a(8883),
        l = a(3063),
        n = t._(a(1193));
      function r(e) {
        let { props: s } = (0, i.getImgProps)(e, {
          defaultLoader: n.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, a] of Object.entries(s)) void 0 === a && delete s[e];
        return { props: s };
      }
      let c = l.Image;
    },
    5688: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 8983));
    },
    6766: (e, s, a) => {
      'use strict';
      a.d(s, { default: () => i.a });
      var t = a(1469),
        i = a.n(t);
    },
    6883: (e, s, a) => {
      'use strict';
      a.d(s, { default: () => o });
      var t = a(5155),
        i = a(6634),
        l = a(6874),
        n = a.n(l),
        r = a(172);
      let c = (0, i.d)(n(), {
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
        o = (e) => {
          let {
              href: s,
              children: a,
              variant: i = 'primary',
              size: l = 'md',
              isDisabled: n = !1,
              className: o = '',
              ...d
            } = e,
            m = (0, t.jsx)(c, {
              href: s,
              variant: i,
              size: l,
              isDisabled: n,
              className: 'rounded-md '.concat(o),
              ...d,
              children: a,
            });
          return n
            ? (0, t.jsx)(r.I, {
                content: (0, t.jsx)('div', {
                  className:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                  children: 'App is currently not being hosted',
                }),
                classNames: {
                  content:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                },
                children: (0, t.jsx)('div', { className: 'flex', children: m }),
              })
            : m;
        };
    },
    8983: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { default: () => r });
      var t = a(5155),
        i = a(2115),
        l = a(6766),
        n = a(6883);
      function r() {
        let [e, s] = (0, i.useState)(0),
          a = [
            '/projects/chess-app/next-chess-square.webp',
            '/projects/chess-app-game.webp',
            '/projects/chess-app-mobile.webp',
          ];
        return (0, t.jsxs)('main', {
          className: 'max-w-screen-md px-4 mx-auto space-y-12 md:px-0',
          children: [
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h1', { children: 'NextChess' }),
                (0, t.jsx)('p', {
                  className: 'text-xl text-coal-300 dark:text-gray-300',
                  children:
                    'A full-stack chess platform built with Next.js and TypeScript, featuring real-time multiplayer gameplay, custom move validation engine, and responsive design for all devices.',
                }),
                (0, t.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, t.jsx)(n.default, {
                      href: 'https://nextchess.vercel.app/',
                      variant: 'primary',
                      target: '_blank',
                      isDisabled: !0,
                      children: 'Live Demo',
                    }),
                    (0, t.jsx)(n.default, {
                      href: 'https://github.com/nicocarlier/chess-nextjs',
                      variant: 'secondary',
                      target: '_blank',
                      children: 'GitHub Repository',
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  className:
                    'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-800',
                  children: [
                    (0, t.jsx)('div', {
                      className:
                        'absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110',
                      style: { backgroundImage: 'url('.concat(a[e], ')') },
                    }),
                    (0, t.jsx)('div', {
                      className:
                        'relative h-full flex items-center justify-center',
                      children: (0, t.jsx)(l.default, {
                        priority: !0,
                        alt: 'NextChess application',
                        src: a[e],
                        className: 'object-contain max-h-full',
                        fill: !0,
                        sizes: '(max-width: 768px) 100vw, 768px',
                        quality: 95,
                      }),
                    }),
                    (0, t.jsx)('div', {
                      className:
                        'absolute bottom-4 left-0 right-0 flex justify-center space-x-2',
                      children: a.map((a, i) =>
                        (0, t.jsx)(
                          'button',
                          {
                            className: 'w-3 h-3 rounded-full '.concat(
                              e === i
                                ? 'bg-blue-600'
                                : 'bg-gray-400 hover:bg-gray-300'
                            ),
                            onClick: () => s(i),
                            'aria-label': 'View image '.concat(i + 1),
                          },
                          i
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-4',
              children: [
                (0, t.jsx)('h2', { children: 'Project Overview' }),
                (0, t.jsx)('p', {
                  className: 'text-coal-300 dark:text-gray-300',
                  children:
                    'NextChess is a comprehensive chess platform that brings the classic game into the modern web era. Built with a focus on performance and user experience, it combines a custom chess engine with an intuitive interface to deliver an engaging gameplay experience for players of all skill levels.',
                }),
                (0, t.jsx)('p', {
                  className: 'text-coal-300 dark:text-gray-300',
                  children:
                    'The application offers real-time multiplayer matches, AI opponents, game history tracking, and responsive design that adapts seamlessly to any device. By leveraging Next.js 14 and TypeScript, the platform ensures type safety and optimal performance while maintaining clean, maintainable code.',
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h2', { children: 'Technology Stack & Rationale' }),
                (0, t.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Frontend & Backend',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'Built with Next.js 14, leveraging its full-stack capabilities for server-side rendering, API routes, and seamless page transitions. TypeScript provides robust type safety throughout the codebase, reducing runtime errors and improving developer experience.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'State Management',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'Redux manages application state, providing a predictable state container for complex chess logic, game history, and user interactions. This architecture ensures consistent state across components and enables features like game replay and move validation.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Styling & Responsiveness',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'Tailwind CSS combined with CSS modules creates a responsive and visually appealing interface. The design system adapts gracefully from mobile to desktop, maintaining usability and aesthetic consistency across all screen sizes.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Real-time Communication',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'WebSocket integration enables real-time multiplayer gameplay with minimal latency. Players experience smooth, responsive interactions during matches, enhancing the competitive nature of the game.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Deployment',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'Vercel platform provides seamless deployment with automatic preview environments for each pull request, ensuring high availability and performance for users worldwide.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h2', { children: 'Key Features' }),
                (0, t.jsxs)('div', {
                  className: 'grid gap-6 sm:grid-cols-2',
                  children: [
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'font-semibold text-coal-100 dark:text-white text-lg mb-3',
                          children: 'Custom Chess Engine',
                        }),
                        (0, t.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-300 dark:text-gray-300 text-sm',
                          children: [
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Hand-crafted move validation system with specialized piece classes',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'FEN notation support for game state serialization',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Advanced chess rules including en passant, castling, and promotion',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Comprehensive check and checkmate detection',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'font-semibold text-coal-100 dark:text-white text-lg mb-3',
                          children: 'Multiplayer & AI',
                        }),
                        (0, t.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-300 dark:text-gray-300 text-sm',
                          children: [
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Real-time multiplayer matches with WebSocket communication',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'AI opponents powered by Stockfish integration',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Multiple difficulty levels for AI gameplay',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Matchmaking system for finding online opponents',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'font-semibold text-coal-100 dark:text-white text-lg mb-3',
                          children: 'Interactive UI',
                        }),
                        (0, t.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-300 dark:text-gray-300 text-sm',
                          children: [
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Custom drag-and-drop system optimized for chess piece movement',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Visual move highlighting showing legal moves and captures',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Interactive move history with algebraic notation',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Game state indicators for check, checkmate, and draw conditions',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'font-semibold text-coal-100 dark:text-white text-lg mb-3',
                          children: 'User Experience',
                        }),
                        (0, t.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-300 dark:text-gray-300 text-sm',
                          children: [
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Secure authentication via GitHub and Google OAuth',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Responsive design optimized for mobile, tablet, and desktop',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children:
                                    'Game history and statistics tracking',
                                }),
                              ],
                            }),
                            (0, t.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, t.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, t.jsx)('span', {
                                  children: 'Light and dark mode themes',
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
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h2', {
                  children: 'Technical Challenges & Solutions',
                }),
                (0, t.jsxs)('div', {
                  className:
                    'bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4',
                  children: [
                    (0, t.jsx)('h3', {
                      className:
                        'text-xl font-semibold text-coal-200 dark:text-gray-200',
                      children: 'Performance Optimization',
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-coal-300 dark:text-gray-300',
                      children:
                        'One of the most significant challenges was managing component re-renders in the chessboard. With 64 squares and multiple pieces, even small state changes would trigger cascading re-renders, impacting performance and user experience.',
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h4', {
                          className:
                            'font-medium text-coal-200 dark:text-gray-200',
                          children: 'Problem: DragClone Excessive Re-rendering',
                        }),
                        (0, t.jsxs)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children: [
                            'The',
                            ' ',
                            (0, t.jsx)('code', {
                              className:
                                'bg-coal-700/50 dark:bg-gray-700/50 px-1.5 py-0.5 rounded text-xs',
                              children: 'DragClone',
                            }),
                            ' ',
                            "component's position state changes were causing unnecessary re-renders of all child components, even when using React's memoization techniques.",
                          ],
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'bg-coal-800 dark:bg-gray-900 p-4 rounded-md',
                          children: (0, t.jsx)('pre', {
                            className:
                              'text-sm text-coal-300 dark:text-gray-300 overflow-x-auto',
                            children:
                              'const usePreviousProps = (props) => {\n    const ref = useRef();\n    useEffect(() => {\n        ref.current = props;\n    });\n    return ref.current; // Returns the previous props\n};',
                          }),
                        }),
                        (0, t.jsxs)('p', {
                          className: 'text-coal-300 dark:text-gray-300 mt-2',
                          children: [
                            'I implemented a custom hook to compare prop changes between renders, which helped identify',
                            ' ',
                            (0, t.jsx)('code', {
                              className:
                                'bg-coal-700/50 dark:bg-gray-700/50 px-1.5 py-0.5 rounded text-xs',
                              children: 'playMoveIfValid',
                            }),
                            ' ',
                            'as the volatile prop. Further analysis revealed unstable dependencies in useCallback hooks for game state management functions.',
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2 mt-4',
                      children: [
                        (0, t.jsx)('h4', {
                          className:
                            'font-medium text-coal-200 dark:text-gray-200',
                          children: 'Solution: Strategic Memoization',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The solution involved multiple optimization techniques:',
                        }),
                        (0, t.jsxs)('ul', {
                          className:
                            'space-y-2 text-coal-300 dark:text-gray-300 pl-5',
                          children: [
                            (0, t.jsx)('li', {
                              className: 'list-disc',
                              children:
                                'Ensuring dependency stability in useCallback and useMemo hooks',
                            }),
                            (0, t.jsx)('li', {
                              className: 'list-disc',
                              children:
                                'Applying React.memo correctly to prevent unnecessary component re-renders',
                            }),
                            (0, t.jsx)('li', {
                              className: 'list-disc',
                              children:
                                'Implementing request throttling for drag operations',
                            }),
                            (0, t.jsx)('li', {
                              className: 'list-disc',
                              children:
                                'Restructuring component hierarchy to minimize render cascades',
                            }),
                          ],
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300 mt-2',
                          children:
                            'These optimizations resulted in a 60% reduction in render operations during gameplay, providing a smoother user experience even during rapid move sequences.',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  className:
                    'bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4',
                  children: [
                    (0, t.jsx)('h3', {
                      className:
                        'text-xl font-semibold text-coal-200 dark:text-gray-200',
                      children: 'Chess Logic Implementation',
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-coal-300 dark:text-gray-300',
                      children:
                        "Building a robust chess engine required careful consideration of the game's complex rules, particularly for special moves like castling and detecting check/checkmate conditions.",
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h4', {
                          className:
                            'font-medium text-coal-200 dark:text-gray-200',
                          children: 'Object-Oriented Design with Inheritance',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'I implemented a class-based structure for chess pieces, using inheritance and composition to share common behaviors while allowing piece-specific move logic:',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'bg-coal-800 dark:bg-gray-900 p-4 rounded-md',
                          children: (0, t.jsx)('pre', {
                            className:
                              'text-sm text-coal-300 dark:text-gray-300 overflow-x-auto',
                            children:
                              'import { inherit } from \'./inherit.js\';\nimport { Piece } from \'./piece.js\';\nimport { Slideable } from \'./slideable.js\';\n\nconst DIRS = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];\n\nexport function Queen(color, square, board) {\n    this.pieceName = "queen";\n    this.type = color.slice(0,1) + "_" + this.pieceName;\n    Piece.call(this, color, square, board);\n    this.slideable = new Slideable(board);\n    this.fenChar = color === "white" ? "Q" : "q";\n}\n\ninherit(Piece, Queen);\n\nQueen.prototype.pieceMoves = function(pos = this.getPos()) {\n    const color = this.getColor();\n    const [options, takeOptions] = this.slideable.calculateMoves(color, pos, DIRS);\n    return [options, takeOptions];\n}',
                          }),
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300 mt-2',
                          children:
                            'This approach allowed for efficient code reuse while maintaining the unique movement patterns of each chess piece. The Slideable composition pattern was particularly effective for handling the line-based movements of queens, rooks, and bishops.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h2', { children: 'Feature Showcase' }),
                (0, t.jsxs)('div', {
                  className: 'space-y-8',
                  children: [
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Game Interface',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The chess board interface features intuitive drag-and-drop functionality, move highlighting, and responsive design that works seamlessly across devices.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(l.default, {
                            alt: 'Chess game interface',
                            src: '/projects/chess-interface.webp',
                            className: 'object-contain',
                            fill: !0,
                            sizes: '(max-width: 768px) 100vw, 768px',
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Move Validation',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The custom move validation system highlights legal moves, prevents illegal actions, and handles special chess rules like castling and en passant captures.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(l.default, {
                            alt: 'Move validation demonstration',
                            src: '/projects/chess-validation.webp',
                            className: 'object-contain',
                            fill: !0,
                            sizes: '(max-width: 768px) 100vw, 768px',
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className:
                        'bg-coal-800/20 dark:bg-gray-800/20 p-6 rounded-lg space-y-4',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Mobile Experience',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The responsive design adapts to mobile screens, maintaining full functionality while optimizing the interface for touch interactions.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(l.default, {
                            alt: 'Mobile chess experience',
                            src: '/projects/chess-mobile.webp',
                            className: 'object-contain',
                            fill: !0,
                            sizes: '(max-width: 768px) 100vw, 768px',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-4',
              children: [
                (0, t.jsx)('h2', { children: 'Development Insights' }),
                (0, t.jsxs)('div', {
                  className:
                    'prose prose-sm max-w-none text-coal-300 dark:text-gray-300',
                  children: [
                    (0, t.jsx)('p', {
                      children:
                        'Building NextChess provided valuable experience in both frontend and game development. Key learnings included:',
                    }),
                    (0, t.jsxs)('ul', {
                      children: [
                        (0, t.jsx)('li', {
                          children:
                            'Performance optimization is critical for interactive applications, especially those with complex state management',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Object-oriented design principles translate effectively to JavaScript/TypeScript when building complex systems',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'FEN notation provides an elegant solution for chess game state serialization',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'WebSockets enable truly real-time experiences that traditional HTTP requests cannot match',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Careful component architecture planning pays dividends when scaling application features',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('section', {
              className: 'space-y-4',
              children: [
                (0, t.jsx)('h2', { children: 'Future Enhancements' }),
                (0, t.jsxs)('div', {
                  className:
                    'prose prose-sm max-w-none text-coal-300 dark:text-gray-300',
                  children: [
                    (0, t.jsx)('p', {
                      children:
                        'While NextChess is fully functional, several enhancements are planned for future iterations:',
                    }),
                    (0, t.jsxs)('ul', {
                      children: [
                        (0, t.jsx)('li', {
                          children:
                            'Player rankings and ELO system for competitive play',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Tournament functionality with brackets and time controls',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Puzzle mode for chess training and skill improvement',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Opening book integration for learning standard chess openings',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Advanced analysis tools with position evaluation',
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
    var s = (s) => e((e.s = s));
    e.O(0, [874, 523, 535, 441, 684, 358], () => s(5688)), (_N_E = e.O());
  },
]);
