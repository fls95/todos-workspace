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
    const { id, title, detail } = todoDetail;

    const newTodoDetail: TodoDetail = {
      id: id,
      title: title,
      detail: detail ? detail : null,
    };

    this.todosDetails.push(newTodoDetail);
    return { todoDetail: newTodoDetail };
  }

  findAll(): TodoDetail[] {
    return this.todosDetails;
  }

  findOne(id: TodoDetail['id']): TodoDetail {
    const todoDetail: TodoDetail = this.todosDetails.find(
      (todoDetail) => todoDetail.id === id
    );

    if (todoDetail) {
      return todoDetail;
    } else {
      const newTodoDetail: TodoDetail = {
        id: id,
        title: this.todos.find((todo) => todo.id === id).title,
        detail: null,
      };

      return this.create({ todoDetail: newTodoDetail }).todoDetail;
    }
  }

  update(
    id: TodoDetail['id'],
    updateTodoDetailDto: UpdateTodoDetailDto
  ): { todoDetail: TodoDetail } {
    const toUpdateTodo: Todo = this.todos.find((todo) => todo.id === id);
    delete toUpdateTodo.title;
    Object.assign(toUpdateTodo, {
      title: updateTodoDetailDto.todoDetail.title,
    });

    const toUpdateTodoDetail: TodoDetail = this.todosDetails.find(
      (todoDetail) => todoDetail.id === id
    );
    delete toUpdateTodoDetail.title;
    delete toUpdateTodoDetail.detail;

    const updatedTodoDetail: TodoDetail = Object.assign(toUpdateTodoDetail, {
      title: updateTodoDetailDto.todoDetail.title,
      detail: updateTodoDetailDto.todoDetail.detail,
    });

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