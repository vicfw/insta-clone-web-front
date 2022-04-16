import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation SignIn($email: String!, $password: String!) {
    singinUser(signInUserInput: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
