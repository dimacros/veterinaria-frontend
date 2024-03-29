import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../../Services/cita.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cita } from '../../../../Models/Cita.model';
import { addDays } from "date-fns";

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrl: './mis-citas.component.css'
})
export class MisCitasComponent implements OnInit {

    visible: boolean = false;
    citas: Cita[] = [];
    selectedCita!: Cita;
    codPaciente!:number;

    constructor(
      private readonly citasService: CitaService,
      private readonly confirmationService: ConfirmationService, 
      private readonly messageService: MessageService,
    ) { }
  
    ngOnInit(): void {
      this.codPaciente = parseInt(localStorage.getItem('codPaciente') || '0') ;
      this.citasService.listCita().subscribe((citas) => {

        if(this.codPaciente != 0){
          this.citas = citas.filter(c => c.paciente.codigo == this.codPaciente);
        } else {
          this.citas = citas;
        }
        
      });
    }

    reprogramarCita(cita: Cita) {
      this.confirmationService.confirm({
        header: 'Reprogramar cita',
        message: '¿Está seguro que desea reprogramar la cita?',
        acceptButtonStyleClass:"p-button-primary p-button-text",
        rejectLabel: 'No',
        rejectButtonStyleClass:"p-button-secondary p-button-text",
        acceptLabel: 'Sí',
        accept: () => {
          this.citasService.reprogramarCita({
            citaId: cita.codigo,
            newReservationDate: addDays(cita.reservationDate, 1)
          }).subscribe((cita) => {
            this.freshCita(cita);
            this.messageService.add({
              severity:'success', 
              summary: 'Cita reprogramada', 
              detail: 'La cita fue reprogramada para el día siguiente.'
            });
          });
        },
      })
    }

    cancelarCita(cita: Cita) {
      this.confirmationService.confirm({
        header: 'Cancelar cita',
        message: '¿Está seguro que desea cancelar la cita?',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectLabel: 'No',
        rejectButtonStyleClass:"p-button-primary p-button-text",
        acceptLabel: 'Sí',
        accept: () => {
          this.citasService.cancelCita(cita.codigo).subscribe((cita) => {
            this.freshCita(cita);
            this.messageService.add({
              severity:'success', 
              summary: 'Cita cancelada', 
              detail: 'La cita ha sido cancelada con éxito'
            });
          });
        },
      })
    }

    private freshCita(cita: Cita) {
      const index = this.citas.findIndex(c => c.codigo === cita.codigo);

      this.citas[index] = cita;
    }

    openCitaDialog(codigo: number){
      this.citasService.getCitaById(codigo).subscribe({
        next: (response) => {
          this.selectedCita = response;
          this.visible = true;
        },
        error: (error) => console.error('Error al registrar el paciente', error)
      });
    }
}
