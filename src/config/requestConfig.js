export const requestConfig = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};
