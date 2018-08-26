import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/car.model';
import { CarService } from 'src/app/modules/car/car.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/services/authentication.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: CarModel;
  id: string;

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private authenticatedService: AuthenticationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let self = this;
    this.carService.getById(this.id).subscribe(function (data: CarModel) {
      self.car = data;
      self.car.id = self.id;
    });
  }

  canEdit(): boolean {
    return this.car.createdBy == this.authenticatedService.currentUserEmail;
  }

}
