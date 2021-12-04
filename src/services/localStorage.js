export const setLocalStorage = (data, id) => {
  localStorage.setItem(id, JSON.stringify(data));
}

export const loadLocalStorage = (id) => {
  const data = localStorage.getItem(id);
  return JSON.parse(data);
}

export const clearLocalStorage = () => {
  localStorage.clear();
}