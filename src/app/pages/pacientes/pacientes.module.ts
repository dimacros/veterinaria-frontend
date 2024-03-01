import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MainPacienteComponent } from './main-paciente/main-paciente.component';
import { PacientesService } from '../../Services/pacientes.service';
import { RegistrarPacientesComponent } from './components/registrar-pacientes/registrar-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { DistritosService } from '../../Services/distritos.service';
import { MisCitasComponent } from './components/mis-citas/mis-citas.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    RegistrarPacientesComponent,
    MainPacienteComponent,
    MisCitasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    MainPacienteComponent
  ],
  providers : [
    ConfirmationService,
    MessageService,
    PacientesService,
    DistritosService
  ]
})
export class PacientesModule { }
