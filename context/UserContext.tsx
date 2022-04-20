import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';
import React, { createContext, useEffect, useState } from 'react';
import { UserType } from './types';

const initialState = {
  id: 0,
  email: '',
  username: '',
  image_uri: '',
  description: '',
  followers: [],
  following: [],
  loading: false,
};

const UserContext = createContext<UserType>(initialState);

const ContextProvider = ({ children, client }: any) => {
  const [user, setUser] = useState<UserType>(initialState);

  if (client) {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    useEffect(() => {
      setUser({ ...data?.getCurrentUser, loading });
    }, [data]);
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
