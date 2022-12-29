import axios from "axios";
import { API_URL } from "@env";

const courseClient = axios.create({
  baseURL: API_URL.trim(),
});

courseClient.interceptors.request.use((request) => {
  // replace console with our logger of choice
  console.log("Request Base & Url : ", request.baseURL, request.url);
  // console.log(request);
  return request;
});

courseClient.interceptors.response.use(
  (response) => {
    // console.log("Response : ", response);
    return response;
  },
  (error) => {
    console.log(error);
  }
);

export default courseClient;
