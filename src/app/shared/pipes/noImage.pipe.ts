import { Pipe, PipeTransform } from '@angular/core';

export const NO_IMG_SRC = './assets/image/not-found.png';
@Pipe({
  name: 'noImage',
  standalone: true,
})
export class NoImagePipe implements PipeTransform {
  transform(src: string | null | undefined, defaultImg = NO_IMG_SRC): string {
    if (src) {
      return src;
    }
    return defaultImg;
  }
}
