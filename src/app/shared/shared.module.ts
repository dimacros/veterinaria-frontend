import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    TableModule
  ],
  exports: [
    NavBarComponent,
    CardModule,
    TableModule
  ]
})
export class SharedModule { }
