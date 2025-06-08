import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './host.directive';

@Component({
  selector: 'app-host-directive',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatSlideToggle,
    FormsModule,
    DraggableDirective
  ],
  templateUrl: './host-directive.component.html',
  styles: [`
    .example-section {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .controls {
      margin-bottom: 20px;
    }
    .draggable-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .draggable-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px;
      border-radius: 8px;
      background-color: #f5f5f5;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
    }
    .draggable-item:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .draggable-item.dragging {
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      opacity: 0.8;
    }
    .draggable-item.card {
      background-color: #e3f2fd;
      color: #1976d2;
    }
    .draggable-item.button {
      background-color: #f3e5f5;
      color: #7b1fa2;
    }
    .draggable-item.image {
      background-color: #e8f5e9;
      color: #2e7d32;
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
export class HostDirectiveComponent {
  isDraggingEnabled = signal(true);
} 