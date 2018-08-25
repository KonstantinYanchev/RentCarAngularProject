import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarCreateComponent,
    CarDetailsComponent,
    CarEditComponent,
    CarListComponent]
})
export class CarModule { }
