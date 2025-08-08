(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [155],
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
      let i = a(8229),
        t = a(8883),
        n = a(3063),
        l = i._(a(7470));
      function r(e) {
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
      let c = n.Image;
    },
    3878: (e, s, a) => {
      Promise.resolve().then(a.bind(a, 6193));
    },
    6193: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { default: () => l });
      var i = a(5155),
        t = a(2115),
        n = a(6766);
      function l() {
        let [e, s] = (0, t.useState)(0),
          a = [
            '/projects/fairbnb/fairbnb-square.webp',
            '/projects/fairbnb-map.webp',
            '/projects/fairbnb-booking.webp',
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
                    (0, i.jsx)('h1', { children: 'Fairbnb' }),
                    (0, i.jsxs)('div', {
                      className:
                        'w-fit bg-coal-100 dark:bg-coal-800 py-1 px-2 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-coal-400 dark:text-gray-400',
                      children: [
                        (0, i.jsxs)('div', {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0, i.jsx)('span', {
                              className: 'font-medium',
                              children: 'Created:',
                            }),
                            (0, i.jsx)('span', { children: 'August 2023' }),
                          ],
                        }),
                        (0, i.jsxs)('div', {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0, i.jsx)('span', {
                              className: 'font-medium',
                              children: 'Duration:',
                            }),
                            (0, i.jsx)('span', { children: '3 weeks' }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)('p', {
                  className: 'text-xl',
                  children:
                    'A comprehensive full-stack Airbnb clone built with React/Redux frontend and Ruby on Rails backend, featuring Google Maps integration and AWS S3 for media storage.',
                }),
                (0, i.jsxs)('div', {
                  className:
                    'relative w-full aspect-video rounded-lg overflow-hidden ',
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
                        alt: 'Fairbnb dashboard',
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
                    'Fairbnb is a full-stack web application that meticulously emulates the Airbnb experience, allowing users to discover, explore, and book accommodations with ease. The platform combines a responsive React/Redux frontend with a Ruby on Rails backend to deliver a seamless and intuitive user experience.',
                }),
                (0, i.jsx)('p', {
                  className: '',
                  children:
                    "I prioritized data integrity and user experience by implementing robust encapsulation principles, ensuring that users can only review properties they've stayed at, preventing post-experience booking modifications, and enforcing homeowner-defined constraints for all reservations.",
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
                          className: 'text-xl font-semibold',
                          children: 'Backend',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            "Built with Ruby on Rails for its convention-over-configuration paradigm, accelerating development and providing excellent scalability for growing user bases. Rails' robust structure is particularly well-suited for platforms like Fairbnb that anticipate expanding data needs.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'text-xl font-semibold',
                          children: 'Database',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'PostgreSQL database with Active Record ORM, ensuring data integrity and enabling complex operations through object-oriented database interactions. This pairing excels at maintaining critical relational data like user profiles, property listings, and booking records.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'text-xl font-semibold',
                          children: 'Frontend',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'React.js with Redux for state management, creating a dynamic and modular UI with predictable state updates and reusable components. This architecture promotes code reusability and efficient rendering, essential for the interactive features that define the Fairbnb experience.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'text-xl font-semibold ',
                          children: 'APIs & Libraries',
                        }),
                        (0, i.jsx)('p', {
                          className: '',
                          children:
                            'Integrated Google Maps API for interactive location visualization, Date Range Picker for intuitive booking calendar functionality, and AWS S3 for optimized media storage and delivery, enhancing performance without compromising on functionality.',
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
                        'bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'font-semibold text-lg mb-3',
                          children: 'User Authentication',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'space-y-3 text-sm',
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
                                    'Secure account management with CSRF protection and encrypted passwords',
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
                                    'Intelligent email routing for streamlined signup/login flow',
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
                                    'Comprehensive password strength validation with real-time feedback',
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
                                    'Demo user access for quick platform exploration',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'font-semibold text-lg mb-3',
                          children: 'Property Discovery',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'space-y-3 text-sm',
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
                                    'Interactive map integration with Google Maps API',
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
                                    'Keyword search functionality for targeting specific amenities or locations',
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
                                    'Immersive photo slideshows for comprehensive property previews',
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
                                    'Expandable property descriptions and user reviews',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'font-semibold text-lg mb-3',
                          children: 'Booking System',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'space-y-3 text-sm',
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
                                    'Interactive booking calendar with Date Range Picker integration',
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
                                    'Real-time availability updates and conflict prevention',
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
                                    'Dynamic pricing calculations based on duration and property rates',
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
                                    'Comprehensive booking management interface for users',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)('div', {
                      className:
                        'bg-coal-200 dark:bg-gray-800/50 dark:text-coal-200 text-coal-800  p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow',
                      children: [
                        (0, i.jsx)('h3', {
                          className: 'font-semibold text-lg mb-3',
                          children: 'Review System',
                        }),
                        (0, i.jsxs)('ul', {
                          className: 'space-y-3 text-sm',
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
                                    'Post-stay review creation with data integrity validation',
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
                                    'Encapsulated review system allowing only verified guests to leave reviews',
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
                                    'Rating system with detailed feedback categories',
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
                                    'Property listing review display with expandable details',
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
              className: 'space-y-4',
              children: [
                (0, i.jsx)('h2', { children: 'Development Insights' }),
                (0, i.jsxs)('div', {
                  className: 'prose prose-sm max-w-none dark:text-coal-200',
                  children: [
                    (0, i.jsx)('p', {
                      children:
                        'Building Fairbnb provided valuable experience in full-stack development with a focus on data integrity and user experience. Key learnings included:',
                    }),
                    (0, i.jsxs)('ul', {
                      children: [
                        (0, i.jsx)('li', {
                          children:
                            'Implementing proper encapsulation principles to maintain data integrity is crucial for booking platforms',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Managing date and time data requires thorough consideration of timezone implications',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Integrating third-party APIs like Google Maps and AWS S3 significantly enhances functionality while requiring thoughtful implementation',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'Custom styling third-party components (like Date Range Picker) often requires creative approaches to override default behaviors',
                        }),
                        (0, i.jsx)('li', {
                          children:
                            'A well-designed Redux store architecture is essential for managing complex application state in a predictable manner',
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
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [63, 441, 684, 358], () => s(3878)), (_N_E = e.O());
  },
]);
