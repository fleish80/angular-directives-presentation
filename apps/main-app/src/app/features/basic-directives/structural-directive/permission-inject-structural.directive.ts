import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

type Permission = 'admin' | 'user';

@Directive({
  selector: '[appPermissionInjectStructural]'
})
export class PermissionInjectStructuralDirective {
  
    private readonly viewContainer = inject(ViewContainerRef);
    private readonly templateRef = inject(TemplateRef);


  @Input('appPermissionInjectStructural') set permission(role: Permission) {
    this.updateView(role);
  }

  @Input('appPermissionInjectStructuralElse') elseTemplateRef:  TemplateRef<unknown>;


  private updateView(role: Permission): void {
    this.viewContainer.clear();
    if (role === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.elseTemplateRef) {
      this.viewContainer.createEmbeddedView(this.elseTemplateRef);
    }
  }
} 