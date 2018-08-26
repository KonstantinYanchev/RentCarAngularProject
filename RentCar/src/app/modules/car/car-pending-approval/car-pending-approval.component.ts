import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/modules/car/models/car.model';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-pending-approval',
  templateUrl: './car-pending-approval.component.html',
  styleUrls: ['./car-pending-approval.component.css']
})
export class CarPendingApprovalComponent implements OnInit {
  cars: CarModel[] = [];
  constructor(private carService: CarService,
    private toastrService: ToastrService,
    private router: Router) { }

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

  approve(carId: string) {
    let car: CarModel = this.getCarById(carId);
    let self = this;
    car.isApproved = true;

    let updateRequestBody = {
      [carId]: car
    }

    this.carService.updateCar(updateRequestBody)
      .then(function () {
        self.router.navigate(['/cars/list']);
        self.toastrService.success("Car has been approved", "Success");
      });
  }

  private getCarById(carId: string) {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id == carId) {
        return this.cars[i];
      }
    }
  }
}
