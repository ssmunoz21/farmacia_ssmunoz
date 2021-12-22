import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutFullComponent } from './layout-full/layout-full.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutFullComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
