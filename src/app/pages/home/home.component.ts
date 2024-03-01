import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PsicologosService } from '../../Services/psicologos.service';
import { PacientesService } from '../../Services/pacientes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    PacientesService,
    PsicologosService,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    pacienteOptions: Array<any> = [];
    psicologoOptions: Array<any> = [];
    selectedPaciente: any;
    selectedPsicologo: any;
    roleTypeOptions = [
      { value: 'psicologo', label: 'PSICÓLOGO' },
      { value: 'paciente', label: 'PACIENTE' },
    ]

    selectedTipoRol: any;

    constructor(
      private readonly pacientesService: PacientesService,
      private readonly psicologosService: PsicologosService,
      private readonly router: Router,
    ) { }
  
    ngOnInit() {
      this.pacientesService.listPacientes().subscribe((pacientes) => {
        this.pacienteOptions = pacientes.map((paciente) => ({
          label: `${paciente.nombres} ${paciente.apellidos}`,
          value: paciente.codigo,
        }));
      });
  
      this.psicologosService.listPsicologos().subscribe((psicologos) => {
        this.psicologoOptions = psicologos.map((psicologo) => ({
          label: `${psicologo.nombres} ${psicologo.apellidos}`,
          value: psicologo.codigo,
        }));
      });
    }

    login() {
      if (this.psicologoWasSelected()) {
        this.router.navigate(['/atender-cita']);
      } else if (this.pacienteWasSelected()) {
        this.router.navigate(['/agendar-cita']);
      }
    }

    goToRegister() {
      if (this.psicologoWasSelected()) {
        this.router.navigate(['/psicologos']);
      } else if (this.pacienteWasSelected()) {
        this.router.navigate(['/paciente']);
      }
    }

    psicologoWasSelected() {
      return this.selectedTipoRol === 'psicologo';  
    }

    pacienteWasSelected() {
      return this.selectedTipoRol === 'paciente';  
    }
}
