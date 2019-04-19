import { FormBuilder } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./shared/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./shared/footer/footer.component";
import { MatProgressBarModule } from "@angular/material";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { Globals } from "./globals";
import { BrandComponent } from "./brand/brand.component";
import { JwtInterceptor } from "./helpers/jwt.interceptor";
import { ErrorInterceptor } from "./helpers/error.interceptor";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    BrandComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [
    FormBuilder,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
