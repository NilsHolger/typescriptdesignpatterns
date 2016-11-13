import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[highlight], input'})
/**highlight attached element or input element in blue */
export class ContactHighlightDirective {
    constructor(renderer : Renderer, el: ElementRef){
        renderer.setElementStyle(el.nativeElement, 'color', 'maroon');
        console.log(`* Contact highlight called for ${el.nativeElement.tagName}`);
    }
}
