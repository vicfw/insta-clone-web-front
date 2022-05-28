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
  followers: number[];
  following: number[];
  story: {
    id: number;
    stories: string[];
  };
}
