import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodoDetailHeaderComponent } from './todo-detail-header/todo-detail-header.component';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule],
  declarations: [TodoDetailHeaderComponent],
  exports: [TodoDetailHeaderComponent],
})
export class TodosAppUiTodoDetailHeaderModule {}
