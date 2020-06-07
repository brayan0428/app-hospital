import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const pagesRoutes:Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)