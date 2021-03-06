import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routing';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PipesModule,
    PAGES_ROUTES
  ]
})

export class PagesModule {}