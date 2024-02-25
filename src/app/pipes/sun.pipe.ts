import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sun'
})
export class SunPipe implements PipeTransform {

  transform(product:Product[]): number {
    return product
      .map(p=>p.price)
      .reduceRight((acc,next)=>acc+next);
  }

}
