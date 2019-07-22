import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { TripsDetailsComponent } from './component/trips-details/trips-details.component';
import { CartComponent } from './componenents/cart/cart.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'list', component: TripsListComponent},
  {path: 'details/:id', component: TripsDetailsComponent},
  { path: 'cart', component: CartComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
