import { Directive, HostListener, Input } from '@angular/core';
import { NoImagePipe } from '../pipes/noImage.pipe';

@Directive({
  selector: 'img[azHandleImgError]',
  standalone: true,
  providers: [NoImagePipe],
})
export class HandleImgErrrorDirective {
  /**
   *
   * *img path for invalid src
   */
  @Input()
  azHandleImgError?: string;

  /**
   *
   * @param noImage
   */
  constructor(private noImage: NoImagePipe) {}

  /**
   *
   * @param event
   */
  @HostListener('error', ['$event'])
  handleImageError(event: Event): void {
    const image = event.target as HTMLInputElement;
    image.src = this.noImage.transform(this.azHandleImgError);
  }
}
