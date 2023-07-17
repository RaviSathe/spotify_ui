import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Home1Component } from './practice/home1/home1.component';
import { LoginComponent } from './practice/login/login.component';
import { RegistrationComponent } from './practice/registration/registration.component';
import { VerificationGuard } from './verification.guard';
import { DashBoardComponent } from './practice/dash-board/dash-board.component';

const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path:'home', component:Home1Component,canActivate:[VerificationGuard]},
  {path:'', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dash-board', component:DashBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
