import axios from 'axios';
const baseUrl = 'https://trello.com/c/6abUSJ35/51-home-screen-display-sections-and-courses-from-the-backend-service';

// Passing configuration object to axios
axios({
  method: 'get',
  url: `${baseUrl}/api/users/1`,
}).then((response) => {
  console.log(response.data);
});

// Invoking get method to perform a GET request
axios.get(`${baseUrl}/api/users/1`).then((response) => {
  console.log(response.data);
});