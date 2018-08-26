import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from 'src/app/modules/car/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: string;
  car: CarModel;

  constructor(private carService: CarService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let self = this;
    this.carService.getById(this.id).subscribe(function (data: CarModel) {
      self.car = data;
      self.car.id = self.id;
    });
  }

  edit() {
    const updateRequestBody = {
      [this.id] : this.car
    }

    this.carService.updateCar(updateRequestBody);
  }

  delete() {
    this.carService.deleteCar(this.car.id);
  }

}
