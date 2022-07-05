import * as mongoose from 'mongoose';
export const usershema =new mongoose.Schema({
    id:String,
    username:String,
    password:String,
    fullname:String,
})