import { action } from 'typesafe-actions';

export const saveUserToken = (userToken: string) =>
  action('SAVE_JWT_TOKEN', userToken);
