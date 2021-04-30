import { Injectable } from '@nestjs/common';
import { CreateTodoDetailDto } from './dto/create-todo-detail.dto';
import { UpdateTodoDetailDto } from './dto/update-todo-detail.dto';
import { Todo, TodoDetail } from '@todos-workspace/shared/models';
import { todos, todosDetails } from '@todos-workspace/api/shared/data';

@Injectable()
export class TodoDetailService {
  private todos = todos;
  private todosDetails = todosDetails;

  create(createTodoDetailDto: CreateTodoDetailDto): { todoDetail: TodoDetail } {
    const todoDetail = createTodoDetailDto.todoDetail;
    const { id, title, completed, detail } = todoDetail;

    const newTodoDetail: TodoDetail = {
      id: id,
      title: title,
      completed: completed,
      detail: detail ? detail : null,
    };

    this.todosDetails.push(newTodoDetail);
    return { todoDetail: newTodoDetail };
  }

  findAll(): TodoDetail[] {
    return this.todosDetails;
  }

  findOne(id: TodoDetail['id']): TodoDetail {
    const todo: Todo = this.todos.find((todo) => todo.id === id);
    const todoDetail: TodoDetail = this.todosDetails.find(
      (todoDetail) => todoDetail.id === id
    );

    if (todoDetail) {
      return this.update(id, { todoDetail: todo }).todoDetail;
      // return todoDetail;
    } else {
      const newTodoDetail: TodoDetail = {
        id: id,
        title: todo.title,
        completed: todo.completed,
        detail: null,
      };

      return this.create({ todoDetail: newTodoDetail }).todoDetail;
    }
  }

  update(
    id: TodoDetail['id'],
    updateTodoDetailDto: UpdateTodoDetailDto
  ): { todoDetail: TodoDetail } {
    const toUpdateTodoDetail: TodoDetail = this.todosDetails.find(
      (todoDetail) => todoDetail.id === id
    );
    const toUpdateTodoDetailPayload: Partial<TodoDetail> =
      updateTodoDetailDto.todoDetail;
    const toUpdateTodoDetailPayloadKeys: string[] = Object.keys(
      toUpdateTodoDetailPayload
    );
    const todoDetailUpdates: Partial<TodoDetail>[] = [];

    const toUpdateTodo: Todo = this.todos.find((todo) => todo.id === id);
    const todoUpdates: Partial<Todo>[] = [];

    if (toUpdateTodoDetailPayloadKeys.includes('title')) {
      delete toUpdateTodoDetail.title;
      todoUpdates.push({ title: toUpdateTodoDetailPayload.title });
      delete toUpdateTodo.title;
    }
    if (toUpdateTodoDetailPayloadKeys.includes('completed')) {
      delete toUpdateTodoDetail.completed;
      todoUpdates.push({ completed: toUpdateTodoDetailPayload.completed });
      delete toUpdateTodo.completed;
    }
    if (toUpdateTodoDetailPayloadKeys.includes('detail')) {
      delete toUpdateTodoDetail.detail;
      todoDetailUpdates.push({ detail: toUpdateTodoDetailPayload.detail });
    }

    Object.assign(toUpdateTodo, ...todoUpdates);

    const updatedTodoDetail: TodoDetail = Object.assign(
      toUpdateTodoDetail,
      ...todoUpdates,
      ...todoDetailUpdates
    );

    return { todoDetail: updatedTodoDetail };
  }

  remove(id: TodoDetail['id']): { todoDetail: TodoDetail } {
    const toDeleteTodoIndex = this.todos.findIndex((todo) => todo.id === id);
    this.todos.splice(toDeleteTodoIndex, 1)[0];

    const toDeleteTodoDetailIndex = this.todosDetails.findIndex(
      (todoDetail) => todoDetail.id === id
    );
    const deletedTodoDetail = this.todosDetails.splice(
      toDeleteTodoDetailIndex,
      1
    )[0];

    return { todoDetail: deletedTodoDetail };
  }
}
