import { CadastroUsuario } from './cadastro-usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) {

  }

  readonly baseURL = 'https://localhost:5001/api/Clientes';
  formDatacas: CadastroUsuario = new CadastroUsuario();
  listCadastro: CadastroUsuario[];

  postCadastroUsuario(){
    return this.http.post(this.baseURL, this.formDatacas)
  }

  putCadastroUsuario(){
    return this.http.put(`${this.baseURL}/${this.formDatacas.clienteID}`, this.formDatacas);
  }

  deleteCadastroUsuario(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshListCadastroUsuario(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.listCadastro = res as CadastroUsuario[]);
  }

  getCadastroUsuario(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }



}
