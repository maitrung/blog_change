import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './interface/todo.interface';
import {CrateTodo} from './dto/create-todo.dto'
@Injectable()
 export class TodosService {
    constructor(@InjectModel('Todo') private readonly todoModel:Model<Todo>){}
    public async GetdAll():Promise<Todo[]>{
        const todol = await this.todoModel.find().exec();
        return todol;
    }
    public async GetOne(id):Promise<Todo>{
        const getTodo = await this.todoModel.findOne(id);
        return getTodo;
    }
    public async addTodo(createPosttodo:CrateTodo):Promise<Todo>{
        const newTodo = await new this.todoModel(createPosttodo);//  lưu và tạo mới _id của mongoDb
        return newTodo.save();
    }
    public async Delete(id):Promise<Todo>{
        const deleteTodo = await this.todoModel.findByIdAndDelete(id);
        return deleteTodo.save();
    }
    public async EditTodo(id,updateModel:CrateTodo):Promise<Todo>{
        this.Delete(id);
       const editTodo= this.addTodo(updateModel);
        return editTodo;
    }
}
