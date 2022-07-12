import { useEffect, useState } from 'react';
import { Story } from 'types/global';
import * as Types from './types';

export const useStories = (
  ownerStories: Story[],
  followingStories: Story[]
) => {
  const [showStories, setShowStories] = useState(false);
  const [allUserStories, setAllUserStories] = useState<
    Types.AllUsersStories[][] | undefined
  >([]);

  const handleShowStories = () => {
    setShowStories((perval) => !perval);
  };

  useEffect(() => {
    const combineStories = [...ownerStories, ...followingStories];
    const stories = combineStories.map((story) => {
      return {
        id: story.id,
        story: story.story,
        ownerId: story.userId,
        isSelected: false,
        profile: story.profile,
        created_at: story.created_at,
        updated_at: story.updated_at,
      };
    });

    if (stories.length) {
      const finalData = [...new Set(stories!.map((d) => d.ownerId))].map(
        (label) => stories!.filter((d) => d.ownerId === label).map((d) => d)
      );

      setAllUserStories(finalData);
    }
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
