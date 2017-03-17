import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData()
      .subscribe((data) => {
        console.log(data);
      });
  }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({ username, email })
      .subscribe((data) => {
        console.log(data);
      });
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(data => {
        this.items = data;
      });
  }
}
