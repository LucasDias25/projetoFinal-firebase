import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalculadoraRoutes } from "./calculadora";
import { ConversorRoutes } from "./conversor";
import { DashboardRoutes } from "./dashboard";
import { HomeRoutes } from "./home/home-routing.module";
import { JogoDaVelhaRoutes } from "./jogo-da-velha";
import { TarefaRoutes } from "./tarefas";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes,
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}