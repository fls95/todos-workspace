import { TestBed } from '@angular/core/testing';

import { TodoDetailService } from './todo-detail.service';

describe('TodoDetailService', () => {
  let service: TodoDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
