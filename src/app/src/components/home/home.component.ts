import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  homes$:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

}
