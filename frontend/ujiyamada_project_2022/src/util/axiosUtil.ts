import {Axios} from "axios";

const axios = new Axios({
    baseURL: "http://localhost:3003",
    responseType:"json",
    transformResponse: [
        function transformResponse(data, headers) {
          return JSON.parse(data);
        },
    ]
})

export default axios;