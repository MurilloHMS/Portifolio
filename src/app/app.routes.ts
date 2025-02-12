import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ControleDeEstoqueProautoComponent } from './pages/controle-de-estoque-proauto/controle-de-estoque-proauto.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projetos/controle-estoque', component: ControleDeEstoqueProautoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
