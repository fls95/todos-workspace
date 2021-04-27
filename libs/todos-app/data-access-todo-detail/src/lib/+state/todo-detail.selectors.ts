import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoDetail from './todo-detail.reducer';

export const selectTodoDetailState = createFeatureSelector<fromTodoDetail.TodoDetailData>(
  fromTodoDetail.todoDetailFeatureKey
);

export const selectTodoDetailIds = createSelector(
  selectTodoDetailState,
  fromTodoDetail.selectTodoDetailIds
);
export const selectTodoDetailEntities = createSelector(
  selectTodoDetailState,
  fromTodoDetail.selectTodoDetailEntities
);
export const selectAllTodoDetails = createSelector(
  selectTodoDetailState,
  fromTodoDetail.selectAllTodoDetails
);
export const selectTodoDetailTotal = createSelector(
  selectTodoDetailState,
  fromTodoDetail.selectTodoDetailTotal
);
export const selectCurrentTodoDetailId = createSelector(
  selectTodoDetailState,
  fromTodoDetail.getSelectedTodoDetailId
);

export const selectCurrentTodoDetail = createSelector(
  selectTodoDetailEntities,
  selectCurrentTodoDetailId,
  (todoDetailEntities, todoDetailId) => todoDetailEntities[todoDetailId]
);

export const selectTodoDetailLoading = createSelector(
  selectTodoDetailState,
  fromTodoDetail.getLoading
);
