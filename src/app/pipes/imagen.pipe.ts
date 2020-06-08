import { Pipe, PipeTransform } from '@angular/core';
import { environment } from "../../environments/environment"
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen:string, tipo:string = "usuario"): unknown {
    if(imagen && imagen.indexOf("https") >= 0){
      return imagen
    }

    let url = `${environment.URL_API}/imagenes/`

    if(!imagen){
      url += 'usuario/xxx'
      return url
    } 

    switch(tipo){
      case "usuario":
        url += 'usuario/' + imagen
        break
      case "hospital":
        url += 'hospital/' + imagen
        break
      case "medico":
        url += 'medico/' + imagen
        break
      default:
        url += 'usuario/xxx'
    }
    return url;
  }

}
