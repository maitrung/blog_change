import { Body, Controller, Get, HttpStatus, NotFoundException, Post, Res } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CrateTodo } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
    constructor (private readonly todoService:TodosService){}
    @Get('/todoget')
    public async getTodo(@Res()res){
        const todos = await this.todoService.GetdAll();
        return res.status(HttpStatus.OK).json(todos);
    }
    @Get('/todos/:id')
    public async getTodoID(@Res()res, @Body() id){
        const todo = await this.todoService.GetOne(id);
        if(!todo) throw new NotFoundException('No data');
        return res.status(HttpStatus.OK).json(todo);
    }
    @Post('/todopost')
    public async postTodo(@Res()res, @Body() createTodo:CrateTodo){
        const newTodo= await this.todoService.addTodo(createTodo);
        if(!newTodo) throw new NotFoundException('Unable to add new data');
        return res.status(HttpStatus.OK).json(newTodo);
    }
}
