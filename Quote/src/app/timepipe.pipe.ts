import { variable } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimepipePipe implements PipeTransform {
    transform(value: any): any {
    let Today: Date = new Date();
    let dateToday: any = new Date(
      Today.getFullYear(),
      Today.getMonth(),
      Today.getDay()
      );
      var timelapse = Math.abs(dateToday - value);
    const secs = 86400;
      var difference = timelapse / secs;    
      return Today;
  }
}

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
