import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'status-chip',
  templateUrl: './status-chip.component.html',
  styleUrls: ['./status-chip.component.scss']
})
export class StatusChipComponent implements OnChanges {
  @Input() public status: string = '';

  public cssClass: string = '';
  public label: string = '';

  constructor() { }

  public ngOnChanges() {
    switch(this.status) {
      case 'Active': 
        this.cssClass = 'chip-success';
        this.label = 'Active'
        break;
      case 'Signature pending':
        this.cssClass = 'chip-warning'
        this.label = 'Signature pending'
    }
  }
}
