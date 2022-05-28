import React, { createContext, Dispatch, useReducer } from 'react';
import { UserType } from './types';
import * as Type from './types';
import { userReducer } from './userReducer';

const initialState = {
  id: 0,
  email: '',
  username: '',
  profile: {
    id: 0,
    profile_pic: '',
    name: '',
  },
  description: '',
  followers: [],
  following: [],
  story: {
    id: 0,
    stories: [],
  },

  loading: false,
};

const UserContext = createContext<{
  dispatch: Dispatch<Type.Action>;
  state: UserType;
}>({
  dispatch: () => {},
  state: initialState,
});

const ContextProvider = ({ children, client }: any) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
