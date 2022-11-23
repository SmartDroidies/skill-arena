import axios from "axios";
import { API_URL } from "@env";

const courseClient = axios.create({
  baseURL: API_URL,
});

export default courseClient;
