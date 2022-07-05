import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUser } from './dto/createuser.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>){};
    public async FindOne(username,password):Promise<User>{
        const findUser = await this.userModel.findOne(username);
        if(password===findUser.password){
            return findUser;
        }
        else {
            console.log("Sai mat khau");
        }
    }
    public async Register(userCreate:CreateUser):Promise<User>{
    if(this.FindOne(userCreate.username,userCreate.password)===null){
        const addUser = await new this.userModel(userCreate);
        return addUser.save();
    }
    else
        console.log("Username already exists");  
    }
}
