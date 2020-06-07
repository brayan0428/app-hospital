declare function init_plugins()

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import swal from "sweetalert2"
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private _usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    init_plugins()
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
      condiciones: [false]
    }, {validators:this.validarPassword('password','confirmarPassword') })
  }

  validarPassword(password,confirmarPassword){
    return (group:FormGroup) => {
      const clave = group.controls[password].value
      const confirmarClave = group.controls[confirmarPassword].value
      if(clave === confirmarClave){
        return null
      }
      return {
        diferentes: true
      }
    }
  }

  onSubmit(){
    const data = this.form.value
    if(!data.condiciones){
      swal.fire("Error","Debes aceptar los terminos y condiciones", "warning")
      return
    }
    const usuario:Usuario = {
      nombre: data.nombre,
      email: data.email,
      password: data.password
    }
    this._usuarioService.registrarUsuario(usuario).subscribe(data => {
      this.router.navigate(["/"])
    })
  }

  validateError(campo,tipo){
    if(this.form.get(campo).errors){
      return this.form.get(campo).errors[tipo]
    }
    return false
  }
}
