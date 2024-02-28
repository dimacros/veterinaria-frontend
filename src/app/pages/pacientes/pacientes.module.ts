import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MainPacienteComponent } from './main-paciente/main-paciente.component';
import { PacientesService } from '../../Services/pacientes.service';
import { RegistrarPacientesComponent } from './components/registrar-pacientes/registrar-pacientes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegistrarPacientesComponent,
    MainPacienteComponent
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
    PacientesService
  ]
})
export class PacientesModule { }
