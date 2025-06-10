import { NgIf } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

type Permission = 'admin' | 'user';

@Directive({
  selector: '[appPermissionInject]',
  hostDirectives: [
    {
      directive: NgIf,
      inputs: ['ngIfElse: appPermissionInjectElse'],
    },
  ],
})
export class PermissionInjectDirective {

  private ngIfDirective = inject(NgIf);

  @Input('appPermissionInject') set permission(role: Permission) {
    this.ngIfDirective.ngIf = role === 'admin';
  }
}