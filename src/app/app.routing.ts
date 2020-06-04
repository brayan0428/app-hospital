import { Routes, RouterModule } from "@angular/router"
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PagesComponent } from './pages/pages.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './login/register.component'

const appRoutes:Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '', redirectTo: '/dashboard', pathMatch:'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: 'register',
    component: RegisterComponent
  }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes)