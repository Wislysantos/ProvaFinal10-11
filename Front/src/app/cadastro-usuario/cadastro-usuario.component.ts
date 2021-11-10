import { preco } from './../../assets/global';
import { Component, OnInit, Input } from '@angular/core';
import * as myGlobals from '../../assets/global';
import { ReservasService } from '../shared/reservas.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {



  valorTotalReserva = 0;

  constructor(public service: ReservasService ) { }

  ngOnInit(): void {

  }



}
