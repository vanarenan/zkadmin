import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  userForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    dateofbirth: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    department: new FormControl(''),
    position: new FormControl(''),
    photo: new FormControl(this.userService.getBlankPhoto())
  });
  
  @ViewChild('fileInput') fileInput: ElementRef;
  
  constructor(private userService: UserService) {
    userService.currentId$.subscribe(id => { this.load(id); });
  }
  
  ngOnInit(): void {
    this.load('');
  }
  
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => { this.userForm.patchValue({ photo: e.target.result }); };
      reader.readAsDataURL(imgFile.target.files[0]);
      this.fileInput.nativeElement.value = '';
    }
  }
  
  load(id: string) {
    if (id) {
      this.userForm.reset(this.userService.read(id));
    } else {
      this.userForm.reset({ photo: this.userService.getBlankPhoto() });
      this.userService.refresh.next('');
    }
  }
  
  onSubmit() {
    if (!this.userForm.value.id) {
      let id = this.userService.create(this.userForm.getRawValue());
      this.load(id);
    } else {
      this.userService.update(this.userForm.value);
    }
  }

  onDelete() {
    if (confirm('Видалити запис?')) {
      this.userService.delete(this.userForm.value.id);
      this.load('');
    }
  }

}