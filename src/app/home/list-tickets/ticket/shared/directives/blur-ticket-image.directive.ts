import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBlurTicketImage]'
})
export class BlurTicketImageDirective {
  constructor(private _element: ElementRef) {
  }
  @HostListener('click') onClick() {
    this._element.nativeElement.style.filter =
      this._element.nativeElement.style.filter ? null : 'blur(30px)';
  }

}
