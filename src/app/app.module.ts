import { NgModule } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PagesModule} from "./pages/pages.module";
import {MatIconRegistry} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        PagesModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    /**
     * @Icones
     * */

    /***************************************Dashboard*********************************************  */
    this.matIconRegistry.addSvgIcon(
      "back",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/back.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "play",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/play.svg")
    );
  }
}
