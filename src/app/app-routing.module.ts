import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomePageComponent} from './home-page/home-page.component'



const routes: Routes = [
  {path: '', component: LoginComponent, data:{animation:'LoginPage'} },
  {path: 'home', component: HomePageComponent, data:{animation:'HomePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
