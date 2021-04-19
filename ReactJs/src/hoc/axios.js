import axios from "axios";

const instance = axios.create({
  baseURL: "https://pizza.intellemind.com",
});

export default instance;
