let Teacher = require('../model/teacher');

let assignmentsToAdd = require('../data/data_teacher.json');

function peuplerbdd(req, res) {
    console.log("Peuplement de la bdd ...");
    addTeacher(assignmentsToAdd);
    res.status(200).send({message : "La bdd est peuplé !"});
}

function addTeacher(tab) {
    tab.forEach(element => {
        let newTeacher = new Teacher();

        newTeacher.id = element.id;
        newTeacher.nom = element.nom;
        newTeacher.prenom = element.prenom;
        newTeacher.image_id = element.image_id;

        newTeacher.save((err) => {
            if (err) {
                console.log('cant save teacher ', err);
            } else {
                console.log('saving teacher ' + newTeacher.id);
            }
        })
    })
}

module.exports = { peuplerbdd };