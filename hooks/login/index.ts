import { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { SingletonRouter } from 'next/router';
import { SIGNIN } from 'gql/mutations/signIn';
import ErrorHandler from 'utils/ErrorHandler';

export const useSlider = () => {
  let slideIndex = 0;
  const imageSlider = () => {
    const images = document.querySelectorAll(
      '.image'
    )! as NodeListOf<HTMLDivElement>;

    let i;

    for (i = 0; i < images.length; i++) {
      images[i].classList.remove('show');
    }

    slideIndex++;

    if (slideIndex > images.length) {
      slideIndex = 1;
    }

    images[slideIndex - 1]?.classList.add('show');

    setTimeout(imageSlider, 5000);
  };

  useEffect(() => {
    imageSlider();
  }, []);

  return {};
};

export const useUserInterface = (routerProp: SingletonRouter) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [error, setError] = useState('');

  console.log(error);

  useEffect(() => {
    if (Object.keys(routerProp.query).length !== 0) {
      setIsCompleted(true);
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword((curr) => !curr);
  };

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleCloseSnackbar = () => {
    setIsCompleted(false);
  };

  const [createLink, data] = useMutation(SIGNIN, { onError: () => {} });

  const handleCreateUser = () => {
    createLink({
      variables: {
        email,
        password,
      },
    })
      .then((dt) => {
        if (dt.errors) {
          setError(ErrorHandler(dt));
          return;
        }
        const token = dt.data.singinUser.accessToken;
        localStorage.setItem('token', token);
      })
      .catch((e) => {});
  };

  return {
    values: {
      showPassword,
      password,
      email,
      isCompleted,
      error,
    },
    setValues: {},
    functions: {
      handleClickShowPassword,
      handleChangeEmail,
      handleChangePassword,
      handleCreateUser,
      handleCloseSnackbar,
    },
  };
};
