import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SmartTooltipDirective } from './tooltip.directive';
import { MatTooltip } from '@angular/material/tooltip';

type TooltipPosition = 'above' | 'below' | 'left' | 'right';

@Component({
  selector: 'app-directive-composition',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatInput,
    FormsModule,
    SmartTooltipDirective,
    MatTooltip
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Directive Composition Example</mat-card-title>
        <mat-card-subtitle>Smart tooltip with focus and hover states</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="example-section">
          <h3>Tooltip Configuration</h3>
          <div class="tooltip-controls">
            <mat-form-field>
              <mat-label>Tooltip Position</mat-label>
              <mat-select [(ngModel)]="tooltipPosition">
                <mat-option value="above">Above</mat-option>
                <mat-option value="below">Below</mat-option>
                <mat-option value="left">Left</mat-option>
                <mat-option value="right">Right</mat-option>
              </mat-select>
            </mat-form-field>

            <mat-form-field>
              <mat-label>Tooltip Text</mat-label>
              <input matInput [(ngModel)]="tooltipText" placeholder="Enter tooltip text">
            </mat-form-field>
          </div>

          <div class="tooltip-demo">
            <h4>Interactive Elements with Smart Tooltips</h4>
            
            <div class="demo-item">
              <button mat-raised-button
                      [appSmartTooltip]="true"
                      [tooltipText]="tooltipText"
                      [tooltipPosition]="tooltipPosition()">
                Hover or Focus Me
              </button>
              <span class="state-indicator">
                States: 
                <span class="state enabled">Enabled</span>
                <span class="state hovered">Hovered</span>
                <span class="state focused">Focused</span>
              </span>
            </div>

            <div class="demo-item">
              <button mat-icon-button
                      [appSmartTooltip]="true"
                      [tooltipText]="'Icon button with tooltip'"
                      [tooltipPosition]="tooltipPosition()">
                <mat-icon>info</mat-icon>
              </button>
              <span class="state-indicator">
                States: 
                <span class="state enabled">Enabled</span>
                <span class="state hovered">Hovered</span>
                <span class="state focused">Focused</span>
              </span>
            </div>

            <div class="demo-item">
              <button mat-raised-button
                      color="warn"
                      [appSmartTooltip]="false"
                      [tooltipText]="'This tooltip is disabled'"
                      [tooltipPosition]="tooltipPosition()">
                Disabled Tooltip
              </button>
              <span class="state-indicator">
                States: 
                <span class="state disabled">Disabled</span>
              </span>
            </div>
          </div>
        </div>

        <div class="example-section">
          <h3>Code Example</h3>
          <pre><code>{{ codeExample }}</code></pre>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .example-section {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .tooltip-controls {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
    .tooltip-demo {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }
    .demo-item {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .state-indicator {
      font-size: 0.9em;
      color: #666;
    }
    .state {
      display: inline-block;
      padding: 2px 8px;
      margin: 0 4px;
      border-radius: 12px;
      font-size: 0.8em;
    }
    .state.enabled {
      background-color: #e3f2fd;
      color: #1976d2;
    }
    .state.hovered {
      background-color: #f3e5f5;
      color: #7b1fa2;
    }
    .state.focused {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    .state.disabled {
      background-color: #f5f5f5;
      color: #9e9e9e;
    }
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
export class DirectiveCompositionComponent {
  tooltipText = 'This is a smart tooltip with focus and hover states';
  tooltipPosition = signal<TooltipPosition>('above');

  readonly codeExample = `@Directive({
  selector: '[appSmartTooltip]',
  standalone: true,
  hostDirectives: [
    {
      directive: MatTooltip,
      inputs: ['matTooltip: tooltipText', 'matTooltipPosition: tooltipPosition']
    }
  ],
  host: {
    '[class.tooltip-enabled]': 'isEnabled()',
    '[class.tooltip-focused]': 'isFocused()',
    '[class.tooltip-hovered]': 'isHovered()'
  }
})
export class SmartTooltipDirective {
  private readonly isEnabled = signal(true);
  private readonly isFocused = signal(false);
  private readonly isHovered = signal(false);

  @Input() set appSmartTooltip(enabled: boolean) {
    this.isEnabled.set(enabled);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isHovered.set(true);
  }

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.set(true);
  }
}`;
} 