import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://angular2-course-b0d75.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('https://angular2-course-b0d75.firebaseio.com/data.json', body, { headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://angular2-course-b0d75.firebaseio.com/data.json')
      .map((response: Response) => response.json())
      .map(data => {
        const array = [];
        for (let key in data) {
          array.push(data[key]);
        }
        return array;
      })
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
