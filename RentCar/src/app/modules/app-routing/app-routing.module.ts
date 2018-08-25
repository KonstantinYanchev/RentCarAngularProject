import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarModule } from '../car/car.module';

import { SignInComponent } from '../authentication/sign-in/sign-in.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';

import { AuthenticationGuard } from '../authentication/guards/authentication.guard';

const routes: Route[] = [
  {
    path: 'authentication', children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
    ]
  },
  { path: 'cars', 
   loadChildren: () => CarModule ,
   canActivate: [AuthenticationGuard] 
  }, 
  {
    path: '**', redirectTo: '/authentication/signIn'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }