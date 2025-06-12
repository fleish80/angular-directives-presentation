# Angular Development Rules & Best Practices

This document contains rules, guidelines, and best practices for Angular development, focusing on the latest features available in Angular 20+.

## Table of Contents
- [Component Architecture](#component-architecture)
- [Standalone Components](#standalone-components)
- [Control Flow](#control-flow)
- [Signals](#signals)
- [Performance Optimization](#performance-optimization)
- [TypeScript Best Practices](#typescript-best-practices)
- [Testing Guidelines](#testing-guidelines)
- [Code Style & Linting](#code-style--linting)

---

## Component Architecture

### ✅ DO: Use Standalone Components
```typescript
// ✅ Preferred - Standalone component
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `...`
})
export class UserProfileComponent { }

// ❌ Avoid - NgModule-based component
@Component({
  selector: 'app-user-profile',
  template: `...`
})
export class UserProfileComponent { }
```

### ✅ DO: Use Input/Output with Type Safety
```typescript
// ✅ Preferred - Strongly typed inputs/outputs
@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `...`
})
export class UserCardComponent {
  @Input({ required: true }) user!: User;
  @Input() showDetails = false;
  @Output() userSelected = new EventEmitter<User>();
}

// ❌ Avoid - Untyped inputs/outputs
@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `...`
})
export class UserCardComponent {
  @Input() user: any;
  @Output() userSelected = new EventEmitter();
}
```

### ✅ DO: Use OnPush Change Detection Strategy
```typescript
// ✅ Preferred - OnPush for better performance
@Component({
  selector: 'app-user-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
export class UserListComponent { }
```

---

## Standalone Components

### ✅ DO: Use Standalone APIs
```typescript
// ✅ Preferred - Standalone bootstrap
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
});

// ❌ Avoid - NgModule bootstrap
@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### ✅ DO: Use Functional Guards and Resolvers
```typescript
// ✅ Preferred - Functional guard
export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated();
};

// ✅ Preferred - Functional resolver
export const userResolver: ResolveFn<User> = (route, state) => {
  return inject(UserService).getUser(route.paramMap.get('id')!);
};
```

---

## Control Flow

### ✅ DO: Use New Control Flow (@if, @for, @switch)
```typescript
// ✅ Preferred - New control flow
@Component({
  template: `
    @if (users.length > 0) {
      @for (user of users; track user.id) {
        <app-user-card [user]="user" />
      }
    } @else {
      <p>No users found</p>
    }

    @switch (user.role) {
      @case ('admin') {
        <admin-panel />
      }
      @case ('user') {
        <user-dashboard />
      }
      @default {
        <guest-view />
      }
    }
  `
})
export class UserListComponent {
  users = signal<User[]>([]);
}
```

### 🚩 RULE: Always use Angular's new control flow syntax (@for, @if, @switch) instead of legacy structural directives (*ngFor, *ngIf, *ngSwitch)
- Use @for for iteration in templates instead of *ngFor.
- Use @if for conditional rendering instead of *ngIf.
- Use @switch for switch-case logic instead of *ngSwitch.
- Example: See `StructuralDirectivesNavigationComponent` for @for usage in tab rendering.

### ❌ Avoid: Old Structural Directives
```typescript
// ❌ Avoid - Old structural directives
@Component({
  template: `
    <div *ngIf="users.length > 0">
      <app-user-card 
        *ngFor="let user of users; trackBy: trackByUserId"
        [user]="user">
      </app-user-card>
    </div>
    <div *ngIf="users.length === 0">
      <p>No users found</p>
    </div>
  `
})
```

---

## Signals

### ✅ DO: Use Signals for Reactive State
```typescript
// ✅ Preferred - Signals for reactive state
@Component({
  template: `
    <h1>{{ title() }}</h1>
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  title = signal('Counter App');
  count = signal(0);

  increment() {
    this.count.update(current => current + 1);
  }
}
```

### ✅ DO: Use Computed Signals
```typescript
// ✅ Preferred - Computed signals
@Component({
  template: `
    <p>Total: {{ total() }}</p>
    <p>Is expensive: {{ isExpensive() }}</p>
  `
})
export class CartComponent {
  items = signal<CartItem[]>([]);
  
  total = computed(() => 
    this.items().reduce((sum, item) => sum + item.price, 0)
  );
  
  isExpensive = computed(() => this.total() > 100);
}
```

### ✅ DO: Use Effect for Side Effects
```typescript
// ✅ Preferred - Effect for side effects
@Component({
  template: `...`
})
export class UserProfileComponent {
  user = signal<User | null>(null);
  
  constructor() {
    effect(() => {
      const currentUser = this.user();
      if (currentUser) {
        this.analytics.track('user_viewed', currentUser.id);
      }
    });
  }
}
```

---

## Performance Optimization

### ✅ DO: Use Track Functions in @for
```typescript
// ✅ Preferred - Track function for performance
@Component({
  template: `
    @for (user of users(); track trackByUserId) {
      <app-user-card [user]="user" />
    }
  `
})
export class UserListComponent {
  users = signal<User[]>([]);
  
  trackByUserId = (index: number, user: User) => user.id;
}
```

### ✅ DO: Use Deferrable Views
```typescript
// ✅ Preferred - Defer for performance
@Component({
  template: `
    <h1>User Dashboard</h1>
    @defer (on viewport) {
      <app-heavy-chart />
    } @placeholder {
      <div>Loading chart...</div>
    }
    
    @defer (on interaction) {
      <app-user-details />
    } @placeholder {
      <button>Click to load details</button>
    }
  `
})
export class DashboardComponent { }
```

### ✅ DO: Use View Transitions
```typescript
// ✅ Preferred - View transitions
@Component({
  template: `
    <div class="user-card" @userCard>
      <img [src]="user.avatar" @userAvatar />
      <h3>{{ user.name }}</h3>
    </div>
  `,
  animations: [
    trigger('userCard', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('userAvatar', [
      transition(':enter', [
        style({ scale: 0 }),
        animate('200ms ease-out', style({ scale: 1 }))
      ])
    ])
  ]
})
export class UserCardComponent { }
```

---

## TypeScript Best Practices

### ✅ DO: Use Strict TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### ✅ DO: Use Type Guards
```typescript
// ✅ Preferred - Type guards
function isUser(obj: any): obj is User {
  return obj && typeof obj.id === 'string' && typeof obj.name === 'string';
}

@Component({
  template: `
    @if (isUser(data)) {
      <app-user-card [user]="data" />
    }
  `
})
export class DataDisplayComponent {
  data: User | Admin | null = null;
  isUser = isUser;
}
```

### ✅ DO: Use Template Type Checking
```typescript
// ✅ Preferred - Template type checking
@Component({
  template: `
    <app-user-card 
      [user]="selectedUser()" 
      (userSelected)="onUserSelected($event)" />
  `
})
export class UserSelectorComponent {
  selectedUser = signal<User | null>(null);
  
  onUserSelected(user: User) {
    this.selectedUser.set(user);
  }
}
```

---

## Testing Guidelines

### ✅ DO: Use Component Testing with Signals
```typescript
// ✅ Preferred - Testing with signals
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should increment count', () => {
    expect(component.count()).toBe(0);
    
    component.increment();
    
    expect(component.count()).toBe(1);
  });

  it('should display updated count', () => {
    component.count.set(5);
    fixture.detectChanges();
    
    expect(fixture.nativeElement.textContent).toContain('Count: 5');
  });
});
```

### ✅ DO: Use Testing Utilities
```typescript
// ✅ Preferred - Testing utilities
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('UserListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    }).compileComponents();
  });
});
```

---

## Code Style & Linting

### ✅ DO: Use ESLint with Angular Rules
```javascript
// eslint.config.mjs
import js from '@eslint/js';
import angular from 'angular-eslint';

export default [
  js.configs.recommended,
  ...angular.configs.recommended,
  {
    rules: {
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error'
    }
  }
];
```

### ✅ DO: Use Prettier for Code Formatting
```json
// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "printWidth": 80
}
```

---

## Migration Guidelines

### From NgModules to Standalone
1. Start with leaf components (components with no children)
2. Use `ng generate component --standalone`
3. Migrate services to `providedIn: 'root'`
4. Use functional guards and resolvers
5. Update bootstrap to use `bootstrapApplication`

### From Template Syntax to Control Flow
1. Replace `*ngIf` with `@if`
2. Replace `*ngFor` with `@for`
3. Replace `*ngSwitch` with `@switch`
4. Update track functions to use new syntax

### From RxJS to Signals
1. Start with simple state management
2. Use signals for component state
3. Use computed for derived state
4. Use effect for side effects
5. Keep RxJS for complex async operations

---

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular Style Guide](https://angular.dev/style-guide)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [Angular Control Flow](https://angular.dev/guide/control-flow)
- [Angular Standalone Components](https://angular.dev/guide/standalone-components)

---

## Version Compatibility

This rules file is designed for Angular 20+ and includes:
- Standalone components and APIs
- New control flow syntax (@if, @for, @switch)
- Signals for reactive state management
- Deferrable views for performance
- View transitions API
- Functional guards and resolvers
- Latest TypeScript features

Always check the [Angular update guide](https://angular.dev/guide/update) when upgrading versions. 

<user_rules>
- Always use Angular 20+ features and best practices as described below.
- Use standalone components and APIs; avoid NgModules.
- Prefer strongly typed @Input and @Output properties.
- Use OnPush change detection for all components.
- Use the new control flow syntax (@if, @for, @switch) instead of legacy structural directives (*ngIf, *ngFor, *ngSwitch).
- Use signals for reactive state management, including computed and effect for derived state and side effects.
- Use track functions with @for for performance.
- Use deferrable views (@defer) and view transitions for performance and UX.
- Enforce strict TypeScript configuration and template type checking.
- Use type guards and avoid 'any' types.
- Use Angular ESLint rules and Prettier for code style and formatting.
- When writing tests, use signals and Angular testing utilities.
- When migrating legacy code, prefer standalone components, new control flow, and signals.
- Always check for the latest Angular documentation and update guides.
</user_rules> 