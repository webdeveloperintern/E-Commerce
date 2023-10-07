import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  declarations: [
    GadgethomeComponent
  ],
  imports: [
    HomeRoutingModule,
    MatGridListModule,CommonModule
  ]
})
export class HomeModule { }
