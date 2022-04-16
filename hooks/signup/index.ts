import { useMutation } from '@apollo/client';
import { useState } from 'react';
import * as Graphql from 'gql/mutations/singup';
import ErrorHandler from 'utils/ErrorHandler';
import { FlareSharp } from '@mui/icons-material';
import { useRouter } from 'next/router';

export const useSignup = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const handleClickShowPassword = () => {
    setShowPassword((curr) => !curr);
  };

  const handleChangeUserName = (value: string) => {
    setUserName(value);
  };
  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const [createLink, data] = useMutation(Graphql.SIGNUP, {
    onError: (err) => {},
  });

  const handleCreateUser = () => {
    setLoading(true);
    createLink({
      variables: {
        email,
        password,
        username,
      },
    })
      .then((dt) => {
        setLoading(false);

        if (dt.errors) {
          setError(ErrorHandler(dt));
          return;
        }
        router.push({
          pathname: '/login',
          query: 'completed',
        });
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  return {
    values: {
      showPassword,
      password,
      email,
      username,
      error,
    },
    setValues: {},
    functions: {
      handleClickShowPassword,
      handleChangeEmail,
      handleChangePassword,
      handleChangeUserName,
      handleCreateUser,
    },
    loading,
  };
};
