const express = require('express');
const router = express.Router();
const axios = require('axios').default;


router.get('/places/find/:name/forecasts', async function(req, res, next) {
	try{
		const response = (await axios.get(`https://api.meteo.lt/v1/places/${req.params.name}/forecasts/long-term`)).data;	
		res.json(response.forecastTimestamps[0].airTemperature);		
	} catch (error) {
		console.error(error);
	}	
});
module.exports = router;

