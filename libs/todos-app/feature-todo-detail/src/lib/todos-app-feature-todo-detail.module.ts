import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodosAppUiTodoDetailFormModule } from '@todos-workspace/todos-app/ui-todo-detail-form';
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
    TodosAppUiMaterialModule,
    TodosAppUiTodoDetailFormModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TodoDetailComponent],
  exports: [TodoDetailComponent],
})
export class TodosAppFeatureTodoDetailModule {}
