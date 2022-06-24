import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { ContractsComponent } from './contracts.component';
import { FiltersComponent } from './filters/filters.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent, FiltersComponent, ContractsComponent, CardComponent],
  imports: [SharedModule],
})
export class ContractsModule { }
