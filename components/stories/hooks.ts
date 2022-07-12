import { useEffect, useState } from 'react';
import { Story } from 'types/global';

export const useStories = (ownerStories:Story[],followingStories:Story[]) => {
  const [showStories, setShowStories] = useState(false);
  const [allUserStories,setAllUserStories] = useState<{id:number|undefined,story:string|undefined}[] | undefined  >([])

  const handleShowStories = () => {
    setShowStories((perval) => !perval);
  };

  useEffect(()=>{ 
      const userStories = ownerStories?.map(story=>({id:story.id,story:story.story}))
      const flwingStories = followingStories?.map(story=>({id:story.id,story:story.story}))
      if(userStories || flwingStories) setAllUserStories([...userStories,...flwingStories])
  
  },[])

  console.log(allUserStories,"allUserStories ");
  

  return {
    get: {
      showStories,
    },
    on: {
      handleShowStories,
    },
  };
};
