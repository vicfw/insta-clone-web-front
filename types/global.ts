export interface User {
  id: number;
  email: string;
  username: string;
  image_uri: string;
  profile: {
    id: number;
    profile_pic: string;
  };
  description: string;
  followers: number[];
  following: number[];
  story: {
    id: number;
    stories: string[];
  };
}
