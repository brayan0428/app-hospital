import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './sidebar.service';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from './upload.service';
import { BusquedaService } from './busqueda.service';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    UsuarioService,
    UploadService,
    BusquedaService,
    ModalUploadService
  ]
})
export class ServicesModule { }
