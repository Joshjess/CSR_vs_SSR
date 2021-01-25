import axios from 'axios';

export default axios.create({
  baseURL: `https://csr-vs-ssr-api.herokuapp.com`,
});
