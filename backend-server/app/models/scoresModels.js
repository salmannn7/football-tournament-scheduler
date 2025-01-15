const db = require("../../database");

// Get score for a team in a tournament
const getScore = (id, done) => {
  const sql = "SELECT * FROM scores WHERE score_id=?";

  db.get(sql, [id], (err, row) => {
      if(err) return done(err)
      if(!row) return done(404)

      return done(null, {
        score_id: row.score_id,
        score: row.score,
        team_name: row.team_name,
        tournament_id: row.tournament_id
      })
  })
}



// Get all scores for a tournament
const getAllScoresOfTournament = (id, done) => {
  const results = [];

  db.each(
    "SELECT * FROM scores WHERE tournament_id = ?",
    [id],
    (err, row) => {
      if (err) console.log("Something went wrong: " + err);

      results.push({
        score_id: row.score_id,
        score: row.score,
        team_name: row.team_name,
      });
    },
    (err, num_rows) => {
      return done(err, num_rows, results);
    }
  );
};

// Add a new score
const addScore = (score, tournament, done) => {

  const sql = "INSERT INTO scores (score, team_name, tournament_id) VALUES (?,?,?)"
  let values = [score.score, score.team_name, tournament.tournament_id];

  db.run(
      sql,
      values,
      function(err){
          if(err) return done(err, null);

          return done(null, this.lastID);
      }
  )
}

// Update an existing score
const updateScore = (team_id, tournament_id, newScore, done) => {
  const sql = "UPDATE scores SET score = ? WHERE team_id = ? AND tournament_id = ?";
  const values = [newScore, team_id, tournament_id];

  db.run(sql, values, (err) => {
    if (err) return done(err);

    return done(null);
  });
};

// Delete a score
const deleteScore =(team_id,done) =>{

  getScore(team_id,(err,results)=>{
      if(err===404) {
          
          return done(err)
      }
      else{
          const sql = 'DELETE FROM teams WHERE team_id=?'
          db.run(sql,[team_id],(err)=>{
              if (err) return done(err)
      
              return done(null);
          })

      }
  })

  }


module.exports = {
  getScore: getScore,
  getAllScoresOfTournament: getAllScoresOfTournament,
  addScore: addScore,
  updateScore: updateScore,
  deleteScore: deleteScore,
};
