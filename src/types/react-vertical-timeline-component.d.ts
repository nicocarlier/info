declare module 'react-vertical-timeline-component' {
  export const VerticalTimeline: React.FC<{
    className?: string;
    layout?: string;
    lineColor?: string;
    animate?: boolean;
    children?: React.ReactNode;
  }>;

  export const VerticalTimelineElement: React.FC<{
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    position?: string;
    style?: React.CSSProperties;
    visible?: boolean;
    children?: React.ReactNode;
  }>;
}

declare module 'react-vertical-timeline-component/style.min.css';
