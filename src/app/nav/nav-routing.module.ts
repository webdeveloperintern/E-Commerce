import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path:'',
  component:NavigationComponent,children:[{path:'shop/home',loadChildren:()=>import('../home/home.module').then(m=>m.HomeModule)}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
