import { gql } from '@apollo/client';

export const GET_CURRENT_USER_BY_USERNAME = gql`
  query findOneUserByUsername($username: String!) {
    getOneUserByUsername(username: $username) {
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
