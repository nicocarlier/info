'use client';

import { extendVariants } from '@heroui/react';
import Link from 'next/link';
import { Tooltip } from '@heroui/tooltip';

const CustomLink = extendVariants(Link, {
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
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isDisabled: false,
  },
  compoundVariants: [
    {
      isDisabled: true,
      class: 'hover:bg-none',
    },
  ],
});

// export default ProjectLink;

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  className?: string;
  target?: string;
}

const ProjectLink = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  className = '',
  ...props
}: ProjectLinkProps) => {
  const link = (
    <CustomLink
      href={href}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
      className={`rounded-md ${className}`}
      {...props}
    >
      {children}
    </CustomLink>
  );

  if (isDisabled) {
    return (
      <Tooltip
        content={
          <div className="dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300">
            App is currently not being hosted
          </div>
        }
        classNames={{
          content:
            'dark:bg-gray-100 bg-coal-950 dark:text-gray-900 text-coal-100 transition-colors duration-300',
        }}
      >
        <div className="flex">{link}</div>
      </Tooltip>
    );
  }

  return link;
};

export default ProjectLink;
