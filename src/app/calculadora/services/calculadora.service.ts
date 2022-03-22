/**
 * Serviço responsável por executar as operações 
 * da calculadora 
 * @autor Lucas Dias <lucasfelipedias25@gmail.com>
 * @since 1.0.0
*/ 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Constantespara identificar operações */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma 
   * operação dado 2 numeros,
   * e retorna um número.
   * 
   * Suporta operações de soma, subtração, divisão e multiplicação
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
  */ 

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }

}
