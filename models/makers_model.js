const { Schema } = require('mongoose');
const mongoose = require('../utils/mongo_conex')
// Esquema de como seria el contenido de empresas

const makerSchema = {
    nombre: String,
    cip: String,
    direccion: String,
    juegos: [{type: Schema.ObjectId , ref: "Games"}]
};

// Crear el esquema
const maker = mongoose.Schema(makerSchema);
// Crear el modelo
const Makers = mongoose.model('Makers', maker);

module.exports = Makers;