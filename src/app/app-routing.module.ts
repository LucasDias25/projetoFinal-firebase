import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CalculadoraRoutes } from "./calculadora";
import { ConversorRoutes } from "./conversor";
import { DashboardRoutes } from "./dashboard";
import { HomeRoutes } from "./home/home-routing.module";
import { JogoDaVelhaRoutes } from "./jogo-da-velha";
import { TarefaRoutes } from "./tarefas";

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppDashboardComponent } from "./components/dashboard";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./shared/guard/auth.guard";


export const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'register-user', component: SignUpComponent },
    { path: 'app-dashboard', component: AppDashboardComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'verify-email-address', component: VerifyEmailComponent },
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