import { Update } from '@ngrx/entity';
import { TodoDetail } from '@todos-workspace/shared/models';
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

import * as TodoDetailActions from './todo-detail.actions';
import { TodoDetailService } from '../services/todo-detail/todo-detail.service';

@Injectable()
export class TodoDetailEffects {
  loadTodoDetailRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoDetailActions.loadTodoDetailRequest),
      switchMap((action) => {
        const id = action.id;
        return this.todoDetailService.getTodoDetail(id).pipe(
          mergeMap((todoDetail) => [
            TodoDetailActions.loadTodoDetail({ todoDetail }),
            TodoDetailActions.loadTodoDetailSuccess(),
          ]),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          })
        );
      })
    )
  );

  addTodoDetailRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoDetailActions.addTodoDetailRequest),
      concatMap((action) => {
        return this.todoDetailService.addTodoDetail(action.todoDetail).pipe(
          mergeMap((newTodoDetail) => [
            TodoDetailActions.addTodoDetail({ todoDetail: newTodoDetail }),
            TodoDetailActions.addTodoDetailSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  updateTodoDetailRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoDetailActions.updateTodoDetailRequest),
      switchMap((action) => {
        const toUpdateTodoDetail: Partial<TodoDetail> = {
          id: action.update.id as string,
          title: action.update.changes.title,
          detail: action.update.changes.detail,
        };
        return this.todoDetailService.updateTodoDetail(toUpdateTodoDetail).pipe(
          map(
            (updatedTodoDetail): Update<TodoDetail> => ({
              id: updatedTodoDetail.id,
              changes: {
                title: updatedTodoDetail.title,
                detail: updatedTodoDetail.detail,
              },
            })
          ),
          mergeMap((updatedTodoDetail) => [
            TodoDetailActions.updateTodoDetail({ update: updatedTodoDetail }),
            TodoDetailActions.updateTodoDetailSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  deleteTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoDetailActions.deleteTodoDetailRequest),
      switchMap((action) => {
        const id = action.id;
        return this.todoDetailService.deleteTodoDetail(id).pipe(
          mergeMap((deletedTodoDetail) => [
            TodoDetailActions.deleteTodoDetail({ id: deletedTodoDetail.id }),
            TodoDetailActions.deleteTodoDetailSuccess(),
          ]),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private todoDetailService: TodoDetailService
  ) {}
}
