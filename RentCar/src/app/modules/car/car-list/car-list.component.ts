import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/modules/car/car.service';
import { CarModel } from 'src/app/modules/car/models/car.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: CarModel[] = [];
  constructor(private carService: CarService) { }

  async ngOnInit() {
    let data: any = await this.carService.getAllCars();
    for(let i = 0; i < data.length; i++) {
      let car: CarModel = data[i];
      this.cars.push(new CarModel(car.id, car.brand, car.model, car.engine, car.horsePower, car.imageUrl, car.createdBy, car.yearOfManufacture, car.pricePerDay));
    }

    console.log(this.cars);
  }

  

}
