import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myName = 'Angular ' + VERSION.major;
  title = 'first';
  open = false;

  changeTitle() {
    this.title = 'Second';
  }
}
