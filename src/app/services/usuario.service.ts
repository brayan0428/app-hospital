import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Usuario } from '../models/usuario.model';
import { environment }  from "../../environments/environment"
import {map} from "rxjs/operators"
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token;
  usuario;
  
  constructor(private http:HttpClient, private router:Router) {
    this.loadData()
  }

  guardarStorage(token,id,usuario){
    localStorage.setItem("token", token)
    localStorage.setItem("id", id)
    localStorage.setItem("usuario", JSON.stringify(usuario))
    this.token = token
    this.usuario = usuario
  }

  isLogged(){
    return this.token !== ''
  }

  loadData(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem("token")
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }else{
      this.token = ''
      this.usuario = null
    }
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
        this.guardarStorage(data.token,data.usuario._id,data.usuario)
        return true
      })
    )
  }

  loginGoogle(token){
    return this.http.post(environment.URL_API + '/auth/login/google', {token}).pipe(map ((data:any) => {
        this.guardarStorage(data.token,data.usuario._id,data.usuario)
        return true
    }))
  }

  logout(){
    this.token = ''
    this.usuario = null
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    localStorage.removeItem("id")
    this.router.navigate(["/"])
  }
}
