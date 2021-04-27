import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDetail } from '@todos-workspace/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoDetailService {
  constructor(private http: HttpClient) {}

  getTodoDetail(id: TodoDetail['id']): Observable<TodoDetail> {
    return this.http.get<TodoDetail>(`/api/todo-detail/${id}`);
  }

  addTodoDetail(todoDetail: TodoDetail): Observable<TodoDetail> {
    return this.http
      .post<{ todoDetail: TodoDetail }>('/api/todo-detail', { todoDetail })
      .pipe(map((res) => res.todoDetail));
  }

  updateTodoDetail(todoDetail: Partial<TodoDetail>): Observable<TodoDetail> {
    return this.http
      .patch<{ todoDetail: TodoDetail }>(`/api/todo-detail/${todoDetail.id}`, {
        todoDetail,
      })
      .pipe(map((res) => res.todoDetail));
  }

  deleteTodoDetail(id: TodoDetail['id']): Observable<TodoDetail> {
    return this.http
      .delete<{ todoDetail: TodoDetail }>(`/api/todo-detail/${id}`)
      .pipe(map((res) => res.todoDetail));
  }
}
