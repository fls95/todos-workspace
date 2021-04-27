import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodosAppUiTodoDetailHeaderModule } from '@todos-workspace/todos-app/ui-todo-detail-header';
import { TodosAppUiTodoDetailFormModule } from '@todos-workspace/todos-app/ui-todo-detail-form';
import { TodosAppDataAccessTodoDetailModule } from '@todos-workspace/todos-app/data-access-todo-detail';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TodosAppUiTodoDetailHeaderModule,
    TodosAppUiTodoDetailFormModule,
    RouterModule.forChild(routes),
    TodosAppDataAccessTodoDetailModule,
  ],
  declarations: [TodoDetailComponent],
  exports: [TodoDetailComponent],
})
export class TodosAppFeatureTodoDetailModule {}
