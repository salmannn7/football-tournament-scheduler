const Joi = require ("joi");

const tournaments = require('../models/tournamentsModels');


const getAll = (req, res) => {
  tournaments.getAllTournaments((err, num_rows, results) =>{

 if(err) return res.sendStatus(500);

 return  res.status(200).send(results);
})

}

const create = (req, res) => {
  const schema = Joi.object({
      "tournament_name": Joi.string().required(), 
     
     })
     const {error}  = schema.validate(req.body);
     if (error) return res.status(400).send(error.details[0].message);
     let tournament = Object.assign({}, req.body);
 
     tournaments.addNewTournament (tournament, (err, id) => {
         if(err) return res.sendStatus(500);
         return res.status(201).send({tournament_id: id})
     
  });
}
 
const getOne = (req, res) => {
  let tournament_id = parseInt(req.params.tournament_id);
  tournaments.getSingleTournament(tournament_id,(err,result)=>{
      
      if(err === 404) return res.sendStatus(404)
      if(err) return res.sendStatus(500)

      return res.status(200).send(result)
  })
}

const updateTournament = (req, res) => { 

  let tournament_id = parseInt(req.params.tournament_id);

  tournaments.getSingleTournament(tournament_id,(err,result) =>{
      if (err == 400) return res.sendStatus(400);
      if (err == 404) return res.sendStatus(404);
      
      if (err) return res.sendStatus(500);
      

      const schema = Joi.object({
          "tournament_name": Joi.string(),
      })
      const {error} = schema.validate(req.body);
      if(error) return res.status(400).send(error.details[0].message);

      if(req.body.hasOwnProperty("tournament_name")){
          result.title = req.body.tournament_name

      }
      tournaments.updateTournament(tournament_id,result,(err,id) => {
          if(err){
              console.log(err)
              return res.sendStatus(500)
          }
          return res.sendStatus(200)
      })
  })
}

const deleteTournament = (req, res) => {
  let tournament_id = parseInt(req.params.tournament_id);

  tournaments.getSingleTournament(tournament_id, (err, tournament) => {{
      if(err==500) return res.sendStatus(500);
      if(err==404) return res.sendStatus(404);

      tournaments.deleteTournament(tournament_id,(err)=>{
          if(err) return res.sendStatus(500)

          return res.sendStatus(200)
      })

  }})

 
}


module.exports = {
  getAll: getAll,
  create: create,
  getOne: getOne,
  updateTournament: updateTournament,
  deleteTournament: deleteTournament,
}