export interface UserType {
  id: number;
  email: string;
  username: string;
  image_uri: string;
  description: string;
  followers: number[];
  following: number[];
  loading: boolean;
}
