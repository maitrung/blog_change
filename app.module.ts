import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://maitrung:Trungkien999@cluster0.jnruewp.mongodb.net/blog_backend?retryWrites=true&w=majority', { useNewUrlParser: true }),TodosModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
