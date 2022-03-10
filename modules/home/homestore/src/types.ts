import { Action } from 'redux';

export enum ActionTypes {
  SAVE_JWT_TOKEN = 'SAVE_JWT_TOKEN',
  RESET_PASSWORD_PENDING_VERIFICATION = 'VALIDATE_ANTI_FRAUD_QUESTION_SUCCESS',
}

export interface User {
  balance: UserBalance;
  id: string;
  image: string;
  name: string;
}

export interface Activity {
  id: string;
  date: string;
  description: string;
}

export interface Programs {
  id: string;
  name: string;
}

export interface ProgramLevels {
  id: string;
  order: number;
  name: string;
  programId: string;
  description: string;
}

export interface UserBalance {
  currency: number;
  miles: number;
  points: number;
}

interface OnSaveJWTToken extends Action {
  type: typeof ActionTypes.SAVE_JWT_TOKEN;
  payload: string;
}

interface OnSaveJWTToken22 extends Action {
  type: typeof ActionTypes.SAVE_JWT_TOKEN;
  payload: string;
}

export type AppStoreActionTypes = OnSaveJWTToken | OnSaveJWTToken22;
