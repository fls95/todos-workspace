import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoDetailService } from './todo-detail.service';
import { CreateTodoDetailDto } from './dto/create-todo-detail.dto';
import { UpdateTodoDetailDto } from './dto/update-todo-detail.dto';

@Controller('todo-detail')
export class TodoDetailController {
  constructor(private readonly todoDetailService: TodoDetailService) {}

  @Post()
  create(@Body() createTodoDetailDto: CreateTodoDetailDto) {
    return this.todoDetailService.create(createTodoDetailDto);
  }

  @Get()
  findAll() {
    return this.todoDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDetailDto: UpdateTodoDetailDto
  ) {
    return this.todoDetailService.update(id, updateTodoDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoDetailService.remove(id);
  }
}
