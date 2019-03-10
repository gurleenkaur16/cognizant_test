import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movies'
})
export class MoviesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args? 
    value.filter((item,index)=>{
      if(item.title.indexOf(args)!= -1){
        return true;
      }
    })
    :value;
    
  }

}
