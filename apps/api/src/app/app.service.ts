import { Injectable } from '@nestjs/common';
import { Todo } from '@todos-workspace/shared/models';
// Business logic
@Injectable()
export class AppService {
  todos: Todo[] = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      id: Math.floor(Math.random() * 1000),
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
