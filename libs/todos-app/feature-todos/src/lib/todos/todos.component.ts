import * as TodosActions from './../../../../data-access-todos/src/lib/+state/todos.actions';
import * as TodosSelectors from './../../../../data-access-todos/src/lib/+state/todos.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '@todos-workspace/shared/models';
import { TodosService } from '../services/todos/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'todos-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  // todos: Todo[] = [];
  todos$: Observable<Todo[]> = this.store.select(TodosSelectors.selectTodos);

  constructor(
    private todosService: TodosService,
    private store: Store<{ todos: Todo[] }>
  ) {
    this.fetch();
  }

  fetch() {
    // this.todosService.getTodos().subscribe((t) => (this.todos = t));
    this.store.dispatch(TodosActions.loadTodos());
  }

  addTodo() {
    console.log(this.store);
    this.todosService.addTodo().subscribe(() => {
      this.fetch();
    });
  }
}
