import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../Models/Paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private apiUrl = 'http://localhost:8080/api/paciente'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo paciente
  addPaciente(paciente: Omit<Paciente, 'codigo'>) {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }
  
  listPacientes(){
    return this.http.get<Paciente[]>(this.apiUrl);
  }
}
