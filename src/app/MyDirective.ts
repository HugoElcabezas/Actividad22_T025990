import {Directive, ElementRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[my-directive]'
})

export class MyNumberDirective {
  constructor(el:ElementRef) {
    el.nativeElement.style.background = 'yellow';
  }
}
