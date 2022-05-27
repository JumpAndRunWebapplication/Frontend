import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegistrationComponent } from './page-registration/page-registration.component';
import { PageMainMenuComponent } from './page-main-menu/page-main-menu.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ElementHeaderComponent } from './element-header/element-header.component';
import { ElementLoginPanelComponent } from './element-login-panel/element-login-panel.component';
import { ElementBodyComponent } from './element-body/element-body.component';
import { ElementRegistrationPanelComponent } from './element-registration-panel/element-registration-panel.component';
import { ElementCanvasComponent } from './element-canvas/element-canvas.component';
import {AuthInterceptor} from "./service/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageRegistrationComponent,
    PageMainMenuComponent,
    ElementHeaderComponent,
    ElementLoginPanelComponent,
    ElementBodyComponent,
    ElementRegistrationPanelComponent,
    ElementCanvasComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
