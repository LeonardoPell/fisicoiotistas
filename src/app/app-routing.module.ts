import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsteirasComponent } from './pages/esteiras/esteiras.component';
import { BotoesComponent } from './pages/botoes/botoes.component';

const routes: Routes = [
  {path: '', component: EsteirasComponent},
  {path: 'botoes', component: BotoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
