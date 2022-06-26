import { useEffect, useState } from 'react';
import { Story } from 'types/global';
import * as Types from './types';

export const useStories = (
  ownerStories: Story[],
  followingStories: Story[]
) => {
  const [showStories, setShowStories] = useState(false);
  const [allUserStories, setAllUserStories] = useState<
    Types.AllUsersStories[] | undefined
  >([]);

  const handleShowStories = () => {
    setShowStories((perval) => !perval);
  };

  useEffect(() => {
    const userStories = ownerStories?.map((story) => ({
      id: story.id,
      story: story.story,
      ownerId: story.userId,
    }));
    const flwingStories = followingStories?.map((story) => ({
      id: story.id,
      story: story.story,
      ownerId: story.userId,
    }));
    if (userStories || flwingStories)
      setAllUserStories([...userStories, ...flwingStories]);
  }, []);

  console.log(allUserStories, 'allUserStories ');

  return {
    get: {
      showStories,
      allUserStories,
    },
    on: {
      handleShowStories,
    },
  };
};
