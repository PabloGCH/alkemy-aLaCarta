import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { LoginGuardGuard } from './guards/login-guard.guard';
import { DishSearchComponent } from './components/dish-search/dish-search.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [LoginGuardGuard]},
  {path: 'search-dish', component: DishSearchComponent, canActivate: [LoginGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
