import { Component } from '@angular/core';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Auth/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, LoginComponent],
  templateUrl: './app.html',
})
export class App {}
