import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  homes$:any;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }
  openDialog(home:any){
    this.dialogService.open(
      BookComponent,
      {
        width:"250px",
        data: home
      }
      )
  }

}
