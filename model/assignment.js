let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    matiere_id: Number,
    enseignant_id: Number,
    rendu: Boolean,
    note : Number,
    auteur_id:Number,
    comment: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignments', AssignmentSchema, 'Assignments');
