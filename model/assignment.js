let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let AssignmentSchema = Schema({
    id: Number,
    nom: String,
    dateDeRendu: Date,
    matiere_id: Number,
    enseignant_id: Number,
    note : Number,
    student_id:Number,
    rendu: Boolean,
    comment: String
});

AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
