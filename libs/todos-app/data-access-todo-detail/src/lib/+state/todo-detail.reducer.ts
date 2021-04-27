import { Action, createReducer, on } from '@ngrx/store';
import * as TodoDetailActions from './todo-detail.actions';
import { TodoDetail } from '@todos-workspace/shared/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const todoDetailFeatureKey = 'todoDetail';

/**
 * Interface for the 'TodoDetail' data used in
 *  - TodoDetailState, and
 *  - todosReducer
 */
export interface TodoDetailData extends EntityState<TodoDetail> {
  loading: boolean;
  selectedTodoDetailId: string;
  error: '';
}

/**
 * Interface to the part of the Store containing TodoDetailState
 * and other information related to TodoDetailData.
 */
export interface TodoDetailState {
  readonly todosDetails: TodoDetailData;
}

export const adapter: EntityAdapter<TodoDetail> = createEntityAdapter<TodoDetail>();

export const initialState: TodoDetailData = adapter.getInitialState({
  loading: false,
  selectedTodoDetailId: null,
  error: null,
});

const todosReducer = createReducer(
  initialState,
  on(TodoDetailActions.loadTodoDetailRequest, (state, { id }) => ({
    ...state,
    loading: true,
    selectedTodoDetailId: id,
  })),
  on(
    TodoDetailActions.addTodoDetailRequest,
    TodoDetailActions.updateTodoDetailRequest,
    TodoDetailActions.deleteTodoDetailRequest,
    (state) => ({
      ...state,
      loading: true,
    })
  ),
  on(TodoDetailActions.loadTodoDetailSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(
    TodoDetailActions.addTodoDetailSuccess,
    TodoDetailActions.updateTodoDetailSuccess,
    TodoDetailActions.deleteTodoDetailSuccess,
    (state) => ({
      ...state,
      loading: false,
      selectedTodoDetailId: null,
      error: null,
    })
  ),
  on(TodoDetailActions.loadTodoDetail, (state, { todoDetail }) =>
    adapter.setOne(todoDetail, state)
  ),
  on(TodoDetailActions.addTodoDetail, (state, { todoDetail }) =>
    adapter.addOne(todoDetail, state)
  ),
  on(TodoDetailActions.updateTodoDetail, (state, { update }) =>
    adapter.updateOne(update, state)
  ),
  on(TodoDetailActions.deleteTodoDetail, (state, { id }) =>
    adapter.removeOne(id, state)
  )
);

export function reducer(state: TodoDetailData | undefined, action: Action) {
  return todosReducer(state, action);
}

export const getSelectedTodoDetailId = (state: TodoDetailData) =>
  state.selectedTodoDetailId;

export const getLoading = (state: TodoDetailData) => state.loading;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of todo detail ids
export const selectTodoDetailIds = selectIds;

// select the dictionary of todo detail entities
export const selectTodoDetailEntities = selectEntities;

// select the array of todo details
export const selectAllTodoDetails = selectAll;

// select the total todo detail count
export const selectTodoDetailTotal = selectTotal;
