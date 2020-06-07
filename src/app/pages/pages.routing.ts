import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const pagesRoutes:Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)