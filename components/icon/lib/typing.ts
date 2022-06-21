import { CSSProperties } from 'react';

export type Icon =
  | 'home'
  | 'direct'
  | 'add_post'
  | 'location'
  | 'heart'
  | 'media'
  | 'back-arrow'
  | 'profile'
  | 'close';

export interface IconProps {
  name: Icon;
  size?: number;
  color?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}
