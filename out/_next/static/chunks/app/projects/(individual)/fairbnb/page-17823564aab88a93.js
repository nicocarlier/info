(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [155],
  {
    1469: (e, a, s) => {
      'use strict';
      Object.defineProperty(a, '__esModule', { value: !0 }),
        !(function (e, a) {
          for (var s in a)
            Object.defineProperty(e, s, { enumerable: !0, get: a[s] });
        })(a, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return l;
          },
        });
      let t = s(8229),
        i = s(8883),
        r = s(3063),
        n = t._(s(1193));
      function l(e) {
        let { props: a } = (0, i.getImgProps)(e, {
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
        for (let [e, s] of Object.entries(a)) void 0 === s && delete a[e];
        return { props: a };
      }
      let c = r.Image;
    },
    6193: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { default: () => l });
      var t = s(5155),
        i = s(2115),
        r = s(6766),
        n = s(6883);
      function l() {
        let [e, a] = (0, i.useState)(0),
          s = [
            '/projects/fairbnb/fairbnb-square.webp',
            '/projects/fairbnb-map.webp',
            '/projects/fairbnb-booking.webp',
          ];
        return (0, t.jsxs)('main', {
          className: 'max-w-screen-md px-4 mx-auto space-y-12 md:px-0 ',
          children: [
            (0, t.jsxs)('section', {
              className: 'space-y-6',
              children: [
                (0, t.jsx)('h1', { children: 'Fairbnb' }),
                (0, t.jsx)('p', {
                  className: 'text-xl text-coal-300 dark:text-gray-300',
                  children:
                    'A comprehensive full-stack Airbnb clone built with React/Redux frontend and Ruby on Rails backend, featuring Google Maps integration and AWS S3 for media storage.',
                }),
                (0, t.jsxs)('div', {
                  className: 'flex space-x-4',
                  children: [
                    (0, t.jsx)(n.default, {
                      href: 'https://fairbnb-36c07c3f3067.herokuapp.com/',
                      variant: 'primary',
                      target: '_blank',
                      isDisabled: !0,
                      children: 'Live Demo',
                    }),
                    (0, t.jsx)(n.default, {
                      href: 'https://github.com/nicocarlier/Fairbnb',
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
                      style: { backgroundImage: 'url('.concat(s[e], ')') },
                    }),
                    (0, t.jsx)('div', {
                      className:
                        'relative h-full flex items-center justify-center',
                      children: (0, t.jsx)(r.default, {
                        priority: !0,
                        alt: 'Fairbnb dashboard',
                        src: s[e],
                        className: 'object-contain max-h-full',
                        fill: !0,
                        sizes: '(max-width: 768px) 100vw, 768px',
                        quality: 95,
                      }),
                    }),
                    (0, t.jsx)('div', {
                      className:
                        'absolute bottom-4 left-0 right-0 flex justify-center space-x-2',
                      children: s.map((s, i) =>
                        (0, t.jsx)(
                          'button',
                          {
                            className: 'w-3 h-3 rounded-full '.concat(
                              e === i
                                ? 'bg-blue-600'
                                : 'bg-gray-400 hover:bg-gray-300'
                            ),
                            onClick: () => a(i),
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
                    'Fairbnb is a full-stack web application that meticulously emulates the Airbnb experience, allowing users to discover, explore, and book accommodations with ease. The platform combines a responsive React/Redux frontend with a Ruby on Rails backend to deliver a seamless and intuitive user experience.',
                }),
                (0, t.jsx)('p', {
                  className: 'text-coal-300 dark:text-gray-300',
                  children:
                    "I prioritized data integrity and user experience by implementing robust encapsulation principles, ensuring that users can only review properties they've stayed at, preventing post-experience booking modifications, and enforcing homeowner-defined constraints for all reservations.",
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
                          children: 'Backend',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            "Built with Ruby on Rails for its convention-over-configuration paradigm, accelerating development and providing excellent scalability for growing user bases. Rails' robust structure is particularly well-suited for platforms like Fairbnb that anticipate expanding data needs.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Database',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'PostgreSQL database with Active Record ORM, ensuring data integrity and enabling complex operations through object-oriented database interactions. This pairing excels at maintaining critical relational data like user profiles, property listings, and booking records.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'Frontend',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'React.js with Redux for state management, creating a dynamic and modular UI with predictable state updates and reusable components. This architecture promotes code reusability and efficient rendering, essential for the interactive features that define the Fairbnb experience.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h3', {
                          className:
                            'text-xl font-semibold text-coal-200 dark:text-gray-200',
                          children: 'APIs & Libraries',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'Integrated Google Maps API for interactive location visualization, Date Range Picker for intuitive booking calendar functionality, and AWS S3 for optimized media storage and delivery, enhancing performance without compromising on functionality.',
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
                          children: 'User Authentication',
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
                                    'Secure account management with CSRF protection and encrypted passwords',
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
                                    'Intelligent email routing for streamlined signup/login flow',
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
                                    'Comprehensive password strength validation with real-time feedback',
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
                                    'Demo user access for quick platform exploration',
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
                          children: 'Property Discovery',
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
                                    'Interactive map integration with Google Maps API',
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
                                    'Keyword search functionality for targeting specific amenities or locations',
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
                                    'Immersive photo slideshows for comprehensive property previews',
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
                                    'Expandable property descriptions and user reviews',
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
                          children: 'Booking System',
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
                                    'Interactive booking calendar with Date Range Picker integration',
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
                                    'Real-time availability updates and conflict prevention',
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
                                    'Dynamic pricing calculations based on duration and property rates',
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
                                    'Comprehensive booking management interface for users',
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
                          children: 'Review System',
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
                                    'Post-stay review creation with data integrity validation',
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
                                    'Encapsulated review system allowing only verified guests to leave reviews',
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
                                    'Rating system with detailed feedback categories',
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
                      children: 'Date Handling Across Time Zones',
                    }),
                    (0, t.jsxs)('p', {
                      className: 'text-coal-300 dark:text-gray-300',
                      children: [
                        'When handling booking dates between the frontend and backend, timezone inconsistencies created significant challenges. Dates saved in the database as',
                        ' ',
                        (0, t.jsx)('code', {
                          className:
                            'bg-coal-700/50 dark:bg-gray-700/50 px-1.5 py-0.5 rounded text-xs',
                          children: 'yyyy-mm-dd',
                        }),
                        ' ',
                        "strings would lose timezone data, causing potential date shifts when displayed in the user's browser.",
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'space-y-2',
                      children: [
                        (0, t.jsx)('h4', {
                          className:
                            'font-medium text-coal-200 dark:text-gray-200',
                          children: 'Solution: UTC Standardization',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            "I implemented a bidirectional conversion system that standardizes all dates to UTC before storage and converts them back to the user's local timezone upon retrieval:",
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'bg-coal-800 dark:bg-gray-900 p-4 rounded-md',
                          children: (0, t.jsx)('pre', {
                            className:
                              'text-sm text-coal-300 dark:text-gray-300 overflow-x-auto',
                            children:
                              'export const convertLocalDateToUTC = (inputDate) => {\n    const parts = inputDate.split("/");\n    const day = parseInt(parts[1], 10);\n    const month = parseInt(parts[0], 10);\n    const year = parseInt(parts[2], 10);\n    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n    const localDate = DateTime.fromObject({ day, month, year }).setZone(timeZone);\n    const utcDate = localDate.toUTC();\n    return utcDate.toFormat(\'dd/MM/yyyy\');\n}\n\nexport const UTCDateBooking = (booking) => {\n    return {...booking, \n        startDate: convertLocalDateToUTC(booking.startDate), \n        endDate: convertLocalDateToUTC(booking.endDate) \n    }\n}',
                          }),
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300 mt-2',
                          children:
                            'This approach ensures consistent date handling regardless of user location or timezone settings, maintaining data integrity throughout the booking lifecycle.',
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
                          children: 'User Authentication Flow',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The authentication system intelligently routes users to either signup or login based on email recognition, provides real-time validation feedback, and offers a streamlined demo user option for quick exploration.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(r.default, {
                            alt: 'User authentication demonstration',
                            src: '/projects/UserAuth.webp',
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
                          children: 'Interactive Map Integration',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The Google Maps integration allows users to browse available properties geographically, with custom-styled markers and infoWindows providing property previews directly from the map interface.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(r.default, {
                            alt: 'Interactive map demonstration',
                            src: '/projects/map-view.webp',
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
                          children: 'Booking Calendar System',
                        }),
                        (0, t.jsx)('p', {
                          className: 'text-coal-300 dark:text-gray-300',
                          children:
                            'The booking system utilizes a customized Date Range Picker to offer an intuitive date selection experience, with automatic availability checking and dynamic pricing calculations.',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'relative w-full aspect-video rounded-lg overflow-hidden bg-coal-800 dark:bg-gray-900',
                          children: (0, t.jsx)(r.default, {
                            alt: 'Booking calendar demonstration',
                            src: '/projects/booking-calendar.webp',
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
                        'Building Fairbnb provided valuable experience in full-stack development with a focus on data integrity and user experience. Key learnings included:',
                    }),
                    (0, t.jsxs)('ul', {
                      children: [
                        (0, t.jsx)('li', {
                          children:
                            'Implementing proper encapsulation principles to maintain data integrity is crucial for booking platforms',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Managing date and time data requires thorough consideration of timezone implications',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Integrating third-party APIs like Google Maps and AWS S3 significantly enhances functionality while requiring thoughtful implementation',
                        }),
                        (0, t.jsx)('li', {
                          children:
                            'Custom styling third-party components (like Date Range Picker) often requires creative approaches to override default behaviors',
                        }),
                        (0, t.jsx)('li', {
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
    6766: (e, a, s) => {
      'use strict';
      s.d(a, { default: () => i.a });
      var t = s(1469),
        i = s.n(t);
    },
    6883: (e, a, s) => {
      'use strict';
      s.d(a, { default: () => o });
      var t = s(5155),
        i = s(6634),
        r = s(6874),
        n = s.n(r),
        l = s(172);
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
              href: a,
              children: s,
              variant: i = 'primary',
              size: r = 'md',
              isDisabled: n = !1,
              className: o = '',
              ...d
            } = e,
            x = (0, t.jsx)(c, {
              href: a,
              variant: i,
              size: r,
              isDisabled: n,
              className: 'rounded-md '.concat(o),
              ...d,
              children: s,
            });
          return n
            ? (0, t.jsx)(l.I, {
                content: (0, t.jsx)('div', {
                  className:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                  children: 'App is currently not being hosted',
                }),
                classNames: {
                  content:
                    'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
                },
                children: (0, t.jsx)('div', { className: 'flex', children: x }),
              })
            : x;
        };
    },
    8286: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 6193));
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [874, 523, 535, 441, 684, 358], () => a(8286)), (_N_E = e.O());
  },
]);
