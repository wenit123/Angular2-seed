// import 2 service
// ElementRef keep us access to the host element
// Renderer use to motify that element
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    // css slelctor for the host element
    selector: '[autoGrow]',
    host: {
        // event : methus
        '(focus)':'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {

    constructor( private el: ElementRef, private renderer: Renderer){

    }
    onFocus(){
        this.renderer.setElementStyle(this.el, 'width','200');
    }
    onblur(){
        this.renderer.setElementStyle(this.el, 'width','120');
    }
}
