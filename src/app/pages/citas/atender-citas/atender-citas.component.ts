import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../Services/cita.service';
import { Cita } from '../../../Models/Cita.model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrl: './atender-citas.component.css'
})
export class AtenderCitasComponent implements OnInit {
  citas: any[] = [];
  visible: boolean = false;
  selectedCita!: Cita;
  isEditDialog: boolean = false;

  constructor(
    private readonly citasService: CitaService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.cargarCitas();
  }

  openCitaDialog(codigo: number, isEditDialog: boolean ){
    this.citasService.getCitaById(codigo).subscribe({
      next: (response) => {
        this.selectedCita = response;
        this.isEditDialog = isEditDialog;
        this.visible = true;
      },
      error: (error) => console.error('Error al registrar el paciente', error)
    });
  }

  cargarCitas() {
    this.citasService.listCita().subscribe((citas) => {
      this.citas = citas.map(cita => {
        const [hours, minutes] = cita.hora.split(':');
        const horaCita = new Date(cita.fecha);

        horaCita.setHours(Number(hours));
        horaCita.setMinutes(Number(minutes));

        return {
          ...cita,
          horaCita,
        };
      });
    });
  }

  updateAtencion() {
    if(this.isEditDialog){
      this.confirmationService.confirm({
        header: 'Finalizar Atención',
        message: '¿Está seguro que desea finalizar atención?',
        acceptButtonStyleClass:"p-button-primary p-button-text",
        rejectLabel: 'No',
        rejectButtonStyleClass:"p-button-secondary p-button-text",
        acceptLabel: 'Sí',
        accept: () => {
          this.selectedCita.estado = 'ATENDIDO';
          this.citasService.updateCita(this.selectedCita).subscribe({
            next: (response) => {
              this.visible = false;
              this.cargarCitas();
              this.messageService.add({
                severity:'success', 
                summary: 'Cita Atendida', 
                detail: 'La cita fue atendida correctamente'
              });
            },
            error: (error) => this.messageService.add({
              severity:'error', 
              summary: 'Error al Atender', 
              detail: 'Error a nivel del servidor para atender la cita'
            })
          })
        }
        ,
      })
    }
  }
}
