import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CitaService } from '../../Services/cita.service';
import { DistritosService } from '../../Services/distritos.service';
import { EspecialidadService } from '../../Services/especialidad.service';
import { PacientesService } from '../../Services/pacientes.service';
import { PsicologosService } from '../../Services/psicologos.service';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { AtenderCitasComponent } from './atender-citas/atender-citas.component';



@NgModule({
  declarations: [
    AgendarCitasComponent,
    AtenderCitasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    AgendarCitasComponent,
    AtenderCitasComponent
  ],
  providers : [
    PsicologosService,
    DistritosService,
    EspecialidadService,
    PacientesService,
    CitaService
  ]
})
export class CitasModule { }
