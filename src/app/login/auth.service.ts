import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  url: string = '';
  constructor(private http: HttpClient) { }

  onLogin(loginObj) {
    return this.http.post(this.url, loginObj).pipe(map( res =>{
      return res;
    }));
  }
}
