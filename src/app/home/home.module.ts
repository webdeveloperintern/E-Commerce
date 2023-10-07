import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GadgethomeComponent
  ],
  imports: [
    HomeRoutingModule,
    MatGridListModule,CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatIconModule
  ]
})
export class HomeModule { }
