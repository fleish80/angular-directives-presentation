import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DraggableDirective } from './host.directive';

@Component({
  template: `
    <div [appDraggable]="isEnabled">
      <span>Draggable Element</span>
    </div>
  `,
  standalone: true,
  imports: [DraggableDirective]
})
class TestComponent {
  isEnabled = true;
}

describe('DraggableDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: DraggableDirective;

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
    directive = fixture.debugElement.query(By.directive(DraggableDirective)).injector.get(DraggableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply draggable class when enabled', () => {
    const element = fixture.debugElement.query(By.directive(DraggableDirective));
    expect(element.nativeElement.classList.contains('draggable')).toBeTruthy();
  });

  it('should not apply dragging class initially', () => {
    const element = fixture.debugElement.query(By.directive(DraggableDirective));
    expect(element.nativeElement.classList.contains('dragging')).toBeFalsy();
  });

  it('should handle mouse events correctly', () => {
    const element = fixture.debugElement.query(By.directive(DraggableDirective));
    const mouseDownEvent = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100
    });

    // Simulate mouse down
    element.nativeElement.dispatchEvent(mouseDownEvent);
    fixture.detectChanges();

    expect(element.nativeElement.classList.contains('dragging')).toBeTruthy();

    // Simulate mouse move
    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 150,
      clientY: 150
    });
    document.dispatchEvent(mouseMoveEvent);
    fixture.detectChanges();

    // Simulate mouse up
    const mouseUpEvent = new MouseEvent('mouseup');
    document.dispatchEvent(mouseUpEvent);
    fixture.detectChanges();

    expect(element.nativeElement.classList.contains('dragging')).toBeFalsy();
  });

  it('should handle touch events correctly', () => {
    const element = fixture.debugElement.query(By.directive(DraggableDirective));
    const touchStartEvent = new TouchEvent('touchstart', {
      touches: [new Touch({ identifier: 1, target: element.nativeElement, clientX: 100, clientY: 100 })]
    });

    // Simulate touch start
    element.nativeElement.dispatchEvent(touchStartEvent);
    fixture.detectChanges();

    expect(element.nativeElement.classList.contains('dragging')).toBeTruthy();

    // Simulate touch move
    const touchMoveEvent = new TouchEvent('touchmove', {
      touches: [new Touch({ identifier: 1, target: element.nativeElement, clientX: 150, clientY: 150 })]
    });
    document.dispatchEvent(touchMoveEvent);
    fixture.detectChanges();

    // Simulate touch end
    const touchEndEvent = new TouchEvent('touchend');
    document.dispatchEvent(touchEndEvent);
    fixture.detectChanges();

    expect(element.nativeElement.classList.contains('dragging')).toBeFalsy();
  });

  it('should reset position when disabled', () => {
    const element = fixture.debugElement.query(By.directive(DraggableDirective));
    
    // Enable dragging and move
    const mouseDownEvent = new MouseEvent('mousedown', {
      clientX: 100,
      clientY: 100
    });
    element.nativeElement.dispatchEvent(mouseDownEvent);
    
    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 150,
      clientY: 150
    });
    document.dispatchEvent(mouseMoveEvent);
    
    // Disable dragging
    component.isEnabled = false;
    fixture.detectChanges();

    // Position should be reset
    expect(element.nativeElement.style.transform).toBe('translate(0px, 0px)');
  });
}); 