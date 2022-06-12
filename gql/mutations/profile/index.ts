import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $profile_id: Int!
    $user_id: Int!
    $profile_pic: String
    $name: String
    $username: String!
    $description: String
  ) {
    updateProfile(
      updateProfileInput: {
        profile_id: $profile_id
        user_id: $user_id
        profile_pic: $profile_pic
        name: $name
        username: $username
        description: $description
      }
    ) {
      id
      email
      description
      username
      profile {
        profile_pic
        name
      }
    }
  }
`;
