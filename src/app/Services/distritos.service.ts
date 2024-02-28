import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distrito } from '../Models/Distrito.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritosService {

  private apiUrl = 'http://localhost:8080/api/distrito'; // URL del endpoint

  constructor(private http: HttpClient) { } // Inyectar HttpClient

  // Método para añadir un nuevo distrito
  addDistrito(distrito: Distrito | any): Observable<Distrito>{
    return this.http.post<Distrito>(this.apiUrl, distrito);
  }

  listDistrito(): Observable<Distrito[]>{
    return this.http.get<Distrito[]>(this.apiUrl);
  }
}
