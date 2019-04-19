import { Component, ChangeDetectorRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthenticationService } from "src/app/services/authentication/authentication.service";
import { AuthenticationDetailsService } from "src/app/services/authenticationDetails/authentication-details.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authenticationDetails: AuthenticationDetailsService,
    public authenticationService: AuthenticationService,
    private ref: ChangeDetectorRef
  ) {}

  logout() {
    this.authenticationService.logout();
    this.authenticationDetails.currentUser.email = localStorage.getItem(
      "email"
    );
    this.authenticationDetails.currentUser.access_token = localStorage.getItem(
      "access-token"
    );
    this.ref.detectChanges();
  }
}
