import { Todo } from '../entities/todo.entity';

export class UpdateTodosDto {
  todos: Partial<Todo>[];
}
