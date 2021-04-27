import * as fromTodoDetail from './todo-detail.actions';

describe('loadTodoDetails', () => {
  it('should return an action', () => {
    expect(fromTodoDetail.loadTodoDetails().type).toBe('[TodoDetail] Load TodoDetails');
  });
});
