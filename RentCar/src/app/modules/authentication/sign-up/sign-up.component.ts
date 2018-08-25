import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.model = new User();
  }

  register() {
    this.authenticationService.signUp(this.model.email, this.model.password);
  }
}
