import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from '../auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,'local'){
    constructor(private readonly authService:AuthService){
        super({
            usernameFied:'username',
        });
    }
     validate(username:string, password:string){
        const user= this.authService.validateUserAndPassword(username,password);
        if(!user){
            throw new UnauthorizedException('sign in faided');
        }
        return user;
    }
}