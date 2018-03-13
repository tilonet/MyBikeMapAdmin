import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
}

@Injectable()
export class ApicallService {

  private apiUrl = 'http://192.168.2.103/api/backend?api_token=IhUqhRimreFzOFvaJNPHhKUvhBTzmRiUkNAgalHoYiLqKREBxbZLfOnUxDTn';  // URL to web api

  constructor(private http: HttpClient) { }

  getData () {



    return this.http.get(this.apiUrl, httpOptions);
  }

}
