import { Component, OnInit } from '@angular/core';
import { Atracao } from '../../../../../server/src/models/atracao';
import { ListaAtracoesService } from './lista-atracoes.service';

@Component({
  selector: 'app-lista-atracoes-page',
  templateUrl: './lista-atracoes-page.component.html',
  styleUrls: ['./lista-atracoes-page.component.scss'],
})
export class ListaAtracoesPageComponent implements OnInit {

  constructor(
    private atracoesServico: ListaAtracoesService
  ) {};

  atracoes: Atracao[] = []; 

  ngOnInit(): void {
    this.atracoesServico.getAllAtracoes().subscribe((data: any)=>{
      this.atracoes = data.allAtractions;
    })
  }
}
