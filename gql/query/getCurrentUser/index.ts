import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
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
        id
        story
        userId
        profile {
          id
          profile_pic
          name
        }
      }

      following {
        id
        userId
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
