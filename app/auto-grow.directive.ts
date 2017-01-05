import {Directive} from 'angular2/core'

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
    onFocus(){

    }
    onblur(){

    }
}
