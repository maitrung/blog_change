import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { usershema } from './schema/user.schema';
import { LocalStrategy } from './strategy/local.strategy';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './strategy/jwt.strategy';
@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:usershema}]),PassportModule,
          JwtModule.register({
            secretOrPrivateKey:'jwsecretkey',
            signOptions:{
              expiresIn:'1d',
            },
          })
],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
})
export class AuthModule {}
