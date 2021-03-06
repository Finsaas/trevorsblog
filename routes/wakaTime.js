var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
require('dotenv').load();

var url = 'https://wakatime.com/api/v1/users/current/stats/last_7_days/?api_key=' + process.env.WAKATIME_API;
fetchWaka = function(req, res){
	var wakaArray=[];
	
	populateWaka=function(w){
		wakaArray.push(w);
	},
	axios.get(url)
		.then(function(response){
			
			if(response){
				populateWaka(response);
			}
			var stats = wakaArray.map(function(waka){
				return{ "languages" : waka.data.data.languages }
				console.log(languages)
			})
			res.json(stats);
			console.log(stats);
			})
		
		.catch(function(response){
			console.log(response);
		});
}

module.exports = fetchWaka;