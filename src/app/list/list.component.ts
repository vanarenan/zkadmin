import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'photo'];

  myDataArray: {}[] = [
      { id: 1, name: 'Hydrogen', photo: '' },
      { id: 2, name: 'Helium', photo: '' },
      { id: 3, name: 'Lithium', photo: '' },
      { id: 4, name: 'Beryllium', photo: '' },
      { id: 5, name: 'Boron', photo: '' },
      { id: 6, name: 'Carbon', photo: '' },
      { id: 7, name: 'Nitrogen', photo: '' },
      { id: 8, name: 'Oxygen', photo: '' },
      { id: 9, name: 'Fluorine', photo: '' },
      { id: 10, name: 'Neon', photo: '' },
      { id: 11, name: 'Hydrogen', photo: '' },
      { id: 12, name: 'Helium', photo: '' },
      { id: 13, name: 'Lithium', photo: '' },
      { id: 14, name: 'Beryllium', photo: '' },
      { id: 15, name: 'Boron', photo: '' },
      { id: 16, name: 'Carbon', photo: '' },
      { id: 17, name: 'Nitrogen', photo: '' },
      { id: 18, name: 'Oxygen', photo: '' },
      { id: 19, name: 'Fluorine', photo: '' },
      { id: 20, name: 'Neon', photo: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
