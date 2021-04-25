import { Update } from '@ngrx/entity';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '@todos-workspace/shared/models';
import {
  selectAllTodos,
  loadTodosRequest,
  addTodoRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from '@todos-workspace/todos-app/data-access-todos';
import { Observable } from 'rxjs';

const emptyTodo: Todo = {
  id: null,
  title: null,
};

@Component({
  selector: 'todos-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  // todos: Todo[] = [];
  todos$: Observable<Todo[]> = this.store.select(selectAllTodos);

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.fetch();
  }

  fetch() {
    this.store.dispatch(loadTodosRequest());
  }

  addTodo() {
    this.store.dispatch(addTodoRequest({ todo: emptyTodo }));
  }

  onTodoUpdate(update: Update<Todo>) {
    this.store.dispatch(updateTodoRequest({ update }));
  }

  onTodoDelete(id: Todo['id']) {
    this.store.dispatch(deleteTodoRequest({ id }));
  }
}
