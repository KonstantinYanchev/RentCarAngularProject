import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  providers: [ AuthenticationService ]
})
export class AuthenticationModule { }
