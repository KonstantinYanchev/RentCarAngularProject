import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string = '';

  constructor(private toastrService: ToastrService,
    private router: Router) { }

  signUp(email: string, password: string) {
    let self = this;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (data: any) {
        self.toastrService.success("Hello, " + data.user.email, "Success");
      })
      .catch(function (error: any) {
        self.toastrService.error(error.message, "Error");
      });
  }

  signIn(email: string, password: string) {
    let self = this;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (data: any) {
        console.log(data);
        firebase.auth().currentUser.getIdToken()
          .then(function (token: string) {
            debugger;
            self.token = token;
          })
          .catch(function (error: any) {
            console.log(error);
          });

          //change it...
          self.router.navigate(['/authentication/signUp']);
          self.toastrService.success('Logged in!', 'Success');
      })
      .catch(function (error: any) {
        self.toastrService.error(error.message, "Error");
      });
  }

  logout() {
    let self = this;
    firebase.auth().signOut()
    .then(function() {
      self.token = null;
      self.toastrService.success("Successfully signed out", "Success");
      self.router.navigate(['/authentication/signIn']);
    })
    .catch(function(error: any) {
      self.toastrService.error(error.message, "Error");
    });
  }

  async getToken() {
    this.token = await firebase.auth().currentUser.getIdToken();
    debugger;
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }
}
