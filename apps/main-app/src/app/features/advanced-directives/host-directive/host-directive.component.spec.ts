import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HostDirectiveComponent } from './host-directive.component';
import { DraggableDirective } from './host.directive';

describe('HostDirectiveComponent', () => {
  let component: HostDirectiveComponent;
  let fixture: ComponentFixture<HostDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
        HostDirectiveComponent,
        DraggableDirective
      ]
    })
    .overrideComponent(HostDirectiveComponent, {
      set: {
        template: '<p>HostDirectiveComponent</p>',
        imports: [],
      },
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with dragging enabled', () => {
    expect(component.isDraggingEnabled()).toBeTruthy();
  });

  it('should toggle dragging state when slide toggle changes', () => {
    const slideToggle = fixture.debugElement.query(By.css('mat-slide-toggle'));
    expect(slideToggle).toBeTruthy();

    // Simulate slide toggle change
    component.isDraggingEnabled.set(false);
    fixture.detectChanges();

    expect(component.isDraggingEnabled()).toBeFalsy();
  });

  it('should have draggable elements with correct classes', () => {
    const draggableElements = fixture.debugElement.queryAll(By.directive(DraggableDirective));
    expect(draggableElements.length).toBe(3);

    draggableElements.forEach(element => {
      expect(element.nativeElement.classList.contains('draggable-item')).toBeTruthy();
    });
  });
}); 