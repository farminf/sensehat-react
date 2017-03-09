var axiosAPI = require('./axiosAPI');

var helpers = { 
	getAmbientValues: function(){
		return axiosAPI.get('/ambient')
				.catch(function (err) {console.warn('Error in getAmbientValues: ', err)})

	},
	setLEDRGB: function(color){

	},
	setLEDMessage: function(message){
		
	}

}

module.exports = helpers;