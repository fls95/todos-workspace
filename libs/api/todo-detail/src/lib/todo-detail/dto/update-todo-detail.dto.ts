import { TodoDetail } from '../entities/todo-detail.entity';

export class UpdateTodoDetailDto {
  todoDetail: Partial<TodoDetail>;
}
