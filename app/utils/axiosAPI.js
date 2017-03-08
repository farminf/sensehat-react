var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://localhost/api',
  /* other custom settings */
});

module.exports = axiosInstance;