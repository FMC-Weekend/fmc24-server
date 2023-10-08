// login.mjs
import sqlite3 from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite3.Database('fmc.sqlite');

export const login = async (req, res) => {
    const x=req.body;
    console.log(req)
    // const { name, email, college, phone, referralCode, instaHandle, type } = req.body;
    // db.serialize(() => {
    //     const stmt = db.prepare("INSERT INTO users(UserId, Name, Email, College, Phone, ReferralCode, InstaHandle, Type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    //     const userId = uuidv4(); 
    //     stmt.run(userId, name, email, college, phone, referralCode, instaHandle, type);
    //     stmt.finalize();
    // });

    res.send({body:x});
};
