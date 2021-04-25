import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.TodosData>(
  fromTodos.todosFeatureKey
);

export const selectTodoIds = createSelector(
  selectTodosState,
  fromTodos.selectTodoIds // shorthand for todosState => fromTodos.selectTodoIds(todosState)
);
export const selectTodoEntities = createSelector(
  selectTodosState,
  fromTodos.selectTodoEntities
);
export const selectAllTodos = createSelector(
  selectTodosState,
  fromTodos.selectAllTodos
);
export const selectTodoTotal = createSelector(
  selectTodosState,
  fromTodos.selectTodoTotal
);
export const selectCurrentTodoId = createSelector(
  selectTodosState,
  fromTodos.getSelectedTodoId
);

export const selectCurrentTodo = createSelector(
  selectTodoEntities,
  selectCurrentTodoId,
  (todoEntities, todoId) => todoEntities[todoId]
);
