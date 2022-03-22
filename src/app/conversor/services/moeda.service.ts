import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() {}

  private moedasObj = [ //http://fixer.io
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "BRL", "descricao": "Real Brasileiro"},
    {"sigla": "USD", "descricao": "Dolar dos Estados Unidos"},
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];
  
    for ( let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      //pega 2 objetos, um vazio e um ocupado, e copia os dados do ocupado para o vazio - para todo array
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda); //adiciona a moeda na listagem de moedas
    }
      
    return this.moedas;
  }
}