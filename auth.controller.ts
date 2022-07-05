import { Body, Controller, Post, Res, NotFoundException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser } from './dto/createuser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService:AuthService){}
    @Post('/login')
    public async login(@Res() res, @Body()username):Promise<any>{
        const getUser = await this.userService.FindOne(username);
        if(getUser==="1") throw new NotFoundException('sai mật khẩu hoặc tên đăng nhập');
        return res.status(HttpStatus.OK).json("login thành công");
             
    }
    @Post('/register')
    public async Register(@Res()res,@Body() createUser:CreateUser){
        const registerUser = await this.userService.Register(createUser);
        if(registerUser==="1") throw new NotFoundException('Tên đăng nhập đã được sử dụng');
        return res.status(HttpStatus.OK).json(createUser);
    }

}
