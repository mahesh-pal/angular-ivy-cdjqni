import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class MyIf {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input() set myIf(expr) {
    console.log(expr);
    if (expr) {
      this.container.createEmbeddedView(this.template, {
        $implicit: expr,
      });
    } else {
      this.container.clear();
    }
  }
}
