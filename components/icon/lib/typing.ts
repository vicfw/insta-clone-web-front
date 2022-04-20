import { CSSProperties } from 'react';

export type Icon = 'home' | 'direct' | 'add_post' | 'location' | 'heart';

export interface IconProps {
  name: Icon;
  size?: number;
  color?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}
