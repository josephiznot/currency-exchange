import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "onlyNumbers"
})
export class OnlyNumbersPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return parseFloat(
      value
        .split("")
        .filter(e => !isNaN(e))
        .join("")
    );
  }
}
