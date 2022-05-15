import { ReactElement } from 'react';

export interface HomePropTypes {
  children: ReactElement<any, any>;
}

export interface MainPagePropTypes {
  user: {
    id: number;
    email: string;
    username: string;
    image_uri: string;
    profile: {
      id: number;
      profile_pic: string;
    };
    description: string;
    followers: number[];
    following: number[];
    story: {
      id: number;
      stories: string[];
    };
  };
}
