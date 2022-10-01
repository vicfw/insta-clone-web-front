import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation createPost($caption: String!, $image: String!) {
    createPost(createStory: { caption: $caption, image: $image }) {
      id
      caption
      image
      created_at
    }
  }
`;
