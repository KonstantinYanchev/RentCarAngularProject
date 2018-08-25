import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  model: CarModel;

  constructor() { 
    this.model = new CarModel();
  }

  ngOnInit() {
  }
}
