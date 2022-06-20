import { gql } from '@apollo/client';

export const REMOVE_FOLLOWING = gql`
  mutation removeFollowing($id: Int!) {
    removeFollowing(id: $id) {
      id
    }
  }
`;

export const REMOVE_FOLLOWER = gql`
  mutation removeFollower($id: Int!) {
    removeFollower(id: $id) {
      id
    }
  }
`;
