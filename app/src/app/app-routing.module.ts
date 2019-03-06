import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'product-search', loadChildren: './product-search/product-search.module#ProductSearchPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'product-movement', loadChildren: './product-movement/product-movement.module#ProductMovementPageModule' },
  { path: 'product-forecast', loadChildren: './product-forecast/product-forecast.module#ProductForecastPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }