import { NewOffertComponent } from './pages/offers/newOffert/newoffert.component';
import { LoginComponent } from './pages/login/login.component';
import { TitleOffersComponent } from './pages/offers/titlteoffers/titleoffers.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsOffertComponent } from './pages/offers/detailsoffert/detailsOffert.component';
import { OffertComponent } from './pages/offers/offert.component';
import { CanActivateViaAuthGuard } from './helpers/CanActivateViaAuthGuard';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children:[
    {
      path: '',
      component: TitleOffersComponent
    },
    {
      path:'offert',
      component: OffertComponent,
      canActivate:[CanActivateViaAuthGuard]
    },
    {
      path:'detailoffert/:id',
      component: DetailsOffertComponent
    }
    ] 
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'newoffert',
    component: NewOffertComponent,
    canActivate:[CanActivateViaAuthGuard]    
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
