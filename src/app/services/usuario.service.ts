import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Usuario } from '../models/usuario.model';
import { environment }  from "../../environments/environment"
import {map} from "rxjs/operators"
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {
    
  }

  registrarUsuario(usuario:Usuario){
    return this.http.post(environment.URL_API + '/auth/register', usuario)
    .pipe(map((data:any) => {
      Swal.fire("Confirmación", "Usuario creado exitosamente", "success")
      return data.usuario
    }))
  }

  login(usuario:Usuario, recuerdame:boolean = false){
    if(recuerdame){
      localStorage.setItem("email", usuario.email)
    }else{
      localStorage.removeItem("email")
    }
    return this.http.post(environment.URL_API + '/auth/login', usuario).pipe(
      map((data:any) => {
        localStorage.setItem("token", data.token)
        localStorage.setItem("id", data.usuario._id)
        localStorage.setItem("usuario", JSON.stringify(data.usuario))
        return true
      })
    )
  }
}
