import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      username
      description
      followers
      following
      profile {
        id
        profile_pic
      }
      story {
        stories
      }
    }
  }
`;
