import axios from "axios";

const courseClient = axios.create({
  
  baseURL: "https://roj18241cb.execute-api.ap-south-1.amazonaws.com/Prod",
});

export default courseClient;