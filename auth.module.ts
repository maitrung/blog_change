import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { usershema } from './schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'User',schema:usershema}])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}