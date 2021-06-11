import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService) {
    userService.refresh$.subscribe((id) => {
      this.myDataArray = this.userService.read(); 
      this.currentId = id || ''; 
    });
  }

  displayedColumns: string[] = ['fullName', 'photo'];

  myDataArray: any[];
  
  currentId: string = '';

  ngOnInit(): void {
    this.myDataArray = this.userService.read();
  }

}