import { Directive, ElementRef, HostListener, HostBinding, signal, Input } from '@angular/core';

interface Position {
  x: number;
  y: number;
}

@Directive({
  selector: '[appDraggable]',
  standalone: true,
  host: {
    '[class.draggable]': 'true',
    '[class.dragging]': 'isDragging()',
    '[style.position]': '"relative"',
    '[style.cursor]': '"move"',
    '[style.user-select]': '"none"'
  }
})
export class DraggableDirective {
  private readonly isDragging = signal(false);
  private readonly position = signal<Position>({ x: 0, y: 0 });
  private readonly initialPosition = signal<Position>({ x: 0, y: 0 });
  private readonly dragOffset = signal<Position>({ x: 0, y: 0 });

  @Input() set appDraggable(enabled: boolean) {
    if (!enabled) {
      this.isDragging.set(false);
      this.resetPosition();
    }
  }

  @HostBinding('style.transform')
  get transform(): string {
    const { x, y } = this.position();
    return `translate(${x}px, ${y}px)`;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (event.button !== 0) return; // Only left mouse button

    this.isDragging.set(true);
    this.initialPosition.set({
      x: event.clientX - this.position().x,
      y: event.clientY - this.position().y
    });

    // Prevent text selection while dragging
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging()) return;

    const x = event.clientX - this.initialPosition().x;
    const y = event.clientY - this.initialPosition().y;

    this.position.set({ x, y });
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this.isDragging()) {
      this.isDragging.set(false);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if (event.touches.length !== 1) return;

    this.isDragging.set(true);
    const touch = event.touches[0];
    this.initialPosition.set({
      x: touch.clientX - this.position().x,
      y: touch.clientY - this.position().y
    });

    event.preventDefault();
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging() || event.touches.length !== 1) return;

    const touch = event.touches[0];
    const x = touch.clientX - this.initialPosition().x;
    const y = touch.clientY - this.initialPosition().y;

    this.position.set({ x, y });
    event.preventDefault();
  }

  @HostListener('document:touchend')
  onTouchEnd(): void {
    if (this.isDragging()) {
      this.isDragging.set(false);
    }
  }

  private resetPosition(): void {
    this.position.set({ x: 0, y: 0 });
    this.initialPosition.set({ x: 0, y: 0 });
    this.dragOffset.set({ x: 0, y: 0 });
  }

  constructor(private el: ElementRef) {}
} 