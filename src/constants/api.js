import axios from 'axios'

const api = axios.create({
// baseURL:'http://66.29.149.122:3001',
baseURL: 'https://gutmanfoods.unitdtechnologies.com:3002',
//baseURL: 'http://localhost:3001',
});


// const loginApi = axios.create({
//   baseURL: 'https://art-cause.com:3003'
// });


export default api