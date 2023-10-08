// login.mjs
import sqlite3 from 'sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite3.Database('fmc.sqlite');

export const register = async (req, res) => {
    const x = req.body;
    console.log(req)
    const { name, email, college, phone, referralCode, instaHandle, type } = req.body;
    console.log(name, email, college, phone, referralCode, instaHandle, type)
    db.serialize(() => {
        const stmt = db.prepare("UPDATE users SET Name = ?, Email = ?, College = ?, Phone = ?, ReferralCode = ?, InstaHandle = ?, Type = ? WHERE UserId = ?");
        stmt.run(name, email, college, phone, referralCode, instaHandle, type, userId);
        stmt.finalize();
    });
    res.send({ body: x });
};
export const login = async (req, res) => {
    const { token } = req.body;
    db.serialize(() => {
        db.all(`SELECT * FROM users WHERE Email = '${email}' OR Phone = '${phone}'`, (err, rows) => {
            if (err) {
                console.log(err);
                res.send({ error: err });
            }
            else {
                res.send({ rows });
            }
        });
    });
}