import { Injectable } from '@angular/core';
import { Cita } from '../Models/Cita.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) { } // Inyectar HttpClient
  
  // Método para añadir un nuevo especialidad
  addCita(cita: Cita | any) {
    return this.http.post(this.apiUrl, cita);
  }

  listCita(){
    return this.http.get<Cita[]>(this.apiUrl);
  }

  updateCita(cita: Cita | any){
    return this.http.put(this.apiUrl, cita);
  }
}
