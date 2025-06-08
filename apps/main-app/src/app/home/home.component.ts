import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8">Angular Directives Presentation</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Basic Directives Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Basic Directives</h2>
          <ul class="space-y-2">
            <li>
              <a routerLink="/basic-directives/attribute" class="text-blue-600 hover:text-blue-800">
                Attribute Directives
              </a>
            </li>
            <li>
              <a routerLink="/basic-directives/structural" class="text-blue-600 hover:text-blue-800">
                Structural Directives
              </a>
            </li>
            <li>
              <a routerLink="/basic-directives/built-in" class="text-blue-600 hover:text-blue-800">
                Built-in Directives
              </a>
            </li>
          </ul>
        </div>

        <!-- Advanced Directives Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Advanced Directives</h2>
          <ul class="space-y-2">
            <li>
              <a routerLink="/advanced-directives/content" class="text-blue-600 hover:text-blue-800">
                Content Directives
              </a>
            </li>
            <li>
              <a routerLink="/advanced-directives/host" class="text-blue-600 hover:text-blue-800">
                Host Directives
              </a>
            </li>
          </ul>
        </div>

        <!-- Complex Directives Section -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Complex Directives</h2>
          <ul class="space-y-2">
            <li>
              <a routerLink="/complex-directives" class="text-blue-600 hover:text-blue-800">
                Complex Directives Examples
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f3f4f6;
    }
  `]
})
export class HomeComponent {} 