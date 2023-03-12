import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Home {title:string, location:string, image:string}
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Home) {
  }

  ngOnInit(): void {
      console.log(this.data)
  }
}
