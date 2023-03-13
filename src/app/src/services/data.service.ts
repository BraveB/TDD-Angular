import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getHomes$(){
    return this.httpClient.get<any>('assets/homes.json');
  }

  bookHome$(){
    return this.httpClient.post('https://run.mocky.io/v3/649b747a-c1f3-4014-a2bc-c508b4aca40d', null);
  }
}
