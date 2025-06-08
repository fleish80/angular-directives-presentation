import { Component } from '@angular/core';

@Component({
  selector: 'app-code-example',
  standalone: true,
  template: `
    <pre><code>
&#64;Directive(&#123;
  selector: '[appPermission]',
  standalone: true
&#125;)
export class PermissionDirective &#123;
  private readonly currentPermission = signal&lt;Permission&gt;('guest');
  private hasView = false;

  constructor(
    private templateRef: TemplateRef&lt;unknown&gt;,
    private viewContainer: ViewContainerRef
  ) &#123;&#125;

  &#64;Input() set appPermission(permission: Permission) &#123;
    this.currentPermission.set(permission);
    this.updateView();
  &#125;

  private updateView(): void &#123;
    const hasPermission = this.checkPermission();
    
    if (hasPermission && !this.hasView) &#123;
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    &#125; else if (!hasPermission && this.hasView) &#123;
      this.viewContainer.clear();
      this.hasView = false;
    &#125;
  &#125;
&#125;</code></pre>
  `,
  styles: [`
    pre {
      background-color: #f5f5f5;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
    }
    code {
      font-family: 'Courier New', Courier, monospace;
    }
  `]
})
export class CodeExampleComponent {} 