import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SmartTooltipDirective } from './tooltip.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  template: `
    <button [appSmartTooltip]="enabled"
            [tooltipText]="tooltipText"
            [tooltipPosition]="position">
      Test Button
    </button>
  `,
  standalone: true,
  imports: [SmartTooltipDirective, MatTooltipModule]
})
class TestComponent {
  enabled = true;
  tooltipText = 'Test tooltip';
  position = 'above';
}

describe('SmartTooltipDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, NoopAnimationsModule]
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply tooltip-enabled class when enabled', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('tooltip-enabled')).toBeTruthy();
  });

  it('should not apply tooltip-enabled class when disabled', () => {
    component.enabled = false;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('tooltip-enabled')).toBeFalsy();
  });

  it('should apply tooltip-hovered class on mouseenter', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-hovered')).toBeTruthy();
  });

  it('should remove tooltip-hovered class on mouseleave', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-hovered')).toBeTruthy();

    button.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-hovered')).toBeFalsy();
  });

  it('should apply tooltip-focused class on focus', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-focused')).toBeTruthy();
  });

  it('should remove tooltip-focused class on blur', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-focused')).toBeTruthy();

    button.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(button.classList.contains('tooltip-focused')).toBeFalsy();
  });

  it('should set cursor to help when enabled', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.style.cursor).toBe('help');
  });

  it('should set cursor to default when disabled', () => {
    component.enabled = false;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.style.cursor).toBe('default');
  });
}); 