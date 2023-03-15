import axios from "axios";

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const register = async (data) => {
    const { data: result } = await authInstance.post('/users/signup', data)
    return result
}

export default authInstance;