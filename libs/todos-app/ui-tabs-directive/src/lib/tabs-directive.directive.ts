import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[todosWorkspaceTabsDirective]',
})
export class TabsDirectiveDirective implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() todosWorkspaceTabsDirective: TemplateRef<any>;

  constructor(private container: ViewContainerRef) {}

  ngOnInit() {
    this.container.createEmbeddedView(this.todosWorkspaceTabsDirective);
  }
}
