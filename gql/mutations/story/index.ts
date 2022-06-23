import { gql } from '@apollo/client';

export const CREATE_STORY = gql`
  mutation createStory($story: String!, $userId: Int!, $profileId: Int!) {
    createStory(
      createStory: { story: $story, userId: $userId, profileId: $profileId }
    ) {
      id
    }
  }
`;
