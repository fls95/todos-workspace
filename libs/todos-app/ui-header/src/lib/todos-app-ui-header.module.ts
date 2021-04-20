import { NgModule } from '@angular/core';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [TodosAppUiMaterialModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class TodosAppUiHeaderModule {}
