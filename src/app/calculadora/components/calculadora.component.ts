import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa os operadores e números para valores padrão
   * 
   * @return void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adicionar o numero selecionado para o calculo posterior.
   * 
   * @param string numero
   * @return void
   */
  adicionarNumero(numero: string): void {
    if( this.operacao === null ){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * retorna o valor concatenado. Trata o separador decimal
   * 
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso contenha 0 ou null apenas, reinicial o valor:
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    //primeiro dígito é '.', concatena '0' antes:
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //caso '.' seja digitado e já haja um '.', retorna o atual:
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Executa a lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a 
   * operação anterior, e define uma nova operação.
   * 
   * @param string operacao
   * @retun void
   */
  definirOperacao(operacao: string): void {
    //apenas defini a operacao caso nao exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    // caso operacao definida e numero 2 selecionado
    // efetua o calculo
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }


  /**
   * Efetua o calculo de uma operação
   * 
   * @return void
   */
  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }


  /**
   * Retorna o valor a ser exibido na tela da calc
   * 
   * @return string
   */
  get display(): string {
    if (this.resultado !== null){
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
}
