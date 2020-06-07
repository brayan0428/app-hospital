declare function init_plugins()

import { Component, OnInit } from '@angular/core';
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
  constructor(private _router:Router, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    init_plugins()
    this.email = localStorage.getItem("email") || ''
    if(this.email != ''){
      this.recuerdame = true
    }
  }

  onSubmit(form:NgForm){
    const usuario:Usuario = {
      nombre: null,
      email: form.value.email,
      password:form.value.password
    }

    this.usuarioService.login(usuario,form.value.recuerdame).subscribe(() => this._router.navigate(["/dashboard"]))
  }
}
