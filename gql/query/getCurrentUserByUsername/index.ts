import { gql } from '@apollo/client';

export const GET_CURRENT_USER_BY_USERNAME = gql`
  query findOneUserByUsername($username: String!) {
    getOneUserByUsername(username: $username) {
      id
      email
      username
      description
      profile {
        id
        profile_pic
        name
      }
      stories {
        story
      }
      following {
        userId
        id
        followedUserId
      }

      follower {
        id
        userId
        followerUserId
      }
    }
  }
`;
