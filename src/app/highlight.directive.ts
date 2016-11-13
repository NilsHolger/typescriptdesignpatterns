import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[myhighlight]'
})
/*highlight attached element in gold*/
export class HighlightDirective {

  constructor(renderer: Renderer, el: ElementRef) {
      renderer.setElementStyle(el.nativeElement, 'color', 'gold');
      console.log(`* AppRoot called for ${el.nativeElement.tagName}`);
   }
}
