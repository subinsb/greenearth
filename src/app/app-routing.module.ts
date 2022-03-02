import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendRoutingModule } from './frontend/frontend-routing.module';

const routes: Routes = [
{path:"", loadChildren:()=> import("./frontend/frontend.module").then(mod=>mod.FrontendModule)

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
