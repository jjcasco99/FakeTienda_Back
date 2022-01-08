const Makers = require('../models/makers_model');
const Games = require('../models/games_model');



// Con el metodo .populate() podemos ver los datos que vienen asociados el ObjectId asignados a la variable , en este caso 'empresa' y 'juegos'

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};



const getAllGames = async (req,res) => {
    try {
        const data = await Games.find({}).populate('empresa');
        res.status(200).json(data);
    } catch(err) {
        res.status(400)
    }
}


const searchGameByName = async(req,res) => {
    try {
        const regex = new RegExp(escapeRegex(req.params.nombre), 'gi')
        const data = await Games.find({ "nombre": regex }).populate("empresa");
        res.status(200).json(data);
    } catch (err) {
        res.send("ERROR")
    }
}

const searchGameByCompany = async(req,res) => {
    try {
        const regex = new RegExp(escapeRegex(req.params.empresa), 'gi')
        const data = await Makers.find({ "nombre": regex }).populate("juegos");
        res.status(200).json(data);
    } catch (err) {
        res.send("ERROR")
    }
}


const allFunctions = {
    getAllGames,
    searchGameByName,
    searchGameByCompany
};

module.exports = allFunctions;