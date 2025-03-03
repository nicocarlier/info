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
  const events: TimelineEvent[] = [
    {
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
      date: 'February 2019 - November 2022',
      title: 'University of Auckland',
      description: [
        'Bachelor of Engineering (Honours) in Mechanical Engineering',
        'Bachelor of Commerce (Economics and Finance)',
        'GPA: 3.7',
        'Best Final Year Project Award (2022)',
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
      title: 'Move to New Zealand',
      description:
        'Relocated to New Zealand, where early interest in mathematics and physics developed',
      type: 'travel',
      location: 'New Zealand',
    },
    {
      date: '2004 - 2005',
      title: 'Living in Vietnam',
      description: 'Early childhood experience living abroad',
      type: 'travel',
      location: 'Vietnam',
    },
    {
      date: '2001 - 2004',
      title: 'Caribbean Adventures',
      description:
        'Early childhood spent living aboard a boat in the Caribbean',
      type: 'travel',
      location: 'Caribbean',
    },
    {
      date: 'December 26, 2000',
      title: 'Born in Washington DC',
      description: 'Beginning of life journey',
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
    <div className="bg-coal-950 py-12">
      <h2 className="text-3xl font-bold text-center text-coal-100 mb-8">
        My Journey
      </h2>
      <VerticalTimeline animate={true}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            date={event.date}
            dateClassName="text-coal-300 md:text-lg !text-white"
            contentStyle={{ background: '#1a1a1a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
            iconStyle={getIconStyle(event.type)}
            icon={getIcon(event.type)}
            visible={true}
          >
            <h3 className="!text-white vertical-timeline-element-title font-bold text-xl mb-1">
              {event.title}
            </h3>
            {event.location && (
              <h4 className="!text-gray-400 vertical-timeline-element-subtitle mb-2">
                {event.location}
              </h4>
            )}
            <div className="!text-gray-300">
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
