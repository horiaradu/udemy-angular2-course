import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, arg0: any, arg1: any): any {
    console.log(arg0, arg1);
    return value * 2 + parseInt(arg0);
  }

}
