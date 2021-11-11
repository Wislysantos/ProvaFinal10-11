import { LoginComponent } from './../login/login.component';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  [x: string]: any;

  private usuarioAutenticado: boolean = false;
  private adminAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>()

  mostrar: boolean = false;

  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario){

    if (usuario.email == 'admin' && usuario.senha== '123'){
      this.adminAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

    } else if (usuario.email == 'usuario@email.com' && usuario.senha== '123456'){

      this.usuarioAutenticado = true;
      
      this.router.navigate(['/finalizar-reserva'])
    } else {
      this.usuarioAutenticado = false;
      this.adminAutenticado = false;

      alert("Email ou Senha errado")

      this.mostrarMenuEmitter.emit(false);


    }
  }

  adminEstaAutenticado(){
    return this.adminAutenticado;
  }

}
