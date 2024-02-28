import { Injectable } from '@angular/core';
import { Especialidad } from '../Models/Especialidad.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  private apiUrl = 'http://localhost:8080/api/especialidad'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo especialidad
  addEspecialidad(especialidad: Especialidad | any): Observable<Especialidad> {
    return this.http.post<Especialidad>(this.apiUrl, especialidad);
  }

  listEspecialidad(): Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(this.apiUrl);
  }
}
