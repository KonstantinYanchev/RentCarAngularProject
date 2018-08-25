import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { FormsModule } from '@angular/forms';

import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule
  ],
  declarations: [
    CarCreateComponent,
    CarDetailsComponent,
    CarEditComponent,
    CarListComponent]
})
export class CarModule { }
