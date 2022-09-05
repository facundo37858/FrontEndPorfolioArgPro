import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private htpp:HttpClient) { }

  getData():Observable<any>{
    return this.htpp.get('./assets/data/data.json')
  }
}
