import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.ng.html',
  styleUrls: ['drawer.scss'],
})
export class DrawerComponent {
  @Input() isOpen = true;
}
