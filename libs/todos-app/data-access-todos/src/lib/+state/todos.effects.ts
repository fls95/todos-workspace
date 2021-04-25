import { Update } from '@ngrx/entity';
import { Todo } from '@todos-workspace/shared/models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  catchError,
  concatMap,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as TodosActions from './todos.actions';
import { TodosService } from '../services/todos/todos.service';

@Injectable()
export class TodosEffects {
  loadTodosRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.loadTodosRequest),
      switchMap(() => {
        return this.todosService.getTodos().pipe(
          mergeMap((todos) => [
            TodosActions.loadTodos({ todos }),
            TodosActions.loadTodosSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  addTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodoRequest),
      concatMap((action) => {
        return this.todosService.addTodo(action.todo).pipe(
          mergeMap((newTodo) => [
            TodosActions.addTodo({ todo: newTodo }),
            TodosActions.addTodoSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  updateTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.updateTodoRequest),
      switchMap((action) => {
        const toUpdateTodo: Partial<Todo> = {
          id: action.update.id as string,
          title: action.update.changes.title,
        };
        return this.todosService.updateTodo(toUpdateTodo).pipe(
          map(
            (updatedTodo): Update<Todo> => ({
              id: updatedTodo.id,
              changes: { title: updatedTodo.title },
            })
          ),
          mergeMap((updatedTodo) => [
            TodosActions.updateTodo({ update: updatedTodo }),
            TodosActions.updateTodoSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  deleteTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.deleteTodoRequest),
      switchMap((action) => {
        const id = action.id;
        return this.todosService.deleteTodo(id).pipe(
          mergeMap((deletedTodo) => [
            TodosActions.deleteTodo({ id: deletedTodo.id }),
            TodosActions.deleteTodoSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
