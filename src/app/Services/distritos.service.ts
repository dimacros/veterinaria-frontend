import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distrito } from '../Models/Distrito.model';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private apiUrl = 'http://localhost:8080/api/distrito'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo distrito
  addDistrito(distrito: Distrito | any) {
    return this.http.post(this.apiUrl, distrito);
  }

  listDistrito(){
    return this.http.get(this.apiUrl);
  }
}
