import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PsicologosModule } from './pages/psicologos/psicologo.module';
import { HttpClientModule } from '@angular/common/http';
import { PacientesModule } from './pages/pacientes/pacientes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SharedModule,
    HttpClientModule,
    PsicologosModule,
    PacientesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veterinaria-frontend';
}
