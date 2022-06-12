import gql from 'graphql-tag';

export const FOLLOW_USER = gql`
  mutation followUser($followedUserId: Int!, $userId: Int!) {
    followUser(
      createFollowing: { followedUserId: $followedUserId, userId: $userId }
    ) {
      userId
      id
      followedUserId
    }
  }
`;
