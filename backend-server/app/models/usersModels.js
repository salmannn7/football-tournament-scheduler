const crypto= require("crypto");
const db = require("../../database");

const getHash= function (password,salt){
    return crypto.pbkdf2Sync(password,salt,100000,256,'sha256').toString('hex');
}


const addNewUser = (user,done)=> {
    const salt=crypto.randomBytes(64);
    const hash = getHash(user.password,salt);

    const sql ='INSERT INTO users(first_name, last_name, email, password,salt) VALUES (?,?,?,?,?)'
    let VALUES =[user.first_name,user.last_name,user.email,hash, salt.toString('hex')];


    db.run(sql,VALUES, function(err){
        if(err) return done(err)
        return done(null,this.lastID);
    })


}

const authenticateUser= (email, password, done)=>{
    const sql ='SELECT user_id, password, salt FROM users WHERE email=?'


    db.get(sql, [email], (err, row) => {
        
        if(err) return done(err)
        
        if(!row) return done(404)// wrong email

        if (row.salt === null) row.salt = ''

        let salt = Buffer.from(row.salt,'hex')

        if(row.password === getHash(password,salt))
        {
            return  done(false, row.user_id)
        }
        
        else{

           console.log(row.password,getHash(password,salt))
            return done(404)// wrong password
            
            
        }

    })
}
const getToken =(user_id,done)=>{
    const sql ='SELECT session_token FROM users WHERE user_id=?'
    db.get(sql,[user_id],(err,row)=>{
        if(err) return done(err);
        if(!row) return done(404);
        
        return done (null,row.session_token)

    })
    
}
const setToken=(id,done)=>{
    let token = crypto.randomBytes(16).toString('hex');
    const sql = 'UPDATE users SET session_token=? WHERE user_id=?'

    db.run(sql,[token,id],(err)=>{
        return done(err,token)
    })
}

const checkToken = (token, done) => {
    const checkSQL = 'SELECT session_token FROM users WHERE session_token=?'
    db.get(checkSQL, [token], (err, row) => {
        if (err) return done({status:500, message:"Server Error"});
        if(!row) return done({status:401, message:"Unauthorized: User not logged in"});
        return done(null);
    });
}
const removeToken = (token, done) => {
    const sql = 'UPDATE users SET session_token = null WHERE session_token=?'
    db.run(sql, [token], (err) => {
        if (err) return done({status:500, message:"Server Error"});
        checkToken(token, (err) => {
            if (err) return done(err);
            return done(null, true);
        });
    });
}



const getAllusers = (done) => {
    const results = [];

    db.each(

        "SELECT * FROM users",
        [],
        
        (err, row) => {
            if(err) console.log("Something went wrong: " + err);

            results.push({
                user_id: row.user_id,
                first_name: row.first_name,
                last_name: row.last_name,
                email: row.email,
                
            });
        },
        (err, num_rows) => {
            return done(err, num_rows, results);
        }
    )

}
const getIDFromToken = (token, done) => {
       const sql = 'SELECT user_id FROM users WHERE session_token=?'
        db.get(sql, [token], (err, row) => {
            if (err) return done(err)
           if (!row) return done(404)
            return done(null, row)
       })
    
}

module.exports={
    addNewUser:addNewUser,
    authenticateUser:authenticateUser,
    getToken:getToken,
    setToken:setToken,
    removeToken:removeToken,
    getAllusers:getAllusers,
    getIDFromToken:getIDFromToken,
    checkToken:checkToken
    

}