import axios from "axios";


const Getcourses = require('axios');


// Equivalent to `axios.get('https://httpbin.org/get?answer=42')`
const res = await axios.get('http://127.0.0.1:3000/course', { params: { desc: Content.desc } });

res.data.args; // { answer: 42 }

export default Getcourses;