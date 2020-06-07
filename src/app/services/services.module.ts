import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    UsuarioService
  ]
})
export class ServicesModule { }
