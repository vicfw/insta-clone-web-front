import { gql } from '@apollo/client';

export const GET_STORIES = gql`
  query getStories($id: [Int!]!) {
    userStories(id: $id) {
      story
      userId
      user {
        username
      }
      profile {
        profile_pic
        name
      }
    }
  }
`;
