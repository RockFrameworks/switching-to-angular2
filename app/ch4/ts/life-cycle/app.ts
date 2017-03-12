import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'panel',
  inputs: ['title', 'caption'],
  template: '<ng-content></ng-content>'
})
class Panel {
  ngOnChanges(changes) {
    console.log('On changes', changes);
  }
  ngOnInit() {
    console.log('Initialized');
  }
  ngDoCheck() {
    console.log('Do check');
  }
  ngAfterContentInit() {
    console.log('After content init');
  }
  ngAfterContentChecked() {
    console.log('After content checked');
  }
  ngAfterViewInit() {
    console.log('After view init');
  }
  ngAfterViewChecked() {
    console.log('After view checked');
  }

//  ngAfterContentChecked() {
//    console.log('After content checked');
//  }
//  ngAfterViewChecked() {
//    console.log('After view checked');
//  }

/*
On changes Object {title: SimpleChange, caption: SimpleChange}
app.ts:14 Initialized
app.ts:17 Do check
app.ts:20 After content init
app.ts:23 After content checked
app.ts:26 After view init
app.ts:29 After view checked
lang.ts:389 Angular 2 is running in the development mode. Call enableProdMode() to enable the production mode.
app.ts:17 Do check
app.ts:23 After content checked
app.ts:29 After view checked
 */
  ngOnDestroy() {
    console.log('Destroy');
  }
}

@Component({
  selector: 'app',
  template: `
    <button (click)="toggle()">Toggle</button>
    <div *ngIf="counter % 2 == 0">
      <panel caption="Sample caption" title="Sample">Hello world!</panel>
    </div>
  `,
  directives: [Panel]
})
class App {
  counter: number = 0;
  toggle() {
    this.counter += 1;
  }
}

bootstrap(App);
