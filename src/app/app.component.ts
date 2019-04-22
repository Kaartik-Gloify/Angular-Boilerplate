import { Component, HostBinding } from "@angular/core";
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";
import { AuthenticationService } from "./services/authentication/authentication.service";
import { OverlayContainer } from "@angular/cdk/overlay";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "boilerplate-angular-jwt";
  loading = false;
  @HostBinding("class") componentCssClass;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
    this.onSetTheme("dark-theme");
  }
  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
