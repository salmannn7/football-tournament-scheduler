const Joi = require('joi');

const teams = require("../models/teamsModels");
const tournamentModels=require("../models/tournamentsModels");
const { getSingleTournament } = require('../models/tournamentsModels');



const getAllFromTournament = (req, res) => {
    let tournament_id = parseInt(req.params.tournament_id)
    teams.getAllTeamsOfTournament(tournament_id,(err, num_rows, results) =>{

   if(err) return res.sendStatus(500);

   return  res.status(200).send(results);
})

}

const create = (req, res) => {
    const schema = Joi.object({
        "team_name": Joi.string()
            .max(50)
            .required()
    })

    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let team = Object.assign({}, req.body);
    let tournament_id = parseInt(req.params.tournament_id);
    tournamentModels.getSingleTournament(tournament_id, (err,result) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        teams.addNewTeam(team, result, (err,id) => {
            if(err) return res.sendStatus(500);
    
            return res.status(201).send({team_id: id})
        })
    })

}

const deleteTeam = (req, res) => {
    let team_id = parseInt(req.params.team_id);

        teams.deleteTeam(team_id,(err)=>{
            
            if(err===500) return res.sendStatus(500)
            if(err===404) return res.sendStatus(404)
            if(err===401) return res.sendStatus(401)

            return res.sendStatus(200)
        })

    }

   

    const getOne = (req, res) => {
        let team_id = parseInt(req.params.team_id);
    
        teams.getSingleTeamofTournament(team_id, (err,result) => {
            if(err === 404) return res.sendStatus(404)
            if(err) return res.sendStatus(500)
    
            return res.status(200).send(result)
        })
    }



module.exports ={
  getAllFromTournament:getAllFromTournament,
  deleteTeam:deleteTeam,
    create:create,
    getOne: getOne,
}