import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../Services/cita.service';

@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrl: './atender-citas.component.css'
})
export class AtenderCitasComponent implements OnInit {
    citas: any[] = [];

    constructor(
      private readonly citasService: CitaService,
    ) { }
  
    ngOnInit(): void {
      this.citasService.listCita().subscribe((citas) => {
        this.citas = citas.map(cita => {
          const [hours, minutes] = cita.hora.split(':');
          const horaCita = new Date(cita.fecha);

          horaCita.setHours(Number(hours));
          horaCita.setMinutes(Number(minutes));
          console.log(horaCita);
          return {
            ...cita,
            horaCita,
          };
        });
      });
    }
}
