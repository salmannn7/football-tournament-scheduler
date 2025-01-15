const Joi = require('joi');
const scores = require("../models/scoresModels");
const tournaments = require("../models/tournamentsModels")


// Get all scores for a tournament
const getAllScoresOfTournament = (req, res) => {
  const tournament_id = parseInt(req.params.tournament_id);
  scores.getAllScoresOfTournament(tournament_id, (err, num_rows, results) => {
    if (err) return res.sendStatus(500);
    return res.status(200).send(results);
  });
};

const addScore = (req, res) => {
    const schema = Joi.object({
       "score": Joi.number().integer().required(),
       "team_name": Joi.string().required()
    });
    
    const { error } = schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let score = Object.assign({}, req.body);
    let tournament_id = parseInt(req.params.tournament_id);
    tournaments.getSingleTournament(tournament_id, (err,result) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        scores.addScore(score, result, (err,id) => {
            if(err) return res.sendStatus(500);
    
            return res.status(201).send({score_id: id})
        })
    })

}

const updateScore = (req, res) => {
    const schema = Joi.object({
        "score_id": Joi.number().integer().required(),
        "score": Joi.number().integer().required(),
      
    });
    
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const { score_id, score } = req.body;
    
    scores.updateScore(score_id, score, (err) => {
        if (err) return res.sendStatus(500);
        return res.sendStatus(200);
    });
};

const deleteScore = (req, res) => {
    let score_id = parseInt(req.params.score_id);
    
    scores.deleteScore(score_id, (err) => {
        if (err === 404) return res.sendStatus(404);
        if (err) return res.sendStatus(500);
        return res.sendStatus(200);
    });
};

const getScore = (req, res) => {
    let score_id = parseInt(req.params.score_id);
    
    scores.getScore(score_id, (err, result) => {
        if(err === 404) return res.sendStatus(404)
        if(err) return res.sendStatus(500)

        return res.status(200).send(result)
    });
};

module.exports = {
  getAllScoresOfTournament:getAllScoresOfTournament,
    addScore: addScore,
    updateScore: updateScore,
    deleteScore: deleteScore,
    getScore: getScore
};
