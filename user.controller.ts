import { Controller, Param, Post, Res, HttpStatus, Body, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from '../blog/dto/create-user';
import { Model } from 'mongoose';
import { User } from '../blog/interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private userservice:UserService){}
    
    @Post('/user')
    async postUser(@Res() res, @Body() username:string,pass:string){
        const user = await this.userservice.findOne(username);
       
        if(user.password===pass){
            const{password,...result}=user;
            return res.status(HttpStatus.OK).json({
                message: 'user la:',
                post: result,
            })  
        }
        else if(!user)throw new NotFoundException('Post does not exist!');

    }
    @Post('/newuser')
    async newUser(@Res()res,@Body() createUserDTO:CreateUserDTO){
        const newUser = await this.userservice.addPost(createUserDTO);
        return res.status(HttpStatus.OK).json({
            messeage:"Thêm user thành công!",
            post:newUser
        })
    }
}
