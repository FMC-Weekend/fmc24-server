import sqlite3 from "sqlite3";
import { v4 as uuidv4 } from 'uuid';
const db = new sqlite3.Database('fmc.sqlite');
//name email college phone refferal code insta handle type

db.serialize(() => {
    db.run("CREATE TABLE users(UserId VARCHAR(36) PRIMARY KEY, Name VARCHAR(255), Email VARCHAR(255), College VARCHAR(255), Phone VARCHAR(30) UNIQUE, ReferralCode VARCHAR(255), InstaHandle VARCHAR(255), Type VARCHAR(255))");
});
db.serialize(()=>{
    db.run("INSERT INTO users(UserId, Name, Email, College, Phone, ReferralCode, InstaHandle, Type) VALUES(?,?,?,?,?,?,?,?)", [uuidv4(), "Shubham","shubham.kumar.min21@itbhu.ac.in","IIT (BHU) Varanasi","1234567890","6201060889","shubham.kumar.min21","Participant"]);
})
db.close();