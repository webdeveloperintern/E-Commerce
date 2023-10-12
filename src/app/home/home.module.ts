import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { GadgethomeComponent } from './gadgethome/gadgethome.component';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GadgethomeComponent
  ],
  imports: [
    HomeRoutingModule,HttpClientModule,
    MatGridListModule,CommonModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatIconModule,MatPaginatorModule,NgxPaginationModule
  ],
  providers:[HttpClient]
})
export class HomeModule { }
