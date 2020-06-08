import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario:Usuario
  file;
  imageTemp;

  constructor(private usuarioService:UsuarioService, private uploadService:UploadService) { 
    this.usuario = this.usuarioService.usuario
  }

  ngOnInit(): void {
  }

  onSubmit(usuario:Usuario){
    this.usuario.nombre = usuario.nombre
    this.usuario.email = usuario.email

    this.usuarioService.actualizarUsuario(this.usuario).subscribe()
  }

  uploadImage(e){
    const file = e.target
    if(file.files.length > 0){
      this.file = file.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onloadend = () => this.imageTemp = reader.result
    }
  }

  updateImage(){
    if(this.file){
      const form =  new FormData()
      form.append("imagen", this.file)
      this.uploadService.uploadImage(form, "usuario").subscribe(() => {
        this.imageTemp = null
      })
    }
  }
} 
