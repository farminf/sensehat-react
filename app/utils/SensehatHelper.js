var axiosAPI = require('./axiosAPI');

var helpers = { 
	getAmbientValues: function(){
		return axiosAPI.get('/ambient')
				.catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})

	},
	setColorRGB: function(color){

	}

}

module.exports = helpers;