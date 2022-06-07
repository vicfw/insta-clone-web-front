import { gql } from '@apollo/client';

export const SEARCH_USER = gql`
  query searchUser($username: String!) {
    searchByUsername(username: $username) {
      username
      id
      profile {
        profile_pic
        name    
      }
    }
  }
`;
