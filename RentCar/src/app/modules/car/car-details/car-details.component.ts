import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from 'src/app/modules/car/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars: CarModel[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

}
