import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[colorChanger]'
})
export class ColorChangerDirective {
  private colors: string[] = ['red', 'green', 'yellow'];
  private index: number = 0;

  constructor() {}

}
