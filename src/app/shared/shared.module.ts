import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';

import { StatusChipComponent } from './status-chip/status-chip.component';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  BrowserModule,
  MaterialModule,
]

const components = [
  StatusChipComponent
]

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...modules, ...components]
})

export class SharedModule {}
