import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import {of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  baseURl = environment.baseURL

  constructor(private httpClient:HttpClient) {}

  public getClientes():Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.httpClient.get<Cliente[]>(this.baseURl);
  }

  create(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.baseURl,cliente,{headers:this.httpHeaders});
  }

  getCliente(id):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURl}/${id}`);
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.baseURl}/${cliente.id}`,cliente,{headers:this.httpHeaders});
  }

  delete(id):Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.baseURl}/${id}`,{headers:this.httpHeaders});
  }
}
