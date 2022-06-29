import * as mongoose from 'mongoose';
export const userShema = new mongoose.Schema({
    id:String,
    username:String,
    password:String,
    dateCreate:String,
})