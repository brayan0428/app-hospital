import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService
  ]
})
export class ServicesModule { }
