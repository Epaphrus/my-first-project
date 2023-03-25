import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to wonder Land';
  totalSum = 2+4;
  subtraction = 4-2;
  isShown = false;
  users = ['Tom', 'Jerry', 'Bull']; 
}
