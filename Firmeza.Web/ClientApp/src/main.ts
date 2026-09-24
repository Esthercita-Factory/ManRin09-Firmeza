import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/Home/home.component';
import { LoginComponent } from './app/Auth/login.component';

// Bootstrap based on custom elements present on the ASP.NET Core View
if (document.querySelector('app-home')) {
  bootstrapApplication(HomeComponent, appConfig).catch((err) => console.error(err));
}

if (document.querySelector('app-login')) {
  bootstrapApplication(LoginComponent, appConfig).catch((err) => console.error(err));
}
