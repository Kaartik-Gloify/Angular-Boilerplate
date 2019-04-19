import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { PagenotfoundComponent } from "../shared/pagenotfound/pagenotfound.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: "profile",
    component: ProfileComponent,
    pathMatch: "full"
  },
  {
    path: "forgot-password",
    component: ForgotpasswordComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule {}
