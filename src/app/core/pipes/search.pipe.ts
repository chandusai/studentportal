import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }

    return value.filter((val: any) => {
      console.log(val);
      let result =
        val.name.toLocaleLowerCase().includes(args.toLocaleLowerCase()) ||
        val.age.toString().includes(args) ||
        val.surName.toLocaleLowerCase().includes(args.toLocaleLowerCase());

      return result;
    });
  }
}
