import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsConceptComponent } from './tabs-concept/tabs-concept.component';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';

@NgModule({
  imports: [CommonModule, TodosAppUiMaterialModule],
  declarations: [TabsConceptComponent],
  exports: [TabsConceptComponent],
})
export class TodosAppUiTabsConceptModule {}
