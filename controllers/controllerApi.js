const Makers = require('../models/makers_model');
const Games = require('../models/games_model');



const getAllGames = (req,res) => {
    try {
        Games.find({}, (err, games) => {
            Makers.populate(games, {path: "empresa"}, (err,games) => {
                res.status(200).json(games)
            })
        });
    } catch(err) {
        res.send("ERROR");
    }
}


const searchGameByName = (req,res) => {
    try {
        if (req.query.nombre){
            Games.find({ "nombre": req.query.nombre }, (err, games) => {
                Makers.populate(games, {path: "empresa"}, (err,games) => {
                    res.status(200).json(games)
                })
            });
            res.json(data);
        } else  if (req.query.nombre) {
            Makers.find({ "nombre" : req.query.nombre }, (err, games) => {
                Games.populate(games, {path: "juegos"}, (err,games) => {
                    res.status(200).json(games)
                })
            });
        }
    } catch (err) {
        res.send("ERROR")
    }
}


const allFunctions = {
    getAllGames,
    searchGameByName,
};

module.exports = allFunctions;