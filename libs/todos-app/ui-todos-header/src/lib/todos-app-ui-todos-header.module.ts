import { NgModule } from '@angular/core';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodosHeaderComponent } from './todos-header/todos-header.component';

@NgModule({
  imports: [TodosAppUiMaterialModule],
  declarations: [TodosHeaderComponent],
  exports: [TodosHeaderComponent],
})
export class TodosAppUiTodosHeaderModule {}
