import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStream'
})
export class FilterStreamPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const filterText = args;
    return !!filterText ? value.filter((value) => value.message.text.toString().toLowerCase().includes(filterText)): value;
  }

}
