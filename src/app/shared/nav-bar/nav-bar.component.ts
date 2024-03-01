import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
        this.items = [
          {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            routerLink: '/'
          },
          {
            label: 'Citas',
            icon: 'pi pi-fw pi-calendar-plus',
            items: [
              {
                label: 'Agendar Cita',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/agendar-cita'
              },{
                label: 'Listado de Citas',
                icon: 'pi pi-fw pi-list',
                routerLink: '/paciente/mis-citas'
              },
            ]
          },
          
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Nuevo Usuario Psicologo',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: '/psicologos'
              },
              {
                label: 'Nuevo Usuario Paciente',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: '/paciente'
              }
            ]
          },
          {
            label: 'Atender Cita',
            icon: 'pi pi-fw pi-check-square',
            routerLink: '/atender-cita'
          }
        ];
      }
}
