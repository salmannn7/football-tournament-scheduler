const tournaments = require("../controllers/tournamentsControllers");
const authorization = require ("../Middleware/Middlware");
const tournamentsModels = require("../models/tournamentsModels");

module.exports = function(app){

    app.route("/tournaments") 
    .get(tournaments.getAll)
    .post(tournaments.create);

    app.route("/tournaments/:tournament_id")
    .get(tournaments.getOne)
    .patch(authorization.isAuthaenticated,tournaments.updateTournament)
    .delete(authorization.isAuthaenticated,tournaments.deleteTournament);
}