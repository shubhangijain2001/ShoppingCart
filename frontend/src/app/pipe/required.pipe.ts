import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'required'
})
export class RequiredPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+'*';
  }

}
