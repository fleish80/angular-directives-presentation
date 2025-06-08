import { Component } from '@angular/core';
import { ContentBoxDirective } from './content-box.directive';

@Component({
  selector: 'app-content-directive',
  standalone: true,
  imports: [ContentBoxDirective],
  template: `
    <div class="container">
      <h2>Content Projection Example</h2>
      
      <div appContentBox variant="primary">
        <h3>Primary Box</h3>
        <p>This content is projected into a primary styled box using a directive.</p>
      </div>

      <div appContentBox variant="secondary">
        <h3>Secondary Box</h3>
        <p>This content is projected into a secondary styled box using the same directive.</p>
      </div>

      <div class="explanation">
        <h3>How it works:</h3>
        <p>The <code>appContentBox</code> directive uses host binding to apply different styles based on the variant input.</p>
        <p>Any content placed inside the element with the directive will be styled according to the variant.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .content-box {
      padding: 20px;
      margin: 20px 0;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .content-box--primary {
      background-color: #e3f2fd;
      border: 1px solid #90caf9;
    }

    .content-box--secondary {
      background-color: #f3e5f5;
      border: 1px solid #ce93d8;
    }

    .explanation {
      margin-top: 40px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
    }

    code {
      background-color: #e0e0e0;
      padding: 2px 4px;
      border-radius: 4px;
    }
  `]
})
export class ContentDirectiveComponent {} 