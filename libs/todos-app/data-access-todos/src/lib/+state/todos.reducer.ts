import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';
import { Todo } from '@todos-workspace/shared/models';

export const todosFeatureKey = 'todos';

/**
 * Interface for the 'Todos' data used in
 *  - TodosState, and
 *  - todosReducer
 */
export interface TodosData {
  loading: boolean;
  todos: Todo[];
  error: '';
}

/**
 * Interface to the part of the Store containing TodosState
 * and other information related to TodosData.
 */
export interface TodosState {
  readonly todos: TodosData;
}

export const initialState: TodosData = {
  loading: false,
  todos: [],
  error: '',
};

// export interface State {

// }

// export const initialState: State = {

// };

const TodosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, (state) => ({ ...state, loading: true })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    todos: todos,
    error: '',
  }))
);

export function reducer(state: TodosData | undefined, action: Action) {
  return TodosReducer(state, action);
}
