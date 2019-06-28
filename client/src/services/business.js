import axios from "axios";

axios.defaults.headers = {
  "Content-Type": " application/json"
};

export const getAllBus = () => {
  return axios
    .get("http://localhost:3000/api/business/getAll")
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const createBus = data => {
  return axios
    .post("http://localhost:3000/api/business/addBusiness", data)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const getByCat = (id, data) => {
  return axios
    .get(`http://localhost:3000/api/business/getByCategory/${id}`, data)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const editbus = (id, data) => {
  return axios
    .patch(`http://localhost:3000/api/business/${id}/edit`, data)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
