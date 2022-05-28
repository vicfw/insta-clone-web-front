import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';
import React, { createContext, Dispatch, useEffect, useState } from 'react';
import { UserType } from './types';

const initialState = {
  id: 0,
  email: '',
  username: '',
  profile: {
    id: 0,
    profile_pic: '',
  },
  description: '',
  followers: [],
  following: [],
  story: {
    id: 0,
    stories: [],
  },
  name: '',
  loading: false,
};

const UserContext = createContext<{
  setUser: Dispatch<UserType>;
  user: UserType;
}>({
  setUser: () => {},
  user: initialState,
});

const ContextProvider = ({ children, client }: any) => {
  const [user, setUser] = useState<UserType>(initialState);

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
