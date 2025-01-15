const users = require ("../models/usersModels");

const isAuthaenticated = function (req,res,next){
    let token = req.get('x-authorization');

    users.getIDFromToken(token,(err,id)=>{
        if(err||id==null){
            console.log(err)
            return res.sendStatus(401);
        }
        next();
    })
}

module.exports = {
    isAuthaenticated:isAuthaenticated
}
