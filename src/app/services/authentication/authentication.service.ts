import { Injectable, ChangeDetectorRef, ApplicationRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/internal/operators/map";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  loading = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ref: ApplicationRef
  ) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(
        "https://uatapi.arrivae.com/auth/sign_in",
        {
          email,
          password
        },
        { observe: "response" }
      )
      .pipe(
        map(user => {
          this.loading = true;
          const accessToken = user.headers.get("access-token");
          // login successful if there's a jwt token in the response
          if (user.body && accessToken) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("access-token", accessToken);
            localStorage.setItem("user", email);
            this.loading = false;
            return true;
          } else {
            this.loading = false;
            return false;
          }
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    localStorage.removeItem("access-token");
    this.ref.tick();
    this.router.navigate(["/user/login"]);
  }
}
