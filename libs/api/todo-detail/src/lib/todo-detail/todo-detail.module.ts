import { Module } from '@nestjs/common';
import { TodoDetailService } from './todo-detail.service';
import { TodoDetailController } from './todo-detail.controller';

@Module({
  controllers: [TodoDetailController],
  providers: [TodoDetailService]
})
export class TodoDetailModule {}
