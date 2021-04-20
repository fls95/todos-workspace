import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@todos-workspace/shared/models';

@Component({
  selector: 'todos-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
