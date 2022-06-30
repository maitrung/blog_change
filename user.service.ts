import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../blog/interfaces/user.interface';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../blog/dto/create-user';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel:Model<User>){}
    async findOne(username):Promise<User>{
        const findOne = await this.userModel.find(username)
        return findOne;
    }
    async addPost(createUser: CreateUserDTO): Promise<User> {
        const newuser = await this.userModel(createUser);
        return newuser.save();
    }
}
