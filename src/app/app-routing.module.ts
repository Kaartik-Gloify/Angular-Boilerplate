// tslint:disable-next-line: quotemark
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { BrandComponent } from "./brand/brand.component";
import { LoginComponent } from "./user/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: BrandComponent,
    pathMatch: "full"
  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutusComponent,
    pathMatch: "full"
  },
  {
    path: "brand",
    component: BrandComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagenotfoundComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
