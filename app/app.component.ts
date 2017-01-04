import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses>',
    directives: [CoursesComponent] // ref
})
export class AppComponent { } // this is the root application
