import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamento } from '../interfaces/esteira.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {
  private baseUrl = 'http://localhost:3000/equipamentos';

  constructor(private http: HttpClient) { }

  getEquipamentos(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.baseUrl);
  }

  atualizarEquipamento(id: number, equipamento: Equipamento): Observable<Equipamento> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<Equipamento>(url, equipamento);
  }

  getEquipamentosOcupados(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.baseUrl+'?cor=vermelha');
  }

  getEquipamentosLivres(): Observable<Equipamento[]> {
    return this.http.get<Equipamento[]>(this.baseUrl+'?cor=verde');
  }
  
}