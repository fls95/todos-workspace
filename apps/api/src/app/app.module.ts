import { Module } from '@nestjs/common';
import { ApiTodosModule } from '@todos-workspace/api/todos';
import { ApiTodoDetailModule } from '@todos-workspace/api/todo-detail';

@Module({
  imports: [ApiTodosModule, ApiTodoDetailModule],
})
export class AppModule {}
