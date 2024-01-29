let Teacher = require('../model/teacher');
const Assignment = require("../model/assignment");

// Récupérer tous les assignments (GET)
function getTeachers(req, res){
    const aggregateQuery = Assignment.aggregate();

    Teacher.aggregatePaginate(
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

module.exports = { getTeachers };
