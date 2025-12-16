import { RouterModule, Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Login } from './features/auth/login';
import { Signup } from './features/auth/signup';
import { ListingCreate } from './features/listing-create/listing-create';
import { ListingDetail } from './features/listing-detail/listing-detail';
//import { Auth } from './core/guards/auth-guard';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  //{ path: 'listings/create', component: ListingCreate, canActivate: [Auth] },
  { path: 'listings/:id', component: ListingDetail }
];