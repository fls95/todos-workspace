import { Todo } from '@todos-workspace/shared/models';
import { createAction, props } from '@ngrx/store';

export enum TodosActionTypes {
  LoadTodos = '[Todos Page] Load Todos',
  LoadTodosSuccess = '[Todos Page] Load Todos Success',
}

export const loadTodos = createAction(TodosActionTypes.LoadTodos);

export const loadTodosSuccess = createAction(
  TodosActionTypes.LoadTodosSuccess,
  props<{ todos: Todo[] }>()
);
