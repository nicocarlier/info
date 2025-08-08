(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [621],
  {
    3125: (e, t, a) => {
      'use strict';
      a.d(t, { D: () => l, ThemeProvider: () => o });
      var i = a(5155),
        r = a(2115);
      let n = (0, r.createContext)({ theme: null, toggleTheme: () => null });
      function o(e) {
        let { children: t } = e,
          [a, o] = (0, r.useState)(!1),
          [l, s] = (0, r.useState)('dark');
        return ((0, r.useEffect)(() => {
          o(!0);
          let e = localStorage.getItem('theme') || 'dark';
          s(e), (document.documentElement.className = e);
        }, []),
        a)
          ? (0, i.jsx)(n.Provider, {
              value: {
                theme: l,
                toggleTheme: () => {
                  let e = 'dark' === l ? 'light' : 'dark';
                  s(e),
                    localStorage.setItem('theme', e),
                    (document.documentElement.className = e);
                },
              },
              children: t,
            })
          : (0, i.jsx)(i.Fragment, { children: t });
      }
      function l() {
        let e = (0, r.useContext)(n);
        if (!e) throw Error('useTheme must be used within ThemeProvider');
        return e;
      }
    },
    3586: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => h });
      var i = a(5155),
        r = a(6183),
        n = a(2115),
        o = a(760),
        l = a(2992);
      a(7917);
      var s = a(9911),
        c = a(2940),
        d = a.n(c),
        m = a(3125);
      let u = [
          {
            key: 'inventive-ai',
            date: 'March 2024 - Present',
            title: 'Software Engineer at Inventive AI (Y-Combinator)',
            description: [
              'Working with a YC-backed startup on AI agents for sales workflow automation',
              'Architected scalable knowledge management systems',
              'Implemented real-time collaboration features with WebSocket integration',
              'Built data visualization dashboards for monitoring system metrics',
            ],
            type: 'work',
            location: 'Mountain View, CA',
          },
          {
            date: 'March 2024',
            title: 'Moved to California',
            description: ['Moved to Mountain View, CA to join Inventive AI'],
            type: 'travel',
            location: 'Mountain View, CA',
          },
          {
            date: 'September 2023 - March 2024',
            title: 'Part-time software engineer at Couplr AI & Side Projects',
            description: [
              'Worked with an AI Financial analyst pairing app creating integrations with CRM tools',
              'Open source contributions to multiple projects including accessibility features for Apache Superset',
              'Working on side projects like Next.js Chess app and studying DS&A',
            ],
            type: 'work',
            location: 'Remote',
          },
          {
            date: 'May 2023 - September 2023',
            title: 'App Academy',
            description: [
              'Full-Stack Software Engineering Bootcamp',
              'Intensive training in algorithms, data structures, and software architecture',
              'Developed full-stack applications with focus on scalability',
            ],
            type: 'education',
            location: 'San Francisco',
          },
          {
            date: 'November 2022 - May 2023',
            title: 'Project Engineer at Aroa Biosurgery',
            description: [
              'Worked on various projects for the manufacturing of biomedical devices',
              'Wrote programs to iteratively solve for optimal linkage lengths and angles in machinery',
            ],
            type: 'work',
            location: 'Auckland, New Zealand',
          },
          {
            date: 'February 2019 - November 2022',
            title: 'University of Auckland',
            description: [
              'Bachelor of Engineering (Honours) in Mechanical Engineering',
              'Bachelor of Commerce (Economics and Finance)',
              'Best Mechanical Engineering Project Final Year Project Award (2022)',
              'Published research on autonomous UAV control systems',
            ],
            type: 'education',
            location: 'Auckland, New Zealand',
          },
          {
            date: '2014 - 2018',
            title: 'Saint Kentigern College',
            description: [
              'NCEA Level 3 Excellence Endorsed',
              'NCEA Physics Scholarship award',
              'Academic Honours (2017, 2018)',
            ],
            type: 'education',
            location: 'Auckland, New Zealand',
          },
          {
            date: '2005',
            title: 'Settled in New Zealand',
            description:
              'Relocated to New Zealand, where early interest in mathematics and physics developed',
            type: 'travel',
            location: 'New Zealand',
          },
          {
            date: '2001 - 2005',
            title: 'Living in Vietnam',
            description:
              'Early childhood lived abroad in Hanoi, Vietnam, attended a French speaking international kindergarten',
            type: 'travel',
            location: 'Vietnam',
          },
          {
            date: '2000 - 2001',
            title: 'Caribbean Adventures',
            description:
              'As a baby, spent half a year living aboard a boat in the Caribbean',
            type: 'travel',
            location: 'Caribbean',
          },
          {
            date: 'December 26, 2000',
            title: 'Born in Washington DC',
            description: '',
            type: 'travel',
            location: 'Washington DC, USA',
          },
        ],
        p = () => {
          let { theme: e } = (0, m.D)(),
            [t, a] = (0, n.useState)('all'),
            [c, p] = (0, n.useState)(!1),
            h = d()(),
            g = h.format('YYYY'),
            x = h.format('MMMM');
          (0, n.useEffect)(() => {
            p(!0);
          }, []);
          let b = u.map((e) =>
              (null == e ? void 0 : e.key) === 'inventive-ai'
                ? {
                    ...e,
                    date: 'March 2024 - '
                      .concat(x, ' ')
                      .concat(g, ' (Present)'),
                  }
                : e
            ),
            y = (e) =>
              (0, i.jsx)('div', {
                className: 'flex items-center justify-center w-full h-full',
                children: (0, i.jsx)(() => {
                  switch (e) {
                    case 'education':
                      return (0, i.jsx)('div', {
                        className: 'h-5 w-5',
                        children: (0, i.jsx)(s.YNd, {}),
                      });
                    case 'work':
                      return (0, i.jsx)('div', {
                        className: 'h-5 w-5',
                        children: (0, i.jsx)(s._yv, {}),
                      });
                    case 'travel':
                      return (0, i.jsx)('div', {
                        className: 'h-5 w-5',
                        children: (0, i.jsx)(s.Eh_, {}),
                      });
                    case 'project':
                      return (0, i.jsx)('div', {
                        className: 'h-5 w-5',
                        children: (0, i.jsx)(s.FSj, {}),
                      });
                  }
                }, {}),
              }),
            f = (e) => {
              switch (e) {
                case 'education':
                  return {
                    background:
                      'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#fff',
                  };
                case 'work':
                  return {
                    background:
                      'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#fff',
                  };
                case 'travel':
                  return {
                    background:
                      'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                    color: '#fff',
                  };
                case 'project':
                  return {
                    background:
                      'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                    color: '#fff',
                  };
              }
            },
            v = (t) => {
              let a = {
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                padding: '1.5rem',
                border: 'none',
                backgroundColor: 'dark' === e ? '#1e1e1e' : 'white',
              };
              switch (t) {
                case 'education':
                  return { ...a, borderTop: '5px solid #3b82f6' };
                case 'work':
                  return { ...a, borderTop: '5px solid #10b981' };
                case 'travel':
                  return { ...a, borderTop: '5px solid #8b5cf6' };
                case 'project':
                  return { ...a, borderTop: '5px solid #fbbf24' };
              }
            },
            w = 'all' === t ? b : b.filter((e) => e.type === t),
            k = {
              all: 'bg-gray-700',
              education: 'bg-blue-600',
              work: 'bg-green-600',
              travel: 'bg-purple-600',
              project: 'bg-yellow-500',
            };
          return (0, i.jsx)('div', {
            className: 'py-10',
            children: (0, i.jsxs)('div', {
              className: 'container mx-auto ',
              children: [
                (0, i.jsx)('div', {
                  className: 'flex flex-wrap justify-center gap-3 mb-12',
                  children: Object.entries({
                    all: 'All',
                    education: 'Education',
                    work: 'Work',
                    travel: 'Travel',
                    project: 'Projects',
                  }).map((e) => {
                    let [n, o] = e;
                    return (0, i.jsxs)(
                      r.P.button,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        onClick: () => a(n),
                        className:
                          'px-4 py-2 rounded-full text-white transition-all duration-300 flex items-center gap-2 \n                  '.concat(
                            t === n
                              ? ''.concat(k[n], ' shadow-lg')
                              : 'bg-gray-400 dark:bg-gray-700'
                          ),
                        children: [
                          'all' !== n && y(n),
                          'all' === n && (0, i.jsx)(s.YsJ, {}),
                          o,
                        ],
                      },
                      n
                    );
                  }),
                }),
                (0, i.jsx)(o.N, {
                  children:
                    c &&
                    (0, i.jsx)(r.P.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.8 },
                      children: (0, i.jsx)(l.VerticalTimeline, {
                        animate: !0,
                        lineColor: 'var(--timeline-line, #e5e7eb)',
                        children: w.map((t, a) =>
                          (0, i.jsxs)(
                            l.VerticalTimelineElement,
                            {
                              className:
                                'vertical-timeline-element hover:scale-[1.02] transition-transform duration-300',
                              date: t.date,
                              dateClassName:
                                'text-gray-600 dark:text-gray-300 font-medium mr-4 ml-4',
                              contentStyle: v(t.type),
                              contentArrowStyle: {
                                borderRight: '10px solid '.concat(
                                  'dark' === e ? '#1e1e1e' : 'white'
                                ),
                              },
                              iconStyle: f(t.type),
                              icon: y(t.type),
                              visible: !0,
                              children: [
                                (0, i.jsx)('h3', {
                                  className:
                                    'text-gray-900 dark:text-white vertical-timeline-element-title font-bold text-xl mb-1',
                                  children: t.title,
                                }),
                                t.location &&
                                  (0, i.jsxs)('h4', {
                                    className:
                                      'text-gray-600 dark:text-gray-400 vertical-timeline-element-subtitle mb-3 flex items-center gap-1',
                                    children: [
                                      (0, i.jsx)('span', {
                                        className:
                                          'inline-block w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 mr-1',
                                      }),
                                      t.location,
                                    ],
                                  }),
                                (0, i.jsx)('div', {
                                  className:
                                    'text-gray-700 dark:text-gray-300 mt-4',
                                  children: Array.isArray(t.description)
                                    ? (0, i.jsx)('ul', {
                                        className: 'space-y-2',
                                        children: t.description.map((e, t) =>
                                          (0, i.jsxs)(
                                            'li',
                                            {
                                              className: 'flex items-start',
                                              children: [
                                                (0, i.jsx)('span', {
                                                  className:
                                                    'inline-block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 mr-2',
                                                }),
                                                e,
                                              ],
                                            },
                                            t
                                          )
                                        ),
                                      })
                                    : (0, i.jsx)('p', {
                                        children: t.description,
                                      }),
                                }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    }),
                }),
              ],
            }),
          });
        };
      function h() {
        return (0, i.jsxs)('main', {
          className: 'max-w-screen-md px-4 mx-auto space-y-16 md:px-0 pt-8',
          children: [
            (0, i.jsxs)('div', {
              className: 'text-center space-y-4',
              children: [
                (0, i.jsx)(r.P.h2, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5 },
                  className:
                    'text-4xl font-bold text-center text-gray-900 dark:text-white mb-2',
                  children: 'Life Journey',
                }),
                (0, i.jsx)(r.P.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.3, duration: 0.5 },
                  className:
                    'text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto',
                  children:
                    'A visual timeline of my professional and personal milestones',
                }),
              ],
            }),
            (0, i.jsx)(p, {}),
          ],
        });
      }
    },
    3614: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3586));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [244, 711, 586, 468, 441, 684, 358], () => t(3614)), (_N_E = e.O());
  },
]);
