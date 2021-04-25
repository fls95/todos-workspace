import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '@todos-workspace/shared/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    { id: uuidv4(), title: 'Todo 1' },
    { id: uuidv4(), title: 'Todo 2' },
  ];

  create(createTodoDto: CreateTodoDto): { todo: Todo } {
    const todo = createTodoDto.todo;
    const { id, title } = todo;

    const newTodo: Todo = {
      id: id ? id : uuidv4(),
      title: title,
    };

    this.todos.push(newTodo);
    return { todo: newTodo };
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: Todo['id']) {
    return `This action returns a #${id} todo`;
  }

  update(id: Todo['id'], updateTodoDto: UpdateTodoDto): { todo: Todo } {
    const toUpdate: Todo = this.todos.find((todo) => todo.id === id);
    delete toUpdate.title;

    const updated: Todo = Object.assign(toUpdate, {
      title: updateTodoDto.todo.title,
    });

    return { todo: updated };
  }

  remove(id: Todo['id']): { todo: Todo } {
    const toDeleteIndex = this.todos.findIndex((todo) => todo.id === id);
    const deleted = this.todos.splice(toDeleteIndex, 1)[0];
    return { todo: deleted };
  }
}
