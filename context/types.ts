export interface UserType {
  id: number;
  email: string;
  username: string;
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
