import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsteirasComponent } from './pages/esteiras/esteiras.component';

const routes: Routes = [
  {path: '', component: EsteirasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
