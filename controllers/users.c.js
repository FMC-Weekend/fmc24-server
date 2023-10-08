// login.mjs
import sqlite3 from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite3.Database('fmc.sqlite');
const userIndentifier = async (token)=>{
    const info = await fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + token)
    // console.log("info", info)
    const data = await info.json();
    const name=data.name;
    const email=data.email;
    const picture=data.picture;
    console.log(name,email,picture)
    return {name,email,picture};
   
}
export const register = async (req, res) => {
    const x = req.body;
    
    // console.log(req)
    const { name, email, college, phone, referralCode, instaHandle, type,token } = req.body;
    
   const emailVerified=await userIndentifier(token);
   const em=emailVerified.email;
   if(em!==email){
         res.send({message:"email not verified"});
         return;
   }
    console.log(name, email, college, phone, referralCode, instaHandle, type)
    db.serialize(() => {
        const stmt = db.prepare("UPDATE users SET Name = ?, Email = ?, College = ?, Phone = ?, ReferralCode = ?, InstaHandle = ?, Type = ? WHERE UserId = ?");
        stmt.run(name, email, college, phone, referralCode, instaHandle, type, userId);
        stmt.finalize();
    });
    res.send({message:"user updated"});
};
export const login = async (req, res) => {
    const { token } = req.body;
    const {name,email,picture}=await userIndentifier(token);
    console.log(name,email,picture)
    db.serialize(() => {
        db.all(`SELECT * FROM users WHERE Email = '${email}'`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send({ error: err });
            }
            else {
                //if user does not exist then create a new user
                if (rows.length == 0) {
                    const userId = uuidv4();
                    db.serialize(() => {
                        const stmt = db.prepare("INSERT INTO users(UserId, Name, Email, Image) VALUES(?,?,?,?)");
                        stmt.run(userId, name, email, picture);
                        stmt.finalize();
                    });
                    res.send({message:"user created",user:{userId,name,email,picture}});
                }
                else
                res.send({message:"user already exists",user:rows[0]});
            }
        });
    });
}