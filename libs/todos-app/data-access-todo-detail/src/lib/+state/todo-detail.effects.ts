import { Update } from '@ngrx/entity';
import { TodoDetail } from '@todos-workspace/shared/models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
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
          map((todoDetail) => TodoDetailActions.loadTodoDetail({ todoDetail })),
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
          map((newTodoDetail) =>
            TodoDetailActions.addTodoDetail({ todoDetail: newTodoDetail })
          ),
          catchError(() => EMPTY)
        );
      })
    )
  );

  updateTodoDetailRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoDetailActions.updateTodoDetailRequest),
      switchMap((action) => {
        const updateChanges: Partial<TodoDetail> = action.update.changes;
        const updateChangesKeys: string[] = Object.keys(updateChanges);

        const toUpdateTodoDetail: Partial<TodoDetail> = {
          id: action.update.id as string,
          ...(updateChangesKeys.includes('title') && {
            title: updateChanges.title,
          }),
          ...(updateChangesKeys.includes('completed') && {
            completed: updateChanges.completed,
          }),
          ...(updateChangesKeys.includes('detail') && {
            detail: updateChanges.detail,
          }),
        };
        return this.todoDetailService.updateTodoDetail(toUpdateTodoDetail).pipe(
          map(
            (updatedTodoDetail): Update<TodoDetail> => ({
              id: updatedTodoDetail.id,
              changes: {
                title: updatedTodoDetail.title,
                completed: updatedTodoDetail.completed,
                detail: updatedTodoDetail.detail,
              },
            })
          ),
          map((updatedTodoDetail) =>
            TodoDetailActions.updateTodoDetail({ update: updatedTodoDetail })
          ),
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
          map((deletedTodoDetail) =>
            TodoDetailActions.deleteTodoDetail({ id: deletedTodoDetail.id })
          ),
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
