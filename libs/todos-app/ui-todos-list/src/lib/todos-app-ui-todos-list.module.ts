import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodosListComponent } from './todos-list/todos-list.component';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule],
  declarations: [TodosListComponent],
  exports: [TodosListComponent],
})
export class TodosAppUiTodosListModule {}
