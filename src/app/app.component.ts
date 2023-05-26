import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myName = 'Angular ' + VERSION.major;
  title = 'first';

  changeTitle() {
    this.title = 'Second';
  }
}
