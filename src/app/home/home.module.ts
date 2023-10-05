import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';

import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    GadgethomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ]
})
export class HomeModule { }
