import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent {
  @Input() header: TemplateRef<any>;
  @Input() content: TemplateRef<any>;

  product = {
    id: 1,
    name: 'Soap',
  };
}
