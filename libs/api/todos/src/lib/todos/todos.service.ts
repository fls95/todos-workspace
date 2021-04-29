import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from '@todos-workspace/shared/models';
import { v4 as uuidv4 } from 'uuid';
import { todos, todosDetails } from '@todos-workspace/api/shared/data';
import { UpdateTodosDto } from './dto/update-todos.dto';

@Injectable()
export class TodosService {
  private todos = todos;
  private todosDetails = todosDetails;

  create(createTodoDto: CreateTodoDto): { todo: Todo } {
    const todo = createTodoDto.todo;
    const { id, title, completed } = todo;

    const newTodo: Todo = {
      id: id ? id : uuidv4(),
      title: title,
      completed: completed ? completed : false,
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

  updates(updateTodosDto: UpdateTodosDto): Todo[] {
    const toUpdate: Todo[] = this.todos;
    if (toUpdate.length > 0) {
      // Comment (we only need to check one)
      const toUpdatePayload: Partial<Todo> = updateTodosDto.todos[0];
      const toUpdatePayloadKeys: string[] = Object.keys(toUpdatePayload);
      const updates: Partial<Todo>[] = [];

      const updateTitle: boolean = toUpdatePayloadKeys.includes('title');
      const updateCompleted: boolean = toUpdatePayloadKeys.includes(
        'completed'
      );

      if (updateTitle) {
        updates.push({ title: toUpdatePayload.title });
      }
      if (updateCompleted) {
        updates.push({ completed: toUpdatePayload.completed });
      }

      toUpdate.forEach((todo) => {
        if (updateTitle) {
          delete todo.title;
        }
        if (updateCompleted) {
          delete todo.completed;
        }

        Object.assign(todo, ...updates);
      });
    }

    return this.todos;
  }

  update(id: Todo['id'], updateTodoDto: UpdateTodoDto): { todo: Todo } {
    const toUpdate: Todo = this.todos.find((todo) => todo.id === id);
    const toUpdatePayload: Partial<Todo> = updateTodoDto.todo;
    const toUpdatePayloadKeys: string[] = Object.keys(toUpdatePayload);
    const updates: Partial<Todo>[] = [];

    if (toUpdatePayloadKeys.includes('title')) {
      delete toUpdate.title;
      updates.push({ title: toUpdatePayload.title });
    }
    if (toUpdatePayloadKeys.includes('completed')) {
      delete toUpdate.completed;
      updates.push({ completed: toUpdatePayload.completed });
    }

    const updated: Todo = Object.assign(toUpdate, ...updates);

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
