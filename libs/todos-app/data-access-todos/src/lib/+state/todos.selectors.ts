import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.TodosData>(
  fromTodos.todosFeatureKey
);

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);
