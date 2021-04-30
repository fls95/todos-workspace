import { Todo } from '@todos-workspace/shared/models';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum TodosActionTypes {
  LoadTodosRequest = '[Todos Page] Load Todos Request',
  LoadTodos = '[Todos Page] Load Todos',
  AddTodoRequest = '[Todos Page] Add Todo Request',
  AddTodo = '[Todos Page] Add Todo',
  UpdateTodoRequest = '[Todos Page] Update Todo Request',
  UpdateTodo = '[Todos Page] Update Todo',
  UpdateTodosRequest = '[Todos Page] Update Todos Request',
  UpdateTodos = '[Todos Page] Update Todos',
  DeleteTodoRequest = '[Todos Page] Delete Todo Request',
  DeleteTodo = '[Todos Page] Delete Todo',
}

export const loadTodosRequest = createAction(TodosActionTypes.LoadTodosRequest);

export const loadTodos = createAction(
  TodosActionTypes.LoadTodos,
  props<{ todos: Todo[] }>()
);

export const addTodoRequest = createAction(
  TodosActionTypes.AddTodoRequest,
  props<{ todo: Todo }>()
);

export const addTodo = createAction(
  TodosActionTypes.AddTodo,
  props<{ todo: Todo }>()
);

export const updateTodoRequest = createAction(
  TodosActionTypes.UpdateTodoRequest,
  props<{ update: Update<Todo> }>()
);

export const updateTodo = createAction(
  TodosActionTypes.UpdateTodo,
  props<{ update: Update<Todo> }>()
);

export const updateTodosRequest = createAction(
  TodosActionTypes.UpdateTodosRequest,
  props<{ updates: Update<Todo>[] }>()
);

export const updateTodos = createAction(
  TodosActionTypes.UpdateTodos,
  props<{ updates: Update<Todo>[] }>()
);

export const deleteTodoRequest = createAction(
  TodosActionTypes.DeleteTodoRequest,
  props<{ id: Todo['id'] }>()
);

export const deleteTodo = createAction(
  TodosActionTypes.DeleteTodo,
  props<{ id: Todo['id'] }>()
);
