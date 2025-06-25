import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface IconWrapperProps extends IconBaseProps {
  Icon: IconType;
  className?: string;
  size?: string | number;
  color?: string;
  title?: string;
  [x: string]: any; // For any other props
}

export const IconWrapper = ({ Icon, className = '', ...props }: IconWrapperProps): JSX.Element => {
  // Type assertion to tell TypeScript that Icon is a valid JSX component
  return React.createElement(Icon as React.ComponentType<IconBaseProps>, {
    className,
    ...props
  });
};

export type { IconWrapperProps }; 