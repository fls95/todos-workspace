import { Update } from '@ngrx/entity';
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoDetail } from '@todos-workspace/shared/models';
import {
  selectCurrentTodoDetail,
  loadTodoDetailRequest,
  updateTodoDetailRequest,
  deleteTodoDetailRequest,
  TodoDetailState,
  selectTodoDetailLoading,
} from '@todos-workspace/todos-app/data-access-todo-detail';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TodoDetailFormComponent } from '@todos-workspace/todos-app/ui-todo-detail-form';
import { AutoUnsubscribe } from '@todos-workspace/todos-app/util-auto-unsubscribe';

@Component({
  selector: 'todos-workspace-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
@AutoUnsubscribe
export class TodoDetailComponent {
  queryParamsSubscription$: Subscription;
  selectTodoDetailLoadingSubscription$: Subscription;
  todoDetail$: Observable<TodoDetail> = this.store.select(
    selectCurrentTodoDetail
  );
  loading: boolean;

  @ViewChild(TodoDetailFormComponent, { static: false })
  todoDetailFormComponent: TodoDetailFormComponent;

  constructor(
    private store: Store<TodoDetailState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.queryParamsSubscription$ = this.route.queryParams
      .pipe(filter((params) => params.id))
      .subscribe((params) => {
        this.store.dispatch(loadTodoDetailRequest({ id: params.id }));
      });
  }

  onNavigateToTodos() {
    const update: Update<TodoDetail> = {
      id: this.todoDetailFormComponent.todoDetail.id,
      changes: {
        title: this.todoDetailFormComponent.todoDetailFormGroup.value.title,
        completed: this.todoDetailFormComponent.todoDetailFormGroup.value
          .completed,
        detail: this.todoDetailFormComponent.todoDetailFormGroup.value.detail,
      },
    };

    this.store.dispatch(updateTodoDetailRequest({ update }));

    this.navigateToTodos();
  }

  onTodoAndTodoDetailDelete() {
    this.store.dispatch(
      deleteTodoDetailRequest({
        id: this.todoDetailFormComponent.todoDetail.id,
      })
    );

    this.navigateToTodos();
  }

  navigateToTodos() {
    this.selectTodoDetailLoadingSubscription$ = this.store
      .select(selectTodoDetailLoading)
      .subscribe((loading) => {
        this.loading = loading;
        if (!loading) {
          this.router.navigate(['/todos']);
        }
      });
  }
}
