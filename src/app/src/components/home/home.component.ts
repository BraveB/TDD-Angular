import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  homes$:Observable<any[] | Iterable<any> | undefined> | undefined ;
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.homes$=this.dataService.getHomes$();
    // this.homes$ = of([
    //   {
    //     title:"Home 1",
    //     image:"assets/listing.jpg",
    //     location:"new york"
    //   },{
    //     title:"Home 2",
    //     image:"assets/listing.jpg",
    //     location:"boston"
    //   },{
    //     title:"Home 3",
    //     image:"assets/listing.jpg",
    //     location:"chicago"
    //   },
    // ])
  }

}
