import * as fromTodoDetail from './todo-detail.reducer';
import { selectTodoDetailState } from './todo-detail.selectors';

describe('TodoDetail Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTodoDetailState({
      [fromTodoDetail.todoDetailFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
