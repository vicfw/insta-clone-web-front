import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      username
      image_uri
      description
      followers
      following
    }
  }
`;
