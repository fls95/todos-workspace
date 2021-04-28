import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodosAppUiHeaderModule } from '@todos-workspace/todos-app/ui-header';
import { TodosAppUiTodoDetailHeaderModule } from '@todos-workspace/todos-app/ui-todo-detail-header';
import { TodosAppUiTodoDetailFormModule } from '@todos-workspace/todos-app/ui-todo-detail-form';
import { TodosAppDataAccessTodoDetailModule } from '@todos-workspace/todos-app/data-access-todo-detail';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosAppUiLoadingIndicatorModule } from '@todos-workspace/todos-app/ui-loading-indicator';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';

const routes: Routes = [
  {
    path: '',
    component: TodoDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TodosAppUiHeaderModule,
    TodosAppUiTodoDetailHeaderModule,
    TodosAppUiMaterialModule,
    TodosAppUiTodoDetailFormModule,
    RouterModule.forChild(routes),
    TodosAppDataAccessTodoDetailModule,
    TodosAppUiLoadingIndicatorModule,
  ],
  declarations: [TodoDetailComponent],
  exports: [TodoDetailComponent],
})
export class TodosAppFeatureTodoDetailModule {}
