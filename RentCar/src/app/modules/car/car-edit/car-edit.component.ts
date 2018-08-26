import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from 'src/app/modules/car/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: string;
  car: CarModel;

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let self = this;
    this.carService.getById(this.id).subscribe(function (data: CarModel) {
      self.car = data;
      self.car.id = self.id;
    });
  }

  edit() {
    this.car.isApproved = false;
    const updateRequestBody = {
      [this.id]: this.car
    }

    let self = this;
    this.carService.updateCar(updateRequestBody)
      .then(function () {
        self.router.navigate(['/cars/list']);
        self.toastrService.success("Car has been updated successfully and added for approval", "Success");
      });
  }

  delete() {
    this.carService.deleteCar(this.car.id);
  }
}
