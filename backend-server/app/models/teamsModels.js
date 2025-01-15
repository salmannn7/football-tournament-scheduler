const db = require("../../database");



//gets a single team from a tournament

const getSingleTeamofTournament = (id, done) => {
    const sql = "SELECT * FROM teams WHERE team_id=?";

    db.get(sql, [id], (err, row) => {
        if(err) return done(err)
        if(!row) return done(404)

        return done(null, {
            team_id: row.team_id,
            team_name: row.team_name,
        })
    })
}

//gets all the teams for a torurnament
const getAllTeamsOfTournament = (tournament_id,done) => { 
    const results = [];

    db.each(

        "SELECT * FROM teams WHERE tournament_id=?",
        [tournament_id],
        
        (err, row) => {
            if(err) console.log("Something went wrong: " + err);

            results.push({
                team_id: row.team_id,
                team_name : row.team_name,
               
            });
        },
        (err, num_rows) => {
            return done(err, num_rows, results);
        }
    )

}


const addNewTeam = (team, tournament, done) => {

    let date = Date.now();
    const sql = 'INSERT INTO teams (team_name, tournament_id) VALUES (?,?)';
    let values = [team.team_name, tournament.tournament_id];

    db.run(
        sql,
        values,
        function(err){
           if(err) return done(err, null);

           return done(null, this.lastID);
        }
    )

}

const deleteTeam =(team_id,done) =>{

  getSingleTeamofTournament(team_id,(err,results)=>{
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




module.exports={
    getAllTeamsOfTournament:getAllTeamsOfTournament,
    deleteTeam:deleteTeam,
    addNewTeam:addNewTeam,
    getSingleTeamofTournament: getSingleTeamofTournament,
}