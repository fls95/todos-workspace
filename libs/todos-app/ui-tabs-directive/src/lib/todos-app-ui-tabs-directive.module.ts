import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsDirectiveDirective } from './tabs-directive.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsDirectiveDirective],
  exports: [TabsDirectiveDirective],
})
export class TodosAppUiTabsDirectiveModule {}
