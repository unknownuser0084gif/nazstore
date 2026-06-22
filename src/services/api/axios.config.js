import axios from "axios"

const axiosInstance = axios.create({
       baseURL: "https://nazstore.mbahri.ir/api/v1/example-url",
       // baseURL: "http://localhost:80/Bahri-Shop-Api/",
       timeout: 3000,
       headers: {
              "Content-Type": "application/json"
       }
});

// before send request
function onFullFieldRequest(config) {
       // console.log(config);
       return config; // important!
}
function onRejectedRequest(error) {
       // console.log(error);
       return Promise.reject(error); // important!
}
axiosInstance.interceptors.request.use(onFullFieldRequest , onRejectedRequest);

// after get respnse 
function onFullFieldResponse(config) {
       // console.log(config);
       return config; // important!
}
function onRejectedResponse(error) {
       // console.log(error);
       return Promise.reject(error); // important!
}
axiosInstance.interceptors.response.use(onFullFieldResponse , onRejectedResponse)

export default axiosInstance;