import { Module } from '@nestjs/common';
import { TodoDetailModule } from './todo-detail/todo-detail.module';

@Module({
  imports: [TodoDetailModule],
  exports: [TodoDetailModule],
})
export class ApiTodoDetailModule {}
