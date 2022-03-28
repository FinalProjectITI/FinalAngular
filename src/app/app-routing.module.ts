import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartCommponentComponent } from './cart-commponent/cart-commponent.component';
import { FavouritCommponentComponent } from './favourit-commponent/favourit-commponent.component';
import { HomeCommponentComponent } from './home-commponent/home-commponent.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { OneCategoryCommponentComponent } from './one-category-commponent/one-category-commponent.component';
import { OneProductCommponentComponent } from './one-product-commponent/one-product-commponent.component';

const routes: Routes = [
 
  {path:'',redirectTo:'/Home-Commponent',pathMatch:'full'},
  {path:'Home-Commponent',component:HomeCommponentComponent},
  {path:'Cart-commponent',component:CartCommponentComponent},
  {path:'FavouritCommponent',component:FavouritCommponentComponent},
  {path:'Login',component:LoginComponent},
  {path:'OneCategory-Commponent',component:OneCategoryCommponentComponent},
  {path:'OneProduct-Commponent',component:OneProductCommponentComponent},
  {path:'**',component:NotFoundPageComponent},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
