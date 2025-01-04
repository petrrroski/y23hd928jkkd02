
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication-new/auth.guard';
import { LoginComponent } from './authentication-new/login/login.component';
import { SignUpComponent } from './authentication-new/sign-up/sign-up.component';
import { FullComponent } from './full/full.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: FullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { useHash: false }
  )],
  exports: [RouterModule],
  providers: [AuthGuard],

})
export class AppRoutingModule { 
  ngOnInit(){
    console.log("here")
  }
}
