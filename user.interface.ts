import{Document} from'mongoose'
export interface User extends Document{

    readonly Id:string;
    readonly username:string;
    readonly password:string;
    readonly dateCreate:string;
}