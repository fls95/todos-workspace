import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class TodosAppUiHeaderModule {}
