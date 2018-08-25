import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: UserModel;

  constructor(private authenticationService: AuthenticationService) { 
    this.model = new UserModel();
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.signIn(this.model.email, this.model.password);
  }
}
