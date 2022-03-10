import axios, { AxiosResponse } from 'axios';

export interface ResponseBody extends AxiosResponse<any, any> {
  data: any;
  status: number;
}

const baseURL = 'https://challenge-fielo.herokuapp.com';

export const authApi = axios.create({
  baseURL,
  headers: {
    'x-app-id':
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
  },
});

// export const contentApi = axios.create({
//   baseURL,
//   headers: {
//     'x-access-token': window.sessionStorage.getItem('auth') || '',
//   },
// });

const initialize = () => {
  return axios.create({
    baseURL,
    headers: {
      'x-access-token': window.sessionStorage.getItem('auth') || '',
    },
  });
};

export const wallPaper = axios.create({
  baseURL: 'https://www.bing.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const getWallpaper = () => {
  return wallPaper
    .post('/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US')
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const authorize = async () => {
  return authApi
    .post('/auth')
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getUsers = async () => {
  return initialize()
    .get('/users', {})
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getUserProfileById = async (userId: string) => {
  return initialize()
    .get(`/users/${userId}`)
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getUserActivitiesById = async (userId: string) => {
  return initialize()
    .get(`/users/${userId}/activities`)
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getAllPrograms = async () => {
  return initialize()
    .get('/programs')
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getProgramsById = async (userId: string) => {
  return initialize()
    .get(`/programs/${userId}`)
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getProgramsLevelsById = async (userId: string) => {
  return initialize()
    .get(`/programs/${userId}/levels`)
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};

export const getLevelsById = async (userId: string) => {
  return initialize()
    .get(`/levels/${userId}`)
    .then((response: ResponseBody) => Promise.resolve(response))
    .catch((err: string) => {
      console.error('ops! ocorreu um erro' + err);
    });
};
