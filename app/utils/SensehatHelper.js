var axiosAPI = require('./axiosAPI');

var helpers = { 
	getAmbientValues: function(){
		return axiosAPI.get('/ambient')
				.catch(function (err) {console.warn('Error in getAmbientValues: ', err)})

	},
	setLEDRGB: function(color){
		return axiosAPI.get('/led/' + color)
				.catch(function (err) {console.warn('Error in setLEDRGB: ', err)})
	},
	setLEDMessage: function(message){
		return axiosAPI.post('/led' , {
					    "message": message
					  })
				.catch(function (err) {console.warn('Error in setLEDRGB: ', err)})
	}

}

module.exports = helpers;