import { ReactElement } from 'react';
import { Story, User } from './global';

export interface HomePropTypes {
  children: ReactElement<any, any>;
}

export interface MainPagePropTypes {
  currentUser: User;
  stories: Story[];
}
