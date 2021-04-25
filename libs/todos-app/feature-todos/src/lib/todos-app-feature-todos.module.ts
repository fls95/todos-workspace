import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosAppUiTodosListModule } from '@todos-workspace/todos-app/ui-todos-list';
import { Routes, RouterModule } from '@angular/router';
import { TodosAppDataAccessTodosModule } from '@todos-workspace/todos-app/data-access-todos';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TodosAppUiMaterialModule,
    TodosAppUiTodosListModule,
    RouterModule.forChild(routes),
    TodosAppDataAccessTodosModule,
  ],
  declarations: [TodosComponent],
})
export class TodosAppFeatureTodosModule {}
