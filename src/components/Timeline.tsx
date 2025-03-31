'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaGraduationCap,
  FaBriefcase,
  FaGlobeAmericas,
  FaCode,
} from 'react-icons/fa';

interface TimelineEvent {
  date: string;
  title: string;
  description: string | string[];
  type: 'education' | 'work' | 'travel' | 'project';
  location?: string;
}

const Timeline = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(currentDate);

  const events: TimelineEvent[] = [
    {
      date: `March 2024 - ${currentMonth} ${currentYear} (Present)`,
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
      date: 'Septemper 2023 - March 2024',
      title: 'Part-time software engineer at Couplr AI & Side Projects',
      description: [
        'Worked with an AI Financial analyst pairing app creating integrations with CRM tools',
        'Open source contributions to multiple projects including accessibilty features for Apache Superset',
        'Working on a side projects like Next.js Chess app and studying DS&A',
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
        'Early childhood lived abroad in Vietnam, attended a French speaking international kindergarten',
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
      // description: 'Beginning of life journey',
      description: '',
      type: 'travel',
      location: 'Washington DC, USA',
    },
  ];

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return <FaGraduationCap />;
      case 'work':
        return <FaBriefcase />;
      case 'travel':
        return <FaGlobeAmericas />;
      case 'project':
        return <FaCode />;
    }
  };

  const getIconStyle = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'education':
        return { background: '#2563eb', color: '#fff', fontSize: '24px' };
      case 'work':
        return { background: '#16a34a', color: '#fff', fontSize: '24px' };
      case 'travel':
        return { background: '#8b5cf6', color: '#fff', fontSize: '24px' };
      case 'project':
        return { background: '#eab308', color: '#fff', fontSize: '24px' };
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-coal-950 py-12 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-coal-100 mb-8">
        My Journey
      </h2>
      <VerticalTimeline animate={true} lineColor="currentColor">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={event.date}
            dateClassName="text-gray-600 dark:text-coal-300 md:text-lg"
            contentStyle={{
              background: 'var(--timeline-background)',
              color: 'var(--timeline-text)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid var(--timeline-background)',
            }}
            iconStyle={getIconStyle(event.type)}
            icon={getIcon(event.type)}
            visible={true}
          >
            <h3 className="text-gray-900 dark:text-white vertical-timeline-element-title font-bold text-xl mb-1">
              {event.title}
            </h3>
            {event.location && (
              <h4 className="text-gray-600 dark:text-gray-400 vertical-timeline-element-subtitle mb-2">
                {event.location}
              </h4>
            )}
            <div className="text-gray-700 dark:text-gray-300">
              {Array.isArray(event.description) ? (
                <ul className="list-disc list-inside space-y-1">
                  {event.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{event.description}</p>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
