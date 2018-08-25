import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarCreateComponent } from './car-create/car-create.component';

import { AuthenticationGuard } from '../authentication/guards/authentication.guard';

const routes : Route[] = [
  { path: '', pathMatch: 'full', component: CarListComponent, canActivate: [ AuthenticationGuard ] },
  { path: 'create', component: CarCreateComponent },
  { path: 'details/:id', component: CarDetailsComponent },
  { path: 'edit/:id', component: CarEditComponent },
  { path: 'list', component: CarListComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CarRoutingModule {}