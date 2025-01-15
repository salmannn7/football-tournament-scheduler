const teams = require('../controllers/teamsControllers');
const authorization = require ("../Middleware/Middlware");

module.exports = function(app){

    app.route("/tournaments/:tournament_id/teams") 
    .get(teams.getAllFromTournament)
    .post(teams.create);

    app.route("/teams/:team_id")
    .delete(authorization.isAuthaenticated,teams.deleteTeam)
    .get(teams.getOne);

}

