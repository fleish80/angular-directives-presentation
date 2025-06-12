import { Directive, Input, TemplateRef, ViewContainerRef, inject, effect, signal } from '@angular/core';

type Permission = 'admin' | 'user';

@Directive({
  selector: '[appPermissionStructuralInjection]',
  standalone: true
})
export class PermissionStructuralInjectionDirective {
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef);

  // Signals for inputs
  private _permission = signal<Permission | undefined>(undefined);
  private _elseTemplate = signal<TemplateRef<unknown> | undefined>(undefined);

  @Input('appPermissionStructuralInjection')
  set permission(role: Permission) {
    this._permission.set(role);
  }

  @Input('appPermissionStructuralInjectionElse')
  set elseTemplateRef(template: TemplateRef<unknown>) {
    this._elseTemplate.set(template);
  }

  private _effect = effect(() => {
    this.viewContainer.clear();
    const role = this._permission();
    const elseTemplate = this._elseTemplate();
    if (role === 'admin') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (elseTemplate) {
      this.viewContainer.createEmbeddedView(elseTemplate);
    }
  });
} 