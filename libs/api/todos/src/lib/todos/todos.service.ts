import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '@todos-workspace/shared/models';
import { v4 as uuidv4 } from 'uuid';
import { todos, todosDetails } from '@todos-workspace/api/shared/data';

@Injectable()
export class TodosService {
  private todos = todos;
  private todosDetails = todosDetails;

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
    const toDeleteTodoIndex = this.todos.findIndex((todo) => todo.id === id);
    const deletedTodo = this.todos.splice(toDeleteTodoIndex, 1)[0];

    const toDeleteTodoDetailIndex = this.todosDetails.findIndex(
      (todoDetail) => todoDetail.id === id
    );
    if (toDeleteTodoDetailIndex !== -1) {
      this.todosDetails.splice(toDeleteTodoDetailIndex, 1)[0];
    }

    return { todo: deletedTodo };
  }
}
