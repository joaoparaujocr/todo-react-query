import axios from "axios";
import * as changeCase from "change-case/keys";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000,
  transformResponse: (res) => {
    try {
      return changeCase.camelCase(JSON.parse(res), +Infinity);
    } catch {
      return res;
    }
  },
});

export default api;
