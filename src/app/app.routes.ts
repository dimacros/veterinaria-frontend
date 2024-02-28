import { Routes } from '@angular/router';
import { MainPsicologosComponent } from './pages/psicologos/main-psicologos/main-psicologos.component';
import { MainPacienteComponent } from './pages/pacientes/main-paciente/main-paciente.component';

export const routes: Routes = [
    { path: 'psicologos', component:  MainPsicologosComponent},
    { path: 'paciente', component:  MainPacienteComponent}
];
