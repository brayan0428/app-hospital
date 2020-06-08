import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios:Usuario[] = []
  desde:number = 0
  totalRegistros:number = 0
  constructor(private usuarioService:UsuarioService, private busquedaService:BusquedaService) { }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  cargarUsuarios(){
    this.usuarioService.consultarUsuarios(this.desde).subscribe((data:any) => {
      this.usuarios = data.data
      this.totalRegistros = data.total
    })
  }

  cargarMas(cantidad){
    let desde = this.desde + cantidad
    if(desde < 0){
      return
    }
    if(desde >= this.totalRegistros){
      return
    }
    this.desde = desde
    this.cargarUsuarios()
  }

  actualizarUsuario(usuario){
    this.usuarioService.actualizarUsuario(usuario).subscribe(() => {
      this.cargarUsuarios()
    })
  }

  eliminarUsuario(usuario:Usuario){
    if(usuario._id === this.usuarioService.usuario._id){
      Swal.fire("Error", "No se puede eliminar a si mismo", "error")
      return
    }
    Swal.fire({
      title: "Confirmación",
      text: "Esta seguro que desea eliminar a " + usuario.nombre,
      icon: "warning",
      confirmButtonText: "Si",
      cancelButtonText: "No",
      showCancelButton: true
    }).then(res => {
      if(res.value){
        this.usuarioService.eliminarUsuario(usuario._id).subscribe(() => {
          this.cargarUsuarios()
        })
      }
    })
  }

  buscar(input){
    const parametro = input.value
    if(parametro.length < 3 && this.usuarios.length != this.totalRegistros){
      this.cargarUsuarios()
      return
    }

    this.busquedaService.consultarxColeccion(parametro,"usuario").subscribe(data => {
      this.usuarios = data
    })
  }
}
