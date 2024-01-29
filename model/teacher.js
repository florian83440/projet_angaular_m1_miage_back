let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let TeacherSchema = Schema({
    id: Number,
    nom: String,
    prenom: String,
    image_id: Number
});

TeacherSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Teacher', TeacherSchema);
