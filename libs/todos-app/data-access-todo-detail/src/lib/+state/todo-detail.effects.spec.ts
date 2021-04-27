import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TodoDetailEffects } from './todo-detail.effects';

describe('TodoDetailEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDetailEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TodoDetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
