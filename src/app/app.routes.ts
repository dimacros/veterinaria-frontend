import { Routes } from '@angular/router';
import { MainPsicologosComponent } from './pages/psicologos/main-psicologos/main-psicologos.component';
import { MainPacienteComponent } from './pages/pacientes/main-paciente/main-paciente.component';
import { AtenderCitasComponent } from './pages/citas/atender-citas/atender-citas.component';
import { AgendarCitasComponent } from './pages/citas/agendar-citas/agendar-citas.component';

export const routes: Routes = [
    { path: 'psicologos', component:  MainPsicologosComponent},
    { path: 'paciente', component:  MainPacienteComponent},
    { path: 'atender-cita', component:  AtenderCitasComponent},
    { path: 'agendar-cita', component:  AgendarCitasComponent}
];
