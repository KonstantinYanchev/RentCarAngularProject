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

  getById(carId: string) {
    return this.http.get<CarModel>(baseUrl + carId + '/.json');
  }

  getAllCars() {
    let self = this;
    return this.http.get(baseUrl + '.json')
      .toPromise()
      .then(function (responseObject: any) {
        let data: CarModel[] = [];
        let responseObjects: string[] = Object.getOwnPropertyNames(responseObject);
        for (let i = 0; i < responseObjects.length; i++) {
          let obj: any = responseObject[responseObjects[i]];
          data.push(new CarModel(responseObjects[i], obj.brand, obj.model, obj.engine, obj.horsePower, obj.imageUrl, obj.createdBy, obj.yearOfManufacture, obj.pricePerDay));
        }

        return data;
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

  updateCar(body: any) {
    let self = this;
    return this.http.patch(baseUrl + '.json', body).toPromise()
    .then(function() {
      self.router.navigate(['/cars/list']);
      self.toastr.success("Car has been updated successfully", "Success");
    })
    .catch(function(error: any) {
      self.toastr.error(error.message, "Error");
    });
  }

  deleteCar(id: string) {
    let self = this;
    debugger;
    return this.http.delete(baseUrl + id + '/.json').toPromise()
    .then(function () {
      self.router.navigate(['/cars/list']);
      self.toastr.success("Car has been deleted successfully", "Success");
    })
    .catch(function(error: any) {
      self.toastr.error(error.message, "Error");
    })
  }
}
