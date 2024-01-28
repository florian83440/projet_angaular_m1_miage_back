let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
function getAssignments(req, res){

    let matchConditions = {};

    if (req.query.rendu !== undefined && req.query.rendu != "") {
        const rendu = req.query.rendu === "true";

        matchConditions.rendu = rendu;
    }

    if (req.query.enseignant_id !== undefined) {
        const enseignant_id = req.query.enseignant_id;

        matchConditions.enseignant_id = parseInt(enseignant_id);
    }

    if (req.query.matiere_id !== undefined) {
        const matiere_id = req.query.matiere_id;

        matchConditions.matiere_id = parseInt(matiere_id);
    }

    const aggregateQuery = Assignment.aggregate([
        {
            $match: matchConditions
        }
    ]);

    Assignment.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10
        },
        (err, assignments) => {
            if (err){
                res.send(err);
            }
            res.send(assignments);
        }
    )
}

// Récupérer un assignment par son id (GET)
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){res.send(err)}
        res.json(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res){
    console.log('POST');
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.nom = req.body.nom;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.rendu = req.body.rendu;
    assignment.matiere_id = req.body.matiere_id;
    assignment.enseignant_id = req.body.enseignant_id;
    assignment.comment = req.body.comment;
    assignment.note = req.body.note;
    assignment.auteur_id = req.body.auteur_id;

    console.log("POST assignment reçu :");
    console.log(assignment)

    assignment.save( (err) => {
        if(err){
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${assignment.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.json({message: 'updated'})
        }

        // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${assignment.nom} deleted`});
    })
}



module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };
