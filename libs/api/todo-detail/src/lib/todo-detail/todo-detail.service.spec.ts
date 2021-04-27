import { Test, TestingModule } from '@nestjs/testing';
import { TodoDetailService } from './todo-detail.service';

describe('TodoDetailService', () => {
  let service: TodoDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoDetailService],
    }).compile();

    service = module.get<TodoDetailService>(TodoDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
