let Assignment = require('../model/assignment');

let assignmentsToAdd = require('../data/data.json');

function peuplerbdd(req, res) {
    console.log("Peuplement de la bdd ...");
    addAssignments(assignmentsToAdd);
    res.status(200).send({message : "La bdd est peuplé !"});
}

function addAssignments(tab) {
    tab.forEach(element => {
        let newAssignment = new Assignment();

        const currentDate = new Date();
        const twoMonthsFromNow = new Date();
        twoMonthsFromNow.setMonth(currentDate.getMonth() + 2);
        const randomDate = new Date(currentDate.getTime() + Math.random() * (twoMonthsFromNow.getTime() - currentDate.getTime()));

        newAssignment.id = element.id;
        newAssignment.nom = element.nom;
        newAssignment.dateDeRendu = randomDate;
        newAssignment.rendu = element.rendu;
        newAssignment.matiere_id = element.matiere_id;
        newAssignment.enseignant_id = element.enseignant_id;
        newAssignment.comment = element.comment;
        newAssignment.note = element.note;
        newAssignment.auteur_id = element.auteur_id;

        newAssignment.save((err) => {
            if (err) {
                console.log('cant save assignment ', err);
            } else {
                console.log('saving assignment ' + newAssignment.id);
            }
        })
    })
}

module.exports = { peuplerbdd };