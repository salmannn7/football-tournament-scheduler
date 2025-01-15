      const sqlite3 = require('sqlite3').verbose();
      const crypto = require("crypto")
      
      const DBSOURCE = 'db.sqlite';

      const db = new sqlite3.Database(DBSOURCE, (err) => {
      if (err) {
        console.error(err.message);
        throw err;
      } else {
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE users (
          user_id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name text,
          last_name text,
          email text UNIQUE,
          password text,
          salt text,
          session_token text,
          CONSTRAINT email_unique UNIQUE (email)
      )`,
      (err) => {

      if(err){
          console.log("Users table already created")
      }else{
          console.log("Users table created")
      }


      const ADMIN_PASSWORD = "Admin123!"

      const getHash = function(password, salt){
          return crypto.pbkdf2Sync(password, salt, 100000, 256, 'sha256').toString('hex');
      };

      const INSERT = 'INSERT INTO users (first_name, last_name, email, password, salt) VALUES (?,?,?,?,?)'
      const salt = crypto.randomBytes(64);
      const hash = getHash(ADMIN_PASSWORD, salt);

      db.run(INSERT, ["admin", "admin", "admin@admin.com", hash, salt.toString('hex')], (err) => {
          if(err){
              console.log("Admin account already exists")
          } 
      })
      }
      )

        db.run(`CREATE TABLE tournaments ( 
                  tournament_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    tournament_name TEXT NOT NULL
                )`,
          (err) => {
            if (err) {
              console.log("Tournaments table already created");
            } else {
              console.log("Tournaments table created");
            }
          }
        );

        db.run(`CREATE TABLE teams (
                    team_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    team_name TEXT NOT NULL,
                    tournament_id INTEGER,
                    FOREIGN KEY(tournament_id) REFERENCES tournaments(id)
                )`,
          (err) => {
            if (err) {
              console.log("Teams table already created");
            } else {
              console.log("Teams table created");
            }
          }
        );

        db.run(`CREATE TABLE scores (
          score_id INTEGER PRIMARY KEY AUTOINCREMENT,
          score INTEGER NOT NULL,
          team_name TEXT NOT NULL,
          tournament_id INTEGER,
          FOREIGN KEY(tournament_id) REFERENCES tournaments(tournament_id)
        )`,
      (err) => {
      if (err) {
        console.log("Scores table already created");
      } else {
        console.log("Scores table created");
      }
      });

    }
  });


      module.exports = db;
