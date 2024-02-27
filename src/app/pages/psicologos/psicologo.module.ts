import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPsicologosComponent } from './main-psicologos/main-psicologos.component';
import { ListadoPsicologosComponent } from './components/listado-psicologos/listado-psicologos.component';
import { VisualizarPsicologosComponent } from './components/visualizar-psicologos/visualizar-psicologos.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    MainPsicologosComponent,
    ListadoPsicologosComponent,
    VisualizarPsicologosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainPsicologosComponent
  ]
})
export class PsicologosModule { }
