const routes = require('express').Router();
const controllerGames = require('../controllers/controllerApi');


routes.get("/games", controllerGames.getAllGames);
routes.get("/games/:nombre?", controllerGames.searchGameByName);
routes.get("/games/:empresa?", controllerGames.searchGameByCompany);


module.exports = routes;