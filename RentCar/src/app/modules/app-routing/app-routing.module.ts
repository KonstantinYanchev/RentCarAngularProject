import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from '../authentication-module/sign-in/sign-in.component';
import { SignUpComponent } from '../authentication-module/sign-up/sign-up.component';
//import { AuthGuard } from './auth/auth.guard';

const routes: Route[] = [
  {
    path: 'authentication', children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
    ]
  },
  // { path: 'recipes', 
  //  loadChildren: () => RecipeModule ,
  //  canActivate: [AuthGuard] 
  // }, 
  {
    path: '**', redirectTo: '/authentication/signIn'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }