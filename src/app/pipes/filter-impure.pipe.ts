import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImpure',
  pure: false
})
export class FilterImpurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    return value.filter(val => val.match(`^.*${args}.*$`));
  }

}
