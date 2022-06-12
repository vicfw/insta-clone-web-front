export interface Following {
  id: number;
  followedUserId: number;
  userId: number;
}

export interface Followers {
  id: number;
  followerUserId: number;
  userId: number;
}

export interface User {
  id: number;
  email: string;
  username: string;
  profile: {
    id: number;
    profile_pic: string;
    name: string;
  };
  description: string;

  story: {
    id: number;
    stories: string[];
  };

  following: Following[];
  follower: Followers[];
}
