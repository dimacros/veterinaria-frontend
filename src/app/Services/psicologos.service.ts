import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Psicologo } from '../Models/Psicologo.model';

@Injectable({
  providedIn: 'root'
})
export class PsicologosService {

  private apiUrl = 'http://localhost:8080/api/psicologo'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo psicólogo
  addPsicologo(psicologo: Omit<Psicologo, 'codigo'>) {
    return this.http.post<Psicologo>(this.apiUrl, psicologo);
  }

  listPsicologos(){
    return this.http.get<Psicologo[]>(this.apiUrl);
  }
}
