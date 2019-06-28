import axios from "axios";

axios.defaults.headers = {
  "Content-Type": " application/json"
};

export const register = auth => {
  return axios
    .post("http://localhost:3000/api/auth/register", auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const login = auth => {
  return axios
    .post("http://localhost:3000/api/auth/login", auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response;
    });
};
