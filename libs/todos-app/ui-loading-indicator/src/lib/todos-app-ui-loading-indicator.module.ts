import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule],
  declarations: [
    LoadingIndicatorComponent
  ],
  exports: [
    LoadingIndicatorComponent
  ],
})
export class TodosAppUiLoadingIndicatorModule {}
