import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const pagesRoutes:Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent

      },
      {
        path: 'usuarios',
        component: UsuariosComponent

      }
    ]
  },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)