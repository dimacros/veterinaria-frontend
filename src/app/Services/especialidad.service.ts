import { Injectable } from '@angular/core';
import { Especialidad } from '../Models/Especialidad.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private apiUrl = 'http://localhost:8080/api/especialidad'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo especialidad
  addEspecialidad(especialidad: Especialidad | any) {
    return this.http.post(this.apiUrl, especialidad);
  }

  listEspecialidad(){
    return this.http.get(this.apiUrl);
  }
}
