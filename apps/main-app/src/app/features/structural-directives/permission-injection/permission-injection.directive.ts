import { NgIf } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

type Permission = 'admin' | 'user';

@Directive({
  selector: '[appPermissionInjection]',
  hostDirectives: [
    {
      directive: NgIf,
      inputs: ['ngIfElse: appPermissionInjectionElse'],
    },
  ],
})
export class PermissionInjectionDirective {

  private ngIfDirective = inject(NgIf);

  @Input('appPermissionInjection') set permission(role: Permission) {
    this.ngIfDirective.ngIf = role === 'admin';
  }
} 