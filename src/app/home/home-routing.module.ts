import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'/home',component:GadgethomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
