import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuiltInDirectivesComponent } from './built-in-directives.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BuiltInDirectivesComponent', () => {
  let component: BuiltInDirectivesComponent;
  let fixture: ComponentFixture<BuiltInDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInDirectivesComponent, NoopAnimationsModule]
    })
    .overrideComponent(BuiltInDirectivesComponent, {
      set: {
        template: '<p>BuiltInDirectivesComponent</p>',
        imports: [],
      },
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    const initialLength = component.todos().length;
    component.newTodoText = 'Test Todo';
    component.addTodo();
    expect(component.todos().length).toBe(initialLength + 1);
    expect(component.todos()[initialLength].text).toBe('Test Todo');
    expect(component.todos()[initialLength].completed).toBeFalsy();
  });

  it('should not add empty todos', () => {
    const initialLength = component.todos().length;
    component.newTodoText = '   ';
    component.addTodo();
    expect(component.todos().length).toBe(initialLength);
  });

  it('should toggle todo completion status', () => {
    component.newTodoText = 'Test Todo';
    component.addTodo();
    const todoId = component.todos()[0].id;
    
    expect(component.todos()[0].completed).toBeFalsy();
    component.toggleTodo(todoId);
    expect(component.todos()[0].completed).toBeTruthy();
    component.toggleTodo(todoId);
    expect(component.todos()[0].completed).toBeFalsy();
  });

  it('should remove a todo', () => {
    component.newTodoText = 'Test Todo';
    component.addTodo();
    const initialLength = component.todos().length;
    const todoId = component.todos()[0].id;
    
    component.removeTodo(todoId);
    expect(component.todos().length).toBe(initialLength - 1);
    expect(component.todos().find(todo => todo.id === todoId)).toBeUndefined();
  });

  it('should update counts correctly', () => {
    // Add two todos
    component.newTodoText = 'Todo 1';
    component.addTodo();
    component.newTodoText = 'Todo 2';
    component.addTodo();

    // Check initial counts
    expect(component.completedCount()).toBe(0);
    expect(component.pendingCount()).toBe(2);

    // Complete first todo
    component.toggleTodo(component.todos()[0].id);
    expect(component.completedCount()).toBe(1);
    expect(component.pendingCount()).toBe(1);

    // Complete second todo
    component.toggleTodo(component.todos()[1].id);
    expect(component.completedCount()).toBe(2);
    expect(component.pendingCount()).toBe(0);
  });
}); 