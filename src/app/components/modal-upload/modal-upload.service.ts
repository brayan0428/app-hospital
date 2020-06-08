import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {
  tipo:string;
  id:string;
  oculto: string = 'd-none'

  notificar = new EventEmitter<any>()

  constructor() {}

  ocultarModal(){
    this.oculto = 'd-none'
    this.tipo = null
    this.id = null
  }

  abrirModal(tipo:string,id:string){
    this.oculto = ''
    this.tipo = tipo
    this.id = id
  }
}
