import { Profile, Story } from 'types/global';

export interface StoriesProps {
  ownerStories: Story[];
  profile_pic: string;
  followingStories: Story[];
}

export interface StoryViewerProps {
  handleShowStories: () => void;
  allUsersStories: AllUsersStories[][] | undefined;
}

export interface AllUsersStories {
  id: number | undefined;
  story: string | undefined;
  ownerId: number | undefined;
  isSelected: boolean;
  profile: Profile | undefined;
}
