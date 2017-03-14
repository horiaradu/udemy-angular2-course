import { LogService } from "./log.service";
import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable() // without this, u can't inject stuff inside this service
export class DataService {
  pushDataEvEmitter = new EventEmitter<string>();

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

  pushData(value: string) {
    this.pushDataEvEmitter.emit(value);
  }
}
