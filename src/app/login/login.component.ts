declare function init_plugins()
declare const gapi:any;

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame:boolean = false;
  email:string = ""
  auth2:any;
  constructor(private _router:Router, private usuarioService:UsuarioService, private zone:NgZone) { }

  ngOnInit(): void {
    init_plugins()
    this.email = localStorage.getItem("email") || ''
    if(this.email != ''){
      this.recuerdame = true
    }
    this.googleInit()
  }

  onSubmit(form:NgForm){
    const usuario:Usuario = {
      nombre: null,
      email: form.value.email,
      password:form.value.password
    }

    this.usuarioService.login(usuario,form.value.recuerdame).subscribe(() => this._router.navigate(["/dashboard"]))
  }

  googleInit(){
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id: "49900425369-t9dmlsdj9i2jhdfcnn18da4b4pnmjern.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      })
      this.attachSigin(document.getElementById("btnGoogle"))
    })
  }

  attachSigin(element){
    this.auth2.attachClickHandler(element, {}, googleUser => {
      let token = googleUser.getAuthResponse().id_token
      this.usuarioService.loginGoogle(token).subscribe(data => {
        this.zone.run(() => {
          this._router.navigate(["/dashboard"])
        })
      })
    })
  }
}
