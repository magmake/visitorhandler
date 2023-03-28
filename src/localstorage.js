export const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
};

export const setToLocalStorage = (key, value) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
};
export const saveStylesToLocalStorage = (key, styles) => {
  const stylesJson = JSON.stringify(styles);
  localStorage.setItem(key, stylesJson);
};
