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
  TodosState,
  selectTodoLoading,
} from '@todos-workspace/todos-app/data-access-todos';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoDialogComponent } from '@todos-workspace/todos-app/ui-new-todo-dialog';
import { AutoUnsubscribe } from '@todos-workspace/todos-app/util-auto-unsubscribe';

@Component({
  selector: 'todos-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
@AutoUnsubscribe
export class TodosComponent {
  selectTodoLoadingSubscription$: Subscription;
  afterClosedSubscription$: Subscription;
  todos$: Observable<Todo[]> = this.store.select(selectAllTodos);
  loading: boolean;

  constructor(
    private store: Store<TodosState>,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.selectTodoLoadingSubscription$ = this.store
      .select(selectTodoLoading)
      .subscribe((loading) => {
        this.loading = loading;
      });

    this.fetch();
  }

  fetch() {
    this.store.dispatch(loadTodosRequest());
  }

  addTodo() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewTodoDialogComponent);

    this.afterClosedSubscription$ = dialogRef
      .afterClosed()
      .subscribe((newTodo) => {
        console.log(newTodo);
        if (newTodo) {
          this.store.dispatch(addTodoRequest({ todo: newTodo }));
        }
      });
  }

  onTodoUpdate(update: Update<Todo>) {
    this.store.dispatch(updateTodoRequest({ update }));
  }

  onTodoDelete(id: Todo['id']) {
    this.store.dispatch(deleteTodoRequest({ id }));
  }

  navigateToDetail(id: Todo['id']) {
    this.router.navigate(['/todo-detail'], { queryParams: { id: id } });
  }
}
