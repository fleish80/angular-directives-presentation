import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

type Permission = 'admin' | 'user';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  private hasView = false;
  private required: Permission = 'user';
  private current: Permission = 'user';
  private elseTemplateRef: TemplateRef<unknown> | null = null;
  private elseViewRef: any = null;
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainer = inject(ViewContainerRef);

  @Input() set appPermission(permission: Permission) {
    this.current = permission;
    this.updateView();
  }

  @Input() set appPermissionElse(templateRef: TemplateRef<unknown> | null) {
    this.elseTemplateRef = templateRef;
    this.updateView();
  }

  @Input() set appPermissionRequired(required: Permission) {
    this.required = required;
    this.updateView();
  }

  private updateView(): void {
    if (this.current === this.required) {
      if (!this.hasView) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      this.viewContainer.clear();
      this.hasView = false;
      if (this.elseTemplateRef) {
        this.viewContainer.createEmbeddedView(this.elseTemplateRef);
      }
    }
  }
} 