import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreinosComponent} from "./treinos/treinos.component";
import {PagesRouterModule} from "./pages-router.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {TrainingComponent} from "./training/treinos.component";


@NgModule({
  declarations: [
    TreinosComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    PagesRouterModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PagesModule { }
