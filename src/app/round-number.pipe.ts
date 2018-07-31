import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "roundNumber"
})
export class RoundNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return +Math.round(value * 100) / 100; //ROUND 2 DECIMAL PLACES
  }
}
