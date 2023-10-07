import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';
import { NavigationComponent } from '../nav/navigation/navigation.component';

const routes: Routes = [
  {path:'',redirectTo:'store/home',pathMatch:'full'},
  {path:'store/home',component:GadgethomeComponent},
  {path:"nav",component:NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
