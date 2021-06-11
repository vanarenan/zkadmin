import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentId = new Subject<string>();
  currentId$ = this.currentId.asObservable();
  
  refresh = new Subject<string>();
  refresh$ = this.refresh.asObservable();
  
  constructor() {
    if (!this.getData()) this.setData(this.getDemoData());
  }
  
  create(item: any): string {
    item.id = uuidv4();
    let list = this.getData();
    list.push(item);
    this.setData(list);
    this.refresh.next(item.id);
    return item.id;
  }
  
  read(id: string = null): any {
    let list = this.getData();
    return !id ? list : list.find((i) => i.id === id);
  }
  
  update(item: any): void {
    let list = this.getData();
    let index = list.findIndex((i) => i.id === item.id);
    if (index > -1) list[index] = item; else list.push(item);
    this.setData(list);
    this.refresh.next(item.id);
  }
  
  delete(id: string): void {
    let list = this.getData();
    let index = list.findIndex((i) => i.id === id);
    if (index > -1) {
      list.splice(index, 1);
      this.setData(list);
      this.refresh.next('');
    }
  }
  
  getData(): any[] {
    return window.localStorage.Zkadmin_usersList ? JSON.parse(window.localStorage.Zkadmin_usersList) : null;
  }
  
  setData(data: any[]): void {
    window.localStorage.Zkadmin_usersList = JSON.stringify(data);
  }
  
  getDemoData(): any[] {
    return [
      { id: uuidv4(), gender: 'чоловік', dateofbirth: '1955-01-02', fullName: 'Іванов Іван Іванович', photo: this.getBlankPhoto() },
      { id: uuidv4(), gender: 'жінка', dateofbirth: '1978-05-30', fullName: 'Іванова Іванна Іванівна', photo: this.getBlankPhoto() },
      { id: uuidv4(), gender: 'чоловік',  dateofbirth: '1995-12-10',fullName: 'Петров Петро Петрович', photo: this.getBlankPhoto() },
      { id: uuidv4(), gender: 'жінка', dateofbirth: '2000-08-18', fullName: 'Петрова Петріна Петрівна', photo: this.getBlankPhoto() },
      { id: uuidv4(), gender: 'чоловік', dateofbirth: '1973-09-27', fullName: 'Сідоров Сідор Сідорович', photo: this.getBlankPhoto() },
      { id: uuidv4(), gender: 'жінка', dateofbirth: '2010-10-10', fullName: 'Олександрова Олександра Олександрівна', photo: this.getBlankPhoto() }
    ];
  }
  
  getBlankPhoto(): string {
    return "" +
    "data:image/png;base64,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" +
    "PGiAAAAABJRU5ErkJggg==";
  }
  
}
