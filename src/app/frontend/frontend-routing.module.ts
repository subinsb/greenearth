import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { QualityComponent } from './quality/quality.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'pricing' , component:PricingComponent},
  {path: 'product', component:ProductComponent},
  {path: 'quality', component:QualityComponent},
  {path: 'contactus', component:ContactusComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
