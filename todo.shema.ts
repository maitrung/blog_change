import * as mongoose from 'mongoose';
export const TodoSchema = new mongoose.Schema({
    id:String,
    todolist:String,
    todoDesc:String,
})