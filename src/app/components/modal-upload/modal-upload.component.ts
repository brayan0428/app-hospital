import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from './modal-upload.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
  oculto:string
  file;
  imageTemp;

  constructor(public modalUploadService:ModalUploadService, private uploadService:UploadService) {
    this.oculto = modalUploadService.oculto
  }

  ngOnInit(): void {
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

  updateImage(inputFile){
    if(this.file){
      const form =  new FormData()
      form.append("imagen", this.file)
      this.uploadService.uploadImage(form, "usuario", this.modalUploadService.id).subscribe(() => {
        this.imageTemp = null
        this.modalUploadService.notificar.emit()
        this.modalUploadService.ocultarModal()
        inputFile.value = null
      })
    }
  }
}
