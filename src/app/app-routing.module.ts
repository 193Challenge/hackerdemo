import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'salvamento', loadChildren: './salvamento/salvamento.module#SalvamentoPageModule' },
  { path: 'incendio', loadChildren: './incendio/incendio.module#IncendioPageModule' },
  { path: 'casa/:id', loadChildren: './casa/casa.module#CasaPageModule' },
  { path: 'acidentes', loadChildren: './acidentes/acidentes.module#AcidentesPageModule' },
  { path: 'risco', loadChildren: './risco/risco.module#RiscoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
