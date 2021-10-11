import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TreinosComponent} from "./treinos/treinos.component";

const routes: Routes = [
  {
    path: '',
    component: TreinosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRouterModule {}
