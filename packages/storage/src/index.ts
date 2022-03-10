export const setItem = async (key: string, value: string) => {
  window.sessionStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};
