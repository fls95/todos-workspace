import { Todo } from '@todos-workspace/shared/models';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum TodosActionTypes {
  LoadTodosRequest = '[Todos Page] Load Todos Request',
  LoadTodos = '[Todos Page] Load Todos',
  LoadTodosSuccess = '[Todos Page] Load Todos Success',
  AddTodoRequest = '[Todos Page] Add Todo Request',
  AddTodo = '[Todos Page] Add Todo',
  AddTodoSuccess = '[Todos Page] Add Todo Success',
  UpdateTodoRequest = '[Todos Page] Update Todo Request',
  UpdateTodo = '[Todos Page] Update Todo',
  UpdateTodoSuccess = '[Todos Page] Update Todo Success',
  DeleteTodoRequest = '[Todos Page] Delete Todo Request',
  DeleteTodo = '[Todos Page] Delete Todo',
  DeleteTodoSuccess = '[Todos Page] Delete Todo Success',
}

export const loadTodosRequest = createAction(TodosActionTypes.LoadTodosRequest);

export const loadTodos = createAction(
  TodosActionTypes.LoadTodos,
  props<{ todos: Todo[] }>()
);

export const loadTodosSuccess = createAction(TodosActionTypes.LoadTodosSuccess);

export const addTodoRequest = createAction(
  TodosActionTypes.AddTodoRequest,
  props<{ todo: Todo }>()
);

export const addTodo = createAction(
  TodosActionTypes.AddTodo,
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(TodosActionTypes.AddTodoSuccess);

export const updateTodoRequest = createAction(
  TodosActionTypes.UpdateTodoRequest,
  props<{ update: Update<Todo> }>()
);

export const updateTodo = createAction(
  TodosActionTypes.UpdateTodo,
  props<{ update: Update<Todo> }>()
);

export const updateTodoSuccess = createAction(
  TodosActionTypes.UpdateTodoSuccess
);

export const deleteTodoRequest = createAction(
  TodosActionTypes.DeleteTodoRequest,
  props<{ id: Todo['id'] }>()
);

export const deleteTodo = createAction(
  TodosActionTypes.DeleteTodo,
  props<{ id: Todo['id'] }>()
);

export const deleteTodoSuccess = createAction(
  TodosActionTypes.DeleteTodoSuccess
);
