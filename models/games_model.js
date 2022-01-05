const { Schema } = require('mongoose');
const mongoose = require('../utils/mongo_conex')
// Esquema de como seria el contenido de los juegos
const gameSchema = {
    nombre: String,
    img: String,
    relevancia: String,
    precio: String,
    empresa: { type: Schema.ObjectId, ref: "Makers"}
};
// Crear el esquema
const Games = mongoose.Schema(gameSchema);
// Crear el modelo
const games = mongoose.model('Games', Games);

module.exports = games;