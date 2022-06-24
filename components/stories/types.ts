import { Story } from 'types/global';

export interface StoriesProps {
  ownerStories: Story[];
  profile_pic: string;
  followingStories: Story[];
}

export interface StoryViewerProps {
  handleShowStories: () => void;
}
