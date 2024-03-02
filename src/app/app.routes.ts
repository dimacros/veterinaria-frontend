import { Routes } from '@angular/router';
import { MainPsicologosComponent } from './pages/psicologos/main-psicologos/main-psicologos.component';
import { MainPacienteComponent } from './pages/pacientes/main-paciente/main-paciente.component';
import { AtenderCitasComponent } from './pages/citas/atender-citas/atender-citas.component';
import { AgendarCitasComponent } from './pages/citas/agendar-citas/agendar-citas.component';
import { HomeComponent } from './pages/home/home.component';
import { MisCitasComponent } from './pages/pacientes/components/mis-citas/mis-citas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'psicologos', component:  MainPsicologosComponent},
    { path: 'paciente', component:  MainPacienteComponent},
    { path: 'paciente/mis-citas', component:  MisCitasComponent },
    { path: 'atender-cita', component:  AtenderCitasComponent},
    { path: 'agendar-cita', component:  AgendarCitasComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
