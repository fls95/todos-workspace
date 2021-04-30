import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from './todos.actions';
import { Todo } from '@todos-workspace/shared/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const todosFeatureKey = 'todos';

/**
 * Interface for the 'Todos' data used in
 *  - TodosState, and
 *  - todosReducer
 */
export interface TodosData extends EntityState<Todo> {
  loading: boolean;
  selectedTodoId: string;
  error: '';
}

/**
 * Interface to the part of the Store containing TodosState
 * and other information related to TodosData.
 */
export interface TodosState {
  readonly todos: TodosData;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodosData = adapter.getInitialState({
  loading: false,
  selectedTodoId: null,
  error: null,
});

const todosReducer = createReducer(
  initialState,
  on(
    TodosActions.loadTodosRequest,
    TodosActions.addTodoRequest,
    TodosActions.updateTodoRequest,
    TodosActions.updateTodosRequest,
    TodosActions.deleteTodoRequest,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(TodosActions.loadTodos, (state, { todos }) =>
    adapter.setAll(todos, {
      ...state,
      loading: false,
      selectedTodoId: null,
      error: null,
    })
  ),
  on(TodosActions.addTodo, (state, { todo }) =>
    adapter.addOne(todo, {
      ...state,
      loading: false,
      selectedTodoId: null,
      error: null,
    })
  ),
  on(TodosActions.updateTodo, (state, { update }) =>
    adapter.updateOne(update, {
      ...state,
      loading: false,
      selectedTodoId: null,
      error: null,
    })
  ),
  on(TodosActions.updateTodos, (state, { updates }) =>
    adapter.updateMany(updates, {
      ...state,
      loading: false,
      selectedTodoId: null,
      error: null,
    })
  ),
  on(TodosActions.deleteTodo, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      loading: false,
      selectedTodoId: null,
      error: null,
    })
  )
);

export function reducer(state: TodosData | undefined, action: Action) {
  return todosReducer(state, action);
}

export const getSelectedTodoId = (state: TodosData) => state.selectedTodoId;

export const getLoading = (state: TodosData) => state.loading;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of todo ids
export const selectTodoIds = selectIds;

// select the dictionary of todo entities
export const selectTodoEntities = selectEntities;

// select the array of todos
export const selectAllTodos = selectAll;

// select the total todo count
export const selectTodoTotal = selectTotal;
