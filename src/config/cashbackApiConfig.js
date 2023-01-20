export const cashbackApiConfig = (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};
