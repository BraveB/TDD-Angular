import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from "moment";

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Home) {
  }

  ngOnInit(): void {
      // console.log(this.data);
  }
  calculateTotal( checkIn:string, checkOut:string){
    const checkInDate = moment(checkIn, 'MM-DD-YYYY');
    const checkOutDate = moment(checkOut, 'MM-DD-YYYY');
    return checkOutDate.diff(checkInDate, 'days') * Number(this.data.price);
  }
}
