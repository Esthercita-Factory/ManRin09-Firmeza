import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  protected readonly activeTab = signal<'all' | 'low' | 'out'>('all');
}
