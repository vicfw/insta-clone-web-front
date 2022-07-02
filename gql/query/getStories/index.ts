import { gql } from '@apollo/client';

export const GET_STORIES = gql`
  query getStories($id: [Int!]!) {
    userStories(id: $id) {
      id
      story
      userId
      created_at
      updated_at
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
