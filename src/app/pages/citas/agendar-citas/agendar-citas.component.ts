import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from '../../../Services/especialidad.service';
import { PsicologosService } from '../../../Services/psicologos.service';
import { CitaService } from '../../../Services/cita.service';
import { Psicologo } from '../../../Models/Psicologo.model';
import { format } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrl: './agendar-citas.component.css'
})
export class AgendarCitasComponent implements OnInit {
  especialidadOptions: Array<any> = [];

  psychologistOptions: Array<any> = [];

  psicologos: Psicologo[] = [];
  selectedEspecialidad: any;
  selectedPsychologist: any;
  reservationDate: Date = new Date();
  reservationTime: string = '';
  codPaciente!:number;
  
  constructor(
    private readonly citaService: CitaService,
    private readonly especialidadService: EspecialidadService,
    private readonly psicolologosService: PsicologosService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.especialidadService.listEspecialidad().subscribe((especialidades) => {
      this.especialidadOptions = especialidades.map((especialidad) => ({
        name: especialidad.nombre,
        value: especialidad.codigo,
      }));
    });

    this.psicolologosService.listPsicologos().subscribe((psicologos) => {
      this.psicologos = psicologos;
      this.psychologistOptions = psicologos.map((psicologo) => ({
        name: `${psicologo.nombres} ${psicologo.apellidos}`,
        value: psicologo.codigo,
      }));
    });

    this.codPaciente = parseInt(localStorage.getItem('codPaciente') || '1') ;
  }

  getPsychologistsByEspecialidad(option: { name: string, value: number }) {
    this.psychologistOptions = this.psicologos.filter((psicologo) => {
      return psicologo.especialidad.codigo === option.value;
    }).map((psicologo) => ({
      name: `${psicologo.nombres} ${psicologo.apellidos}`,
      value: psicologo.codigo,
    }));
  }

  reservarCita() {
    this.citaService.addCita({
      paciente: {
        codigo: this.codPaciente,
      },
      psicologo: {
        codigo: this.selectedPsychologist.value,
      },
      fecha: format(this.reservationDate, 'yyyy-MM-dd'),
      hora: this.reservationTime,
      estado: 'RESERVADO',
      apuntes: '',
    }).subscribe({
      next: () => {
        this.router.navigate(['/paciente/mis-citas']);
      },
      error: () => {
        alert('Error al reservar cita');
      },
    });
  }
}
