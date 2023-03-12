import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { DialogService } from '../../services/dialog.service';

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
  openDialog(){
    this.dialogService.open()
  }

}
