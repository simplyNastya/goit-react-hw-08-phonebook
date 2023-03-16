import axios from "axios";

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  if (token) {
    return authInstance.defaults.headers.authorization = `Bearer ${token}`
  } 

   authInstance.defaults.headers.authorization = '';
}

export const register = async (data) => {
  const { data: result } = await authInstance.post('/users/signup', data);
  setToken(result.token);
  return result
}

export const login = async (data) => {
  const { data: result } = await authInstance.post('/users/login', data);
  setToken(result.token);
  return result
}

export const logout = async () => {
  const { data: result } = await authInstance.post('/users/logout');
  setToken();
  return result
}

export default authInstance;