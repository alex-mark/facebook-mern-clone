import axios from "axios";

export const baseURL = "https://fb-mern-clone-alex.herokuapp.com";

const instance = axios.create({
  // baseURL: "http://localhost:9000",
  baseURL: baseURL,
});

export default instance;
