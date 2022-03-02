import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { QualityComponent } from './quality/quality.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ProductComponent,
    QualityComponent,
    PricingComponent,
    ContactusComponent,
 
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
