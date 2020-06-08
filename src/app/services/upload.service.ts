import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"
import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  usuario:Usuario
  constructor(private http:HttpClient, private usuarioService:UsuarioService) {
    this.usuario = this.usuarioService.usuario
  }

  uploadImage(data,tipo){
    return this.http.put(`${environment.URL_API}/upload/${tipo}/${this.usuario._id}`, data).pipe(map((data:any) => {
      Swal.fire("Confirmación", "Imagen actualizada exitosamente", "success")
      if(tipo == "usuario"){
        this.usuarioService.usuario.img = data.data.img
        this.usuarioService.guardarStorage(this.usuarioService.token, data.data._id, data.data)
      }
      return true
    }))    
  }
}
