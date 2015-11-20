var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var url = 'https://api.twitter.com/TrevorFinsaas';
fetchTweets = function(req, res){
	
	axios.get(url)
		.then(function(response){
			var myTweets = response.data.slice(0,5).map(function(g){
				if(g.payload.commits){
				var coms = g.payload.commits.map(function(c){
					return{"message": c.message, "url": c.url}
					})
				}
				return{"id": g.id, "timeStamp": g.created_at, "repo": g.repo.name, "coms": coms}
				});
			res.json(myEvents);
		})
		.catch(function(response){
			console.log(response.data);
		});
}

module.exports = fetchTweets;