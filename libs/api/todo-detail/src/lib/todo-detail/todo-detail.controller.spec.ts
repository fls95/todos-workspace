import { Test, TestingModule } from '@nestjs/testing';
import { TodoDetailController } from './todo-detail.controller';
import { TodoDetailService } from './todo-detail.service';

describe('TodoDetailController', () => {
  let controller: TodoDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoDetailController],
      providers: [TodoDetailService],
    }).compile();

    controller = module.get<TodoDetailController>(TodoDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
