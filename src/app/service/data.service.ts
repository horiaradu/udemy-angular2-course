import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable() // without this, u can't inject stuff inside this service
export class DataService {
  private data: string[] = [];

  constructor(private logService: LogService) {
  }

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog(input);
  }

  getData() {
    return this.data;
  }
}
