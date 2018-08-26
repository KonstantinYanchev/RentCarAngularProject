import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { CarModel } from './models/car.model';
import { Router } from '@angular/router';

const baseUrl = 'https://rentcar-ee2be.firebaseio.com/cars/';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private router: Router) { }

  getAllCars() {
    let self = this;
    return this.http.get(baseUrl + '.json').toPromise()
      .then(function (data: any) {
        console.log(data);
      })
      .catch(function (error: any) {
        self.toastr.error(error.message, "Error");
      });
  }

  createCar(newCar: CarModel) {
    let self = this;
    return this.http.post(baseUrl + '.json', newCar).toPromise()
      .then(function (response: any) {
        self.toastr.success('Successfully added your car!', 'Success');
        self.router.navigate(['/cars/list']);
      })
      .catch(function (error: any) {
        self.toastr.error(error.message, 'Error');
      })
  }
}
