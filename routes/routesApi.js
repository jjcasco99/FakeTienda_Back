const routes = require('express').Router();
const controllerGames = require('../controllers/controllerApi');


routes.get("/games", controllerGames.getAllGames);
routes.get("/games/search", controllerGames.searchGameByName);



module.exports = routes;