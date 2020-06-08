import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment"
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http:HttpClient, private usuarioService:UsuarioService) { }

  consultarxColeccion(parametro,coleccion){
    return this.http.get(`${environment.URL_API}/busqueda/${coleccion}/${parametro}?token=${this.usuarioService.token}`).pipe(map((data:any) => {
      return data.data
    }))
  }
}
