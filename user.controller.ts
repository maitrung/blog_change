import { Controller, Param, Post, Res, HttpStatus, Body, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from '../blog/dto/create-user';

@Controller('user')
export class UserController {
    constructor(private userservice:UserService){}
    @Post('/user')
    async postUser(@Res() res, @Body() id:string){
        const user = await this.userservice.findOne(id);
        if(!user)throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'user la:',
            post: user
        })  
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
