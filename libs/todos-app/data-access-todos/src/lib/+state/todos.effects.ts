import { Update } from '@ngrx/entity';
import { Todo } from '@todos-workspace/shared/models';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
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
          map((todos) => TodosActions.loadTodos({ todos })),
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
          map((newTodo) => TodosActions.addTodo({ todo: newTodo })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  updateTodoRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.updateTodoRequest),
      switchMap((action) => {
        const updateChanges: Partial<Todo> = action.update.changes;
        const updateChangesKeys: string[] = Object.keys(updateChanges);

        const toUpdateTodo: Partial<Todo> = {
          id: action.update.id as string,
          ...(updateChangesKeys.includes('title') && {
            title: updateChanges.title,
          }),
          ...(updateChangesKeys.includes('completed') && {
            completed: updateChanges.completed,
          }),
        };
        return this.todosService.updateTodo(toUpdateTodo).pipe(
          map(
            (updatedTodo): Update<Todo> => ({
              id: updatedTodo.id,
              changes: {
                title: updatedTodo.title,
                completed: updatedTodo.completed,
              },
            })
          ),
          map((updatedTodo) =>
            TodosActions.updateTodo({ update: updatedTodo })
          ),
          catchError(() => EMPTY)
        );
      })
    )
  );

  updateTodosRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.updateTodosRequest),
      switchMap((action) => {
        const toUpdateTodos: Partial<Todo>[] = [];

        action.updates.forEach((update) => {
          const updateChanges: Partial<Todo> = update.changes;
          const updateChangesKeys: string[] = Object.keys(updateChanges);

          const toUpdateTodo: Partial<Todo> = {
            id: update.id as string,
            ...(updateChangesKeys.includes('title') && {
              title: updateChanges.title,
            }),
            ...(updateChangesKeys.includes('completed') && {
              completed: updateChanges.completed,
            }),
          };

          toUpdateTodos.push(toUpdateTodo);
        });
        return this.todosService.updateTodos(toUpdateTodos).pipe(
          map((updatedTodos): Update<Todo>[] => {
            return updatedTodos.map((updatedTodo) => ({
              id: updatedTodo.id,
              changes: {
                title: updatedTodo.title,
                completed: updatedTodo.completed,
              },
            }));
          }),
          map((updatedTodos) =>
            TodosActions.updateTodos({ updates: updatedTodos })
          ),
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
          map((deletedTodo) => TodosActions.deleteTodo({ id: deletedTodo.id })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
