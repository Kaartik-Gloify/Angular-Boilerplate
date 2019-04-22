import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/internal/operators/first";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { AuthenticationDetailsService } from "src/app/services/authenticationDetails/authentication-details.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private authenticationDetails: AuthenticationDetailsService,
    private ref: ChangeDetectorRef
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  login() {
    const val = this.loginForm.value;
    console.log(val);
    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        response => {
          if (response) {
            this.initializeCurrentUser();
            this.ref.detectChanges();
            this.router.navigate(["/home"]);
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  initializeCurrentUser() {
    this.authenticationDetails.currentUser.email = localStorage.getItem(
      "email"
    );
    this.authenticationDetails.currentUser.access_token = localStorage.getItem(
      "access-token"
    );
  }

  ngOnInit() {}
}
