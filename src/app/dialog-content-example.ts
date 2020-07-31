import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModelService } from '../app/common-model.service';
import { Observable } from 'rxjs';
import { PupupFormComponent } from './pupup-form/pupup-form.component';
export interface PeriodicElement {
  ID: string;
  position: any;
  name: any;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, ID: 'W012A3CDE', name:'Egon Spengler', location: 'America/Los Angeles'},
  {position: 2, ID: 'W013A3CDE', name: 'Donald Trumph', location: 'America/Washington DC'},
  {position: 3, ID: 'W012A3CDF', name: 'Vladimir Putin', location: 'Russia/russia'},
  {position: 4, ID: 'W014B3HDE', name: 'Narendra Modi', location: 'Asia/India'},
  {position: 5, ID: 'W010X3HDE', name: 'Kim John Un', location: 'Korea/North Korea'},
  {position: 6, ID: 'W013C3CDF', name: 'Glinda Southgood', location: 'Asia/Kolkatta'},
  // {position: 7, ID: 'W012A8CDE', name: 'Sandeep', location: 'Aisa/Kolkatta'},
  // {position: 8, ID: 'W010X9GFE', name: 'Sudheer', location: 'Aisa/Kolkatta'},
  // {position: 9, ID: 'W014J3HYE', name: 'Surendra Reddy', location: 'Aisa/Kolkatta'},
  // {position: 10, ID: 'W012L3CVF', name: 'Uma', location: 'Aisa/Kolkatta'},

];
/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
//   providers: [
//     CommonModelService,
//  ]
})
export class DialogContentExample {
  displayedColumns: string[] = ['position', 'ID', 'name', 'location', "getdetails"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  firstName: string;
  lastName: string;
  siblings: Array<string>;
  public hellovariable: number = 245;
  constructor(public dialog: MatDialog,
    // private productService: CommonModelService
    ) {}

  openDialog(ID: any) {
    const dialogRef = this.dialog.open(PupupFormComponent, {
      width: '2000px',
      
    });

    return dialogRef.afterClosed();
  }

  // constructor(private productService: ProductService) {

  // }

  ngOnInit() {
    // this.firstName = 'John';
    // this.lastName = 'Doe';
    // this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }
  
}

