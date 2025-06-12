import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-in-directives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="directive-info">
      <b>Note:</b> This example uses native <code>[class]</code> and <code>[style]</code> bindings instead of <code>ngClass</code> and <code>ngStyle</code>. In Angular 17+, <code>ngClass</code> and <code>ngStyle</code> are deprecated in favor of native bindings, which provide stronger typing, better performance, and improved template type checking. Native <code>[class]</code> and <code>[style]</code> bindings do <b>not</b> require importing any directive in the <code>imports</code> array.<br>
      <b>Also:</b> The legacy structural directives <code>*ngFor</code>, <code>*ngIf</code>, and <code>*ngSwitch</code> are replaced by the new control flow syntax (<code>&#64;for</code>, <code>&#64;if</code>, <code>&#64;switch</code>) in Angular 17+, which offer better type safety, performance, and template type checking, and do <b>not</b> require importing any directive.
    </section>
    <h2>Built-in Directives Demo</h2>
    <button (click)="showFruits.set(!showFruits())">
      {{ showFruits() ? 'Hide' : 'Show' }} Fruits
    </button>

    @if (showFruits()) {
      <ul>
        @for (fruit of fruits(); track fruit) {
          <li [class.favorite]="fruit === favorite()" [style.color]="fruit === favorite() ? 'orange' : 'black'">
            {{ fruit }}
          </li>
        }
      </ul>
    }

    <label>
      Favorite fruit:
      <select [value]="favorite()" (change)="favorite.set($any($event.target).value)">
        @for (fruit of fruits(); track fruit) {
          <option [value]="fruit">{{ fruit }}</option>
        }
      </select>
    </label>
  `,
  styles: [`
    ul {
      margin-top: 1em;
    }
    .favorite {
      font-weight: bold;
      text-decoration: underline;
    }
    button {
      margin-bottom: 1em;
    }
    .directive-info {
      background: #f5f5f5;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 1.5em;
      font-size: 0.98em;
    }
  `]
})
export class BuiltInDirectivesComponent {
  fruits = signal(['Apple', 'Banana', 'Cherry']);
  favorite = signal('Apple');
  showFruits = signal(true);
} 