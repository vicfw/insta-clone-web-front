import { User } from 'types/global';

export interface UserType extends User {}

export interface Action {
  type: string;
  payload: any;
}

export const SET_USER = 'SET_USER';
