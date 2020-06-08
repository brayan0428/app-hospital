import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario:Usuario
  constructor(public _sidebarService:SidebarService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario
  }

}
