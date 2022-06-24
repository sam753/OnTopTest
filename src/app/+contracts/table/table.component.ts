import { Component } from '@angular/core';

export interface table {
  img: string;
  name: string;
  type: string;
  startDate: string;
  amount: number;
  status: string;
}

const mockup: table[] = [
  { img: '../../../assets/users-pictures/user1.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Active' },
  { img: '../../../assets/users-pictures/user2.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Active' },
  { img: '../../../assets/users-pictures/user3.svg', name: 'Darlene Robertson', type: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'Signature pending' },
];

@Component({
  selector: 'contracts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']

})
export class TableComponent {
  public data: table[] = mockup;
}
