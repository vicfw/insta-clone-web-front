import { User } from 'types/global';
import * as Type from './types';

export const userReducer = (state: User, action: Type.Action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;

    default:
      return state;
  }
};
