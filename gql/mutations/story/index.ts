import { gql } from '@apollo/client';

export const CREATE_STORY = gql`
  mutation createStory($story: String!, $userId: Int!) {
    createStory(createStory: { story: $story, userId: $userId }) {
      story
      userId
    }
  }
`;
