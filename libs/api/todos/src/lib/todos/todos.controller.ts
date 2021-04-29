import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '@todos-workspace/shared/models';
import { UpdateTodosDto } from './dto/update-todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Todo['id']) {
    return this.todosService.findOne(id);
  }

  @Patch()
  updates(@Body() updateTodosDto: UpdateTodosDto) {
    return this.todosService.updates(updateTodosDto);
  }

  @Patch(':id')
  update(@Param('id') id: Todo['id'], @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Todo['id']) {
    return this.todosService.remove(id);
  }
}
