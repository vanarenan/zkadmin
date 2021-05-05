import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ourDate;
  
  showDate(): void {
    this.ourDate = new Date();
  }
  
  clearDate(): void {
    this.ourDate = '';
  }
  
}