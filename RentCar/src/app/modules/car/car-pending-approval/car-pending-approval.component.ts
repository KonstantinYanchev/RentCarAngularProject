import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/modules/car/models/car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-pending-approval',
  templateUrl: './car-pending-approval.component.html',
  styleUrls: ['./car-pending-approval.component.css']
})
export class CarPendingApprovalComponent implements OnInit {
  cars: CarModel[] = [];
  constructor(private carService: CarService) { }

  async ngOnInit() {
    let data: any = await this.carService.getAllCars();
    for (let i = 0; i < data.length; i++) {
      let car: CarModel = data[i];
      debugger;
      if (!car.isApproved) {
        this.cars.push(new CarModel(car.id,
          car.brand,
          car.model,
          car.engine,
          car.horsePower,
          car.imageUrl,
          car.createdBy,
          car.yearOfManufacture,
          car.pricePerDay,
          car.isApproved));
      }
    }
  }

  approve(carID: string) {
    console.log(carID);
  }
}
