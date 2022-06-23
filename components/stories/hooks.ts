import { useState } from 'react';

export const useStories = () => {
  const [showStories, setShowStories] = useState(false);

  const handleShowStories = () => {
    setShowStories((perval) => !perval);
  };

  return {
    get: {
      showStories,
    },
    on: {
      handleShowStories,
    },
  };
};
