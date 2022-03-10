import { ActionTypes } from '.';
import { AppStoreActionTypes } from './types';

export interface AppStateType {
  userToken: string;
}

export const initialState = {
  userToken: '',
};

export const homeState = (
  state: AppStateType = initialState,
  action: AppStoreActionTypes
) => {
  switch (action.type) {
    case ActionTypes.SAVE_JWT_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};
