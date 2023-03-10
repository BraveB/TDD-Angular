import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getHomes$(){
    return this.httpClient.get<any>('assets/homes.json');
  }
}
