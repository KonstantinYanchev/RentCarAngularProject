import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from '../car.service';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  model: CarModel;

  constructor(private carService: CarService,
    private authenticationService: AuthenticationService) {
    this.model = new CarModel();
  }

  ngOnInit() {
  }

  create() {
    this.model.createdBy = this.authenticationService.currentUserEmail;
    this.carService.createCar(this.model);
  }
}
