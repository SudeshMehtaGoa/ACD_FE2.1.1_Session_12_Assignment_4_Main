/* Custom pipe to change first character to upper case */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUpCase'
})
export class FirstCharUpCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var strValue: string;
    strValue = value;
    if (strValue.length !== 0) {
      return (strValue.substring(0, 1).toUpperCase() + strValue.substring(1, strValue.length));
    }
    else
      return null;
  }

}
