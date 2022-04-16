import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation SignUp($email: String!, $password: String!, $username: String!) {
    signUp(
      signupUser: { email: $email, password: $password, username: $username }
    ) {
      id
      email
      password
      image_uri
      description
      followers
      following
      username
    }
  }
`;
