import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from '../authentication-module/sign-in/sign-in.component';
import { SignUpComponent } from '../authentication-module/sign-up/sign-up.component';
//import { AuthenticationGuard } from '../authentication-module/guards/authentication.guard.ts';

const routes: Route[] = [
  {
    path: 'authentication', children: [
      { path: 'signIn', component: SignInComponent },
      { path: 'signUp', component: SignUpComponent },
    ]
  },
  // { path: 'recipes', 
  //  loadChildren: () => RecipeModule ,
  //  canActivate: [AuthenticationGuard] 
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