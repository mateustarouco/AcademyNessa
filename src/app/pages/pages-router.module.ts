import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TreinosComponent} from "./treinos/treinos.component";
import {TrainingComponent} from "./training/treinos.component";

const routes: Routes = [
  {
    path: '',
    component: TreinosComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRouterModule {}
