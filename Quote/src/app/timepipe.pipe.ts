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
      Today.getDate()
    );    var timelapse = Math.abs(dateToday - value);
    const secs = 86400;
    var difference = timelapse / secs;    return difference;
  }
}

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
