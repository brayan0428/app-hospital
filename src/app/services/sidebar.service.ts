import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/admin/dashboard'
        },
        {
          titulo: 'Prueba',
          url: '/prueba'
        }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-settings',
      submenu: [
        {
          titulo: 'Usuarios',
          url: '/admin/usuarios'
        }
      ]
    }

  ]

  constructor() { }
}
