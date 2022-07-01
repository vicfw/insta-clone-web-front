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
  following: [{ id: 0, userId: 0, followedUserId: 0 }],
  follower: [{ id: 0, userId: 0, followerUserId: 0 }],
  stories: {
    id: 0,
    story: '',
    userId: 0,
    profile: {
      id: 0,
      profile_pic: '',
      name: '',
    },
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
