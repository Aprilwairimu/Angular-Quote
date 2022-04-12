import { variable } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimepipePipe implements PipeTransform {
    transform(value: any): number {
    let Today: Date = new Date();
    let dateToday: any = new Date(
      Today.getFullYear(),
      Today.getMonth(),
      Today.getDate()
    );
      
      var timeLapse = Math.abs(dateToday - value);
      const secs = 86400;
      
    var difference = timeLapse * 0.001;
    var dateCounter = difference / secs;
    if (dateCounter >= 1 && dateToday > value) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
