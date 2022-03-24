import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';
import { Observable } from 'rxjs'

declare var google: any; //global genérica

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * permitindo a integracao da API com o Angular
   * 
   * @return void
   */
  init(): void {
    if (typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      google.charts.setOnLoadCallback( () => {this.exibirGraficos()} );
    }
  }

  /**
   * Método chamado assim que a API de graficos é inicializada.
   * Responsável por chamar os métodos geradores de gráficos
   * 
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    this.exibirBarChart();
  }

  /**
   * Exibe o gráfico Pie Chart
   * 
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico #D Pie Chart
   * 
   * @return void
   */
  exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();
  
    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut Chart
   * 
   * @return void
   */
  exibirDonutChart(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();
  
    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart
   * 
   * @return void
   */
  exibirBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Line Chart
   * 
   * @return void
   */
  exibirLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Column Chart
   * 
   * @return void
   */
  exibirColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }


  /**
   * Cria e retorna o objeto DataTable da API de gráficos, 
   * responsável por definir os dados do gráfico
   * 
   * @return any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem título e tamanho
   * 
   * @return any
   */
   obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }

}
