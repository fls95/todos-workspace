import { TodoDetail } from '@todos-workspace/shared/models';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum TodoDetailActionTypes {
  LoadTodoDetailRequest = '[TodoDetail Page] Load TodoDetail Request',
  LoadTodoDetail = '[TodoDetail Page] Load TodoDetail',
  AddTodoDetailRequest = '[TodoDetail Page] Add TodoDetail Request',
  AddTodoDetail = '[TodoDetail Page] Add TodoDetail',
  UpdateTodoDetailRequest = '[TodoDetail Page] Update TodoDetail Request',
  UpdateTodoDetail = '[TodoDetail Page] Update TodoDetail',
  DeleteTodoDetailRequest = '[TodoDetail Page] Delete TodoDetail Request',
  DeleteTodoDetail = '[TodoDetail Page] Delete TodoDetail',
}

export const loadTodoDetailRequest = createAction(
  TodoDetailActionTypes.LoadTodoDetailRequest,
  props<{ id: TodoDetail['id'] }>()
);

export const loadTodoDetail = createAction(
  TodoDetailActionTypes.LoadTodoDetail,
  props<{ todoDetail: TodoDetail }>()
);

export const addTodoDetailRequest = createAction(
  TodoDetailActionTypes.AddTodoDetailRequest,
  props<{ todoDetail: TodoDetail }>()
);

export const addTodoDetail = createAction(
  TodoDetailActionTypes.AddTodoDetail,
  props<{ todoDetail: TodoDetail }>()
);

export const updateTodoDetailRequest = createAction(
  TodoDetailActionTypes.UpdateTodoDetailRequest,
  props<{ update: Update<TodoDetail> }>()
);

export const updateTodoDetail = createAction(
  TodoDetailActionTypes.UpdateTodoDetail,
  props<{ update: Update<TodoDetail> }>()
);

export const deleteTodoDetailRequest = createAction(
  TodoDetailActionTypes.DeleteTodoDetailRequest,
  props<{ id: TodoDetail['id'] }>()
);

export const deleteTodoDetail = createAction(
  TodoDetailActionTypes.DeleteTodoDetail,
  props<{ id: TodoDetail['id'] }>()
);
