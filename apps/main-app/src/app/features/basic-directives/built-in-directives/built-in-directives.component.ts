import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-built-in-directives',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
    MatIcon,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatChipsModule,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Built-in Directives Example</mat-card-title>
        <mat-card-subtitle>Using ngClass, ngStyle, and control flow with signals</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="example-section">
          <h3>Todo List with Built-in Directives</h3>
          
          <div class="todo-input">
            <mat-form-field>
              <mat-label>Add new todo</mat-label>
              <input matInput [(ngModel)]="newTodoText" (keyup.enter)="addTodo()" placeholder="Enter todo text">
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="addTodo()">Add Todo</button>
          </div>

          <mat-list>
            @for (todo of todos(); track todo.id) {
              <mat-list-item [class.completed]="todo.completed">
                <span matListItemTitle>
                  <mat-icon [style.color]="todo.completed ? 'green' : 'gray'"
                           (click)="toggleTodo(todo.id)">
                    {{ todo.completed ? 'check_circle' : 'radio_button_unchecked' }}
                  </mat-icon>
                  {{ todo.text }}
                </span>
                <button mat-icon-button color="warn" (click)="removeTodo(todo.id)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-list-item>
            } @empty {
              <mat-list-item>
                <span matListItemTitle>No todos yet. Add one above!</span>
              </mat-list-item>
            }
          </mat-list>

          <div class="todo-stats">
            <mat-chip-set>
              <mat-chip color="primary" selected>
                Total: {{ todos().length }}
              </mat-chip>
              <mat-chip color="accent" selected>
                Completed: {{ completedCount() }}
              </mat-chip>
              <mat-chip color="warn" selected>
                Pending: {{ pendingCount() }}
              </mat-chip>
            </mat-chip-set>
          </div>
        </div>

        <div class="example-section">
          <h3>Code Example</h3>
          <pre><code>
// Using signals with built-in directives
const todos = signal&lt;Todo[]&gt;([]);
const completedCount = computed(() => 
  todos().filter(todo => todo.completed).length
);

// Template with control flow
@for (todo of todos(); track todo.id) {
  &lt;mat-list-item [class.completed]="todo.completed"&gt;
    &lt;span [style.text-decoration]="todo.completed ? 'line-through' : 'none'"&gt;
      {{ todo.text }}
    &lt;/span&gt;
  &lt;/mat-list-item&gt;
} @empty {
  &lt;mat-list-item&gt;No todos yet&lt;/mat-list-item&gt;
}</code></pre>
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
    .todo-input {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      align-items: center;
    }
    .todo-input mat-form-field {
      flex: 1;
    }
    .completed {
      text-decoration: line-through;
      opacity: 0.7;
    }
    .todo-stats {
      margin-top: 20px;
    }
    mat-list-item {
      margin: 5px 0;
      border-radius: 4px;
      transition: background-color 0.2s;
    }
    mat-list-item:hover {
      background-color: #f5f5f5;
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
export class BuiltInDirectivesComponent {
  todos = signal<Todo[]>([]);
  newTodoText = '';

  completedCount = signal(0);
  pendingCount = signal(0);

  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.todos.update(todos => [...todos, {
        id: Date.now(),
        text: this.newTodoText.trim(),
        completed: false
      }]);
      this.newTodoText = '';
      this.updateCounts();
    }
  }

  toggleTodo(id: number): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    this.updateCounts();
  }

  removeTodo(id: number): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
    this.updateCounts();
  }

  private updateCounts(): void {
    const completed = this.todos().filter(todo => todo.completed).length;
    this.completedCount.set(completed);
    this.pendingCount.set(this.todos().length - completed);
  }
} 