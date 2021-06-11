import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private userService: UserService) {}
  
  clearList() {
    if (confirm('Очистити список до значень по-замовчуванню?')) {
      this.userService.setData(this.userService.getDemoData());
      this.userService.refresh.next('');
      this.userService.currentId.next('');
    }
  }
  
}