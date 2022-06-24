import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'contracts-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']

})
export class FiltersComponent {
  public range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
