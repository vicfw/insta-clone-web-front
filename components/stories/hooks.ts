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
    const userStories: Types.AllUsersStories[] | undefined = ownerStories?.map(
      (story) => ({
        id: story.id,
        story: story.story,
        ownerId: story.userId,
        isSelected: false,
      })
    );
    const flwingStories: Types.AllUsersStories[] | undefined =
      followingStories?.map((story) => ({
        id: story.id,
        story: story.story,
        ownerId: story.userId,
        isSelected: false,
      }));
    if (userStories || flwingStories) {
      const data = [...userStories, ...flwingStories];

      const finalData = [...new Set(data!.map((d) => d.ownerId))].map((label) =>
        data!.filter((d) => d.ownerId === label).map((d) => d)
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
