import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive-child',
  template: `
    This text will be highlighted on hover
  `,
  styles: `
    :host {
      display: block;
      margin-block: 20px;
    }
  `
})
export class AttributeDirectiveChildComponent {}
