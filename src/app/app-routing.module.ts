import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsteirasComponent } from './pages/esteiras/esteiras.component';
import { BotoesComponent } from './pages/botoes/botoes.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'esteiras', component: EsteirasComponent},
  {path: 'botoes', component: BotoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
