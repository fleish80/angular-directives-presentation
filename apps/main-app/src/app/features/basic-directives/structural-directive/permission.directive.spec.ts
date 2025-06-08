import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PermissionDirective } from './permission.directive';

@Component({
  template: `
    <div *appPermission="currentRole">
      Protected Content
    </div>
  `,
  standalone: true,
  imports: [PermissionDirective]
})
class TestComponent {
  currentRole = 'guest';
}

describe('PermissionDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .overrideComponent(TestComponent, {
      set: {
        template: '<p>TestComponent</p>',
        imports: [],
      },
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show content for guest role', () => {
    component.currentRole = 'guest';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('div');
    expect(element).toBeNull();
  });

  it('should show content for user role', () => {
    component.currentRole = 'user';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('div');
    expect(element).toBeTruthy();
    expect(element.textContent.trim()).toBe('Protected Content');
  });

  it('should show content for admin role', () => {
    component.currentRole = 'admin';
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('div');
    expect(element).toBeTruthy();
    expect(element.textContent.trim()).toBe('Protected Content');
  });
}); 