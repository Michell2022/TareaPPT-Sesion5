import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [

  {path:"principal", component:HomeComponent},
  {path:"**", pathMatch:'full', redirectTo:"principal"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
