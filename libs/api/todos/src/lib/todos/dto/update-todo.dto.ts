import { Todo } from '../entities/todo.entity';

export class UpdateTodoDto {
  todo: Partial<Todo>;
}
