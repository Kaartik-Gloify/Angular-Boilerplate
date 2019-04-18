import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthenticationDetailsService {
  currentUser;
  constructor() {}

  getUserDetails() {
    this.currentUser.email = localStorage.getItem("email");
    this.currentUser.access_token = localStorage.getItem("access-token");
    console.log(this.currentUser);
    return this.currentUser;
  }
}
