import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@todos-workspace/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<{ todo: Todo }>('/api/todos', { todo })
      .pipe(map((res) => res.todo));
  }

  updateTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http
      .patch<{ todo: Todo }>(`/api/todos/${todo.id}`, { todo })
      .pipe(map((res) => res.todo));
  }

  deleteTodo(id: Todo['id']): Observable<Todo> {
    return this.http
      .delete<{ todo: Todo }>(`/api/todos/${id}`)
      .pipe(map((res) => res.todo));
  }
}
