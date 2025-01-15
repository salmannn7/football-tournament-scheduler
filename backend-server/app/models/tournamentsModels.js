const db = require('../../database.js');

const getAllTournaments = (done) => {
  const results = [];

  db.each(

      "SELECT * FROM tournaments",
      [],
      
      (err, row) => {
          if(err) console.log("Something went wrong: " + err);

          results.push({
              tournament_id: row.tournament_id,
              tournament_name: row.tournament_name,
          });
      },
      (err, num_rows) => {
          return done(err, num_rows, results);
      }
  )

}

const addNewTournament = (tournament, done) => {

  const sql = 'INSERT INTO tournaments (tournament_name) VALUES (?)';
  let values = [tournament.tournament_name];

  db.run(
      sql,
      values,
      function(err){
         if(err) return done(err, null);

         return done(null, this.lastID);
      }
  )

};

const getSingleTournament = (id, done) =>{
  const sql ='SELECT * FROM tournaments WHERE tournament_id=?'

  db.get(sql,[id],(err,row)=>{
      if (err) return done(err)
      if (!row) return done(404)

      return done(null, {
          tournament_id: row.tournament_id,
          tournament_name: row.tournament_name,
          
      })
  })
}
const updateTournament = (id, tournament, done) =>{
    
  const sql = 'UPDATE tournaments SET tournament_name = ? WHERE tournament_id=?';
  let values = [tournament.tournament_name,id]

  db.run(sql,values,(err)=>{
      
      return done(err)
  })

}

const deleteTournament=(id,done) =>{
  const sql = 'DELETE FROM tournaments WHERE tournament_id=?'
  db.run(sql,[id],(err)=>{
      if (err) return done(err)

      return done(null);
}
  )}

module.exports ={
  getAllTournaments: getAllTournaments,
  addNewTournament: addNewTournament,
  getSingleTournament:getSingleTournament,
  updateTournament:updateTournament,
  deleteTournament:deleteTournament
}