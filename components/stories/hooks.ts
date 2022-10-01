import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Story } from 'types/global';
import imageAddress from 'utils/imageAddress';
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
        url: imageAddress(story.story as string),
        ownerId: story.userId,
        isSelected: false,
        profile: story.profile,
        created_at: story.created_at,
        updated_at: story.updated_at,
        header: {
          heading: story.profile?.name,
          profileImage: imageAddress(story.profile?.profile_pic as string),
        },
      };
    });

    if (stories.length) {
      const finalData = [...new Set(stories!.map((d) => d.ownerId))].map(
        (label) => stories!.filter((d) => d.ownerId === label).map((d) => d)
      );

      setAllUserStories(finalData);
    }
  }, []);

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
