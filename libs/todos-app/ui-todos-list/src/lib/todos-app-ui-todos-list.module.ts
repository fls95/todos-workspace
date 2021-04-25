import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodosAppUiTodoFormModule } from '@todos-workspace/todos-app/ui-todo-form';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule, TodosAppUiTodoFormModule],
  declarations: [TodosListComponent],
  exports: [TodosListComponent],
})
export class TodosAppUiTodosListModule {}
