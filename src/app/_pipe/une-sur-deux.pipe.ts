import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
  name: 'uneSurDeux'
})
export class UneSurDeuxPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(value: string, ...args: unknown[]): SafeHtml {
    let result: string = "";
    const chars = [...value];
    chars.map((c, i) => result += (!(i % 2) ? `<span style="color: red">${c}</span>` : c.toUpperCase()));
    return this._sanitizer.bypassSecurityTrustHtml(result);
  }

}
