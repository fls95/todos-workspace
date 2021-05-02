import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'todos-workspace-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ViewChildren('tab') tabs: QueryList<TemplateRef<any>>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
