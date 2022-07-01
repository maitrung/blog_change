import { Document } from "mongoose";
 export interface Todo extends Document{
    readonly id:string,
    readonly todolist:string,
    readonly todoDesc:string,
 }