import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import moment from "moment";
import { DataService } from '../../services/data.service';

interface Home {
  title:string,
  location:string,
  image:string,
  price:string
};

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  checkIn: string="0";
  checkOut: string="0";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Home,
    private dataService: DataService,
    public dialogRef: MatDialogRef<BookComponent>,
    private notification: MatSnackBar
    ) {
  }

  ngOnInit(): void {
  }

  calculateTotal( checkIn:string, checkOut:string){
    const checkInDate = moment(checkIn, 'MM-DD-YYYY');
    const checkOutDate = moment(checkOut, 'MM-DD-YYYY');
    const total = checkOutDate.diff(checkInDate, 'days') * Number(this.data.price);
    return Number.isNaN(total) ? "--": `$${total}`;
  }

  bookHome(){
    this.dataService.bookHome$().subscribe(()=> {
      this.dialogRef.close();
      this.notification.open("Home booked!", "Success");
    });
  }
}
