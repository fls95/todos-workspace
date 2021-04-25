import { Module } from '@nestjs/common';
import { ApiTodosModule } from '@todos-workspace/api/todos';

@Module({
  imports: [ApiTodosModule],
})
export class AppModule {}
