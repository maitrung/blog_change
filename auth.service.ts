import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUser } from './dto/createuser.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>){};

    public async FindOne(username):Promise<any>{
        const findUser = await this.userModel.findOne({where:{
            username,
          },});
        if(username.password===findUser.password)
            return findUser;
        else 
            return "1";
    }
    public async Register(userCreate:CreateUser){
        const addUser = await new this.userModel(userCreate);
        const check = await this.userModel.findOne(userCreate);
        if(check!=null){
            return "1"
        }
        else
            return addUser.save();
       
    }
}
