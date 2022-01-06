const routes = require('express').Router();
const controllerGames = require('../controllers/controllerApi');


routes.get("/games", controllerGames.getAllGames);
routes.get("/games/:name?", controllerGames.searchGameByName);
routes.get("/games/:company?", controllerGames.searchGameByCompany);


module.exports = routes;