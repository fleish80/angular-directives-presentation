import { Directive, Input, TemplateRef, ViewContainerRef, signal } from '@angular/core';

type Permission = 'admin' | 'user' | 'guest';

@Directive({
  selector: '[appPermission]',
  standalone: true
})
export class PermissionDirective {
  private readonly currentPermission = signal<Permission>('guest');
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appPermission(permission: Permission) {
    this.currentPermission.set(permission);
    this.updateView();
  }

  @Input() set appPermissionRequired(requiredPermission: Permission) {
    this.updateView();
  }

  private updateView(): void {
    const hasPermission = this.checkPermission();
    
    if (hasPermission && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!hasPermission && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  private checkPermission(): boolean {
    const permissionHierarchy: Record<Permission, number> = {
      admin: 3,
      user: 2,
      guest: 1
    };

    return permissionHierarchy[this.currentPermission()] >= permissionHierarchy['user'];
  }
} 