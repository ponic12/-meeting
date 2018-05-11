// <img [src]="imageUrl | defaultPipeImg:'http://mydomain/imgs/defaultImage.jpg'" />

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noSanitize' })
export class DefaultImgPipe implements PipeTransform {
   constructor() {

   }
   transform(value:string, fallback:string) {
        let image = "";
        if (value)
            image = value;
        else
            image = fallback;
        return image;
   }
} 