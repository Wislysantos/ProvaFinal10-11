import { CadastroUsuario } from './cadastro-usuario';
import { Reservas } from './reservas.model';
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
  formData: CadastroUsuario = new CadastroUsuario();

  postCadastroUsuario(){
    return this.http.post(this.baseURL, this.formData)
  }

  putCadastroUsuario(){
    return this.http.put(`${this.baseURL}/${this.formData.clienteID}`, this.formData);
  }

  deleteReservas(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }


}
