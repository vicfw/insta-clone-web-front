import { gql } from '@apollo/client';

export const CREATE_STORY = gql`
  mutation createStory($stories: String!, $userId: Int!) {
    createStory(createStory: { stories: $stories, userId: $userId }) {
      stories
      userId
    }
  }
`;
