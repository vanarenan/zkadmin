import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    dateofbirth: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    department: new FormControl(''),
    position: new FormControl('')
  });

}