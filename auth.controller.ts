import { Body, Controller, Post, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser } from './dto/createuser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService:AuthService){}
    @Post('/login')
    public async login(@Res() res,@Body()username, password ){
        const getUser = await this.userService.FindOne(username,password);
        if(!getUser) throw new NotFoundException('Login Faid');
        return res.status(HttpStatus.OK).json(getUser);
    }
    @Post('/register')
    public async Register(@Res()res,@Body() createUser:CreateUser){
        const registerUser = await this.userService.Register(createUser);
        if(!registerUser) throw new NotFoundException('Register Faid');
        return res.status(HttpStatus.OK).json(registerUser);
    }

}
