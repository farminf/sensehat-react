var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://192.168.232.64:5000/api',
  /* other custom settings */
});

module.exports = axiosInstance;