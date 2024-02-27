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
            label: 'Agendar Cita',
            icon: 'pi pi-fw pi-calendar',
            routerLink: '/'
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
                icon: 'pi pi-fw pi-user-plus'
              }
            ]
          },
          {
            label: 'Atender Cita',
            icon: 'pi pi-fw pi-check-square'
          }
        ];
      }
}
