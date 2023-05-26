import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
})
export class ImpurePipe implements PipeTransform {
  value = '';
  transform(input) {
    console.log(this.value);
    this.value = input;
    return input.toUpperCase();
  }
}
