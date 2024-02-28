import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPsicologosComponent } from './main-psicologos/main-psicologos.component';
import { ListadoPsicologosComponent } from './components/listado-psicologos/listado-psicologos.component';
import { SharedModule } from '../../shared/shared.module';
import { RegistrarPsicologosComponent } from './components/registrar-psicologos/registrar-psicologos.component';
import { HttpClientModule } from '@angular/common/http';
import { PsicologosService } from '../../Services/psicologos.service';

@NgModule({
  declarations: [
    MainPsicologosComponent,
    ListadoPsicologosComponent,
    RegistrarPsicologosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    MainPsicologosComponent
  ],
  providers : [
    PsicologosService
  ]
})
export class PsicologosModule { }
