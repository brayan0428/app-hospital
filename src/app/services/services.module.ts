import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './upload.service';
import { BusquedaService } from './busqueda.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    UsuarioService,
    UploadService,
    BusquedaService
  ]
})
export class ServicesModule { }
