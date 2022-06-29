import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { userShema } from '../blog/schemas/user.shema';

@Module({
  imports:[MongooseModule.forFeature([{name:'User', schema:userShema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
