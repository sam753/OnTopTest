import { Component, Input } from '@angular/core';
import { userData } from '../_resources/contractsResource';

@Component({
  selector: 'contracts-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() public data: userData[]
}
