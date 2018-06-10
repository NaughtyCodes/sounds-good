import { Injectable } from '@angular/core';
//import { IfObservable } from 'rxjs/observable/IfObservable';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }

  getCountryList(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
    //.map(this.handleData)
    //.catch(this.handleError);
  }

  // private handleData(res: Response) {
  //   const body = res;
  //   return body;
  // }

  // private handleError (error: Response) {
  //     return Observable.throw(error.status)
  // }
}
