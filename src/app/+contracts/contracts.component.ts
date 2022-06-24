import { Component } from '@angular/core';
import { userData } from './_resources/contractsResource';

@Component({
  selector: 'contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']

})
export class ContractsComponent {
  public data: userData[];

  constructor() {
    this.data = [
      { img: '../../../assets/users-pictures/user1.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Active' },
      { img: '../../../assets/users-pictures/user2.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Active' },
      { img: '../../../assets/users-pictures/user3.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Signature pending' },
    ];
  }
}
