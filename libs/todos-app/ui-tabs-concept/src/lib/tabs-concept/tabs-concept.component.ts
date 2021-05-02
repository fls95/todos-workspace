import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'todos-workspace-tabs-concept',
  templateUrl: './tabs-concept.component.html',
  styleUrls: ['./tabs-concept.component.scss'],
})
export class TabsConceptComponent implements AfterContentInit {
  @ContentChild(MatTabGroup) matTabGroup: MatTabGroup;

  ngAfterContentInit() {
    this.matTabGroup.color = 'primary';
  }
}
