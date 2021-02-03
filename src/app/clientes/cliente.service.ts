import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient:HttpClient) {}

  public getClientes():Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint,cliente,{headers:this.httpHeaders});
  }

  getCliente(id):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers:this.httpHeaders});
  }

  delete(id):Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }
}
