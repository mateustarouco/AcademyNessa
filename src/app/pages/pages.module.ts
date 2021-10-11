import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreinosComponent} from "./treinos/treinos.component";
import {PagesRouterModule} from "./pages-router.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    TreinosComponent
  ],
  imports: [
    CommonModule,
    PagesRouterModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class PagesModule { }
