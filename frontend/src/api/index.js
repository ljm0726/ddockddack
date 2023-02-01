import axios from "axios";

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    // baseURL: process.env.VUE_APP_API_BASE_URL,
    // headers: {
    //   "Content-Type": "application/json;charset=utf-8",
    // },
    // headers: {
    //   "Content-Type": "multipart/form-data", //넣어도 되고 안넣어도 되고
    // },
  });
  return instance;
}

export { apiInstance };