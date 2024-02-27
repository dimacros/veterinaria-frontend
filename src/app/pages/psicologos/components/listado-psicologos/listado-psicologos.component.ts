import { Component } from '@angular/core';
import { Psicologo } from '../../../../Models/Psicologo.model';

@Component({
  selector: 'app-listado-psicologos',
  templateUrl: './listado-psicologos.component.html',
  styleUrl: './listado-psicologos.component.css'
})
export class ListadoPsicologosComponent {
  psicologos: Psicologo[] = []
}
