const { use } = require ("chai");
const {app}= require("express");
const Joi = require("joi");
const users = require("../models/usersModels")
const emailvalidator=require("email-validator")

const login = (req, res) => {

    const schema = Joi.object({
        "email": Joi.string().required(),
        "password": Joi.string().required(),
    })

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    users.authenticateUser(req.body.email, req.body.password, (err, id) => {
        if (err) return res.status(400).send("Invalid email/password supplied");
        if(!id) return res.status(400).send("Invalid email/password supplied");
        users.getToken(id, (err, token) => {
            if (err) return res.status(500).send("An error occurred while retrieving the token");
            if (token) {
                return res.status(200).send({ user_id: id, session_token: token });
            } else {
                users.setToken(id, (err, token) => {
                    if (err) return res.status(500).send("An error occurred while setting the token");
                    return res.status(200).send({ user_id: id, session_token: token });
                });
            }
        });
    });
}


const createUser = (req, res) => {
    const schema = Joi.object({
      "first_name":Joi.string().required(),
      "last_name":Joi.string().required(),
      "email": Joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      "password": Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+!=])[A-Za-z\d@#$%^&+!=]{8,}$/).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); 
    
    let newUser = Object.assign({},req.body);
    users.addNewUser(newUser,(err,id)=>{
     if (err){
        console.log(err)
        return res.sendStatus(500);
     }  
     return res.status(201).send({user_id: id}) 
    })
  }

  const getAllUsers = (req,res)=>{
    users.getAllusers((err,num_rows,results)=>{
        if (err) return res.sendStatus(500);
        return res.status(200).send(results);
    })
  }


const logout = (req,res)=>{
    let token = req.get('X-Authorization');
    if(token!=null){
        users.checkToken(token, (err) => {
            if (err) return done(err);
        users.removeToken(token,(row)=> {
            if(err) return res.sendStatus(500);
            return res.sendStatus(200);
    
        })
    })
}
    else{
        return res.sendStatus(401);

    }
  } 

  
  module.exports={
   logout:logout,
   login:login,
   createUser:createUser,
   getAllUsers:getAllUsers

}