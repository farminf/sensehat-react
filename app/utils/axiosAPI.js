var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://192.168.1.75:5000/api',
  /* other custom settings */
});

module.exports = axiosInstance;