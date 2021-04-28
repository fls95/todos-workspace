import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosAppUiHeaderModule } from '@todos-workspace/todos-app/ui-header';
import { TodosAppUiTodosListModule } from '@todos-workspace/todos-app/ui-todos-list';
import { Routes, RouterModule } from '@angular/router';
import { TodosAppDataAccessTodosModule } from '@todos-workspace/todos-app/data-access-todos';
import { TodosComponent } from './todos/todos.component';
import { TodosAppUiLoadingIndicatorModule } from '@todos-workspace/todos-app/ui-loading-indicator';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TodosAppUiHeaderModule,
    TodosAppUiMaterialModule,
    TodosAppUiTodosListModule,
    RouterModule.forChild(routes),
    TodosAppDataAccessTodosModule,
    TodosAppUiLoadingIndicatorModule,
  ],
  declarations: [TodosComponent],
})
export class TodosAppFeatureTodosModule {}
