import { Axios } from "axios";

const axios = new Axios({
  baseURL: "http://localhost:8000",
  responseType: "json",
  transformResponse: [
    function transformResponse(data) {
      return JSON.parse(data);
    }
  ]
});

export default axios;
