(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    736: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 8983));
    },
    1469: (e, s, a) => {
      'use strict';
      Object.defineProperty(s, '__esModule', { value: !0 }),
        !(function (e, s) {
          for (var a in s)
            Object.defineProperty(e, a, { enumerable: !0, get: s[a] });
        })(s, {
          default: function () {
            return r;
          },
          getImageProps: function () {
            return c;
          },
        });
      let i = a(8229),
        t = a(8883),
        n = a(3063),
        l = i._(a(7470));
      function c(e) {
        let { props: s } = (0, t.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/info/_next/image/',
            loader: 'custom',
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, a] of Object.entries(s)) void 0 === a && delete s[e];
        return { props: s };
      }
      let r = n.Image;
    },
    6766: (e, s, a) => {
      'use strict';
      a.d(s, { default: () => t.a });
      var i = a(1469),
        t = a.n(i);
    },
    7470: (e, s, a) => {
      'use strict';
      function i(e) {
        let { src: s, width: a, quality: i } = e;
        if (!s.startsWith('/info/')) {
          let e = s.startsWith('/') ? s.slice(1) : s;
          return '/info/'.concat(e);
        }
        return s;
      }
      a.r(s), a.d(s, { default: () => i });
    },
    8983: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { default: () => l });
      var i = a(5155),
        t = a(2115),
        n = a(6766);
      function l() {
        let [e, s] = (0, t.useState)(0),
          a = [
            '/projects/chess-app/next-chess-square.webp',
            '/projects/chess-app-game.webp',
            '/projects/chess-app-mobile.webp',
          ];
        return (0, i.jsxs)('main', {
          className: 'max-w-screen-md px-4 mx-auto space-y-12 md:px-0 ',
          children: [
            (0, i.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, i.jsxs)('div', {
                  className: 'flex flex-col',
                  children: [
                    (0, i.jsx)('h1', { children: 'NextChess' }),
                    (0, i.jsxs)('div', {
                      className:
                        'w-fit bg-coal-100 dark:bg-coal-800 py-1 px-2 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-coal-500 dark:text-gray-400',
                      children: [
                        (0, i.jsxs)('div', {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0, i.jsx)('span', {
                              className: 'font-medium',
                              children: 'Created:',
                            }),
                            (0, i.jsx)('span', { children: 'April 2024' }),
                          ],
                        }),
                        (0, i.jsxs)('div', {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0, i.jsx)('span', {
                              className: 'font-medium',
                              children: 'Duration:',
                            }),
                            (0, i.jsx)('span', { children: '3.5 weeks' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)('p', {
                  className: 'text-xl ',
                  children:
                    'A full-stack chess platform built with Next.js and TypeScript, featuring real-time multiplayer gameplay, custom move validation engine, and responsive design for all devices.',
                }),
                (0, i.jsxs)('div', {
                  className:
                    'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-800',
                  children: [
                    (0, i.jsx)('div', {
                      className:
                        'absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110',
                      style: { backgroundImage: 'url('.concat(a[e], ')') },
                    }),
                    (0, i.jsx)('div', {
                      className:
                        'relative h-full flex items-center justify-center',
                      children: (0, i.jsx)(n.default, {
                        priority: !0,
                        alt: 'NextChess application',
                        src: a[e],
                        className: 'object-contain max-h-full',
                        fill: !0,
                        sizes: '(max-width: 768px) 100vw, 768px',
                        quality: 95,
                      }),
                    }),
                    (0, i.jsx)('div', {
                      className:
                        'absolute bottom-4 left-0 right-0 flex justify-center space-x-2',
                      children: a.map((a, t) =>
                        (0, i.jsx)(
                          'button',
                          {
                            className: 'w-3 h-3 rounded-full '.concat(
                              e === t
                                ? 'bg-blue-600'
                                : 'bg-gray-400 hover:bg-gray-300'
                            ),
                            onClick: () => s(t),
                            'aria-label': 'View image '.concat(t + 1),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)('section', {
              className: 'space-y-4',
              children: [
                (0, i.jsx)('h2', { children: 'Project Overview' }),
                (0, i.jsx)('p', {
                  className: '',
                  children:
                    'NextChess is a comprehensive chess platform that brings the classic game into the modern web era. Built with a focus on performance and user experience, it combines a custom chess engine with an intuitive interface to deliver an engaging gameplay experience for players of all skill levels.',
                }),
                (0, i.jsx)('p', {
                  className: '',
                  children:
                    'The application offers real-time multiplayer matches, AI opponents, game history tracking, and responsive design that adapts seamlessly to any device. By leveraging Next.js 14 and TypeScript, the platform ensures type safety and optimal performance while maintaining clean, maintainable code.',
                }),
              ],
            }),
            (0, i.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, i.jsx)('h2', { children: 'Technology Stack & Rationale' }),
                (0, i.jsxs)('div', {
                  className: 'space-y-6',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-600 dark:text-gray-200',
                          children: 'Frontend & Backend',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'Built with Next.js 14, leveraging its full-stack capabilities for server-side rendering, API routes, and seamless page transitions. TypeScript provides robust type safety throughout the codebase, reducing runtime errors and improving developer experience.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-500 dark:text-gray-200',
                          children: 'State Management',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'Redux manages application state, providing a predictable state container for complex chess logic, game history, and user interactions. This architecture ensures consistent state across components and enables features like game replay and move validation.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-500 dark:text-gray-200',
                          children: 'Styling & Responsiveness',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'Tailwind CSS combined with CSS modules creates a responsive and visually appealing interface. The design system adapts gracefully from mobile to desktop, maintaining usability and aesthetic consistency across all screen sizes.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-500 dark:text-gray-200',
                          children: 'Real-time Communication',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'WebSocket integration enables real-time multiplayer gameplay with minimal latency. Players experience smooth, responsive interactions during matches, enhancing the competitive nature of the game.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-500 dark:text-gray-200',
                          children: 'Deployment',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'Vercel platform provides seamless deployment with automatic preview environments for each pull request, ensuring high availability and performance for users worldwide.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, i.jsx)('h2', { children: 'Key Features' }),
                (0, i.jsxs)('div', {
                  className: 'grid gap-6 sm:grid-cols-2',
                  children: [
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'font-semibold text-black dark:text-white text-lg mb-3',
                          children: 'Custom Chess Engine',
                        }),
                        (0, i.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-900 dark:text-gray-300 text-sm',
                          children: [
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Hand-crafted move validation system with specialized piece classes',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'FEN notation support for game state serialization',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Advanced chess rules including en passant, castling, and promotion',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Comprehensive check and checkmate detection',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'font-semibold text-black dark:text-white text-lg mb-3',
                          children: 'Multiplayer & AI',
                        }),
                        (0, i.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-900 dark:text-gray-300 text-sm',
                          children: [
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Real-time multiplayer matches with WebSocket communication',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'AI opponents powered by Stockfish integration',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Multiple difficulty levels for AI gameplay',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Matchmaking system for finding online opponents',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'font-semibold text-black dark:text-white text-lg mb-3',
                          children: 'Interactive UI',
                        }),
                        (0, i.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-900 dark:text-gray-300 text-sm',
                          children: [
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Custom drag-and-drop system optimized for chess piece movement',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Visual move highlighting showing legal moves and captures',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Interactive move history with algebraic notation',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Game state indicators for check, checkmate, and draw conditions',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className:
                            'font-semibold text-black dark:text-white text-lg mb-3',
                          children: 'User Experience',
                        }),
                        (0, i.jsxs)('ul', {
                          className:
                            'space-y-3 text-coal-900 dark:text-gray-300 text-sm',
                          children: [
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Secure authentication via GitHub and Google OAuth',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Responsive design optimized for mobile, tablet, and desktop',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
                                  children:
                                    'Game history and statistics tracking',
                                }),
                              ],
                            }),
                            (0, i.jsxs)('li', {
                              className: 'flex items-start',
                              children: [
                                (0, i.jsx)('span', {
                                  className: 'text-blue-500 mr-2',
                                  children: '•',
                                }),
                                (0, i.jsx)('span', {
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
            (0, i.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, i.jsx)('h2', {
                  children: 'Technical Challenges & Solutions',
                }),
                (0, i.jsxs)('div', {
                  className:
                    'text-coal-900 dark:text-gray-200 bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4',
                  children: [
                    (0, i.jsx)('h3', {
                      className: 'text-xl font-semibold',
                      children: 'Performance Optimization',
                    }),
                    (0, i.jsx)('p', {
                      className: '',
                      children:
                        'One of the most significant challenges was managing component re-renders in the chessboard. With 64 squares and multiple pieces, even small state changes would trigger cascading re-renders, impacting performance and user experience.',
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h4', {
                          className: 'font-medium',
                          children: 'Problem: DragClone Excessive Re-rendering',
                        }),
                        (0, i.jsxs)('p', {
                          className: '',
                          children: [
                            'The',
                            ' ',
                            (0, i.jsx)('code', {
                              className:
                                'bg-coal-200 text-coal-800 dark:text-coal-200 dark:bg-coal-600 px-1.5 py-0.5 rounded text-xs',
                              children: 'DragClone',
                            }),
                            ' ',
                            "component's position state changes were causing unnecessary re-renders of all child components, even when using React's memoization techniques.",
                          ],
                        }),
                        (0, i.jsx)('div', {
                          className:
                            'bg-coal-800 dark:bg-gray-900 p-4 rounded-md',
                          children: (0, i.jsx)('pre', {
                            className:
                              'text-sm text-coal-100 dark:text-gray-300 overflow-x-auto',
                            children:
                              'const usePreviousProps = (props) => {\n    const ref = useRef();\n    useEffect(() => {\n        ref.current = props;\n    });\n    return ref.current; // Returns the previous props\n};',
                          }),
                        }),
                        (0, i.jsxs)('p', {
                          className: '',
                          children: [
                            'I implemented a custom hook to compare prop changes between renders, which helped identify',
                            ' ',
                            (0, i.jsx)('code', {
                              className:
                                'bg-coal-200 text-coal-800 dark:text-coal-200 dark:bg-coal-600 px-1.5 py-0.5 rounded text-xs',
                              children: 'playMoveIfValid',
                            }),
                            ' ',
                            'as the volatile prop. Further analysis revealed unstable dependencies in useCallback hooks for game state management functions.',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h4', {
                          className: 'font-medium',
                          children: 'Solution: Strategic Memoization',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'The solution involved multiple optimization techniques:',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'list-disc list-inside space-y-1 ml-4',
                          children: [
                            (0, i.jsx)('li', {
                              children:
                                'Ensuring dependency stability in useCallback and useMemo hooks',
                            }),
                            (0, i.jsx)('li', {
                              children:
                                'Implementing React.memo for chess square components with custom comparison functions',
                            }),
                            (0, i.jsx)('li', {
                              children:
                                'Separating drag state management from board rendering logic',
                            }),
                            (0, i.jsx)('li', {
                              children:
                                'Using useRef for position tracking to avoid unnecessary state updates',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)('div', {
                  className:
                    'text-coal-900 dark:text-gray-200 bg-coal-800/30 dark:bg-gray-800/30 p-6 rounded-lg space-y-4',
                  children: [
                    (0, i.jsx)('h3', {
                      className: 'text-xl font-semibold ',
                      children: 'Chess Logic Implementation',
                    }),
                    (0, i.jsx)('p', {
                      className: '',
                      children:
                        "Building a robust chess engine required careful consideration of the game's complex rules, particularly for special moves like castling and detecting check/checkmate conditions.",
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h4', {
                          className: 'font-medium ',
                          children: 'Object-Oriented Design with Inheritance',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'I implemented a class-based structure for chess pieces, using inheritance and composition to share common behaviors while allowing piece-specific move logic:',
                        }),
                        (0, i.jsx)('div', {
                          className:
                            'bg-coal-800 dark:bg-gray-900 p-4 rounded-md',
                          children: (0, i.jsx)('pre', {
                            className:
                              'text-sm text-coal-100 dark:text-gray-300 overflow-x-auto',
                            children:
                              'import { inherit } from \'./inherit.js\';\nimport { Piece } from \'./piece.js\';\nimport { Slideable } from \'./slideable.js\';\n\nconst DIRS = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];\n\nexport function Queen(color, square, board) {\n    this.pieceName = "queen";\n    this.type = color.slice(0,1) + "_" + this.pieceName;\n    Piece.call(this, color, square, board);\n    this.slideable = new Slideable(board);\n    this.fenChar = color === "white" ? "Q" : "q";\n}\n\ninherit(Piece, Queen);\n\nQueen.prototype.pieceMoves = function(pos = this.getPos()) {\n    const color = this.getColor();\n    const [options, takeOptions] = this.slideable.calculateMoves(color, pos, DIRS);\n    return [options, takeOptions];\n}',
                          }),
                        }),
                        (0, i.jsx)('p', {
                          className: 'mt-2',
                          children:
                            'This approach allowed for efficient code reuse while maintaining the unique movement patterns of each chess piece. The Slideable composition pattern was particularly effective for handling the line-based movements of queens, rooks, and bishops.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)('section', {
              className: 'space-y-4 ',
              children: [
                (0, i.jsx)('h2', { children: 'Development Insights' }),
                (0, i.jsxs)('div', {
                  className: 'prose prose-sm max-w-none dark:text-coal-100',
                  children: [
                    (0, i.jsx)('p', {
                      children:
                        'Building NextChess provided valuable experience in both frontend and game development. Key learnings included:',
                    }),
                    (0, i.jsxs)('ul', {
                      children: [
                        (0, i.jsx)('li', {
                          children:
                            'Performance optimization is critical for interactive applications, especially those with complex state management',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Object-oriented design principles translate effectively to JavaScript/TypeScript when building complex systems',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'FEN notation provides an elegant solution for chess game state serialization',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'WebSockets enable truly real-time experiences that traditional HTTP requests cannot match',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Careful component architecture planning pays dividends when scaling application features',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)('section', {
              className: 'space-y-4',
              children: [
                (0, i.jsx)('h2', { children: 'Future Enhancements' }),
                (0, i.jsxs)('div', {
                  className: 'prose prose-sm max-w-none dark:text-coal-100',
                  children: [
                    (0, i.jsx)('p', {
                      children:
                        'While NextChess is fully functional, several enhancements are planned for future iterations:',
                    }),
                    (0, i.jsxs)('ul', {
                      children: [
                        (0, i.jsx)('li', {
                          children:
                            'Player rankings and ELO system for competitive play',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Tournament functionality with brackets and time controls',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Puzzle mode for chess training and skill improvement',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Opening book integration for learning standard chess openings',
                        }),
                        (0, i.jsx)('li', {
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
    e.O(0, [63, 441, 684, 358], () => s(736)), (_N_E = e.O());
  },
]);
