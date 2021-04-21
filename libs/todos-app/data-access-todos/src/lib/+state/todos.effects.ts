import { Todo } from '@todos-workspace/shared/models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosService } from './../../../../feature-todos/src/lib/services/todos/todos.service';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as TodosActions from './todos.actions';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodos),
      mergeMap(() =>
        this.todosService
          .getTodos()
          .pipe(
            map((todos: Todo[]) => TodosActions.loadTodosSuccess({ todos }))
          )
      ),
      catchError(() => EMPTY)
    );
  });

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
