import { Body,Res, Controller, Post, NotFoundException, HttpStatus, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUser } from './dto/createuser.dto';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { LocalStrategy } from './strategy/local.strategy';
import { GetUser } from './get-user.decorator';
import { User } from 'dist/auth/interface/user.interface';
import { userInfo } from 'os';
@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService:AuthService,
        private jwtService:JwtService,
        private localStrategy:LocalStrategy,
        ){}
    @Post('/login')
    public async login(@Res() res, @Body()username):Promise<any>{
        const getUser = await this.userService.FindOne(username);
        if(!getUser) 
            throw new NotFoundException('sai mật khẩu hoặc tên đăng nhập');
        return getUser;
             
    }
    @Post('/register')
    public async Register(@Res()res,@Body() createUser:CreateUser){
        const registerUser = await this.userService.Register(createUser);
        if(registerUser==="1") throw new NotFoundException('Tên đăng nhập đã được sử dụng');
        return res.status(HttpStatus.OK).json(createUser);
    }
    // @Post('/sign-in')
    // signIn(@Body() signInDto:SignInDto){
    //     console.log('sign data:'+signInDto);
    //     return null;
    // }
    @UseGuards(AuthGuard('local'))
    @Post('/signin')
    
    signin(@Req() req: Request) {
      const user = req.user;
      
         const accessToken = this.jwtService.sign(user);
       
      return {success: true, token: 'JWT ' + accessToken};
    }
    
    @Get('/test')
    @UseGuards(AuthGuard('local'))
    testApi(@GetUser() user): any{
        return user;
    }
}
