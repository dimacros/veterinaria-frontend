import { Injectable } from '@angular/core';
import { AddCita, Cita } from '../Models/Cita.model';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs';
import { format, parse } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) { } // Inyectar HttpClient
  
  // Método para añadir un nuevo especialidad
  addCita(cita: AddCita) {
    return this.http.post<Cita>(this.apiUrl, cita).pipe(
      map(this.citaFormatter)
    );
  }

  getCitaById(citaId: number) {
    return this.http.get<Cita>(`${this.apiUrl}/${citaId}`).pipe(
      map(this.citaFormatter)
    );
  }

  reprogramarCita(params: {
    citaId: number, 
    newReservationDate: Date,
  }) {
    const { citaId, newReservationDate } = params;

    return this.getCitaById(citaId).pipe(
      switchMap(cita => this.updateCita({
        ...cita, 
        reservationDate: newReservationDate,
        fecha: format(newReservationDate, 'yyyy-MM-dd'), 
        hora: format(newReservationDate, 'HH:mm')
      }))
    );
  }

  cancelCita(citaId: number) {
    return this.getCitaById(citaId).pipe(
      switchMap(cita => this.updateCita({...cita, estado: 'CANCELADO' }))
    );
  }

  listCita(){
    return this.http.get<Required<Cita[]>>(this.apiUrl).pipe(
      map(citas => citas.map(this.citaFormatter))
    );
  }

  updateCita(cita: Cita){
    return this.http.put<Cita>(this.apiUrl, cita).pipe(
      map(this.citaFormatter)
    );
  }

  private citaFormatter(cita: Cita) {
    const reservationDate = parse(
      `${cita.fecha} ${cita.hora}`, 
      'yyyy-MM-dd HH:mm', 
      new Date()
    );
      console.log(cita, 'reservationDate', reservationDate);
    cita.reservationDate = reservationDate;

    return cita;
  }
}
