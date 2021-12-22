import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule} from '@angular/material/grid-list'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule

  ],
  exports:[
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule
  ]
})
export class SharedModule { }
