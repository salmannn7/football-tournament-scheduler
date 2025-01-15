const scores = require('../controllers/scoresControllers');
const authorization = require ("../Middleware/Middlware");

module.exports = function(app){

    app.route("/tournaments/:tournament_id/scores") 
   
    
    // Get all scores for a team in a tournament
    .get(scores.getAllScoresOfTournament)
    // Add a new score for a team in a tournament
    .post(scores.addScore);
    app.route("/scores/:score_id")
    .get(scores.getScore)
    // Update a score for a team in a tournament
    .patch(authorization.isAuthaenticated,scores.updateScore)
    // Delete a score for a team in a tournament
    .delete(authorization.isAuthaenticated,scores.deleteScore);

}
    