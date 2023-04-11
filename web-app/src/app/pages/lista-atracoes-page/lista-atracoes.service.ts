import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaAtracoesService {
  private apiUrl = 'http://localhost:3000/atracoes'

  constructor(private http: HttpClient) { };

  getAllAtracoes(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
